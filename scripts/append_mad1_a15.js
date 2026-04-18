import fs from 'fs';
import path from 'path';

const QUESTOES_PATH = 'data/questoes.json';

const novasQuestoes = [
  {
    "id": 3953,
    "materia": "mad1",
    "aula_id": "mad1_a15",
    "tema": "mad1_a15",
    "modulo": 2,
    "dificuldade": 1,
    "correta": 1,
    "enunciado": "As arboviroses são doenças transmitidas por vetores artrópodes. Qual o principal vetor urbano das doenças Dengue, Zika e Chikungunya no Brasil?),",
    "opcoes": [
      "A) Culex quinquefasciatus.",
      "B) Aedes aegypti.",
      "C) Anopheles darlingi.",
      "D) Lutzomyia longipalpis."
    ],
    "explicacao_geral": "O controle do vetor é a principal medida de saúde pública contra estas doenças.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Pernilongo comum; vetor da filariose.",
      "B": "[CORRETA] O **Aedes aegypti** é o vetor das principais **Arboviroses** urbanas.",
      "C": "[INCORRETA] Vetor da Malária.",
      "D": "[INCORRETA] Vetor da Leishmaniose."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3954,
    "materia": "mad1",
    "aula_id": "mad1_a15",
    "tema": "mad1_a15",
    "modulo": 2,
    "dificuldade": 1,
    "correta": 3,
    "enunciado": "Um paciente com Dengue apresenta febre, dor no corpo e dor atrás dos olhos. Qual o termo técnico para essa dor ocular característica?),",
    "opcoes": [
      "A) Fotofobia intensa.",
      "B) Glaucoma agudo.",
      "C) Amaurose.",
      "D) Dor retro-orbitária."
    ],
    "explicacao_geral": "A dor é descrita como se os olhos estivessem sendo empurrados para fora.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Sensibilidade à luz, comum em meningites.",
      "B": "[INCORRETA] Doença ocular hipertensiva.",
      "C": "[INCORRETA] Cegueira súbita.",
      "D": "[CORRETA] A **Dor Retro-orbitária** é um sintoma clássico da **Dengue**."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3955,
    "materia": "mad1",
    "aula_id": "mad1_a15",
    "tema": "mad1_a15",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 0,
    "enunciado": "A infecção por vírus Zika durante a gestação foi associada a uma malformação congênita grave. Qual é ela?),",
    "opcoes": [
      "A) Microcefalia e outras malformações do sistema nervoso central.",
      "B) Pé torto congênito.",
      "C) Ausência de rins.",
      "D) Polidactilia (dedos a mais)."
    ],
    "explicacao_geral": "O vírus Zika tem tropismo por células progenitoras neurais humanas.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] A **Síndrome Congênita do Zika** causa **Microcefalia** severa.",
      "B": "[INCORRETA] Causa ortopédica/posicional.",
      "C": "[INCORRETA] Agenesia renal.",
      "D": "[INCORRETA] Alteração genética/desequilíbrio de eixos embrionários."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3956,
    "materia": "mad1",
    "aula_id": "mad1_a15",
    "tema": "mad1_a15",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 2,
    "enunciado": "Qual a principal característica clínica que diferencia a Chikungunya da Dengue na fase aguda?),",
    "opcoes": [
      "A) A Chikungunya não causa febre.",
      "B) A Dengue causa muita dor nas articulações, a Chikungunya não.",
      "C) A Chikungunya causa artralgia (dor articular) intensa, frequentemente incapacitante e que pode se tornar crônica por meses ou anos.",
      "D) Apenas a Dengue causa manchas na pele."
    ],
    "explicacao_geral": "Chikungunya vem de um termo que significa 'aquele que se dobra', devido à dor articular.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Ambas causam febre alta.",
      "B": "[INCORRETA] Invertido; a dor na Dengue é mais muscular (mialgia).",
      "C": "[CORRETA] A **Artrite Incapacitante** é a marca da **Chikungunya**.",
      "D": "[INCORRETA] Ambas podem causar exantema."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 3957,
    "materia": "mad1",
    "aula_id": "mad1_a15",
    "tema": "mad1_a15",
    "modulo": 2,
    "dificuldade": 3,
    "correta": 1,
    "enunciado": "A 'Febre Amarela' apresenta uma dissociação característica entre a temperatura e a frequência cardíaca (febre alta com pulso lento). Qual o nome desse sinal?),",
    "opcoes": [
      "A) Sinal de Koplik.",
      "B) Sinal de Faget.",
      "C) Sinal de Murphy.",
      "D) Sinal de Giordano."
    ],
    "explicacao_geral": "O sinal de Faget pode ocorrer também na Febre Tifoide.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Sarampo.",
      "B": "[CORRETA] O **Sinal de Faget** é a **Bradicardia com Febre**.",
      "C": "[INCORRETA] Colecistite.",
      "D": "[INCORRETA] Pielonefrite."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 3958,
    "materia": "mad1",
    "aula_id": "mad1_a15",
    "tema": "mad1_a15",
    "modulo": 2,
    "dificuldade": 3,
    "correta": 0,
    "enunciado": "A 'Dengue Hemorrágica' (ou Dengue Grave) é mais frequente em qual situação epidemiológica?),",
    "opcoes": [
      "A) Em indivíduos que estão sofrendo uma SEGUNDA infecção por um sorotipo diferente do da primeira infecção (Teoria de Halstead).",
      "B) Em quem nunca teve dengue.",
      "C) Apenas em idosos com mais de 90 anos.",
      "D) Em pessoas que tomam muita vitamina C."
    ],
    "explicacao_geral": "Os anticorpos da primeira infecção facilitam a entrada do novo vírus nas células (Amplificação Dependente de Anticorpos - ADE).",
    "explicacoes_opcoes": {
      "A": "[CORRETA] A **Segunda Infecção** aumenta o risco de **Dengue Grave**.",
      "B": "[INCORRETA] Menor risco (mas não zero).",
      "C": "[INCORRETA] Pode ocorrer em qualquer idade.",
      "D": "[INCORRETA] Sem relação."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3959,
    "materia": "mad1",
    "aula_id": "mad1_a15",
    "tema": "mad1_a15",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 3,
    "enunciado": "Qual arbovirose apresenta um exantema (manchas vermelhas) muito pruriginoso (coça muito) logo no primeiro ou segundo dia, acompanhado de hiperemia conjuntival (olhos vermelhos) sem secreção?),",
    "opcoes": [
      "A) Dengue.",
      "B) Febre Amarela.",
      "C) Chikungunya.",
      "D) Zika."
    ],
    "explicacao_geral": "A febre no Zika costuma ser baixa ou ausente, diferente da Dengue e Chikungunya.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Exantema mais tardio e febre alta.",
      "B": "[INCORRETA] Foco em icterícia e gravidade sistêmica.",
      "C": "[INCORRETA] Foco em dor articular intensa.",
      "D": "[CORRETA] O **Prurido e Olhos Vermelhos** são típicos do **Zika**."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 3960,
    "materia": "mad1",
    "aula_id": "mad1_a15",
    "tema": "mad1_a15",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 0,
    "enunciado": "Quais são os 'Sinais de Alarme' na Dengue que indicam a necessidade de observação hospitalar imediata?),",
    "opcoes": [
      "A) Dor abdominal intensa e contínua, vômitos persistentes e sangramento de mucosas.",
      "B) Fome excessiva.",
      "C) Espirros constantes.",
      "D) Melhora da febre (apenas se acompanhada de bem-estar)."
    ],
    "explicacao_geral": "A fase crítica ocorre justamente quando a febre cede (entre o 3º e 7º dia).",
    "explicacoes_opcoes": {
      "A": "[CORRETA] Os **Sinais de Alarme** precedem o choque na **Dengue**.",
      "B": "[INCORRETA] Geralmente há inapetência.",
      "C": "[INCORRETA] Sintoma respiratório, não comum na dengue.",
      "D": "[INCORRETA] A defervescência desacompanhada de melhora é sinal de perigo."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  }
];

const data = JSON.parse(fs.readFileSync(QUESTOES_PATH, 'utf-8'));
data.questoes = data.questoes.concat(novasQuestoes);
fs.writeFileSync(QUESTOES_PATH, JSON.stringify(data, null, 2), 'utf-8');
console.log(`Sucesso: 8 questões da aula mad1_a15 adicionadas.`);
