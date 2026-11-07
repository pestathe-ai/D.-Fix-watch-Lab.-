import 'package:flutter/material.dart';

import '../art/movement_view.dart';
import '../art/part_art.dart';
import '../art/scene.dart';
import '../art/scene_steps.dart';
import '../data/components.dart';
import '../data/steps.dart';
import 'glossary_page.dart';
import 'theme.dart';

/// Scheda di un pezzo toccato nel disegno.
void showPartSheet(BuildContext context, String partId) {
  final p = partById(partId);
  if (p == null) return;
  showModalBottomSheet<void>(
    context: context,
    isScrollControlled: true,
    showDragHandle: true,
    builder: (_) => DraggableScrollableSheet(
      expand: false,
      initialChildSize: 0.62,
      maxChildSize: 0.92,
      builder: (ctx, sc) => ListView(
        controller: sc,
        padding: const EdgeInsets.fromLTRB(16, 0, 16, 28),
        children: [
          PartCard(part: p, initiallyExpanded: true),
        ],
      ),
    ),
  );
}

String sideLabel(Side s) => s == Side.ponti ? 'Lato ponti (dal fondello)' : 'Lato quadrante';

/// Disegno del passo: mostra lo stato del movimento, anima i pezzi tolti o rimessi.
class StepScene extends StatefulWidget {
  final List<ServiceStep> steps;
  final int index;
  final bool automatic;
  final bool date;

  const StepScene({
    super.key,
    required this.steps,
    required this.index,
    required this.automatic,
    required this.date,
  });

  @override
  State<StepScene> createState() => _StepSceneState();
}

class _StepSceneState extends State<StepScene> with TickerProviderStateMixin {
  late final AnimationController _move =
      AnimationController(vsync: this, duration: const Duration(milliseconds: 1600));
  late final AnimationController _pulse =
      AnimationController(vsync: this, duration: const Duration(milliseconds: 1200))..repeat();
  String? _selected;

  @override
  void initState() {
    super.initState();
    _autoPlay();
  }

  @override
  void didUpdateWidget(covariant StepScene old) {
    super.didUpdateWidget(old);
    if (old.index != widget.index) {
      _move.value = 0;
      _selected = null;
      _autoPlay();
    }
  }

  void _autoPlay() {
    Future<void>.delayed(const Duration(milliseconds: 700), () {
      if (mounted && _move.value == 0) _move.forward();
    });
  }

