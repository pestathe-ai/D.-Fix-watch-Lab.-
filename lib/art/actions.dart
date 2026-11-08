import 'package:flutter/material.dart';

import '../data/components.dart';
import '../data/steps.dart';
import 'scene.dart';
import 'scene_steps.dart';

/// Una vite della scena: appartiene a un pezzo (ponte, placca...).
class ScrewDef {
  final String id;
  final String item;
  final Offset at; // coordinate della scena 1000x1000
  final double r;
  final bool leftHand; // filetto sinistro

  const ScrewDef(this.id, this.item, this.at, this.r, {this.leftHand = false});

  Map<String, dynamic> toJson() => {'id': id, 'item': item, 'x': at.dx, 'y': at.dy, 'r': r, 'lh': leftHand};
}

const List<ScrewDef> screwDefs = [
  // cassa: staffe di fissaggio del movimento
  ScrewDef('v_cassa_1', 'p_cassa', Offset(164, 193), 13),
  ScrewDef('v_cassa_2', 'p_cassa', Offset(833, 810), 13),
  // rotore
  ScrewDef('v_rotore', 'rotore', Offset(500, 500), 18),
  // modulo automatico
  ScrewDef('v_auto_1', 'ponte_automatico', Offset(345, 300), 12),
  ScrewDef('v_auto_2', 'ponte_automatico', Offset(560, 240), 12),
  // bilanciere e ancora
  ScrewDef('v_bilanciere', 'ponte_bilanciere', Geo.cockFoot, 14),
  ScrewDef('v_ancora', 'ponte_ancora', Offset(636, 718), 11),
  // carica
  ScrewDef('v_ruota_carica', 'ruota_carica', Geo.crownWheel, 13, leftHand: true),
  ScrewDef('v_rocchetto', 'rocchetto_cricco', Geo.barrel, 16),
  ScrewDef('v_cricchetto', 'cricchetto', Geo.click, 9),
  // ponti
  ScrewDef('v_bariletto_1', 'ponte_bariletto', Offset(520, 240), 13),
  ScrewDef('v_bariletto_2', 'ponte_bariletto', Offset(760, 250), 13),
  ScrewDef('v_bariletto_3', 'ponte_bariletto', Offset(705, 455), 13),
  ScrewDef('v_treno_1', 'ponte_treno', Offset(420, 560), 13),
  ScrewDef('v_treno_2', 'ponte_treno', Offset(560, 640), 13),
  ScrewDef('v_treno_3', 'ponte_treno', Offset(400, 680), 13),
  // lato quadrante
  ScrewDef('v_calendario_1', 'placca_calendario', Offset(300, 420), 11),
  ScrewDef('v_calendario_2', 'placca_calendario', Offset(640, 700), 11),
  ScrewDef('v_calendario_3', 'placca_calendario', Offset(560, 220), 11),
  ScrewDef('v_saltarello', 'saltarello', Geo.jumper, 9),
  ScrewDef('v_molla_tiretto_1', 'molla_tiretto', Offset(770, 420), 11),
  ScrewDef('v_molla_tiretto_2', 'molla_tiretto', Offset(770, 620), 11),
  ScrewDef('v_tiretto', 'tiretto', Geo.settingLeverPivot, 11),
];

List<ScrewDef> screwsOf(String item) => screwDefs.where((s) => s.item == item).toList();

ScrewDef? screwById(String id) {
  for (final s in screwDefs) {
    if (s.id == id) return s;
  }
  return null;
}

/// Pezzi che si sollevano insieme a un altro (es. il bilanciere col suo ponte).
const Map<String, String> liftWith = {
  'racchetta': 'ponte_bilanciere',
  'spirale': 'ponte_bilanciere',
  'bilanciere': 'ponte_bilanciere',
  'q_stelo': 'p_stelo',
  'q_cassa': 'p_cassa',
};

enum ActionType { unscrew, screw, lift, lower, press, letdown, regulate }

class SceneAction {
  final ActionType type;
  final List<String> ids; // pezzi o vite coinvolti
  final String text; // istruzione per l'utente
  final String? detail; // seconda riga (es. verso di rotazione)
  final bool warn;
  final Offset? at;

