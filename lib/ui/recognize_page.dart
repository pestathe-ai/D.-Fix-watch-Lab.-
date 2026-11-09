import 'dart:io';

import 'package:flutter/material.dart';
import 'package:google_mlkit_text_recognition/google_mlkit_text_recognition.dart';
import 'package:image_picker/image_picker.dart';
import 'package:path_provider/path_provider.dart';

import '../data/calibers.dart';
import '../logic/caliber_match.dart';
import '../logic/gemini.dart';
import '../logic/ocr_prep.dart';
import 'ai_settings_page.dart';
import 'identify_page.dart';
import 'theme.dart';

/// Fotografa il movimento: legge le scritte incise (offline) e, se attiva, chiede all'AI.
/// Restituisce il Caliber scelto con Navigator.pop.
class RecognizePage extends StatefulWidget {
  const RecognizePage({super.key});

  @override
  State<RecognizePage> createState() => _RecognizePageState();
}

class _RecognizePageState extends State<RecognizePage> {
  String? _photo;
  bool _busy = false;
  String _status = '';
  String? _ocrText;
  List<CaliberGuess> _guesses = [];
  int? _jewels;
  String? _aiNote; // errore della lettura offline
  bool _aiOn = false;

  // stato dell'AI, sempre visibile sopra i risultati
  _Ai _ai = _Ai.off;
  String? _aiWhy; // perché non è stata usata
  String? _aiSaid; // cosa ha detto
  int _run = 0; // per ignorare risposte di foto vecchie
  List<CaliberGuess> _offline = [];
  List<CaliberGuess> _aiGuesses = [];
  final _clock = Stopwatch();
  final _code = TextEditingController();

  @override
  void dispose() {
    _code.dispose();
    super.dispose();
  }

  void _typed(String t) {
    final info = matchEngravings(t);
    setState(() {
      _guesses = info.guesses;
      if (_photo == null) _photo = '';
    });
  }

  @override
  void initState() {
    super.initState();
    AiSettings.load().then((s) {
      if (mounted) setState(() => _aiOn = s.enabled);
    });
  }

  Future<void> _shoot(ImageSource src) async {
    final x = await ImagePicker().pickImage(source: src, maxWidth: 2400, imageQuality: 92);
    if (x == null) return;
    final run = ++_run;
    _clock
      ..reset()
      ..start();
    setState(() {
      _photo = x.path;
      _busy = true;
      _status = 'Leggo le scritte incise sul movimento…';
      _guesses = [];
      _offline = [];
      _aiGuesses = [];
      _ocrText = null;
      _aiNote = null;
      _jewels = null;
      _aiSaid = null;
      _aiWhy = null;
    });
    // l'AI parte subito, in parallelo alla lettura offline
    final settings = await AiSettings.load();
    _aiOn = settings.enabled;
    if (settings.enabled) {
      _askAi(x.path, run, settings);
    } else {
      _ai = _Ai.off;
    }
    await _readOffline(x.path, run);
  }

  Future<void> _readOffline(String path, int run) async {
    try {
      final rec = TextRecognizer(script: TextRecognitionScript.latin);
      final texts = <String>[];
      final first = await rec.processImage(InputImage.fromFilePath(path));
      texts.add(first.text);
      // se non basta, rileggo la foto ruotata e con più contrasto
      if (matchEngravings(first.text).guesses.every((g) => g.score < 0.8)) {
        if (mounted && run == _run) setState(() => _status = 'Rileggo la foto girata e con più contrasto…');
        try {
          final dir = (await getTemporaryDirectory()).path;
          for (final v in await ocrVariants(path, dir)) {
            final r = await rec.processImage(InputImage.fromFilePath(v));
            if (r.text.trim().isNotEmpty) texts.add(r.text);
            if (matchEngravings(texts.join('\n')).guesses.any((g) => g.score >= 0.85)) break;
          }
        } catch (e) {
          debugPrint('OCR varianti: $e');
        }
      }
      await rec.close();
      final info = matchEngravings(texts.join('\n'));
      _ocrText = texts.map((t) => t.trim()).where((t) => t.isNotEmpty).toSet().join('\n—\n');
      _jewels = info.jewels;
      _offline = info.guesses;
    } catch (e) {
      debugPrint('OCR: $e');
      _ocrText = null;
      _aiNote = 'Non sono riuscito a leggere le scritte su questa foto. Riprova con più luce, '
          'oppure rispondi a qualche domanda qui sotto.';
    }
    if (!mounted || run != _run) return;
    setState(() {
      _busy = false;
      _merge();
    });
  }

  Future<void> _askAi(String path, int run, AiSettings settings) async {
    setState(() => _ai = _Ai.running);
    try {
      final g = await Gemini(settings).identify(path);
      if (!mounted || run != _run || _ai == _Ai.skipped) return;
      setState(() {
        _aiGuesses = g;
        _aiSaid = g.isEmpty ? null : g.first.caliber.name;
        _ai = _Ai.ok;
        _merge();
      });
    } on AiException catch (e) {
      if (!mounted || run != _run || _ai == _Ai.skipped) return;
      setState(() {
        _ai = _Ai.failed;
        _aiWhy = e.message;
      });
    } catch (e) {
      if (!mounted || run != _run || _ai == _Ai.skipped) return;
      setState(() {
        _ai = _Ai.failed;
        _aiWhy = 'Errore imprevisto ($e).';
      });
    }
  }

