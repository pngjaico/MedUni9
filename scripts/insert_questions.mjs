import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ANTIGAS_PATH = path.join(__dirname, '..', 'data', 'questoes_antigas.json');

const novasQuestoes = [
  {
    "id": 47,
    "materia": "bmf1",
    "categoria": "antiga",
    "enunciado": "Diferentemente do metabolismo anaeróbio, o metabolismo aeróbio é capaz de aproveitar a energia das oxidações dos substratos, garantindo uma maior capacidade de síntese de ATP por molécula de Glicose oxidada. De que maneira isso é realizado?",
    "opcoes": [
      "A) A energia da oxidação das coenzimas (NADH e FADH2) é convertida em um gradiente de íons H+, o qual será utilizado pela ATP-Sintase para a fosforilação de ADP em ATP.",
      "B) A energia da oxidação das coenzimas (NADH e FADH2) é convertida em um gradiente de íons H+, o qual será utilizado pela bomba de Na+/K+ para a fosforilação de ADP em ATP.",
      "C) A energia da oxidação das coenzimas (NADH, NADPH e FADH2) é convertida em um gradiente de íons H+, o qual será utilizado pela ATP-Sintase para a fosforilação de ADP em ATP.",
      "D) As mitocôndrias possuem enzimas capazes de converter glicose 6-fosfato em Ribose 5-Fosfato, garantindo assim uma maior produção de ATP."
    ],
    "correta": 0,
    "explicacao": "Na fosforilação oxidativa, a energia liberada pelo transporte de elétrons (do NADH e FADH2) é usada para bombear prótons (H+) criando um gradiente eletroquímico, que aciona a ATP sintase.",
    "tema": "Metabolismo Aeróbico",
    "dificuldade": 2,
    "fonte": "Atividade - Metabolismo Aeróbico",
    "ano": 2024,
    "semestre": "1/2024",
    "modulo": 1
  },
  {
    "id": 48,
    "materia": "bmf1",
    "categoria": "antiga",
    "enunciado": "Por que a presença de O2 diminui a taxa de consumo de glicose (Efeito Pasteur)?",
    "opcoes": [
      "A) Em aerobiose, haverá uma MENOR [ATP]/[ADP], resultando em uma regulação alostérica POSITIVA sobre a enzima PFK-1.",
      "B) Em aerobiose, haverá uma MAIOR [ATP]/[ADP], resultando em uma regulação alostérica POSITIVA sobre a enzima PFK-1.",
      "C) Em aerobiose, haverá uma MAIOR [ATP]/[ADP], resultando em uma regulação alostérica NEGATIVA sobre a enzima PFK-1.",
      "D) Em aerobiose, haverá uma MENOR [ATP]/[ADP], resultando em uma regulação alostérica NEGATIVA sobre a enzima PFK-1."
    ],
    "correta": 2,
    "explicacao": "O O2 permite a fosforilação oxidativa, gerando muito ATP. A alta relação ATP/ADP atua como inibidor alostérico da PFK-1 (Fosfofrutoquinase-1), reduzindo a velocidade da glicólise.",
    "tema": "Controle da Glicólise",
    "dificuldade": 3,
    "fonte": "Atividade - Metabolismo Aeróbico",
    "ano": 2024,
    "semestre": "1/2024",
    "modulo": 1
  },
  {
    "id": 49,
    "materia": "bmf1",
    "categoria": "antiga",
    "enunciado": "Quando a [NADH] > [NAD+], é correto afirmar que a velocidade do ciclo do ácido cítrico estará:",
    "opcoes": [
      "A) INALTERADA.",
      "B) REDUZIDA.",
      "C) AUMENTADA.",
      "D) INVERTIDA."
    ],
    "correta": 1,
    "explicacao": "O NADH é um inibidor forte das enzimas regulatórias do ciclo de Krebs (ex: isocitrato desidrogenase e alfa-cetoglutarato desidrogenase). Excesso de NADH reduz a velocidade do ciclo.",
    "tema": "Regulação do Ciclo de Krebs",
    "dificuldade": 2,
    "fonte": "Atividade - Metabolismo Aeróbico",
    "ano": 2024,
    "semestre": "1/2024",
    "modulo": 1
  },
  {
    "id": 50,
    "materia": "bmf1",
    "categoria": "antiga",
    "enunciado": "Qual o destino dos carbonos da glicose no ciclo de Krebs?",
    "opcoes": [
      "A) Acetil-CoA",
      "B) ATP",
      "C) CO2",
      "D) Piruvato"
    ],
    "correta": 2,
    "explicacao": "Os carbonos derivados da glicose que entram no ciclo de Krebs como Acetil-CoA são oxidados completamente e perdem-se na forma de dióxido de carbono (CO2) durante as reações de descarboxilação.",
    "tema": "Ciclo de Krebs",
    "dificuldade": 1,
    "fonte": "Atividade - Metabolismo Aeróbico",
    "ano": 2024,
    "semestre": "1/2024",
    "modulo": 1
  },
  {
    "id": 51,
    "materia": "bmf1",
    "categoria": "antiga",
    "enunciado": "A oxidação completa de glicose (até a formação de CO2) ocorre em todos os tecidos?",
    "opcoes": [
      "A) Sim",
      "B) Não"
    ],
    "correta": 1,
    "explicacao": "Não. Hemácias (glóbulos vermelhos), por exemplo, não possuem mitocôndrias e dependem exclusivamente da glicólise anaeróbica para obtenção de energia, produzindo lactato em vez de CO2.",
    "tema": "Metabolismo Celular",
    "dificuldade": 1,
    "fonte": "Atividade - Metabolismo Aeróbico",
    "ano": 2024,
    "semestre": "1/2024",
    "modulo": 1
  },
  {
    "id": 52,
    "materia": "bmf1",
    "categoria": "antiga",
    "enunciado": "A falta de Tiamina leva a interrupção da atividade das enzimas Piruvato Desidrogenase e Alfacetoglutarato Desidrogenase, ambas essenciais para a continuação da oxidação do piruvato. Sendo assim, a falta de Tiamina pode levar à:",
    "opcoes": [
      "A) Hiperglicemia por superativação da neoglicogênese",
      "B) Hipoglicemia por interrupção da neoglicogênese",
      "C) Dislipidemia por excesso de acetil-CoA",
      "D) Acidose láctica por acúmulo de piruvato (que é então convertido em lactato)."
    ],
    "correta": 3,
    "explicacao": "A tiamina é coenzima fundamental. Sem ela, o piruvato não vira acetil-CoA e se acumula no citosol, sendo o excesso desviado para a produção de ácido láctico (causando acidose).",
    "tema": "Coenzimas e Vitaminas",
    "dificuldade": 2,
    "fonte": "Atividade - Metabolismo Aeróbico",
    "ano": 2024,
    "semestre": "1/2024",
    "modulo": 1
  },
  {
    "id": 53,
    "materia": "bmf1",
    "categoria": "antiga",
    "enunciado": "Para regular a velocidade do ciclo de Krebs, parte do piruvato pode ser transformada em oxaloacetato, ao invés de ser totalmente convertida em acetil-CoA. Essas reações de preenchimento, repondo intermediários do ciclo, recebem o nome de:",
    "opcoes": [
      "A) Reações michaelianas",
      "B) Reações anapleróticas",
      "C) Reações alostéricas",
      "D) Reações enzimáticas"
    ],
    "correta": 1,
    "explicacao": "Reações anapleróticas são as reações de preenchimento que mantêm ou repõem níveis dos intermediários do ciclo de Krebs, sendo a conversão de piruvato a oxaloacetato (pela piruvato carboxilase) a mais importante.",
    "tema": "Reações Anapleróticas",
    "dificuldade": 1,
    "fonte": "Atividade - Metabolismo Aeróbico",
    "ano": 2024,
    "semestre": "1/2024",
    "modulo": 1
  },
  {
    "id": 54,
    "materia": "bmf1",
    "categoria": "antiga",
    "enunciado": "A formação principal de Acetil-CoA a partir de carboidratos ocorre:",
    "opcoes": [
      "A) Nas hemácias a partir do piruvato que é o produto final da via glicolítica",
      "B) No núcleo das células e tem como molécula original o lactato",
      "C) Na mitocôndria a partir da descarboxilação da molécula de piruvato (oriunda da glicose)",
      "D) No citossol a partir de lactato oriundo da glicólise"
    ],
    "correta": 2,
    "explicacao": "A piruvato desidrogenase atua na matriz mitocondrial realizando a descarboxilação oxidativa do piruvato, gerando acetil-CoA.",
    "tema": "Complexo Piruvato Desidrogenase",
    "dificuldade": 1,
    "fonte": "Atividade - Metabolismo Aeróbico",
    "ano": 2024,
    "semestre": "1/2024",
    "modulo": 1
  },
  {
    "id": 55,
    "materia": "bmf1",
    "categoria": "antiga",
    "enunciado": "Qual é o saldo energético da oxidação completa da glicose (glicólise, complexo PDH e ciclo de Krebs + fosforilação oxidativa)?",
    "opcoes": [
      "A) Exatamente 4 ATP's por glicose",
      "B) Exatamente 2 ATP's por glicose",
      "C) Aproximadamente 64 ATP's por glicose",
      "D) Aproximadamente 32 ATP's por glicose"
    ],
    "correta": 3,
    "explicacao": "A oxidação aeróbica completa rende aproximadamente 30 a 32 ATPs por molécula de glicose (dependendo da lançadeira utilizada para transportar os NADH citosólicos para a mitocôndria).",
    "tema": "Rendimento Energético",
    "dificuldade": 1,
    "fonte": "Atividade - Metabolismo Aeróbico",
    "ano": 2024,
    "semestre": "1/2024",
    "modulo": 1
  },
  {
    "id": 56,
    "materia": "bmf1",
    "categoria": "antiga",
    "enunciado": "Por que o acúmulo e excesso de lactato somente será observado em condições de anaerobiose?",
    "opcoes": [
      "A) Lactato é produzido a partir da redução de piruvato, permitindo que NADH seja oxidado a NAD+, reabastecendo a via.",
      "B) Lactato é produzido a partir da oxidação de piruvato, gerando NADH contínuo.",
      "C) Em anaerobiose há morte celular por necrose que resulta no vazamento de lactato.",
      "D) Em anaerobiose há apoptose programada obrigatória por excesso de NADH."
    ],
    "correta": 0,
    "explicacao": "Sem oxigênio, a cadeia respiratória para e o NADH acumula. A enzima lactato desidrogenase converte piruvato em lactato justamente para converter NADH de volta em NAD+, vital para manter a glicólise ocorrendo.",
    "tema": "Metabolismo Anaeróbio",
    "dificuldade": 2,
    "fonte": "Atividade - Metabolismo Aeróbico",
    "ano": 2024,
    "semestre": "1/2024",
    "modulo": 1
  },
  {
    "id": 57,
    "materia": "bmf1",
    "categoria": "antiga",
    "enunciado": "Uma manifestação comum da deficiência da enzima piruvato desidrogenase é:",
    "opcoes": [
      "A) Síntese elevada de lipídios",
      "B) Inibição da liberação de insulina",
      "C) Acúmulo de intermediários do Krebs",
      "D) Acidose metabólica"
    ],
    "correta": 3,
    "explicacao": "Como abordado antes, a incapacidade de usar piruvato no ciclo força a sua conversão em ácido lático, originando acidose metabólica grave.",
    "tema": "Correlação Clínica - Acidose",
    "dificuldade": 2,
    "fonte": "Atividade - Metabolismo Aeróbico",
    "ano": 2024,
    "semestre": "1/2024",
    "modulo": 1
  },
  {
    "id": 58,
    "materia": "bmf1",
    "categoria": "antiga",
    "enunciado": "O que é a força próton motriz (gradiente eletroquímico) na mitocôndria?",
    "opcoes": [
      "A) É a força que promove a síntese de ATP pela enzima ATP sintase (complexo V)",
      "B) É a força que promove o bombeamento de prótons pelo ciclo de Krebs",
      "C) É a enzima principal do ciclo de Krebs",
      "D) É a carga elétrica inativa da mitocôndria"
    ],
    "correta": 0,
    "explicacao": "O fluxo de elétrons na cadeia respiratória bombeia prótons (H+) em direção ao espaço intermembrana, gerando a força próton-motriz, que retorna os prótons matricialmente, girando a ATP sintase para formar ATP.",
    "tema": "Fosforilação Oxidativa",
    "dificuldade": 1,
    "fonte": "Atividade - Metabolismo Aeróbico",
    "ano": 2024,
    "semestre": "1/2024",
    "modulo": 1
  },
  {
    "id": 59,
    "materia": "bmf1",
    "categoria": "antiga",
    "enunciado": "Qual é a função da Coenzima Q (ubiquinona) na cadeia de transporte de elétrons?",
    "opcoes": [
      "A) Transportar os elétrons dos complexos 1 e 2 para o complexo 3",
      "B) Catalisar a síntese direta de ATP antes do oxigênio",
      "C) Combater a formação exclusiva de radicais peróxidos",
      "D) Transportar os elétrons do complexo 3 livremente para o complexo 4"
    ],
    "correta": 0,
    "explicacao": "A ubiquinona (Q) é um carreador lipofílico móvel que recolhe elétrons do Complexo I e do Complexo II, transferindo-os para o Complexo III.",
    "tema": "Cadeia Respiratória",
    "dificuldade": 1,
    "fonte": "Atividade - Metabolismo Aeróbico",
    "ano": 2024,
    "semestre": "1/2024",
    "modulo": 1
  },
  {
    "id": 60,
    "materia": "bmf1",
    "categoria": "antiga",
    "enunciado": "O ciclo de Krebs oxida o acetil-CoA proveniente da degradação de quais macronutrientes?",
    "opcoes": [
      "A) Apenas Lipídios",
      "B) Apenas Carboidratos",
      "C) Apenas Proteínas",
      "D) Lipídios, Carboidratos e Proteínas"
    ],
    "correta": 3,
    "explicacao": "O Acetil-CoA é um molécula 'moeda comum', sendo o funil do catabolismo de ácidos graxos, glicose e também de diversos aminoácidos.",
    "tema": "Ciclo de Krebs",
    "dificuldade": 1,
    "fonte": "Atividade - Metabolismo Aeróbico",
    "ano": 2024,
    "semestre": "1/2024",
    "modulo": 1
  }
];

if (fs.existsSync(ANTIGAS_PATH)) {
    const data = JSON.parse(fs.readFileSync(ANTIGAS_PATH, 'utf-8'));
    data.questoes = data.questoes.concat(novasQuestoes);
    fs.writeFileSync(ANTIGAS_PATH, JSON.stringify(data, null, 2), 'utf-8');
    console.log(`Adicionadas ${novasQuestoes.length} questões na base.`);
} else {
    fs.writeFileSync(ANTIGAS_PATH, JSON.stringify({ questoes: novasQuestoes }, null, 2), 'utf-8');
    console.log(`Criada base nova com ${novasQuestoes.length} questões.`);
}
