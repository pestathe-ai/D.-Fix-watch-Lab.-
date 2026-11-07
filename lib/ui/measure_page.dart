import 'dart:async';
import 'dart:typed_data';

import 'package:flutter/material.dart';
import 'package:record/record.dart';

import '../data/calibers.dart';
import '../logic/beat_analyzer.dart';
import 'theme.dart';

/// Misura col microfono: frequenza, marcia indicativa ed errore di battuta.
/// Restituisce il BeatResult (se l'utente lo salva) con Navigator.pop.
class MeasurePage extends StatefulWidget {
  final bool allowSave;
  final String saveLabel;
  const MeasurePage({super.key, this.allowSave = false, this.saveLabel = 'Salva nella revisione'});

  @override
  State<MeasurePage> createState() => _MeasurePageState();
}

class _MeasurePageState extends State<MeasurePage> {
  static const _seconds = 15;
  static const _rate = 44100;

  final _rec = AudioRecorder();
  StreamSubscription<Uint8List>? _sub;
  final _bytes = BytesBuilder(copy: false);
  Timer? _ticker;
  int _elapsed = 0;
  bool _recording = false;
  String? _error;
  BeatResult? _result;

  @override
  void dispose() {
    _ticker?.cancel();
    _sub?.cancel();
    _rec.dispose();
    super.dispose();
  }

  Future<void> _start() async {
    setState(() {
      _error = null;
      _result = null;
      _elapsed = 0;
    });
    try {
      if (!await _rec.hasPermission()) {
        setState(() => _error = 'Serve il permesso del microfono per ascoltare il ticchettio.');
        return;
      }
      _bytes.clear();
      final stream = await _rec.startStream(const RecordConfig(
        encoder: AudioEncoder.pcm16bits,
        sampleRate: _rate,
        numChannels: 1,
        autoGain: false,
        echoCancel: false,
        noiseSuppress: false,
      ));
      _sub = stream.listen(_bytes.add);
      setState(() => _recording = true);
      _ticker = Timer.periodic(const Duration(seconds: 1), (t) {
        setState(() => _elapsed++);
        if (_elapsed >= _seconds) _stop();
      });
    } catch (e) {
      setState(() {
        _recording = false;
        _error = 'Non riesco ad usare il microfono ($e).';
      });
    }
  }

  Future<void> _stop() async {
    _ticker?.cancel();
    await _rec.stop();
    await _sub?.cancel();
    _sub = null;
    final samples = pcmBytesToSamples(_bytes.takeBytes());
    // Salta il primo mezzo secondo (rumore di avvio).
    final start = (_rate * 0.5).toInt().clamp(0, samples.length);
    final res = analyzeBeats(Int16List.sublistView(samples, start), _rate);
    if (!mounted) return;
    setState(() {
      _recording = false;
      _result = res;
      if (res == null) {
        _error = 'Non ho sentito un ticchettio chiaro. Riprova in una stanza più silenziosa.';
      }
    });
  }

  @override
  Widget build(BuildContext context) {
    final r = _result;
    return Scaffold(
      appBar: AppBar(title: const Text('Misura col microfono')),
      body: ListView(
        padding: const EdgeInsets.fromLTRB(16, 4, 16, 32),
        children: [
          const InfoBox(
            icon: Icons.hearing,
            title: 'Come fare',
            text:
                'Stanza silenziosa. Appoggia l\'orologio carico (o il movimento) con il fondello sul microfono '
                'del telefono, di solito in basso vicino alla presa. Non toccarlo durante la misura. '
                'Un microfono a contatto da pochi euro migliora molto il risultato.',
            color: Brand.blu,
          ),
          const SizedBox(height: 20),
          Center(
            child: SizedBox(
              width: 170,
              height: 170,
              child: Stack(
                alignment: Alignment.center,
                children: [
                  SizedBox.expand(
                    child: CircularProgressIndicator(
                      value: _recording ? _elapsed / _seconds : 0,
                      strokeWidth: 10,
                      backgroundColor: Brand.blu.withValues(alpha: 0.1),
                      color: Brand.arancio,
                    ),
                  ),
                  Text(
                    _recording ? '${_seconds - _elapsed}s' : 'Pronto',
                    style: Brand.sora(28, 800, color: Brand.inchiostro),
                  ),
                ],
              ),
            ),
          ),
          const SizedBox(height: 20),
          FilledButton.icon(
            onPressed: _recording ? null : _start,
            icon: const Icon(Icons.mic),
            label: Text(_recording ? 'Sto ascoltando…' : 'Avvia misura (15 secondi)'),
          ),
          if (_error != null) ...[
            const SizedBox(height: 16),
            InfoBox(icon: Icons.error_outline, title: 'Attenzione', text: _error!, color: Colors.red.shade700),
          ],
          if (r != null) ...[
            const SizedBox(height: 20),
            _ResultCard(result: r),
            const SizedBox(height: 12),
            InfoBox(
              icon: Icons.info_outline,
              title: 'Quanto fidarsi',
              text: r.reliable
                  ? 'La frequenza è affidabile. Marcia ed errore di battuta sono indicativi: con il microfono '
                      'del telefono considera un margine di qualche decina di secondi al giorno.'
                  : 'Il segnale era debole o disturbato: la frequenza potrebbe essere giusta, gli altri numeri no. '
                      'Riprova più vicino al microfono e in silenzio.',
              color: r.reliable ? Brand.blu : Brand.arancio,
            ),
            if (widget.allowSave) ...[
              const SizedBox(height: 16),
              OutlinedButton.icon(
                onPressed: () => Navigator.pop(context, r),
                icon: const Icon(Icons.save_alt),
                label: Text(widget.saveLabel),
              ),
            ],
          ],
        ],
      ),
    );
  }
}

class _ResultCard extends StatelessWidget {
  final BeatResult result;
  const _ResultCard({required this.result});

  @override
  Widget build(BuildContext context) {
    final rate = result.rateSecPerDay;
    final sign = rate >= 0 ? '+' : '';
    final rateText = result.reliable ? '$sign${rate.toStringAsFixed(0)} s/g' : '—';
    final beText = result.reliable ? '${result.beatErrorMs.toStringAsFixed(1)} ms' : '—';
    return Card(
      child: Padding(
        padding: const EdgeInsets.all(16),
        child: Column(
          children: [
            _row('Frequenza', '${formatBph(result.bph)} alt/h  (${result.hz.toStringAsFixed(result.hz % 1 == 0 ? 0 : 1)} Hz)'),
            const Divider(),
            _row('Marcia', rateText, hint: rate >= 0 ? 'avanza' : 'ritarda'),
            const Divider(),
            _row('Errore di battuta', beText, hint: 'ideale sotto 1 ms'),
            const Divider(),
            _row('Qualità del segnale', '${(result.quality * 100).toStringAsFixed(0)}%'),
          ],
        ),
      ),
    );
  }

  Widget _row(String k, String v, {String? hint}) => Padding(
        padding: const EdgeInsets.symmetric(vertical: 6),
        child: Row(
          children: [
            Expanded(
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text(k, style: const TextStyle(fontSize: 15)),
                  if (hint != null)
                    Text(hint, style: TextStyle(fontSize: 12, color: Brand.inchiostro.withValues(alpha: 0.55))),
                ],
              ),
            ),
            Flexible(
              child: Text(v,
                  textAlign: TextAlign.right,
                  overflow: TextOverflow.ellipsis,
                  style: Brand.sora(16, 700, color: Brand.inchiostro)),
            ),
          ],
        ),
      );
}
