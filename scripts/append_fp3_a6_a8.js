import fs from 'fs';
import path from 'path';

const QUESTOES_PATH = 'data/questoes.json';

const novasQuestoes = [
  {
    "id": 4321,
    "materia": "fp3",
    "aula_id": "fp3_a6",
    "tema": "fp3_a6",
    "modulo": 3,
    "dificuldade": 1,
    "correta": 1,
    "enunciado": "A 'Doença Celíaca' é uma enteropatia imuno-mediada. Qual o mecanismo básico de lesão intestinal nesta doença?),",
    "opcoes": [
      "A) Infecção por bactérias no glúten.",
      "B) Reação inflamatória ao glúten que leva à atrofia das vilosidades intestinais e hiperplasia das criptas, reduzindo a superfície de absorção.",
      "C) Excesso de produção de ácido no intestino.",
      "D) Falta de enzimas digestivas no pâncreas."
    ],
    "explicacao_geral": "O componente tóxico é a gliadina, presente no trigo, cevada e centeio.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] É uma doença autoimune/inflamatória, não infecciosa.",
      "B": "[CORRETA] A **Doença Celíaca** causa **atrofia vilositária**.",
      "C": "[INCORRETA] Absurdo.",
      "D": "[INCORRETA] Insuficiência pancreática exócrina."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 4322,
    "materia": "fp3",
    "aula_id": "fp3_a6",
    "tema": "fp3_a6",
    "modulo": 3,
    "dificuldade": 2,
    "correta": 3,
    "enunciado": "Qual a principal diferença na distribuição das lesões entre a 'Retocolite Ulcerativa' (RCU) e a 'Doença de Crohn'?),",
    "opcoes": [
      "A) RCU afeta apenas o estômago.",
      "B) Crohn afeta apenas o reto.",
      "C) RCU é transmural e salteada.",
      "D) RCU é contínua e restrita à mucosa do reto e cólon; Crohn é descontínua (lesões salteadas) e pode afetar qualquer parte do trato GI (da boca ao ânus)."
    ],
    "explicacao_geral": "A Doença de Crohn também se caracteriza por inflamação transmural e risco de fístulas.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Afeta o intestino grosso.",
      "B": "[INCORRETA] Crohn pode afetar o reto, mas é mais comum no íleo terminal.",
      "C": "[INCORRETA] Características da Doença de Crohn.",
      "D": "[CORRETA] A **Distribuição do Crohn é salteada** e a da **RCU é contínua**."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 4323,
    "materia": "fp3",
    "aula_id": "fp3_a6",
    "tema": "fp3_a6",
    "modulo": 3,
    "dificuldade": 2,
    "correta": 0,
    "enunciado": "A 'Diarreia Osmótica' caracteriza-se por:),",
    "opcoes": [
      "A) Parada da diarreia com o jejum, causada pela presença de solutos não absorvíveis no lúmen intestinal (ex: intolerância à lactose).",
      "B) Presença de pus e sangue.",
      "C) Perda massiva de água independente da alimentação.",
      "D) Aumento dos batimentos cardíacos."
    ],
    "explicacao_geral": "O soluto atrai água para o lúmen por osmose.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] A **Diarreia Osmótica** cessa com o **Jejum**.",
      "B": "[INCORRETA] Diarreia inflamatória/disentérica.",
      "C": "[INCORRETA] Diarreia secretora (ex: cólera).",
      "D": "[INCORRETA] Consequência da desidratação severa, não definição do tipo de diarreia."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 4324,
    "materia": "fp3",
    "aula_id": "fp3_a7",
    "tema": "fp3_a7",
    "modulo": 3,
    "dificuldade": 1,
    "correta": 2,
    "enunciado": "A 'Cirrose Hepática' é o estágio final de diversas agressões ao fígado. Qual a cicatriz característica que altera a arquitetura e função do órgão?),",
    "opcoes": [
      "A) Formação de gordura apenas.",
      "B) Calcificação dos hepatócitos.",
      "C) Fibrose difusa e formação de nódulos de regeneração.",
      "D) Transformação do fígado em tecido ósseo."
    ],
    "explicacao_geral": "A fibrose obstrui o fluxo sanguíneo senoidal, levando à hipertensão portal.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Esteatose (pode preceder a cirrose).",
      "B": "[INCORRETA] Não é o processo patológico central.",
      "C": "[CORRETA] A **Cirrose** é definida por **Fibrose e Nódulos**.",
      "D": "[INCORRETA] Absurdo."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 4325,
    "materia": "fp3",
    "aula_id": "fp3_a7",
    "tema": "fp3_a7",
    "modulo": 3,
    "dificuldade": 2,
    "correta": 1,
    "enunciado": "A 'Encefalopatia Hepática' na cirrose é causada principalmente pelo acúmulo de qual toxina que o fígado não consegue mais metabolizar?),",
    "opcoes": [
      "A) Glicose.",
      "B) Amônia (proveniente da degradação de proteínas pelas bactérias intestinais).",
      "C) Creatinina.",
      "D) Ácido clorídrico."
    ],
    "explicacao_geral": "A amônia atravessa a barreira hematencefálica, causando edema astrocitário e disfunção neuronal.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Relacionado ao diabetes.",
      "B": "[CORRETA] A **Amônia** é o principal neurotóxico na **Falha Hepática**.",
      "C": "[INCORRETA] Parâmetro de função renal.",
      "D": "[INCORRETA] Ácido estomacal."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 4326,
    "materia": "fp3",
    "aula_id": "fp3_a7",
    "tema": "fp3_a7",
    "modulo": 3,
    "dificuldade": 2,
    "correta": 3,
    "enunciado": "Qual a fisiopatologia da 'Icterícia Obstrutiva' (Pós-hepática), como no cálculo na via biliar?),",
    "opcoes": [
      "A) Destruição excessiva de hemácias.",
      "B) Falta de albumina no sangue.",
      "C) Incapacidade do fígado de captar a bilirrubina.",
      "D) Bloqueio do fluxo de bile, levando ao refluxo de bilirrubina DIRETA (conjugada) para o sangue."
    ],
    "explicacao_geral": "Cursa com fezes claras (acolia fecal) e urina escura (colúria).",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Causa icterícia pré-hepática (bilirrubina indireta).",
      "B": "[INCORRETA] Levaria a edema, não icterícia primária.",
      "C": "[INCORRETA] Causa icterícia hepatocelular.",
      "D": "[CORRETA] A **Obstrução Biliar** aumenta a **Bilirrubina Direta**."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 4327,
    "materia": "fp3",
    "aula_id": "fp3_a8",
    "tema": "fp3_a8",
    "modulo": 3,
    "dificuldade": 2,
    "correta": 0,
    "enunciado": "A 'Lesão Renal Aguda (LRA) Pré-renal' é causada por:),",
    "opcoes": [
      "A) Redução da perfusão sanguínea para o rim (ex: desidratação, hemorragia, choque).",
      "B) Inflamação direta dos glomérulos.",
      "C) Obstrução por cálculos na uretra.",
      "D) Uso de medicamentos nefrotóxicos em altas doses."
    ],
    "explicacao_geral": "O rim está saudável, mas 'sofre' pela falta de sangue e pressão para filtrar.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] A **LRA Pré-renal** deve-se à **Hipoperfusão**.",
      "B": "[INCORRETA] LRA Renal/Intrínseca.",
      "C": "[INCORRETA] LRA Pós-renal.",
      "D": "[INCORRETA] LRA Renal/Intrínseca (NTA)."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 4328,
    "materia": "fp3",
    "aula_id": "fp3_a8",
    "tema": "fp3_a8",
    "modulo": 3,
    "dificuldade": 3,
    "correta": 2,
    "enunciado": "Por que pacientes com Doença Renal Crônica (DRC) avançada frequentemente desenvolvem ANEMIA?),",
    "opcoes": [
      "A) Porque perdem sangue pela urina todos os dias.",
      "B) Porque o rim para de absorver ferro.",
      "C) Devido à redução na produção de Eritropoietina (EPO) pelas células renais peritubulares.",
      "D) Porque a uréia mata as hemácias."
    ],
    "explicacao_geral": "A eritropoietina é o hormônio que estimula a medula óssea a produzir hemácias.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Pode ocorrer na síndrome nefrítica, mas não explica a anemia crônica de base renal universalmente desta forma.",
      "B": "[INCORRETA] A absorção é intestinal.",
      "C": "[CORRETA] A **Falta de EPO** causa a **Anemia da DRC**.",
      "D": "[INCORRETA] A uremia reduz a vida útil das hemácias, mas a causa principal é a baixa produção por falta de estímulo hormonal."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  }
];

const data = JSON.parse(fs.readFileSync(QUESTOES_PATH, 'utf-8'));
data.questoes = data.questoes.concat(novasQuestoes);
fs.writeFileSync(QUESTOES_PATH, JSON.stringify(data, null, 2), 'utf-8');
console.log(`Sucesso: 8 questões da aula fp3_a6/a7/a8 adicionadas.`);
