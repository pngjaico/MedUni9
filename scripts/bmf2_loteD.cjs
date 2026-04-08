/**
 * BMF2 — Lote D: bmf2_a14–bmf2_a16 (ids 1062–1091).
 * Regras: 10/aula; dificuldade 2×1 + 5×2 + 3×3; explicações completas; sem templates de “associe a linha”.
 * Material: data/materiais/bmf2/bmf2_a14.md, bmf2_a15.md, bmf2_a16.md
 *
 * Uso típico: mesclar em data/questoes.json por id/tema ou importar num patch dedicado.
 */
"use strict";

function Q(payload) {
  return payload;
}

// ——— bmf2_a14 — Controle da respiração / quimiorreceptores — ids 1062–1071
module.exports.bmf2_a14 = [
  Q({
    id: 1062,
    materia: "bmf2",
    tema: "bmf2_a14",
    enunciado:
      "Os quimiorreceptores **centrais** localizados na superfície ventral do bulbo respondem principalmente a qual estímulo químico?",
    opcoes: [
      "A) PaO₂ arterial diretamente, pois cruzam a barreira hematoencefálica com facilidade.",
      "B) Alterações do pH do LCR relacionadas à PCO₂ arterial (CO₂ → H⁺ no líquido cefalorraquidiano).",
      "C) Saturação de oxihemoglobina, refletindo o conteúdo total de oxigênio no sangue.",
      "D) Pressão parcial de oxigênio nos corpúsculos carotídeos exclusivamente.",
    ],
    correta: 1,
    dificuldade: 1,
    modulo: 2,
    explicacao_geral:
      "Os quimiorreceptores centrais monitoram o ambiente químico do LCR; o CO₂ difunde, acidifica o LCR e aumenta a ventilação. O₂ não é o estímulo direto central.",
    explicacoes_opcoes: {
      A: "Incorreta: o O₂ não atravessa bem a BHE; os centrais não ‘medem’ PaO₂ diretamente.",
      B: "Correta: CO₂ → aumento de H⁺ no LCR é o sinal central dominante (~70–80% do drive ao CO₂).",
      C: "Incorreta: SatO₂ e conteúdo de O₂ não são o que os centrais detectam.",
      D: "Incorreta: corpúsculos carotídeos são periféricos, não centrais.",
    },
    explicacao:
      "Resumo: Centrais = CO₂/H⁺ no LCR.\nA) INCORRETA.\nB) CORRETA.\nC) INCORRETA.\nD) INCORRETA.",
  }),
  Q({
    id: 1063,
    materia: "bmf2",
    tema: "bmf2_a14",
    enunciado:
      "O nervo glossofaríngeo (IX par) está relacionado à aferência dos quimiorreceptores de qual estrutura?",
    opcoes: [
      "A) Corpúsculos da aorta (arco aórtico), inervados pelo nervo de Cyon (X par).",
      "B) Corpúsculos carotídeos na bifurcação da carótida comum (nervo de Hering).",
      "C) Receptores de distensão pulmonar do reflexo de Hering-Breuer (fibras mielínicas do vago).",
      "D) Núcleo do trato solitário exclusivamente para barorreceptores da carótida.",
    ],
    correta: 1,
    dificuldade: 1,
    modulo: 2,
    explicacao_geral:
      "Os corpúsculos carotídeos enviam aferência pelo IX par (ramo de Hering); os aórticos usam o X par.",
    explicacoes_opcoes: {
      A: "Incorreta: aórticos → X par (Cyon), não IX.",
      B: "Correta: carotídeos → IX par.",
      C: "Incorreta: Hering-Breuer é mecanorreceptor pulmonar via vago, não quimiorreceptor carotídeo.",
      D: "Incorreta: mistura funções; o foco da aula é IX nos carotídeos.",
    },
    explicacao:
      "Resumo: Carotídeo = IX.\nA) INCORRETA.\nB) CORRETA.\nC) INCORRETA.\nD) INCORRETA.",
  }),
  Q({
    id: 1064,
    materia: "bmf2",
    tema: "bmf2_a14",
    enunciado:
      "Homem com DPOC avançado, retentor crônico de CO₂, em uso domiciliar de oxigênio. Qual meta de SpO₂ costuma ser recomendada para não abolir o drive ventilatório hipóxico?",
    opcoes: [
      "A) 94–98%, como em paciente sem retenção crônica de CO₂.",
      "B) 88–92%, titulando o O₂ para evitar supressão do estímulo periférico à hipoxemia.",
      "C) 100% contínuo para maximizar o conteúdo de oxigênio e ‘proteger’ o miocárdio.",
      "D) < 80%, pois o objetivo é manter hipercapnia para estimular o centro central.",
    ],
    correta: 1,
    dificuldade: 2,
    modulo: 2,
    explicacao_geral:
      "Em retentores crônicos, o drive hipóxico periférico pode ser o principal estímulo; SpO₂ muito alta remove esse drive e piora a hipercapnia.",
    explicacoes_opcoes: {
      A: "Incorreta: alvo mais alto é para contextos sem essa dependência do drive hipóxico.",
      B: "Correta: faixa clássica citada no material (88–92%).",
      C: "Incorreta: O₂ excessivo é justamente o risco.",
      D: "Incorreta: não se busca hipoxemia grave como estratégia.",
    },
    explicacao:
      "Resumo: Titular O₂ no retentor.\nA) INCORRETA.\nB) CORRETA.\nC) INCORRETA.\nD) INCORRETA.",
  }),
  Q({
    id: 1065,
    materia: "bmf2",
    tema: "bmf2_a14",
    enunciado:
      "Qual estrutura é descrita como o gerador rítmico primário (marca-passo) da respiração automática no bulbo?",
    opcoes: [
      "A) Centro apnêustico na ponte.",
      "B) Centro pneumotáxico (grupo parabraquial).",
      "C) Complexo pré-Bötzinger no grupo respiratório ventral.",
      "D) Grupo respiratório dorsal como único núcleo expiratório em repouso.",
    ],
    correta: 2,
    dificuldade: 2,
    modulo: 2,
    explicacao_geral:
      "O pré-Bötzinger no GRV organiza o ritmo inspiratório basal; o pneumotáxico modula término/frequência.",
    explicacoes_opcoes: {
      A: "Incorreta: apnêustico prolonga inspiração quando liberado de inibição, não é o marca-passo basal.",
      B: "Incorreta: pneumotáxico inibe apnêustico e ajusta FR, não gera o ritmo primário.",
      C: "Correta: pré-Bötzinger = gerador rítmico central.",
      D: "Incorreta: o GRD é inspiratório; expiração em repouso é frequentemente passiva.",
    },
    explicacao:
      "Resumo: Ritmo = pré-Bötzinger.\nA) INCORRETA.\nB) INCORRETA.\nC) CORRETA.\nD) INCORRETA.",
  }),
  Q({
    id: 1066,
    materia: "bmf2",
    tema: "bmf2_a14",
    enunciado:
      "Mulher com anemia severa, mas PaO₂ normal. Por que os quimiorreceptores periféricos podem não aumentar a ventilação proporcionalmente à hipóxia tecidual?",
    opcoes: [
      "A) Porque respondem à hemoglobina livre no plasma, que está baixa na anemia.",
      "B) Porque medem principalmente PaO₂ dissolvida; com PaO₂ normal, o estímulo químico periférico fica fraco.",
      "C) Porque o centro pneumotáxico suprime qualquer resposta em anemias.",
      "D) Porque o CO₂ dissolvido no LCR está sempre elevado na anemia e mascara o reflexo.",
    ],
    correta: 1,
    dificuldade: 2,
    modulo: 2,
    explicacao_geral:
      "Quimiorreceptores periféricos reagem a PaO₂, não ao transporte total de O₂ (Hb) nem à SatO₂ isoladamente.",
    explicacoes_opcoes: {
      A: "Incorreta: não é o mecanismo descrito na aula.",
      B: "Correta: PaO₂ normal → pouco estímulo periférico, apesar de CaO₂ baixo.",
      C: "Incorreta: não há essa regra na fisiologia basal.",
      D: "Incorreta: argumento inventado; o ponto é PaO₂ vs conteúdo.",
    },
    explicacao:
      "Resumo: Periféricos ‘veem’ PaO₂.\nA) INCORRETA.\nB) CORRETA.\nC) INCORRETA.\nD) INCORRETA.",
  }),
  Q({
    id: 1067,
    materia: "bmf2",
    tema: "bmf2_a14",
    enunciado:
      "Na ponte, o centro pneumotáxico atua sobre o centro apnêustico de qual modo fisiológico?",
    opcoes: [
      "A) Estimula o apnêustico, prolongando a inspiração em todos os ciclos.",
      "B) Inibe o apnêustico, ajudando a encerrar a inspiração e a modular a frequência respiratória.",
      "C) Converte o apnêustico em núcleo puramente expiratório em repouso.",
      "D) Desconecta o apnêustico do vago, anulando o reflexo de Hering-Breuer.",
    ],
    correta: 1,
    dificuldade: 2,
    modulo: 2,
    explicacao_geral:
      "Pneumotáxico inibe apnêustico → ‘corta’ inspiração; mais atividade pneumotáxica → FR maior, respiração mais superficial.",
    explicacoes_opcoes: {
      A: "Incorreta: seria o oposto do papel inibitório.",
      B: "Correta: inibição do apnêustico termina inspiração.",
      C: "Incorreta: não descreve a relação real.",
      D: "Incorreta: mistura com outro reflexo.",
    },
    explicacao:
      "Resumo: Pneumotáxico inibe apnêustico.\nA) INCORRETA.\nB) CORRETA.\nC) INCORRETA.\nD) INCORRETA.",
  }),
  Q({
    id: 1068,
    materia: "bmf2",
    tema: "bmf2_a14",
    enunciado:
      "O reflexo de Hering-Breuer é acionado principalmente por qual estímulo e qual consequência típica?",
    opcoes: [
      "A) Hipoxemia nos corpúsculos carotídeos → taquipneia.",
      "B) Distensão pulmonar por volume corrente elevado → inibição da inspiração via fibras vagais.",
      "C) Acidose metabólica no LCR → aumento do drive central ao CO₂.",
      "D) Congestão alveolar sem distensão → ativação do reflexo J com bradicardia obrigatória.",
    ],
    correta: 1,
    dificuldade: 2,
    modulo: 2,
    explicacao_geral:
      "Hering-Breuer: receptores de distensão (mielínicas) → limite ao volume inspiratório; mais relevante em neonatos.",
    explicacoes_opcoes: {
      A: "Incorreta: isso é quimiorreceptor periférico, não distensão.",
      B: "Correta: distensão → inibe próxima inspiração (vago).",
      C: "Incorreta: mistura com quimiorreceptor central.",
      D: "Incorreta: descreve reflexo J, não Hering-Breuer.",
    },
    explicacao:
      "Resumo: Distensão → freia inspiração.\nA) INCORRETA.\nB) CORRETA.\nC) INCORRETA.\nD) INCORRETA.",
  }),
  Q({
    id: 1069,
    materia: "bmf2",
    tema: "bmf2_a14",
    enunciado:
      "Atleta no final de esforço máximo com acidose láctica relevante. Qual alteração ventilatória/ gasométrica é mais coerente com o material?",
    opcoes: [
      "A) Hiperventilação com queda da PaCO₂ abaixo do normal (alcalose respiratória compensatória).",
      "B) Hipoxemia grave com PaO₂ sempre < 40 mmHg pelo consumo muscular.",
      "C) Bradipneia para reter CO₂ e corrigir o pH.",
      "D) Aumento exclusivamente do drive central ao CO₂, sem participação periférica.",
    ],
    correta: 0,
    dificuldade: 3,
    modulo: 2,
    explicacao_geral:
      "Exercício intenso: acidose estimula quimiorreceptores (especialmente periféricos) → hiperventilação → PaCO₂ baixa.",
    explicacoes_opcoes: {
      A: "Correta: hiperventilação e hipocapnia são descritas no texto.",
      B: "Incorreta: em exercício moderado PaO₂ mantém-se; no máximo a lógica da questão é a ventilação por pH, não hipoxemia fixa.",
      C: "Incorreta: o padrão é hiperventilar, não bradipneia.",
      D: "Incorreta: periféricos participam na fase ácida.",
    },
    explicacao:
      "Resumo: Acidose → hiperventilação → ↓PaCO₂.\nA) CORRETA.\nB) INCORRETA.\nC) INCORRETA.\nD) INCORRETA.",
  }),
  Q({
    id: 1070,
    materia: "bmf2",
    tema: "bmf2_a14",
    enunciado:
      "Paciente em uso de morfina para dor oncológica apresenta sonolência e desconforto respiratório com episódios de apneia. Qual mecanismo central explica melhor o risco?",
    opcoes: [
      "A) Bloqueio seletivo dos quimiorreceptores periféricos com hiperventilação reflexa.",
      "B) Depressão dos centros bulbares sensíveis ao drive ao CO₂, reduzindo resposta ventilatória.",
      "C) Ativação exclusiva do centro apnêustico com inspirações curtas e rápidas.",
      "D) Estímulo direto do complexo pré-Bötzinger pela morfina, gerando taquipneia.",
    ],
    correta: 1,
    dificuldade: 3,
    modulo: 2,
    explicacao_geral:
      "Opioides deprimem o centro respiratório e o drive ao CO₂; o risco é apneia/hipercapnia.",
    explicacoes_opcoes: {
      A: "Incorreta: não é hiperventilação típica.",
      B: "Correta: depressão do drive ventilatório central.",
      C: "Incorreta: não corresponde ao quadro.",
      D: "Incorreta: efeito é depressor, não estimulante do ritmo.",
    },
    explicacao:
      "Resumo: Opioides → ↓ drive respiratório.\nA) INCORRETA.\nB) CORRETA.\nC) INCORRETA.\nD) INCORRETA.",
  }),
  Q({
    id: 1071,
    materia: "bmf2",
    tema: "bmf2_a14",
    enunciado:
      "Qual associação melhor descreve a apneia central na síndrome de Ondine (congênita, mutação PHOX2B) em contraste com a apneia obstrutiva do sono?",
    opcoes: [
      "A) Obstrutiva: colapso de vias aéreas com esforço inspiratório; Ondine: falha do controle automático sem obstrução mecânica típica.",
      "B) Ambas são causadas exclusivamente por obesidade e anatomia faríngea.",
      "C) Ondine: sempre hipercapnia aguda isolada na vigília; obstrutiva: nunca há hipoxemia.",
      "D) Obstrutiva: ausência de microdespertares; Ondine: fragmentação do sono apenas por refluxo.",
    ],
    correta: 0,
    dificuldade: 3,
    modulo: 2,
    explicacao_geral:
      "Ondine: falência do controle automático (central). Obstrutiva: obstrução das vias aéreas superiores com esforço.",
    explicacoes_opcoes: {
      A: "Correta: contraste mecânico vs central conforme a aula.",
      B: "Incorreta: generalização falsa.",
      C: "Incorreta: ambos podem ter fenômenos variados; a distinção é mecânica vs central.",
      D: "Incorreta: obstrutiva tem microdespertares; Ondine não é refluxo.",
    },
    explicacao:
      "Resumo: Central vs obstrutiva.\nA) CORRETA.\nB) INCORRETA.\nC) INCORRETA.\nD) INCORRETA.",
  }),
];

