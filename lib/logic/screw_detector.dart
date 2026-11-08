import 'dart:math' as math;
import 'dart:typed_data';

/// Una vite trovata in una foto. Coordinate normalizzate 0..1 sull'immagine.
class FoundScrew {
  final double x;
  final double y;
  final double r; // raggio, frazione del lato minore
  final double score;
  final bool blue;

  const FoundScrew(this.x, this.y, this.r, this.score, {this.blue = false});
}

/// Input per l'isolate: pixel RGBA già ridotti (lato maggiore ~480 px).
class DetectInput {
  final Uint8List rgba;
  final int width;
  final int height;
  const DetectInput(this.rgba, this.width, this.height);
}

List<FoundScrew> detectScrewsIsolate(DetectInput i) => detectScrews(i.rgba, i.width, i.height);

/// Cerca teste di vite: bordi circolari (trasformata di Hough sul gradiente),
/// poi verifica colore (azzurrata o acciaio) e la fessura scura che attraversa il centro.
List<FoundScrew> detectScrews(Uint8List rgba, int w, int h, {int maxScrews = 30}) {
  final n = w * h;
  if (n == 0 || rgba.length < n * 4) return const [];
  final gray = Float32List(n);
  final hue = Float32List(n);
  final sat = Float32List(n);
  for (var i = 0; i < n; i++) {
    final r = rgba[i * 4] / 255.0, g = rgba[i * 4 + 1] / 255.0, b = rgba[i * 4 + 2] / 255.0;
    gray[i] = 0.299 * r + 0.587 * g + 0.114 * b;
    final mx = math.max(r, math.max(g, b)), mn = math.min(r, math.min(g, b));
    final d = mx - mn + 1e-6;
    double hh;
    if (mx == r) {
      hh = ((g - b) / d) % 6;
    } else if (mx == g) {
      hh = (b - r) / d + 2;
    } else {
      hh = (r - g) / d + 4;
    }
    hh *= 60;
    if (hh < 0) hh += 360;
    hue[i] = hh;
    sat[i] = mx > 0 ? (mx - mn) / (mx + 1e-6) : 0;
  }

  // gradiente di Sobel
  final gx = Float32List(n), gy = Float32List(n), mag = Float32List(n);
  for (var y = 1; y < h - 1; y++) {
    for (var x = 1; x < w - 1; x++) {
      final i = y * w + x;
      final a = gray[i - w - 1], b = gray[i - w], c = gray[i - w + 1];
      final d = gray[i - 1], f = gray[i + 1];
      final g = gray[i + w - 1], hh = gray[i + w], k = gray[i + w + 1];
      final sx = (c + 2 * f + k) - (a + 2 * d + g);
      final sy = (g + 2 * hh + k) - (a + 2 * b + c);
      gx[i] = sx;
      gy[i] = sy;
      mag[i] = math.sqrt(sx * sx + sy * sy);
    }
  }
  // soglia: 90° percentile (stimato su campione) e almeno 0.15
  final sample = <double>[];
  for (var i = 0; i < n; i += 7) {
    sample.add(mag[i]);
  }
  sample.sort();
  final th = math.max(0.15, sample[(sample.length * 0.9).floor().clamp(0, sample.length - 1)]);
  final ex = <int>[], ey = <int>[];
  final nx = <double>[], ny = <double>[];
  for (var y = 1; y < h - 1; y++) {
    for (var x = 1; x < w - 1; x++) {
      final i = y * w + x;
      if (mag[i] > th) {
        ex.add(x);
        ey.add(y);
        nx.add(gx[i] / mag[i]);
        ny.add(gy[i] / mag[i]);
      }
    }
  }

  final dmin = math.min(w, h);
  final rmin = math.max(3, (dmin * 0.012).round());
  final rmax = math.max(rmin + 2, (dmin * 0.11).round());
  final radii = <int>[];
  for (var r = rmin; r <= rmax;) {
    radii.add(r);
    r = math.max(r + 1, (r * 1.12).round());
  }

  final cands = <_Cand>[];
  final acc = Float32List(n);
  final acc2 = Float32List(n);
  for (final r in radii) {
    acc.fillRange(0, n, 0);
    for (var k = 0; k < ex.length; k++) {
      for (final sgn in const [-1, 1]) {
        final cx = (ex[k] + sgn * nx[k] * r).round();
        final cy = (ey[k] + sgn * ny[k] * r).round();
        if (cx >= 0 && cx < w && cy >= 0 && cy < h) acc[cy * w + cx] += 1;
      }
    }
    acc2.fillRange(0, n, 0);
    for (var y = 1; y < h - 1; y++) {
      for (var x = 1; x < w - 1; x++) {
        final i = y * w + x;
        acc2[i] = acc[i - w - 1] + acc[i - w] + acc[i - w + 1] + acc[i - 1] + acc[i] + acc[i + 1] +
            acc[i + w - 1] + acc[i + w] + acc[i + w + 1];
      }
    }
    final norm = 1 / (2 * math.pi * r);
    for (var y = 1; y < h - 1; y++) {
      for (var x = 1; x < w - 1; x++) {
        final v = acc2[y * w + x] * norm;
        if (v <= 0.55) continue;
        // massimo locale nella finestra di raggio r
        var isMax = true;
        final y0 = math.max(0, y - r), y1 = math.min(h - 1, y + r);
        final x0 = math.max(0, x - r), x1 = math.min(w - 1, x + r);
        for (var yy = y0; yy <= y1 && isMax; yy++) {
          for (var xx = x0; xx <= x1; xx++) {
            if (acc2[yy * w + xx] * norm > v) {
              isMax = false;
              break;
            }
          }
        }
        if (isMax) cands.add(_Cand(v, x, y, r));
      }
    }
  }
  cands.sort((a, b) => b.v.compareTo(a.v));

  final out = <FoundScrew>[];
  for (final c in cands.take(400)) {
    final r = c.r;
    // ammessa una piccola parte fuori dall'immagine
    if (c.x - r * 0.7 < 0 || c.y - r * 0.7 < 0 || c.x + r * 0.7 >= w || c.y + r * 0.7 >= h) continue;
    var cnt = 0, blue = 0, red = 0, gold = 0;
    var sum = 0.0, sum2 = 0.0, sumS = 0.0;
    final r08 = 0.8 * r;
    for (var yy = (c.y - r08).floor(); yy <= (c.y + r08).ceil(); yy++) {
      for (var xx = (c.x - r08).floor(); xx <= (c.x + r08).ceil(); xx++) {
        if (xx < 0 || yy < 0 || xx >= w || yy >= h) continue;
        final dx = xx - c.x, dy = yy - c.y;
        if (dx * dx + dy * dy > r08 * r08) continue;
        final i = yy * w + xx;
        cnt++;
        final hh = hue[i], ss = sat[i];
        if (hh > 195 && hh < 255 && ss > 0.3) blue++;
        if ((hh < 20 || hh > 320) && ss > 0.35) red++;
        if (hh > 25 && hh < 60 && ss > 0.3) gold++;
        sum += gray[i];
        sum2 += gray[i] * gray[i];
        sumS += ss;
      }
    }
    if (cnt < 8) continue;
    final blueF = blue / cnt, redF = red / cnt, goldF = gold / cnt;
    if (redF > 0.25 || goldF > 0.35) continue; // rubini o ottone
    final mean = sum / cnt;
    final sd = math.sqrt(math.max(0, sum2 / cnt - mean * mean)) + 0.02;
    final meanS = sumS / cnt;
    // fessura: la linea più scura che passa dal centro
    final vals = List<double>.filled(18, 0);
    final steps = math.max(7, (1.5 * r).round());
    for (var k = 0; k < 18; k++) {
      final t = k * math.pi / 18;
      var s = 0.0, m = 0;
      for (var q = 0; q < steps; q++) {
        final l = -0.75 * r + 1.5 * r * q / (steps - 1);
        final px = (c.x + l * math.cos(t)).round(), py = (c.y + l * math.sin(t)).round();
        if (px < 0 || py < 0 || px >= w || py >= h) continue;
        s += gray[py * w + px];
        m++;
      }
      vals[k] = m > 0 ? s / m : mean;
    }
    var kmin = 0;
    for (var k = 1; k < 18; k++) {
      if (vals[k] < vals[kmin]) kmin = k;
    }
    final slot = (vals[(kmin + 9) % 18] - vals[kmin]) / sd;
    final isBlue = blueF > 0.35;
    final isSteel = meanS < 0.22;
    if (!isBlue && !isSteel) continue;
    if (isBlue) {
      if (c.v < 0.9) continue;
    } else {
      if (c.v < 1.0 || slot < 1.1 || c.v * slot < 1.55) continue;
    }
    final score = c.v * 0.6 + math.min(slot, 3) / 3 * 0.4 + (isBlue ? 0.2 : 0);
    out.add(FoundScrew(c.x / w, c.y / h, r / dmin, score, blue: isBlue));
  }

  // soppressione dei doppioni
  out.sort((a, b) => b.score.compareTo(a.score));
  final keep = <FoundScrew>[];
  for (final o in out) {
    var ok = true;
    for (final k in keep) {
      final dx = (o.x - k.x) * w, dy = (o.y - k.y) * h;
      if (math.sqrt(dx * dx + dy * dy) <= math.max(o.r, k.r) * dmin * 0.9) {
        ok = false;
        break;
      }
    }
    if (ok) keep.add(o);
    if (keep.length >= maxScrews) break;
  }
  // ordine di lettura: dall'alto in basso, da sinistra a destra (a fasce)
  keep.sort((a, b) {
    final ba = (a.y * 6).floor(), bb = (b.y * 6).floor();
    if (ba != bb) return ba.compareTo(bb);
    return a.x.compareTo(b.x);
  });
  return keep;
}

class _Cand {
  final double v;
  final int x, y, r;
  const _Cand(this.v, this.x, this.y, this.r);
}
