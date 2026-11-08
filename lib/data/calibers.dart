import '../logic/beat_analyzer.dart';

enum WindType { automatic, manual }

class Caliber {
  final String id;
  final String name;
  final WindType type;
  final int? bph; // null = sconosciuta
  final int? jewels;
  final String? reserve;
  final double? diameterMm;
  final bool hasDate;
  final String? alsoKnownAs;
  final List<String> notes; // note specifiche di questo calibro
  final bool generic;
  /// Scritte incise che lo identificano (normalizzate: maiuscole, senza spazi e trattini).
  final List<String> engravings;
  final bool chrono;

  const Caliber({
    required this.id,
    required this.name,
    required this.type,
    this.bph,
    this.jewels,
    this.reserve,
    this.diameterMm,
    this.hasDate = true,
    this.alsoKnownAs,
    this.notes = const [],
    this.generic = false,
    this.engravings = const [],
    this.chrono = false,
  });

  String get typeLabel => type == WindType.automatic ? 'Automatico' : 'Carica manuale';

  String get summary {
    final bits = <String>[typeLabel];
    if (bph != null) bits.add('${_fmt(bph!)} alt/h');
    if (jewels != null) bits.add('$jewels rubini');
    if (reserve != null) bits.add('riserva $reserve');
    return bits.join(' · ');
  }
}

String _fmt(int n) {
  final s = n.toString();
  final b = StringBuffer();
  for (var i = 0; i < s.length; i++) {
    if (i > 0 && (s.length - i) % 3 == 0) b.write('.');
    b.write(s[i]);
  }
  return b.toString();
}

String formatBph(int bph) => _fmt(bph);

