import 'dart:math' as math;

import 'dart:typed_data';

import 'package:flutter/material.dart';

import 'draw.dart';

/// Lato del movimento mostrato.
enum Side { ponti, quadrante }

/// Un pezzo disegnato nella scena del movimento (schema originale, generico).
/// Coordinate in uno spazio 1000x1000, corona a destra (lato ponti viene
/// poi specchiato in orizzontale, come lo vedi aprendo il fondello).
class SceneItem {
  final String id;
  final String partId; // voce del glossario
  final Side side;
  final int z;
  final bool autoOnly;
  final bool dateOnly;
  final Path shape;
  final Offset anchor;
  final void Function(Canvas canvas) paint;

  SceneItem({
    required this.id,
    required this.partId,
    required this.side,
    required this.z,
    required this.shape,
    required this.anchor,
    required this.paint,
    this.autoOnly = false,
    this.dateOnly = false,
  });
}

class Geo {
  static const c = Offset(500, 500);
  static const plateR = 440.0;
  // lato ponti
  static const barrel = Offset(640, 330);
  static const barrelR = 135.0;
  static const ratchetR = 105.0;
  static const crownWheel = Offset(780, 410);
  static const crownWheelR = 55.0;
  static const click = Offset(548, 214);
  static const center = Offset(500, 500);
  static const third = Offset(370, 610);
  static const fourth = Offset(470, 705);
  static const escape = Offset(580, 730);
  static const pallet = Offset(660, 690);
  static const balance = Offset(760, 640);
  static const balanceR = 100.0;
  static const cockFoot = Offset(815, 728);
  static const rev1 = Offset(420, 270);
  static const rev2 = Offset(505, 335);
  // lato quadrante
  static const settingLeverPivot = Offset(820, 405);
  static const yokePivot = Offset(790, 610);
  static const clutch = Offset(885, 500);
  static const windingPinion = Offset(935, 500);
  static const settingWheel = Offset(860, 572);
  static const minuteWheel = Offset(425, 580);
  static const dateWheel = Offset(380, 410);
  static const jumper = Offset(620, 300);

  /// Punto della forchetta dell'ancora (verso il bilanciere).
  static Offset forkTip() => pallet + (balance - pallet) * 0.62;

  /// Palette dell'ancora: sui bordi della ruota di scappamento.
  static Offset entryPallet() => polar(escape, 52, -2.2);
  static Offset exitPallet() => polar(escape, 52, 0.55);
}

List<SceneItem>? _cache;
List<SceneItem> get sceneItems => _cache ??= _build();

SceneItem? sceneItem(String id) {
  for (final s in sceneItems) {
    if (s.id == id) return s;
  }
  return null;
}

