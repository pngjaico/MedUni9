import fs from 'fs';
import path from 'path';

const QUESTOES_PATH = 'data/questoes.json';

const novasQuestoes = [
  {
    "id": 3553,
    "materia": "bcm1",
    "aula_id": "bcm1_a16",
    "tema": "bcm1_a16",
    "modulo": 2,
    "dificuldade": 1,
    "correta": 1,
    "enunciado": "O núcleo é a organela que abriga o material genético. Qual a estrutura que isola o núcleo do citoplasma, permitindo apenas a passagem controlada de substâncias?),",
    "opcoes": [
      "A) Membrana única plasmática.",
      "B) Envelope Nuclear (Carioteca), uma membrana dupla com poros nucleares.",
      "C) Uma parede de açúcar.",
      "D) Não existe isolamento."
    ],
    "explicacao_geral": "Os poros nucleares são complexos proteicos gigantes que regulam o tráfego de proteínas e RNAs.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] A carioteca é dupla (face interna e externa).",
      "B": "[CORRETA] O **Envelope Nuclear** garante a separação entre transcrição e tradução nos eucariotos.",
      "C": "[INCORRETA] Papel mecânico de plantas.",
      "D": "[INCORRETA] O isolamento é fundamental para a regulação gênica."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3554,
    "materia": "bcm1",
    "aula_id": "bcm1_a16",
    "tema": "bcm1_a16",
    "modulo": 2,
    "dificuldade": 1,
    "correta": 3,
    "enunciado": "A cromatina é o complexo de DNA e proteínas. Qual o nome das proteínas em que o DNA se enrola para formar o nucleossomo?),",
    "opcoes": [
      "A) Actinas.",
      "B) Tubulinas.",
      "C) Queratinas.",
      "D) Histonas."
    ],
    "explicacao_geral": "As histonas (H2A, H2B, H3 e H4) formam o octâmero central do nucleossomo.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Proteínas de movimento.",
      "B": "[INCORRETA] Proteínas de transporte/citoesqueleto.",
      "C": "[INCORRETA] Proteínas de resistência epitelial.",
      "D": "[CORRETA] As **Histonas** permitem o **empacotamento** eficiente do DNA."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3555,
    "materia": "bcm1",
    "aula_id": "bcm1_a16",
    "tema": "bcm1_a16",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 0,
    "enunciado": "A cromatina pode ser dividida em Eucromatina e Heterocromatina. Qual a principal diferença funcional entre elas?),",
    "opcoes": [
      "A) Eucromatina é menos condensada e geneticamente ativa (acessível para transcrição); Heterocromatina é densa e inativa.",
      "B) Eucromatina é amarela e Heterocromatina é azul.",
      "C) Heterocromatina só existe no citoplasma.",
      "D) São nomes diferentes para a mesma estrutura."
    ],
    "explicacao_geral": "A condensação do DNA regula o acesso das polimerases aos genes.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] A **Eucromatina** é o local onde o **maquinário de transcrição** consegue atuar.",
      "B": "[INCORRETA] Diferenciação visual em eletromicrografias (claro vs escuro), não cor colorida real.",
      "C": "[INCORRETA] Ambas são exclusivas do núcleo (ou mitocôndria em menor grau, mas os termos valem para o núcleo).",
      "D": "[INCORRETA] Representam estados epigenéticos distintos."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3556,
    "materia": "bcm1",
    "aula_id": "bcm1_a16",
    "tema": "bcm1_a16",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 2,
    "enunciado": "O nucléolo é uma região densa e não membranosa dentro do núcleo. Qual a sua função primária?),",
    "opcoes": [
      "A) Produzir lipídios.",
      "B) Armazenar oxigênio para a célula.",
      "C) Síntese de RNA ribossomal (rRNA) e montagem das subunidades dos ribossomos.",
      "D) Destruição de vírus."
    ],
    "explicacao_geral": "O tamanho do nucléolo reflete a taxa de síntese proteica da célula.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Função do REL.",
      "B": "[INCORRETA] Mitocôndrias consomem oxigênio.",
      "C": "[CORRETA] O **Nucléolo** é a 'fábrica' de **ribossomos**.",
      "D": "[INCORRETA] Função imunológica/enzimática."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3557,
    "materia": "bcm1",
    "aula_id": "bcm1_a16",
    "tema": "bcm1_a16",
    "modulo": 2,
    "dificuldade": 3,
    "correta": 1,
    "enunciado": "Proteínas sintetizadas no citoplasma que precisam entrar no núcleo (como as polimerases) devem possuir uma sequência específica. Qual é o nome dessa 'passagem'?),",
    "opcoes": [
      "A) Sinal de secreção de Golgi.",
      "B) Sinal de Localização Nuclear (NLS) reconhecido pelas Importinas.",
      "C) Endereço residencial celular.",
      "D) Marca de exportação lisossomal."
    ],
    "explicacao_geral": "O transporte via poros nucleares exige reconhecimento facilitado por proteínas carreadoras.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Endereça ao RE.",
      "B": "[CORRETA] O **NLS** é o código de barras para **entrada no núcleo**.",
      "C": "[INCORRETA] Termo inexistente.",
      "D": "[INCORRETA] Endereça ao lisossomo (M6P)."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3558,
    "materia": "bcm1",
    "aula_id": "bcm1_a16",
    "tema": "bcm1_a16",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 3,
    "enunciado": "O 'Corpúsculo de Barr' encontrado em células de fêmeas de mamíferos (inclusive mulheres) representa qual fenômeno citogenético?),",
    "opcoes": [
      "A) O excesso de testosterona.",
      "B) A morte da célula.",
      "C) A presença de três núcleos.",
      "D) A inativação de um dos cromossomos X, que permanece altamente condensado como heterocromatina facultativa."
    ],
    "explicacao_geral": "Isso equaliza a dosagem gênica entre machos (XY) e fêmeas (XX).",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Não relacionado.",
      "B": "[INCORRETA] Células com corpúsculo de Barr são normais e saudáveis.",
      "C": "[INCORRETA] Células são mononucleadas tipicamente.",
      "D": "[CORRETA] O **Corpúsculo de Barr** é o **Cromossomo X inativo** visível na periferia nuclear."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 3559,
    "materia": "bcm1",
    "aula_id": "bcm1_a16",
    "tema": "bcm1_a16",
    "modulo": 2,
    "dificuldade": 3,
    "correta": 0,
    "enunciado": "A instabilidade do envelope nuclear está ligada a doenças do envelhecimento precoce. Qual proteína de filamento intermediário reveste o núcleo e sua mutação causa a 'Progéria' (Síndrome de Hutchinson-Gilford)?),",
    "opcoes": [
      "A) Laminas (Ex: Lamina A).",
      "B) Queratina epidérmica.",
      "C) Colágeno IV.",
      "D) Actinina."
    ],
    "explicacao_geral": "A rede de laminas dá rigidez e suporte mecânico ao núcleo; sua falha causa bleepping e instabilidade genômica.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] A **Progéria** é uma **Laminopatia** grave.",
      "B": "[INCORRETA] Atua na pele, não no núcleo celular.",
      "C": "[INCORRETA] Proteína de matriz extracelular (lâmina basal).",
      "D": "[INCORRETA] Proteína de ancoragem do citoesqueleto."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 3560,
    "materia": "bcm1",
    "aula_id": "bcm1_a16",
    "tema": "bcm1_a16",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 2,
    "enunciado": "A 'Acetilação de Histonas' é uma modificação epigenética importante. O que ela geralmente promove na célula?),",
    "opcoes": [
      "A) Fechamento total do DNA, impedindo a vida.",
      "B) Transformação do DNA em RNA proteico.",
      "C) Descompactação da cromatina (abertura), facilitando a transcrição de genes.",
      "D) Destruição dos ribossomos."
    ],
    "explicacao_geral": "A acetilação neutraliza as cargas positivas das histonas, diminuindo sua afinidade pelo DNA negativo.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] A acetilação geralmente abre; a desacetilação ou algumas metilações fecham.",
      "B": "[INCORRETA] Transcrição produz RNA, mas a acetilação apenas facilita o acesso.",
      "C": "[CORRETA] **Acetilação = Cromatina Aberta** (Gere transcrição).",
      "D": "[INCORRETA] Processo nuclear focado em DNA/Proteínas de suporte."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  }
];

const data = JSON.parse(fs.readFileSync(QUESTOES_PATH, 'utf-8'));
data.questoes = data.questoes.concat(novasQuestoes);
fs.writeFileSync(QUESTOES_PATH, JSON.stringify(data, null, 2), 'utf-8');
console.log(`Sucesso: 8 questões da aula bcm1_a16 adicionadas.`);
