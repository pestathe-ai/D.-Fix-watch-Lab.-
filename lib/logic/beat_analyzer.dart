import 'dart:math' as math;
import 'dart:typed_data';

/// Frequenze standard dei movimenti meccanici (alternanze/ora).
const List<int> standardBph = [14400, 18000, 19800, 21600, 25200, 28800, 36000];

class BeatResult {
  /// Frequenza riconosciuta (alternanze/ora), tra quelle standard.
  final int bph;

  /// Marcia stimata in secondi al giorno (+ avanza, - ritarda).
  final double rateSecPerDay;

  /// Errore di battuta stimato in millisecondi.
  final double beatErrorMs;

  /// Quota dei tic attesi effettivamente riconosciuti (0..1).
  final double quality;

  /// Tic riconosciuti.
  final int ticks;

  const BeatResult({
    required this.bph,
    required this.rateSecPerDay,
    required this.beatErrorMs,
    required this.quality,
    required this.ticks,
  });

  /// Sotto questa qualità i numeri non sono affidabili.
  bool get reliable => quality >= 0.7 && ticks >= 20;

  /// Vibrazioni al secondo (Hz), es. 28800 → 4 Hz.
  double get hz => bph / 7200.0;
}

/// Converte byte PCM 16 bit little-endian in campioni.
Int16List pcmBytesToSamples(Uint8List bytes) {
  final n = bytes.length ~/ 2;
  final out = Int16List(n);
  final bd = ByteData.sublistView(bytes);
  for (var i = 0; i < n; i++) {
    out[i] = bd.getInt16(i * 2, Endian.little);
  }
  return out;
}

/// Analizza il ticchettio di un orologio registrato dal microfono.
/// Restituisce null se il segnale è troppo corto o vuoto.
BeatResult? analyzeBeats(List<num> samples, int sampleRate) {
  final w = math.max(1, sampleRate ~/ 1000); // ~1 ms per finestra
  final binMs = w * 1000.0 / sampleRate;
  final nb = samples.length ~/ w;
  if (nb < 3000) return null; // meno di ~3 secondi

  // Inviluppo: massimo assoluto per finestra da ~1 ms.
  final env = Float64List(nb);
  for (var b = 0; b < nb; b++) {
    var m = 0.0;
    final base = b * w;
    for (var k = 0; k < w; k++) {
      final v = samples[base + k].abs().toDouble();
      if (v > m) m = v;
    }
    env[b] = m;
  }

  // Inviluppo allargato (±4 ms) per l'autocorrelazione: tollera l'errore di battuta.
  final sm = Float64List(nb);
  for (var i = 0; i < nb; i++) {
    var m = 0.0;
    final a = math.max(0, i - 4);
    final z = math.min(nb - 1, i + 4);
    for (var j = a; j <= z; j++) {
      if (env[j] > m) m = env[j];
    }
    sm[i] = m;
  }
  var mean = 0.0;
  for (final v in sm) {
    mean += v;
  }
  mean /= nb;
  final e = Float64List(nb);
  for (var i = 0; i < nb; i++) {
    e[i] = sm[i] - mean;
  }

  double ac(double lagMs) {
    final l0 = (lagMs / binMs).round();
    var best = -double.infinity;
    for (var l = l0 - 4; l <= l0 + 4; l++) {
      if (l <= 0 || l >= nb) continue;
      var s = 0.0;
      for (var i = 0; i + l < nb; i++) {
        s += e[i] * e[i + l];
      }
      s /= (nb - l);
      if (s > best) best = s;
    }
    return best;
  }

  final scores = <int, double>{};
  for (final s in standardBph) {
    scores[s] = ac(3600000.0 / s);
  }
  final mx = scores.values.reduce(math.max);
  if (mx <= 0) return null;
  // La frequenza più alta che correla bene: i multipli del periodo correlano anch'essi.
  final bph = standardBph.where((s) => scores[s]! >= 0.75 * mx).reduce(math.max);
  final nom = 3600000.0 / bph;

  // Soglia adattiva tra rumore di fondo e picchi.
  final sorted = Float64List.fromList(env)..sort();
  final floor = sorted[nb ~/ 2];
  final peak = sorted[(nb * 0.995).floor().clamp(0, nb - 1)];
  if (peak <= floor) return null;
  final th = floor + 0.35 * (peak - floor);

  final onsets = <double>[];
  var last = -1000000000;
  for (var i = 0; i < nb; i++) {
    if (env[i] > th && (i - last) * binMs >= nom * 0.6) {
      var j = 0;
      final base = i * w;
      for (var k = 0; k < w; k++) {
        if (samples[base + k].abs() > th) {
          j = k;
          break;
        }
      }
      onsets.add((base + j) * 1000.0 / sampleRate);
      last = i;
    }
  }
  if (onsets.length < 10) return null;

  // Adattamento a griglia regolare (con offset per i tic pari/dispari) scartando i falsi tic.
  var idx = onsets.map((o) => ((o - onsets.first) / nom).roundToDouble()).toList();
  var keep = List<bool>.filled(onsets.length, true);
  var p = _fit(idx, onsets, keep);
  for (var it = 0; it < 4; it++) {
    final slope = p[0];
    final icpt = p[1];
    idx = onsets.map((o) => ((o - icpt) / slope).roundToDouble()).toList();
    final newKeep = List<bool>.generate(onsets.length, (k) {
      final par = idx[k] % 2 == 0 ? 0.0 : 1.0;
      final res = onsets[k] - (p[0] * idx[k] + p[1] + p[2] * par);
      return res.abs() < 0.08 * nom;
    });
    if (newKeep.where((b) => b).length < 10) break;
    keep = newKeep;
    p = _fit(idx, onsets, keep);
  }

  final kept = keep.where((b) => b).length;
  final expected = (onsets.last - onsets.first) / nom + 1;
  final rate = (nom / p[0] - 1) * 86400;
  return BeatResult(
    bph: bph,
    rateSecPerDay: rate,
    beatErrorMs: p[2].abs(),
    quality: (kept / expected).clamp(0.0, 1.0),
    ticks: kept,
  );
}

