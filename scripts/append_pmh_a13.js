import fs from 'fs';
import path from 'path';

const QUESTOES_PATH = 'data/questoes.json';

const novasQuestoes = [
  {
    "id": 3273,
    "materia": "pmh",
    "aula_id": "pmh_a13",
    "tema": "pmh_a13",
    "modulo": 1,
    "dificuldade": 1,
    "correta": 1,
    "enunciado": "O fígado é considerado o centro metabólico do corpo humano. Qual das tarefas abaixo é uma exclusividade hepática essencial para a manutenção da glicemia de jejum?",
    "opcoes": [
      "A) Quebra de glicose para produzir piruvato.",
      "B) Produção e exportação de glicose livre para o sangue (Gliconeogênese e Glicogenólise).",
      "C) Síntese de proteínas musculares.",
      "D) Armazenamento de oxigênio."
    ],
    "explicacao_geral": "Diferente de outros tecidos, o fígado possui a enzima Glicose-6-fosfatase.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Ocorre em praticamente todas as células.",
      "B": "[CORRETA] O **fígado** mantém o cérebro e outros órgãos vivos através da **liberação de glicose**.",
      "C": "[INCORRETA] Ocorre nos miócitos.",
      "D": "[INCORRETA] Oxigênio não é 'armazenado' no fígado desta forma."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3274,
    "materia": "pmh",
    "aula_id": "pmh_a13",
    "tema": "pmh_a13",
    "modulo": 1,
    "dificuldade": 2,
    "correta": 1,
    "enunciado": "O 'Ciclo de Cori' descreve a cooperação metabólica entre o músculo e o fígado. Qual o fluxo de metabólitos neste ciclo?",
    "opcoes": [
      "A) Glicose do músculo vai para o fígado; Amônia do fígado vai para o músculo.",
      "B) Lactato do músculo vai para o fígado; Glicose do fígado vai para o músculo.",
      "C) Ácidos graxos do fígado vão para o músculo; CO2 do músculo vai para o fígado.",
      "D) Insulina do músculo vai para o fígado; Glucagon do fígado vai para o músculo."
    ],
    "explicacao_geral": "Este ciclo permite reciclar o lactato produzido pelo músculo em atividade intensa.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Inverso do real.",
      "B": "[CORRETA] O **Ciclo de Cori** envolve o envio de **lactato** para ser reconvertido em **glicose** no fígado.",
      "C": "[INCORRETA] Não define o Ciclo de Cori.",
      "D": "[INCORRETA] Hormônios são produzidos no pâncreas."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3275,
    "materia": "pmh",
    "aula_id": "pmh_a13",
    "tema": "pmh_a13",
    "modulo": 1,
    "dificuldade": 2,
    "correta": 3,
    "enunciado": "O músculo cardíaco apresenta uma característica metabólica marcante que o diferencia do músculo esquelético. Qual o seu combustível PREFERENCIAL em condições normais?),",
    "opcoes": [
      "A) Apenas glicose.",
      "B) Apenas corpos cetônicos.",
      "C) Creatina fosfato pura.",
      "D) Ácidos graxos."
    ],
    "explicacao_geral": "O coração é um órgão altamente aeróbio e otimizado para queimar gordura visando a produção constante de ATP.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Usa glicose apenas em menor escala ou situações específicas.",
      "B": "[INCORRETA] Pode usá-los no jejum, mas não é o preferencial basal.",
      "C": "[INCORRETA] É uma reserva de emergência para segundos.",
      "D": "[CORRETA] O **miocárdio** obtém ~70% de sua energia da **beta-oxidação de ácidos graxos**."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3276,
    "materia": "pmh",
    "aula_id": "pmh_a13",
    "tema": "pmh_a13",
    "modulo": 1,
    "dificuldade": 2,
    "correta": 0,
    "enunciado": "O cérebro é muito exigente quanto ao seu suprimento energético. Embora prefira glicose, qual combustível ele pode utilizar como adaptação vital após 2 a 3 dias de jejum prolongado?),",
    "opcoes": [
      "A) Corpos Cetônicos.",
      "B) Ácidos Graxos de cadeia longa.",
      "C) Nitrogênio gasoso.",
      "D) Vitaminas do complexo B."
    ],
    "explicacao_geral": "Corpos cetônicos cruzam a barreira hematoencefálica, enquanto os ácidos graxos não.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] O uso de **corpos cetônicos** pelo cérebro poupa as proteínas musculares no jejum longo.",
      "B": "[INCORRETA] Ácidos graxos não cruzam a barreira hematoencefálica de forma eficiente para gerar energia significante.",
      "C": "[INCORRETA] Absurdo biológico.",
      "D": "[INCORRETA] São cofatores, não combustíveis."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3277,
    "materia": "pmh",
    "aula_id": "pmh_a13",
    "tema": "pmh_a13",
    "modulo": 1,
    "dificuldade": 3,
    "correta": 2,
    "enunciado": "O 'Ciclo da Alanina' (ou Ciclo de Cahill) é semelhante ao Ciclo de Cori, mas transporta nitrogênio do músculo para o fígado. Por que isso é importante do ponto de vista da integração de órgãos?),",
    "opcoes": [
      "A) Para o músculo produzir ureia sozinho.",
      "B) Para transformar gordura em açúcar.",
      "C) Para permitir que o fígado neutralize a amônia vinda do catabolismo proteico muscular enquanto produz glicose.",
      "D) Para aumentar a produção de hormônio do crescimento."
    ],
    "explicacao_geral": "A alanina carrega o grupo amina com segurança pelo sangue até o sistema de desintoxicação hepático.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] O ciclo da ureia ocorre no fígado.",
      "B": "[INCORRETA] Animais não convertem Acetil-CoA em glicose.",
      "C": "[CORRETA] O **Ciclo da Alanina** integra a **proteólise muscular** com a **desintoxicação de amônia** e **gliconeogênese** hepáticas.",
      "D": "[INCORRETA] Sem relação mecanística direta."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3278,
    "materia": "pmh",
    "aula_id": "pmh_a13",
    "tema": "pmh_a13",
    "modulo": 1,
    "dificuldade": 2,
    "correta": 1,
    "enunciado": "Um indivíduo realiza uma corrida moderada por 40 minutos. Qual a principal fonte energética que mantém a contração muscular após os primeiros 20 minutos de exercício constante?),",
    "opcoes": [
      "A) ATP e Fosfocreatina estocados.",
      "B) Oxidação de ácidos graxos vindos do tecido adiposo.",
      "C) Glicólise anaeróbia massiva.",
      "D) Consumo de proteínas estruturais do coração."
    ],
    "explicacao_geral": "Em exercícios de resistência, o corpo 'troca' para a gordura visando poupar glicogênio.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Duram apenas os primeiros segundos/minutos.",
      "B": "[CORRETA] No exercício aeróbio prolongado, a **lipólise** e a **beta-oxidação** tornam-se prevalentes.",
      "C": "[INCORRETA] A glicólise anaeróbia é predominante em sprints de curtíssima duração.",
      "D": "[INCORRETA] O corpo protege o coração ao máximo."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 3279,
    "materia": "pmh",
    "aula_id": "pmh_a13",
    "tema": "pmh_a13",
    "modulo": 1,
    "dificuldade": 2,
    "correta": 0,
    "enunciado": "O tecido adiposo não é apenas um local de estoque; ele secreta hormônios e moléculas reguladoras. Qual enzima o tecido adiposo libera para 'capturar' triglicerídeos das lipoproteínas circulantes sob estímulo da insulina?),",
    "opcoes": [
      "A) Lipoproteína Lipase (LPL).",
      "B) Lipase Sensível a Hormônio (HSL).",
      "C) Glicocinase.",
      "D) Arginase."
    ],
    "explicacao_geral": "A LPL degrada os TGs das VLDLs e quilomícrons para que os ácidos graxos entrem no adipócito.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] A **LPL** é estimulada pela **insulina** no tecido adiposo para promover a engorda (estocagem).",
      "B": "[INCORRETA] A HSL é inibida pela insulina, pois ela serve para a quebra (emagrecimento).",
      "C": "[INCORRETA] Enzima hepática/pancreática.",
      "D": "[INCORRETA] Enzima do ciclo da ureia."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3280,
    "materia": "pmh",
    "aula_id": "pmh_a13",
    "tema": "pmh_a13",
    "modulo": 1,
    "dificuldade": 3,
    "correta": 2,
    "enunciado": "Durante um trauma grave ou sepse, o corpo entra em um estado de 'hipermetabolismo'. Qual o padrão hormonal dominante e o efeito no tecido muscular?),",
    "opcoes": [
      "A) Predomínio de Insulina; Aumento da síntese proteica.",
      "B) Predomínio de Acetilcolina; Paralisia muscular.",
      "C) Predomínio de Cortisol e Adrenalina; Degradação massiva de proteínas para gliconeogênese.",
      "D) Ausência total de hormônios."
    ],
    "explicacao_geral": "O estresse libera hormônios contrarreguladores que mobilizam substratos de forma agressiva (catabolismo).",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Ocorre resistência à insulina no estresse.",
      "B": "[INCORRETA] Neurotransmissor da contração, não define o metabolismo sistêmico da sepse.",
      "C": "[CORRETA] O **catabolismo** proteico induzido por **cortisol** visa fornecer aminoácidos para o fígado.",
      "D": "[INCORRETA] Impossível em paciente vivo."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  }
];

const data = JSON.parse(fs.readFileSync(QUESTOES_PATH, 'utf-8'));
data.questoes = data.questoes.concat(novasQuestoes);
fs.writeFileSync(QUESTOES_PATH, JSON.stringify(data, null, 2), 'utf-8');
console.log(`Sucesso: 8 questões da aula pmh_a13 adicionadas.`);