List<SceneItem> _build() {
  final items = <SceneItem>[];
  const c = Geo.c;

  // ================= LATO PONTI =================
  items.add(SceneItem(
    id: 'p_platina',
    partId: 'platina',
    side: Side.ponti,
    z: 0,
    shape: circlePath(c, Geo.plateR),
    anchor: const Offset(200, 380),
    paint: (cv) => _plate(cv),
  ));

  // treno
  items.add(_wheel('ruota_centro', 'ruota_centro', Side.ponti, 1, Geo.center, 115, 80, pinion: 18));
  items.add(_wheel('ruota_terzo', 'ruota_terzo', Side.ponti, 1, Geo.third, 85, 75, pinion: 14));
  items.add(_wheel('ruota_secondi', 'ruota_secondi', Side.ponti, 1, Geo.fourth, 72, 70, pinion: 12));
  items.add(SceneItem(
    id: 'ruota_scappamento',
    partId: 'ruota_scappamento',
    side: Side.ponti,
    z: 1,
    shape: circlePath(Geo.escape, 50),
    anchor: Geo.escape,
    paint: (cv) => drawEscapeWheel(cv, Geo.escape, 50, 0),
  ));

  // bariletto
  items.add(SceneItem(
    id: 'bariletto',
    partId: 'bariletto',
    side: Side.ponti,
    z: 1,
    shape: circlePath(Geo.barrel, Geo.barrelR),
    anchor: Geo.barrel + const Offset(-90, 40),
    paint: (cv) {
      drawWheel(cv, Geo.barrel, Geo.barrelR, 90, spokes: 0, jewel: false);
      cv.drawCircle(Geo.barrel, Geo.barrelR * 0.84, fillPaint(ArtColors.brass));
      cv.drawCircle(Geo.barrel, Geo.barrelR * 0.84, strokePaint(ArtColors.brassDark, 2));
      cv.drawCircle(Geo.barrel, 22, fillPaint(ArtColors.steel));
    },
  ));

  // ancora
  items.add(SceneItem(
    id: 'ancora',
    partId: 'ancora',
    side: Side.ponti,
    z: 2,
    shape: _palletShape(0),
    anchor: Geo.pallet,
    paint: (cv) => drawPalletFork(cv, 0),
  ));

  // bilanciere + spirale
  items.add(SceneItem(
    id: 'bilanciere',
    partId: 'bilanciere',
    side: Side.ponti,
    z: 2,
    shape: circlePath(Geo.balance, Geo.balanceR),
    anchor: Geo.balance + const Offset(-70, -55),
    paint: (cv) => drawBalance(cv, Geo.balance, Geo.balanceR, 0, spiral: false),
  ));
  items.add(SceneItem(
    id: 'spirale',
    partId: 'spirale',
    side: Side.ponti,
    z: 3,
    shape: ringPath(Geo.balance, 62, 18),
    anchor: Geo.balance + const Offset(-40, 20),
    paint: (cv) => cv.drawPath(spiralPath(Geo.balance, 16, 60, 9), strokePaint(ArtColors.spring, 1.6)),
  ));

  // ponti
  final trainBridge = union([
    polyPath(const [
      Offset(455, 455), Offset(545, 465), Offset(560, 560), Offset(625, 700),
      Offset(615, 772), Offset(540, 775), Offset(470, 752), Offset(335, 655), Offset(330, 575), Offset(440, 470),
    ]),
    circlePath(Geo.center, 42),
    circlePath(Geo.third, 40),
    circlePath(Geo.fourth, 40),
    circlePath(Geo.escape, 36),
  ]);
  items.add(SceneItem(
    id: 'ponte_treno',
    partId: 'ponte_treno',
    side: Side.ponti,
    z: 4,
    shape: trainBridge,
    anchor: const Offset(470, 640),
    paint: (cv) {
      drawBridge(cv, trainBridge);
      for (final o in const [Geo.center, Geo.third, Geo.fourth, Geo.escape]) {
        drawJewel(cv, o, 9);
      }
      drawScrew(cv, const Offset(420, 560), 13);
      drawScrew(cv, const Offset(560, 640), 13);
      drawScrew(cv, const Offset(400, 680), 13);
    },
  ));

  final palletBridge = barPath(Geo.pallet + const Offset(-30, 35), Geo.pallet + const Offset(25, -30), 44);
  items.add(SceneItem(
    id: 'ponte_ancora',
    partId: 'ponte_ancora',
    side: Side.ponti,
    z: 4,
    shape: palletBridge,
    anchor: Geo.pallet,
    paint: (cv) {
      drawBridge(cv, palletBridge);
      drawJewel(cv, Geo.pallet, 7);
      drawScrew(cv, Geo.pallet + const Offset(-24, 28), 11);
    },
  ));

  final barrelBridge = union([
    circlePath(Geo.barrel, 150),
    circlePath(Geo.crownWheel, 72),
    polyPath(const [Offset(700, 230), Offset(830, 350), Offset(790, 470), Offset(650, 470)]),
  ]);
  items.add(SceneItem(
    id: 'ponte_bariletto',
    partId: 'ponte_bariletto',
    side: Side.ponti,
    z: 4,
    shape: barrelBridge,
    anchor: const Offset(720, 455),
    paint: (cv) {
      drawBridge(cv, barrelBridge);
      drawScrew(cv, const Offset(520, 240), 13);
      drawScrew(cv, const Offset(760, 250), 13);
      drawScrew(cv, const Offset(705, 455), 13);
    },
  ));

  final cock = union([
    circlePath(Geo.balance, 44),
    taperPath(Geo.balance, Geo.cockFoot, 70, 82),
  ]);
  items.add(SceneItem(
    id: 'ponte_bilanciere',
    partId: 'ponte_bilanciere',
    side: Side.ponti,
    z: 5,
    shape: cock,
    anchor: Geo.cockFoot,
    paint: (cv) {
      drawBridge(cv, cock);
      drawScrew(cv, Geo.cockFoot, 14);
      cv.drawCircle(Geo.balance, 20, fillPaint(ArtColors.steel));
      cv.drawCircle(Geo.balance, 20, strokePaint(ArtColors.steelDark, 1.5));
      drawJewel(cv, Geo.balance, 9);
    },
  ));

  final reg = barPath(Geo.balance + const Offset(-14, -14), Geo.balance + const Offset(-78, -78), 12);
  items.add(SceneItem(
    id: 'racchetta',
    partId: 'racchetta',
    side: Side.ponti,
    z: 6,
    shape: reg,
    anchor: Geo.balance + const Offset(-70, -70),
    paint: (cv) {
      cv.drawPath(reg, fillPaint(ArtColors.steel));
      cv.drawPath(reg, strokePaint(ArtColors.steelDark, 1.5));
    },
  ));

  // carica: rocchetto, ruota di carica, cricchetto
  items.add(SceneItem(
    id: 'rocchetto_cricco',
    partId: 'rocchetto_cricco',
    side: Side.ponti,
    z: 6,
    shape: circlePath(Geo.barrel, Geo.ratchetR),
    anchor: Geo.barrel + const Offset(40, 50),
    paint: (cv) {
      drawWheel(cv, Geo.barrel, Geo.ratchetR, 60,
          color: ArtColors.steel, dark: ArtColors.steelDark, spokes: 0, jewel: false);
      for (var r = 30.0; r < Geo.ratchetR - 10; r += 10) {
        cv.drawCircle(Geo.barrel, r, strokePaint(Colors.white.withValues(alpha: 0.35), 2));
      }
      drawScrew(cv, Geo.barrel, 16);
    },
  ));
  items.add(SceneItem(
    id: 'ruota_carica',
    partId: 'ruota_carica',
    side: Side.ponti,
    z: 6,
    shape: circlePath(Geo.crownWheel, Geo.crownWheelR),
    anchor: Geo.crownWheel,
    paint: (cv) {
      drawWheel(cv, Geo.crownWheel, Geo.crownWheelR, 40,
          color: ArtColors.steel, dark: ArtColors.steelDark, spokes: 0, jewel: false);
      for (var r = 18.0; r < Geo.crownWheelR - 8; r += 9) {
        cv.drawCircle(Geo.crownWheel, r, strokePaint(Colors.white.withValues(alpha: 0.35), 2));
      }
      drawScrew(cv, Geo.crownWheel, 13);
    },
  ));
  final clickShape = union([
    taperPath(Geo.click, polar(Geo.barrel, Geo.ratchetR + 4, -2.2), 30, 12),
    circlePath(Geo.click, 18),
  ]);
  items.add(SceneItem(
    id: 'cricchetto',
    partId: 'cricchetto',
    side: Side.ponti,
    z: 6,
    shape: clickShape,
    anchor: Geo.click,
    paint: (cv) {
      cv.drawPath(clickShape, fillPaint(ArtColors.steel));
      cv.drawPath(clickShape, strokePaint(ArtColors.steelDark, 1.5));
      drawScrew(cv, Geo.click, 9);
      // molla del cricchetto
      cv.drawPath(
        Path()
          ..moveTo(Geo.click.dx - 10, Geo.click.dy - 20)
          ..quadraticBezierTo(Geo.click.dx - 60, Geo.click.dy - 30, Geo.click.dx - 70, Geo.click.dy + 20),
        strokePaint(ArtColors.steelDark, 4),
      );
    },
  ));

  // modulo automatico
  final autoBridge = union([
    polyPath(const [Offset(320, 215), Offset(560, 200), Offset(585, 300), Offset(560, 395), Offset(345, 395), Offset(300, 300)]),
    circlePath(Geo.rev1, 48),
    circlePath(Geo.rev2, 48),
  ]);
  items.add(SceneItem(
    id: 'ponte_automatico',
    partId: 'ponte_automatico',
    side: Side.ponti,
    z: 7,
    autoOnly: true,
    shape: autoBridge,
    anchor: const Offset(370, 360),
    paint: (cv) {
      drawBridge(cv, autoBridge, color: const Color(0xFFDDE1E7));
      drawScrew(cv, const Offset(345, 300), 12);
      drawScrew(cv, const Offset(560, 240), 12);
    },
  ));
  for (final w in [('invertitore_1', Geo.rev1), ('invertitore_2', Geo.rev2)]) {
    items.add(SceneItem(
      id: w.$1,
      partId: 'invertitori',
      side: Side.ponti,
      z: 8,
      autoOnly: true,
      shape: circlePath(w.$2, 40),
      anchor: w.$2,
      paint: (cv) => drawWheel(cv, w.$2, 40, 36, color: const Color(0xFFE7C77E), spokes: 0),
    ));
  }

  // rotore
  final rotor = Path()
    ..moveTo(c.dx - 425, c.dy)
    ..arcTo(Rect.fromCircle(center: c, radius: 425), math.pi, math.pi, false)
    ..lineTo(c.dx + 60, c.dy)
    ..arcTo(Rect.fromCircle(center: c, radius: 60), 0, -math.pi, false)
    ..close();
  items.add(SceneItem(
    id: 'rotore',
    partId: 'rotore',
    side: Side.ponti,
    z: 9,
    autoOnly: true,
    shape: union([rotor, circlePath(c, 60)]),
    anchor: const Offset(500, 220),
    paint: (cv) {
      cv.drawPath(rotor, fillPaint(const Color(0xFFD9DDE3)));
      cv.save();
      cv.clipPath(rotor);
      for (var r = 70.0; r < 425; r += 16) {
        cv.drawCircle(c, r, strokePaint(Colors.white.withValues(alpha: 0.5), 3));
      }
      cv.restore();
      cv.drawPath(ringPath(c, 425, 380), fillPaint(const Color(0xFFB8BEC8)));
      cv.drawPath(rotor, strokePaint(ArtColors.bridgeEdge, 2.5));
      cv.drawCircle(c, 55, fillPaint(ArtColors.steel));
      cv.drawCircle(c, 55, strokePaint(ArtColors.steelDark, 2));
      for (var i = 0; i < 3; i++) {
        drawScrew(cv, polar(c, 32, i * 2 * math.pi / 3 + 0.4), 9);
      }
    },
  ));

  // stelo e corona (entrambi i lati)
  for (final side in Side.values) {
    items.add(SceneItem(
      id: side == Side.ponti ? 'p_stelo' : 'q_stelo',
      partId: 'stelo',
      side: side,
      z: side == Side.ponti ? 3 : 2,
      shape: union([
        Path()..addRect(const Rect.fromLTRB(860, 488, 990, 512)),
        Path()..addRRect(RRect.fromRectAndRadius(const Rect.fromLTRB(972, 455, 1000, 545), const Radius.circular(8))),
      ]),
      anchor: const Offset(950, 500),
      paint: (cv) => _stemAndCrown(cv),
    ));
  }

  // ================= LATO QUADRANTE =================
  items.add(SceneItem(
    id: 'q_platina',
    partId: 'platina',
    side: Side.quadrante,
    z: 0,
    shape: circlePath(c, Geo.plateR),
    anchor: const Offset(200, 620),
    paint: (cv) => _plate(cv),
  ));

  // remontoir
  final settingLever = union([
    taperPath(Geo.settingLeverPivot, const Offset(905, 470), 34, 18),
    circlePath(Geo.settingLeverPivot, 22),
  ]);
  items.add(SceneItem(
    id: 'tiretto',
    partId: 'tiretto',
    side: Side.quadrante,
    z: 1,
    shape: settingLever,
    anchor: const Offset(860, 440),
    paint: (cv) {
      cv.drawPath(settingLever, fillPaint(ArtColors.steel));
      cv.drawPath(settingLever, strokePaint(ArtColors.steelDark, 1.5));
      cv.drawCircle(const Offset(900, 476), 7, fillPaint(ArtColors.steelDark));
      drawScrew(cv, Geo.settingLeverPivot, 11);
    },
  ));
  items.add(SceneItem(
    id: 'pignone_carica',
    partId: 'pignone_carica',
    side: Side.quadrante,
    z: 1,
    shape: Path()..addRect(Rect.fromCenter(center: Geo.windingPinion, width: 30, height: 44)),
    anchor: Geo.windingPinion,
    paint: (cv) => _sidePinion(cv, Geo.windingPinion, 30, 44),
  ));
  items.add(SceneItem(
    id: 'pignone_scorrevole',
    partId: 'pignone_scorrevole',
    side: Side.quadrante,
    z: 1,
    shape: Path()..addRect(Rect.fromCenter(center: Geo.clutch, width: 36, height: 50)),
    anchor: Geo.clutch,
    paint: (cv) => _sidePinion(cv, Geo.clutch, 36, 50),
  ));
  items.add(SceneItem(
    id: 'ruota_rinvio',
    partId: 'ruota_rinvio',
    side: Side.quadrante,
    z: 1,
    shape: circlePath(Geo.settingWheel, 28),
    anchor: Geo.settingWheel,
    paint: (cv) => drawWheel(cv, Geo.settingWheel, 28, 20,
        color: ArtColors.steel, dark: ArtColors.steelDark, spokes: 0, jewel: false),
  ));
  final yoke = union([
    taperPath(Geo.yokePivot, const Offset(870, 530), 30, 16),
    circlePath(Geo.yokePivot, 20),
  ]);
  items.add(SceneItem(
    id: 'bascula',
    partId: 'bascula',
    side: Side.quadrante,
    z: 2,
    shape: yoke,
    anchor: const Offset(820, 590),
    paint: (cv) {
      cv.drawPath(yoke, fillPaint(const Color(0xFFCFD5DE)));
      cv.drawPath(yoke, strokePaint(ArtColors.steelDark, 1.5));
      cv.drawCircle(Geo.yokePivot, 7, fillPaint(ArtColors.steelDark));
    },
  ));
  final springPlate = polyPath(const [
    Offset(760, 385), Offset(850, 380), Offset(915, 430), Offset(845, 455), Offset(800, 520),
    Offset(830, 640), Offset(760, 660), Offset(735, 560),
  ]);
  items.add(SceneItem(
    id: 'molla_tiretto',
    partId: 'molla_tiretto',
    side: Side.quadrante,
    z: 3,
    shape: springPlate,
    anchor: const Offset(775, 470),
    paint: (cv) {
      drawBridge(cv, springPlate, color: const Color(0xFFD7DCE3), stripes: false);
      drawScrew(cv, const Offset(770, 420), 11);
      drawScrew(cv, const Offset(770, 620), 11);
    },
  ));

  // minuteria
  items.add(SceneItem(
    id: 'chaussee',
    partId: 'chaussee',
    side: Side.quadrante,
    z: 4,
    shape: circlePath(c, 26),
    anchor: c,
    paint: (cv) {
      cv.drawPath(gearPath(c, 26, 12), fillPaint(ArtColors.steel));
      cv.drawPath(gearPath(c, 26, 12), strokePaint(ArtColors.steelDark, 1.5));
      cv.drawCircle(c, 11, fillPaint(ArtColors.steelDark));
    },
  ));
  items.add(_wheel('ruota_minuteria', 'ruota_minuteria', Side.quadrante, 4, Geo.minuteWheel, 50, 36,
      pinion: 14, color: ArtColors.steel, dark: ArtColors.steelDark));
  items.add(SceneItem(
    id: 'ruota_ore',
    partId: 'ruota_ore',
    side: Side.quadrante,
    z: 5,
    shape: ringPath(c, 66, 22),
    anchor: c + const Offset(40, -40),
    paint: (cv) {
      drawWheel(cv, c, 66, 48, spokes: 0, jewel: false);
      cv.drawCircle(c, 30, fillPaint(ArtColors.brass));
      cv.drawCircle(c, 30, strokePaint(ArtColors.brassDark, 1.5));
      cv.drawCircle(c, 18, fillPaint(Colors.black.withValues(alpha: 0.35)));
    },
  ));

  // calendario
  items.add(SceneItem(
    id: 'disco_datario',
    partId: 'datario',
    side: Side.quadrante,
    z: 6,
    dateOnly: true,
    shape: ringPath(c, 428, 362),
    anchor: const Offset(500, 105),
    paint: (cv) {
      final ring = ringPath(c, 428, 362);
      cv.drawPath(ring, fillPaint(const Color(0xFFF4F1EA)));
      cv.drawPath(ring, strokePaint(ArtColors.bridgeEdge, 1.5));
      for (var i = 0; i < 31; i++) {
        final a = i * 2 * math.pi / 31;
        cv.drawLine(polar(c, 382, a), polar(c, 408, a), strokePaint(ArtColors.ink.withValues(alpha: 0.55), 5));
      }
      cv.drawPath(gearPath(c, 362, 31, depth: 9), strokePaint(ArtColors.steelDark.withValues(alpha: 0.6), 1));
    },
  ));
  items.add(_wheel('ruota_datario', 'datario', Side.quadrante, 6, Geo.dateWheel, 44, 30,
      date: true, color: ArtColors.steel, dark: ArtColors.steelDark));
  final jumper = union([taperPath(Geo.jumper, polar(c, 368, -1.25), 26, 10), circlePath(Geo.jumper, 16)]);
  items.add(SceneItem(
    id: 'saltarello',
    partId: 'datario',
    side: Side.quadrante,
    z: 6,
    dateOnly: true,
    shape: jumper,
    anchor: Geo.jumper,
    paint: (cv) {
      cv.drawPath(jumper, fillPaint(ArtColors.steel));
      cv.drawPath(jumper, strokePaint(ArtColors.steelDark, 1.5));
      drawScrew(cv, Geo.jumper, 9);
    },
  ));
  final datePlate = Path.combine(PathOperation.difference, circlePath(c, 352), circlePath(c, 80));
  items.add(SceneItem(
    id: 'placca_calendario',
    partId: 'datario',
    side: Side.quadrante,
    z: 7,
    dateOnly: true,
    shape: datePlate,
    anchor: const Offset(320, 640),
    paint: (cv) {
      cv.drawPath(datePlate, fillPaint(const Color(0xFFDCE0E6).withValues(alpha: 0.96)));
      cv.drawPath(datePlate, strokePaint(ArtColors.bridgeEdge, 2));
      for (final o in const [Offset(300, 420), Offset(640, 700), Offset(560, 220)]) {
        drawScrew(cv, o, 11);
      }
    },
  ));

  // quadrante e lancette
  items.add(SceneItem(
    id: 'quadrante',
    partId: 'quadrante',
    side: Side.quadrante,
    z: 8,
    shape: circlePath(c, 436),
    anchor: const Offset(300, 330),
    paint: (cv) {
      cv.drawCircle(c, 436, fillPaint(ArtColors.dial));
      cv.drawCircle(c, 436, strokePaint(const Color(0xFFCFC6B8), 3));
      for (var i = 0; i < 60; i++) {
        final a = i * 2 * math.pi / 60;
        final big = i % 5 == 0;
        cv.drawLine(polar(c, big ? 360 : 395, a), polar(c, 415, a),
            strokePaint(ArtColors.ink, big ? 12 : 3));
      }
      // finestrella della data a ore 3
      final win = RRect.fromRectAndRadius(const Rect.fromLTRB(790, 478, 850, 522), const Radius.circular(4));
      cv.drawRRect(win, fillPaint(Colors.white));
      cv.drawRRect(win, strokePaint(ArtColors.ink, 2));
      cv.drawCircle(c, 10, fillPaint(ArtColors.ink));
    },
  ));
  items.add(SceneItem(
    id: 'lancette',
    partId: 'lancette',
    side: Side.quadrante,
    z: 9,
    shape: union([
      taperPath(c, polar(c, 250, -math.pi / 2 - math.pi / 3), 30, 10),
      taperPath(c, polar(c, 370, -math.pi / 2 + math.pi / 3), 22, 8),
      barPath(c, polar(c, 400, math.pi / 2), 12),
      circlePath(c, 24),
    ]),
    anchor: c + const Offset(-60, -80),
    paint: (cv) => drawHands(cv, c, -math.pi / 2 - math.pi / 3, -math.pi / 2 + math.pi / 3, math.pi / 2),
  ));

  // cassa (entrambi i lati) e fondello
  for (final side in Side.values) {
    items.add(SceneItem(
      id: side == Side.ponti ? 'p_cassa' : 'q_cassa',
      partId: 'cassa',
      side: side,
      z: 10,
      shape: ringPath(c, 488, 442),
      anchor: const Offset(500, 34),
      paint: (cv) {
        final ring = ringPath(c, 488, 442);
        cv.drawPath(ring, fillPaint(ArtColors.caseMetal));
        cv.drawCircle(c, 488, strokePaint(ArtColors.bridgeEdge, 2));
        cv.drawCircle(c, 442, strokePaint(ArtColors.bridgeEdge, 2));
      },
    ));
  }
  items.add(SceneItem(
    id: 'fondello',
    partId: 'fondello',
    side: Side.ponti,
    z: 11,
    shape: circlePath(c, 470),
    anchor: const Offset(500, 300),
    paint: (cv) {
      cv.drawCircle(c, 470, fillPaint(const Color(0xFFCDD2D9)));
      for (var r = 30.0; r < 400; r += 12) {
        cv.drawCircle(c, r, strokePaint(Colors.white.withValues(alpha: 0.35), 2));
      }
      cv.drawCircle(c, 400, strokePaint(ArtColors.bridgeEdge, 3));
      cv.drawCircle(c, 470, strokePaint(ArtColors.bridgeEdge, 3));
      for (var i = 0; i < 6; i++) {
        final a = i * math.pi / 3;
        cv.drawPath(
          barPath(polar(c, 420, a), polar(c, 455, a), 30),
          fillPaint(const Color(0xFF9AA2AE)),
        );
      }
    },
  ));

  return items;
}

