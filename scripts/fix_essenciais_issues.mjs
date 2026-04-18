/**
 * fix_essenciais_issues.mjs
 * Applies 13 surgical fixes identified by the essenciais audit:
 *   1. ID 3311 – remove placeholder "E) N/A" option
 *   2. IDs 3592,3638,3686,3767,3868,3918,3951,4143,4201,4323,4346,4364 – strip trailing ),  from enunciado
 *   3. IDs 3638,3686,3918,3951 – expand short explicacao_geral
 */

import { readFileSync, writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const QUESTOES_PATH = path.join(__dirname, '..', 'data', 'questoes.json');

const data = JSON.parse(readFileSync(QUESTOES_PATH, 'utf8'));
const questoes = Array.isArray(data) ? data : data.questoes;

let changed = 0;

const EXPANDED_EXPLICACOES = {
  3638: 'O Débito Cardíaco (DC) é calculado pela fórmula DC = FC × VS. Com FC de 70 bpm e VS de 70 ml, temos DC = 70 × 70 = 4.900 ml/min, equivalente a ~5 litros por minuto — valor típico de adulto em repouso. Em exercício físico intenso pode chegar a 20–25 L/min.',
  3686: 'Na hiperventilação, a eliminação excessiva de CO₂ pelos pulmões provoca hipocapnia (PaCO₂ < 35 mmHg), reduz a formação de ácido carbônico e eleva o pH plasmático — caracterizando Alcalose Respiratória. O vasoespasmo cerebral e a hipocalcemia relativa explicam as tonturas e parestesias (formigamentos) típicas.',
  3918: 'O KOH (Hidróxido de Potássio) a 10–20% dissolve a queratina das células epiteliais humanas e os detritos orgânicos da amostra, poupando as estruturas fúngicas (hifas, pseudohifas, esporos), que são resistentes ao álcali. Isso permite visualizá-las diretamente ao microscópio óptico sem necessidade de cultura prévia.',
  3951: 'A Tríplice Viral (SCR) é composta por vírus vivos atenuados contra Sarampo, Caxumba (Parotidite Epidêmica) e Rubéola. Integra o calendário vacinal infantil (1ª dose aos 12 meses; 2ª aos 15 meses). Por conter vírus vivos, é contraindicada em gestantes e imunossuprimidos graves.',
};

// IDs que precisam de ), removido do final do enunciado
const IDS_TRAILING_ARTIFACT = new Set([3311, 3592, 3638, 3686, 3767, 3868, 3918, 3951, 4143, 4201, 4323, 4346, 4364]);

for (const q of questoes) {
  // ── 1. Strip trailing ), from enunciado ────────────────────────────────────
  if (IDS_TRAILING_ARTIFACT.has(q.id) && q.enunciado) {
    const before = q.enunciado;
    // Remove any ), or ) immediately before the end of string (after ?, :, etc.)
    q.enunciado = q.enunciado.replace(/\),\s*$/, '').replace(/\)\s*$/, '');
    if (q.enunciado !== before) {
      console.log(`[OK] ID ${q.id}: enunciado trailing artifact removed.`);
      changed++;
    }
  }

  // ── 2. ID 3311 – remove placeholder "E) N/A" option ──────────────────────
  if (q.id === 3311 && Array.isArray(q.opcoes)) {
    const before = q.opcoes.length;
    q.opcoes = q.opcoes.filter(op => !/^E\)\s*N\/A\s*$/i.test(op));
    if (q.opcoes.length !== before) {
      console.log(`[OK] ID 3311: removed "E) N/A" placeholder option.`);
      changed++;
    }
  }

  // ── 3. Expand short explicacao_geral ─────────────────────────────────────
  if (EXPANDED_EXPLICACOES[q.id]) {
    const before = q.explicacao_geral;
    q.explicacao_geral = EXPANDED_EXPLICACOES[q.id];
    if (q.explicacao_geral !== before) {
      console.log(`[OK] ID ${q.id}: explicacao_geral expanded (${before.length} → ${q.explicacao_geral.length} chars).`);
      changed++;
    }
  }
}

const output = Array.isArray(data) ? questoes : { ...data, questoes };
writeFileSync(QUESTOES_PATH, JSON.stringify(output, null, 2), 'utf8');
console.log(`\n✅ Done. ${changed} fields modified. File saved.`);
