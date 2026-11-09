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
  String? _aiNote;
  bool _aiOn = false;
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
    setState(() {
      _photo = x.path;
      _busy = true;
      _status = 'Leggo le scritte incise sul movimento…';
      _guesses = [];
      _ocrText = null;
      _aiNote = null;
      _jewels = null;
    });
    final merged = <String, CaliberGuess>{};
    try {
      final rec = TextRecognizer(script: TextRecognitionScript.latin);
      final texts = <String>[];
      final first = await rec.processImage(InputImage.fromFilePath(x.path));
      texts.add(first.text);
      // se non basta, rileggo la foto ruotata e con più contrasto
      if (matchEngravings(first.text).guesses.every((g) => g.score < 0.8)) {
        if (mounted) setState(() => _status = 'Rileggo la foto da altre angolazioni…');
        try {
          final dir = (await getTemporaryDirectory()).path;
          for (final v in await ocrVariants(x.path, dir)) {
            final r = await rec.processImage(InputImage.fromFilePath(v));
            if (r.text.trim().isNotEmpty) texts.add(r.text);
            if (matchEngravings(texts.join('\n')).guesses.any((g) => g.score >= 0.85)) break;
          }
        } catch (e) {
          debugPrint('OCR varianti: $e');
        }
      }
      await rec.close();
      final all = texts.join('\n');
      final info = matchEngravings(all);
      _ocrText = texts.map((t) => t.trim()).where((t) => t.isNotEmpty).toSet().join('\n—\n');
      _jewels = info.jewels;
      for (final g in info.guesses) {
        merged[g.caliber.id] = g;
      }
    } catch (e) {
      _ocrText = null;
      debugPrint('OCR: $e');
      _aiNote = 'Non sono riuscito a leggere le scritte su questa foto. Riprova con più luce, '
          'oppure rispondi a qualche domanda qui sotto.';
    }
    final ai = await AiSettings.load();
    if (ai.enabled) {
      if (mounted) setState(() => _status = 'Chiedo all\'AI di riconoscere il movimento…');
      try {
        for (final g in await Gemini(ai).identify(x.path)) {
          final old = merged[g.caliber.id];
          if (old == null) {
            merged[g.caliber.id] = g;
          } else {
            merged[g.caliber.id] = CaliberGuess(
              g.caliber,
              (old.score + g.score) / 2 + 0.15 > 1 ? 1 : (old.score + g.score) / 2 + 0.15,
              [...old.why, ...g.why],
              source: 'scritte + AI',
            );
          }
        }
      } on AiException catch (e) {
        _aiNote = e.message;
      }
    }
    final list = merged.values.toList()..sort((a, b) => b.score.compareTo(a.score));
    if (mounted) {
      setState(() {
        _guesses = list;
        _busy = false;
      });
    }
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
                      Text(g.source, style: const TextStyle(fontSize: 11)),
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
          if (!_aiOn) ...[
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