SceneItem _wheel(String id, String partId, Side side, int z, Offset o, double r, int teeth,
    {double? pinion, bool date = false, Color color = ArtColors.brass, Color dark = ArtColors.brassDark}) {
  return SceneItem(
    id: id,
    partId: partId,
    side: side,
    z: z,
    dateOnly: date,
    shape: circlePath(o, r),
    anchor: o,
    paint: (cv) => drawWheel(cv, o, r, teeth, pinion: pinion, color: color, dark: dark),
  );
}

void _plate(Canvas cv) {
  const c = Geo.c;
  cv.drawCircle(c, Geo.plateR, fillPaint(ArtColors.plate));
  // perlage stilizzato
  final p = fillPaint(Colors.white.withValues(alpha: 0.12));
  for (var y = 80.0; y < 940; y += 34) {
    for (var x = 80.0; x < 940; x += 34) {
      final o = Offset(x + ((y ~/ 34).isOdd ? 17 : 0), y);
      if ((o - c).distance < Geo.plateR - 18) cv.drawCircle(o, 13, p);
    }
  }
  cv.drawCircle(c, Geo.plateR, strokePaint(ArtColors.bridgeEdge, 3));
}

void _stemAndCrown(Canvas cv) {
  const stem = Rect.fromLTRB(860, 488, 990, 512);
  cv.drawRect(stem, fillPaint(ArtColors.steel));
  cv.drawRect(stem, strokePaint(ArtColors.steelDark, 1.5));
  final crown = RRect.fromRectAndRadius(const Rect.fromLTRB(972, 455, 1000, 545), const Radius.circular(8));
  cv.drawRRect(crown, fillPaint(const Color(0xFFC9CED6)));
  for (var y = 462.0; y < 540; y += 9) {
    cv.drawLine(Offset(974, y), Offset(998, y), strokePaint(ArtColors.steelDark, 2));
  }
  cv.drawRRect(crown, strokePaint(ArtColors.steelDark, 2));
}

