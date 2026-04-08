/**
 * BMF2 lote B — bmf2_a6–bmf2_a9 (ids 1132–1171).
 * Cada aula: 10 questões; 2× dificuldade 1, 5× 2, 3× 3; ~4 mini-casos/10;
 * gabarito ~uniforme A–D; explicações completas (geral + por letra + texto legado).
 */
"use strict";

function Q(x) {
  return x;
}

// ——— bmf2_a6 — ECG e ciclo cardíaco — ids 1132–1141
module.exports.bmf2_a6 = [
  Q({
    id: 1132,
    materia: "bmf2",
    tema: "bmf2_a6",
    enunciado:
      "No traçado eletrocardiográfico usual, a onda P corresponde principalmente a qual evento?",
    opcoes: [
      "A) Repolarização dos ventrículos.",
      "B) Despolarização dos átrios.",
      "C) Despolarização dos ventrículos.",
      "D) Repolarização dos átrios, visualizada como onda T.",
    ],
    correta: 1,
    dificuldade: 1,
    modulo: 2,
    explicacao_geral:
      "A onda P reflete a despolarização atrial; o complexo QRS, a despolarização ventricular; a onda T, a repolarização ventricular.",
    explicacoes_opcoes: {
      A: "Descreve a onda T (repolarização ventricular), não a onda P.",
      B: "Correto: despolarização atrial.",
      C: "Corresponde ao complexo QRS.",
      D: "A repolarização atrial costuma ser mascarada; a onda T representa repolarização ventricular.",
    },
    explicacao:
      "Resumo: P = despolarização atrial.\nA) INCORRETA. É a onda T.\nB) CORRETA.\nC) INCORRETA. É o QRS.\nD) INCORRETA. A T é ventricular; repolarização atrial não domina o traçado.",
  }),
  Q({
    id: 1133,
    materia: "bmf2",
    tema: "bmf2_a6",
    enunciado:
      "Homem de 62 anos, histórico de bloqueio de ramo, apresenta ECG com complexo QRS alargado. Qual raciocínio fisiológico é o mais adequado?",
    opcoes: [
      "A) O alargamento do QRS indica apenas aumento da frequência cardíaca, sem relação com condução.",
      "B) QRS alargado exclui qualquer alteração de intervalo PR.",
      "C) QRS largo sugere, em geral, condução ventricular anormal (ex.: atraso intraventricular), não só mudança de ritmo.",
      "D) O alargamento do QRS prova hipercalemia em todos os casos.",
    ],
    correta: 2,
    dificuldade: 2,
    modulo: 2,
    explicacao_geral:
      "A morfologia e a duração do QRS refletem a condução intraventricular; alterações de frequência nem sempre mudam a largura do QRS.",
    explicacoes_opcoes: {
      A: "Frequência e condução são dimensões distintas; taquicardia nem sempre alarga QRS.",
      B: "PR e QRS avaliam eixos diferentes da condução; podem coexistir alterações.",
      C: "Correto: QRS largo costuma apontar para condução ventricular patológica ou ritmo de escape ventricular.",
      D: "Hipercalemia pode alargar QRS, mas não é a única causa nem está provada pelo achado isolado.",
    },
    explicacao:
      "Resumo: QRS largo → pensar condução ventricular.\nA) INCORRETA.\nB) INCORRETA.\nC) CORRETA.\nD) INCORRETA.",
  }),
  Q({
    id: 1134,
    materia: "bmf2",
    tema: "bmf2_a6",
    enunciado:
      "Estudante confunde ondas do ECG em prova. Sobre a onda T e a repolarização, qual afirmação está mais correta? Lembre-se de que, no traçado convencional, a repolarização atrial é mascarada e a onda T reflete sobretudo recuperação elétrica ventricular.",
    opcoes: [
      "A) A onda T representa, predominantemente, repolarização atrial.",
      "B) A repolarização ventricular aparece como segmento PR.",
      "C) A onda P codifica repolarização ventricular.",
      "D) A onda T reflete, de modo predominante, repolarização ventricular.",
    ],
    correta: 3,
    dificuldade: 2,
    modulo: 2,
    explicacao_geral:
      "A onda T acompanha a fase de repolarização ventricular; a repolarização atrial não aparece como onda T separada no ECG usual.",
    explicacoes_opcoes: {
      A: "Pegadinha clássica: a T é ventricular.",
      B: "O PR reflete condução AV, não repolarização ventricular.",
      C: "A onda P é despolarização atrial.",
      D: "Correto.",
    },
    explicacao:
      "Resumo: T ventricular.\nA) INCORRETA.\nB) INCORRETA.\nC) INCORRETA.\nD) CORRETA.",
  }),
  Q({
    id: 1135,
    materia: "bmf2",
    tema: "bmf2_a6",
    enunciado:
      "Mulher de 58 anos em acompanhamento para palpitações. No ECG, o intervalo PR está dentro do limite superior da normalidade. Esse intervalo informa principalmente:",
    opcoes: [
      "A) Tempo de condução entre átrio e ventrículo (via nódulo AV e sistema de condução proximal).",
      "B) Duração total da repolarização ventricular.",
      "C) Frequência intrínseca do nódulo SA isolado de qualquer inervação.",
      "D) Apenas a amplitude mecânica da sístole ventricular.",
    ],
    correta: 0,
    dificuldade: 2,
    modulo: 2,
    explicacao_geral:
      "O PR reflete o atraso de condução AV e a propagação até o sistema de His-Purkinje proximal; o QT cobre a janela elétrica ventricular.",
    explicacoes_opcoes: {
      A: "Correto.",
      B: "Isso aproxima-se do intervalo QT, não do PR.",
      C: "Automatismo do SA não é medido pelo PR.",
      D: "O PR é intervalo elétrico, não medida de força contrátil.",
    },
    explicacao:
      "Resumo: PR = condução AV.\nA) CORRETA.\nB) INCORRETA.\nC) INCORRETA.\nD) INCORRETA.",
  }),
  Q({
    id: 1136,
    materia: "bmf2",
    tema: "bmf2_a6",
    enunciado:
      "O intervalo QT no ECG relaciona-se principalmente a qual aspecto da atividade elétrica ventricular?",
    opcoes: [
      "A) Somente o tempo de despolarização atrial.",
      "B) Condução exclusiva entre átrio direito e esquerdo.",
      "C) Duração global da despolarização e repolarização ventricular.",
      "D) Apenas a frequência cardíaca, independentemente de morfologia.",
    ],
    correta: 2,
    dificuldade: 1,
    modulo: 2,
    explicacao_geral:
      "O QT abrange a ativação elétrica ventricular completa (despolarização + repolarização).",
    explicacoes_opcoes: {
      A: "A despolarização atrial entra na onda P e no início do ciclo, não no QT ventricular isolado.",
      B: "Não descreve o significado fisiológico do QT.",
      C: "Correto.",
      D: "A FC altera o QT de forma relativa, mas o intervalo não é definição de frequência.",
    },
    explicacao:
      "Resumo: QT = janela elétrica ventricular total.\nA) INCORRETA.\nB) INCORRETA.\nC) CORRETA.\nD) INCORRETA.",
  }),
  Q({
    id: 1137,
    materia: "bmf2",
    tema: "bmf2_a6",
    enunciado:
      "Paciente com dor torácica em observação. O médico correlaciona o pico do complexo QRS com o início da contração ventricular isovolumétrica. Qual princípio fundamenta essa sequência?",
    opcoes: [
      "A) O evento mecânico sistólico sempre antecede qualquer despolarização ventricular.",
      "B) O despolarizar ventricular (QRS) precede a contração mecânica efetiva; o elétrico vem antes do mecânico.",
      "C) A repolarização atrial gera a força de ejeção ventricular.",
      "D) A onda T gera a contração atrial.",
    ],
    correta: 1,
    dificuldade: 3,
    modulo: 2,
    explicacao_geral:
      "No ciclo cardíaco, a ativação elétrica ventricular antecede a contração mecânica; alterações de condução repercutem na hemodinâmica.",
    explicacoes_opcoes: {
      A: "Inverte a ordem fisiológica correta.",
      B: "Correto: excitação elétrica antes da resposta mecânica.",
      C: "Confunde papéis de câmaras e ondas.",
      D: "A T é repolarização ventricular; não comanda contração atrial.",
    },
    explicacao:
      "Resumo: Elétrico → mecânico.\nA) INCORRETA.\nB) CORRETA.\nC) INCORRETA.\nD) INCORRETA.",
  }),
  Q({
    id: 1138,
    materia: "bmf2",
    tema: "bmf2_a6",
    enunciado:
      "Qual distinção melhor separa alteração predominante de frequência cardíaca de alteração de condução no contexto do ECG?",
    opcoes: [
      "A) Frequência altera sempre a morfologia do QRS; condução nunca muda intervalos.",
      "B) Condução altera apenas a onda P, sem afetar QRS ou PR.",
      "C) Ambos os tipos de alteração produzem sempre o mesmo prolongamento do QT.",
      "D) Mudanças de condução tendem a alterar morfologia e/ou duração de intervalos (ex.: PR, QRS); frequência altera ritmo sem necessariamente mudar a morfologia de condução.",
    ],
    correta: 3,
    dificuldade: 2,
    modulo: 2,
    explicacao_geral:
      "Taquicardia/bradicardia mudam o ritmo; bloqueios e atrasos intraventricular mudam intervalos e morfologia.",
    explicacoes_opcoes: {
      A: "Falso: taquicardia nem sempre alarga QRS; condução altera intervalos.",
      B: "A condução pode afetar PR, QRS e mais.",
      C: "Sem fundamento: padrões são distintos.",
      D: "Correto.",
    },
    explicacao:
      "Resumo: Ritmo vs condução.\nA) INCORRETA.\nB) INCORRETA.\nC) INCORRETA.\nD) CORRETA.",
  }),
  Q({
    id: 1139,
    materia: "bmf2",
    tema: "bmf2_a6",
    enunciado:
      "Em discussão de plantão sobre um ECG com achados de isquemia, um residente quer relacionar alterações elétricas a sintomas de baixo débito. Qual afirmação integra melhor electricidade, mecânica e desempenho hemodinâmico?",
    opcoes: [
      "A) Alterações de condução e de repolarização podem coexistir com disfunção de ejeção e sintomas, porque o acoplamento elétrico-mecânico determina o desempenho do ciclo.",
      "B) O ECG descreve apenas anatomia valvar; não há ponte com sintomas.",
      "C) O intervalo PR mede diretamente o volume sistólico.",
      "D) A onda T isolada define o estado volêmico central sem necessidade de clínica.",
    ],
    correta: 0,
    dificuldade: 3,
    modulo: 2,
    explicacao_geral:
      "Condução e repolarização alteram sincronia e contratilidade efetiva; por isso o traçado deve ser interpretado junto ao quadro clínico.",
    explicacoes_opcoes: {
      A: "Correto: elo elétrico-mecânico explica sintomas e hemodinâmica.",
      B: "O ECG traduz eletrofisiologia com implicações funcionais.",
      C: "PR não mede volume sistólico.",
      D: "Achados isolados não substituem avaliação clínica integrada.",
    },
    explicacao:
      "Resumo: Traçado + clínica + mecânica.\nA) CORRETA.\nB) INCORRETA.\nC) INCORRETA.\nD) INCORRETA.",
  }),
  Q({
    id: 1140,
    materia: "bmf2",
    tema: "bmf2_a6",
    enunciado:
      "Jovem de 22 anos, atleta, ECG com bradicardia sinusal moderada e morfologia de QRS estreita. Em relação ao ritmo observado, qual conclusão é mais prudente?",
    opcoes: [
      "A) Bradicardia sempre indica bloqueio AV de alto grau.",
      "B) Ritmo lento com QRS estreito pode ser fisiológico (alto vagal) e não equivale automaticamente a distúrbio de condução intraventricular.",
      "C) QRS estreito prova taquicardia ventricular.",
      "D) Bradicardia exclui qualquer variação do intervalo PR.",
    ],
    correta: 1,
    dificuldade: 2,
    modulo: 2,
    explicacao_geral:
      "Contexto importa: vagotonia e condicionamento reduzem FC com condução ventricular normal (QRS estreito).",
    explicacoes_opcoes: {
      A: "Bradicardia tem causas fisiológicas e patológicas.",
      B: "Correto.",
      C: "TV costuma apresentar QRS largo; não é o caso típico descrito.",
      D: "Bloqueios AV podem coexistir com bradicardia, mas não é regra universal.",
    },
    explicacao:
      "Resumo: Bradicardia fisiológica vs patologia.\nA) INCORRETA.\nB) CORRETA.\nC) INCORRETA.\nD) INCORRETA.",
  }),
  Q({
    id: 1141,
    materia: "bmf2",
    tema: "bmf2_a6",
    enunciado:
      "Qual par associa corretamente componente do ECG e fenômeno elétrico?",
    opcoes: [
      "A) Complexo QRS — repolarização ventricular.",
      "B) Onda P — despolarização ventricular.",
      "C) Complexo QRS — despolarização ventricular.",
      "D) Intervalo PR — duração total da atividade elétrica ventricular.",
    ],
    correta: 2,
    dificuldade: 3,
    modulo: 2,
    explicacao_geral:
      "QRS = despolarização ventricular; T = repolarização ventricular; P = despolarização atrial; PR = condução AV.",
    explicacoes_opcoes: {
      A: "QRS é despolarização ventricular; repolarização ventricular é a onda T.",
      B: "Onda P é atrial.",
      C: "Correto.",
      D: "Duração global ventricular elétrica aproxima-se pelo QT, não pelo PR.",
    },
    explicacao:
      "Resumo: Mapear ondas.\nA) INCORRETA.\nB) INCORRETA.\nC) CORRETA.\nD) INCORRETA.",
  }),
];

