/**
 * Reordena opções para que a resposta correta (primeira string em `right`)
 * fique no índice `targetCorreta` (0–3). Demais opções: `wrongs` em ordem.
 * Uso: node scripts/bcm1-fix-pattern.cjs
 */
const pattern = [0, 1, 2, 3, 2, 3, 0, 1, 2, 3];

function buildOptions(right, wrongs, targetCorreta) {
  const w = [...wrongs];
  const out = [];
  for (let i = 0; i < 4; i++) {
    if (i === targetCorreta) out.push(right);
    else out.push(w.shift());
  }
  return out.map((t, i) => `${String.fromCharCode(65 + i)}) ${t}`);
}

// Exemplo — descomentar para testar
// console.log(buildOptions('certo', ['e1','e2','e3'], 2));

module.exports = { pattern, buildOptions };