  @override
  void dispose() {
    _move.dispose();
    _pulse.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    final step = widget.steps[widget.index];
    final op = sceneOps[step.id];
    if (op == null) return _artFallback(step);

    final present = presentBefore(widget.steps, widget.index, automatic: widget.automatic, date: widget.date);
    bool allowed(String id) {
      final it = sceneItem(id);
      if (it == null) return false;
      if (!widget.automatic && it.autoOnly) return false;
      if (!widget.date && it.dateOnly) return false;
      return true;
    }

    final removing = op.remove.where((id) => present.contains(id) && allowed(id)).toSet();
    final adding = op.add.where((id) => !present.contains(id) && allowed(id)).toSet();
    final movingOut = removing.isNotEmpty;
    final moving = movingOut ? removing : adding;
    final basePresent = {...present}..removeAll(moving);
    // pezzi che si muovono, ma solo quelli del lato mostrato
    final sideMoving = moving.where((id) => sceneItem(id)!.side == op.side).toSet();

    return Card(
      clipBehavior: Clip.antiAlias,
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.stretch,
        children: [
          Padding(
            padding: const EdgeInsets.fromLTRB(14, 10, 6, 0),
            child: Row(
              children: [
                Icon(op.side == Side.ponti ? Icons.flip_to_back : Icons.watch_outlined, size: 18, color: Brand.blu),
                const SizedBox(width: 6),
                Expanded(
                  child: Text(sideLabel(op.side),
                      overflow: TextOverflow.ellipsis, style: Brand.sora(13, 700, color: Brand.blu)),
                ),
                if (sideMoving.isNotEmpty)
                  IconButton(
                    tooltip: 'Rivedi',
                    onPressed: () => _move.forward(from: 0),
                    icon: const Icon(Icons.replay),
                  ),
                IconButton(
                  tooltip: 'Ingrandisci',
                  onPressed: () => _openZoom(context, op, basePresent, sideMoving, movingOut, step),
                  icon: const Icon(Icons.zoom_out_map),
                ),
              ],
            ),
          ),
          AnimatedBuilder(
            animation: Listenable.merge([_move, _pulse]),
            builder: (ctx, _) => Padding(
              padding: const EdgeInsets.symmetric(horizontal: 8),
              child: MovementCanvas(
                painter: MovementPainter(
                  side: op.side,
                  present: basePresent,
                  moving: sideMoving,
                  moveT: _move.value,
                  movingOut: movingOut,
                  highlight: op.highlight.toSet(),
                  markers: op.markers,
                  pulse: _pulse.value,
                  selected: _selected,
                ),
                onTapItem: (it) {
                  setState(() => _selected = it.id);
                  showPartSheet(context, it.partId);
                },
              ),
            ),
          ),
          Padding(
            padding: const EdgeInsets.fromLTRB(14, 4, 14, 12),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                for (var i = 0; i < op.markers.length; i++)
                  Padding(
                    padding: const EdgeInsets.only(bottom: 6),
                    child: Row(crossAxisAlignment: CrossAxisAlignment.start, children: [
                      CircleAvatar(
                        radius: 10,
                        backgroundColor: Brand.arancio,
                        child: Text('${i + 1}', style: const TextStyle(fontSize: 11, color: Colors.white, fontWeight: FontWeight.w800)),
                      ),
                      const SizedBox(width: 8),
                      Expanded(child: Text(op.markers[i].label, style: const TextStyle(fontSize: 14, height: 1.3))),
                    ]),
                  ),
                Text(
                  sideMoving.isEmpty
                      ? 'Tocca un pezzo del disegno per sapere cos\'è.'
                      : (movingOut
                          ? 'In arancio i pezzi che togli in questo passo. Tocca un pezzo per sapere cos\'è.'
                          : 'In arancio i pezzi che rimetti in questo passo. Tocca un pezzo per sapere cos\'è.'),
                  style: TextStyle(fontSize: 13, color: Brand.inchiostro.withValues(alpha: 0.6)),
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }

  /// Passi senza scena (pulizia, bariletto...): disegni dei pezzi coinvolti.
  Widget _artFallback(ServiceStep step) {
    final ids = step.partIds.where((id) => artSpecFor(id) != null).toList();
    if (ids.isEmpty) return const SizedBox.shrink();
    return SizedBox(
      height: 230,
      child: ListView.separated(
        scrollDirection: Axis.horizontal,
        itemCount: ids.length,
        separatorBuilder: (_, __) => const SizedBox(width: 10),
        itemBuilder: (ctx, i) {
          final p = partById(ids[i]);
          return SizedBox(
            width: ids.length == 1 ? MediaQuery.of(ctx).size.width - 32 : 280,
            child: Card(
              child: InkWell(
                borderRadius: BorderRadius.circular(16),
                onTap: () => showPartSheet(ctx, ids[i]),
                child: Padding(
                  padding: const EdgeInsets.all(10),
                  child: Column(children: [
                    Expanded(child: PartArt(partId: ids[i], height: 180)),
                    const SizedBox(height: 4),
                    Text(p?.name ?? '', style: Brand.sora(14, 700, color: Brand.inchiostro)),
                  ]),
                ),
              ),
            ),
          );
        },
      ),
    );
  }

  void _openZoom(BuildContext context, SceneOp op, Set<String> present, Set<String> moving, bool out, ServiceStep step) {
    // a schermo intero mostra lo stato dopo il passo
    final after = {...present};
    if (!out) after.addAll(moving);
    Navigator.push(
      context,
      MaterialPageRoute(
        builder: (_) => _ZoomPage(title: step.title, side: op.side, present: after, highlight: {...op.highlight, ...moving}),
      ),
    );
  }
}

class _ZoomPage extends StatelessWidget {
  final String title;
  final Side side;
  final Set<String> present;
  final Set<String> highlight;
  const _ZoomPage({required this.title, required this.side, required this.present, required this.highlight});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text(title, overflow: TextOverflow.ellipsis)),
      body: Column(children: [
        Expanded(
          child: InteractiveViewer(
            maxScale: 6,
            child: Center(
              child: Padding(
                padding: const EdgeInsets.all(8),
                child: MovementCanvas(
                  painter: MovementPainter(side: side, present: present, highlight: highlight),
                  onTapItem: (it) => showPartSheet(context, it.partId),
                ),
              ),
            ),
          ),
        ),
        Padding(
          padding: const EdgeInsets.all(16),
          child: Text('Pizzica per ingrandire, tocca un pezzo per la sua scheda.',
              style: TextStyle(color: Brand.inchiostro.withValues(alpha: 0.6))),
        ),
      ]),
    );
  }
}

/// Pagina "Esplora il movimento": smonta a piacere, raggi X, tocca i pezzi.
class ExplorePage extends StatefulWidget {
  const ExplorePage({super.key});

