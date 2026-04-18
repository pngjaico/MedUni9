import fs from 'fs';
import path from 'path';

const QUESTOES_PATH = 'data/questoes.json';

const novasQuestoes = [
  {
    "id": 4161,
    "materia": "bmf3",
    "aula_id": "bmf3_a8",
    "tema": "bmf3_a8",
    "modulo": 3,
    "dificuldade": 1,
    "correta": 1,
    "enunciado": "Qual dos seguintes fármacos é a 'Primeira Escolha' para o tratamento do Diabetes Mellitus Tipo 2, agindo principalmente na redução da produção hepática de glicose?),",
    "opcoes": [
      "A) Glibenclamida.",
      "B) Metformina.",
      "C) Insulina NPH.",
      "D) Pioglitazona."
    ],
    "explicacao_geral": "A metformina não causa hipoglicemia quando usada isoladamente e ajuda moderadamente na perda de peso.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Secretagogo (estimula liberação de insulina), risco de hipoglicemia.",
      "B": "[CORRETA] A **Metformina** é a droga de **primeira linha no DM2**.",
      "C": "[INCORRETA] Hormônio de substituição, geralmente não é a primeira escolha no DM2 inicial.",
      "D": "[INCORRETA] Sensibilizador de insulina (Tiazolidinediona)."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 4162,
    "materia": "bmf3",
    "aula_id": "bmf3_a8",
    "tema": "bmf3_a8",
    "modulo": 3,
    "dificuldade": 1,
    "correta": 3,
    "enunciado": "Sobre as insulinas, qual a principal característica da 'Insulina NPH' em relação ao seu tempo de ação?),",
    "opcoes": [
      "A) Ação ultrarrápida (minutos).",
      "B) Ação ultralenta (24-42 horas, sem pico).",
      "C) Nenhuma das anteriores.",
      "D) Ação intermediária (início em 1-2h, pico em 4-8h)."
    ],
    "explicacao_geral": "A NPH é usada para controle basal, geralmente dividida em duas ou três doses diárias.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Característica das análogas rápidas (Lispro/Aspart).",
      "B": "[INCORRETA] Característica das análogas lentas (Glargina/Degludeca).",
      "C": "[INCORRETA] Lógica errada.",
      "D": "[CORRETA] A **NPH** é uma insulina de **Ação Intermediária**."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 4163,
    "materia": "bmf3",
    "aula_id": "bmf3_a8",
    "tema": "bmf3_a8",
    "modulo": 3,
    "dificuldade": 2,
    "correta": 0,
    "enunciado": "Qual classe de antidiabéticos orais (ex: Empagliflozina) atua inibindo a reabsorção renal de glicose, promovendo a sua eliminação pela urina (glicosúria)?),",
    "opcoes": [
      "A) Inibidores da SGLT2.",
      "B) Sulfonilureias.",
      "C) Agonistas GLP-1.",
      "D) Inibidores da DPP-4."
    ],
    "explicacao_geral": "Esses fármacos mostraram importantes benefícios cardiovasculares e renais em pacientes diabéticos.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] Os **Inibidores da SGLT2** promovem a **Glicosúria Terapêutica**.",
      "B": "[INCORRETA] Agem no pâncreas.",
      "C": "[INCORRETA] Agem via efeito incretínico (mimetizam hormônios intestinais).",
      "D": "[INCORRETA] Prolongam a vida das incretinas naturais bloqueando sua degradação."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 4164,
    "materia": "bmf3",
    "aula_id": "bmf3_a9",
    "tema": "bmf3_a9",
    "modulo": 3,
    "dificuldade": 1,
    "correta": 1,
    "enunciado": "Os 'Glicocorticoides' (como a Prednisona) possuem potente ação anti-inflamatória e imunossupressora. Qual o seu principal mecanismo a nível celular?),",
    "opcoes": [
      "A) Bloqueio dos canais de sódio nervosos.",
      "B) Interação com receptores citoplasmáticos, migrando para o núcleo e alterando a transcrição de genes pró-inflamatórios e anti-inflamatórios.",
      "C) Destruição direta dos linfócitos por lise osmótica.",
      "D) Aumento da produção de glóbulos brancos."
    ],
    "explicacao_geral": "Eles inibem a expressão de citocinas inflamatórias, da enzima COX-2 e da Fosfolipase A2.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Anestésicos locais.",
      "B": "[CORRETA] Os **Corticoides** possuem **Mecanismo Genômico** de ação.",
      "C": "[INCORRETA] Causam apoptose em certas linhagens, mas não lise osmótica.",
      "D": "[INCORRETA] Pelo contrário, inibem a função imunológica (apesar de causarem neutrofilia periférica por desmarginação)."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 4165,
    "materia": "bmf3",
    "aula_id": "bmf3_a9",
    "tema": "bmf3_a9",
    "modulo": 3,
    "dificuldade": 2,
    "correta": 3,
    "enunciado": "O uso prolongado de corticoides em doses elevadas NUNCA deve ser interrompido bruscamente. Por que?),",
    "opcoes": [
      "A) Porque o paciente pode ficar viciado psicologicamente.",
      "B) Porque o remédio deixa de fazer efeito se parar.",
      "C) Porque causa hipertensão súbita.",
      "D) Devido ao risco de Insuficiência Adrenal Aguda (o eixo hipotálamo-hipófise-adrenal está suprimido e a glândula atrofiada)."
    ],
    "explicacao_geral": "A retirada deve ser gradual (desmame) para permitir a recuperação da produção endógena de cortisol.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Não é um efeito de 'vício' psicoativo.",
      "B": "[INCORRETA] O efeito anti-inflamatório cessa, mas o perigo é metabólico agudo.",
      "C": "[INCORRETA] Pelo contrário, a insuficiência adrenal causa hipotensão severa (choque).",
      "D": "[CORRETA] A parada brusca pode causar **Crise Adrenal Fatal**."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 4166,
    "materia": "bmf3",
    "aula_id": "bmf3_a9",
    "tema": "bmf3_a9",
    "modulo": 3,
    "dificuldade": 2,
    "correta": 2,
    "enunciado": "Qual dos seguintes efeitos metabólicos é um 'Efeito Colateral' comum e esperado do uso crônico de glicocorticoides?),",
    "opcoes": [
      "A) Hipoglicemia.",
      "B) Ganho de massa muscular intensa.",
      "C) Hiperglicemia (Diabetes medicamentoso) e Osteoporose.",
      "D) Queda na pressão arterial."
    ],
    "explicacao_geral": "Os corticoides aumentam a gliconeogênese e promovem a reabsorção óssea.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Eles são hormônios contrarreguladores da insulina (aumentam glicose).",
      "B": "[INCORRETA] Causam catabolismo proteico (atrofia muscular).",
      "C": "[CORRETA] Os **Corticoides** são **Diabetogênicos e Osteopênicos**.",
      "D": "[INCORRETA] Causam retenção de sódio e água (hipertensão)."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 4167,
    "materia": "bmf3",
    "aula_id": "bmf3_a10",
    "tema": "bmf3_a10",
    "modulo": 3,
    "dificuldade": 3,
    "correta": 0,
    "enunciado": "Como atuam os anticoncepcionais hormonais orais combinados (estrogênio + progesterona) para prevenir a gravidez?),",
    "opcoes": [
      "A) Inibem a liberação de FSH e LH pela hipófise, bloqueando o pico de LH e, consequentemente, a ovulação.",
      "B) Matam os espermatozoides no útero.",
      "C) Fazem uma barreira física no colo uterino.",
      "D) Impedem que o óvulo seja produzido pelo ovário permanentemente."
    ],
    "explicacao_geral": "Ao manter níveis constantes de hormônios exógenos, o feedback negativo 'engana' o cérebro, que para de estimular os ovários.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] Os **Anticoncepcionais** agem via **Feedback Negativo Central**.",
      "B": "[INCORRETA] Função de espermicidas.",
      "C": "[INCORRETA] Função de preservativos ou diafragmas (apesar da alteração do muco cervical pela progesterona auxiliar).",
      "D": "[INCORRETA] O efeito é reversível ao interromper o uso."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 4168,
    "materia": "bmf3",
    "aula_id": "bmf3_a10",
    "tema": "bmf3_a10",
    "modulo": 3,
    "dificuldade": 2,
    "correta": 1,
    "enunciado": "O fármaco 'Finasterida' é utilizado no tratamento da calvície e da HPB. Qual seu mecanismo de ação?),",
    "opcoes": [
      "A) Aumento da testosterona livre.",
      "B) Inibição da enzima 5-alfa redutase, diminuindo a conversão de testosterona em di-hidrotestosterona (DHT).",
      "C) Bloqueio dos receptores de estrogênio.",
      "D) Estimulação direta do nascimento de pelos."
    ],
    "explicacao_geral": "A DHT é o andrógeno mais potente responsável pelo crescimento da próstata e queda de cabelo androgênica.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Pode até aumentar levemente, mas o objetivo é reduzir a DHT.",
      "B": "[CORRETA] A **Finasterida** reduz a produção de **DHT**.",
      "C": "[INCORRETA] Característica do Tamoxifeno ou Clomifeno.",
      "D": "[INCORRETA] Minoxidil atua de forma tópica via vasodilatação/proliferação, diferente da finasterida."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  }
];

const data = JSON.parse(fs.readFileSync(QUESTOES_PATH, 'utf-8'));
data.questoes = data.questoes.concat(novasQuestoes);
fs.writeFileSync(QUESTOES_PATH, JSON.stringify(data, null, 2), 'utf-8');
console.log(`Sucesso: 8 questões da aula bmf3_a8/a9/a10 adicionadas.`);
