/**
 * Uma aula por vez: substitui somente bmf1_a18 (ids 352-361).
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const file = path.join(__dirname, "..", "data", "questoes.json");

const novas = [
  {
    id: 352,
    materia: "bmf1",
    tema: "bmf1_a18",
    modulo: 1,
    dificuldade: 2,
    correta: 0,
    enunciado:
      "A ordem geral das camadas da parede anterolateral do abdome, do superficial ao profundo, conforme a aula, e:",
    opcoes: [
      "A) Pele -> fascia superficial -> musculos -> fascia transversal -> peritonio parietal",
      "B) Pele -> musculos -> fascia superficial -> peritonio visceral -> fascia transversal",
      "C) Fascia superficial -> pele -> peritonio parietal -> musculos",
      "D) Pele -> peritonio visceral -> fascia transversal -> musculos",
    ],
    explicacao_geral:
      "A sequencia aparece em Pontos-Chave e organiza abordagem cirurgica.",
    explicacoes_opcoes: {
      A: "Correta: corresponde ao resumo da aula.",
      B: "Incorreta: troca a ordem de fascia superficial e musculos e confunde planos peritoneais.",
      C: "Incorreta: inverte superficialidade.",
      D: "Incorreta: peritonio visceral nao reveste a parede.",
    },
    explicacao:
      "Resumo: Da pele ao peritonio parietal, cada plano importa na incisão.\nA) CORRETA.\nB) INCORRETA.\nC) INCORRETA.\nD) INCORRETA.",
  },
  {
    id: 353,
    materia: "bmf1",
    tema: "bmf1_a18",
    modulo: 1,
    dificuldade: 1,
    correta: 1,
    enunciado:
      "Sobre o reto abdominal e os musculos da parede lateral, a alternativa correta e:",
    opcoes: [
      "A) Reto abdominal e lateral, enquanto obliquos ficam na linha media",
      "B) Reto abdominal ocupa a linha mediana; obliquo externo, obliquo interno e transverso predominam na parede lateral",
      "C) Transverso e o unico musculo anterolateral relevante",
      "D) Reto abdominal e estrutura retroperitoneal",
    ],
    explicacao_geral:
      "A aula reforca esse mapa topografico para prova e exame fisico.",
    explicacoes_opcoes: {
      A: "Incorreta: topografia invertida.",
      B: "Correta: ponto-chave explicito.",
      C: "Incorreta: ha tres camadas laterais classicas.",
      D: "Incorreta: nao e classificacao correta.",
    },
    explicacao:
      "Resumo: Linha media (reto) versus parede lateral (obliquos/transverso).\nA) INCORRETA.\nB) CORRETA.\nC) INCORRETA.\nD) INCORRETA.",
  },
  {
    id: 354,
    materia: "bmf1",
    tema: "bmf1_a18",
    modulo: 1,
    dificuldade: 1,
    correta: 2,
    enunciado:
      "A dica sobre linha alba na aula indica que ela e:",
    opcoes: [
      "A) Sempre avascular e sem risco de aderencias",
      "B) Principal referencia para incisao lateral no flanco",
      "C) Ponto relativamente avascular para incisao mediana, mas com possibilidade de aderencias e variacoes",
      "D) Limite entre peritonio visceral e retroperitonio",
    ],
    explicacao_geral:
      "A palavra-chave e 'relativamente', evitando absolutismos.",
    explicacoes_opcoes: {
      A: "Incorreta: o texto alerta que nao e zero sangramento universal.",
      B: "Incorreta: referencia principal citada e para linha media.",
      C: "Correta: reproduz a dica de prova.",
      D: "Incorreta: nao define essa interface.",
    },
    explicacao:
      "Resumo: Linha alba ajuda, mas nao elimina variacoes anatomicas.\nA) INCORRETA.\nB) INCORRETA.\nC) CORRETA.\nD) INCORRETA.",
  },
  {
    id: 355,
    materia: "bmf1",
    tema: "bmf1_a18",
    modulo: 1,
    dificuldade: 2,
    correta: 3,
    enunciado:
      "No canal inguinal, o conceito basico enfatizado para BMF1 e:",
    opcoes: [
      "A) E um canal reto sem relacao com hernias",
      "B) Contem os mesmos elementos nos dois sexos",
      "C) Nao possui relevancia anatomoclinica no modulo",
      "D) E um tunel obliquo na parede inferior; no homem passa ducto deferente com vasos e na mulher o ligamento redondo",
    ],
    explicacao_geral:
      "Aula pede fixar localizacao, obliquidade e conteudo por sexo.",
    explicacoes_opcoes: {
      A: "Incorreta: obliquidade e central no conceito.",
      B: "Incorreta: conteudos diferem por sexo.",
      C: "Incorreta: e tema recorrente em hernia.",
      D: "Correta: sintese do paragrafo do canal.",
    },
    explicacao:
      "Resumo: Tunel obliquo com conteudo diferente em homem e mulher.\nA) INCORRETA.\nB) INCORRETA.\nC) INCORRETA.\nD) CORRETA.",
  },
  {
    id: 356,
    materia: "bmf1",
    tema: "bmf1_a18",
    modulo: 1,
    dificuldade: 3,
    correta: 1,
    enunciado:
      "A diferenca entre peritonio parietal e visceral e melhor descrita como:",
    opcoes: [
      "A) Parietal reveste orgaos e visceral reveste parede da cavidade",
      "B) Parietal adere a parede abdominal; visceral recobre a superficie dos orgaos",
      "C) Ambos revestem apenas estruturas retroperitoneais",
      "D) Sao sinonimos em anatomia clinica",
    ],
    explicacao_geral:
      "Diferenciacao classica da tabela de Pre-Prova.",
    explicacoes_opcoes: {
      A: "Incorreta: invertido.",
      B: "Correta: definicao textual da aula.",
      C: "Incorreta: escopo incorreto.",
      D: "Incorreta: ha diferenca funcional e topografica.",
    },
    explicacao:
      "Resumo: Parede = parietal; orgao = visceral.\nA) INCORRETA.\nB) CORRETA.\nC) INCORRETA.\nD) INCORRETA.",
  },
  {
    id: 357,
    materia: "bmf1",
    tema: "bmf1_a18",
    modulo: 1,
    dificuldade: 2,
    correta: 2,
    enunciado:
      "Qual afirmacao sobre o mesenterio esta correta segundo a aula?",
    opcoes: [
      "A) E uma dobra sem relacao com vasos",
      "B) E exclusivamente ligamentar no figado",
      "C) Funciona como ancora do intestino delgado ao retroperitonio",
      "D) E sinonimo de peritonio parietal",
    ],
    explicacao_geral:
      "Mesenterio aparece como ancora com implicacoes de mobilidade e propagacao patologica.",
    explicacoes_opcoes: {
      A: "Incorreta: organiza vias vasculares e fixacao.",
      B: "Incorreta: restringe de forma indevida.",
      C: "Correta: ponto-chave explicito.",
      D: "Incorreta: sao estruturas relacionadas, mas nao sinonimos.",
    },
    explicacao:
      "Resumo: Mesenterio ancora o delgado e organiza trajeto vascular.\nA) INCORRETA.\nB) INCORRETA.\nC) CORRETA.\nD) INCORRETA.",
  },
  {
    id: 358,
    materia: "bmf1",
    tema: "bmf1_a18",
    modulo: 1,
    dificuldade: 2,
    correta: 3,
    enunciado:
      "No contraste intraperitoneal versus retroperitoneal, a aula destaca que essa diferenca altera principalmente:",
    opcoes: [
      "A) Apenas a inervacao cutanea de dermatomos",
      "B) Somente a composicao da fascia superficial",
      "C) Unicamente o numero de musculos da parede",
      "D) Mobilidade de orgaos e padrao de disseminacao/colecao (ex.: abscessos)",
    ],
    explicacao_geral:
      "Topografia peritoneal orienta imagem e conduta clinica.",
    explicacoes_opcoes: {
      A: "Incorreta: foco principal nao e esse.",
      B: "Incorreta: nao e o eixo da diferenciacao.",
      C: "Incorreta: sem relacao direta.",
      D: "Correta: reproduz o conceito do texto.",
    },
    explicacao:
      "Resumo: Intraperitoneal/retroperitoneal muda comportamento anatomoclinico.\nA) INCORRETA.\nB) INCORRETA.\nC) INCORRETA.\nD) CORRETA.",
  },
  {
    id: 359,
    materia: "bmf1",
    tema: "bmf1_a18",
    modulo: 1,
    dificuldade: 2,
    correta: 0,
    enunciado:
      "Qual alternativa identifica corretamente a regiao e marco de superficie descritos na tabela?",
    opcoes: [
      "A) Regiao inguinal: ligamento inguinal e aneis profundo/superficial; relevancia para hernias e canal inguinal",
      "B) Flanco: acima da sinfise pubica, com referencia principal a bexiga",
      "C) Hipogastrio: entre costelas e crista iliaca",
      "D) Regiao inguinal: delimitada apenas pelo reto abdominal",
    ],
    explicacao_geral:
      "Tabela inicial de regioes e marcos e alvo frequente de questoes.",
    explicacoes_opcoes: {
      A: "Correta: linha da tabela de superficie.",
      B: "Incorreta: descreve hipogastrio de forma errada.",
      C: "Incorreta: descreve flanco.",
      D: "Incorreta: simplificacao anatomica inadequada.",
    },
    explicacao:
      "Resumo: Inguinal = ligamento + aneis + contexto herniario.\nA) CORRETA.\nB) INCORRETA.\nC) INCORRETA.\nD) INCORRETA.",
  },
  {
    id: 360,
    materia: "bmf1",
    tema: "bmf1_a18",
    modulo: 1,
    dificuldade: 3,
    correta: 1,
    enunciado:
      "Na ponte com a clinica, a laparotomia e a paracentese exigem respeito as camadas porque:",
    opcoes: [
      "A) Todas as fascias se comportam de forma identica quanto a hematoma e disseminacao",
      "B) A ruptura de fascias e planos define se colecoes/hematomas ficam limitados ou se difundem, e orienta via segura de acesso",
      "C) O peritonio elimina qualquer risco de perfuracao oca",
      "D) A vascularizacao superficial e irrelevante no planejamento",
    ],
    explicacao_geral:
      "Aula relaciona anatomia de planos a risco de complicacoes e escolha de trajeto.",
    explicacoes_opcoes: {
      A: "Incorreta: comportamento varia por plano.",
      B: "Correta: sintetiza o paragrafo clinico.",
      C: "Incorreta: perfuracao oca e justamente um alerta de pneumoperitonio.",
      D: "Incorreta: vascularizacao deve ser considerada.",
    },
    explicacao:
      "Resumo: Conhecer planos reduz complicacoes e melhora abordagem.\nA) INCORRETA.\nB) CORRETA.\nC) INCORRETA.\nD) INCORRETA.",
  },
  {
    id: 361,
    materia: "bmf1",
    tema: "bmf1_a18",
    modulo: 1,
    dificuldade: 3,
    correta: 3,
    enunciado:
      "No contexto de imagem, pneumoperitonio livre em radiografia sugere principalmente:",
    opcoes: [
      "A) Lesao muscular isolada da parede, sem risco visceral",
      "B) Obstrucao exclusiva do canal inguinal",
      "C) Alteracao funcional sem correlacao anatomica",
      "D) Possivel perfuracao de viscera oca, exigindo busca da origem conforme topografia abdominal",
    ],
    explicacao_geral:
      "O texto usa pneumoperitonio como exemplo de traducao anatomia-imagem-clinica.",
    explicacoes_opcoes: {
      A: "Incorreta: nao explica ar livre peritoneal.",
      B: "Incorreta: nao e o mecanismo descrito.",
      C: "Incorreta: ha correlacao topografica clara.",
      D: "Correta: corresponde a ponte com a clinica.",
    },
    explicacao:
      "Resumo: Ar livre peritoneal pede procurar perfuracao de viscera oca.\nA) INCORRETA.\nB) INCORRETA.\nC) INCORRETA.\nD) CORRETA.",
  },
];

function main() {
  const data = JSON.parse(fs.readFileSync(file, "utf8"));
  const arr = data.questoes;
  const map = Object.fromEntries(novas.map((x) => [x.id, x]));
  let n = 0;
  for (let i = 0; i < arr.length; i++) {
    if (map[arr[i].id] && arr[i].tema === "bmf1_a18") {
      arr[i] = map[arr[i].id];
      n++;
    }
  }
  if (n !== 10) throw new Error(`bmf1_a18: esperado 10, obtido ${n}`);
  fs.writeFileSync(file, JSON.stringify(data, null, 2) + "\n", "utf8");
  JSON.parse(fs.readFileSync(file, "utf8"));
  console.log("bmf1_a18 OK (352-361)");
}

main();
