import 'dart:math' as math;

import 'package:flutter/material.dart';
import 'package:flutter/scheduler.dart';

import '../art/anim_math.dart';
import '../art/draw.dart';
import '../art/scene.dart' show drawEscapeWheel, drawBalance, drawHands;
import 'theme.dart';

/// Pagina "Come funziona": quattro animazioni interattive.
class HowItWorksPage extends StatelessWidget {
  final int initialTab;
  const HowItWorksPage({super.key, this.initialTab = 0});

  @override
  Widget build(BuildContext context) {
    return DefaultTabController(
      length: 4,
      initialIndex: initialTab,
      child: Scaffold(
        appBar: AppBar(
          title: const Text('Come funziona'),
          bottom: const TabBar(
            isScrollable: true,
            tabAlignment: TabAlignment.start,
            tabs: [
              Tab(text: 'Scappamento'),
              Tab(text: 'Energia'),
              Tab(text: 'Corona'),
              Tab(text: 'Briglia'),
            ],
          ),
        ),
        body: const TabBarView(
          physics: NeverScrollableScrollPhysics(),
          children: [EscapementDemo(), EnergyDemo(), KeylessDemo(), BridleDemo()],
        ),
      ),
    );
  }
}

/// Base per le animazioni: un Ticker che chiama tick(dt).
mixin _TickerLoop<T extends StatefulWidget> on State<T>, SingleTickerProviderStateMixin<T> {
  Ticker? _ticker;
  Duration _last = Duration.zero;
  bool running = true;

  void tick(double dt);

  @override
  void initState() {
    super.initState();
    _ticker = createTicker((elapsed) {
      final dt = (elapsed - _last).inMicroseconds / 1e6;
      _last = elapsed;
      if (running && dt > 0 && dt < 0.2) {
        setState(() => tick(dt));
      }
    })
      ..start();
  }

  @override
  void dispose() {
    _ticker?.dispose();
    super.dispose();
  }
}

Widget _canvasBox(CustomPainter p, {double aspect = 1.45, GestureDragUpdateCallback? onPan, GestureTapUpCallback? onTap, Key? key}) {
  return Card(
    clipBehavior: Clip.antiAlias,
    child: AspectRatio(
      aspectRatio: aspect,
      child: LayoutBuilder(builder: (ctx, box) {
        return GestureDetector(
          key: key,
          onPanUpdate: onPan,
          onTapUp: onTap,
          child: CustomPaint(size: Size(box.maxWidth, box.maxHeight), painter: p),
        );
      }),
    ),
  );
}

/// Adatta uno spazio di disegno w x h alla tela.
void _fit(Canvas canvas, Size size, double w, double h) {
  final k = math.min(size.width / w, size.height / h);
  canvas.translate((size.width - w * k) / 2, (size.height - h * k) / 2);
  canvas.scale(k);
}

Offset _unfit(Offset local, Size size, double w, double h) {
  final k = math.min(size.width / w, size.height / h);
  return (local - Offset((size.width - w * k) / 2, (size.height - h * k) / 2)) / k;
}

// =====================================================================
// SCAPPAMENTO
// =====================================================================

class EscapementDemo extends StatefulWidget {
  const EscapementDemo({super.key});

  @override
  State<EscapementDemo> createState() => _EscapementDemoState();
}

