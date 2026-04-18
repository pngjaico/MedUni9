import fs from 'fs';
import path from 'path';

const QUESTOES_PATH = 'data/questoes.json';

const novasQuestoes = [
  {
    "id": 4345,
    "materia": "fp3",
    "aula_id": "fp3_a9",
    "tema": "fp3_a9",
    "modulo": 3,
    "dificuldade": 1,
    "correta": 1,
    "enunciado": "A 'Síndrome Nefrótica' caracteriza-se por uma perda massiva de qual substância pela urina?),",
    "opcoes": [
      "A) Açúcar (Glicose).",
      "B) Proteínas (Proteinúria massiva > 3.5g/24h).",
      "C) Glóbulos vermelhos (Sangue).",
      "D) Gordura."
    ],
    "explicacao_geral": "A lesão na barreira de filtração glomerular permite a passagem de grandes quantidades de albumina.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Glicosúria (Diabetes).",
      "B": "[CORRETA] A **Proteinúria** define a **Síndrome Nefrótica**.",
      "C": "[INCORRETA] Hematúria (típica da Síndrome Nefrítica).",
      "D": "[INCORRETA] Lipidúria pode ocorrer, mas não define a síndrome."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 4346,
    "materia": "fp3",
    "aula_id": "fp3_a9",
    "tema": "fp3_a9",
    "modulo": 3,
    "dificuldade": 2,
    "correta": 3,
    "enunciado": "Qual a tríade clássica da 'Síndrome Nefrítica'?),",
    "opcoes": [
      "A) Febre, dor e vômitos.",
      "B) Proteinúria, hipoalbuminemia e edema.",
      "C) Sede, urina doce e cansaço.",
      "D) Hematúria (sangue na urina), Hipertensão Arterial e Edema."
    ],
    "explicacao_geral": "Ocorre devido a um processo inflamatório agudo nos glomérulos (ex: Pós-estreptocócica).",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Inespecífico.",
      "B": "[INCORRETA] Características da Síndrome Nefrótica.",
      "C": "[INCORRETA] Diabetes Mellitus.",
      "D": "[CORRETA] A **Síndrome Nefrítica** cursa com **Hematúria e Hipertensão**."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 4347,
    "materia": "fp3",
    "aula_id": "fp3_a9",
    "tema": "fp3_a9",
    "modulo": 3,
    "dificuldade": 2,
    "correta": 0,
    "enunciado": "Por que ocorre o 'Edema' generalizado na Síndrome Nefrótica?),",
    "opcoes": [
      "A) Devido à Hipoalbuminemia, que reduz a pressão oncótica do plasma, permitindo a saída de líquido para o interstício.",
      "B) Porque o paciente bebe muita água.",
      "C) Devido ao excesso de sal no corpo que o rim não filtra.",
      "D) Por falha do coração."
    ],
    "explicacao_geral": "A perda de albumina é o fator iniciador central do edema nefrótico.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] O **Edema Nefrótico** deve-se à **Baixa Pressão Oncótica**.",
      "B": "[INCORRETA] O edema é retenção intersticial.",
      "C": "[INCORRETA] A retenção de sódio (mecanismo overfill) contribui, mas a hipoalbuminemia (underfill) é o conceito clássico da nefrótica.",
      "D": "[INCORRETA] Seria edema cardiogênico."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 4348,
    "materia": "fp3",
    "aula_id": "fp3_a10",
    "tema": "fp3_a10",
    "modulo": 3,
    "dificuldade": 1,
    "correta": 1,
    "enunciado": "Qual a principal alteração imune na 'Doença de Graves' (Hipertireoidismo)?),",
    "opcoes": [
      "A) Destruição da tireoide por anticorpos.",
      "B) Presença de anticorpos (TRAb) que mimetizam o TSH e estimulam excessivamente o receptor na glândula tireoide.",
      "C) Falta de iodo na dieta.",
      "D) Câncer de hipófise."
    ],
    "explicacao_geral": "Leva à tríade: bócio difuso, tireotoxicose e exoftalmia (olhos saltados).",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Mecanismo da Doença de Hashimoto (Hipotireoidismo).",
      "B": "[CORRETA] O **TRAb estimula a Tireoide** na Doença de Graves.",
      "C": "[INCORRETA] O bócio endêmico deve-se à falta de iodo.",
      "D": "[INCORRETA] Pode causar hipertiroidismo secundário (raro), mas graves é primária (autoimune)."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 4349,
    "materia": "fp3",
    "aula_id": "fp3_a10",
    "tema": "fp3_a10",
    "modulo": 3,
    "dificuldade": 2,
    "correta": 3,
    "enunciado": "Sobre a 'Síndrome de Cushing', qual a alteração hormonal DEFINIDORA?),",
    "opcoes": [
      "A) Excesso de insulina.",
      "B) Falta de ADH.",
      "C) Excesso de adrenalina.",
      "D) Hipercortisolismo (excesso crônico de glicocorticoides/cortisol)."
    ],
    "explicacao_geral": "Pode ser causada por tumores na adrenal, na hipófise (Doença de Cushing) ou uso externo de medicamentos.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Insulinoma.",
      "B": "[INCORRETA] Diabetes Insipidus.",
      "C": "[INCORRETA] Feocromocitoma.",
      "D": "[CORRETA] **Cushing** é excesso de **Cortisol**."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 4350,
    "materia": "fp3",
    "aula_id": "fp3_a10",
    "tema": "fp3_a10",
    "modulo": 3,
    "dificuldade": 2,
    "correta": 0,
    "enunciado": "A 'Doença de Addison' caracteriza-se pela falta de produção de quais hormônios pela glândula adrenal?),",
    "opcoes": [
      "A) Cortisol e Aldosterona (Insuficiência adrenal primária).",
      "B) Hormônio do Crescimento e TSH.",
      "C) Insulina e Glucagon.",
      "D) Ocitocina e Prolactina."
    ],
    "explicacao_geral": "Os sintomas incluem fadiga, hipotensão e hiperpigmentação da pele.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] **Addison** é a **falta de corticoides**.",
      "B": "[INCORRETA] Hormônios hipofisários.",
      "C": "[INCORRETA] Hormônios pancreáticos.",
      "D": "[INCORRETA] Hormônios relacionados à amamentação/parto."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 4351,
    "materia": "fp3",
    "aula_id": "fp3_a10",
    "tema": "fp3_a10",
    "modulo": 3,
    "dificuldade": 3,
    "correta": 2,
    "enunciado": "Por que ocorre a 'HIperpigmentação' da pele em pacientes com Doença de Addison?),",
    "opcoes": [
      "A) Porque o cortisol baixo atrai o sol.",
      "B) Por excesso de ferro na pele.",
      "C) Devido ao aumento compensatório de ACTH pela hipófise; o precursor do ACTH (POMC) também gera o hormônio estimulante de melanócitos (MSH).",
      "D) Por falta de banho."
    ],
    "explicacao_geral": "É um sinal clássico de que a falha é na glândula adrenal, não na hipófise.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Absurdo.",
      "B": "[INCORRETA] Hemocromatose.",
      "C": "[CORRETA] O **ACTH alto** causa a **cor 'bronzeada' do Addison**.",
      "D": "[INCORRETA] Absurdo."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 4352,
    "materia": "fp3",
    "aula_id": "fp3_a10",
    "tema": "fp3_a10",
    "modulo": 3,
    "dificuldade": 3,
    "correta": 0,
    "enunciado": "Qual o sinal clínico mais indicativo de Hipotireoidismo primário (Hashimoto) em exames laboratoriais?),",
    "opcoes": [
      "A) TSH Elevado e T4 Livre Baixo.",
      "B) TSH Baixo e T4 Livre Alto.",
      "C) TSH Normal e T4 Livre Normal.",
      "D) Apenas glicose alta."
    ],
    "explicacao_geral": "A hipófise aumenta o TSH tentando 'acordar' a glândula tireoide que está falhando.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] **TSH alto** é o marcador sensível do **Hipotireoidismo**.",
      "B": "[INCORRETA] Perfil de Hipertireoidismo.",
      "C": "[INCORRETA] Eutireoidismo.",
      "D": "[INCORRETA] Irrelevante para diagnóstico tireoidiano primário."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  }
];

const data = JSON.parse(fs.readFileSync(QUESTOES_PATH, 'utf-8'));
data.questoes = data.questoes.concat(novasQuestoes);
fs.writeFileSync(QUESTOES_PATH, JSON.stringify(data, null, 2), 'utf-8');
console.log(`Sucesso: 8 questões da aula fp3_a9/a10 adicionadas.`);