  @override
  State<ExplorePage> createState() => _ExplorePageState();
}

class _ExplorePageState extends State<ExplorePage> {
  Side _side = Side.ponti;
  bool _auto = true;
  bool _date = true;
  bool _xray = false;
  double _k = 0;
  String? _selected;

  List<String> _order() {
    final out = <String>[];
    for (final s in universalSteps) {
      final op = sceneOps[s.id];
      if (op == null) continue;
      for (final id in op.remove) {
        final it = sceneItem(id);
        if (it == null || it.side != _side) continue;
        if (!_auto && it.autoOnly) continue;
        if (!_date && it.dateOnly) continue;
        if (!out.contains(id)) out.add(id);
      }
    }
    return out;
  }

  @override
  Widget build(BuildContext context) {
    final order = _order();
    final k = _k.round().clamp(0, order.length);
    final present = <String>{
      for (final it in sceneItems)
        if (it.side == _side && (_auto || !it.autoOnly) && (_date || !it.dateOnly)) it.id,
    }..removeAll(order.take(k));
    final last = k == 0 ? null : sceneItem(order[k - 1]);
    final lastName = last == null ? null : partById(last.partId)?.name;

    return Scaffold(
      appBar: AppBar(title: const Text('Esplora il movimento')),
      body: ListView(
        padding: const EdgeInsets.fromLTRB(12, 4, 12, 28),
        children: [
          SegmentedButton<Side>(
            segments: const [
              ButtonSegment(value: Side.ponti, label: Text('Lato ponti'), icon: Icon(Icons.flip_to_back)),
              ButtonSegment(value: Side.quadrante, label: Text('Lato quadrante'), icon: Icon(Icons.watch_outlined)),
            ],
            selected: {_side},
            onSelectionChanged: (s) => setState(() {
              _side = s.first;
              _k = 0;
              _selected = null;
            }),
          ),
          const SizedBox(height: 8),
          Wrap(spacing: 8, runSpacing: 4, children: [
            FilterChip(label: const Text('Automatico'), selected: _auto, onSelected: (v) => setState(() { _auto = v; _k = 0; })),
            FilterChip(label: const Text('Con data'), selected: _date, onSelected: (v) => setState(() { _date = v; _k = 0; })),
            FilterChip(
              avatar: const Icon(Icons.layers_outlined, size: 18),
              label: const Text('Raggi X'),
              selected: _xray,
              onSelected: (v) => setState(() => _xray = v),
            ),
          ]),
          const SizedBox(height: 6),
          InteractiveViewer(
            maxScale: 5,
            panEnabled: false,
            child: MovementCanvas(
              painter: MovementPainter(side: _side, present: present, xray: _xray, selected: _selected),
              onTapItem: (it) {
                setState(() => _selected = it.id);
                showPartSheet(context, it.partId);
              },
            ),
          ),
          const SizedBox(height: 8),
          Text('Smonta', style: Brand.sora(15, 700, color: Brand.inchiostro)),
          Slider(
            value: k.toDouble(),
            min: 0,
            max: order.length.toDouble(),
            divisions: order.isEmpty ? null : order.length,
            label: '$k',
            onChanged: (v) => setState(() {
              _k = v;
              _selected = null;
            }),
          ),
          Text(
            k == 0 ? 'Movimento completo. Trascina per togliere i pezzi nell\'ordine giusto.' : 'Ultimo tolto: $lastName ($k di ${order.length})',
            style: TextStyle(fontSize: 14, color: Brand.inchiostro.withValues(alpha: 0.75)),
          ),
          const SizedBox(height: 12),
          InfoBox(
            icon: Icons.touch_app_outlined,
            title: 'Come si usa',
            text: 'Tocca un pezzo per la sua scheda. "Raggi X" rende trasparenti ponti e coperture per vedere '
                'le ruote sotto. Pizzica per ingrandire. Il disegno è uno schema generico: il tuo calibro può avere i pezzi in posizioni diverse.',
            color: Brand.blu,
          ),
        ],
      ),
    );
  }
}
