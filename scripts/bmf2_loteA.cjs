"use strict";

function Q(x) {
  return x;
}

// bmf2_a2 — Propriedades do músculo cardíaco — ids 1092–1101 (2× d1, 5× d2, 3× d3)
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
      B: "Corresponde à condutibilidade ou propagação do impulso.",
      C: "Correto: excitabilidade é responder a estímulo com potencial de ação.",
      D: "Refere-se à contratilidade e ao acoplamento excitação-contração.",
    },
    explicacao:
      "Resumo: Excitabilidade é resposta elétrica a estímulo adequado.\nA) INCORRETA. É automatismo.\nB) INCORRETA. É condutibilidade.\nC) CORRETA.\nD) INCORRETA. É contratilidade.",
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
      A: "Correto: tetania cardíaca sustentada não ocorre como no esquelético.",
      B: "Verdadeiro que o esquelético não tem discos intercalares, mas o contraste central pedido é refratariedade e tetania.",
      C: "Incorreto: o cálcio é central na contratilidade cardíaca.",
      D: "Incorreto: o esquelético modula força por recrutamento e frequência.",
    },
    explicacao:
      "Resumo: Refratariedade protege o coração de contração contínua tipo tetania.\nA) CORRETA.\nB) INCORRETA. Verdade parcial, mas não o contraste fisiológico central pedido.\nC) INCORRETA.\nD) INCORRETA.",
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
      "D) Endótelio valvar das cúspides.",
    ],
    correta: 1,
    dificuldade: 2,
    modulo: 2,
    explicacao_geral:
      "Automatismo não domina todo cardiomiócito; é mais marcado no tecido marcapasso.",
    explicacoes_opcoes: {
      A: "O ventrículo trabalhador não é o principal gerador basal do ritmo.",
      B: "Correto.",
      C: "Fibras de Purkinje têm automatismo, mas a ideia geral é o sistema marcapasso, não só um cenário patológico.",
      D: "Endótelio valvar não é o foco de automatismo.",
    },
    explicacao:
      "Resumo: Automatismo predomina no sistema de condução especializado.\nA) INCORRETA.\nB) CORRETA.\nC) INCORRETA.\nD) INCORRETA.",
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
      "C) Cloro, pelo acoplamento direto aos filamentos contráteis.",
      "D) Cálcio, ligado ao acoplamento excitação-contração.",
    ],
    correta: 3,
    dificuldade: 2,
    modulo: 2,
    explicacao_geral:
      "O cálcio intracelular modula a ativação de filamentos e a força contrátil.",
    explicacoes_opcoes: {
      A: "Na despolarização o Na⁺ entra, mas a força contrátil depende fortemente de Ca²⁺.",
      B: "K⁺ participa do repouso e da repolarização, não como principal determinante da força.",
      C: "Sem papel central do cloro como principal na contratilidade.",
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
      B: "Refratariedade limita repetição de disparos, não define o sentido da propagação ordenada.",
      C: "Correto.",
      D: "Automatismo é geração de ritmo.",
    },
    explicacao:
      "Resumo: Propagação ordenada corresponde à condutibilidade.\nA) INCORRETA.\nB) INCORRETA.\nC) CORRETA.\nD) INCORRETA.",
  }),
  Q({
    id: 1097,
    materia: "bmf2",
    tema: "bmf2_a2",
    enunciado:
      "Homem de 55 anos em uso de beta-agonista inalatório por asma (efeito sistêmico residual). Qual efeito cardiovascular esperado se houver aumento relevante do estímulo simpático cardíaco?",
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
      A: "O vago reduz FC; o simpático tende a aumentar.",
      B: "Não descreve o efeito simpático típico sobre contratilidade.",
      C: "Refratariedade não é o efeito principal citado para aumento simpático.",
      D: "Correto.",
    },
    explicacao:
      "Resumo: Simpático aumenta FC e contratilidade.\nA) INCORRETA.\nB) INCORRETA.\nC) INCORRETA.\nD) CORRETA.",
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
      B: "Incorreto: conceitos distintos.",
      C: "A contração segue acoplamento excitação-contração após despolarização.",
      D: "Débito cardíaco é FC × volume sistólico, não definição de excitabilidade.",
    },
    explicacao:
      "Resumo: Eletricidade versus força contrátil.\nA) CORRETA.\nB) INCORRETA.\nC) INCORRETA.\nD) INCORRETA.",
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
      "FC elevada pode reduzir o tempo de enchimento e o volume ejetado por batimento.",
    explicacoes_opcoes: {
      A: "A contratilidade continua dependente de mecanismos iônicos, incluindo cálcio.",
      B: "Correto: menos diástole pode reduzir pré-carga efetiva e o volume sistólico.",
      C: "A refratariedade não desaparece.",
      D: "A condução pode alterar-se, mas essa não é a explicação central do enchimento.",
    },
    explicacao:
      "Resumo: Débito depende de FC e volume sistólico; o volume pode cair se a diástole encolhe demais.\nA) INCORRETA.\nB) CORRETA.\nC) INCORRETA.\nD) INCORRETA.",
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
      A: "Resistência vascular não é cronotropismo.",
      B: "Pré-carga não define cronotropismo.",
      C: "Correto.",
      D: "Sem relação direta com cronotropismo.",
    },
    explicacao:
      "Resumo: Cronotropismo refere-se à frequência cardíaca.\nA) INCORRETA.\nB) INCORRETA.\nC) CORRETA.\nD) INCORRETA.",
  }),
  Q({
    id: 1101,
    materia: "bmf2",
    tema: "bmf2_a2",
    enunciado:
      "Inotropismo positivo refere-se principalmente a:",
    opcoes: [
      "A) Aumento da frequência de disparo do nó sinoatrial.",
      "B) Aumento da velocidade de condução no nó atrioventricular.",
      "C) Redução da força de contração ventricular.",
      "D) Aumento da força de contração miocárdica.",
    ],
    correta: 3,
    dificuldade: 3,
    modulo: 2,
    explicacao_geral:
      "Inotropismo refere-se à força; cronotropismo à frequência; dromotropismo à condução AV.",
    explicacoes_opcoes: {
      A: "Isso é cronotropismo.",
      B: "Isso é dromotropismo.",
      C: "Seria inotropismo negativo.",
      D: "Correto.",
    },
    explicacao:
      "Resumo: Inotropismo positivo aumenta a contratilidade.\nA) INCORRETA.\nB) INCORRETA.\nC) INCORRETA.\nD) CORRETA.",
  }),
];

