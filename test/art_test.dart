import 'dart:io';
import 'dart:ui' as ui;

import 'package:d_fix_watch_lab/art/anim_math.dart';
import 'package:d_fix_watch_lab/art/movement_view.dart';
import 'package:d_fix_watch_lab/art/part_art.dart';
import 'package:d_fix_watch_lab/art/scene.dart';
import 'package:d_fix_watch_lab/art/scene_steps.dart';
import 'package:d_fix_watch_lab/data/calibers.dart';
import 'package:d_fix_watch_lab/data/components.dart';
import 'package:d_fix_watch_lab/data/steps.dart';
import 'package:d_fix_watch_lab/logic/revision.dart';
import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';

Future<void> _shot(String name, CustomPainter p, Size size) async {
  final rec = ui.PictureRecorder();
  final canvas = Canvas(rec);
  canvas.drawRect(Offset.zero & size, Paint()..color = const Color(0xFFFFF8F0));
  p.paint(canvas, size);
  final img = await rec.endRecording().toImage(size.width.toInt(), size.height.toInt());
  final data = await img.toByteData(format: ui.ImageByteFormat.png);
  final dir = Directory('build/shots')..createSync(recursive: true);
  File('${dir.path}/$name.png').writeAsBytesSync(data!.buffer.asUint8List());
}

void main() {
  group('Scena', () {
    test('ogni pezzo disegnato rimanda a una voce del glossario', () {
      for (final it in sceneItems) {
        expect(partById(it.partId), isNotNull, reason: it.id);
      }
    });

    test('id dei pezzi della scena unici', () {
      expect(sceneItems.map((s) => s.id).toSet().length, sceneItems.length);
    });

    test('le operazioni dei passi usano pezzi e passi esistenti', () {
      final stepIds = universalSteps.map((s) => s.id).toSet();
      for (final e in sceneOps.entries) {
        expect(stepIds.contains(e.key), isTrue, reason: 'passo ${e.key}');
        for (final id in [...e.value.remove, ...e.value.add, ...e.value.highlight]) {
          expect(sceneItem(id), isNotNull, reason: '${e.key}: $id');
        }
      }
    });

    for (final auto in [true, false]) {
      for (final date in [true, false]) {
        test('smonta e rimonta tutto (automatico=$auto, data=$date)', () {
          final steps = stepsFor(auto ? WindType.automatic : WindType.manual, date);
          final start = presentBefore(steps, 0, automatic: auto, date: date);
          final end = presentBefore(steps, steps.length, automatic: auto, date: date);
          expect(end, start, reason: 'alla fine il movimento deve essere completo');
          // a metà (dopo lo smontaggio) restano solo le platine
          final mid = steps.indexWhere((s) => s.id == 'prepulizia');
          final empty = presentBefore(steps, mid, automatic: auto, date: date);
          expect(empty, {'p_platina', 'q_platina'});
        });
      }
    }

    test('ogni pezzo tolto è presente prima di toglierlo', () {
      final steps = stepsFor(WindType.automatic, true);
      for (var i = 0; i < steps.length; i++) {
        final op = sceneOps[steps[i].id];
        if (op == null) continue;
        final before = presentBefore(steps, i, automatic: true, date: true);
        for (final id in op.remove) {
          expect(before.contains(id), isTrue, reason: '${steps[i].id}: $id già tolto');
        }
        for (final id in op.add) {
          expect(before.contains(id), isFalse, reason: '${steps[i].id}: $id già presente');
        }
      }
    });

    test('tocco sul bilanciere nel lato ponti (specchiato)', () {
      const size = Size(1000, 1000);
      final all = {for (final it in sceneItems) it.id};
      final screen = MovementPainter.toScreen(Geo.fourth, size, Side.ponti);
      final hit = hitItem(screen, size, Side.ponti, all.difference({'fondello', 'rotore', 'ponte_treno'}));
      expect(hit?.id, 'ruota_secondi');
    });

    test('molti pezzi del glossario hanno un disegno', () {
      final withArt = parts.where((p) => artSpecFor(p.id) != null).length;
      expect(withArt, greaterThanOrEqualTo(parts.length - 2));
    });
  });

  group('Scappamento', () {
    test('la ruota avanza di un mezzo passo per ogni tic', () {
      final a = escapementAt(0.5 * 3.14159265);
      final b = escapementAt(1.5 * 3.14159265);
      expect((b.wheelSteps - a.wheelSteps).round(), 1);
    });

    test('fuori dalla finestra la forchetta è ferma a fine corsa', () {
      final s = escapementAt(0.5 * 3.14159265);
      expect(s.phase, 'libero');
      expect(s.forkAngle.abs(), closeTo(escForkMax, 1e-9));
    });
  });

  testWidgets('schermate di verifica', (tester) async {
    if (Platform.environment['SHOTS'] != '1') return;
    await tester.runAsync(() async {
      final all = {for (final it in sceneItems) it.id};
      await _shot('scena_ponti_completa', MovementPainter(side: Side.ponti, present: all), const Size(800, 800));
      await _shot(
          'scena_ponti_senza_rotore',
          MovementPainter(side: Side.ponti, present: all.difference({'fondello', 'rotore'})),
          const Size(800, 800));
      await _shot(
          'scena_ponti_senza_automatico',
          MovementPainter(
              side: Side.ponti,
              present: all.difference({'fondello', 'rotore', 'ponte_automatico', 'invertitore_1', 'invertitore_2', 'p_cassa'}),
              markers: sceneOps['scarica']!.markers),
          const Size(800, 800));
      await _shot(
          'scena_ponti_raggi_x',
          MovementPainter(
              side: Side.ponti,
              xray: true,
              present: all.difference({'fondello', 'rotore', 'ponte_automatico', 'invertitore_1', 'invertitore_2'})),
          const Size(800, 800));
      await _shot(
          'scena_ponti_solo_treno',
          MovementPainter(
              side: Side.ponti,
              present: {'p_platina', 'ruota_centro', 'ruota_terzo', 'ruota_secondi', 'ruota_scappamento', 'bariletto', 'ancora', 'bilanciere', 'spirale'}),
          const Size(800, 800));
      await _shot('scena_quadrante_completa', MovementPainter(side: Side.quadrante, present: all), const Size(800, 800));
      await _shot(
          'scena_quadrante_calendario',
          MovementPainter(side: Side.quadrante, present: all.difference({'quadrante', 'lancette', 'q_cassa'}), highlight: {'placca_calendario'}),
          const Size(800, 800));
      await _shot(
          'scena_quadrante_remontoir',
          MovementPainter(
              side: Side.quadrante,
              present: {'q_platina', 'tiretto', 'pignone_carica', 'pignone_scorrevole', 'ruota_rinvio', 'bascula', 'q_stelo', 'chaussee', 'ruota_minuteria', 'ruota_ore'}),
          const Size(800, 800));
      for (final id in ['ancora', 'bilanciere', 'bariletto', 'tiretto', 'treno', 'antiurto', 'briglia', 'rubini', 'datario', 'racchetta']) {
        await _shot('pezzo_$id', PartArtPainter(artSpecFor(id)!), const Size(380, 200));
      }
    });
  });
}
