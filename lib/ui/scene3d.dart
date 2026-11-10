import 'dart:convert';

import 'package:flutter/foundation.dart';
import 'package:flutter/gestures.dart';
import 'package:flutter/material.dart';
import 'package:webview_flutter/webview_flutter.dart';

import '../art/actions.dart';
import '../art/scene.dart';
import '../art/scene_steps.dart';
import '../data/steps.dart';
import 'scene_widgets.dart';
import 'theme.dart';

/// Ponte tra Flutter e il movimento 3D (three.js dentro una WebView).
class Scene3DController {
  Scene3DController({this.onTap, this.onDone, this.onNoGl, this.onReady});

  void Function(String partId)? onTap;
  void Function(int seq)? onDone;
  VoidCallback? onNoGl;
  VoidCallback? onReady;
  void Function(String phase)? onPhase;
  void Function(double charge, double flash)? onBridle;
  String? _lastDemo;

  bool ready = false;
  String? _lastShow;
  String? _layout;

  /// Famiglia del movimento: per ora secondi piccoli o centrali.
  void layout({required bool smallSeconds}) {
    _layout = 'W3D.layout(${jsonEncode({'smallSeconds': smallSeconds})})';
    if (ready) _js(_layout!);
  }
  late final WebViewController web = WebViewController()
    ..setJavaScriptMode(JavaScriptMode.unrestricted)
    ..setBackgroundColor(const Color(0xFFDFE3EA))
    ..addJavaScriptChannel('Bridge', onMessageReceived: (m) => _onMsg(m.message))
    ..loadFlutterAsset('assets/web3d/index.html');

  void _onMsg(String raw) {
    Map<String, dynamic> m;
    try {
      m = Map<String, dynamic>.from(jsonDecode(raw) as Map);
    } catch (_) {
      return;
    }
    switch (m['type']) {
      case 'ready':
        ready = true;
        _js('W3D.setup(${jsonEncode({
          'screws': screwDefs.map((s) => s.toJson()).toList(),
          'profile': activeProfile?.toJson(),
        })})');
        if (_layout != null) _js(_layout!);
        if (_lastShow != null) _js(_lastShow!);
        if (_lastDemo != null) _js(_lastDemo!);
        onReady?.call();
      case 'tap':
        final p = m['part'] as String?;
        if (p != null) onTap?.call(p);
      case 'done':
      case 'aborted':
        onDone?.call((m['seq'] as num?)?.toInt() ?? -1);
      case 'phase':
        onPhase?.call(m['phase'] as String? ?? '');
      case 'bridle':
        onBridle?.call((m['charge'] as num?)?.toDouble() ?? 0, (m['flash'] as num?)?.toDouble() ?? 0);
      case 'nogl':
        onNoGl?.call();
      case 'error':
        debugPrint('3D: ${m['msg']}');
    }
  }

  void show(Map<String, dynamic> state) {
    final c = 'W3D.show(${jsonEncode(state)})';
    _lastShow = 'W3D.show(${jsonEncode({...state, 'animate': false})})';
    if (ready) _js(c);
  }

  void play(SceneAction a, int seq) {
    if (!ready) {
      onDone?.call(seq);
      return;
    }
    _js('W3D.play(${jsonEncode(a.toJson())}, $seq)');
  }

  void view(String name) => _js("W3D.view('$name')");

  /// Animazioni di "Come funziona". [start] = avvia una nuova animazione; altrimenti aggiorna i comandi.
  void demo(Map<String, dynamic>? cfg, {bool start = false}) {
    final c = 'W3D.demo(${jsonEncode(cfg)})';
    if (start || cfg == null) _lastDemo = cfg == null ? null : c;
    if (ready) _js(c);
  }

  void live(Map<String, dynamic> o) {
    if (ready) _js('W3D.live(${jsonEncode(o)})');
  }

  void setQuality(bool high) {
    ready = false;
    _js("W3D.setQuality('${high ? 'high' : 'normal'}')");
  }

  Future<bool> isHighQuality() async {
    try {
      final r = await web.runJavaScriptReturningResult('W3D.quality()');
      return r.toString().contains('high');
    } catch (_) {
      return true;
    }
  }
  void focus(List<String> ids) => _js('W3D.focus(${jsonEncode(ids)})');

  void _js(String code) {
    web.runJavaScript(code).catchError((Object _) {});
  }
}

class Scene3DView extends StatelessWidget {
  final Scene3DController controller;
  const Scene3DView({super.key, required this.controller});

  @override
  Widget build(BuildContext context) {
    return WebViewWidget(
      controller: controller.web,
      gestureRecognizers: {Factory<OneSequenceGestureRecognizer>(() => EagerGestureRecognizer())},
    );
  }
}

String sideName(Side s) => s == Side.ponti ? 'ponti' : 'quadrante';

