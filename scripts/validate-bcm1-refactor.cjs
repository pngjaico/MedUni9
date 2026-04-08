const fs = require('fs');
const path = require('path');
const dir = path.join(__dirname, '..', 'data', 'bcm1_refactor');
const expected = [0, 1, 2, 3, 2, 3, 0, 1, 2, 3];
let ok = true;
for (let n = 1; n <= 21; n++) {
  const file = path.join(dir, `bcm1_a${n}.json`);
  if (!fs.existsSync(file)) {
    console.log('FALTA', file);
    ok = false;
    continue;
  }
  const j = JSON.parse(fs.readFileSync(file, 'utf8'));
  const dcount = { 1: 0, 2: 0, 3: 0 };
  j.forEach((q, i) => {
    dcount[q.dificuldade]++;
    if (q.correta !== expected[i]) {
      console.log(`bcm1_a${n} pos ${i + 1} id ${q.id}: correta ${q.correta}, esperado ${expected[i]}`);
      ok = false;
    }
  });
  if (dcount[1] !== 2 || dcount[2] !== 5 || dcount[3] !== 3) {
    console.log(`bcm1_a${n} dificuldade:`, dcount, 'esperado 2/5/3');
    ok = false;
  }
}
console.log(ok ? 'VALIDAÇÃO OK' : 'VALIDAÇÃO FALHOU');
