/**
 * OBSOLETO para apply — substituído por scripts/bmf2_loteA.cjs (revisão + a4–a5).
 * Mantido só como referência histórica; usar: node scripts/apply_bmf2_patch.cjs
 *
 * Novas questões BMF2 — partes 1–3 combinadas no apply.
 * Cada aula: 10 questões, dificuldade 2×1 + 5×2 + 3×3, ~4 mini-casos.
 */
"use strict";

function Q(payload) {
  return payload;
}

// ——— bmf2_a2 — Propriedades do músculo cardíaco — ids 1092–1101
module.exports.bmf2_a2 = [
  Q({
    id: 1092,
    materia: "bmf2",
    tema: "bmf2_a2",
    enunciado:
      "Qual definição melhor descreve a excitabilidade do miocárdio?",
    opcoes: [
      "A) Capacidade de gerar impulso espontâneo sem estímulo externo.",
      "B) Capacidade de transmitir o estímulo elétrico entre células adjacentes.",
      "C) Capacidade de responder a estímulo elétrico adequado com despolarização.",
      "D) Capacidade de desenvolver força de contração após influxo de cálcio.",
    ],
    correta: 2,
    dificuldade: 1,
    modulo: 2,
    explicacao_geral:
      "Excitabilidade é a propriedade de responder a estímulo; automatismo é geração espontânea; contratilidade é força mecânica.",
    explicacoes_opcoes: {
      A: "Descreve automatismo, mais marcado no tecido marcapasso, não a definição geral de excitabilidade.",
      B: "Corresponde à condutibilidade/propagação do impulso.",
      C: "Correto: excitabilidade é responder a estímulo com potencial de ação.",
      D: "Refere-se à contratilidade e ao acoplamento excitação-contração.",
    },
    explicacao:
      "Resumo: Excitabilidade = resposta elétrica a estímulo.\nA) INCORRETA. É automatismo.\nB) INCORRETA. É condutibilidade.\nC) CORRETA.\nD) INCORRETA. É contratilidade.",
  }),
  Q({
    id: 1093,
    materia: "bmf2",
    tema: "bmf2_a2",
    enunciado:
      "Mulher de 62 anos com insuficiência cardíaca. Ao comparar miocárdio com músculo esquelético, qual distinção é mais importante clinicamente?",
    opcoes: [
      "A) O miocárdio apresenta refratariedade prolongada que impede tetania sustentada.",
      "B) O músculo esquelético carece de discos intercalares.",
      "C) O miocárdio não depende de cálcio para contrair.",
      "D) O músculo esquelético não pode aumentar a força com estímulo simpático.",
    ],
    correta: 0,
    dificuldade: 2,
    modulo: 2,
    explicacao_geral:
      "A refratariedade longa do ventrículo evita somação de estímulos e tetania, diferentemente do esquelético.",
    explicacoes_opcoes: {
      A: "Correto: tetania cardíaca não ocorre como no esquelético.",
      B: "Verdadeiro que esquelético não tem discos intercalares, mas a pegadinha clássica da aula é tetania/refratariedade.",
      C: "Incorreto: o cálcio é central na contratilidade cardíaca.",
      D: "Incorreto: o esquelético modula força (recrutamento, frequência).",
    },
    explicacao:
      "Resumo: Refratariedade protege o coração de contração contínua.\nA) CORRETA.\nB) INCORRETA. Verdade parcial, mas não o contraste fisiológico central pedido.\nC) INCORRETA.\nD) INCORRETA.",
  }),
  Q({
    id: 1094,
    materia: "bmf2",
    tema: "bmf2_a2",
    enunciado:
      "Em qual tecido o automatismo é fisiologicamente mais evidente?",
    opcoes: [
      "A) Miocárdio ventricular livre em repouso.",
      "B) Sistema de condução especializado (tecido marcapasso).",
      "C) Purkinje exclusivamente após bloqueio AV completo.",
      "D) Endocárdio valvar.",
    ],
    correta: 1,
    dificuldade: 2,
    modulo: 2,
    explicacao_geral:
      "Automatismo não domina todo cardiomiócito; é mais marcado no tecido marcapasso.",
    explicacoes_opcoes: {
      A: "O ventrículo trabalhador não é o principal gerador basal.",
      B: "Correto.",
      C: "Purkinje tem automatismo, mas a ideia da aula é o tecido marcapasso em geral, não só pós-bloqueio.",
      D: "Endocárdio não é o foco de automatismo.",
    },
    explicacao:
      "Resumo: Automatismo predomina no sistema de condução.\nA) INCORRETA.\nB) CORRETA.\nC) INCORRETA.\nD) INCORRETA.",
  }),
  Q({
    id: 1095,
    materia: "bmf2",
    tema: "bmf2_a2",
    enunciado:
      "A contratilidade miocárdica depende criticamente de qual íon no citoplasma?",
    opcoes: [
      "A) Sódio, pela entrada massiva na plataforma.",
      "B) Potássio, como principal catião do potencial de ação.",
      "C) Cloro, pela acoplamento direto aos filamentos.",
      "D) Cálcio, ligado ao acoplamento excitação-contração.",
    ],
    correta: 3,
    dificuldade: 2,
    modulo: 2,
    explicacao_geral:
      "O cálcio intracelular modula a ativação de filamentos e a força contrátil.",
    explicacoes_opcoes: {
      A: "Na despolarização o Na⁺ importa, mas a força contrátil depende fortemente de Ca²⁺.",
      B: "K⁺ participa do repouso/repolarização, não como principal determinante da força.",
      C: "Sem fundamento para cloro como principal na contratilidade.",
      D: "Correto.",
    },
    explicacao:
      "Resumo: Cálcio é a chave da contratilidade.\nA) INCORRETA.\nB) INCORRETA.\nC) INCORRETA.\nD) CORRETA.",
  }),
  Q({
    id: 1096,
    materia: "bmf2",
    tema: "bmf2_a2",
    enunciado:
      "Qual propriedade propaga o impulso de forma ordenada pelo miocárdio?",
    opcoes: [
      "A) Contratilidade.",
      "B) Refratariedade.",
      "C) Condutibilidade.",
      "D) Automatismo.",
    ],
    correta: 2,
    dificuldade: 1,
    modulo: 2,
    explicacao_geral:
      "Condutibilidade é a propagação coordenada do potencial de ação.",
    explicacoes_opcoes: {
      A: "Contratilidade é força mecânica.",
      B: "Refratariedade limita frequência de disparo, não define propagação ordenada.",
      C: "Correto.",
      D: "Automatismo é geração de ritmo.",
    },
    explicacao:
      "Resumo: Propagação = condutibilidade.\nA) INCORRETA.\nB) INCORRETA.\nC) CORRETA.\nD) INCORRETA.",
  }),
  Q({
    id: 1097,
    materia: "bmf2",
    tema: "bmf2_a2",
    enunciado:
      "Homem de 55 anos em uso de beta-agonista inalatório por asma (efeito sistêmico residual). Qual efeito cardiovascular esperado está mais alinhado ao aumento do estímulo simpático cardíaco?",
    opcoes: [
      "A) Redução da frequência cardíaca por predominância vagal.",
      "B) Queda da contratilidade por bloqueio de canais de cálcio.",
      "C) Aumento isolado da refratariedade absoluta sem cronotropismo.",
      "D) Aumento da frequência e da força de contração (cronotropismo e inotropismo positivos).",
    ],
    correta: 3,
    dificuldade: 3,
    modulo: 2,
    explicacao_geral:
      "O simpático aumenta cronotropismo e inotropismo, melhorando desempenho hemodinâmico quando apropriado.",
    explicacoes_opcoes: {
      A: "Vago reduz FC; simpático tende a aumentar.",
      B: "Não descreve o efeito simpático típico.",
      C: "Refratariedade não é o efeito principal citado para simpático.",
      D: "Correto.",
    },
    explicacao:
      "Resumo: Simpático positivo em FC e contratilidade.\nA) INCORRETA.\nB) INCORRETA.\nC) INCORRETA.\nD) CORRETA.",
  }),
  Q({
    id: 1098,
    materia: "bmf2",
    tema: "bmf2_a2",
    enunciado:
      "Qual contraste está correto entre excitabilidade e contratilidade?",
    opcoes: [
      "A) Excitabilidade refere-se à resposta elétrica; contratilidade à força mecânica gerada.",
      "B) São sinônimos no miocárdio.",
      "C) Contratilidade ocorre sem necessidade de despolarização.",
      "D) Excitabilidade mede apenas o débito cardíaco.",
    ],
    correta: 0,
    dificuldade: 2,
    modulo: 2,
    explicacao_geral:
      "Uma propriedade é elétrica (excitabilidade), outra é mecânica (contratilidade).",
    explicacoes_opcoes: {
      A: "Correto.",
      B: "Incorreto.",
      C: "A contração segue o acoplamento excitação-contração.",
      D: "Débito cardíaco é produto FC×VS, não definição de excitabilidade.",
    },
    explicacao:
      "Resumo: Eletricidade vs força.\nA) CORRETA.\nB) INCORRETA.\nC) INCORRETA.\nD) INCORRETA.",
  }),
  Q({
    id: 1099,
    materia: "bmf2",
    tema: "bmf2_a2",
    enunciado:
      "Paciente com taquicardia sinusal e enchimento diastólico prejudicado. Qual princípio explica por que aumentar só a frequência nem sempre aumenta o débito cardíaco?",
    opcoes: [
      "A) A contratilidade torna-se independente de cálcio.",
      "B) Intervalos diastólicos mais curtos podem reduzir o enchimento ventricular e o volume sistólico.",
      "C) A refratariedade desaparece em taquicardia.",
      "D) O sistema marcapasso deixa de conduzir impulsos.",
    ],
    correta: 1,
    dificuldade: 3,
    modulo: 2,
    explicacao_geral:
      "FC elevada pode reduzir tempo de enchimento e o volume ejetado por batimento.",
    explicacoes_opcoes: {
      A: "Incorreto.",
      B: "Correto: menos diástole pode reduzir pré-carga efetiva.",
      C: "Refratariedade não desaparece.",
      D: "Incorreto.",
    },
    explicacao:
      "Resumo: Débito depende de FC e VS; VS pode cair se a diástole encolhe demais.\nA) INCORRETA.\nB) CORRETA.\nC) INCORRETA.\nD) INCORRETA.",
  }),
  Q({
    id: 1100,
    materia: "bmf2",
    tema: "bmf2_a2",
    enunciado:
      "Cronotropismo positivo altera principalmente qual parâmetro?",
    opcoes: [
      "A) Resistência vascular sistêmica.",
      "B) Pré-carga ventricular isolada.",
      "C) Frequência cardíaca.",
      "D) Permeabilidade capilar pulmonar.",
    ],
    correta: 2,
    dificuldade: 2,
    modulo: 2,
    explicacao_geral:
      "Cronotropismo refere-se à frequência; inotropismo à força.",
    explicacoes_opcoes: {
      A: "RVP não é cronotropismo.",
      B: "Pré-carga não define cronotropismo.",
      C: "Correto.",
      D: "Sem relação direta.",
    },
    explicacao:
      "Resumo: Cronotropismo = FC.\nA) INCORRETA.\nB) INCORRETA.\nC) CORRETA.\nD) INCORRETA.",
  }),
  Q({
    id: 1101,
    materia: "bmf2",
    tema: "bmf2_a2",
    enunciado:
      "Inotropismo positivo refere-se principalmente a:",
    opcoes: [
      "A) Aumento da frequência de disparo do nó sinoatrial.",
      "B) Aumento da velocidade de condução no nó AV.",
      "C) Redução da força de contração ventricular.",
      "D) Aumento da força de contração miocárdica.",
    ],
    correta: 3,
    dificuldade: 3,
    modulo: 2,
    explicacao_geral:
      "Inotropismo = força; cronotropismo = frequência; dromotropismo = condução AV.",
    explicacoes_opcoes: {
      A: "Isso é cronotropismo.",
      B: "Isso é dromotropismo.",
      C: "Seria inotropismo negativo.",
      D: "Correto.",
    },
    explicacao:
      "Resumo: Inotropismo = contratilidade/força.\nA) INCORRETA.\nB) INCORRETA.\nC) INCORRETA.\nD) CORRETA.",
  }),
];

