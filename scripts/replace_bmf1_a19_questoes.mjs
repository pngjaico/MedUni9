/**
 * Uma aula por vez: substitui somente bmf1_a19 (ids 362-371).
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const file = path.join(__dirname, "..", "data", "questoes.json");

const novas = [
  {
    id: 362,
    materia: "bmf1",
    tema: "bmf1_a19",
    modulo: 1,
    dificuldade: 2,
    correta: 0,
    enunciado:
      "Sobre o duodeno, a alternativa correta conforme a aula e:",
    opcoes: [
      "A) Tem trajeto em C ao redor da cabeca do pancreas, com parte superior intraperitoneal e segmentos descendente/horizontal predominantemente retroperitoneais",
      "B) Situa-se apenas na fossa iliaca direita, sem relacao com pancreas",
      "C) E inteiramente intraperitoneal e sem referencia endoscopica",
      "D) Nao se relaciona com papila maior",
    ],
    explicacao_geral:
      "Duodeno em C e referencia anatomica central do modulo.",
    explicacoes_opcoes: {
      A: "Correta: resume a tabela do delgado.",
      B: "Incorreta: descreve melhor territorio ileal.",
      C: "Incorreta: simplifica de forma errada a peritonizacao.",
      D: "Incorreta: papila maior e citada como marco.",
    },
    explicacao:
      "Resumo: Duodeno abraça a cabeca pancreatica e orienta anatomia funcional.\nA) CORRETA.\nB) INCORRETA.\nC) INCORRETA.\nD) INCORRETA.",
  },
  {
    id: 363,
    materia: "bmf1",
    tema: "bmf1_a19",
    modulo: 1,
    dificuldade: 1,
    correta: 1,
    enunciado:
      "Qual caracteristica favorece o reconhecimento geral do jejuno em relacao ao ileo, segundo a aula?",
    opcoes: [
      "A) Alcas mais finas no quadrante inferior com termino na valvula ileocecal",
      "B) Predominio em quadrante superior esquerdo, alcas mais largas e plicas mais altas (tendencia)",
      "C) Posicao fixa ao redor da cabeca do pancreas",
      "D) Presenca de taenias e haustra como no colon",
    ],
    explicacao_geral:
      "A diferenciacao jejuno versus ileo e classica em prova.",
    explicacoes_opcoes: {
      A: "Incorreta: perfil do ileo.",
      B: "Correta: sintese da linha do jejuno.",
      C: "Incorreta: descreve duodeno.",
      D: "Incorreta: taenias/haustra sao marcas do grosso.",
    },
    explicacao:
      "Resumo: Jejuno tende a ficar mais alto e com alcas mais robustas.\nA) INCORRETA.\nB) CORRETA.\nC) INCORRETA.\nD) INCORRETA.",
  },
  {
    id: 364,
    materia: "bmf1",
    tema: "bmf1_a19",
    modulo: 1,
    dificuldade: 1,
    correta: 2,
    enunciado:
      "A valvula ileocecal, no contexto anatomico desta aula, corresponde a:",
    opcoes: [
      "A) Transicao entre estomago e duodeno",
      "B) Limite entre reto e canal anal",
      "C) Transicao funcional e anatomica entre ileo e ceco",
      "D) Abertura principal do ducto pancreatico no jejuno",
    ],
    explicacao_geral:
      "Aula destaca a valvula na passagem delgado-grosso.",
    explicacoes_opcoes: {
      A: "Incorreta: isso e piloro.",
      B: "Incorreta: regiao distal do grosso.",
      C: "Correta: ponto-chave explicito.",
      D: "Incorreta: papila maior fica no duodeno descendente.",
    },
    explicacao:
      "Resumo: Ileocecal marca entrada do delgado no ceco.\nA) INCORRETA.\nB) INCORRETA.\nC) CORRETA.\nD) INCORRETA.",
  },
  {
    id: 365,
    materia: "bmf1",
    tema: "bmf1_a19",
    modulo: 1,
    dificuldade: 2,
    correta: 3,
    enunciado:
      "As marcas externas classicas do colon, uteis em peca e imagem, sao:",
    opcoes: [
      "A) Plicas altas e mesenterio amplo",
      "B) Vilosidades longas e papila maior",
      "C) Apenas uma camada muscular circular sem bandas",
      "D) Taenias, haustra e apendices epiploicos",
    ],
    explicacao_geral:
      "Aula diferencia grosso de delgado por esse trio anatomico.",
    explicacoes_opcoes: {
      A: "Incorreta: favorece descricao do delgado.",
      B: "Incorreta: mistura referencia duodenal com histologia.",
      C: "Incorreta: ignora as bandas longitudinais.",
      D: "Correta: trio caracteristico do colon.",
    },
    explicacao:
      "Resumo: Colon se reconhece por bandas, bolsas e gordura epiploica.\nA) INCORRETA.\nB) INCORRETA.\nC) INCORRETA.\nD) CORRETA.",
  },
  {
    id: 366,
    materia: "bmf1",
    tema: "bmf1_a19",
    modulo: 1,
    dificuldade: 3,
    correta: 1,
    enunciado:
      "A variacao de posicao do apendice (ex.: retrocecal ou pelvica) ajuda a explicar clinicamente:",
    opcoes: [
      "A) Ausencia completa de dor na apendicite",
      "B) Diferentes localizacoes da dor e sinais na apendicite, apesar da base apendicular no ceco",
      "C) Transformacao do ceco em duodeno",
      "D) Presenca obrigatoria de dor no hipocondrio esquerdo",
    ],
    explicacao_geral:
      "Topografia do apendice orienta interpretacao de abdome agudo.",
    explicacoes_opcoes: {
      A: "Incorreta: apendicite costuma cursar com dor.",
      B: "Correta: corresponde ao texto sobre variacao de sitio doloroso.",
      C: "Incorreta: sem base anatomica.",
      D: "Incorreta: nao e local obrigatorio.",
    },
    explicacao:
      "Resumo: Mesma base no ceco, trajetos diferentes mudam manifestacao clinica.\nA) INCORRETA.\nB) CORRETA.\nC) INCORRETA.\nD) INCORRETA.",
  },
  {
    id: 367,
    materia: "bmf1",
    tema: "bmf1_a19",
    modulo: 1,
    dificuldade: 2,
    correta: 2,
    enunciado:
      "Sobre o mesenterio do delgado, a afirmacao correta e:",
    opcoes: [
      "A) Nao participa da mobilidade intestinal",
      "B) Existe apenas no colon sigmoide",
      "C) Ancoragem do delgado pela raiz mesenterica explica mobilidade e parte da fisiopatologia de volvo/isquemia",
      "D) E equivalente ao omento maior em definicao",
    ],
    explicacao_geral:
      "Conceito-chave: fixacao e mobilidade dependem do mesenterio.",
    explicacoes_opcoes: {
      A: "Incorreta: influencia mobilidade.",
      B: "Incorreta: o foco da aula e delgado.",
      C: "Correta: sintese da secao de mesenterio e fixacao.",
      D: "Incorreta: estruturas diferentes.",
    },
    explicacao:
      "Resumo: Mesenterio ancora e ao mesmo tempo permite deslocamento de alcas.\nA) INCORRETA.\nB) INCORRETA.\nC) CORRETA.\nD) INCORRETA.",
  },
  {
    id: 368,
    materia: "bmf1",
    tema: "bmf1_a19",
    modulo: 1,
    dificuldade: 2,
    correta: 3,
    enunciado:
      "No grosso, a sequencia anatomica geral ensinada na aula e:",
    opcoes: [
      "A) Reto -> ceco -> colon ascendente -> sigmoide",
      "B) Ceco -> colon descendente -> ascendente -> transverso",
      "C) Ceco -> reto -> colon transverso -> sigmoide",
      "D) Ceco -> colon ascendente -> transverso -> descendente -> sigmoide -> reto",
    ],
    explicacao_geral:
      "A moldura colica organiza orientacao em imagem e cirurgia.",
    explicacoes_opcoes: {
      A: "Incorreta: ordem invertida.",
      B: "Incorreta: ascendente vem antes de descendente.",
      C: "Incorreta: reta nao antecede transverso.",
      D: "Correta: trajetoria anatomica padrao.",
    },
    explicacao:
      "Resumo: Do ceco ao reto, o colon faz a moldura abdominal.\nA) INCORRETA.\nB) INCORRETA.\nC) INCORRETA.\nD) CORRETA.",
  },
  {
    id: 369,
    materia: "bmf1",
    tema: "bmf1_a19",
    modulo: 1,
    dificuldade: 2,
    correta: 0,
    enunciado:
      "Na diferenca entre delgado e grosso destacada em Pre-Prova, a opcao correta e:",
    opcoes: [
      "A) Delgado com mesenterio amplo; grosso identificado por taenias e haustra",
      "B) Delgado com taenias e haustra; grosso com plicas altas do jejuno",
      "C) Delgado sem relacao com valvula ileocecal",
      "D) Grosso sempre central e delgado em moldura periferica",
    ],
    explicacao_geral:
      "Diferenciacao morfologica evita erros de identificacao.",
    explicacoes_opcoes: {
      A: "Correta: reproduz a tabela de diferenciacoes.",
      B: "Incorreta: trocou caracteristicas.",
      C: "Incorreta: ileo termina na regiao ileocecal.",
      D: "Incorreta: disposicao geral e oposta.",
    },
    explicacao:
      "Resumo: Meso amplo no delgado; bandas/haustra no grosso.\nA) CORRETA.\nB) INCORRETA.\nC) INCORRETA.\nD) INCORRETA.",
  },
  {
    id: 370,
    materia: "bmf1",
    tema: "bmf1_a19",
    modulo: 1,
    dificuldade: 3,
    correta: 1,
    enunciado:
      "Em obstrucao intestinal, por que distinguir se o acometimento e de delgado ou grosso acelera a hipotese diagnostica, conforme a aula?",
    opcoes: [
      "A) Porque ambos se comportam de forma identica em distensao e niveis hidroaereos",
      "B) Porque topografia e padrao de distensao/alcas ajudam a inferir o segmento comprometido e orientar conduta inicial",
      "C) Porque o grosso nao gera niveis hidroaereos",
      "D) Porque o delgado nunca distende",
    ],
    explicacao_geral:
      "Ponte com clinica integra anatomia com leitura de imagem e sindrome obstrutiva.",
    explicacoes_opcoes: {
      A: "Incorreta: ha diferencas de padrao.",
      B: "Correta: corresponde ao texto de obstrucao.",
      C: "Incorreta: pode haver niveis no grosso.",
      D: "Incorreta: delgado pode distender.",
    },
    explicacao:
      "Resumo: Padrao anatomico das alcas orienta raciocinio em abdome agudo.\nA) INCORRETA.\nB) CORRETA.\nC) INCORRETA.\nD) INCORRETA.",
  },
  {
    id: 371,
    materia: "bmf1",
    tema: "bmf1_a19",
    modulo: 1,
    dificuldade: 3,
    correta: 3,
    enunciado:
      "No contexto de colonoscopia citado na aula, quais curvaturas nomeadas aparecem como referencia anatomica de laudo?",
    opcoes: [
      "A) Curvaturas pylorica e ileocecal",
      "B) Curvaturas duodenal superior e inferior",
      "C) Curvaturas sigmoidais unica e dupla",
      "D) Curvaturas hepatica e esplenica",
    ],
    explicacao_geral:
      "Vocabulário anatomico de colon e util na comunicacao clinica.",
    explicacoes_opcoes: {
      A: "Incorreta: nao e nomenclatura classica do colon.",
      B: "Incorreta: refere-se a outro segmento.",
      C: "Incorreta: nao corresponde ao texto.",
      D: "Correta: sao as flexuras colicas nomeadas na pratica.",
    },
    explicacao:
      "Resumo: Laudo de colonoscopia usa marcos como flexuras hepatica e esplenica.\nA) INCORRETA.\nB) INCORRETA.\nC) INCORRETA.\nD) CORRETA.",
  },
];

function main() {
  const data = JSON.parse(fs.readFileSync(file, "utf8"));
  const arr = data.questoes;
  const map = Object.fromEntries(novas.map((x) => [x.id, x]));
  let n = 0;
  for (let i = 0; i < arr.length; i++) {
    if (map[arr[i].id] && arr[i].tema === "bmf1_a19") {
      arr[i] = map[arr[i].id];
      n++;
    }
  }
  if (n !== 10) throw new Error(`bmf1_a19: esperado 10, obtido ${n}`);
  fs.writeFileSync(file, JSON.stringify(data, null, 2) + "\n", "utf8");
  JSON.parse(fs.readFileSync(file, "utf8"));
  console.log("bmf1_a19 OK (362-371)");
}

main();
