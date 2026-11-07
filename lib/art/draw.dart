import 'dart:math' as math;

import 'package:flutter/material.dart';

/// Colori dei disegni tecnici (schematici, originali).
class ArtColors {
  static const plate = Color(0xFFC6CBD4);
  static const plateLine = Color(0xFFB2B8C2);
  static const bridge = Color(0xFFE6E9EE);
  static const bridgeEdge = Color(0xFF8E97A5);
  static const brass = Color(0xFFDDB76C);
  static const brassDark = Color(0xFF9E7A33);
  static const steel = Color(0xFFBEC6D1);
  static const steelDark = Color(0xFF66717F);
  static const ruby = Color(0xFFC2185B);
  static const screw = Color(0xFF2E4FA3);
  static const dial = Color(0xFFFBF7F0);
  static const ink = Color(0xFF14213D);
  static const highlight = Color(0xFFF28C38);
  static const caseMetal = Color(0xFFD5D9DF);
  static const spring = Color(0xFF3B4A5E);
}

Paint fillPaint(Color c) => Paint()
  ..color = c
  ..style = PaintingStyle.fill
  ..isAntiAlias = true;

Paint strokePaint(Color c, double w) => Paint()
  ..color = c
  ..style = PaintingStyle.stroke
  ..strokeWidth = w
  ..strokeJoin = StrokeJoin.round
  ..strokeCap = StrokeCap.round
  ..isAntiAlias = true;

Offset polar(Offset c, double r, double a) => Offset(c.dx + r * math.cos(a), c.dy + r * math.sin(a));

Path circlePath(Offset c, double r) => Path()..addOval(Rect.fromCircle(center: c, radius: r));

Path ringPath(Offset c, double rOut, double rIn) => Path()
  ..fillType = PathFillType.evenOdd
  ..addOval(Rect.fromCircle(center: c, radius: rOut))
  ..addOval(Rect.fromCircle(center: c, radius: rIn));

Path polyPath(List<Offset> pts) {
  final p = Path()..moveTo(pts.first.dx, pts.first.dy);
  for (final o in pts.skip(1)) {
    p.lineTo(o.dx, o.dy);
  }
  return p..close();
}

Path union(List<Path> paths) {
  var p = paths.first;
  for (final q in paths.skip(1)) {
    p = Path.combine(PathOperation.union, p, q);
  }
  return p;
}

/// Una "barra" arrotondata da a a b, larga w (per bracci di ponti e leve).
Path barPath(Offset a, Offset b, double w) {
  final d = b - a;
  final len = d.distance;
  if (len == 0) return circlePath(a, w / 2);
  final n = Offset(-d.dy / len, d.dx / len) * (w / 2);
  return union([
    polyPath([a + n, b + n, b - n, a - n]),
    circlePath(a, w / 2),
    circlePath(b, w / 2),
  ]);
}

/// Barra rastremata: larga wa in a e wb in b.
Path taperPath(Offset a, Offset b, double wa, double wb) {
  final d = b - a;
  final len = d.distance;
  final n = Offset(-d.dy / len, d.dx / len);
  return union([
    polyPath([a + n * (wa / 2), b + n * (wb / 2), b - n * (wb / 2), a - n * (wa / 2)]),
    circlePath(a, wa / 2),
    circlePath(b, wb / 2),
  ]);
}

/// Contorno di una ruota dentata.
Path gearPath(Offset c, double r, int teeth, {double rotation = 0, double depth = 0}) {
  final dpt = depth > 0 ? depth : math.max(2.0, r * 2 * math.pi / teeth * 0.45);
  final rr = r - dpt;
  final pitch = 2 * math.pi / teeth;
  final p = Path();
  for (var i = 0; i < teeth; i++) {
    final a = rotation + i * pitch;
    final pts = [
      polar(c, rr, a),
      polar(c, r, a + pitch * 0.18),
      polar(c, r, a + pitch * 0.42),
      polar(c, rr, a + pitch * 0.6),
    ];
    if (i == 0) {
      p.moveTo(pts[0].dx, pts[0].dy);
    } else {
      p.lineTo(pts[0].dx, pts[0].dy);
    }
    for (final o in pts.skip(1)) {
      p.lineTo(o.dx, o.dy);
    }
  }
  return p..close();
}

