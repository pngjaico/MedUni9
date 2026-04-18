import fs from 'fs';
import path from 'path';

const QUESTOES_PATH = 'data/questoes.json';

const novasQuestoes = [
  {
    "id": 4001,
    "materia": "mad1",
    "aula_id": "mad1_a21",
    "tema": "mad1_a21",
    "modulo": 2,
    "dificuldade": 1,
    "correta": 1,
    "enunciado": "Qual a primeira linha de defesa antiviral produzida por células infectadas para alertar as células vizinhas e induzir um estado antiviral?),",
    "opcoes": [
      "A) Anticorpos IgG.",
      "B) Interferons do Tipo I (IFN-alfa e IFN-beta).",
      "C) Histamina.",
      "D) Hemoglobina."
    ],
    "explicacao_geral": "Os IFNs do tipo I inibem a replicação viral e ativam as células NK.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Imunidade adaptativa tardia.",
      "B": "[CORRETA] Os **Interferons tipo I** são os guardiões **antivirais** iniciais.",
      "C": "[INCORRETA] Mediador inflamatório alérgico/vascular.",
      "D": "[INCORRETA] Proteína de transporte de oxigênio."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 4002,
    "materia": "mad1",
    "aula_id": "mad1_a21",
    "tema": "mad1_a21",
    "modulo": 2,
    "dificuldade": 1,
    "correta": 3,
    "enunciado": "A defesa contra helmintos (vermes) envolve uma resposta imune específica. Qual tríade celular/molecular é característica dessa resposta?),",
    "opcoes": [
      "A) Macrófagos, Th1 e IFN-gama.",
      "B) Neutrófilos, Complemento e IgM.",
      "C) Células NK, Perforinas e IgG.",
      "D) Linfócitos Th2, anticorpos IgE e Eosinófilos."
    ],
    "explicacao_geral": "A IgE opsoniza o verme e induz a desgranulação de eosinófilos (liberação de proteína básica principal).",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Típico de bactérias intracelulares.",
      "B": "[INCORRETA] Típico de bactérias extracelulares piogênicas.",
      "C": "[INCORRETA] Típico de resposta antiviral/tumoral.",
      "D": "[CORRETA] A **Resposta Th2/IgE/Eosinófilo** é direcionada a **Helmintos**."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 4003,
    "materia": "mad1",
    "aula_id": "mad1_a21",
    "tema": "mad1_a21",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 0,
    "enunciado": "Bactérias intracelulares como o Mycobacterium tuberculosis sobrevivem dentro de macrófagos. Qual o mecanismo imune crucial para eliminá-las?),",
    "opcoes": [
      "A) Ativação dos macrófagos por Linfócitos Th1 através da secreção de IFN-gama.",
      "B) Produção de muco.",
      "C) Ativação da cascata de coagulação.",
      "D) Aumento da temperatura do pé."
    ],
    "explicacao_geral": "O IFN-gama estimula a produção de óxido nítrico e espécies reativas de oxigênio no macrófago.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] O **Eixo Th1/IFN-gama** é vital contra **Patógenos Intracelulares**.",
      "B": "[INCORRETA] Barreira física inata, insuficiente aqui.",
      "C": "[INCORRETA] Sem efeito microbicida direto.",
      "D": "[INCORRETA] Sem base biológica."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 4004,
    "materia": "mad1",
    "aula_id": "mad1_a21",
    "tema": "mad1_a21",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 2,
    "enunciado": "A 'Variação Antigênica' é uma estratégia de evasão viral. Qual a sua consequência para o sistema imune?),",
    "opcoes": [
      "A) O vírus morre mais rápido.",
      "B) O sistema imune consegue decorar o vírus para sempre.",
      "C) Os anticorpos produzidos contra a cepa anterior tornam-se ineficazes contra a nova cepa (ex: Influenza, HIV).",
      "D) O vírus vira uma bactéria."
    ],
    "explicacao_geral": "Isso permite que o patógeno reinfecte o mesmo hospedeiro ou persista cronicamente.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Pelo contrário, garante a sobrevivência populacional viral.",
      "B": "[INCORRETA] A memória é restrita àquela configuração antigênica específica.",
      "C": "[CORRETA] A **Variação Antigênica** permite o **escape imune**.",
      "D": "[INCORRETA] Impossível biologicamente."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 4005,
    "materia": "mad1",
    "aula_id": "mad1_a21",
    "tema": "mad1_a21",
    "modulo": 2,
    "dificuldade": 3,
    "correta": 1,
    "enunciado": "Em pacientes com deficiência hereditária de componentes tardios do Complemento (C5-C9), há uma suscetibilidade seletiva a infecções por qual grupo bacteriano?),",
    "opcoes": [
      "A) Staphylococcus.",
      "B) Neisseria (Meningococo e Gonococo).",
      "C) Micobactérias.",
      "D) Clostridiuns."
    ],
    "explicacao_geral": "O complexo de ataque à membrana (MAC) é crucial para lisar a parede delgada das Neisserias.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Defesa depende mais de opsonização e neutrófilos.",
      "B": "[CORRETA] Deficiências de **C5-C9** aumentam o risco de **Doença Neissérica Disseminada**.",
      "C": "[INCORRETA] Defesa depende de imunidade celular (Th1/Macrófago).",
      "D": "[INCORRETA] Patogenia por toxinas."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 4006,
    "materia": "mad1",
    "aula_id": "mad1_a21",
    "tema": "mad1_a21",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 3,
    "enunciado": "Por que anticorpos 'neutralizantes' são o objetivo principal da maioria das vacinas antivirais?),",
    "opcoes": [
      "A) Porque eles matam as células cancerosas.",
      "B) Porque eles tornam o vírus visível ao microscópio.",
      "C) Porque eles impedem o vírus de se multiplicar no solo.",
      "D) Porque eles se ligam às proteínas de superfície do vírus e impedem que ele se anexe e penetre na célula hospedeira."
    ],
    "explicacao_geral": "Ao impedir a entrada, evita-se o início da infecção celular.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Função de vigilância celular diferente.",
      "B": "[INCORRETA] Útil em laboratório (imunofluorescência), não objetivo clínico preventivo.",
      "C": "[INCORRETA] Vírus não se multiplicam no solo.",
      "D": "[CORRETA] Os **Anticorpos Neutralizantes** bloqueiam o **início da infecção**."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 4007,
    "materia": "mad1",
    "aula_id": "mad1_a21",
    "tema": "mad1_a21",
    "modulo": 2,
    "dificuldade": 3,
    "correta": 0,
    "enunciado": "Qual a principal estratégia de evasão da 'Listeria monocytogenes' para escapar da fagocitose destruidora?),",
    "opcoes": [
      "A) Ela rompe a membrana do fagossomo (via listeriolisina O) e escapa para o citoplasma, onde se move usando a actina da célula hospedeira.",
      "B) Ela se transforma em um vírus.",
      "C) Ela emite um som que assusta o macrófago.",
      "D) Ela se cobre com açúcar para parecer amigável."
    ],
    "explicacao_geral": "Isso permite a transmissão direta de célula para célula sem exposição ao meio extracelular (onde há anticorpos).",
    "explicacoes_opcoes": {
      "A": "[CORRETA] A **Fuga do Fagossomo** é a tática clássica da **Listeria**.",
      "B": "[INCORRETA] Biologicamente impossível.",
      "C": "[INCORRETA] Absurdo.",
      "D": "[INCORRETA] Embora usem mimetismo molecular, a descrição da actina é o fator diferencial de evasão dinâmica citado."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 4008,
    "materia": "mad1",
    "aula_id": "mad1_a21",
    "tema": "mad1_a21",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 2,
    "enunciado": "Na resposta imune contra Fungos, qual subpopulação de Linfócitos T Helper é mais importante para o recrutamento de neutrófilos e defesa de superfícies mucosas?),",
    "opcoes": [
      "A) Th1.",
      "B) Th2.",
      "C) Th17.",
      "D) Treg."
    ],
    "explicacao_geral": "O Th17 produz IL-17 e IL-22, essenciais contra Candida e bactérias extracelulares em mucosas.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Mais importante para fungos sistêmicos/intracelulares (PCM, Histoplasma).",
      "B": "[INCORRETA] Resposta humoral/helmintos.",
      "C": "[CORRETA] O **Perfil Th17** é crítico na **defesa antifúngica de mucosas** (ex: candidíase mucocutânea).",
      "D": "[INCORRETA] Imunossupressão/reguladora."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  }
];

const data = JSON.parse(fs.readFileSync(QUESTOES_PATH, 'utf-8'));
data.questoes = data.questoes.concat(novasQuestoes);
fs.writeFileSync(QUESTOES_PATH, JSON.stringify(data, null, 2), 'utf-8');
console.log(`Sucesso: 8 questões da aula mad1_a21 adicionadas.`);