// bmf2_a3 — Circulação sistêmica/pulmonar; vasos — ids 1102–1111 (2×1, 5×2, 3×3)
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
      "A circulação pulmonar é de baixa resistência; a sistêmica apresenta resistência periférica maior.",
    explicacoes_opcoes: {
      A: "Correto.",
      B: "A sistêmica apresenta resistência periférica maior.",
      C: "Fluxo coronariano do ventrículo esquerdo predomina na diástole; não define a comparação sistêmica versus pulmonar.",
      D: "Fora do foco da comparação entre os dois circuitos principais.",
    },
    explicacao:
      "Resumo: Pulmonar tem resistência menor; sistêmica é de alta resistência.\nA) CORRETA.\nB) INCORRETA.\nC) INCORRETA.\nD) INCORRETA.",
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
      A: "As artérias pulmonares transportam sangue com menor oxigenação.",
      B: "Correto.",
      C: "Isso descreve veia.",
      D: "As trocas gasosas ocorrem nos capilares.",
    },
    explicacao:
      "Resumo: Artéria conduz sangue que deixa o coração.\nA) INCORRETA.\nB) CORRETA.\nC) INCORRETA.\nD) INCORRETA.",
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
      "Arteríolas regulam resistência e distribuição de fluxo; capilares são o principal sítio de troca.",
    explicacoes_opcoes: {
      A: "Vênulas participam do retorno, não da resistência de entrada ao leito.",
      B: "Capilar é sede de troca, não o principal regulador resistivo global.",
      C: "Correto.",
      D: "Veias funcionam como reservatório e retorno, com menor papel resistivo.",
    },
    explicacao:
      "Resumo: Arteríola determina resistência periférica.\nA) INCORRETA.\nB) INCORRETA.\nC) CORRETA.\nD) INCORRETA.",
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
      "A pressão arterial depende do fluxo (débito) e da resistência vasomotora.",
    explicacoes_opcoes: {
      A: "Hematócrito altera viscosidade, mas não é a resposta central aqui.",
      B: "Fora do foco básico de determinantes de pressão arterial.",
      C: "Incompleto e frequentemente incompatível com o quadro de hipertensão típico.",
      D: "Correto: determinantes principais incluem débito e resistência.",
    },
    explicacao:
      "Resumo: Pressão arterial relaciona-se a débito e resistência periférica.\nA) INCORRETA.\nB) INCORRETA.\nC) INCORRETA.\nD) CORRETA.",
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
      "Capilares são o principal leito de troca entre sangue e tecidos.",
    explicacoes_opcoes: {
      A: "Grandes artérias conduzem sob pressão; não são o principal sítio de troca.",
      B: "Arteríola regula resistência e fluxo local, não a troca transcapilar em si.",
      C: "Correto.",
      D: "A aorta conduz sangue; a troca ocorre distalmente nos capilares.",
    },
    explicacao:
      "Resumo: Troca ocorre no leito capilar.\nA) INCORRETA.\nB) INCORRETA.\nC) CORRETA.\nD) INCORRETA.",
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
      "C) Secretar renina basalmente como função principal.",
      "D) Atuar como principal reservatório de volume e via de retorno ao coração.",
    ],
    correta: 3,
    dificuldade: 2,
    modulo: 2,
    explicacao_geral:
      "Veias armazenam volume e conduzem o retorno venoso.",
    explicacoes_opcoes: {
      A: "A resistência maior costuma ser arteriolar.",
      B: "Surfactante não é função vascular típica.",
      C: "Renina integra o eixo renina-angiotensina; não é função venosa principal.",
      D: "Correto.",
    },
    explicacao:
      "Resumo: Veias funcionam como reservatório e retorno.\nA) INCORRETA.\nB) INCORRETA.\nC) INCORRETA.\nD) CORRETA.",
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
      A: "Vasoconstrição tende a aumentar resistência.",
      B: "O simpático modula tônus vascular e pode tentar compensar.",
      C: "A viscosidade influencia, mas não é o único determinante.",
      D: "Correto em vasodilatação.",
    },
    explicacao:
      "Resumo: Vasodilatação reduz resistência vascular periférica.\nA) INCORRETA.\nB) INCORRETA.\nC) INCORRETA.\nD) CORRETA.",
  }),
  Q({
    id: 1109,
    materia: "bmf2",
    tema: "bmf2_a3",
    enunciado:
      "A circulação sistêmica retorna sangue venoso ao:",
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
      "O retorno sistêmico chega ao átrio direito (veias cava).",
    explicacoes_opcoes: {
      A: "As veias pulmonares drenam para o átrio esquerdo.",
      B: "O ventrículo esquerdo recebe sangue do átrio esquerdo, não o retorno sistêmico direto.",
      C: "Correto.",
      D: "O ventrículo direito ejete para o pulmão; o retorno sistêmico entra no átrio direito.",
    },
    explicacao:
      "Resumo: Sistêmica retorna ao átrio direito.\nA) INCORRETA.\nB) INCORRETA.\nC) CORRETA.\nD) INCORRETA.",
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
      "C) O ventrículo esquerdo ejete volume menor que o direito em repouso.",
      "D) A circulação pulmonar irriga os tecidos sistêmicos.",
    ],
    correta: 1,
    dificuldade: 3,
    modulo: 2,
    explicacao_geral:
      "O ventrículo direito enfrenta circuito pulmonar de menor resistência; o esquerdo, a alta resistência sistêmica.",
    explicacoes_opcoes: {
      A: "Incorreto: a resistência média do leito pulmonar é menor que a sistêmica.",
      B: "Correto.",
      C: "Incorreto: em série, o débito volumétrico é o mesmo para os dois ventrículos em repouso.",
      D: "Incorreto: a circulação pulmonar perfunde os pulmões.",
    },
    explicacao:
      "Resumo: Baixa resistência pulmonar versus alta resistência sistêmica.\nA) INCORRETA.\nB) CORRETA.\nC) INCORRETA.\nD) INCORRETA.",
  }),
  Q({
    id: 1111,
    materia: "bmf2",
    tema: "bmf2_a3",
    enunciado:
      "Artérias de grande calibre, em relação à função hemodinâmica predominante, são mais associadas a:",
    opcoes: [
      "A) Condução de sangue sob pressão relativamente elevada.",
      "B) Troca transcapilar de fluidos como função principal.",
      "C) Armazenamento da maior parte do volume sanguíneo em repouso.",
      "D) Absorção linfática primária.",
    ],
    correta: 0,
    dificuldade: 2,
    modulo: 2,
    explicacao_geral:
      "Artérias conduzem sob alta pressão; veias armazenam; capilares trocam.",
    explicacoes_opcoes: {
      A: "Correto.",
      B: "A troca ocorre nos capilares.",
      C: "O armazenamento volumétrico predomina nas veias.",
      D: "Absorção linfática não é função principal de artérias.",
    },
    explicacao:
      "Resumo: Artérias de grande calibre conduzem sangue sob pressão elevada.\nA) CORRETA.\nB) INCORRETA.\nC) INCORRETA.\nD) INCORRETA.",
  }),
];