// ——— bmf2_a15 — Prática anatomia/histologia cardiovascular — ids 1072–1081
module.exports.bmf2_a15 = [
  Q({
    id: 1072,
    materia: "bmf2",
    tema: "bmf2_a15",
    enunciado:
      "A valva **mitral** (atrioventricular esquerda) apresenta quantas cúspides na anatomia típica?",
    opcoes: [
      "A) Uma cúspide, como uma válvula em bico.",
      "B) Duas cúspides (bicúspide: anterior e posterior).",
      "C) Três cúspides, como a valva tricúspide.",
      "D) Quatro cúspides semilunares.",
    ],
    correta: 1,
    dificuldade: 1,
    modulo: 2,
    explicacao_geral:
      "Mitral = 2 cúspides; tricúspide = 3. Ambas têm cordas tendíneas e músculos papilares.",
    explicacoes_opcoes: {
      A: "Incorreta.",
      B: "Correta.",
      C: "Incorreta: três é a tricúspide direita.",
      D: "Incorreta: semilunares têm três cúspides, não quatro, e não são ‘mitral’.",
    },
    explicacao:
      "Resumo: Mitral = 2.\nA) INCORRETA.\nB) CORRETA.\nC) INCORRETA.\nD) INCORRETA.",
  }),
  Q({
    id: 1073,
    materia: "bmf2",
    tema: "bmf2_a15",
    enunciado:
      "Em relação à circulação pulmonar, qual afirmação sobre o sangue nas artérias pulmonares está correta?",
    opcoes: [
      "A) Transportam sangue oxigenado em direção ao parênquima pulmonar.",
      "B) Transportam sangue venoso (desoxigenado) em direção aos capilares alveolares.",
      "C) Têm o mesmo conteúdo gasométrico que a aorta por definição anatômica.",
      "D) São classificadas como veias porque carregam sangue ‘venoso’.",
    ],
    correta: 1,
    dificuldade: 1,
    modulo: 2,
    explicacao_geral:
      "‘Artéria’ indica saída ventricular; no pulmonar o sangue ainda está desoxigenado até passar pelos alvéolos.",
    explicacoes_opcoes: {
      A: "Incorreta: sangue retorna oxigenado pelas veias pulmonares.",
      B: "Correta.",
      C: "Incorreta: aorta leva sangue oxigenado pós-VE.",
      D: "Incorreta: são artérias anatomicamente.",
    },
    explicacao:
      "Resumo: Tronco pulmonar = sangue venoso.\nA) INCORRETA.\nB) CORRETA.\nC) INCORRETA.\nD) INCORRETA.",
  }),
  Q({
    id: 1074,
    materia: "bmf2",
    tema: "bmf2_a15",
    enunciado:
      "Nas lâminas de miocárdio, as **fibras de Purkinje** costumam ser reconhecidas por quais características?",
    opcoes: [
      "A) Núcleos múltiplos periféricos e ausência de glicogênio.",
      "B) Células maiores e mais pálidas que o miocárdio comum, com muito glicogênio e poucas miofibrilas.",
      "C) Endotélio achatado em fileira única sobre septos alveolares.",
      "D) Ausência de discos intercalares e presença de estriações apenas longitudinais.",
    ],
    correta: 1,
    dificuldade: 2,
    modulo: 2,
    explicacao_geral:
      "Purkinje: condução rápida; células largas, pálidas, glicogênio, subendocárdicas.",
    explicacoes_opcoes: {
      A: "Incorreta: descreve esquelético, não Purkinje.",
      B: "Correta.",
      C: "Incorreta: descreve epitélio alveolar, não Purkinje.",
      D: "Incorreta: cardiomiócito tem discos intercalares.",
    },
    explicacao:
      "Resumo: Purkinje = pálidas, grandes, glicogênio.\nA) INCORRETA.\nB) CORRETA.\nC) INCORRETA.\nD) INCORRETA.",
  }),
  Q({
    id: 1075,
    materia: "bmf2",
    tema: "bmf2_a15",
    enunciado:
      "Qual par de estruturas distingue melhor o cardiomiócito do músculo esquelético em histologia?",
    opcoes: [
      "A) Núcleo central e discos intercalares vs núcleos periféricos e ausência de discos intercalares.",
      "B) Ausência de estriações no cardíaco vs estriações apenas no esquelético.",
      "C) Múltiplos núcleos no cardíaco vs núcleo único no esquelético.",
      "D) Discos intercalares apenas no esquelético.",
    ],
    correta: 0,
    dificuldade: 2,
    modulo: 2,
    explicacao_geral:
      "Cardíaco: ramificado, núcleo central típico, discos intercalares. Esquelético: núcleos periféricos, sem discos intercalares.",
    explicacoes_opcoes: {
      A: "Correta.",
      B: "Incorreta: ambos podem ser estriados.",
      C: "Incorreta: cardíaco frequentemente uninucleado; esquelético pode ser multinucleado.",
      D: "Incorreta: discos são marca do cardíaco.",
    },
    explicacao:
      "Resumo: Discos + núcleo central.\nA) CORRETA.\nB) INCORRETA.\nC) INCORRETA.\nD) INCORRETA.",
  }),
  Q({
    id: 1076,
    materia: "bmf2",
    tema: "bmf2_a15",
    enunciado:
      "O **seio coronário** drena para qual câmara e em qual contexto anatômico se posiciona?",
    opcoes: [
      "A) Para o ventrículo esquerdo, através da valva mitral.",
      "B) Para o átrio direito, no sulco coronário (drenagem das veias cardíacas principais).",
      "C) Para a veia cava superior, diretamente sem passar pelo átrio.",
      "D) Para o átrio esquerdo, coletando sangue oxigenado das coronárias.",
    ],
    correta: 1,
    dificuldade: 2,
    modulo: 2,
    explicacao_geral:
      "Seio coronário recebe dreno venoso do coração e desemboca no AD (sulco coronário).",
    explicacoes_opcoes: {
      A: "Incorreta.",
      B: "Correta.",
      C: "Incorreta.",
      D: "Incorreta: sangue coronariano é venoso em relação ao AE.",
    },
    explicacao:
      "Resumo: Seio coronário → AD.\nA) INCORRETA.\nB) CORRETA.\nC) INCORRETA.\nD) INCORRETA.",
  }),
  Q({
    id: 1077,
    materia: "bmf2",
    tema: "bmf2_a15",
    enunciado:
      "As valvas **semilunares** (aórtica e pulmonar) diferem das valvas atrioventriculares por qual aspecto estrutural?",
    opcoes: [
      "A) Possuem cordas tendíneas e músculos papilares proeminentes.",
      "B) São sustentadas pelos seios de Valsalva e não possuem aparato de cordas tendíneas.",
      "C) Têm apenas duas cúspides cada.",
      "D) Abrem apenas na diástole atrial.",
    ],
    correta: 1,
    dificuldade: 2,
    modulo: 2,
    explicacao_geral:
      "Semilunares: três cúspides, sem cordas; AV: cordas e papilares.",
    explicacoes_opcoes: {
      A: "Incorreta: isso é AV.",
      B: "Correta.",
      C: "Incorreta: semilunares têm três cúspides.",
      D: "Incorreta: abrem na sístole ventricular para ejeção.",
    },
    explicacao:
      "Resumo: Sem cordas.\nA) INCORRETA.\nB) CORRETA.\nC) INCORRETA.\nD) INCORRETA.",
  }),
  Q({
    id: 1078,
    materia: "bmf2",
    tema: "bmf2_a15",
    enunciado:
      "Comparando **aorta (artéria elástica)** e **artéria muscular típica**, qual descrição é mais adequada?",
    opcoes: [
      "A) A aorta tem média com predominância de músculo liso em camada única; a muscular tem apenas endotélio.",
      "B) A aorta apresenta múltiplas lamelas elásticas na média; a muscular combina músculo liso com lâminas elásticas interna e externa definidas.",
      "C) Ambas têm média ausente e apenas íntima e adventícia.",
      "D) A artéria muscular não possui lâmina elástica interna.",
    ],
    correta: 1,
    dificuldade: 2,
    modulo: 2,
    explicacao_geral:
      "Elástica: lamelas elásticas múltiplas na média. Muscular: músculo liso + lâminas elásticas interna e externa.",
    explicacoes_opcoes: {
      A: "Incorreta: inverte os papéis.",
      B: "Correta.",
      C: "Incorreta.",
      D: "Incorreta: muscular tem lâmina elástica interna.",
    },
    explicacao:
      "Resumo: Elástica vs muscular.\nA) INCORRETA.\nB) CORRETA.\nC) INCORRETA.\nD) INCORRETA.",
  }),
  Q({
    id: 1079,
    materia: "bmf2",
    tema: "bmf2_a15",
    enunciado:
      "Na face **esternocostal** do coração em peça anatômica, qual câmara predomina visualmente?",
    opcoes: [
      "A) Ventrículo esquerdo, que ocupa quase toda a face anterior.",
      "B) Ventrículo direito, com artéria coronária direita no sulco coronário e descendente anterior no sulco interventricular anterior.",
      "C) Átrio esquerdo isoladamente, sem participação ventricular.",
      "D) Átrio direito apenas, porque a face anterior é exclusivamente auricular.",
    ],
    correta: 1,
    dificuldade: 3,
    modulo: 2,
    explicacao_geral:
      "Face anterior: predomínio de VD; referências: ACD, DA no SIV anterior.",
    explicacoes_opcoes: {
      A: "Incorreta: VE é mais destacado na face diafragmática/posterior-inferior.",
      B: "Correta.",
      C: "Incorreta.",
      D: "Incorreta.",
    },
    explicacao:
      "Resumo: Anterior → VD.\nA) INCORRETA.\nB) CORRETA.\nC) INCORRETA.\nD) INCORRETA.",
  }),
  Q({
    id: 1080,
    materia: "bmf2",
    tema: "bmf2_a15",
    enunciado:
      "Adulto com comunicação interatrial (persistência do forame oval). Em qual septo e em qual câmara se localiza anatomicamente a **fossa oval** como remanescente?",
    opcoes: [
      "A) Septo interventricular, voltado ao ventrículo esquerdo.",
      "B) Septo interatrial, no átrio direito (cicatriz do forame oval).",
      "C) Parede posterior do ventrículo direito apenas.",
      "D) Valva mitral, entre as duas cúspides.",
    ],
    correta: 1,
    dificuldade: 3,
    modulo: 2,
    explicacao_geral:
      "Fossa oval: septo interatrial, lado direito, vestígio do forame oval.",
    explicacoes_opcoes: {
      A: "Incorreta: é interatrial, não interventricular.",
      B: "Correta.",
      C: "Incorreta.",
      D: "Incorreta.",
    },
    explicacao:
      "Resumo: Fossa oval no septo interatrial.\nA) INCORRETA.\nB) CORRETA.\nC) INCORRETA.\nD) INCORRETA.",
  }),
  Q({
    id: 1081,
    materia: "bmf2",
    tema: "bmf2_a15",
    enunciado:
      "Em histologia vascular, o **capilar** típico distingue-se por:",
    opcoes: [
      "A) Média espessa com músculo liso em múltiplas camadas e adventícia fibrosa grossa.",
      "B) Parede com endotélio e membrana basal, músculo liso e elástica ausentes na organização clássica de troca; pericitos podem estar presentes.",
      "C) Presença obrigatória de lâmina elástica interna duplicada.",
      "D) Duas camadas de endotélio com cartilagem hialina.",
    ],
    correta: 1,
    dificuldade: 3,
    modulo: 2,
    explicacao_geral:
      "Capilar: endotélio + basal; sem média/adventícia como artérias; pericitos.",
    explicacoes_opcoes: {
      A: "Incorreta: descreve arteríola/artéria.",
      B: "Correta.",
      C: "Incorreta: típico de artérias musculares.",
      D: "Incorreta.",
    },
    explicacao:
      "Resumo: Capilar = fino, pericitos.\nA) INCORRETA.\nB) CORRETA.\nC) INCORRETA.\nD) INCORRETA.",
  }),
];

