import '../data/calibers.dart';

/// Un calibro candidato riconosciuto dalle scritte incise.
class CaliberGuess {
  final Caliber caliber;
  final double score; // 0..1
  final List<String> why;
  final String source; // 'scritte', 'AI', 'rubini'

  const CaliberGuess(this.caliber, this.score, this.why, {this.source = 'scritte'});
}

class EngravingInfo {
  final List<CaliberGuess> guesses;
  final int? jewels;
  final bool? automatic; // "AUTOMATIC" letto
  final String text;
  const EngravingInfo(this.guesses, this.jewels, this.automatic, this.text);
}

const _roman = {
  'XV': 15, 'XVI': 16, 'XVII': 17, 'XVIII': 18, 'XIX': 19, 'XX': 20, 'XXI': 21, 'XXII': 22,
  'XXIII': 23, 'XXIV': 24, 'XXV': 25, 'XXVI': 26, 'XXVII': 27, 'XXVIII': 28, 'XXIX': 29, 'XXX': 30,
};

/// Normalizza: maiuscole, senza spazi/trattini/punti.
String normEngraving(String s) => s.toUpperCase().replaceAll(RegExp(r'[\s\-–_.·/]'), '');

/// Varianti dovute agli errori tipici dell'OCR su metallo inciso.
Set<String> _variants(String token) {
  final out = <String>{token};
  final digitsLike = token
      .replaceAll('O', '0')
      .replaceAll('Q', '0')
      .replaceAll('I', '1')
      .replaceAll('L', '1')
      .replaceAll('Z', '2')
      .replaceAll('B', '8')
      .replaceAll('G', '6')
      .replaceAll('S', '5');
  out.add(digitsLike);
  // nei codici tipo NH35 / SW200 le prime lettere restano lettere
  if (token.length > 2) {
    final head = token.substring(0, 2);
    out.add(head + digitsLike.substring(2));
  }
  return out;
}

/// Riconosce il calibro dal testo letto sul movimento.
EngravingInfo matchEngravings(String rawText) {
  final text = rawText.toUpperCase();
  final words = text.split(RegExp(r'\s+')).where((w) => w.isNotEmpty).toList();
  // token singoli e coppie unite (es. "SW 200-1" -> "SW2001")
  final tokens = <String>{};
  for (var i = 0; i < words.length; i++) {
    final a = normEngraving(words[i]);
    if (a.isNotEmpty) tokens.addAll(_variants(a));
    if (i + 1 < words.length) {
      tokens.addAll(_variants(normEngraving(words[i] + words[i + 1])));
    }
  }
  final joined = normEngraving(text);

  final guesses = <CaliberGuess>[];
  for (final c in calibers) {
    if (c.generic) continue;
    var best = 0.0;
    final why = <String>[];
    for (final e in c.engravings) {
      final eN = normEngraving(e);
      if (tokens.contains(eN)) {
        final sc = eN.length >= 5 ? 1.0 : (eN.length == 4 ? 0.85 : 0.6);
        if (sc > best) best = sc;
        why.add('letto "$e"');
      } else if (eN.length >= 4 && tokens.any((t) => t.startsWith(eN) && t.length <= eN.length + 2)) {
        if (0.75 > best) best = 0.75;
        why.add('letto "$e…"');
      } else if (eN.length >= 5 && joined.contains(eN)) {
        if (0.7 > best) best = 0.7;
        why.add('trovato "$e" nel testo');
      }
    }
    if (best > 0) guesses.add(CaliberGuess(c, best, why.toSet().toList()));
  }

  // rubini: "25 JEWELS", "25 J", "XXV JEWELS", "25 RUBIS", "25 STEINE"
  int? jewels;
  final jm = RegExp(r'(\d{2})\s*(JEWELS?|JEWEL|RUBIS|RUBINS?|STEINE|STONES|J\b)').firstMatch(text);
  if (jm != null) jewels = int.tryParse(jm.group(1)!);
  if (jewels == null) {
    final rm = RegExp(r'\b(X{1,3}(?:IX|IV|V?I{0,3}))\s*(JEWELS?|RUBIS|RUBINS?|STEINE)').firstMatch(text);
    if (rm != null) jewels = _roman[rm.group(1)];
  }
  final automatic = text.contains('AUTOMATIC') || text.contains('AUTOMATIQUE') || text.contains('AUTOMATICO')
      ? true
      : null;

  // i rubini rafforzano o indeboliscono i candidati
  for (var i = 0; i < guesses.length; i++) {
    final g = guesses[i];
    if (jewels != null && g.caliber.jewels != null) {
      final ok = (g.caliber.jewels! - jewels).abs() <= 1;
      guesses[i] = CaliberGuess(
        g.caliber,
        (g.score + (ok ? 0.1 : -0.2)).clamp(0.0, 1.0),
        [...g.why, ok ? '$jewels rubini: coincide' : '$jewels rubini: non coincide'],
      );
    }
  }
  guesses.sort((a, b) => b.score.compareTo(a.score));
  return EngravingInfo(guesses, jewels, automatic, rawText);
}
