
const md = `---

## Mini Quiz

1. **Qual característica eletrofisiológica do Nó Atrioventricular (AV) é essencial para a função cardíaca normal?**
   - [ ] Aceleração do impulso elétrico para 4,0 m/s.
   - [x] Promoção de um atraso fisiológico na condução.

## Pré-Prova
`;

function test(md) {
    const parts = md.split(/^#{2,3}\s*Mini\s*Quiz\s*[\r\n]+/im);
    if (parts.length < 2) return "NOT FOUND";
    
    const content = parts[1].split(/^#+/m)[0];
    return content.trim();
}

console.log("Result:", JSON.stringify(test(md)));
