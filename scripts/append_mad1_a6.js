import fs from 'fs';
import path from 'path';

const QUESTOES_PATH = 'data/questoes.json';

const novasQuestoes = [
  {
    "id": 3881,
    "materia": "mad1",
    "aula_id": "mad1_a6",
    "tema": "mad1_a6",
    "modulo": 2,
    "dificuldade": 1,
    "correta": 1,
    "enunciado": "A 'Neisseria meningitidis' é uma causa grave de meningite. Qual sua morfologia característica no Gram e qual estrutura é seu principal fator de virulência?),",
    "opcoes": [
      "A) Bacilo Gram-positivo; Flagelo.",
      "B) Diplococo Gram-negativo em 'grão de café'; Cápsula polissacarídica.",
      "C) Coco Gram-positivo; Esporo.",
      "D) Espiroqueta; Parede de cera."
    ],
    "explicacao_geral": "A cápsula permite à bactéria sobreviver na corrente sanguínea (disseminação hematogênica).",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Descrição de Listeria ou Bacillus.",
      "B": "[CORRETA] A **Meningococcia** é causada por **Diplococos Gram-negativos capsulados**.",
      "C": "[INCORRETA] Descrição de Staphylococcus ou Streptococcus.",
      "D": "[INCORRETA] Descrição de Treponema ou Mycobacterium."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3882,
    "materia": "mad1",
    "aula_id": "mad1_a6",
    "tema": "mad1_a6",
    "modulo": 2,
    "dificuldade": 1,
    "correta": 3,
    "enunciado": "O 'Clostridium tetani' causa o tétano através de uma potente neurotoxina. Qual o sintoma clínico clássico resultante da paralisia espástica dos músculos da face?),",
    "opcoes": [
      "A) Paralisia flácida total.",
      "B) Manchas vermelhas na pele.",
      "C) Perda de audição.",
      "D) Riso sardônico (contratura dos músculos faciais) e Trismo (dificuldade de abrir a boca)."
    ],
    "explicacao_geral": "A tetanospasmina bloqueia a liberação de neurotransmissores inibitórios (GABA e Glicina).",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Sintoma do botulismo.",
      "B": "[INCORRETA] Inespecífico ou comum em meningococcemia.",
      "C": "[INCORRETA] Sem relação direta com a toxina tetânica.",
      "D": "[CORRETA] O **Riso Sardônico** é um sinal patognomônico do **Tétano**."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3883,
    "materia": "mad1",
    "aula_id": "mad1_a6",
    "tema": "mad1_a6",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 0,
    "enunciado": "O botulismo (Clostridium botulinum) é uma intoxicação alimentar grave. Como a toxina botulínica age no organismo?),",
    "opcoes": [
      "A) Bloqueia a liberação de Acetilcolina na junção neuromuscular, causando paralisia flácida descendente.",
      "B) Destrói as hemácias causando anemia.",
      "C) Acelera os batimentos cardíacos até a parada.",
      "D) Endurece as articulações."
    ],
    "explicacao_geral": "Diferente do tétano, o botulismo causa relaxamento muscular extremo (perigo de parada respiratória).",
    "explicacoes_opcoes": {
      "A": "[CORRETA] A **Toxina Botulínica** impede a **transmissão nervosa** para os músculos.",
      "B": "[INCORRETA] Sem efeito hemolítico primário sistêmico.",
      "C": "[INCORRETA] Não é o mecanismo principal.",
      "D": "[INCORRETA] Causa o oposto: flacidez."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3884,
    "materia": "mad1",
    "aula_id": "mad1_a6",
    "tema": "mad1_a6",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 2,
    "enunciado": "Um paciente jovem apresenta corrimento uretral purulento e dor ao urinar após relação sexual desprotegida. A bacterioscopia revela diplococos Gram-negativos INTRACELULARES em neutrófilos. Qual o agente?),",
    "opcoes": [
      "A) Chlamydia trachomatis.",
      "B) Treponema pallidum.",
      "C) Neisseria gonorrhoeae.",
      "D) Escherichia coli."
    ],
    "explicacao_geral": "O gonococo possui pílulas e proteínas Opa que facilitam a fixação nas mucosas.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Bactéria atípica, não visível ao Gram comum.",
      "B": "[INCORRETA] Espiroqueta, visível apenas em campo escuro.",
      "C": "[CORRETA] A **Gonorreia** é identificada pelo achado de **Diplococos Gram-negativos intracitoplasmáticos**.",
      "D": "[INCORRETA] Bacilo Gram-negativo, causa ITU comum mas não uretrite purulenta venérea clássica neste padrão microscópico."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 3885,
    "materia": "mad1",
    "aula_id": "mad1_a6",
    "tema": "mad1_a6",
    "modulo": 2,
    "dificuldade": 3,
    "correta": 1,
    "enunciado": "A 'Listeria monocytogenes' é um bacilo Gram-positivo importante na clínica obstétrica. Qual sua característica peculiar de movimentação e por que preocupa gestantes?),",
    "opcoes": [
      "A) Voa pelo ar; causa gripe.",
      "B) Apresenta movimento de 'cambalhota' (tumbling motility); pode atravessar a placenta e causar aborto, partos prematuros ou meningite neonatal.",
      "C) Não se mexe; causa infecção urinária.",
      "D) Nada em círculos; causa surdez."
    ],
    "explicacao_geral": "Transmission ocorre principalmente por alimentos contaminados (queijos não pasteurizados, embutidos).",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Transmissão alimentar.",
      "B": "[CORRETA] A **Listeria** é um patógeno **Transplacentário** perigoso.",
      "C": "[INCORRETA] É móvel a 25°C.",
      "D": "[INCORRETA] Descrição fantasiosa."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 3886,
    "materia": "mad1",
    "aula_id": "mad1_a6",
    "tema": "mad1_a6",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 3,
    "enunciado": "Qual bactéria formadora de esporos é associada a intoxicações alimentares após consumo de arroz requentado (toxina termoestável)?),",
    "opcoes": [
      "A) Clostridium tetani.",
      "B) Staphylococcus aureus.",
      "C) Salmonella typhi.",
      "D) Bacillus cereus."
    ],
    "explicacao_geral": "Os esporos sobrevivem ao cozimento e germinam se o arroz for mantido em temperatura ambiente.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Transmissão por ferimentos.",
      "B": "[INCORRETA] Causa vômitos por enterotoxinas em maioneses/cremes, mas não é formadora de esporos.",
      "C": "[INCORRETA] Associada a ovos/aves/água, não esporulada.",
      "D": "[CORRETA] O **Bacillus cereus** é o agente clássico do **arroz contaminado**."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 3887,
    "materia": "mad1",
    "aula_id": "mad1_a6",
    "tema": "mad1_a6",
    "modulo": 2,
    "dificuldade": 3,
    "correta": 0,
    "enunciado": "Na meningite meningocócica, a presença de petéquias e púrpura indica:",
    "opcoes": [
      "A) Disseminação sistêmica com vasculite e risco de choque séptico (Meningococcemia).",
      "B) Melhora do quadro clínico.",
      "C) Que o paciente é alérgico ao lençol.",
      "D) Apenas uma irritação passageira."
    ],
    "explicacao_geral": "A liberação de LOS (lipooligossacarídeo, semelhante ao LPS) causa coagulação intravascular disseminada (CIVD).",
    "explicacoes_opcoes": {
      "A": "[CORRETA] As **Manchas Hemorrágicas** sugerem gravidade e **Choque Séptico**.",
      "B": "[INCORRETA] Sinal de piora crítica.",
      "C": "[INCORRETA] Absurdo.",
      "D": "[INCORRETA] É uma emergência médica."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 3888,
    "materia": "mad1",
    "aula_id": "mad1_a6",
    "tema": "mad1_a6",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 2,
    "enunciado": "Por que a vacinação é tão eficaz contra o meningococo, mas não temos vacina eficiente contra o gonococo?),",
    "opcoes": [
      "A) O gonococo é invisível.",
      "B) O meningococo só ataca crianças.",
      "C) Devido à alta variação antigênica das pilinas e proteínas de superfície do gonococo, além da ausência de uma cápsula polissacarídica estável como alvo.",
      "D) Porque a meningite é mais famosa."
    ],
    "explicacao_geral": "A variação antigênica permite ao gonococo escapar da memória imunológica continuamente.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Visível ao microscópio.",
      "B": "[INCORRETA] Ataca qualquer idade.",
      "C": "[CORRETA] A **Variação Antigênica** impede a criação de vacinas para o **Gonococo**.",
      "D": "[INCORRETA] Irrelevante científico."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  }
];

const data = JSON.parse(fs.readFileSync(QUESTOES_PATH, 'utf-8'));
data.questoes = data.questoes.concat(novasQuestoes);
fs.writeFileSync(QUESTOES_PATH, JSON.stringify(data, null, 2), 'utf-8');
console.log(`Sucesso: 8 questões da aula mad1_a6 adicionadas.`);
