import 'dart:convert';

import '../data/calibers.dart';
import '../data/steps.dart';

class Measurement {
  final DateTime at;
  final int bph;
  final double rate;
  final double beatError;
  final double quality;
  final String label; // es. "prima", "dopo", "quadrante su"

  const Measurement({
    required this.at,
    required this.bph,
    required this.rate,
    required this.beatError,
    required this.quality,
    required this.label,
  });

  Map<String, dynamic> toJson() => {
        'at': at.toIso8601String(),
        'bph': bph,
        'rate': rate,
        'be': beatError,
        'q': quality,
        'label': label,
      };

  factory Measurement.fromJson(Map<String, dynamic> j) => Measurement(
        at: DateTime.parse(j['at'] as String),
        bph: (j['bph'] as num).toInt(),
        rate: (j['rate'] as num).toDouble(),
        beatError: (j['be'] as num).toDouble(),
        quality: (j['q'] as num).toDouble(),
        label: (j['label'] as String?) ?? '',
      );
}

/// Una vite segnata su una tua foto (coordinate 0..1).
class Mark {
  double x;
  double y;
  double r;
  bool leftHand;
  bool out; // svitata
  bool back; // riavvitata

  Mark(this.x, this.y, this.r, {this.leftHand = false, this.out = false, this.back = false});

  Map<String, dynamic> toJson() => {'x': x, 'y': y, 'r': r, 'lh': leftHand, 'o': out, 'b': back};
  factory Mark.fromJson(Map<String, dynamic> j) => Mark(
        (j['x'] as num).toDouble(),
        (j['y'] as num).toDouble(),
        (j['r'] as num?)?.toDouble() ?? 0.03,
        leftHand: j['lh'] == true,
        out: j['o'] == true,
        back: j['b'] == true,
      );
}

/// La tua foto di un passo con le viti segnate e lo scomparto dove vanno.
class PhotoMarks {
  String photo;
  final List<Mark> marks;
  String? compartment;
  String source; // 'offline', 'AI', 'manuale'
  String? tip;
  double aspect; // larghezza / altezza della foto

  PhotoMarks(this.photo, this.marks, {this.compartment, this.source = 'offline', this.tip, this.aspect = 0.75});

  Map<String, dynamic> toJson() => {
        'photo': photo,
        'marks': marks.map((m) => m.toJson()).toList(),
        if (compartment != null) 'comp': compartment,
        'src': source,
        if (tip != null) 'tip': tip,
        'ar': aspect,
      };
  factory PhotoMarks.fromJson(Map<String, dynamic> j) => PhotoMarks(
        j['photo'] as String,
        ((j['marks'] as List?) ?? const []).map((m) => Mark.fromJson(Map<String, dynamic>.from(m as Map))).toList(),
        compartment: j['comp'] as String?,
        source: (j['src'] as String?) ?? 'offline',
        tip: j['tip'] as String?,
        aspect: (j['ar'] as num?)?.toDouble() ?? 0.75,
      );
}

/// Quali passi di smontaggio corrispondono a un passo di rimontaggio.
const Map<String, List<String>> reassemblyOf = {
  'bariletto_in': ['bariletto_apri'],
  'remontoir_in': ['stelo', 'remontoir_out'],
  'treno_in': ['treno_out'],
  'bariletto_rimonta': ['bariletto_out', 'carica'],
  'ancora_in': ['ancora'],
  'antiurto_in': ['antiurto_out'],
  'bilanciere_in': ['bilanciere'],
  'automatico_in': ['automatico'],
  'quadrante_in': ['minuteria', 'calendario', 'quadrante', 'lancette'],
  'chiudi': ['estrai', 'rotore', 'fondello'],
};

class Revision {
  final String id;
  String watchName;
  String caliberId;
  bool hasDate;
  final DateTime started;
  final Set<String> done;
  final Set<String> skipped;
  final Map<String, String> notes;
  final Map<String, List<String>> photos; // stepId -> file path
  final List<Measurement> measurements;
  final Map<String, PhotoMarks> marks;
  int currentIndex;

