import 'dart:math' as math;

import 'package:flutter/material.dart';

import 'draw.dart';
import 'scene.dart';
import 'scene_steps.dart';

const xrayIds = {
  'ponte_treno', 'ponte_ancora', 'ponte_bariletto', 'ponte_bilanciere', 'ponte_automatico',
  'rotore', 'fondello', 'quadrante', 'placca_calendario', 'molla_tiretto', 'rocchetto_cricco',
  'invertitore_1', 'invertitore_2', 'lancette',
};

/// Disegna la scena del movimento con pezzi evidenziati, in movimento e marcatori.
class MovementPainter extends CustomPainter {
  final Side side;
  final Set<String> present;
  final Set<String> highlight;
  final Set<String> moving;
  final double moveT;
  final bool movingOut;
  final bool xray;
  final List<StepMarker> markers;
  final double pulse;
  final String? selected;

  MovementPainter({
    required this.side,
    required this.present,
    this.highlight = const {},
    this.moving = const {},
    this.moveT = 0,
    this.movingOut = true,
    this.xray = false,
    this.markers = const [],
    this.pulse = 0,
    this.selected,
  });

  static double scaleFor(Size s) => math.min(s.width, s.height) / 1000;
  static Offset originFor(Size s) {
    final k = scaleFor(s);
    return Offset((s.width - 1000 * k) / 2, (s.height - 1000 * k) / 2);
  }

  /// Da coordinate schermo a coordinate della scena.
  static Offset toScene(Offset local, Size s, Side side) {
    final k = scaleFor(s);
    final p = (local - originFor(s)) / k;
    return side == Side.ponti ? Offset(1000 - p.dx, p.dy) : p;
  }

  static Offset toScreen(Offset scene, Size s, Side side) {
    final k = scaleFor(s);
    final p = side == Side.ponti ? Offset(1000 - scene.dx, scene.dy) : scene;
    return originFor(s) + p * k;
  }

  @override
  void paint(Canvas canvas, Size size) {
    final k = scaleFor(size);
    canvas.save();
    canvas.translate(originFor(size).dx, originFor(size).dy);
    canvas.scale(k);
    if (side == Side.ponti) {
      canvas.translate(1000, 0);
      canvas.scale(-1, 1);
    }

    final items = sceneItems
        .where((it) => it.side == side && (present.contains(it.id) || moving.contains(it.id)))
        .toList()
      ..sort((a, b) => a.z.compareTo(b.z));

    final hl = fillPaint(ArtColors.highlight.withValues(alpha: 0.20));
    final hs = strokePaint(ArtColors.highlight, 7);

    for (final it in items) {
      var opacity = 1.0;
      var off = Offset.zero;
      final isMoving = moving.contains(it.id);
      if (isMoving) {
        final p = smoothstep(moveT);
        if (movingOut) {
          off = Offset(0, -110 * p);
          opacity = 1 - p;
        } else {
          off = Offset(0, -110 * (1 - p));
          opacity = p;
        }
      }
      if (xray && xrayIds.contains(it.id) && it.id != selected) opacity *= 0.3;

      canvas.save();
      canvas.translate(off.dx, off.dy);
      if (opacity < 0.999) {
        if (opacity <= 0.01) {
          canvas.restore();
          if (isMoving && !movingOut) {
            // "fantasma": dove andrà il pezzo
            canvas.drawPath(it.shape, strokePaint(ArtColors.highlight.withValues(alpha: 0.7), 5));
          }
          continue;
        }
        canvas.saveLayer(null, Paint()..color = Color.fromRGBO(0, 0, 0, opacity));
        it.paint(canvas);
        canvas.restore();
      } else {
        it.paint(canvas);
      }
      final lit = isMoving || highlight.contains(it.id) || it.id == selected;
      if (lit && opacity > 0.05) {
        canvas.drawPath(it.shape, hl);
        canvas.drawPath(it.shape, hs);
      }
      canvas.restore();
    }
    canvas.restore();

    // marcatori numerati (in coordinate schermo, così il testo non si specchia)
    for (var i = 0; i < markers.length; i++) {
      final p = toScreen(markers[i].at, size, side);
      final r = 14.0 + 6 * pulse;
      canvas.drawCircle(p, r + 6, fillPaint(ArtColors.highlight.withValues(alpha: 0.25 * (1 - pulse))));
      canvas.drawCircle(p, 13, fillPaint(ArtColors.highlight));
      canvas.drawCircle(p, 13, strokePaint(Colors.white, 2.5));
      final tp = TextPainter(
        text: TextSpan(
          text: '${i + 1}',
          style: const TextStyle(color: Colors.white, fontSize: 14, fontWeight: FontWeight.w800),
        ),
        textDirection: TextDirection.ltr,
      )..layout();
      tp.paint(canvas, p - Offset(tp.width / 2, tp.height / 2));
    }
  }

  @override
  bool shouldRepaint(covariant MovementPainter o) => true;
}

/// Trova il pezzo toccato (quello più in alto).
SceneItem? hitItem(Offset local, Size size, Side side, Set<String> present) {
  final p = MovementPainter.toScene(local, size, side);
  final items = sceneItems.where((it) => it.side == side && present.contains(it.id)).toList()
    ..sort((a, b) => b.z.compareTo(a.z));
  for (final it in items) {
    if (it.shape.contains(p)) return it;
  }
  return null;
}

/// Vista toccabile del movimento, quadrata.
class MovementCanvas extends StatelessWidget {
  final MovementPainter painter;
  final void Function(SceneItem item)? onTapItem;

  const MovementCanvas({super.key, required this.painter, this.onTapItem});

  @override
  Widget build(BuildContext context) {
    return AspectRatio(
      aspectRatio: 1,
      child: LayoutBuilder(
        builder: (ctx, box) {
          final size = Size(box.maxWidth, box.maxHeight);
          return GestureDetector(
            behavior: HitTestBehavior.opaque,
            onTapUp: onTapItem == null
                ? null
                : (d) {
                    final it = hitItem(d.localPosition, size, painter.side, {
                      ...painter.present,
                    });
                    if (it != null) onTapItem!(it);
                  },
            child: CustomPaint(size: size, painter: painter),
          );
        },
      ),
    );
  }
}
