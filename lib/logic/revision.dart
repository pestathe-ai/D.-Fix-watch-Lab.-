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
    this.currentIndex = 0,
  })  : done = done ?? <String>{},
        skipped = skipped ?? <String>{},
        notes = notes ?? <String, String>{},
        photos = photos ?? <String, List<String>>{},
        measurements = measurements ?? <Measurement>[];

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