class _EscapementDemoState extends State<EscapementDemo>
    with SingleTickerProviderStateMixin, _TickerLoop<EscapementDemo> {
  double phase = 0.3;
  double speed = 0.05; // frazione della velocità reale

  @override
  void tick(double dt) => phase += dt * 8 * math.pi * speed; // 28.800 alt/h = 8 tic al secondo

  @override
  Widget build(BuildContext context) {
    final st = escapementAt(phase);
    final captions = {
      'libero':
          'Arco libero: il bilanciere oscilla da solo, senza toccare nulla. La ruota di scappamento è ferma, bloccata da una paletta.',
      'sblocco':
          'Sblocco: l\'ellisse del bilanciere colpisce la forchetta, l\'ancora ruota e la paletta libera il dente.',
      'impulso':
          'Impulso: il dente liberato spinge sulla paletta, l\'ancora spinge il bilanciere e gli ridà l\'energia persa. Poi l\'altra paletta blocca il dente successivo: è il "tic".',
    };
    return ListView(
      padding: const EdgeInsets.fromLTRB(16, 12, 16, 28),
      children: [
        _canvasBox(_EscPainter(st)),
        const SizedBox(height: 10),
        AnimatedContainer(
          duration: const Duration(milliseconds: 200),
          child: InfoBox(
            icon: st.phase == 'libero' ? Icons.waves : (st.phase == 'sblocco' ? Icons.lock_open : Icons.bolt),
            title: st.phase == 'libero' ? 'Arco libero' : (st.phase == 'sblocco' ? 'Sblocco' : 'Impulso'),
            text: captions[st.phase]!,
            color: st.phase == 'libero' ? Brand.blu : Brand.arancio,
          ),
        ),
        const SizedBox(height: 14),
        Row(children: [
          IconButton.filledTonal(
            onPressed: () => setState(() => running = !running),
            icon: Icon(running ? Icons.pause : Icons.play_arrow),
          ),
          const SizedBox(width: 8),
          Expanded(
            child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
              Text('Rallentatore: ${(1 / speed).round()} volte più lento',
                  style: const TextStyle(fontSize: 14)),
              Slider(
                value: math.log(speed),
                min: math.log(0.01),
                max: 0,
                onChanged: (v) => setState(() => speed = math.exp(v)),
              ),
            ]),
          ),
        ]),
        if (!running)
          Row(children: [
            const Text('Passo a passo: '),
            TextButton(onPressed: () => setState(() => phase -= 0.08), child: const Text('◀')),
            TextButton(onPressed: () => setState(() => phase += 0.08), child: const Text('▶')),
          ]),
        const SizedBox(height: 8),
        const InfoBox(
          icon: Icons.lightbulb_outline,
          title: 'Perché è il cuore dell\'orologio',
          text:
              'Senza scappamento la molla si scaricherebbe in pochi secondi facendo girare tutto all\'impazzata. '
              'Lo scappamento lascia passare l\'energia "un dente alla volta", al ritmo del bilanciere. '
              'Un orologio da 28.800 alternanze/ora fa questo 8 volte al secondo, per anni.',
          color: Brand.blu,
        ),
      ],
    );
  }
}

class _EscPainter extends CustomPainter {
  final EscapementState st;
  _EscPainter(this.st);

  static const e = Offset(110, 150);
  static const p = Offset(215, 150);
  static const b = Offset(318, 150);

  @override
  void paint(Canvas canvas, Size size) {
    canvas.drawRect(Offset.zero & size, fillPaint(const Color(0xFFF3F4F7)));
    canvas.save();
    _fit(canvas, size, 420, 290);
    const teeth = 15;
    final pitch = 2 * math.pi / teeth;
    final wheelRot = -st.wheelSteps * pitch / 2;
    drawEscapeWheel(canvas, e, 74, wheelRot, teeth: teeth);
    if (st.phase == 'impulso') {
      canvas.drawCircle(e, 78, strokePaint(ArtColors.highlight.withValues(alpha: 0.6), 4));
    }

    // bilanciere
    drawBalance(canvas, b, 82, st.balanceAngle, spiralBreath: math.sin(st.balanceAngle));
    if (st.phase == 'libero') {
      canvas.drawCircle(b, 86, strokePaint(ArtColors.highlight.withValues(alpha: 0.5), 4));
    }
    // plateau con ellisse
    final roller = b;
    canvas.drawCircle(roller, 20, fillPaint(ArtColors.steel));
    canvas.drawCircle(roller, 20, strokePaint(ArtColors.steelDark, 1.2));
    final pin = polar(roller, 28, math.pi + st.balanceAngle);
    canvas.drawCircle(pin, 6, fillPaint(ArtColors.ruby));

    // ancora
    canvas.save();
    canvas.translate(p.dx, p.dy);
    canvas.rotate(st.forkAngle);
    canvas.translate(-p.dx, -p.dy);
    final tip = Offset(p.dx + 66, p.dy);
    final entry = polar(e, 76, -0.95);
    final exit = polar(e, 76, 0.95);
    final body = union([
      taperPath(p, tip, 18, 9),
      taperPath(p, entry, 15, 9),
      taperPath(p, exit, 15, 9),
      circlePath(p, 11),
    ]);
    canvas.drawPath(body, fillPaint(st.phase == 'libero' ? ArtColors.steel : const Color(0xFFFFD2AE)));
    canvas.drawPath(body, strokePaint(ArtColors.steelDark, 1.4));
    for (final pt in [entry, exit]) {
      final dir = (pt - p) / (pt - p).distance;
      canvas.drawLine(pt - dir * 3, pt + dir * 9, strokePaint(ArtColors.ruby, 8));
    }
    canvas.drawLine(tip, tip + const Offset(10, -7), strokePaint(ArtColors.steelDark, 4));
    canvas.drawLine(tip, tip + const Offset(10, 7), strokePaint(ArtColors.steelDark, 4));
    drawJewel(canvas, p, 5);
    canvas.restore();

    canvas.restore();
    // etichette
    final k = math.min(size.width / 420, size.height / 290);
    final off = Offset((size.width - 420 * k) / 2, (size.height - 290 * k) / 2);
    _label(canvas, off + const Offset(110, 262) * k, 'Ruota di scappamento');
    _label(canvas, off + const Offset(215, 210) * k, 'Ancora');
    _label(canvas, off + const Offset(318, 262) * k, 'Bilanciere');
  }