// ——— bmf2_a7 — Débito cardíaco e Starling — ids 1142–1151
module.exports.bmf2_a7 = [
  Q({
    id: 1142,
    materia: "bmf2",
    tema: "bmf2_a7",
    enunciado:
      "A definição fisiológica mais usada para débito cardíaco (por minuto) é:",
    opcoes: [
      "A) Pressão arterial média dividida pela resistência vascular pulmonar.",
      "B) Produto da frequência cardíaca pelo volume sistólico.",
      "C) Volume diastólico final menos o volume residual sistólico, isoladamente.",
      "D) Frequência cardíaca ao quadrado dividida pelo volume de ejeção.",
    ],
    correta: 1,
    dificuldade: 1,
    modulo: 2,
    explicacao_geral:
      "DC = FC × VS; cada termo pode ser modulado por pré-carga, contratilidade e pós-carga.",
    explicacoes_opcoes: {
      A: "Relaciona-se a modelos hemodinâmicos, não à definição operacional de débito.",
      B: "Correto.",
      C: "Descreve componentes volumétricos, não o fluxo por minuto completo.",
      D: "Sem fundamento fisiológico.",
    },
    explicacao:
      "Resumo: DC = FC × VS.\nA) INCORRETA.\nB) CORRETA.\nC) INCORRETA.\nD) INCORRETA.",
  }),
  Q({
    id: 1143,
    materia: "bmf2",
    tema: "bmf2_a7",
    enunciado:
      "Paciente pós-infarto com fração de ejeção reduzida recebe expansão volêmica cuidadosa. A ideia de que maior estiramento miocárdico aumenta a força de contração, em limites fisiológicos, refere-se a:",
    opcoes: [
      "A) Lei de Laplace aplicada exclusivamente ao pericárdio fibroso.",
      "B) Efeito exclusivamente cronotrópico do nódulo SA.",
      "C) Redução obrigatória da pós-carga pela vasoconstrição reflexa.",
      "D) Mecanismo de Frank-Starling, útil para ajustar ejeção ao retorno venoso quando a função miocárdica ainda responde.",
    ],
    correta: 3,
    dificuldade: 2,
    modulo: 2,
    explicacao_geral:
      "Starling liga pré-carga (enchimento) à força sistólica dentro da curva ventricular; em disfunção grave, o ganho pode ser limitado.",
    explicacoes_opcoes: {
      A: "Laplace descreve tensão parietal; não substitui Starling no enunciado.",
      B: "Cronotropismo não define a relação comprimento-tensão de Frank-Starling.",
      C: "Pós-carga não é reduzida obrigatoriamente por esse mecanismo.",
      D: "Correto.",
    },
    explicacao:
      "Resumo: Starling = estiramento → força.\nA) INCORRETA.\nB) INCORRETA.\nC) INCORRETA.\nD) CORRETA.",
  }),
  Q({
    id: 1144,
    materia: "bmf2",
    tema: "bmf2_a7",
    enunciado:
      "Homem de 70 anos com insuficiência cardíaca e congestão pulmonar. Mesmo com aumento da pré-carga por retenção hídrica, o débito efetivo pode não subir. Qual explicação é mais coerente com o conteúdo fisiológico da aula?",
    opcoes: [
      "A) A Lei de Starling não opera em humanos.",
      "B) O volume sistólico depende só da frequência, nunca da pré-carga.",
      "C) Em miocárdio disfuncionante, maior volume pode predominantemente aumentar congestão sem ganho proporcional de ejeção.",
      "D) Pós-carga elevada aumenta sempre o débito por reduzir trabalho ventricular.",
    ],
    correta: 2,
    dificuldade: 3,
    modulo: 2,
    explicacao_geral:
      "Starling tem teto; na IC, a curva ventricular está deprimida — volume pode piorar congestão sem aumentar débito útil.",
    explicacoes_opcoes: {
      A: "Starling é válida; o limite é patológico.",
      B: "VS depende de pré-carga, contratilidade e pós-carga.",
      C: "Correto.",
      D: "Pós-carga elevada tende a dificultar ejeção.",
    },
    explicacao:
      "Resumo: Starling limitado na disfunção.\nA) INCORRETA.\nB) INCORRETA.\nC) CORRETA.\nD) INCORRETA.",
  }),
  Q({
    id: 1145,
    materia: "bmf2",
    tema: "bmf2_a7",
    enunciado:
      "Em tabelas comparativas de hemodinâmica, pré-carga é melhor entendida como:",
    opcoes: [
      "A) Enchimento/estiramento inicial do ventrículo antes da sístole, relacionado ao retorno venoso.",
      "B) Resistência imposta à ejeção (afterload), dominada por arteríolas.",
      "C) Frequência cardíaca em repouso isolada de volume.",
      "D) Pressão capilar pulmonar exclusivamente após o relaxamento.",
    ],
    correta: 0,
    dificuldade: 1,
    modulo: 2,
    explicacao_geral:
      "Pré-carga reflete volume de enchimento (relacionado ao retorno venoso); pós-carga é a resistência à ejeção.",
    explicacoes_opcoes: {
      A: "Correto.",
      B: "Isso descreve pós-carga.",
      C: "FC não define pré-carga isoladamente.",
      D: "Mistura conceitos de pressão de enchimento com timing sem definir pré-carga.",
    },
    explicacao:
      "Resumo: Pré-carga = enchimento.\nA) CORRETA.\nB) INCORRETA.\nC) INCORRETA.\nD) INCORRETA.",
  }),
  Q({
    id: 1146,
    materia: "bmf2",
    tema: "bmf2_a7",
    enunciado:
      "Mulher de 45 anos em taquicardia sinusal persistente com tempos diastólicos curtos. Por que apenas aumentar a frequência pode falhar em elevar o débito cardíaco?",
    opcoes: [
      "A) Porque o volume sistólico nunca depende do enchimento diastólico.",
      "B) Porque taquicardia reduz sempre a contratilidade miocárdica de forma irreversível.",
      "C) Porque frequência elevada pode diminuir o enchimento ventricular diastólico, reduzindo o volume sistólico apesar do aumento de batimentos.",
      "D) Porque a Lei de Starling proíbe qualquer resposta ao exercício.",
    ],
    correta: 2,
    dificuldade: 2,
    modulo: 2,
    explicacao_geral:
      "DC = FC × VS; se a diástole encolhe, o VS pode cair e anular o ganho de FC.",
    explicacoes_opcoes: {
      A: "O enchimento diastólico é central para o VS.",
      B: "A contratilidade não é sempre irreversivelmente perdida nesse cenário genérico.",
      C: "Correto.",
      D: "Starling participa da resposta ao estresse; não é proibição.",
    },
    explicacao:
      "Resumo: FC↑ pode prejudicar enchimento.\nA) INCORRETA.\nB) INCORRETA.\nC) CORRETA.\nD) INCORRETA.",
  }),
  Q({
    id: 1147,
    materia: "bmf2",
    tema: "bmf2_a7",
    enunciado:
      "Qual variável tende a dificultar a ejeção ventricular quando elevada (aumento da pós-carga)?",
    opcoes: [
      "A) Retorno venoso aumentado em um ventrículo hiperdinâmico.",
      "B) Estiramento miocárdico leve em condições fisiológicas.",
      "C) Frequência cardíaca baixa em repouso com débito adequado.",
      "D) Resistência vascular sistêmica elevada (afterload aumentado).",
    ],
    correta: 3,
    dificuldade: 2,
    modulo: 2,
    explicacao_geral:
      "Pós-carga reflete resistência à ejeção; quando sobe, o ventrículo precisa gerar mais pressão para manter o mesmo volume sistólico.",
    explicacoes_opcoes: {
      A: "Relaciona-se mais a pré-carga/volume de entrada.",
      B: "Estiramento moderado costuma aumentar força (Starling), não representa pós-carga.",
      C: "Não descreve aumento de pós-carga.",
      D: "Correto.",
    },
    explicacao:
      "Resumo: Afterload alto dificulta ejeção.\nA) INCORRETA.\nB) INCORRETA.\nC) INCORRETA.\nD) CORRETA.",
  }),
  Q({
    id: 1148,
    materia: "bmf2",
    tema: "bmf2_a7",
    enunciado:
      "Em abordagem integrada de choque hipovolêmico compensado, o organismo tenta manter pressão de perfusão. Qual combinação ilustra melhor a complementaridade entre frequência cardíaca e contratilidade frente à queda de retorno venoso?",
    opcoes: [
      "A) Bradicardia e queda de contratilidade são respostas típicas iniciais.",
      "B) Taquicardia reflexa pode aumentar FC enquanto estímulo simpático aumenta contratilidade para sustentar débito.",
      "C) O débito torna-se independente de FC × VS por definição.",
      "D) A pré-carga deixa de influenciar o volume sistólico em qualquer contexto.",
    ],
    correta: 1,
    dificuldade: 3,
    modulo: 2,
    explicacao_geral:
      "Compensação simpática aumenta cronotropismo e inotropismo para preservar DC quando o volume efetivo cai.",
    explicacoes_opcoes: {
      A: "Hipotensão hipovolêmica costuma gerar taquicardia, não bradicardia inicial.",
      B: "Correto.",
      C: "DC continua sendo FC × VS.",
      D: "Pré-carga continua modulando VS via Starling.",
    },
    explicacao:
      "Resumo: Compensação FC + contratilidade.\nA) INCORRETA.\nB) CORRETA.\nC) INCORRETA.\nD) INCORRETA.",
  }),
  Q({
    id: 1149,
    materia: "bmf2",
    tema: "bmf2_a7",
    enunciado:
      "Para comparar dois estados hemodinâmicos, um com aumento de débito e outro com aumento de congestão venosa sem melhora do débito efetivo, qual contraste a aula enfatiza em coração com função reduzida?",
    opcoes: [
      "A) Débito e congestão sempre caminham juntos na mesma direção.",
      "B) Maior volume intracárdico implica sempre maior ejeção útil.",
      "C) Frequência cardíaca é o único determinante de congestão.",
      "D) Aumento de débito e aumento de congestão podem divergir quando a bomba falha em converter pré-carga em ejeção.",
    ],
    correta: 3,
    dificuldade: 2,
    modulo: 2,
    explicacao_geral:
      "Na descompensação, volume pode aumentar enchendo átrios/ventrículos sem incrementar débito sistêmico eficaz.",
    explicacoes_opcoes: {
      A: "Podem dissociar na IC.",
      B: "Sem função adequada, volume pode acumular sem ejeção proporcional.",
      C: "Congestão tem múltiplos determinantes (função, válvulas, pós-carga).",
      D: "Correto.",
    },
    explicacao:
      "Resumo: Débito vs congestão na IC.\nA) INCORRETA.\nB) INCORRETA.\nC) INCORRETA.\nD) CORRETA.",
  }),
  Q({
    id: 1150,
    materia: "bmf2",
    tema: "bmf2_a7",
    enunciado:
      "Qual afirmação distingue melhor contratilidade miocárdica de frequência cardíaca?",
    opcoes: [
      "A) Contratilidade altera a força gerada por contração; frequência altera o número de ciclos por minuto.",
      "B) São sinônimos na prática clínica.",
      "C) Frequência depende apenas do tônus vagal, sem influência simpática.",
      "D) Contratilidade é medida diretamente pelo intervalo PR no ECG.",
    ],
    correta: 0,
    dificuldade: 2,
    modulo: 2,
    explicacao_geral:
      "Inotropismo (contratilidade) e cronotropismo (FC) são eixos regulatórios distintos, embora interajam no débito.",
    explicacoes_opcoes: {
      A: "Correto.",
      B: "Conceitos diferentes.",
      C: "Ambos os ramos autonômicos influenciam FC.",
      D: "PR reflete condução AV, não contratilidade global.",
    },
    explicacao:
      "Resumo: Força vs ritmo.\nA) CORRETA.\nB) INCORRETA.\nC) INCORRETA.\nD) INCORRETA.",
  }),
  Q({
    id: 1151,
    materia: "bmf2",
    tema: "bmf2_a7",
    enunciado:
      "Um estudante resume o papel da interpretação clínica no manejo hemodinâmico. Qual frase está mais alinhada ao texto da aula?",
    opcoes: [
      "A) Basta medir FC isoladamente; pré-carga, pós-carga e contratilidade são irrelevantes.",
      "B) Hemodinâmica exige integrar variáveis simultaneamente (pré-carga, contratilidade, pós-carga, FC).",
      "C) O débito cardíaco depende sempre exclusivamente da pós-carga.",
      "D) A Lei de Starling elimina a necessidade de avaliar sintomas.",
    ],
    correta: 1,
    dificuldade: 3,
    modulo: 2,
    explicacao_geral:
      "A aula insiste em integração: nenhuma variável isolada explica desempenho cardíaco em contexto real.",
    explicacoes_opcoes: {
      A: "Contradiz a abordagem integrada.",
      B: "Correto.",
      C: "DC depende de FC e VS, e VS de vários fatores.",
      D: "Starling complementa, não substitui clínica.",
    },
    explicacao:
      "Resumo: Visão integrada.\nA) INCORRETA.\nB) CORRETA.\nC) INCORRETA.\nD) INCORRETA.",
  }),
];

