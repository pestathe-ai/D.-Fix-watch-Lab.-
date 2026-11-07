import 'package:flutter/material.dart';

import '../data/steps.dart';
import 'scene.dart';

class StepMarker {
  final Offset at;
  final String label;
  const StepMarker(this.at, this.label);
}

/// Cosa mostra la scena in un passo: lato, pezzi tolti o rimessi, punti da indicare.
class SceneOp {
  final Side side;
  final List<String> remove;
  final List<String> add;
  final List<StepMarker> markers;
  final List<String> highlight;

  const SceneOp(
    this.side, {
    this.remove = const [],
    this.add = const [],
    this.markers = const [],
    this.highlight = const [],
  });
}

const Map<String, SceneOp> sceneOps = {
  'valutazione': SceneOp(Side.ponti),
  'fondello': SceneOp(Side.ponti, remove: ['fondello']),
  'rotore': SceneOp(Side.ponti, remove: ['rotore']),
  'scarica': SceneOp(Side.ponti,
      highlight: ['cricchetto', 'rocchetto_cricco'],
      markers: [StepMarker(Geo.click, 'Solleva qui il cricchetto e lascia girare piano la corona')]),
  'stelo': SceneOp(Side.ponti,
      remove: ['p_stelo', 'q_stelo'],
      markers: [StepMarker(Offset(860, 440), 'Il perno del tiretto è di solito qui, vicino allo stelo')]),
  'estrai': SceneOp(Side.ponti, remove: ['p_cassa', 'q_cassa']),
  'lancette': SceneOp(Side.quadrante, remove: ['lancette']),
  'quadrante': SceneOp(Side.quadrante,
      remove: ['quadrante'],
      markers: [StepMarker(Offset(140, 560), 'Le viti dei piedini del quadrante sono sul bordo della platina')]),
  'calendario': SceneOp(Side.quadrante, remove: ['placca_calendario', 'disco_datario', 'saltarello', 'ruota_datario']),
  'minuteria': SceneOp(Side.quadrante, remove: ['ruota_ore', 'ruota_minuteria', 'chaussee']),
  'automatico': SceneOp(Side.ponti, remove: ['invertitore_1', 'invertitore_2', 'ponte_automatico']),
  'bilanciere': SceneOp(Side.ponti,
      remove: ['racchetta', 'ponte_bilanciere', 'spirale', 'bilanciere'],
      markers: [StepMarker(Geo.cockFoot, 'Vite del ponte del bilanciere')]),
  'ancora': SceneOp(Side.ponti, remove: ['ponte_ancora', 'ancora']),
  'carica': SceneOp(Side.ponti,
      remove: ['ruota_carica', 'rocchetto_cricco', 'cricchetto'],
      markers: [StepMarker(Geo.crownWheel, 'Vite della ruota di carica: spesso a filetto sinistro')]),
  'bariletto_out': SceneOp(Side.ponti, remove: ['ponte_bariletto', 'bariletto']),
  'treno_out': SceneOp(Side.ponti,
      remove: ['ponte_treno', 'ruota_scappamento', 'ruota_secondi', 'ruota_terzo', 'ruota_centro']),
  'remontoir_out': SceneOp(Side.quadrante,
      remove: ['molla_tiretto', 'bascula', 'ruota_rinvio', 'pignone_scorrevole', 'pignone_carica', 'tiretto']),
  'remontoir_in': SceneOp(Side.quadrante,
      add: ['tiretto', 'pignone_carica', 'pignone_scorrevole', 'p_stelo', 'q_stelo', 'bascula', 'ruota_rinvio', 'molla_tiretto']),
  'treno_in': SceneOp(Side.ponti,
      add: ['ruota_centro', 'ruota_terzo', 'ruota_secondi', 'ruota_scappamento', 'ponte_treno'],
      markers: [StepMarker(Offset(470, 640), 'Guida ogni perno nel suo rubino prima di stringere')]),
  'bariletto_rimonta': SceneOp(Side.ponti,
      add: ['bariletto', 'ponte_bariletto', 'rocchetto_cricco', 'ruota_carica', 'cricchetto']),
  'ancora_in': SceneOp(Side.ponti, add: ['ancora', 'ponte_ancora']),
  'bilanciere_in': SceneOp(Side.ponti,
      add: ['bilanciere', 'spirale', 'ponte_bilanciere', 'racchetta'],
      markers: [StepMarker(Geo.balance, 'Il ponte deve scendere piatto da solo')]),
  'automatico_in': SceneOp(Side.ponti, add: ['ponte_automatico', 'invertitore_1', 'invertitore_2']),
  'quadrante_in': SceneOp(Side.quadrante,
      add: ['chaussee', 'ruota_minuteria', 'ruota_ore', 'ruota_datario', 'saltarello', 'disco_datario', 'placca_calendario', 'quadrante', 'lancette']),
  'regola': SceneOp(Side.ponti,
      highlight: ['racchetta'],
      markers: [StepMarker(Offset(700, 580), 'Racchetta: piccolissimi spostamenti verso + o -')]),
  'chiudi': SceneOp(Side.ponti, add: ['p_cassa', 'q_cassa', 'rotore', 'fondello']),
  'prova': SceneOp(Side.quadrante),
};

/// Pezzi presenti nella scena all'inizio del passo [index] (prima di agire).
Set<String> presentBefore(List<ServiceStep> steps, int index, {required bool automatic, required bool date}) {
  final present = <String>{
    for (final it in sceneItems)
      if ((automatic || !it.autoOnly) && (date || !it.dateOnly)) it.id,
  };
  for (var i = 0; i < index && i < steps.length; i++) {
    final op = sceneOps[steps[i].id];
    if (op == null) continue;
    present.removeAll(op.remove);
    for (final a in op.add) {
      final it = sceneItem(a);
      if (it == null) continue;
      if (!automatic && it.autoOnly) continue;
      if (!date && it.dateOnly) continue;
      present.add(a);
    }
  }
  return present;
}
