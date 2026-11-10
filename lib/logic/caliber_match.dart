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
  'FIFTEEN': 15, 'SEVENTEEN': 17, 'EIGHTEEN': 18, 'NINETEEN': 19, 'TWENTYONE': 21, 'TWENTYTWO': 22, 'TWENTYTHREE': 23, 'TWENTYFOUR': 24,
  'TWENTYFIVE': 25, 'TWENTYSIX': 26, 'TWENTYSEVEN': 27, 'TWENTYNINE': 29, 'THIRTY': 30, 'THIRTYONE': 31, 'THIRTYFIVE': 35, 'SEIZE': 16, 'DIXSEPT': 17, 'DIXHUIT': 18, 'SIEBZEHN': 17,
};

/// Marche lette sul movimento: se manca il numero, propongo i loro calibri più comuni.
/// (Marca → movimenti che usa di solito.)
const brandCalibers = <String, List<String>>{
  'ROLEX': ['rolex3135', 'rolex3235', 'rolex3130', 'rolex3230', 'rolex3035', 'rolex1570', 'rolex2235', 'rolex4130'],
  'TUDOR': ['tudormt56', 'eta2824', 'eta2892', 'valjoux7750'],
  'OMEGA': ['omega56x', 'omega650', 'omega55x', 'omega1012', 'omega30t2', 'omega601', 'omega66x', 'omega33x', 'omega47x', 'omega75x', 'omega1481', 'omega1040', 'omega8500', 'omega8800', 'omega1861', 'omega2500', 'omega1120', 'omega321'],
  'TISSOT': ['powermatic80', 'eta2824', 'eta2836', 'eta2834', 'eta6497', 'eta2783', 'as1700'],
  'HAMILTON': ['powermatic80', 'eta2824', 'eta6497', 'valjoux7750', 'eta2892'],
  'MIDO': ['powermatic80', 'eta2824', 'eta2836'],
  'CERTINA': ['powermatic80', 'eta2824', 'eta2836'],
  'RADO': ['powermatic80', 'eta2824', 'eta2836', 'eta2834'],
  'LONGINES': ['longinesl888', 'eta2892', 'eta2895', 'valjoux7750'],
  'SWATCH': ['eta2824', 'eta2836'],
  'ORIS': ['oris400', 'sw200', 'sw220', 'sw330', 'valjoux7750'],
  'TAGHEUER': ['eta2824', 'sw200', 'eta2893', 'valjoux7750', 'heuer02'],
  'HEUER': ['valjoux7750', 'valjoux72', 'heuer02'],
  'BREITLING': ['breitlingb01', 'valjoux7750', 'eta2824', 'eta2892'],
  'ZENITH': ['zenith2552', 'zenithelite', 'zenith2320', 'zenith400'],
  'IWC': ['valjoux7750', 'eta2892', 'eta6497'],
  'PANERAI': ['eta6497', 'eta2824'],
  'CARTIER': ['eta2892', 'eta2000', 'eta2671'],
  'BAUME': ['eta2824', 'sw200'],
  'MERCIER': ['eta2824', 'eta2892', 'sw200'],
  'RAYMONDWEIL': ['sw200', 'sw220', 'eta2824', 'eta2892'],
  'FREDERIQUE': ['sw200', 'sw300', 'eta2824'],
  'MAURICELACROIX': ['sw200', 'eta2824', 'eta6497'],
  'EDOX': ['eta2824', 'eta2836', 'sw200', 'valjoux7750'],
  'ALPINA': ['sw200', 'sw300', 'eta2824'],
  'VICTORINOX': ['eta2824', 'sw200', 'powermatic80'],
  'SWISSARMY': ['eta2824', 'sw200'],
  'ENICAR': ['as1700', 'as2063', 'eta2824'],
  'ZODIAC': ['sw200', 'eta2824', 'as2063'],
  'TITONI': ['sw200', 'eta2824'],
  'BALL': ['eta2824', 'eta2836', 'eta2892', 'valjoux7750'],
  'LUMINOX': ['eta2824', 'sw200', 'valjoux7750'],
  'DOXA': ['eta2824', 'sw200', 'powermatic80'],
  'SQUALE': ['sw200', 'eta2824', 'nh35'],
  'CHRISTOPHERWARD': ['sw200', 'sw210', 'sw300', 'eta2824'],
  'UNIVERSAL': ['as1700', 'eta2824'],
  'ROAMER': ['as1700', 'eta2824', 'sw200'],
  'MONDAINE': ['sw200', 'eta2824'],
  'MOVADO': ['eta2824', 'eta2892', 'sw200'],
  'EBEL': ['eta2892', 'eta2824', 'valjoux7750'],
  'CORUM': ['sw200', 'eta2892'],
  'CHOPARD': ['eta2824', 'eta2892'],
  'GLYCINE': ['sw200', 'eta2824', 'eta2893'],
  'FORTIS': ['eta2824', 'sw200', 'valjoux7750'],
  'ETERNA': ['eta2824', 'sw200'],
  'MONTBLANC': ['sw200', 'eta2824', 'sw300', 'valjoux7750'],
  'BELLROSS': ['sw200', 'eta2824', 'valjoux7750'],
  'BAUMATIC': ['powermatic80'],
  'SINN': ['sw200', 'eta2824', 'valjoux7750', 'eta2892'],
  'JUNGHANS': ['eta2824', 'sw200', 'eta6497', 'eta2801'],
  'STOWA': ['eta2824', 'eta6497', 'sw200'],
  'LACO': ['sw200', 'nh35', 'eta2824', 'eta6497'],
  'MUHLE': ['sw200', 'eta2824'],
  'STEINHART': ['eta2824', 'sw200', 'eta6497', 'eta2893', 'valjoux7750'],
  'NOMOS': ['nomosalpha'],
  'TUTIMA': ['eta2824', 'valjoux7750'],
  'DUGENA': ['eta2824', 'as1700'],
  'ARCHIMEDE': ['sw200', 'eta2824'],
  'ARISTO': ['eta2824', 'sw200', 'eta6497'],
  'MONDIA': ['nh35', 'nh34', 'as1920', 'unitas6325', 'eta2651', 'as1700', 'as2063', 'valjoux7750', 'fhf96', 'eta2824'],
  'ACCUTRON': ['accutron214'],
  'YEMA': ['jeambrun_ps31', 'fe233', 'nh35', 'miyota9015', 'sw200', 'eta2824', 'eta2836', 'miyota8215', 'eta7001', 'as1700', 'valjoux72'],
  'LIP': ['fe233', 'jeambrun_ps31', 'as1700', 'eta2824', 'nh35', 'eta2783'],
  'PEQUIGNET': ['sw200', 'eta2824'],
  'HERBELIN': ['fe233', 'sw200', 'eta2824'],
  'MATWATCHES': ['nh35', 'miyota8215'],
  'ANONIMO': ['sw200', 'eta2824'],
  'UBOAT': ['sw200', 'eta2824', 'eta6497'],
  'UNIONGLASHUTTE': ['eta2824'],
  'VENTURA': ['eta2824'],
  'BULGARI': ['eta2892', 'eta2824'],
  'SEIKO': ['nh35', 'nh36', 'seiko4r15', 'seiko6r35', 'seiko6r15', 'seiko7s26', 'seiko7s', 'seiko6309', 'seiko8l35', 'nh34', 'nh38', 'seiko6r2', 'seiko7019', 'seiko6139'],
  'GRANDSEIKO': ['seiko9s'],
  'PRESAGE': ['seiko6r35', 'nh35', 'seiko6r2', 'seiko4r15'],
  'PROSPEX': ['seiko6r35', 'nh36', 'seiko6r15', 'seiko8l35'],
  'CITIZEN': ['miyota8215', 'miyota8205', 'citizen8700', 'miyota9015', 'citizen9011', 'miyota82s'],
  'MIYOTA': ['miyota8215', 'miyota9015', 'miyota8205', 'miyota8315', 'miyota82s'],
  'ORIENT': ['orientf6922', 'orient46943', 'orientf6'],
  'ORIENTSTAR': ['orientf6'],
  'CASIO': ['miyota8215', 'nh35'],
  'VOSTOK': ['vostok2416', 'vostok2409'],
  'BOCTOK': ['vostok2416', 'vostok2409'],
  'KOMANDIRSKIE': ['vostok2416', 'vostok2409'],
  'AMPHIBIA': ['vostok2416'],
  'RAKETA': ['raketa2609', 'raketa2614', 'raketa2628', 'raketa2623'],
  'PAKETA': ['raketa2609', 'raketa2614', 'raketa2628', 'raketa2623'],
  'POLJOT': ['poljot2614', 'poljot2616', 'poljot2209', 'poljot3133'],
  'POLOT': ['poljot2614', 'poljot2616', 'poljot2209', 'poljot3133'],
  'STURMANSKIE': ['poljot3133', 'poljot2616', 'vostok2416'],
  'SLAVA': ['slava2427', 'slava2414'],
  'LUCH': ['luch1801', 'poljot2209'],
  'ZARIA': ['zaria2009'],
  'ZARJA': ['zaria2009'],
  'CHAIKA': ['chaika1601'],
  'POBEDA': ['pobeda2602'],
  'MOLNIJA': ['molnija3602'],
  'MOLNIA': ['molnija3602'],
  'SEKONDA': ['poljot2614', 'raketa2609', 'poljot3133', 'vostok2409'],
  'USSR': ['raketa2609', 'raketa2614', 'poljot2614', 'vostok2416', 'vostok2409', 'slava2427', 'poljot2616', 'molnija3602', 'pobeda2602', 'zaria2009', 'luch1801'],
  'CCCP': ['raketa2609', 'raketa2614', 'poljot2614', 'vostok2416', 'vostok2409', 'slava2427', 'poljot2616', 'molnija3602', 'pobeda2602', 'zaria2009', 'luch1801'],
  'KAMA': ['vostok2416', 'raketa2609'],
  'ETA': ['eta2824', 'eta2836', 'eta2892', 'eta6497', 'eta7001', 'powermatic80', 'eta2801', 'eta2834'],
  'SELLITA': ['sw200', 'sw220', 'sw300', 'sw330', 'sw210', 'valjoux7750'],
  'SOPROD': ['clone2824'],
  'RONDA': ['clone2824'],
  'STP': ['clone2824'],
  'UNITAS': ['eta6497', 'unitas6325'],
  'VALJOUX': ['valjoux7750', 'valjoux72'],
  'PESEUX': ['eta7001', 'peseux7040'],
  'LEMANIA': ['lemania1873'],
  'FHF': ['fhf96'],
  'FELSA': ['felsa690'],
  'ASCHILD': ['as1700', 'as2063'],
  'LANDERON': ['landeron48'],
  'JEAMBRUN': ['jeambrun_ps31'],
  'SHANGHAI': ['tongji', 'st16'],
  'SEAGULL': ['tongji', 'st36', 'st2130', 'st1901', 'st16', 'st2555'],
  'TIANJIN': ['st36', 'st2130', 'st1901', 'st16', 'st2555'],
  'HANGZHOU': ['hz7300', 'st16'],
  'INVICTA': ['nh35', 'nh36', 'miyota8215', 'sw200'],
  'BULOVA': ['bulova11a', 'bulova10b', 'accutron214', 'miyota8215', 'miyota82s', 'sw200'],
  'FOSSIL': ['st16', 'miyota82s', 'st2130'],
  'TIMEX': ['miyota8215', 'miyota82s'],
  'SWISSMILITARY': ['sw200', 'eta2824'],
  'PAGANI': ['nh35', 'pt5000', 'nh34', 'valjoux7750'],
  'SANMARTIN': ['nh35', 'pt5000', 'sw200', 'nh34'],
  'STEELDIVE': ['nh35', 'nh34'],
  'PHOIBOS': ['nh35', 'pt5000'],
  'BERNY': ['nh35', 'dg2813'],
  'ADDIESDIVE': ['nh35'],
  'CADISEN': ['nh35', 'miyota8215'],
  'PARNIS': ['st36', 'st2130', 'st1901'],
  'CORGEUT': ['nh35', 'miyota8215', 'st16'],
  'TISELL': ['nh35', 'miyota9015'],
  'MERKUR': ['st1901', 'st36'],
  'SPINNAKER': ['nh35', 'st16'],
  'LORUS': ['nh35', 'seiko7s26'],
  'PULSAR': ['nh35', 'seiko7s26'],
  'DANHENRY': ['nh35', 'miyota9015', 'sw200'],
  'BALTIC': ['miyota8215', 'miyota9015', 'nh35'],
  'FURLANMARRI': ['nh35', 'miyota82s'],
  'UNDONE': ['nh35', 'nh38', 'seiko6139'],
  'LONGIO': ['nh35'],
  'MAREN': ['nh35', 'miyota8215'],
  'DELMA': ['eta2824', 'sw200'],
  'MARATHON': ['sw200', 'eta2824'],
  'VAER': ['sw200', 'nh35'],
  'BOLDR': ['nh35', 'sw200'],
  'TRASER': ['eta2824', 'sw200'],
  'DIETRICH': ['miyota8215'],
  'SEIKO5': ['nh35', 'nh36', 'seiko7s26', 'seiko4r15'],
};

