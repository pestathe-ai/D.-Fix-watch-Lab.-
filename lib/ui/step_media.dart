import 'package:flutter/material.dart';
import 'package:url_launcher/url_launcher.dart';

import '../art/scene.dart';
import '../data/calibers.dart';
import '../data/components.dart';
import '../data/steps.dart';
import 'glossary_page.dart';
import 'render_card.dart';
import 'theme.dart';

/// Pezzi che hanno una foto realistica, da soli (calcolate con Blender: tool/blender/parts.py).
const partRenders = {
  'ancora', 'bariletto', 'bascula', 'bilanciere', 'cassa', 'chaussee', 'cricchetto', 'disco_datario', 'fondello',
  'invertitore_1', 'invertitore_2', 'lancette', 'molla_tiretto', 'pignone_carica', 'pignone_scorrevole',
  'placca_calendario', 'platina', 'ponte_ancora', 'ponte_automatico', 'ponte_bariletto', 'ponte_bilanciere',
  'ponte_treno', 'quadrante', 'racchetta', 'rocchetto_cricco', 'rotore', 'ruota_carica', 'ruota_centro',
  'ruota_datario', 'ruota_minuteria', 'ruota_ore', 'ruota_rinvio', 'ruota_scappamento', 'ruota_secondi',
  'ruota_terzo', 'saltarello', 'spirale', 'stelo', 'tiretto', 'vite',
};

const _alias = {'p_platina': 'platina', 'q_platina': 'platina', 'p_stelo': 'stelo', 'q_stelo': 'stelo', 'p_cassa': 'cassa', 'q_cassa': 'cassa'};

/// La foto di un pezzo del glossario, se c'è.
String? partPhoto(String partId) {
  if (partId == 'viti') return 'assets/renders/parts/vite.webp';
  if (partRenders.contains(partId)) return 'assets/renders/parts/$partId.webp';
  for (final s in sceneItems) {
    if (s.partId != partId) continue;
    final id = _alias[s.id] ?? s.id;
    if (partRenders.contains(id)) return 'assets/renders/parts/$id.webp';
  }
  return null;
}

/// Un unico riquadro per il passo: in alto si scorre 3D → foto del passo → foto dei pezzi,
/// sotto c'è la spiegazione di cosa fare.
class StepMediaCard extends StatefulWidget {
  final ServiceStep step;
  final Widget scene; // vista 3D (o 2D animata)
  final String sceneLabel;
  final List<WatchPart> parts;
  final Widget instructions;
  /// Il calibro della revisione: per dire quanto lo schema gli somiglia.
  final Caliber? caliber;
  /// "Sul tuo orologio": foto del movimento vero con le viti segnate.
  final Widget? myWatch;
  /// Se c'è già una foto del passo: allora si apre su quella.
  final bool hasMyPhoto;

  const StepMediaCard({
    super.key,
    required this.step,
    required this.scene,
    required this.sceneLabel,
    required this.parts,
    required this.instructions,
    this.caliber,
    this.myWatch,
    this.hasMyPhoto = false,
  });

  @override
  State<StepMediaCard> createState() => _StepMediaCardState();
}

enum _Kind { mine, scene, photo }

class _Page {
  final String label;
  final IconData icon;
  final _Kind kind;
  final String? asset;
  final WatchPart? part;
  const _Page(this.label, this.icon, this.kind, {this.asset, this.part});
}

class _StepMediaCardState extends State<StepMediaCard> {
  // con la foto del tuo orologio si parte da quella, altrimenti dal 3D
  late int _i = widget.myWatch != null && !widget.hasMyPhoto ? 1 : 0;
  final _chips = ScrollController();

  @override
  void dispose() {
    _chips.dispose();
    super.dispose();
  }

  List<_Page> get _pages {
    final out = <_Page>[
      if (widget.myWatch != null) const _Page('Il tuo orologio', Icons.watch_outlined, _Kind.mine),
      _Page(widget.sceneLabel, Icons.view_in_ar, _Kind.scene),
    ];
    if (renderSteps.contains(widget.step.id)) {
      out.add(_Page('Foto tipo', Icons.photo_camera_outlined, _Kind.photo, asset: renderAsset(widget.step.id)));
    }
    for (final p in widget.parts) {
      final a = partPhoto(p.id);
      if (a != null) out.add(_Page(p.name, Icons.settings_outlined, _Kind.photo, asset: a, part: p));
    }
    return out;
  }