void _sidePinion(Canvas cv, Offset o, double w, double h) {
  final r = Rect.fromCenter(center: o, width: w, height: h);
  cv.drawRect(r, fillPaint(ArtColors.steel));
  for (var x = r.left + 4; x < r.right; x += 6) {
    cv.drawLine(Offset(x, r.top), Offset(x, r.bottom), strokePaint(ArtColors.steelDark, 1.4));
  }
  cv.drawRect(r, strokePaint(ArtColors.steelDark, 1.5));
}

/// Ruota di scappamento con denti a uncino.
void drawEscapeWheel(Canvas cv, Offset o, double r, double rot, {int teeth = 20}) {
  final p = Path();
  final pitch = 2 * math.pi / teeth;
  for (var i = 0; i < teeth; i++) {
    final a = rot + i * pitch;
    final root = polar(o, r * 0.72, a);
    final tip = polar(o, r, a + pitch * 0.55);
    final back = polar(o, r * 0.9, a + pitch * 0.75);
    final next = polar(o, r * 0.72, a + pitch);
    if (i == 0) p.moveTo(root.dx, root.dy);
    p
      ..lineTo(tip.dx, tip.dy)
      ..lineTo(back.dx, back.dy)
      ..lineTo(next.dx, next.dy);
  }
  p.close();
  cv.drawPath(p, fillPaint(ArtColors.steel));
  cv.drawPath(p, strokePaint(ArtColors.steelDark, math.max(1.0, r / 40)));
  cv.drawCircle(o, r * 0.55, fillPaint(Colors.black.withValues(alpha: 0.25)));
  for (var i = 0; i < 4; i++) {
    cv.drawLine(o, polar(o, r * 0.56, rot + i * math.pi / 2), strokePaint(ArtColors.steel, r * 0.12));
  }
  cv.drawCircle(o, r * 0.2, fillPaint(ArtColors.steel));
  drawJewel(cv, o, math.max(3.0, r * 0.1));
}