const List<Caliber> calibers = [
  Caliber(
    id: 'generic_auto',
    name: 'Calibro sconosciuto – automatico',
    type: WindType.automatic,
    generic: true,
    notes: [
      'Stai seguendo la sequenza universale: vale per quasi tutti gli automatici a tre lancette.',
      'Prima di ogni passo guarda bene il tuo movimento: se qualcosa non corrisponde, fermati e fotografa.',
      'Usa "Identifica calibro" per provare a scoprire che movimento è.',
    ],
  ),
  Caliber(
    id: 'generic_manual',
    name: 'Calibro sconosciuto – carica manuale',
    type: WindType.manual,
    generic: true,
    notes: [
      'Stai seguendo la sequenza universale: vale per quasi tutti i movimenti a carica manuale.',
      'Prima di ogni passo guarda bene il tuo movimento: se qualcosa non corrisponde, fermati e fotografa.',
      'Usa "Identifica calibro" per provare a scoprire che movimento è.',
    ],
  ),
  Caliber(
    id: 'eta2824',
    engravings: ['28242', '2824'],
    name: 'ETA 2824-2',
    type: WindType.automatic,
    bph: 28800,
    jewels: 25,
    reserve: '~38 h',
    diameterMm: 25.6,
    alsoKnownAs: 'Rinominato da molte marche con nomi propri',
    notes: [
      'Rotore bidirezionale con due ruote d\'inversione: di norma non vanno oliate.',
      'Ha il fermasecondi (stop dei secondi) quando tiri la corona.',
      'Vite della ruota di carica: verifica il verso prima di forzare (spesso sinistrorsa).',
    ],
  ),
  Caliber(
    id: 'sw200',
    engravings: ['SW2001', 'SW200'],
    name: 'Sellita SW200-1',
    type: WindType.automatic,
    bph: 28800,
    jewels: 26,
    reserve: '~38-41 h',
    diameterMm: 25.6,
    notes: [
      'Costruito sulla stessa architettura dell\'ETA 2824: la sequenza è praticamente uguale.',
      'Ruote d\'inversione: di norma non vanno oliate.',
    ],
  ),
  Caliber(
    id: 'nh35',
    engravings: ['NH35A', 'NH35', '4R35'],
    name: 'Seiko NH35A / 4R35',
    type: WindType.automatic,
    bph: 21600,
    jewels: 24,
    reserve: '~41 h',
    diameterMm: 27.4,
    notes: [
      'La carica automatica usa la "magic lever" (levetta a pinza) invece delle ruote d\'inversione.',
      'Antiurto di tipo Diashock: la mollina si apre ruotandola, con delicatezza.',
      'Ha fermasecondi e carica manuale.',
      'Per smontare la corona si preme il perno del tiretto con la corona in posizione di carica.',
    ],
  ),
  Caliber(
    id: 'miyota8215',
    engravings: ['8215', '821A'],
    name: 'Miyota 8215',
    type: WindType.automatic,
    bph: 21600,
    jewels: 21,
    reserve: '~42 h',
    diameterMm: 26.0,
    notes: [
      'Carica automatica in un solo verso di rotazione del rotore.',
      'Niente fermasecondi: i secondi non si fermano tirando la corona.',
      'I secondi possono "balbettare" un po\' anche da nuovo: è tipico di questo calibro.',
    ],
  ),
  Caliber(
    id: 'eta6497',
    engravings: ['6497', '6498', 'UNITAS'],
    name: 'ETA/Unitas 6497 – 6498',
    type: WindType.manual,
    bph: 18000,
    jewels: 17,
    reserve: '~46 h',
    diameterMm: 36.6,
    hasDate: false,
    alsoKnownAs: 'Molti cloni (es. Seagull ST36)',
    notes: [
      'Movimento grande e semplice: ottimo per imparare.',
      '6497 ha i piccoli secondi allineati alla corona; 6498 a ore 6.',
      'Niente data: salta il passo del calendario.',
    ],
  ),
  Caliber(
    id: 'st36',
    engravings: ['ST36', 'ST3600', 'ST3620', 'ST3621'],
    name: 'Seagull ST36 (clone Unitas)',
    type: WindType.manual,
    bph: 18000,
    jewels: 17,
    reserve: '~40-45 h',
    diameterMm: 36.6,
    hasDate: false,
    notes: [
      'Stessa architettura dell\'Unitas 6497/6498.',
      'Niente data: salta il passo del calendario.',
    ],
  ),
  Caliber(
    id: 'eta2836',
    engravings: ['28362', '2836'],
    name: 'ETA 2836-2',
    type: WindType.automatic,
    bph: 28800,
    jewels: 25,
    reserve: '~38 h',
    diameterMm: 25.6,
    notes: [
      'È la versione giorno-data del 2824: stessa base, con il disco dei giorni in più sul lato quadrante.',
      'Smontando il calendario fotografa bene i due dischi (giorno e data) e i loro saltarelli.',
    ],
  ),
  Caliber(
    id: 'eta2892',
    engravings: ['2892A2', '2892'],
    name: 'ETA 2892-A2',
    type: WindType.automatic,
    bph: 28800,
    jewels: 21,
    reserve: '~42 h',
    diameterMm: 25.6,
    notes: [
      'Movimento sottile e più fine del 2824: pezzi più delicati, lavora con calma.',
      'Spesso usato come base per moduli (cronografo, GMT): se sopra c\'è un modulo, la guida non lo copre.',
    ],
  ),
  Caliber(
    id: 'sw220',
    engravings: ['SW2201', 'SW220'],
    name: 'Sellita SW220-1',
    type: WindType.automatic,
    bph: 28800,
    jewels: 26,
    diameterMm: 25.6,
    notes: ['Versione giorno-data del SW200: base uguale, calendario con disco dei giorni in più.'],
  ),
  Caliber(
    id: 'sw300',
    engravings: ['SW3001', 'SW300'],
    name: 'Sellita SW300-1',
    type: WindType.automatic,
    bph: 28800,
    jewels: 25,
    reserve: '~42 h',
    diameterMm: 25.6,
    notes: ['Movimento sottile della famiglia Sellita, simile come architettura all\'ETA 2892.'],
  ),
  Caliber(
    id: 'nh36',
    engravings: ['NH36A', 'NH36', '4R36'],
    name: 'Seiko NH36A / 4R36',
    type: WindType.automatic,
    bph: 21600,
    jewels: 24,
    reserve: '~41 h',
    diameterMm: 27.4,
    notes: [
      'Versione giorno-data del NH35: stessa base, calendario con giorno.',
      'Carica automatica con "magic lever" (levetta a pinza).',
    ],
  ),
  Caliber(
    id: 'seiko7s26',
    engravings: ['7S26', '7S36'],
    name: 'Seiko 7S26',
    type: WindType.automatic,
    bph: 21600,
    jewels: 21,
    reserve: '~41 h',
    notes: [
      'Non si carica a mano e i secondi non si fermano tirando la corona.',
      'Carica automatica con "magic lever".',
    ],
  ),
  Caliber(
    id: 'seiko6r15',
    engravings: ['6R15'],
    name: 'Seiko 6R15',
    type: WindType.automatic,
    bph: 21600,
    jewels: 23,
    reserve: '~50 h',
    notes: ['Carica automatica con "magic lever", carica manuale e fermasecondi.'],
  ),
  Caliber(
    id: 'miyota8205',
    engravings: ['8205', '8200'],
    name: 'Miyota 8205',
    type: WindType.automatic,
    bph: 21600,
    jewels: 21,
    reserve: '~42 h',
    notes: ['Versione giorno-data della famiglia 82xx: niente fermasecondi.'],
  ),
  Caliber(
    id: 'miyota9015',
    engravings: ['9015', '90S5', '9039'],
    name: 'Miyota 9015',
    type: WindType.automatic,
    bph: 28800,
    jewels: 24,
    reserve: '~42 h',
    notes: ['Movimento sottile con fermasecondi. Pezzi più fini dei Miyota 82xx.'],
  ),
  Caliber(
    id: 'pt5000',
    engravings: ['PT5000'],
    name: 'PT5000 (clone 2824)',
    type: WindType.automatic,
    bph: 28800,
    jewels: 25,
    reserve: '~38 h',
    diameterMm: 25.6,
    notes: ['Costruito sull\'architettura del 2824: segui le stesse indicazioni, ma la qualità dei pezzi può variare.'],
  ),
  Caliber(
    id: 'st2130',
    engravings: ['ST2130', 'ST21'],
    name: 'Seagull ST2130',
    type: WindType.automatic,
    bph: 28800,
    diameterMm: 25.6,
    notes: ['Movimento cinese con architettura simile al 2824.'],
  ),
  Caliber(
    id: 'valjoux7750',
    engravings: ['7750', 'VALJOUX', '7753', 'ST19', 'SW500'],
    name: 'Cronografo (tipo Valjoux 7750 / SW500 / ST19)',
    type: WindType.automatic,
    bph: 28800,
    chrono: true,
    notes: [
      'È un CRONOGRAFO: la guida copre la base (scappamento, treno, carica) ma non il meccanismo del cronografo.',
      'Il modulo crono ha molti pezzi e molle: se non hai esperienza, fallo vedere a un orologiaio.',
    ],
  ),
];

