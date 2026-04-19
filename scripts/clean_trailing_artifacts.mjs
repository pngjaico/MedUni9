/**
 * clean_trailing_artifacts.mjs
 * Remove trailing ),  ou ) no final de strings em todos os campos
 * das questões dos módulos 1-4 (essenciais e não-essenciais).
 * Campos: enunciado, opcoes[], explicacao, explicacao_geral, explicacoes_opcoes{}
 */

import { readFileSync, writeFileSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');
const QUESTOES_PATH = path.join(ROOT, 'data/questoes.json');

const data = JSON.parse(readFileSync(QUESTOES_PATH, 'utf8'));
const questoes = data.questoes;

const MOD14_MATS = new Set([
  'sus','semiologia1','bmf1','pmh',
  'bmf2','semiologia2','mad1','bcm1','indicadores','ds',
  'bmf3','semiologia3','mad2','fisiopato3','saude_trabalhador',
  'bmf4','semiologia4','fisiopato_farmaco','bioestatistica',
]);

// Remove trailing ),  ou ) (com espaços opcionais) no final da string
const fix = (s) => {
  if (typeof s !== 'string') return s;
  return s.replace(/\)\s*,\s*$/, '').replace(/\)\s*$/, s.endsWith(')') && s.length > 2 ? '' : s.slice(-1));
};

// Versão mais robusta: remove a sequência ),? no final
const cleanEnd = (s) => {
  if (typeof s !== 'string') return s;
  return s.replace(/\s*\)\s*,?\s*$/, match => {
    // Só remove se não for parte do conteúdo legítimo (ex: "(Ver tabela)")
    // Regra: remove somente se o ) for o último caractere significativo
    return '';
  });
};

// Regex para trailing artifact: ) ou ), no final (após conteúdo real)
const TRAIL_RE = /\)\s*,?\s*$/;

function cleanStr(s) {
  if (typeof s !== 'string' || !TRAIL_RE.test(s)) return s;
  return s.replace(TRAIL_RE, '');
}

let fixes = 0;

for (const q of questoes) {
  if (!MOD14_MATS.has(q.materia)) continue;

  // enunciado
  if (q.enunciado) {
    const cleaned = cleanStr(q.enunciado);
    if (cleaned !== q.enunciado) { q.enunciado = cleaned; fixes++; }
  }

  // opcoes[]
  if (Array.isArray(q.opcoes)) {
    for (let i = 0; i < q.opcoes.length; i++) {
      const cleaned = cleanStr(q.opcoes[i]);
      if (cleaned !== q.opcoes[i]) { q.opcoes[i] = cleaned; fixes++; }
    }
  }

  // explicacao
  if (q.explicacao) {
    const cleaned = cleanStr(q.explicacao);
    if (cleaned !== q.explicacao) { q.explicacao = cleaned; fixes++; }
  }

  // explicacao_geral
  if (q.explicacao_geral) {
    const cleaned = cleanStr(q.explicacao_geral);
    if (cleaned !== q.explicacao_geral) { q.explicacao_geral = cleaned; fixes++; }
  }

  // explicacoes_opcoes{}
  if (q.explicacoes_opcoes && typeof q.explicacoes_opcoes === 'object') {
    for (const key of Object.keys(q.explicacoes_opcoes)) {
      const cleaned = cleanStr(q.explicacoes_opcoes[key]);
      if (cleaned !== q.explicacoes_opcoes[key]) {
        q.explicacoes_opcoes[key] = cleaned;
        fixes++;
      }
    }
  }
}

writeFileSync(QUESTOES_PATH, JSON.stringify({ ...data, questoes }, null, 2), 'utf8');
console.log(`✅ Artifacts removidos: ${fixes} campos corrigidos`);

// Verificação pós-limpeza
const MOD14_LIST = [...MOD14_MATS];
let remaining = 0;
for (const q of questoes) {
  if (!MOD14_MATS.has(q.materia)) continue;
  if (q.essencial !== true) continue;
  if (q.enunciado && TRAIL_RE.test(q.enunciado)) remaining++;
  if (Array.isArray(q.opcoes) && q.opcoes.some(o => TRAIL_RE.test(o))) remaining++;
}
console.log(`🔍 Essenciais com trailing ) restantes: ${remaining}`);
