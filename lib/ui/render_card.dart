import 'package:flutter/material.dart';

import 'theme.dart';

/// Passi che hanno un'immagine fotorealistica (calcolata con Blender, movimento generico originale).
const renderSteps = {
  'valutazione', 'fondello', 'rotore', 'scarica', 'stelo', 'estrai', 'lancette', 'quadrante', 'calendario',
  'minuteria', 'automatico', 'bilanciere', 'ancora', 'carica', 'bariletto_out', 'treno_out', 'remontoir_out',
  'remontoir_in', 'treno_in', 'bariletto_rimonta', 'ancora_in', 'bilanciere_in', 'automatico_in', 'quadrante_in',
  'regola', 'chiudi', 'prova',
};

String renderAsset(String stepId) => 'assets/renders/$stepId.webp';

/// Immagine realistica del passo, con zoom a tutto schermo.
class RenderCard extends StatelessWidget {
  final String stepId;
  final String title;
  final bool hasScrews;

  const RenderCard({super.key, required this.stepId, required this.title, this.hasScrews = false});

  @override
  Widget build(BuildContext context) {
    if (!renderSteps.contains(stepId)) return const SizedBox.shrink();
    return Card(
      clipBehavior: Clip.antiAlias,
      child: Column(crossAxisAlignment: CrossAxisAlignment.stretch, children: [
        GestureDetector(
          onTap: () => Navigator.push(
            context,
            MaterialPageRoute(builder: (_) => RenderViewer(asset: renderAsset(stepId), title: title)),
          ),
          child: Stack(children: [
            AspectRatio(
              aspectRatio: 4 / 3,
              child: Image.asset(renderAsset(stepId), fit: BoxFit.cover, gaplessPlayback: true),
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
        ),
        Padding(
          padding: const EdgeInsets.fromLTRB(14, 8, 14, 10),
          child: Text(
            'Come si vede su un movimento tipico. In arancio i pezzi di questo passo'
            '${hasScrews ? '; i numeri indicano l\'ordine delle viti' : ''}. Tocca per ingrandire.',
            style: TextStyle(fontSize: 12.5, color: Brand.inchiostro.withValues(alpha: 0.6)),
          ),
        ),
      ]),
    );
  }
}

class RenderViewer extends StatelessWidget {
  final String asset;
  final String title;
  const RenderViewer({super.key, required this.asset, required this.title});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: const Color(0xFF0E1525),
      appBar: AppBar(
        title: Text(title, overflow: TextOverflow.ellipsis),
        backgroundColor: const Color(0xFF0E1525),
        foregroundColor: Colors.white,
      ),
      body: InteractiveViewer(
        maxScale: 6,
        child: Center(child: Image.asset(asset, fit: BoxFit.contain)),
      ),
    );
  }
}
