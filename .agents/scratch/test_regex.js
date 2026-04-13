
const md = `---

## Mini Quiz

1. **Qual característica eletrofisiológica do Nó Atrioventricular (AV) é essencial para a função cardíaca normal?**
   - [ ] Aceleração do impulso elétrico para 4,0 m/s.
   - [x] Promoção de um atraso fisiológico na condução.

## Pré-Prova
`;

const quizRe = /^#{2,3}\s*Mini\s*Quiz\s*[\r\n]+([\s\S]*?)(?=\n## |$)/im;
const match = md.match(quizRe);

if (match) {
    console.log("MATCH FOUND!");
    console.log("Content:", match[1]);
} else {
    console.log("NO MATCH");
}
