/**
 * BMF2 — Lote C: bmf2_a10–bmf2_a13 (respiratório: anatomia, histologia, mecânica, V/Q)
 * IDs: 1022–1061 (10 por aula, 40 total)
 * Dificuldade por aula: 2×1 + 5×2 + 3×3; ~4 mini-casos por aula
 * Aplicar em data/questoes.json com script dedicado ou mesclar em apply_bmf2_patch.
 */
"use strict";

function Q(payload) {
  return payload;
}

// ——— bmf2_a10 — Caixa torácica, vias aéreas, surfactante — ids 1022–1031
module.exports.bmf2_a10 = [
  Q({
    id: 1022,
    materia: "bmf2",
    tema: "bmf2_a10",
    enunciado:
      "O ângulo de Luís (junção manúbrio-corpo do esterno) é referência anatômica importante. Qual associação está correta?",
    opcoes: [
      "A) Corresponde à altura aproximada de T1–T2 e ao início da veia cava inferior.",
      "B) Marca a 2ª costela, a carina traqueal (bifurcação) em T4–T5 e serve de referência para contagem costal.",
      "C) Indica exclusivamente o nível do hiato esofágico no diafragma.",
      "D) Corresponde ao ponto de punção do pericárdio na paracentese sem ultrassom.",
    ],
    correta: 1,
    dificuldade: 1,
    modulo: 2,
    explicacao_geral:
      "O ângulo esternal (ângulo de Luís) projeta-se na altura de T4–T5, marca a 2ª costela e a bifurcação traqueal (carina).",
    explicacoes_opcoes: {
      A: "Nível torácico e estruturas associadas estão incorretos para o ângulo de Luís.",
      B: "Correto: 2ª costela + carina (T4–T5) + referência para contar costelas.",
      C: "O hiato esofágico não é a principal correlação pedida na aula.",
      D: "Não descreve a função clássica do ângulo de Luís na propedêutica torácica.",
    },
    explicacao:
      "Resumo: Ângulo de Luís = 2ª costela + carina.\nA) INCORRETA.\nB) CORRETA.\nC) INCORRETA.\nD) INCORRETA.",
  }),
  Q({
    id: 1023,
    materia: "bmf2",
    tema: "bmf2_a10",
    enunciado:
      "Qual característica diferencia a pleura visceral da parietal no contexto da dor?",
    opcoes: [
      "A) A pleura parietal é insensível; a visceral é rica em nociceptores.",
      "B) A pleura visceral adere ao pulmão e é insensível; a parietal é dolorosa (intercostais e frênico).",
      "C) Ambas são igualmente sensíveis à dor em condições normais.",
      "D) Somente a pleura visceral é inervada pelo nervo frênico.",
    ],
    correta: 1,
    dificuldade: 1,
    modulo: 2,
    explicacao_geral:
      "A pleura visceral acompanha o pulmão e não gera dor; a parietal é sensível (intercostais, frênico na parte mediastinal/diafragmática).",
    explicacoes_opcoes: {
      A: "Inverte as propriedades sensitivas.",
      B: "Correto.",
      C: "Incorreto: há diferença clara de inervação e sensibilidade.",
      D: "O frênico inerva parte da pleura parietal (ex.: mediastinal/diafragmática), não define só a visceral.",
    },
    explicacao:
      "Resumo: Dor pleurítica costuma ser parietal.\nA) INCORRETA.\nB) CORRETA.\nC) INCORRETA.\nD) INCORRETA.",
  }),
  Q({
    id: 1024,
    materia: "bmf2",
    tema: "bmf2_a10",
    enunciado:
      "Em drenagem torácica, o feixe neurovascular intercostal corre na borda inferior da costela. Onde a agulha/dreno deve ser inserido para reduzir lesão vascular?",
    opcoes: [
      "A) Na borda inferior da mesma costela, seguindo o sulco costal.",
      "B) Na borda superior da costela imediatamente abaixo à via de escolha.",
      "C) No ápice pulmonar, independentemente do nível costal.",
      "D) No espaço intercostal anterior, sem relação com a borda da costela.",
    ],
    correta: 1,
    dificuldade: 2,
    modulo: 2,
    explicacao_geral:
      "Artéria, veia e nervo ficam na borda inferior da costela de cima; a punção visa a borda superior da costela abaixo para evitar o feixe.",
    explicacoes_opcoes: {
      A: "A borda inferior da costela é justamente onde corre o feixe — risco de lesão.",
      B: "Correto: borda superior da costela abaixo.",
      C: "O ápice não responde à regra do feixe neurovascular intercostal.",
      D: "A relação com a borda costal é exatamente o ponto da questão.",
    },
    explicacao:
      "Resumo: Evitar a borda inferior onde passa o feixe.\nA) INCORRETA.\nB) CORRETA.\nC) INCORRETA.\nD) INCORRETA.",
  }),
  Q({
    id: 1025,
    materia: "bmf2",
    tema: "bmf2_a10",
    enunciado:
      "Qual afirmação sobre a árvore traqueobronquial e as zonas funcionalis está correta?",
    opcoes: [
      "A) Os bronquíolos respiratórios pertencem à zona de condução (gerações 0–16).",
      "B) A zona de condução não realiza troca gasosa e contribui para o espaço morto anatômico (~150 mL em adulto de referência).",
      "C) O espaço morto anatômico é formado apenas pelos alvéolos não perfundidos.",
      "D) A zona de troca inicia nos bronquíolos terminais, antes dos alvéolos.",
    ],
    correta: 1,
    dificuldade: 2,
    modulo: 2,
    explicacao_geral:
      "Condução = gerações 0–16, sem troca, ~150 mL de espaço morto; troca = 17–23 com bronquíolos respiratórios e alvéolos.",
    explicacoes_opcoes: {
      A: "Bronquíolos respiratórios já têm alvéolos nas paredes — zona de troca.",
      B: "Correto.",
      C: "Alvéolos não perfundidos configuram componente de espaço morto fisiológico/alveolar, não o anatômico clássico.",
      D: "Bronquíolo terminal ainda é condução; a troca começa nos respiratórios (17+).",
    },
    explicacao:
      "Resumo: Zona de condução = sem troca + espaço morto anatômico.\nA) INCORRETA.\nB) CORRETA.\nC) INCORRETA.\nD) INCORRETA.",
  }),
  Q({
    id: 1026,
    materia: "bmf2",
    tema: "bmf2_a10",
    enunciado:
      "Recém-nascido prematuro com trabalho respiratório progressivo e radiografia com aspecto de membrana hialina. Qual mecanismo central explica a síndrome do desconforto respiratório neonatal (SDRN)?",
    opcoes: [
      "A) Pneumotórax espontâneo com pressão intrapleural positiva.",
      "B) Deficiência de surfactante com colapso alveolar recorrente e insuficiência respiratória.",
      "C) Obstrução de via aérea superior por aspiração de mecônio exclusivamente.",
      "D) Hipertrofia de musculatura lisa brônquica sem alteração alveolar.",
    ],
    correta: 1,
    dificuldade: 2,
    modulo: 2,
    explicacao_geral:
      "SDRN/doença da membrana hialina associa-se à deficiência de surfactante em prematuros; surfactante reduz tensão superficial e evita atelectasia.",
    explicacoes_opcoes: {
      A: "Pneumotórax é outro mecanismo (ar na cavidade pleural).",
      B: "Correto: surfactante insuficiente → colapso alveolar.",
      C: "Mecônio pode causar outras síndromes; não é o núcleo da SDRN clássica.",
      D: "O problema central na SDRN é alveolar/surfactante, não só brônquico.",
    },
    explicacao:
      "Resumo: SDRN = falta de surfactante.\nA) INCORRETA.\nB) CORRETA.\nC) INCORRETA.\nD) INCORRETA.",
  }),
  Q({
    id: 1027,
    materia: "bmf2",
    tema: "bmf2_a10",
    enunciado:
      "Sobre o surfactante pulmonar e os pneumócitos, qual alternativa está correta?",
    opcoes: [
      "A) O surfactante é produzido principalmente pelos pneumócitos tipo I, que cobrem a maior parte da superfície alveolar.",
      "B) A DPPC é um fosfolipídio importante do surfactante, produzido pelos pneumócitos tipo II.",
      "C) Os pneumócitos tipo II cobrem ~95% da superfície alveolar e são os principais responsáveis pela difusão de O₂.",
      "D) O surfactante aumenta a tensão superficial para manter alvéolos pequenos mais estáveis.",
    ],
    correta: 1,
    dificuldade: 2,
    modulo: 2,
    explicacao_geral:
      "Pneumócito II produz surfactante (DPPC, proteínas); tipo I é fino e cobre ~95% da área para difusão. Surfactante reduz tensão superficial.",
    explicacoes_opcoes: {
      A: "Tipo I não produz surfactante de forma principal; tipo II sim.",
      B: "Correto.",
      C: "Quem cobre ~95% da superfície para difusão é o tipo I; tipo II é ~5% da área mas numeroso e secretor.",
      D: "Surfactante reduz tensão superficial, não aumenta.",
    },
    explicacao:
      "Resumo: Tipo II = surfactante; DPPC.\nA) INCORRETA.\nB) CORRETA.\nC) INCORRETA.\nD) INCORRETA.",
  }),
  Q({
    id: 1028,
    materia: "bmf2",
    tema: "bmf2_a10",
    enunciado:
      "Qual estrutura do mediastino está tipicamente relacionada ao compartimento superior (acima do plano de T4)?",
    opcoes: [
      "A) Apenas o pericárdio e o ventrículo direito.",
      "B) Arco aórtico, traqueia, porção superior do esôfago e veia cava superior.",
      "C) Somente o esôfago abdominal e o ducto pancreático.",
      "D) Exclusivamente a base pulmonar e o recesso costodiafragmático.",
    ],
    correta: 1,
    dificuldade: 2,
    modulo: 2,
    explicacao_geral:
      "Mediastino superior (acima de T4): arco aórtico, traqueia, esôfago (porção superior), timo, VCS, entre outras estruturas.",
    explicacoes_opcoes: {
      A: "Coração/pericárdio predominam no mediastino médio.",
      B: "Correto.",
      C: "Estruturas abdominais/pancreáticas não compõem o mediastino superior.",
      "D": "Base pulmonar não define o mediastino superior dessa forma.",
    },
    explicacao:
      "Resumo: Mediastino superior = grandes vias e arco aórtico.\nA) INCORRETA.\nB) CORRETA.\nC) INCORRETA.\nD) INCORRETA.",
  }),
  Q({
    id: 1029,
    materia: "bmf2",
    tema: "bmf2_a10",
    enunciado:
      "Homem com dor torácica súbita e dispneia após trauma fechado. RX mostra pneumotórax. Qual mudança na pressão intrapleural explica o colapso pulmonar?",
    opcoes: [
      "A) A pressão intrapleural torna-se mais negativa, hiperinsuflando o pulmão.",
      "B) O ar no espaço pleural elimina o gradiente favorável; a pressão deixa de ser subatmosférica e o pulmão tende a colapsar.",
      "C) A pressão intrapleural permanece em −8 cmH₂O sem alteração.",
      "D) Apenas a pressão alveolar negativa aumenta, sem afetar o espaço pleural.",
    ],
    correta: 1,
    dificuldade: 3,
    modulo: 2,
    explicacao_geral:
      "Em repouso a pressão intrapleural é subatmosférica (~−5 cmH₂O), mantendo o pulmão expandido; no pneumotórax o ar equaliza a pressão e o pulmão colapsa.",
    explicacoes_opcoes: {
      A: "No pneumotórax não há hiperinsuflação por maior negatividade intrapleural.",
      B: "Correto: perda da pressão negativa relativa no espaço pleural.",
      C: "Há alteração quando o espaço pleural comunica com o ambiente ou acumula ar.",
      D: "O mecanismo central é a mudança na dinâmica pleural, não só alveolar isolada.",
    },
    explicacao:
      "Resumo: Negatividade intrapleural sustenta expansão; pneumotórax rompe isso.\nA) INCORRETA.\nB) CORRETA.\nC) INCORRETA.\nD) INCORRETA.",
  }),
  Q({
    id: 1030,
    materia: "bmf2",
    tema: "bmf2_a10",
    enunciado:
      "Gestante com risco de parto prematuro entre 24 e 34 semanas recebe corticosteróide pré-natal. Qual efeito pulmonar fetal é mais diretamente esperado segundo a aula?",
    opcoes: [
      "A) Bloqueio permanente da produção de lecitina pelo fígado fetal.",
      "B) Aceleração da maturação pulmonar e do surfactante (ex.: betametasona).",
      "C) Indução imediata de fibrose interstiral nos alvéolos fetais.",
      "D) Conversão dos pneumócitos tipo II em exclusivamente células ciliadas traqueais.",
    ],
    correta: 1,
    dificuldade: 3,
    modulo: 2,
    explicacao_geral:
      "Corticosteróide pré-natal acelera maturação do surfactante fetal; L/E ≥ 2 indica maturidade pulmonar em avaliação de líquido amniótico.",
    explicacoes_opcoes: {
      A: "O objetivo é maturação, não bloqueio da síntese de surfactante.",
      B: "Correto.",
      C: "Não é o efeito pretendido da profilaxia com corticoide.",
      D: "Sem fundamento: não há essa conversão celular descrita.",
    },
    explicacao:
      "Resumo: Corticoide pré-natal matura pulmão fetal.\nA) INCORRETA.\nB) CORRETA.\nC) INCORRETA.\nD) INCORRETA.",
  }),
  Q({
    id: 1031,
    materia: "bmf2",
    tema: "bmf2_a10",
    enunciado:
      "Em relação à classificação das costelas (verdadeiras, falsas, flutuantes), qual conjunto está corretamente descrito?",
    opcoes: [
      "A) Todas as 12 pares articulam-se diretamente com o esterno por cartilagem própria.",
      "B) Costelas 1–7 são verdadeiras; 8–10 são falsas; 11–12 são flutuantes (sem articulação anterior).",
      "C) Costelas 1–10 são flutuantes e apenas 11–12 são verdadeiras.",
      "D) Costelas falsas não se ligam à 7ª costela de forma alguma.",
    ],
    correta: 1,
    dificuldade: 3,
    modulo: 2,
    explicacao_geral:
      "1–7 verdadeiras (ligação direta ao esterno); 8–10 falsas (indiretas via cartilagem da 7ª); 11–12 flutuantes sem articulação anterior.",
    explicacoes_opcoes: {
      A: "As flutuantes não articulam anteriormente com o esterno.",
      B: "Correto.",
      C: "Inverte a classificação.",
      D: "As falsas 8–10 articulam-se indiretamente via cadeia cartilaginosa da 7ª.",
    },
    explicacao:
      "Resumo: 1–7 verdadeiras; 8–10 falsas; 11–12 flutuantes.\nA) INCORRETA.\nB) CORRETA.\nC) INCORRETA.\nD) INCORRETA.",
  }),
];

