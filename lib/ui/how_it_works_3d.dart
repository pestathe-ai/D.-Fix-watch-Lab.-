import 'package:flutter/material.dart';

import 'how_it_works_page.dart';
import 'scene3d.dart';
import 'scene_widgets.dart';
import 'theme.dart';

/// "Come funziona" dentro il movimento 3D: scappamento, energia, corona, briglia.
class HowItWorks3D extends StatefulWidget {
  final int initialTab;
  const HowItWorks3D({super.key, this.initialTab = 0});

  @override
  State<HowItWorks3D> createState() => _HowItWorks3DState();
}

class _HowItWorks3DState extends State<HowItWorks3D> with SingleTickerProviderStateMixin {
  late final TabController _tabs = TabController(length: 4, vsync: this, initialIndex: widget.initialTab);
  late final Scene3DController c = Scene3DController(
    onTap: (p) {
      if (mounted) showPartSheet(context, p);
    },
    onNoGl: () {
      if (mounted) setState(() => _noGl = true);
    },
  );
  bool _noGl = false;

  // scappamento
  double _escSpeed = 0.05;
  String _phase = 'libero';
  // energia
  double _mult = 60;
  // corona
  int _pos = 0;
  bool _autoTurn = false;
  // briglia
  double _charge = 0.3;
  double _flash = 0;
  bool _wrist = false;
  bool _ticking = true;

  static const _kinds = ['escapement', 'energy', 'keyless', 'bridle'];

  @override
  void initState() {
    super.initState();
    c.onPhase = (p) {
      if (mounted && p != _phase) setState(() => _phase = p);
    };
    c.onBridle = (ch, fl) {
      if (mounted) {
        setState(() {
          _charge = ch;
          _flash = fl;
        });
      }
    };
    _tabs.addListener(() {
      if (!_tabs.indexIsChanging) _start();
    });
    _start();
  }

  @override
  void dispose() {
    _tabs.dispose();
    super.dispose();
  }

  void _start() {
    final k = _kinds[_tabs.index];
    final cfg = <String, dynamic>{'kind': k};
    if (k == 'escapement') cfg['speed'] = _escSpeed;
    if (k == 'energy') cfg['speed'] = _mult;
    if (k == 'keyless') {
      cfg['pos'] = _pos;
      cfg['turning'] = _autoTurn;
    }
    if (k == 'bridle') {
      cfg['wrist'] = _wrist;
      cfg['ticking'] = _ticking;
    }
    c.demo(cfg, start: true);
    setState(() {});
  }

  void _upd(Map<String, dynamic> m) => c.demo({'kind': _kinds[_tabs.index], ...m});

  @override
  Widget build(BuildContext context) {
    if (_noGl) return HowItWorks2D(initialTab: _tabs.index);
    return Scaffold(
      appBar: AppBar(
        title: const Text('Come funziona'),
        actions: [QualityMenu(controller: c)],
        bottom: TabBar(
          controller: _tabs,
          isScrollable: true,
          tabAlignment: TabAlignment.start,
          tabs: const [Tab(text: 'Scappamento'), Tab(text: 'Energia'), Tab(text: 'Corona'), Tab(text: 'Briglia')],
        ),
      ),
      body: ListView(
        padding: const EdgeInsets.fromLTRB(16, 12, 16, 28),
        children: [
          ClipRRect(
            borderRadius: BorderRadius.circular(16),
            child: AspectRatio(aspectRatio: 1, child: Scene3DView(controller: c)),
          ),
          const SizedBox(height: 6),
          Text('Un dito: ruota la vista. Due dita: ingrandisci. Tocca un pezzo per la sua scheda.',
              style: TextStyle(fontSize: 12.5, color: Brand.inchiostro.withValues(alpha: 0.55))),
          const SizedBox(height: 12),
          ...switch (_tabs.index) {
            0 => _escapement(),
            1 => _energy(),
            2 => _keyless(),
            _ => _bridle(),
          },
        ],
      ),
    );
  }

  List<Widget> _escapement() {
    const captions = {
      'libero': ('Arco libero', 'Il bilanciere oscilla da solo, senza toccare nulla. La ruota di scappamento è ferma, bloccata da una paletta dell\'ancora.'),
      'sblocco': ('Sblocco', 'Il rubino sotto il bilanciere colpisce la forchetta: l\'ancora ruota e la paletta libera un dente.'),
      'impulso': ('Impulso', 'Il dente liberato spinge sulla paletta e l\'ancora restituisce la spinta al bilanciere. Subito dopo l\'altra paletta blocca il dente seguente: è il "tic".'),
    };
    final cap = captions[_phase] ?? captions['libero']!;
    return [
      InfoBox(
        icon: _phase == 'libero' ? Icons.waves : (_phase == 'sblocco' ? Icons.lock_open : Icons.bolt),
        title: cap.$1,
        text: cap.$2,
        color: _phase == 'libero' ? Brand.blu : Brand.arancio,
      ),
      const SizedBox(height: 10),
      Text('Rallentatore: ${(1 / _escSpeed).round()} volte più lento', style: const TextStyle(fontSize: 14)),
      Slider(
        value: _escSpeed,
        min: 0.01,
        max: 1,
        divisions: 99,
        onChanged: (v) {
          setState(() => _escSpeed = v);
          _upd({'speed': v});
        },
      ),
      const InfoBox(
        icon: Icons.lightbulb_outline,
        title: 'Perché è il cuore dell\'orologio',
        text: 'Senza scappamento la molla si scaricherebbe in pochi secondi. Lo scappamento lascia passare l\'energia '
            'un dente alla volta, al ritmo del bilanciere: 8 volte al secondo in un 28.800 alternanze/ora.',
        color: Brand.blu,
      ),
    ];
  }

