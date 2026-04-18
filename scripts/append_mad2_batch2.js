import fs from 'fs';
import path from 'path';

const QUESTOES_PATH = 'data/questoes.json';

const novasQuestoes = [
  {
    "id": 4441,
    "materia": "mad2",
    "aula_id": "mad2_a6",
    "tema": "mad2_a6",
    "modulo": 3,
    "dificuldade": 1,
    "correta": 1,
    "enunciado": "Qual a principal célula alvo do vírus HIV no organismo humano?),",
    "opcoes": [
      "A) Linfócitos B.",
      "B) Linfócitos T CD4+ (auxiliares).",
      "C) Glóbulos vermelhos.",
      "D) Plaquetas."
    ],
    "explicacao_geral": "A destruição progressiva destas células leva à imunodeficiência profunda característica da AIDS.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Produzem anticorpos, mas não são o alvo primário.",
      "B": "[CORRETA] O **HIV** infecta os **Linfócitos T CD4+**.",
      "C": "[INCORRETA] Hemácias não têm núcleo e não são alvo do HIV.",
      "D": "[INCORRETA] Plaquetas atuam na coagulação."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 4442,
    "materia": "mad2",
    "aula_id": "mad2_a6",
    "tema": "mad2_a6",
    "modulo": 3,
    "dificuldade": 2,
    "correta": 3,
    "enunciado": "Sobre a 'Profilaxia Pós-Exposição' (PEP) ao HIV, qual o prazo IDEAL para o início do tratamento após o acidente?),",
    "opcoes": [
      "A) Até 7 dias.",
      "B) Apenas se aparecerem sintomas.",
      "C) Pode começar a qualquer momento após um mês.",
      "D) O mais rápido possível, preferencialmente nas primeiras 2 horas, com limite máximo de 72 horas."
    ],
    "explicacao_geral": "A eficácia da PEP diminui significativamente se iniciada após 72 horas da exposição.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Prazo muito longo, virus já pode ter se integrado ao genoma.",
      "B": "[INCORRETA] PEP é preventiva, sintomas demoram semanas/meses.",
      "C": "[INCORRETA] Inútil como profilaxia após este prazo.",
      "D": "[CORRETA] A **PEP** deve ser iniciada em até **72 horas**."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 4443,
    "materia": "mad2",
    "aula_id": "mad2_a7",
    "tema": "mad2_a7",
    "modulo": 3,
    "dificuldade": 1,
    "correta": 1,
    "enunciado": "Qual doença sexualmente transmissível caracteriza-se por uma 'úlcera única, indolor, com bordas endurecidas e fundo limpo' (Cancro Duro)?),",
    "opcoes": [
      "A) Cancro Mole.",
      "B) Sífilis Primária (causada pelo Treponema pallidum).",
      "C) Herpes Genital.",
      "D) HPV."
    ],
    "explicacao_geral": "O cancro duro desaparece espontaneamente mesmo sem tratamento, mas a doença continua a evoluir para a fase secundária.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Úlceras múltiplas, fundo sujo e MUITO dolorosas.",
      "B": "[CORRETA] O **Cancro Duro** é a marca da **Sífilis Primária**.",
      "C": "[INCORRETA] Pequenas vesículas dolorosas que se tornam úlceras.",
      "D": "[INCORRETA] Causa verrugas genitais (condilomas)."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 4444,
    "materia": "mad2",
    "aula_id": "mad2_a7",
    "tema": "mad2_a7",
    "modulo": 3,
    "dificuldade": 2,
    "correta": 0,
    "enunciado": "O tratamento sindrômico de corrimento uretral no homem foca na cobertura de quais patógenos principais?),",
    "opcoes": [
      "A) Neisseria gonorrhoeae (Gonococo) e Chlamydia trachomatis.",
      "B) Vírus Influenza e HIV.",
      "C) Bactérias da pele.",
      "D) Apenas fungos."
    ],
    "explicacao_geral": "Geralmente utiliza-se ceftriaxona (EV/IM) e azitromicina (VO) para cobrir ambos simultaneamente.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] O tratamento cobre **Gonococo e Clamídia**.",
      "B": "[INCORRETA] Influenza é respiratório.",
      "C": "[INCORRETA] Inespecífico.",
      "D": "[INCORRETA] Candidíase é menos comum no canal uretral masculino que as causas bacterianas."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 4445,
    "materia": "mad2",
    "aula_id": "mad2_a8",
    "tema": "mad2_a8",
    "modulo": 3,
    "dificuldade": 2,
    "correta": 2,
    "enunciado": "Qual vírus da hepatite possui maior risco de cronificação (tornar-se uma doença crônica, evoluindo para cirrose) na idade adulta?),",
    "opcoes": [
      "A) Vírus da Hepatite A.",
      "B) Vírus da Hepatite B (em vacinados).",
      "C) Vírus da Hepatite C (HCV).",
      "D) Vírus da Gripe."
    ],
    "explicacao_geral": "Cerca de 60% a 85% dos pacientes infectados pelo HCV desenvolvem hepatite crônica.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Hepatite A nunca cronifica.",
      "B": "[INCORRETA] Risco de cronificação em adultos é cerca de 5% (é maior em recém-nascidos).",
      "C": "[CORRETA] O **Vírus C** tem a maior taxa de **cronificação**.",
      "D": "[INCORRETA] Irrelevante para hepatite."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 4446,
    "materia": "mad2",
    "aula_id": "mad2_a8",
    "tema": "mad2_a8",
    "modulo": 3,
    "dificuldade": 3,
    "correta": 0,
    "enunciado": "A presença de 'HBsAg positivo' no sangue de um paciente indica que:),",
    "opcoes": [
      "A) O paciente tem o vírus da hepatite B presente no organismo (infecção aguda ou crônica).",
      "B) O paciente está curado e imune.",
      "C) O paciente tomou a vacina e está protegido.",
      "D) O paciente nunca teve contato com o vírus."
    ],
    "explicacao_geral": "Se o HBsAg persistir por mais de 6 meses, define-se hepatite B crônica.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] **HBsAg positivo** significa **infecção ativa**.",
      "B": "[INCORRETA] O marcador de cura/imunidade é o Anti-HBs positivo com HBsAg negativo.",
      "C": "[INCORRETA] Marcador de vacinação é o Anti-HBs positivo isolado (com Anti-HBc negativo).",
      "D": "[INCORRETA] Seria um paciente susceptível (todos os marcadores negativos)."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 4447,
    "materia": "mad2",
    "aula_id": "mad2_a9",
    "tema": "mad2_a9",
    "modulo": 3,
    "dificuldade": 1,
    "correta": 3,
    "enunciado": "Qual parasitose intestinal caracteriza-se pelo prurido anal (coceira) noturno intenso?),",
    "opcoes": [
      "A) Ascaridíase (Lombriga).",
      "B) Teníase (Solitária).",
      "C) Giardíase.",
      "D) Enterobíase (Oxiuríase)."
    ],
    "explicacao_geral": "A fêmea do verme migra para a região perianal à noite para depositar seus ovos.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Causa sintomas abdominais ou respiratórios (Síndrome de Loeffler).",
      "B": "[INCORRETA] Causa dor abdominal e emagrecimento.",
      "C": "[INCORRETA] Causa diarreia gordurosa e fétida (esteatorreia).",
      "D": "[CORRETA] O **Enterobius vermicularis** causa **Prurido Anal Noturno**."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 4448,
    "materia": "mad2",
    "aula_id": "mad2_a10",
    "tema": "mad2_a10",
    "modulo": 3,
    "dificuldade": 2,
    "correta": 2,
    "enunciado": "Na Dengue, qual o sinal de alarme que indica necessidade de manejo imediato para prevenir choque? (Classificação do Ministério da Saúde)),",
    "opcoes": [
      "A) Febre que começou a cair após 3 dias.",
      "B) Coceira no corpo.",
      "C) Dor abdominal intensa e contínua e vômitos persistentes.",
      "D) Perda do olfato."
    ],
    "explicacao_geral": "Os sinais de alarme geralmente ocorrem na fase de defervescência (queda da febre) por extravasamento plasmático.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Início da fase crítica, mas a queda da febre em si não é o sinal de alarme clínico de gravidade iminente (apesar de marcar o tempo de risco).",
      "B": "[INCORRETA] Sintoma comum e benigno na fase de recuperação.",
      "C": "[CORRETA] **Dor Abdominal e Vômitos** são **Sinais de Alarme na Dengue**.",
      "D": "[INCORRETA] Comum no COVID-19."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  }
];

const data = JSON.parse(fs.readFileSync(QUESTOES_PATH, 'utf-8'));
data.questoes = data.questoes.concat(novasQuestoes);
fs.writeFileSync(QUESTOES_PATH, JSON.stringify(data, null, 2), 'utf-8');
console.log(`Sucesso: 8 questões da aula mad2_a6-a10 adicionadas.`);
