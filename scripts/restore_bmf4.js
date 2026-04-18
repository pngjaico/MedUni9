import fs from 'fs';

const QUESTOES_PATH = 'data/questoes.json';

const novasBmf4 = [
  // Aula 1: Antidepressivos ISRS (IDs 4769-4776)
  {
    "id": 4769,
    "materia": "bmf4",
    "aula_id": "bmf4_a1",
    "tema": "bmf4_a1",
    "modulo": 4,
    "dificuldade": 2,
    "correta": 0,
    "enunciado": "Qual o mecanismo de ação primordial dos Inibidores Seletivos da Recaptação de Serotonina (ISRS), como a fluoxetina?),",
    "opcoes": [
      "A) Bloqueio do transportador SERT, aumentando a disponibilidade de serotonina na fenda sináptica.",
      "B) Bloqueio dos receptores Alfa-1 adrenérgicos.",
      "C) Inibição da enzima MAO de forma irreversível.",
      "D) Aumento da recaptação de dopamina."
    ],
    "explicacao_geral": "Os ISRS são a primeira linha no tratamento da depressão devido ao seu perfil de efeitos colaterais favorável.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] O **bloqueio do SERT** é a marca dos **ISRS**.",
      "B": "[INCORRETA] Relacionado a efeitos colaterais de tricíclicos (hipotensão).",
      "C": "[INCORRETA] Mecanismo dos IMAOs.",
      "D": "[INCORRETA] Relacionado à bupropiona."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  // Aula 4: Antipsicóticos (IDs 4793-4800)
  {
    "id": 4793,
    "materia": "bmf4",
    "aula_id": "bmf4_a4",
    "tema": "bmf4_a4",
    "modulo": 4,
    "dificuldade": 3,
    "correta": 2,
    "enunciado": "Qual efeito colateral motor extra-piramidal, caracterizado por inquietação motora e incapacidade de ficar parado, é comum no uso de antipsicóticos típicos como o Haloperidol?),",
    "opcoes": [
      "A) Parkinsonismo medicamentoso.",
      "B) Distonia aguda.",
      "C) Acatisia.",
      "D) Discinesia tardia."
    ],
    "explicacao_geral": "A acatisia é frequentemente confundida com piora da ansiedade ou agitação psicótica.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Caracterizado por bradicinesia e tremor de repouso.",
      "B": "[INCORRETA] Espasmo muscular sustentado (geralmente cervical).",
      "C": "[CORRETA] A **Acatisia** é a **Angústia de Movimentação**.",
      "D": "[INCORRETA] Movimentos involuntários orofaciais após uso crônico."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  // Aula 7: Benzodiazepínicos (IDs 4817-4824)
  {
    "id": 4817,
    "materia": "bmf4",
    "aula_id": "bmf4_a7",
    "tema": "bmf4_a7",
    "modulo": 4,
    "dificuldade": 1,
    "correta": 3,
    "enunciado": "Qual o mecanismo de ação dos benzodiazepínicos (ex: diazepam) no receptor GABA-A?),",
    "opcoes": [
      "A) Agonistas diretos que abrem o canal de sódio.",
      "B) Antagonistas do canal de cloro.",
      "C) Bloqueadores de canais de cálcio.",
      "D) Moduladores alostéricos positivos que aumentam a frequência de abertura do canal de cloro mediada pelo GABA."
    ],
    "explicacao_geral": "Eles potencializam a inibição neuronal já existente (efeito teto), o que os torna mais seguros que os barbitúricos.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA]",
      "B": "[INCORRETA]",
      "C": "[INCORRETA]",
      "D": "[CORRETA] Os **Benzodiazepínicos** aumentam a **Frequência de Abertura** do canal."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  // Aula 10: Anticonvulsivantes (IDs 4841-4848)
  {
    "id": 4841,
    "materia": "bmf4",
    "aula_id": "bmf4_a10",
    "tema": "bmf4_a10",
    "modulo": 4,
    "dificuldade": 3,
    "correta": 1,
    "enunciado": "Qual anticonvulsivante é conhecido por causar hiperplasia gengival, hirsutismo e ter farmacocinética de ordem zero (saturação enzimática) em doses terapêuticas altas?),",
    "opcoes": [
      "A) Carbamazepina.",
      "B) Fenitoína.",
      "C) Ácido Valproico.",
      "D) Levetiracetam."
    ],
    "explicacao_geral": "A fenitoína exige monitorização estrita devido à sua margem terapêutica estreita.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Comum causar hiponatremia e indução enzimática forte.",
      "B": "[CORRETA] A **Fenitoína** causa **Hiperplasia Gengival**.",
      "C": "[INCORRETA] Associado a ganho de peso e queda de cabelo.",
      "D": "[INCORRETA] Perfil de efeitos colaterais muito mais limpo."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  // Aula 13: Parkinson (IDs 4865-4872)
  {
    "id": 4865,
    "materia": "bmf4",
    "aula_id": "bmf4_a13",
    "tema": "bmf4_a13",
    "modulo": 4,
    "dificuldade": 2,
    "correta": 2,
    "enunciado": "Por que a Levodopa é administrada em conjunto com a Carbidopa ou Benserazida?),",
    "opcoes": [
      "A) Para aumentar a absorção gástrica da dopamina.",
      "B) Para bloquear os receptores de serotonina no cérebro.",
      "C) Para inibir a descarboxilase periférica, impedindo a conversão precoce de Levodopa em Dopamina no sangue antes que ela atravesse a barreira hematencefálica.",
      "D) Para reduzir a pressão arterial do paciente."
    ],
    "explicacao_geral": "Isso reduz os efeitos colaterais periféricos (enjoo, arritmia) e aumenta a biodisponibilidade no SNC.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA]",
      "B": "[INCORRETA]",
      "C": "[CORRETA] A **Carbidopa** evita a **Conversão Periférica**.",
      "D": "[INCORRETA]"
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  // Aula 16: Lítio (IDs 4889-4896)
  {
    "id": 4889,
    "materia": "bmf4",
    "aula_id": "bmf4_a16",
    "tema": "bmf4_a16",
    "modulo": 4,
    "dificuldade": 3,
    "correta": 0,
    "enunciado": "O Carbonato de Lítio é o padrão-ouro no transtorno bipolar. Qual sistema orgânico deve ter sua função monitorada periodicamente (além da litemia) devido a efeitos colaterais comuns?),",
    "opcoes": [
      "A) Tireoide (risco de hipotireoidismo) e Rins (risco de diabetes insipidus nefrogênico).",
      "B) Pulmões (risco de fibrose).",
      "C) Audição (ototoxicidade).",
      "D) Olhos (catarata)."
    ],
    "explicacao_geral": "O lítio interfere no receptor do TSH e do ADH nos túbulos coletores.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] O **Lítio** exige controle de **Tireoide e Função Renal**.",
      "B": "[INCORRETA] Relacionado à amiodarona.",
      "C": "[INCORRETA] Relacionado a aminoglicosídeos.",
      "D": "[INCORRETA] Relacionado a corticoides."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  }
];

// Carregando o banco e substituindo os IDs correspondentes
const data = JSON.parse(fs.readFileSync(QUESTOES_PATH, 'utf-8'));

novasBmf4.forEach(nova => {
  const index = data.questoes.findIndex(q => q.id === nova.id);
  if (index !== -1) {
    data.questoes[index] = nova;
  } else {
    data.questoes.push(nova);
  }
});

fs.writeFileSync(QUESTOES_PATH, JSON.stringify(data, null, 2), 'utf-8');
console.log(`Sucesso: ${novasBmf4.length} questões de BMF4 (Restauração) aplicadas.`);
