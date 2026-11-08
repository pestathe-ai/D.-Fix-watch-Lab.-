import 'dart:io';

import 'package:flutter/material.dart';
import 'package:image_picker/image_picker.dart';
import 'package:shared_preferences/shared_preferences.dart';

import '../data/calibers.dart';
import '../data/components.dart';
import '../data/steps.dart';
import '../logic/beat_analyzer.dart';
import '../logic/revision.dart';
import '../logic/store.dart';
import 'glossary_page.dart';
import 'measure_page.dart';
import 'how_it_works_page.dart';
import 'scene3d.dart';
import 'scene_widgets.dart';
import 'step_timer.dart';
import 'theme.dart';

/// La guida passo passo di una revisione.
class GuidePage extends StatefulWidget {
  final RevisionStore store;
  final Revision revision;
  const GuidePage({super.key, required this.store, required this.revision});

  @override
  State<GuidePage> createState() => _GuidePageState();
}

class _GuidePageState extends State<GuidePage> {
  late final List<ServiceStep> _steps = widget.revision.steps;
  late int _i = widget.revision.currentIndex.clamp(0, _steps.length - 1);
  final _scroll = ScrollController();
  final _notes = TextEditingController();

  Revision get r => widget.revision;
  ServiceStep get s => _steps[_i];

  bool _use3d = true;
  bool _noGl = false;

  @override
  void initState() {
    super.initState();
    _notes.text = r.notes[s.id] ?? '';
    SharedPreferences.getInstance().then((p) {
      if (mounted) setState(() => _use3d = p.getBool('view3d') ?? true);
    });
  }

  Future<void> _toggle3d() async {
    setState(() => _use3d = !_use3d);
    final p = await SharedPreferences.getInstance();
    await p.setBool('view3d', _use3d);
  }

  @override
  void dispose() {
    _scroll.dispose();
    _notes.dispose();
    super.dispose();
  }

  Future<void> _go(int i) async {
    _saveNote();
    setState(() {
      _i = i.clamp(0, _steps.length - 1);
      r.currentIndex = _i;
      _notes.text = r.notes[s.id] ?? '';
    });
    await widget.store.save();
    if (_scroll.hasClients) _scroll.jumpTo(0);
  }

  void _saveNote() {
    final t = _notes.text.trim();
    if (t.isEmpty) {
      r.notes.remove(s.id);
    } else {
      r.notes[s.id] = t;
    }
  }

  Future<void> _done({bool skip = false}) async {
    if (skip) {
      r.skipped.add(s.id);
      r.done.remove(s.id);
    } else {
      r.done.add(s.id);
      r.skipped.remove(s.id);
    }
    if (_i < _steps.length - 1) {
      await _go(_i + 1);
    } else {
      _saveNote();
      await widget.store.save();
      if (!mounted) return;
      setState(() {});
      await showDialog<void>(
        context: context,
        builder: (_) => AlertDialog(
          title: const Text('Revisione completata!'),
          content: const Text('Bel lavoro. Ricorda la prova di 24-48 ore e annota il risultato.'),
          actions: [TextButton(onPressed: () => Navigator.pop(context), child: const Text('OK'))],
        ),
      );
    }
  }

  Future<void> _photo(ImageSource src) async {
    try {
      final x = await ImagePicker().pickImage(source: src, maxWidth: 2000, imageQuality: 85);
      if (x == null) return;
      final path = await widget.store.keepPhoto(x.path, r.id, s.id);
      setState(() => r.photos.putIfAbsent(s.id, () => []).add(path));
      await widget.store.save();
    } catch (e) {
      if (!mounted) return;
      ScaffoldMessenger.of(context).showSnackBar(SnackBar(content: Text('Foto non riuscita: $e')));
    }
  }

  Future<void> _measure() async {
    final res = await Navigator.push<BeatResult>(
      context,
      MaterialPageRoute(builder: (_) => const MeasurePage(allowSave: true)),
    );
    if (res == null) return;
    setState(() => r.measurements.add(Measurement(
          at: DateTime.now(),
          bph: res.bph,
          rate: res.rateSecPerDay,
          beatError: res.beatErrorMs,
          quality: res.quality,
          label: s.title,
        )));
    await widget.store.save();
  }