  void _label(Canvas c, Offset at, String t) {
    final tp = TextPainter(
      text: TextSpan(text: t, style: const TextStyle(fontSize: 12, color: ArtColors.ink, fontWeight: FontWeight.w600)),
      textDirection: TextDirection.ltr,
    )..layout();
    tp.paint(c, at - Offset(tp.width / 2, 0));
  }

  @override
  bool shouldRepaint(covariant _EscPainter old) => true;
}

// =====================================================================
// ENERGIA: dalla molla al bilanciere
// =====================================================================

class _TrainWheel {
  final String id;
  final String name;
  final Offset o;
  final double r;
  final int teeth;
  final String speed;
  const _TrainWheel(this.id, this.name, this.o, this.r, this.teeth, this.speed);
}

const _trainWheels = [
  _TrainWheel('bariletto', 'Bariletto (molla)', Offset(70, 175), 58, 70, '1 giro ogni 8 ore circa'),
  _TrainWheel('ruota_centro', 'Ruota di centro', Offset(162, 112), 46, 60, '1 giro all\'ora: porta i minuti'),
  _TrainWheel('ruota_terzo', 'Ruota di terzo', Offset(240, 170), 36, 54, '1 giro ogni 7 minuti e mezzo circa'),
  _TrainWheel('ruota_secondi', 'Ruota dei secondi', Offset(308, 105), 30, 50, '1 giro al minuto: porta i secondi'),
  _TrainWheel('ruota_scappamento', 'Ruota di scappamento', Offset(368, 160), 22, 15, '1 giro ogni 5 secondi circa'),
];

class EnergyDemo extends StatefulWidget {
  const EnergyDemo({super.key});

  @override
  State<EnergyDemo> createState() => _EnergyDemoState();
}

class _EnergyDemoState extends State<EnergyDemo> with SingleTickerProviderStateMixin, _TickerLoop<EnergyDemo> {
  double t = 0; // secondi simulati
  double flow = 0;
  double mult = 60;
  String? tapped;

  @override
  void tick(double dt) {
    t += dt * mult;
    flow += dt;
  }

