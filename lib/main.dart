import 'package:flutter/material.dart';

import 'logic/revision.dart';
import 'logic/store.dart';
import 'ui/ai_settings_page.dart';
import 'ui/glossary_page.dart';
import 'ui/how_it_works_page.dart';
import 'ui/scene_widgets.dart';
import 'ui/guide_page.dart';
import 'ui/identify_page.dart';
import 'ui/measure_page.dart';
import 'ui/new_revision_page.dart';
import 'ui/theme.dart';
import 'data/calibers.dart';

void main() {
  WidgetsFlutterBinding.ensureInitialized();
  runApp(const FixWatchLabApp());
}

class FixWatchLabApp extends StatelessWidget {
  const FixWatchLabApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'D. Fix Watch Lab',
      debugShowCheckedModeBanner: false,
      theme: buildTheme(),
      home: const HomePage(),
    );
  }
}

class HomePage extends StatefulWidget {
  const HomePage({super.key});

  @override
  State<HomePage> createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  final store = RevisionStore();
  bool _loading = true;

  @override
  void initState() {
    super.initState();
    store.addListener(_refresh);
    store.load().whenComplete(() {
      if (mounted) setState(() => _loading = false);
    });
  }

  @override
  void dispose() {
    store.removeListener(_refresh);
    super.dispose();
  }

  void _refresh() {
    if (mounted) setState(() {});
  }

  void _push(Widget w) => Navigator.push(context, MaterialPageRoute(builder: (_) => w));

  Future<void> _identify() async {
    final c = await Navigator.push<Caliber>(context, MaterialPageRoute(builder: (_) => const IdentifyPage()));
    if (c != null && mounted) _push(NewRevisionPage(store: store, preset: c));
  }

  @override
  Widget build(BuildContext context) {
    final open = store.items.where((r) => !r.finished).toList();
    final current = open.isEmpty ? null : open.first;
    final others = store.items.where((r) => r != current).toList();
    return Scaffold(
      body: SafeArea(
        child: _loading
            ? const Center(child: CircularProgressIndicator())
            : ListView(
                padding: const EdgeInsets.fromLTRB(18, 18, 18, 24),
                children: [
                  Row(children: [
                    Expanded(child: Text('D. Fix Watch Lab', style: Brand.sora(26, 800, color: Brand.inchiostro))),
                    IconButton(
                      tooltip: 'AI facoltativa',
                      onPressed: () => _push(const AiSettingsPage()),
                      icon: const Icon(Icons.auto_awesome_outlined, color: Brand.blu),
                    ),
                  ]),
                  const SizedBox(height: 2),
                  Text('Revisiona il tuo orologio, un passo alla volta.',
                      style: TextStyle(fontSize: 16, color: Brand.inchiostro.withValues(alpha: 0.7))),
                  const SizedBox(height: 20),
                  if (current != null) ...[
                    _ContinueCard(r: current, onTap: () => _push(GuidePage(store: store, revision: current))),
                    const SizedBox(height: 12),
                    OutlinedButton.icon(
                      onPressed: () => _push(NewRevisionPage(store: store)),
                      icon: const Icon(Icons.add),
                      label: const Text('Inizia un altro orologio'),
                    ),
                  ] else
                    _StartCard(onTap: () => _push(NewRevisionPage(store: store))),
                  const SizedBox(height: 28),
                  Text('Impara e misura', style: Brand.sora(18, 800, color: Brand.inchiostro)),
                  const SizedBox(height: 10),
                  _ToolRow(
                    icon: Icons.menu_book_outlined,
                    title: 'A cosa serve ogni pezzo',
                    subtitle: 'Il dizionario del movimento, spiegato semplice',
                    onTap: () => _push(const GlossaryPage()),
                  ),
                  _ToolRow(
                    icon: Icons.play_circle_outline,
                    title: 'Come funziona un orologio',
                    subtitle: 'Animazioni di scappamento, ruote e carica',
                    onTap: () => _push(const HowItWorksPage()),
                  ),
                  _ToolRow(
                    icon: Icons.layers_outlined,
                    title: 'Esplora il movimento',
                    subtitle: 'Smonta e rimonta in 3D, pezzo per pezzo',
                    onTap: () => _push(const ExplorePage()),
                  ),
                  _ToolRow(
                    icon: Icons.search,
                    title: 'Che calibro ho?',
                    subtitle: 'Foto, numero inciso o qualche domanda',
                    onTap: _identify,
                  ),
                  _ToolRow(
                    icon: Icons.graphic_eq,
                    title: 'Misura la marcia',
                    subtitle: 'Ascolta il ticchettio col microfono',
                    onTap: () => _push(const MeasurePage()),
                  ),
                  if (others.isNotEmpty) ...[
                    const SizedBox(height: 26),
                    Text('Le tue revisioni', style: Brand.sora(18, 800, color: Brand.inchiostro)),
                    const SizedBox(height: 10),
                    for (final r in others) ...[
                      _RevisionCard(
                        r: r,
                        onOpen: () => _push(GuidePage(store: store, revision: r)),
                        onDelete: () => _confirmDelete(r),
                      ),
                      const SizedBox(height: 8),
                    ],
                    Text('Tieni premuto su una revisione per eliminarla.',
                        style: TextStyle(fontSize: 13.5, color: Brand.inchiostro.withValues(alpha: 0.55))),
                  ],
                  if (current != null) ...[
                    const SizedBox(height: 8),
                    Align(
                      alignment: Alignment.centerLeft,
                      child: TextButton.icon(
                        onPressed: () => _confirmDelete(current),
                        icon: const Icon(Icons.delete_outline, size: 20),
                        label: Text('Elimina "${current.watchName}"'),
                        style: TextButton.styleFrom(foregroundColor: Brand.inchiostro.withValues(alpha: 0.6)),
                      ),
                    ),
                  ],
                  const SizedBox(height: 30),
                  Center(
                    child: Text("un'app Dom Studio",
                        style: Brand.sora(12, 400, color: Brand.inchiostro.withValues(alpha: 0.5))),
                  ),
                ],
              ),
      ),
    );
  }

