import fs from 'fs';
import path from 'path';

const QUESTOES_PATH = 'data/questoes.json';

const novasQuestoes = [
  {
    "id": 3209,
    "materia": "pmh",
    "aula_id": "pmh_a5",
    "tema": "pmh_a5",
    "modulo": 1,
    "dificuldade": 1,
    "correta": 1,
    "enunciado": "O glicogênio é a principal forma de armazenamento de glicose nos animais. Quais são os dois principais locais de estocagem dessa molécula no corpo humano?",
    "opcoes": [
      "A) Cérebro e Pulmões.",
      "B) Fígado e Músculo Esquelético.",
      "C) Rins e Pâncreas.",
      "D) Tecido Adiposo e Ossos."
    ],
    "explicacao_geral": "O fígado estoca glicogênio para manter a glicemia, enquanto o músculo o utiliza para contração própria.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] O cérebro depende da glicose sanguínea e não possui reservas significativas.",
      "B": "[CORRETA] O **fígado** e o **músculo** são os reservatórios glicogênicos por excelência.",
      "C": "[INCORRETA] Não são órgãos de estocagem de glicogênio.",
      "D": "[INCORRETA] Tecido adiposo estoca triglicerídeos (gordura)."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3210,
    "materia": "pmh",
    "aula_id": "pmh_a5",
    "tema": "pmh_a5",
    "modulo": 1,
    "dificuldade": 2,
    "correta": 3,
    "enunciado": "Qual enzima é a chave para o desencadeamento da quebra do glicogênio (glicogenólise), liberando unidades de Glicose-1-Fosfato?),",
    "opcoes": [
      "A) Glicogênio Sintase.",
      "B) Hexocinase.",
      "C) Enzima Ramificadora.",
      "D) Glicogênio Fosforilase."
    ],
    "explicacao_geral": "A fosforilase retira unidades de glicose das extremidades não redutoras do polímero.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] A sintase é a enzima da síntese (glicogênese).",
      "B": "[INCORRETA] A hexocinase atua no início da glicólise.",
      "C": "[INCORRETA] A ramificadora atua na síntese, criando ligações alfa-1,6.",
      "D": "[CORRETA] A **Glicogênio Fosforilase** é o alvo principal da regulação hormonal para mobilizar açúcar."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3211,
    "materia": "pmh",
    "aula_id": "pmh_a5",
    "tema": "pmh_a5",
    "modulo": 1,
    "dificuldade": 2,
    "correta": 0,
    "enunciado": "Durante uma situação de estresse ou jejum, o glucagon e a adrenalina estimulam a degradação do glicogênio. Qual o mecanismo bioquímico imediato que ativa a Glicogênio Fosforilase nestas condições?",
    "opcoes": [
      "A) Fosforilação da enzima mediada pelo AMP cíclico (cAMP).",
      "B) Desfosforilação da enzima mediada pela Insulina.",
      "C) Ligação direta de moléculas de gordura ao sítio ativo.",
      "D) Diminuição da temperatura intracelular."
    ],
    "explicacao_geral": "A regulação é feita por modificação covalente (fosforilação/desfosforilação) em cascata.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] O aumento de **cAMP** ativa a PKA, que fosforila a fosforilase-cinase, que por sua vez **fosforila (ativa)** a **glicogênio fosforilase**.",
      "B": "[INCORRETA] A insulina ativa uma fosfatase que desfosforila a enzima, inativando-a.",
      "C": "[INCORRETA] Gorduras não regulam diretamente esta enzima do metabolismo de açúcar.",
      "D": "[INCORRETA] A temperatura não é um sinalizador regulatório fisiológico neste contexto."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3212,
    "materia": "pmh",
    "aula_id": "pmh_a5",
    "tema": "pmh_a5",
    "modulo": 1,
    "dificuldade": 3,
    "correta": 2,
    "enunciado": "A deficiência da enzima G6PD (Glicose-6-Fosfato Desidrogenase) é a deficiência enzimática mais comum do mundo. Ela afeta a Via das Pentoses e impede a produção de qual coenzima essencial para a proteção contra o estresse oxidativo nas hemácias?",
    "opcoes": [
      "A) NADH.",
      "B) ATP.",
      "C) NADPH.",
      "D) FADH2."
    ],
    "explicacao_geral": "O NADPH é fundamental para manter a glutationa em estado reduzido, neutralizando radicais livres.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] NADH é gerado na glicólise e ciclo de Krebs.",
      "B": "[INCORRETA] ATP é produto do metabolismo energético.",
      "C": "[CORRETA] A fase oxidativa da via das pentoses é a única fonte de **NADPH** para as hemácias.",
      "D": "[INCORRETA] FADH2 é produto do ciclo de Krebs."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 3213,
    "materia": "pmh",
    "aula_id": "pmh_a5",
    "tema": "pmh_a5",
    "modulo": 1,
    "dificuldade": 2,
    "correta": 1,
    "enunciado": "A Via das Pentoses-Fosfato possui uma 'fase não-oxidativa' reversível. Qual a principal finalidade dessa fase quando a célula NÃO precisa de mais NADPH, mas precisa sintetizar ácidos nucleicos (DNA/RNA)?),",
    "opcoes": [
      "A) Produzir apenas lacatato para os músculos.",
      "B) Gerar Ribose-5-fosfato a partir de intermediários da glicólise.",
      "C) Quebrar o glicogênio em glicose livre.",
      "D) Inibir totalmente a queima de açúcares."
    ],
    "explicacao_geral": "A via das pentoses interconecta o metabolismo de carboidratos com o de nucleotídeos.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Função da fermentação lática.",
      "B": "[CORRETA] A **Ribose-5-fosfato** é o açúcar base para a construção de nucleotídeos.",
      "C": "[INCORRETA] Função da glicogenólise.",
      "D": "[INCORRETA] A via é uma rota paralela/alternativa à glicólise, não um inibidor."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3214,
    "materia": "pmh",
    "aula_id": "pmh_a5",
    "tema": "pmh_a5",
    "modulo": 1,
    "dificuldade": 2,
    "correta": 3,
    "enunciado": "Um paciente pediátrico diagnosticado com Doença de Von Gierke (Glicogenose Tipo I) apresenta hipoglicemia grave entre as refeições e acúmulo massivo de glicogênio no fígado. A falha ocorre na enzima que libera a glicose para o sangue. Qual é essa enzima?",
    "opcoes": [
      "A) Glicogênio Sintase.",
      "B) Glicogênio Fosforilase.",
      "C) Enzima Desramificadora.",
      "D) Glicose-6-Fosfatase."
    ],
    "explicacao_geral": "Sem esta enzima, o fígado consegue quebrar o glicogênio até G6P, mas não consegue transformá-lo em glicose livre para exportação.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Se a sintase estivesse falha, não haveria acúmulo de glicogênio.",
      "B": "[INCORRETA] A falha da fosforilase seria a Doença de Hers (Tipo VI), menos grave.",
      "C": "[INCORRETA] Seria a Doença de Cori (Tipo III).",
      "D": "[CORRETA] A **Glicose-6-Fosfatase** é a via final comum para a liberação de glicose tanto da glicogenólise quanto da gliconeogênese."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 3215,
    "materia": "pmh",
    "aula_id": "pmh_a5",
    "tema": "pmh_a5",
    "modulo": 1,
    "dificuldade": 3,
    "correta": 0,
    "enunciado": "O NADPH produzido na Via das Pentoses é fundamental para vias de síntese (anabolismo). Qual das alternativas abaixo NÃO depende de NADPH?),",
    "opcoes": [
      "A) Ciclo de Krebs (Produção de ATP).",
      "B) Síntese de Ácidos Graxos.",
      "C) Síntese de Colesterol.",
      "D) Funcionamento do sistema Citocromo P450 no fígado."
    ],
    "explicacao_geral": "O NADPH é o 'poder redutor' para biossínteses redutoras e detoxificação.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] O **Ciclo de Krebs** utiliza NAD+ e FAD como aceptores; o NADPH não é coenzima deste ciclo energético.",
      "B": "[INCORRETA] A síntese de gordura consome muito NADPH.",
      "C": "[INCORRETA] A síntese de esteroides requer NADPH.",
      "D": "[INCORRETA] O P450 requer elétrons do NADPH para metabolizar drogas."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3216,
    "materia": "pmh",
    "aula_id": "pmh_a5",
    "tema": "pmh_a5",
    "modulo": 1,
    "dificuldade": 2,
    "correta": 2,
    "enunciado": "Um homem de 50 anos, alcoólatra, apresenta icterícia e urina escura. O médico explica que o consumo excessivo de álcool altera a relação NADH/NAD+ no fígado, inibindo a gliconeogênese. Por que a relação NADH/NAD+ elevada impede a síntese de glicose?",
    "opcoes": [
      "A) Porque o NADH é um veneno para a Glicose-6-fosfatase.",
      "B) Porque o NADH impede a absorção de vitaminas no intestino.",
      "C) Porque desloca o equilíbrio da reação para a formação de lactato e malato, desviando os precursores da gliconeogênese.",
      "D) Porque o álcool se transforma em glicogênio puro."
    ],
    "explicacao_geral": "O excesso de NADH 'empurra' as reações reversíveis para a direção do consumo de piruvato e oxaloacetato.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Não há inibição direta tóxica desse tipo.",
      "B": "[INCORRETA] Não é o mecanismo principal da hipoglicemia no alcoolismo.",
      "C": "[CORRETA] O excesso de **NADH** 'sequestra' o piruvato (gerando lactato) e o oxaloacetato (gerando malato), deixando a via da **gliconeogênese** sem matéria-prima.",
      "D": "[INCORRETA] O álcool inibe a síntese de glicogênio e glicose."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  }
];

const data = JSON.parse(fs.readFileSync(QUESTOES_PATH, 'utf-8'));
data.questoes = data.questoes.concat(novasQuestoes);
fs.writeFileSync(QUESTOES_PATH, JSON.stringify(data, null, 2), 'utf-8');
console.log(`Sucesso: 8 questões da aula pmh_a5 adicionadas.`);
