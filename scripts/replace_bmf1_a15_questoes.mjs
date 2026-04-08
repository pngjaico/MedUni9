/**
 * Uma aula por vez: substitui somente bmf1_a15 (ids 322–331).
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const file = path.join(__dirname, "..", "data", "questoes.json");

const novas = [
  {
    id: 322,
    materia: "bmf1",
    tema: "bmf1_a15",
    modulo: 1,
    dificuldade: 2,
    correta: 0,
    enunciado:
      "Em uma frase, a glândula exócrina difere da endócrina, segundo a aula, porque:",
    opcoes: [
      "A) Possui ducto que conduz a secreção até superfície ou lúmen; a endócrina não usa ducto clássico para levar o produto à circulação",
      "B) Secreta exclusivamente no espaço extracelular sem contato com epitélio",
      "C) Não apresenta epitélio secretor organizado",
      "D) É, por definição, sempre holócrina",
    ],
    explicacao_geral:
      "Frase-âncora do material: sem ducto não é exócrina no sentido clássico.",
    explicacoes_opcoes: {
      A: "Correta: alinha-se aos pontos-chave e à tabela Pré-Prova.",
      B: "Incorreta: ignora ducto e lúmen.",
      C: "Incorreta: glândulas são epitélio especializado em secreção.",
      D: "Incorreta: holócrina é modo, não definição de exócrina.",
    },
    explicacao:
      "Resumo: Ducto versus produto na circulação.\nA) CORRETA.\nB) INCORRETA.\nC) INCORRETA.\nD) INCORRETA.",
  },
  {
    id: 323,
    materia: "bmf1",
    tema: "bmf1_a15",
    modulo: 1,
    dificuldade: 1,
    correta: 1,
    enunciado:
      "No modo merócrino de secreção exócrina, o que ocorre e qual exemplo típico a aula associa?",
    opcoes: [
      "A) A célula inteira desintegra-se na secreção (holócrina)",
      "B) Vesícula libera o conteúdo e a célula permanece; exemplo: sudor écrino",
      "C) Apenas a porção apical do citoplasma é perdida, sem exceções",
      "D) Não há liberação vesicular; só difusão passiva transmembrana",
    ],
    explicacao_geral:
      "Tabela de modos: merócrina = vesícula, célula íntegra.",
    explicacoes_opcoes: {
      A: "Incorreta: descreve holócrina.",
      B: "Correta: coincide com a linha Merócrina da tabela.",
      C: "Incorreta: descreve melhor apócrina.",
      D: "Incorreta: contraria o mecanismo vesicular.",
    },
    explicacao:
      "Resumo: Merócrina preserva a célula.\nA) INCORRETA.\nB) CORRETA.\nC) INCORRETA.\nD) INCORRETA.",
  },
  {
    id: 324,
    materia: "bmf1",
    tema: "bmf1_a15",
    modulo: 1,
    dificuldade: 1,
    correta: 2,
    enunciado:
      "Qual é o modo de secreção da glândula sebácea, conforme a ênfase e a ‘Dica de Prova’ da aula?",
    opcoes: [
      "A) Merócrina, como o sudor écrino",
      "B) Apócrina exclusiva, sem renovação folicular",
      "C) Holócrina — a célula inteira vira secreção",
      "D) Endócrina, por liberação no sangue",
    ],
    explicacao_geral:
      "Holócrina ↔ sebácea é par fixo para prova.",
    explicacoes_opcoes: {
      A: "Incorreta: écrino é merócrino.",
      B: "Incorreta: apócrino é outro modo.",
      C: "Correta: tabela + dica explícita.",
      D: "Incorreta: sebácea é exócrina com ducto folicular.",
    },
    explicacao:
      "Resumo: Lembrar sebácea = célula inteira na secreção.\nA) INCORRETA.\nB) INCORRETA.\nC) CORRETA.\nD) INCORRETA.",
  },
  {
    id: 325,
    materia: "bmf1",
    tema: "bmf1_a15",
    modulo: 1,
    dificuldade: 2,
    correta: 3,
    enunciado:
      "A secreção apócrina é caracterizada, na aula, por:",
    opcoes: [
      "A) Perda da célula inteira como na sebácea",
      "B) Liberação exclusiva por vesícula sem alteração do citoplasma",
      "C) Ausência de participação de glândulas mamárias em qualquer contexto didático",
      "D) Inclusão de porção apical do citoplasma na secreção; exemplos citados incluem glândulas mamárias (contexto) e sudor apócrino",
    ],
    explicacao_geral:
      "Apócrina ≠ merócrina nem holócrina.",
    explicacoes_opcoes: {
      A: "Incorreta: holócrina.",
      B: "Incorreta: merócrina.",
      C: "Incorreta: mamárias aparecem na linha da tabela.",
      D: "Correta: texto da tabela de modos.",
    },
    explicacao:
      "Resumo: ‘Topo’ do citoplasma na secreção.\nA) INCORRETA.\nB) INCORRETA.\nC) INCORRETA.\nD) CORRETA.",
  },
  {
    id: 326,
    materia: "bmf1",
    tema: "bmf1_a15",
    modulo: 1,
    dificuldade: 3,
    correta: 1,
    enunciado:
      "Sobre a glândula parótida e a nota clínica da aula, a afirmação mais adequada é:",
    opcoes: [
      "A) É predominantemente mucosa, como a sublingual",
      "B) É predominantemente serosa; o nervo facial (VII) segue trajeto relacionado — risco em cirurgia",
      "C) Drena pelo ducto de Wharton",
      "D) Não possui ducto exócrino",
    ],
    explicacao_geral:
      "Parótida serosa + VII é clássico de prova e de cabeça/pescoço.",
    explicacoes_opcoes: {
      A: "Incorreta: parótida é serosa na tabela.",
      B: "Correta: tabela + coluna de nota clínica.",
      C: "Incorreta: Wharton é submandibular.",
      D: "Incorreta: exócrina tem ducto (Stensen na prática clínica).",
    },
    explicacao:
      "Resumo: Serosa + nervo facial no quadro.\nA) INCORRETA.\nB) CORRETA.\nC) INCORRETA.\nD) INCORRETA.",
  },
  {
    id: 327,
    materia: "bmf1",
    tema: "bmf1_a15",
    modulo: 1,
    dificuldade: 2,
    correta: 2,
    enunciado:
      "A glândula submandibular, na tabela da aula, apresenta predominância e ducto assim descritos:",
    opcoes: [
      "A) Puramente serosa, sem componente mucoso",
      "B) Puramente mucosa, como a sublingual",
      "C) Mista; ducto de Wharton",
      "D) Endócrina, sem ducto nomeável",
    ],
    explicacao_geral:
      "Submandibular mista + Wharton — par memorizável.",
    explicacoes_opcoes: {
      A: "Incorreta: não é puramente serosa.",
      B: "Incorreta: sublingual é mais mucosa.",
      C: "Correta: linha da tabela de glândulas salivares.",
      D: "Incorreta: é exócrina.",
    },
    explicacao:
      "Resumo: Meio-termo secretor + ducto clássico de prova.\nA) INCORRETA.\nB) INCORRETA.\nC) CORRETA.\nD) INCORRETA.",
  },
  {
    id: 328,
    materia: "bmf1",
    tema: "bmf1_a15",
    modulo: 1,
    dificuldade: 2,
    correta: 3,
    enunciado:
      "A glândula sublingual é descrita na tabela principalmente como:",
    opcoes: [
      "A) Predominância serosa, idêntica à parótida",
      "B) Mista com ducto único de Wharton",
      "C) Ausente anatomicamente na maioria dos indivíduos",
      "D) Predominância mucosa; múltiplos ductos menores",
    ],
    explicacao_geral:
      "Contraste parótida/sublingual cai na tabela Pré-Prova.",
    explicacoes_opcoes: {
      A: "Incorreta: serosa é parótida.",
      B: "Incorreta: Wharton é submandibular.",
      C: "Incorreta: glândula habitualmente presente.",
      D: "Correta: células da tabela salivar.",
    },
    explicacao:
      "Resumo: Mucosa + ductos menores.\nA) INCORRETA.\nB) INCORRETA.\nC) INCORRETA.\nD) CORRETA.",
  },
  {
    id: 329,
    materia: "bmf1",
    tema: "bmf1_a15",
    modulo: 1,
    dificuldade: 2,
    correta: 0,
    enunciado:
      "A sialolitíase (cálculo no ducto salivar) é contextualizada na aula de forma compatível com:",
    opcoes: [
      "A) Dor colica à mastigação e inchaço glandular — a anatomia do ducto e a posição da glândula explicam o quadro",
      "B) Dor exclusivamente contínua, sem relação com mastigação",
      "C) Acometimento típico exclusivo da tireoide",
      "D) Resolução espontânea garantida sem avaliação de imagem",
    ],
    explicacao_geral:
      "Obstrução de ducto → consequências — ponte com clínica.",
    explicacoes_opcoes: {
      A: "Correta: parágrafo sobre sialolitíase.",
      B: "Incorreta: mastigação é pista citada.",
      C: "Incorreta: contexto salivar.",
      D: "Incorreta: imagem e conduta não são descartadas no texto.",
    },
    explicacao:
      "Resumo: Cálculo no ducto dói quando o fluxo e a musculatura entram em jogo.\nA) CORRETA.\nB) INCORRETA.\nC) INCORRETA.\nD) INCORRETA.",
  },
  {
    id: 330,
    materia: "bmf1",
    tema: "bmf1_a15",
    modulo: 1,
    dificuldade: 3,
    correta: 3,
    enunciado:
      "Na interface rápida com glândulas endócrinas, a aula contrasta o transporte do produto com a exócrina. Qual opção melhor captura esse contraste?",
    opcoes: [
      "A) Endócrinas liberam hormônios ao lúmen gastrointestinal por ductos principais",
      "B) Endócrinas não dependem de leito vascular para atingir o sangue",
      "C) Exócrinas secretam diretamente na circulação sem estrutura condutora",
      "D) Hormônio endócrino chega ao sangue por capilares fenestrados ou sinusoides conforme o órgão — diferente da exócrina com ducto",
    ],
    explicacao_geral:
      "Transporte rápido ao sangue vs ducto — seção endócrinas.",
    explicacoes_opcoes: {
      A: "Incorreta: ducto ao lúmen é exócrino.",
      B: "Incorreta: capilares são centrais ao conceito.",
      C: "Incorreta: inverte definições.",
      D: "Correta: síntese do parágrafo de endócrinas.",
    },
    explicacao:
      "Resumo: Circulação sem ducto clássico ao lúmen.\nA) INCORRETA.\nB) INCORRETA.\nC) INCORRETA.\nD) CORRETA.",
  },
  {
    id: 331,
    materia: "bmf1",
    tema: "bmf1_a15",
    modulo: 1,
    dificuldade: 3,
    correta: 1,
    enunciado:
      "Em microscopia e texto, a distinção entre secreção serosa e mucosa, segundo a aula, é que:",
    opcoes: [
      "A) Mucosa é aquosa e rica em enzimas; serosa é espessa e apenas viscosa",
      "B) Serosa tende a ser mais aquosa e rica em enzimas; mucosa é viscosa, com mucopolissacarídeos — diferença aparece em coloração e descrição",
      "C) Não há diferença; são sinônimos",
      "D) Somente secreção mucosa existe nas glândulas salivares humanas",
    ],
    explicacao_geral:
      "Tabela Pré-Prova: serosa vs mucosa.",
    explicacoes_opcoes: {
      A: "Incorreta: inverte os papéis típicos.",
      B: "Correta: parágrafo de arquitetura + tabela de diferenciações.",
      C: "Incorreta: distinção é pedida em prova.",
      D: "Incorreta: componente seroso é relevante (ex.: parótida).",
    },
    explicacao:
      "Resumo: Aquosa/enzimas versus viscosidade/muco.\nA) INCORRETA.\nB) CORRETA.\nC) INCORRETA.\nD) INCORRETA.",
  },
];

function main() {
  const data = JSON.parse(fs.readFileSync(file, "utf8"));
  const arr = data.questoes;
  const map = Object.fromEntries(novas.map((x) => [x.id, x]));
  let n = 0;
  for (let i = 0; i < arr.length; i++) {
    if (map[arr[i].id] && arr[i].tema === "bmf1_a15") {
      arr[i] = map[arr[i].id];
      n++;
    }
  }
  if (n !== 10) throw new Error(`bmf1_a15: esperado 10, obtido ${n}`);
  fs.writeFileSync(file, JSON.stringify(data, null, 2) + "\n", "utf8");
  JSON.parse(fs.readFileSync(file, "utf8"));
  console.log("bmf1_a15 OK (322–331)");
}

main();
