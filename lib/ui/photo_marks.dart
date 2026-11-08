import 'dart:io';
import 'dart:math' as math;
import 'dart:ui' as ui;

import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:image_picker/image_picker.dart';

import '../art/actions.dart';
import '../art/scene.dart';
import '../data/components.dart';
import '../data/steps.dart';
import '../logic/gemini.dart';
import '../logic/revision.dart';
import '../logic/screw_detector.dart';
import '../logic/store.dart';
import 'theme.dart';

/// Decodifica la foto ridotta e cerca le viti (in un isolate).
Future<(List<FoundScrew>, double)> detectOnPhoto(String path) async {
  final bytes = await File(path).readAsBytes();
  final full = await ui.instantiateImageCodec(bytes);
  final f0 = await full.getNextFrame();
  final w0 = f0.image.width, h0 = f0.image.height;
  f0.image.dispose();
  final k = 480 / math.max(w0, h0);
  final codec = await ui.instantiateImageCodec(
    bytes,
    targetWidth: (w0 * math.min(1, k)).round(),
    targetHeight: (h0 * math.min(1, k)).round(),
  );
  final frame = await codec.getNextFrame();
  final img = frame.image;
  final data = await img.toByteData(format: ui.ImageByteFormat.rawRgba);
  final w = img.width, h = img.height;
  img.dispose();
  if (data == null) return (const <FoundScrew>[], w0 / h0);
  final res = await compute(detectScrewsIsolate, DetectInput(data.buffer.asUint8List(), w, h));
  return (res, w0 / h0);
}

/// La foto con le viti numerate sopra.
class MarkedPhoto extends StatelessWidget {
  final PhotoMarks pm;
  final bool reassembly;
  final bool editing;
  final void Function(int index)? onTapMark;
  final void Function(int index)? onLongPressMark;
  final void Function(Offset normalized)? onTapEmpty;

  const MarkedPhoto({
    super.key,
    required this.pm,
    this.reassembly = false,
    this.editing = false,
    this.onTapMark,
    this.onLongPressMark,
    this.onTapEmpty,
  });

  int? _hit(Offset p, Size size) {
    final dmin = math.min(size.width, size.height);
    int? best;
    var bestD = double.infinity;
    for (var i = 0; i < pm.marks.length; i++) {
      final m = pm.marks[i];
      final c = Offset(m.x * size.width, m.y * size.height);
      final d = (c - p).distance;
      final rr = math.max(22.0, m.r * dmin * 1.4);
      if (d < rr && d < bestD) {
        best = i;
        bestD = d;
      }
    }
    return best;
  }

  @override
  Widget build(BuildContext context) {
    return AspectRatio(
      aspectRatio: pm.aspect,
      child: LayoutBuilder(builder: (ctx, box) {
        final size = Size(box.maxWidth, box.maxHeight);
        return GestureDetector(
          onTapUp: (d) {
            final i = _hit(d.localPosition, size);
            if (i != null) {
              onTapMark?.call(i);
            } else if (editing) {
              onTapEmpty?.call(Offset(d.localPosition.dx / size.width, d.localPosition.dy / size.height));
            }
          },
          onLongPressStart: (d) {
            final i = _hit(d.localPosition, size);
            if (i != null) onLongPressMark?.call(i);
          },
          child: Stack(fit: StackFit.expand, children: [
            Image.file(File(pm.photo), fit: BoxFit.fill, errorBuilder: (_, __, ___) => Container(color: Colors.black12)),
            CustomPaint(painter: _MarksPainter(pm, reassembly)),
          ]),
        );
      }),
    );
  }
}

class _MarksPainter extends CustomPainter {
  final PhotoMarks pm;
  final bool reassembly;
  _MarksPainter(this.pm, this.reassembly);

