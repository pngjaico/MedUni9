import fs from 'fs';
import path from 'path';

const QUESTOES_PATH = 'data/questoes.json';

const novasQuestoes = [
  {
    "id": 4281,
    "materia": "fp3",
    "aula_id": "fp3_a1",
    "tema": "fp3_a1",
    "modulo": 3,
    "dificuldade": 1,
    "correta": 1,
    "enunciado": "A Insuficiência Cardíaca (IC) é a via final comum de diversas cardiopatias. Qual o mecanismo básico da IC com Fração de Ejeção Reduzida (ICFER)?),",
    "opcoes": [
      "A) Dificuldade de relaxamento do ventrículo.",
      "B) Falha na contratilidade do miocárdio (sístole), resultando em baixo débito cardíaco.",
      "C) Aumento excessivo da frequência cardíaca.",
      "D) Fechamento prematuro das válvulas."
    ],
    "explicacao_geral": "Geralmente associada a ventrículos dilatados e paredes finas (ex: pós-infarto ou miocardiopatia dilatada).",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Mecanismo da ICFEP (preservada/diastólica).",
      "B": "[CORRETA] A **ICFER** é uma **disfunção sistólica**.",
      "C": "[INCORRETA] Taquicardia é resposta compensatória, não o mecanismo primário da falha.",
      "D": "[INCORRETA] Absurdo."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 4282,
    "materia": "fp3",
    "aula_id": "fp3_a1",
    "tema": "fp3_a1",
    "modulo": 3,
    "dificuldade": 1,
    "correta": 3,
    "enunciado": "Na fisiopatologia da Insuficiência Cardíaca Esquerda, qual o principal sintoma resultante do congestionamento vascular pulmonar?),",
    "opcoes": [
      "A) Inchaço nas pernas (edema maleolar).",
      "B) Aumento do tamanho do fígado (hepatomegalia).",
      "C) Turgência jugular.",
      "D) Dispneia (falta de ar) e Ortopneia."
    ],
    "explicacao_geral": "O aumento da pressão no átrio esquerdo reflete para as veias pulmonares e capilares, causando extravasamento de líquido.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Sintoma de IC Direita.",
      "B": "[INCORRETA] Sintoma de IC Direita.",
      "C": "[INCORRETA] Sintoma de IC Direita.",
      "D": "[CORRETA] A **IC Esquerda** causa **Congestão Pulmonar**."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 4283,
    "materia": "fp3",
    "aula_id": "fp3_a1",
    "tema": "fp3_a1",
    "modulo": 3,
    "dificuldade": 2,
    "correta": 0,
    "enunciado": "Qual a principal alteração eletrofisiológica que sustenta a 'Fibrilação Atrial' (FA)?),",
    "opcoes": [
      "A) Múltiplos circuitos de reentrada nos átrios, gerando despolarizações caóticas e perda da contração atrial efetiva.",
      "B) Bloqueio total do nó AV.",
      "C) Único foco ectópico disparando muito rápido.",
      "D) Morte súbita das células do nó sinusal."
    ],
    "explicacao_geral": "A ausência de onda P no ECG e o ritmo irregularmente irregular são as marcas registradas da FA.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] A **FA** é um fenômeno de **Macro-reentrada Atrial**.",
      "B": "[INCORRETA] BAV total.",
      "C": "[INCORRETA] Taquicardia atrial monomórfica.",
      "D": "[INCORRETA] Doença do nó sinusal."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 4284,
    "materia": "fp3",
    "aula_id": "fp3_a1",
    "tema": "fp3_a1",
    "modulo": 3,
    "dificuldade": 2,
    "correta": 2,
    "enunciado": "O sistema Renina-Angiotensina-Aldosterona (SRAA) é ativado cronicamente na IC. Qual o efeito deletério de longo prazo da ALDOSTERONA no coração?),",
    "opcoes": [
      "A) Melhora da oxigenação.",
      "B) Destruição das válvulas.",
      "C) Promoção de fibrose miocárdica e remodelamento cardíaco patológico.",
      "D) Aumento da produção de glóbulos vermelhos."
    ],
    "explicacao_geral": "A fibrose torna o coração mais rígido e propenso a arritmias.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Absurdo.",
      "B": "[INCORRETA] Válvulas são afetadas por calcificação ou processos infecciosos/imunes.",
      "C": "[CORRETA] A **Aldosterona** causa **Remodelamento e Fibrose**.",
      "D": "[INCORRETA] Função da eritropoietina."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 4285,
    "materia": "fp3",
    "aula_id": "fp3_a2",
    "tema": "fp3_a2",
    "modulo": 3,
    "dificuldade": 2,
    "correta": 1,
    "enunciado": "Qual a principal diferença fisiopatológica entre a 'Angina Estável' e a 'Angina Instável'?),",
    "opcoes": [
      "A) A estável dói no repouso; a instável apenas no esforço.",
      "B) A estável ocorre por uma placa aterosclerótica fixa (obstrução fixa); a instável envolve rotura de placa e formação de trombo parcial (obstrução dinâmica/aguda).",
      "C) A estável mata mais rápido.",
      "D) Não há diferença física."
    ],
    "explicacao_geral": "A angina instável faz parte das Síndromes Coronarianas Agudas (SCA).",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Invertido; a instável pode ocorrer no repouso.",
      "B": "[CORRETA] A **Angina Instável** envolve **Rotura de Placa**.",
      "C": "[INCORRETA] Instável é mais perigosa iminentemente.",
      "D": "[INCORRETA] São mecanisticamente diferentes."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 4286,
    "materia": "fp3",
    "aula_id": "fp3_a2",
    "tema": "fp3_a2",
    "modulo": 3,
    "dificuldade": 3,
    "correta": 3,
    "enunciado": "Na 'Estenose Aórtica', o ventrículo esquerdo precisa gerar pressões muito altas para ejetar o sangue. Qual alteração estrutural compensatória o coração desenvolve?),",
    "opcoes": [
      "A) Dilatação das paredes (corpo chato).",
      "B) Atrofia das fibras musculares.",
      "C) Nenhuma, o coração permanece igual.",
      "D) Hipertrofia Ventricular Esquerda Concêntrica (espessamento das paredes)."
    ],
    "explicacao_geral": "A hipertrofia visa reduzir a tensão na parede ventricular (Lei de Laplace), mas aumenta a rigidez e a demanda de O2.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Ocorre na Insuficiência Aórtica (sobrecarga de volume).",
      "B": "[INCORRETA] Ocorre hipertrofia compensatória.",
      "C": "[INCORRETA] O coração sofre remodelamento.",
      "D": "[CORRETA] A **Estenose Aórtica** causa **Hipertrofia Concêntrica**."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 4287,
    "materia": "fp3",
    "aula_id": "fp3_a2",
    "tema": "fp3_a2",
    "modulo": 3,
    "dificuldade": 2,
    "correta": 0,
    "enunciado": "A 'Insuficiência Mitral' gera uma sobrecarga de qual tipo nas câmaras cardíacas esquerdas?),",
    "opcoes": [
      "A) Sobrecarga de Volume (o sangue reflui para o átrio e volta ao ventrículo na diástole seguinte).",
      "B) Sobrecarga de Pressão isolada.",
      "C) Nenhuma sobrecarga.",
      "D) Desidratação do átrio."
    ],
    "explicacao_geral": "Leva ao aumento progressivo do átrio esquerdo e do ventrículo esquerdo (dilatação).",
    "explicacoes_opcoes": {
      "A": "[CORRETA] **Insuficiências Valvares** geram **Sobrecarga de Volume**.",
      "B": "[INCORRETA] Típico de estenoses ou hipertensão.",
      "C": "[INCORRETA] Gera sobrecarga hemodinâmica importante.",
      "D": "[INCORRETA] Absurdo."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 4288,
    "materia": "fp3",
    "aula_id": "fp3_a2",
    "tema": "fp3_a2",
    "modulo": 3,
    "dificuldade": 3,
    "correta": 2,
    "enunciado": "Qual a principal causa de Morte Súbita nas primeiras horas após um Infarto Agudo do Miocárdio (IAM)?),",
    "opcoes": [
      "A) Ruptura do músculo papilar.",
      "B) Choque cardiogênico.",
      "C) Arritmias ventriculares fatais (como Fibrilação Ventricular) devido à instabilidade elétrica do tecido isquêmico.",
      "D) Insuficiência renal aguda."
    ],
    "explicacao_geral": "Por isso a importância do desfibrilador no atendimento inicial do infarto.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Complicação mecânica que geralmente ocorre após 2-7 dias.",
      "B": "[INCORRETA] Causa morte, mas geralmente decorrente de infartos extensos (>40% do VE) e não necessariamente a mais comum na primeira hora fora do hospital.",
      "C": "[CORRETA] A **Fibrilação Ventricular** é o risco imediato do **IAM**.",
      "D": "[INCORRETA] Complicação tardia secundária ao baixo débito."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  }
];

const data = JSON.parse(fs.readFileSync(QUESTOES_PATH, 'utf-8'));
data.questoes = data.questoes.concat(novasQuestoes);
fs.writeFileSync(QUESTOES_PATH, JSON.stringify(data, null, 2), 'utf-8');
console.log(`Sucesso: 8 questões da aula fp3_a1/a2 adicionadas.`);
