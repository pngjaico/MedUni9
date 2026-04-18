import fs from 'fs';
import path from 'path';

const QUESTOES_PATH = 'data/questoes.json';

const novasQuestoes = [
  {
    "id": 3913,
    "materia": "mad1",
    "aula_id": "mad1_a10",
    "tema": "mad1_a10",
    "modulo": 2,
    "dificuldade": 1,
    "correta": 1,
    "enunciado": "Os fungos são organismos eucariontes heterótrofos. Qual o principal componente da parede celular fúngica que a diferencia das plantas?),",
    "opcoes": [
      "A) Celulose.",
      "B) Quitina.",
      "C) Peptidoglicano.",
      "D) Colesterol."
    ],
    "explicacao_geral": "A quitina é um polímero de N-acetilglucosamina que confere rigidez aos fungos.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Componente das plantas.",
      "B": "[CORRETA] A **Parede de Quitina** é a marca dos **Fungos**.",
      "C": "[INCORRETA] Componente das bactérias.",
      "D": "[INCORRETA] Componente da membrana celular humana; fungos possuem ergosterol."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3914,
    "materia": "mad1",
    "aula_id": "mad1_a10",
    "tema": "mad1_a10",
    "modulo": 2,
    "dificuldade": 1,
    "correta": 3,
    "enunciado": "Os fungos podem apresentar-se sob duas formas morfológicas básicas. Como são chamados os fungos unicelulares que se reproduzem por brotamento?),",
    "opcoes": [
      "A) Hifas.",
      "B) Cogumelos.",
      "C) Micélios.",
      "D) Leveduras."
    ],
    "explicacao_geral": "Cândida albicans e Saccharomyces cerevisiae são exemplos clássicos de leveduras.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Estruturas tubulares dos fungos filamentosos.",
      "B": "[INCORRETA] Corpo de frutificação macroscópico.",
      "C": "[INCORRETA] Massa emaranhada de hifas.",
      "D": "[CORRETA] As **Leveduras** são os **fungos unicelulares**."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3915,
    "materia": "mad1",
    "aula_id": "mad1_a10",
    "tema": "mad1_a10",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 0,
    "enunciado": "Muitos fungos patogênicos humanos são 'Dimórficos'. O que isso significa no contexto da patogênese?),",
    "opcoes": [
      "A) Crescem como bolores (filamentosos) no ambiente (temp. ambiente) e como leveduras nos tecidos do hospedeiro (temp. corpórea).",
      "B) Possuem dois corações.",
      "C) Podem transformar-se em bactérias.",
      "D) Vivem apenas no escuro absoluto."
    ],
    "explicacao_geral": "Paracoccidioides e Histoplasma são exemplos de fungos dimórficos.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] O **Dimorfismo Fúngico** é vital para a adaptação ao **hospedeiro**.",
      "B": "[INCORRETA] Absurdo.",
      "C": "[INCORRETA] Reino diferente, impossível.",
      "D": "[INCORRETA] Inexpressivo biológico."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3916,
    "materia": "mad1",
    "aula_id": "mad1_a10",
    "tema": "mad1_a10",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 2,
    "enunciado": "Qual componente da membrana citoplasmática dos fungos é o alvo principal de drogas antifúngicas como o Fluconazol e a Anfotericina B?),",
    "opcoes": [
      "A) Fosfolipídeo.",
      "B) Glicogênio.",
      "C) Ergosterol.",
      "D) Hemoglobina fúngica."
    ],
    "explicacao_geral": "Os azóis inibem a síntese do ergosterol; a anfotericina fura a membrana ligando-se a ele.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Comum a todas as membranas celulares.",
      "B": "[INCORRETA] Carboidrato de reserva.",
      "C": "[CORRETA] O **Ergosterol** é o alvo seletivo do **Tratamento Antifúngico**.",
      "D": "[INCORRETA] Fungos não possuem hemoglobina."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3917,
    "materia": "mad1",
    "aula_id": "mad1_a10",
    "tema": "mad1_a10",
    "modulo": 2,
    "dificuldade": 3,
    "correta": 1,
    "enunciado": "Ao observar um fungo filamentoso no microscópio, nota-se que as hifas não possuem paredes divisórias transversais. Como são chamadas estas hifas?),",
    "opcoes": [
      "A) Hifas Septadas.",
      "B) Hifas Cenocíticas (ou Não-septadas).",
      "C) Hifas Ramificadas em 45°.",
      "D) Pseudohifas."
    ],
    "explicacao_geral": "A ausência de septos é característica de fungos do grupo dos Zigomicetos (Mucor, Rhizopus).",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Possuem paredes transversais (septo).",
      "B": "[CORRETA] As **Hifas Cenocíticas** indicam a ausência de **septação**.",
      "C": "[INCORRETA] Característica de Aspergillus (fungo septado).",
      "D": "[INCORRETA] Cadeias de leveduras alongadas que não se soltam, comum em Candida."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3918,
    "materia": "mad1",
    "aula_id": "mad1_a10",
    "tema": "mad1_a10",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 3,
    "enunciado": "O diagnóstico laboratorial das micoses frequentemente utiliza o exame direto com 'KOH' (Hidróxido de Potássio). Qual a função do KOH na amostra?),",
    "opcoes": [
      "A) Colorir as hifas de azul.",
      "B) Matar a bactéria para o fungo crescer.",
      "C) Alimentar o fungo.",
      "D) Dissolver a queratina e os detritos celulares do paciente, facilitando a visualização das estruturas fúngicas sob o microscópio."
    ],
    "explicacao_geral": "O KOH é um agente clareador potente.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] O KOH é incolor.",
      "B": "[INCORRETA] Não é o objetivo do exame direto.",
      "C": "[INCORRETA] O KOH é tóxico/corrosivo.",
      "D": "[CORRETA] O **Exame Direto com KOH** clareia a amostra para ver o **fungo**."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3919,
    "materia": "mad1",
    "aula_id": "mad1_a10",
    "tema": "mad1_a10",
    "modulo": 2,
    "dificuldade": 3,
    "correta": 0,
    "enunciado": "Um paciente que trabalha em jardins apresenta lesões nodulares e ulceradas seguindo o trajeto linfático do antebraço. Qual o nome desse padrão de disseminação característico da Esporotricose?),",
    "opcoes": [
      "A) Disseminação Linfangítica (ou Nodular-ascendente).",
      "B) Disseminação Alveolar.",
      "C) Disseminação Hematogênica súbita.",
      "D) Disseminação Neural."
    ],
    "explicacao_geral": "O fungo Sporothrix schenckii é inoculado traumaticamente (ex: espinho de rosa).",
    "explicacoes_opcoes": {
      "A": "[CORRETA] A **Esporotricose** manifesta-se tipicamente pelo **trajeto linfático**.",
      "B": "[INCORRETA] Refere-se a pulmão.",
      "C": "[INCORRETA] Menos comum na forma cutânea clássica inicial.",
      "D": "[INCORRETA] Inexistente para este patógeno."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 3920,
    "materia": "mad1",
    "aula_id": "mad1_a10",
    "tema": "mad1_a10",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 2,
    "enunciado": "Qual dos seguintes fungos é famoso por formar 'Pseudohifas' em situações de infecção ativa em mucosas?),",
    "opcoes": [
      "A) Aspergillus fumigatus.",
      "B) Penicillium chrysogenum.",
      "C) Candida albicans.",
      "D) Cryptococcus neoformans."
    ],
    "explicacao_geral": "A transição de levedura para pseudohifa/hifa verdadeira é um fator de virulência da Candida.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Forma hifas verdadeiras septadas.",
      "B": "[INCORRETA] Forma hifas verdadeiras.",
      "C": "[CORRETA] A **Candida albicans** forma **Pseudohifas** patogênicas.",
      "D": "[INCORRETA] Levedura capsulada que não forma hifas."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  }
];

const data = JSON.parse(fs.readFileSync(QUESTOES_PATH, 'utf-8'));
data.questoes = data.questoes.concat(novasQuestoes);
fs.writeFileSync(QUESTOES_PATH, JSON.stringify(data, null, 2), 'utf-8');
console.log(`Sucesso: 8 questões da aula mad1_a10 adicionadas.`);
