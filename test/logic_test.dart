import 'dart:math' as math;
import 'dart:typed_data';

import 'package:d_fix_watch_lab/data/calibers.dart';
import 'package:d_fix_watch_lab/data/components.dart';
import 'package:d_fix_watch_lab/data/steps.dart';
import 'package:d_fix_watch_lab/logic/beat_analyzer.dart';
import 'package:d_fix_watch_lab/logic/revision.dart';
import 'package:flutter_test/flutter_test.dart';

/// Genera un ticchettio sintetico: tre colpetti per tic, più rumore.
Int16List synth({
  required int bph,
  required double rate,
  double beMs = 0,
  double noise = 0.02,
  int sr = 44100,
  double secs = 12,
  int seed = 1,
}) {
  final rnd = math.Random(seed);
  double gauss() {
    final u1 = rnd.nextDouble().clamp(1e-12, 1.0);
    final u2 = rnd.nextDouble();
    return math.sqrt(-2 * math.log(u1)) * math.cos(2 * math.pi * u2);
  }

  final n = (secs * sr).toInt();
  final x = Float64List(n);
  for (var i = 0; i < n; i++) {
    x[i] = gauss() * noise;
  }
  final period = 3600.0 / bph / (1 + rate / 86400);
  var t = 0.05;
  var i = 0;
  while (t < secs - 0.05) {
    final tt = t + (i.isOdd ? beMs / 1000 : 0);
    final s = (tt * sr).toInt();
    for (final part in const [(0.0, 0.5), (0.004, 0.8), (0.009, 0.4)]) {
      final k = s + (part.$1 * sr).toInt();
      final len = (0.0015 * sr).toInt();
      for (var j = 0; j < len && k + j < n; j++) {
        x[k + j] += part.$2 * math.exp(-j / (0.0003 * sr)) * gauss();
      }
    }
    t += period;
    i++;
  }
  final out = Int16List(n);
  for (var k = 0; k < n; k++) {
    out[k] = (x[k] * 8000).clamp(-32768, 32767).toInt();
  }
  return out;
}

void main() {
  group('Analisi del ticchettio', () {
    for (final c in const [
      (28800, 10.0, 0.0),
      (21600, -25.0, 0.6),
      (18000, 5.0, 0.0),
      (28800, 0.0, 1.2),
      (36000, 30.0, 0.0),
      (19800, -8.0, 0.0),
    ]) {
      test('${c.$1} alt/h, marcia ${c.$2} s/g, battuta ${c.$3} ms', () {
        final res = analyzeBeats(synth(bph: c.$1, rate: c.$2, beMs: c.$3), 44100);
        expect(res, isNotNull);
        expect(res!.bph, c.$1);
        expect(res.reliable, isTrue);
        expect((res.rateSecPerDay - c.$2).abs(), lessThan(8));
        expect((res.beatErrorMs - c.$3).abs(), lessThan(0.6));
      });
    }

    test('frequenza giusta anche con rumore forte', () {
      final res = analyzeBeats(synth(bph: 28800, rate: 0, noise: 0.15), 44100);
      expect(res, isNotNull);
      expect(res!.bph, 28800);
    });

    test('silenzio: nessun risultato affidabile', () {
      final res = analyzeBeats(Int16List(44100 * 6), 44100);
      expect(res == null || !res.reliable, isTrue);
    });

    test('pcm little endian', () {
      final b = Uint8List.fromList([0x01, 0x00, 0xFF, 0xFF]);
      expect(pcmBytesToSamples(b), [1, -1]);
    });
  });

  group('Contenuti', () {
    test('ogni pezzo citato nei passi esiste nel glossario', () {
      for (final s in universalSteps) {
        for (final id in s.partIds) {
          expect(partById(id), isNotNull, reason: 'manca "$id" (passo ${s.id})');
        }
      }
    });

    test('id unici', () {
      expect(universalSteps.map((s) => s.id).toSet().length, universalSteps.length);
      expect(parts.map((p) => p.id).toSet().length, parts.length);
      expect(calibers.map((c) => c.id).toSet().length, calibers.length);
    });

    test('ogni pezzo ha un gruppo valido', () {
      for (final p in parts) {
        expect(partGroups.contains(p.group), isTrue, reason: p.id);
      }
    });

    test('ogni fase dei passi è nota', () {
      for (final s in universalSteps) {
        expect(phases.contains(s.phase), isTrue, reason: s.id);
      }
    });

    test('manuale senza data: niente rotore, automatico, calendario', () {
      final ids = stepsFor(WindType.manual, false).map((s) => s.id).toSet();
      expect(ids.contains('rotore'), isFalse);
      expect(ids.contains('automatico'), isFalse);
      expect(ids.contains('calendario'), isFalse);
      expect(ids.contains('scarica'), isTrue);
    });

    test('automatico con data: tutti i passi', () {
      expect(stepsFor(WindType.automatic, true).length, universalSteps.length);
    });

    test('la molla si scarica prima di togliere l\'ancora', () {
      final ids = universalSteps.map((s) => s.id).toList();
      expect(ids.indexOf('scarica'), lessThan(ids.indexOf('ancora')));
      expect(ids.indexOf('bilanciere'), lessThan(ids.indexOf('ancora')));
    });
  });

  group('Calibri', () {
    test('suggerimenti per 28800 automatico 25 rubini', () {
      final s = suggestCalibers(type: WindType.automatic, bph: 28800, jewels: 25);
      expect(s.first.id, 'eta2824');
    });

    test('suggerimenti per manuale 18000', () {
      final s = suggestCalibers(type: WindType.manual, bph: 18000);
      expect(s.map((c) => c.id), containsAll(['eta6497', 'st36']));
    });

    test('mm in linee', () {
      expect(mmToLignes(25.6).toStringAsFixed(1), '11.3');
    });

    test('formato numeri', () {
      expect(formatBph(28800), '28.800');
    });
  });

  group('Revisione', () {
    test('salvataggio e lettura JSON', () {
      final r = Revision(
        id: '1',
        watchName: 'Prova',
        caliberId: 'nh35',
        hasDate: true,
        started: DateTime(2026, 11, 7),
      );
      r.done.add('banco');
      r.notes['banco'] = 'ok';
      r.photos['fondello'] = ['/x.jpg'];
      r.measurements.add(Measurement(
          at: DateTime(2026, 11, 7), bph: 21600, rate: 4.2, beatError: 0.3, quality: 0.9, label: 'x'));
      final back = Revision.decodeList(Revision.encodeList([r])).single;
      expect(back.caliber.id, 'nh35');
      expect(back.done, {'banco'});
      expect(back.notes['banco'], 'ok');
      expect(back.photos['fondello'], ['/x.jpg']);
      expect(back.measurements.single.rate, 4.2);
      expect(back.progress, greaterThan(0));
    });

    test('dati rovinati non fanno crashare', () {
      expect(Revision.decodeList('non json'), isEmpty);
    });
  });
}