Path _palletShape(double angle) {
  final pivot = Geo.pallet;
  final m = rotationAbout(pivot, angle);
  final body = union([
    taperPath(pivot, Geo.forkTip(), 30, 14),
    taperPath(pivot, Geo.entryPallet(), 24, 14),
    taperPath(pivot, Geo.exitPallet(), 24, 14),
    circlePath(pivot, 18),
  ]);
  return body.transform(m);
}

/// Ancora: corpo d'acciaio, palette in rubino, forchetta.
void drawPalletFork(Canvas cv, double angle) {
  final pivot = Geo.pallet;
  cv.save();
  cv.translate(pivot.dx, pivot.dy);
  cv.rotate(angle);
  cv.translate(-pivot.dx, -pivot.dy);
  final body = _palletShape(0);
  cv.drawPath(body, fillPaint(ArtColors.steel));
  cv.drawPath(body, strokePaint(ArtColors.steelDark, 1.6));
  // palette
  for (final pt in [Geo.entryPallet(), Geo.exitPallet()]) {
    final dir = (pt - pivot) / (pt - pivot).distance;
    final a = pt - dir * 4;
    final b = pt + dir * 10;
    cv.drawLine(a, b, strokePaint(ArtColors.ruby, 11));
  }
  // corna della forchetta
  final tip = Geo.forkTip();
  final dir = (tip - pivot) / (tip - pivot).distance;
  final n = Offset(-dir.dy, dir.dx);
  cv.drawLine(tip, tip + dir * 14 + n * 9, strokePaint(ArtColors.steelDark, 5));
  cv.drawLine(tip, tip + dir * 14 - n * 9, strokePaint(ArtColors.steelDark, 5));
  drawJewel(cv, pivot, 6);
  cv.restore();
}

