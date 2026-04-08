/**
 * Uma aula por vez: substitui somente bmf1_a16 (ids 332–341).
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const file = path.join(__dirname, "..", "data", "questoes.json");

const novas = [
  {
    id: 332,
    materia: "bmf1",
    tema: "bmf1_a16",
    modulo: 1,
    dificuldade: 2,
    correta: 0,
    enunciado:
      "Na interpretação da lâmina de pele em HE, a epiderme é descrita como avascular. A ‘Dica de Prova’ orienta que, se estruturas sugestivas de capilares parecerem na camada mais superficial, o aluno deve:",
    opcoes: [
      "A) Reconsiderar se não é derme invaginando ou um recorte que simula vascularização epidérmica",
      "B) Concluir que a epiderme irriga-se diretamente por capilares intraepidérmicos",
      "C) Ignorar o limite epiderme/derme e focar só no estrato córneo",
      "D) Assumir sempre artefato de coração sem revisar o aumento",
    ],
    explicacao_geral:
      "Epiderme sem vasos — confusão com derme é erro clássico de bancada.",
    explicacoes_opcoes: {
      A: "Correta: ecoa a dica explícita do texto.",
      B: "Incorreta: contradiz a regra da epiderme avascular.",
      C: "Incorreta: o limite é justamente o primeiro passo do roteiro.",
      D: "Incorreta: artefato existe, mas a dica principal é revisar o que se está vendo.",
    },
    explicacao:
      "Resumo: Superfície ‘vascular’ na epiderme costuma ser derme em corte.\nA) CORRETA.\nB) INCORRETA.\nC) INCORRETA.\nD) INCORRETA.",
  },
  {
    id: 333,
    materia: "bmf1",
    tema: "bmf1_a16",
    modulo: 1,
    dificuldade: 1,
    correta: 1,
    enunciado:
      "No roteiro sugerido para a lâmina de pele, o primeiro passo (etapa 1) é procurar:",
    opcoes: [
      "A) Apenas o estrato córneo espessado, antes de qualquer limite",
      "B) O limite epiderme/derme — com epiderme em geral mais basofílica",
      "C) Diretamente folículos em corte oblíquo, sem definir interface",
      "D) Somente tecido adiposo subcutâneo, ignorando epiderme",
    ],
    explicacao_geral:
      "Tabela de etapas: começar pelo limite basal da epiderme.",
    explicacoes_opcoes: {
      A: "Incorreta: córneo é etapa posterior no roteiro.",
      B: "Correta: linha 1 da tabela da aula.",
      C: "Incorreta: folículo é etapa 3.",
      D: "Incorreta: roteiro começa pela interface epiderme/derme.",
    },
    explicacao:
      "Resumo: Ancorar epiderme versus derme antes de anexos.\nA) INCORRETA.\nB) CORRETA.\nC) INCORRETA.\nD) INCORRETA.",
  },
  {
    id: 334,
    materia: "bmf1",
    tema: "bmf1_a16",
    modulo: 1,
    dificuldade: 1,
    correta: 2,
    enunciado:
      "Por que o adipócito branco costuma parecer ‘vazio’ ou claro na rotina com hematoxilina-eosina?",
    opcoes: [
      "A) Porque não há lipídios na célula",
      "B) Porque o núcleo ocupa o centro do vacúolo",
      "C) Porque o grande vacúolo de triglicerídeos dissolve-se no processamento, restando núcleo periférico achatado",
      "D) Porque a coloração tingiu apenas a derme e não o adipócito",
    ],
    explicacao_geral:
      "Pré-Prova: explicar o ‘vazio’ no HE.",
    explicacoes_opcoes: {
      A: "Incorreta: o conteúdo lipídico é justamente o que some.",
      B: "Incorreta: núcleo é periférico no branco.",
      C: "Correta: síntese do parágrafo de adiposo branco.",
      D: "Incorreta: a lógica é dissolução do conteúdo, não exclusão de tincão.",
    },
    explicacao:
      "Resumo: Gordura sai na preparação; perfil periférico do núcleo permanece.\nA) INCORRETA.\nB) INCORRETA.\nC) CORRETA.\nD) INCORRETA.",
  },
  {
    id: 335,
    materia: "bmf1",
    tema: "bmf1_a16",
    modulo: 1,
    dificuldade: 2,
    correta: 3,
    enunciado:
      "A derme papilar, em contraste com a reticular, é melhor caracterizada na aula como:",
    opcoes: [
      "A) Feixes grossos de colágeno com poucos vasos",
      "B) Ausência de fibroblastos e ausência de vasos",
      "C) Tecido denso sem transição com a epiderme",
      "D) Conjuntivo frouxo, fibroblastos e vasos finos; reticular apresenta fibras de colágeno mais grossas e organizadas",
    ],
    explicacao_geral:
      "Papilar frouxo; reticular denso — transição gradual.",
    explicacoes_opcoes: {
      A: "Incorreta: descreve melhor reticular.",
      B: "Incorreta: papilar é vascularizada.",
      C: "Incorreta: papilar interage com epiderme (papilas).",
      D: "Correta: pontos-chave + parágrafo específico.",
    },
    explicacao:
      "Resumo: Frouxo e vascular versus feixes densos.\nA) INCORRETA.\nB) INCORRETA.\nC) INCORRETA.\nD) CORRETA.",
  },
  {
    id: 336,
    materia: "bmf1",
    tema: "bmf1_a16",
    modulo: 1,
    dificuldade: 3,
    correta: 1,
    enunciado:
      "O tecido adiposo marrom difere do branco, em termos conceituais da aula, principalmente por:",
    opcoes: [
      "A) Vacúolo único gigante e função exclusivamente de reserva energética de longo prazo",
      "B) Múltiplas gotículas lipídicas, mitocôndrias com UCP1 e termogênese não tremulante adaptativa",
      "C) Ausência de vascularização em qualquer idade",
      "D) Cor clara em lâmina com núcleo central redondo grande",
    ],
    explicacao_geral:
      "Frase-âncora: branco um balão; marrom enxame de gotinhas.",
    explicacoes_opcoes: {
      A: "Incorreta: descreve adipócito branco.",
      B: "Correta: tabela e texto de adiposo marrom.",
      C: "Incorreta: tecido vivo é perfundido.",
      D: "Incorreta: marrom tende a aspecto mais granular/eosinofílico na comparação da tabela.",
    },
    explicacao:
      "Resumo: Multilocular + calor adaptativo.\nA) INCORRETA.\nB) CORRETA.\nC) INCORRETA.\nD) INCORRETA.",
  },
  {
    id: 337,
    materia: "bmf1",
    tema: "bmf1_a16",
    modulo: 1,
    dificuldade: 2,
    correta: 2,
    enunciado:
      "Segundo os ‘erros comuns na prática de bancada’, um folículo piloso em corte oblíquo pode ser confundido com:",
    opcoes: [
      "A) Estrato basal isolado, sem outros estratos epidérmicos",
      "B) Derme reticular pura, sem epiderme",
      "C) Múltiplos círculos que lembram cisto — exige correlacionar sequência de camadas do folículo",
      "D) Apenas bolha de montagem, sem outra hipótese",
    ],
    explicacao_geral:
      "Corte oblíquo do folículo ≠ cisto — tabela Pré-Prova.",
    explicacoes_opcoes: {
      A: "Incorreta: não é o erro citado.",
      B: "Incorreta: não é o ponto do texto.",
      C: "Correta: parágrafo de erros comuns.",
      D: "Incorreta: bolha de montagem é outro artefato.",
    },
    explicacao:
      "Resumo: Geometria do corte engana — pensar folículo em anel.\nA) INCORRETA.\nB) INCORRETA.\nC) CORRETA.\nD) INCORRETA.",
  },
  {
    id: 338,
    materia: "bmf1",
    tema: "bmf1_a16",
    modulo: 1,
    dificuldade: 3,
    correta: 3,
    enunciado:
      "Na diferenciação sugerida entre artefato de coração e bolha de montagem, o que o texto indica como critério?",
    opcoes: [
      "A) Ambos são idênticos microscopicamente em qualquer lâmina",
      "B) Bolha de montagem só ocorre em tecido nervoso",
      "C) Artefato de coração não existe em pele",
      "D) Contexto da borda da lâmina e interpretação cuidadosa — não confundir com cavidade patológica",
    ],
    explicacao_geral:
      "Tabela Pré-Prova: artefato versus bolha.",
    explicacoes_opcoes: {
      A: "Incorreta: a tabela pede como diferenciar.",
      B: "Incorreta: sem restrição a um órgão.",
      C: "Incorreta: generalização falsa.",
      D: "Correta: ideia de contexto (borda) versus patologia.",
    },
    explicacao:
      "Resumo: Olhar onde o artefato nasce na preparação.\nA) INCORRETA.\nB) INCORRETA.\nC) INCORRETA.\nD) CORRETA.",
  },
  {
    id: 339,
    materia: "bmf1",
    tema: "bmf1_a16",
    modulo: 1,
    dificuldade: 2,
    correta: 0,
    enunciado:
      "Na epiderme em corte, do ápice (superfície) à base, a sequência correta citada na aula é:",
    opcoes: [
      "A) Estrato córneo (anucleado, rosado), granuloso (grânulos), espinhoso (núcleo central), basal (paliçada)",
      "B) Basal primeiro, depois córneo, granuloso e espinhoso intercalados aleatoriamente",
      "C) Espinhoso superficial ao córneo, com basal ausente na pele delgada",
      "D) Granuloso sempre ausente em qualquer pele humana",
    ],
    explicacao_geral:
      "Correlacionar nome com aspecto — superficial ao profundo.",
    explicacoes_opcoes: {
      A: "Correta: parágrafo ‘Epiderme na lâmina’.",
      B: "Incorreta: inverte polaridade.",
      C: "Incorreta: basal não desaparece; delgada só afina córneo.",
      D: "Incorreta: camadas existem; finas podem ser menos evidentes.",
    },
    explicacao:
      "Resumo: Córneo no topo, basal colado na membrana basal.\nA) CORRETA.\nB) INCORRETA.\nC) INCORRETA.\nD) INCORRETA.",
  },
  {
    id: 340,
    materia: "bmf1",
    tema: "bmf1_a16",
    modulo: 1,
    dificuldade: 2,
    correta: 1,
    enunciado:
      "Entre as funções atribuídas ao tecido adiposo branco na aula, incluem-se:",
    opcoes: [
      "A) Condução nervosa rápida e secreção de muco",
      "B) Reserva energética, isolamento mecânico e térmico e amortecimento (cushion) para órgãos",
      "C) Termogênese não tremulante como função principal, acima de qualquer reserva",
      "D) Síntese de queratina para o estrato córneo",
    ],
    explicacao_geral:
      "Branco = reserva; marrom = calor adaptativo.",
    explicacoes_opcoes: {
      A: "Incorreta: não é função do adiposo branco.",
      B: "Correta: lista do parágrafo de adiposo branco.",
      C: "Incorreta: termogênese é ênfase do marrom.",
      D: "Incorreta: queratinização é epidérmica.",
    },
    explicacao:
      "Resumo: Energia + proteção + isolamento.\nA) INCORRETA.\nB) CORRETA.\nC) INCORRETA.\nD) INCORRETA.",
  },
  {
    id: 341,
    materia: "bmf1",
    tema: "bmf1_a16",
    modulo: 1,
    dificuldade: 3,
    correta: 3,
    enunciado:
      "A diferença entre pele delgada e espessa, ao microscópio, é melhor resumida na aula como:",
    opcoes: [
      "A) Pele delgada não possui epiderme identificável",
      "B) Pele espessa não apresenta estrato córneo",
      "C) Apenas a derme muda; o córneo é idêntico em espessura em todos os sítios",
      "D) Na pele delgada o estrato córneo é mais fino; na espessa há estrato córneo espessado — a histologia não ‘some’, apenas encolhe",
    ],
    explicacao_geral:
      "Pontos-chave: córneo marca espessura relativa.",
    explicacoes_opcoes: {
      A: "Incorreta: epiderme existe.",
      B: "Incorreta: espessa tem córneo proeminente.",
      C: "Incorreta: córneo varia entre sítios.",
      D: "Correta: frase do texto sobre pele delgada.",
    },
    explicacao:
      "Resumo: Espessura relativa do córneo, não ausência de epiderme.\nA) INCORRETA.\nB) INCORRETA.\nC) INCORRETA.\nD) CORRETA.",
  },
];

function main() {
  const data = JSON.parse(fs.readFileSync(file, "utf8"));
  const arr = data.questoes;
  const map = Object.fromEntries(novas.map((x) => [x.id, x]));
  let n = 0;
  for (let i = 0; i < arr.length; i++) {
    if (map[arr[i].id] && arr[i].tema === "bmf1_a16") {
      arr[i] = map[arr[i].id];
      n++;
    }
  }
  if (n !== 10) throw new Error(`bmf1_a16: esperado 10, obtido ${n}`);
  fs.writeFileSync(file, JSON.stringify(data, null, 2) + "\n", "utf8");
  JSON.parse(fs.readFileSync(file, "utf8"));
  console.log("bmf1_a16 OK (332–341)");
}

main();