// ——— bmf2_a3 — Circulação sistêmica/pulmonar; vasos — ids 1102–1111
module.exports.bmf2_a3 = [
  Q({
    id: 1102,
    materia: "bmf2",
    tema: "bmf2_a3",
    enunciado:
      "Em relação à resistência vascular, qual circuito opera habitualmente com resistência mais baixa?",
    opcoes: [
      "A) Circulação pulmonar.",
      "B) Circulação sistêmica.",
      "C) Circulação coronariana exclusivamente na sístole.",
      "D) Microcirculação renal exclusivamente.",
    ],
    correta: 0,
    dificuldade: 1,
    modulo: 2,
    explicacao_geral:
      "A circulação pulmonar é de baixa resistência; a sistêmica é de resistência mais alta.",
    explicacoes_opcoes: {
      A: "Correto.",
      B: "A sistêmica apresenta resistência periférica maior.",
      C: "Fluxo coronariano do VE predomina na diástole; não define comparação sistêmica/pulmonar.",
      D: "Fora do foco da comparação entre circuitos.",
    },
    explicacao:
      "Resumo: Pulmonar = baixa resistência; sistêmica = alta.\nA) CORRETA.\nB) INCORRETA.\nC) INCORRETA.\nD) INCORRETA.",
  }),
  Q({
    id: 1103,
    materia: "bmf2",
    tema: "bmf2_a3",
    enunciado:
      "Qual definição de artéria está correta?",
    opcoes: [
      "A) Vaso que sempre transporta sangue oxigenado.",
      "B) Vaso que conduz sangue que sai do coração.",
      "C) Vaso que retorna sangue ao coração.",
      "D) Vaso exclusivamente responsável pelas trocas gasosas.",
    ],
    correta: 1,
    dificuldade: 1,
    modulo: 2,
    explicacao_geral:
      "Artéria é definida pela direção do fluxo em relação ao coração, não pela oxigenação.",
    explicacoes_opcoes: {
      A: "Artérias pulmonares levam sangue venoso.",
      B: "Correto.",
      C: "Isso descreve veia.",
      D: "Trocas ocorrem nos capilares.",
    },
    explicacao:
      "Resumo: Artéria = do coração para a periferia/pulmão.\nA) INCORRETA.\nB) CORRETA.\nC) INCORRETA.\nD) INCORRETA.",
  }),
  Q({
    id: 1104,
    materia: "bmf2",
    tema: "bmf2_a3",
    enunciado:
      "Qual segmento vascular é o principal modulador da resistência periférica e do fluxo tecidual local?",
    opcoes: [
      "A) Vênula pós-capilar.",
      "B) Capilar.",
      "C) Arteríola.",
      "D) Veia de grande calibre.",
    ],
    correta: 2,
    dificuldade: 2,
    modulo: 2,
    explicacao_geral:
      "Arteríolas regulam resistência e distribuição de fluxo; capilares são sítio de troca.",
    explicacoes_opcoes: {
      A: "Vênulas participam do retorno, não da resistência de entrada.",
      B: "Capilar troca, não regula resistência global da circulação.",
      C: "Correto.",
      D: "Veias são reservatório e retorno, com menor papel resistivo.",
    },
    explicacao:
      "Resumo: Arteríola = resistência.\nA) INCORRETA.\nB) INCORRETA.\nC) CORRETA.\nD) INCORRETA.",
  }),
  Q({
    id: 1105,
    materia: "bmf2",
    tema: "bmf2_a3",
    enunciado:
      "Homem de 48 anos com hipertensão arterial. O raciocínio fisiológico associa aumento da pressão arterial média principalmente a:",
    opcoes: [
      "A) Queda isolada do hematócrito.",
      "B) Aumento exclusivo do volume residual pulmonar.",
      "C) Redução do retorno venoso sem alteração de resistência.",
      "D) Elevação do débito cardíaco e/ou da resistência vascular periférica.",
    ],
    correta: 3,
    dificuldade: 3,
    modulo: 2,
    explicacao_geral:
      "PA depende de fluxo (débito) e resistência vasomotora; o material enfatiza relação hemodinâmica integrada.",
    explicacoes_opcoes: {
      A: "Hematócrito altera viscosidade, mas não é a resposta central aqui.",
      B: "Fora do foco básico PA = f(DC, resistência).",
      C: "Incompleto e frequentemente inverso ao esperado em certos estados.",
      D: "Correto: determinantes principais incluem DC e resistência.",
    },
    explicacao:
      "Resumo: PA relaciona-se a débito e resistência.\nA) INCORRETA.\nB) INCORRETA.\nC) INCORRETA.\nD) CORRETA.",
  }),
  Q({
    id: 1106,
    materia: "bmf2",
    tema: "bmf2_a3",
    enunciado:
      "Onde ocorre predominantemente a troca de gases, nutrientes e metabólitos com os tecidos?",
    opcoes: [
      "A) Artérias de grande calibre.",
      "B) Arteríolas.",
      "C) Capilares.",
      "D) Aorta ascendente.",
    ],
    correta: 2,
    dificuldade: 2,
    modulo: 2,
    explicacao_geral:
      "Capilares são o principal leito de troca.",
    explicacoes_opcoes: {
      A: "Condução, não troca principal.",
      B: "Correto.",
      C: "Regulação de resistência.",
      D: "Condução proximal.",
    },
    explicacao:
      "Resumo: Troca no capilar.\nA) INCORRETA.\nB) CORRETA.\nC) INCORRETA.\nD) INCORRETA.",
  }),
  Q({
    id: 1107,
    materia: "bmf2",
    tema: "bmf2_a3",
    enunciado:
      "Qual função é mais característica das veias de grande complacência?",
    opcoes: [
      "A) Gerar a maior queda de pressão resistiva do organismo.",
      "B) Produzir surfactante vascular.",
      "C) Secretar renina basalmente.",
      "D) Atuar como principal reservatório de volume e via de retorno ao coração.",
    ],
    correta: 3,
    dificuldade: 2,
    modulo: 2,
    explicacao_geral:
      "Veias armazenam volume e conduzem o retorno venoso.",
    explicacoes_opcoes: {
      A: "A resistência maior costuma ser arteriolar.",
      B: "Sem sentido anatômico.",
      C: "Renina é eixo reninangiotensinérico, não função venosa típica.",
      D: "Correto.",
    },
    explicacao:
      "Resumo: Veias = reservatório e retorno.\nA) INCORRETA.\nB) INCORRETA.\nC) INCORRETA.\nD) CORRETA.",
  }),
  Q({
    id: 1108,
    materia: "bmf2",
    tema: "bmf2_a3",
    enunciado:
      "Paciente com choque distributivo e vasodilatação. Fisiologicamente, espera-se que a resistência vascular periférica esteja:",
    opcoes: [
      "A) Aumentada.",
      "B) Inalterável pelo tônus simpático.",
      "C) Exclusivamente determinada pelo hematócrito.",
      "D) Reduzida.",
    ],
    correta: 3,
    dificuldade: 3,
    modulo: 2,
    explicacao_geral:
      "Vasodilatação reduz resistência; o contexto clínico altera perfusão e pressão.",
    explicacoes_opcoes: {
      A: "Vasoconstrição aumenta resistência.",
      B: "O simpático modula tônus vascular.",
      C: "Viscosidade influencia, mas não é exclusiva.",
      D: "Correto em vasodilatação.",
    },
    explicacao:
      "Resumo: Vasodilatação → menor resistência.\nA) INCORRETA.\nB) INCORRETA.\nC) INCORRETA.\nD) CORRETA.",
  }),
  Q({
    id: 1109,
    materia: "bmf2",
    tema: "bmf2_a3",
    enunciado:
      "A circulação sistêmica distribui sangue oxigenado aos tecidos e retorna sangue venoso ao:",
    opcoes: [
      "A) Átrio esquerdo.",
      "B) Ventrículo esquerdo.",
      "C) Átrio direito.",
      "D) Ventrículo direito.",
    ],
    correta: 2,
    dificuldade: 2,
    modulo: 2,
    explicacao_geral:
      "Retorno sistêmico chega ao átrio direito (VCS/VCI).",
    explicacoes_opcoes: {
      A: "Veias pulmonares drenam para o AE.",
      B: "Incorreto para retorno sistêmico.",
      C: "Correto.",
      D: "O VD ejete para o pulmão; o retorno sistêmico entra no AD.",
    },
    explicacao:
      "Resumo: Sistêmica: VE→tecidos→AD.\nA) INCORRETA.\nB) INCORRETA.\nC) CORRETA.\nD) INCORRETA.",
  }),
  Q({
    id: 1110,
    materia: "bmf2",
    tema: "bmf2_a3",
    enunciado:
      "Qual afirmação compara corretamente circulação sistêmica e pulmonar?",
    opcoes: [
      "A) Ambas apresentam a mesma resistência vascular média.",
      "B) O ventrículo direito habitualmente trabalha contra menor resistência que o esquerdo.",
      "C) O ventrículo esquerdo ejetta volume menor que o direito em repouso.",
      "D) A circulação pulmonar irriga os tecidos sistêmicos.",
    ],
    correta: 1,
    dificuldade: 3,
    modulo: 2,
    explicacao_geral:
      "O VD enfrenta circuito pulmonar de menor resistência; o VE enfrenta a alta resistência sistêmica.",
    explicacoes_opcoes: {
      A: "Correto.",
      B: "Resistências são diferentes.",
      C: "Em série, débitos são iguais em repouso.",
      D: "Pulmonar não perfunde tecidos sistêmicos.",
    },
    explicacao:
      "Resumo: Baixa resistência pulmonar vs alta sistêmica.\nA) CORRETA.\nB) INCORRETA.\nC) INCORRETA.\nD) INCORRETA.",
  }),
  Q({
    id: 1111,
    materia: "bmf2",
    tema: "bmf2_a3",
    enunciado:
      "Artérias de grande calibre, em relação à função hemodinâmica predominante, são mais associadas a:",
    opcoes: [
      "A) Troca transcapilar de fluidos.",
      "B) Condução de sangue sob pressão relativamente elevada.",
      "C) Armazenamento da maior parte do volume sanguíneo em repouso.",
      "D) Absorção linfática primária.",
    ],
    correta: 1,
    dificuldade: 2,
    modulo: 2,
    explicacao_geral:
      "Artérias conduzem sob alta pressão; veias armazenam; capilares trocam.",
    explicacoes_opcoes: {
      A: "Capilar.",
      B: "Correto.",
      C: "Veias.",
      D: "Linfáticos, não artérias.",
    },
    explicacao:
      "Resumo: Artéria = condução pressórica.\nA) INCORRETA.\nB) CORRETA.\nC) INCORRETA.\nD) INCORRETA.",
  }),
];
