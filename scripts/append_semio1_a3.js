import fs from 'fs';
import path from 'path';

const QUESTOES_PATH = 'data/questoes.json';

const novasQuestoes = [
  {
    "id": 3305,
    "materia": "semiologia1",
    "aula_id": "semio1_a3",
    "tema": "semio1_a3",
    "modulo": 1,
    "dificuldade": 1,
    "correta": 1,
    "enunciado": "Durante a inspeção dos joelhos, o médico observa que os eixos dos membros inferiores se afastam da linha média, com os joelhos se 'tocando' e os pés afastados. Qual o nome dessa deformidade?),",
    "opcoes": [
      "A) Genu Varo ('Pernas em alicate').",
      "B) Genu Valgo ('Joelho em X').",
      "C) Genu Recurvatum.",
      "D) Halux Valgus."
    ],
    "explicacao_geral": "As deformidades de alinhamento predizem padrões de desgaste articular futuro.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] No varo, os joelhos se afastam e os pés se aproximam.",
      "B": "[CORRETA] O **Genu Valgo** é caracterizado pela aproximação dos joelhos.",
      "C": "[INCORRETA] É a hiperextensão do joelho para trás.",
      "D": "[INCORRETA] É a deformidade do 'joanete' no pé."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3306,
    "materia": "semiologia1",
    "aula_id": "semio1_a3",
    "tema": "semio1_a3",
    "modulo": 1,
    "dificuldade": 2,
    "correta": 0,
    "enunciado": "Um paciente de 50 anos apresenta pequenos nódulos endurecidos nas articulações interfalangeanas DISTAIS das mãos, sem sinais inflamatórios agudos. Qual o nome desses nódulos típicos da osteoartrose nodal?),",
    "opcoes": [
      "A) Nódulos de Heberden.",
      "B) Nódulos de Bouchard.",
      "C) Tofos gotosos.",
      "D) Nódulos reumatoides."
    ],
    "explicacao_geral": "Os nódulos de Heberden (distais) e Bouchard (proximais) são marcadores de osteoartrose.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] Os **nódulos de Heberden** ocorrem nas **interfalangeanas distais (IFD)**.",
      "B": "[INCORRETA] Estes ocorrem nas interfalangeanas proximais (IFP).",
      "C": "[INCORRETA] São depósitos de urato, geralmente assimétricos e podem ulcerar.",
      "D": "[INCORRETA] Geralmente ocorrem em superfícies de extensão (cotovelo) e são subcutâneos."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 3307,
    "materia": "semiologia1",
    "aula_id": "semio1_a3",
    "tema": "semio1_a3",
    "modulo": 1,
    "dificuldade": 2,
    "correta": 3,
    "enunciado": "A 'Marcha Anserina' (ou marcha de pato), caracterizada pela oscilação exagerada do quadril para os lados, é típica de qual condição?),",
    "opcoes": [
      "A) Lesão do nervo fibular comum.",
      "B) Acidente Vascular Cerebral.",
      "C) Parkinsonismo avançado.",
      "D) Fraqueza da musculatura pélvica (Ex: distrofias musculares ou luxação congênita do quadril)."
    ],
    "explicacao_geral": "A insuficiência dos glúteos médios impede a estabilização da pelve durante o passo.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Causaria marcha escarvante (pé caído).",
      "B": "[INCORRETA] Causaria marcha ceifante (hemiparética).",
      "C": "[INCORRETA] Causaria marcha festinante.",
      "D": "[CORRETA] A **marcha anserina** decorre da **fraqueza da cintura pélvica**."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3308,
    "materia": "semiologia1",
    "aula_id": "semio1_a3",
    "tema": "semio1_a3",
    "modulo": 1,
    "dificuldade": 1,
    "correta": 2,
    "enunciado": "Ao observar a coluna de um paciente de perfil, o médico nota um aumento da curvatura fisiológica da região dorsal (torácica), conferindo um aspecto 'corcunda'. Qual o termo técnico?),",
    "opcoes": [
      "A) Escoliose.",
      "B) Lordose.",
      "C) Cifose.",
      "D) Gibosidade."
    ],
    "explicacao_geral": "O reconhecimento dos desvios posturais é parte da inspeção estática da coluna.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Desvio lateral da coluna visto de frente/costas.",
      "B": "[INCORRETA] Curvatura para dentro, fisiológica na cervical e lombar.",
      "C": "[CORRETA] O aumento da curvatura torácica posterior é chamado de **Hipercifose** ou apenas **Cifose**.",
      "D": "[INCORRETA] É a proeminência costal visível na escoliose durante o teste de Adams."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3309,
    "materia": "semiologia1",
    "aula_id": "semio1_a3",
    "tema": "semio1_a3",
    "modulo": 1,
    "dificuldade": 3,
    "correta": 0,
    "enunciado": "Um paciente de 30 anos apresenta deformidade em 'pescoço de cisne' nos dedos das mãos (hiperextensão da IFP e flexão da IFD). Este achado é altamente sugestivo de qual patologia?),",
    "opcoes": [
      "A) Artrite Reumatoide crônica.",
      "B) Osteoartrose por uso excessivo de computador.",
      "C) Gota tofácea.",
      "D) Raquitismo."
    ],
    "explicacao_geral": "A sinovite crônica destrói o aparelho extensor e os ligamentos dos dedos.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] As deformidades em **pescoço de cisne** e **em botoeira** são clássicas da **Artrite Reumatoide**.",
      "B": "[INCORRETA] Causa nódulos (Heberden/Bouchard), mas raramente essa deformidade tenossinovial complexa.",
      "C": "[INCORRETA] Causa desvios assimétricos por depósitos de tofos.",
      "D": "[INCORRETA] Causa deformidades em ossos longos (pernas arqueadas)."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 3310,
    "materia": "semiologia1",
    "aula_id": "semio1_a3",
    "tema": "semio1_a3",
    "modulo": 1,
    "dificuldade": 2,
    "correta": 1,
    "enunciado": "A 'Atrofia Muscular' pode ser observada na inspeção estática. Qual a importância de notar atrofia da musculatura tenar (na base do polegar)?)",
    "opcoes": [
      "A) Sugere lesão do nervo ulnar.",
      "B) Sugere compressão crônica do nervo mediano (Síndrome do Túnel do Carpo).",
      "C) É um sinal normal de envelhecimento em todos os pacientes.",
      "D) Indica que o paciente é canhoto."
    ],
    "explicacao_geral": "A atrofia indica desuso prolongado ou denervação persistente.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] O ulnar inerva a maioria dos músculos intrínsecos e a eminência hipotenar (lado do dedinho).",
      "B": "[CORRETA] A **atrofia tenar** é um sinal de gravidade na **Síndrome do Túnel do Carpo**.",
      "C": "[INCORRETA] Pode haver perda de massa (sarcopenia), mas atrofia focal tenar é patológica.",
      "D": "[INCORRETA] Não há relação."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3311,
    "materia": "semiologia1",
    "aula_id": "semio1_a3",
    "tema": "semio1_a3",
    "modulo": 1,
    "dificuldade": 2,
    "correta": 3,
    "enunciado": "O 'Edema em cacifo' (sinal do cacifo ou de Godet) positivo na região pré-tibial de um paciente com dor articular sugere qual origem?),",
    "opcoes": [
      "A) Inflamação puramente articular.",
      "B) Fratura de fêmur.",
      "C) Ruptura de menisco.",
      "D) Causa sistêmica ou vascular (Ex: Insuficiência cardíaca ou venosa), diferindo do edema inflamatório localizado.",
      "E) N/A"
    ],
    "explicacao_geral": "O edema inflamatório articular costuma ser duro e localizado, enquanto o edema sistêmico é depressível (cacifo).",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] O edema de artrite costuma ser 'duro' ou com sinal da tecla (derrame), não necessariamente com cacifo pré-tibial extenso.",
      "B": "[INCORRETA] Fraturas causam hematomas e edema traumático localizado.",
      "C": "[INCORRETA] Causa derrame articular no joelho.",
      "D": "[CORRETA] O **sinal de Godet** positivo fora da articulação sugere retenção de líquidos por causas **sistêmicas**."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 3312,
    "materia": "semiologia1",
    "aula_id": "semio1_a3",
    "tema": "semio1_a3",
    "modulo": 1,
    "dificuldade": 2,
    "correta": 0,
    "enunciado": "A 'Marcha Escarvante' (ou Steppage) é caracterizada pela elevação excessiva do joelho para que o pé caído não arraste no chão. Qual nervo está provavelmente lesado?),",
    "opcoes": [
      "A) Nervo Fibular Comum.",
      "B) Nervo Femoral.",
      "C) Nervo Isquiático (nervo de grande calibre apenas).",
      "D) Nervo Obturatório."
    ],
    "explicacao_geral": "O nervo fibular inerva os músculos dorsiflexores do pé.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] A lesão do **fibular** causa o 'pé caído' e a **marcha escarvante**.",
      "B": "[INCORRETA] Dificultaria a extensão do joelho.",
      "C": "[INCORRETA] Lesão do isquiático causaria déficit motor muito mais extenso na perna e pé.",
      "D": "[INCORRETA] Inerva os adutores da coxa."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  }
];

const data = JSON.parse(fs.readFileSync(QUESTOES_PATH, 'utf-8'));
data.questoes = data.questoes.concat(novasQuestoes);
fs.writeFileSync(QUESTOES_PATH, JSON.stringify(data, null, 2), 'utf-8');
console.log(`Sucesso: 8 questões da aula semio1_a3 adicionadas.`);
