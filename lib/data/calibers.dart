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