// ——— bmf2_a8 — Inervação e PA — ids 1152–1161
module.exports.bmf2_a8 = [
  Q({
    id: 1152,
    materia: "bmf2",
    tema: "bmf2_a8",
    enunciado:
      "Em repouso, a frequência cardíaca típica (~70 bpm) fica abaixo da frequência intrínseca estimada do nódulo SA (~100 bpm) principalmente porque:",
    opcoes: [
      "A) O simpático bloqueia os receptores β₁ em repouso.",
      "B) Predomina o tônus parassimpático vagal sobre o nódulo SA.",
      "C) O parassimpático não inerva o coração humano.",
      "D) A noradrenalina miocárdica desaparece completamente no repouso.",
    ],
    correta: 1,
    dificuldade: 1,
    modulo: 2,
    explicacao_geral:
      "Em repouso há dominância vagal (M₂), reduzindo a FC abaixo do ritmo intrínseco do marcapasso; atropina remove esse freio e a FC sobe.",
    explicacoes_opcoes: {
      A: "O simpático não bloqueia β₁ basalmente; há tônus balanceado com predomínio vagal.",
      B: "Correto.",
      C: "O vago inerva fortemente nódulos SA/AV.",
      D: "Tônus simpático basal existe, mas o efeito líquido em FC reflete o predomínio vagal.",
    },
    explicacao:
      "Resumo: Vago freia o SA em repouso.\nA) INCORRETA.\nB) CORRETA.\nC) INCORRETA.\nD) INCORRETA.",
  }),
  Q({
    id: 1153,
    materia: "bmf2",
    tema: "bmf2_a8",
    enunciado:
      "Paciente hipertenso inicia vasodilatador arterial e refere taquicardia. Qual mecanismo explica melhor esse achado?",
    opcoes: [
      "A) Ativação do barorreflexo por queda de pressão, com aumento do estímulo simpático cardíaco.",
      "B) Bloqueio direto dos barorreceptores pelo fármaco.",
      "C) Inibição medular permanente do núcleo do trato solitário.",
      "D) Aumento imediato irreversível da resistência renal sem resposta neural.",
    ],
    correta: 0,
    dificuldade: 2,
    modulo: 2,
    explicacao_geral:
      "Queda de PA reduz disparo barorreceptor; o bulbo retira inibição simpática e aumenta FC reflexa.",
    explicacoes_opcoes: {
      A: "Correto.",
      B: "O fármaco não anula barorreceptores dessa forma.",
      C: "Não descreve o reflexo rápido típico.",
      D: "O SRAA pode entrar depois; a taquicardia imediata é neural reflexa.",
    },
    explicacao:
      "Resumo: Vasodilatador → barorreflexo → taquicardia.\nA) CORRETA.\nB) INCORRETA.\nC) INCORRETA.\nD) INCORRETA.",
  }),
  Q({
    id: 1154,
    materia: "bmf2",
    tema: "bmf2_a8",
    enunciado:
      "A equação fundamental PA = débito cardíaco × resistência vascular periférica implica que, em um indivíduo com hipertensão essencial predominantemente por aumento de resistência arteriolar, qual intervenção conceitual reduziria a pressão por diminuir RVP?",
    opcoes: [
      "A) Aumentar somente o hematócrito.",
      "B) Vasodilatadores que reduzem tônus de arteríolas de resistência.",
      "C) Aumentar exclusivamente o volume sistólico sem alterar vasos.",
      "D) Elevar a viscosidade sanguínea de forma aguda.",
    ],
    correta: 1,
    dificuldade: 2,
    modulo: 2,
    explicacao_geral:
      "RVP depende sobretudo do tônus arteriolar; vasodilatadores reduzem resistência e tendem a baixar PA se o débito não compensar totalmente.",
    explicacoes_opcoes: {
      A: "Hematócrito elevado tende a aumentar viscosidade e pode elevar resistência.",
      B: "Correto.",
      C: "Aumentar VS eleva componente de débito; não é o mecanismo clássico de queda de RVP.",
      D: "Viscosidade maior prejudica fluxo e pode elevar trabalho/resistência efetiva.",
    },
    explicacao:
      "Resumo: PA = DC × RVP.\nA) INCORRETA.\nB) CORRETA.\nC) INCORRETA.\nD) INCORRETA.",
  }),
  Q({
    id: 1155,
    materia: "bmf2",
    tema: "bmf2_a8",
    enunciado:
      "Barorreceptores importantes para ajuste rápido da PA localizam-se no seio carotídeo e no arco aórtico. Os pares cranianos associados são, respectivamente:",
    opcoes: [
      "A) Vago (X) e trigêmeo (V).",
      "B) Hipoglosso (XII) e acessório (XI).",
      "C) Glossofaríngeo (IX) no seio carotídeo e vago (X) no arco aórtico.",
      "D) Facial (VII) e abducente (VI).",
    ],
    correta: 2,
    dificuldade: 2,
    modulo: 2,
    explicacao_geral:
      "A inervação aferente clássica usa IX para carótidas e X para arco aórtico, integrando o arco reflexo no bulbo.",
    explicacoes_opcoes: {
      A: "O vago participa, mas o seio carotídeo usa principalmente IX.",
      B: "Pares errados para barorrecepção.",
      C: "Correto.",
      D: "Sem relação com arco reflexo pressórico.",
    },
    explicacao:
      "Resumo: IX carotídeo, X aórtico.\nA) INCORRETA.\nB) INCORRETA.\nC) CORRETA.\nD) INCORRETA.",
  }),
  Q({
    id: 1156,
    materia: "bmf2",
    tema: "bmf2_a8",
    enunciado:
      "Mulher de 52 anos com PA 150/95 mmHg. A pressão arterial média (PAM) aproximada pela fórmula PAD + 1/3 (PAS − PAD) reflete qual ideia fisiológica?",
    opcoes: [
      "A) Que a média aritmética simples entre PAS e PAD é sempre igual à PAM.",
      "B) Que a PAS deve ser ignorada no cálculo hemodinâmico.",
      "C) Que a PAD equivale à PAM em todos os indivíduos.",
      "D) Que a diástole ocupa cerca de dois terços do ciclo, tornando inadequada a média aritmética simples e justificando o peso 1/3 da pressão de pulso.",
    ],
    correta: 3,
    dificuldade: 3,
    modulo: 2,
    explicacao_geral:
      "A PAM pondera o tempo em diástole (maior fração do ciclo), por isso usa-se 1/3 da pressão de pulso somada à PAD.",
    explicacoes_opcoes: {
      A: "A PAM não é a média aritmética; o peso 1/3 reflete o tempo diastólico maior.",
      B: "A PAS entra no termo de pulso.",
      C: "PAD e PAM não são idênticas.",
      D: "Correto.",
    },
    explicacao:
      "Resumo: PAM não é média aritmética.\nA) INCORRETA.\nB) INCORRETA.\nC) INCORRETA.\nD) CORRETA.",
  }),
  Q({
    id: 1157,
    materia: "bmf2",
    tema: "bmf2_a8",
    enunciado:
      "Qual efeito autonômico é mais típico do estímulo simpático cardíaco mediado por β₁?",
    opcoes: [
      "A) Bradicardia e bloqueio AV de alto grau.",
      "B) Cronotropismo negativo e dromotropismo negativo.",
      "C) Aumento de frequência, força de contração e condução AV (cronotropismo, inotropismo e dromotropismo positivos).",
      "D) Liberação de acetilcolina no nódulo SA como principal mensageiro.",
    ],
    correta: 2,
    dificuldade: 1,
    modulo: 2,
    explicacao_geral:
      "Catecolaminas β₁ aumentam FC, contratilidade e velocidade de condução AV; o vago faz o oposto via M₂.",
    explicacoes_opcoes: {
      A: "Descreve parassimpático ou bloqueio, não simpático β₁.",
      B: "Sinais vagais.",
      C: "Correto.",
      D: "Acetilcolina é parassimpática.",
    },
    explicacao:
      "Resumo: Simpático β₁ positivo.\nA) INCORRETA.\nB) INCORRETA.\nC) CORRETA.\nD) INCORRETA.",
  }),
  Q({
    id: 1158,
    materia: "bmf2",
    tema: "bmf2_a8",
    enunciado:
      "Paciente com hipoperfusão renal relativa ativa o sistema renina-angiotensina-aldosterona. Qual etapa está correta na sequência clássica até angiotensina II?",
    opcoes: [
      "A) Renina → angiotensinogênio → angiotensina I → (ECA) → angiotensina II.",
      "B) Aldosterona → renina direta → peptídeo natriurético.",
      "C) ECA converte angiotensina II em angiotensina I.",
      "D) Angiotensina II é inativa e não afeta vasos.",
    ],
    correta: 0,
    dificuldade: 2,
    modulo: 2,
    explicacao_geral:
      "Renina cliva angiotensinogênio gerando Ang I; a ECA converte Ang I em Ang II, potente vasoconstrictor e estimulador de aldosterona.",
    explicacoes_opcoes: {
      A: "Correto.",
      B: "Ordem incorreta; aldosterona é eixo downstream.",
      C: "A ECA converte Ang I em Ang II.",
      D: "Ang II é ativa e vasoconstrictora.",
    },
    explicacao:
      "Resumo: SRAA — sequência.\nA) CORRETA.\nB) INCORRETA.\nC) INCORRETA.\nD) INCORRETA.",
  }),
  Q({
    id: 1159,
    materia: "bmf2",
    tema: "bmf2_a8",
    enunciado:
      "Óxido nítrico (NO) endotelial, liberado com estresse de cisalhamento, exerce principalmente qual papel vascular?",
    opcoes: [
      "A) Vasoconstrição intensa e agregação plaquetária.",
      "B) Vasodilatação e inibição da agregação plaquetária.",
      "C) Estimulação direta da liberação massiva de endotelina em repouso absoluto.",
      "D) Aumento do tônus simpático ganglionar.",
    ],
    correta: 1,
    dificuldade: 2,
    modulo: 2,
    explicacao_geral:
      "NO é vasodilatador fisiológico e modulador anti-trombótico na interface sangue-endotélio.",
    explicacoes_opcoes: {
      A: "NO é vasodilatador, não vasoconstrictor típico.",
      B: "Correto.",
      C: "Endotelina é vasoconstrictora, mas não é efeito primário do NO.",
      D: "NO age localmente na parede vascular; não resume-se a esse efeito.",
    },
    explicacao:
      "Resumo: NO vasodilata e protege.\nA) INCORRETA.\nB) CORRETA.\nC) INCORRETA.\nD) INCORRETA.",
  }),
  Q({
    id: 1160,
    materia: "bmf2",
    tema: "bmf2_a8",
    enunciado:
      "Em comparação entre peptídeo natriurético atrial (ANP) e BNP, qual distinção conceitual a aula destaca?",
    opcoes: [
      "A) Ambos são exclusivamente secretados pelo fígado.",
      "B) BNP só sobe na hiponatremia severa isolada, sem relação com distensão.",
      "C) ANP e BNP estimulam vasoconstrição e retenção de sódio.",
      "D) ANP é liberado com distensão atrial; BNP com distensão ventricular predominante.",
    ],
    correta: 3,
    dificuldade: 3,
    modulo: 2,
    explicacao_geral:
      "ANP reflete sobrecarga atrial; BNP reflete estresse parietal ventricular (marcador útil em IC).",
    explicacoes_opcoes: {
      A: "São hormônios cardíacos/endócrinos, não hepáticos.",
      B: "BNP correlaciona com distensão ventricular na prática.",
      C: "Efeitos natriuréticos e vasodilatadores predominam.",
      D: "Correto.",
    },
    explicacao:
      "Resumo: ANP atrial, BNP ventricular.\nA) INCORRETA.\nB) INCORRETA.\nC) INCORRETA.\nD) CORRETA.",
  }),
  Q({
    id: 1161,
    materia: "bmf2",
    tema: "bmf2_a8",
    enunciado:
      "Idoso com síncope durante esforço de evacuação, bradicardia e hipotensão. Qual reflexo melhor encaixa vasodilatação periférica associada a aumento vagal?",
    opcoes: [
      "A) Reflexo de Bainbridge isolado com hipertensão arterial.",
      "B) Barorreflexo desencadeado exclusivamente por hipertensão grave.",
      "C) Reflexo vasovagal (ativação vagal + queda de tônus simpático vascular).",
      "D) Resposta metabólica local com vasoconstrição máxima em músculo esquelético.",
    ],
    correta: 2,
    dificuldade: 3,
    modulo: 2,
    explicacao_geral:
      "O vasovagal combina bradicardia vagal e vasodilatação, produzindo hipotensão e síncope.",
    explicacoes_opcoes: {
      A: "Bainbridge relaciona-se a distensão atrial e taquicardia, não ao quadro descrito.",
      B: "Barorreflexo a hipertensão tende a baixar FC, mas o enunciado descreve vasovagal situacional.",
      C: "Correto.",
      D: "Vasoconstrição não explica síncope hipotensiva por vasodilatação.",
    },
    explicacao:
      "Resumo: Vasovagal = bradicardia + vasodilatação.\nA) INCORRETA.\nB) INCORRETA.\nC) CORRETA.\nD) INCORRETA.",
  }),
];