  void _retryAi() async {
    if (_photo == null || _photo!.isEmpty) return;
    final s = await AiSettings.load();
    if (!s.enabled) return;
    _aiGuesses = [];
    _askAi(_photo!, _run, s);
  }

  /// Unisce scritte e AI: se dicono la stessa cosa, la fiducia sale.
  void _merge() {
    final m = <String, CaliberGuess>{for (final g in _offline) g.caliber.id: g};
    for (final g in _aiGuesses) {
      final old = m[g.caliber.id];
      m[g.caliber.id] = old == null
          ? g
          : CaliberGuess(g.caliber, ((old.score + g.score) / 2 + 0.15).clamp(0.0, 1.0), [...old.why, ...g.why],
              source: 'scritte + AI');
    }
    _guesses = m.values.toList()..sort((a, b) => b.score.compareTo(a.score));
  }

  Widget _aiBanner() {
    final (IconData icon, Color color, String title, String text) = switch (_ai) {
      _Ai.running => (
          Icons.auto_awesome,
          Brand.blu,
          'L\'AI sta ancora controllando…',
          'Intanto ecco cosa ho letto dalle scritte. La lista si aggiorna da sola quando risponde.'
        ),
      _Ai.ok => (
          Icons.check_circle,
          Colors.green.shade700,
          'Controllato anche con l\'AI',
          _aiSaid == null ? 'Gemini non ha riconosciuto un calibro preciso.' : 'Gemini dice: $_aiSaid.'
        ),
      _Ai.failed => (
          Icons.warning_amber_rounded,
          Colors.orange.shade800,
          'AI non usata: risultati solo dalle scritte',
          _aiWhy ?? ''
        ),
      _Ai.skipped => (
          Icons.do_not_disturb_on_outlined,
          Colors.orange.shade800,
          'AI saltata: risultati solo dalle scritte',
          'Non hai aspettato la risposta di Gemini.'
        ),
      _Ai.off => (
          Icons.cloud_off,
          Colors.grey.shade700,
          'AI spenta: risultati solo dalle scritte',
          'Puoi attivare l\'AI gratuita: legge anche la forma dei ponti, non solo le scritte.'
        ),
    };
    return Container(
      padding: const EdgeInsets.fromLTRB(14, 12, 14, 8),
      decoration: BoxDecoration(
        color: color.withValues(alpha: 0.09),
        borderRadius: BorderRadius.circular(16),
        border: Border.all(color: color.withValues(alpha: 0.5), width: 1.5),
      ),
      child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
        Row(children: [
          if (_ai == _Ai.running)
            SizedBox(width: 22, height: 22, child: CircularProgressIndicator(strokeWidth: 2.5, color: color))
          else
            Icon(icon, color: color, size: 24),
          const SizedBox(width: 10),
          Expanded(child: Text(title, style: Brand.sora(15.5, 800, color: color))),
        ]),
        if (text.isNotEmpty) ...[
          const SizedBox(height: 4),
          Text(text, style: const TextStyle(fontSize: 15, height: 1.35)),
        ],
        Wrap(spacing: 4, children: [
          if (_ai == _Ai.running)
            TextButton(
              onPressed: () => setState(() => _ai = _Ai.skipped),
              child: const Text('Non aspettare'),
            ),
          if (_ai == _Ai.failed || _ai == _Ai.skipped)
            TextButton.icon(
              onPressed: _retryAi,
              icon: const Icon(Icons.refresh, size: 20),
              label: const Text('Riprova con l\'AI'),
            ),
          if (_ai == _Ai.off)
            TextButton.icon(
              onPressed: () async {
                await Navigator.push(context, MaterialPageRoute(builder: (_) => const AiSettingsPage()));
                final s = await AiSettings.load();
                if (mounted) setState(() => _aiOn = s.enabled);
                if (s.enabled) _retryAi();
              },
              icon: const Icon(Icons.auto_awesome, size: 20),
              label: const Text('Attiva l\'AI'),
            ),
        ]),
      ]),
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('Riconosci il movimento')),
      body: ListView(
        padding: const EdgeInsets.fromLTRB(16, 4, 16, 28),
        children: [
          InfoBox(
            icon: Icons.photo_camera_outlined,
            title: 'Come fotografare',
            text: 'Apri il fondello e fotografa il movimento dall\'alto, con tanta luce e senza riflessi. '
                'Avvicinati alle scritte incise (numero del calibro, "jewels"): più sono nitide, meglio le leggo. '
                '${_aiOn ? 'L\'AI è attiva: controllerà anche lei.' : 'Funziona offline; puoi attivare l\'AI gratuita nelle impostazioni.'}',
            color: Brand.blu,
          ),
          const SizedBox(height: 12),
          if (_photo != null && _photo!.isNotEmpty)
            ClipRRect(
              borderRadius: BorderRadius.circular(14),
              child: Image.file(File(_photo!), height: 240, fit: BoxFit.cover),
            ),
          const SizedBox(height: 12),
          if (_busy)
            Row(children: [
              const SizedBox(width: 22, height: 22, child: CircularProgressIndicator(strokeWidth: 2.5)),
              const SizedBox(width: 12),
              Expanded(child: Text(_status)),
            ])
          else
            Row(children: [
              Expanded(
                child: FilledButton.icon(
                  onPressed: () => _shoot(ImageSource.camera),
                  icon: const Icon(Icons.photo_camera),
                  label: Text(_photo == null || _photo!.isEmpty ? 'Scatta la foto' : 'Rifai la foto'),
                ),
              ),
              const SizedBox(width: 8),
              OutlinedButton.icon(
                onPressed: () => _shoot(ImageSource.gallery),
                icon: const Icon(Icons.photo_library_outlined),
                label: const Text('Galleria'),
              ),
            ]),
          if (!_busy && _photo != null && _photo!.isNotEmpty) ...[
            const SizedBox(height: 14),
            _aiBanner(),
          ],
          if (!_busy && _photo != null) ...[
            const SizedBox(height: 18),
            Text(_guesses.isEmpty ? 'Non l\'ho riconosciuto' : 'Potrebbe essere',
                style: Brand.sora(17, 800, color: Brand.inchiostro)),
            const SizedBox(height: 8),
            for (final g in _guesses.take(5))
              Padding(
                padding: const EdgeInsets.only(bottom: 8),
                child: Card(
                  child: ListTile(
                    title: Text(g.caliber.name, style: Brand.sora(15, 700, color: Brand.inchiostro)),
                    subtitle: Text('${g.caliber.summary}\n${g.why.join(' · ')}'),
                    isThreeLine: true,
                    trailing: Column(mainAxisAlignment: MainAxisAlignment.center, children: [
                      Text('${(g.score * 100).round()}%', style: Brand.sora(15, 800, color: Brand.arancio)),
                      Text(g.source == 'AI' ? 'dall\'AI' : g.source == 'scritte' ? 'dalle scritte' : g.source,
                          style: const TextStyle(fontSize: 11.5)),
                    ]),
                    onTap: () => Navigator.pop(context, g.caliber),
                  ),
                ),
              ),
            if (_guesses.isEmpty)
              Text(
                (_ocrText == null || _ocrText!.isEmpty)
                    ? 'Non ho trovato scritte leggibili nella foto. Avvicinati alle scritte incise sui ponti '
                        '(numero del calibro, "JEWELS"), con luce laterale e senza riflessi. Oppure scrivi tu il numero qui sotto.'
                    : 'Ho letto delle scritte (le trovi in fondo) ma nessun calibro del mio archivio. '
                        'Se vedi il numero, scrivilo qui sotto; altrimenti usa le domande o la sequenza universale.'
                        '${_jewels != null ? ' Ho letto $_jewels rubini.' : ''}',
                style: const TextStyle(fontSize: 15, height: 1.4),
              ),
            const SizedBox(height: 6),
            TextField(
              controller: _code,
              onChanged: _typed,
              textCapitalization: TextCapitalization.characters,
              style: const TextStyle(fontSize: 18),
              decoration: const InputDecoration(
                labelText: 'Leggi tu il numero? Scrivilo qui',
                hintText: 'es. NH35, 2824, 6R15',
                prefixIcon: Icon(Icons.keyboard_outlined),
              ),
            ),
            if (_aiNote != null) ...[
              const SizedBox(height: 8),
              Text(_aiNote!, style: TextStyle(fontSize: 13, color: Colors.red.shade700)),
            ],
            const SizedBox(height: 10),
            OutlinedButton.icon(
              onPressed: () async {
                final c = await Navigator.push<Caliber>(context, MaterialPageRoute(builder: (_) => const IdentifyPage()));
                if (c != null && context.mounted) Navigator.pop(context, c);
              },
              icon: const Icon(Icons.quiz_outlined),
              label: const Text('Rispondi a qualche domanda'),
            ),
            if (_ocrText != null && _ocrText!.isNotEmpty) ...[
              const SizedBox(height: 10),
              Theme(
                data: Theme.of(context).copyWith(dividerColor: Colors.transparent),
                child: ExpansionTile(
                  initiallyExpanded: _guesses.isEmpty,
                  tilePadding: EdgeInsets.zero,
                  title: const Text('Testo letto sulla foto', style: TextStyle(fontSize: 15)),
                  children: [SelectableText(_ocrText!)],
                ),
              ),
            ],
          ],
          if (!_aiOn && _photo == null) ...[
            const SizedBox(height: 12),
            TextButton.icon(
              onPressed: () async {
                await Navigator.push(context, MaterialPageRoute(builder: (_) => const AiSettingsPage()));
                final s = await AiSettings.load();
                if (mounted) setState(() => _aiOn = s.enabled);
              },
              icon: const Icon(Icons.auto_awesome),
              label: const Text('Attiva l\'AI gratuita (facoltativa)'),
            ),
          ],
        ],
      ),
    );
  }
}

enum _Ai { off, running, ok, failed, skipped }