// ——— bmf2_a16 — Prática anatomia/histologia respiratória — ids 1082–1091
module.exports.bmf2_a16 = [
  Q({
    id: 1082,
    materia: "bmf2",
    tema: "bmf2_a16",
    enunciado:
      "Por que o **brônquio principal direito** recebe com mais frequência corpos estranhos aspirados e intubações seletivas acidentais?",
    opcoes: [
      "A) Por ser mais longo, angulado e estreito que o esquerdo.",
      "B) Por ser mais curto, mais largo e formar ângulo mais vertical com a traqueia.",
      "C) Por estar ausente em parte da população.",
      "D) Por drenar apenas o lobo inferior direito.",
    ],
    correta: 1,
    dificuldade: 1,
    modulo: 2,
    explicacao_geral:
      "Brônquio direito: ~2 cm, maior calibre, ~25° com traqueia; esquerdo mais longo e oblíquo.",
    explicacoes_opcoes: {
      A: "Incorreta: descreve o esquerdo.",
      B: "Correta.",
      C: "Incorreta.",
      D: "Incorreta.",
    },
    explicacao:
      "Resumo: Direito = curto, vertical, largo.\nA) INCORRETA.\nB) CORRETA.\nC) INCORRETA.\nD) INCORRETA.",
  }),
  Q({
    id: 1083,
    materia: "bmf2",
    tema: "bmf2_a16",
    enunciado:
      "Quantos **lobos pulmonares** o pulmão direito possui em anatomia típica e quantas **fissuras** o separam?",
    opcoes: [
      "A) Dois lobos e uma fissura oblíqua.",
      "B) Três lobos (superior, médio e inferior) e duas fissuras (oblíqua e horizontal).",
      "C) Três lobos e uma única fissura horizontal.",
      "D) Quatro lobos devido à língula acessória.",
    ],
    correta: 1,
    dificuldade: 1,
    modulo: 2,
    explicacao_geral:
      "Direito: 3 lobos, fissura oblíqua + horizontal. Esquerdo: 2 lobos, língula equivalente ao médio.",
    explicacoes_opcoes: {
      A: "Incorreta: é o esquerdo (2 lobos, 1 fissura).",
      B: "Correta.",
      C: "Incorreta.",
      D: "Incorreta: língula é esquerda.",
    },
    explicacao:
      "Resumo: Direito 3 lobos, 2 fissuras.\nA) INCORRETA.\nB) CORRETA.\nC) INCORRETA.\nD) INCORRETA.",
  }),
  Q({
    id: 1084,
    materia: "bmf2",
    tema: "bmf2_a16",
    enunciado:
      "Qual conjunto de achados histológicos é **mais específico do bronquíolo** em comparação ao brônquio de médio calibre?",
    opcoes: [
      "A) Placas de cartilagem hialina e células caliciformes abundantes.",
      "B) Ausência de cartilagem e ausência de células caliciformes, com músculo liso proeminente.",
      "C) Anéis cartilaginosos completos em forma de anel fechado.",
      "D) Epitélio estratificado pavimentoso queratinizado.",
    ],
    correta: 1,
    dificuldade: 2,
    modulo: 2,
    explicacao_geral:
      "Bronquíolo: sem cartilagem, sem goblet cells; músculo liso; células de Clara nos terminais.",
    explicacoes_opcoes: {
      A: "Incorreta: típico de brônquio.",
      B: "Correta.",
      C: "Incorreta: anéis completos são traqueia (em C), não bronquíolo.",
      D: "Incorreta: vias inferiores não são estratificadas queratinizadas.",
    },
    explicacao:
      "Resumo: Bronquíolo = sem cartilagem, sem caliciformes.\nA) INCORRETA.\nB) CORRETA.\nC) INCORRETA.\nD) INCORRETA.",
  }),
  Q({
    id: 1085,
    materia: "bmf2",
    tema: "bmf2_a16",
    enunciado:
      "Qual estrutura atravessa o **hiato diafragmático** no nível vertebral **T10**?",
    opcoes: [
      "A) Veia cava inferior.",
      "B) Esôfago e troncos vagais.",
      "C) Aorta abdominal e ducto torácico.",
      "D) Artéria pulmonar principal isoladamente.",
    ],
    correta: 1,
    dificuldade: 2,
    modulo: 2,
    explicacao_geral:
      "Mnemônico do material: T8 VCI; T10 esôfago + vagos; T12 aorta + ducto torácico + ázigos.",
    explicacoes_opcoes: {
      A: "Incorreta: VCI em T8.",
      B: "Correta.",
      C: "Incorreta: T12.",
      D: "Incorreta.",
    },
    explicacao:
      "Resumo: T10 = esôfago + vago.\nA) INCORRETA.\nB) CORRETA.\nC) INCORRETA.\nD) INCORRETA.",
  }),
  Q({
    id: 1086,
    materia: "bmf2",
    tema: "bmf2_a16",
    enunciado:
      "O **pneumócito tipo II** tem função principal de:",
    opcoes: [
      "A) Formar a barreira ultrafina para difusão rápida de gases como o tipo I.",
      "B) Sintetizar e secretar surfactante (corpos lamelares) e participar da reparação epitelial.",
      "C) Fagocitar partículas carbonosas exclusivamente no interstício.",
      "D) Produzir muco espesso como as células caliciformes brônquicas.",
    ],
    correta: 1,
    dificuldade: 2,
    modulo: 2,
    explicacao_geral:
      "Tipo I: difusão; tipo II: surfactante e regeneração; macrófago alveolar: fagocitose.",
    explicacoes_opcoes: {
      A: "Incorreta: é tipo I.",
      B: "Correta.",
      C: "Incorreta: macrófago alveolar.",
      D: "Incorreta: muco é caliciforme brônquico.",
    },
    explicacao:
      "Resumo: Tipo II = surfactante.\nA) INCORRETA.\nB) CORRETA.\nC) INCORRETA.\nD) INCORRETA.",
  }),
  Q({
    id: 1087,
    materia: "bmf2",
    tema: "bmf2_a16",
    enunciado:
      "Qual diferença distingue o **bronquíolo terminal** do **bronquíolo respiratório**?",
    opcoes: [
      "A) O terminal possui alvéolos nas paredes; o respiratório não.",
      "B) O respiratório apresenta alvéolos brotando das paredes (início da zona de troca); o terminal não.",
      "C) Apenas o terminal tem músculo liso.",
      "D) O respiratório contém cartilagem hialina segmentar.",
    ],
    correta: 1,
    dificuldade: 2,
    modulo: 2,
    explicacao_geral:
      "Terminal: condução pura; respiratório: alvéolos esporádicos nas paredes (transição).",
    explicacoes_opcoes: {
      A: "Incorreta: inverte.",
      B: "Correta.",
      C: "Incorreta: ambos têm componente muscular.",
      D: "Incorreta: bronquíolos não têm cartilagem.",
    },
    explicacao:
      "Resumo: Respiratório = alvéolos nas paredes.\nA) INCORRETA.\nB) CORRETA.\nC) INCORRETA.\nD) INCORRETA.",
  }),
  Q({
    id: 1088,
    materia: "bmf2",
    tema: "bmf2_a16",
    enunciado:
      "Na **traqueia** em corte histológico, qual epitélio e qual arranjo de cartilagem são esperados?",
    opcoes: [
      "A) Epitélio pavimentoso simples e cartilagem elástica em anéis completos fechados.",
      "B) Epitélio pseudoestratificado colunar ciliado com células caliciformes e anéis de cartilagem hialina em ‘C’ com parede posterior muscular.",
      "C) Epitélio colunar simples não ciliado sem glândulas submucosas.",
      "D) Epitélio transição exclusivamente e ausência de músculo na parede posterior.",
    ],
    correta: 1,
    dificuldade: 2,
    modulo: 2,
    explicacao_geral:
      "Traqueia: pseudoestratificado ciliado, caliciformes, submucosa com glândulas, cartilagem hialina em C, músculo traqueal posterior.",
    explicacoes_opcoes: {
      A: "Incorreta.",
      B: "Correta.",
      C: "Incorreta.",
      D: "Incorreta.",
    },
    explicacao:
      "Resumo: Traqueia clássica.\nA) INCORRETA.\nB) CORRETA.\nC) INCORRETA.\nD) INCORRETA.",
  }),
  Q({
    id: 1089,
    materia: "bmf2",
    tema: "bmf2_a16",
    enunciado:
      "As **células de Clara** (club cells) no bronquíolo terminal são caracterizadas por:",
    opcoes: [
      "A) Produzir muco abundante como as células caliciformes brônquicas.",
      "B) Serem cúbicas, sem cílios, com secreção de fatores como SP-D e metabolização de xenobióticos.",
      "C) Formar a maior barreira de difusão gasosa no septo alveolar.",
      "D) Ser exclusivamente contráteis como o músculo liso bronquial.",
    ],
    correta: 1,
    dificuldade: 3,
    modulo: 2,
    explicacao_geral:
      "Clara: bronquíolo; não são caliciformes; papel em defesa e metabolismo; distinguir de goblet cells.",
    explicacoes_opcoes: {
      A: "Incorreta: muco é caliciforme.",
      B: "Correta.",
      C: "Incorreta: difusão é pneumócito I.",
      D: "Incorreta.",
    },
    explicacao:
      "Resumo: Clara ≠ caliciforme.\nA) INCORRETA.\nB) CORRETA.\nC) INCORRETA.\nD) INCORRETA.",
  }),
  Q({
    id: 1090,
    materia: "bmf2",
    tema: "bmf2_a16",
    enunciado:
      "Em derrame pleural livre, qual recesso costuma acumular líquido primeiro por ser o ponto mais baixo da cavidade?",
    opcoes: [
      "A) Recesso costomediastinal superior à clavícula.",
      "B) Recesso costodiafragmático.",
      "C) Espaço entre as pleuras mediastinais apenas.",
      "D) Cúpula pleural acima da primeira costela.",
    ],
    correta: 1,
    dificuldade: 3,
    modulo: 2,
    explicacao_geral:
      "Recesso costodiafragmático é o mais declive; primeiro a encher em derrame (material cita Rx ≥ 200 mL).",
    explicacoes_opcoes: {
      A: "Incorreta.",
      B: "Correta.",
      C: "Incorreta.",
      D: "Incorreta: cúpula é alto.",
    },
    explicacao:
      "Resumo: Mais baixo = costodiafragmático.\nA) INCORRETA.\nB) CORRETA.\nC) INCORRETA.\nD) INCORRETA.",
  }),
  Q({
    id: 1091,
    materia: "bmf2",
    tema: "bmf2_a16",
    enunciado:
      "Em relação à maturidade pulmonar fetal, quando o **surfactante** costuma ser considerado **maduro** e suficiente para reduzir risco de SDRN grave em muitos contextos clínicos?",
    opcoes: [
      "A) 12–16 semanas, no estágio embrionário.",
      "B) Aproximadamente 34–36 semanas, com índice lecitina/esfingomielina ≥ 2 no líquido amniótico como critério laboratorial clássico.",
      "C) Apenas após 2 anos de vida extrauterina.",
      "D) 20 semanas, no pico do estágio pseudoglandular.",
    ],
    correta: 1,
    dificuldade: 3,
    modulo: 2,
    explicacao_geral:
      "Surfactante detectável ~24 sem; suficiente ~28–32; maduro ~34–36 sem; L/S ≥ 2.",
    explicacoes_opcoes: {
      A: "Incorreta: pulmão ainda não formou alvéolos maduros.",
      B: "Correta.",
      C: "Incorreta: alvéolar pós-natal continua, mas ‘maturidade surfactante’ é terceiro trimestre.",
      D: "Incorreta: estágio ainda canalicular/pseudoglandular.",
    },
    explicacao:
      "Resumo: Surfactante maduro ~34–36 sem.\nA) INCORRETA.\nB) CORRETA.\nC) INCORRETA.\nD) INCORRETA.",
  }),
];

module.exports.all = [
  ...module.exports.bmf2_a14,
  ...module.exports.bmf2_a15,
  ...module.exports.bmf2_a16,
];