  void _go(int i, int n) {
    setState(() => _i = i.clamp(0, n - 1));
  }

  @override
  Widget build(BuildContext context) {
    final pages = _pages;
    final n = pages.length;
    final i = _i.clamp(0, n - 1);
    final p = pages[i];

    return Card(
      clipBehavior: Clip.antiAlias,
      child: Column(crossAxisAlignment: CrossAxisAlignment.stretch, children: [
        // le linguette: 3D, foto, poi un pezzo per linguetta
        SizedBox(
          height: 52,
          child: ListView.separated(
            controller: _chips,
            scrollDirection: Axis.horizontal,
            padding: const EdgeInsets.fromLTRB(10, 8, 10, 4),
            itemCount: n,
            separatorBuilder: (_, __) => const SizedBox(width: 6),
            itemBuilder: (_, k) => ChoiceChip(
              selected: k == i,
              showCheckmark: false,
              avatar: Icon(pages[k].icon, size: 18, color: k == i ? Colors.white : Brand.blu),
              label: Text(pages[k].label, style: TextStyle(fontSize: 14.5, color: k == i ? Colors.white : Brand.inchiostro)),
              selectedColor: Brand.blu,
              backgroundColor: Colors.white,
              side: BorderSide(color: Brand.blu.withValues(alpha: 0.3)),
              onSelected: (_) => _go(k, n),
            ),
          ),
        ),
        // il contenuto: la scena resta viva (non si ricarica) quando guardi le foto
        if (p.kind == _Kind.scene) _genericNotice(context),
        IndexedStack(
          index: p.kind == _Kind.scene ? 0 : 1,
          sizing: StackFit.loose,
          children: [
            Visibility(
              visible: p.kind == _Kind.scene,
              maintainState: true,
              child: _flat(context, widget.scene),
            ),
            switch (p.kind) {
              _Kind.mine => _flat(context, widget.myWatch!),
              _Kind.photo => _photo(context, p),
              _Kind.scene => const SizedBox.shrink(),
            },
          ],
        ),
        // avanti e indietro tra le immagini
        if (n > 1)
          Padding(
            padding: const EdgeInsets.fromLTRB(6, 0, 6, 0),
            child: Row(children: [
              IconButton(
                tooltip: 'Immagine precedente',
                onPressed: i == 0 ? null : () => _go(i - 1, n),
                icon: const Icon(Icons.chevron_left, size: 30),
              ),
              Expanded(
                child: Row(mainAxisAlignment: MainAxisAlignment.center, children: [
                  for (var k = 0; k < n; k++)
                    AnimatedContainer(
                      duration: const Duration(milliseconds: 200),
                      margin: const EdgeInsets.symmetric(horizontal: 3),
                      width: k == i ? 18 : 7,
                      height: 7,
                      decoration: BoxDecoration(
                        color: k == i ? Brand.blu : Brand.blu.withValues(alpha: 0.25),
                        borderRadius: BorderRadius.circular(4),
                      ),
                    ),
                ]),
              ),
              IconButton(
                tooltip: 'Immagine successiva',
                onPressed: i == n - 1 ? null : () => _go(i + 1, n),
                icon: const Icon(Icons.chevron_right, size: 30),
              ),
            ]),
          ),
        const Divider(height: 1, indent: 14, endIndent: 14),
        Padding(
          padding: const EdgeInsets.fromLTRB(14, 14, 14, 6),
          child: widget.instructions,
        ),
      ]),
    );
  }

  /// Le schede dentro il riquadro non fanno "carta nella carta".
  Widget _flat(BuildContext context, Widget child) => Theme(
        data: Theme.of(context).copyWith(
          cardTheme: Theme.of(context).cardTheme.copyWith(color: Colors.transparent, shape: const RoundedRectangleBorder()),
        ),
        child: child,
      );

