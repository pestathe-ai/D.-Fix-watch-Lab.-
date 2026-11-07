import 'dart:math' as math;

import 'package:flutter/material.dart';

import 'draw.dart';
import 'scene.dart';

class Callout {
  final Offset target; // coordinate della scena (o del disegno 300x200 per i disegni dedicati)
  final String label;
  final bool left;
  final double dy;
  const Callout(this.target, this.label, {this.left = false, this.dy = 0});
}

class ArtSpec {
  final List<String> items; // pezzi della scena da disegnare
  final Set<String> focus; // pezzi da evidenziare
  final List<Callout> callouts;
  final void Function(Canvas c)? custom; // disegno dedicato in spazio 300x200
  const ArtSpec({this.items = const [], this.focus = const {}, this.callouts = const [], this.custom});
}

const _keyless = ['tiretto', 'pignone_carica', 'pignone_scorrevole', 'ruota_rinvio', 'bascula', 'q_stelo'];
const _train = ['ruota_centro', 'ruota_terzo', 'ruota_secondi', 'ruota_scappamento'];
const _motion = ['chaussee', 'ruota_minuteria', 'ruota_ore'];

ArtSpec? artSpecFor(String partId) {
  switch (partId) {
    case 'ancora':
      return ArtSpec(items: const ['ancora'], callouts: [
        Callout(Geo.forkTip(), 'Forchetta', dy: -10),
        Callout(Geo.entryPallet(), 'Paletta d\'entrata', left: true, dy: -18),
        Callout(Geo.exitPallet(), 'Paletta d\'uscita', left: true, dy: 18),
        const Callout(Geo.pallet, 'Perno', dy: 22),
      ]);
    case 'bilanciere':
    case 'spirale':
      return ArtSpec(items: const ['bilanciere', 'spirale'], focus: partId == 'spirale' ? const <String>{'spirale'} : const <String>{}, callouts: [
        Callout(Geo.balance + const Offset(-100, 0), 'Anello', left: true),
        Callout(Geo.balance + const Offset(30, 34), 'Spirale', dy: 30),
        const Callout(Geo.balance, 'Perno (asse)', dy: -40),
        Callout(polar(Geo.balance, 93, 0.5), 'Viti di bilanciatura'),
      ]);
    case 'ruota_scappamento':
      return ArtSpec(items: const ['ruota_scappamento'], callouts: [
        Callout(polar(Geo.escape, 49, -0.9), 'Denti a uncino'),
        const Callout(Geo.escape, 'Perno in rubino', left: true),
      ]);
    case 'treno':
    case 'ruota_centro':
    case 'ruota_terzo':
    case 'ruota_secondi':
      return ArtSpec(
        items: _train,
        focus: partId == 'treno' ? const <String>{} : {partId},
        callouts: const [
          Callout(Geo.center, 'Centro: 1 giro all\'ora'),
          Callout(Geo.third, 'Terzo', left: true),
          Callout(Geo.fourth, 'Secondi: 1 giro al minuto', left: true, dy: 30),
          Callout(Geo.escape, 'Scappamento', dy: 20),
        ],
      );
    case 'ponte_bilanciere':
    case 'racchetta':
      return ArtSpec(items: const ['ponte_bilanciere', 'racchetta'], focus: partId == 'racchetta' ? const <String>{'racchetta'} : const <String>{}, callouts: [
        Callout(Geo.balance + const Offset(-74, -74), 'Racchetta + / -', left: true),
        const Callout(Geo.balance, 'Antiurto', dy: -30),
        const Callout(Geo.cockFoot, 'Vite', dy: 10),
      ]);
    case 'rocchetto_cricco':
    case 'cricchetto':
    case 'ruota_carica':
      return ArtSpec(
        items: const ['bariletto', 'rocchetto_cricco', 'ruota_carica', 'cricchetto'],
        focus: {partId},
        callouts: const [
          Callout(Geo.barrel, 'Rocchetto a cricco', left: true, dy: 40),
          Callout(Geo.crownWheel, 'Ruota di carica'),
          Callout(Geo.click, 'Cricchetto', left: true, dy: -20),
        ],
      );
    case 'tiretto':
    case 'bascula':
    case 'pignone_scorrevole':
    case 'pignone_carica':
    case 'ruota_rinvio':
    case 'stelo':
    case 'corona':
      return ArtSpec(
        items: _keyless,
        focus: {partId == 'stelo' || partId == 'corona' ? 'q_stelo' : partId},
        callouts: const [
          Callout(Offset(850, 430), 'Tiretto', left: true, dy: -30),
          Callout(Geo.yokePivot, 'Bascula', left: true, dy: 20),
          Callout(Geo.clutch, 'Pignone scorrevole', left: true, dy: -60),
          Callout(Geo.windingPinion, 'Pignone di carica', dy: -70),
          Callout(Geo.settingWheel, 'Ruota di rinvio', dy: 40),
          Callout(Offset(985, 500), 'Corona', dy: 60),
        ],
      );
    case 'minuteria':
    case 'chaussee':
    case 'ruota_minuteria':
    case 'ruota_ore':
      return ArtSpec(
        items: _motion,
        focus: partId == 'minuteria' ? const <String>{} : {partId},
        callouts: const [
          Callout(Offset(500, 500), 'Chaussée (sotto)', dy: -60),
          Callout(Geo.minuteWheel, 'Ruota di minuteria', left: true),
          Callout(Offset(560, 520), 'Ruota delle ore', dy: 40),
        ],
      );
    case 'datario':
      return const ArtSpec(items: ['disco_datario', 'ruota_datario', 'saltarello'], callouts: [
        Callout(Offset(500, 75), 'Disco con i numeri 1-31', dy: -10),
        Callout(Geo.dateWheel, 'Ruota del datario', left: true),
        Callout(Geo.jumper, 'Saltarello', dy: -20),
      ]);
    case 'rotore':
      return const ArtSpec(items: ['rotore'], callouts: [
        Callout(Offset(500, 100), 'Massa pesante sul bordo', dy: -20),
        Callout(Offset(500, 500), 'Cuscinetto', dy: 30),
      ]);
    case 'invertitori':
      return const ArtSpec(items: ['invertitore_1', 'invertitore_2']);
    case 'bariletto':
      return ArtSpec(custom: _barrelExploded, callouts: const [
        Callout(Offset(88, 150), 'Tamburo dentato', left: true, dy: 20),
        Callout(Offset(88, 92), 'Molla motrice', left: true, dy: -10),
        Callout(Offset(150, 52), 'Albero', dy: -10),
        Callout(Offset(225, 118), 'Coperchio', dy: 30),
      ]);
    case 'molla_motrice':
      return ArtSpec(custom: _mainspring, callouts: const [
        Callout(Offset(150, 100), 'Occhiello interno', left: true, dy: -40),
        Callout(Offset(232, 100), 'Estremità esterna'),
      ]);
    case 'briglia':
      return ArtSpec(custom: _bridle, callouts: const [
        Callout(Offset(150 + 82, 100), 'Briglia premuta sulla parete', dy: 40),
        Callout(Offset(150, 100), 'Albero', left: true, dy: -40),
      ]);
    case 'albero_bariletto':
      return ArtSpec(custom: _arbor, callouts: const [
        Callout(Offset(150, 95), 'Gancio per la molla', dy: -40),
        Callout(Offset(150, 40), 'Quadro per il rocchetto', left: true),
      ]);
    case 'guarnizioni':
      return const ArtSpec(custom: _gaskets);
    case 'rubini':
      return ArtSpec(custom: _jewels, callouts: const [
        Callout(Offset(90, 100), 'Pietra forata', left: true, dy: 40),
        Callout(Offset(210, 100), 'Conca per l\'olio', dy: 40),
      ]);
    case 'antiurto':
      return ArtSpec(custom: _shock, callouts: const [
        Callout(Offset(150, 62), 'Mollina a lira', dy: -20),
        Callout(Offset(150, 100), 'Contropietra', left: true),
        Callout(Offset(150, 130), 'Pietra forata', dy: 40),
      ]);
    case 'anello_fissaggio':
      return const ArtSpec(custom: _ring);
    case 'platina':
      return const ArtSpec(items: ['q_platina']);
    case 'cassa':
      return const ArtSpec(items: ['q_cassa', 'q_platina']);
    case 'fondello':
      return const ArtSpec(items: ['fondello']);
    case 'quadrante':
      return const ArtSpec(items: ['quadrante']);
    case 'lancette':
      return const ArtSpec(items: ['lancette']);
    default:
      final its = sceneItems.where((s) => s.partId == partId).map((s) => s.id).toList();
      if (its.isEmpty) return null;
      return ArtSpec(items: its);
  }
}

