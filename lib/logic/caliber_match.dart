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

const _jewelWords = {
  'SEVENTEEN': 17, 'NINETEEN': 19, 'TWENTYONE': 21, 'TWENTYTWO': 22, 'TWENTYTHREE': 23, 'TWENTYFOUR': 24,
  'TWENTYFIVE': 25, 'TWENTYSIX': 26, 'TWENTYSEVEN': 27, 'TWENTYNINE': 29, 'THIRTYONE': 31, 'THIRTYFIVE': 35,
};

/// Marche lette sul movimento: se manca il numero, propongo i loro calibri più comuni.
const brandCalibers = {
  'ROLEX': ['rolex3135', 'rolex3235', 'rolex3130', 'rolex3230', 'rolex3035', 'rolex1570', 'rolex2235', 'rolex4130'],
  'OMEGA': ['omega8500', 'omega8800', 'omega1861', 'omega2500', 'omega1120', 'omega321'],
  'SEIKO': ['nh35', 'nh36', 'seiko6r35', 'seiko6r15', 'seiko7s26', 'seiko6309', 'seiko8l35', 'nh34'],
  'GRANDSEIKO': ['seiko9s'],
  'TISSOT': ['powermatic80', 'eta2824', 'eta2836'],
  'HAMILTON': ['powermatic80', 'eta2824', 'eta6497'],
  'MIDO': ['powermatic80'],
  'CERTINA': ['powermatic80'],
  'LONGINES': ['longinesl888', 'eta2892'],
  'ETA': ['eta2824', 'eta2836', 'eta2892', 'eta6497', 'eta7001', 'powermatic80'],
  'SELLITA': ['sw200', 'sw220', 'sw300', 'sw330', 'valjoux7750'],
  'MIYOTA': ['miyota8215', 'miyota9015', 'miyota8205', 'miyota8315', 'miyota82s'],
  'CITIZEN': ['miyota8215', 'miyota9015', 'miyota8205'],
  'ORIENT': ['orientf6922', 'orient46943'],
  'VOSTOK': ['vostok2416'],
  'POLJOT': ['poljot3133'],
  'SEAGULL': ['st36', 'st2130', 'st1901'],
  'TIANJIN': ['st36', 'st2130', 'st1901'],
  'UNITAS': ['eta6497'],
  'VALJOUX': ['valjoux7750'],
  'ZENITH': ['zenith400'],
  'BREITLING': ['breitlingb01', 'valjoux7750', 'eta2824'],
  'TUDOR': ['eta2824', 'eta2892'],
  'PESEUX': ['eta7001'],
  'LEMANIA': ['lemania1873'],
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
  if (jewels == null) {
    for (final e in _jewelWords.entries) {
      if (joined.contains(e.key)) {
        jewels = e.value;
        break;
      }
    }
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
  // la marca letta: rafforza i suoi calibri e, se il numero manca, li propone
  for (final b in brandCalibers.entries) {
    final seen = b.key.length <= 5 ? RegExp('\\b${b.key}\\b').hasMatch(text) : joined.contains(b.key);
    if (!seen) continue;
    final ids = b.value.where((id) => calibers.any((c) => c.id == id)).toList();
    for (var i = 0; i < guesses.length; i++) {
      if (ids.contains(guesses[i].caliber.id)) {
        final g = guesses[i];
        guesses[i] = CaliberGuess(g.caliber, (g.score + 0.05).clamp(0.0, 1.0), [...g.why, 'marca ${_title(b.key)}']);
      }
    }
    if (guesses.every((g) => g.score < 0.7)) {
      for (final id in ids) {
        if (guesses.any((g) => g.caliber.id == id)) continue;
        final c = caliberById(id);
        var sc = 0.3;
        final why = ['letto "${_title(b.key)}" ma non il numero del calibro'];
        if (jewels != null && c.jewels != null) {
          if ((c.jewels! - jewels).abs() <= 1) {
            sc += 0.2;
            why.add('$jewels rubini: coincide');
          } else {
            sc -= 0.15;
          }
        }
        if (automatic == true && c.type == WindType.manual) sc -= 0.15;
        guesses.add(CaliberGuess(c, sc.clamp(0.05, 1.0), why));
      }
    }
  }
  guesses.sort((a, b) => b.score.compareTo(a.score));
  return EngravingInfo(guesses, jewels, automatic, rawText);
}

String _title(String b) => b == 'GRANDSEIKO' ? 'Grand Seiko' : b.length <= 3 ? b : b[0] + b.substring(1).toLowerCase();
