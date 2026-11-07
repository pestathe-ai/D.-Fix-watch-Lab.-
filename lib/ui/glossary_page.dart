import 'package:flutter/material.dart';

import '../data/components.dart';
import 'theme.dart';

/// Scheda di un pezzo: a cosa serve, come funziona, attenzione.
class PartCard extends StatelessWidget {
  final WatchPart part;
  final bool initiallyExpanded;

  const PartCard({super.key, required this.part, this.initiallyExpanded = false});

  @override
  Widget build(BuildContext context) {
    return Card(
      child: Theme(
        data: Theme.of(context).copyWith(dividerColor: Colors.transparent),
        child: ExpansionTile(
          initiallyExpanded: initiallyExpanded,
          tilePadding: const EdgeInsets.symmetric(horizontal: 14, vertical: 2),
          childrenPadding: const EdgeInsets.fromLTRB(14, 0, 14, 14),
          leading: const CircleAvatar(
            radius: 16,
            backgroundColor: Brand.blu,
            child: Icon(Icons.settings, size: 18, color: Brand.carta),
          ),
          title: Text(part.name, style: Brand.sora(15.5, 700, color: Brand.inchiostro)),
          subtitle: Padding(
            padding: const EdgeInsets.only(top: 2),
            child: Text(part.whatItDoes, style: const TextStyle(fontSize: 14, height: 1.35)),
          ),
          children: [
            Align(
              alignment: Alignment.centerLeft,
              child: Text('Detto anche: ${part.aka}',
                  style: TextStyle(fontSize: 13, color: Brand.inchiostro.withValues(alpha: 0.6))),
            ),
            const SizedBox(height: 10),
            InfoBox(icon: Icons.lightbulb_outline, title: 'Come funziona', text: part.detail, color: Brand.blu),
            const SizedBox(height: 8),
            InfoBox(icon: Icons.back_hand_outlined, title: 'Quando lo maneggi', text: part.careful, color: Brand.arancio),
          ],
        ),
      ),
    );
  }
}

class GlossaryPage extends StatefulWidget {
  const GlossaryPage({super.key});

  @override
  State<GlossaryPage> createState() => _GlossaryPageState();
}

class _GlossaryPageState extends State<GlossaryPage> {
  String _q = '';

  @override
  Widget build(BuildContext context) {
    final q = _q.trim().toLowerCase();
    final filtered = parts
        .where((p) =>
            q.isEmpty ||
            p.name.toLowerCase().contains(q) ||
            p.aka.toLowerCase().contains(q) ||
            p.whatItDoes.toLowerCase().contains(q))
        .toList();

    final children = <Widget>[];
    for (final g in partGroups) {
      final inGroup = filtered.where((p) => p.group == g).toList();
      if (inGroup.isEmpty) continue;
      children.add(Padding(
        padding: const EdgeInsets.fromLTRB(4, 18, 4, 8),
        child: Text(g.toUpperCase(),
            style: Brand.sora(12.5, 700, color: Brand.blu).copyWith(letterSpacing: 1.1)),
      ));
      for (final p in inGroup) {
        children
          ..add(PartCard(part: p, initiallyExpanded: q.isNotEmpty && inGroup.length == 1))
          ..add(const SizedBox(height: 8));
      }
    }

    return Scaffold(
      appBar: AppBar(title: const Text('A cosa serve ogni pezzo')),
      body: ListView(
        padding: const EdgeInsets.fromLTRB(16, 4, 16, 32),
        children: [
          TextField(
            decoration: InputDecoration(
              prefixIcon: const Icon(Icons.search),
              hintText: 'Cerca un pezzo (es. ancora, tiretto)',
              filled: true,
              fillColor: Colors.white,
              border: OutlineInputBorder(borderRadius: BorderRadius.circular(14), borderSide: BorderSide.none),
            ),
            onChanged: (v) => setState(() => _q = v),
          ),
          if (filtered.isEmpty)
            const Padding(
              padding: EdgeInsets.all(24),
              child: Text('Nessun pezzo trovato.', textAlign: TextAlign.center),
            ),
          ...children,
        ],
      ),
    );
  }
}