// bmf2_a4 — Câmaras, valvas e ciclo cardíaco — ids 1112–1121 (2×1, 5×2, 3×3)
module.exports.bmf2_a4 = [
  Q({
    id: 1112,
    materia: "bmf2",
    tema: "bmf2_a4",
    enunciado:
      "Qual descrição corresponde melhor à função dos átrios em condições basais?",
    opcoes: [
      "A) Receber sangue venoso ou oxigenado e contribuir para o enchimento ventricular.",
      "B) Ejetar sangue para a artéria pulmonar e para a aorta com alta pressão.",
      "C) Impedir o retorno venoso ao coração durante a sístole ventricular.",
      "D) Fechar as valvas semilunares no instante da contração atrial.",
    ],
    correta: 0,
    dificuldade: 1,
    modulo: 2,
    explicacao_geral:
      "Átrios recebem sangue e completam o enchimento ventricular; ventrículos ejetam.",
    explicacoes_opcoes: {
      A: "Correto.",
      B: "Ejeção de alta pressão é função ventricular.",
      C: "Os átrios não bloqueiam o retorno venoso de forma predominante nesse sentido.",
      D: "Semilunares fecham por mecanismos hemodinâmicos ligados a gradientes, não por contração atrial isolada.",
    },
    explicacao:
      "Resumo: Átrios recebem e auxiliam o enchimento; ventrículos ejetam.\nA) CORRETA.\nB) INCORRETA.\nC) INCORRETA.\nD) INCORRETA.",
  }),
  Q({
    id: 1113,
    materia: "bmf2",
    tema: "bmf2_a4",
    enunciado:
      "A primeira bulha cardíaca (B1) está mais diretamente relacionada a:",
    opcoes: [
      "A) Fechamento das valvas semilunares.",
      "B) Fechamento das valvas atrioventriculares.",
      "C) Abertura isolada da valva pulmonar antes da sístole ventricular.",
      "D) Abertura das valvas atrioventriculares no início da diástole ventricular.",
    ],
    correta: 1,
    dificuldade: 1,
    modulo: 2,
    explicacao_geral:
      "B1 associa-se ao fechamento das valvas AV (tricúspide e mitral).",
    explicacoes_opcoes: {
      A: "Semilunares relacionam-se principalmente à B2.",
      B: "Correto.",
      C: "Não descreve o componente principal da B1.",
      D: "Abertura AV não gera B1.",
    },
    explicacao:
      "Resumo: B1 corresponde ao fechamento das valvas AV.\nA) INCORRETA.\nB) CORRETA.\nC) INCORRETA.\nD) INCORRETA.",
  }),
  Q({
    id: 1114,
    materia: "bmf2",
    tema: "bmf2_a4",
    enunciado:
      "Qual princípio explica predominantemente a abertura e o fechamento das valvas cardíacas?",
    opcoes: [
      "A) Contração ativa das cúspides como músculo estriado.",
      "B) Sucção gerada exclusivamente pelo pericárdio fibroso.",
      "C) Gradiente de pressão entre compartimentos adjacentes.",
      "D) Influxo nervoso direto que puxa cada cúspide.",
    ],
    correta: 2,
    dificuldade: 2,
    modulo: 2,
    explicacao_geral:
      "Valvas abrem e fecham conforme gradientes de pressão, garantindo fluxo unidirecional.",
    explicacoes_opcoes: {
      A: "Cúspides não se contraem como músculo estriado independente.",
      B: "O pericárdio não determina diretamente abertura valvar.",
      C: "Correto.",
      D: "Inervação modula frequência e contratilidade; não abre valva por tração nervosa direta nas cúspides.",
    },
    explicacao:
      "Resumo: Pressão manda e a valva acompanha o gradiente.\nA) INCORRETA.\nB) INCORRETA.\nC) CORRETA.\nD) INCORRETA.",
  }),
  Q({
    id: 1115,
    materia: "bmf2",
    tema: "bmf2_a4",
    enunciado:
      "Qual função descreve melhor o papel dos ventrículos no circuito duplo?",
    opcoes: [
      "A) Apenas armazenar sangue sem gerar pressão de ejeção.",
      "B) Conduzir exclusivamente impulsos elétricos sem ejeção relevante.",
      "C) Receber sangue diretamente das artérias pulmonar e aorta.",
      "D) Ejetar sangue para a circulação pulmonar ou sistêmica conforme o lado.",
    ],
    correta: 3,
    dificuldade: 2,
    modulo: 2,
    explicacao_geral:
      "Ventrículos geram pressão para ejetar para tronco pulmonar (direito) ou aorta (esquerdo).",
    explicacoes_opcoes: {
      A: "Ventrículos são bombas de ejeção, não simples reservatórios passivos.",
      B: "A condução elétrica é papel do sistema especializado; ventrículos geram fluxo pulsátil.",
      C: "Ventrículos recebem das valvas AV, não diretamente das artérias de saída.",
      D: "Correto.",
    },
    explicacao:
      "Resumo: Ventrículos ejetam para pulmão ou sistema sistêmico.\nA) INCORRETA.\nB) INCORRETA.\nC) INCORRETA.\nD) CORRETA.",
  }),
  Q({
    id: 1116,
    materia: "bmf2",
    tema: "bmf2_a4",
    enunciado:
      "Mulher com insuficiência mitral. Durante a sístole ventricular esquerda, qual mecanismo explica refluxo anormal para o átrio esquerdo?",
    opcoes: [
      "A) Fechamento precoce isolado da valva aórtica.",
      "B) Coaptação insuficiente permite retorno quando a pressão ventricular excede a atrial na sístole.",
      "C) Ausência de gradiente entre ventrículo e átrio em toda a ciclagem.",
      "D) Predomínio exclusivo de enchimento apenas antes da despolarização atrial.",
    ],
    correta: 1,
    dificuldade: 2,
    modulo: 2,
    explicacao_geral:
      "Insuficiência valvar permite refluxo quando o gradiente favorece fluxo retrógrado.",
    explicacoes_opcoes: {
      A: "Não é o mecanismo central da insuficiência mitral.",
      B: "Correto: falha de fechamento com gradiente reverso na sístole.",
      C: "Gradientes dinâmicos existem; a insuficiência é justamente fluxo anormal.",
      D: "O problema não se limita à fase pré-despolarização atrial.",
    },
    explicacao:
      "Resumo: Insuficiência permite refluxo sistólico com gradiente favorável.\nA) INCORRETA.\nB) CORRETA.\nC) INCORRETA.\nD) INCORRETA.",
  }),
  Q({
    id: 1117,
    materia: "bmf2",
    tema: "bmf2_a4",
    enunciado:
      "Homem com taquicardia persistente. Em termos de ciclo cardíaco, qual consequência é mais plausível sobre o enchimento ventricular?",
    opcoes: [
      "A) Aumento ilimitado do volume sistólico sem alteração diastólica.",
      "B) Desaparecimento completo das fases isovolumétricas em repouso.",
      "C) Menor tempo diastólico pode reduzir enchimento e volume ejetado por batimento.",
      "D) Inversão estável do fluxo nas semilunares sem alteração de pressão.",
    ],
    correta: 2,
    dificuldade: 3,
    modulo: 2,
    explicacao_geral:
      "FC elevada encurta a diástole e pode limitar pré-carga e volume sistólico.",
    explicacoes_opcoes: {
      A: "O volume sistólico não aumenta sem limite quando a diástole encolhe.",
      B: "As fases isovolumétricas não desaparecem completamente por taquicardia isolada.",
      C: "Correto.",
      D: "Fluxo valvar segue gradientes; não há inversão estável sem contexto fisiopatológico específico.",
    },
    explicacao:
      "Resumo: Menos diástole pode reduzir enchimento e débito por batimento.\nA) INCORRETA.\nB) INCORRETA.\nC) CORRETA.\nD) INCORRETA.",
  }),
  Q({
    id: 1118,
    materia: "bmf2",
    tema: "bmf2_a4",
    enunciado:
      "Qual característica define a fase isovolumétrica de contração ventricular?",
    opcoes: [
      "A) Volume ventricular aumenta enquanto as semilunares estão abertas.",
      "B) Volume intraventricular aproximadamente constante com ascensão rápida da pressão.",
      "C) Valvas atrioventriculares abertas com ejeção imediata.",
      "D) Fechamento das semilunares antes do fechamento das atrioventriculares.",
    ],
    correta: 1,
    dificuldade: 3,
    modulo: 2,
    explicacao_geral:
      "Na isovolumetria, as valvas de entrada e saída estão fechadas e o volume não muda inicialmente.",
    explicacoes_opcoes: {
      A: "Com semilunares abertas haveria ejeção, não isovolumetria de contração inicial.",
      B: "Correto.",
      C: "AV abertas permitiriam enchimento, não esta fase de contração inicial.",
      D: "Na contração isovolumétrica inicial, semilunares ainda não abriram; a sequência temporal não corresponde a essa afirmação.",
    },
    explicacao:
      "Resumo: Isovolumétrico implica volume fixo e pressão variável.\nA) INCORRETA.\nB) CORRETA.\nC) INCORRETA.\nD) INCORRETA.",
  }),
  Q({
    id: 1119,
    materia: "bmf2",
    tema: "bmf2_a4",
    enunciado:
      "Homem de 70 anos com hipertensão em seguimento. Ao revisar a fisiologia das bulhas, a segunda bulha (B2) corresponde melhor a:",
    opcoes: [
      "A) Fechamento das valvas semilunares (aórtica e pulmonar).",
      "B) Fechamento das valvas atrioventriculares.",
      "C) Abertura das valvas atrioventriculares no início do enchimento rápido.",
      "D) Contração isovolumétrica isolada sem evento valvar audível correspondente.",
    ],
    correta: 0,
    dificuldade: 2,
    modulo: 2,
    explicacao_geral:
      "B2 corresponde ao fechamento das valvas semilunares ao final da sístole ventricular.",
    explicacoes_opcoes: {
      A: "Correto.",
      B: "Isso corresponde à B1.",
      C: "Abertura AV não gera B2.",
      D: "B2 é um som valvar relacionado a semilunares, não um rótulo genérico de isovolumetria.",
    },
    explicacao:
      "Resumo: B2 reflete semilunares.\nA) CORRETA.\nB) INCORRETA.\nC) INCORRETA.\nD) INCORRETA.",
  }),
  Q({
    id: 1120,
    materia: "bmf2",
    tema: "bmf2_a4",
    enunciado:
      "Idoso com estenose aórtica. Durante a ejeção ventricular esquerda, qual alteração hemodinâmica é típica?",
    opcoes: [
      "A) Predomínio de insuficiência mitral aguda como mecanismo principal.",
      "B) Ausência de gradiente transvalvar em repouso.",
      "C) Ejeção livre sem aumento da pressão intraventricular.",
      "D) Obstrução ao fluxo de saída com aumento da carga de trabalho do ventrículo esquerdo.",
    ],
    correta: 3,
    dificuldade: 3,
    modulo: 2,
    explicacao_geral:
      "Estenose aumenta resistência à ejeção e exige maior trabalho pressórico do ventrículo.",
    explicacoes_opcoes: {
      A: "Pode coexistir lesão mitral, mas não é o núcleo hemodinâmico da estenose aórtica.",
      B: "Gradiente transvalvar é esperado quando a valva é estenótica.",
      C: "A obstrução aumenta pressão ventricular durante a ejeção.",
      D: "Correto.",
    },
    explicacao:
      "Resumo: Estenose aumenta carga de ejeção e trabalho do ventrículo esquerdo.\nA) INCORRETA.\nB) INCORRETA.\nC) INCORRETA.\nD) CORRETA.",
  }),
  Q({
    id: 1121,
    materia: "bmf2",
    tema: "bmf2_a4",
    enunciado:
      "Qual correspondência anatômica está correta?",
    opcoes: [
      "A) Valva tricúspide: entre o átrio esquerdo e o ventrículo esquerdo.",
      "B) Valva pulmonar: entre o ventrículo esquerdo e a aorta.",
      "C) Valva mitral: entre o átrio esquerdo e o ventrículo esquerdo.",
      "D) Valva mitral: entre o ventrículo direito e o tronco pulmonar.",
    ],
    correta: 2,
    dificuldade: 2,
    modulo: 2,
    explicacao_geral:
      "Valva mitral localiza-se entre átrio e ventrículo esquerdos; tricúspide à direita; semilunares nas saídas.",
    explicacoes_opcoes: {
      A: "Tricúspide é à direita.",
      B: "Valva pulmonar liga ventrículo direito ao tronco pulmonar.",
      C: "Correto.",
      D: "Mitral não está na saída do ventrículo direito.",
    },
    explicacao:
      "Resumo: Mitral entre AE e VE.\nA) INCORRETA.\nB) INCORRETA.\nC) CORRETA.\nD) INCORRETA.",
  }),
];

