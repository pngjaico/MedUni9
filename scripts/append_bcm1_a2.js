import fs from 'fs';
import path from 'path';

const QUESTOES_PATH = 'data/questoes.json';

const novasQuestoes = [
  {
    "id": 3441,
    "materia": "bcm1",
    "aula_id": "bcm1_a2",
    "tema": "bcm1_a2",
    "modulo": 2,
    "dificuldade": 1,
    "correta": 3,
    "enunciado": "A molécula de água é considerada um dipolo elétrico. Qual é a consequência direta dessa polaridade para o funcionamento celular?),",
    "opcoes": [
      "A) Garante que a água seja um gás em temperatura ambiente.",
      "B) Impede que a água participe de reações químicas.",
      "C) Faz da água uma molécula repelente de qualquer outra substância.",
      "D) Permite que a água seja o 'solvente universal', dissolvendo íons e moléculas polares essenciais ao metabolismo."
    ],
    "explicacao_geral": "A polaridade permite a formação de pontes de hidrogênio e a interação com solutos carregados.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] A polaridade permite que ela seja líquida na faixa biológica.",
      "B": "[INCORRETA] A água é reagente em hidrólise e produto em desidratação.",
      "C": "[INCORRETA] Ela atrai substâncias hidrofílicas.",
      "D": "[CORRETA] A **polaridade** define a capacidade da água como **solvente biológico** principal."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3442,
    "materia": "bcm1",
    "aula_id": "bcm1_a2",
    "tema": "bcm1_a2",
    "modulo": 2,
    "dificuldade": 1,
    "correta": 0,
    "enunciado": "Qual a proporção aproximada de água no corpo humano adulto e onde se localiza a maior parte desse volume?),",
    "opcoes": [
      "A) Cerca de 60-70% do peso corporal, com a maior parte no meio intracelular (dentro das células).",
      "B) Cerca de 10% do peso corporal, apenas no sangue.",
      "C) Cerca de 95% do peso corporal, todo no meio extracelular.",
      "D) A proporção de água não importa para a vida humana."
    ],
    "explicacao_geral": "O compartimento intracelular é o maior reservatório hídrico do organismo.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] A **água intracelular** representa cerca de **2/3 do total** hídrico do corpo.",
      "B": "[INCORRETA] Valor muito baixo.",
      "C": "[INCORRETA] Valor alto demais e distribuição invertida.",
      "D": "[INCORRETA] A homeostase hídrica é vital."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3443,
    "materia": "bcm1",
    "aula_id": "bcm1_a2",
    "tema": "bcm1_a2",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 1,
    "enunciado": "A propriedade da água que permite que pequenos insetos caminhem sobre ela sem afundar é a:),",
    "opcoes": [
      "A) Baixa densidade do gelo.",
      "B) Tensão Superficial (gerada pela coesão entre moléculas de água).",
      "C) Alta viscosidade.",
      "D) Capacidade de ebulição."
    ],
    "explicacao_geral": "As pontes de hidrogênio na interface ar-água criam uma 'película' resistente.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Refere-se à flutuação de sólidos.",
      "B": "[CORRETA] A **tensão superficial** é crucial em fenômenos como a mecânica pulmonar (surfactante).",
      "C": "[INCORRETA] A água tem baixa viscosidade.",
      "D": "[INCORRETA] Refere-se à mudança de estado físico."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3444,
    "materia": "bcm1",
    "aula_id": "bcm1_a2",
    "tema": "bcm1_a2",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 2,
    "enunciado": "Os sais minerais desempenham funções vitais. Qual íon é fundamental para a contração muscular e liberação de neurotransmissores nas sinapses?),",
    "opcoes": [
      "A) Cloreto (Cl-).",
      "B) Ferro (Fe++).",
      "C) Cálcio (Ca++).",
      "D) Boro (B)."
    ],
    "explicacao_geral": "O cálcio atua como segundo mensageiro intracelular em processos de ativação celular.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Principal ânion do meio extracelular.",
      "B": "[INCORRETA] Fundamental para o transporte de gases na hemoglobina.",
      "C": "[CORRETA] O **Cálcio** é o íon motor da **exocitose** e **contração**.",
      "D": "[INCORRETA] Micronutriente com funções vegetais principais."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3445,
    "materia": "bcm1",
    "aula_id": "bcm1_a2",
    "tema": "bcm1_a2",
    "modulo": 2,
    "dificuldade": 3,
    "correta": 1,
    "enunciado": "Um paciente apresenta vômitos persistentes e prolongados, perdendo grande quantidade de suco gástrico (ácido clorídrico). Qual alteração no pH sanguíneo e qual sistema tampão será acionado para tentar compensar a perda?),",
    "opcoes": [
      "A) Acidose metabólica; Tampão Amônia.",
      "B) Alcalose metabólica; Tampão Bicarbonato/Ácido Carbônico.",
      "C) O pH não muda nunca.",
      "D) Acidose respiratória; Tampão Proteico apenas."
    ],
    "explicacao_geral": "A perda de H+ pelo vômito aumenta a concentração relativa de bases no sangue.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] A perda de ácido gera alcalose, não acidose.",
      "B": "[CORRETA] O **vômito** gera **alcalose**; o **sistema bicarbonato** é o principal tampão plasmático.",
      "C": "[INCORRETA] O pH corporal deve ser mantido na faixa estreita de 7,35 a 7,45.",
      "D": "[INCORRETA] Alterações por vômito são metabólicas, não respiratórias primárias."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 3446,
    "materia": "bcm1",
    "aula_id": "bcm1_a2",
    "tema": "bcm1_a2",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 0,
    "enunciado": "Qual a importância do Ferro (Fe) para o organismo humano e qual a consequência clínica de sua deficiência?),",
    "opcoes": [
      "A) Composição da Hemoglobina (transporte de oxigênio); Anemia Ferropriva.",
      "B) Manutenção dos dentes fortes; Cárie dentária.",
      "C) Formação do DNA; Alteração genética.",
      "D) Funcionamento do ouvido; Surdez."
    ],
    "explicacao_geral": "O ferro faz parte do grupo heme das proteínas transportadoras de gases.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] O **ferro** é central para a hematologia e **oxigenação tecidual**.",
      "B": "[INCORRETA] Papel do flúor e cálcio.",
      "C": "[INCORRETA] Papel do fósforo nos nucleotídeos.",
      "D": "[INCORRETA] Sem correlação direta."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 3447,
    "materia": "bcm1",
    "aula_id": "bcm1_a2",
    "tema": "bcm1_a2",
    "modulo": 2,
    "dificuldade": 3,
    "correta": 2,
    "enunciado": "A 'Bomba de Sódio e Potássio' é um mecanismo que utiliza ATP para manter gradientes iônicos desiguais entre os meios celular e extracelular. Onde há MAIOR concentração de cada íon no estado fisiológico normal?),",
    "opcoes": [
      "A) Mais Na+ dentro e mais K+ fora.",
      "B) Pouco Na+ fora e pouco K+ fora.",
      "C) Mais Sódio (Na+) fora da célula e mais Potássio (K+) dentro da célula.",
      "D) Quantidades iguais dentro e fora."
    ],
    "explicacao_geral": "A manutenção desse gradiente é essencial para o potencial de membrana e excitabilidade celular.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Configuração invertida.",
      "B": "[INCORRETA] Os íons são abundantes no organismo.",
      "C": "[CORRETA] **Sódio é extra, Potássio é intra**. Lembrar da 'Banana salgada'.",
      "D": "[INCORRETA] A igualdade significaria morte celular por perda de gradiente."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3448,
    "materia": "bcm1",
    "aula_id": "bcm1_a2",
    "tema": "bcm1_a2",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 3,
    "enunciado": "Um atleta corre uma maratona sob sol forte sem beber água adequadamente (Desidratação). Qual fenômeno físico-químico ocorre com suas células sanguíneas ao ficarem em um meio extracelular hipertônico (muita concentração de sais)?),",
    "opcoes": [
      "A) Hemólise (estouro da célula).",
      "B) As células dobram de tamanho.",
      "C) Nada acontece.",
      "D) Crenação (murcham devido à saída de água por osmose)."
    ],
    "explicacao_geral": "A osmose move a água do meio menos concentrado para o mais concentrado.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Ocorre em meio hipotônico (água pura).",
      "B": "[INCORRETA] Células em meio hipertônico perdem volume.",
      "C": "[INCORRETA] A dinâmica hídrica é imediata.",
      "D": "[CORRETA] A **Desidratação** do meio extracelular 'puxa' água de dentro das células (**Osmose**)."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  }
];

const data = JSON.parse(fs.readFileSync(QUESTOES_PATH, 'utf-8'));
data.questoes = data.questoes.concat(novasQuestoes);
fs.writeFileSync(QUESTOES_PATH, JSON.stringify(data, null, 2), 'utf-8');
console.log(`Sucesso: 8 questões da aula bcm1_a2 adicionadas.`);