  const SceneAction(this.type, this.ids, this.text, {this.detail, this.warn = false, this.at});

  Map<String, dynamic> toJson() => {
        't': type.name,
        'ids': ids,
        if (at != null) 'at': [at!.dx, at!.dy],
        if (type == ActionType.unscrew || type == ActionType.screw)
          'lh': screwById(ids.first)?.leftHand ?? false,
      };
}

bool _allowed(String id, bool automatic, bool date) {
  final s = screwById(id);
  if (s != null) return _allowed(s.item, automatic, date);
  final it = sceneItem(id);
  if (it == null) return false;
  if (!automatic && it.autoOnly) return false;
  if (!date && it.dateOnly) return false;
  return true;
}

/// Tutto ciò che c'è nel movimento completo (pezzi + viti).
Set<String> fullSet({required bool automatic, required bool date}) => {
      for (final it in sceneItems)
        if (_allowed(it.id, automatic, date)) it.id,
      for (final s in screwDefs)
        if (_allowed(s.id, automatic, date)) s.id,
    };

String _name(String itemId) {
  final it = sceneItem(itemId);
  final p = it == null ? null : partById(it.partId);
  final n = p?.name ?? itemId;
  return n.isEmpty ? n : n[0].toLowerCase() + n.substring(1);
}

String _groupName(String parent, List<String> group) {
  if (parent == 'ponte_bilanciere' && group.contains('bilanciere')) {
    return 'il ponte del bilanciere con il bilanciere attaccato';
  }
  if (parent == 'p_stelo') return 'stelo e corona';
  if (parent == 'p_cassa') return 'la cassa';
  return _article(_name(parent));
}

String _article(String n) {
  const femminili = ['cassa', 'ruota', 'molla', 'placca', 'platina', 'spirale', 'racchetta', 'ancora', 'chaussée', 'corona', 'bascula', 'minuteria'];
  for (final f in femminili) {
    if (n.startsWith(f)) return f == 'ancora' ? "l'$n" : 'la $n';
  }
  if (n.startsWith('lancette') || n.startsWith('ruote') || n.startsWith('viti')) return 'le $n';
  final first = n.isEmpty ? '' : n[0];
  if ('aeiou'.contains(first)) return "l'$n";
  if (n.startsWith('s') && n.length > 1 && !'aeiou'.contains(n[1])) return 'lo $n';
  if (n.startsWith('z') || n.startsWith('gn') || n.startsWith('ps')) return 'lo $n';
  return 'il $n';
}