  List<Widget> _energy() => [
        Text('Velocità del tempo', style: Brand.sora(14, 700, color: Brand.inchiostro)),
        const SizedBox(height: 6),
        SegmentedButton<double>(
          segments: const [
            ButtonSegment(value: 1, label: Text('Reale')),
            ButtonSegment(value: 60, label: Text('×60')),
            ButtonSegment(value: 600, label: Text('×600')),
            ButtonSegment(value: 3600, label: Text('×3600')),
          ],
          selected: {_mult},
          onSelectionChanged: (s) {
            setState(() => _mult = s.first);
            _upd({'speed': s.first});
          },
        ),
        const SizedBox(height: 12),
        const InfoBox(
          icon: Icons.lightbulb_outline,
          title: 'Il percorso dell\'energia',
          text: 'I puntini arancioni seguono l\'energia: dalla molla nel bariletto alla ruota di centro, al terzo, ai secondi, '
              'alla ruota di scappamento e infine all\'ancora e al bilanciere. Ogni ruota gira più veloce della precedente. '
              'A velocità reale le prime sembrano ferme: prova ×3600, un\'ora diventa un secondo.',
          color: Brand.blu,
        ),
      ];

  List<Widget> _keyless() {
    const texts = [
      'Corona spinta dentro: il pignone scorrevole ingrana con il pignone di carica. Girando, la molla si carica.',
      'Primo scatto (nei calibri con data): la rotazione va al correttore rapido della data.',
      'Tutta fuori: il pignone scorrevole ingrana con la ruota di rinvio, che porta alla minuteria e sposta le lancette.',
    ];
    return [
      SegmentedButton<int>(
        segments: const [
          ButtonSegment(value: 0, label: Text('Carica')),
          ButtonSegment(value: 1, label: Text('Data')),
          ButtonSegment(value: 2, label: Text('Ora')),
        ],
        selected: {_pos},
        onSelectionChanged: (s) {
          setState(() => _pos = s.first);
          _upd({'pos': s.first});
        },
      ),
      const SizedBox(height: 10),
      Row(children: [
        Expanded(
          child: Listener(
            onPointerDown: (_) => _upd({'turning': true}),
            onPointerUp: (_) => _upd({'turning': _autoTurn}),
            onPointerCancel: (_) => _upd({'turning': _autoTurn}),
            child: FilledButton.icon(
              onPressed: () {},
              icon: const Icon(Icons.rotate_right),
              label: const Text('Tieni premuto: gira'),
            ),
          ),
        ),
        const SizedBox(width: 10),
        FilterChip(
          label: const Text('Da sola'),
          selected: _autoTurn,
          onSelected: (v) {
            setState(() => _autoTurn = v);
            _upd({'turning': v});
          },
        ),
      ]),
      const SizedBox(height: 10),
      InfoBox(
        icon: _pos == 0 ? Icons.battery_charging_full : (_pos == 1 ? Icons.calendar_today : Icons.schedule),
        title: _pos == 0 ? 'Posizione di carica' : (_pos == 1 ? 'Correzione della data' : 'Messa all\'ora'),
        text: texts[_pos],
        color: Brand.arancio,
      ),
    ];
  }

  List<Widget> _bridle() => [
        Row(children: [
          Expanded(
            child: LinearProgressIndicator(
              value: _charge,
              minHeight: 12,
              borderRadius: BorderRadius.circular(6),
              color: _charge >= 0.999 ? Brand.arancio : Brand.blu,
              backgroundColor: Brand.blu.withValues(alpha: 0.1),
            ),
          ),
          const SizedBox(width: 10),
          Text('≈ ${(_charge * 42).round()} h', style: Brand.sora(15, 700, color: Brand.inchiostro)),
        ]),
        const SizedBox(height: 12),
        Row(children: [
          Expanded(
            child: FilledButton.icon(
              onPressed: () => _upd({'wind': 0.07}),
              icon: const Icon(Icons.rotate_right),
              label: const Text('Gira la corona'),
            ),
          ),
          const SizedBox(width: 10),
          Expanded(
            child: OutlinedButton.icon(
              onPressed: () {
                setState(() => _wrist = !_wrist);
                _upd({'wrist': _wrist});
              },
              icon: Icon(_wrist ? Icons.stop : Icons.watch),
              label: Text(_wrist ? 'Ferma polso' : 'Al polso'),
            ),
          ),
        ]),
        SwitchListTile(
          contentPadding: EdgeInsets.zero,
          value: _ticking,
          onChanged: (v) {
            setState(() => _ticking = v);
            _upd({'ticking': v});
          },
          title: const Text('L\'orologio sta funzionando (si scarica)'),
        ),
        InfoBox(
          icon: _flash > 0 ? Icons.warning_amber_rounded : Icons.lightbulb_outline,
          title: _flash > 0 ? 'La briglia sta slittando!' : 'Cosa vedi',
          text: _flash > 0
              ? 'La molla è carica al massimo: invece di tirare oltre, la briglia (in arancio) scivola sulla parete del bariletto. '
                  'Così un automatico non si rompe mai per troppa carica.'
              : 'Il bariletto è aperto. Caricando, la molla si stringe attorno all\'albero; scaricandosi torna verso la parete. '
                  'L\'estremità esterna in arancio non è agganciata: è la briglia.',
          color: _flash > 0 ? Brand.arancio : Brand.blu,
        ),
      ];
}
