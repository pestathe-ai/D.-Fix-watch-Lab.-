import 'package:flutter/material.dart';

import '../data/calibers.dart';
import '../logic/revision.dart';
import '../logic/store.dart';
import 'guide_page.dart';
import 'identify_page.dart';
import 'recognize_page.dart';
import 'theme.dart';

class NewRevisionPage extends StatefulWidget {
  final RevisionStore store;
  final Caliber? preset;
  const NewRevisionPage({super.key, required this.store, this.preset});

  @override
  State<NewRevisionPage> createState() => _NewRevisionPageState();
}

class _NewRevisionPageState extends State<NewRevisionPage> {
  final _name = TextEditingController();
  late Caliber _cal = widget.preset ?? calibers.first;
  late bool _date = _cal.hasDate;

  @override
  void dispose() {
    _name.dispose();
    super.dispose();
  }

  void _pick(Caliber c) => setState(() {
        _cal = c;
        _date = c.hasDate;
      });

  Future<void> _start() async {
    final name = _name.text.trim().isEmpty ? 'Il mio orologio' : _name.text.trim();
    final r = Revision(
      id: DateTime.now().millisecondsSinceEpoch.toString(),
      watchName: name,
      caliberId: _cal.id,
      hasDate: _date,
      started: DateTime.now(),
    );
    await widget.store.add(r);
    if (!mounted) return;
    Navigator.pushReplacement(
      context,
      MaterialPageRoute(builder: (_) => GuidePage(store: widget.store, revision: r)),
    );
  }

  @override
  Widget build(BuildContext context) {
    final steps = stepsFor(_cal.type, _date).length;
    return Scaffold(
      appBar: AppBar(title: const Text('Nuova revisione')),
      body: ListView(
        padding: const EdgeInsets.fromLTRB(16, 4, 16, 24),
        children: [
          TextField(
            controller: _name,
            textCapitalization: TextCapitalization.sentences,
            decoration: InputDecoration(
              labelText: 'Nome dell\'orologio',
              hintText: 'es. Seiko del nonno',
              filled: true,
              fillColor: Colors.white,
              border: OutlineInputBorder(borderRadius: BorderRadius.circular(14), borderSide: BorderSide.none),
            ),
          ),
          const SizedBox(height: 16),
          FilledButton.icon(
            onPressed: () async {
              final c = await Navigator.push<Caliber>(context, MaterialPageRoute(builder: (_) => const RecognizePage()));
              if (c != null) _pick(c);
            },
            style: FilledButton.styleFrom(backgroundColor: Brand.arancio),
            icon: const Icon(Icons.photo_camera),
            label: const Text('Riconosci il movimento da una foto'),
          ),
          const SizedBox(height: 16),
          Row(children: [
            Expanded(child: Text('Calibro', style: Brand.sora(16, 800, color: Brand.inchiostro))),
            TextButton.icon(
              onPressed: () async {
                final c = await Navigator.push<Caliber>(
                  context,
                  MaterialPageRoute(builder: (_) => const IdentifyPage()),
                );
                if (c != null) _pick(c);
              },
              icon: const Icon(Icons.search, size: 18),
              label: const Text('Non lo so'),
            ),
          ]),
          const SizedBox(height: 6),
          for (final c in calibers)
            Padding(
              padding: const EdgeInsets.only(bottom: 8),
              child: Card(
                color: c.id == _cal.id ? Brand.blu.withValues(alpha: 0.08) : Colors.white,
                child: ListTile(
                  onTap: () => _pick(c),
                  leading: Icon(
                    c.id == _cal.id ? Icons.radio_button_checked : Icons.radio_button_off,
                    color: Brand.blu,
                  ),
                  title: Text(c.name, style: Brand.sora(15, 700, color: Brand.inchiostro)),
                  subtitle: Text(c.generic ? 'Sequenza universale, va bene per quasi tutti' : c.summary),
                ),
              ),
            ),
          const SizedBox(height: 8),
          SwitchListTile(
            value: _date,
            onChanged: (v) => setState(() => _date = v),
            title: const Text('Ha la data'),
            subtitle: const Text('Aggiunge il passo del calendario'),
            contentPadding: EdgeInsets.zero,
          ),
          const SizedBox(height: 10),
          Text('$steps passi, con spiegazione di ogni pezzo.',
              style: TextStyle(color: Brand.inchiostro.withValues(alpha: 0.7))),
        ],
      ),
      bottomNavigationBar: SafeArea(
        child: Padding(
          padding: const EdgeInsets.fromLTRB(16, 8, 16, 12),
          child: FilledButton.icon(
            onPressed: _start,
            icon: const Icon(Icons.play_arrow),
            label: const Text('Inizia la revisione'),
          ),
        ),
      ),
    );
  }
}
