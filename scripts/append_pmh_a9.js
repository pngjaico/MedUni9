import fs from 'fs';
import path from 'path';

const QUESTOES_PATH = 'data/questoes.json';

const novasQuestoes = [
  {
    "id": 3241,
    "materia": "pmh",
    "aula_id": "pmh_a9",
    "tema": "pmh_a9",
    "modulo": 1,
    "dificuldade": 1,
    "correta": 1,
    "enunciado": "A Fórmula de Friedewald é amplamente utilizada para calcular o valor do LDL-C no perfil lipídico básico. Qual a principal limitação para o uso seguro desta fórmula?",
    "opcoes": [
      "A) Níveis de colesterol total menores que 150 mg/dL.",
      "B) Níveis de Triglicerídeos (TG) acima de 400 mg/dL.",
      "C) Pacientes com idade superior a 60 anos.",
      "D) Presença de HDL acima de 60 mg/dL."
    ],
    "explicacao_geral": "Quando os triglicerídeos estão muito altos, a razão TG/5 não estima corretamente o colesterol da VLDL, gerando erro no cálculo do LDL.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] CT baixo não impede o uso da fórmula.",
      "B": "[CORRETA] A fórmula torna-se **imprecisa** se **TG > 400 mg/dL**.",
      "C": "[INCORRETA] A idade não invalida a matemática da fórmula.",
      "D": "[INCORRETA] HDL alto é um fator protetor e não invalida o cálculo."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3242,
    "materia": "pmh",
    "aula_id": "pmh_a9",
    "tema": "pmh_a9",
    "modulo": 1,
    "dificuldade": 2,
    "correta": 3,
    "enunciado": "Um paciente de 45 anos com obesidade apresenta Triglicerídeos de 950 mg/dL. Qual o risco agudo mais grave que esse paciente corre e que exige tratamento prioritário ante a meta de LDL?",
    "opcoes": [
      "A) Infarto Agudo do Miocárdio imediato.",
      "B) Acidente Vascular Cerebral em 24 horas.",
      "C) Cegueira por depósito de gordura na retina.",
      "D) Pancreatite Aguda."
    ],
    "explicacao_geral": "Valores de TG acima de 500-1000 mg/dL aumentam drasticamente a chance de inflamação aguda do pâncreas.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] O risco cardiovascular é crônico; o risco de TG alto em valores extremos é pancreático.",
      "B": "[INCORRETA] O AVC também é um risco associado à placa crônica.",
      "C": "[INCORRETA] Existe a lipemia retinalis, mas não causa cegueira aguda como risco principal.",
      "D": "[CORRETA] **Triglicerídeos > 500 mg/dL** trazem risco iminente de **Pancreatite Aguda**."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 3243,
    "materia": "pmh",
    "aula_id": "pmh_a9",
    "tema": "pmh_a9",
    "modulo": 1,
    "dificuldade": 2,
    "correta": 2,
    "enunciado": "As causas secundárias de dislipidemia devem sempre ser investigadas antes do início do tratamento farmacológico crônico. Qual das patologias abaixo é uma causa CLÁSSICA de hipercolesterolemia isolada secundária?),",
    "opcoes": [
      "A) Hipertireoidismo.",
      "B) Doença de Chagas.",
      "C) Hipotireoidismo.",
      "D) Gastrite crônica."
    ],
    "explicacao_geral": "A deficiência de hormônios tireoidianos reduz a expressão dos receptores de LDL no fígado, aumentando o colesterol no sangue.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] O hipertireoidismo tende a reduzir os níveis de colesterol.",
      "B": "[INCORRETA] Doença infecciosa/cardíaca sem relação direta com metabolismo lipídico.",
      "C": "[CORRETA] O **Hipotireoidismo** é um diagnóstico diferencial obrigatório em pacientes com colesterol alto.",
      "D": "[INCORRETA] Sem correlação com o perfil lipídico sistêmico."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3244,
    "materia": "pmh",
    "aula_id": "pmh_a9",
    "tema": "pmh_a9",
    "modulo": 1,
    "dificuldade": 2,
    "correta": 0,
    "enunciado": "A terapia combinada de Estatina com Ezetimiba é frequentemente usada para atingir metas de LDL muito baixas em pacientes de alto risco. Qual o mecanismo de ação da Ezetimiba?",
    "opcoes": [
      "A) Bloquear a absorção intestinal de colesterol através da inibição da proteína NPC1L1.",
      "B) Inibir a produção de colesterol no fígado.",
      "C) Aumentar a excreção de gordura na urina.",
      "D) Quebrar triglicerídeos diretamente no plasma."
    ],
    "explicacao_geral": "Enquanto a estatina atua na 'fábrica' (fígado), a ezetimiba atua no 'mercado' (absorção intestinal).",
    "explicacoes_opcoes": {
      "A": "[CORRETA] A **Ezetimiba** inibe seletivamente a **absorção intestinal** do colesterol tanto da dieta quanto da bile.",
      "B": "[INCORRETA] Função das estatinas.",
      "C": "[INCORRETA] Gorduras não são excretadas na urina (fisiológico).",
      "D": "[INCORRETA] Função da LPL ou fibratos que estimulam a LPL."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3245,
    "materia": "pmh",
    "aula_id": "pmh_a9",
    "tema": "pmh_a9",
    "modulo": 1,
    "dificuldade": 3,
    "correta": 1,
    "enunciado": "Os Fibratos são a primeira escolha de tratamento quando o objetivo principal é a redução drástica dos Triglicerídeos. Qual o mecanismo bioquímico pelo qual os fibratos atuam?",
    "opcoes": [
      "A) Inibição da síntese de glucagon no pâncreas.",
      "B) Ativação do receptor nuclear PPAR-alfa, aumentando a oxidação de ácidos graxos e a atividade da LPL.",
      "C) Seqüestro de ácidos biliares no intestino.",
      "D) Inibição direta da HMG-CoA Redutase."
    ],
    "explicacao_geral": "Os fibratos modulam a expressão gênica de enzimas envolvidas no metabolismo de gorduras.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Sem relação com o pâncreas endócrino.",
      "B": "[CORRETA] Os **fibratos** são agonistas de **PPAR-alfa**, promovendo a 'queima' de gordura e limpeza de TG do sangue.",
      "C": "[INCORRETA] Função das resinas (sequestradores de ácidos biliares).",
      "D": "[INCORRETA] Atuação das estatinas."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3246,
    "materia": "pmh",
    "aula_id": "pmh_a9",
    "tema": "pmh_a9",
    "modulo": 1,
    "dificuldade": 2,
    "correta": 2,
    "enunciado": "Um paciente diabético de alto risco cardiovascular já está usando Sinvastatina 40mg (dose máxima) e seu LDL permanece em 100 mg/dL, enquanto sua meta deveria ser < 70 mg/dL. Qual a conduta farmacológica mais adequada segundo as diretrizes atuais?),",
    "opcoes": [
      "A) Suspender a estatina e prescrever apenas dieta vegetariana.",
      "B) Dobrar a dose da estatina para 80mg (mesmo com risco de miopatia).",
      "C) Associar Ezetimiba à terapia com estatina.",
      "D) Trocar a estatina por um fibrato isolado."
    ],
    "explicacao_geral": "Quando a estatina isolada atinge o limite de dosagem ou eficácia, a adição de um segundo mecanismo é o passo recomendado.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] A dieta isolada dificilmente reduzirá o LDL em 30% adicionais nestes valores.",
      "B": "[INCORRETA] Sinvastatina 80mg não é mais recomendada rotineiramente devido ao alto risco de rabdomiólise.",
      "C": "[CORRETA] A **associação Estatina + Ezetimiba** é a conduta padrão para falha em atingir meta.",
      "D": "[INCORRETA] Fibratos são foco em triglicerídeos, não em baixar LDL de forma potente."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 3247,
    "materia": "pmh",
    "aula_id": "pmh_a9",
    "tema": "pmh_a9",
    "modulo": 1,
    "dificuldade": 2,
    "correta": 3,
    "enunciado": "O consumo excessivo de álcool frequentemente provoca um aumento isolado de qual componente do perfil lipídico?",
    "opcoes": [
      "A) Colesterol HDL.",
      "B) Colesterol LDL.",
      "C) Colesterol Total apenas.",
      "D) Triglicerídeos."
    ],
    "explicacao_geral": "O álcool induz a síntese de VLDL e ácidos graxos no fígado através da alteração do balanço NADH/NAD+.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] O álcool pode aumentar um pouco o HDL, mas não é a dislipidemia patológica clínica principal.",
      "B": "[INCORRETA] LDL geralmente não é o alvo principal do álcool.",
      "C": "[INCORRETA] Ele aumenta o CT às custas de um componente específico.",
      "D": "[CORRETA] A **Hipertrigliceridemia** é a dislipidemia induzida pelo álcool por excelência."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3248,
    "materia": "pmh",
    "aula_id": "pmh_a9",
    "tema": "pmh_a9",
    "modulo": 1,
    "dificuldade": 3,
    "correta": 0,
    "enunciado": "Um paciente de 35 anos apresenta depósitos amarelados nos tendões de Aquiles e xantelasmas nas pálpebras. Seu LDL é de 280 mg/dL e seu pai faleceu de infarto aos 40 anos. Qual a suspeita diagnóstica principal?",
    "opcoes": [
      "A) Hipercolesterolemia Familiar (HF).",
      "B) Excesso de ingestão de ovo na dieta.",
      "C) Diabetes Mellitus Tipo 1.",
      "D) Doença de Gaucher."
    ],
    "explicacao_geral": "A presença de de xantomas tendíneos associada a LDL > 190 e história familiar sugere defeito genético nos receptores de LDL.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] Pacientes com **HF** apresentam níveis de LDL altíssimos e sinais físicos de depósito lipídico (**xantomas**).",
      "B": "[INCORRETA] A dieta isolada não atinge valores tão extremos de LDL.",
      "C": "[INCORRETA] DM1 não causa xantomas tendíneos ou LDL de 280 de forma isolada.",
      "D": "[INCORRETA] Doença de depósito lisossômico com quadro clínico sistêmico diferente (esplenomegalia, dor óssea)."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  }
];

const data = JSON.parse(fs.readFileSync(QUESTOES_PATH, 'utf-8'));
data.questoes = data.questoes.concat(novasQuestoes);
fs.writeFileSync(QUESTOES_PATH, JSON.stringify(data, null, 2), 'utf-8');
console.log(`Sucesso: 8 questões da aula pmh_a9 adicionadas.`);
