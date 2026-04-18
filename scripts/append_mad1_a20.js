import fs from 'fs';
import path from 'path';

const QUESTOES_PATH = 'data/questoes.json';

const novasQuestoes = [
  {
    "id": 3993,
    "materia": "mad1",
    "aula_id": "mad1_a20",
    "tema": "mad1_a20",
    "modulo": 2,
    "dificuldade": 1,
    "correta": 1,
    "enunciado": "As moléculas de MHC (Complexo de Histocompatibilidade Principal) são essenciais para a apresentação de antígenos. Qual classe de MHC é expressa em TODAS as células nucleadas do organismo?),",
    "opcoes": [
      "A) MHC Classe II.",
      "B) MHC Classe I.",
      "C) MHC Classe III.",
      "D) Somente nos glóbulos vermelhos."
    ],
    "explicacao_geral": "O MHC I sinaliza ao sistema imune o que está acontecendo dentro da célula (ex: infecção viral).",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Expressa apenas em APCs profissionais.",
      "B": "[CORRETA] O **MHC Classe I** é o 'RG' de **todas as células nucleadas**.",
      "C": "[INCORRETA] Relacionado a proteínas do complemento e citocinas, não apresentação direta clássica.",
      "D": "[INCORRETA] Hemácias não possuem núcleo nem MHC I clássico."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3994,
    "materia": "mad1",
    "aula_id": "mad1_a20",
    "tema": "mad1_a20",
    "modulo": 2,
    "dificuldade": 1,
    "correta": 3,
    "enunciado": "Os Linfócitos T auxiliares (Helper) reconhecem antígenos apresentados apenas por qual molécula?),",
    "opcoes": [
      "A) Anticorpos livres.",
      "B) MHC Classe I.",
      "C) Receptores Toll-like.",
      "D) MHC Classe II."
    ],
    "explicacao_geral": "Os Linfócitos T CD4+ (Helper) são restritos ao MHC II.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Linfócitos T não reconhecem antígenos livres.",
      "B": "[INCORRETA] Reconhecido pelos CD8+ (citotóxicos).",
      "C": "[INCORRETA] Receptores da imunidade inata.",
      "D": "[CORRETA] O **Linfócito T CD4** reconhece o **MHC Classe II**."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3995,
    "materia": "mad1",
    "aula_id": "mad1_a20",
    "tema": "mad1_a20",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 0,
    "enunciado": "A ativação plena de um Linfócito T virgem exige dois sinais. O primeiro é o reconhecimento do complexo MHC-Peptídeo pelo TCR. Qual é o SEGUNDO sinal (co-estimulação) clássico?),",
    "opcoes": [
      "A) Interação entre a molécula B7 (na APC) e o receptor CD28 (no linfócito T).",
      "B) Beber muita água.",
      "C) Presença de Vitamina C.",
      "D) Ligação da Insulina ao linfócito."
    ],
    "explicacao_geral": "Sem o segundo sinal, o linfócito T pode entrar em estado de anergia (inatividade funcional).",
    "explicacoes_opcoes": {
      "A": "[CORRETA] O **Sinal 2 (B7-CD28)** é vital para a **ativação linfocitária**.",
      "B": "[INCORRETA] Irrelevante molecular.",
      "C": "[INCORRETA] Auxiliar, não sinal primário de ativação sináptica.",
      "D": "[INCORRETA] Irrelevante."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3996,
    "materia": "mad1",
    "aula_id": "mad1_a20",
    "tema": "mad1_a20",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 2,
    "enunciado": "Qual a principal função dos Linfócitos T CD8+ (Citotóxicos) após serem ativados?),",
    "opcoes": [
      "A) Produzir anticorpos.",
      "B) Ativar macrófagos via citocinas apenas.",
      "C) Destruir diretamente células infectadas por vírus ou células tumorais através da liberação de perforinas e granzimas (induzindo apoptose).",
      "D) Secretar muco nas vias aéreas."
    ],
    "explicacao_geral": "Eles são os 'assassinos' específicos do sistema imune adaptativo.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Função dos Linfócitos B.",
      "B": "[INCORRETA] Principal função dos CD4+ Th1.",
      "C": "[CORRETA] O **Linfócito CD8** promove a **morte celular dirigida**.",
      "D": "[INCORRETA] Função de células caliciformes."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3997,
    "materia": "mad1",
    "aula_id": "mad1_a20",
    "tema": "mad1_a20",
    "modulo": 2,
    "dificuldade": 3,
    "correta": 1,
    "enunciado": "O processo de 'Seleção Negativa' no Timo é fundamental para a autotolerância. Em que ele consiste?),",
    "opcoes": [
      "A) Eliminar linfócitos que não reconhecem o MHC.",
      "B) Eliminar (por apoptose) linfócitos T que reconhecem com alta afinidade os auto-antígenos (antígenos do próprio corpo), evitando a autoimunidade.",
      "C) Eliminar linfócitos T que são muito pequenos.",
      "D) Dar um prêmio aos linfócitos mais fortes."
    ],
    "explicacao_geral": "Falhas nesse processo podem levar ao desenvolvimento de doenças autoimunes.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Isso é Seleção Positiva.",
      "B": "[CORRETA] A **Seleção Negativa** impede a **Autoimunidade**.",
      "C": "[INCORRETA] Critério não biológico.",
      "D": "[INCORRETA] Absurdo."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3998,
    "materia": "mad1",
    "aula_id": "mad1_a20",
    "tema": "mad1_a20",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 3,
    "enunciado": "Diferente dos linfócitos B, os linfócitos T só reconhecem antígenos se eles forem:),",
    "opcoes": [
      "A) Açúcares puros.",
      "B) Solúveis no plasma.",
      "C) Muito grandes.",
      "D) Processados em pequenos peptídeos e apresentados em uma molécula de MHC."
    ],
    "explicacao_geral": "O TCR não 'enxerga' antígenos nativos tridimensionais livres.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Linfócitos T focam em proteínas (peptídeos).",
      "B": "[INCORRETA] Linfócitos B reconhecem antígenos solúveis.",
      "C": "[INCORRETA] O peptídeo apresentado no sulco do MHC é muito pequeno (8-20 aminoácidos).",
      "D": "[CORRETA] O **Linfócito T** exige a **Apresentação via MHC**."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3999,
    "materia": "mad1",
    "aula_id": "mad1_a20",
    "tema": "mad1_a20",
    "modulo": 2,
    "dificuldade": 3,
    "correta": 0,
    "enunciado": "A 'Apresentação Cruzada' (Cross-presentation) é uma habilidade especial de certas células dendríticas. Qual o seu objetivo?),",
    "opcoes": [
      "A) Apresentar antígenos EXÓGENOS (capturados de fora) via MHC Classe I para ativar linfócitos T CD8+, permitindo imunidade contra vírus que não infectam a própria célula dendrítica.",
      "B) Cruzar anticorpos de pessoas diferentes.",
      "C) Fazer o linfócito T virar linfócito B.",
      "D) Ativar o sistema complemento mais rápido."
    ],
    "explicacao_geral": "É essencial para gerar respostas citotóxicas contra tumores e vírus não-citopáticos para as APCs.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] A **Apresentação Cruzada** permite ativar **CD8 contra invasores extracelulares**.",
      "B": "[INCORRETA] Absurdo.",
      "C": "[INCORRETA] Linhagens celulares são fixas após maturação inicial.",
      "D": "[INCORRETA] Processo da imunidade inata/humoral."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 4000,
    "materia": "mad1",
    "aula_id": "mad1_a20",
    "tema": "mad1_a20",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 2,
    "enunciado": "Qual a principal citocina produzida pelos Linfócitos T CD4+ Th1 para ativar macrófagos e aumentar sua capacidade de destruir patógenos intracelulares (como o Mycobacterium tuberculosis)?),",
    "opcoes": [
      "A) IL-4.",
      "B) IL-5.",
      "C) IFN-gama (Interferon-gama).",
      "D) IL-10."
    ],
    "explicacao_geral": "A resposta Th1 é fundamental para o controle de infecções por bactérias intracelulares e fungos.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Direciona para resposta Th2 (alergia/helmintos).",
      "B": "[INCORRETA] Ativa eosinófilos (Th2).",
      "C": "[CORRETA] O **IFN-gama** é o principal **Ativador de Macrófagos**.",
      "D": "[INCORRETA] Citocina anti-inflamatória/supressora."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  }
];

const data = JSON.parse(fs.readFileSync(QUESTOES_PATH, 'utf-8'));
data.questoes = data.questoes.concat(novasQuestoes);
fs.writeFileSync(QUESTOES_PATH, JSON.stringify(data, null, 2), 'utf-8');
console.log(`Sucesso: 8 questões da aula mad1_a20 adicionadas.`);
