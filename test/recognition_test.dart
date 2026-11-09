import 'dart:convert';
import 'dart:math' as math;
import 'dart:typed_data';

import 'package:d_fix_watch_lab/data/calibers.dart';
import 'package:d_fix_watch_lab/data/steps.dart';
import 'package:d_fix_watch_lab/logic/caliber_match.dart';
import 'package:d_fix_watch_lab/logic/gemini.dart';
import 'package:d_fix_watch_lab/logic/revision.dart';
import 'package:d_fix_watch_lab/logic/screw_detector.dart';
import 'package:flutter_test/flutter_test.dart';

/// Immagine sintetica: fondo metallico, due ruote dorate, un ponte, viti con fessura, rubini.
(Uint8List, int, int, List<(double, double, double)>) synthMovement({bool blue = false, int seed = 3}) {
  const w = 480, h = 360;
  final rnd = math.Random(seed);
  final px = Float64List(w * h * 3);
  void set(int x, int y, double r, double g, double b) {
    if (x < 0 || y < 0 || x >= w || y >= h) return;
    final i = (y * w + x) * 3;
    px[i] = r;
    px[i + 1] = g;
    px[i + 2] = b;
  }

  for (var y = 0; y < h; y++) {
    for (var x = 0; x < w; x++) {
      final n = (rnd.nextDouble() - 0.5) * 0.06;
      set(x, y, 0.71 + n, 0.72 + n, 0.75 + n);
    }
  }
  void disc(double cx, double cy, double r, double cr, double cg, double cb) {
    for (var y = (cy - r).floor(); y <= (cy + r).ceil(); y++) {
      for (var x = (cx - r).floor(); x <= (cx + r).ceil(); x++) {
        final d = math.sqrt((x - cx) * (x - cx) + (y - cy) * (y - cy));
        if (d <= r) set(x, y, cr, cg, cb);
        if (d > r - 1.2 && d <= r) set(x, y, cr * 0.5, cg * 0.5, cb * 0.5);
      }
    }
  }

  disc(120, 110, 70, 0.84, 0.70, 0.38);
  disc(330, 210, 90, 0.84, 0.70, 0.38);
  for (final j in const [(160, 80), (300, 240), (400, 120)]) {
    disc(j.$1.toDouble(), j.$2.toDouble(), 6, 0.78, 0.12, 0.35);
  }
  final screws = <(double, double, double)>[(90, 280, 11), (230, 250, 9), (210, 320, 10), (380, 60, 13), (440, 300, 9)];
  for (final s in screws) {
    if (blue) {
      disc(s.$1, s.$2, s.$3, 0.17, 0.30, 0.70);
    } else {
      disc(s.$1, s.$2, s.$3, 0.80, 0.81, 0.83);
    }
    final a = rnd.nextDouble() * math.pi;
    for (var l = -s.$3 * 0.85; l <= s.$3 * 0.85; l += 0.5) {
      for (var t = -1.2; t <= 1.2; t += 0.6) {
        set((s.$1 + l * math.cos(a) - t * math.sin(a)).round(), (s.$2 + l * math.sin(a) + t * math.cos(a)).round(), 0.2, 0.2, 0.23);
      }
    }
  }
  final rgba = Uint8List(w * h * 4);
  for (var i = 0; i < w * h; i++) {
    rgba[i * 4] = (px[i * 3].clamp(0.0, 1.0) * 255).round();
    rgba[i * 4 + 1] = (px[i * 3 + 1].clamp(0.0, 1.0) * 255).round();
    rgba[i * 4 + 2] = (px[i * 3 + 2].clamp(0.0, 1.0) * 255).round();
    rgba[i * 4 + 3] = 255;
  }
  return (rgba, w, h, screws);
}