// ——— bmf2_a11 — Histologia do sistema respiratório — ids 1032–1041
module.exports.bmf2_a11 = [
  Q({
    id: 1032,
    materia: "bmf2",
    tema: "bmf2_a11",
    enunciado:
      "Qual tipo de epitélio reveste tipicamente a mucosa da traqueia e dos brônquios de grande calibre em condições normais?",
    opcoes: [
      "A) Epitélio simples pavimentoso estratificado queratinizado.",
      "B) Epitélio pseudoestratificado colunar ciliado com células caliciformes (epitélio respiratório).",
      "C) Epitélio colunar simples não ciliado exclusivamente, sem células mucosas.",
      "D) Epitélio transição exclusivamente, sem cílios.",
    ],
    correta: 1,
    dificuldade: 1,
    modulo: 2,
    explicacao_geral:
      "O epitélio respiratório é pseudoestratificado colunar ciliado com caliciformes; permite clearance mucociliar.",
    explicacoes_opcoes: {
      A: "Não é o padrão da traqueia/brônquios normais.",
      B: "Correto.",
      C: "Há cílios e caliciformes na porção típica das vias condutoras maiores.",
      D: "Epitélio de transição não caracteriza a traqueia.",
    },
    explicacao:
      "Resumo: Epitélio respiratório clássico.\nA) INCORRETA.\nB) CORRETA.\nC) INCORRETA.\nD) INCORRETA.",
  }),
  Q({
    id: 1033,
    materia: "bmf2",
    tema: "bmf2_a11",
    enunciado:
      "Na traqueia, a cartilagem hialina apresenta formato clássico em qual configuração?",
    opcoes: [
      "A) Anéis completos circulares fechados em 360° em toda a circunferência.",
      "B) Anéis em forma de C (ferradura) com parede posterior completada por músculo liso traqueal.",
      "C) Placas isoladas apenas no terço inferior, sem continuidade.",
      "D) Ausência total de cartilagem, substituída por osso hioide.",
    ],
    correta: 1,
    dificuldade: 1,
    modulo: 2,
    explicacao_geral:
      "Anéis em C de cartilagem hialina; face posterior com músculo traqueal (permite acomodação do esôfago na deglutição).",
    explicacoes_opcoes: {
      A: "Não são anéis completos como um anel fechado.",
      B: "Correto.",
      C: "A descrição dos anéis em C aplica-se ao padrão clássico.",
      D: "Há cartilagem hialina característica na traqueia.",
    },
    explicacao:
      "Resumo: Traqueia = anéis em C.\nA) INCORRETA.\nB) CORRETA.\nC) INCORRETA.\nD) INCORRETA.",
  }),
  Q({
    id: 1034,
    materia: "bmf2",
    tema: "bmf2_a11",
    enunciado:
      "Ao descer a árvore brônquica, o que ocorre com a cartilagem hialina e as células caliciformes nos bronquíolos?",
    opcoes: [
      "A) A cartilagem aumenta e as caliciformes proliferam nos bronquíolos.",
      "B) A cartilagem desaparece nos bronquíolos; as caliciformes também desaparecem e o músculo liso torna-se proeminente.",
      "C) Os bronquíolos passam a ter apenas epitélio estratificado queratinizado.",
      "D) A cartilagem é substituída por osso esponjoso nas gerações terminais.",
    ],
    correta: 1,
    dificuldade: 2,
    modulo: 2,
    explicacao_geral:
      "Bronquíolos não têm cartilagem nem caliciformes; musculatura lisa é proeminente; epitélio simplifica.",
    explicacoes_opcoes: {
      A: "Ocorre o oposto: redução/desaparecimento de cartilagem e caliciformes.",
      B: "Correto.",
      C: "Não é o padrão histológico normal dos bronquíolos.",
      D: "Não há ossificação típica nesse contexto.",
    },
    explicacao:
      "Resumo: Bronquíolo = sem cartilagem, sem caliciformes, muito músculo liso.\nA) INCORRETA.\nB) CORRETA.\nC) INCORRETA.\nD) INCORRETA.",
  }),
  Q({
    id: 1035,
    materia: "bmf2",
    tema: "bmf2_a11",
    enunciado:
      "As células de Clara (Club) dos bronquíolos terminais são melhor caracterizadas por:",
    opcoes: [
      "A) Secretarem muco abundante como as células caliciformes dos brônquios.",
      "B) Serem células secretoras não caliciformes, associadas a proteínas surfactantes e funções de defesa/reparo.",
      "C) Serem exclusivamente neuroendócrinas produtoras de insulina.",
      "D) Substituírem totalmente os pneumócitos tipo I na membrana alvéolo-capilar.",
    ],
    correta: 1,
    dificuldade: 2,
    modulo: 2,
    explicacao_geral:
      "Células de Clara são dos bronquíolos terminais; secretam produtos incluindo componentes relacionados a surfactante; não são caliciformes mucosas.",
    explicacoes_opcoes: {
      A: "Caliciformes são típicas de vias maiores; Clara não é caliciforme mucosa.",
      B: "Correto.",
      C: "Sem relação com insulina.",
      D: "Pneumócito I é alveolar, não função das células de Clara.",
    },
    explicacao:
      "Resumo: Clara = bronquíolo terminal, secreção/proteção.\nA) INCORRETA.\nB) CORRETA.\nC) INCORRETA.\nD) INCORRETA.",
  }),
  Q({
    id: 1036,
    materia: "bmf2",
    tema: "bmf2_a11",
    enunciado:
      "Qual afirmação sobre a membrana alvéolo-capilar está correta?",
    opcoes: [
      "A) Em condições normais, a barreira combinada costuma ser da ordem de ~0,5 µm de espessura, favorecendo difusão rápida.",
      "B) A espessura é tipicamente de 5–10 mm, irrelevante para a troca gasosa.",
      "C) Somente o endotélio capilar participa; o epitélio alveolar é dispensável.",
      "D) A membrana é impermeável ao O₂ por presença de surfactante.",
    ],
    correta: 0,
    dificuldade: 2,
    modulo: 2,
    explicacao_geral:
      "Membrana alvéolo-capilar muito fina (~0,5 µm); espessamento (edema, fibrose) prejudica difusão.",
    explicacoes_opcoes: {
      A: "Correto.",
      B: "Ordem de grandeza incorreta e implicação errada.",
      C: "O epitélio (pneumócito I) e membranas basais participam.",
      D: "Surfactante reduz tensão superficial, não torna a membrana impermeável ao O₂.",
    },
    explicacao:
      "Resumo: Barreira fina = difusão eficiente.\nA) CORRETA.\nB) INCORRETA.\nC) INCORRETA.\nD) INCORRETA.",
  }),
  Q({
    id: 1037,
    materia: "bmf2",
    tema: "bmf2_a11",
    enunciado:
      "Paciente fumante com macrófagos alveolares repletos de pigmento escuro ao estudo anatomopatológico. Qual termo descreve esse achado relacionado ao carbono?",
    opcoes: [
      "A) Hemossiderose pulmonar por depósito de ferro.",
      "B) Antracose (acúmulo de partículas de carbono).",
      "C) Amiloidose alveolar primária.",
      "D) Mesotelioma pleural por asbesto exclusivamente intra-alveolar.",
    ],
    correta: 1,
    dificuldade: 2,
    modulo: 2,
    explicacao_geral:
      "Macrófagos alveolares com carbono → antracose; tabagismo/poluição. Difere de siderose (ferro).",
    explicacoes_opcoes: {
      A: "Siderose relaciona-se a ferro, não carbono.",
      B: "Correto.",
      C: "Amiloide não é o achado descrito.",
      D: "Mesotelioma é tumor do mesotélio pleural; o enunciado descreve pigmento em macrófagos alveolares.",
    },
    explicacao:
      "Resumo: Carbono em macrófago = antracose.\nA) INCORRETA.\nB) CORRETA.\nC) INCORRETA.\nD) INCORRETA.",
  }),
  Q({
    id: 1038,
    materia: "bmf2",
    tema: "bmf2_a11",
    enunciado:
      "Qual par compara corretamente pneumócito tipo I e tipo II?",
    opcoes: [
      "A) Tipo I: cúbico, corpos lamelares, surfactante; tipo II: escamoso fino, 95% da superfície.",
      "B) Tipo I: muito fino, ~95% da superfície alveolar, difusão; tipo II: cúbico, corpos lamelares, produz surfactante e atua como célula-tronco alveolar.",
      "C) Ambos são exclusivamente produtores de muco caliciforme.",
      "D) Tipo II cobre 95% da superfície e não divide; tipo I prolifera após lesão.",
    ],
    correta: 1,
    dificuldade: 2,
    modulo: 2,
    explicacao_geral:
      "Tipo I: fino, 95% área, difusão; pouca divisão. Tipo II: surfactante, corpos lamelares, prolifera e pode diferenciar em tipo I.",
    explicacoes_opcoes: {
      A: "Inverte os papéis.",
      B: "Correto.",
      C: "Nenhum é caliciforme mucoso.",
      D: "Quem prolifera após lesão é mais o tipo II.",
    },
    explicacao:
      "Resumo: I = difusão; II = surfactante e reparo.\nA) INCORRETA.\nB) CORRETA.\nC) INCORRETA.\nD) INCORRETA.",
  }),
  Q({
    id: 1039,
    materia: "bmf2",
    tema: "bmf2_a11",
    enunciado:
      "Homem com exposição ocupacional a amianto e derrame pleural. Qual neoplasia se associa classicamente ao mesotélio pleural?",
    opcoes: [
      "A) Adenocarcinoma de próstata metastático exclusivo.",
      "B) Mesotelioma maligno da pleura.",
      "C) Carcinoma medular de tireoide.",
      "D) Linfoma de Hodgkin primário do miocárdio direito.",
    ],
    correta: 1,
    dificuldade: 3,
    modulo: 2,
    explicacao_geral:
      "Mesotelioma é tumor do mesotélio (pleura), fortemente ligado a asbesto; difere de carcinoma broncogênico do epitélio respiratório.",
    explicacoes_opcoes: {
      A: "Não é a associação clássica pleural com amianto.",
      B: "Correto.",
      C: "Sem relação direta com o quadro pleural/amianto.",
      D: "Não responde ao enunciado.",
    },
    explicacao:
      "Resumo: Asbesto → mesotelioma pleural.\nA) INCORRETA.\nB) CORRETA.\nC) INCORRETA.\nD) INCORRETA.",
  }),
  Q({
    id: 1040,
    materia: "bmf2",
    tema: "bmf2_a11",
    enunciado:
      "Na bronquite crônica do fumante, qual achado histológico glandular é classicamente quantificado pelo índice de Reid?",
    opcoes: [
      "A) Espessamento da membrana basal brônquica com hipertrofia de glândulas submucosas (índice > 0,5).",
      "B) Destruição isolada de septos alveolares sem muco.",
      "C) Metaplasia óssea no parênquima pulmonar.",
      "D) Ausência total de musculatura lisa brônquica.",
    ],
    correta: 0,
    dificuldade: 3,
    modulo: 2,
    explicacao_geral:
      "Bronquite crônica: hipertrofia de glândulas submucosas; índice de Reid > 0,5 (espessura glandular/espessura da parede). Enfisema é destruição alveolar.",
    explicacoes_opcoes: {
      A: "Correto.",
      B: "Descreve mais enfisema que bronquite crônica.",
      C: "Não é o achado clássico citado.",
      D: "Há aumento relativo de músculo liso em muitas condições obstrutivas, não ausência.",
    },
    explicacao:
      "Resumo: Reid > 0,5 = hipertrofia glandular na bronquite crônica.\nA) CORRETA.\nB) INCORRETA.\nC) INCORRETA.\nD) INCORRETA.",
  }),
  Q({
    id: 1041,
    materia: "bmf2",
    tema: "bmf2_a11",
    enunciado:
      "Paciente com metaplasia escamosa do epitélio respiratório por tabagismo. Qual implicação é mais coerente com a aula?",
    opcoes: [
      "A) É processo benigno sem relevância oncológica.",
      "B) Representa alteração pré-neoplásica associada a carcinoma epidermoide central em contexto de tabagismo.",
      "C) Garante reversão automática ao cessar o tabaco em 100% dos casos em uma semana.",
      "D) Indica sempre tuberculose ativa no ápice pulmonar.",
    ],
    correta: 1,
    dificuldade: 3,
    modulo: 2,
    explicacao_geral:
      "Metaplasia escamosa do epitélio respiratório é clássica no tabagismo e associa-se a risco de carcinoma epidermoide (central).",
    explicacoes_opcoes: {
      A: "Há implicação de risco aumentado, não ‘sem relevância’.",
      B: "Correto.",
      C: "A reversibilidade não é garantida nem imediata assim.",
      D: "TB tem outra fisiopatologia; não é consequência direta da metaplasia escamosa isolada.",
    },
    explicacao:
      "Resumo: Metaplasia escamosa + tabaco → risco de carcinoma escamoso.\nA) INCORRETA.\nB) CORRETA.\nC) INCORRETA.\nD) INCORRETA.",
  }),
];