  @override
  void paint(Canvas canvas, Size size) {
    final dmin = math.min(size.width, size.height);
    for (var i = 0; i < pm.marks.length; i++) {
      final m = pm.marks[i];
      final c = Offset(m.x * size.width, m.y * size.height);
      final r = math.max(9.0, m.r * dmin * 1.15);
      final doneNow = reassembly ? m.back : m.out;
      final color = doneNow ? Colors.green.shade600 : (m.leftHand ? Colors.red.shade600 : Brand.arancio);
      canvas.drawCircle(c, r, Paint()
        ..style = PaintingStyle.stroke
        ..strokeWidth = 3
        ..color = color);
      // numero
      final bc = c + Offset(r * 0.75, -r * 0.75);
      canvas.drawCircle(bc, 11, Paint()..color = color);
      canvas.drawCircle(bc, 11, Paint()
        ..style = PaintingStyle.stroke
        ..strokeWidth = 2
        ..color = Colors.white);
      final tp = TextPainter(
        text: TextSpan(
          text: doneNow ? '✓' : '${i + 1}',
          style: const TextStyle(color: Colors.white, fontSize: 12, fontWeight: FontWeight.w800),
        ),
        textDirection: TextDirection.ltr,
      )..layout();
      tp.paint(canvas, bc - Offset(tp.width / 2, tp.height / 2));
      if (m.leftHand && !doneNow) {
        final lp = TextPainter(
          text: const TextSpan(
            text: ' SX ',
            style: TextStyle(color: Colors.white, fontSize: 10, fontWeight: FontWeight.w800, backgroundColor: Color(0xFFD32F2F)),
          ),
          textDirection: TextDirection.ltr,
        )..layout();
        lp.paint(canvas, c + Offset(-lp.width / 2, r + 3));
      }
    }
  }

  @override
  bool shouldRepaint(covariant _MarksPainter o) => true;
}

/// Pagina a schermo intero per correggere le viti con precisione.
class MarksEditorPage extends StatefulWidget {
  final PhotoMarks pm;
  final bool reassembly;
  const MarksEditorPage({super.key, required this.pm, this.reassembly = false});

  @override
  State<MarksEditorPage> createState() => _MarksEditorPageState();
}

class _MarksEditorPageState extends State<MarksEditorPage> {
  bool _edit = false;

  @override
  Widget build(BuildContext context) {
    final pm = widget.pm;
    return Scaffold(
      appBar: AppBar(title: Text(_edit ? 'Correggi le viti' : 'La tua foto')),
      body: Column(children: [
        Expanded(
          child: InteractiveViewer(
            maxScale: 6,
            child: Center(
              child: MarkedPhoto(
                pm: pm,
                reassembly: widget.reassembly,
                editing: _edit,
                onTapMark: (i) => setState(() {
                  if (_edit) {
                    pm.marks.removeAt(i);
                  } else if (widget.reassembly) {
                    pm.marks[i].back = !pm.marks[i].back;
                  } else {
                    pm.marks[i].out = !pm.marks[i].out;
                  }
                }),
                onLongPressMark: (i) => setState(() => pm.marks[i].leftHand = !pm.marks[i].leftHand),
                onTapEmpty: (p) => setState(() {
                  final r = pm.marks.isEmpty ? 0.03 : pm.marks.map((m) => m.r).reduce((a, b) => a + b) / pm.marks.length;
                  pm.marks.add(Mark(p.dx, p.dy, r));
                  pm.source = pm.source == 'manuale' ? 'manuale' : '${pm.source} + correzioni';
                }),
              ),
            ),
          ),
        ),
        Padding(
          padding: const EdgeInsets.fromLTRB(16, 8, 16, 4),
          child: Text(
            _edit
                ? 'Tocca un punto vuoto per aggiungere una vite, tocca un cerchio per toglierlo. Pizzica per ingrandire.'
                : (widget.reassembly
                    ? 'Tocca una vite quando l\'hai riavvitata. Tieni premuto per segnare il filetto sinistro.'
                    : 'Tocca una vite quando l\'hai svitata. Tieni premuto per segnare il filetto sinistro.'),
            textAlign: TextAlign.center,
            style: TextStyle(color: Brand.inchiostro.withValues(alpha: 0.7)),
          ),
        ),
        SafeArea(
          child: Padding(
            padding: const EdgeInsets.fromLTRB(16, 4, 16, 10),
            child: Row(children: [
              Expanded(
                child: OutlinedButton.icon(
                  onPressed: () => setState(() => _edit = !_edit),
                  icon: Icon(_edit ? Icons.check : Icons.edit),
                  label: Text(_edit ? 'Fine correzioni' : 'Correggi'),
                ),
              ),
              const SizedBox(width: 10),
              Expanded(
                child: FilledButton(onPressed: () => Navigator.pop(context, true), child: const Text('Salva')),
              ),
            ]),
          ),
        ),
      ]),
    );
  }
}