/// Le azioni di un passo, una vite e un pezzo alla volta.
List<SceneAction> actionsFor(ServiceStep step, Set<String> present, {required bool automatic, required bool date}) {
  final op = sceneOps[step.id];
  if (op == null) return const [];
  final out = <SceneAction>[];

  if (step.id == 'scarica') {
    return [
      SceneAction(ActionType.letdown, const ['cricchetto', 'rocchetto_cricco'],
          'Tieni ferma la corona, solleva il cricchetto e lascia girare piano il rocchetto all\'indietro',
          detail: 'Accompagna la corona tra le dita fino a quando non gira più.', at: Geo.click),
    ];
  }
  if (step.id == 'regola') {
    return const [
      SceneAction(ActionType.regulate, ['racchetta'], 'Sposta la racchetta di pochissimo verso + o -',
          detail: 'Avanza? verso il meno. Ritarda? verso il più. Poi rimisura.'),
    ];
  }

  if (op.remove.isNotEmpty) {
    for (final id in op.remove) {
      if (!present.contains(id) || !_allowed(id, automatic, date)) continue;
      final parent = liftWith[id];
      if (parent != null && op.remove.contains(parent)) continue; // si solleva col suo pezzo
      final group = [
        id,
        for (final c in op.remove)
          if (liftWith[c] == id && present.contains(c) && _allowed(c, automatic, date)) c,
      ];
      if (id == 'p_stelo') {
        out.add(const SceneAction(ActionType.press, ['tiretto'], 'Premi leggermente il perno del tiretto',
            detail: 'Con la corona tirata in posizione di messa all\'ora.', at: Offset(860, 440)));
      }
      final screws = [for (final g in group) ...screwsOf(g)].where((s) => present.contains(s.id)).toList();
      for (var k = 0; k < screws.length; k++) {
        final s = screws[k];
        final of = screws.length > 1 ? ' ${k + 1} di ${screws.length}' : '';
        out.add(SceneAction(
          ActionType.unscrew,
          [s.id],
          'Svita la vite$of ${_della(_name(s.item))}',
          detail: s.leftHand
              ? 'FILETTO SINISTRO: si svita girando in senso ORARIO.'
              : 'Gira in senso antiorario. Metti la vite nel contenitore.',
          warn: s.leftHand,
        ));
      }
      out.add(SceneAction(
        ActionType.lift,
        group,
        id == 'p_stelo'
            ? 'Sfila stelo e corona'
            : (id == 'p_cassa' ? 'Sfila il movimento dalla cassa' : 'Solleva ${_groupName(id, group)}'),
        detail: id == 'ponte_bilanciere' ? 'Ruotalo appena per liberare il plateau dalla forchetta. Mai tirare.' : null,
      ));
    }
  } else if (op.add.isNotEmpty) {
    for (final id in op.add) {
      if (present.contains(id) || !_allowed(id, automatic, date)) continue;
      final parent = liftWith[id];
      if (parent != null && op.add.contains(parent)) continue;
      final group = [
        id,
        for (final c in op.add)
          if (liftWith[c] == id && !present.contains(c) && _allowed(c, automatic, date)) c,
      ];
      out.add(SceneAction(
        ActionType.lower,
        group,
        id == 'p_stelo'
            ? 'Infila stelo e corona'
            : (id == 'p_cassa' ? 'Rimetti il movimento nella cassa' : 'Rimetti ${_groupName(id, group)}'),
        detail: id == 'ponte_treno' || id == 'ponte_bilanciere'
            ? 'Deve appoggiarsi piatto da solo: se no un perno è fuori dal suo rubino.'
            : null,
      ));
      final screws = [for (final g in group) ...screwsOf(g)];
      for (var k = 0; k < screws.length; k++) {
        final s = screws[k];
        final of = screws.length > 1 ? ' ${k + 1} di ${screws.length}' : '';
        out.add(SceneAction(
          ActionType.screw,
          [s.id],
          'Avvita la vite$of ${_della(_name(s.item))}',
          detail: s.leftHand
              ? 'FILETTO SINISTRO: si avvita girando in senso ANTIORARIO.'
              : 'Senso orario, stringi senza forzare.',
          warn: s.leftHand,
        ));
      }
    }
  }
  return out;
}

String _della(String n) {
  final a = _article(n);
  if (a.startsWith("l'")) return "dell'${a.substring(2)}";
  if (a.startsWith('la ')) return 'della ${a.substring(3)}';
  if (a.startsWith('lo ')) return 'dello ${a.substring(3)}';
  if (a.startsWith('le ')) return 'delle ${a.substring(3)}';
  return 'del ${a.substring(3)}';
}

/// Applica un'azione all'insieme dei pezzi presenti.
Set<String> applyAction(Set<String> present, SceneAction a) {
  final out = {...present};
  switch (a.type) {
    case ActionType.unscrew:
      out.removeAll(a.ids);
    case ActionType.screw:
      out.addAll(a.ids);
    case ActionType.lift:
      out.removeAll(a.ids);
      for (final id in a.ids) {
        out.removeAll(screwsOf(id).map((s) => s.id));
      }
    case ActionType.lower:
      out.addAll(a.ids);
    case ActionType.press:
    case ActionType.letdown:
    case ActionType.regulate:
      break;
  }
  return out;
}

/// Stato (pezzi + viti) all'inizio del passo [index].
Set<String> presentWithScrewsBefore(List<ServiceStep> steps, int index, {required bool automatic, required bool date}) {
  var present = fullSet(automatic: automatic, date: date);
  for (var i = 0; i < index && i < steps.length; i++) {
    for (final a in actionsFor(steps[i], present, automatic: automatic, date: date)) {
      present = applyAction(present, a);
    }
  }
  return present;
}
