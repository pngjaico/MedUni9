import fs from 'fs';
import path from 'path';

const QUESTOES_PATH = 'data/questoes.json';

const novasQuestoes = [
  {
    "id": 4185,
    "materia": "bmf3",
    "aula_id": "bmf3_a11",
    "tema": "bmf3_a11",
    "modulo": 3,
    "dificuldade": 1,
    "correta": 1,
    "enunciado": "Qual o mecanismo de ação dos fármacos da classe dos IECA (Inibidores da Enzima Conversora de Angiotensina), como o Enalapril e o Captopril?),",
    "opcoes": [
      "A) Bloqueio dos receptores de angiotensina II nos vasos.",
      "B) Impelem a conversão de Angiotensina I em Angiotensina II no pulmão e vasos, reduzindo a vasoconstrição e a liberação de aldosterona.",
      "C) Aumento da excreção de potássio.",
      "D) Bloqueio dos canais de cálcio no coração."
    ],
    "explicacao_geral": "Os IECAs também aumentam os níveis de bradicinina, o que explica o efeito colateral de tosse seca em alguns pacientes.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Mecanismo dos BRAs (ex: Losartana).",
      "B": "[CORRETA] Os **IECAs** inibem a **produção de Angiotensina II**.",
      "C": "[INCORRETA] IECAs tendem a poupar potássio (podem causar hipercalemia).",
      "D": "[INCORRETA] Mecanismo dos BCC (ex: Anlodipino)."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 4186,
    "materia": "bmf3",
    "aula_id": "bmf3_a11",
    "tema": "bmf3_a11",
    "modulo": 3,
    "dificuldade": 1,
    "correta": 3,
    "enunciado": "A 'Furosemida' é um diurético potente utilizado em casos de edema agudo de pulmão. Onde ela atua nos rins?),",
    "opcoes": [
      "A) Túbulo contorcido proximal.",
      "B) Túbulo contorcido distal.",
      "C) Ducto coletor.",
      "D) Alça de Henle (porção ascendente espessa)."
    ],
    "explicacao_geral": "A furosemida inibe o co-transportador Na+/K+/2Cl-.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Local de ação da acetazolamida.",
      "B": "[INCORRETA] Local de ação dos tiazídicos.",
      "C": "[INCORRETA] Local de ação dos poupadores de potássio.",
      "D": "[CORRETA] A **Furosemida** é um **Diurético de Alça**."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 4187,
    "materia": "bmf3",
    "aula_id": "bmf3_a11",
    "tema": "bmf3_a11",
    "modulo": 3,
    "dificuldade": 2,
    "correta": 0,
    "enunciado": "Qual anti-hipertensivo da classe dos Bloqueadores dos Canais de Cálcio (BCC) é conhecido por causar 'Edema de MMII' (inchaço nas pernas) como efeito colateral frequente?),",
    "opcoes": [
      "A) Anlodipino.",
      "B) Propranolol.",
      "C) Hidroclorotiazida.",
      "D) Losartana."
    ],
    "explicacao_geral": "O edema ocorre devido à vasodilatação arterial pré-capilar, aumentando a pressão hidrostática local.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] O **Anlodipino** frequentemente causa **Edema Maleolar**.",
      "B": "[INCORRETA] Betabloqueador.",
      "C": "[INCORRETA] Diurético (reduz edema sistêmico geralmente).",
      "D": "[INCORRETA] BRA."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 4188,
    "materia": "bmf3",
    "aula_id": "bmf3_a11",
    "tema": "bmf3_a11",
    "modulo": 3,
    "dificuldade": 2,
    "correta": 2,
    "enunciado": "Um paciente hipertenso e diabético apresenta tosse seca persistente após iniciar tratamento medicamentoso. Qual substituição de classe seria a mais adequada para manter a proteção renal?),",
    "opcoes": [
      "A) Trocar Enalapril por Atenolol.",
      "B) Trocar Captopril por Furosemida.",
      "C) Trocar o IECA por um BRA (Bloqueador do Receptor de Angiotensina), como a Losartana.",
      "D) Parar o remédio."
    ],
    "explicacao_geral": "Os BRAs não afetam a bradicinina, evitando a tosse, mas mantêm o benefício de proteção renal no diabetes.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Betabloqueadores não têm a mesma proteção renal específica e podem mascarar hipoglicemia.",
      "B": "[INCORRETA] A furosemida é um diurético e não substitui a nefroproteção do sistema renina-angiotensina.",
      "C": "[CORRETA] O **BRA** é a alternativa para pacientes com **tosse por IECA**.",
      "D": "[INCORRETA] Conduta perigosa."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 4189,
    "materia": "bmf3",
    "aula_id": "bmf3_a12",
    "tema": "bmf3_a12",
    "modulo": 3,
    "dificuldade": 1,
    "correta": 1,
    "enunciado": "Como os 'Nitratos' (ex: Nitroglicerina, Isossorbida) ajudam a aliviar a dor da angina de peito?),",
    "opcoes": [
      "A) Aumentando a força de contração do coração.",
      "B) Através da vasodilatação venosa predominante, reduzindo o retorno venoso (pré-carga) e diminuindo o trabalho cardíaco.",
      "C) Bloqueando os receptores de dor no esterno.",
      "D) Dissolvendo o coágulo na artéria coronária."
    ],
    "explicacao_geral": "Eles também promovem discreta vasodilatação coronariana.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Inotropismo positivo aumenta o consumo de O2, o que é ruim na angina.",
      "B": "[CORRETA] Os **Nitratos** promovem a **Venodilatação (Redução de Pré-carga)**.",
      "C": "[INCORRETA] Absurdo.",
      "D": "[INCORRETA] Função de trombolíticos ou antiagregantes."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 4190,
    "materia": "bmf3",
    "aula_id": "bmf3_a12",
    "tema": "bmf3_a12",
    "modulo": 3,
    "dificuldade": 3,
    "correta": 3,
    "enunciado": "Por que o uso concomitante de Nitratos e Inibidores da Fosfodiesterase-5 (ex: Sildenafil/Viagra) é terminantemente contraindicado?),",
    "opcoes": [
      "A) Porque os remédios anulam um ao outro.",
      "B) Porque pode causar cegueira.",
      "C) Porque causa excesso de energia.",
      "D) Risco de hipotensão severa e fatal devido ao sinergismo no aumento dos níveis de GMPc, levando a vasodilatação sistêmica maciça."
    ],
    "explicacao_geral": "Ambas as vias levam ao relaxamento do músculo liso vascular via GMPc.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Eles potencializam um ao outro perigosamente.",
      "B": "[INCORRETA] Não é o risco vital principal.",
      "C": "[INCORRETA] Absurdo.",
      "D": "[CORRETA] A interação **Nitrato + Sildenafil** gera **Hipotensão Fatal**."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 4191,
    "materia": "bmf3",
    "aula_id": "bmf3_a12",
    "tema": "bmf3_a12",
    "modulo": 3,
    "dificuldade": 2,
    "correta": 0,
    "enunciado": "Qual a principal meta terapêutica dos Betabloqueadores no tratamento da Angina Estável?),",
    "opcoes": [
      "A) Reduzir o consumo de oxigênio pelo miocárdio através da diminuição da frequência cardíaca e da contratilidade.",
      "B) Aumentar a pressão arterial.",
      "C) Dilatar as veias das pernas.",
      "D) Aumentar a glicose para o coração."
    ],
    "explicacao_geral": "Ao 'poupar' o coração, o desequilíbrio entre oferta e demanda de O2 é corrigido.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] Os **Betabloqueadores** reduzem a **Demanda de O2**.",
      "B": "[INCORRETA] Eles tendem a baixar a PA.",
      "C": "[INCORRETA] Efeito dos nitratos.",
      "D": "[INCORRETA] Absurdo metabólico."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 4192,
    "materia": "bmf3",
    "aula_id": "bmf3_a12",
    "tema": "bmf3_a12",
    "modulo": 3,
    "dificuldade": 2,
    "correta": 2,
    "enunciado": "Os Bloqueadores de Canais de Cálcio NÃO di-hidropiridínicos (Verapamil e Diltiazem) são usados na angina principalmente por qual efeito?),",
    "opcoes": [
      "A) Vasoconstrição potente.",
      "B) Aumento da diurese.",
      "C) Efeito inotrópico e cronotrópico negativos (agem diretamente no coração).",
      "D) Relaxamento dos músculos das costas."
    ],
    "explicacao_geral": "Diferente do anlodipino, estes agem mais no coração do que nos vasos periféricos.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] São vasodilatadores.",
      "B": "[INCORRETA] Não são diuréticos.",
      "C": "[CORRETA] **Verapamil/Diltiazem** possuem **Efeito Cardiodepressor**.",
      "D": "[INCORRETA] Relaxantes musculares centrais."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  }
];

const data = JSON.parse(fs.readFileSync(QUESTOES_PATH, 'utf-8'));
data.questoes = data.questoes.concat(novasQuestoes);
fs.writeFileSync(QUESTOES_PATH, JSON.stringify(data, null, 2), 'utf-8');
console.log(`Sucesso: 8 questões da aula bmf3_a11/a12 adicionadas.`);