  Future<void> _confirmDelete(Revision r) async {
    final ok = await showDialog<bool>(
      context: context,
      builder: (ctx) => AlertDialog(
        title: const Text('Eliminare la revisione?'),
        content: Text('"${r.watchName}" con note e foto verrà cancellata.'),
        actions: [
          TextButton(onPressed: () => Navigator.pop(ctx, false), child: const Text('Annulla')),
          TextButton(onPressed: () => Navigator.pop(ctx, true), child: const Text('Elimina')),
        ],
      ),
    );
    if (ok == true) await store.remove(r);
  }
}

class _StartCard extends StatelessWidget {
  final VoidCallback onTap;
  const _StartCard({required this.onTap});

  @override
  Widget build(BuildContext context) {
    return Material(
      color: Brand.blu,
      borderRadius: BorderRadius.circular(22),
      child: InkWell(
        borderRadius: BorderRadius.circular(22),
        onTap: onTap,
        child: Padding(
          padding: const EdgeInsets.fromLTRB(20, 22, 20, 22),
          child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
            const Icon(Icons.watch_outlined, color: Colors.white, size: 40),
            const SizedBox(height: 12),
            Text('Inizia una revisione', style: Brand.sora(23, 800, color: Colors.white)),
            const SizedBox(height: 6),
            const Text(
              'Fotografa il movimento o scrivi il numero del calibro: ti guido io dal fondello alla prova finale.',
              style: TextStyle(fontSize: 16, height: 1.4, color: Colors.white),
            ),
            const SizedBox(height: 16),
            Container(
              padding: const EdgeInsets.symmetric(horizontal: 18, vertical: 12),
              decoration: BoxDecoration(color: Colors.white, borderRadius: BorderRadius.circular(14)),
              child: Row(mainAxisSize: MainAxisSize.min, children: [
                Text('Comincia', style: Brand.sora(16, 700, color: Brand.blu)),
                const SizedBox(width: 6),
                const Icon(Icons.arrow_forward, color: Brand.blu, size: 20),
              ]),
            ),
          ]),
        ),
      ),
    );
  }
}

class _ContinueCard extends StatelessWidget {
  final Revision r;
  final VoidCallback onTap;
  const _ContinueCard({required this.r, required this.onTap});