  @override
  Widget build(BuildContext context) {
    final tw = _trainWheels.where((w) => w.id == tapped).toList();
    return ListView(
      padding: const EdgeInsets.fromLTRB(16, 12, 16, 28),
      children: [
        LayoutBuilder(builder: (ctx, box) {
          return _canvasBox(
            _EnergyPainter(t, flow, tapped),
            aspect: 1.55,
            onTap: (d) {
              final size = Size(box.maxWidth, box.maxWidth / 1.55);
              final p = _unfit(d.localPosition, size, 440, 284);
              String? hit;
              for (final w in _trainWheels) {
                if ((p - w.o).distance <= w.r + 6) hit = w.id;
              }
              if ((p - const Offset(410, 245)).distance < 30) hit = 'bilanciere';
              setState(() => tapped = hit);
            },
          );
        }),
        const SizedBox(height: 10),
        if (tw.isNotEmpty)
          InfoBox(icon: Icons.settings, title: tw.first.name, text: tw.first.speed, color: Brand.arancio)
        else if (tapped == 'bilanciere')
          const InfoBox(
              icon: Icons.settings,
              title: 'Bilanciere',
              text: 'Oscilla 4 volte al secondo e, tramite lo scappamento, decide quanto veloce gira tutto il resto.',
              color: Brand.arancio)
        else
          const InfoBox(icon: Icons.touch_app_outlined, title: 'Tocca una ruota', text: 'Ti dico cos\'è e quanto veloce gira.', color: Brand.blu),
        const SizedBox(height: 12),
        Text('Velocità del tempo', style: Brand.sora(14, 700, color: Brand.inchiostro)),
        const SizedBox(height: 6),
        SegmentedButton<double>(
          segments: const [
            ButtonSegment(value: 1, label: Text('Reale')),
            ButtonSegment(value: 60, label: Text('×60')),
            ButtonSegment(value: 600, label: Text('×600')),
            ButtonSegment(value: 3600, label: Text('×3600')),
          ],
          selected: {mult},
          onSelectionChanged: (s) => setState(() => mult = s.first),
        ),
        const SizedBox(height: 12),
        const InfoBox(
          icon: Icons.lightbulb_outline,
          title: 'Il percorso dell\'energia',
          text:
              'La molla nel bariletto spinge la ruota di centro, che spinge il terzo, poi i secondi, poi la ruota di scappamento. '
              'Ogni ruota gira più veloce della precedente perché ingrana con un pignone piccolo. '
              'In fondo c\'è lo scappamento, che fa da freno a ritmo del bilanciere. '
              'A velocità reale le prime ruote sembrano ferme: prova ×3600, un\'ora diventa un secondo.',
          color: Brand.blu,
        ),
      ],
    );
  }
}

class _EnergyPainter extends CustomPainter {
  final double t;
  final double flow;
  final String? tapped;
  _EnergyPainter(this.t, this.flow, this.tapped);

  @override
  void paint(Canvas canvas, Size size) {
    canvas.drawRect(Offset.zero & size, fillPaint(const Color(0xFFF3F4F7)));
    canvas.save();
    _fit(canvas, size, 440, 284);
    // percorso dell'energia
    final pts = [for (final w in _trainWheels) w.o, const Offset(410, 245)];
    final path = Path()..moveTo(pts.first.dx, pts.first.dy);
    for (final o in pts.skip(1)) {
      path.lineTo(o.dx, o.dy);
    }
    var dir = 1.0;
    for (final w in _trainWheels) {
      final rps = trainRevPerSec[w.id] ?? 0;
      final a = dir * 2 * math.pi * ((rps * t) % 1.0);
      if (w.id == 'ruota_scappamento') {
        // la ruota di scappamento avanza a scatti
        final beats = t * 8;
        final stepped = beats.floorToDouble() + smoothstep((beats % 1.0) * 4);
        drawEscapeWheel(canvas, w.o, w.r, dir * stepped * (2 * math.pi / 15) / 2, teeth: 15);
      } else {
        drawWheel(canvas, w.o, w.r, w.teeth, rotation: a, pinion: w.r * 0.28);
      }
      if (tapped == w.id) canvas.drawCircle(w.o, w.r + 5, strokePaint(ArtColors.highlight, 4));
      dir = -dir;
    }
    // bilanciere
    final bal = 2.4 * math.sin(t * 8 * math.pi);
    drawBalance(canvas, const Offset(410, 245), 30, bal, spiralBreath: 0);
    if (tapped == 'bilanciere') canvas.drawCircle(const Offset(410, 245), 35, strokePaint(ArtColors.highlight, 4));

    // puntini che scorrono lungo il percorso
    final metrics = path.computeMetrics().toList();
    if (metrics.isNotEmpty) {
      final m = metrics.first;
      for (var i = 0; i < 12; i++) {
        final d = ((flow * 60 + i * m.length / 12) % m.length);
        final tan = m.getTangentForOffset(d);
        if (tan != null) canvas.drawCircle(tan.position, 4.5, fillPaint(ArtColors.highlight.withValues(alpha: 0.85)));
      }
    }
    canvas.restore();
  }

