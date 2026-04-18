import fs from 'fs';
import path from 'path';

const QUESTOES_PATH = 'data/questoes.json';

const novasQuestoes = [
  {
    "id": 4561,
    "materia": "st",
    "aula_id": "st_a1",
    "tema": "st_a1",
    "modulo": 3,
    "dificuldade": 1,
    "correta": 1,
    "enunciado": "Sobre a Descontaminação Gastrointestinal, qual o prazo IDEAL para a administração de 'Carvão Ativado' após a ingestão de uma substância tóxica adsorbível?),",
    "opcoes": [
      "A) Até 12 horas.",
      "B) Preferencialmente na primeira 1 hora após a ingestão.",
      "C) Apenas após 24 horas.",
      "D) Somente se o paciente estiver vomitando."
    ],
    "explicacao_geral": "O carvão ativado impede a absorção sistêmica da toxina ao se ligar a ela no trato gastrointestinal.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Eficácia muito reduzida após a primeira hora (exceto para substâncias de liberação prolongada ou circulação entero-hepática).",
      "B": "[CORRETA] O **Carvão Ativado** é mais eficaz na **primeira hora**.",
      "C": "[INCORRETA] Inútil após este prazo para a maioria das substâncias.",
      "D": "[INCORRETA] Êmese é contraindicação para carvão ativado se houver risco de aspiração."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 4562,
    "materia": "st",
    "aula_id": "st_a2",
    "tema": "st_a2",
    "modulo": 3,
    "dificuldade": 2,
    "correta": 3,
    "enunciado": "Qual o antídoto específico para a reversão de intoxicação grave por Benzodiazepínicos (ex: Diazepam, Midazolam)?),",
    "opcoes": [
      "A) Naloxona.",
      "B) Atropina.",
      "C) Acetilcisteína.",
      "D) Flumazenil."
    ],
    "explicacao_geral": "O flumazenil é um antagonista competitivo dos receptores GABA-A.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Antídoto de opioides.",
      "B": "[INCORRETA] Antídoto de colinérgicos.",
      "C": "[INCORRETA] Antídoto de paracetamol.",
      "D": "[CORRETA] O **Flumazenil** reverte **Benzodiazepínicos**."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 4563,
    "materia": "st",
    "aula_id": "st_a3",
    "tema": "st_a3",
    "modulo": 3,
    "dificuldade": 2,
    "correta": 0,
    "enunciado": "A 'Síndrome Colinérgica' (miose, bradicardia, salivação, sudorese, broncorreia) é característica da intoxicação por qual classe de praguicidas?),",
    "opcoes": [
      "A) Organofosforados e Carbamatos (Inibidores da acetilcolinesterase).",
      "B) Derivados cumarínicos (veneno de rato).",
      "C) Herbicidas tipo Paraquat.",
      "D) Piretroides."
    ],
    "explicacao_geral": "O excesso de acetilcolina estimula exageradamente os receptores muscarínicos e nicotínicos.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] **Organofosforados** causam a **Síndrome Colinérgica**.",
      "B": "[INCORRETA] Causam sangramentos.",
      "C": "[INCORRETA] Causa fibrose pulmonar e lesão multiorgânica.",
      "D": "[INCORRETA] Causam irritação/sensibilização cutânea e nervosa leve geralmente."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 4564,
    "materia": "st",
    "aula_id": "st_a5",
    "tema": "st_a5",
    "modulo": 3,
    "dificuldade": 3,
    "correta": 1,
    "enunciado": "Um paciente vítima de picada de cobra apresenta dor local intensa com edema e equimose, além de sangramentos (gengivorragia). Qual o gênero da serpente provável?),",
    "opcoes": [
      "A) Crotalus (Cascavel) - efeito neurotóxico.",
      "B) Bothrops (Jararaca) - efeito proteolítico, hemorrágico e coagulante.",
      "C) Micrurus (Coral) - efeito puramente neurotóxico.",
      "D) Jiboia - não peçonhenta."
    ],
    "explicacao_geral": "Os acidentes botrópicos são os mais frequentes no Brasil.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Causa mialgia e urina escura, com pouca dor local.",
      "B": "[CORRETA] O **Acidente Botrópico** causa **inflamação local e sangramento**.",
      "C": "[INCORRETA] Causa paralisia muscular e insuficiência respiratória rápida.",
      "D": "[INCORRETA] Não possui veneno, causa apenas trauma mecânico."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 4565,
    "materia": "semio3",
    "aula_id": "semio3_a1",
    "tema": "semio3_a1",
    "modulo": 3,
    "dificuldade": 1,
    "correta": 2,
    "enunciado": "Sobre o Índice de Apgar, o que ele avalia no recém-nascido?),",
    "opcoes": [
      "A) Apenas o peso e altura.",
      "B) A inteligência futura da criança.",
      "C) Frequência cardíaca, esforço respiratório, tônus muscular, irritabilidade reflexa e cor da pele nos minutos 1 e 5.",
      "D) O tempo de gestação exato."
    ],
    "explicacao_geral": "É uma ferramenta de avaliação da vitalidade e adaptação imediata ao ambiente extrauterino.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Antropometria.",
      "B": "[INCORRETA] Absurdo.",
      "C": "[CORRETA] O **Apgar** avalia a **vitalidade neonatal imediata**.",
      "D": "[INCORRETA] Avaliado pelo Método Capurro ou Ballard."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 4566,
    "materia": "semio3",
    "aula_id": "semio3_a2",
    "tema": "semio3_a2",
    "modulo": 3,
    "dificuldade": 2,
    "correta": 0,
    "enunciado": "Qual o reflexo primitivo do recém-nascido que desaparece por volta dos 4 meses e caracteriza-se pela abdução e extensão dos braços seguida de adução (abraço) ao simular uma queda?),",
    "opcoes": [
      "A) Reflexo de Moro.",
      "B) Reflexo de Babinski.",
      "C) Reflexo de Busca.",
      "D) Reflexo de Marcha."
    ],
    "explicacao_geral": "A persistência destes reflexos além da idade esperada pode indicar atraso no desenvolvimento neurológico.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] O **Reflexo de Moro** é o reflexo do **susto/abraço**.",
      "B": "[INCORRETA] Extensão do hálux ao estímulo plantar.",
      "C": "[INCORRETA] Girar a cabeça em direção ao toque na bochecha.",
      "D": "[INCORRETA] Movimentos de caminhar ao tocar os pés em superfície plana."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 4567,
    "materia": "semio3",
    "aula_id": "semio3_a4",
    "tema": "semio3_a4",
    "modulo": 3,
    "dificuldade": 3,
    "correta": 3,
    "enunciado": "Na palpação obstétrica (Manobras de Leopold), qual manobra visa identificar a 'Apresentação' fetal (se cefálica ou pélvica) através da palpação do fundo uterino?),",
    "opcoes": [
      "A) Segunda manobra.",
      "B) Terceira manobra.",
      "C) Quarta manobra.",
      "D) Primeira manobra."
    ],
    "explicacao_geral": "1ª: Fundo (situação/apresentação); 2ª: Lados (dorso/posição); 3ª: Estreito superior (pólo inferior); 4ª: Insinuação.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Identifica o dorso fetal (posição: direita ou esquerda).",
      "B": "[INCORRETA] Avalia a mobilidade do pólo fetal no estreito superior.",
      "C": "[INCORRETA] Avalia o grau de insinuação na pelve.",
      "D": "[CORRETA] A **Primeira Manobra** avalia o **Fundo Uterino**."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 4568,
    "materia": "semio3",
    "aula_id": "semio3_a6",
    "tema": "semio3_a6",
    "modulo": 3,
    "dificuldade": 2,
    "correta": 1,
    "enunciado": "Na Avaliação Multidimensional do Idoso, a 'Escala de Lawton' é utilizada para avaliar:),",
    "opcoes": [
      "A) Apenas a memória recente.",
      "B) As Atividades Instrumentais da Vida Diária (AIVDs), como usar telefone, fazer compras e gerenciar dinheiro.",
      "C) A força física das pernas.",
      "D) O risco de câncer de próstata."
    ],
    "explicacao_geral": "Diferencia-se da escala de Katz, que avalia atividades básicas (comer, banhar-se, vestir-se).",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] MEEM (Mini Exame do Estado Mental).",
      "B": "[CORRETA] A **Escala de Lawton** mede a **Independência na Comunidade**.",
      "C": "[INCORRETA] Teste de levantar e caminhar (Timed Up and Go).",
      "D": "[INCORRETA] Exame clínico/PSA."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  }
];

const data = JSON.parse(fs.readFileSync(QUESTOES_PATH, 'utf-8'));
data.questoes = data.questoes.concat(novasQuestoes);
fs.writeFileSync(QUESTOES_PATH, JSON.stringify(data, null, 2), 'utf-8');
console.log(`Sucesso: 8 questões da aula st/semio3 adicionadas.`);
