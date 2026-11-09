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
    engravings: ['7750', 'VALJOUX', '7753', '7754', '7751', 'SW500', 'SW510'],
    name: 'Cronografo (tipo Valjoux 7750 / SW500 / ST19)',
    type: WindType.automatic,
    bph: 28800,
    chrono: true,
    notes: [
      'È un CRONOGRAFO: la guida copre la base (scappamento, treno, carica) ma non il meccanismo del cronografo.',
      'Il modulo crono ha molti pezzi e molle: se non hai esperienza, fallo vedere a un orologiaio.',
    ],
  ),
  Caliber(
    id: 'rolex3135',
    engravings: ['3135'],
    name: 'Rolex 3135',
    type: WindType.automatic,
    bph: 28800,
    jewels: 31,
    reserve: '~48 h',
    diameterMm: 28.5,
    notes: [
      'Movimento Rolex: viti, chiavi e oli sono specifici. Se è il tuo primo orologio, esercitati prima su un movimento economico.',
      'Il ponte del bilanciere è a doppio braccio (ponte traversante): si toglie con due viti.',
      'Spirale Breguet con curva terminale: maneggiala pochissimo.',
    ],
  ),
  Caliber(
    id: 'rolex3130',
    engravings: ['3130'],
    name: 'Rolex 3130',
    type: WindType.automatic,
    bph: 28800,
    jewels: 31,
    reserve: '~48 h',
    diameterMm: 28.5,
    hasDate: false,
    notes: [
      'Movimento Rolex: viti, chiavi e oli sono specifici. Se è il tuo primo orologio, esercitati prima su un movimento economico.',
      'Il ponte del bilanciere è a doppio braccio (ponte traversante): si toglie con due viti.',
    ],
  ),
  Caliber(
    id: 'rolex3235',
    engravings: ['3235'],
    name: 'Rolex 3235',
    type: WindType.automatic,
    bph: 28800,
    jewels: 31,
    reserve: '~70 h',
    diameterMm: 28.5,
    notes: [
      'Movimento Rolex: viti, chiavi e oli sono specifici. Se è il tuo primo orologio, esercitati prima su un movimento economico.',
      'Il ponte del bilanciere è a doppio braccio (ponte traversante): si toglie con due viti.',
      'Scappamento Chronergy e spirale Syloxi: non smagnetizzare a caso, non toccare la spirale.',
    ],
  ),
  Caliber(
    id: 'rolex3230',
    engravings: ['3230'],
    name: 'Rolex 3230',
    type: WindType.automatic,
    bph: 28800,
    jewels: 31,
    reserve: '~70 h',
    diameterMm: 28.5,
    hasDate: false,
    notes: [
      'Movimento Rolex: viti, chiavi e oli sono specifici. Se è il tuo primo orologio, esercitati prima su un movimento economico.',
      'Il ponte del bilanciere è a doppio braccio (ponte traversante): si toglie con due viti.',
    ],
  ),
  Caliber(
    id: 'rolex3035',
    engravings: ['3035'],
    name: 'Rolex 3035',
    type: WindType.automatic,
    bph: 28800,
    jewels: 27,
    reserve: '~42 h',
    diameterMm: 28.5,
    notes: [
      'Movimento Rolex: viti, chiavi e oli sono specifici. Se è il tuo primo orologio, esercitati prima su un movimento economico.',
      'Il ponte del bilanciere è a doppio braccio (ponte traversante): si toglie con due viti.',
    ],
  ),
  Caliber(
    id: 'rolex1570',
    engravings: ['1570', '1575', '1560', '1530'],
    name: 'Rolex 1570 / 1560',
    type: WindType.automatic,
    bph: 19800,
    jewels: 26,
    reserve: '~48 h',
    diameterMm: 28.5,
    notes: [
      'Movimento Rolex: viti, chiavi e oli sono specifici. Se è il tuo primo orologio, esercitati prima su un movimento economico.',
      'Il ponte del bilanciere è a doppio braccio (ponte traversante): si toglie con due viti.',
      'Calibro vintage: le parti di ricambio sono rare, lavora con calma.',
    ],
  ),
  Caliber(
    id: 'rolex2235',
    engravings: ['2235', '2135'],
    name: 'Rolex 2235 (da donna)',
    type: WindType.automatic,
    bph: 28800,
    jewels: 31,
    reserve: '~48 h',
    diameterMm: 20.0,
    notes: [
      'Movimento Rolex: viti, chiavi e oli sono specifici. Se è il tuo primo orologio, esercitati prima su un movimento economico.',
      'Il ponte del bilanciere è a doppio braccio (ponte traversante): si toglie con due viti.',
      'Movimento piccolo: servono cacciaviti fini e una buona lente.',
    ],
  ),
  Caliber(
    id: 'rolex4130',
    engravings: ['4130'],
    name: 'Rolex 4130 (Daytona)',
    type: WindType.automatic,
    bph: 28800,
    jewels: 44,
    reserve: '~72 h',
    diameterMm: 30.5,
    hasDate: false,
    chrono: true,
    notes: [
      'Movimento Rolex: viti, chiavi e oli sono specifici. Se è il tuo primo orologio, esercitati prima su un movimento economico.',
      'È un CRONOGRAFO: la guida copre la base (scappamento, treno, carica) ma non il meccanismo del cronografo.',
    ],
  ),
  Caliber(
    id: 'omega8500',
    engravings: ['8500', '8501', '8520', '8521'],
    name: 'Omega 8500 / 8501 Co-Axial',
    type: WindType.automatic,
    bph: 25200,
    jewels: 39,
    reserve: '~60 h',
    diameterMm: 29.0,
    notes: [
      'Scappamento Co-Axial: l\'ancora ha tre palette e la ruota di scappamento è doppia. Non usare la sequenza dell\'ancora svizzera senza guardare bene.',
      'Due bariletti in serie.',
    ],
  ),
  Caliber(
    id: 'omega8800',
    engravings: ['8800', '8806', '8900', '8901', '8906'],
    name: 'Omega 8800 Co-Axial Master Chronometer',
    type: WindType.automatic,
    bph: 25200,
    reserve: '~55-60 h',
    diameterMm: 26.0,
    notes: [
      'Scappamento Co-Axial e spirale in silicio, antimagnetico.',
      'Ricambi e oli specifici Omega.',
    ],
  ),
  Caliber(
    id: 'omega2500',
    engravings: ['2500', '2500A', '2500B', '2500C', '2500D'],
    name: 'Omega 2500 Co-Axial',
    type: WindType.automatic,
    bph: 25200,
    jewels: 27,
    reserve: '~48 h',
    diameterMm: 25.6,
    notes: [
      'Base ETA 2892 trasformata con scappamento Co-Axial (le versioni A e B battono a 28.800).',
    ],
  ),
  Caliber(
    id: 'omega1120',
    engravings: ['1120', '1109', '1108'],
    name: 'Omega 1120 / 1109 (base ETA 2892)',
    type: WindType.automatic,
    bph: 28800,
    jewels: 23,
    reserve: '~44 h',
    diameterMm: 25.6,
    notes: [
      'Sequenza come l\'ETA 2892: molto simile al 2824 ma più sottile.',
    ],
  ),
  Caliber(
    id: 'omega1861',
    engravings: ['1861', '1863', '3861', '861'],
    name: 'Omega 1861 / 3861 (Speedmaster)',
    type: WindType.manual,
    bph: 21600,
    reserve: '~48 h',
    diameterMm: 27.0,
    hasDate: false,
    chrono: true,
    notes: [
      'È un CRONOGRAFO: la guida copre la base (scappamento, treno, carica) ma non il meccanismo del cronografo.',
      'Il 3861 ha lo scappamento Co-Axial (26 rubini, ~50 h).',
    ],
  ),
  Caliber(
    id: 'omega321',
    engravings: ['321'],
    name: 'Omega 321',
    type: WindType.manual,
    bph: 18000,
    jewels: 17,
    reserve: '~44 h',
    diameterMm: 27.0,
    hasDate: false,
    chrono: true,
    notes: [
      'È un CRONOGRAFO: la guida copre la base (scappamento, treno, carica) ma non il meccanismo del cronografo.',
      'Cronografo a ruota a colonne storico: ricambi rari e costosi.',
    ],
  ),
  Caliber(
    id: 'eta7001',
    engravings: ['7001', 'PESEUX'],
    name: 'ETA / Peseux 7001',
    type: WindType.manual,
    bph: 21600,
    jewels: 17,
    reserve: '~42 h',
    diameterMm: 23.3,
    hasDate: false,
    notes: [
      'Movimento sottile a carica manuale: perfetto per imparare.',
    ],
  ),
  Caliber(
    id: 'eta2000',
    engravings: ['2000', '20001'],
    name: 'ETA 2000',
    type: WindType.automatic,
    bph: 28800,
    jewels: 20,
    reserve: '~40 h',
    diameterMm: 19.4,
  ),
  Caliber(
    id: 'eta2671',
    engravings: ['2671', '2678'],
    name: 'ETA 2671 (da donna)',
    type: WindType.automatic,
    bph: 28800,
    jewels: 25,
    reserve: '~38 h',
    diameterMm: 17.2,
    notes: [
      'Movimento piccolo: servono cacciaviti fini e una buona lente.',
    ],
  ),
  Caliber(
    id: 'eta2834',
    engravings: ['2834', '28342'],
    name: 'ETA 2834-2 / 2836 giorno e data',
    type: WindType.automatic,
    bph: 28800,
    jewels: 25,
    reserve: '~38 h',
    diameterMm: 29.0,
  ),
  Caliber(
    id: 'eta2893',
    engravings: ['2893', '28932', '28931'],
    name: 'ETA 2893 (GMT)',
    type: WindType.automatic,
    bph: 28800,
    jewels: 21,
    reserve: '~42 h',
    diameterMm: 25.6,
    notes: [
      'Ha la lancetta del secondo fuso: c\'è una ruota in più sotto il quadrante.',
    ],
  ),
  Caliber(
    id: 'eta2895',
    engravings: ['2895', '28952'],
    name: 'ETA 2895 (piccoli secondi)',
    type: WindType.automatic,
    bph: 28800,
    jewels: 30,
    reserve: '~42 h',
    diameterMm: 25.6,
  ),
  Caliber(
    id: 'powermatic80',
    engravings: ['C07111', 'C07611', 'C07', 'POWERMATIC', 'POWERMATIC80', 'H10', 'H21', 'C07811'],
    name: 'ETA C07 / Powermatic 80 / H-10',
    type: WindType.automatic,
    bph: 21600,
    jewels: 23,
    reserve: '~80 h',
    diameterMm: 25.6,
    notes: [
      'Base 2824 rallentata a 21.600 alt/h per avere 80 ore.',
      'Molte versioni hanno lo scappamento in plastica e la regolazione fissa (senza racchetta): non si regola come un 2824.',
    ],
  ),
  Caliber(
    id: 'sw330',
    engravings: ['SW330', 'SW3301', 'SW3302'],
    name: 'Sellita SW330 (GMT)',
    type: WindType.automatic,
    bph: 28800,
    jewels: 25,
    reserve: '~42 h',
    diameterMm: 25.6,
  ),
  Caliber(
    id: 'longinesl888',
    engravings: ['L888', 'A31L11', 'A31'],
    name: 'Longines L888 (base ETA A31)',
    type: WindType.automatic,
    bph: 25200,
    jewels: 21,
    reserve: '~72 h',
    diameterMm: 25.6,
  ),
  Caliber(
    id: 'breitlingb01',
    engravings: ['B01'],
    name: 'Breitling B01',
    type: WindType.automatic,
    bph: 28800,
    jewels: 47,
    reserve: '~70 h',
    diameterMm: 30.0,
    chrono: true,
    notes: [
      'È un CRONOGRAFO: la guida copre la base (scappamento, treno, carica) ma non il meccanismo del cronografo.',
    ],
  ),
  Caliber(
    id: 'zenith400',
    engravings: ['ELPRIMERO', 'PRIMERO', '4002', '3019'],
    name: 'Zenith El Primero 400',
    type: WindType.automatic,
    bph: 36000,
    jewels: 31,
    reserve: '~50 h',
    diameterMm: 30.0,
    chrono: true,
    notes: [
      'È un CRONOGRAFO: la guida copre la base (scappamento, treno, carica) ma non il meccanismo del cronografo.',
      'Batte a 36.000 alt/h: l\'analisi della marcia deve usare 36.000.',
    ],
  ),
  Caliber(
    id: 'lemania1873',
    engravings: ['1873', 'LEMANIA'],
    name: 'Lemania 1873',
    type: WindType.manual,
    bph: 21600,
    jewels: 17,
    diameterMm: 27.0,
    hasDate: false,
    chrono: true,
    notes: [
      'È un CRONOGRAFO: la guida copre la base (scappamento, treno, carica) ma non il meccanismo del cronografo.',
    ],
  ),
  Caliber(
    id: 'seiko6r35',
    engravings: ['6R35', '6R36', '6R37'],
    name: 'Seiko 6R35 / 6R36',
    type: WindType.automatic,
    bph: 21600,
    jewels: 24,
    reserve: '~70 h',
    diameterMm: 27.4,
    notes: [
      'Architettura simile al 4R35 con bariletto più lungo: stessa "magic lever".',
    ],
  ),
  Caliber(
    id: 'seiko6r64',
    engravings: ['6R54', '6R64'],
    name: 'Seiko 6R54 / 6R64 (GMT)',
    type: WindType.automatic,
    bph: 21600,
    jewels: 29,
    reserve: '~72 h',
  ),
  Caliber(
    id: 'seiko8l35',
    engravings: ['8L35', '8L55'],
    name: 'Seiko 8L35',
    type: WindType.automatic,
    bph: 28800,
    jewels: 26,
    reserve: '~50 h',
    notes: [
      'Movimento di fascia alta Seiko: finiture delicate, usa dita di gomma.',
    ],
  ),
  Caliber(
    id: 'seiko9s',
    engravings: ['9S65', '9S68', '9S85', '9S86', '9SA5'],
    name: 'Seiko 9S65 / 9S85 (Grand Seiko)',
    type: WindType.automatic,
    bph: 28800,
    reserve: '~72 h',
    notes: [
      'Grand Seiko: spirale e scappamento delicatissimi, valuta un centro assistenza.',
    ],
  ),
  Caliber(
    id: 'nh34',
    engravings: ['NH34', 'NH34A'],
    name: 'Seiko NH34 (GMT)',
    type: WindType.automatic,
    bph: 21600,
    jewels: 24,
    reserve: '~41 h',
    diameterMm: 27.4,
    notes: [
      'Come il NH35 più la ruota del secondo fuso sotto il quadrante.',
    ],
  ),
  Caliber(
    id: 'nh38',
    engravings: ['NH38', 'NH38A', 'NH39', '4R38', '4R39'],
    name: 'Seiko NH38 / NH39 (senza data)',
    type: WindType.automatic,
    bph: 21600,
    jewels: 24,
    reserve: '~41 h',
    diameterMm: 27.4,
    hasDate: false,
  ),
  Caliber(
    id: 'nh70',
    engravings: ['NH70', 'NH71', 'NH72', 'NH73'],
    name: 'Seiko NH70 / NH72 (scheletrato)',
    type: WindType.automatic,
    bph: 21600,
    jewels: 24,
    reserve: '~41 h',
    diameterMm: 27.4,
    hasDate: false,
  ),
  Caliber(
    id: 'seiko6309',
    engravings: ['6309', '7002', '7009'],
    name: 'Seiko 6309 / 7002 (vintage)',
    type: WindType.automatic,
    bph: 21600,
    jewels: 17,
    reserve: '~40 h',
    notes: [
      'Non ha la carica manuale né il fermasecondi: per caricarlo si scuote.',
    ],
  ),
  Caliber(
    id: 'seiko6139',
    engravings: ['6139', '6138'],
    name: 'Seiko 6139 (cronografo vintage)',
    type: WindType.automatic,
    bph: 21600,
    jewels: 21,
    chrono: true,
    notes: [
      'È un CRONOGRAFO: la guida copre la base (scappamento, treno, carica) ma non il meccanismo del cronografo.',
    ],
  ),
  Caliber(
    id: 'miyota8315',
    engravings: ['8315'],
    name: 'Miyota 8315',
    type: WindType.automatic,
    bph: 21600,
    jewels: 21,
    reserve: '~60 h',
    diameterMm: 26.0,
  ),
  Caliber(
    id: 'miyota82s',
    engravings: ['82S5', '82S7', '82S0'],
    name: 'Miyota 82S5 / 82S7 (scheletrato)',
    type: WindType.automatic,
    bph: 21600,
    jewels: 21,
    reserve: '~40 h',
    hasDate: false,
  ),
  Caliber(
    id: 'orientf6922',
    engravings: ['F6922', 'F6722', 'F6724', 'F6B22'],
    name: 'Orient F6922 / F6722',
    type: WindType.automatic,
    bph: 21600,
    jewels: 22,
    reserve: '~40 h',
    notes: [
      'Ha carica manuale e fermasecondi.',
    ],
  ),
  Caliber(
    id: 'orient46943',
    engravings: ['46943', '46941'],
    name: 'Orient 46943 (Mako, Ray)',
    type: WindType.automatic,
    bph: 21600,
    jewels: 21,
    reserve: '~40 h',
    notes: [
      'Non ha carica manuale né fermasecondi.',
    ],
  ),
  Caliber(
    id: 'vostok2416',
    engravings: ['2416', '2416B', '2415', '2409', 'VOSTOK'],
    name: 'Vostok 2416B / 2415',
    type: WindType.automatic,
    bph: 19800,
    jewels: 31,
    reserve: '~31 h',
    diameterMm: 24.0,
    notes: [
      'Rotore e ponti robusti; il rotore gira libero in un solo verso di carica.',
      'Il bilanciere è grande e lento (19.800 alt/h).',
    ],
  ),
  Caliber(
    id: 'poljot3133',
    engravings: ['3133', 'POLJOT'],
    name: 'Poljot 3133',
    type: WindType.manual,
    bph: 21600,
    jewels: 23,
    reserve: '~42 h',
    chrono: true,
    notes: [
      'È un CRONOGRAFO: la guida copre la base (scappamento, treno, carica) ma non il meccanismo del cronografo.',
    ],
  ),
  Caliber(
    id: 'st1901',
    engravings: ['ST1901', 'ST1902', 'ST1908'],
    name: 'Seagull ST1901 / ST19 (cronografo)',
    type: WindType.manual,
    bph: 21600,
    jewels: 19,
    reserve: '~42 h',
    hasDate: false,
    chrono: true,
    notes: [
      'È un CRONOGRAFO: la guida copre la base (scappamento, treno, carica) ma non il meccanismo del cronografo.',
      'Clone del Venus 175 a ruota a colonne.',
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
