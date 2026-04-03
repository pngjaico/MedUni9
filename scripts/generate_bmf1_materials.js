const fs = require('fs');
const path = require('path');

const root = process.cwd();
const materiasPath = path.join(root, 'data', 'materias.json');
const outDir = path.join(root, 'materiais', 'modulo1', 'bmf1');

const materias = JSON.parse(fs.readFileSync(materiasPath, 'utf8'));
const bmf = materias.bmf1;
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

function aulaNumero(id) {
  return Number(id.split('_a')[1]);
}

function ponteClinica(tema) {
  const t = tema.toLowerCase();
  if (/esquel|ósseo|ossos|ossifica/.test(t)) {
    return 'Na clínica, este tema é essencial para entender fraturas, consolidação óssea, dor musculoesquelética e leitura de radiografias simples. Em prova, os professores costumam cobrar a correlação entre estrutura, função mecânica e processo de reparo.';
  }
  if (/articul|cartilag/.test(t)) {
    return 'No ambulatório, este conteúdo ajuda a diferenciar dor mecânica de dor inflamatória e orienta um exame físico articular mais preciso. Em prova, a Uninove costuma cruzar classificação articular com biomecânica e lesões comuns.';
  }
  if (/muscular|contração/.test(t)) {
    return 'No raciocínio clínico, este tema explica fraqueza, fadiga e alterações de tônus, além de sustentar a interpretação de exames neuromusculares. Nas avaliações, é comum a cobrança da sequência fisiológica da contração e dos tipos de fibra.';
  }
  if (/epitel|tegumento|adiposo/.test(t)) {
    return 'Em clínica médica e dermatologia básica, este conteúdo aparece na interpretação de lesões de pele, cicatrização e função de barreira cutânea. Em prova, os professores exploram diferenças histológicas e sua relação com proteção e secreção.';
  }
  if (/boca|língua|faringe|abdominal|peritônio|intest|fígado|biliares|pâncreas|digest/.test(t)) {
    return 'Na prática, este tema sustenta o exame abdominal, a topografia da dor e a leitura de achados cirúrgicos básicos. Em prova, a Uninove frequentemente pede relação entre anatomia regional, vascularização e possíveis complicações clínicas.';
  }
  return 'Na prática clínica, este conteúdo aparece em discussões de exame físico, interpretação de imagem e correlação anatômico-funcional. Quando você domina os marcos da aula, fica mais fácil justificar sinais e sintomas e responder questões da Uninove com segurança.';
}

for (const aula of bmf.aulas) {
  const n = aulaNumero(aula.id);
  if (n < 3) continue;

  const tema = aula.tema;
  const descricao = aula.descricao;

  const md = `# BMF1 — Aula ${n}: ${tema}

**Disciplina:** ${bmf.nome}
**Módulo:** 1 | **Tempo de estudo sugerido:** 10-15 min

---

## Por que isso cai na prova?

A Uninove e os professores cobram ${tema} porque esse conteúdo é base para interpretar estrutura, função e alteração clínica no módulo locomotor e digestório. Quando você entende os marcos anatômicos e histológicos da aula, consegue resolver questões de correlação clínica sem depender de decoreba isolada.

---

## 1. Conceitos-chave de ${tema}

${descricao}

| Ponto central | O que você precisa saber | Onde costuma cair |
|---|---|---|
| **Definição do tema** | Conceito principal e terminologia correta da aula | Questões objetivas de conceito |
| **Organização estrutural** | Relação entre macroanatomia e histologia | Itens de associação imagem-texto |
| **Função biológica** | Como a estrutura determina a função | Casos clínicos curtos |

---

## 2. Aplicação prática e integração

| Situação de estudo | Raciocínio esperado | Erro frequente |
|---|---|---|
| **Revisão teórica** | Diferenciar classificação, localização e função | Confundir nomes parecidos |
| **Questão clínica** | Ligar anatomia à queixa do paciente | Ignorar contexto funcional |
| **Prática de laboratório** | Reconhecer estruturas e marcos anatômicos | Decorar sem orientação espacial |

---

## Erros Clássicos em Prova (Uninove)

- Trocar nomenclatura anatômica correta por sinônimos imprecisos.
- Memorizar listas sem correlacionar estrutura e função.
- Ignorar relações topográficas essenciais para interpretação clínica.

---

## Checklist de Revisão

- [ ] Consigo explicar os conceitos principais desta aula em até 2 minutos.
- [ ] Sei diferenciar as estruturas cobradas com nomenclatura anatômica correta.
- [ ] Consigo correlacionar estrutura, função e manifestação clínica.
- [ ] Resolvo uma questão da aula sem depender de chute.

---

## Ponte com a Clínica

${ponteClinica(tema)}

---

## Pré-Prova (3 questões rápidas)

1. Qual é o conceito anatômico ou histológico central de **${tema}** e por que ele importa clinicamente?
2. Que estrutura desta aula mais se relaciona com exame físico, imagem ou procedimento básico?
3. Qual confusão de prova você evitará a partir desta revisão?
`;

  fs.writeFileSync(path.join(outDir, `${aula.id}.md`), md, 'utf8');
}

console.log('BMF1 atualizado de bmf1_a3 até bmf1_a22 em materiais/modulo1/bmf1');
