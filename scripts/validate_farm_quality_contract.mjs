import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

function readJson(rel) {
  return JSON.parse(fs.readFileSync(path.join(ROOT, rel), 'utf8'));
}

function readText(rel) {
  return fs.readFileSync(path.join(ROOT, rel), 'utf8').replace(/\r\n/g, '\n');
}

function fail(message) {
  throw new Error(message);
}

function getArgList(name) {
  const prefix = `--${name}=`;
  const arg = process.argv.find((x) => x.startsWith(prefix));
  if (!arg) return [];
  return arg.slice(prefix.length).split(',').map((x) => x.trim()).filter(Boolean);
}

function countMiniQuiz(md) {
  const m = /^## Mini Quiz\s*$/im.exec(md);
  if (!m) return 0;
  const rest = md.slice(m.index + m[0].length);
  const next = /^##\s+/im.exec(rest);
  const body = next ? rest.slice(0, next.index) : rest;
  return (body.match(/^\s*\*\*\d+\.\s/gm) || []).length;
}

const aulas = getArgList('aulas');
if (!aulas.length) fail('Use --aulas=farm_a1,farm_a2');

const questoes = readJson('data/questoes.json').questoes || [];
const flashcards = readJson('data/flashcards.json').flashcards || [];
const materias = readJson('data/materias.json');
const farmAulas = new Set((materias.farmaco_aplicada?.aulas || []).map((a) => a.id));

const issues = [];

for (const aula of aulas) {
  if (!farmAulas.has(aula)) issues.push(`${aula}: aula_id nao existe em data/materias.json`);

  const dataRel = `data/materiais/farmaco_aplicada/${aula}.md`;
  const mirrorRel = `materiais/modulo5/farmaco_aplicada/${aula}.md`;
  if (!fs.existsSync(path.join(ROOT, dataRel))) issues.push(`${aula}: material data/ ausente`);
  if (!fs.existsSync(path.join(ROOT, mirrorRel))) issues.push(`${aula}: material espelho ausente`);
  if (!fs.existsSync(path.join(ROOT, dataRel)) || !fs.existsSync(path.join(ROOT, mirrorRel))) continue;

  const md = readText(dataRel);
  const mirror = readText(mirrorRel);
  if (md !== mirror) issues.push(`${aula}: data/materiais e materiais/modulo5 divergem`);
  if (md.split('\n').length < 180) issues.push(`${aula}: material tem menos de 180 linhas`);
  if (/^##\s+Caso da Semana\s*$/im.test(md) || /^\s*>\s*\*\*Caso da Semana/im.test(md)) issues.push(`${aula}: Caso da Semana foi removido do padrao e deve ficar fora do material`);
  if (/^##\s+Ponte com pr[oó]ximas aulas\s*$/im.test(md)) issues.push(`${aula}: secao "Ponte com proximas aulas" deve ficar fora do material`);
  if (/^##\s+Quest[oõ]es(?:\s+de\s+Resid[eê]ncia)?\s*(?:\(mapeadas\)|mapeadas)?\s*$/im.test(md)) issues.push(`${aula}: secao de questoes mapeadas/residencia deve ficar fora do material`);
  if (/^###\s+Bancas\s+-\s+onde isso cai\s*$/im.test(md)) issues.push(`${aula}: subsection de bancas deve ficar fora do material`);
  const miniQuizCount = countMiniQuiz(md);
  if (miniQuizCount < 5 || miniQuizCount > 8) issues.push(`${aula}: Mini Quiz tem ${miniQuizCount} questoes (esperado 5-8)`);

  const qs = questoes.filter((q) => q.aula_id === aula || q.tema === aula);
  const essenciais = qs.filter((q) => q.essencial === true);
  if (essenciais.length < 10 || essenciais.length > 12) {
    issues.push(`${aula}: ${essenciais.length} questoes essenciais (esperado 10-12)`);
  }
  for (const q of essenciais) {
    if (q.materia !== 'farmaco_aplicada') issues.push(`${aula}: questao ${q.id} materia incorreta`);
    if (q.tema !== aula || q.aula_id !== aula) issues.push(`${aula}: questao ${q.id} tema/aula_id divergente`);
    if (!Array.isArray(q.opcoes) || q.opcoes.length !== 4) issues.push(`${aula}: questao ${q.id} sem 4 alternativas`);
    if (!Number.isInteger(q.correta) || q.correta < 0 || q.correta > 3) issues.push(`${aula}: questao ${q.id} correta invalida`);
    if (!q.explicacao_geral || !q.explicacoes_opcoes || !q.explicacao) issues.push(`${aula}: questao ${q.id} explicacao incompleta`);
  }

  const cards = flashcards.filter((fc) => fc.tema === aula || fc.aula_id === aula);
  if (cards.length < 10 || cards.length > 12) issues.push(`${aula}: ${cards.length} flashcards (esperado 10-12)`);
  for (const fc of cards) {
    if (fc.materia !== 'farmaco_aplicada') issues.push(`${aula}: flashcard ${fc.id} materia incorreta`);
    if (fc.tema !== aula) issues.push(`${aula}: flashcard ${fc.id} tema divergente`);
    if (String(fc.frente || '').length > 190) issues.push(`${aula}: flashcard ${fc.id} frente longa demais`);
    if (String(fc.verso || '').length > 150) issues.push(`${aula}: flashcard ${fc.id} verso longo demais`);
    if (!String(fc.frente || '').includes('{{c1::')) issues.push(`${aula}: flashcard ${fc.id} sem cloze c1`);
  }
}

if (issues.length) {
  console.error('Contrato FARM falhou:');
  for (const issue of issues) console.error(`- ${issue}`);
  process.exit(1);
}

console.log(`Contrato FARM OK: ${aulas.join(', ')}`);