  @override
  bool shouldRepaint(covariant _EnergyPainter old) => true;
}

// =====================================================================
// CORONA: remontoir
// =====================================================================

class KeylessDemo extends StatefulWidget {
  const KeylessDemo({super.key});

  @override
  State<KeylessDemo> createState() => _KeylessDemoState();
}

class _KeylessDemoState extends State<KeylessDemo> with SingleTickerProviderStateMixin, _TickerLoop<KeylessDemo> {
  int pos = 0;
  double pull = 0; // animato verso la posizione scelta
  double crown = 0; // rotazione della corona (rad)
  bool autoTurn = false;

  @override
  void tick(double dt) {
    final target = pos * 22.0;
    pull += (target - pull) * math.min(1.0, dt * 10);
    if (autoTurn) crown += dt * 3;
  }

  @override
  Widget build(BuildContext context) {
    const texts = [
      'Corona spinta dentro: il pignone scorrevole ingrana con il pignone di carica. Girando, la ruota di carica fa girare il rocchetto a cricco e la molla si carica.',
      'Primo scatto (solo nei calibri con data): il pignone scorrevole si sposta e manda la rotazione al correttore rapido della data.',
      'Tutta fuori: il pignone scorrevole ingrana con la ruota di rinvio, che arriva alla minuteria e sposta le lancette. In molti calibri il bilanciere si ferma (fermasecondi).',
    ];
    final date = 1 + ((crown / (2 * math.pi)).floor() % 31 + 31) % 31;
    return ListView(
      padding: const EdgeInsets.fromLTRB(16, 12, 16, 28),
      children: [
        _canvasBox(
          _KeylessPainter(pull, pos, crown, date),
          aspect: 1.5,
          onPan: (d) => setState(() => crown += d.delta.dy * 0.03 + d.delta.dx * 0.01),
        ),
        const SizedBox(height: 6),
        Text('Trascina col dito sul disegno per girare la corona.',
            style: TextStyle(fontSize: 13, color: Brand.inchiostro.withValues(alpha: 0.6))),
        const SizedBox(height: 10),
        SegmentedButton<int>(
          segments: const [
            ButtonSegment(value: 0, label: Text('Carica')),
            ButtonSegment(value: 1, label: Text('Data')),
            ButtonSegment(value: 2, label: Text('Ora')),
          ],
          selected: {pos},
          onSelectionChanged: (s) => setState(() => pos = s.first),
        ),
        const SizedBox(height: 8),
        SwitchListTile(
          contentPadding: EdgeInsets.zero,
          value: autoTurn,
          onChanged: (v) => setState(() => autoTurn = v),
          title: const Text('Gira da sola'),
        ),
        InfoBox(
          icon: pos == 0 ? Icons.battery_charging_full : (pos == 1 ? Icons.calendar_today : Icons.schedule),
          title: pos == 0 ? 'Posizione di carica' : (pos == 1 ? 'Correzione della data' : 'Messa all\'ora'),
          text: texts[pos],
          color: Brand.arancio,
        ),
      ],
    );
  }
}

class _KeylessPainter extends CustomPainter {
  final double pull;
  final int pos;
  final double crown;
  final int date;
  _KeylessPainter(this.pull, this.pos, this.crown, this.date);