Caliber caliberById(String id) =>
    calibers.firstWhere((c) => c.id == id, orElse: () => calibers.first);

/// Suggerisce i calibri compatibili con ciò che l'utente ha osservato.
List<Caliber> suggestCalibers({
  WindType? type,
  int? bph,
  int? jewels,
  double? diameterMm,
  bool? hasDate,
}) {
  final out = <(Caliber, int)>[];
  for (final c in calibers) {
    if (c.generic) continue;
    var score = 0;
    if (type != null) {
      if (c.type != type) continue;
      score += 1;
    }
    if (bph != null && c.bph != null) {
      if (c.bph != bph) continue;
      score += 2;
    }
    if (jewels != null && c.jewels != null) {
      if ((c.jewels! - jewels).abs() > 1) continue;
      score += 2;
    }
    if (diameterMm != null && c.diameterMm != null) {
      if ((c.diameterMm! - diameterMm).abs() > 1.2) continue;
      score += 1;
    }
    if (hasDate != null && hasDate && !c.hasDate) continue;
    out.add((c, score));
  }
  out.sort((a, b) => b.$2.compareTo(a.$2));
  return [for (final e in out) e.$1];
}

String lignesLabel(double mm) => '${mmToLignes(mm).toStringAsFixed(1)} linee';
