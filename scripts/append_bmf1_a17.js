import fs from 'fs';
import path from 'path';

const QUESTOES_PATH = 'data/questoes.json';

const novasQuestoes = [
  {
    "id": 3129,
    "materia": "bmf1",
    "aula_id": "bmf1_a17",
    "tema": "bmf1_a17",
    "modulo": 1,
    "dificuldade": 1,
    "correta": 1,
    "enunciado": "Os elementos figurados do sangue são suspensos no plasma. Qual desses elementos é o mais numeroso, não possui núcleo e é responsável pelo transporte de oxigênio?",
    "opcoes": [
      "A) Leucócitos.",
      "B) Hemácias (Eritrócitos).",
      "C) Plaquetas.",
      "D) Macrófagos."
    ],
    "explicacao_geral": "As hemácias são discos bicôncavos especializados no transporte gasoso via hemoglobina.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Leucócitos são células de defesa e são muito menos numerosos que as hemácias.",
      "B": "[CORRETA] As **hemácias** são anucleadas nos mamíferos e transportam O2 e CO2.",
      "C": "[INCORRETA] Plaquetas são fragmentos celulares envolvidos na coagulação.",
      "D": "[INCORRETA] Macrófagos são células teciduais derivadas dos monócitos sanguíneos."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3130,
    "materia": "bmf1",
    "aula_id": "bmf1_a17",
    "tema": "bmf1_a17",
    "modulo": 1,
    "dificuldade": 2,
    "correta": 0,
    "enunciado": "Um paciente com febre e dor abdominal realiza um hemograma que mostra aumento significativo de neutrófilos com presença de formas jovens ('bastões'). O que esse achado sugere?",
    "opcoes": [
      "A) Infecção bacteriana aguda (Desvio à esquerda).",
      "B) Reação alérgica a medicamentos.",
      "C) Infestação por vermes intestinais.",
      "D) Anemia ferropriva crônica."
    ],
    "explicacao_geral": "Os neutrófilos são a primeira linha de defesa contra bactérias.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] O aumento de **neutrófilos** e o **desvio à esquerda** são sinais clássicos de infecção bacteriana.",
      "B": "[INCORRETA] Alergias costumam elevar basófilos ou eosinófilos.",
      "C": "[INCORRETA] Parasitoses intestinais causam eosinofilia.",
      "D": "[INCORRETA] Anemias afetam a série vermelha (hemácias), não os neutrófilos."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 3131,
    "materia": "bmf1",
    "aula_id": "bmf1_a17",
    "tema": "bmf1_a17",
    "modulo": 1,
    "dificuldade": 2,
    "correta": 3,
    "enunciado": "Qual leucócito agranulócito possui um núcleo grande e redondo, ocupando quase toda a célula, e é peça-chave na resposta imune adaptativa (produção de anticorpos e citotoxicidade)?",
    "opcoes": [
      "A) Monócito.",
      "B) Neutrófilo.",
      "C) Eosinófilo.",
      "D) Linfócito."
    ],
    "explicacao_geral": "Os linfócitos (B e T) são as menores células dos leucócitos e fundamentais para a memória imunológica.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Monócitos são as maiores células e possuem núcleo em formato de ferradura.",
      "B": "[INCORRETA] Neutrófilos são granulócitos polimorfonucleares.",
      "C": "[INCORRETA] Eosinófilos são granulócitos com núcleo bilobado.",
      "D": "[CORRETA] O **linfócito** é caracterizado pelo seu núcleo volumoso e papel na imunidade específica."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3132,
    "materia": "bmf1",
    "aula_id": "bmf1_a17",
    "tema": "bmf1_a17",
    "modulo": 1,
    "dificuldade": 3,
    "correta": 2,
    "enunciado": "As plaquetas não são células completas, mas fragmentos de citoplasma de uma célula gigante localizada na medula óssea. Qual o nome dessa célula precursora?",
    "opcoes": [
      "A) Eritroblasto.",
      "B) Mieloblasto.",
      "C) Megacariócito.",
      "D) Reticulócito."
    ],
    "explicacao_geral": "A trombopoiese ocorre na medula óssea através da fragmentação periférica do megacariócito.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Eritroblasto é o precursor da hemácia.",
      "B": "[INCORRETA] Mieloblasto é o precursor dos granulócitos.",
      "C": "[CORRETA] O **megacariócito** emite prolongamentos que se rompem para formar as **plaquetas**.",
      "D": "[INCORRETA] Reticulócito é uma hemácia jovem que acabou de perder o núcleo."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3133,
    "materia": "bmf1",
    "aula_id": "bmf1_a17",
    "tema": "bmf1_a17",
    "modulo": 1,
    "dificuldade": 2,
    "correta": 0,
    "enunciado": "Um paciente com diagnóstico de asma brônquica (doença alérgica crônica) apresenta aumento de quais células granulócitas, que possuem grânulos avermelhados na coloração de Wright?",
    "opcoes": [
      "A) Eosinófilos.",
      "B) Basófilos.",
      "C) Neutrófilos.",
      "D) Linfócitos."
    ],
    "explicacao_geral": "As proteínas básicas dos grânulos dos eosinófilos têm afinidade pela eosina (corante ácido/vermelho).",
    "explicacoes_opcoes": {
      "A": "[CORRETA] **Eosinófilos** aumentam em alergias e infestações parasitárias.",
      "B": "[INCORRETA] Basófilos possuem grânulos azul-arroxeados (básicos) e são muito raros.",
      "C": "[INCORRETA] Neutrófilos possuem grânulos neutros e pouco evidentes.",
      "D": "[INCORRETA] Linfócitos não possuem grânulos específicos proeminentes."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 3134,
    "materia": "bmf1",
    "aula_id": "bmf1_a17",
    "tema": "bmf1_a17",
    "modulo": 1,
    "dificuldade": 3,
    "correta": 1,
    "enunciado": "A albumina é a proteína mais abundante do plasma sanguíneo. Qual a sua principal função biofísica para a manutenção da volemia (volume de sangue)?",
    "opcoes": [
      "A) Realizar o transporte de anticorpos.",
      "B) Manter a pressão osmótica coloidal (oncótica) do sangue.",
      "C) Iniciar a cascata de coagulação.",
      "D) Secretar insulina para os tecidos."
    ],
    "explicacao_geral": "Sem albumina, o líquido do sangue escapa para os tecidos, causando edema.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] O transporte de anticorpos é feito pelas gamaglobulinas.",
      "B": "[CORRETA] A **albumina** retém água dentro dos vasos através da **pressão oncótica**.",
      "C": "[INCORRETA] A coagulação depende de proteínas como o fibrinogênio.",
      "D": "[INCORRETA] Insulina é um hormônio pancreático, não uma proteína plasmática de suporte."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3135,
    "materia": "bmf1",
    "aula_id": "bmf1_a17",
    "tema": "bmf1_a17",
    "modulo": 1,
    "dificuldade": 2,
    "correta": 3,
    "enunciado": "Qual o tempo médio de vida de uma hemácia na circulação antes de ser removida pelo baço ou fígado?",
    "opcoes": [
      "A) 7 dias.",
      "B) 30 dias.",
      "C) 1 ano.",
      "D) 120 dias."
    ],
    "explicacao_geral": "A ausência de núcleo impede a hemácia de reparar danos proteicos, limitando sua sobrevida.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] É o tempo médio de vida das plaquetas.",
      "B": "[INCORRETA] Curto demais para a hemácia.",
      "C": "[INCORRETA] Hemácias não duram tanto tempo.",
      "D": "[CORRETA] As hemácias circulam por aproximadamente **120 dias**."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3136,
    "materia": "bmf1",
    "aula_id": "bmf1_a17",
    "tema": "bmf1_a17",
    "modulo": 1,
    "dificuldade": 2,
    "correta": 0,
    "enunciado": "Um paciente com sangramento gengival e manchas roxas na pele (petéquias) apresenta contagem de plaquetas muito baixa no exame de sangue. Qual o termo técnico para esse achado?",
    "opcoes": [
      "A) Trombocitopenia.",
      "B) Leucocitose.",
      "C) Policitemia.",
      "D) Neutropenia."
    ],
    "explicacao_geral": "Plaquetas também são chamadas de trombócitos.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] **Trombocitopenia** (ou plaquetopenia) é a redução do número de plaquetas.",
      "B": "[INCORRETA] Leucocitose é o aumento de leucócitos.",
      "C": "[INCORRETA] Policitemia é o aumento excessivo de hemácias.",
      "D": "[INCORRETA] Neutropenia é a redução de neutrófilos."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  }
];

const data = JSON.parse(fs.readFileSync(QUESTOES_PATH, 'utf-8'));
data.questoes = data.questoes.concat(novasQuestoes);
fs.writeFileSync(QUESTOES_PATH, JSON.stringify(data, null, 2), 'utf-8');
console.log(`Sucesso: 8 questões da aula bmf1_a17 adicionadas.`);
