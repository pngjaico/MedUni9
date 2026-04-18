import fs from 'fs';
import path from 'path';

const QUESTOES_PATH = 'data/questoes.json';

const novasQuestoes = [
  {
    "id": 3609,
    "materia": "bmf2",
    "aula_id": "bmf2_a2",
    "tema": "bmf2_a2",
    "modulo": 2,
    "dificuldade": 1,
    "correta": 1,
    "enunciado": "A parede do coração é composta por três camadas. Qual delas é a mais espessa e responsável pela força de contração?),",
    "opcoes": [
      "A) Endocárdio.",
      "B) Miocárdio.",
      "C) Epicárdio.",
      "D) Pericárdio fibroso."
    ],
    "explicacao_geral": "O miocárdio é formado por tecido muscular estriado cardíaco.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Camada fina de revestimento interno (endotélio).",
      "B": "[CORRETA] O **Miocárdio** é a **camada muscular** contrátil.",
      "C": "[INCORRETA] Camada externa serosa (folheto visceral).",
      "D": "[INCORRETA] Saco fibroso externo que envolve o coração."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3610,
    "materia": "bmf2",
    "aula_id": "bmf2_a2",
    "tema": "bmf2_a2",
    "modulo": 2,
    "dificuldade": 1,
    "correta": 3,
    "enunciado": "Os vasos sanguíneos possuem túnicas em suas paredes. Qual túnica é composta principalmente por músculo liso e é responsável pelo controle do diâmetro do vaso?),",
    "opcoes": [
      "A) Túnica Íntima.",
      "B) Túnica Adventícia.",
      "C) Serosa periférica.",
      "D) Túnica Média."
    ],
    "explicacao_geral": "O controle da túnica média regula a resistência periférica e o fluxo sanguíneo.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Camada interna (endotélio).",
      "B": "[INCORRETA] Camada externa de tecido conjuntivo.",
      "C": "[INCORRETA] Termo não utilizado para descrição histológica de vasos típicos.",
      "D": "[CORRETA] A **Túnica Média** é a camada de **músculo liso** e fibras elásticas."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3611,
    "materia": "bmf2",
    "aula_id": "bmf2_a2",
    "tema": "bmf2_a2",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 0,
    "enunciado": "Histologicamente, as células do músculo cardíaco (cardiomiócitos) possuem estruturas de conexão específicas que permitem a rápida propagação do impulso elétrico. Quais são?),",
    "opcoes": [
      "A) Discos Intercalares (contendo desmossomos e junções gap).",
      "B) Placa motora nicotínica.",
      "C) Bainha de mielina.",
      "D) Pontes de actina livres."
    ],
    "explicacao_geral": "Os discos intercalares unem as células mecânica e eletricamente.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] Os **Discos Intercalares** harmonizam a **contração sincronizada** do coração.",
      "B": "[INCORRETA] Junção neuromuscular do músculo esquelético.",
      "C": "[INCORRETA] Isolamento elétrico de neurônios.",
      "D": "[INCORRETA] Actina é uma proteína interna do sarcômero."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3612,
    "materia": "bmf2",
    "aula_id": "bmf2_a2",
    "tema": "bmf2_a2",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 2,
    "enunciado": "As 'Artérias de Resistência' são os principais vasos que controlam a pressão arterial sistêmica através da vasoconstrição ou vasodilatação. Histologicamente, esse papel cabe às:),",
    "opcoes": [
      "A) Veias cavas.",
      "B) Artérias Elásticas (como a Aorta).",
      "C) Arteríolas.",
      "D) Capilares sinusoidais."
    ],
    "explicacao_geral": "As arteríolas possuem uma camada de músculo liso proporcionalmente muito espessa.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Vasos de capacitância (reservatórios), não de resistência.",
      "B": "[INCORRETA] Vasos de condução que amortecem o pulso sistólico.",
      "C": "[CORRETA] As **Arteríolas** são as **reguladoras da resistência** periférica total.",
      "D": "[INCORRETA] Vasos de troca, desprovidos de camada muscular liso."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3613,
    "materia": "bmf2",
    "aula_id": "bmf2_a2",
    "tema": "bmf2_a2",
    "modulo": 2,
    "dificuldade": 3,
    "correta": 1,
    "enunciado": "A 'Vasa vasorum' é uma rede de pequenos vasos encontrada nas paredes de grandes artérias e veias. Qual a sua função?),",
    "opcoes": [
      "A) Armazenar oxigênio reserva no vaso.",
      "B) Nutrir as células das túnicas externa e média em vasos calibrosos onde a difusão a partir do lúmen não é suficiente.",
      "C) Filtrar o sangue que passa no vaso principal.",
      "D) Impedir que o sangue congele."
    ],
    "explicacao_geral": "Vasos grandes são tão espessos que as camadas externas precisam de sua própria rede de irrigação.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Sem função de armazenamento gasoso.",
      "B": "[CORRETA] A **Vasa vasorum** é o 'vaso do vaso' que garante a **nutrição da parede vascular**.",
      "C": "[INCORRETA] Não é um sistema de filtragem.",
      "D": "[INCORRETA] Termorregulação é periférica e sistêmica, não isolada por vasa vasorum."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3614,
    "materia": "bmf2",
    "aula_id": "bmf2_a2",
    "tema": "bmf2_a2",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 0,
    "enunciado": "Um paciente tabagista crônico apresenta 'Aterosclerose'. Do ponto de vista histológico, onde se inicia a formação da placa aterosclerótica (ateroma)?),",
    "opcoes": [
      "A) No espaço subendotelial da Túnica Íntima após lesão do endotélio.",
      "B) Na Túnica Adventícia por excesso de gordura externa.",
      "C) Dentro das válvulas venosas.",
      "D) No núcleo das hemácias."
    ],
    "explicacao_geral": "A lesão endotelial permite a entrada de LDL e o recrutamento de macrófagos.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] O **ateroma** começa na **Túnica Íntima** com acúmulo de lipídios e células inflamatórias.",
      "B": "[INCORRETA] A adventícia não é o sítio primário da aterogênese.",
      "C": "[INCORRETA] Aterosclerose é uma patologia arterial.",
      "D": "[INCORRETA] Hemácias não possuem núcleo e não participam da formação do ateroma na parede vascular interna."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 3615,
    "materia": "bmf2",
    "aula_id": "bmf2_a2",
    "tema": "bmf2_a2",
    "modulo": 2,
    "dificuldade": 3,
    "correta": 3,
    "enunciado": "As Veias Comparadas às Artérias de mesmo calibre possuem características distintas. Qual afirmação é VERDADEIRA?),",
    "opcoes": [
      "A) Veias têm túnica média muito mais espessa.",
      "B) Artérias possuem válvulas em seu trajeto e veias não.",
      "C) O lúmen da artéria é sempre muito maior que o da veia correspondente.",
      "D) Veias possuem paredes mais delgadas, túnica adventícia predominante e, em membros inferiores, apresentam válvulas para impedir o refluxo sanguíneo."
    ],
    "explicacao_geral": "As veias suportam pressões muito menores e funcionam como reservatórios de volume.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Artérias têm túnica média mais desenvolvida (resistência).",
      "B": "[INCORRETA] Válvulas são típicas de veias (baixa pressão).",
      "C": "[INCORRETA] O lúmen venoso costuma ser maior e mais irregular (vaso colapsável).",
      "D": "[CORRETA] A estrutura **venosa** é adaptada para o **baixo regime de pressão** e retorno gravitacional."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3616,
    "materia": "bmf2",
    "aula_id": "bmf2_a2",
    "tema": "bmf2_a2",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 2,
    "enunciado": "O 'Endotélio' não é apenas uma barreira física, mas um órgão metabólico ativo. Qual função ele desempenha sintetizando substâncias como Óxido Nítrico (NO)?),",
    "opcoes": [
      "A) Provocar febre na célula.",
      "B) Estimular o crescimento de pelos.",
      "C) Relaxamento do músculo liso vascular (Vasodilatação) e inibição da agregação plaquetária.",
      "D) Digestão de glicose no sangue."
    ],
    "explicacao_geral": "O endotélio saudável é central para o controle da pressão e prevenção de trombose.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Sem função termorguladora direta via NO celular.",
      "B": "[INCORRETA] Sem relação.",
      "C": "[CORRETA] O **Endotélio** regula o **tônus vascular** através de sinalizadores químicos.",
      "D": "[INCORRETA] Enzimas digestivas atuam em outros contextos."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  }
];

const data = JSON.parse(fs.readFileSync(QUESTOES_PATH, 'utf-8'));
data.questoes = data.questoes.concat(novasQuestoes);
fs.writeFileSync(QUESTOES_PATH, JSON.stringify(data, null, 2), 'utf-8');
console.log(`Sucesso: 8 questões da aula bmf2_a2 adicionadas.`);