  void _openSteps() {
    showModalBottomSheet<void>(
      context: context,
      isScrollControlled: true,
      showDragHandle: true,
      builder: (ctx) => DraggableScrollableSheet(
        expand: false,
        initialChildSize: 0.75,
        builder: (ctx, sc) => ListView.builder(
          controller: sc,
          itemCount: _steps.length,
          itemBuilder: (ctx, k) {
            final st = _steps[k];
            final isDone = r.done.contains(st.id);
            final isSkip = r.skipped.contains(st.id);
            final newPhase = k == 0 || _steps[k - 1].phase != st.phase;
            return Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                if (newPhase)
                  Padding(
                    padding: const EdgeInsets.fromLTRB(20, 14, 20, 4),
                    child: Text(st.phase.toUpperCase(),
                        style: Brand.sora(12, 700, color: Brand.blu).copyWith(letterSpacing: 1.1)),
                  ),
                ListTile(
                  selected: k == _i,
                  leading: Icon(
                    isDone ? Icons.check_circle : (isSkip ? Icons.remove_circle_outline : Icons.circle_outlined),
                    color: isDone ? Colors.green.shade700 : Brand.inchiostro.withValues(alpha: 0.4),
                  ),
                  title: Text('${k + 1}. ${st.title}'),
                  onTap: () {
                    Navigator.pop(ctx);
                    _go(k);
                  },
                ),
              ],
            );
          },
        ),
      ),
    );
  }

  void _showCaliberNotes() {
    final c = r.caliber;
    showModalBottomSheet<void>(
      context: context,
      showDragHandle: true,
      builder: (_) => Padding(
        padding: const EdgeInsets.fromLTRB(20, 0, 20, 28),
        child: Column(
          mainAxisSize: MainAxisSize.min,
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text(c.name, style: Brand.sora(18, 800, color: Brand.inchiostro)),
            const SizedBox(height: 4),
            Text(c.summary),
            const SizedBox(height: 12),
            for (final n in c.notes)
              Padding(
                padding: const EdgeInsets.only(bottom: 8),
                child: Row(crossAxisAlignment: CrossAxisAlignment.start, children: [
                  const Text('•  ', style: TextStyle(fontSize: 16)),
                  Expanded(child: Text(n, style: const TextStyle(fontSize: 15, height: 1.4))),
                ]),
              ),
            const SizedBox(height: 6),
            Text(
              'Queste indicazioni sono una guida generale: in caso di dubbio vale sempre la documentazione tecnica del produttore.',
              style: TextStyle(fontSize: 13, color: Brand.inchiostro.withValues(alpha: 0.6)),
            ),
          ],
        ),
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    final step = s;
    final isDone = r.done.contains(step.id);
    final photos = r.photos[step.id] ?? const <String>[];
    final stepParts = step.partIds.map(partById).whereType<WatchPart>().toList();

    return Scaffold(
      appBar: AppBar(
        title: Text(r.watchName, overflow: TextOverflow.ellipsis),
        actions: [
          if (!_noGl)
            TextButton(
              onPressed: _toggle3d,
              child: Text(_use3d ? '2D' : '3D', style: Brand.sora(14, 800, color: Brand.blu)),
            ),
          IconButton(tooltip: 'Note sul calibro', onPressed: _showCaliberNotes, icon: const Icon(Icons.info_outline)),
          IconButton(tooltip: 'Tutti i passi', onPressed: _openSteps, icon: const Icon(Icons.format_list_numbered)),
        ],
        bottom: PreferredSize(
          preferredSize: const Size.fromHeight(4),
          child: LinearProgressIndicator(
            value: r.progress,
            color: Brand.arancio,
            backgroundColor: Brand.blu.withValues(alpha: 0.08),
          ),
        ),
      ),
      body: ListView(
        controller: _scroll,
        padding: const EdgeInsets.fromLTRB(16, 14, 16, 24),
        children: [
          Text('PASSO ${_i + 1} DI ${_steps.length} · ${step.phase.toUpperCase()}',
              style: Brand.sora(12, 700, color: Brand.blu).copyWith(letterSpacing: 1.0)),
          const SizedBox(height: 6),
          Text(step.title, style: Brand.sora(24, 800, color: Brand.inchiostro)),
          if (step.optionalLabel != null) ...[
            const SizedBox(height: 6),
            Text(step.optionalLabel!,
                style: TextStyle(fontSize: 14, fontStyle: FontStyle.italic, color: Brand.inchiostro.withValues(alpha: 0.65))),
          ],
          if (_i == 0 && r.caliber.notes.isNotEmpty) ...[
            const SizedBox(height: 12),
            InkWell(
              onTap: _showCaliberNotes,
              borderRadius: BorderRadius.circular(14),
              child: InfoBox(
                icon: Icons.memory,
                title: r.caliber.name,
                text: '${r.caliber.summary}\nTocca per le note su questo calibro.',
                color: Brand.blu,
              ),
            ),
          ],
          const SizedBox(height: 14),
          if (_use3d && !_noGl)
            StepScene3D(
              steps: _steps,
              index: _i,
              automatic: r.caliber.type == WindType.automatic,
              date: r.hasDate,
              onNoGl: () {
                if (mounted) setState(() => _noGl = true);
              },
            )
          else
            StepScene(
              steps: _steps,
              index: _i,
              automatic: r.caliber.type == WindType.automatic,
              date: r.hasDate,
            ),
          const SizedBox(height: 12),
          Card(
            child: Padding(
              padding: const EdgeInsets.all(14),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text('Cosa fare', style: Brand.sora(15, 700, color: Brand.inchiostro)),
                  const SizedBox(height: 8),
                  for (var k = 0; k < step.todo.length; k++)
                    Padding(
                      padding: const EdgeInsets.only(bottom: 10),
                      child: Row(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Container(
                            width: 24,
                            height: 24,
                            alignment: Alignment.center,
                            decoration: const BoxDecoration(color: Brand.blu, shape: BoxShape.circle),
                            child: Text('${k + 1}', style: Brand.sora(12, 700, color: Brand.carta)),
                          ),
                          const SizedBox(width: 10),
                          Expanded(child: Text(step.todo[k], style: const TextStyle(fontSize: 16, height: 1.4))),
                        ],
                      ),
                    ),
                ],
              ),
            ),
          ),
          const SizedBox(height: 12),
          InfoBox(icon: Icons.lightbulb_outline, title: 'Perché', text: step.why, color: Brand.blu),
          if (_howTab(step.id) != null) ...[
            const SizedBox(height: 8),
            OutlinedButton.icon(
              onPressed: () => openHowItWorks(context, tab: _howTab(step.id)!.$1),
              icon: const Icon(Icons.play_circle_outline),
              label: Text('Guarda l\'animazione: ${_howTab(step.id)!.$2}'),
            ),
          ],
          if (step.warning != null) ...[
            const SizedBox(height: 10),
            InfoBox(icon: Icons.warning_amber_rounded, title: 'Attenzione', text: step.warning!, color: Colors.red.shade700),
          ],
          if (step.lube != null) ...[
            const SizedBox(height: 10),
            InfoBox(icon: Icons.water_drop_outlined, title: 'Lubrificazione', text: step.lube!, color: Brand.arancio),
          ],
          if (step.timerSeconds != null) ...[
            const SizedBox(height: 12),
            StepTimer(key: ValueKey(step.id), seconds: step.timerSeconds!),
          ],
          if (stepParts.isNotEmpty) ...[
            const SizedBox(height: 22),
            Text('I pezzi che stai toccando', style: Brand.sora(17, 800, color: Brand.inchiostro)),
            const SizedBox(height: 4),
            Text('Tocca un pezzo per sapere come funziona.',
                style: TextStyle(fontSize: 13.5, color: Brand.inchiostro.withValues(alpha: 0.6))),
            const SizedBox(height: 10),
            for (final p in stepParts) ...[
              PartCard(key: ValueKey('${step.id}-${p.id}'), part: p),
              const SizedBox(height: 8),
            ],
          ],
          const SizedBox(height: 18),
          Row(
            children: [
              Expanded(
                child: Text(step.photo ? 'Foto (consigliata)' : 'Foto',
                    style: Brand.sora(15, 700, color: Brand.inchiostro)),
              ),
              IconButton(
                tooltip: 'Dalla galleria',
                onPressed: () => _photo(ImageSource.gallery),
                icon: const Icon(Icons.photo_library_outlined),
              ),
              IconButton.filledTonal(
                tooltip: 'Scatta',
                onPressed: () => _photo(ImageSource.camera),
                icon: const Icon(Icons.photo_camera),
              ),
            ],
          ),
          if (photos.isNotEmpty)
            SizedBox(
              height: 96,
              child: ListView.separated(
                scrollDirection: Axis.horizontal,
                itemCount: photos.length,
                separatorBuilder: (_, __) => const SizedBox(width: 8),
                itemBuilder: (ctx, k) => GestureDetector(
                  onTap: () => _viewPhoto(photos[k]),
                  onLongPress: () => _deletePhoto(photos[k]),
                  child: ClipRRect(
                    borderRadius: BorderRadius.circular(12),
                    child: Image.file(File(photos[k]), width: 96, height: 96, fit: BoxFit.cover,
                        errorBuilder: (_, __, ___) => Container(width: 96, color: Colors.black12)),
                  ),
                ),
              ),
            ),
          if (step.id == 'valutazione' || step.id == 'regola') ...[
            const SizedBox(height: 12),
            OutlinedButton.icon(
              onPressed: _measure,
              icon: const Icon(Icons.graphic_eq),
              label: const Text('Misura e salva'),
            ),
            for (final m in r.measurements.where((m) => m.label == step.title))
              Padding(
                padding: const EdgeInsets.only(top: 6),
                child: Text(
                  '${m.at.day}/${m.at.month} ${m.at.hour}:${m.at.minute.toString().padLeft(2, '0')} · '
                  '${m.rate >= 0 ? '+' : ''}${m.rate.toStringAsFixed(0)} s/g · '
                  'battuta ${m.beatError.toStringAsFixed(1)} ms',
                  style: const TextStyle(fontSize: 14),
                ),
              ),
          ],
          const SizedBox(height: 14),
          TextField(
            controller: _notes,
            minLines: 2,
            maxLines: 5,
            onChanged: (_) => _saveNote(),
            onEditingComplete: () => widget.store.save(),
            decoration: InputDecoration(
              labelText: 'Le tue note su questo passo',
              filled: true,
              fillColor: Colors.white,
              border: OutlineInputBorder(borderRadius: BorderRadius.circular(14), borderSide: BorderSide.none),
            ),
          ),
        ],
      ),
      bottomNavigationBar: SafeArea(
        child: Padding(
          padding: const EdgeInsets.fromLTRB(12, 8, 12, 10),
          child: Row(
            children: [
              IconButton.outlined(
                tooltip: 'Indietro',
                onPressed: _i == 0 ? null : () => _go(_i - 1),
                icon: const Icon(Icons.arrow_back),
              ),
              const SizedBox(width: 8),
              if (step.optional)
                Padding(
                  padding: const EdgeInsets.only(right: 8),
                  child: TextButton(onPressed: () => _done(skip: true), child: const Text('Salta')),
                ),
              Expanded(
                child: FilledButton.icon(
                  onPressed: () => _done(),
                  icon: Icon(isDone ? Icons.check_circle : Icons.check),
                  label: Text(_i == _steps.length - 1 ? 'Fatto, ho finito' : 'Fatto, avanti'),
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }

  void _viewPhoto(String path) {
    showDialog<void>(
      context: context,
      builder: (_) => Dialog(
        insetPadding: const EdgeInsets.all(10),
        child: InteractiveViewer(child: Image.file(File(path))),
      ),
    );
  }

  Future<void> _deletePhoto(String path) async {
    final ok = await showDialog<bool>(
      context: context,
      builder: (ctx) => AlertDialog(
        title: const Text('Eliminare la foto?'),
        actions: [
          TextButton(onPressed: () => Navigator.pop(ctx, false), child: const Text('No')),
          TextButton(onPressed: () => Navigator.pop(ctx, true), child: const Text('Elimina')),
        ],
      ),
    );
    if (ok != true) return;
    setState(() => r.photos[s.id]?.remove(path));
    try {
      await File(path).delete();
    } catch (_) {}
    await widget.store.save();
  }
}

(int, String)? _howTab(String stepId) {
  switch (stepId) {
    case 'bilanciere':
    case 'ancora':
    case 'ancora_in':
    case 'bilanciere_in':
    case 'regola':
      return (0, 'lo scappamento');
    case 'treno_out':
    case 'treno_in':
    case 'scarica':
      return (1, 'il percorso dell\'energia');
    case 'stelo':
    case 'remontoir_out':
    case 'remontoir_in':
      return (2, 'la corona e il remontoir');
    case 'bariletto_apri':
    case 'bariletto_in':
      return (3, 'la briglia');
  }
  return null;
}
