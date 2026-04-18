import fs from 'fs';
import path from 'path';

const QUESTOES_PATH = 'data/questoes.json';

const novasQuestoes = [
  {
    "id": 3193,
    "materia": "pmh",
    "aula_id": "pmh_a3",
    "tema": "pmh_a3",
    "modulo": 1,
    "dificuldade": 1,
    "correta": 1,
    "enunciado": "A glicólise é a via central de oxidação da glicose no citosol celular. Qual o saldo líquido de moléculas de ATP produzidas a partir de UMA molécula de glicose durante a fase anaeróbia?",
    "opcoes": [
      "A) 1 ATP.",
      "B) 2 ATPs.",
      "C) 32 ATPs.",
      "D) 4 ATPs."
    ],
    "explicacao_geral": "Embora a glicólise produza 4 ATPs, ela consome 2 na fase de investimento.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] O rendimento é superior a 1.",
      "B": "[CORRETA] O **saldo líquido** da glicólise anaeróbia é de **2 ATPs** por glicose.",
      "C": "[INCORRETA] Este é o saldo aproximado da respiração celular completa (aeróbia).",
      "D": "[INCORRETA] Este é o saldo bruto, sem descontar o investimento."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3194,
    "materia": "pmh",
    "aula_id": "pmh_a3",
    "tema": "pmh_a3",
    "modulo": 1,
    "dificuldade": 2,
    "correta": 3,
    "enunciado": "A enzima Fosfofrutocinase-1 (PFK-1) é considerada o principal ponto de controle da glicólise. Qual sinalizador intracelular atua como um potente ATIVADOR alostérico desta enzima, acelerando a glicólise?",
    "opcoes": [
      "A) ATP excessivo.",
      "B) Citrato.",
      "C) Glucagon elevado.",
      "D) Frutose-2,6-bisfosfato (F-2,6-BP)."
    ],
    "explicacao_geral": "A regulação da PFK-1 responde ao estado energético da célula.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] O ATP em excesso sinaliza que a célula está carregada de energia e inibe a glicólise.",
      "B": "[INCORRETA] O citrato é um sinalizador de abundância de precursores e também inibe a via.",
      "C": "[INCORRETA] Glucagon sinaliza jejum e inibe a glicólise hepática.",
      "D": "[CORRETA] A **F-2,6-BP** é o sinalizador mais potente para 'ligar' a glicólise, superando a inibição pelo ATP."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3195,
    "materia": "pmh",
    "aula_id": "pmh_a3",
    "tema": "pmh_a3",
    "modulo": 1,
    "dificuldade": 2,
    "correta": 0,
    "enunciado": "Um atleta de elite realiza um sprint de 100 metros. Devido à alta demanda energética e baixa disponibilidade de oxigênio no músculo, o piruvato é convertido em lactato. Qual a finalidade metabólica dessa conversão?",
    "opcoes": [
      "A) Regenerar o NAD+ necessário para manter a glicólise ativa.",
      "B) Produzir mais ATP diretamente na reação do lactato.",
      "C) Diminuir o pH do músculo para facilitar a contração.",
      "D) Armazenar carbono para a síntese de proteínas."
    ],
    "explicacao_geral": "A fermentação lática é uma via de escape para reciclar coenzimas em condições anaeróbias.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] A conversão em lactato consome NADH e **regenera o NAD+**, garantindo que a etapa da Gliceraldeído-3-P desidrogenase não pare.",
      "B": "[INCORRETA] A reação em si não gera ATP.",
      "C": "[INCORRETA] A queda do pH (acidose lática) é uma consequência indesejada, não a finalidade.",
      "D": "[INCORRETA] O lactato é transportado ao fígado para ser reconvertido em glicose (Ciclo de Cori)."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 3196,
    "materia": "pmh",
    "aula_id": "pmh_a3",
    "tema": "pmh_a3",
    "modulo": 1,
    "dificuldade": 2,
    "correta": 2,
    "enunciado": "A gliconeogênese é a rota de síntese de glicose a partir de precursores não glicídicos. Em qual órgão ocorre a maior parte (cerca de 90%) deste processo durante o jejum prolongado?",
    "opcoes": [
      "A) Músculo Esquelético.",
      "B) Cérebro.",
      "C) Fígado.",
      "D) Pâncreas."
    ],
    "explicacao_geral": "A gliconeogênese requer enzimas específicas que não estão presentes em todos os tecidos.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] O músculo não possui a enzima Glicose-6-fosfatase, portanto não libera glicose para o sangue.",
      "B": "[INCORRETA] O cérebro é o principal consumidor de glicose, não produtor.",
      "C": "[CORRETA] O **fígado** é o guardião da glicemia, realizando gliconeogênese para exportação.",
      "D": "[INCORRETA] O pâncreas secreta os hormônios reguladores, mas não faz gliconeogênese expressiva."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3197,
    "materia": "pmh",
    "aula_id": "pmh_a3",
    "tema": "pmh_a3",
    "modulo": 1,
    "dificuldade": 3,
    "correta": 1,
    "enunciado": "A gliconeogênese não é simplesmente o inverso da glicólise, pois três etapas da glicólise são irreversíveis e exigem 'desvios' enzimáticos. Qual enzima é necessária para contornar a reação da Hexocinase e permitir a liberação de glicose livre para o sangue?",
    "opcoes": [
      "A) Piruvato Carboxilase.",
      "B) Glicose-6-Fosfatase.",
      "C) Fosfoenolpiruvato Carboxicicinase (PEPCK).",
      "D) Frutose-1,6-Bisofosfatase."
    ],
    "explicacao_geral": "A desfosforilação da glicose-6-fosfato é a etapa final da produção de glicose no fígado.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Atua no primeiro desvio, de piruvato para oxaloacetato.",
      "B": "[CORRETA] A **Glicose-6-Fosfatase** remove o fosfato, transformando G6P em glicose livre.",
      "C": "[INCORRETA] Atua no desvio do oxaloacetato para PEP.",
      "D": "[INCORRETA] Atua no desvio da PFK-1."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3198,
    "materia": "pmh",
    "aula_id": "pmh_a3",
    "tema": "pmh_a3",
    "modulo": 1,
    "dificuldade": 2,
    "correta": 0,
    "enunciado": "Um paciente pediátrico apresenta episódios de hipoglicemia grave e aumento do tamanho do fígado (hepatomegalia) após algumas horas sem comer. O médico suspeita de uma deficiência enzimática na via da gliconeogênese. Se a enzima Frutose-1,6-bisfosfatase estiver ausente, qual metabólito se acumulará no citosol?",
    "opcoes": [
      "A) Frutose-1,6-bisfosfato.",
      "B) Glicose-6-fosfato.",
      "C) Piruvato.",
      "D) Frutose-6-fosfato."
    ],
    "explicacao_geral": "Falhas enzimáticas causam o acúmulo dos reagentes da etapa que não consegue ser processada.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] Sem a bisfosfatase, a **Frutose-1,6-bisfosfato** não pode ser convertida em Frutose-6-fosfato, interrompendo a síntese de glicose.",
      "B": "[INCORRETA] Este está 'abaixo' na via da gliconeogênese em relação à falha.",
      "C": "[INCORRETA] O piruvato converte-se em outros precursores, mas o bloqueio direto é na frutose.",
      "D": "[INCORRETA] Este seria o produto da reação que não ocorre."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 3199,
    "materia": "pmh",
    "aula_id": "pmh_a3",
    "tema": "pmh_a3",
    "modulo": 1,
    "dificuldade": 2,
    "correta": 3,
    "enunciado": "Certas células do corpo humano dependem EXCLUSIVAMENTE da glicólise anaeróbia para sua energia, pois não possuem mitocôndrias. Quais são essas células?",
    "opcoes": [
      "A) Neurônios.",
      "B) Hepatócitos.",
      "C) Miócitos cardíacos.",
      "D) Hemácias maduras (Eritrócitos)."
    ],
    "explicacao_geral": "A ausência de organelas oxidativas limita o tipo de metabolismo energético disponível.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Neurônios são altamente dependentes de oxigênio e mitocôndrias.",
      "B": "[INCORRETA] Hepatócitos possuem muitas mitocôndrias para o metabolismo oxidativo.",
      "C": "[INCORRETA] O coração é o músculo com maior densidade mitocondrial para evitar fadiga.",
      "D": "[CORRETA] As **hemácias** perdem as mitocôndrias na maturação, dependendo apenas da glicólise anaeróbia."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3200,
    "materia": "pmh",
    "aula_id": "pmh_a3",
    "tema": "pmh_a3",
    "modulo": 1,
    "dificuldade": 3,
    "correta": 1,
    "enunciado": "A biotina (Vitamina B7) é um cofator indispensável para enzimas que realizam reações de carboxilação. Qual enzima da gliconeogênese requer biotina para transformar piruvato em oxaloacetato?",
    "opcoes": [
      "A) Enolase.",
      "B) Piruvato Carboxilase.",
      "C) Glicocinase.",
      "D) Lactato Desidrogenase."
    ],
    "explicacao_geral": "Enzimas carboxilases utilizam ATP, CO2 e biotina para adicionar um grupo carbono à molécula de substrato.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Enolase desidrata o 2-fosfoglicerato.",
      "B": "[CORRETA] A **Piruvato Carboxilase** é a primeira enzima do desvio da gliconeogênese mitocondrial e depende de biotina.",
      "C": "[INCORRETA] A glicocinase fosforila a glicose.",
      "D": "[INCORRETA] Esta enzima realiza reações de oxirredução, não carboxilação."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  }
];

const data = JSON.parse(fs.readFileSync(QUESTOES_PATH, 'utf-8'));
data.questoes = data.questoes.concat(novasQuestoes);
fs.writeFileSync(QUESTOES_PATH, JSON.stringify(data, null, 2), 'utf-8');
console.log(`Sucesso: 8 questões da aula pmh_a3 adicionadas.`);
