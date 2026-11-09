import 'dart:io';

import 'package:d_fix_watch_lab/data/steps.dart';
import 'package:d_fix_watch_lab/ui/render_card.dart';
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
}
