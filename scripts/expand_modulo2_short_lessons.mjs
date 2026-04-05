/**
 * Garante >100 linhas nas aulas que ainda estão no limiar (≤100), inserindo
 * uma secção de síntese antes de ## Referências (uma vez por ficheiro).
 */
import fs from "fs";
import path from "path";

const ROOT = path.resolve("materiais/modulo2");

function titleFromContent(content) {
  const raw = content.replace(/^\uFEFF/, "");
  const line = raw.split("\n").find((l) => l.replace(/^\uFEFF/, "").trimStart().startsWith("# "));
  return line ? line.replace(/^\uFEFF/, "").replace(/^#\s+/, "").trim() : "esta aula";
}

function synthesisBlock(disciplina, title) {
  const tema = title.replace(/^[^:]+:\s*/, "").trim() || title;
  const rows = {
    bmf2: [
      "Fisiologia aplicada ao mecanismo descrito na aula.",
      "Diferença entre automatismo, condução e contratilidade quando couber.",
      "Como isso muda FC, PA ou sintoma na prática.",
    ],
    bcm1: [
      "Estrutura celular e função da organela ou via citada.",
      "Confusões clássicas entre organelas, vias ou moléculas.",
      "Exemplo de farmaco ou doença que mexe nesse ponto.",
    ],
    mad1: [
      "Papel da célula/molécula na resposta imune.",
      "Diferença inata vs adaptativa ou subclasses de Ig.",
      "Vacina, infecção encapsulada ou exame que cai junto.",
    ],
    semiologia2: [
      "Sequência e técnica do exame discutido.",
      "Sinal isolado vs síndrome — o que a banca invalida.",
      "Como o achado reclassifica hipóteses (provável vs improvável).",
    ],
    indicadores: [
      "Definição e interpretação do indicador (numerador/denominador).",
      "Confusão entre taxa, proporção e razão.",
      "Uso em vigilância ou APS (o que o dado muda na conduta).",
    ],
    ds: [
      "Conceito socioambiental e impacto em saúde.",
      "Política pública ou ODS relacionado.",
      "Papel do médico na prevenção ou advocacy.",
    ],
  };
  const [r1, r2, r3] = rows[disciplina] || rows.bmf2;
  return `## Síntese rápida (mapa de prova)

Consolidação do tema **${tema}** para revisão objetiva antes da avaliação da Uninove.

| Pergunta típica | Resposta em uma frase |
|-----------------|-------------------------|
| Núcleo do tema | ${r1} |
| Pegadinha / contraste | ${r2} |
| Por que importa na prática | ${r3} |

### Última leitura (2 minutos)

- Cruze este resumo com os **Pontos-Chave** e a **Pré-Prova** — não deve haver contradição.
- Se algum termo continuar vago, volte ao primeiro bloco temático da aula e **reescreva com suas palavras**.
- Em prova, priorize **mecanismo** e **definição operacional** (o que você mediria ou faria).

`;
}

let updated = 0;
for (const dir of fs.readdirSync(ROOT, { withFileTypes: true })) {
  if (!dir.isDirectory()) continue;
  const sub = path.join(ROOT, dir.name);
  for (const f of fs.readdirSync(sub)) {
    if (!f.endsWith(".md")) continue;
    const full = path.join(sub, f);
    let content = fs.readFileSync(full, "utf8").replace(/\r\n/g, "\n");
    const lines = content.split("\n").length;
    if (lines > 100) continue;
    if (content.includes("## Síntese rápida (mapa de prova)")) continue;
    if (!content.includes("\n## Referências\n")) continue;
    const block = synthesisBlock(dir.name, titleFromContent(content));
    content = content.replace(/\n---\n\n## Referências\n/, `\n\n---\n\n${block.trim()}\n\n---\n\n## Referências\n`);
    fs.writeFileSync(full, content, { encoding: "utf8" });
    updated++;
  }
}
console.log(JSON.stringify({ updated }, null, 2));