// ——— bmf2_a12 — Volumes, capacidades, mecânica pulmonar — ids 1042–1051
module.exports.bmf2_a12 = [
  Q({
    id: 1042,
    materia: "bmf2",
    tema: "bmf2_a12",
    enunciado:
      "Qual volume pulmonar NÃO pode ser medido diretamente pela espirometria convencional?",
    opcoes: [
      "A) Volume corrente (VT).",
      "B) Volume residual (VR).",
      "C) Volume de reserva expiratório (VRE).",
      "D) Volume de reserva inspiratório (VRI).",
    ],
    correta: 1,
    dificuldade: 1,
    modulo: 2,
    explicacao_geral:
      "O VR permanece após expiração máxima e não é expulsável; requer diluição de hélio ou pletismografia corporal.",
    explicacoes_opcoes: {
      A: "VT é medido na espirometria.",
      B: "Correto: VR não sai na expiração máxima mensurável só pelo espirômetro.",
      C: "VRE é acessível na manobra espirométrica.",
      D: "VRI também é estimável com manobras.",
    },
    explicacao:
      "Resumo: VR não medido por espirometria simples.\nA) INCORRETA.\nB) CORRETA.\nC) INCORRETA.\nD) INCORRETA.",
  }),
  Q({
    id: 1043,
    materia: "bmf2",
    tema: "bmf2_a12",
    enunciado:
      "A capacidade pulmonar total (CPT) corresponde a qual soma?",
    opcoes: [
      "A) Apenas VRI + VT.",
      "B) Capacidade vital (CV) + volume residual (VR).",
      "C) Somente VT + VR.",
      "D) VRE isoladamente.",
    ],
    correta: 1,
    dificuldade: 1,
    modulo: 2,
    explicacao_geral:
      "CPT = CV + VR; CV = VRI + VT + VRE.",
    explicacoes_opcoes: {
      A: "Falta VR e componentes da CV.",
      B: "Correto.",
      C: "Incompleto para CPT.",
      D: "Insuficiente.",
    },
    explicacao:
      "Resumo: CPT = CV + VR.\nA) INCORRETA.\nB) CORRETA.\nC) INCORRETA.\nD) INCORRETA.",
  }),
  Q({
    id: 1044,
    materia: "bmf2",
    tema: "bmf2_a12",
    enunciado:
      "Em espirometria, o critério numérico clássico de obstrução ao fluxo aéreo em adultos é:",
    opcoes: [
      "A) Relação VEF₁/CVF ≥ 0,80.",
      "B) Relação VEF₁/CVF < 0,70 (após broncodilatador na definição clínica completa).",
      "C) CPT elevada isoladamente, sem relação com VEF₁.",
      "D) VR abaixo de 50 mL.",
    ],
    correta: 1,
    dificuldade: 2,
    modulo: 2,
    explicacao_geral:
      "Obstrução: relação VEF₁/CVF < 0,70 (valor de referência comum ≥ 0,70); na prática usa-se critério com broncodilatador para diagnóstico de DPOC.",
    explicacoes_opcoes: {
      A: "≥0,80 não indica obstrução pelo critério usual.",
      B: "Correto: relação diminuída define obstrução.",
      C: "CPT ajuda em restrição; obstrução centra na relação.",
      D: "VR não define obstrução dessa forma.",
    },
    explicacao:
      "Resumo: VEF₁/CVF baixo = obstrutivo.\nA) INCORRETA.\nB) CORRETA.\nC) INCORRETA.\nD) INCORRETA.",
  }),
  Q({
    id: 1045,
    materia: "bmf2",
    tema: "bmf2_a12",
    enunciado:
      "Paciente com fibrose pulmonar apresenta pulmão ‘rígido’. Qual parâmetro mecânico está tipicamente reduzido?",
    opcoes: [
      "A) Complacência pulmonar (facilidade de expansão).",
      "B) Espaço morto anatômico aumentado por destruição de traqueia.",
      "C) Volume residual zerado.",
      "D) Elastância diminuída de modo que o pulmão fica ‘flácido’.",
    ],
    correta: 0,
    dificuldade: 2,
    modulo: 2,
    explicacao_geral:
      "Fibrose: baixa complacência (difícil expandir), alta elastância; oposto ao enfisema (alta complacência).",
    explicacoes_opcoes: {
      A: "Correto: complacência ↓ na fibrose.",
      B: "Não é o mecanismo central descrito.",
      C: "VR não zera na fibrose típica.",
      D: "Na fibrose a elastância tende a aumentar (complacência cai).",
    },
    explicacao:
      "Resumo: Fibrose = baixa complacência.\nA) CORRETA.\nB) INCORRETA.\nC) INCORRETA.\nD) INCORRETA.",
  }),
  Q({
    id: 1046,
    materia: "bmf2",
    tema: "bmf2_a12",
    enunciado:
      "Na expiração tranquila de um indivíduo saudável, qual descrição é mais adequada?",
    opcoes: [
      "A) Contração vigorosa dos abdominais é obrigatória.",
      "B) Expiração passiva por recoil elástico pulmonar e da parede torácica, sem contração ativa principal.",
      "C) Ativação predominante dos intercostais internos em repouso.",
      "D) Dependência exclusiva do diafragma para expelir o ar.",
    ],
    correta: 1,
    dificuldade: 2,
    modulo: 2,
    explicacao_geral:
      "Expiração tranquila é passiva; forçada recruta abdominais e intercostais internos.",
    explicacoes_opcoes: {
      A: "Abdominais são mais forçada/intensa.",
      B: "Correto.",
      C: "Intercostais internos são mais expiração forçada.",
      D: "Diafragma é principal inspiratório, não expulsor na tranquilidade.",
    },
    explicacao:
      "Resumo: Expiração calma = passiva.\nA) INCORRETA.\nB) CORRETA.\nC) INCORRETA.\nD) INCORRETA.",
  }),
  Q({
    id: 1047,
    materia: "bmf2",
    tema: "bmf2_a12",
    enunciado:
      "Segundo a lei de Laplace para alvéolos, o surfactante contribui para a estabilidade porque:",
    opcoes: [
      "A) Aumenta a tensão superficial nos alvéolos pequenos.",
      "B) Reduz a tensão superficial de forma que alvéolos menores não fiquem com pressão de recolhimento desproporcionalmente maior.",
      "C) Elimina completamente a curva pressão-volume pulmonar.",
      "D) Troca o O₂ por CO₂ no alvéolo.",
    ],
    correta: 1,
    dificuldade: 2,
    modulo: 2,
    explicacao_geral:
      "P = 2γ/r; sem surfactante, r menor implicaria P maior. Surfactante reduz γ especialmente em alvéolos pequenos, estabilizando.",
    explicacoes_opcoes: {
      A: "Surfactante reduz tensão superficial, não aumenta.",
      B: "Correto.",
      C: "Não elimina histerese ou curva P-V.",
      D: "Isso é troca gasosa, não mecânica de tensão superficial.",
    },
    explicacao:
      "Resumo: Surfactante ↓ γ → estabilidade alveolar.\nA) INCORRETA.\nB) CORRETA.\nC) INCORRETA.\nD) INCORRETA.",
  }),
  Q({
    id: 1048,
    materia: "bmf2",
    tema: "bmf2_a12",
    enunciado:
      "Qual expressão estima a ventilação alveolar por minuto (valores de referência da aula: VT ~500 mL, espaço morto ~150 mL, FR ~12/min)?",
    opcoes: [
      "A) VT × FR, ignorando espaço morto.",
      "B) (VT − espaço morto) × FR.",
      "C) VR × FR exclusivamente.",
      "D) CPT × FR sem subtrair nada.",
    ],
    correta: 1,
    dificuldade: 2,
    modulo: 2,
    explicacao_geral:
      "Ventilação alveolar = (VT − VD) × FR; apenas o ar que chega aos alvéolos participa da troca efetiva.",
    explicacoes_opcoes: {
      A: "Ventilação minuto total, não alveolar.",
      B: "Correto.",
      C: "VR não entra assim na fórmula da ventilação alveolar.",
      D: "CPT não substitui a lógica VT−VD.",
    },
    explicacao:
      "Resumo: Alveolar = (VT − VD) × FR.\nA) INCORRETA.\nB) CORRETA.\nC) INCORRETA.\nD) INCORRETA.",
  }),
  Q({
    id: 1049,
    materia: "bmf2",
    tema: "bmf2_a12",
    enunciado:
      "Paciente com DPOC apresenta hiperinsuflação com aumento de VR e possível elevação da CPT. Qual mecanismo está mais alinhado à aula?",
    opcoes: [
      "A) Aumento da complacência por destruição do tecido elástico (enfisema) com air trapping.",
      "B) Redução extrema da complacência como na fibrose pulmonar idiopática.",
      "C) Resolução completa do espaço morto anatômico.",
      "D) Ausência de retenção de ar ao final da expiração.",
    ],
    correta: 0,
    dificuldade: 3,
    modulo: 2,
    explicacao_geral:
      "Enfisema/DPOC: perda de elasticidade, complacência aumentada, air trapping, VR e CPT podem subir.",
    explicacoes_opcoes: {
      A: "Correto.",
      B: "Fibrose reduz CPT e complacência — padrão restritivo.",
      C: "Espaço morto anatômico não desaparece.",
      D: "Air trapping implica retenção, não ausência.",
    },
    explicacao:
      "Resumo: DPOC/enfisema → complacência ↑, trapping.\nA) CORRETA.\nB) INCORRETA.\nC) INCORRETA.\nD) INCORRETA.",
  }),
  Q({
    id: 1050,
    materia: "bmf2",
    tema: "bmf2_a12",
    enunciado:
      "Na asma, critérios de reversibilidade significativa pós-broncodilatador frequentemente citados incluem melhora do VEF₁ de pelo menos:",
    opcoes: [
      "A) ≥ 12% e ≥ 200 mL em relação ao valor pré-broncodilatador.",
      "B) 2% e 20 mL.",
      "C) 50% sem limiar absoluto em mL.",
      "D) Apenas aumento da CPT sem mudança do VEF₁.",
    ],
    correta: 0,
    dificuldade: 3,
    modulo: 2,
    explicacao_geral:
      "Reversibilidade na asma: aumento do VEF₁ ≥ 12% e ≥ 200 mL após broncodilatador (valores usuais de prova).",
    explicacoes_opcoes: {
      A: "Correto.",
      B: "Limiar muito baixo, não corresponde ao critério.",
      C: "Faltam os limiares percentual e absoluto usuais em conjunto.",
      D: "O foco típico é VEF₁ e relação, não CPT isolada.",
    },
    explicacao:
      "Resumo: Reversibilidade asma — ≥12% e ≥200 mL no VEF₁.\nA) CORRETA.\nB) INCORRETA.\nC) INCORRETA.\nD) INCORRETA.",
  }),
  Q({
    id: 1051,
    materia: "bmf2",
    tema: "bmf2_a12",
    enunciado:
      "O nervo frênico inerva o diafragma em níveis medulares aproximados de:",
    opcoes: [
      "A) C8–T1.",
      "B) C3–C5.",
      "C) L2–L4.",
      "D) S2–S4.",
    ],
    correta: 1,
    dificuldade: 3,
    modulo: 2,
    explicacao_geral:
      "Diafragma: nervo frênico (C3–C5) — ‘C3,4,5 mantém o diaphragm alive’.",
    explicacoes_opcoes: {
      A: "Níveis típicos de outras funções (ex.: mão inferior).",
      B: "Correto.",
      C: "Plexo lombar/femoral, não frênico.",
      D: "Nervos pélvicos/parassimpático sacral, não frênico.",
    },
    explicacao:
      "Resumo: Frênico = C3–C5.\nA) INCORRETA.\nB) CORRETA.\nC) INCORRETA.\nD) INCORRETA.",
  }),
];

