import fs from 'fs';
import path from 'path';

const QUESTOES_PATH = 'data/questoes.json';

const novasQuestoes = [
  {
    "id": 4297,
    "materia": "fp3",
    "aula_id": "fp3_a3",
    "tema": "fp3_a3",
    "modulo": 3,
    "dificuldade": 1,
    "correta": 1,
    "enunciado": "Qual a principal característica fisiopatológica das 'Doenças Obstrutivas' (como Asma e DPOC)?),",
    "opcoes": [
      "A) Dificuldade de expansão do pulmão (pulmão 'duro').",
      "B) Dificuldade na saída do ar devido ao aumento da resistência nas vias aéreas (redução do fluxo expiratório).",
      "C) Melhora da capacidade vital.",
      "D) Aumento da troca de oxigênio."
    ],
    "explicacao_geral": "Marcada pela redução do Índice de Tiffeneau (VEF1/CVF < 0.7).",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Característica de doenças restritivas.",
      "B": "[CORRETA] A **Obstrução** dificulta o **esvaziamento pulmonar**.",
      "C": "[INCORRETA] A capacidade vital costuma ser normal ou reduzida se houver aprisionamento de ar.",
      "D": "[INCORRETA] A troca gasosa costuma estar prejudicada."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 4298,
    "materia": "fp3",
    "aula_id": "fp3_a3",
    "tema": "fp3_a3",
    "modulo": 3,
    "dificuldade": 1,
    "correta": 3,
    "enunciado": "No 'Enfisema Pulmonar', qual a alteração estrutural microscópica predominante?),",
    "opcoes": [
      "A) Muco em excesso nos brônquios.",
      "B) Cicatrização (fibrose) dos alvéolos.",
      "C) Presença de bactérias na pleura.",
      "D) Destruição das paredes alveolares com perda da elasticidade pulmonar e alargamento dos espaços aéreos."
    ],
    "explicacao_geral": "Resulta em hiperinsuflação e aumento da complacência (pulmão 'mole' que não expele o ar).",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Caracteriza a Bronquite Crônica.",
      "B": "[INCORRETA] Caracteriza as pneumopatias restritivas intersticiais.",
      "C": "[INCORRETA] Empiema pleural.",
      "D": "[CORRETA] O **Enfisema** é a **destruição do parênquima**."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 4299,
    "materia": "fp3",
    "aula_id": "fp3_a3",
    "tema": "fp3_a3",
    "modulo": 3,
    "dificuldade": 2,
    "correta": 0,
    "enunciado": "As 'Doenças Restritivas' (ex: Fibrose Pulmonar) caracterizam-se por:),",
    "opcoes": [
      "A) Redução da complacência pulmonar, exigindo mais esforço para expandir os pulmões e reduzindo todos os volumes pulmonares.",
      "B) Aumento da saída de ar.",
      "C) Dilatação excessiva dos pulmões.",
      "D) Tosse produtiva com muito pus."
    ],
    "explicacao_geral": "O índice VEF1/CVF costuma estar normal ou aumentado, pois o ar que entra sai rápido (o pulmão 'expulsa' o ar).",
    "explicacoes_opcoes": {
      "A": "[CORRETA] A **Restrição** torna o **Pulmão Rígido**.",
      "B": "[INCORRETA] Fluxos podem ser normais, mas volumes são baixos.",
      "C": "[INCORRETA] O pulmão fica pequeno.",
      "D": "[INCORRETA] Inespecífico, mais comum em infecções ou bronquites."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 4300,
    "materia": "fp3",
    "aula_id": "fp3_a4",
    "tema": "fp3_a4",
    "modulo": 3,
    "dificuldade": 2,
    "correta": 2,
    "enunciado": "O que ocorre na relação Ventilação/Perfusão (V/Q) em um cenário de 'Shunt' (ex: alvéolo cheio de pus na pneumonia)?),",
    "opcoes": [
      "A) Ventilação normal e Perfusão ausente.",
      "B) Ventilação aumentada e Perfusão diminuída.",
      "C) Ventilação ausente ou muito reduzida, mas Perfusão mantida (V/Q próximo de zero).",
      "D) O sangue para de circular no pulmão."
    ],
    "explicacao_geral": "O sangue passa pelo alvéolo mas não é oxigenado, retornando 'venoso' para o lado esquerdo do coração.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Espaço morto (ex: TEP).",
      "B": "[INCORRETA] Inespecífico.",
      "C": "[CORRETA] O **Shunt** ocorre quando há **sangue passando por área não ventilada**.",
      "D": "[INCORRETA] Absurdo."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 4301,
    "materia": "fp3",
    "aula_id": "fp3_a4",
    "tema": "fp3_a4",
    "modulo": 3,
    "dificuldade": 3,
    "correta": 1,
    "enunciado": "A 'Insuficiência Respiratória do Tipo II' (Hipercápnica) é causada primordialmente por:),",
    "opcoes": [
      "A) Falha apenas na difusão de oxigênio.",
      "B) Hipoventilação alveolar (falha na 'bomba' ventilatória: músculos, nervos ou centro respiratório), levando ao acúmulo de CO2.",
      "C) Destruição dos capilares sanguíneos.",
      "D) Excesso de oxigênio no sangue."
    ],
    "explicacao_geral": "Pode ocorrer em overdoses de opioides, doenças neuromusculares ou exaustão respiratória.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Causa o Tipo I (Hipoxêmica).",
      "B": "[CORRETA] A **IR Tipo II** é sinônimo de **falha ventilatória/retenção de CO2**.",
      "C": "[INCORRETA] Contribui para hipoxemia.",
      "D": "[INCORRETA] Absurdo."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 4302,
    "materia": "fp3",
    "aula_id": "fp3_a5",
    "tema": "fp3_a5",
    "modulo": 3,
    "dificuldade": 2,
    "correta": 3,
    "enunciado": "O 'Refluxo Gastroesofágico' (DRGE) patológico ocorre principalmente devido a:),",
    "opcoes": [
      "A) Excesso de saliva.",
      "B) Estômago muito pequeno.",
      "C) Furos no esôfago.",
      "D) Relaxamentos transitórios ou hipotonia do Esfíncter Esofágico Inferior (EEI)."
    ],
    "explicacao_geral": "Permite que o conteúdo ácido do estômago mude para o esôfago, cuja mucosa não é protegida contra o ácido.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Saliva é básica e protege moderadamente.",
      "B": "[INCORRETA] Pressão intra-abdominal aumentada em obesos ajuda, mas não é tamanho do órgão.",
      "C": "[INCORRETA] Perfurar é complicação catastrófica, não mecanismo da doença crônica.",
      "D": "[CORRETA] A **falha do EEI** é o centro da **DRGE**."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 4303,
    "materia": "fp3",
    "aula_id": "fp3_a5",
    "tema": "fp3_a5",
    "modulo": 3,
    "dificuldade": 3,
    "correta": 0,
    "enunciado": "A 'Acalásia' é um distúrbio motor do esôfago caracterizado por:),",
    "opcoes": [
      "A) Aperistalse do corpo esofágico e falha no relaxamento do esfíncter esofágico inferior (EEI) durante a deglutição.",
      "B) Digestão muito rápida.",
      "C) Presença de úlceras no esôfago médio.",
      "D) Vômitos em jato logo após comer."
    ],
    "explicacao_geral": "Causada por perda de neurônios no plexo mioentérico (ex: Doença de Chagas ou idiopática).",
    "explicacoes_opcoes": {
      "A": "[CORRETA] A **Acalásia** 'trava' a comida no esôfago abaixo.",
      "B": "[INCORRETA] Disfagia é a marca, comida entalada.",
      "C": "[INCORRETA] Pode haver esofagite por estase, mas não define a acalásia.",
      "D": "[INCORRETA] Regurgitação de alimento não digerido é comum, mas o mecanismo é o relaxamento incompleto do EEI."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 4304,
    "materia": "fp3",
    "aula_id": "fp3_a5",
    "tema": "fp3_a5",
    "modulo": 3,
    "dificuldade": 2,
    "correta": 2,
    "enunciado": "Na fisiopatologia da Úlcera Péptica, qual o papel da infecção por 'H. pylori'?),",
    "opcoes": [
      "A) Ela morde as células do estômago.",
      "B) Ela transforma o ácido em água.",
      "C) Ela gera inflamação crônica e desequilibra a relação entre fatores agressores (ácido) e protetores (muco/bicarbonato).",
      "D) Ela entra no sangue e causa febre."
    ],
    "explicacao_geral": "A urease produzida pela bactéria gera amônia, que altera o pH local e danifica o muco protetor.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Não há 'mordedura', há dano químico-inflamatório.",
      "B": "[INCORRETA] A urease apenas alcaliniza o microambiente imediato.",
      "C": "[CORRETA] O **H. pylori** é o principal **fator agressor** na úlcera.",
      "D": "[INCORRETA] Infecção local/intramucosa na maioria das vezes."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  }
];

const data = JSON.parse(fs.readFileSync(QUESTOES_PATH, 'utf-8'));
data.questoes = data.questoes.concat(novasQuestoes);
fs.writeFileSync(QUESTOES_PATH, JSON.stringify(data, null, 2), 'utf-8');
console.log(`Sucesso: 8 questões da aula fp3_a3/a4/a5 adicionadas.`);