  @override
  void paint(Canvas canvas, Size size) {
    canvas.drawRect(Offset.zero & size, fillPaint(const Color(0xFFF3F4F7)));
    canvas.save();
    _fit(canvas, size, 420, 280);
    final hl = strokePaint(ArtColors.highlight, 5);

    // platina (sfondo)
    canvas.drawRRect(RRect.fromRectAndRadius(const Rect.fromLTWH(10, 20, 340, 245), const Radius.circular(30)),
        fillPaint(ArtColors.plate.withValues(alpha: 0.6)));

    const y = 140.0;
    // stelo
    final stem = Rect.fromLTRB(70, y - 7, 345 + pull, y + 7);
    canvas.drawRect(stem, fillPaint(ArtColors.steel));
    canvas.drawRect(stem, strokePaint(ArtColors.steelDark, 1.2));
    // corona
    final cr = RRect.fromRectAndRadius(Rect.fromLTRB(345 + pull, y - 34, 380 + pull, y + 34), const Radius.circular(8));
    canvas.drawRRect(cr, fillPaint(const Color(0xFFC9CED6)));
    for (var i = 0; i < 9; i++) {
      final yy = y - 30 + ((i * 7.5 + crown * 12) % 66);
      canvas.drawLine(Offset(347 + pull, yy), Offset(378 + pull, yy), strokePaint(ArtColors.steelDark, 2));
    }
    canvas.drawRRect(cr, strokePaint(ArtColors.steelDark, 2));
    if (crown != 0) canvas.drawRRect(cr, hl);

    // pignone di carica (fermo sul tratto tondo)
    final wp = Rect.fromCenter(center: const Offset(250, y), width: 28, height: 38);
    _pinion(canvas, wp, crown, pos == 0);
    // pignone scorrevole: si sposta con la corona tirata
    final clutchX = 217 - (pull.clamp(0.0, 22.0) / 22) * 32;
    final cw = Rect.fromCenter(center: Offset(clutchX, y), width: 30, height: 42);
    _pinion(canvas, cw, crown, true);

    // ruota di carica + rocchetto
    final cwr = pos == 0 ? crown * 0.6 : 0.0;
    drawWheel(canvas, const Offset(258, 78), 34, 26, color: ArtColors.steel, dark: ArtColors.steelDark, rotation: cwr, spokes: 0, jewel: false);
    drawWheel(canvas, const Offset(160, 60), 46, 40, color: ArtColors.steel, dark: ArtColors.steelDark, rotation: -cwr * 0.7, spokes: 0, jewel: false);
    if (pos == 0) {
      canvas.drawCircle(const Offset(258, 78), 37, hl);
      canvas.drawCircle(const Offset(160, 60), 49, hl);
    }

    // ruota di rinvio, correttore data, minuteria
    final sw = pos >= 1 ? -crown * 1.2 : 0.0;
    drawWheel(canvas, const Offset(172, 190), 24, 18, color: ArtColors.steel, dark: ArtColors.steelDark, rotation: sw, spokes: 0, jewel: false);
    if (pos >= 1) canvas.drawCircle(const Offset(172, 190), 27, hl);
    final dateRot = pos == 1 ? crown : 0.0;
    drawWheel(canvas, const Offset(105, 222), 26, 20, color: const Color(0xFFE2C27A), rotation: dateRot, spokes: 0, jewel: false);
    if (pos == 1) canvas.drawCircle(const Offset(105, 222), 29, hl);
    final minRot = pos == 2 ? crown * 0.8 : 0.0;
    drawWheel(canvas, const Offset(240, 228), 30, 24, rotation: minRot, spokes: 0, jewel: false);
    if (pos == 2) canvas.drawCircle(const Offset(240, 228), 33, hl);

    // tiretto e bascula (schematici)
    final leverPin = Offset(300 + pull * 0.8, y + 9);
    canvas.drawPath(taperPath(const Offset(320, 230), leverPin, 18, 9), fillPaint(const Color(0xFFD3D8E0)));
    canvas.drawPath(taperPath(const Offset(320, 230), leverPin, 18, 9), strokePaint(ArtColors.steelDark, 1.2));
    canvas.drawPath(taperPath(const Offset(150, 110), Offset(clutchX - 18, y - 16), 14, 8), fillPaint(const Color(0xFFD3D8E0)));
    canvas.drawPath(taperPath(const Offset(150, 110), Offset(clutchX - 18, y - 16), 14, 8), strokePaint(ArtColors.steelDark, 1.2));

    // mini lancette e data
    canvas.drawCircle(const Offset(390, 236), 28, fillPaint(ArtColors.dial));
    canvas.drawCircle(const Offset(390, 236), 28, strokePaint(ArtColors.ink, 1.5));
    drawHands(canvas, const Offset(390, 236), -math.pi / 2 + crown / 12, -math.pi / 2 + crown, math.pi / 2, scale: 0.065);
    final dp = RRect.fromRectAndRadius(Rect.fromCenter(center: const Offset(390, 186), width: 34, height: 22), const Radius.circular(4));
    canvas.drawRRect(dp, fillPaint(Colors.white));
    canvas.drawRRect(dp, strokePaint(ArtColors.ink, 1.5));
    final tp = TextPainter(
      text: TextSpan(text: '$date', style: const TextStyle(fontSize: 13, color: ArtColors.ink, fontWeight: FontWeight.w800)),
      textDirection: TextDirection.ltr,
    )..layout();
    tp.paint(canvas, const Offset(390, 186) - Offset(tp.width / 2, tp.height / 2));

    canvas.restore();

    final k = math.min(size.width / 420, size.height / 280);
    final off = Offset((size.width - 420 * k) / 2, (size.height - 280 * k) / 2);
    void lab(Offset o, String t) {
      final p = TextPainter(
        text: TextSpan(text: t, style: const TextStyle(fontSize: 10.5, color: ArtColors.ink, fontWeight: FontWeight.w600)),
        textDirection: TextDirection.ltr,
      )..layout();
      p.paint(canvas, off + o * k - Offset(p.width / 2, 0));
    }

    lab(const Offset(160, 4), 'Rocchetto a cricco');
    lab(const Offset(300, 40), 'Ruota di carica');
    lab(const Offset(105, 252), 'Correttore data');
    lab(const Offset(240, 262), 'Minuteria');
    lab(const Offset(60, 180), 'Rinvio');
  }