/// "Sul tuo orologio": la guida sulle foto che scatti tu.
class MyWatchCard extends StatefulWidget {
  final Revision revision;
  final RevisionStore store;
  final ServiceStep step;
  final List<ServiceStep> steps;
  final int index;
  final bool automatic;
  final bool date;

  const MyWatchCard({
    super.key,
    required this.revision,
    required this.store,
    required this.step,
    required this.steps,
    required this.index,
    required this.automatic,
    required this.date,
  });

  @override
  State<MyWatchCard> createState() => _MyWatchCardState();
}

class _MyWatchCardState extends State<MyWatchCard> {
  bool _busy = false;
  String? _msg;

  Revision get r => widget.revision;
  ServiceStep get step => widget.step;
  bool get _isReassembly => reassemblyOf.containsKey(step.id);

  List<SceneAction> get _generic {
    final p = presentWithScrewsBefore(widget.steps, widget.index, automatic: widget.automatic, date: widget.date);
    return actionsFor(step, p, automatic: widget.automatic, date: widget.date);
  }

  int get _typicalScrews => _generic.where((a) => a.type == ActionType.unscrew).length;

  String get _removing {
    final names = <String>[];
    for (final a in _generic.where((a) => a.type == ActionType.lift)) {
      for (final id in a.ids) {
        final it = sceneItem(id);
        final n = it == null ? null : partById(it.partId)?.name;
        if (n != null && !names.contains(n)) names.add(n);
      }
    }
    return names.isEmpty ? step.title : names.join(', ');
  }

  Future<void> _shoot(ImageSource src) async {
    final x = await ImagePicker().pickImage(source: src, maxWidth: 2000, imageQuality: 88);
    if (x == null) return;
    setState(() {
      _busy = true;
      _msg = 'Cerco le viti sulla tua foto…';
    });
    try {
      final path = await widget.store.keepPhoto(x.path, r.id, '${step.id}_mappa');
      var (found, aspect) = await detectOnPhoto(path);
      var source = 'offline';
      String? tip;
      String? note;
      final ai = await AiSettings.load();
      if (ai.enabled) {
        if (mounted) setState(() => _msg = 'Chiedo all\'AI di controllare…');
        try {
          final res = await Gemini(ai).findScrews(path, stepTitle: step.title, removing: _removing);
          if (res.screws.isNotEmpty) {
            found = res.screws;
            source = 'AI';
          }
          tip = res.tip;
        } on AiException catch (e) {
          note = e.message;
        }
      }
      final old = r.marks[step.id];
      r.marks[step.id] = PhotoMarks(
        path,
        [for (final f in found) Mark(f.x, f.y, f.r)],
        compartment: old?.compartment ?? (found.isEmpty ? null : r.nextCompartment()),
        source: source,
        tip: tip,
        aspect: aspect,
      );
      r.photos.putIfAbsent(step.id, () => []).add(path);
      await widget.store.save();
      _msg = note;
    } catch (e) {
      _msg = 'Non sono riuscito ad analizzare la foto: $e';
    }
    if (mounted) setState(() => _busy = false);
  }

  Future<void> _openEditor(PhotoMarks pm, {bool reassembly = false}) async {
    await Navigator.push(context, MaterialPageRoute(builder: (_) => MarksEditorPage(pm: pm, reassembly: reassembly)));
    if (pm.marks.isNotEmpty && pm.compartment == null) pm.compartment = r.nextCompartment();
    await widget.store.save();
    if (mounted) setState(() {});
  }