/// Ruota d'orologio: dentatura, finestre fra i raggi, mozzo, perno in rubino.
void drawWheel(
  Canvas canvas,
  Offset c,
  double r,
  int teeth, {
  Color color = ArtColors.brass,
  Color dark = ArtColors.brassDark,
  double rotation = 0,
  int spokes = 4,
  bool jewel = true,
  double? pinion,
}) {
  final g = gearPath(c, r, teeth, rotation: rotation);
  canvas.drawPath(g, fillPaint(color));
  canvas.drawPath(g, strokePaint(dark, math.max(1.0, r / 60)));
  final rim = r * 0.78;
  if (r > 24 && spokes > 0) {
    // finestre scure tra i raggi
    canvas.drawCircle(c, rim, fillPaint(Colors.black.withValues(alpha: 0.28)));
    final sp = strokePaint(color, r * 0.13);
    for (var i = 0; i < spokes; i++) {
      final a = rotation + i * 2 * math.pi / spokes;
      canvas.drawLine(c, polar(c, rim + 1, a), sp);
    }
    canvas.drawCircle(c, rim, strokePaint(dark, math.max(0.8, r / 90)));
  }
  canvas.drawCircle(c, math.max(4.0, r * 0.2), fillPaint(color));
  canvas.drawCircle(c, math.max(4.0, r * 0.2), strokePaint(dark, 1));
  if (pinion != null) {
    canvas.drawPath(gearPath(c, pinion, 8, rotation: rotation), fillPaint(ArtColors.steel));
    canvas.drawPath(gearPath(c, pinion, 8, rotation: rotation), strokePaint(ArtColors.steelDark, 1));
  }
  if (jewel) drawJewel(canvas, c, math.max(3.0, r * 0.08));
}

void drawJewel(Canvas canvas, Offset c, double r) {
  canvas.drawCircle(c, r, fillPaint(ArtColors.ruby));
  canvas.drawCircle(c + Offset(-r * 0.3, -r * 0.3), r * 0.35, fillPaint(Colors.white.withValues(alpha: 0.55)));
  canvas.drawCircle(c, r * 0.22, fillPaint(const Color(0xFF5A0A2A)));
}

void drawScrew(Canvas canvas, Offset c, double r, {double angle = 0.6}) {
  canvas.drawCircle(c, r, fillPaint(ArtColors.screw));
  canvas.drawCircle(c, r, strokePaint(const Color(0xFF1B2F66), 1));
  final s = strokePaint(const Color(0xFF0E1A3A), r * 0.28);
  canvas.drawLine(polar(c, r * 0.8, angle), polar(c, r * 0.8, angle + math.pi), s);
}

/// Spirale di Archimede da r0 a r1 con un certo numero di giri.
Path spiralPath(Offset c, double r0, double r1, double turns, {double start = 0}) {
  final p = Path();
  const steps = 360;
  for (var i = 0; i <= steps; i++) {
    final t = i / steps;
    final a = start + t * turns * 2 * math.pi;
    final r = r0 + (r1 - r0) * t;
    final o = polar(c, r, a);
    if (i == 0) {
      p.moveTo(o.dx, o.dy);
    } else {
      p.lineTo(o.dx, o.dy);
    }
  }
  return p;
}

/// Superficie di un ponte: riempimento chiaro, bordo, leggere righe di finitura.
void drawBridge(Canvas canvas, Path shape, {Color color = ArtColors.bridge, bool stripes = true}) {
  canvas.drawPath(shape, fillPaint(color));
  if (stripes) {
    canvas.save();
    canvas.clipPath(shape);
    final b = shape.getBounds();
    final sp = strokePaint(Colors.black.withValues(alpha: 0.05), 3);
    for (var x = b.left - b.height; x < b.right; x += 14) {
      canvas.drawLine(Offset(x, b.bottom), Offset(x + b.height, b.top), sp);
    }
    canvas.restore();
  }
  canvas.drawPath(shape, strokePaint(ArtColors.bridgeEdge, 2));
}

/// Etichetta con linea di richiamo, per i disegni del glossario.
void drawCallout(Canvas canvas, Offset target, Offset labelAt, String text, double fontSize) {
  final lp = strokePaint(ArtColors.ink.withValues(alpha: 0.75), fontSize * 0.12);
  canvas.drawLine(target, labelAt, lp);
  canvas.drawCircle(target, fontSize * 0.28, fillPaint(ArtColors.highlight));
  final tp = TextPainter(
    text: TextSpan(
      text: text,
      style: TextStyle(fontSize: fontSize, color: ArtColors.ink, fontWeight: FontWeight.w600),
    ),
    textDirection: TextDirection.ltr,
  )..layout(maxWidth: fontSize * 12);
  final left = labelAt.dx < target.dx;
  final pos = Offset(
    left ? labelAt.dx - tp.width - fontSize * 0.3 : labelAt.dx + fontSize * 0.3,
    labelAt.dy - tp.height / 2,
  );
  final bg = RRect.fromRectAndRadius(
    Rect.fromLTWH(pos.dx - fontSize * 0.3, pos.dy - fontSize * 0.15, tp.width + fontSize * 0.6, tp.height + fontSize * 0.3),
    Radius.circular(fontSize * 0.4),
  );
  canvas.drawRRect(bg, fillPaint(Colors.white.withValues(alpha: 0.92)));
  canvas.drawRRect(bg, strokePaint(ArtColors.highlight, fontSize * 0.08));
  tp.paint(canvas, pos);
}

double smoothstep(double x) {
  final t = x.clamp(0.0, 1.0);
  return t * t * (3 - 2 * t);
}
