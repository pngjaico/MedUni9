/**
 * Uma aula por vez: substitui somente bmf1_a14 (ids 312–321).
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const file = path.join(__dirname, "..", "data", "questoes.json");

const novas = [
  {
    id: 312,
    materia: "bmf1",
    tema: "bmf1_a14",
    modulo: 1,
    dificuldade: 2,
    correta: 0,
    enunciado:
      "Na epiderme espessa, a sequência das camadas do superficial ao profundo, conforme a aula, é:",
    opcoes: [
      "A) Estrato córneo → estrato granuloso → estrato espinhoso → estrato basal",
      "B) Estrato basal → estrato espinhoso → estrato córneo → estrato granuloso",
      "C) Estrato granuloso → estrato córneo → estrato basal → estrato espinhoso",
      "D) Estrato espinhoso → estrato basal → estrato granuloso → estrato córneo",
    ],
    explicacao_geral:
      "Ordem fixa em prova: córneo, granuloso, espinhoso, basal.",
    explicacoes_opcoes: {
      A: "Correta: coincide com a tabela da aula.",
      B: "Incorreta: inverte o sentido superficial–profundo.",
      C: "Incorreta: mistura camadas fora da sequência clássica.",
      D: "Incorreta: basal não fica superficial ao córneo.",
    },
    explicacao:
      "Resumo: Memorizar a ‘subida’ do córneo ao basal.\nA) CORRETA.\nB) INCORRETA.\nC) INCORRETA.\nD) INCORRETA.",
  },
  {
    id: 313,
    materia: "bmf1",
    tema: "bmf1_a14",
    modulo: 1,
    dificuldade: 2,
    correta: 1,
    enunciado:
      "A epiderme é descrita como avascular. Como oxigênio e nutrientes costumam chegar às camadas epidérmicas, segundo a aula?",
    opcoes: [
      "A) Por transporte ativo direto dos vasos do estrato córneo",
      "B) Por difusão a partir da derme, através da membrana basal",
      "C) Exclusivamente por sudorese das glândulas écrinas",
      "D) Por síntese mitocondrial independente em cada queratinócito, sem aporte externo",
    ],
    explicacao_geral:
      "Derme vascularizada nutre por difusão — dica de prova explícita no material.",
    explicacoes_opcoes: {
      A: "Incorreta: córneo não tem leito vascular próprio.",
      B: "Correta: alinha-se à ‘Dica de Prova’ do texto.",
      C: "Incorreta: função distinta (termorregulação/odor).",
      D: "Incorreta: não substitui aporte da derme.",
    },
    explicacao:
      "Resumo: Barreira epidérmica ≠ irrigação intraepidérmica.\nA) INCORRETA.\nB) CORRETA.\nC) INCORRETA.\nD) INCORRETA.",
  },
  {
    id: 314,
    materia: "bmf1",
    tema: "bmf1_a14",
    modulo: 1,
    dificuldade: 1,
    correta: 2,
    enunciado:
      "Qual distinção melhor resume o papel do melanócito frente ao queratinócito, na linha da aula?",
    opcoes: [
      "A) Melanócito forma a barreira do estrato córneo; queratinócito não participa da queratinização",
      "B) Queratinócito produz melanina; melanócito apenas reage ao UV sem transferir pigmento",
      "C) Queratinócito participa da barreira epitelial; melanócito produz/transfere melanina às células vizinhas",
      "D) Ambos são idênticos na função e só diferem pelo tamanho nuclear",
    ],
    explicacao_geral:
      "Confundir tipos celulares é erro comum — texto contrasta explicitamente.",
    explicacoes_opcoes: {
      A: "Incorreta: inverte papéis.",
      B: "Incorreta: melanina vem do melanócito.",
      C: "Correta: condensa a seção de células não queratinócitos e a tabela Pré-Prova.",
      D: "Incorreta: funções distintas.",
    },
    explicacao:
      "Resumo: Barreira versus pigmento.\nA) INCORRETA.\nB) INCORRETA.\nC) CORRETA.\nD) INCORRETA.",
  },
  {
    id: 315,
    materia: "bmf1",
    tema: "bmf1_a14",
    modulo: 1,
    dificuldade: 3,
    correta: 3,
    enunciado:
      "As células de Langerhans na epiderme são destacadas na aula principalmente por qual papel?",
    opcoes: [
      "A) Mecanorrecepção de toque fino, como único sentido da pele",
      "B) Produção de queratohialina no estrato granuloso",
      "C) Contração do músculo eretor da pilosidade",
      "D) Apresentação antigênica (eixo imune de pele)",
    ],
    explicacao_geral:
      "Langerhans — vigilância imunológica; não confundir com Merkel.",
    explicacoes_opcoes: {
      A: "Incorreta: atribui função a Merkel.",
      B: "Incorreta: grânulos de queratina/queratohialina são eixo queratinócito.",
      C: "Incorreta: anexo pilosebáceo, célula diferente.",
      D: "Correta: frase da seção de células não queratinócitos.",
    },
    explicacao:
      "Resumo: Langerhans = ponte imune epidérmica.\nA) INCORRETA.\nB) INCORRETA.\nC) INCORRETA.\nD) CORRETA.",
  },
  {
    id: 316,
    materia: "bmf1",
    tema: "bmf1_a14",
    modulo: 1,
    dificuldade: 2,
    correta: 0,
    enunciado:
      "As células de Merkel na epiderme são associadas, no texto, a qual função?",
    opcoes: [
      "A) Mecanorrecepção",
      "B) Secreção de sebo no folículo",
      "C) Apresentação antigênica como Langerhans",
      "D) Proliferação exclusiva no estrato córneo",
    ],
    explicacao_geral:
      "Merkel — toque; Langerhans — imune — não trocar.",
    explicacoes_opcoes: {
      A: "Correta: uma frase da aula.",
      B: "Incorreta: glândula sebácea.",
      C: "Incorreta: papel de Langerhans.",
      D: "Incorreta: proliferação basal, não córneo.",
    },
    explicacao:
      "Resumo: Especialização sensorial.\nA) CORRETA.\nB) INCORRETA.\nC) INCORRETA.\nD) INCORRETA.",
  },
  {
    id: 317,
    materia: "bmf1",
    tema: "bmf1_a14",
    modulo: 1,
    dificuldade: 2,
    correta: 1,
    enunciado:
      "Sobre glândulas sudoríparas écrinas versus apócrinas, qual afirmação está mais alinhada à aula?",
    opcoes: [
      "A) Apócrinas são as únicas com distribuição ampla pelo tronco e termorregulação principal",
      "B) Écrinas distribuem-se amplamente e são centrais na termorregulação; apócrinas, em regiões específicas, ligam-se ao odor após metabolismo bacteriano",
      "C) Ambas são exclusivas de mucosas e não existem na pele pelada",
      "D) Écrinas secretam sebo; apócrinas abastecem unhas",
    ],
    explicacao_geral:
      "Pontos-chave: distribuição e função — cai em prova.",
    explicacoes_opcoes: {
      A: "Incorreta: inverte papéis de distribuição/foco.",
      B: "Correta: síntese do parágrafo de anexos.",
      C: "Incorreta: ambas descritas na pele.",
      D: "Incorreta: sebo é eixo sebáceo; unhas são anexo distinto.",
    },
    explicacao:
      "Resumo: Écrina = suor/amplo; apócrina = nicho + odor.\nA) INCORRETA.\nB) CORRETA.\nC) INCORRETA.\nD) INCORRETA.",
  },
  {
    id: 318,
    materia: "bmf1",
    tema: "bmf1_a14",
    modulo: 1,
    dificuldade: 3,
    correta: 2,
    enunciado:
      "A acne é contextualizada na aula a partir de qual eixo fisiopatológico simplificado?",
    opcoes: [
      "A) Apenas aumento de melanina no melanócito",
      "B) Hiperqueratinização isolada do estrato córneo sem participação de folículo",
      "C) Óleo–ducto–bactéria–inflamação (eixo glândula sebácea/folículo)",
      "D) Deficit exclusivo de sudorese écrina",
    ],
    explicacao_geral:
      "Sebáceas associadas a folículos — base para acne.",
    explicacoes_opcoes: {
      A: "Incorreta: pigmentação não resume acne.",
      B: "Incorreta: folículo e sebo entram no quadro.",
      C: "Correta: frase da seção de anexos.",
      D: "Incorreta: eixo sudoríparo distinto.",
    },
    explicacao:
      "Resumo: Pensar folículo + sebo + inflamação.\nA) INCORRETA.\nB) INCORRETA.\nC) CORRETA.\nD) INCORRETA.",
  },
  {
    id: 319,
    materia: "bmf1",
    tema: "bmf1_a14",
    modulo: 1,
    dificuldade: 2,
    correta: 3,
    enunciado:
      "Na tabela mucosas versus pele, o esôfago (porção muscular) aparece com qual epitélio típico?",
    opcoes: [
      "A) Simples colunar com vilo, voltado à absorção",
      "B) Simples colunar com células especializadas de secreção ácida",
      "C) Estratificado escamoso queratinizado espesso como palma",
      "D) Estratificado escamoso não queratinizado, protegendo sem dessecar",
    ],
    explicacao_geral:
      "Esôfago = escamoso não queratinizado — contraste com pele.",
    explicacoes_opcoes: {
      A: "Incorreta: padrão intestinal.",
      B: "Incorreta: estômago.",
      C: "Incorreta: queratinização típica de pele espessa.",
      D: "Correta: linha da tabela da aula.",
    },
    explicacao:
      "Resumo: Proteção sem ‘casca’ de palma.\nA) INCORRETA.\nB) INCORRETA.\nC) INCORRETA.\nD) CORRETA.",
  },
  {
    id: 320,
    materia: "bmf1",
    tema: "bmf1_a14",
    modulo: 1,
    dificuldade: 1,
    correta: 1,
    enunciado:
      "Na ponte com a clínica, a úlcera de pressão é relacionada, em termos de mecanismo espacial, a:",
    opcoes: [
      "A) Exposição exclusiva a radiação ionizante em mucosa oral",
      "B) Isquemia em proeminências ósseas com necessidade de prevenção por mudança de decúbito e superfície de distribuição de pressão",
      "C) Infecção primária por fungos no estrato córneo sem compressão",
      "D) Hiperatividade das glândulas apócrinas nas mãos",
    ],
    explicacao_geral:
      "Pressão + proeminência — prevenção comportamental e de superfície.",
    explicacoes_opcoes: {
      A: "Incorreta: cenário não descrito como núcleo.",
      B: "Correta: síntese do parágrafo clínico.",
      C: "Incorreta: não substitui mecânica de pressão.",
      D: "Incorreta: irrelevante ao mecanismo citado.",
    },
    explicacao:
      "Resumo: Decúbito prolongado + pontos de pressão.\nA) INCORRETA.\nB) CORRETA.\nC) INCORRETA.\nD) INCORRETA.",
  },
  {
    id: 321,
    materia: "bmf1",
    tema: "bmf1_a14",
    modulo: 1,
    dificuldade: 3,
    correta: 3,
    enunciado:
      "A derme papilar, em relação à epiderme, é corretamente descrita na aula como:",
    opcoes: [
      "A) Camada avascular que não se projeta na epiderme",
      "B) Região sem colágeno, apenas gordura subcutânea",
      "C) Igual à derme reticular em textura, sem papilas",
      "D) Tecido conjuntivo que projeta papilas dérmicas, aumentando área de troca e ancorando a epiderme",
    ],
    explicacao_geral:
      "Papilar versus reticular — prova gosta do contraste.",
    explicacoes_opcoes: {
      A: "Incorreta: epiderme é que é avascular; papilar é dérmica e vascularizada no contexto global de derme.",
      B: "Incorreta: derme é conjuntivo resistente, não ‘só gordura’.",
      C: "Incorreta: nega papilas — oposto ao texto.",
      D: "Correta: parágrafo da seção derme e interface.",
    },
    explicacao:
      "Resumo: Papilas = interface e âncora.\nA) INCORRETA.\nB) INCORRETA.\nC) INCORRETA.\nD) CORRETA.",
  },
];

function main() {
  const data = JSON.parse(fs.readFileSync(file, "utf8"));
  const arr = data.questoes;
  const map = Object.fromEntries(novas.map((x) => [x.id, x]));
  let n = 0;
  for (let i = 0; i < arr.length; i++) {
    if (map[arr[i].id] && arr[i].tema === "bmf1_a14") {
      arr[i] = map[arr[i].id];
      n++;
    }
  }
  if (n !== 10) throw new Error(`bmf1_a14: esperado 10, obtido ${n}`);
  fs.writeFileSync(file, JSON.stringify(data, null, 2) + "\n", "utf8");
  JSON.parse(fs.readFileSync(file, "utf8"));
  console.log("bmf1_a14 OK (312–321)");
}

main();