  @override
  Widget build(BuildContext context) {
    if (_isReassembly) return _reassembly(context);
    final pm = r.marks[step.id];
    final typical = _typicalScrews;
    return Card(
      child: Padding(
        padding: const EdgeInsets.all(14),
        child: Column(crossAxisAlignment: CrossAxisAlignment.stretch, children: [
          Row(children: [
            const Icon(Icons.photo_camera_outlined, color: Brand.blu),
            const SizedBox(width: 8),
            Expanded(child: Text('Sul tuo orologio', style: Brand.sora(16, 800, color: Brand.inchiostro))),
            if (pm != null)
              IconButton(tooltip: 'Rifai la foto', onPressed: _busy ? null : () => _shoot(ImageSource.camera), icon: const Icon(Icons.refresh)),
          ]),
          const SizedBox(height: 6),
          if (pm == null) ...[
            Text(
              'Fotografa il movimento come lo vedi adesso, dall\'alto, ben illuminato e a fuoco. '
              '${typical > 0 ? 'Segno io le viti da togliere (di solito in questo passo sono $typical).' : 'La foto ti servirà al rimontaggio.'}',
              style: const TextStyle(fontSize: 15, height: 1.4),
            ),
            const SizedBox(height: 10),
            if (_busy)
              _progress()
            else
              Row(children: [
                Expanded(
                  child: FilledButton.icon(
                    onPressed: () => _shoot(ImageSource.camera),
                    icon: const Icon(Icons.photo_camera),
                    label: const Text('Scatta'),
                  ),
                ),
                const SizedBox(width: 8),
                OutlinedButton.icon(
                  onPressed: () => _shoot(ImageSource.gallery),
                  icon: const Icon(Icons.photo_library_outlined),
                  label: const Text('Galleria'),
                ),
              ]),
          ] else ...[
            if (_busy) _progress(),
            ClipRRect(
              borderRadius: BorderRadius.circular(12),
              child: MarkedPhoto(
                pm: pm,
                onTapMark: (i) async {
                  setState(() => pm.marks[i].out = !pm.marks[i].out);
                  await widget.store.save();
                },
                onLongPressMark: (i) async {
                  setState(() => pm.marks[i].leftHand = !pm.marks[i].leftHand);
                  await widget.store.save();
                },
              ),
            ),
            const SizedBox(height: 10),
            _summary(pm, typical),
            if (pm.tip != null) ...[
              const SizedBox(height: 8),
              InfoBox(icon: Icons.auto_awesome, title: 'Consiglio dell\'AI', text: pm.tip!, color: Brand.blu),
            ],
            const SizedBox(height: 8),
            Row(children: [
              Expanded(
                child: OutlinedButton.icon(
                  onPressed: () => _openEditor(pm),
                  icon: const Icon(Icons.edit_location_alt_outlined),
                  label: const Text('Correggi viti'),
                ),
              ),
            ]),
          ],
          if (_msg != null && !_busy) ...[
            const SizedBox(height: 8),
            Text(_msg!, style: TextStyle(fontSize: 13, color: Colors.red.shade700)),
          ],
        ]),
      ),
    );
  }

  Widget _progress() => Padding(
        padding: const EdgeInsets.symmetric(vertical: 8),
        child: Row(children: [
          const SizedBox(width: 20, height: 20, child: CircularProgressIndicator(strokeWidth: 2.5)),
          const SizedBox(width: 10),
          Expanded(child: Text(_msg ?? '…')),
        ]),
      );

