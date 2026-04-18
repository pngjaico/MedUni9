import fs from 'fs';
import path from 'path';

const QUESTOES_PATH = 'data/questoes.json';

const novasQuestoes = [
  {
    "id": 3265,
    "materia": "pmh",
    "aula_id": "pmh_a12",
    "tema": "pmh_a12",
    "modulo": 1,
    "dificuldade": 1,
    "correta": 2,
    "enunciado": "Qual o produto final da degradação das purinas (Adenina e Guanina) no organismo humano, que quando acumulado pode causar crises de dor articular?),",
    "opcoes": [
      "A) Ureia.",
      "B) Amônia.",
      "C) Ácido Úrico.",
      "D) Lactato."
    ],
    "explicacao_geral": "Diferente de outros animais, humanos não possuem a enzima uricase para degradar o ácido úrico em alantoína.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Produto do metabolismo de aminoácidos.",
      "B": "[INCORRETA] Intermediário tóxico do nitrogênio.",
      "C": "[CORRETA] O **Ácido Úrico** é o resíduo final das purinas e causa a Gota.",
      "D": "[INCORRETA] Produto da glicólise anaeróbia."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3266,
    "materia": "pmh",
    "aula_id": "pmh_a12",
    "tema": "pmh_a12",
    "modulo": 1,
    "dificuldade": 2,
    "correta": 0,
    "enunciado": "O Alopurinol é um medicamento utilizado no tratamento crônico da Gota. Qual o seu mecanismo de ação bioquímico?",
    "opcoes": [
      "A) Inibição da enzima Xantina Oxidase.",
      "B) Aumento da excreção renal de ureia.",
      "C) Bloqueio da absorção intestinal de proteínas.",
      "D) Quebra direta dos cristais de urato nas articulações."
    ],
    "explicacao_geral": "Ao inibir a xantina oxidase, o fármaco reduz a produção de ácido úrico a partir de hipoxantina e xantina.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] O **Alopurinol** atua inibindo a **Xantina Oxidase**, reduzindo a uricemia.",
      "B": "[INCORRETA] Não afeta a ureia.",
      "C": "[INCORRETA] Não interfere na absorção de nutrientes.",
      "D": "[INCORRETA] Ele previne a formação de novos cristais, mas não dissolve cristais antigos de forma direta e rápida."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3267,
    "materia": "pmh",
    "aula_id": "pmh_a12",
    "tema": "pmh_a12",
    "modulo": 1,
    "dificuldade": 3,
    "correta": 1,
    "enunciado": "Um paciente submetido à quimioterapia para leucemia apresenta a 'Síndrome de Lise Tumoral', com aumento súbito e maciço de ácido úrico no sangue. Por que a destruição das células cancerosas causa esse aumento?",
    "opcoes": [
      "A) Devido ao excesso de gordura nas células tumorais.",
      "B) Pela liberação massiva de ácidos nucleicos (DNA/RNA) que são degradados em purinas.",
      "C) Porque o tumor produz insulina em excesso.",
      "D) Por causa da falência hepática imediata."
    ],
    "explicacao_geral": "A degradação do DNA celular libera grandes quantidades de bases nitrogenadas que entram na via catabólica.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Gorduras não geram ácido úrico.",
      "B": "[CORRETA] A quebra dos **ácidos nucleicos** libera **purinas** que são convertidas em ácido úrico.",
      "C": "[INCORRETA] Insulina regula glicose.",
      "D": "[INCORRETA] É um fenômeno de sobrecarga metabólica, não necessariamente falência de órgão inicial."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 3268,
    "materia": "pmh",
    "aula_id": "pmh_a12",
    "tema": "pmh_a12",
    "modulo": 1,
    "dificuldade": 2,
    "correta": 3,
    "enunciado": "A síntese de novo de purinas exige o investimento de vários aminoácidos para a construção do anel purínico. Qual destas moléculas é a doadora da maior parte do esqueleto carbonado e nitrogenado inicial?),",
    "opcoes": [
      "A) Alanina.",
      "B) Prolina.",
      "C) Arginina.",
      "D) Glutamina, Glicina e Aspartato."
    ],
    "explicacao_geral": "Diferentes moléculas doam átomos específicos para o fecho dos anéis de adenina e guanina.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Não participa da síntese de purinas.",
      "B": "[INCORRETA] Aminoácido estrutural.",
      "C": "[INCORRETA] Participa do ciclo da ureia.",
      "D": "[CORRETA] **Glutamina, Glicina e Aspartato** são os principais contribuintes para o anel das purinas."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3269,
    "materia": "pmh",
    "aula_id": "pmh_a12",
    "tema": "pmh_a12",
    "modulo": 1,
    "dificuldade": 2,
    "correta": 0,
    "enunciado": "A 'Via de Salvação' de purinas é essencial para reciclar bases nitrogenadas e economizar energia. Qual a consequência clínica da ausência da enzima HGPRT, principal enzima desta via?",
    "opcoes": [
      "A) Síndrome de Lesch-Nyhan (Automutilação e hiperuricemia grave).",
      "B) Diabetes Mellitus Tipo 1.",
      "C) Doença de Alzheimer Precoce.",
      "D) Escorbuto."
    ],
    "explicacao_geral": "Sem a reciclagem, as purinas são todas degradadas em ácido úrico, causando níveis altíssimos e danos neurológicos.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] A **Síndrome de Lesch-Nyhan** é o quadro clássico da falha na via de salvação.",
      "B": "[INCORRETA] Patologia do metabolismo de carboidratos.",
      "C": "[INCORRETA] Doença neurodegenerativa proteica.",
      "D": "[INCORRETA] Deficiência de Vitamina C."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3270,
    "materia": "pmh",
    "aula_id": "pmh_a12",
    "tema": "pmh_a12",
    "modulo": 1,
    "dificuldade": 3,
    "correta": 1,
    "enunciado": "Medicamentos antifolatos, como o Metotrexato, são usados em oncologia e doenças autoimunes. Por que a deficiência de folato impede a síntese de DNA?),",
    "opcoes": [
      "A) Porque o folato é necessário para quebrar a glicose.",
      "B) Porque derivados do folato (THF) doam carbonos essenciais para a formação do anel de purinas e timina.",
      "C) Porque o folato destrói as mitocôndrias celular.",
      "D) Porque o folato é um transportador de oxigênio."
    ],
    "explicacao_geral": "O ciclo do folato fornece unidades de um carbono para a construção dos blocos fundamentais dos ácidos nucleicos.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Não está envolvido na glicólise.",
      "B": "[CORRETA] O **Tetraidrofolato (THF)** é indispensável para a síntese de nucleotídeos.",
      "C": "[INCORRETA] O folato é necessário para a vida celular, não é um agente destruidor.",
      "D": "[INCORRETA] Função da hemoglobina."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3271,
    "materia": "pmh",
    "aula_id": "pmh_a12",
    "tema": "pmh_a12",
    "modulo": 1,
    "dificuldade": 2,
    "correta": 2,
    "enunciado": "Um homem de 55 anos apresenta dor intensa, vermelhidão e inchaço no hálux (dedo grande do pé) após um churrasco regado a carne vermelha e cerveja. O aspirado do líquido sinovial mostra cristais em formato de agulha com birrefringência negativa. Qual o diagnóstico e o tratamento preventivo de escolha?",
    "opcoes": [
      "A) Artrite Reumatoide; Corticoide.",
      "B) Artrite Séptica; Antibiótico.",
      "C) Gota; Alopurinol e dieta pobre em purinas.",
      "D) Osteoartrose; Fisioterapia."
    ],
    "explicacao_geral": "A 'podagra' (ataque no hálux) é a apresentação mais clássica da gota.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Artrite reumatoide costuma ser simétrica e em mãos, sem cristais de urato.",
      "B": "[INCORRETA] Artrite séptica apresenta febre alta e pus, cristais não seriam o achado principal.",
      "C": "[CORRETA] O quadro é típico de **Gota** por excesso de **ácido úrico**.",
      "D": "[INCORRETA] Doença degenerativa de cartilagem, sem relação aguda com purinas."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 3272,
    "materia": "pmh",
    "aula_id": "pmh_a12",
    "tema": "pmh_a12",
    "modulo": 1,
    "dificuldade": 2,
    "correta": 3,
    "enunciado": "Qual molécula atua como o 'andaime' ou ativador inicial sobre o qual os nucleotídeos de purina e pirimidina são construídos?),",
    "opcoes": [
      "A) Glicose-6-Fosfato.",
      "B) Acetil-CoA.",
      "C) Ácido graxo de 16 carbonos.",
      "D) PRPP (Fosforribosil pirofosfato)."
    ],
    "explicacao_geral": "O PRPP é derivado da via das pentoses-fosfato e fornece a base de ribose necessária.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Precursor da via, mas não o andaime direto.",
      "B": "[INCORRETA] Precursor energético.",
      "C": "[INCORRETA] Lipídio.",
      "D": "[CORRETA] O **PRPP** é a molécula central que 'liga' a via de síntese de nucleotídeos."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  }
];

const data = JSON.parse(fs.readFileSync(QUESTOES_PATH, 'utf-8'));
data.questoes = data.questoes.concat(novasQuestoes);
fs.writeFileSync(QUESTOES_PATH, JSON.stringify(data, null, 2), 'utf-8');
console.log(`Sucesso: 8 questões da aula pmh_a12 adicionadas.`);
