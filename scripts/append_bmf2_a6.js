import fs from 'fs';
import path from 'path';

const QUESTOES_PATH = 'data/questoes.json';

const novasQuestoes = [
  {
    "id": 3641,
    "materia": "bmf2",
    "aula_id": "bmf2_a6",
    "tema": "bmf2_a6",
    "modulo": 2,
    "dificuldade": 1,
    "correta": 0,
    "enunciado": "A regulação da pressão arterial a curto prazo (segundos) é feita predominantemente por reflexos neurais. Onde se localizam os principais 'Barorreceptores' (sensores de pressão)?),",
    "opcoes": [
      "A) No Seio Carotídeo e no Arco Aórtico.",
      "B) Nas pontas dos dedos e orelhas.",
      "C) No estômago e intestino.",
      "D) Apenas dentro do coração."
    ],
    "explicacao_geral": "Os barorreceptores detectam o estiramento da parede arterial e enviam sinais ao bulbo.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] O **Seio Carotídeo e o Arco Aórtico** monitoram o fluxo para o cérebro e corpo.",
      "B": "[INCORRETA] Sensores de tato e temperatura.",
      "C": "[INCORRETA] Envolvidos no controle digestório/saciedade.",
      "D": "[INCORRETA] Existem receptores atriais, mas os arteriais de alta pressão são sistêmicos nessas localizações primárias."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3642,
    "materia": "bmf2",
    "aula_id": "bmf2_a6",
    "tema": "bmf2_a6",
    "modulo": 2,
    "dificuldade": 1,
    "correta": 2,
    "enunciado": "Qual hormônio é liberado pelos Rins em resposta à queda da pressão arterial ou do volume sanguíneo, iniciando uma cascata de controle da pressão?),",
    "opcoes": [
      "A) Insulina.",
      "B) Adrenalina.",
      "C) Renina.",
      "D) Tireoxina."
    ],
    "explicacao_geral": "A renina cliva o angiotensinogênio em angiotensina I.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Pâncreas; controle glicêmico.",
      "B": "[INCORRETA] Adrenais; resposta de luta ou fuga.",
      "C": "[CORRETA] A **Renina** é o gatilho do **Sistema SRAA**.",
      "D": "[INCORRETA] Tireoide; metabolismo basal."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3643,
    "materia": "bmf2",
    "aula_id": "bmf2_a6",
    "tema": "bmf2_a6",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 3,
    "enunciado": "A 'Angiotensina II' é um dos mais potentes reguladores da pressão arterial no corpo humano. Qual o seu principal efeito vascular?),",
    "opcoes": [
      "A) Vasodilatação generalizada e queda da pressão.",
      "B) Aumentar a perda de água na urina.",
      "C) Diminuir a frequência cardíaca.",
      "D) Vasoconstrição potente e estímulo à secreção de Aldosterona pela adrenal."
    ],
    "explicacao_geral": "A angiotensina II restaura a pressão via resistência (vasoconstrição) e volume (retenção de sal).",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Ela causa vasoconstrição intensa.",
      "B": "[INCORRETA] Ela diminui a perda de água ao estimular retenção de sódio.",
      "C": "[INCORRETA] Atua indiretamente mas não é um efeito parassimpático.",
      "D": "[CORRETA] A **Angiotensina II** eleva a PA via **vasoconstrição e Aldosterona**."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3644,
    "materia": "bmf2",
    "aula_id": "bmf2_a6",
    "tema": "bmf2_a6",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 1,
    "enunciado": "A 'Aldosterona' age nos túbulos renais. Qual o resultado final da sua ação sobre o equilíbrio de eletrólitos e pressão arterial?),",
    "opcoes": [
      "A) Excreção de Sódio e retenção de Potássio; queda da PA.",
      "B) Reabsorção de Sódio (Na+) e água para o sangue, com excreção de Potássio (K+); aumento da PA.",
      "C) Perda total de Cálcio.",
      "D) Produção de urina muito diluída."
    ],
    "explicacao_geral": "A água segue o sódio por osmose, aumentando o volume plasmático.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] PNA (Peptídeo Natriurético) faz isso.",
      "B": "[CORRETA] A **Aldosterona** causa **retenção salina e aumento de volume**.",
      "C": "[INCORRETA] Foco em sódio/potássio.",
      "D": "[INCORRETA] O volume urinário diminui e torna-se mais concentrado em solutos residuais."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3645,
    "materia": "bmf2",
    "aula_id": "bmf2_a6",
    "tema": "bmf2_a6",
    "modulo": 2,
    "dificuldade": 3,
    "correta": 0,
    "enunciado": "Um paciente hipertenso usa um medicamento da classe dos 'Inibidores da ECA' (Enzima Conversora de Angiotensina). Qual o mecanismo de ação deste fármaco?),",
    "opcoes": [
      "A) Impedir a conversão de Angiotensina I em Angiotensina II, reduzindo a vasoconstrição e a retenção de sódio.",
      "B) Bloquear os batimentos cardíacos.",
      "C) Aumentar a força dos pulmões.",
      "D) Ativar a produção de Renina."
    ],
    "explicacao_geral": "A ECA é encontrada principalmente nos pulmões (endotélio).",
    "explicacoes_opcoes": {
      "A": "[CORRETA] O **IECA** (Ex: Captopril) reduz os níveis de **Angiotensina II** circulantes.",
      "B": "[INCORRETA] Função de Betabloqueadores/Cálcio-antagonistas.",
      "C": "[INCORRETA] Sem benefício respiratório direto; pode causar tosse como efeito colateral (acúmulo de bradicinina).",
      "D": "[INCORRETA] Reduz a ativação sistêmica do SRAA, embora pudesse haver um feedback de aumento de renina reativa, o mecanismo primário é inibição da síntese de ANG II."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 3646,
    "materia": "bmf2",
    "aula_id": "bmf2_a6",
    "tema": "bmf2_a6",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 3,
    "enunciado": "Quando o coração (átrios) fica muito cheio (estirado), ele libera o Hormônio PNA (Peptídeo Natriurético Atrial). Qual o efeito esperado dele?),",
    "opcoes": [
      "A) Aumentar o apetite.",
      "B) Causar sede intensa.",
      "C) Estimular o sono.",
      "D) Antagonizar o sistema SRAA, promovendo excreção de sódio e água na urina (natriurese) para reduzir a pressão e o volume sanguíneo."
    ],
    "explicacao_geral": "O PNA é o 'freio' natural contra a sobrecarga de volume.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Sem relação.",
      "B": "[INCORRETA] Aldosterona/Angiotensina II estimulam a sede.",
      "C": "[INCORRETA] Sem efeito hipnótico.",
      "D": "[CORRETA] O **PNA** é o hormônio **hipotensor e diurético** natural do coração."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3647,
    "materia": "bmf2",
    "aula_id": "bmf2_a6",
    "tema": "bmf2_a6",
    "modulo": 2,
    "dificuldade": 3,
    "correta": 2,
    "enunciado": "O 'Reflexo Barorreceptor' pode falhar em pacientes idosos ao se levantarem (Hipotensão Ortostática). Qual o braço eferente desse reflexo que deveria compensar a queda de pressão?),",
    "opcoes": [
      "A) Aumento da atividade Parassimpática (Vagal).",
      "B) Parada cardíaca imediata.",
      "C) Aumento da atividade Simpática, causando taquicardia e vasoconstrição periférica.",
      "D) Produção de mais sangue em 1 segundo."
    ],
    "explicacao_geral": "O bulbo desativa o parassimpático e ativa o simpático rapidamente.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] O parassimpático baixaria ainda mais a pressão.",
      "B": "[INCORRETA] Evento fatal, não compensatório eficaz.",
      "C": "[CORRETA] O **Simpático** restaura a PA via **FC e RPT** ao levantar-se.",
      "D": "[INCORRETA] Processo de dias nos rins (eritropoietina)."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 3648,
    "materia": "bmf2",
    "aula_id": "bmf2_a6",
    "tema": "bmf2_a6",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 1,
    "enunciado": "O hormônio ADH (Vasopressina) regula a pressão arterial no longo prazo. Como ele atua?),",
    "opcoes": [
      "A) Fazendo o açúcar sair na urina.",
      "B) Inserindo canais de água (Aquaporinas) nos túbulos renais para reabsorver água livre, aumentando o volume de sangue.",
      "C) Impedindo o coração de bater.",
      "D) Estimulando a digestão."
    ],
    "explicacao_geral": "O ADH é liberado pela neuro-hipófise em resposta à alta osmolaridade ou baixa pressão.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Função de transportadores SGLT.",
      "B": "[CORRETA] O **ADH** é o hormônio 'Poupador de Água' (**Antidiurético**).",
      "C": "[INCORRETA] Não tem efeito cronotrópico negativo primário.",
      "D": "[INCORRETA] Sem relação gastrointestinal."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  }
];

const data = JSON.parse(fs.readFileSync(QUESTOES_PATH, 'utf-8'));
data.questoes = data.questoes.concat(novasQuestoes);
fs.writeFileSync(QUESTOES_PATH, JSON.stringify(data, null, 2), 'utf-8');
console.log(`Sucesso: 8 questões da aula bmf2_a6 adicionadas.`);