/// Come scriverlo a schermo.
const _brandNames = {'TAGHEUER': 'TAG Heuer', 'GRANDSEIKO': 'Grand Seiko', 'CHRISTOPHERWARD': 'Christopher Ward', 'ORIENTSTAR': 'Orient Star', 'SWISSMILITARY': 'Swiss Military', 'RAYMONDWEIL': 'Raymond Weil', 'MAURICELACROIX': 'Maurice Lacroix', 'ASCHILD': 'A. Schild', 'BOCTOK': 'Vostok', 'PAKETA': 'Raketa', 'USSR': 'URSS', 'CCCP': 'URSS', 'SU': 'URSS', 'SANMARTIN': 'San Martin', 'DANHENRY': 'Dan Henry', 'UNIONGLASHUTTE': 'Union Glashütte', 'UBOAT': 'U-Boat', 'BELLROSS': 'Bell & Ross', 'FURLANMARRI': 'Furlan Marri', 'SWISSARMY': 'Swiss Army', 'SEIKO5': 'Seiko 5'};

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
  // i numeri di serie (6 o più cifre) non sono calibri: li tolgo, così non li scambio per un "7009…"
  final engr = {for (final c in calibers) for (final e in c.engravings) normEngraving(e)};
  tokens.removeWhere((t) => RegExp(r'^\d{6,}$').hasMatch(t) && !engr.contains(t));
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
      } else if (eN.length >= 4 &&
          tokens.any((t) => t.startsWith(eN) && t.length <= eN.length + 2 && RegExp(r'^[A-Z]+$').hasMatch(t.substring(eN.length)))) {
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
  // КАМНЕЙ (rubini in russo) letto con caratteri latini: KAMHEN, KAMHEИ, KAMHEЙ, KAMHEI
  final jm = RegExp(r'(\d{2})\s*(JEWELS?|JEWEL|RUBIS|RUBINS?|STEINE|STONES|KAMHE\S*|КАМНЕ\S*|J\b)').firstMatch(text);
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
    if (!_brandSeen(b.key, text, joined)) continue;
    final ids = b.value.where((id) => calibers.any((c) => c.id == id)).toList();
    for (var i = 0; i < guesses.length; i++) {
      if (ids.contains(guesses[i].caliber.id)) {
        final g = guesses[i];
        guesses[i] = CaliberGuess(g.caliber, (g.score + 0.05).clamp(0.0, 1.0), [...g.why, 'marca ${_title(b.key)}']);
      }
    }
    if (guesses.every((g) => g.score < 0.7)) {
      for (var k = 0; k < ids.length; k++) {
        final id = ids[k];
        if (guesses.any((g) => g.caliber.id == id)) continue;
        final c = caliberById(id);
        var sc = 0.3 - k * 0.002; // a parità, prima i calibri più comuni della marca
        final why = ['letto "${_title(b.key)}" ma non il numero del calibro'];
        if (jewels != null && c.jewels != null) {
          if ((c.jewels! - jewels).abs() <= 1) {
            sc += c.jewels == jewels ? 0.22 : 0.12; // esatto conta di più
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
  // marca letta: i calibri di altre marche scendono (es. letto OMEGA → niente Seiko in cima)
  final seenBrands = brandCalibers.keys.where((k) => _brandSeen(k, text, joined)).toList();
  if (seenBrands.isNotEmpty) {
    final ok = {for (final b in seenBrands) ...brandCalibers[b]!};
    final known = {for (final v in brandCalibers.values) ...v};
    for (var i = 0; i < guesses.length; i++) {
      final g = guesses[i];
      if (!ok.contains(g.caliber.id) && known.contains(g.caliber.id)) {
        guesses[i] = CaliberGuess(g.caliber, (g.score - 0.3).clamp(0.05, 1.0),
            [...g.why, 'ma la marca letta è ${_title(seenBrands.first)}'], source: g.source);
      }
    }
  }
  guesses.sort((a, b) => b.score.compareTo(a.score));
  return EngravingInfo(guesses, jewels, automatic, rawText);
}

String _title(String b) => _brandNames[b] ?? (b.length <= 3 ? b : b[0] + b.substring(1).toLowerCase());

bool _brandSeen(String key, String text, String joined) =>
    key.length <= 5 ? RegExp('\\b$key\\b').hasMatch(text) : joined.contains(key);
