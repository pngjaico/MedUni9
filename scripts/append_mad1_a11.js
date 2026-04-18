import fs from 'fs';
import path from 'path';

const QUESTOES_PATH = 'data/questoes.json';

const novasQuestoes = [
  {
    "id": 3921,
    "materia": "mad1",
    "aula_id": "mad1_a11",
    "tema": "mad1_a11",
    "modulo": 2,
    "dificuldade": 1,
    "correta": 1,
    "enunciado": "As 'Dermatofitoses' (Tineas) são micoses que atingem tecidos queratinizados. Qual a principal fonte de nutrição desses fungos (como Trichophyton e Microsporum)?),",
    "opcoes": [
      "A) Açúcares do sangue.",
      "B) Queratina da pele, unhas e pelos.",
      "C) Gordura subcutânea.",
      "D) Oxigênio atmosférico apenas."
    ],
    "explicacao_geral": "Os dermatófitos possuem enzimas (queratinases) que degradam essa proteína estrutural.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Diferente da Candida, dermatófitos são superficiais.",
      "B": "[CORRETA] Os **Dermatófitos** alimentam-se de **Queratina**.",
      "C": "[INCORRETA] Não aprofundam além da epiderme em pacientes normais.",
      "D": "[INCORRETA] São heterótrofos orgânicos."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3922,
    "materia": "mad1",
    "aula_id": "mad1_a11",
    "tema": "mad1_a11",
    "modulo": 2,
    "dificuldade": 1,
    "correta": 3,
    "enunciado": "Qual fungo é o agente da 'Pitiríase Versicolor', caracterizada por manchas claras ou escuras no tronco que não coçam e 'não bronzeiam'?),",
    "opcoes": [
      "A) Candida albicans.",
      "B) Paracoccidioides brasiliensis.",
      "C) Sporothrix schenckii.",
      "D) Malassezia furfur."
    ],
    "explicacao_geral": "O fungo produz ácido azelaico que inibe a produção de melanina.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Causa intertrigo e candidíase oral/vaginal.",
      "B": "[INCORRETA] Causa micose sistêmica profunda.",
      "C": "[INCORRETA] Causa micose subcutânea traumática.",
      "D": "[CORRETA] A **Malassezia furfur** causa a **Pitiríase Versicolor** (Pano Branco)."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3923,
    "materia": "mad1",
    "aula_id": "mad1_a11",
    "tema": "mad1_a11",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 0,
    "enunciado": "A Paracoccidioidomicose (PCM) é uma micose sistêmica importante no Brasil. Qual a morfologia típica do fungo na fase de levedura (37°C) observada no exame direto?),",
    "opcoes": [
      "A) Célula mãe com múltiplos brotamentos ao redor (aspecto de 'roda de leme' ou 'orelha de Mickey').",
      "B) Pequenas leveduras dentro de macrófagos.",
      "C) Hifas em forma de pincel.",
      "D) Esferas gigantes contendo endósporos."
    ],
    "explicacao_geral": "A PCM atinge principalmente trabalhadores rurais por inalação do fungo presente no solo.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] O **Paracoccidioides** apresenta a morfologia em **Roda de Leme**.",
      "B": "[INCORRETA] Característica da Histoplasmose.",
      "C": "[INCORRETA] Penicillium.",
      "D": "[INCORRETA] Coccidioidomicose."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3924,
    "materia": "mad1",
    "aula_id": "mad1_a11",
    "tema": "mad1_a11",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 2,
    "enunciado": "Um paciente com diagnóstico de AIDS apresenta dor de cabeça intensa, febre e confusão mental. A punção lombar revela leveduras redondas com uma CÁPSULA proeminente (visualizada com tinta da China). Qual o diagnóstico?),",
    "opcoes": [
      "A) Meningite bacteriana por Meningococo.",
      "B) Neurotuberculose.",
      "C) Meningoencefalite por Cryptococcus neoformans.",
      "D) Candidíase cerebral."
    ],
    "explicacao_geral": "O Cryptococcus é um fungo oportunista clássico em imunodeprimidos graves.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Veria-se diplococos no Gram, não leveduras capsuladas.",
      "B": "[INCORRETA] Veria-se BAAR no Ziehl-Neelsen.",
      "C": "[CORRETA] O **Cryptococcus** é identificado pela **cápsula na Tinta da China**.",
      "D": "[INCORRETA] Candida raramente forma cápsulas proeminentes e causa meningite nesse padrão."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 3925,
    "materia": "mad1",
    "aula_id": "mad1_a11",
    "tema": "mad1_a11",
    "modulo": 2,
    "dificuldade": 3,
    "correta": 1,
    "enunciado": "A Histoplasmose (Histoplasma capsulatum) é uma micose sistêmica associada a qual exposição ambiental?),",
    "opcoes": [
      "A) Nadar em rios poluídos.",
      "B) Limpeza de cavernas (fezes de morcegos) ou galinheiros degradados.",
      "C) Comer carne de porco mal cozida.",
      "D) Beber leite sem ferver."
    ],
    "explicacao_geral": "O fungo cresce no solo rico em nitrogênio proveniente de excretas de aves e morcegos.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Risco de leptospirose ou esquistossomose.",
      "B": "[CORRETA] A **Histoplasmose** está ligada a **cavernas e galinheiros**.",
      "C": "[INCORRETA] Risco de teníase/cisticercose.",
      "D": "[INCORRETA] Risco de brucelose/tuberculose bovina."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 3926,
    "materia": "mad1",
    "aula_id": "mad1_a11",
    "tema": "mad1_a11",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 3,
    "enunciado": "A 'Candidíase Oral' (sapinho) é o exemplo mais comum de micose oportunista. Qual fator favorece o seu aparecimento?),",
    "opcoes": [
      "A) Higiene bucal excessiva.",
      "B) Uso de protetor solar.",
      "C) Consumo excessivo de água.",
      "D) Uso de antibióticos de amplo espectro (elimina microbiota competidora) ou imunossupressão (ex: corticoide, HIV)."
    ],
    "explicacao_geral": "Candida albicans faz parte da microbiota normal em baixos números.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Ajuda a prevenir.",
      "B": "[INCORRETA] Sem relação.",
      "C": "[INCORRETA] Benéfico.",
      "D": "[CORRETA] A **Candidíase** surge por **desequilíbrio da microbiota ou imunidade**."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 3927,
    "materia": "mad1",
    "aula_id": "mad1_a11",
    "tema": "mad1_a11",
    "modulo": 2,
    "dificuldade": 3,
    "correta": 0,
    "enunciado": "A Paracoccidioidomicose pode se manifestar com lesões em 'estomatite moriforme' de Aguiar-Pupo. O que isso descreve?),",
    "opcoes": [
      "A) Lesões na mucosa oral com pontilhado hemorrágico, semelhantes a uma amora.",
      "B) Dentes que caem sozinhos.",
      "C) Língua totalmente preta.",
      "D) Perda total do paladar."
    ],
    "explicacao_geral": "É um sinal clássico observado por dentistas e médicos em pacientes rurais com PCM.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] A **Estomatite Moriforme** é típica da **Paracoccidioidomicose**.",
      "B": "[INCORRETA] Inespecífico ou doença periodontal avançada.",
      "C": "[INCORRETA] Língua pilosa negra (outra causa).",
      "D": "[INCORRETA] Inespecífico."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 3928,
    "materia": "mad1",
    "aula_id": "mad1_a11",
    "tema": "mad1_a11",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 2,
    "enunciado": "As micoses sistêmicas como PCM e Histoplasmose entram no diagnóstico diferencial de qual doença bacteriana crônica devido às lesões pulmonares?),",
    "opcoes": [
      "A) Hanseníase.",
      "B) Sífilis.",
      "C) Tuberculose.",
      "D) Tétano."
    ],
    "explicacao_geral": "Os sintomas de tosse crônica, emagrecimento e infiltrados pulmonares são muito parecidos.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Foco em pele e nervos.",
      "B": "[INCORRETA] Manifestações sistêmicas são diferentes no pulmão.",
      "C": "[CORRETA] **Micoses Sistêmicas** são diagnósticos diferenciais da **Tuberculose**.",
      "D": "[INCORRETA] Doença neurológica aguda."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  }
];

const data = JSON.parse(fs.readFileSync(QUESTOES_PATH, 'utf-8'));
data.questoes = data.questoes.concat(novasQuestoes);
fs.writeFileSync(QUESTOES_PATH, JSON.stringify(data, null, 2), 'utf-8');
console.log(`Sucesso: 8 questões da aula mad1_a11 adicionadas.`);