/// Minimi quadrati: onset = a*idx + b + c*parità. Restituisce [a, b, c].
List<double> _fit(List<double> idx, List<double> ons, List<bool> keep) {
  // Matrice normale 3x3.
  final m = List.generate(3, (_) => List<double>.filled(3, 0));
  final v = List<double>.filled(3, 0);
  for (var k = 0; k < ons.length; k++) {
    if (!keep[k]) continue;
    final row = [idx[k], 1.0, idx[k] % 2 == 0 ? 0.0 : 1.0];
    for (var a = 0; a < 3; a++) {
      v[a] += row[a] * ons[k];
      for (var b = 0; b < 3; b++) {
        m[a][b] += row[a] * row[b];
      }
    }
  }
  return _solve3(m, v);
}

List<double> _solve3(List<List<double>> m, List<double> v) {
  final a = [for (var i = 0; i < 3; i++) [...m[i], v[i]]];
  for (var c = 0; c < 3; c++) {
    var piv = c;
    for (var r = c + 1; r < 3; r++) {
      if (a[r][c].abs() > a[piv][c].abs()) piv = r;
    }
    final tmp = a[c];
    a[c] = a[piv];
    a[piv] = tmp;
    if (a[c][c].abs() < 1e-12) {
      a[c][c] = 1e-12;
    }
    for (var r = 0; r < 3; r++) {
      if (r == c) continue;
      final f = a[r][c] / a[c][c];
      for (var k = c; k < 4; k++) {
        a[r][k] -= f * a[c][k];
      }
    }
  }
  return [for (var i = 0; i < 3; i++) a[i][3] / a[i][i]];
}

/// Diametro in mm → linee (''').
double mmToLignes(double mm) => mm / 2.2558;