// ——— bmf2_a9 — Coronariana, microcirculação, linfática — ids 1162–1171
module.exports.bmf2_a9 = [
  Q({
    id: 1162,
    materia: "bmf2",
    tema: "bmf2_a9",
    enunciado:
      "Por que o fluxo coronariano do ventrículo esquerdo ocorre predominantemente na diástole?",
    opcoes: [
      "A) Porque a sístole aumenta a compressão intramural dos vasos epicárdicos, reduzindo a perfusão durante a ejeção.",
      "B) Porque a pressão no ventrículo direito excede sempre a aórtica.",
      "C) Porque as coronárias não se enchem na diástole em nenhuma espécie.",
      "D) Porque o fluxo sistólico é exclusivamente pulmonar.",
    ],
    correta: 0,
    dificuldade: 2,
    modulo: 2,
    explicacao_geral:
      "Durante a sístole ventricular esquerda, a compressão intramural dos ramos intramiocárdicos reduz o fluxo; na diástole reabre-se a perfusão.",
    explicacoes_opcoes: {
      A: "Correto.",
      B: "Falso em termos gerais de hemodinâmica.",
      C: "A diástole é justamente a janela favorável ao VE.",
      D: "Confunde circulações.",
    },
    explicacao:
      "Resumo: Sístole comprime vasos do VE.\nA) CORRETA.\nB) INCORRETA.\nC) INCORRETA.\nD) INCORRETA.",
  }),
  Q({
    id: 1163,
    materia: "bmf2",
    tema: "bmf2_a9",
    enunciado:
      "Paciente coronariopata apresenta taquicardia sustentada. Qual nexo fisiopatológico explica piora da perfusão miocárdica nesse contexto?",
    opcoes: [
      "A) Taquicardia elimina completamente o débito cardíaco.",
      "B) O miocárdio deixa de consumir oxigênio durante taquicardia.",
      "C) A circulação coronariana independe da frequência cardíaca.",
      "D) Taquicardia encurta a diástole, reduzindo o tempo em que o fluxo coronariano ao VE é mais efetivo.",
    ],
    correta: 3,
    dificuldade: 3,
    modulo: 2,
    explicacao_geral:
      "Com diástole curta, cai a janela de perfusão diastólica ao VE — crítica em doença obstrutiva.",
    explicacoes_opcoes: {
      A: "DC pode permanecer, mas a relação oferta/demanda piora.",
      B: "Demanda de O₂ tende a subir com FC.",
      C: "FC modula tempo diastólico e, portanto, perfusão.",
      D: "Correto.",
    },
    explicacao:
      "Resumo: Taquicardia prejudica perfusão diastólica.\nA) INCORRETA.\nB) INCORRETA.\nC) INCORRETA.\nD) CORRETA.",
  }),
  Q({
    id: 1164,
    materia: "bmf2",
    tema: "bmf2_a9",
    enunciado:
      "Em dominância coronariana direita (prevalente na maioria das pessoas), a artéria descendente posterior (ADP) origina-se de:",
    opcoes: [
      "A) Artéria circunflexa, em todos os casos.",
      "B) Tronco da coronária esquerda exclusivamente.",
      "C) Artéria coronária direita.",
      "D) Artéria pulmonar.",
    ],
    correta: 2,
    dificuldade: 1,
    modulo: 2,
    explicacao_geral:
      "Dominância direita: ADP vem da ACD; dominância esquerda: ADP pode vir da CX.",
    explicacoes_opcoes: {
      A: "Isso ocorre em dominância esquerda.",
      B: "O tronco esquerdo dá DA e CX, não define ADP na dominância direita.",
      C: "Correto.",
      D: "Sem anatomia coronariana típica.",
    },
    explicacao:
      "Resumo: Dominância direita → ADP da ACD.\nA) INCORRETA.\nB) INCORRETA.\nC) CORRETA.\nD) INCORRETA.",
  }),
  Q({
    id: 1165,
    materia: "bmf2",
    tema: "bmf2_a9",
    enunciado:
      "Homem de 40 anos realiza teste ergométrico progressivo. O miocárdio extrai cerca de 70–75% do oxigênio arterial em repouso. Qual consequência prática isso impõe quando a demanda de O₂ aumenta no esforço?",
    opcoes: [
      "A) O tecido pode compensar aumentando drasticamente a extração sem aumentar fluxo.",
      "B) A extração já está alta; o principal recurso é aumentar o fluxo coronariano.",
      "C) O miocárdio passa a extrair quase 100% sem limite fisiológico.",
      "D) A demanda de O₂ cai no exercício.",
    ],
    correta: 1,
    dificuldade: 2,
    modulo: 2,
    explicacao_geral:
      "Com extração basal elevada, a reserva é vasodilatação e aumento de fluxo (adenosina e mecanismos metabólicos).",
    explicacoes_opcoes: {
      A: "Há pouca margem de extração adicional.",
      B: "Correto.",
      C: "Há limites; o gargalo é fluxo.",
      D: "Demanda miocárdica de O₂ aumenta no esforço.",
    },
    explicacao:
      "Resumo: Pouca reserva de extração → precisa de fluxo.\nA) INCORRETA.\nB) CORRETA.\nC) INCORRETA.\nD) INCORRETA.",
  }),
  Q({
    id: 1166,
    materia: "bmf2",
    tema: "bmf2_a9",
    enunciado:
      "Qual mecanismo metabólico é citado como principal regulador do calibre coronariano em resposta à demanda miocárdica?",
    opcoes: [
      "A) Liberação local de adenosina e acúmulo de metabólitos (CO₂, H⁺, K⁺).",
      "B) Secreção exclusiva de ADH pela neuro-hipófise.",
      "C) Contração do pericárdio fibroso.",
      "D) Bloqueio absoluto do óxido nítrico em repouso.",
    ],
    correta: 0,
    dificuldade: 2,
    modulo: 2,
    explicacao_geral:
      "A vasodilatação metabólica coronariana liga oferta a consumo; adenosina é vasodilatadora potente nesse contexto.",
    explicacoes_opcoes: {
      A: "Correto.",
      B: "ADH regula água/hemodinâmica global, não o controle local principal citado.",
      C: "Pericárdio não regula ton coronariano desse modo.",
      D: "NO participa, mas não está ausente ou bloqueado basalmente.",
    },
    explicacao:
      "Resumo: Regulação metabólica coronariana.\nA) CORRETA.\nB) INCORRETA.\nC) INCORRETA.\nD) INCORRETA.",
  }),
  Q({
    id: 1167,
    materia: "bmf2",
    tema: "bmf2_a9",
    enunciado:
      "No polo arteriolar da microcirculação, a filtração líquida para o interstício predomina sobre a reabsorção principalmente porque:",
    opcoes: [
      "A) Não há pressão oncótica plasmática.",
      "B) Os capilares não permitem saída de água.",
      "C) A pressão intersticial é sempre maior que a aórtica.",
      "D) A pressão hidrostática capilar supera a soma das forças que favorecem reabsorção naquele segmento.",
    ],
    correta: 3,
    dificuldade: 2,
    modulo: 2,
    explicacao_geral:
      "Starling: Pc e πi favorecem filtração; πp e Pi favorecem reabsorção — no polo arteriolar o balanço neto tende à filtração.",
    explicacoes_opcoes: {
      A: "πp existe e puxa fluido de volta.",
      B: "Há filtração contínua controlada.",
      C: "Magnitudes não seguem essa relação.",
      D: "Correto.",
    },
    explicacao:
      "Resumo: Polo arteriolar filtra.\nA) INCORRETA.\nB) INCORRETA.\nC) INCORRETA.\nD) CORRETA.",
  }),
  Q({
    id: 1168,
    materia: "bmf2",
    tema: "bmf2_a9",
    enunciado:
      "Paciente com hipoalbuminemia grave apresenta edema generalizado. Qual distúrbio das forças de Starling explica o achado?",
    opcoes: [
      "A) Aumento exclusivo da pressão hidrostática intersticial negativa.",
      "B) Eliminação completa da filtração capilar.",
      "C) Queda da pressão oncótica plasmática (πp), reduzindo o retorno de fluido ao capilar.",
      "D) Bloqueio agudo do ducto torácico em todos os casos.",
    ],
    correta: 2,
    dificuldade: 3,
    modulo: 2,
    explicacao_geral:
      "Albumina sustenta πp; sem ela, a reabsorção oncótica falha e o edema de baixa proteína instala-se.",
    explicacoes_opcoes: {
      A: "Pode contribuir em outros estados, mas o núcleo aqui é πp baixa.",
      B: "Filtração pode persistir ou mudar de balanço, não desaparece como conceito.",
      C: "Correto.",
      D: "Linfático é outra causa de edema; não universal na hipoalbuminemia.",
    },
    explicacao:
      "Resumo: πp baixa → edema.\nA) INCORRETA.\nB) INCORRETA.\nC) CORRETA.\nD) INCORRETA.",
  }),
  Q({
    id: 1169,
    materia: "bmf2",
    tema: "bmf2_a9",
    enunciado:
      "Qual função é mais específica do sistema linfático no interstício?",
    opcoes: [
      "A) Gerar pressão de pulso sistólica.",
      "B) Recolher proteínas e fluido que escapam aos capilares e devolvê-los à circulação.",
      "C) Produzir eritropoietina renal.",
      "D) Sintetizar hemoglobina nos gânglios linfáticos.",
    ],
    correta: 1,
    dificuldade: 1,
    modulo: 2,
    explicacao_geral:
      "Linfáticos iniciais são permeáveis a proteínas; drenam o excedente filtrado e evitam linfedema.",
    explicacoes_opcoes: {
      A: "Pulso é função cardíaca/arterial.",
      B: "Correto.",
      C: "Eritropoietina é renal.",
      D: "Hemoglobina é eritrocitária; não se forma em linfonodo.",
    },
    explicacao:
      "Resumo: Linfático drena proteína e fluido.\nA) INCORRETA.\nB) CORRETA.\nC) INCORRETA.\nD) INCORRETA.",
  }),
  Q({
    id: 1170,
    materia: "bmf2",
    tema: "bmf2_a9",
    enunciado:
      "A artéria descendente anterior (DA), ramo da coronária esquerda, irriga predominantemente qual território?",
    opcoes: [
      "A) Parede inferior e nódulo AV na maioria absoluta dos corações.",
      "B) Apenas átrio esquerdo isolado.",
      "C) Parede anterior do VE, septo interventricular anterior e contribui para o ápice.",
      "D) Ventrículo direito livre exclusivamente.",
    ],
    correta: 2,
    dificuldade: 2,
    modulo: 2,
    explicacao_geral:
      "DA perfunde septo anterior e face anterior do VE; inferior costuma depender da ACD/CX conforme dominância.",
    explicacoes_opcoes: {
      A: "Inferior é mais ligada a ACD/ADP em dominância direita.",
      B: "DA drena território ventricular anterior extenso.",
      C: "Correto.",
      D: "VD é mais irrigado pela ACD.",
    },
    explicacao:
      "Resumo: DA = anterior + septo anterior.\nA) INCORRETA.\nB) INCORRETA.\nC) CORRETA.\nD) INCORRETA.",
  }),
  Q({
    id: 1171,
    materia: "bmf2",
    tema: "bmf2_a9",
    enunciado:
      "Paciente com linfedema crônico de membro inferior após infestação por filária (Wuchereria bancrofti). O mecanismo central é:",
    opcoes: [
      "A) Aumento agudo da resistência vascular pulmonar isolada.",
      "B) Hemorragia alveolar massiva.",
      "C) Infarto agudo do miocárdio inferior sem alteração venosa.",
      "D) Obstrução do retorno linfático com acúmulo intersticial rico em proteínas.",
    ],
    correta: 3,
    dificuldade: 3,
    modulo: 2,
    explicacao_geral:
      "Filariose obstrui vasos linfáticos; a drenagem proteica falha e o edema torna-se crônico (ex.: elefantíase).",
    explicacoes_opcoes: {
      A: "Não explica linfedema primário por parasita.",
      B: "Sem relação com o quadro descrito.",
      C: "IAM tem outro conjunto de causas.",
      D: "Correto.",
    },
    explicacao:
      "Resumo: Linfedema = bloqueio linfático.\nA) INCORRETA.\nB) INCORRETA.\nC) INCORRETA.\nD) CORRETA.",
  }),
];
