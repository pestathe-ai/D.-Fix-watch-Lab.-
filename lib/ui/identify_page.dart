import 'package:flutter/material.dart';

import '../data/calibers.dart';
import '../logic/beat_analyzer.dart';
import 'measure_page.dart';
import 'theme.dart';

/// Aiuta a capire che calibro è; restituisce il Caliber scelto con Navigator.pop.
class IdentifyPage extends StatefulWidget {
  const IdentifyPage({super.key});

  @override
  State<IdentifyPage> createState() => _IdentifyPageState();
}

class _IdentifyPageState extends State<IdentifyPage> {
  WindType? _type;
  bool? _date;
  int? _bph;
  final _jewels = TextEditingController();
  final _diam = TextEditingController();

  @override
  void dispose() {
    _jewels.dispose();
    _diam.dispose();
    super.dispose();
  }

  double? get _diamMm => double.tryParse(_diam.text.replaceAll(',', '.'));

  @override
  Widget build(BuildContext context) {
    final suggestions = suggestCalibers(
      type: _type,
      bph: _bph,
      jewels: int.tryParse(_jewels.text),
      diameterMm: _diamMm,
      hasDate: _date,
    );
    final anyInput = _type != null || _bph != null || _jewels.text.isNotEmpty || _diamMm != null || _date != null;

    return Scaffold(
      appBar: AppBar(title: const Text('Identifica il calibro')),
      body: ListView(
        padding: const EdgeInsets.fromLTRB(16, 4, 16, 32),
        children: [
          const InfoBox(
            icon: Icons.search,
            title: 'Dove guardare',
            text:
                '1) Sul movimento: nome o numero inciso sui ponti, sotto il rotore o vicino al bilanciere '
                '(es. "2824-2", "NH35A", "8215", "6497").\n'
                '2) Rubini: spesso scritti come "25 jewels" o "XXV".\n'
                '3) Sotto il quadrante: a volte il codice è stampato sulla platina.\n'
                '4) Se non trovi nulla, rispondi qui sotto: ti dico i calibri compatibili.',
            color: Brand.blu,
          ),
          const SizedBox(height: 18),
          _label('Tipo di carica'),
          Wrap(spacing: 8, runSpacing: 8, children: [
            _chip('Automatico', _type == WindType.automatic, () => setState(() => _type = _type == WindType.automatic ? null : WindType.automatic)),
            _chip('Manuale', _type == WindType.manual, () => setState(() => _type = _type == WindType.manual ? null : WindType.manual)),
          ]),
          const SizedBox(height: 16),
          _label('Ha la data?'),
          Wrap(spacing: 8, runSpacing: 8, children: [
            _chip('Sì', _date == true, () => setState(() => _date = _date == true ? null : true)),
            _chip('No', _date == false, () => setState(() => _date = _date == false ? null : false)),
          ]),
          const SizedBox(height: 16),
          _label('Frequenza'),
          Row(children: [
            Expanded(
              child: Text(
                _bph == null ? 'Non misurata' : '${formatBph(_bph!)} alt/h',
                style: Brand.sora(15, 600, color: Brand.inchiostro),
              ),
            ),
            OutlinedButton.icon(
              onPressed: () async {
                final r = await Navigator.push<BeatResult>(
                  context,
                  MaterialPageRoute(builder: (_) => const MeasurePage(allowSave: true, saveLabel: 'Usa questa frequenza')),
                );
                if (r != null) setState(() => _bph = r.bph);
              },
              icon: const Icon(Icons.mic, size: 18),
              label: const Text('Misura'),
            ),
          ]),
          Wrap(
            spacing: 6,
            children: [
              for (final b in standardBph)
                ChoiceChip(
                  label: Text(formatBph(b), style: const TextStyle(fontSize: 12)),
                  selected: _bph == b,
                  onSelected: (s) => setState(() => _bph = s ? b : null),
                ),
            ],
          ),
          const SizedBox(height: 16),
          _label('Numero di rubini (se scritto)'),
          TextField(
            controller: _jewels,
            keyboardType: TextInputType.number,
            decoration: _dec('es. 25'),
            onChanged: (_) => setState(() {}),
          ),
          const SizedBox(height: 16),
          _label('Diametro del movimento in mm (con il calibro)'),
          TextField(
            controller: _diam,
            keyboardType: const TextInputType.numberWithOptions(decimal: true),
            decoration: _dec('es. 25,6').copyWith(
              helperText: _diamMm == null ? null : '= ${lignesLabel(_diamMm!)}',
            ),
            onChanged: (_) => setState(() {}),
          ),
          const SizedBox(height: 22),
          _label(anyInput ? 'Calibri compatibili' : 'Calibri che conosco'),
          if (anyInput && suggestions.isEmpty)
            const Padding(
              padding: EdgeInsets.symmetric(vertical: 8),
              child: Text(
                'Nessun calibro del mio elenco corrisponde. Nessun problema: usa la sequenza universale.',
                style: TextStyle(fontSize: 15),
              ),
            ),
          for (final c in (anyInput ? suggestions : calibers.where((c) => !c.generic)))
            Padding(
              padding: const EdgeInsets.only(bottom: 8),
              child: Card(
                child: ListTile(
                  title: Text(c.name, style: Brand.sora(15, 700, color: Brand.inchiostro)),
                  subtitle: Text(c.summary),
                  trailing: const Icon(Icons.chevron_right),
                  onTap: () => Navigator.pop(context, c),
                ),
              ),
            ),
          const SizedBox(height: 8),
          OutlinedButton(
            onPressed: () => Navigator.pop(
              context,
              caliberById(_type == WindType.manual ? 'generic_manual' : 'generic_auto'),
            ),
            child: Text(_type == WindType.manual
                ? 'Usa la sequenza universale (manuale)'
                : 'Usa la sequenza universale (automatico)'),
          ),
        ],
      ),
    );
  }

  Widget _label(String t) => Padding(
        padding: const EdgeInsets.only(bottom: 8),
        child: Text(t, style: Brand.sora(14, 700, color: Brand.blu)),
      );

  Widget _chip(String t, bool sel, VoidCallback onTap) =>
      ChoiceChip(label: Text(t), selected: sel, onSelected: (_) => onTap());

  InputDecoration _dec(String hint) => InputDecoration(
        hintText: hint,
        filled: true,
        fillColor: Colors.white,
        border: OutlineInputBorder(borderRadius: BorderRadius.circular(14), borderSide: BorderSide.none),
      );
}