/// Il passo in 3D: una vite e un pezzo alla volta.
class StepScene3D extends StatefulWidget {
  final List<ServiceStep> steps;
  final int index;
  final bool automatic;
  final bool date;
  final bool smallSeconds;
  final VoidCallback onNoGl;

  const StepScene3D({
    super.key,
    required this.steps,
    required this.index,
    required this.automatic,
    required this.date,
    this.smallSeconds = false,
    required this.onNoGl,
  });

  @override
  State<StepScene3D> createState() => _StepScene3DState();
}

class _StepScene3DState extends State<StepScene3D> with AutomaticKeepAliveClientMixin {
  late final Scene3DController c = Scene3DController(
    onTap: (p) {
      if (mounted) showPartSheet(context, p);
    },
    onDone: (seq) {
      if (!mounted || seq != _seq) return;
      setState(() => _busy = false);
      c.show(_stateMap(_a, animate: true));
    },
    onNoGl: () => widget.onNoGl(),
  );

  late Set<String> _base;
  late List<SceneAction> _actions;
  late SceneOp? _op;
  int _a = 0;
  int _seq = 0;
  bool _busy = false;
  bool _xray = false;

  @override
  bool get wantKeepAlive => true;

  @override
  void initState() {
    super.initState();
    _compute();
    c.layout(smallSeconds: widget.smallSeconds);
    c.show(_stateMap(0, animate: false));
  }

  @override
  void didUpdateWidget(covariant StepScene3D old) {
    super.didUpdateWidget(old);
    if (old.smallSeconds != widget.smallSeconds) c.layout(smallSeconds: widget.smallSeconds);
    if (old.index != widget.index || old.automatic != widget.automatic || old.date != widget.date) {
      _compute();
      _a = 0;
      _busy = false;
      _seq++;
      c.show(_stateMap(0, animate: true));
    }
  }

  ServiceStep get _step => widget.steps[widget.index];

  void _compute() {
    _op = sceneOps[_step.id];
    _base = presentWithScrewsBefore(widget.steps, widget.index, automatic: widget.automatic, date: widget.date);
    _actions = actionsFor(_step, _base, automatic: widget.automatic, date: widget.date);
  }

  Set<String> _stateAt(int k) {
    var p = _base;
    for (var i = 0; i < k && i < _actions.length; i++) {
      p = applyAction(p, _actions[i]);
    }
    return p;
  }

  Side get _side => _op?.side ?? Side.ponti;

  List<String> _focusFor(int k) {
    if (k >= _actions.length) {
      if (_actions.isEmpty && (_op?.highlight.isNotEmpty ?? false)) return _op!.highlight;
      return const [];
    }
    final a = _actions[k];
    switch (a.type) {
      case ActionType.unscrew:
      case ActionType.screw:
        final s = screwById(a.ids.first);
        return [if (s != null) s.item];
      case ActionType.lift:
      case ActionType.lower:
        return a.ids;
      case ActionType.press:
        return const ['tiretto', 'p_stelo'];
      case ActionType.letdown:
        return const ['rocchetto_cricco', 'cricchetto'];
      case ActionType.regulate:
        return const ['ponte_bilanciere'];
      case ActionType.oil:
        return a.ids;
    }
  }

  Map<String, dynamic> _stateMap(int k, {required bool animate}) {
    final present = _stateAt(k);
    final involved = <String>{
      for (final a in _actions)
        if (a.type == ActionType.unscrew || a.type == ActionType.screw) ...a.ids,
    };
    final tray = involved.where((id) => !present.contains(id)).toList();
    // pezzi sul tappetino: tolti in questo passo, oppure da rimettere
    final moved = <String>{
      for (final a in _actions)
        if (a.type == ActionType.lift || a.type == ActionType.lower) ...a.ids,
    };
    final mat = moved.where((id) => !present.contains(id)).toList();
    final highlight = <String>{...?_op?.highlight};
    final numbered = <Map<String, dynamic>>[];
    if (k < _actions.length) {
      final a = _actions[k];
      if (a.type == ActionType.lift || a.type == ActionType.lower || a.type == ActionType.regulate || a.type == ActionType.letdown) {
        highlight.addAll(a.ids);
      }
      if (a.type == ActionType.unscrew || a.type == ActionType.screw) {
        final s = screwById(a.ids.first)!;
        final same = screwsOf(s.item);
        for (var i = 0; i < same.length; i++) {
          numbered.add({'id': same[i].id, 'n': i + 1, 'active': same[i].id == s.id});
        }
      }
    }
    return {
      'side': sideName(_side),
      'present': present.toList(),
      'highlight': highlight.toList(),
      'numbered': numbered,
      'tray': tray,
      'showTray': involved.isNotEmpty,
      'mat': mat,
      'live': {'panel': true},
      'focus': _focusFor(k),
      'xray': _xray,
      'animate': animate,
    };
  }

