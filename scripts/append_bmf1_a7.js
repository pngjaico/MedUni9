import fs from 'fs';
import path from 'path';

const QUESTOES_PATH = 'data/questoes.json';

const novasQuestoes = [
  {
    "id": 3049,
    "materia": "bmf1",
    "aula_id": "bmf1_a7",
    "tema": "bmf1_a7",
    "modulo": 1,
    "dificuldade": 1,
    "correta": 2,
    "enunciado": "As articulações podem ser classificadas de acordo com o grau de mobilidade. Como se chama a articulação que não permite nenhum movimento, como as suturas do crânio?",
    "opcoes": [
      "A) Diartrose.",
      "B) Anfiartrose.",
      "C) Sinartrose.",
      "D) Sinovial."
    ],
    "explicacao_geral": "A classificação funcional divide as juntas em móveis (diartroses), semimóveis (anfiartroses) e imovíveis (**sinartroses**).",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Diartroses são articulações móveis (ex: ombro).",
      "B": "[INCORRETA] Anfiartroses permitem pouco movimento (ex: sínfise púbica).",
      "C": "[CORRETA] A **sinartrose** é a junta imóvel, típica das uniões ósseas do crânio.",
      "D": "[INCORRETA] Sinovial é uma classificação estrutural, geralmente associada a diartroses."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3050,
    "materia": "bmf1",
    "aula_id": "bmf1_a7",
    "tema": "bmf1_a7",
    "modulo": 1,
    "dificuldade": 2,
    "correta": 1,
    "enunciado": "Qual estrutura é EXCLUSIVA das articulações sinoviais e é responsável por reduzir o atrito e nutrir a cartilagem articular?",
    "opcoes": [
      "A) Disco Epifisário.",
      "B) Líquido Sinovial.",
      "C) Periósteo.",
      "D) Ligamento Longitudinal."
    ],
    "explicacao_geral": "Articulações sinoviais possuem uma cavidade articular preenchida por fluido lubrificante.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Disco epifisário é placa de crescimento ósseo.",
      "B": "[CORRETA] O **líquido sinovial** (secretado pela membrana sinovial) é indispensável para a lubrificação e saúde da cartilagem.",
      "C": "[INCORRETA] Periósteo recobre o osso, não a articulação interna.",
      "D": "[INCORRETA] Ligamentos existem em diversos tipos de articulações e não têm função de nutrição da cartilagem."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3051,
    "materia": "bmf1",
    "aula_id": "bmf1_a7",
    "tema": "bmf1_a7",
    "modulo": 1,
    "dificuldade": 2,
    "correta": 0,
    "enunciado": "As sínfises, como a sínfise púbica e as articulações entre os corpos vertebrais, são classificadas estruturalmente como:",
    "opcoes": [
      "A) Articulações Cartilaginosas Secundárias.",
      "B) Suturas Fibrosas.",
      "C) Articulações Sinoviais Planas.",
      "D) Sindesmoses."
    ],
    "explicacao_geral": "As sínfises possuem um disco de fibrocartilagem endurecido entre os ossos.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] As sínfises são **articulações cartilaginosas secundárias**, caracterizadas pela presença de fibrocartilagem.",
      "B": "[INCORRETA] Suturas são fibrosas e exclusivas do crânio.",
      "C": "[INCORRETA] Sinoviais possuem cavidade e membrana, o que não ocorre nas sínfises.",
      "D": "[INCORRETA] Sindesmoses são fibrosas com maior tecido conectivo (ex: rádio e ulna)."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3052,
    "materia": "bmf1",
    "aula_id": "bmf1_a7",
    "tema": "bmf1_a7",
    "modulo": 1,
    "dificuldade": 3,
    "correta": 3,
    "enunciado": "A articulação do ombro (glenoumeral) permite movimentos em múltiplos eixos e planos. Em qual subtipo de sinovial ela se enquadra?",
    "opcoes": [
      "A) Trocoide ou em Pivô.",
      "B) Gínglimo ou Dobradiça.",
      "C) Em Sela.",
      "D) Esferoide (ou Triaxial)."
    ],
    "explicacao_geral": "Articulações triaxiais (ombro e quadril) possuem uma extremidade arredondada que se encaixa em uma cavidade côncava.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Pivô permite apenas rotação (ex: atlantoaxial).",
      "B": "[INCORRETA] Gínglimo permite apenas flexão/extensão (ex: cotovelo).",
      "C": "[INCORRETA] Em sela é biaxial (ex: base do polegar).",
      "D": "[CORRETA] A **esferoide** é multiaxial, permitindo flexão/extensão, abdução/adução e rotação."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3053,
    "materia": "bmf1",
    "aula_id": "bmf1_a7",
    "tema": "bmf1_a7",
    "modulo": 1,
    "dificuldade": 2,
    "correta": 2,
    "enunciado": "Um paciente de 70 anos queixa-se de dor e rigidez nas mãos. O RX mostra desgaste da cartilagem que reveste as extremidades ósseas e redução do espaço entre elas. Qual o termo anatômico para essa cartilagem que perdeu sua integridade?",
    "opcoes": [
      "A) Cartilagem Epifisária.",
      "B) Cartilagem Fibrosa.",
      "C) Cartilagem Articular (Hialina).",
      "D) Cartilagem Elástica."
    ],
    "explicacao_geral": "As superfícies ósseas em articulações sinoviais são protegidas por cartilagem articular (hialina), que não possui perícôndrio e tem baixa capacidade regenerativa.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Cartilagem epifisária é placa de crescimento.",
      "B": "[INCORRETA] Cartilagem fibrosa forma discos e meniscos, não o revestimento direto da superfície óssea.",
      "C": "[CORRETA] A **cartilagem articular** é o tecido hialino que sofre desgaste na **osteoartrose**.",
      "D": "[INCORRETA] Cartilagem elástica é encontrada na orelha e epiglote."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 3054,
    "materia": "bmf1",
    "aula_id": "bmf1_a7",
    "tema": "bmf1_a7",
    "modulo": 1,
    "dificuldade": 3,
    "correta": 1,
    "enunciado": "Em algumas articulações sinoviais, existem estruturas de fibrocartilagem que ajudam a adaptar superfícies ósseas incongruentes e amortecer impactos. Como se chamam essas estruturas no joelho?",
    "opcoes": [
      "A) Ligamentos Cruzados.",
      "B) Meniscos.",
      "C) Labrum (ou Lábio).",
      "D) Bursas."
    ],
    "explicacao_geral": "Os meniscos aumentam a área de contato e a estabilidade da articulação fêmuro-tibial.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Ligamentos cruzados conectam os ossos, mas não adaptam as superfícies articulares.",
      "B": "[CORRETA] Os **meniscos** são as cunhas de fibrocartilagem clássicas do joelho.",
      "C": "[INCORRETA] O labrum é análogo ao menisco, mas típico do ombro e quadril.",
      "D": "[INCORRETA] Bursas são bolsas com líquido que reduzem o atrito de tendões, não adaptam ossos."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3055,
    "materia": "bmf1",
    "aula_id": "bmf1_a7",
    "tema": "bmf1_a7",
    "modulo": 1,
    "dificuldade": 2,
    "correta": 0,
    "enunciado": "Qual alternativa descreve corretamente um exemplo de articulação do tipo Sindesmose?",
    "opcoes": [
      "A) Membrana interóssea entre o rádio e a ulna.",
      "B) Articulação entre os dentes e os alvéolos (Gonfose).",
      "C) Disco intervertebral.",
      "D) Articulação entre as falanges dos dedos."
    ],
    "explicacao_geral": "Sindesmoses são articulações fibrosas onde os ossos são unidos por uma maior quantidade de tecido conjuntivo (ligamento ou membrana).",
    "explicacoes_opcoes": {
      "A": "[CORRETA] A **membrana interóssea** é o exemplo clássico de sindesmose.",
      "B": "[INCORRETA] Gonfose é uma articulação fibrosa especial para os dentes.",
      "C": "[INCORRETA] Disco intervertebral é uma sínfise (cartilaginosa).",
      "D": "[INCORRETA] Articulações entre falanges são sinoviais tipo gínglimo."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3056,
    "materia": "bmf1",
    "aula_id": "bmf1_a7",
    "tema": "bmf1_a7",
    "modulo": 1,
    "dificuldade": 2,
    "correta": 3,
    "enunciado": "Um paciente com gota (artrite inflamatória) apresenta acúmulo de cristais de urato dentro da cavidade articular do dedão. Qual camada da cápsula articular é responsável pela produção do fluido onde esses cristais estão depositados?",
    "opcoes": [
      "A) Membrana Fibrosa (externa).",
      "B) Cartilagem Hialina.",
      "C) Periósteo.",
      "D) Membrana Sinovial (interna)."
    ],
    "explicacao_geral": "A cápsula articular tem duas camadas: uma fibrosa externa (estabilidade) e uma sinovial interna (secreção).",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] A camada fibrosa externa protege e limita movimentos.",
      "B": "[INCORRETA] A cartilagem hialina reveste o osso, não produz o líquido.",
      "C": "[INCORRETA] O periósteo não faz parte da estrutura interna da junta sinovial.",
      "D": "[CORRETA] A **membrana sinovial** secreta o líquido sinovial."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  }
];

const data = JSON.parse(fs.readFileSync(QUESTOES_PATH, 'utf-8'));
data.questoes = data.questoes.concat(novasQuestoes);
fs.writeFileSync(QUESTOES_PATH, JSON.stringify(data, null, 2), 'utf-8');
console.log(`Sucesso: 8 questões da aula bmf1_a7 adicionadas.`);
