import fs from 'fs';
import path from 'path';

const QUESTOES_PATH = 'data/questoes.json';

const novasQuestoes = [
  {
    "id": 3321,
    "materia": "semiologia1",
    "aula_id": "semio1_a5",
    "tema": "semio1_a5",
    "modulo": 1,
    "dificuldade": 1,
    "correta": 1,
    "enunciado": "Na avaliação da força muscular, o médico utiliza a escala do Medical Research Council (MRC) que varia de 0 a 5. O que representa o Grau 3 nesta escala?),",
    "opcoes": [
      "A) Ausência total de contração muscular visível ou palpável.",
      "B) Movimento ativo que vence a gravidade, mas não vence a resistência do examinador.",
      "C) Força normal contra resistência máxima.",
      "D) Movimento ativo apenas se a gravidade for eliminada."
    ],
    "explicacao_geral": "A escala MRC é o padrão universal para graduar a força motora.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Este é o Grau 0.",
      "B": "[CORRETA] O **Grau 3** é capaz de **vencer a gravidade**, mas falha sob qualquer resistência adicional.",
      "C": "[INCORRETA] Este é o Grau 5 (Normal).",
      "D": "[INCORRETA] Este é o Grau 2."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3322,
    "materia": "semiologia1",
    "aula_id": "semio1_a5",
    "tema": "semio1_a5",
    "modulo": 1,
    "dificuldade": 2,
    "correta": 3,
    "enunciado": "Durante o exame físico, a avaliação da 'Amplitude de Movimento (ADM) Passiva' é realizada pelo médico sem ajuda do paciente. Qual a importância clínica de encontrar uma ADM Passiva normal em um paciente que não consegue mover a articulação ativamente?),",
    "opcoes": [
      "A) Indica que a articulação está fundida (anquilose).",
      "B) Indica que o paciente está com uma fratura grave no local.",
      "C) Indica que o problema é inflamação dentro da articulação (Artrite).",
      "D) Sugere que o problema é extrínseco à articulação, como fraqueza muscular, lesão nervosa ou ruptura de tendão."
    ],
    "explicacao_geral": "Se o médico consegue mover a articulação mas o paciente não, as superfícies articulares estão preservadas.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Na anquilose, nem o médico consegue mover (ADM passiva reduzida).",
      "B": "[INCORRETA] Fraturas limitariam ambos os movimentos devido à dor e instabilidade.",
      "C": "[INCORRETA] Na artrite, ambos (ativo e passivo) costumam estar limitados pela dor/edema intra-articular.",
      "D": "[CORRETA] A discrepância entre **ativo (limitado)** e **passivo (normal)** aponta para o sistema neuromotor ou tendíneo."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3323,
    "materia": "semiologia1",
    "aula_id": "semio1_a5",
    "tema": "semio1_a5",
    "modulo": 1,
    "dificuldade": 2,
    "correta": 2,
    "enunciado": "Um paciente de 40 anos apresenta dor no ombro. O médico percebe que tanto o movimento executado pelo paciente (ativo) quanto o executado pelo médico (passivo) estão severamente limitados em todos os planos (global). Qual o diagnóstico provável?),",
    "opcoes": [
      "A) Ruptura completa do tendão do supraespinal.",
      "B) Miastenia Gravis.",
      "C) Capsulite Adesiva (Ombro Congelado).",
      "D) Luxação recidivante."
    ],
    "explicacao_geral": "A limitação global ativa e passiva é a marca das patologias capsulares puras.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Na ruptura de tendão, o movimento passivo costuma ser preservado.",
      "B": "[INCORRETA] Causa fraqueza por cansaço, não limitação mecânica do arco passivo.",
      "C": "[CORRETA] O **ombro congelado** causa perda de ADM em todos os eixos, tanto ativa quanto passiva.",
      "D": "[INCORRETA] Causaria instabilidade e dor, mas não necessariamente rigidez global."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 3324,
    "materia": "semiologia1",
    "aula_id": "semio1_a5",
    "tema": "semio1_a5",
    "modulo": 1,
    "dificuldade": 2,
    "correta": 0,
    "enunciado": "Ao avaliar a força dos membros inferiores em um paciente acamado, o médico observa que ele consegue apenas contrair o músculo (esboço de contração) sem gerar qualquer movimento articular. Qual o grau MRC?),",
    "opcoes": [
      "A) Grau 1.",
      "B) Grau 2.",
      "C) Grau 3.",
      "D) Grau 4."
    ],
    "explicacao_geral": "O grau 1 é o estágio mínimo de atividade muscular detectável.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] **Grau 1** é definido como **esboço de contração** ou fasciculação, sem movimento.",
      "B": "[INCORRETA] Grau 2 realiza movimento se a gravidade for retirada.",
      "C": "[INCORRETA] Grau 3 vence a gravidade.",
      "D": "[INCORRETA] Grau 4 vence resistência moderada."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 3325,
    "materia": "semiologia1",
    "aula_id": "semio1_a5",
    "tema": "semio1_a5",
    "modulo": 1,
    "dificuldade": 2,
    "correta": 3,
    "enunciado": "A 'Goniometria' é a técnica utilizada para medir objetivamente os ângulos das articulações. Qual o instrumento utilizado para esta finalidade?),",
    "opcoes": [
      "A) Estetoscópio.",
      "B) Esfigmomanômetro.",
      "C) Martelo de reflexos.",
      "D) Goniômetro."
    ],
    "explicacao_geral": "A medida exata da amplitude ajuda a monitorar a evolução da fisioterapia ou da doença.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Usado na ausculta.",
      "B": "[INCORRETA] Usado para medir pressão arterial.",
      "C": "[INCORRETA] Usado para testes neurológicos.",
      "D": "[CORRETA] O **goniômetro** é uma espécie de transferidor clínico para medir a **amplitude articular**."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3326,
    "materia": "semiologia1",
    "aula_id": "semio1_a5",
    "tema": "semio1_a5",
    "modulo": 1,
    "dificuldade": 3,
    "correta": 1,
    "enunciado": "Durante o teste de força do músculo quadríceps, um paciente idoso consegue estender o joelho completamente enquanto está deitado de lado (gravidade eliminada), mas não consegue estendê-lo quando está sentado (contra a gravidade). Qual o seu grau de força?),",
    "opcoes": [
      "A) Grau 1.",
      "B) Grau 2.",
      "C) Grau 3.",
      "D) Grau 0."
    ],
    "explicacao_geral": "A eliminação da gravidade é o teste divisor entre Grau 2 e Grau 3.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Grau 1 não gera movimento articular.",
      "B": "[CORRETA] **Grau 2** realiza o movimento total apenas com a **gravidade eliminada**.",
      "C": "[INCORRETA] Grau 3 deveria conseguir estender sentado.",
      "D": "[INCORRETA] Grau 0 é paralisia total (sem contração)."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 3327,
    "materia": "semiologia1",
    "aula_id": "semio1_a5",
    "tema": "semio1_a5",
    "modulo": 1,
    "dificuldade": 3,
    "correta": 0,
    "enunciado": "O termo 'Contratura' em semiologia refere-se a uma limitação persistente da amplitude articular. Como diferenciar uma contratura de uma rigidez espástica de origem neurológica?),",
    "opcoes": [
      "A) A contratura é fixa e não cede nem sob anestesia ou sono profundo; a rigidez neurológica pode ceder.",
      "B) A contratura dói e a rigidez neurológica não.",
      "C) Não há diferença, são sinônimos.",
      "D) A contratura ocorre apenas em crianças."
    ],
    "explicacao_geral": "A contratura envolve encurtamento físico de tecidos (músculo/tendão/cápsula), enquanto a espasticidade é um aumento do tônus reflexo.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] A **contratura fixa** é uma alteração estrutural do tecido mole.",
      "B": "[INCORRETA] Ambas podem ser indolores ou dolorosas dependendo da causa.",
      "C": "[INCORRETA] São entidades clínicas e fisiopatológicas distintas.",
      "D": "[INCORRETA] Ocorre em qualquer idade (Ex: pós-imobilização prolongada)."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3328,
    "materia": "semiologia1",
    "aula_id": "semio1_a5",
    "tema": "semio1_a5",
    "modulo": 1,
    "dificuldade": 2,
    "correta": 3,
    "enunciado": "A 'Hipermetria' ou frouxidão ligamentar generalizada pode ser pontuada pelo Escore de Beighton. Qual das opções é um teste componente desse escore?),",
    "opcoes": [
      "A) Conseguir morder o próprio cotovelo.",
      "B) Conseguir girar a cabeça 180 graus.",
      "C) Conseguir tocar a nuca com o pé.",
      "D) Hiperextensão passiva do 5º quirodáctilo (dedinho) além de 90 graus."
    ],
    "explicacao_geral": "O escore de Beighton avalia a hipermobilidade articular sistêmica.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Teste inexistente na escala clínica.",
      "B": "[INCORRETA] Impossível em humanos vivos.",
      "C": "[INCORRETA] Não faz parte dos 9 pontos da escala.",
      "D": "[CORRETA] A **hiperextensão do 5º dedo** é um dos critérios clássicos do **Escore de Beighton**."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  }
];

const data = JSON.parse(fs.readFileSync(QUESTOES_PATH, 'utf-8'));
data.questoes = data.questoes.concat(novasQuestoes);
fs.writeFileSync(QUESTOES_PATH, JSON.stringify(data, null, 2), 'utf-8');
console.log(`Sucesso: 8 questões da aula semio1_a5 adicionadas.`);
