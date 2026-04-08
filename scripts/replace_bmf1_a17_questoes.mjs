/**
 * Uma aula por vez: substitui somente bmf1_a17 (ids 342-351).
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const file = path.join(__dirname, "..", "data", "questoes.json");

const novas = [
  {
    id: 342,
    materia: "bmf1",
    tema: "bmf1_a17",
    modulo: 1,
    dificuldade: 2,
    correta: 0,
    enunciado:
      "A inervacao motora principal da lingua, conforme a aula, e feita por:",
    opcoes: [
      "A) Nervo hipoglosso (XII)",
      "B) Nervo lingual (ramo de V)",
      "C) Nervo facial (VII)",
      "D) Nervo glossofaringeo (IX)",
    ],
    explicacao_geral:
      "A pegadinha classica e confundir motor da lingua com sensibilidade geral.",
    explicacoes_opcoes: {
      A: "Correta: ponto-chave explicito da aula.",
      B: "Incorreta: lingual relaciona-se a sensibilidade geral.",
      C: "Incorreta: VII e ancora da parotida no conteudo.",
      D: "Incorreta: IX participa de reflexos/sensibilidade em regioes especificas.",
    },
    explicacao:
      "Resumo: XII move lingua no exame neurologico basico.\nA) CORRETA.\nB) INCORRETA.\nC) INCORRETA.\nD) INCORRETA.",
  },
  {
    id: 343,
    materia: "bmf1",
    tema: "bmf1_a17",
    modulo: 1,
    dificuldade: 1,
    correta: 1,
    enunciado:
      "Na protrusao, lesao de XII tende a desviar a lingua para qual lado, segundo o padrao classico citado?",
    opcoes: [
      "A) Para o lado oposto ao lesado",
      "B) Para o lado lesado",
      "C) Sempre para a linha media",
      "D) O desvio depende apenas da sensibilidade da lingua",
    ],
    explicacao_geral:
      "A aula pede memorizacao desse padrao para prova e clinica.",
    explicacoes_opcoes: {
      A: "Incorreta: o texto cita desvio para o lado lesado.",
      B: "Correta: descricao direta da secao de lingua.",
      C: "Incorreta: ha desvio no padrao classico.",
      D: "Incorreta: trata de componente motor.",
    },
    explicacao:
      "Resumo: Hipoglosso lesionado puxa para o proprio lado.\nA) INCORRETA.\nB) CORRETA.\nC) INCORRETA.\nD) INCORRETA.",
  },
  {
    id: 344,
    materia: "bmf1",
    tema: "bmf1_a17",
    modulo: 1,
    dificuldade: 1,
    correta: 2,
    enunciado:
      "Qual alternativa diferencia corretamente musculos intrinsecos e extrinsecos da lingua?",
    opcoes: [
      "A) Intrinsecos fixam a lingua no hioide; extrinsecos so mudam formato",
      "B) Intrinsecos e extrinsecos sao sinonimos funcionais",
      "C) Intrinsecos mudam o formato; extrinsecos posicionam/movem a lingua em relacao a estruturas como hioide e base do cranio",
      "D) Somente os extrinsecos existem na lingua",
    ],
    explicacao_geral:
      "A divisao funcional aparece logo na introducao da secao da lingua.",
    explicacoes_opcoes: {
      A: "Incorreta: inverte papeis.",
      B: "Incorreta: a aula separa claramente.",
      C: "Correta: corresponde ao texto.",
      D: "Incorreta: intrinsecos existem e sao relevantes.",
    },
    explicacao:
      "Resumo: Formato (intrinseco) versus posicionamento (extrinseco).\nA) INCORRETA.\nB) INCORRETA.\nC) CORRETA.\nD) INCORRETA.",
  },
  {
    id: 345,
    materia: "bmf1",
    tema: "bmf1_a17",
    modulo: 1,
    dificuldade: 2,
    correta: 3,
    enunciado:
      "Sobre a parotida, qual combinacao esta correta conforme tabela da aula?",
    opcoes: [
      "A) Ducto de Wharton; predominio mucoso; sem relacao com VII",
      "B) Varios ductos menores; acima do milo-hioideo; predominio misto",
      "C) Ducto de Stensen medial ao assoalho oral; glossofaringeo atravessa a glandula",
      "D) Ducto de Stensen atravessa o masseter e o nervo facial (VII) atravessa a glandula",
    ],
    explicacao_geral:
      "Parotida + Stensen + VII e ancora anatomo-cirurgica central da aula.",
    explicacoes_opcoes: {
      A: "Incorreta: descreve elementos da submandibular/sublingual.",
      B: "Incorreta: varios ductos menores e padrao da sublingual.",
      C: "Incorreta: trajetos/relacoes estao trocados.",
      D: "Correta: linha literal da tabela.",
    },
    explicacao:
      "Resumo: Parotida lateral com Stensen no masseter e VII em risco cirurgico.\nA) INCORRETA.\nB) INCORRETA.\nC) INCORRETA.\nD) CORRETA.",
  },
  {
    id: 346,
    materia: "bmf1",
    tema: "bmf1_a17",
    modulo: 1,
    dificuldade: 3,
    correta: 1,
    enunciado:
      "A submandibular, segundo a aula, associa-se a qual descricao?",
    opcoes: [
      "A) Serosa predominante, ducto de Stensen",
      "B) Glandula mista com ducto de Wharton e relacao com regiao sublingual medial/proximidade ao milo-hioideo",
      "C) Mucosa predominante com apenas ductos de Rivinus",
      "D) Sem ducto principal nomeavel",
    ],
    explicacao_geral:
      "Submandibular = mista + Wharton e contraste com parotida/sublingual.",
    explicacoes_opcoes: {
      A: "Incorreta: descreve parotida.",
      B: "Correta: integra tabela e pontos-chave.",
      C: "Incorreta: descreve sublingual.",
      D: "Incorreta: exocrina com ducto principal.",
    },
    explicacao:
      "Resumo: Wharton identifica submandibular em prova.\nA) INCORRETA.\nB) CORRETA.\nC) INCORRETA.\nD) INCORRETA.",
  },
  {
    id: 347,
    materia: "bmf1",
    tema: "bmf1_a17",
    modulo: 1,
    dificuldade: 2,
    correta: 2,
    enunciado:
      "A sublingual e melhor reconhecida, no material, por:",
    opcoes: [
      "A) Predominio seroso e ducto unico de Stensen",
      "B) Predominio misto e ducto de Wharton",
      "C) Predominio mucoso e varios ductos menores (Bartholin/Rivinus), acima do milo-hioideo",
      "D) Relacao principal com nervo facial no interior da glandula",
    ],
    explicacao_geral:
      "Aula reforca contraste histologico e topografico entre as tres grandes salivares.",
    explicacoes_opcoes: {
      A: "Incorreta: perfil da parotida.",
      B: "Incorreta: perfil da submandibular.",
      C: "Correta: tabela da aula.",
      D: "Incorreta: ancora do VII e classica da parotida.",
    },
    explicacao:
      "Resumo: Sublingual = mucosa + varios ductos menores.\nA) INCORRETA.\nB) INCORRETA.\nC) CORRETA.\nD) INCORRETA.",
  },
  {
    id: 348,
    materia: "bmf1",
    tema: "bmf1_a17",
    modulo: 1,
    dificuldade: 2,
    correta: 3,
    enunciado:
      "Quanto as porcoes da faringe, qual alternativa esta correta?",
    opcoes: [
      "A) Orofaringe fica atras das coanas",
      "B) Laringofaringe fica entre palato mole e epiglote",
      "C) Nasofaringe localiza-se atras da laringe",
      "D) Nasofaringe esta atras das coanas; orofaringe entre palato mole e epiglote; laringofaringe atras da laringe",
    ],
    explicacao_geral:
      "As tres porcoes e suas referencias anatomicas aparecem de forma direta no texto.",
    explicacoes_opcoes: {
      A: "Incorreta: isso define nasofaringe.",
      B: "Incorreta: isso define orofaringe.",
      C: "Incorreta: atras da laringe e laringofaringe.",
      D: "Correta: sequencia exata da aula.",
    },
    explicacao:
      "Resumo: Coanas -> naso; palato/epiglote -> oro; atras da laringe -> laringo.\nA) INCORRETA.\nB) INCORRETA.\nC) INCORRETA.\nD) CORRETA.",
  },
  {
    id: 349,
    materia: "bmf1",
    tema: "bmf1_a17",
    modulo: 1,
    dificuldade: 2,
    correta: 0,
    enunciado:
      "A sialolitase, na ponte com a clinica, e descrita como quadro de:",
    opcoes: [
      "A) Dor colica a mastigacao com inchaco glandular por obstrucao de ducto",
      "B) Dor lingual motora isolada sem relacao com saliva",
      "C) Quadro exclusivamente endocrino sem ducto",
      "D) Lesao tipica do nervo hipoglosso sem edema glandular",
    ],
    explicacao_geral:
      "Obstrucao ductal explica dor evocada pela mastigacao e edema.",
    explicacoes_opcoes: {
      A: "Correta: sintese do paragrafo clinico.",
      B: "Incorreta: mistura eixo motor da lingua com patologia ductal.",
      C: "Incorreta: salivares sao exocrinas.",
      D: "Incorreta: hipoglosso nao define sialolitase.",
    },
    explicacao:
      "Resumo: Ducto obstruido + estimulo salivar = dor e inchaco.\nA) CORRETA.\nB) INCORRETA.\nC) INCORRETA.\nD) INCORRETA.",
  },
  {
    id: 350,
    materia: "bmf1",
    tema: "bmf1_a17",
    modulo: 1,
    dificuldade: 3,
    correta: 1,
    enunciado:
      "Na parotidectomia, por que a aula destaca mapear o VII?",
    opcoes: [
      "A) Porque o VII fornece toda sensibilidade da lingua",
      "B) Porque o nervo facial atravessa a parotida e pode ser lesionado em procedimento cirurgico",
      "C) Porque o VII e o ducto principal da submandibular",
      "D) Porque o VII e responsavel pela termogenese da cavidade oral",
    ],
    explicacao_geral:
      "Mapa rapido do modulo: VII com parotida e XII com lingua.",
    explicacoes_opcoes: {
      A: "Incorreta: sensibilidade geral da lingua envolve sobretudo V no ponto da pegadinha.",
      B: "Correta: relacao cirurgica principal da tabela.",
      C: "Incorreta: ducto da submandibular e Wharton.",
      D: "Incorreta: sem base anatomofuncional no conteudo.",
    },
    explicacao:
      "Resumo: Risco neurologico guia tecnica cirurgica da parotida.\nA) INCORRETA.\nB) CORRETA.\nC) INCORRETA.\nD) INCORRETA.",
  },
  {
    id: 351,
    materia: "bmf1",
    tema: "bmf1_a17",
    modulo: 1,
    dificuldade: 3,
    correta: 3,
    enunciado:
      "Qual alternativa traduz corretamente a pegadinha de prova sobre lingua, palato e faringe mencionada na aula?",
    opcoes: [
      "A) Motor da lingua e do palato depende apenas de V",
      "B) Sensibilidade geral da lingua e exclusivamente do VII",
      "C) IX e X nao participam de reflexos de faringe",
      "D) Nao se deve misturar motor da lingua (XII) com sensibilidade geral (V) e com participacao de IX/X em palato-faringe/reflexos",
    ],
    explicacao_geral:
      "A secao de pegadinha existe para evitar troca entre dominios motor e sensorial.",
    explicacoes_opcoes: {
      A: "Incorreta: simplificacao errada.",
      B: "Incorreta: contradiz pegadinha do texto.",
      C: "Incorreta: texto cita IX e X no reflexo.",
      D: "Correta: integra os eixos sem confundir funcoes.",
    },
    explicacao:
      "Resumo: Resolver questao exige separar funcao motora da sensorial/reflexa.\nA) INCORRETA.\nB) INCORRETA.\nC) INCORRETA.\nD) CORRETA.",
  },
];

function main() {
  const data = JSON.parse(fs.readFileSync(file, "utf8"));
  const arr = data.questoes;
  const map = Object.fromEntries(novas.map((x) => [x.id, x]));
  let n = 0;
  for (let i = 0; i < arr.length; i++) {
    if (map[arr[i].id] && arr[i].tema === "bmf1_a17") {
      arr[i] = map[arr[i].id];
      n++;
    }
  }
  if (n !== 10) throw new Error(`bmf1_a17: esperado 10, obtido ${n}`);
  fs.writeFileSync(file, JSON.stringify(data, null, 2) + "\n", "utf8");
  JSON.parse(fs.readFileSync(file, "utf8"));
  console.log("bmf1_a17 OK (342-351)");
}

main();