  void _pinion(Canvas c, Rect r, double rot, bool active) {
    c.drawRect(r, fillPaint(ArtColors.steel));
    final shift = (rot * 6) % 6;
    for (var x = r.left + shift; x < r.right; x += 6) {
      c.drawLine(Offset(x, r.top), Offset(x, r.bottom), strokePaint(ArtColors.steelDark, 1.4));
    }
    c.drawRect(r, strokePaint(ArtColors.steelDark, 1.4));
    if (active && rot != 0) c.drawRect(r.inflate(3), strokePaint(ArtColors.highlight, 4));
  }

  @override
  bool shouldRepaint(covariant _KeylessPainter old) => true;
}

// =====================================================================
// BRIGLIA
// =====================================================================

class BridleDemo extends StatefulWidget {
  const BridleDemo({super.key});

  @override
  State<BridleDemo> createState() => _BridleDemoState();
}

class _BridleDemoState extends State<BridleDemo> with SingleTickerProviderStateMixin, _TickerLoop<BridleDemo> {
  double charge = 0.25;
  double slip = 0; // angolo della briglia
  double slipFlash = 0;
  bool wrist = false;
  bool ticking = true;

  void _add(double v) {
    charge += v;
    if (charge > 1) {
      slip += (charge - 1) * 9;
      slipFlash = 1;
      charge = 1;
    }
  }

  @override
  void tick(double dt) {
    if (wrist) _add(dt * 0.12);
    if (ticking) charge = math.max(0, charge - dt * 0.012);
    slipFlash = math.max(0, slipFlash - dt * 1.5);
  }