// ——— bmf2_a13 — Trocas gasosas, V/Q — ids 1052–1061
module.exports.bmf2_a13 = [
  Q({
    id: 1052,
    materia: "bmf2",
    tema: "bmf2_a13",
    enunciado:
      "Segundo a lei de Fick, a taxa de difusão de um gás através da membrana alvéolo-capilar é diretamente proporcional a:",
    opcoes: [
      "A) Espessura da membrana e inversamente à área alveolar.",
      "B) Área de superfície e gradiente de pressão parcial, e inversamente proporcional à espessura.",
      "C) Massa molecular do gás elevada ao quadrado, sem influência do gradiente.",
      "D) Apenas da hemoglobina, independentemente do gradiente alveolo-capilar.",
    ],
    correta: 1,
    dificuldade: 1,
    modulo: 2,
    explicacao_geral:
      "V̇gas ∝ A·D·(P1−P2)/T — maior área e gradiente aumentam difusão; maior espessura reduz.",
    explicacoes_opcoes: {
      A: "Inverte a relação com área e espessura.",
      B: "Correto.",
      C: "O coeficiente D depende de solubilidade/MM, mas o enunciado ignora gradiente indevidamente.",
      D: "Hb transporta, mas a lei de Fick na membrana envolve gradiente e propriedades da barreira.",
    },
    explicacao:
      "Resumo: Difusão ∝ área e gradiente / espessura.\nA) INCORRETA.\nB) CORRETA.\nC) INCORRETA.\nD) INCORRETA.",
  }),
  Q({
    id: 1053,
    materia: "bmf2",
    tema: "bmf2_a13",
    enunciado:
      "Por que a hipercapnia raramente resulta de ‘falha de difusão’ isolada, comparando CO₂ e O₂?",
    opcoes: [
      "A) Porque o CO₂ é muito menos solúvel que o O₂ no plasma.",
      "B) Porque o CO₂ difunde muito mais facilmente (maior solubilidade), e a hipoventilação é causa comum de retenção de CO₂.",
      "C) Porque o CO₂ não atravessa a membrana alvéolo-capilar.",
      "D) Porque a PaCO₂ não depende da ventilação alveolar.",
    ],
    correta: 1,
    dificuldade: 1,
    modulo: 2,
    explicacao_geral:
      "CO₂ é ~20× mais solúvel que O₂; difunde com facilidade. Hipercapnia costuma refletir hipoventilação, não difusão.",
    explicacoes_opcoes: {
      A: "CO₂ é mais solúvel, não menos.",
      B: "Correto.",
      C: "CO₂ difunde normalmente.",
      D: "PaCO₂ é fortemente ligada à ventilação alveolar.",
    },
    explicacao:
      "Resumo: CO₂ difunde bem; hipercapnia ≈ hipoventilação.\nA) INCORRETA.\nB) CORRETA.\nC) INCORRETA.\nD) INCORRETA.",
  }),
  Q({
    id: 1054,
    materia: "bmf2",
    tema: "bmf2_a13",
    enunciado:
      "Qual valor aproximado melhor descreve a relação global V̇/Q̇ (ventilação alveolar / perfusão) em repouso?",
    opcoes: [
      "A) 0,1.",
      "B) ~0,8 (ex.: ~4 L/min de ventilação alveolar para ~5 L/min de débito cardíaco).",
      "C) 10,0.",
      "D) Infinito em condições basais saudáveis.",
    ],
    correta: 1,
    dificuldade: 2,
    modulo: 2,
    explicacao_geral:
      "V̇A/Q̇ global ~0,8 em repouso; varia por região (zonas de West).",
    explicacoes_opcoes: {
      A: "Muito baixo para o normal global.",
      B: "Correto.",
      C: "Irreal em repouso.",
      D: "Infinito seria espaço morto puro, não o global normal.",
    },
    explicacao:
      "Resumo: V/Q global ~0,8.\nA) INCORRETA.\nB) CORRETA.\nC) INCORRETA.\nD) INCORRETA.",
  }),
  Q({
    id: 1055,
    materia: "bmf2",
    tema: "bmf2_a13",
    enunciado:
      "No pulmão erecto (zonas de West), qual região tende a apresentar V̇/Q̇ mais alto (mais ventilada relativamente à perfusão)?",
    opcoes: [
      "A) Base pulmonar.",
      "B) Ápice pulmonar (zona 1 tende a V̇/Q̇ > 1).",
      "C) Hilmo exclusivamente, sem gradiente apical-basal.",
      "D) Segmentos subdiafragmáticos hepáticos.",
    ],
    correta: 1,
    dificuldade: 2,
    modulo: 2,
    explicacao_geral:
      "Ápice: maior V̇/Q̇; base: perfusão relativamente maior, V̇/Q̇ menor.",
    explicacoes_opcoes: {
      A: "Base tem Q relativo maior → V̇/Q̇ menor que o ápice.",
      B: "Correto.",
      C: "Há gradiente apical-basal.",
      D: "Fora do escopo pulmonar do enunciado.",
    },
    explicacao:
      "Resumo: Ápice = V/Q mais alto.\nA) INCORRETA.\nB) CORRETA.\nC) INCORRETA.\nD) INCORRETA.",
  }),
  Q({
    id: 1056,
    materia: "bmf2",
    tema: "bmf2_a13",
    enunciado:
      "Qual mecanismo de hipoxemia costuma NÃO responder adequadamente à administração de O₂ a 100%?",
    opcoes: [
      "A) Hipoventilação pura com gradiente A-a normal.",
      "B) Shunt anatômico/funcional (sangue que não passa por alvéolos ventilados).",
      "C) Hipoxia por altitude (baixa PiO₂).",
      "D) Depressão respiratória leve com PaCO₂ normal.",
    ],
    correta: 1,
    dificuldade: 2,
    modulo: 2,
    explicacao_geral:
      "Shunt (V̇/Q̇ = 0): sangue não se oxigena alveolarmente; O₂ a 100% não corrige a fração shuntada significativa.",
    explicacoes_opcoes: {
      A: "Hipoventilação geralmente melhora com O₂ (atenção ao CO₂ em alguns contextos).",
      B: "Correto para refratariedade ao O₂ no shunt importante.",
      C: "Baixa PiO₂ melhora com O₂ suplementar.",
      D: "Não descreve shunt refratário.",
    },
    explicacao:
      "Resumo: Shunt → hipoxemia refratária ao O₂.\nA) INCORRETA.\nB) CORRETA.\nC) INCORRETA.\nD) INCORRETA.",
  }),
  Q({
    id: 1057,
    materia: "bmf2",
    tema: "bmf2_a13",
    enunciado:
      "Paciente com embolia pulmonar aguda. Qual alteração da relação V̇/Q̇ é mais característica nas unidades afetadas?",
    opcoes: [
      "A) V̇/Q̇ = 0 com atelectasia completa universal.",
      "B) V̇/Q̇ tendendo a infinito (ventilação sem perfusão) — espaço morto alveolar aumentado.",
      "C) V̇/Q̇ exatamente 0,8 em todos os alvéolos.",
      "D) Aumento isolado da soma de hemoglobina sem alteração de fluxo.",
    ],
    correta: 1,
    dificuldade: 2,
    modulo: 2,
    explicacao_geral:
      "TEP: falta de fluxo em vasos obstruídos → alvéolos ventilados sem perfusão adequada (V̇/Q̇ → ∞), aumento de espaço morto.",
    explicacoes_opcoes: {
      A: "V̇/Q̇ = 0 é shunt; TEP clássico é falta de perfusão.",
      B: "Correto.",
      C: "Não há uniformidade 0,8 na TEP.",
      D: "Não responde ao mecanismo V/Q da embolia.",
    },
    explicacao:
      "Resumo: TEP → V/Q alto (morto alveolar).\nA) INCORRETA.\nB) CORRETA.\nC) INCORRETA.\nD) INCORRETA.",
  }),
  Q({
    id: 1058,
    materia: "bmf2",
    tema: "bmf2_a13",
    enunciado:
      "Envenenamento por monóxido de carbono. Por que a PaO₂ pode estar normal na gasometria enquanto há hipoxia tecidual grave?",
    opcoes: [
      "A) Porque o CO não se liga à hemoglobina.",
      "B) Porque a PaO₂ reflete O₂ dissolvido; a maior parte do O₂ transporta-se ligada à Hb, que fica ocupada pelo CO com alta afinidade.",
      "C) Porque o CO aumenta a produção de 2,3-DPG de forma imediata e total.",
      "D) Porque a PaO₂ mede diretamente o conteúdo total de oxigênio no sangue.",
    ],
    correta: 1,
    dificuldade: 2,
    modulo: 2,
    explicacao_geral:
      "CO liga-se fortemente à Hb (~240× mais que O₂); PaO₂ mede dissolvido; co-oximetria identifica carboxihemoglobina.",
    explicacoes_opcoes: {
      A: "CO liga-se fortemente à Hb.",
      B: "Correto.",
      C: "Não explica a PaO₂ normal isoladamente.",
      D: "PaO₂ não substitui conteúdo de O₂ total.",
    },
    explicacao:
      "Resumo: CO ocupa Hb; PaO₂ pode enganar.\nA) INCORRETA.\nB) CORRETA.\nC) INCORRETA.\nD) INCORRETA.",
  }),
  Q({
    id: 1059,
    materia: "bmf2",
    tema: "bmf2_a13",
    enunciado:
      "Por que a tuberculose pulmonar frequentemente predileciona o ápice?",
    opcoes: [
      "A) Por menor tensão superficial alveolar exclusivamente na base.",
      "B) Porque o ápice apresenta maior V̇/Q̇ e maior PO₂ alveolar local, favorecendo micobactéria aeróbia estrita.",
      "C) Porque não há perfusão no ápice em ortostatismo.",
      "D) Por ausência total de ventilação na região apical.",
    ],
    correta: 1,
    dificuldade: 3,
    modulo: 2,
    explicacao_geral:
      "Alto V̇/Q̇ no ápice → maior PO₂ alveolar → ambiente mais oxigenado, favorece M. tuberculosis (aeróbio estrito).",
    explicacoes_opcoes: {
      A: "Não é a explicação central da predileção apical.",
      B: "Correto.",
      C: "Há perfusão, embora relativa ao ventilar diferente.",
      D: "O ápice ventila; não é ausência de ventilação.",
    },
    explicacao:
      "Resumo: Ápice = alto O₂ alveolar → TB.\nA) INCORRETA.\nB) CORRETA.\nC) INCORRETA.\nD) INCORRETA.",
  }),
  Q({
    id: 1060,
    materia: "bmf2",
    tema: "bmf2_a13",
    enunciado:
      "Qual conjunto de fatores desloca a curva de dissociação da hemoglobina à DIREITA (maior liberação de O₂ nos tecidos)?",
    opcoes: [
      "A) Alcalose respiratória, hipotermia e queda de 2,3-DPG.",
      "B) Acidose, hipercapnia (↑CO₂), febre e aumento de 2,3-DPG.",
      "C) Carboxihemoglobina e alcalose.",
      "D) Apenas ligação de CO à hemoglobina sem outros fatores.",
    ],
    correta: 1,
    dificuldade: 3,
    modulo: 2,
    explicacao_geral:
      "Desvio à direita: acidose, ↑CO₂, ↑T, ↑2,3-DPG (efeito Bohr entre outros). Esquerda: oposto; CO desloca à esquerda.",
    explicacoes_opcoes: {
      A: "Descreve desvio à esquerda/alcalose/hipotermia.",
      B: "Correto.",
      C: "CO e alcalose tendem a prejudicar liberação (esquerda), não direita.",
      D: "Incompleto e CO desloca à esquerda.",
    },
    explicacao:
      "Resumo: Direita = acidose, CO₂, febre, 2,3-DPG.\nA) INCORRETA.\nB) CORRETA.\nC) INCORRETA.\nD) INCORRETA.",
  }),
  Q({
    id: 1061,
    materia: "bmf2",
    tema: "bmf2_a13",
    enunciado:
      "Paciente idoso com PaO₂ medida menor que em jovens ao nível do mar. Qual raciocínio segue a fórmula aproximada da aula?",
    opcoes: [
      "A) PaO₂ esperada aumenta linearmente 10 mmHg por década.",
      "B) PaO₂ esperada cai com a idade (ex.: ~100 − 0,3 × idade em anos), reduzindo alvos ‘normais’ em idosos.",
      "C) A idade não altera PaO₂ em hipóxia normobárica.",
      "D) Apenas anemia reduz PaO₂.",
    ],
    correta: 1,
    dificuldade: 3,
    modulo: 2,
    explicacao_geral:
      "PaO₂ esperada diminui com idade; fórmula aproximada 100 − 0,3×idade (anos).",
    explicacoes_opcoes: {
      A: "Tendência oposta à observada.",
      B: "Correto.",
      C: "Há declínio fisiológico.",
      D: "Anemia afeta conteúdo de O₂ mais que PaO₂ tipicamente.",
    },
    explicacao:
      "Resumo: PaO₂ cai com idade — fórmula aproximada.\nA) INCORRETA.\nB) CORRETA.\nC) INCORRETA.\nD) INCORRETA.",
  }),
];