  Widget _summary(PhotoMarks pm, int typical) {
    final n = pm.marks.length;
    final out = pm.marks.where((m) => m.out).length;
    final lh = pm.marks.where((m) => m.leftHand).length;
    final comp = pm.compartment;
    String text;
    if (n == 0) {
      text = 'Non ho trovato viti sicure in questa foto. Tocca "Correggi viti" e segnale tu con un tocco'
          '${typical > 0 ? ' (di solito qui sono $typical)' : ''}.';
    } else {
      text = 'Ho segnato $n vit${n == 1 ? 'e' : 'i'} (${pm.source}). '
          'Svitale in ordine dal numero 1, toccandole sulla foto man mano: diventano verdi. '
          '${comp != null ? 'Mettile tutte nello scomparto $comp del contenitore. ' : ''}'
          '${typical > 0 && typical != n ? 'Di solito in questo passo sono $typical: controlla se ne manca o ne avanza qualcuna. ' : ''}'
          '${lh > 0 ? 'Attento: $lh a filetto sinistro (segnata SX) si svita in senso orario.' : 'Tieni premuta una vite per segnarla a filetto sinistro.'}';
    }
    return Column(crossAxisAlignment: CrossAxisAlignment.stretch, children: [
      if (comp != null && n > 0)
        Row(children: [
          _compartmentBadge(comp),
          const SizedBox(width: 10),
          Expanded(
            child: LinearProgressIndicator(
              value: n == 0 ? 0 : out / n,
              minHeight: 8,
              borderRadius: BorderRadius.circular(4),
              color: Colors.green.shade600,
              backgroundColor: Brand.blu.withValues(alpha: 0.08),
            ),
          ),
          const SizedBox(width: 10),
          Text('$out/$n', style: Brand.sora(14, 700, color: Brand.inchiostro)),
        ]),
      const SizedBox(height: 8),
      Text(text, style: const TextStyle(fontSize: 14.5, height: 1.4)),
    ]);
  }

  Widget _reassembly(BuildContext context) {
    final sources = [for (final id in reassemblyOf[step.id]!.reversed) if (r.marks[id] != null) (id, r.marks[id]!)];
    return Card(
      child: Padding(
        padding: const EdgeInsets.all(14),
        child: Column(crossAxisAlignment: CrossAxisAlignment.stretch, children: [
          Row(children: [
            const Icon(Icons.history, color: Brand.blu),
            const SizedBox(width: 8),
            Expanded(child: Text('Come era il tuo orologio', style: Brand.sora(16, 800, color: Brand.inchiostro))),
          ]),
          const SizedBox(height: 6),
          if (sources.isEmpty)
            const Text(
              'Non hai foto con viti segnate dei passi di smontaggio corrispondenti. Segui il disegno qui sotto.',
              style: TextStyle(fontSize: 14.5, height: 1.4),
            )
          else ...[
            const Text(
              'Ecco le tue foto di quando hai smontato, in ordine inverso. Riprendi le viti dallo scomparto indicato '
              'e rimettile negli stessi punti; toccale sulla foto quando le hai riavvitate.',
              style: TextStyle(fontSize: 14.5, height: 1.4),
            ),
            for (final (id, pm) in sources) ...[
              const SizedBox(height: 12),
              Row(children: [
                if (pm.compartment != null) _compartmentBadge(pm.compartment!),
                const SizedBox(width: 8),
                Expanded(
                  child: Text(
                    '${universalSteps.firstWhere((s) => s.id == id).title} · ${pm.marks.length} vit${pm.marks.length == 1 ? 'e' : 'i'}'
                    ' (${pm.marks.where((m) => m.back).length} rimesse)',
                    style: Brand.sora(13.5, 700, color: Brand.inchiostro),
                  ),
                ),
                IconButton(onPressed: () => _openEditor(pm, reassembly: true), icon: const Icon(Icons.open_in_full)),
              ]),
              const SizedBox(height: 6),
              ClipRRect(
                borderRadius: BorderRadius.circular(12),
                child: MarkedPhoto(
                  pm: pm,
                  reassembly: true,
                  onTapMark: (i) async {
                    setState(() => pm.marks[i].back = !pm.marks[i].back);
                    await widget.store.save();
                  },
                ),
              ),
              if (pm.marks.any((m) => m.leftHand))
                Padding(
                  padding: const EdgeInsets.only(top: 6),
                  child: Text('Le viti SX sono a filetto sinistro: si avvitano in senso ANTIORARIO.',
                      style: TextStyle(fontSize: 13.5, color: Colors.red.shade700, fontWeight: FontWeight.w600)),
                ),
            ],
          ],
        ]),
      ),
    );
  }
}

Widget _compartmentBadge(String c) => Container(
      padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 4),
      decoration: BoxDecoration(color: Brand.blu, borderRadius: BorderRadius.circular(8)),
      child: Text('Scomparto $c', style: Brand.sora(12.5, 700, color: Brand.carta)),
    );