  /// Avviso: il 3D è uno schema generico, non il calibro vero.
  Widget _genericNotice(BuildContext context) {
    final c = widget.caliber;
    final known = c != null && !c.generic;
    return Container(
      margin: const EdgeInsets.fromLTRB(12, 4, 12, 6),
      padding: const EdgeInsets.fromLTRB(12, 10, 6, 4),
      decoration: BoxDecoration(color: Colors.white, borderRadius: BorderRadius.circular(14)),
      child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
        Row(crossAxisAlignment: CrossAxisAlignment.start, children: [
          const Icon(Icons.info_outline, color: Brand.arancio, size: 20),
          const SizedBox(width: 8),
          Expanded(
            child: Text(
              known
                  ? 'Schema generico: il tuo ${c.name.split('(').first.trim()} ha ponti e viti in posizioni diverse. '
                      'Pezzi e ordine sono gli stessi.'
                  : 'Schema generico di un movimento tipico: pezzi e ordine sono gli stessi, la forma dei ponti cambia.',
              style: const TextStyle(fontSize: 14, height: 1.35),
            ),
          ),
        ]),
        if (c != null) ...[
          const SizedBox(height: 4),
          Padding(
            padding: const EdgeInsets.only(left: 28),
            child: Text('Com\'è fatto: ${c.architecture}.',
                style: TextStyle(fontSize: 13.5, color: Brand.inchiostro.withValues(alpha: 0.7))),
          ),
          Padding(
            padding: const EdgeInsets.only(left: 18),
            child: TextButton.icon(
              onPressed: () => launchUrl(c.photosUrl, mode: LaunchMode.externalApplication),
              icon: const Icon(Icons.open_in_new, size: 18),
              label: Text(known ? 'Foto reali del ${c.name.split('(').first.split('/').first.trim()}' : 'Foto di movimenti reali'),
            ),
          ),
        ],
      ]),
    );
  }

  Widget _photo(BuildContext context, _Page p) {
    final pages = _pages;
    final n = pages.length;
    return GestureDetector(
      // scorri col dito per passare all'immagine accanto
      onHorizontalDragEnd: (d) {
        final v = d.primaryVelocity ?? 0;
        if (v < -150) _go(_i + 1, n);
        if (v > 150) _go(_i - 1, n);
      },
      onTap: () => Navigator.push(
        context,
        MaterialPageRoute(builder: (_) => RenderViewer(asset: p.asset!, title: p.part?.name ?? widget.step.title)),
      ),
      child: Column(crossAxisAlignment: CrossAxisAlignment.stretch, children: [
        Stack(children: [
          AspectRatio(
            aspectRatio: 4 / 3,
            child: Image.asset(p.asset!, fit: BoxFit.cover, gaplessPlayback: true),
          ),
          Positioned(
            right: 8,
            top: 8,
            child: Container(
              padding: const EdgeInsets.all(6),
              decoration: BoxDecoration(color: Colors.black.withValues(alpha: 0.45), borderRadius: BorderRadius.circular(10)),
              child: const Icon(Icons.zoom_in, color: Colors.white, size: 20),
            ),
          ),
        ]),
        Padding(
          padding: const EdgeInsets.fromLTRB(14, 10, 14, 4),
          child: p.part == null
              ? Text(
                  'Come si vede su un movimento tipico. In arancio i pezzi di questo passo'
                  '${widget.step.todo.any((t) => t.toLowerCase().contains('vit')) ? '; i numeri indicano l\'ordine delle viti' : ''}.',
                  style: TextStyle(fontSize: 14, color: Brand.inchiostro.withValues(alpha: 0.65)),
                )
              : Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
                  Text(p.part!.name, style: Brand.sora(17, 800, color: Brand.inchiostro)),
                  const SizedBox(height: 2),
                  Text(p.part!.whatItDoes, style: const TextStyle(fontSize: 15.5, height: 1.4)),
                  TextButton(
                    style: TextButton.styleFrom(padding: EdgeInsets.zero),
                    onPressed: () => showModalBottomSheet<void>(
                      context: context,
                      isScrollControlled: true,
                      showDragHandle: true,
                      builder: (_) => DraggableScrollableSheet(
                        expand: false,
                        initialChildSize: 0.7,
                        builder: (_, sc) => ListView(
                          controller: sc,
                          padding: const EdgeInsets.fromLTRB(16, 0, 16, 24),
                          children: [PartCard(part: p.part!, initiallyExpanded: true)],
                        ),
                      ),
                    ),
                    child: const Text('Come funziona e a cosa stare attenti →'),
                  ),
                ]),
        ),
      ]),
    );
  }
}
