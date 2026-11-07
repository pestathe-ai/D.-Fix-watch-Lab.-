import 'dart:math' as math;

import 'draw.dart';

/// Modello semplificato dello scappamento ad ancora, calcolato dalla fase del bilanciere.
class EscapementState {
  final double balanceAngle; // rad
  final double forkAngle; // rad
  final double wheelSteps; // in mezzi passi di dente
  final String phase; // 'libero', 'sblocco', 'impulso'

  const EscapementState(this.balanceAngle, this.forkAngle, this.wheelSteps, this.phase);
}

const double escAmplitude = 2.6; // ~150°
const double escWindow = 0.35; // rad di bilanciere in cui avviene sblocco+impulso
const double escForkMax = 0.17;

/// phase = fase dell'oscillazione (rad). Ogni pi è un'alternanza (un tic).
EscapementState escapementAt(double phase) {
  final theta = escAmplitude * math.sin(phase);
  final fork = escForkMax * (theta / escWindow).clamp(-1.0, 1.0);
  final u = phase / math.pi;
  final n = (u + 0.5).floorToDouble();
  final d = (u - n) * math.pi; // distanza in fase dal passaggio per lo zero
  final w = math.asin(math.min(1.0, escWindow / escAmplitude));
  final steps = n - 0.5 + smoothstep((d + w) / (2 * w));
  String ph;
  if (d.abs() >= w) {
    ph = 'libero';
  } else if (d < -w * 0.15) {
    ph = 'sblocco';
  } else {
    ph = 'impulso';
  }
  return EscapementState(theta, fork, steps, ph);
}

/// Velocità di rotazione reali (giri al secondo) del treno di un calibro da 28.800 alt/h.
const Map<String, double> trainRevPerSec = {
  'bariletto': 1 / (8 * 3600),
  'ruota_centro': 1 / 3600,
  'ruota_terzo': 1 / 450,
  'ruota_secondi': 1 / 60,
  'ruota_scappamento': 1 / 5,
};
