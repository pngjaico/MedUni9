import fs from 'fs';
import path from 'path';

const QUESTOES_PATH = 'data/questoes.json';

const novasQuestoes = [
  {
    "id": 3257,
    "materia": "pmh",
    "aula_id": "pmh_a11",
    "tema": "pmh_a11",
    "modulo": 1,
    "dificuldade": 1,
    "correta": 1,
    "enunciado": "A Fenilcetonúria (PKU) é o erro inato do metabolismo de aminoácidos mais conhecido e testado no teste do pezinho. Qual a conduta dietética principal para evitar o dano neurológico nestes pacientes?",
    "opcoes": [
      "A) Dieta rica em proteínas de origem animal.",
      "B) Dieta com restrição rigorosa de Fenilalanina.",
      "C) Eliminação total de carboidratos da dieta.",
      "D) Suplementação massiva de Vitamina D."
    ],
    "explicacao_geral": "Sem a enzima fenilalanina hidroxilase, o aminoácido acumula-se e torna-se neurotóxico.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Proteínas animais são ricas em fenilalanina, o que agravaria o quadro.",
      "B": "[CORRETA] A **restrição de Fenilalanina** é o tratamento padrão para prevenir a deficiência intelectual.",
      "C": "[INCORRETA] Carboidratos não interferem diretamente na via da fenilalanina.",
      "D": "[INCORRETA] Não é o tratamento para PKU."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3258,
    "materia": "pmh",
    "aula_id": "pmh_a11",
    "tema": "pmh_a11",
    "modulo": 1,
    "dificuldade": 2,
    "correta": 3,
    "enunciado": "A creatinina plasmática é um marcador clínico de função renal. De qual aminoácido a creatina, precursora da creatinina, é primariamente sintetizada?",
    "opcoes": [
      "A) Alanina e Valina.",
      "B) Leucina e Isoleucina.",
      "C) Lisina e Histidina.",
      "D) Arginina, Glicina e Metionina."
    ],
    "explicacao_geral": "A síntese da creatina envolve a transferência de grupos nitrogenados e metilas entre esses três aminoácidos.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Alanina é importante na gliconeogênese.",
      "B": "[INCORRETA] São aminoácidos de cadeia ramificada.",
      "C": "[INCORRETA] Aminoácidos básicos, mas não formadores de creatina.",
      "D": "[CORRETA] A **Arginina e a Glicina** formam a base da creatina, com a **Metionina** doando o grupo metila."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3259,
    "materia": "pmh",
    "aula_id": "pmh_a11",
    "tema": "pmh_a11",
    "modulo": 1,
    "dificuldade": 2,
    "correta": 0,
    "enunciado": "Um paciente de 25 anos queixa-se de dores articulares e percebe que sua urina escurece rapidamente quando deixada em contato com o ar. O médico diagnostica Alcaptonúria. Qual metabólito acumulado causa o escurecimento da urina?",
    "opcoes": [
      "A) Ácido Homogentísico.",
      "B) Ácido Úrico.",
      "C) Bilirrubina Direta.",
      "D) Lactato."
    ],
    "explicacao_geral": "A oxidação do ácido homogentísico gera um pigmento negro que se deposita nos tecidos e na urina.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] O acúmulo de **Ácido Homogentísico** é a marca da Alcaptonúria.",
      "B": "[INCORRETA] Causa gota, mas não escurece a urina ao ar.",
      "C": "[INCORRETA] Deixa a urina cor de 'coca-cola' (colúria) no paciente com icterícia, mas já sai escura do corpo.",
      "D": "[INCORRETA] Incolor."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 3260,
    "materia": "pmh",
    "aula_id": "pmh_a11",
    "tema": "pmh_a11",
    "modulo": 1,
    "dificuldade": 2,
    "correta": 2,
    "enunciado": "A Tirosina é um aminoácido precursor de várias moléculas sinalizadoras importantes. Qual destas opções NÃO é sintetizada diretamente a partir da Tirosina?),",
    "opcoes": [
      "A) Dopamina.",
      "B) Melanina (pigmento da pele).",
      "C) Serotonina.",
      "D) Hormônios Tireoidianos (T3 e T4)."
    ],
    "explicacao_geral": "Embora a tirosina seja versátil, alguns neurotransmissores vêm de outros precursores.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Dopamina, noradrenalina e adrenalina vêm da tirosina.",
      "B": "[INCORRETA] A melanina é o produto final da oxidação da tirosina.",
      "C": "[CORRETA] A **Serotonina** é sintetizada a partir do **Triptofano**, não da tirosina.",
      "D": "[INCORRETA] T3 e T4 são produzidos pela iodação de resíduos de tirosina."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3261,
    "materia": "pmh",
    "aula_id": "pmh_a11",
    "tema": "pmh_a11",
    "modulo": 1,
    "dificuldade": 3,
    "correta": 1,
    "enunciado": "A 'Balança Nitrogenada' é o cálculo da diferença entre o nitrogênio ingerido e o excretado. Qual condição clínica está associada a uma Balança Nitrogenada NEGATIVA?",
    "opcoes": [
      "A) Gravidez e crescimento na infância.",
      "B) Estados catabólicos graves (Ex: queimaduras extensas, sepse).",
      "C) Dieta hiperproteica em atleta de musculação.",
      "D) Recuperação pós-cirúrgica bem-sucedida."
    ],
    "explicacao_geral": "Balanço negativo significa que o corpo está perdendo proteína (músculo/tecidos) mais rápido do que repõe.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Nestes casos o balanço é positivo (retenção para construir tecidos).",
      "B": "[CORRETA] No **catabolismo**, a excreção de ureia aumenta, superando a ingestão (**balanço negativo**).",
      "C": "[INCORRETA] Tende ao balanço positivo.",
      "D": "[INCORRETA] Fase de anabolismo reparador (balanço positivo)."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3262,
    "materia": "pmh",
    "aula_id": "pmh_a11",
    "tema": "pmh_a11",
    "modulo": 1,
    "dificuldade": 2,
    "correta": 3,
    "enunciado": "O Albinismo é causado pela ausência da enzima tirosinase. Qual o efeito bioquímico direto dessa falta?",
    "opcoes": [
      "A) Incapacidade de sentir dor.",
      "B) Produção excessiva de adrenalina.",
      "C) Acúmulo de glicose no sangue.",
      "D) Falha na conversão de Tirosina em Melanina."
    ],
    "explicacao_geral": "A tirosinase catalisa a etapa limitante da síntese de pigmento nos melanócitos.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Sem relação com a nocicepção.",
      "B": "[INCORRETA] A via das catecolaminas é distinta da via da melanina nos tecidos periféricos.",
      "C": "[INCORRETA] Sem relação com carboidratos.",
      "D": "[CORRETA] A **falta de melanina** causa a hipopigmentação característica do albinismo."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3263,
    "materia": "pmh",
    "aula_id": "pmh_a11",
    "tema": "pmh_a11",
    "modulo": 1,
    "dificuldade": 3,
    "correta": 0,
    "enunciado": "Por que o odor da urina de um paciente com Fenilcetonúria (PKU) não tratada é descrito como 'odor de camundongo' ou 'odor de mofo'?),",
    "opcoes": [
      "A) Devido ao acúmulo de metabólitos alternativos como o fenilacetato e fenilpiruvato excretados na urina.",
      "B) Porque o paciente ingere apenas comida estragada.",
      "C) Por causa do excesso de açúcar que fermenta na bexiga.",
      "D) Devido à presença de sangue oculto na urina."
    ],
    "explicacao_geral": "Quando a via principal está bloqueada, o excesso de substrato é desviado para rotas secundárias que geram subprodutos voláteis.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] O **odor característico** vem dos **fenilcetoácidos** excretados.",
      "B": "[INCORRETA] O odor é metabólico inato.",
      "C": "[INCORRETA] Descrição de urina com cheiro adocicado (diabetes).",
      "D": "[INCORRETA] Hematúria não tem este odor característico."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 3264,
    "materia": "pmh",
    "aula_id": "pmh_a11",
    "tema": "pmh_a11",
    "modulo": 1,
    "dificuldade": 2,
    "correta": 0,
    "enunciado": "A Histamina é um mediador fundamental na resposta alérgica e na secreção ácida gástrica. De qual aminoácido a Histamina é derivada?",
    "opcoes": [
      "A) Histidina.",
      "B) Glutamato.",
      "C) Arginina.",
      "D) Lisina."
    ],
    "explicacao_geral": "A descarboxilação da histidina produz a histamina.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] A **Histidina** sofre descarboxilação para se tornar **Histamina**.",
      "B": "[INCORRETA] O glutamato gera o GABA.",
      "C": "[INCORRETA] A arginina gera o Óxido Nítrico (NO).",
      "D": "[INCORRETA] Aminoácido estrutural essencial."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  }
];

const data = JSON.parse(fs.readFileSync(QUESTOES_PATH, 'utf-8'));
data.questoes = data.questoes.concat(novasQuestoes);
fs.writeFileSync(QUESTOES_PATH, JSON.stringify(data, null, 2), 'utf-8');
console.log(`Sucesso: 8 questões da aula pmh_a11 adicionadas.`);