/// Bilanciere visto dall'alto; angle = rotazione corrente.
void drawBalance(Canvas cv, Offset o, double r, double angle, {bool spiral = true, double spiralBreath = 0}) {
  final rim = ringPath(o, r, r * 0.86);
  cv.drawPath(rim, fillPaint(const Color(0xFFD9B565)));
  cv.drawPath(rim, strokePaint(ArtColors.brassDark, 1.5));
  final sp = strokePaint(const Color(0xFFD9B565), r * 0.09);
  for (var i = 0; i < 3; i++) {
    final a = angle + i * 2 * math.pi / 3;
    cv.drawLine(polar(o, r * 0.12, a), polar(o, r * 0.88, a), sp);
  }
  // viti di bilanciatura
  for (var i = 0; i < 6; i++) {
    cv.drawCircle(polar(o, r * 0.93, angle + i * math.pi / 3 + 0.5), r * 0.05, fillPaint(ArtColors.brassDark));
  }
  if (spiral) {
    cv.drawPath(spiralPath(o, r * 0.16, r * 0.6 * (1 + spiralBreath * 0.04), 9, start: angle * 0.6),
        strokePaint(ArtColors.spring, math.max(1.0, r / 70)));
  }
  cv.drawCircle(o, r * 0.12, fillPaint(ArtColors.steel));
  drawJewel(cv, o, math.max(3.0, r * 0.07));
}

