import 'dart:async';

import 'package:flutter/material.dart';
import 'package:flutter/services.dart';

import 'theme.dart';

/// Timer per i bagni di pulizia.
class StepTimer extends StatefulWidget {
  final int seconds;
  const StepTimer({super.key, required this.seconds});

  @override
  State<StepTimer> createState() => _StepTimerState();
}

class _StepTimerState extends State<StepTimer> {
  late int _left = widget.seconds;
  Timer? _t;

  @override
  void didUpdateWidget(covariant StepTimer old) {
    super.didUpdateWidget(old);
    if (old.seconds != widget.seconds) {
      _t?.cancel();
      _t = null;
      _left = widget.seconds;
    }
  }

  @override
  void dispose() {
    _t?.cancel();
    super.dispose();
  }

  void _toggle() {
    if (_t != null) {
      _t!.cancel();
      setState(() => _t = null);
      return;
    }
    if (_left <= 0) _left = widget.seconds;
    _t = Timer.periodic(const Duration(seconds: 1), (t) {
      setState(() => _left--);
      if (_left <= 0) {
        t.cancel();
        setState(() => _t = null);
        _alarm();
      }
    });
    setState(() {});
  }

  Future<void> _alarm() async {
    for (var i = 0; i < 3; i++) {
      await HapticFeedback.heavyImpact();
      await SystemSound.play(SystemSoundType.alert);
      await Future<void>.delayed(const Duration(milliseconds: 400));
    }
  }

  String get _label {
    final m = (_left ~/ 60).toString().padLeft(2, '0');
    final s = (_left % 60).toString().padLeft(2, '0');
    return '$m:$s';
  }

  @override
  Widget build(BuildContext context) {
    final running = _t != null;
    final finished = _left <= 0;
    return Container(
      padding: const EdgeInsets.all(14),
      decoration: BoxDecoration(
        color: finished ? Brand.arancio.withValues(alpha: 0.18) : Colors.white,
        borderRadius: BorderRadius.circular(14),
        border: Border.all(color: Brand.inchiostro.withValues(alpha: 0.08)),
      ),
      child: Row(
        children: [
          const Icon(Icons.timer_outlined, color: Brand.blu),
          const SizedBox(width: 10),
          Expanded(
            child: Text(finished ? 'Tempo scaduto!' : _label,
                style: Brand.sora(22, 800, color: Brand.inchiostro)),
          ),
          IconButton(
            tooltip: 'Azzera',
            onPressed: () {
              _t?.cancel();
              setState(() {
                _t = null;
                _left = widget.seconds;
              });
            },
            icon: const Icon(Icons.restart_alt),
          ),
          FilledButton(
            onPressed: _toggle,
            style: FilledButton.styleFrom(minimumSize: const Size(90, 44)),
            child: Text(running ? 'Pausa' : 'Avvia'),
          ),
        ],
      ),
    );
  }
}
