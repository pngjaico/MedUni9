import fs from 'fs';
import path from 'path';

const QUESTOES_PATH = 'data/questoes.json';

const novasQuestoes = [
  {
    "id": 3705,
    "materia": "bmf2",
    "aula_id": "bmf2_a14",
    "tema": "bmf2_a14",
    "modulo": 2,
    "dificuldade": 1,
    "correta": 1,
    "enunciado": "A 'Taxa de Filtração Glomerular' (TFG) é o volume de filtrado produzido por minuto. Qual a principal força motriz que empurra o fluido do sangue para dentro da cápsula de Bowman?),",
    "opcoes": [
      "A) Pressão Oncótica do plasma.",
      "B) Pressão Hidrostática Capilar Glomerular.",
      "C) Sucção osmótica da urina.",
      "D) Batimento do coração diretamente no néfron."
    ],
    "explicacao_geral": "A pressão hidrostática no glomérulo é superior à de outros capilares do corpo.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] A pressão oncótica (proteínas) se opõe à filtração.",
      "B": "[CORRETA] A **Pressão Hidrostática** é a força que gera o **filtrado glomerular**.",
      "C": "[INCORRETA] A pressão no espaço de Bowman também se opõe à filtração.",
      "D": "[INCORRETA] O coração gera a pressão sistêmica, mas a força local no glomérulo é regulada pelas arteríolas aferente e eferente."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3706,
    "materia": "bmf2",
    "aula_id": "bmf2_a14",
    "tema": "bmf2_a14",
    "modulo": 2,
    "dificuldade": 1,
    "correta": 3,
    "enunciado": "Como o rim mantém uma TFG constante mesmo quando a pressão arterial sistêmica oscila entre 80 e 180 mmHg?),",
    "opcoes": [
      "A) Ele para de funcionar quando a pressão sobe.",
      "B) O sangue flui mais rápido sem ser filtrado.",
      "C) Ele pede ajuda ao cérebro o tempo todo.",
      "D) Através da Autorregulação Renal (Mecanismo Miogênico e Feedback Túbulo-Glomerular)."
    ],
    "explicacao_geral": "As arteríolas ajustam seu calibre para proteger o glomérulo de pressões excessivas ou insuficientes.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] O rim é um órgão autorregulável.",
      "B": "[INCORRETA] A filtração deve ser mantida para depurar toxinas.",
      "C": "[INCORRETA] A autorregulação é intrínseca ao rim, independente de nervos externos (embora sofra influência).",
      "D": "[CORRETA] A **Autorregulação** protege a **unidade funcional renal** das oscilações da PA."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3707,
    "materia": "bmf2",
    "aula_id": "bmf2_a14",
    "tema": "bmf2_a14",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 0,
    "enunciado": "O 'Feedback Túbulo-Glomerular' envolve a detecção de sódio na mácula densa. Qual a resposta renal ao detectar um excesso de NaCl no túbulo distal?),",
    "opcoes": [
      "A) Vasoconstrição da Arteríola Aferente para reduzir a TFG.",
      "B) Vasodilatação da Arteríola Aferente para aumentar o fluxo.",
      "C) O rim explode por excesso de sal.",
      "D) Aumento da pressão arterial sistêmica imediatamente."
    ],
    "explicacao_geral": "Excesso de sódio no distal indica filtração muito alta que não pôde ser reabsorvida.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] O **Feedback Túbulo-Glomerular** reduz a carga filtrada para permitir o **equilíbrio**.",
      "B": "[INCORRETA] Isso ocorreria se houvesse pouco sódio (estímulo de queda de pressão).",
      "C": "[INCORRETA] Mecanismo regulatório fino.",
      "D": "[INCORRETA] Efeito local renal antes de efeitos sistêmicos via renina."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3708,
    "materia": "bmf2",
    "aula_id": "bmf2_a14",
    "tema": "bmf2_a14",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 2,
    "enunciado": "O que ocorre com a TFG se houver uma obstrução no ureter (frequentemente por um cálculo renal)?),",
    "opcoes": [
      "A) Ela aumenta para tentar empurrar o cálculo.",
      "B) Permanece igual.",
      "C) Queda da TFG devido ao aumento da pressão hidrostática no Espaço de Bowman, que se opõe à filtração.",
      "D) O rim transforma a urina em sangue."
    ],
    "explicacao_geral": "A pressão se propaga retrogradamente até a cápsula glomerular.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] A força contrária impede a saída de novo líquido do sangue.",
      "B": "[INCORRETA] A obstrução gera falha renal aguda pós-renal.",
      "C": "[CORRETA] A **obstrução urinária** reduz a **capacidade de filtração** mecânica.",
      "D": "[INCORRETA] Impossível biológico."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 3709,
    "materia": "bmf2",
    "aula_id": "bmf2_a14",
    "tema": "bmf2_a14",
    "modulo": 2,
    "dificuldade": 3,
    "correta": 1,
    "enunciado": "A 'Angiotensina II' exerce uma ação preferencial sobre as arteríolas renais em doses baixas. Qual é o seu efeito e por que é protetor em estados de desidratação?),",
    "opcoes": [
      "A) Vasoconstrição da aferente; impede a perda de sangue.",
      "B) Vasoconstrição da Arteríola Eferente; mantém a TFG elevada mesmo com baixo fluxo sanguíneo renal.",
      "C) Vasodilatação total do rim.",
      "D) Destruição dos néfrons velhos."
    ],
    "explicacao_geral": "Ao 'fechar a saída' (eferente), a pressão dentro do glomérulo sobe.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] A vasoconstrição da aferente reduziria drasticamente a TFG.",
      "B": "[CORRETA] A **constrição da eferente** sustenta a **filtração glomerular** em crises hipotensivas.",
      "C": "[INCORRETA] Prostaglandinas fazem isso.",
      "D": "[INCORRETA] Função hormonal de controle, não destrutiva tecidual."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3710,
    "materia": "bmf2",
    "aula_id": "bmf2_a14",
    "tema": "bmf2_a14",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 3,
    "enunciado": "Um paciente hepatopata grave tem baixa produção de Albumina (Hipoalbuminemia). Qual o efeito esperado na Filtração Glomerular?),",
    "opcoes": [
      "A) A filtração para.",
      "B) O rim produz menos urina.",
      "C) Nada muda.",
      "D) Aumento da TFG porque a pressão oncótica capilar (que se opõe à filtração) está reduzida."
    ],
    "explicacao_geral": "Menos proteínas no sangue 'seguram' menos o líquido dentro do vaso.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Ela tende a aumentar.",
      "B": "[INCORRETA] Frequentemente o paciente tem edema, mas o glomérulo inicial filtra mais (embora outros mecanismos renais compliquem o quadro final).",
      "C": "[INCORRETA] Forças de Starling são alteradas.",
      "D": "[CORRETA] A **queda da Pressão Oncótica** favorece a **filtração glomerular**."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 3711,
    "materia": "bmf2",
    "aula_id": "bmf2_a14",
    "tema": "bmf2_a14",
    "modulo": 2,
    "dificuldade": 3,
    "correta": 3,
    "enunciado": "O uso abusivo de Anti-inflamatórios (AINEs) pode causar insuficiência renal aguda. Por que isto ocorre em pacientes com fluxo renal limítrofe?),",
    "opcoes": [
      "A) Porque o remédio é tóxico para a bexiga.",
      "B) Porque os AINEs aumentam o açúcar.",
      "C) Porque eles estimulam o coração demais.",
      "D) Porque os AINEs inibem as Prostaglandinas, que são responsáveis por manter a Arteríola Aferente dilatada; sem elas, ocorre vasoconstrição e queda da TFG."
    ],
    "explicacao_geral": "As prostaglandinas protegem o fluxo renal em estados de estresse.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Dano é glomerular/tubular primário.",
      "B": "[INCORRETA] Sem correlação direta.",
      "C": "[INCORRETA] Não são simpatomiméticos.",
      "D": "[CORRETA] Os **AINEs** retiram a **vasodilatação protetora** aferente."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 3712,
    "materia": "bmf2",
    "aula_id": "bmf2_a14",
    "tema": "bmf2_a14",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 0,
    "enunciado": "A 'Clara de Creatinina' (Clearance) é usada rotineiramente para estimar a TFG. Por que a creatinina é um bom marcador?),",
    "opcoes": [
      "A) Porque ela é livremente filtrada pelo glomérulo e quase não é reabsorvida ou secretada pelos túbulos renais.",
      "B) Porque ela dá cor amarela à urina.",
      "C) Porque ela é um hormônio do crescimento.",
      "D) Porque é produzida no cérebro."
    ],
    "explicacao_geral": "Embora a Inulina seja o padrão-ouro, a creatinina (produto endógeno) é muito prática.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] O **Clearance de Creatinina** reflete a **capacidade de limpeza** do rim.",
      "B": "[INCORRETA] Cor deve-se a urocromos/urobilinas.",
      "C": "[INCORRETA] Metabolito muscular.",
      "D": "[INCORRETA] Produção muscular constante."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  }
];

const data = JSON.parse(fs.readFileSync(QUESTOES_PATH, 'utf-8'));
data.questoes = data.questoes.concat(novasQuestoes);
fs.writeFileSync(QUESTOES_PATH, JSON.stringify(data, null, 2), 'utf-8');
console.log(`Sucesso: 8 questões da aula bmf2_a14 adicionadas.`);
