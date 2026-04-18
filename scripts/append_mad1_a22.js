import fs from 'fs';
import path from 'path';

const QUESTOES_PATH = 'data/questoes.json';

const novasQuestoes = [
  {
    "id": 4009,
    "materia": "mad1",
    "aula_id": "mad1_a22",
    "tema": "mad1_a22",
    "modulo": 2,
    "dificuldade": 1,
    "correta": 1,
    "enunciado": "A 'Anafilaxia' é uma reação alérgica grave e sistêmica. Ela é classificada como qual tipo de hipersensibilidade?),",
    "opcoes": [
      "A) Tipo II (Citotóxica).",
      "B) Tipo I (Imediata ou IgE-dependente).",
      "C) Tipo III (Imunocomplexos).",
      "D) Tipo IV (Tardia)."
    ],
    "explicacao_geral": "Ocorre em minutos após a exposição ao antígeno em indivíduos previamente sensibilizados.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Envolve anticorpos contra células ou tecidos fixos.",
      "B": "[CORRETA] A **Hipersensibilidade Tipo I** é a base da **Anafilaxia**.",
      "C": "[INCORRETA] Envolve depósito de complexos solúveis nos vasos.",
      "D": "[INCORRETA] Envolve células T e demora 48-72h para se manifestar."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 4010,
    "materia": "mad1",
    "aula_id": "mad1_a22",
    "tema": "mad1_a22",
    "modulo": 2,
    "dificuldade": 1,
    "correta": 3,
    "enunciado": "Qual o principal mediador químico pré-formado liberado pelos mastócitos durante uma reação do tipo I?),",
    "opcoes": [
      "A) Insulina.",
      "B) Hemoglobina.",
      "C) Ácido gástrico.",
      "D) Histamina."
    ],
    "explicacao_geral": "A histamina causa vasodilatação, aumento da permeabilidade vascular e contração do músculo liso bronquial.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Produzida no pâncreas.",
      "B": "[INCORRETA] Presente em hemácias.",
      "C": "[INCORRETA] Produzido no estômago.",
      "D": "[CORRETA] A **Histamina** é o mediador chave da **Fase Imediata da Alergia**."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 4011,
    "materia": "mad1",
    "aula_id": "mad1_a22",
    "tema": "mad1_a22",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 0,
    "enunciado": "A 'Hipersensibilidade do Tipo III' caracteriza-se pelo depósito de imunocomplexos (antígeno + anticorpo) nos tecidos. Qual complicação renal clássica exemplifica este processo após uma infecção de garganta?),",
    "opcoes": [
      "A) Glomerulonefrite Pós-Estreptocócica (GNPE).",
      "B) Cálculo renal de cálcio.",
      "C) Infecção urinária por E. coli.",
      "D) Câncer renal."
    ],
    "explicacao_geral": "Os imunocomplexos ficam presos na membrana basal glomerular, ativando o complemento e causando dano tecidual.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] A **GNPE** é uma doença por **Hipersensibilidade Tipo III**.",
      "B": "[INCORRETA] Problema metabólico/precipitação.",
      "C": "[INCORRETA] Infecção bacteriana aguda direta.",
      "D": "[INCORRETA] Neoplasia."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 4012,
    "materia": "mad1",
    "aula_id": "mad1_a22",
    "tema": "mad1_a22",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 2,
    "enunciado": "O teste de PPD (Tuberculina) para verificar exposição ao bacilo da tuberculose baseia-se em qual tipo de hipersensibilidade?),",
    "opcoes": [
      "A) Tipo I.",
      "B) Tipo II.",
      "C) Tipo IV (Tardia ou Celular).",
      "D) Tipo III."
    ],
    "explicacao_geral": "A leitura é feita 48-72 horas depois, tempo necessário para a migração de linfócitos T e macrófagos para o local.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Seria uma reação imediata (minutos).",
      "B": "[INCORRETA] Envolve anticorpos contra superfície celular.",
      "C": "[CORRETA] O **PPD** é o exemplo clássico da **Resposta Tardia (Tipo IV)**.",
      "D": "[INCORRETA] Envolve anticorpos e complemento circulantes."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 4013,
    "materia": "mad1",
    "aula_id": "mad1_a22",
    "tema": "mad1_a22",
    "modulo": 2,
    "dificuldade": 3,
    "correta": 1,
    "enunciado": "Qual o mecanismo da 'Hipersensibilidade do Tipo II' na Miastenia Gravis?),",
    "opcoes": [
      "A) Linfócitos T destroem os músculos.",
      "B) Anticorpos IgG ligam-se aos receptores de acetilcolina na junção neuromuscular, bloqueando-os ou induzindo sua degradação.",
      "C) Imunocomplexos entopem as artérias dos músculos.",
      "D) Mastócitos explodem dentro dos nervos."
    ],
    "explicacao_geral": "Neste caso, o anticorpo atua como um bloqueador funcional do receptor.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Isso ocorreria em miosites de perfil autoimune celular.",
      "B": "[CORRETA] A **Miastenia Gravis** é uma doença de **Anticorpo Antirreceptor (Tipo II)**.",
      "C": "[INCORRETA] Característica do Tipo III.",
      "D": "[INCORRETA] Absurdo."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 4014,
    "materia": "mad1",
    "aula_id": "mad1_a22",
    "tema": "mad1_a22",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 3,
    "enunciado": "Um paciente apresenta dermatite (vermelhidão e coceira) em punho 48h após usar um relógio de metal (níquel). Qual a fisiopatologia?),",
    "opcoes": [
      "A) Choque anafilático localizado.",
      "B) Depósito de imunocomplexos na pele.",
      "C) Anticorpos IgG contra os folículos pilosos.",
      "D) Hipersensibilidade Tipo IV mediada por células T sensibilizadas contra o hapteno (níquel) complexado a proteínas da pele."
    ],
    "explicacao_geral": "A dermatite de contato é o exemplo mais comum de hipersensibilidade tardia no dia a dia.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] A anafilaxia é imediata e sistêmica.",
      "B": "[INCORRETA] Isso seria uma vasculite leucocitoclástica (Tipo III).",
      "C": "[INCORRETA] Isso poderia causar alopecia, mas não esse quadro de contato rápido.",
      "D": "[CORRETA] A **Dermatite de Contato** é uma resposta de **Células T (Tipo IV)**."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 4015,
    "materia": "mad1",
    "aula_id": "mad1_a22",
    "tema": "mad1_a22",
    "modulo": 2,
    "dificuldade": 3,
    "correta": 0,
    "enunciado": "Qual a principal diferença entre a Hipersensibilidade Tipo II e a Tipo III?),",
    "opcoes": [
      "A) No Tipo II o antígeno é fixo na célula/tecido; no Tipo III o antígeno é solúvel e forma complexos que se depositam aleatoriamente nos vasos.",
      "B) O Tipo II envolve IgE e o Tipo III envolve IgG.",
      "C) O Tipo II é rápido e o Tipo III é demorado (dias).",
      "D) Não há diferença, são nomes para a mesma coisa."
    ],
    "explicacao_geral": "Essa distinção define o padrão de lesão: focado em um órgão (II) ou sistêmico/vascular (III).",
    "explicacoes_opcoes": {
      "A": "[CORRETA] A **Localização do Antígeno** diferencia o **Tipo II do Tipo III**.",
      "B": "[INCORRETA] Ambos envolvem predominantemente IgG e IgM.",
      "C": "[INCORRETA] Ambos são relativamente rápidos (horas), embora a formação e depósito do III possa levar dias para manifestar doença clínica plena.",
      "D": "[INCORRETA] São mecanisticamente distintos."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 4016,
    "materia": "mad1",
    "aula_id": "mad1_a22",
    "tema": "mad1_a22",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 2,
    "enunciado": "A 'Doença de Graves' (Hipertiroidismo) é causada por anticorpos que se ligam ao receptor de TSH. Como eles atuam?),",
    "opcoes": [
      "A) Bloqueiam o receptor, impedindo a tireoide de funcionar.",
      "B) Destroem totalmente a glândula tireoide via complemento.",
      "C) Estimulam o receptor mimetizando a ação do TSH, levando à superprodução de hormônios tireoidianos.",
      "D) Transformam a tireoide em tecido gorduroso."
    ],
    "explicacao_geral": "É uma variante do Tipo II, chamada de hipersensibilidade estimulatória.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Isso ocorre no Hipotireoidismo de Hashimoto (bloqueio/destruição).",
      "B": "[INCORRETA] Ocorre em Hashimoto.",
      "C": "[CORRETA] Na **Doença de Graves**, o anticorpo tem **efeito agonista (estimulador)**.",
      "D": "[INCORRETA] Absurdo."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  }
];

const data = JSON.parse(fs.readFileSync(QUESTOES_PATH, 'utf-8'));
data.questoes = data.questoes.concat(novasQuestoes);
fs.writeFileSync(QUESTOES_PATH, JSON.stringify(data, null, 2), 'utf-8');
console.log(`Sucesso: 8 questões da aula mad1_a22 adicionadas.`);
