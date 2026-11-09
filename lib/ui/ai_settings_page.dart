
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';

import '../logic/gemini.dart';
import 'theme.dart';

/// Impostazioni dell'AI facoltativa (Google Gemini, livello gratuito).
class AiSettingsPage extends StatefulWidget {
  const AiSettingsPage({super.key});

  @override
  State<AiSettingsPage> createState() => _AiSettingsPageState();
}

class _AiSettingsPageState extends State<AiSettingsPage> {
  final _key = TextEditingController();
  final _model = TextEditingController();
  bool _show = false;
  bool _testing = false;
  String? _result;
  bool _ok = false;

  @override
  void initState() {
    super.initState();
    AiSettings.load().then((s) {
      if (!mounted) return;
      setState(() {
        _key.text = s.key;
        _model.text = s.model;
      });
    });
  }

  @override
  void dispose() {
    _key.dispose();
    _model.dispose();
    super.dispose();
  }

  Future<void> _save() async {
    await AiSettings.save(_key.text, _model.text);
    if (!mounted) return;
    ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text('Impostazioni salvate')));
  }

  /// Prova la chiave con una piccola richiesta di solo testo.
  Future<void> _test() async {
    await AiSettings.save(_key.text, _model.text);
    setState(() {
      _testing = true;
      _result = null;
    });
    final s = await AiSettings.load();
    try {
      final (code, _, model) = await Gemini.post(s, '{"contents":[{"parts":[{"text":"Rispondi solo: ok"}]}]}');
      _ok = code == 200;
      if (model != s.model) _model.text = model;
      _result = switch (code) {
        200 => model != s.model
            ? 'Funziona! Il modello di prima non esiste più, ho scelto io "$model".'
            : 'Funziona! L\'AI verrà usata nel riconoscimento (modello "$model").',
        429 => 'La chiave è valida ma hai raggiunto il limite gratuito per ora. Riprova più tardi.',
        400 || 401 || 403 => 'Chiave non valida (codice $code). Ricontrollala: deve iniziare con "AIza" o "AQ.".',
        404 => 'Non trovo un modello disponibile per questa chiave. Riprova più tardi.',
        _ => 'Errore $code.',
      };
    } catch (e) {
      _ok = false;
      _result = 'Nessuna risposta: controlla la connessione a internet.';
    }
    if (mounted) setState(() => _testing = false);
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('AI facoltativa')),
      body: ListView(
        padding: const EdgeInsets.fromLTRB(16, 4, 16, 28),
        children: [
          const InfoBox(
            icon: Icons.auto_awesome,
            title: 'A cosa serve',
            text: 'L\'app funziona già da sola, offline e gratis. Se inserisci una chiave gratuita di Google Gemini, '
                'per riconoscere il calibro e trovare le viti sulle tue foto chiede anche all\'AI, che è più precisa.',
            color: Brand.blu,
          ),
          const SizedBox(height: 10),
          InfoBox(
            icon: Icons.privacy_tip_outlined,
            title: 'Da sapere',
            text: '• Serve internet.\n'
                '• Il livello gratuito ha un limite di richieste: se lo superi, l\'app usa il riconoscimento offline.\n'
                '• Nel livello gratuito Google può usare i contenuti inviati (le tue foto) per migliorare i suoi prodotti.\n'
                '• La chiave resta salvata solo su questo telefono.',
            color: Brand.arancio,
          ),
          const SizedBox(height: 16),
          Text('Come avere la chiave gratuita', style: Brand.sora(15, 800, color: Brand.inchiostro)),
          const SizedBox(height: 6),
          const Text(
            '1. Apri Google AI Studio (aistudio.google.com) con il tuo account Google.\n'
            '2. Vai su "Get API key" e crea una chiave.\n'
            '3. Copiala e incollala qui sotto.',
            style: TextStyle(fontSize: 15, height: 1.5),
          ),
          TextButton.icon(
            onPressed: () {
              Clipboard.setData(const ClipboardData(text: 'https://aistudio.google.com/apikey'));
              ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text('Indirizzo copiato: incollalo nel browser')));
            },
            icon: const Icon(Icons.copy, size: 18),
            label: const Text('Copia l\'indirizzo di AI Studio'),
          ),
          const SizedBox(height: 8),
          TextField(
            controller: _key,
            obscureText: !_show,
            autocorrect: false,
            decoration: InputDecoration(
              labelText: 'Chiave API di Gemini',
              filled: true,
              fillColor: Brand.tenue,
              border: OutlineInputBorder(borderRadius: BorderRadius.circular(14), borderSide: BorderSide.none),
              suffixIcon: IconButton(
                onPressed: () => setState(() => _show = !_show),
                icon: Icon(_show ? Icons.visibility_off : Icons.visibility),
              ),
            ),
          ),
          const SizedBox(height: 10),
          ExpansionTile(
            tilePadding: EdgeInsets.zero,
            title: const Text('Avanzate: modello', style: TextStyle(fontSize: 15)),
            children: [
              TextField(
                controller: _model,
                autocorrect: false,
                decoration: InputDecoration(
                  labelText: 'Modello',
                  helperText: 'Lascia "${AiSettings.defaultModel}": se un modello sparisce, l\'app ne sceglie un altro da sola',
                  helperMaxLines: 2,
                ),
              ),
              const SizedBox(height: 6),
              Align(
                alignment: Alignment.centerLeft,
                child: TextButton(
                  onPressed: () => setState(() => _model.text = AiSettings.defaultModel),
                  child: const Text('Rimetti quello consigliato'),
                ),
              ),
            ],
          ),
          const SizedBox(height: 16),
          Row(children: [
            Expanded(
              child: OutlinedButton(onPressed: _testing ? null : _test, child: Text(_testing ? 'Provo…' : 'Prova la chiave')),
            ),
            const SizedBox(width: 10),
            Expanded(child: FilledButton(onPressed: _save, child: const Text('Salva'))),
          ]),
          if (_result != null) ...[
            const SizedBox(height: 12),
            InfoBox(
              icon: _ok ? Icons.check_circle_outline : Icons.error_outline,
              title: _ok ? 'Tutto ok' : 'Qualcosa non va',
              text: _result!,
              color: _ok ? Colors.green : Colors.red.shade700,
            ),
          ],
          const SizedBox(height: 16),
          TextButton(
            onPressed: () async {
              _key.clear();
              await AiSettings.save('', _model.text);
              if (mounted) setState(() => _result = null);
            },
            child: const Text('Disattiva l\'AI (cancella la chiave)'),
          ),
        ],
      ),
    );
  }
}
