import 'package:flutter/material.dart';

import '../data/calibers.dart';
import '../logic/caliber_match.dart';
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
  final _code = TextEditingController();
  late Caliber _cal = widget.preset ?? calibers.first;
  late bool _date = _cal.hasDate;
  late bool _chosen = widget.preset != null;
  List<CaliberGuess> _typed = [];
  bool _showList = false;

  @override
  void dispose() {
    _name.dispose();
    _code.dispose();
    super.dispose();
  }

  void _pick(Caliber c) => setState(() {
        _cal = c;
        _date = c.hasDate;
        _chosen = true;
        _showList = false;
      });

  String _codeName() {
    final t = _code.text.trim();
    return RegExp(r'\d').hasMatch(t) ? 'Calibro ${t.toUpperCase()}' : t;
  }

  void _search(String t) {
    setState(() => _typed = t.trim().length < 2 ? [] : matchEngravings(t).guesses.take(6).toList());
  }

  Future<void> _photoPick() async {
    final c = await Navigator.push<Caliber>(context, MaterialPageRoute(builder: (_) => const RecognizePage()));
    if (c != null) _pick(c);
  }

  Future<void> _questions() async {
    final c = await Navigator.push<Caliber>(context, MaterialPageRoute(builder: (_) => const IdentifyPage()));
    if (c != null) _pick(c);
  }

  Future<void> _start() async {
    final name = _name.text.trim().isEmpty ? 'Il mio orologio' : _name.text.trim();
    final r = Revision(
      id: DateTime.now().millisecondsSinceEpoch.toString(),
      watchName: name,
      caliberId: _cal.custom ? (_cal.type == WindType.manual ? 'generic_manual' : 'generic_auto') : _cal.id,
      custom: _cal.custom ? _cal : null,
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

  Widget _stepLabel(int n, String t) => Padding(
        padding: const EdgeInsets.only(bottom: 10),
        child: Row(children: [
          Container(
            width: 30,
            height: 30,
            alignment: Alignment.center,
            decoration: const BoxDecoration(color: Brand.blu, shape: BoxShape.circle),
            child: Text('$n', style: Brand.sora(14, 800, color: Colors.white)),
          ),
          const SizedBox(width: 10),
          Expanded(child: Text(t, style: Brand.sora(18, 800, color: Brand.inchiostro))),
        ]),
      );

  Widget _choice(IconData icon, String title, String sub, VoidCallback onTap) => Padding(
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
            subtitle: Text(sub),
            trailing: const Icon(Icons.chevron_right, color: Brand.blu),
            onTap: onTap,
          ),
        ),
      );

  @override
  Widget build(BuildContext context) {
    final steps = stepsFor(_cal.type, _date).length;
    return Scaffold(
      appBar: AppBar(title: const Text('Nuova revisione')),
      body: ListView(
        padding: const EdgeInsets.fromLTRB(16, 4, 16, 24),
        children: [
          _stepLabel(1, 'Come lo chiamiamo?'),
          TextField(
            controller: _name,
            textCapitalization: TextCapitalization.sentences,
            style: const TextStyle(fontSize: 18),
            decoration: const InputDecoration(hintText: 'es. Seiko del nonno'),
          ),
          const SizedBox(height: 24),
          _stepLabel(2, 'Che movimento ha?'),
          if (_chosen) ...[
            Card(
              color: Brand.verdeChiaro,
              child: Padding(
                padding: const EdgeInsets.fromLTRB(16, 14, 8, 14),
                child: Row(children: [
                  const Icon(Icons.check_circle, color: Brand.blu, size: 30),
                  const SizedBox(width: 12),
                  Expanded(
                    child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
                      Text(_cal.name, style: Brand.sora(18, 800, color: Brand.inchiostro)),
                      const SizedBox(height: 2),
                      Text(
                          _cal.custom
                              ? '${_cal.summary} · non in archivio: sequenza universale'
                              : _cal.generic
                                  ? 'Sequenza universale, va bene per quasi tutti'
                                  : _cal.summary,
                          style: const TextStyle(fontSize: 15)),
                    ]),
                  ),
                  TextButton(onPressed: () => setState(() => _chosen = false), child: const Text('Cambia')),
                ]),
              ),
            ),
            const SizedBox(height: 10),
            SwitchListTile(
              value: _date,
              onChanged: (v) => setState(() => _date = v),
              title: const Text('Ha la data'),
              subtitle: const Text('Aggiunge il passo del calendario'),
              contentPadding: EdgeInsets.zero,
            ),
            Text('$steps passi, ognuno con le immagini e la spiegazione dei pezzi.',
                style: TextStyle(fontSize: 15, color: Brand.inchiostro.withValues(alpha: 0.7))),
          ] else ...[
            Text('Scegli il modo più comodo:', style: TextStyle(fontSize: 16, color: Brand.inchiostro.withValues(alpha: 0.75))),
            const SizedBox(height: 10),
            _choice(Icons.photo_camera_outlined, 'Fotografa il movimento', 'Leggo io il numero inciso sui ponti', _photoPick),
            Card(
              child: Padding(
                padding: const EdgeInsets.fromLTRB(14, 12, 14, 12),
                child: Column(crossAxisAlignment: CrossAxisAlignment.stretch, children: [
                  Row(children: [
                    Container(
                      width: 46,
                      height: 46,
                      decoration: BoxDecoration(color: Brand.verdeChiaro, borderRadius: BorderRadius.circular(14)),
                      child: const Icon(Icons.keyboard_outlined, color: Brand.blu, size: 26),
                    ),
                    const SizedBox(width: 14),
                    const Expanded(
                      child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
                        Text('Scrivi il numero inciso', style: TextStyle(fontSize: 17, fontWeight: FontWeight.w600)),
                        Text('es. NH35, 2824, 2609, oppure la marca: Raketa, Yema…', style: TextStyle(fontSize: 14.5, color: Color(0xFF4A6460))),
                      ]),
                    ),
                  ]),
                  const SizedBox(height: 10),
                  TextField(
                    controller: _code,
                    onChanged: _search,
                    textCapitalization: TextCapitalization.characters,
                    style: const TextStyle(fontSize: 18),
                    decoration: InputDecoration(
                      hintText: 'Numero del calibro',
                      fillColor: Colors.white,
                      prefixIcon: const Icon(Icons.search),
                      suffixIcon: _code.text.isEmpty
                          ? null
                          : IconButton(
                              onPressed: () {
                                _code.clear();
                                _search('');
                              },
                              icon: const Icon(Icons.close)),
                    ),
                  ),
                  for (final g in _typed)
                    ListTile(
                      contentPadding: EdgeInsets.zero,
                      leading: const Icon(Icons.memory, color: Brand.blu),
                      title: Text(g.caliber.name),
                      subtitle: Text(g.caliber.summary, maxLines: 2, overflow: TextOverflow.ellipsis),
                      trailing: FilledButton(
                        style: FilledButton.styleFrom(minimumSize: const Size(48, 42)),
                        onPressed: () => _pick(g.caliber),
                        child: const Text('Questo'),
                      ),
                    ),
                  if (_code.text.trim().length >= 2 && _typed.every((g) => g.score < 0.7)) ...[
                    Padding(
                      padding: const EdgeInsets.only(top: 8, bottom: 8),
                      child: Text(
                        _typed.isEmpty
                            ? 'Non è nel mio archivio. Nessun problema: lo tengo col suo nome e ti guido con la sequenza '
                                'universale, che va bene per quasi tutti i movimenti meccanici. Si carica:'
                            : 'Se non è nessuno di questi, lo tengo col suo nome e uso la sequenza universale. Si carica:',
                        style: TextStyle(fontSize: 15, height: 1.4, color: Brand.inchiostro.withValues(alpha: 0.8)),
                      ),
                    ),
                    Row(children: [
                      Expanded(
                        child: OutlinedButton(
                          onPressed: () => _pick(Caliber.unknown(name: _codeName(), automatic: true)),
                          child: const Text('Da solo'),
                        ),
                      ),
                      const SizedBox(width: 8),
                      Expanded(
                        child: OutlinedButton(
                          onPressed: () => _pick(Caliber.unknown(name: _codeName(), automatic: false)),
                          child: const Text('A mano'),
                        ),
                      ),
                    ]),
                  ],
                ]),
              ),
            ),
            const SizedBox(height: 8),
            _choice(Icons.quiz_outlined, 'Non trovo il numero', 'Rispondi a qualche domanda facile', _questions),
            Card(
              child: Padding(
                padding: const EdgeInsets.fromLTRB(14, 12, 14, 14),
                child: Column(crossAxisAlignment: CrossAxisAlignment.stretch, children: [
                  const Text('Vado con la sequenza universale', style: TextStyle(fontSize: 17, fontWeight: FontWeight.w600)),
                  const Text('Va bene per quasi tutti i movimenti. Il tuo orologio si carica:',
                      style: TextStyle(fontSize: 14.5, color: Color(0xFF4A6460))),
                  const SizedBox(height: 10),
                  Row(children: [
                    Expanded(
                      child: OutlinedButton(
                        onPressed: () => _pick(caliberById('generic_auto')),
                        child: const Text('Da solo'),
                      ),
                    ),
                    const SizedBox(width: 8),
                    Expanded(
                      child: OutlinedButton(
                        onPressed: () => _pick(caliberById('generic_manual')),
                        child: const Text('A mano'),
                      ),
                    ),
                  ]),
                ]),
              ),
            ),
            TextButton.icon(
              onPressed: () => setState(() => _showList = !_showList),
              icon: Icon(_showList ? Icons.expand_less : Icons.expand_more),
              label: Text(_showList ? 'Nascondi l\'elenco' : 'Scegli dall\'elenco dei calibri'),
            ),
            if (_showList)
              for (final c in calibers)
                Padding(
                  padding: const EdgeInsets.only(bottom: 6),
                  child: Card(
                    child: ListTile(
                      onTap: () => _pick(c),
                      title: Text(c.name),
                      subtitle: Text(c.generic ? 'Sequenza universale' : c.summary, maxLines: 2, overflow: TextOverflow.ellipsis),
                    ),
                  ),
                ),
          ],
        ],
      ),
      bottomNavigationBar: SafeArea(
        child: Padding(
          padding: const EdgeInsets.fromLTRB(16, 8, 16, 12),
          child: FilledButton.icon(
            onPressed: _chosen ? _start : null,
            icon: const Icon(Icons.play_arrow),
            label: Text(_chosen ? 'Inizia la revisione' : 'Prima scegli il movimento'),
          ),
        ),
      ),
    );
  }
}
