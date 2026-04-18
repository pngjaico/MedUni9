import fs from 'fs';
import path from 'path';

const QUESTOES_PATH = 'data/questoes.json';

const novasQuestoes = [
  {
    "id": 3073,
    "materia": "bmf1",
    "aula_id": "bmf1_a10",
    "tema": "bmf1_a10",
    "modulo": 1,
    "dificuldade": 1,
    "correta": 1,
    "enunciado": "Um músculo esquelético é envolto por sucessivas camadas de tecido conjuntivo. Qual é o nome da membrana que envolve cada fibra muscular (ou miócito) individualmente?",
    "opcoes": [
      "A) Perimísio.",
      "B) Endomísio.",
      "C) Epimísio.",
      "D) Fáscia muscular."
    ],
    "explicacao_geral": "A organização do músculo é hierárquica por níveis de envoltório conjuntivo.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] O perimísio envolve um conjunto de fibras chamado fascículo.",
      "B": "[CORRETA] O **endomísio** é a camada mais interna que envolve cada fibra individual.",
      "C": "[INCORRETA] O epimísio envolve o músculo inteiro (o ventre muscular).",
      "D": "[INCORRETA] A fáscia envolve grupos musculares ou o músculo externamente ao epimísio."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3074,
    "materia": "bmf1",
    "aula_id": "bmf1_a10",
    "tema": "bmf1_a10",
    "modulo": 1,
    "dificuldade": 2,
    "correta": 3,
    "enunciado": "A arquitetura das fibras musculares dita a vantagem mecânica do músculo. Qual formato muscular, caracterizado por fibras que se inserem obliquamente no tendão (como as barbas de uma pena), gera maior força bruta?",
    "opcoes": [
      "A) Fusiforme.",
      "B) Paralelo.",
      "C) Circular.",
      "D) Pennado (ou Penatiforme)."
    ],
    "explicacao_geral": "Músculos pennados possuem mais fibras por área transversal, priorizando o torque em detrimento da amplitude.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Músculos fusiformes (ex: bíceps) priorizam velocidade e amplitude.",
      "B": "[INCORRETA] Músculos paralelos têm fibras longas para grande encurtamento.",
      "C": "[INCORRETA] Músculos circulares (ex: orbicular) funcionam como esfíncteres.",
      "D": "[CORRETA] Músculos **pennados** são os 'geradores de força' por excelência do corpo (ex: reto femoral)."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3075,
    "materia": "bmf1",
    "aula_id": "bmf1_a10",
    "tema": "bmf1_a10",
    "modulo": 1,
    "dificuldade": 2,
    "correta": 0,
    "enunciado": "Um indivíduo realiza flexão de cotovelo para levantar um haltere. Nesse movimento, o músculo Braquial é o principal motor, enquanto o Tríceps Braquial precisa relaxar. Como o Tríceps é classificado nessa ação específica?",
    "opcoes": [
      "A) Antagonista.",
      "B) Agonista.",
      "C) Sinergista.",
      "D) Fixador."
    ],
    "explicacao_geral": "Músculos atuam em harmonia diagnóstica de oposição e cooperação.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] O **antagonista** realiza a ação oposta à desejada, devendo ser inibido para o movimento ocorrer suavemente.",
      "B": "[INCORRETA] O agonista (ou motor principal) é quem gera a flexão no caso.",
      "C": "[INCORRETA] Sinergistas ajudam o agonista a realizar o movimento.",
      "D": "[INCORRETA] Fixadores estabilizam a base do movimento (ex: ombro)."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 3076,
    "materia": "bmf1",
    "aula_id": "bmf1_a10",
    "tema": "bmf1_a10",
    "modulo": 1,
    "dificuldade": 3,
    "correta": 2,
    "enunciado": "Sobre a fisiologia das fibras musculares, qual tipo de fibra é rica em mioglobina e mitocôndrias, sendo ideal para atividades de resistência como a manutenção da postura ereta?",
    "opcoes": [
      "A) Fibras Tipo IIb (Brancas).",
      "B) Fibras Glicolíticas rápidas.",
      "C) Fibras Tipo I (Vermelhas).",
      "D) Unidades motoras de grande porte."
    ],
    "explicacao_geral": "Fibras de contração lenta (Tipo I) são oxidativas e resistentes à fadiga.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Fibras brancas são de explosão e cansam rápido.",
      "B": "[INCORRETA] Fibras glicolíticas são as de contração rápida (Tipo II).",
      "C": "[CORRETA] As fibras **Tipo I** (lentas/oxidativas/vermelhas) sustentam esforços prolongados por longo tempo.",
      "D": "[INCORRETA] Unidades motoras grandes são recrutadas para força máxima, não resistência."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3077,
    "materia": "bmf1",
    "aula_id": "bmf1_a10",
    "tema": "bmf1_a10",
    "modulo": 1,
    "dificuldade": 2,
    "correta": 1,
    "enunciado": "A 'Unidade Motora' é o pilar funcional da contração. Por definição, ela consiste em:",
    "opcoes": [
      "A) Um único miócito e uma única miofibrila.",
      "B) Um neurônio motor alfa e todas as fibras musculares inervadas por ele.",
      "C) Um músculo inteiro e seu respectivo nervo periférico.",
      "D) O sarcômero e as proteínas actina e miosina."
    ],
    "explicacao_geral": "Diferentes músculos possuem unidades motoras de tamanhos diferentes conforme a necessidade de precisão ou força.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Isso descreve partes da fibra, não a unidade funcional neuro-muscular.",
      "B": "[CORRETA] A **unidade motora** é o neurônio motor e o conjunto de fibras sob seu comando.",
      "C": "[INCORRETA] Um nervo periférico contém milhares de neurônios para diversos músculos.",
      "D": "[INCORRETA] O sarcômero é a unidade contrátil molecular, não motora."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3078,
    "materia": "bmf1",
    "aula_id": "bmf1_a10",
    "tema": "bmf1_a10",
    "modulo": 1,
    "dificuldade": 2,
    "correta": 3,
    "enunciado": "As fixações musculares são classificadas como 'Origem' e 'Inserção'. Em um movimento típico de um membro, qual dessas fixações é considerada aquela que permanece fixa (ponto estável)?",
    "opcoes": [
      "A) Inserção.",
      "B) Aponeurose.",
      "C) Ventre muscular.",
      "D) Origem."
    ],
    "explicacao_geral": "A terminologia facilita a descrição do movimento, embora em cadeias fechadas ambos os pontos possam se mover.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] A inserção é a fixação móvel que é tracionada em direção à origem.",
      "B": "[INCORRETA] Aponeurose é uma forma de tendão largo.",
      "C": "[INCORRETA] Ventre muscular é a parte contrátil carnosa do músculo.",
      "D": "[CORRETA] A **origem** é a base estável do músculo (geralmente mais proximal)."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3079,
    "materia": "bmf1",
    "aula_id": "bmf1_a10",
    "tema": "bmf1_a10",
    "modulo": 1,
    "dificuldade": 3,
    "correta": 0,
    "enunciado": "Um paciente sofre um acidente traumático na coxa com sangramento intenso e inchaço rápido sob a fáscia profunda. O médico teme por uma 'Síndrome Compartimental'. Por que os compartimentos musculares são perigosos nesse cenário?",
    "opcoes": [
      "A) Porque a fáscia é inelástica, gerando pressão que impede o fluxo sanguíneo muscular.",
      "B) Porque os músculos explodem se forem muito pressionados pela pele.",
      "C) Porque a origem dos músculos se desloca com o inchaço.",
      "D) Porque a unidade motora se desconecta espontaneamente sob pressão."
    ],
    "explicacao_geral": "Os músculos são organizados em grupos envoltos por fáscias resistentes que não expandem facilmente.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] A **fáscia inelástica** transforma o compartimento em uma 'panela de pressão', causando isquemia muscular.",
      "B": "[INCORRETA] O risco é isquemia e necrose por falta de fluxo, não explosão.",
      "C": "[INCORRETA] O osso e a origem permanecem estáveis; o problema é o aumento de pressão interna.",
      "D": "[INCORRETA] A inervação sofre secundariamente à isquemia, mas não há desconexão física."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 3080,
    "materia": "bmf1",
    "aula_id": "bmf1_a10",
    "tema": "bmf1_a10",
    "modulo": 1,
    "dificuldade": 1,
    "correta": 2,
    "enunciado": "Como se chama o tendão plano e largo que fixa músculos extensos, como o Grande Dorsal ou os músculos do abdome?",
    "opcoes": [
      "A) Ligamento.",
      "B) Bursa.",
      "C) Aponeurose.",
      "D) Ventre."
    ],
    "explicacao_geral": "Tendões podem ter formas cilíndricas ou lamelares (folhas).",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Ligamentos unem osso a osso.",
      "B": "[INCORRETA] Bursas são bolsas de líquido amortecedoras.",
      "C": "[CORRETA] A **aponeurose** é o tendão em forma de folha que ancora músculos largos.",
      "D": "[INCORRETA] Ventre é a parte vermelha e carnosa do músculo."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  }
];

const data = JSON.parse(fs.readFileSync(QUESTOES_PATH, 'utf-8'));
data.questoes = data.questoes.concat(novasQuestoes);
fs.writeFileSync(QUESTOES_PATH, JSON.stringify(data, null, 2), 'utf-8');
console.log(`Sucesso: 8 questões da aula bmf1_a10 adicionadas.`);