  @override
  Widget build(BuildContext context) {
    final hours = (charge * 42).round();
    return ListView(
      padding: const EdgeInsets.fromLTRB(16, 12, 16, 28),
      children: [
        _canvasBox(_BridlePainter(charge, slip, slipFlash), aspect: 1.35),
        const SizedBox(height: 10),
        Row(children: [
          Expanded(
            child: ClipRRect(
              borderRadius: BorderRadius.circular(6),
              child: LinearProgressIndicator(
                value: charge,
                minHeight: 12,
                color: charge >= 0.999 ? Brand.arancio : Brand.blu,
                backgroundColor: Brand.blu.withValues(alpha: 0.1),
              ),
            ),
          ),
          const SizedBox(width: 10),
          Text('≈ $hours h', style: Brand.sora(15, 700, color: Brand.inchiostro)),
        ]),
        const SizedBox(height: 12),
        Row(children: [
          Expanded(
            child: FilledButton.icon(
              onPressed: () => setState(() => _add(0.07)),
              icon: const Icon(Icons.rotate_right),
              label: const Text('Gira la corona'),
            ),
          ),
          const SizedBox(width: 10),
          Expanded(
            child: OutlinedButton.icon(
              onPressed: () => setState(() => wrist = !wrist),
              icon: Icon(wrist ? Icons.stop : Icons.watch),
              label: Text(wrist ? 'Ferma polso' : 'Al polso'),
            ),
          ),
        ]),
        SwitchListTile(
          contentPadding: EdgeInsets.zero,
          value: ticking,
          onChanged: (v) => setState(() => ticking = v),
          title: const Text('L\'orologio sta funzionando (si scarica)'),
        ),
        InfoBox(
          icon: slipFlash > 0 ? Icons.warning_amber_rounded : Icons.lightbulb_outline,
          title: slipFlash > 0 ? 'La briglia sta slittando!' : 'Cosa vedi',
          text: slipFlash > 0
              ? 'La molla è carica al massimo: invece di tirare oltre, la briglia scivola sulla parete del bariletto. '
                  'Così un automatico non si rompe mai per troppa carica.'
              : 'Caricando, la molla si avvolge stretta intorno all\'albero. Scaricandosi torna ad appoggiarsi alla parete. '
                  'Negli automatici l\'estremità esterna (in arancio) non è agganciata: è la briglia.',
          color: slipFlash > 0 ? Brand.arancio : Brand.blu,
        ),
      ],
    );
  }
}

class _BridlePainter extends CustomPainter {
  final double charge;
  final double slip;
  final double flash;
  _BridlePainter(this.charge, this.slip, this.flash);

  @override
  void paint(Canvas canvas, Size size) {
    canvas.drawRect(Offset.zero & size, fillPaint(const Color(0xFFF3F4F7)));
    canvas.save();
    _fit(canvas, size, 300, 222);
    const o = Offset(150, 111);
    canvas.drawPath(gearPath(o, 104, 72), fillPaint(ArtColors.brass));
    canvas.drawPath(gearPath(o, 104, 72), strokePaint(ArtColors.brassDark, 1));
    canvas.drawCircle(o, 92, fillPaint(const Color(0xFF6E5528)));
    final ri = 70 - 50 * charge;
    final ro = 88 - 26 * charge;
    final start = slip + charge * 6;
    canvas.drawPath(spiralPath(o, ri, ro, 6.5, start: start), strokePaint(const Color(0xFFD5DCE5), 3.2));
    // briglia: tratto finale appoggiato alla parete
    final endA = start + 6.5 * 2 * math.pi;
    canvas.drawArc(Rect.fromCircle(center: o, radius: 89), endA - 0.1, 1.1, false,
        strokePaint(Color.lerp(ArtColors.highlight, Colors.red, flash)!, 6 + 3 * flash));
    canvas.drawCircle(o, 18, fillPaint(ArtColors.steel));
    canvas.drawCircle(o, 18, strokePaint(ArtColors.steelDark, 1.2));
    canvas.drawRect(Rect.fromCenter(center: o, width: 14, height: 14), fillPaint(ArtColors.steelDark));
    if (flash > 0) {
      canvas.drawCircle(o, 100, strokePaint(Colors.red.withValues(alpha: 0.4 * flash), 8));
    }
    canvas.restore();
  }

  @override
  bool shouldRepaint(covariant _BridlePainter old) => true;
}

/// Accesso rapido usato da altre pagine.
void openHowItWorks(BuildContext context, {int tab = 0}) {
  Navigator.push(context, MaterialPageRoute(builder: (_) => HowItWorksPage(initialTab: tab)));
}
