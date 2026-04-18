import fs from 'fs';
import path from 'path';

const QUESTOES_PATH = 'data/questoes.json';

const novasQuestoes = [
  {
    "id": 4201,
    "materia": "bmf3",
    "aula_id": "bmf3_a13",
    "tema": "bmf3_a13",
    "modulo": 3,
    "dificuldade": 1,
    "correta": 1,
    "enunciado": "Qual o mecanismo de ação celular da 'Digoxina'?),",
    "opcoes": [
      "A) Bloqueio dos receptores Beta-1 cardíacos.",
      "B) Inibição da enzima Na+/K+ ATPase, levando ao aumento do cálcio intracelular e aumento da força de contração (inotropismo positivo).",
      "C) Aumento da abertura de canais de potássio.",
      "D) Inativação da enzima conversora de angiotensina."
    ],
    "explicacao_geral": "O aumento do cálcio intracelular é secundário ao acúmulo de sódio, que inverte a troca Na+/Ca2+.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Betabloqueadores fazem isso.",
      "B": "[CORRETA] A **Digoxina** inibe a **Bomba de Sódio e Potássio**.",
      "C": "[INCORRETA] Levaria à hiperpolarização e redução da excitabilidade.",
      "D": "[INCORRETA] Função dos IECAs."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 4202,
    "materia": "bmf3",
    "aula_id": "bmf3_a13",
    "tema": "bmf3_a13",
    "modulo": 3,
    "dificuldade": 2,
    "correta": 3,
    "enunciado": "Um paciente em uso de Digoxina apresenta náuseas, vômitos e visão com halos amarelados (xantopsia). Qual a principal preocupação clínica?),",
    "opcoes": [
      "A) Alergia ao corante do comprimido.",
      "B) Infecção viral oportunista.",
      "C) Deficiência de vitamina A.",
      "D) Intoxicação Digitálica (estreita margem terapêutica)."
    ],
    "explicacao_geral": "A hipocalemia (baixo potássio) potencializa gravemente a toxicidade da digoxina.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Pouco provável dados os sintomas específicos.",
      "B": "[INCORRETA] Sem relação direta descrita.",
      "C": "[INCORRETA] Causaria cegueira noturna.",
      "D": "[CORRETA] A **Xantopsia** é sinal clássico de **Toxicidade por Digoxina**."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 4203,
    "materia": "bmf3",
    "aula_id": "bmf3_a13",
    "tema": "bmf3_a13",
    "modulo": 3,
    "dificuldade": 2,
    "correta": 0,
    "enunciado": "A 'Espironolactona' é usada na Insuficiência Cardíaca avançada não apenas como diurético, mas por qual benefício adicional?),",
    "opcoes": [
      "A) Bloqueio do efeito da aldosterona no miocárdio, reduzindo a fibrose cardíaca e melhorando a sobrevida.",
      "B) Aumento da energia celular.",
      "C) Eliminação de gordura do coração.",
      "D) Redução do colesterol."
    ],
    "explicacao_geral": "A aldosterona promove o remodelamento cardíaco patológico.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] A **Espironolactona** reduz a **Fibrose Miocárdica**.",
      "B": "[INCORRETA] Absurdo.",
      "C": "[INCORRETA] Absurdo.",
      "D": "[INCORRETA] Função de estatinas."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 4204,
    "materia": "bmf3",
    "aula_id": "bmf3_a13",
    "tema": "bmf3_a13",
    "modulo": 3,
    "dificuldade": 3,
    "correta": 2,
    "enunciado": "A classe farmacológica ARNI (ex: Sacubitril/Valsartana) atua através de qual mecanismo inovador no tratamento da IC?),",
    "opcoes": [
      "A) Bloqueio de canais de magnésio.",
      "B) Estímulo à produção de adrenalina.",
      "C) Inibição da neprilisina (sacubitril), aumentando os níveis de peptídeos natriuréticos benéficos, associada ao bloqueio de receptores AT1 (valsartana).",
      "D) Aumento da glicose intracardíaca."
    ],
    "explicacao_geral": "Os peptídeos natriuréticos promovem vasodilatação, natriurese e reduzem a fibrose.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Inespecífico.",
      "B": "[INCORRETA] Seria prejudicial.",
      "C": "[CORRETA] O **ARNI** combina **Inibição de Neprilisina + Bloqueio de Receptor AT1**.",
      "D": "[INCORRETA] Absurdo."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 4205,
    "materia": "bmf3",
    "aula_id": "bmf3_a14",
    "tema": "bmf3_a14",
    "modulo": 3,
    "dificuldade": 2,
    "correta": 2,
    "enunciado": "De acordo com a classificação de Vaughan-Williams, a 'Amiodarona' pertence à qual classe de antiarrítmicos?),",
    "opcoes": [
      "A) Classe I (Bloqueadores de canais de sódio).",
      "B) Classe II (Betabloqueadores).",
      "C) Classe III (Bloqueadores de canais de potássio, prolongando o potencial de ação).",
      "D) Classe IV (Bloqueadores de canais de cálcio)."
    ],
    "explicacao_geral": "A amiodarona é um fármaco multicanal (também tem efeitos de classe I, II e IV), mas sua ação principal é na fase 3 (repolarização).",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Lidocaína, Propafenona.",
      "B": "[INCORRETA] Propranolol, Atenolol.",
      "C": "[CORRETA] A **Amiodarona** é o principal representante da **Classe III**.",
      "D": "[INCORRETA] Verapamil, Diltiazem."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 4206,
    "materia": "bmf3",
    "aula_id": "bmf3_a14",
    "tema": "bmf3_a14",
    "modulo": 3,
    "dificuldade": 3,
    "correta": 1,
    "enunciado": "Qual fármaco é considerado a primeira escolha para a reversão rápida de 'Taquicardia Paroxística Supraventricular' (TPSV) no ambiente hospitalar?),",
    "opcoes": [
      "A) Adrenalina.",
      "B) Adenosina (bolus venoso rápido).",
      "C) Morfina.",
      "D) Digoxina lenta."
    ],
    "explicacao_geral": "A adenosina causa um bloqueio transitório do nó AV, permitindo o 'reset' do ritmo cardíaco.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Trata parada cardíaca ou choque.",
      "B": "[CORRETA] A **Adenosina** é usada para **Reversão de TPSV**.",
      "C": "[INCORRETA] Analgésico.",
      "D": "[INCORRETA] Demora muito para agir, inapropriada para reversão aguda."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 4207,
    "materia": "bmf3",
    "aula_id": "bmf3_a14",
    "tema": "bmf3_a14",
    "modulo": 3,
    "dificuldade": 2,
    "correta": 3,
    "enunciado": "Por que o uso crônico de 'Amiodarona' exige monitoramento periódico da função tireoidiana?),",
    "opcoes": [
      "A) Porque ela destrói o iodo do corpo.",
      "B) Porque ela aumenta o metabolismo basal por si só.",
      "C) Porque ela é feita de hormônio tireoidiano.",
      "D) Devido ao seu alto teor de iodo, que pode causar tanto hipo quanto hipertireoidismo (efeitos Wolff-Chaikoff e Jod-Basedow)."
    ],
    "explicacao_geral": "Cerca de 37% do peso da amiodarona é iodo inorgânico.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Ela fornece excesso de iodo.",
      "B": "[INCORRETA] Secundário à disfunção tireoidiana.",
      "C": "[INCORRETA] Estruturalmente semelhante, mas não é o hormônio.",
      "D": "[CORRETA] A **Amiodarona** pode induzir **Disfunção Tireoidiana**."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 4208,
    "materia": "bmf3",
    "aula_id": "bmf3_a14",
    "tema": "bmf3_a14",
    "modulo": 3,
    "dificuldade": 2,
    "correta": 0,
    "enunciado": "A 'Lidocaína' (Classe Ib) é utilizada como antiarrítmico especificamente em qual situação?),",
    "opcoes": [
      "A) Arritmias ventriculares agudas (como após um infarto do miocárdio).",
      "B) Fibrilação atrial crônica.",
      "C) Bradiarritmias.",
      "D) Ansiedade."
    ],
    "explicacao_geral": "A lidocaína tem preferência por agir em tecidos isquêmicos e despolarizados.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] A **Lidocaína** trata **Arritmias Ventriculares no Infarto**.",
      "B": "[INCORRETA] Pouco eficaz.",
      "C": "[INCORRETA] Seus efeitos em dose plena seriam de piorar a bradicardia.",
      "D": "[INCORRETA] Absurdo (pode causar convulsões em toxicidade)."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  }
];

const data = JSON.parse(fs.readFileSync(QUESTOES_PATH, 'utf-8'));
data.questoes = data.questoes.concat(novasQuestoes);
fs.writeFileSync(QUESTOES_PATH, JSON.stringify(data, null, 2), 'utf-8');
console.log(`Sucesso: 8 questões da aula bmf3_a13/a14 adicionadas.`);
