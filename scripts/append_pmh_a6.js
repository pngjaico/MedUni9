import fs from 'fs';
import path from 'path';

const QUESTOES_PATH = 'data/questoes.json';

const novasQuestoes = [
  {
    "id": 3217,
    "materia": "pmh",
    "aula_id": "pmh_a6",
    "tema": "pmh_a6",
    "modulo": 1,
    "dificuldade": 1,
    "correta": 0,
    "enunciado": "A insulina é o principal hormônio facilitador da captação de glicose nos tecidos periféricos (músculo e gordura). Qual o nome do transportador específico de glicose que é translocado para a membrana celular sob estímulo da insulina?",
    "opcoes": [
      "A) GLUT-4.",
      "B) GLUT-1.",
      "C) SGLT-1.",
      "D) GLUT-2."
    ],
    "explicacao_geral": "Diferentes tecidos utilizam diferentes transportadores; apenas o GLUT-4 é dependente de insulina.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] O **GLUT-4** reside em vesículas citoplasmáticas e só vai para a membrana quando a **insulina** se liga ao seu receptor.",
      "B": "[INCORRETA] GLUT-1 é basal e ubíquo (presente na barreira hematoencefálica e hemácias).",
      "C": "[INCORRETA] SGLT-1 é um cotransportador de sódio-glicose no intestino.",
      "D": "[INCORRETA] GLUT-2 está no fígado e pâncreas, tendo alta capacidade e baixa afinidade (independente de insulina)."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3218,
    "materia": "pmh",
    "aula_id": "pmh_a6",
    "tema": "pmh_a6",
    "modulo": 1,
    "dificuldade": 2,
    "correta": 3,
    "enunciado": "Um paciente com Diabetes Mellitus Tipo 1 apresenta-se no pronto-socorro com hálito cetônico, desidratação e dor abdominal. O exame mostra glicemia de 450 mg/dL e presença de corpos cetônicos na urina. Qual o mecanismo bioquímico que explica a formação excessiva desses corpos cetônicos?",
    "opcoes": [
      "A) Excesso de insulina estimulando a síntese de gordura.",
      "B) Bloqueio da via das pentoses-fosfato.",
      "C) Consumo excessivo de açúcar na dieta nas últimas 24 horas.",
      "D) Falta de insulina levando à lipólise desenfreada e oxidação massiva de ácidos graxos no fígado."
    ],
    "explicacao_geral": "A Cetoacidose Diabética (CAD) decorre da incapacidade da célula em usar glicose, forçando o uso de gorduras como combustível de emergência.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] No DM1 há deficiência absoluta de insulina.",
      "B": "[INCORRETA] Não é a causa da cetoacidose.",
      "C": "[INCORRETA] O açúcar alto é consequência da falta de insulina, mas o que gera cetose é a queima de gordura.",
      "D": "[CORRETA] Sem **insulina**, o corpo libera ácidos graxos que o fígado converte em **corpos cetônicos** (Acetona, Acetoacetato, Beta-hidroxibutirato)."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 3219,
    "materia": "pmh",
    "aula_id": "pmh_a6",
    "tema": "pmh_a6",
    "modulo": 1,
    "dificuldade": 2,
    "correta": 2,
    "enunciado": "O hormônio glucagon atua de forma oposta à insulina. Qual processo metabólico hepático é FORTEMENTE estimulado pelo glucagon para elevar a glicemia durante o jejum?",
    "opcoes": [
      "A) Glicólise.",
      "B) Síntese de proteínas.",
      "C) Glicogenólise e Gliconeogênese.",
      "D) Glicogênese."
    ],
    "explicacao_geral": "O glucagon mobiliza as reservas e estimula a produção de nova glicose no fígado.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] O glucagon inibe a glicólise hepática.",
      "B": "[INCORRETA] O glucagon é catabólico em relação às proteínas em excesso.",
      "C": "[CORRETA] O **glucagon** 'liga' a quebra do glicogênio (**glicogenólise**) e a produção de glicose nova (**gliconeogênese**).",
      "D": "[INCORRETA] Glicogênese é a síntese, estimulada pela insulina."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3220,
    "materia": "pmh",
    "aula_id": "pmh_a6",
    "tema": "pmh_a6",
    "modulo": 1,
    "dificuldade": 2,
    "correta": 0,
    "enunciado": "A Hemoglobina Glicada (HbA1c) é um marcador fundamental no acompanhamento do paciente diabético. O que esse exame reflete especificamente?",
    "opcoes": [
      "A) A média da glicemia do paciente nos últimos 2 a 3 meses.",
      "B) O nível de glicose no sangue no exato momento da coleta.",
      "C) A quantidade de insulina que o pâncreas ainda consegue produzir.",
      "D) O risco do paciente desenvolver infarto nos próximos 10 anos."
    ],
    "explicacao_geral": "A glicose liga-se de forma irreversível à hemoglobina; como a hemácia vive cerca de 120 dias, o exame dá um histórico glicêmico.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] A **HbA1c** é o padrão-ouro para avaliar o **controle glicêmico a longo prazo**.",
      "B": "[INCORRETA] Esta é a glicemia de jejum ou capilar.",
      "C": "[INCORRETA] A reserva de insulina é avaliada pelo Peptídeo C.",
      "D": "[INCORRETA] Embora o controle da glicemia afete o risco CV, o exame mede açúcar, não risco vascular direto (como o escore de Framingham)."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3221,
    "materia": "pmh",
    "aula_id": "pmh_a6",
    "tema": "pmh_a6",
    "modulo": 1,
    "dificuldade": 3,
    "correta": 1,
    "enunciado": "Na Diabetes Mellitus Tipo 2, o principal problema inicial não é a falta de insulina, mas sim a 'resistência insulínica'. Qual alteração molecular é típica desse estado?",
    "opcoes": [
      "A) O pâncreas para de fabricar insulina imediatamente.",
      "B) Falha na sinalização intracelular após a ligação da insulina ao seu receptor.",
      "C) O rim passa a absorver glicose pela urina.",
      "D) O paciente passa a produzir anticorpos que destroem os receptores de insulina."
    ],
    "explicacao_geral": "A resistência envolve defeitos pós-receptor, frequentemente associados à inflamação crônica do tecido adiposo.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] No início da DM2, o pâncreas costuma produzir MUITA insulina (hiperinsulinemia compensatória).",
      "B": "[CORRETA] A **resistência à insulina** é um defeito funcional na cascata de fosforilação intracelular.",
      "C": "[INCORRETA] O rim sempre reabsorve glicose até certo limite (limiar renal), independente da insulina.",
      "D": "[INCORRETA] DM2 não é primariamente uma doença autoimune de receptores (embora existam formas raras como a Síndrome de Kahn)."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3222,
    "materia": "pmh",
    "aula_id": "pmh_a6",
    "tema": "pmh_a6",
    "modulo": 1,
    "dificuldade": 2,
    "correta": 2,
    "enunciado": "Um paciente obeso realiza um Teste Oral de Tolerância à Glicose (TOTG). Dois anos depois, sua glicemia de 2 horas após a carga de 75g de glicose é de 180 mg/dL. Qual o diagnóstico adequado segundo os critérios da ADA/SBD?",
    "opcoes": [
      "A) Normoglicemia (Normal).",
      "B) Diabetes Mellitus franco.",
      "C) Pré-diabetes (Tolerância à Glicose Diminuída).",
      "D) Hipoglicemia reativa."
    ],
    "explicacao_geral": "Valores entre 140 e 199 mg/dL no TOTG de 2h indicam pré-diabetes.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Normal seria abaixo de 140 mg/dL.",
      "B": "[INCORRETA] Diabetes seria igual ou superior a 200 mg/dL.",
      "C": "[CORRETA] O valor de **180 mg/dL** enquadra o paciente na faixa de **Pré-diabetes**.",
      "D": "[INCORRETA] Valor elevado, não baixo."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 3223,
    "materia": "pmh",
    "aula_id": "pmh_a6",
    "tema": "pmh_a6",
    "modulo": 1,
    "dificuldade": 2,
    "correta": 3,
    "enunciado": "A adrenalina (epinefrina) estimula a elevação da glicemia em situações de 'luta ou fuga'. Qual a diferença fundamental de sua ação em relação ao glucagon?),",
    "opcoes": [
      "A) A adrenalina atua apenas no fígado.",
      "B) O glucagon atua apenas no cérebro.",
      "C) A adrenalina inibe a gliconeogênese.",
      "D) A adrenalina estimula a glicogenólise tanto no fígado quanto no MÚSCULO."
    ],
    "explicacao_geral": "O glucagon não possui receptores no músculo esquelético, enquanto a adrenalina atua em ambos.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] A adrenalina atua em múltiplos órgãos (fígado, músculo, coração, pulmão).",
      "B": "[INCORRETA] O glucagon atua predominantemente no fígado.",
      "C": "[INCORRETA] A adrenalina estimula a gliconeogênese hepática.",
      "D": "[CORRETA] A **adrenalina** garante energia rápida para o **músculo** e glicose para o **sangue** (fígado)."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3224,
    "materia": "pmh",
    "aula_id": "pmh_a6",
    "tema": "pmh_a6",
    "modulo": 1,
    "dificuldade": 3,
    "correta": 1,
    "enunciado": "Por que pacientes com Diabetes Mellitus Tipo 2 raramente desenvolvem Cetoacidose Diabética (CAD), ao contrário dos pacientes Tipo 1?),",
    "opcoes": [
      "A) Porque o Tipo 2 não tem resistência periférica.",
      "B) Porque ainda restam níveis mínimos de insulina capazes de inibir a lipólise massiva, embora insuficientes para a normoglicemia.",
      "C) Porque o tipo 2 urina menos corpos cetônicos.",
      "D) Porque as células do tipo 2 preferem usar apenas gordura sempre."
    ],
    "explicacao_geral": "A insulina necessária para 'frear' a quebra de gordura é muito menor do que a necessária para normalizar o açúcar no sangue.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] A resistência é a marca do Tipo 2.",
      "B": "[CORRETA] A **insulina residual** no DM2 impede a cetose, mas o paciente pode evoluir com Estado Hiperosmolar.",
      "C": "[INCORRETA] A produção que é menor, não a excreção.",
      "D": "[INCORRETA] O problema é justamente a resistência ao uso da glicose."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  }
];

const data = JSON.parse(fs.readFileSync(QUESTOES_PATH, 'utf-8'));
data.questoes = data.questoes.concat(novasQuestoes);
fs.writeFileSync(QUESTOES_PATH, JSON.stringify(data, null, 2), 'utf-8');
console.log(`Sucesso: 8 questões da aula pmh_a6 adicionadas.`);
