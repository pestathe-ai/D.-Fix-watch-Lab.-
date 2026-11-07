import 'dart:io';

import 'package:flutter/foundation.dart';
import 'package:path_provider/path_provider.dart';
import 'package:shared_preferences/shared_preferences.dart';

import 'revision.dart';

/// Archivio delle revisioni, salvate sul telefono.
class RevisionStore extends ChangeNotifier {
  static const _key = 'revisions_v1';
  final List<Revision> items = [];
  SharedPreferences? _prefs;

  Future<void> load() async {
    _prefs = await SharedPreferences.getInstance();
    items
      ..clear()
      ..addAll(Revision.decodeList(_prefs!.getString(_key)));
    items.sort((a, b) => b.started.compareTo(a.started));
    notifyListeners();
  }

  Future<void> save() async {
    await _prefs?.setString(_key, Revision.encodeList(items));
    notifyListeners();
  }

  Future<void> add(Revision r) async {
    items.insert(0, r);
    await save();
  }

  Future<void> remove(Revision r) async {
    for (final list in r.photos.values) {
      for (final p in list) {
        try {
          final f = File(p);
          if (await f.exists()) await f.delete();
        } catch (_) {}
      }
    }
    items.removeWhere((x) => x.id == r.id);
    await save();
  }

  /// Copia una foto scattata nella cartella permanente dell'app.
  Future<String> keepPhoto(String tempPath, String revisionId, String stepId) async {
    final dir = await getApplicationDocumentsDirectory();
    final folder = Directory('${dir.path}/foto/$revisionId');
    if (!await folder.exists()) await folder.create(recursive: true);
    final name = '${stepId}_${DateTime.now().millisecondsSinceEpoch}.jpg';
    final dest = await File(tempPath).copy('${folder.path}/$name');
    return dest.path;
  }
}
