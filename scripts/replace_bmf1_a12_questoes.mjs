/**
 * Uma conteúdo por vez: substitui somente bmf1_a12 (ids 292–301).
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const file = path.join(__dirname, "..", "data", "questoes.json");

const novas = [
  {
    id: 292,
    materia: "bmf1",
    tema: "bmf1_a12",
    modulo: 1,
    dificuldade: 2,
    correta: 0,
    enunciado:
      "Segundo a teoria dos filamentos deslizantes, o que ocorre no encurtamento isotônico típico?",
    opcoes: [
      "A) Há encurtamento do sarcômero e movimento relativo entre filamentos, sem encurtar os filamentos em si",
      "B) Os filamentos de actina e miosina encurtam quimicamente como borracha",
      "C) Apenas o tendão encurta; a fibra permanece isométrica sempre",
      "D) A tropomiosina degrada completamente a cada contração",
    ],
    explicacao_geral:
      "Ligação cruzada gasta ATP e desliza filamentos — base da mecânica.",
    explicacoes_opcoes: {
      A: "Correta: frase central da teoria dos filamentos deslizantes.",
      B: "Incorreta: filamentos mantêm comprimento; muda sobreposição.",
      C: "Incorreta: fibra pode mudar de comprimento (isotônica).",
      D: "Incorreta: tropomiosina regula acesso, não desaparece.",
    },
    explicacao:
      "Conceito-chave: ‘Desliza’ ≠ ‘encolhe o polímero’.\nA) CORRETA.\nB) INCORRETA.\nC) INCORRETA.\nD) INCORRETA.",
  },
  {
    id: 293,
    materia: "bmf1",
    tema: "bmf1_a12",
    modulo: 1,
    dificuldade: 2,
    correta: 1,
    enunciado:
      "Com o aumento de Ca²⁺ sarcoplasmático na excitação-contração, qual sequência conceitual está correta?",
    opcoes: [
      "A) Tropomiosina destrói ATP antes da miosina",
      "B) Troponina/tropomiosina deixam de bloquear sítios da actina, permitindo pontes cruzadas",
      "C) O Ca²⁺ liga-se diretamente à cabeça da miosina sem troponina",
      "D) A actina polimeriza de novo a cada milissegundo",
    ],
    explicacao_geral:
      "Ca²⁺ é interruptor regulatório — relaxa quando cai e bombas recaptam.",
    explicacoes_opcoes: {
      A: "Incorreta: ATP é hidrolisado no ciclo da miosina, não por esse passo isolado.",
      B: "Correta: alinha-se ao parágrafo inicial e à classificação de etapas.",
      C: "Incorreta: regulador clássico envolve complexo troponina–tropomiosina.",
      D: "Incorreta: não resume o mecanismo de ativação.",
    },
    explicacao:
      "Conceito-chave: Sem Ca²⁺, a miosina não ‘pega’ a actina de forma produtiva.\nA) INCORRETA.\nB) CORRETA.\nC) INCORRETA.\nD) INCORRETA.",
  },
  {
    id: 294,
    materia: "bmf1",
    tema: "bmf1_a12",
    modulo: 1,
    dificuldade: 1,
    correta: 2,
    enunciado:
      "Após despolarização da membrana e sinal ao retículo sarcoplasmático, a liberação de Ca²⁺ para o citoplasma ocorre principalmente por:",
    opcoes: [
      "A) Difusão passiva irrestrita através do epimísio",
      "B) Bomba Na⁺/K⁺ exclusivamente no disco Z",
      "C) Canais de rianodina no retículo sarcoplasmático",
      "D) Mitocôndrias liberando Ca²⁺ sem receptores",
    ],
    explicacao_geral:
      "RyR acopla excitação elétrica a liberação de Ca²⁺ — vínculo com hipertermia maligna.",
    explicacoes_opcoes: {
      A: "Incorreta: barreira conjuntiva não explica acoplamento.",
      B: "Incorreta: bomba de sódio não é o canal de Ca²⁺ do SR.",
      C: "Correta: etapa 2 da classificação da conteúdo.",
      D: "Incorreta: não descreve a via principal do SR.",
    },
    explicacao:
      "Conceito-chave: T-tubule entrega sinal; SR entrega Ca²⁺.\nA) INCORRETA.\nB) INCORRETA.\nC) CORRETA.\nD) INCORRETA.",
  },
  {
    id: 295,
    materia: "bmf1",
    tema: "bmf1_a12",
    modulo: 1,
    dificuldade: 2,
    correta: 3,
    enunciado:
      "No relaxamento muscular, por que o retorno do Ca²⁺ ao retículo é descrito como ‘custo energético’ no texto?",
    opcoes: [
      "A) Porque não há bombas de Ca²⁺ no sarcoplasma",
      "B) Porque o Ca²⁺ difunde espontaneamente sem ATP em qualquer estado",
      "C) Porque a miosina não usa ATP no ciclo",
      "D) Porque bombas de Ca²⁺ do retículo consomem ATP na recaptação",
    ],
    explicacao_geral:
      "Relaxamento ativo — distúrbios de ATP (isquemia, mitopatia) prejudicam relaxamento.",
    explicacoes_opcoes: {
      A: "Incorreta: bombas existem no SR.",
      B: "Incorreta: gradiente exige trabalho ativo.",
      C: "Incorreta: ciclo da miosina depende de ATP.",
      D: "Correta: etapa 4 da classificação.",
    },
    explicacao:
      "Conceito-chave: Parar de contrair não é ‘de graça’ metabolicamente.\nA) INCORRETA.\nB) INCORRETA.\nC) INCORRETA.\nD) CORRETA.",
  },
  {
    id: 296,
    materia: "bmf1",
    tema: "bmf1_a12",
    modulo: 1,
    dificuldade: 3,
    correta: 0,
    enunciado:
      "Qual distinção corresponde ao par potencial de placa terminal versus potencial de ação da fibra muscular?",
    opcoes: [
      "A) Evento local na junção nicotínica versus propagação pelo sarcolema de toda a fibra",
      "B) Ambos são idênticos e propagam-se apenas no tendão",
      "C) Potencial de placa percorre o nervo periférico sem despolarizar a fibra",
      "D) Potencial de ação da fibra ocorre só no núcleo celular",
    ],
    explicacao_geral:
      "erro comum clássica citada explicitamente na conteúdo.",
    explicacoes_opcoes: {
      A: "Correta: classificação revisão final.",
      B: "Incorreta: confundir os dois é o erro esperado.",
      C: "Incorreta: placa despolariza localmente e dispara o PA se limiar atingido.",
      D: "Incorreta: PA é de membrana sarcolemal.",
    },
    explicacao:
      "Conceito-chave: Um é ‘centelha’ local; o outro é ‘onda’ na fibra.\nA) CORRETA.\nB) INCORRETA.\nC) INCORRETA.\nD) INCORRETA.",
  },
  {
    id: 297,
    materia: "bmf1",
    tema: "bmf1_a12",
    modulo: 1,
    dificuldade: 1,
    correta: 2,
    enunciado:
      "Qual par melhor diferencia contração isométrica e isotônica?",
    opcoes: [
      "A) Isométrica sempre sem tensão; isotônica sem ATP",
      "B) Isométrica encurta fibra; isotônica mantém comprimento fixo",
      "C) Isométrica: tensão sem mudança de comprimento; isotônica: comprimento muda",
      "D) Ambas exigem alongamento excêntrico obrigatório",
    ],
    explicacao_geral:
      "Isométrico ‘empurra parede’; isotônico move carga.",
    explicacoes_opcoes: {
      A: "Incorreta: isométrica gera tensão.",
      B: "Incorreta: inverte definições.",
      C: "Correta: classificação revisão final.",
      D: "Incorreta: excêntrico é subtipo com alongamento sob tensão.",
    },
    explicacao:
      "Conceito-chave: Nomenclatura de prova — não confundir com excêntrico.\nA) INCORRETA.\nB) INCORRETA.\nC) CORRETA.\nD) INCORRETA.",
  },
  {
    id: 298,
    materia: "bmf1",
    tema: "bmf1_a12",
    modulo: 1,
    dificuldade: 2,
    correta: 1,
    enunciado:
      "Frequência de disparo motoneuronal elevada pode fundir contrações parciais em tônus sustentado. Esse fenômeno denomina-se:",
    opcoes: [
      "A) Bloqueio neuromuscular irreversível espontâneo",
      "B) Somatétano",
      "C) Fibrilação ventricular da fibra esquelética",
      "D) Hipotonia permanente por ausência de ATP basal",
    ],
    explicacao_geral:
      "Unidade motora + frequência explicam força antes de fadiga.",
    explicacoes_opcoes: {
      A: "Incorreta: não descreve fusão tetânica.",
      B: "Correta: definição de uma frase da revisão final.",
      C: "Incorreta: ritmo cardíaco, não músculo esquelético.",
      D: "Incorreta: confunde com falência energética.",
    },
    explicacao:
      "Conceito-chave: Tetano = soma temporal de contrações.\nA) INCORRETA.\nB) CORRETA.\nC) INCORRETA.\nD) INCORRETA.",
  },
  {
    id: 299,
    materia: "bmf1",
    tema: "bmf1_a12",
    modulo: 1,
    dificuldade: 2,
    correta: 3,
    enunciado:
      "Em mesma carga, por que a contração excêntrica costuma implicar maior estresse microestrutural que a concêntrica, segundo a conteúdo?",
    opcoes: [
      "A) Porque elimina totalmente o uso de ATP",
      "B) Porque impede ligações cruzadas",
      "C) Porque remove o Ca²⁺ do sarcoplasma",
      "D) Porque a fibra alonga sob tensão, gerando alto estresse estrutural",
    ],
    explicacao_geral:
      "Treino excêntrico e lesão compartilham biomecânica de alongamento ativo.",
    explicacoes_opcoes: {
      A: "Incorreta: ATP ainda participa do ciclo.",
      B: "Incorreta: pontes ocorrem.",
      C: "Incorreta: não é o núcleo do contraste.",
      D: "Correta: texto sobre tipos de contração.",
    },
    explicacao:
      "Conceito-chave: ‘Descer controlado’ pode doer mais que ‘subir’.\nA) INCORRETA.\nB) INCORRETA.\nC) INCORRETA.\nD) CORRETA.",
  },
  {
    id: 300,
    materia: "bmf1",
    tema: "bmf1_a12",
    modulo: 1,
    dificuldade: 3,
    correta: 1,
    enunciado:
      "Os bloqueadores neuromuscular não despolarizantes, na visão integrativa da conteúdo, agem principalmente por:",
    opcoes: [
      "A) Abrir canais de rianodina de forma irreversível no SR",
      "B) Competir com acetilcolina no receptor nicotínico da placa terminal",
      "C) Bloquear exclusivamente túbulos T sem afetar a placa",
      "D) Hiperpolarizar permanentemente o axônio motor sem sinapse",
    ],
    explicacao_geral:
      "Paralisia sem sedação — paciente pode estar acordado e ainda assim bloqueado.",
    explicacoes_opcoes: {
      A: "Incorreta: não é o mecanismo clássico dos curares competitivos.",
      B: "Correta: ponte com clínica e classificação de bloqueios.",
      C: "Incorreta: alvo principal é receptor nicotínico na placa.",
      D: "Incorreta: foco é junção neuromuscular.",
    },
    explicacao:
      "Conceito-chave: Competitivo = disputa pelo receptor com ACh.\nA) INCORRETA.\nB) CORRETA.\nC) INCORRETA.\nD) INCORRETA.",
  },
  {
    id: 301,
    materia: "bmf1",
    tema: "bmf1_a12",
    modulo: 1,
    dificuldade: 3,
    correta: 3,
    enunciado:
      "A menção à hipertermia maligna ancora-se fisiologicamente em qual mecanismo?",
    opcoes: [
      "A) Ausência total de Ca²⁺ no sarcoplasma",
      "B) Bloqueio irreversível exclusivo de receptores muscarínicos cardíacos",
      "C) Parada completa de ATP mitocondrial sem aumento de calor",
      "D) Liberação descontrolada de Ca²⁺ relacionada ao receptor de rianodina e hipermetabolismo",
    ],
    explicacao_geral:
      "Vínculo Ca²⁺ + RS — detalhes anestésicos ficam para especialidade.",
    explicacoes_opcoes: {
      A: "Incorreta: o problema é excesso funcional de sinal de Ca²⁺.",
      B: "Incorreta: não é o eixo descrito.",
      C: "Incorreta: quadro é hipermetabólico.",
      D: "Correta: texto da seção integrativa.",
    },
    explicacao:
      "Conceito-chave: RyR descontrolado = bomba de calor e rigidez.\nA) INCORRETA.\nB) INCORRETA.\nC) INCORRETA.\nD) CORRETA.",
  },
];

function main() {
  const data = JSON.parse(fs.readFileSync(file, "utf8"));
  const arr = data.questoes;
  const map = Object.fromEntries(novas.map((x) => [x.id, x]));
  let n = 0;
  for (let i = 0; i < arr.length; i++) {
    if (map[arr[i].id] && arr[i].tema === "bmf1_a12") {
      arr[i] = map[arr[i].id];
      n++;
    }
  }
  if (n !== 10) throw new Error(`bmf1_a12: esperado 10, obtido ${n}`);
  fs.writeFileSync(file, JSON.stringify(data, null, 2) + "\n", "utf8");
  JSON.parse(fs.readFileSync(file, "utf8"));
  console.log("bmf1_a12 OK (292–301)");
}

main();
