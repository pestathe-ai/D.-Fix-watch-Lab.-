import 'dart:convert';

import 'package:d_fix_watch_lab/art/actions.dart';
import 'package:d_fix_watch_lab/art/scene.dart';
import 'package:d_fix_watch_lab/data/calibers.dart';
import 'package:d_fix_watch_lab/data/components.dart';
import 'package:d_fix_watch_lab/logic/revision.dart';
import 'package:flutter_test/flutter_test.dart';

void main() {
  test('ogni vite appartiene a un pezzo della scena', () {
    for (final s in screwDefs) {
      expect(sceneItem(s.item), isNotNull, reason: s.id);
    }
    expect(screwDefs.map((s) => s.id).toSet().length, screwDefs.length);
    expect(partById('viti'), isNotNull);
  });

  for (final auto in [true, false]) {
    for (final date in [true, false]) {
      test('smonta e rimonta vite per vite (automatico=$auto, data=$date)', () {
        final steps = stepsFor(auto ? WindType.automatic : WindType.manual, date);
        final full = fullSet(automatic: auto, date: date);
        var present = {...full};
        final unscrewed = <String>[];
        final screwedIn = <String>[];
        for (final st in steps) {
          for (final a in actionsFor(st, present, automatic: auto, date: date)) {
            switch (a.type) {
              case ActionType.unscrew:
                expect(present.contains(a.ids.first), isTrue, reason: '${st.id}: ${a.ids.first} già tolta');
                unscrewed.add(a.ids.first);
              case ActionType.screw:
                expect(present.contains(a.ids.first), isFalse, reason: '${st.id}: ${a.ids.first} già avvitata');
                final item = screwById(a.ids.first)!.item;
                expect(present.contains(item), isTrue, reason: '${st.id}: avvito su un pezzo assente');
                screwedIn.add(a.ids.first);
              case ActionType.lift:
                for (final id in a.ids) {
                  for (final s in screwsOf(id)) {
                    expect(present.contains(s.id), isFalse, reason: '${st.id}: sollevo $id con la vite ${s.id}');
                  }
                }
              default:
                break;
            }
            present = applyAction(present, a);
          }
          if (st.id == 'prepulizia') {
            expect(present, {'p_platina', 'q_platina'}, reason: 'dopo lo smontaggio restano le platine');
          }
        }
        expect(present, full, reason: 'alla fine tutto deve essere rimontato');
        final allScrews = screwDefs.where((s) => full.contains(s.id)).map((s) => s.id).toSet();
        expect(unscrewed.toSet(), allScrews);
        expect(unscrewed.length, allScrews.length);
        expect(screwedIn.toSet(), allScrews);
        expect(screwedIn.length, allScrews.length);
      });
    }
  }

  test('il passo del bilanciere toglie il ponte col bilanciere attaccato', () {
    final steps = stepsFor(WindType.automatic, true);
    final i = steps.indexWhere((s) => s.id == 'bilanciere');
    final p = presentWithScrewsBefore(steps, i, automatic: true, date: true);
    final acts = actionsFor(steps[i], p, automatic: true, date: true);
    expect(acts.map((a) => a.type), [ActionType.unscrew, ActionType.lift]);
    expect(acts.last.ids.toSet(), {'ponte_bilanciere', 'racchetta', 'spirale', 'bilanciere'});
    expect(acts.last.text, contains('bilanciere attaccato'));
  });

  test('la vite della ruota di carica avvisa del filetto sinistro', () {
    final steps = stepsFor(WindType.automatic, true);
    final i = steps.indexWhere((s) => s.id == 'carica');
    final p = presentWithScrewsBefore(steps, i, automatic: true, date: true);
    final acts = actionsFor(steps[i], p, automatic: true, date: true);
    final lh = acts.firstWhere((a) => a.ids.first == 'v_ruota_carica');
    expect(lh.warn, isTrue);
    expect(lh.detail, contains('ORARIO'));
    expect(lh.toJson()['lh'], isTrue);
    expect(jsonEncode(lh.toJson()), contains('"t":"unscrew"'));
  });

  test('il treno: 3 viti, poi il ponte, poi le ruote', () {
    final steps = stepsFor(WindType.manual, false);
    final i = steps.indexWhere((s) => s.id == 'treno_out');
    final p = presentWithScrewsBefore(steps, i, automatic: false, date: false);
    final acts = actionsFor(steps[i], p, automatic: false, date: false);
    expect(acts.take(3).every((a) => a.type == ActionType.unscrew), isTrue);
    expect(acts[0].text, 'Svita la vite 1 di 3 del ponte del treno');
    expect(acts[3].type, ActionType.lift);
    expect(acts[3].ids, ['ponte_treno']);
    expect(acts.length, 8);
  });

  test('testi in italiano corretto', () {
    final steps = stepsFor(WindType.automatic, true);
    var p = fullSet(automatic: true, date: true);
    for (final st in steps) {
      for (final a in actionsFor(st, p, automatic: true, date: true)) {
        expect(a.text.contains('  '), isFalse, reason: a.text);
        expect(a.text.contains('null'), isFalse, reason: a.text);
        p = applyAction(p, a);
      }
    }
  });
}