void main() {
  group('Riconoscimento dalle scritte', () {
    test('ETA 2824-2 con 25 rubini', () {
      final r = matchEngravings('SWISS MADE\nETA 2824-2\nTWENTY-FIVE 25 JEWELS\nUNADJUSTED');
      expect(r.guesses.first.caliber.id, 'eta2824');
      expect(r.jewels, 25);
    });
    test('Seiko NH35A anche con errori di lettura', () {
      expect(matchEngravings('NH3SA\nTWENTY FOUR JEWELS').guesses.first.caliber.id, 'nh35');
      expect(matchEngravings('NH 35 A').guesses.first.caliber.id, 'nh35');
    });
    test('Sellita con spazi e trattini', () {
      expect(matchEngravings('SELLITA SW 200-1').guesses.first.caliber.id, 'sw200');
    });
    test('Miyota e Unitas', () {
      expect(matchEngravings('MIYOTA 8215 21 JEWELS').guesses.first.caliber.id, 'miyota8215');
      expect(matchEngravings('UNITAS 6497 17 RUBIS').guesses.first.caliber.id, 'eta6497');
    });
    test('rubini in numeri romani', () {
      expect(matchEngravings('XXV JEWELS').jewels, 25);
    });
    test('cronografo riconosciuto e segnalato', () {
      final g = matchEngravings('VALJOUX 7750').guesses.first.caliber;
      expect(g.chrono, isTrue);
    });
    test('Rolex 3135 dalle scritte tipiche del ponte', () {
      final g = matchEngravings('ROLEX\nORIGINAL\nSWISS\nTHIRTYONE (31) JEWELS\nADJUSTED TO 5 POSITIONS\n3135').guesses;
      expect(g.first.caliber.id, 'rolex3135');
    });
    test('solo la marca: propone i suoi calibri, coi rubini davanti', () {
      final g = matchEngravings('ROLEX\nGENEVA SWISS\n31 JEWELS').guesses;
      expect(g, isNotEmpty);
      expect(g.first.caliber.id, startsWith('rolex'));
      expect(g.first.caliber.jewels, 31);
    });
    test('Omega, Vostok e Powermatic', () {
      expect(matchEngravings('OMEGA CO-AXIAL 8500').guesses.first.caliber.id, 'omega8500');
      expect(matchEngravings('VOSTOK 2416B 31 JEWELS').guesses.first.caliber.id, 'vostok2416');
      expect(matchEngravings('SWISS C07.111 23 JEWELS').guesses.first.caliber.id, 'powermatic80');
    });
    test('marche poco note: Raketa, Yema, Citizen, Tissot', () {
      expect(matchEngravings('RAKETA MADE IN USSR 19 JEWELS').guesses.first.caliber.id, 'raketa2609');
      expect(matchEngravings('PAKETA 2609.HA').guesses.first.caliber.id, 'raketa2609');
      expect(matchEngravings('YEMA').guesses, isNotEmpty);
      expect(matchEngravings('CITIZEN 21 JEWELS').guesses.first.caliber.jewels, 21);
      expect(matchEngravings('TISSOT SWISS POWERMATIC 80').guesses.first.caliber.id, 'powermatic80');
      expect(matchEngravings('SLAVA 2427').guesses.first.caliber.id, 'slava2427');
    });
    test('Speedmaster 1861 dalla foto vera: marca + rubini, il numero di serie non conta', () {
      // testo come lo legge l'OCR dalla foto dell'utente (ponte con OMEGA, EIGHTEEN 18 JEWELS, seriale in basso)
      final info = matchEngravings('SWISS\nOMEGA\nEIGHTEEN\n18\nJEWELS\n77009123');
      expect(info.jewels, 18);
      expect(info.guesses.first.caliber.id, 'omega1861');
      expect(info.guesses.any((g) => g.caliber.id == 'seiko6309' && g.score > 0.3), isFalse);
      final solo = matchEngravings('OMEGA SWISS EIGHTEEN JEWELS 7700912');
      expect(solo.jewels, 18);
      expect(solo.guesses.first.caliber.id, 'omega1861');
    });
    test('Omega vintage, Zenith, Bulova, Mondia', () {
      expect(matchEngravings('OMEGA 565 24 JEWELS').guesses.first.caliber.id, 'omega56x');
      expect(matchEngravings('OMEGA WATCH CO 620').guesses.first.caliber.id, 'omega601');
      expect(matchEngravings('OMEGA 1020').guesses.first.caliber.id, 'omega1012');
      expect(matchEngravings('OMEGA 684').guesses.first.caliber.id, 'omega66x');
      expect(matchEngravings('ZENITH 2552PC').guesses.first.caliber.id, 'zenith2552');
      expect(matchEngravings('BULOVA 11ANACD').guesses.first.caliber.id, 'bulova11a');
      expect(matchEngravings('MONDIA AS 1920').guesses.first.caliber.id, 'as1920');
      expect(matchEngravings('MONDIA').guesses, isNotEmpty);
    });
    test('Yema vintage manuale 17 rubini → movimenti francesi FE', () {
      final g = matchEngravings('YEMA\n17JEWELS').guesses;
      expect(g.first.caliber.jewels, 17);
      expect(matchEngravings('17 JEWELS\nPS31').guesses.first.caliber.id, 'jeambrun_ps31');
      expect(matchEngravings('CUPILLARD 233').guesses.first.caliber.id, 'fe233');
    });
    test('famiglia del movimento: secondi piccoli e com\'è fatto', () {
      final ps31 = caliberById('jeambrun_ps31');
      expect(ps31.smallSeconds, isTrue);
      expect(ps31.architecture, contains('secondi piccoli'));
      expect(ps31.architecture, contains('carica manuale'));
      expect(caliberById('nh35').smallSeconds, isFalse);
      expect(caliberById('nomosalpha').architecture, contains('tre quarti'));
      expect(ps31.photosUrl.toString(), contains('Jeambrun'));
      final c = Caliber.fromJson(Caliber.unknown(name: 'X', automatic: false).toJson());
      expect(c.smallSeconds, isFalse);
    });
    test('ogni marca rimanda a calibri esistenti', () {
      final ids = calibers.map((c) => c.id).toSet();
      for (final e in brandCalibers.entries) {
        for (final id in e.value) {
          expect(ids, contains(id), reason: '${e.key} → $id');
        }
      }
      expect(brandCalibers.length, greaterThan(120));
      expect(calibers.length, greaterThan(100));
    });
    test('movimento sconosciuto resta nella revisione', () {
      final c = Caliber.unknown(name: 'Calibro K58', automatic: false, hasDate: false);
      final back = Caliber.fromJson(c.toJson());
      expect(back.name, 'Calibro K58');
      expect(back.type, WindType.manual);
      expect(back.custom, isTrue);
      expect(back.hasDate, isFalse);
    });
    test('testo senza calibro: nessun candidato', () {
      expect(matchEngravings('SWISS MADE ADJUSTED').guesses, isEmpty);
    });
    test('ogni calibro ha scritte riconoscibili', () {
      for (final c in calibers.where((c) => !c.generic)) {
        expect(c.engravings, isNotEmpty, reason: c.id);
        final g = matchEngravings(c.engravings.first).guesses;
        expect(g.map((x) => x.caliber.id), contains(c.id), reason: c.id);
      }
    });
  });

  group('Risposte di Gemini', () {
    String wrap(Map<String, dynamic> j) => jsonEncode({
          'candidates': [
            {
              'content': {
                'parts': [
                  {'text': '```json\n${jsonEncode(j)}\n```'},
                ],
              },
            },
          ],
        });

    test('calibro', () {
      final j = parseGeminiJson(wrap({'caliber_id': 'nh35', 'caliber_text': 'NH35A', 'confidence': 0.9, 'reason': 'scritta visibile'}));
      final g = geminiCaliberGuesses(j);
      expect(g.first.caliber.id, 'nh35');
      expect(g.first.source, 'AI');
    });
    test('calibro sconosciuto: sequenza universale', () {
      final g = geminiCaliberGuesses({
        'caliber_id': null,
        'name': 'Kienzle 058',
        'automatic': false,
        'confidence': 0.7,
        'tips': ['Il bilanciere ha un antiurto senza rubino.'],
      });
      expect(g.first.caliber.custom, isTrue);
      expect(g.first.caliber.type, WindType.manual);
      expect(g.first.caliber.name, 'Kienzle 058');
      expect(g.first.caliber.notes.first, contains('antiurto'));
      expect(g.first.why.first, contains('Kienzle 058'));
    });
    test('viti in box_2d', () {
      final j = parseGeminiJson(wrap({
        'screws': [
          {'box_2d': [100, 200, 140, 240], 'this_step': true, 'part': 'ponte del treno'},
          {'box_2d': [500, 500, 540, 540], 'this_step': false},
        ],
        'tip': 'Occhio al perno.',
      }));
      final s = geminiScrews(j);
      expect(s.screws.length, 1);
      expect(s.screws.first.x, closeTo(0.22, 1e-9));
      expect(s.screws.first.y, closeTo(0.12, 1e-9));
      expect(s.tip, 'Occhio al perno.');
    });
  });

  group('Viti trovate sulla foto (offline)', () {
    for (final blue in [false, true]) {
      test(blue ? 'viti azzurrate' : 'viti in acciaio', () {
        final (rgba, w, h, truth) = synthMovement(blue: blue);
        final found = detectScrews(rgba, w, h);
        var hits = 0;
        for (final t in truth) {
          final ok = found.any((f) {
            final dx = f.x * w - t.$1, dy = f.y * h - t.$2;
            return math.sqrt(dx * dx + dy * dy) < t.$3 * 0.6;
          });
          if (ok) hits++;
        }
        expect(hits, greaterThanOrEqualTo(truth.length - 1), reason: 'trovate $hits di ${truth.length}');
        expect(found.length, lessThanOrEqualTo(truth.length + 2), reason: 'troppe: ${found.length}');
      });
    }
    test('immagine vuota', () {
      expect(detectScrews(Uint8List(0), 0, 0), isEmpty);
    });
  });

  group('Mappa del tuo orologio', () {
    test('salvataggio delle viti segnate e scomparti', () {
      final r = Revision(id: '1', watchName: 'x', caliberId: 'nh35', hasDate: true, started: DateTime(2026));
      expect(r.nextCompartment(), 'A');
      r.marks['treno_out'] = PhotoMarks('/a.jpg', [Mark(0.2, 0.3, 0.02, leftHand: true, out: true)], compartment: 'A', aspect: 1.33);
      expect(r.nextCompartment(), 'B');
      final back = Revision.decodeList(Revision.encodeList([r])).single;
      final pm = back.marks['treno_out']!;
      expect(pm.compartment, 'A');
      expect(pm.aspect, 1.33);
      expect(pm.marks.single.leftHand, isTrue);
      expect(pm.marks.single.out, isTrue);
    });
    test('ogni passo di rimontaggio rimanda a passi di smontaggio esistenti e precedenti', () {
      final ids = universalSteps.map((s) => s.id).toList();
      for (final e in reassemblyOf.entries) {
        expect(ids, contains(e.key));
        for (final src in e.value) {
          expect(ids, contains(src), reason: src);
          expect(ids.indexOf(src), lessThan(ids.indexOf(e.key)), reason: '${e.key} <- $src');
        }
      }
    });
  });
}
