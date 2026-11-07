import 'package:flutter/material.dart';

import 'logic/revision.dart';
import 'logic/store.dart';
import 'ui/glossary_page.dart';
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

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: SafeArea(
        child: _loading
            ? const Center(child: CircularProgressIndicator())
            : ListView(
                padding: const EdgeInsets.fromLTRB(16, 20, 16, 24),
                children: [
                  Text('D. Fix Watch Lab', style: Brand.sora(28, 800, color: Brand.inchiostro)),
                  const SizedBox(height: 4),
                  Text('La revisione del tuo orologio, passo passo.',
                      style: TextStyle(fontSize: 15, color: Brand.inchiostro.withValues(alpha: 0.7))),
                  const SizedBox(height: 20),
                  FilledButton.icon(
                    onPressed: () => _push(NewRevisionPage(store: store)),
                    icon: const Icon(Icons.add),
                    label: const Text('Nuova revisione'),
                  ),
                  const SizedBox(height: 12),
                  Row(children: [
                    Expanded(
                      child: _Tile(
                        icon: Icons.menu_book_outlined,
                        label: 'A cosa serve\nogni pezzo',
                        onTap: () => _push(const GlossaryPage()),
                      ),
                    ),
                    const SizedBox(width: 10),
                    Expanded(
                      child: _Tile(
                        icon: Icons.search,
                        label: 'Identifica\nil calibro',
                        onTap: () async {
                          final c = await Navigator.push<Caliber>(
                            context,
                            MaterialPageRoute(builder: (_) => const IdentifyPage()),
                          );
                          if (c != null && mounted) _push(NewRevisionPage(store: store, preset: c));
                        },
                      ),
                    ),
                    const SizedBox(width: 10),
                    Expanded(
                      child: _Tile(
                        icon: Icons.graphic_eq,
                        label: 'Misura\nmarcia',
                        onTap: () => _push(const MeasurePage()),
                      ),
                    ),
                  ]),
                  const SizedBox(height: 26),
                  Text('Le tue revisioni', style: Brand.sora(18, 800, color: Brand.inchiostro)),
                  const SizedBox(height: 10),
                  if (store.items.isEmpty)
                    Card(
                      child: Padding(
                        padding: const EdgeInsets.all(18),
                        child: Text(
                          'Nessuna revisione ancora. Tocca "Nuova revisione": scegli il calibro '
                          '(o "sconosciuto") e l\'app ti accompagna dal fondello alla prova finale, '
                          'spiegandoti ogni pezzo.',
                          style: TextStyle(fontSize: 15, height: 1.4, color: Brand.inchiostro.withValues(alpha: 0.8)),
                        ),
                      ),
                    ),
                  for (final r in store.items) ...[
                    _RevisionCard(
                      r: r,
                      onOpen: () => _push(GuidePage(store: store, revision: r)),
                      onDelete: () => _confirmDelete(r),
                    ),
                    const SizedBox(height: 8),
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

class _Tile extends StatelessWidget {
  final IconData icon;
  final String label;
  final VoidCallback onTap;
  const _Tile({required this.icon, required this.label, required this.onTap});

  @override
  Widget build(BuildContext context) {
    return Card(
      child: InkWell(
        borderRadius: BorderRadius.circular(16),
        onTap: onTap,
        child: Padding(
          padding: const EdgeInsets.symmetric(vertical: 16, horizontal: 8),
          child: Column(children: [
            Icon(icon, color: Brand.blu, size: 28),
            const SizedBox(height: 8),
            Text(label,
                textAlign: TextAlign.center,
                maxLines: 2,
                overflow: TextOverflow.ellipsis,
                style: Brand.sora(12.5, 600, color: Brand.inchiostro)),
          ]),
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