// bmf2_a5 — Histologia cardíaca — ids 1122–1131 (2×1, 5×2, 3×3)
module.exports.bmf2_a5 = [
  Q({
    id: 1122,
    materia: "bmf2",
    tema: "bmf2_a5",
    enunciado:
      "Qual camada reveste internamente as câmaras cardíacas e se relaciona com o endotélio do fluxo intracardíaco?",
    opcoes: [
      "A) Endocárdio.",
      "B) Miocárdio.",
      "C) Epicárdio.",
      "D) Pericárdio parietal.",
    ],
    correta: 0,
    dificuldade: 1,
    modulo: 2,
    explicacao_geral:
      "Endocárdio é o revestimento interno; miocárdio é a camada contrátil principal.",
    explicacoes_opcoes: {
      A: "Correto.",
      B: "Miocárdio é a parede muscular, não o revestimento luminal.",
      C: "Epicárdio é a camada externa.",
      D: "Pericárdio parietal envolve externamente, não reveste a cavidade.",
    },
    explicacao:
      "Resumo: Endocárdio reveste a face interna.\nA) CORRETA.\nB) INCORRETA.\nC) INCORRETA.\nD) INCORRETA.",
  }),
  Q({
    id: 1123,
    materia: "bmf2",
    tema: "bmf2_a5",
    enunciado:
      "Qual camada da parede cardíaca concentra os cardiomiócitos e é central para a força de ejeção?",
    opcoes: [
      "A) Endocárdio.",
      "B) Miocárdio.",
      "C) Epicárdio.",
      "D) Camada subendocárdica nervosa exclusiva.",
    ],
    correta: 1,
    dificuldade: 1,
    modulo: 2,
    explicacao_geral:
      "Miocárdio é a camada muscular dominante para contratilidade.",
    explicacoes_opcoes: {
      A: "Endocárdio é revestimento interno.",
      B: "Correto.",
      C: "Epicárdio tem conjuntivo e vasos; não é a principal massa contrátil.",
      D: "Não existe como camada nervosa exclusiva com esse papel mecânico.",
    },
    explicacao:
      "Resumo: Miocárdio gera força contrátil.\nA) INCORRETA.\nB) CORRETA.\nC) INCORRETA.\nD) INCORRETA.",
  }),
  Q({
    id: 1124,
    materia: "bmf2",
    tema: "bmf2_a5",
    enunciado:
      "Qual estrutura integra adesão mecânica e comunicação elétrica entre cardiomiócitos adjacentes?",
    opcoes: [
      "A) Junções focais de adesão apenas, sem canal iônico.",
      "B) Membrana basal da placa motora esquelética.",
      "C) Disco intercalar, com junções especializadas.",
      "D) Endotélio de revestimento valvar exclusivamente.",
    ],
    correta: 2,
    dificuldade: 2,
    modulo: 2,
    explicacao_geral:
      "Discos intercalares concentram estruturas de adesão e comunicação (incluindo gap junctions).",
    explicacoes_opcoes: {
      A: "Há componentes elétricos além de adesão pura.",
      B: "Sem relação com discos intercalares cardíacos.",
      C: "Correto.",
      D: "Endótelio valvar não substitui discos entre cardiomiócitos.",
    },
    explicacao:
      "Resumo: Discos intercalares acoplam mecanicamente e eletricamente.\nA) INCORRETA.\nB) INCORRETA.\nC) CORRETA.\nD) INCORRETA.",
  }),
  Q({
    id: 1125,
    materia: "bmf2",
    tema: "bmf2_a5",
    enunciado:
      "Em peça anatômica de coração, a camada externa que acompanha vasos coronarianos superficiais e corresponde à lâmina visceral do pericárdio é:",
    opcoes: [
      "A) Camada interna em contato direto apenas com o sangue arterial.",
      "B) Camada exclusivamente nervosa sem vasos.",
      "C) Camada muscular pura sem tecido conjuntivo.",
      "D) Camada externa, visceral do pericárdio, com conjuntivo e vasos coronarianos.",
    ],
    correta: 3,
    dificuldade: 2,
    modulo: 2,
    explicacao_geral:
      "Epicárdio é a camada externa, parte visceral do pericárdio, com suporte e vasos.",
    explicacoes_opcoes: {
      A: "Isso mistura funções de revestimento interno e não define epicárdio.",
      B: "Epicárdio não é exclusivamente nervoso.",
      C: "A camada muscular dominante é o miocárdio.",
      D: "Correto.",
    },
    explicacao:
      "Resumo: Epicárdio é externo, visceral, com vasos coronários.\nA) INCORRETA.\nB) INCORRETA.\nC) INCORRETA.\nD) CORRETA.",
  }),
  Q({
    id: 1126,
    materia: "bmf2",
    tema: "bmf2_a5",
    enunciado:
      "Homem de 60 anos com dor torácica e supra de ST. Considerando a organização histológica, qual tecido isquêmico precoce compromete de forma mais crítica a contratilidade regional?",
    opcoes: [
      "A) Endocárdio fibroso apenas.",
      "B) Miocárdio contrátil.",
      "C) Pericárdio parietal espesso.",
      "D) Tecido adiposo epicárdico exclusivamente.",
    ],
    correta: 1,
    dificuldade: 2,
    modulo: 2,
    explicacao_geral:
      "Miocárdio concentra cardiomiócitos responsáveis pela força; isquemia prejudica contratilidade.",
    explicacoes_opcoes: {
      A: "Endocárdio não é o principal responsável pela força de ejeção.",
      B: "Correto.",
      C: "Pericárdio parietal é externo ao miocárdio.",
      D: "Gordura epicárdica não substitui função contrátil.",
    },
    explicacao:
      "Resumo: Isquemia atinge principalmente o miocárdio contrátil.\nA) INCORRETA.\nB) CORRETA.\nC) INCORRETA.\nD) INCORRETA.",
  }),
  Q({
    id: 1127,
    materia: "bmf2",
    tema: "bmf2_a5",
    enunciado:
      "Em um bloqueio de ramo, qual conjunto celular é descrito histologicamente como especializado para condução rápida intraventricular?",
    opcoes: [
      "A) Fibras de Purkinje.",
      "B) Cardiomiócitos contráteis do miocárdio subendocárdico apenas.",
      "C) Células endoteliais valvares.",
      "D) Adipócitos epicárdicos.",
    ],
    correta: 0,
    dificuldade: 3,
    modulo: 2,
    explicacao_geral:
      "Fibras de Purkinje priorizam velocidade de condução no sistema ventricular.",
    explicacoes_opcoes: {
      A: "Correto.",
      B: "Cardiomiócitos contráteis não são o equivalente histológico clássico de alta velocidade de Purkinje.",
      C: "Endotélio valvar não conduz o estímulo de forma primária.",
      D: "Adipócitos não são tecido de condução.",
    },
    explicacao:
      "Resumo: Purkinje conduz rapidamente dentro dos ventrículos.\nA) CORRETA.\nB) INCORRETA.\nC) INCORRETA.\nD) INCORRETA.",
  }),
  Q({
    id: 1128,
    materia: "bmf2",
    tema: "bmf2_a5",
    enunciado:
      "Qual componente das junções do disco intercalar favorece acoplamento elétrico entre cardiomiócitos?",
    opcoes: [
      "A) Desmossomos isolados sem canais.",
      "B) Fibras colágenas da lâmina densa externa da veia.",
      "C) Junções comunicantes (gap junctions).",
      "D) Membrana basal da placa motora esquelética.",
    ],
    correta: 2,
    dificuldade: 3,
    modulo: 2,
    explicacao_geral:
      "Gap junctions permitem passagem iônica rápida, sincronizando despolarização.",
    explicacoes_opcoes: {
      A: "Desmossomos dão adesão; o acoplamento elétrico depende de canais comunicantes.",
      B: "Sem relação com discos intercalares cardíacos.",
      C: "Correto.",
      D: "Placa motora é esquelética, não cardíaca.",
    },
    explicacao:
      "Resumo: Gap junctions acoplam eletricamente o miocárdio.\nA) INCORRETA.\nB) INCORRETA.\nC) CORRETA.\nD) INCORRETA.",
  }),
  Q({
    id: 1129,
    materia: "bmf2",
    tema: "bmf2_a5",
    enunciado:
      "Qual característica distingue o cardiomiócito típico do músculo esquelético, além da estriação?",
    opcoes: [
      "A) Ausência de filamentos de actina e miosina.",
      "B) Núcleo periférico e fibras paralelas sem ramificações.",
      "C) Ramificação celular e núcleo central em muitos cardiomiócitos.",
      "D) Tetania fisiológica sustentada em resposta a estímulos repetidos rápidos.",
    ],
    correta: 2,
    dificuldade: 2,
    modulo: 2,
    explicacao_geral:
      "Cardiomiócitos são ramificados, com núcleo central e discos intercalares; o esquelético é multinucleado periférico e paralelo.",
    explicacoes_opcoes: {
      A: "Ambos usam filamentos contráteis.",
      B: "Descreve melhor o esquelético.",
      C: "Correto.",
      D: "Tetania sustentada não é fisiológica no miocárdio como no esquelético.",
    },
    explicacao:
      "Resumo: Cardiomiócito ramificado e núcleo central versus esquelético típico.\nA) INCORRETA.\nB) INCORRETA.\nC) CORRETA.\nD) INCORRETA.",
  }),
  Q({
    id: 1130,
    materia: "bmf2",
    tema: "bmf2_a5",
    enunciado:
      "Paciente com área cicatricial fibrosa após infarto. O que a fibrose substitui predominantemente com impacto na contratilidade global?",
    opcoes: [
      "A) Apenas o endotélio valvar.",
      "B) Miocárdio contrátil, reduzindo massa funcionalmente útil.",
      "C) Somente fibras de Purkinje sem afetar músculo.",
      "D) Tecido adiposo subepicárdico isoladamente.",
    ],
    correta: 1,
    dificuldade: 3,
    modulo: 2,
    explicacao_geral:
      "Fibrose substitui miocárdio contrátil e prejudica força e complacência regional.",
    explicacoes_opcoes: {
      A: "Fibrose pós-infarto não se limita ao endotélio valvar.",
      B: "Correto.",
      C: "Purkinje pode ser afetado, mas a perda contrátil dominante é miocárdica.",
      D: "Gordura subepicárdica não é o alvo principal da cicatrização infartada.",
    },
    explicacao:
      "Resumo: Fibrose após infarto substitui miocárdio e reduz contratilidade útil.\nA) INCORRETA.\nB) CORRETA.\nC) INCORRETA.\nD) INCORRETA.",
  }),
  Q({
    id: 1131,
    materia: "bmf2",
    tema: "bmf2_a5",
    enunciado:
      "Em relação à função predominante, qual contraste entre cardiomiócito contrátil e fibra de Purkinje está mais adequado?",
    opcoes: [
      "A) Purkinje gera maior força de ejeção que o cardiomiócito ventricular.",
      "B) Cardiomiócito contrátil prioriza velocidade de condução sobre força.",
      "C) Ambos têm papel exclusivamente endócrino.",
      "D) Purkinje prioriza condução rápida; o cardiomiócito contrátil prioriza força de bombeamento.",
    ],
    correta: 3,
    dificuldade: 2,
    modulo: 2,
    explicacao_geral:
      "Purkinje especializa condução; cardiomiócitos trabalhadores geram pressão de ejeção.",
    explicacoes_opcoes: {
      A: "Purkinje não é o principal gerador de força de ejeção.",
      B: "O contrário: contrátil prioriza força; Purkinje prioriza condução.",
      C: "Não são funções endócrinas primárias.",
      D: "Correto.",
    },
    explicacao:
      "Resumo: Contrátil para força; Purkinje para condução rápida.\nA) INCORRETA.\nB) INCORRETA.\nC) INCORRETA.\nD) CORRETA.",
  }),
];