  @override
  Widget build(BuildContext context) {
    final steps = r.steps;
    final i = r.currentIndex.clamp(0, steps.length - 1);
    return Material(
      color: Brand.blu,
      borderRadius: BorderRadius.circular(22),
      child: InkWell(
        borderRadius: BorderRadius.circular(22),
        onTap: onTap,
        child: Padding(
          padding: const EdgeInsets.fromLTRB(20, 20, 20, 20),
          child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
            Text('CONTINUA DA DOVE ERI', style: Brand.sora(12.5, 700, color: Colors.white70).copyWith(letterSpacing: 1.1)),
            const SizedBox(height: 8),
            Text(r.watchName, maxLines: 1, overflow: TextOverflow.ellipsis, style: Brand.sora(23, 800, color: Colors.white)),
            const SizedBox(height: 4),
            Text('Passo ${i + 1} di ${steps.length}: ${steps[i].title}',
                maxLines: 2, overflow: TextOverflow.ellipsis, style: const TextStyle(fontSize: 16, color: Colors.white)),
            const SizedBox(height: 14),
            ClipRRect(
              borderRadius: BorderRadius.circular(6),
              child: LinearProgressIndicator(
                value: r.progress,
                minHeight: 8,
                color: Brand.arancio,
                backgroundColor: Colors.white24,
              ),
            ),
            const SizedBox(height: 16),
            Container(
              padding: const EdgeInsets.symmetric(horizontal: 18, vertical: 12),
              decoration: BoxDecoration(color: Colors.white, borderRadius: BorderRadius.circular(14)),
              child: Row(mainAxisSize: MainAxisSize.min, children: [
                Text('Riprendi', style: Brand.sora(16, 700, color: Brand.blu)),
                const SizedBox(width: 6),
                const Icon(Icons.arrow_forward, color: Brand.blu, size: 20),
              ]),
            ),
          ]),
        ),
      ),
    );
  }
}

class _ToolRow extends StatelessWidget {
  final IconData icon;
  final String title;
  final String subtitle;
  final VoidCallback onTap;
  const _ToolRow({required this.icon, required this.title, required this.subtitle, required this.onTap});

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.only(bottom: 8),
      child: Card(
        child: ListTile(
          contentPadding: const EdgeInsets.symmetric(horizontal: 14, vertical: 4),
          leading: Container(
            width: 46,
            height: 46,
            decoration: BoxDecoration(color: Brand.verdeChiaro, borderRadius: BorderRadius.circular(14)),
            child: Icon(icon, color: Brand.blu, size: 26),
          ),
          title: Text(title),
          subtitle: Text(subtitle),
          trailing: const Icon(Icons.chevron_right, color: Brand.blu),
          onTap: onTap,
        ),
      ),
    );
  }
}

class _RevisionCard extends StatelessWidget {
  final Revision r;
  final VoidCallback onOpen;
  final VoidCallback onDelete;
  const _RevisionCard({required this.r, required this.onOpen, required this.onDelete});

  @override
  Widget build(BuildContext context) {
    final pct = (r.progress * 100).round();
    final d = r.started;
    return Card(
      child: InkWell(
        borderRadius: BorderRadius.circular(16),
        onTap: onOpen,
        onLongPress: onDelete,
        child: Padding(
          padding: const EdgeInsets.all(14),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Row(children: [
                Expanded(
                  child: Text(r.watchName,
                      maxLines: 1,
                      overflow: TextOverflow.ellipsis,
                      style: Brand.sora(16, 700, color: Brand.inchiostro)),
                ),
                Text(r.finished ? 'Finita' : '$pct%',
                    style: Brand.sora(14, 700, color: r.finished ? Colors.green.shade700 : Brand.arancio)),
              ]),
              const SizedBox(height: 2),
              Text('${r.caliber.name} · iniziata il ${d.day}/${d.month}/${d.year}',
                  maxLines: 1,
                  overflow: TextOverflow.ellipsis,
                  style: TextStyle(fontSize: 13.5, color: Brand.inchiostro.withValues(alpha: 0.65))),
              const SizedBox(height: 10),
              ClipRRect(
                borderRadius: BorderRadius.circular(4),
                child: LinearProgressIndicator(
                  value: r.progress,
                  minHeight: 6,
                  color: Brand.arancio,
                  backgroundColor: Brand.blu.withValues(alpha: 0.08),
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
