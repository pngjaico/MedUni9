/**
 * Remove bloco template duplicado antes de ## Pré-Prova (lista "Conceitos" + Aplicação + Ponte genérica).
 */
const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");

const FILES = [
  "materiais/modulo3/semiologia3/semio3_a2.md",
  "materiais/modulo3/semiologia3/semio3_a3.md",
  "materiais/modulo3/semiologia3/semio3_a4.md",
  "materiais/modulo3/semiologia3/semio3_a5.md",
  "materiais/modulo3/semiologia3/semio3_a6.md",
  "materiais/modulo3/semio3/semio3_a2.md",
  "materiais/modulo3/semio3/semio3_a3.md",
  "materiais/modulo3/semio3/semio3_a4.md",
  "materiais/modulo3/semio3/semio3_a5.md",
  "materiais/modulo3/semio3/semio3_a6.md",
];

// Lista-bullets só (template), seguida de Aplicação + Ponte genérica idênticas em todas as aulas
const RE =
  /\r?\n## Conceitos Essenciais\r?\n\r?\n(?:- \*\*[^\n]+\r?\n)+\r?\n## Aplicação em Caso Clínico\r?\n\r?\nA semiologia não é memorização de sinais — é raciocínio integrado\. No caso real, primeira pergunta orienta as próximas\. Paciente com dor abdominal que piora com movimento não é a mesma história de quem tem dor mas anda tranquilo\. Essa lógica é o que diferencia resposta mediana de resposta excelente na prova com caso\.\r?\n\r?\n## Ponte com a Clínica\r?\n\r?\nNa rotina, a semiologia bem feita reduz erro diagnóstico\. Inspetor atento evita ensaios desnecessários\. Paciente que confia no examinador oferece informações mais precisas\. Essa confiança vem também de comunicação clara sobre por que se pergunta o que se pergunta, especialmente em temas sensíveis como saúde reprodutiva\.\r?\n/;

const RE_APPONTE =
  /\r?\n## Aplicação em Caso Clínico\r?\n\r?\nA semiologia não é memorização de sinais — é raciocínio integrado\. No caso real, primeira pergunta orienta as próximas\. Paciente com dor abdominal que piora com movimento não é a mesma história de quem tem dor mas anda tranquilo\. Essa lógica é o que diferencia resposta mediana de resposta excelente na prova com caso\.\r?\n\r?\n## Ponte com a Clínica\r?\n\r?\nNa rotina, a semiologia bem feita reduz erro diagnóstico\. Inspetor atento evita ensaios desnecessários\. Paciente que confia no examinador oferece informações mais precisas\. Essa confiança vem também de comunicação clara sobre por que se pergunta o que se pergunta, especialmente em temas sensíveis como saúde reprodutiva\.\r?\n/;

for (const rel of FILES) {
  const f = path.join(ROOT, rel);
  if (!fs.existsSync(f)) continue;
  let s = fs.readFileSync(f, "utf8");
  let next = s.replace(RE, "\n");
  if (next === s) next = s.replace(RE_APPONTE, "\n");
  if (next === s) {
    console.warn("no match:", rel);
    continue;
  }
  fs.writeFileSync(f, next, "utf8");
  const dst = path.join(ROOT, "data", "materiais", rel.replace(/^materiais\//, ""));
  fs.mkdirSync(path.dirname(dst), { recursive: true });
  fs.writeFileSync(dst, next, "utf8");
  console.log("stripped:", rel);
}
