/**
 * audit_essenciais_coverage.mjs
 * Gera relatório de cobertura das questões essenciais por aula.
 * Uso: node scripts/audit_essenciais_coverage.mjs
 * Saída: data/agent_logs/essenciais_coverage.md
 */

import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');

const materias = JSON.parse(readFileSync(path.join(ROOT, 'data/materias.json'), 'utf8'));
const { questoes } = JSON.parse(readFileSync(path.join(ROOT, 'data/questoes.json'), 'utf8'));

// Build essencial/total counts per aula
const ess = {}, tot = {}, diffs = {};
for (const q of questoes) {
  if (!q.aula_id) continue;
  tot[q.aula_id] = (tot[q.aula_id] || 0) + 1;
  if (q.essencial === true) {
    ess[q.aula_id] = (ess[q.aula_id] || 0) + 1;
    if (!diffs[q.aula_id]) diffs[q.aula_id] = [];
    diffs[q.aula_id].push(q.dificuldade || 0);
  }
}

function hasMd(materiaId, aulaId, modulo) {
  return [
    path.join(ROOT, `materiais/modulo${modulo}/${materiaId}/${aulaId}.md`),
    path.join(ROOT, `data/materiais/${materiaId}/${aulaId}.md`),
  ].some(p => existsSync(p));
}

function status(nEss, nTot, md) {
  if (nEss === 0 && !md) return '⬜ SEM-MD';
  if (nEss === 0) return '🔴 ZERO';
  if (nEss >= 1 && nEss < 5) return '🟡 ABAIXO';
  if (nEss >= 5 && nEss <= 7) return '✅ OK';
  return '🔵 EXCESSO';
}

const rows = [];
for (const [materiaId, m] of Object.entries(materias)) {
  if (!m.aulas) continue;
  for (const a of m.aulas) {
    const nEss = ess[a.id] || 0;
    const nTot = tot[a.id] || 0;
    const md = hasMd(materiaId, a.id, m.modulo);
    const d = diffs[a.id] || [];
    const nD1 = d.filter(x => x === 1).length;
    const nD2 = d.filter(x => x === 2).length;
    const nD3 = d.filter(x => x === 3).length;
    rows.push({
      materia: materiaId, modulo: m.modulo, aulaId: a.id,
      tema: a.tema || '', nEss, nTot, md, status: status(nEss, nTot, md),
      diffs: d.join(','), nD1, nD2, nD3,
    });
  }
}

// Sort: status priority, then materia, then aulaId
const statusOrder = { '🔴 ZERO': 0, '🟡 ABAIXO': 1, '🔵 EXCESSO': 2, '✅ OK': 3, '⬜ SEM-MD': 4 };
rows.sort((a, b) =>
  (statusOrder[a.status] - statusOrder[b.status]) ||
  a.materia.localeCompare(b.materia) ||
  a.aulaId.localeCompare(b.aulaId)
);

// Summary counts
const counts = { ok: 0, zero: 0, abaixo: 0, excesso: 0, semMd: 0 };
for (const r of rows) {
  if (r.status === '✅ OK') counts.ok++;
  else if (r.status === '🔴 ZERO') counts.zero++;
  else if (r.status === '🟡 ABAIXO') counts.abaixo++;
  else if (r.status === '🔵 EXCESSO') counts.excesso++;
  else counts.semMd++;
}

// Build markdown
const now = new Date().toISOString().slice(0, 10);
let md = `# Relatório de Cobertura — Essenciais\n\n`;
md += `> Gerado em: ${now} | Meta: 5–7 essenciais por aula\n\n`;
md += `## Resumo\n\n`;
md += `| Status | Aulas |\n|---|---|\n`;
md += `| ✅ OK (5–7) | ${counts.ok} |\n`;
md += `| 🔵 Excesso (8+) | ${counts.excesso} |\n`;
md += `| 🟡 Abaixo (1–4) | ${counts.abaixo} |\n`;
md += `| 🔴 Zero + tem .md | ${counts.zero} |\n`;
md += `| ⬜ Zero + sem .md | ${counts.semMd} |\n`;
md += `| **Total** | **${rows.length}** |\n\n`;

md += `## Detalhe por Aula\n\n`;
md += `| Status | Matéria | Mod | Aula | Tema | Ess | Tot | D1 | D2 | D3 |\n`;
md += `|---|---|---|---|---|---|---|---|---|---|\n`;
for (const r of rows) {
  md += `| ${r.status} | ${r.materia} | ${r.modulo} | ${r.aulaId} | ${r.tema.slice(0, 50)} | ${r.nEss} | ${r.nTot} | ${r.nD1} | ${r.nD2} | ${r.nD3} |\n`;
}

const outDir = path.join(ROOT, 'data/agent_logs');
if (!existsSync(outDir)) mkdirSync(outDir, { recursive: true });
const outPath = path.join(outDir, 'essenciais_coverage.md');
writeFileSync(outPath, md, 'utf8');
console.log(`✅ Relatório salvo em: ${outPath}`);
console.log(`\nResumo:`);
console.log(`  ✅ OK:       ${counts.ok} aulas`);
console.log(`  🔵 Excesso:  ${counts.excesso} aulas`);
console.log(`  🟡 Abaixo:   ${counts.abaixo} aulas`);
console.log(`  🔴 Zero+md:  ${counts.zero} aulas`);
console.log(`  ⬜ Zero+sem: ${counts.semMd} aulas`);
console.log(`  Total:       ${rows.length} aulas`);