/// Disegno di un pezzo, con eventuali etichette.
class PartArt extends StatelessWidget {
  final String partId;
  final double height;
  final bool labels;

  const PartArt({super.key, required this.partId, this.height = 180, this.labels = true});

  @override
  Widget build(BuildContext context) {
    final spec = artSpecFor(partId);
    if (spec == null) return const SizedBox.shrink();
    return SizedBox(
      height: height,
      width: double.infinity,
      child: CustomPaint(painter: PartArtPainter(spec, labels: labels)),
    );
  }
}

class PartArtPainter extends CustomPainter {
  final ArtSpec spec;
  final bool labels;
  PartArtPainter(this.spec, {this.labels = true});

  @override
  void paint(Canvas canvas, Size size) {
    final hasLabels = labels && spec.callouts.isNotEmpty;
    final margin = hasLabels ? size.width * 0.27 : 6.0;
    final avail = Rect.fromLTWH(margin, 8, size.width - 2 * margin, size.height - 16);

    Rect bounds;
    if (spec.custom != null) {
      bounds = const Rect.fromLTWH(0, 0, 300, 200);
    } else {
      Rect? b;
      for (final id in spec.items) {
        final it = sceneItem(id);
        if (it == null) continue;
        final r = it.shape.getBounds();
        b = b == null ? r : b.expandToInclude(r);
      }
      if (b == null) return;
      bounds = b.inflate(math.max(b.width, b.height) * 0.04);
    }
    final k = math.min(avail.width / bounds.width, avail.height / bounds.height);
    final off = Offset(
      avail.left + (avail.width - bounds.width * k) / 2 - bounds.left * k,
      avail.top + (avail.height - bounds.height * k) / 2 - bounds.top * k,
    );

    canvas.save();
    canvas.translate(off.dx, off.dy);
    canvas.scale(k);
    if (spec.custom != null) {
      spec.custom!(canvas);
    } else {
      final its = spec.items.map(sceneItem).whereType<SceneItem>().toList()..sort((a, b) => a.z.compareTo(b.z));
      for (final it in its) {
        it.paint(canvas);
      }
      for (final it in its) {
        if (spec.focus.contains(it.id)) {
          canvas.drawPath(it.shape, fillPaint(ArtColors.highlight.withValues(alpha: 0.22)));
          canvas.drawPath(it.shape, strokePaint(ArtColors.highlight, 3 / k));
        }
      }
    }
    canvas.restore();

    if (!hasLabels) return;
    final fs = (size.height / 15).clamp(10.0, 13.0);
    for (final c in spec.callouts) {
      final t = off + c.target * k;
      final lx = c.left ? margin - 6 : size.width - margin + 6;
      final ly = (t.dy + c.dy).clamp(fs, size.height - fs);
      drawCallout(canvas, t, Offset(lx, ly), c.label, fs);
    }
  }

