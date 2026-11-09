import 'dart:io';

import 'package:d_fix_watch_lab/data/steps.dart';
import 'package:d_fix_watch_lab/data/components.dart';
import 'package:d_fix_watch_lab/ui/render_card.dart';
import 'package:d_fix_watch_lab/ui/step_media.dart';
import 'package:flutter_test/flutter_test.dart';

void main() {
  test('ogni immagine realistica esiste ed è di un passo vero', () {
    final ids = universalSteps.map((s) => s.id).toSet();
    for (final id in renderSteps) {
      expect(ids, contains(id));
      expect(File(renderAsset(id)).existsSync(), isTrue, reason: renderAsset(id));
    }
    expect(File('assets/renders/scappamento.webp').existsSync(), isTrue);
  });

  test('ogni foto dei pezzi esiste e i pezzi dei passi ne hanno una', () {
    for (final id in partRenders) {
      expect(File('assets/renders/parts/$id.webp').existsSync(), isTrue, reason: id);
    }
    var withPhoto = 0;
    for (final p in parts) {
      final a = partPhoto(p.id);
      if (a != null) {
        withPhoto++;
        expect(File(a).existsSync(), isTrue, reason: a);
      }
    }
    expect(withPhoto, greaterThan(25));
  });
}
