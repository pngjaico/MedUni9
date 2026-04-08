/**
 * Aplica patches em scripts/semio1-patches/semio1_a{N}.json
 * sobre entradas existentes de data/questoes.json (preserva id, materia, tema, modulo).
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const questoesPath = path.join(root, 'data', 'questoes.json');
const patchDir = path.join(__dirname, 'semio1-patches');

const BASE_IDS = {
  semio1_a1: 622,
  semio1_a2: 632,
  semio1_a3: 642,
  semio1_a4: 652,
  semio1_a5: 662,
  semio1_a6: 672,
  semio1_a7: 682,
  semio1_a8: 692,
  semio1_a9: 702,
};

function validateLote(patchArr, tema) {
  if (patchArr.length !== 10) throw new Error(`${tema}: esperado 10 itens, tem ${patchArr.length}`);
  const dif = { 1: 0, 2: 0, 3: 0 };
  const corr = { 0: 0, 1: 0, 2: 0, 3: 0 };
  for (const q of patchArr) {
    dif[q.dificuldade]++;
    corr[q.correta]++;
  }
  if (dif[1] !== 2 || dif[2] !== 5 || dif[3] !== 3) {
    throw new Error(`${tema}: dificuldade 2/5/3 falhou → ${JSON.stringify(dif)}`);
  }
  for (const k of [0, 1, 2, 3]) {
    if (corr[k] < 2 || corr[k] > 3) {
      throw new Error(`${tema}: correta ~25% falhou → A:${corr[0]} B:${corr[1]} C:${corr[2]} D:${corr[3]}`);
    }
  }
}

const db = JSON.parse(fs.readFileSync(questoesPath, 'utf8'));
const byId = new Map(db.questoes.map((q) => [q.id, q]));

for (const [tema, baseId] of Object.entries(BASE_IDS)) {
  const fname = `${tema}.json`;
  const patchPath = path.join(patchDir, fname);
  if (!fs.existsSync(patchPath)) {
    console.warn('SKIP (ficheiro em falta):', fname);
    continue;
  }
  const patchArr = JSON.parse(fs.readFileSync(patchPath, 'utf8'));
  validateLote(patchArr, tema);
  patchArr.forEach((patch, idx) => {
    const id = baseId + idx;
    const cur = byId.get(id);
    if (!cur || cur.materia !== 'semiologia1' || cur.tema !== tema) {
      throw new Error(`Mismatch id ${id}: esperado semiologia1/${tema}, veio ${cur?.materia}/${cur?.tema}`);
    }
    Object.assign(cur, {
      enunciado: patch.enunciado,
      opcoes: patch.opcoes,
      correta: patch.correta,
      dificuldade: patch.dificuldade,
      explicacao_geral: patch.explicacao_geral,
      explicacoes_opcoes: patch.explicacoes_opcoes,
      explicacao: patch.explicacao,
    });
  });
  console.log('OK', tema, baseId, '-', baseId + 9);
}

fs.writeFileSync(questoesPath, JSON.stringify(db, null, 2) + '\n', 'utf8');
console.log('Gravado', questoesPath);
JSON.parse(fs.readFileSync(questoesPath, 'utf8'));
console.log('JSON válido.');
