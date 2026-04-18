import fs from 'fs';
import path from 'path';

const QUESTOES_PATH = 'data/questoes.json';

const novasQuestoes = [
  {
    "id": 3497,
    "materia": "bcm1",
    "aula_id": "bcm1_a9",
    "tema": "bcm1_a9",
    "modulo": 2,
    "dificuldade": 1,
    "correta": 1,
    "enunciado": "Os microtúbulos são os maiores componentes do citoesqueleto. De qual proteína globular eles são constituídos?),",
    "opcoes": [
      "A) Actina.",
      "B) Tubulina (Alfa e Beta).",
      "C) Queratina.",
      "D) Colágeno extra-celular."
    ],
    "explicacao_geral": "Os dímeros de tubulina polimerizam-se para formar o tubo oco característico.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Forma microfilamentos.",
      "B": "[CORRETA] A **Tubulina** é a unidade fundamental dos **microtúbulos**.",
      "C": "[INCORRETA] Forma filamentos intermediários.",
      "D": "[INCORRETA] Proteína de matriz extracelular."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3498,
    "materia": "bcm1",
    "aula_id": "bcm1_a9",
    "tema": "bcm1_a9",
    "modulo": 2,
    "dificuldade": 1,
    "correta": 3,
    "enunciado": "Os microtúbulos surgem a partir de um centro organizador central na célula eucariótica animal. Qual o nome dessa região?),",
    "opcoes": [
      "A) Nucleolo.",
      "B) Mitocondria.",
      "C) Aparelho de Golgi.",
      "D) Centrossomo (ou MTOC)."
    ],
    "explicacao_geral": "O centrossomo contém o par de centríolos e a matriz pericentriolar rica em tubulina-gama.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Local de síntese de ribossomos dentro do núcleo.",
      "B": "[INCORRETA] Produção de energia.",
      "C": "[INCORRETA] Processamento de proteínas.",
      "D": "[CORRETA] O **Centrossomo** é a 'âncora' dos **microtúbulos** citoplasmáticos."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3499,
    "materia": "bcm1",
    "aula_id": "bcm1_a9",
    "tema": "bcm1_a9",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 0,
    "enunciado": "Como as vesículas e organelas são transportadas ao longo das 'rodovias' de microtúbulos nos neurônios?),",
    "opcoes": [
      "A) Através de proteínas motoras (Cinesina e Dineína) que utilizam ATP para 'caminhar' sobre os microtúbulos.",
      "B) Através do vento citoplasmático.",
      "C) Por gravidade.",
      "D) Pulando de um microtúbulo ao outro sem encostar."
    ],
    "explicacao_geral": "Cinesinas movem-se para a extremidade (+) e Dineínas para a extremidade (-).",
    "explicacoes_opcoes": {
      "A": "[CORRETA] As **proteínas motoras** convertem energia química (ATP) em **movimento mecânico**.",
      "B": "[INCORRETA] Inexistente.",
      "C": "[INCORRETA] Dimensões microscópicas tornam a gravidade irrelevante perante as forças moleculares.",
      "D": "[INCORRETA] O transporte é contínuo e dependente de trilhos."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3500,
    "materia": "bcm1",
    "aula_id": "bcm1_a9",
    "tema": "bcm1_a9",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 2,
    "enunciado": "Muitos quimioterápicos (Ex: Paclitaxel/Taxol) atuam especificamente sobre os microtúbulos para combater o câncer. Qual o mecanismo de ação dessa droga?),",
    "opcoes": [
      "A) Ela derrete as mitocôndrias das células cancerosas.",
      "B) Ela acelera a divisão celular até a exaustão.",
      "C) Ela estabiliza os microtúbulos, impedindo sua despolimerização, bloqueando assim o fuso mitótico e a divisão celular.",
      "D) Ela transforma a tubulina em actina."
    ],
    "explicacao_geral": "A dinâmica dos microtúbulos é essencial para separar os cromossomos durante a mitose.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Foco no citoesqueleto.",
      "B": "[INCORRETA] O objetivo é parar a divisão.",
      "C": "[CORRETA] O **Taxol** causa a 'paralisia' do **fuso mitótico**, impedindo a proliferação tumoral.",
      "D": "[INCORRETA] Funções bioquímicas distintas."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 3501,
    "materia": "bcm1",
    "aula_id": "bcm1_a9",
    "tema": "bcm1_a9",
    "modulo": 2,
    "dificuldade": 3,
    "correta": 1,
    "enunciado": "A 'Instabilidade Dinâmica' é uma propriedade única dos microtúbulos. O que acontece durante uma 'Catástrofe' microtubular?),",
    "opcoes": [
      "A) A célula explode.",
      "B) O microtúbulo sofre uma despolimerização rápida e encurta bruscamente a partir da extremidade positiva após a perda do 'cap' de GTP.",
      "C) A proteína gGTP vira DNA.",
      "D) Os centríolos saem voando da célula."
    ],
    "explicacao_geral": "A alternância entre crescimento e encurtamento permite à célula remodelar seu esqueleto rapidamente.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] É um evento subcelular normal.",
      "B": "[CORRETA] A **Catástrofe** é a transição rápida do crescimento para o **encurtamento**.",
      "C": "[INCORRETA] Biosíntese impossível.",
      "D": "[INCORRETA] Centríolos são estruturas ancoradas e estáveis."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3502,
    "materia": "bcm1",
    "aula_id": "bcm1_a9",
    "tema": "bcm1_a9",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 3,
    "enunciado": "Os cílios e flagelos das células eucarióticas têm uma organização interna característica chamada Axonema. Qual o arranjo de microtúbulos e a proteína responsável pelo batimento?),",
    "opcoes": [
      "A) 10+5; Actina.",
      "B) 3+2; Miosina.",
      "C) 9+0; Queratina.",
      "D) 9+2 (nove pares periféricos e dois centrais); Dineína ciliar."
    ],
    "explicacao_geral": "O deslizamento dos microtúbulos causado pela dineína gera o movimento de chicote ou batimento.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Configuraçao inexistente.",
      "B": "[INCORRETA] Miosina atua na actina (músculo).",
      "C": "[INCORRETA] 9+0 é a estrutura do centríolo basal.",
      "D": "[CORRETA] O **Axonema 9+2** e a **Dineína** são o motor dos cílios respiratórios e do flagelo espermático."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3503,
    "materia": "bcm1",
    "aula_id": "bcm1_a9",
    "tema": "bcm1_a9",
    "modulo": 2,
    "dificuldade": 3,
    "correta": 0,
    "enunciado": "Um paciente apresenta a Síndrome de Kartagener (Discinesia Ciliar Primária), caracterizada por infecções respiratórias crônicas e infertilidade masculina. Qual o defeito molecular subjacente?),",
    "opcoes": [
      "A) Mutação nas proteínas Dineínas que impede o batimento dos cílios respiratórios e do flagelo do espermatozoide.",
      "B) Falta de glicose na dieta.",
      "C) Excesso de muco produzido pelo cérebro.",
      "D) Os pulmões não possuem microtúbulos."
    ],
    "explicacao_geral": "Sem o batimento ciliar, o muco não é transportado para fora dos pulmões (clearence mucociliar).",
    "explicacoes_opcoes": {
      "A": "[CORRETA] Na **Síndrome de Kartagener**, os **cílios são imóveis** devido à falha nas dineínas.",
      "B": "[INCORRETA] Não resolve o problema estrutural.",
      "C": "[INCORRETA] Muco é produzido pelas células caliciformes locais.",
      "D": "[INCORRETA] Todas as células eucarióticas possuem microtúbulos."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 3504,
    "materia": "bcm1",
    "aula_id": "bcm1_a9",
    "tema": "bcm1_a9",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 1,
    "enunciado": "Líquido cefalorraquidiano, urina e outros fluidos são movidos por cílios em diversos epitélios. Além do movimento de fluidos, qual outra função importante dos microtúbulos durante a Mitose?),",
    "opcoes": [
      "A) Produzir a parede celular.",
      "B) Formação do Fuso Mitótico e segregação (separação) dos cromossomos entre as células filhas.",
      "C) Dar cor aos cromossomos.",
      "D) Digerir o núcleo."
    ],
    "explicacao_geral": "Os microtúbulos do fuso ligam-se aos cinetócoros dos cromossomos.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Função de plantas (celulose), mas microtúbulos ajudam na orientação da deposição.",
      "B": "[CORRETA] Os **microtúbulos do fuso** são indispensáveis para a **divisão celular** correta.",
      "C": "[INCORRETA] Cromossomos são corados por técnicas de laboratório (Giemsa).",
      "D": "[INCORRETA] O envelope nuclear desintegra-se via fosforilação das laminas nucleares (AI)."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  }
];

const data = JSON.parse(fs.readFileSync(QUESTOES_PATH, 'utf-8'));
data.questoes = data.questoes.concat(novasQuestoes);
fs.writeFileSync(QUESTOES_PATH, JSON.stringify(data, null, 2), 'utf-8');
console.log(`Sucesso: 8 questões da aula bcm1_a9 adicionadas.`);