void drawHands(Canvas cv, Offset c, double hourA, double minA, double secA, {double scale = 1}) {
  final ink = fillPaint(const Color(0xFF1D2B4A));
  cv.drawPath(taperPath(c, polar(c, 250 * scale, hourA), 30 * scale, 10 * scale), ink);
  cv.drawPath(taperPath(c, polar(c, 370 * scale, minA), 22 * scale, 8 * scale), ink);
  cv.drawPath(barPath(polar(c, 80 * scale, secA + math.pi), polar(c, 400 * scale, secA), 6 * scale),
      fillPaint(ArtColors.highlight));
  cv.drawCircle(c, 24 * scale, fillPaint(const Color(0xFF1D2B4A)));
  cv.drawCircle(c, 12 * scale, fillPaint(ArtColors.highlight));
}

/// Matrice 4x4 (column-major) di rotazione attorno a un punto, per Path.transform.
Float64List rotationAbout(Offset p, double a) {
  final co = math.cos(a), si = math.sin(a);
  final tx = p.dx - co * p.dx + si * p.dy;
  final ty = p.dy - si * p.dx - co * p.dy;
  return Float64List.fromList([
    co, si, 0, 0,
    -si, co, 0, 0,
    0, 0, 1, 0,
    tx, ty, 0, 1,
  ]);
}
