import fs from 'fs';
import path from 'path';

const QUESTOES_PATH = 'data/questoes.json';

const novasQuestoes = [
  {
    "id": 3313,
    "materia": "semiologia1",
    "aula_id": "semio1_a4",
    "tema": "semio1_a4",
    "modulo": 1,
    "dificuldade": 1,
    "correta": 1,
    "enunciado": "Qual a técnica correta recomendada para a avaliação da temperatura local (calor) durante a palpação de uma articulação?),",
    "opcoes": [
      "A) Utilizar a palma da mão, pressionando com força.",
      "B) Utilizar o dorso da mão (costas das mãos), comparando com a articulação contralateral.",
      "C) Utilizar apenas a ponta do dedo indicador.",
      "D) Não é necessário palpar, basta olhar a cor da pele."
    ],
    "explicacao_geral": "O dorso da mão é mais sensível a variações de temperatura do que a palma.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] A palma da mão é menos sensível e a pressão pode esconder o calor local.",
      "B": "[CORRETA] O **dorso da mão** é a técnica padrão para detectar **calor local**.",
      "C": "[INCORRETA] Área muito pequena para uma comparação fidedigna.",
      "D": "[INCORRETA] O calor pode estar presente sem rubor (vermelhidão)."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3314,
    "materia": "semiologia1",
    "aula_id": "semio1_a4",
    "tema": "semio1_a4",
    "modulo": 1,
    "dificuldade": 2,
    "correta": 3,
    "enunciado": "Um paciente de 40 anos apresenta inchaço no joelho direito. Durante a palpação, o médico realiza a compressão da bolsa suprapatelar com uma mão e, com a outra, pressiona a patela contra o fêmur, sentindo um 'choque' ou flutuação. Qual o nome deste sinal?),",
    "opcoes": [
      "A) Sinal de gaveta.",
      "B) Sinal de McMurray.",
      "C) Sinal de Lachman.",
      "D) Sinal da Tecla (ou do ressalto patelar)."
    ],
    "explicacao_geral": "Este sinal indica a presença de grande quantidade de líquido dentro da cavidade articular (derrame).",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Avalia a estabilidade dos ligamentos cruzados.",
      "B": "[INCORRETA] Avalia lesão meniscal.",
      "C": "[INCORRETA] Teste mais fidedigno para ligamento cruzado anterior.",
      "D": "[CORRETA] O **Sinal da Tecla** confirma a presença de **derrame articular** volumoso."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 3315,
    "materia": "semiologia1",
    "aula_id": "semio1_a4",
    "tema": "semio1_a4",
    "modulo": 1,
    "dificuldade": 2,
    "correta": 0,
    "enunciado": "Durante a palpação ruidosa ou tátil de uma articulação em movimento, o examinador percebe uma sensação de 'atrito' ou 'estalos' contínuos. Qual o termo semiológico adequado?),",
    "opcoes": [
      "A) Crepitação articular.",
      "B) Parestesia tátil.",
      "C) Hiperalgesia.",
      "D) Anquilose."
    ],
    "explicacao_geral": "A crepitação sugere perda de cartilagem ou irregularidade nas superfícies articulares.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] A **crepitação** é o ruído ou sensação de 'areia' durante o movimento.",
      "B": "[INCORRETA] Refere-se a sensações de formigamento/dormência.",
      "C": "[INCORRETA] Sensibilidade excessiva à dor.",
      "D": "[INCORRETA] Fixação total de uma articulação (fusão)."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3316,
    "materia": "semiologia1",
    "aula_id": "semio1_a4",
    "tema": "semio1_a4",
    "modulo": 1,
    "dificuldade": 2,
    "correta": 2,
    "enunciado": "A palpação sistemática dos 'Trigger Points' (pontos gatilho) é essencial na avaliação de dores musculoesqueléticas. O que define um ponto gatilho à palpação?),",
    "opcoes": [
      "A) Um ponto que está sempre inchado e vermelho.",
      "B) Um local onde o osso está quebrado.",
      "C) Um nódulo palpável em uma banda muscular tensa que, sob pressão, causa dor local e referida (à distância).",
      "D) Um local onde o pulso arterial é mais forte."
    ],
    "explicacao_geral": "Pontos gatilho são a marca das síndromes de dor miofascial.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Pontos gatilho não apresentam sinais inflamatórios externos como edema ou rubor.",
      "B": "[INCORRETA] Não há relação com fraturas.",
      "C": "[CORRETA] A **dor referida** ao pressionar um nódulo muscular é a característica do **ponto gatilho**.",
      "D": "[INCORRETA] Pulso arterial refere-se à semiologia vascular."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3317,
    "materia": "semiologia1",
    "aula_id": "semio1_a4",
    "tema": "semio1_a4",
    "modulo": 1,
    "dificuldade": 1,
    "correta": 1,
    "enunciado": "Um paciente queixa-se de dor intensa 'na lateral' do quadril. Ao palpar o grande trocânter do fêmur, o paciente relata dor aguda. Qual o diagnóstico clínico provável?),",
    "opcoes": [
      "A) Artrose do quadril (Coxartrose).",
      "B) Bursite Trocantérica (ou Síndrome Dolorosa do Grande Trocânter).",
      "C) Fratura do colo do fêmur.",
      "D) Hérnia inguinal."
    ],
    "explicacao_geral": "A dor localizada na palpação óssea superficial de proeminências sugere inflamação de bolsas serosas ou tendões insercionais.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] A dor da artrose é tipicamente inguinal (na virilha).",
      "B": "[CORRETA] A **dor lateral** à palpação do trocânter sugere **bursite**.",
      "C": "[INCORRETA] Impediria a deambulação e teria história de trauma óbvio.",
      "D": "[INCORRETA] Dor na região inguinal/abdominal."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 3318,
    "materia": "semiologia1",
    "aula_id": "semio1_a4",
    "tema": "semio1_a4",
    "modulo": 1,
    "dificuldade": 3,
    "correta": 0,
    "enunciado": "Ao avaliar um joelho com suspeita de derrame articular LEVE, o médico utiliza a técnica de 'ordenhar' o líquido da face medial para a lateral e observa o aparecimento de uma saliência ou abaulamento. Qual o nome dessa manobra?),",
    "opcoes": [
      "A) Manobra do Efluxo ou Sinal do Abaulamento.",
      "B) Manobra de Thompson.",
      "C) Manobra de Ortolani.",
      "D) Teste de Phalen."
    ],
    "explicacao_geral": "Diferente do sinal da tecla (volumoso), o sinal do abaulamento detecta pequenas quantidades de líquido.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] O **sinal do abaulamento** é utilizado para **derrames leves**.",
      "B": "[INCORRETA] Avalia ruptura do tendão de Aquiles.",
      "C": "[INCORRETA] Avalia luxação de quadril em recém-nascidos.",
      "D": "[INCORRETA] Avalia síndrome do túnel do carpo."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3319,
    "materia": "semiologia1",
    "aula_id": "semio1_a4",
    "tema": "semio1_a4",
    "modulo": 1,
    "dificuldade": 2,
    "correta": 2,
    "enunciado": "Um paciente diabético apresenta dor e edema no pé. O médico palpa o pulso pedioso e o pulso tibial posterior, encontrando-os ausentes. O pé está frio ao toque. Qual a interpretação semiológica correta para a causa da dor?),",
    "opcoes": [
      "A) Trata-se de uma artrite aguda gotosa.",
      "B) Trata-se de uma lesão ligamentar.",
      "C) Trata-se de uma Insuficiência Arterial Crônica (causa vascular, não articular).",
      "D) Trata-se de excesso de atividade física."
    ],
    "explicacao_geral": "A palpação dos pulsos é obrigatória em todo exame do locomotor para descartar componentes vasculares graves.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Causaria pé quente e pulsos presentes (processo inflamatório).",
      "B": "[INCORRETA] Não justificaria a ausência de pulsos e pé frio.",
      "C": "[CORRETA] A **ausência de pulsos** e gradiente térmico sugere **isquemia**.",
      "D": "[INCORRETA] Atividade física aumenta o fluxo sanguíneo e o calor local."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 3320,
    "materia": "semiologia1",
    "aula_id": "semio1_a4",
    "tema": "semio1_a4",
    "modulo": 1,
    "dificuldade": 3,
    "correta": 1,
    "enunciado": "A palpação da 'Goteira Bicipital' no ombro visa avaliar qual estrutura anatômica frequentemente inflamada?),",
    "opcoes": [
      "A) Tendão do músculo deltóide.",
      "B) Tendão da cabeça longa do músculo bíceps braquial.",
      "C) Nervo axilar.",
      "D) Clavícula distal."
    ],
    "explicacao_geral": "O tendão bicipital passa por um sulco no úmero e sua palpação dolorosa indica tendinite bicipital.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] O deltóide recobre a região, mas não é palpado na goteira.",
      "B": "[CORRETA] A **cabeça longa do bíceps** corre dentro da goteira bicipital.",
      "C": "[INCORRETA] O nervo não é palpado nesse local de forma diagnóstica habitual.",
      "D": "[INCORRETA] Localizada superiormente (articulação acromioclavicular)."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  }
];

const data = JSON.parse(fs.readFileSync(QUESTOES_PATH, 'utf-8'));
data.questoes = data.questoes.concat(novasQuestoes);
fs.writeFileSync(QUESTOES_PATH, JSON.stringify(data, null, 2), 'utf-8');
console.log(`Sucesso: 8 questões da aula semio1_a4 adicionadas.`);
