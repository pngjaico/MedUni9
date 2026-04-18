import fs from 'fs';
import path from 'path';

const QUESTOES_PATH = 'data/questoes.json';

const novasQuestoes = [
  {
    "id": 4057,
    "materia": "semio2",
    "aula_id": "semio2_a4",
    "tema": "semio2_a4",
    "modulo": 2,
    "dificuldade": 1,
    "correta": 1,
    "enunciado": "Como é chamado o som normal ouvido durante a percussão de um pulmão saudável e bem aerado?),",
    "opcoes": [
      "A) Som Maciço.",
      "B) Som Claro Pulmonar.",
      "C) Som Timpanítico.",
      "D) Som Metálico."
    ],
    "explicacao_geral": "O som claro pulmonar resulta da vibração do parênquima pulmonar contendo ar.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Som de órgãos sólidos ou líquidos (ex: fígado ou derrame).",
      "B": "[CORRETA] O **Som Claro Pulmonar** é o padrão de **normalidade**.",
      "C": "[INCORRETA] Som de cavidades com muito ar (ex: estômago ou pneumotórax).",
      "D": "[INCORRETA] Som patológico em grandes cavernas pulmonares."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 4058,
    "materia": "semio2",
    "aula_id": "semio2_a4",
    "tema": "semio2_a4",
    "modulo": 2,
    "dificuldade": 1,
    "correta": 3,
    "enunciado": "Qual ruído adventício é caracterizado por ser musical, agudo, contínuo e ocorre predominantemente na expiração, sendo típico da Asma?),",
    "opcoes": [
      "A) Estertor fino.",
      "B) Ronco.",
      "C) Estridor.",
      "D) Sibilo."
    ],
    "explicacao_geral": "Os sibilos resultam da passagem do ar por vias aéreas estreitadas (broncoconstrição).",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Som descontínuo (crepitante).",
      "B": "[INCORRETA] Som grave e ruidoso devido à secreção em grandes brônquios.",
      "C": "[INCORRETA] Som inspiratório alto por obstrução de vias aéreas superiores.",
      "D": "[CORRETA] O **Sibilo** é o som clássico do **Broncoespasmo**."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 4059,
    "materia": "semio2",
    "aula_id": "semio2_a4",
    "tema": "semio2_a4",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 0,
    "enunciado": "A pesquisa do FTV (Frêmito Toraco-Vocal) consiste em sentir a vibração da parede torácica enquanto o paciente diz '33'. Qual alteração é esperada em uma região com Pneumonia (Consolidação)?),",
    "opcoes": [
      "A) FTV aumentado.",
      "B) FTV diminuído ou ausente.",
      "C) FTV inalterado.",
      "D) O FTV desaparece apenas no lado direito."
    ],
    "explicacao_geral": "O som se propaga melhor em meios sólidos (consolidação) do que através do ar.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] Na **Consolidação (Pneumonia)**, o **FTV está Aumentado**.",
      "B": "[INCORRETA] Ocorre quando há algo entre o pulmão e a parede (Derrame ou Pneumotórax).",
      "C": "[INCORRETA] Haverá mudança física na propagação.",
      "D": "[INCORRETA] Ocorre na região da lesão, independente do lado."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 4060,
    "materia": "semio2",
    "aula_id": "semio2_a4",
    "tema": "semio2_a4",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 2,
    "enunciado": "Os 'Estertores Finos' (Crepitantes) são comparados ao som de um velcro se abrindo ou de cabelo sendo esfregado perto do ouvido. Qual a causa desse som?),",
    "opcoes": [
      "A) Ar passando por secreção líquida rala.",
      "B) Atrito entre as pleuras inflamadas.",
      "C) Abertura súbita de alvéolos e pequenas vias aéreas que estavam colapsadas.",
      "D) Contração do diafragma."
    ],
    "explicacao_geral": "Ocorrem no final da inspiração e não se alteram com a tosse.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Causa dos estertores grossos.",
      "B": "[INCORRETA] Causa do atrito pleural.",
      "C": "[CORRETA] Os **Estertores Finos** indicam **abertura alveolar** (comum em fibrose ou pneumonia inicial).",
      "D": "[INCORRETA] Absurdo."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 4061,
    "materia": "semio2",
    "aula_id": "semio2_a4",
    "tema": "semio2_a4",
    "modulo": 2,
    "dificuldade": 3,
    "correta": 1,
    "enunciado": "Um paciente apresenta dispneia súbita. Ao exame: FTV ausente, som timpânico à percussão e murmúrio vesicular ausente à direita. Qual o diagnóstico mais provável?),",
    "opcoes": [
      "A) Derrame Pleural.",
      "B) Pneumotórax (ar no espaço pleural).",
      "C) Atelectasia.",
      "D) Enfisema pulmonar."
    ],
    "explicacao_geral": "O timpanismo é a chave para diferenciar do derrame pleural (que daria macicez).",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Daria macicez à percussão.",
      "B": "[CORRETA] O **Timpanismo com Murmúrio Ausente** sugere **Pneumotórax**.",
      "C": "[INCORRETA] Daria macicez (pulmão 'murcho'/sólido) e desvio da traqueia para o lado da lesão.",
      "D": "[INCORRETA] Hipersonoridade global e simétrica, não ausência súbita unilateral de MV."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 4062,
    "materia": "semio2",
    "aula_id": "semio2_a4",
    "tema": "semio2_a4",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 3,
    "enunciado": "Como é chamado o som respiratório normal ouvido em quase toda a extensão dos pulmões, suave e de baixa frequência?),",
    "opcoes": [
      "A) Respiração brônquica.",
      "B) Respiração traqueal.",
      "C) Respiração cavernosa.",
      "D) Murmúrio Vesicular (Fisiológico)."
    ],
    "explicacao_geral": "O murmúrio vesicular é mais audível na inspiração.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Som mais rude, normal perto dos grandes brônquios.",
      "B": "[INCORRETA] Som muito rude ouvido sobre a traqueia.",
      "C": "[INCORRETA] Som patológico sobre cavidades.",
      "D": "[CORRETA] O **Murmúrio Vesicular** é o som da **ventilação normal**."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 4063,
    "materia": "semio2",
    "aula_id": "semio2_a4",
    "tema": "semio2_a4",
    "modulo": 2,
    "dificuldade": 3,
    "correta": 0,
    "enunciado": "A 'Pectoriloquia Fônica' é um achado da ausculta da voz. Em que ele consiste e o que indica?),",
    "opcoes": [
      "A) É a audição nítida da voz do paciente através do estetoscópio; indica consolidação pulmonar.",
      "B) É o paciente perdendo a voz.",
      "C) É a voz parecendo um balido de cabra (egofonia).",
      "D) É a voz desaparecendo completamente."
    ],
    "explicacao_geral": "Normalmente a voz chega abafada e incompreensível ao estetoscópio.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] A **Pectoriloquia** indica **Condensação** (transmissão facilitada da voz).",
      "B": "[INCORRETA] Afonia.",
      "C": "[INCORRETA] Egofonia.",
      "D": "[INCORRETA] Diminuição da ressonância vocal."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 4064,
    "materia": "semio2",
    "aula_id": "semio2_a4",
    "tema": "semio2_a4",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 2,
    "enunciado": "O 'Estridor' é um ruído inspiratório alto e contínuo. Sua presença indica urgência médica por qual motivo?),",
    "opcoes": [
      "A) Pneumonia grave.",
      "B) Crise de soluços.",
      "C) Obstrução de vias aéreas superiores (laringe ou traqueia).",
      "D) Excesso de tosse."
    ],
    "explicacao_geral": "O estridor pode indicar um edema de glote ou corpo estranho obstruindo a passagem de ar.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Causa estertores e dispneia, mas não estridor laríngeo clássico.",
      "B": "[INCORRETA] Incomodo, mas raramente urgência por obstrução.",
      "C": "[CORRETA] O **Estridor** sinaliza **Obstrução Alta** (perigo de asfixia).",
      "D": "[INCORRETA] A tosse pode acompanhar, mas o ruído em si é a chave do diagnóstico obstrutivo."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  }
];

const data = JSON.parse(fs.readFileSync(QUESTOES_PATH, 'utf-8'));
data.questoes = data.questoes.concat(novasQuestoes);
fs.writeFileSync(QUESTOES_PATH, JSON.stringify(data, null, 2), 'utf-8');
console.log(`Sucesso: 8 questões da aula semio2_a4 adicionadas.`);