  void _play() {
    if (_busy || _a >= _actions.length) return;
    final action = _actions[_a];
    _seq++;
    setState(() {
      _busy = true;
      _a++;
    });
    c.play(action, _seq);
  }

  void _goto(int k) {
    _seq++;
    setState(() {
      _a = k.clamp(0, _actions.length);
      _busy = false;
    });
    c.show(_stateMap(_a, animate: true));
  }

  void _replay() {
    if (_a == 0) return;
    _goto(_a - 1);
    Future<void>.delayed(const Duration(milliseconds: 900), () {
      if (mounted) _play();
    });
  }

  String _verb(ActionType t) => switch (t) {
        ActionType.unscrew => 'Svita',
        ActionType.screw => 'Avvita',
        ActionType.lift => 'Solleva',
        ActionType.lower => 'Rimetti',
        ActionType.press => 'Premi',
        ActionType.letdown => 'Scarica',
        ActionType.regulate => 'Regola',
        ActionType.oil => 'Olia',
      };

  IconData _icon(ActionType t) => switch (t) {
        ActionType.unscrew => Icons.rotate_left,
        ActionType.screw => Icons.rotate_right,
        ActionType.lift => Icons.north,
        ActionType.lower => Icons.south,
        ActionType.press => Icons.touch_app,
        ActionType.letdown => Icons.battery_alert,
        ActionType.regulate => Icons.tune,
        ActionType.oil => Icons.water_drop_outlined,
      };

  @override
  Widget build(BuildContext context) {
    super.build(context);
    final n = _actions.length;
    final done = _a >= n;
    final cur = done ? null : _actions[_a];
    final last = _a > 0 ? _actions[_a - 1] : null;
    final shown = _busy ? last : cur;

    return Card(
      clipBehavior: Clip.antiAlias,
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.stretch,
        children: [
          Padding(
            padding: const EdgeInsets.fromLTRB(14, 6, 4, 0),
            child: Row(
              children: [
                const Icon(Icons.view_in_ar, size: 18, color: Brand.blu),
                const SizedBox(width: 6),
                Expanded(
                  child: Text(sideLabel(_side),
                      overflow: TextOverflow.ellipsis, style: Brand.sora(13, 700, color: Brand.blu)),
                ),
                IconButton(
                  tooltip: 'Raggi X',
                  isSelected: _xray,
                  onPressed: () {
                    setState(() => _xray = !_xray);
                    c.show(_stateMap(_a, animate: false));
                  },
                  icon: const Icon(Icons.layers_outlined),
                  selectedIcon: const Icon(Icons.layers, color: Brand.arancio),
                ),
                IconButton(tooltip: 'Vista dall\'alto', onPressed: () => c.view('top'), icon: const Icon(Icons.vertical_align_top)),
                IconButton(tooltip: 'Tutto il movimento', onPressed: () => c.focus(const []), icon: const Icon(Icons.zoom_out_map)),
                QualityMenu(controller: c),
              ],
            ),
          ),
          AspectRatio(aspectRatio: 1, child: Scene3DView(controller: c)),
          Padding(
            padding: const EdgeInsets.fromLTRB(14, 8, 14, 4),
            child: Text(
              'Un dito: ruota. Due dita: ingrandisci e sposta. Tocca un pezzo per la sua scheda.',
              style: TextStyle(fontSize: 12.5, color: Brand.inchiostro.withValues(alpha: 0.55)),
            ),
          ),
          if (n == 0)
            const SizedBox(height: 10)
          else ...[
            Padding(
              padding: const EdgeInsets.fromLTRB(14, 6, 14, 0),
              child: Row(children: [
                Text('Azione ${done ? n : _a + 1} di $n', style: Brand.sora(13, 700, color: Brand.inchiostro)),
                const SizedBox(width: 10),
                Expanded(
                  child: ClipRRect(
                    borderRadius: BorderRadius.circular(4),
                    child: LinearProgressIndicator(
                      value: n == 0 ? 1 : _a / n,
                      minHeight: 6,
                      color: Brand.arancio,
                      backgroundColor: Brand.blu.withValues(alpha: 0.08),
                    ),
                  ),
                ),
              ]),
            ),
            Padding(
              padding: const EdgeInsets.fromLTRB(14, 10, 14, 0),
              child: done && !_busy
                  ? const InfoBox(
                      icon: Icons.check_circle_outline,
                      title: 'Azioni del passo completate',
                      text: 'Puoi rivederle una per una dall\'elenco qui sotto, poi tocca "Fatto, avanti".',
                      color: Colors.green,
                    )
                  : InfoBox(
                      icon: _icon(shown!.type),
                      title: shown.text,
                      text: shown.detail ?? (_busy ? 'Guarda l\'animazione…' : 'Tocca il pulsante per vedere come si fa.'),
                      color: shown.warn ? Colors.red.shade700 : Brand.arancio,
                    ),
            ),
            Padding(
              padding: const EdgeInsets.fromLTRB(10, 10, 10, 6),
              child: Row(children: [
                IconButton.outlined(
                  tooltip: 'Azione precedente',
                  onPressed: _a == 0 ? null : () => _goto(_a - 1),
                  icon: const Icon(Icons.skip_previous),
                ),
                const SizedBox(width: 6),
                IconButton.outlined(
                  tooltip: 'Rivedi',
                  onPressed: _a == 0 || _busy ? null : _replay,
                  icon: const Icon(Icons.replay),
                ),
                const SizedBox(width: 8),
                Expanded(
                  child: FilledButton.icon(
                    style: FilledButton.styleFrom(backgroundColor: Brand.arancio),
                    onPressed: done || _busy ? null : _play,
                    icon: Icon(cur == null ? Icons.check : _icon(cur.type)),
                    label: Text(cur == null ? 'Fatto' : (_busy ? 'Attendi…' : 'Mostrami: ${_verb(cur.type).toLowerCase()}'),
                        overflow: TextOverflow.ellipsis),
                  ),
                ),
              ]),
            ),
            Theme(
              data: Theme.of(context).copyWith(dividerColor: Colors.transparent),
              child: ExpansionTile(
                tilePadding: const EdgeInsets.symmetric(horizontal: 14),
                title: Text('Tutte le azioni del passo', style: Brand.sora(13.5, 700, color: Brand.inchiostro)),
                children: [
                  for (var i = 0; i < n; i++)
                    ListTile(
                      dense: true,
                      selected: i == _a,
                      leading: Icon(
                        i < _a ? Icons.check_circle : _icon(_actions[i].type),
                        color: i < _a ? Colors.green.shade700 : (_actions[i].warn ? Colors.red.shade700 : Brand.blu),
                        size: 20,
                      ),
                      title: Text('${i + 1}. ${_actions[i].text}', style: const TextStyle(fontSize: 14)),
                      onTap: () => _goto(i),
                    ),
                ],
              ),
            ),
          ],
        ],
      ),
    );
  }
}

