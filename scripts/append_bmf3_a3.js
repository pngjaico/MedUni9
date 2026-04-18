import fs from 'fs';
import path from 'path';

const QUESTOES_PATH = 'data/questoes.json';

const novasQuestoes = [
  {
    "id": 4121,
    "materia": "bmf3",
    "aula_id": "bmf3_a3",
    "tema": "bmf3_a3",
    "modulo": 3,
    "dificuldade": 1,
    "correta": 1,
    "enunciado": "A 'Adrenalina' é o fármaco de escolha no tratamento do Choque Anafilático. Qual a principal combinação de efeitos que justifica o seu uso nesta emergência?),",
    "opcoes": [
      "A) Diminuição da frequência cardíaca e aumento do suor.",
      "B) Vasoconstrição periférica (Alfa-1 - aumenta pressão) e Broncodilatação (Beta-2 - melhora respiração).",
      "C) Sono profundo e relaxamento muscular.",
      "D) Redução da glicose no sangue."
    ],
    "explicacao_geral": "A adrenalina atua em todos os receptores adrenérgicos (alfa e beta), combatendo os principais sintomas da anafilaxia.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Adrenalina causa taquicardia.",
      "B": "[CORRETA] A **Adrenalina** estabiliza as **vias aéreas e a pressão**.",
      "C": "[INCORRETA] Adrenalina é um estimulante.",
      "D": "[INCORRETA] Adrenalina é hiperglicemiante (estimula glicogenólise)."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 4122,
    "materia": "bmf3",
    "aula_id": "bmf3_a3",
    "tema": "bmf3_a3",
    "modulo": 3,
    "dificuldade": 1,
    "correta": 3,
    "enunciado": "Qual dos seguintes fármacos é um antagonista Beta-adrenérgico NÃO seletivo (bloqueia Beta-1 e Beta-2), sendo contraindicado para pacientes asmáticos?),",
    "opcoes": [
      "A) Atenolol.",
      "B) Metoprolol.",
      "C) Salbutamol.",
      "D) Propranolol."
    ],
    "explicacao_geral": "O bloqueio do receptor Beta-2 nos pulmões pode induzir broncoespasmo grave em pessoas predispostas.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Beta-bloqueador cardiosseletivo (foca em Beta-1).",
      "B": "[INCORRETA] Beta-bloqueador cardiosseletivo.",
      "C": "[INCORRETA] Agonista Beta-2 (usado para tratar asma).",
      "D": "[CORRETA] O **Propranolol** é um **Beta-bloqueador Não Seletivo**."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 4123,
    "materia": "bmf3",
    "aula_id": "bmf3_a3",
    "tema": "bmf3_a3",
    "modulo": 3,
    "dificuldade": 2,
    "correta": 0,
    "enunciado": "O 'Salbutamol' e o 'Fenoterol' são fármacos utilizados em crises de asma por via inalatória. Eles atuam em qual receptor?),",
    "opcoes": [
      "A) Agonistas seletivos dos receptores Beta-2.",
      "B) Antagonistas muscarínicos.",
      "C) Bloqueadores de canais de sódio.",
      "D) Agonistas Alfa-1."
    ],
    "explicacao_geral": "Sua ação rápida promove o relaxamento imediato da musculatura lisa bronquial.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] **SABA** (Short-Acting Beta Agonists) ativam o **Beta-2**.",
      "B": "[INCORRETA] Descrição do Ipratrópio.",
      "C": "[INCORRETA] Anestésicos locais.",
      "D": "[INCORRETA] Causariam vasoconstrição e hipertensão."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 4124,
    "materia": "bmf3",
    "aula_id": "bmf3_a3",
    "tema": "bmf3_a3",
    "modulo": 3,
    "dificuldade": 2,
    "correta": 2,
    "enunciado": "A 'Dobutamina' é uma amina simpaticomimética muito usada em UTIs para insuficiência cardíaca aguda. Qual seu principal receptor e efeito?),",
    "opcoes": [
      "A) Beta-2; broncodilatação.",
      "B) Alfa-1; aumento da resistência vascular periférica.",
      "C) Beta-1; aumento da contratilidade cardíaca (inotropismo positivo).",
      "D) Muscarínico; bradicardia."
    ],
    "explicacao_geral": "A dobutamina melhora o débito cardíaco sem aumentar excessivamente a frequência cardíaca comparada a outros agentes.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Efeito pulmonar.",
      "B": "[INCORRETA] Característica da Noradrenalina.",
      "C": "[CORRETA] A **Dobutamina** foca na **força do coração (Beta-1)**.",
      "D": "[INCORRETA] Fármaco simpaticomimético não atua em receptor muscarínico."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 4125,
    "materia": "bmf3",
    "aula_id": "bmf3_a3",
    "tema": "bmf3_a3",
    "modulo": 3,
    "dificuldade": 3,
    "correta": 1,
    "enunciado": "A 'Clonidina' é um agonista parcial dos receptores Alfa-2. Qual o seu efeito no sistema cardiovascular?),",
    "opcoes": [
      "A) Hipertensão aguda (estimula o simpático).",
      "B) Redução da pressão arterial (inibição simpática central via autorreceptores).",
      "C) Aumento da frequência cardíaca.",
      "D) Midríase intensa."
    ],
    "explicacao_geral": "Como o receptor Alfa-2 é um autorreceptor inibitório no SNC, sua ativação diminui a eferência simpática do bulbo.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Causa hipotensão.",
      "B": "[CORRETA] A **Clonidina** é um **anti-hipertensivo de ação central**.",
      "C": "[INCORRETA] Causa bradicardia reflexa ou direta central.",
      "D": "[INCORRETA] Não é o efeito clínico principal sistêmico esperado."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 4126,
    "materia": "bmf3",
    "aula_id": "bmf3_a3",
    "tema": "bmf3_a3",
    "modulo": 3,
    "dificuldade": 2,
    "correta": 3,
    "enunciado": "Um paciente em tratamento para Hiperplasia Prostática Benigna (HPB) utiliza 'Tansulosina'. Qual o mecanismo e o principal efeito colateral observado?),",
    "opcoes": [
      "A) Antagonista Beta-bloqueador; asma.",
      "B) Agonista Muscarínico; diarreia.",
      "C) Antagonista Alfa-1; hipertensão súbita.",
      "D) Antagonista Alfa-1; hipotensão postural (tontura ao levantar)."
    ],
    "explicacao_geral": "Ao relaxar o músculo liso do colo vesical e próstata, também pode relaxar vasos periféricos.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Não trata HPB desta forma.",
      "B": "[INCORRETA] Betanecol ajuda a urinar, mas tansulosina é antagonista adrenérgico.",
      "C": "[INCORRETA] Causa queda de pressão.",
      "D": "[CORRETA] A **Tansulosina** pode causar **Hipotensão Ortostática**."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 4127,
    "materia": "bmf3",
    "aula_id": "bmf3_a3",
    "tema": "bmf3_a3",
    "modulo": 3,
    "dificuldade": 3,
    "correta": 0,
    "enunciado": "A 'Noradrenalina' é a droga vasopressora de escolha no Choque Séptico. Qual receptor ela ativa PREDOMINANTEMENTE para elevar a pressão arterial?),",
    "opcoes": [
      "A) Receptor Alfa-1 (Vasoconstrição sistêmica intensa).",
      "B) Receptor Beta-2 (Broncodilatação).",
      "C) Receptor D2 (Dopaminérgico).",
      "D) Receptor Muscarínico M3."
    ],
    "explicacao_geral": "Sua ação em alfa-1 aumenta a resistência vascular periférica e, consequentemente, a pressão de perfusão.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] A **Noradrenalina** é um potente **agonista Alfa-1**.",
      "B": "[INCORRETA] Ação mínima da noradrenalina.",
      "C": "[INCORRETA] Receptores de dopamina.",
      "D": "[INCORRETA] Sem correlação adrenérgica."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 4128,
    "materia": "bmf3",
    "aula_id": "bmf3_a3",
    "tema": "bmf3_a3",
    "modulo": 3,
    "dificuldade": 2,
    "correta": 2,
    "enunciado": "Fármacos como o 'Xilometazolina' e 'Nafazolina' são usados como descongestionantes nasais. Qual o risco do uso crônico continuado dessas substâncias?),",
    "opcoes": [
      "A) Vício em cigarro.",
      "B) Perda total do olfato apenas.",
      "C) Rinite medicamentosa (hiperemia reacional ao cessar o uso) e potencial dependência do fármaco.",
      "D) Sonolência excessiva."
    ],
    "explicacao_geral": "O uso prolongado causa 'down-regulation' de receptores e isquemia local crônica da mucosa.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Sem relação.",
      "B": "[INCORRETA] Pode haver hiposmia, mas o problema principal é a rinite medicamentosa.",
      "C": "[CORRETA] Descongestionantes nasais causam **Rinite Medicamentosa**.",
      "D": "[INCORRETA] São agentes simpatomiméticos, tenderiam a causar alerta/discreta agitação se absorvidos sistemicamente em excesso."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  }
];

const data = JSON.parse(fs.readFileSync(QUESTOES_PATH, 'utf-8'));
data.questoes = data.questoes.concat(novasQuestoes);
fs.writeFileSync(QUESTOES_PATH, JSON.stringify(data, null, 2), 'utf-8');
console.log(`Sucesso: 8 questões da aula bmf3_a3 adicionadas.`);
