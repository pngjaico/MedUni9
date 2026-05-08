import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const MATERIAL_DIR = path.join(ROOT, 'data', 'materiais', 'clinica_medica5');
const AULAS = Array.from({ length: 21 }, (_, idx) => `cm5_a${idx + 1}`);

function readText(file) {
  return fs.readFileSync(file, 'utf8').replace(/\r\n/g, '\n');
}

function sectionBody(md, headingPattern) {
  const heading = new RegExp(`^##\\s+${headingPattern}\\s*$`, 'im').exec(md);
  if (!heading) return '';
  const rest = md.slice(heading.index + heading[0].length);
  const next = /^##\s+/im.exec(rest);
  return next ? rest.slice(0, next.index) : rest;
}

function countMiniQuiz(md) {
  const body = sectionBody(md, 'Mini Quiz');
  return (body.match(/^\s*\*\*\d+\.\s/gm) || []).length;
}

function auditAula(aula) {
  const file = path.join(MATERIAL_DIR, `${aula}.md`);
  if (!fs.existsSync(file)) {
    return { aula, lines: 0, sections: 0, persona: 0, keyBullets: 0, keyBolds: 0, miniQuiz: 0, issues: ['ausente'] };
  }

  const md = readText(file);
  const pontos = sectionBody(md, 'Pontos-Chave(?:\\s+para\\s+Prova)?');
  const lines = md.split('\n').length;
  const sections = (md.match(/^##\s+/gm) || []).length;
  const persona = (md.match(/MedGradPlus/g) || []).length;
  const keyBullets = (pontos.match(/^\s*-\s+/gm) || []).length;
  const keyBolds = (pontos.match(/\*\*[^*\n][^*\n]*\*\*/g) || []).length;
  const miniQuiz = countMiniQuiz(md);
  const issues = [];

  if (lines < 240) issues.push('curto');
  if (sections < 12) issues.push('poucas_secoes');
  if (persona < 3) issues.push('persona_baixa');
  if (keyBullets < 10) issues.push('poucos_pontos');
  if (keyBolds < 8) issues.push('pouco_negrito_pontos');
  if (miniQuiz < 5 || miniQuiz > 8) issues.push('miniquiz_fora_contrato');

  return { aula, lines, sections, persona, keyBullets, keyBolds, miniQuiz, issues };
}

const rows = AULAS.map(auditAula);

for (const row of rows) {
  console.log(
    [
      row.aula.padEnd(7),
      `linhas=${String(row.lines).padStart(3)}`,
      `secoes=${String(row.sections).padStart(2)}`,
      `persona=${row.persona}`,
      `pontos=${String(row.keyBullets).padStart(2)}`,
      `negritos_pontos=${String(row.keyBolds).padStart(2)}`,
      `mini=${row.miniQuiz}`,
      `issues=${row.issues.length ? row.issues.join(',') : 'ok'}`,
    ].join('  ')
  );
}

const flagged = rows.filter((row) => row.issues.length);
console.log('');
console.log(`CM5 audit: ${rows.length - flagged.length}/${rows.length} passam no piso novo.`);
if (flagged.length) {
  console.log(`Revisao necessaria: ${flagged.map((row) => row.aula).join(', ')}`);
}