  @override
  bool shouldRepaint(covariant PartArtPainter o) => o.spec != spec || o.labels != labels;
}

// ---------------- disegni dedicati (spazio 300x200) ----------------

void _barrelExploded(Canvas c) {
  // tamburo con la molla dentro, a sinistra
  const o = Offset(88, 120);
  c.drawPath(gearPath(o, 70, 60), fillPaint(ArtColors.brass));
  c.drawPath(gearPath(o, 70, 60), strokePaint(ArtColors.brassDark, 1));
  c.drawCircle(o, 60, fillPaint(const Color(0xFF7D6232)));
  c.drawPath(spiralPath(o, 14, 57, 7), strokePaint(const Color(0xFFCFD6DF), 3));
  c.drawCircle(o, 12, fillPaint(ArtColors.steel));
  // albero, in alto al centro
  c.drawRect(const Rect.fromLTWH(144, 30, 12, 60), fillPaint(ArtColors.steel));
  c.drawRect(const Rect.fromLTWH(144, 30, 12, 60), strokePaint(ArtColors.steelDark, 1));
  c.drawRect(const Rect.fromLTWH(140, 46, 20, 12), fillPaint(ArtColors.steelDark));
  // coperchio, a destra
  const l = Offset(225, 118);
  c.drawCircle(l, 58, fillPaint(const Color(0xFFE2C27A)));
  c.drawCircle(l, 58, strokePaint(ArtColors.brassDark, 1.2));
  c.drawCircle(l, 9, fillPaint(Colors.black.withValues(alpha: 0.4)));
  c.drawLine(const Offset(270, 118), const Offset(283, 118), strokePaint(ArtColors.brassDark, 3));
}

