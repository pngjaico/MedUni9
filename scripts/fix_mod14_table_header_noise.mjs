import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const p = path.join(__dirname, '..', 'data', 'questoes.json');
const j = JSON.parse(fs.readFileSync(p, 'utf8'));

const bad =
  'Conceito A — Conceito B — Como diferenciar';
const repl =
  'Critério genérico de colunas (rótulos), sem o conteúdo de diferenciação pedido na prova.';
const badSummary = /Interpretacao de tabela: Conceito A\.?/g;
const repSummary = 'Interpretação de tabela comparativa do material.';

let n = 0;
for (const q of j.questoes) {
  if (q.modulo < 1 || q.modulo > 4) continue;
  const apply = (s) => (typeof s === 'string' && s.includes(bad) ? s.split(bad).join(repl) : s);
  let ch = false;
  if (q.enunciado && q.enunciado.includes(bad)) {
    q.enunciado = apply(q.enunciado);
    ch = true;
  }
  if (q.opcoes) {
    q.opcoes = q.opcoes.map((o) => {
      if (o.includes(bad)) {
        ch = true;
        return apply(o);
      }
      return o;
    });
  }
  if (q.explicacao_geral && badSummary.test(q.explicacao_geral)) {
    q.explicacao_geral = q.explicacao_geral.replace(badSummary, repSummary);
    ch = true;
  }
  if (q.explicacoes_opcoes) {
    for (const k of Object.keys(q.explicacoes_opcoes)) {
      if (q.explicacoes_opcoes[k].includes(bad)) {
        q.explicacoes_opcoes[k] = apply(q.explicacoes_opcoes[k]);
        ch = true;
      }
      if (badSummary.test(q.explicacoes_opcoes[k])) {
        q.explicacoes_opcoes[k] = q.explicacoes_opcoes[k].replace(badSummary, repSummary);
        ch = true;
      }
    }
  }
  if (q.explicacao && (q.explicacao.includes(bad) || badSummary.test(q.explicacao))) {
    q.explicacao = apply(q.explicacao.replace(badSummary, repSummary));
    ch = true;
  }
  if (ch) n++;
}

fs.writeFileSync(p, JSON.stringify(j, null, 2) + '\n', 'utf8');
console.log(JSON.stringify({ rowsTouched: n }));
