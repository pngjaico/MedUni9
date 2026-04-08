/**
 * Reatribui "id" em data/bcm1_refactor/bcm1_a*.json aos intervalos reais em data/questoes.json
 * (a ordem das aulas no ficheiro global não coincide com a ordem numérica _aN).
 */
const fs = require('fs');
const path = require('path');

const baseByLesson = {
  1: 802,
  10: 812,
  11: 822,
  12: 832,
  13: 842,
  14: 852,
  15: 862,
  16: 872,
  17: 882,
  18: 892,
  19: 902,
  2: 912,
  20: 922,
  21: 932,
  3: 942,
  4: 952,
  5: 962,
  6: 972,
  7: 982,
  8: 992,
  9: 1002,
};

const dir = path.join(__dirname, '..', 'data', 'bcm1_refactor');

for (let n = 1; n <= 21; n++) {
  const file = path.join(dir, `bcm1_a${n}.json`);
  const base = baseByLesson[n];
  const arr = JSON.parse(fs.readFileSync(file, 'utf8'));
  if (!Array.isArray(arr) || arr.length !== 10) {
    console.error('Array inválido', file);
    process.exit(1);
  }
  const sorted = [...arr].sort((a, b) => a.id - b.id);
  sorted.forEach((q, i) => {
    q.id = base + i;
    q.tema = `bcm1_a${n}`;
  });
  fs.writeFileSync(file, JSON.stringify(sorted, null, 2) + '\n');
  console.log(`bcm1_a${n}: ids ${base}..${base + 9}`);
}
console.log('OK remap');