void _mainspring(Canvas c) {
  const o = Offset(150, 100);
  c.drawPath(spiralPath(o, 10, 82, 7.5), strokePaint(const Color(0xFF5B6B80), 4.5));
  c.drawCircle(o, 8, strokePaint(const Color(0xFF5B6B80), 3));
}

void _bridle(Canvas c) {
  const o = Offset(150, 100);
  c.drawCircle(o, 90, fillPaint(ArtColors.brass));
  c.drawCircle(o, 82, fillPaint(const Color(0xFF7D6232)));
  c.drawPath(spiralPath(o, 18, 76, 6), strokePaint(const Color(0xFFCFD6DF), 3));
  c.drawArc(Rect.fromCircle(center: o, radius: 79), -0.6, 1.2, false, strokePaint(ArtColors.highlight, 6));
  c.drawCircle(o, 16, fillPaint(ArtColors.steel));
}

void _arbor(Canvas c) {
  c.drawRect(const Rect.fromLTWH(140, 30, 20, 140), fillPaint(ArtColors.steel));
  c.drawRect(const Rect.fromLTWH(140, 30, 20, 140), strokePaint(ArtColors.steelDark, 1.2));
  c.drawRect(const Rect.fromLTWH(128, 80, 44, 30), fillPaint(const Color(0xFFAEB7C3)));
  c.drawRect(const Rect.fromLTWH(128, 80, 44, 30), strokePaint(ArtColors.steelDark, 1.2));
  c.drawLine(const Offset(150, 86), const Offset(162, 96), strokePaint(ArtColors.steelDark, 4));
  c.drawRect(const Rect.fromLTWH(143, 30, 14, 20), fillPaint(ArtColors.steelDark));
}

void _gaskets(Canvas c) {
  for (final g in const [(Offset(80, 100), 55.0, 8.0), (Offset(195, 95), 34.0, 5.0), (Offset(265, 110), 18.0, 4.0)]) {
    c.drawCircle(g.$1, g.$2, strokePaint(const Color(0xFF26272B), g.$3 * 2));
    c.drawCircle(g.$1 + Offset(-g.$2 * 0.3, -g.$2 * 0.3), g.$3 * 0.6, fillPaint(Colors.white.withValues(alpha: 0.4)));
  }
}

void _jewels(Canvas c) {
  drawJewel(c, const Offset(90, 100), 45);
  // sezione di una pietra con la conca
  final p = Path()
    ..moveTo(165, 70)
    ..lineTo(255, 70)
    ..lineTo(255, 130)
    ..lineTo(215, 130)
    ..quadraticBezierTo(210, 100, 213, 92)
    ..lineTo(207, 92)
    ..quadraticBezierTo(210, 100, 205, 130)
    ..lineTo(165, 130)
    ..close();
  c.drawPath(p, fillPaint(ArtColors.ruby));
  c.drawPath(p, strokePaint(const Color(0xFF6A0C33), 1.5));
  c.drawLine(const Offset(210, 40), const Offset(210, 160), strokePaint(ArtColors.steelDark, 6));
}

void _shock(Canvas c) {
  // sezione: castone, pietra forata, contropietra, mollina
  c.drawRect(const Rect.fromLTWH(80, 90, 140, 70), fillPaint(ArtColors.steel));
  c.drawRect(const Rect.fromLTWH(80, 90, 140, 70), strokePaint(ArtColors.steelDark, 1.2));
  c.drawRect(const Rect.fromLTWH(115, 118, 70, 20), fillPaint(ArtColors.ruby));
  c.drawRect(const Rect.fromLTWH(118, 92, 64, 14), fillPaint(const Color(0xFFE05A8B)));
  final lyre = Path()
    ..moveTo(70, 70)
    ..quadraticBezierTo(150, 50, 230, 70)
    ..moveTo(70, 70)
    ..quadraticBezierTo(150, 92, 230, 70);
  c.drawPath(lyre, strokePaint(const Color(0xFF3A4556), 4));
  c.drawLine(const Offset(150, 138), const Offset(150, 185), strokePaint(ArtColors.steelDark, 8));
}

void _ring(Canvas c) {
  const o = Offset(150, 100);
  c.drawCircle(o, 85, strokePaint(const Color(0xFF9DA5B1), 18));
  c.drawCircle(o, 85, strokePaint(const Color(0xFF6F7886), 1.5));
  c.drawRect(const Rect.fromLTWH(220, 88, 40, 24), fillPaint(Colors.white));
}
