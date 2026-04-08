import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');
const QPATH = path.join(ROOT, 'data', 'questoes.json');

const LETRAS = ['A', 'B', 'C', 'D'];

function stripPref(s) {
  return String(s || '').replace(/^[A-D]\)\s*/i, '').trim();
}

function withPref(i, txt) {
  return `${LETRAS[i]}) ${txt}`;
}

/**
 * Reordena opções para que o texto que estava em oldCorreta passe a newCorreta.
 * Preenche as outras posições com os textos restantes, preservando ordem relativa.
 */
function reorderOpcoes(opcoes, oldCorreta, newCorreta) {
  const texts = opcoes.map(stripPref);
  const perm = new Array(4);
  perm[newCorreta] = oldCorreta;
  const rest = [0, 1, 2, 3].filter((i) => i !== oldCorreta);
  let ri = 0;
  for (let pos = 0; pos < 4; pos++) {
    if (perm[pos] === undefined) {
      perm[pos] = rest[ri++];
    }
  }
  const novas = perm.map((oldIdx, pos) => withPref(pos, texts[oldIdx]));
  return { opcoes: novas, correta: newCorreta };
}

function rebuildExplicacaoGeral(expGeral, enunciadoSnippet) {
  if (!expGeral || expGeral.startsWith('A questão ')) {
    return `Integra determinantes sociais, território e cuidado na APS.`;
  }
  return expGeral;
}

function rebuildExplanations(opcoes, correta) {
  const texts = opcoes.map(stripPref);
  const exp = {};
  for (let i = 0; i < 4; i++) {
    const letter = LETRAS[i];
    const t = texts[i];
    exp[letter] =
      i === correta
        ? `Correta: ${t}`
        : `Incorreta: ${t}`;
  }
  const geral = 'Integra determinantes sociais, território e condutas em atenção primária.';
  const explicacao = [
    `Resumo: ${geral}`,
    ...LETRAS.map(
      (L, i) =>
        `${L}) ${i === correta ? 'CORRETA' : 'INCORRETA'}. ${exp[L]}`
    )
  ].join('\n');
  return { explicacao_geral: geral, explicacoes_opcoes: exp, explicacao };
}

function main() {
  const args = process.argv.slice(2);
  const materia = args[0];
  const tema = args[1];
  // Sequência de índices corretos desejados (0=A..3=D); ~25% com 12 itens: 3+3+3+3
  const targets = args[2]
    ? args[2].split(',').map((x) => Number(x.trim()))
    : null;

  if (!materia || !tema || !targets || targets.length === 0) {
    console.error(
      'Uso: node scripts/rebalance_correta_posicao.js <materia> <tema> <idx0,idx1,...>'
    );
    process.exit(1);
  }

  const data = JSON.parse(fs.readFileSync(QPATH, 'utf8'));
  const arr = data.questoes || [];
  const hit = arr.filter((q) => q.materia === materia && q.tema === tema)
    .sort((a, b) => a.id - b.id);

  if (hit.length !== targets.length) {
    console.error(
      `Esperado ${targets.length} questões, encontrado ${hit.length} para ${materia}/${tema}`
    );
    process.exit(1);
  }

  const byId = Object.fromEntries(hit.map((q) => [q.id, q]));

  for (let i = 0; i < hit.length; i++) {
    const q = hit[i];
    const oldC = q.correta;
    const newC = targets[i];
    const { opcoes, correta } = reorderOpcoes(q.opcoes, oldC, newC);
    const ex = rebuildExplanations(opcoes, correta);
    Object.assign(byId[q.id], {
      opcoes,
      correta,
      explicacao_geral: ex.explicacao_geral,
      explicacoes_opcoes: ex.explicacoes_opcoes,
      explicacao: ex.explicacao
    });
  }

  data.questoes = arr.map((q) => byId[q.id] || q);
  fs.writeFileSync(QPATH, JSON.stringify(data, null, 2), 'utf8');

  const dist = { 0: 0, 1: 0, 2: 0, 3: 0 };
  targets.forEach((t) => dist[t]++);
  console.log('OK', materia, tema, 'dist', dist);
}

main();