/// Esplora in 3D: smonta col cursore, ribalta, raggi X.
class Explore3D extends StatefulWidget {
  final Side side;
  final bool automatic;
  final bool date;
  final bool xray;
  final List<String> removed;
  final VoidCallback onNoGl;

  const Explore3D({
    super.key,
    required this.side,
    required this.automatic,
    required this.date,
    required this.xray,
    required this.removed,
    required this.onNoGl,
  });

  @override
  State<Explore3D> createState() => _Explore3DState();
}

class _Explore3DState extends State<Explore3D> {
  late final Scene3DController c = Scene3DController(
    onTap: (p) {
      if (mounted) showPartSheet(context, p);
    },
    onNoGl: () => widget.onNoGl(),
  );

  Map<String, dynamic> _map() {
    final present = fullSet(automatic: widget.automatic, date: widget.date);
    for (final id in widget.removed) {
      present.remove(id);
      present.removeAll(screwsOf(id).map((s) => s.id));
      final p = liftWith[id];
      if (p != null) present.remove(p);
    }
    return {
      'side': sideName(widget.side),
      'present': present.toList(),
      'xray': widget.xray,
      'animate': true,
      'live': {'on': widget.removed.isEmpty, 'panel': true},
      if (widget.removed.isEmpty) 'focus': const <String>[],
    };
  }

  @override
  void initState() {
    super.initState();
    c.show(_map());
  }

  @override
  void didUpdateWidget(covariant Explore3D old) {
    super.didUpdateWidget(old);
    c.show(_map());
  }

  @override
  Widget build(BuildContext context) {
    return ClipRRect(
      borderRadius: BorderRadius.circular(16),
      child: AspectRatio(aspectRatio: 1, child: Scene3DView(controller: c)),
    );
  }
}

/// Menu qualità grafica (alta / normale).
class QualityMenu extends StatelessWidget {
  final Scene3DController controller;
  const QualityMenu({super.key, required this.controller});

  @override
  Widget build(BuildContext context) {
    return PopupMenuButton<bool>(
      tooltip: 'Qualità grafica',
      icon: const Icon(Icons.high_quality_outlined),
      onSelected: controller.setQuality,
      itemBuilder: (_) => const [
        PopupMenuItem(value: true, child: Text('Qualità alta (più realistica)')),
        PopupMenuItem(value: false, child: Text('Qualità normale (telefoni più lenti)')),
      ],
    );
  }
}
