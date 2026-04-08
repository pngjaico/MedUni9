import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const p = path.join(__dirname, '..', 'data', 'questoes.json');
const j = JSON.parse(fs.readFileSync(p, 'utf8'));

const long =
  /Assinale a opção que melhor corresponde ao trecho: .Conceito A. no contexto da tabela avaliada neste tema\. Utilize a distincao conceitual entre linhas da tabela, sem inferir dados nao fornecidos\./g;
const short =
  /Assinale a opção que melhor corresponde ao trecho: .Conceito A. no contexto da tabela avaliada neste tema\.?/g;

const repLong =
  'Em relação à tabela comparativa do material, assinale a alternativa que melhor expressa o contraste ou a diferenciação entre os conceitos (sem extrapolar dados não fornecidos).';
const repShort =
  'Em relação à tabela comparativa do material, assinale a alternativa que melhor expressa o critério de diferenciação entre os conceitos.';

let n = 0;
for (const q of j.questoes) {
  if (q.modulo < 1 || q.modulo > 4) continue;
  if (long.test(q.enunciado)) {
    q.enunciado = q.enunciado.replace(long, repLong);
    n++;
  } else if (short.test(q.enunciado)) {
    q.enunciado = q.enunciado.replace(short, repShort);
    n++;
  }
  if (/Qual afirmação sobre Três /.test(q.enunciado)) {
    q.enunciado = q.enunciado.replace(
      'Qual afirmação sobre Três ',
      'Qual afirmação sobre as subdivisões da faringe e a transição alimentar/ar '
    );
    if (q.explicacao_geral) {
      q.explicacao_geral = q.explicacao_geral.replace(
        'Conceito central: Três integra',
        'Conceito central: subdivisões da faringe integram'
      );
    }
    n++;
  }
}

fs.writeFileSync(p, JSON.stringify(j, null, 2) + '\n', 'utf8');
console.log(JSON.stringify({ patched: n }));
