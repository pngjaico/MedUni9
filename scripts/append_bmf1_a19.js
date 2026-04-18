import fs from 'fs';
import path from 'path';

const QUESTOES_PATH = 'data/questoes.json';

const novasQuestoes = [
  {
    "id": 3145,
    "materia": "bmf1",
    "aula_id": "bmf1_a19",
    "tema": "bmf1_a19",
    "modulo": 1,
    "dificuldade": 1,
    "correta": 1,
    "enunciado": "O canal alimentar possui uma estrutura básica em quatro camadas. Qual é a camada mais interna, em contato direto com o alimento, responsável por proteção e absorção?",
    "opcoes": [
      "A) Submucosa.",
      "B) Mucosa.",
      "C) Muscular externa.",
      "D) Serosa ou Adventícia."
    ],
    "explicacao_geral": "A parede do trato digestório é organizada em túnicas concêntricas.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] A submucosa contém vasos e o plexo de Meissner.",
      "B": "[CORRETA] A **mucosa** é a primeira camada, composta por epitélio, lâmina própria e muscular da mucosa.",
      "C": "[INCORRETA] A muscular externa é responsável pelo peristaltismo.",
      "D": "[INCORRETA] A serosa/adventícia é a capa externa de revestimento."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3146,
    "materia": "bmf1",
    "aula_id": "bmf1_a19",
    "tema": "bmf1_a19",
    "modulo": 1,
    "dificuldade": 2,
    "correta": 0,
    "enunciado": "Uma característica histológica única do esôfago é a transição de tipos de tecido muscular ao longo de seu trajeto. Qual o tipo de músculo encontrado no terço superior do esôfago?",
    "opcoes": [
      "A) Músculo Estriado Esquelético.",
      "B) Músculo Liso apenas.",
      "C) Músculo Cardíaco.",
      "D) Não possui camada muscular."
    ],
    "explicacao_geral": "O controle da deglutição inicia-se de forma voluntária e torna-se involuntário no trajeto descendente.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] O terço superior possui **músculo esquelético**. O terço médio é misto e o inferior é puramente liso.",
      "B": "[INCORRETA] O músculo liso predomina apenas no terço inferior.",
      "C": "[INCORRETA] Músculo cardíaco é exclusivo do coração.",
      "D": "[INCORRETA] O esôfago possui camadas musculares circulares e longitudinais potentes."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3147,
    "materia": "bmf1",
    "aula_id": "bmf1_a19",
    "tema": "bmf1_a19",
    "modulo": 1,
    "dificuldade": 2,
    "correta": 3,
    "enunciado": "Um paciente queixa-se de pirose (azia) recorrente. O médico explica que o ácido do estômago está refluindo devido à falha de qual estrutura anatômica localizada na junção esofagogástrica?",
    "opcoes": [
      "A) Esfíncter Pilórico.",
      "B) Válvula Ileocecal.",
      "C) Cárdia anatômica.",
      "D) Esfíncter Esofágico Inferior (EEI)."
    ],
    "explicacao_geral": "O EEI é um esfíncter fisiológico auxiliado pelo diafragma (hiato esofágico).",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] O piloro controla a saída do estômago para o duodeno.",
      "B": "[INCORRETA] A válvula ileocecal fica no intestino grosso.",
      "C": "[INCORRETA] Cárdia é a região do estômago, mas o 'guardião' contra o refluxo é o esfíncter.",
      "D": "[CORRETA] A falha no **EEI** é a causa fisiopatológica da Doença do Refluxo Gastroesofágico (DRGE)."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 3148,
    "materia": "bmf1",
    "aula_id": "bmf1_a19",
    "tema": "bmf1_a19",
    "modulo": 1,
    "dificuldade": 3,
    "correta": 1,
    "enunciado": "No estômago, as células parietais (oxicínticas) são responsáveis pela secreção de duas substâncias fundamentais. Quais são elas?",
    "opcoes": [
      "A) Pepsina e Gastrina.",
      "B) Ácido Clorídrico (HCl) e Fator Intrínseco.",
      "C) Muco e Bicarbonato.",
      "D) Somatostatina e Serotonina."
    ],
    "explicacao_geral": "As células parietais localizam-se predominantemente no fundo e corpo do estômago.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Pepsina deriva do pepsinogênio das células principais; Gastrina vem das células G.",
      "B": "[CORRETA] As **células parietais** produzem **HCl** (digestão) e **Fator Intrínseco** (essencial para absorção de Vitamina B12).",
      "C": "[INCORRETA] Muco e bicarbonato são produzidos pelas células da mucosa superficial.",
      "D": "[INCORRETA] São produtos de células enteroendócrinas."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3149,
    "materia": "bmf1",
    "aula_id": "bmf1_a19",
    "tema": "bmf1_a19",
    "modulo": 1,
    "dificuldade": 2,
    "correta": 0,
    "enunciado": "A muscular externa do estômago possui uma característica especial que a diferencia do restante do canal alimentar. Qual é essa diferença?",
    "opcoes": [
      "A) Possui uma terceira camada de fibras, a camada oblíqua interna.",
      "B) É composta inteiramente por músculo estriado esquelético.",
      "C) Não possui plexo mioentérico (Auerbach).",
      "D) É composta apenas por uma camada longitudinal."
    ],
    "explicacao_geral": "A camada extra permite movimentos vigorosos de trituração e mistura (quimificação).",
    "explicacoes_opcoes": {
      "A": "[CORRETA] Além da circular e longitudinal, o estômago possui a **camada oblíqua**, totalizando três subcamadas musculares.",
      "B": "[INCORRETA] O estômago é músculo liso.",
      "C": "[INCORRETA] Possui plexo mioentérico entre as camadas para controle motor.",
      "D": "[INCORRETA] Possui três camadas, sendo a mista a regra no restante do tubo."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3150,
    "materia": "bmf1",
    "aula_id": "bmf1_a19",
    "tema": "bmf1_a19",
    "modulo": 1,
    "dificuldade": 3,
    "correta": 2,
    "enunciado": "Histologicamente, o epitélio do esôfago é diferente do epitélio do estômago. Qual é a transição epitelial que ocorre na Linha Z (junção escamocolunar)?",
    "opcoes": [
      "A) De simples colunar para estratificado pavimentoso.",
      "B) De simples cúbico para estratificado cilíndrico.",
      "C) De estratificado pavimentoso para simples colunar.",
      "D) De pseudoestratificado para simples pavimentoso."
    ],
    "explicacao_geral": "A mucosa protetora de atrito (esôfago) dá lugar à mucosa secretoria (estômago).",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Seria a ordem inversa.",
      "B": "[INCORRETA] Epitélios não correspondentes às funções dos órgãos.",
      "C": "[CORRETA] No cárdia, o epitélio **estratificado pavimentoso** do esôfago torna-se **simples colunar** gástrico.",
      "D": "[INCORRETA] Pseudoestratificado é típico das vias aéreas."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3151,
    "materia": "bmf1",
    "aula_id": "bmf1_a19",
    "tema": "bmf1_a19",
    "modulo": 1,
    "dificuldade": 2,
    "correta": 3,
    "enunciado": "Qual região do estômago atua como uma 'válvula' que regula o esvaziamento gástrico, permitindo a passagem do quimo para o duodeno apenas em pequenas frações?",
    "opcoes": [
      "A) Fundo gástrico.",
      "B) Corpo gástrico.",
      "C) Cárdia.",
      "D) Piloro (Esfíncter Pilórico)."
    ],
    "explicacao_geral": "O piloro é um espessamento da musculatura circular gástrica.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] O fundo armazena gases e secreta HCl/enzimas.",
      "B": "[INCORRETA] O corpo é o maior reservatório.",
      "C": "[INCORRETA] O cárdia é a entrada.",
      "D": "[CORRETA] O **piloro** controla a velocidade com que o alimento digerido chega ao intestino."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3152,
    "materia": "bmf1",
    "aula_id": "bmf1_a19",
    "tema": "bmf1_a19",
    "modulo": 1,
    "dificuldade": 3,
    "correta": 1,
    "enunciado": "As glândulas gástricas possuem as 'células principais'. Qual a secreção dessas células que, em contato com o ácido clorídrico, torna-se a principal enzima digestiva de proteínas do estômago?",
    "opcoes": [
      "A) Lipase gástrica.",
      "B) Pepsinogênio.",
      "C) Tripsina.",
      "D) Amilase."
    ],
    "explicacao_geral": "O pepsinogênio é uma pró-enzima (zimogênio) inativa para evitar a autodigestão da própria célula que a produz.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] A lipase gástrica digere lipídios, mas não é a principal secreção das células principais gástricas sob foco proteico.",
      "B": "[CORRETA] O **pepsinogênio** converte-se em **pepsina** em meio ácido.",
      "C": "[INCORRETA] Tripsina é uma enzima pancreática que atua no duodeno.",
      "D": "[INCORRETA] Amilase é salivar ou pancreática."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  }
];

const data = JSON.parse(fs.readFileSync(QUESTOES_PATH, 'utf-8'));
data.questoes = data.questoes.concat(novasQuestoes);
fs.writeFileSync(QUESTOES_PATH, JSON.stringify(data, null, 2), 'utf-8');
console.log(`Sucesso: 8 questões da aula bmf1_a19 adicionadas.`);