  Revision({
    required this.id,
    required this.watchName,
    required this.caliberId,
    required this.hasDate,
    required this.started,
    Set<String>? done,
    Set<String>? skipped,
    Map<String, String>? notes,
    Map<String, List<String>>? photos,
    List<Measurement>? measurements,
    Map<String, PhotoMarks>? marks,
    this.currentIndex = 0,
  })  : done = done ?? <String>{},
        skipped = skipped ?? <String>{},
        notes = notes ?? <String, String>{},
        photos = photos ?? <String, List<String>>{},
        measurements = measurements ?? <Measurement>[],
        marks = marks ?? <String, PhotoMarks>{};

  /// Prossima lettera libera per lo scomparto del contenitore.
  String nextCompartment() {
    final used = marks.values.map((m) => m.compartment).whereType<String>().toSet();
    for (var i = 0; i < 26; i++) {
      final l = String.fromCharCode(65 + i);
      if (!used.contains(l)) return l;
    }
    return '+';
  }

  Caliber get caliber => caliberById(caliberId);

  /// I passi che valgono per questo orologio.
  List<ServiceStep> get steps => stepsFor(caliber.type, hasDate);

  double get progress {
    final s = steps;
    if (s.isEmpty) return 0;
    final n = s.where((x) => done.contains(x.id) || skipped.contains(x.id)).length;
    return n / s.length;
  }

  bool get finished => progress >= 1.0;

  Map<String, dynamic> toJson() => {
        'id': id,
        'watchName': watchName,
        'caliberId': caliberId,
        'hasDate': hasDate,
        'started': started.toIso8601String(),
        'done': done.toList(),
        'skipped': skipped.toList(),
        'notes': notes,
        'photos': photos,
        'measurements': measurements.map((m) => m.toJson()).toList(),
        'marks': marks.map((k, v) => MapEntry(k, v.toJson())),
        'currentIndex': currentIndex,
      };

  factory Revision.fromJson(Map<String, dynamic> j) => Revision(
        id: j['id'] as String,
        watchName: j['watchName'] as String,
        caliberId: j['caliberId'] as String,
        hasDate: (j['hasDate'] as bool?) ?? true,
        started: DateTime.parse(j['started'] as String),
        done: {...((j['done'] as List?) ?? const []).cast<String>()},
        skipped: {...((j['skipped'] as List?) ?? const []).cast<String>()},
        notes: ((j['notes'] as Map?) ?? const {}).map((k, v) => MapEntry(k as String, v as String)),
        photos: ((j['photos'] as Map?) ?? const {})
            .map((k, v) => MapEntry(k as String, (v as List).cast<String>().toList())),
        measurements: ((j['measurements'] as List?) ?? const [])
            .map((m) => Measurement.fromJson(Map<String, dynamic>.from(m as Map)))
            .toList(),
        marks: ((j['marks'] as Map?) ?? const {})
            .map((k, v) => MapEntry(k as String, PhotoMarks.fromJson(Map<String, dynamic>.from(v as Map)))),
        currentIndex: (j['currentIndex'] as num?)?.toInt() ?? 0,
      );

  static String encodeList(List<Revision> list) =>
      jsonEncode(list.map((r) => r.toJson()).toList());

  static List<Revision> decodeList(String? s) {
    if (s == null || s.isEmpty) return [];
    try {
      final raw = jsonDecode(s) as List;
      return raw.map((e) => Revision.fromJson(Map<String, dynamic>.from(e as Map))).toList();
    } catch (_) {
      return [];
    }
  }
}

/// Filtra la sequenza universale per tipo di carica e presenza della data.
List<ServiceStep> stepsFor(WindType type, bool hasDate) {
  return universalSteps.where((s) {
    if (s.applies == Applies.automaticOnly && type != WindType.automatic) return false;
    if (s.applies == Applies.manualOnly && type != WindType.manual) return false;
    if (s.id == 'calendario' && !hasDate) return false;
    return true;
  }).toList();
}
