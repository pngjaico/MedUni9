import fs from 'fs';
import path from 'path';

const QUESTOES_PATH = 'data/questoes.json';

const novasQuestoes = [
  {
    "id": 4217,
    "materia": "bmf3",
    "aula_id": "bmf3_a15",
    "tema": "bmf3_a15",
    "modulo": 3,
    "dificuldade": 1,
    "correta": 1,
    "enunciado": "Qual o principal mecanismo de ação das Estatinas (como a Atorvastatina e Sinvastatina) no tratamento das dislipidemias?),",
    "opcoes": [
      "A) Bloqueio da absorção de gordura no intestino.",
      "B) Inibição da enzima HMG-CoA Redutase, reduzindo a síntese hepática de colesterol e induzindo o aumento da expressão de receptores de LDL.",
      "C) Aumento da quebra direta de gordura nos músculos.",
      "D) Estimulação da excreção biliar de colesterol."
    ],
    "explicacao_geral": "Ao reduzir a síntese interna, o fígado aumenta o número de receptores para 'capturar' o LDL circulante.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Função da Ezetimiba.",
      "B": "[CORRETA] As **Estatinas** bloqueiam a **Síntese de Colesterol**.",
      "C": "[INCORRETA] Absurdo.",
      "D": "[INCORRETA] Função das resinas de troca iônica (colestiramina)."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 4218,
    "materia": "bmf3",
    "aula_id": "bmf3_a15",
    "tema": "bmf3_a15",
    "modulo": 3,
    "dificuldade": 1,
    "correta": 3,
    "enunciado": "Um paciente que inicia tratamento com Estatinas deve ser orientado sobre qual efeito colateral muscular raro porém sério?),",
    "opcoes": [
      "A) Hipertrofia muscular exagerada.",
      "B) Tremores nas mãos.",
      "C) Paralisia flácida.",
      "D) Mialgia e Rabdomiólise (destruição de fibras musculares com risco de lesão renal)."
    ],
    "explicacao_geral": "A rabdomiólise é acompanhada por elevação acentuada da enzima CPK.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Absurdo.",
      "B": "[INCORRETA] Não é um efeito típico.",
      "C": "[INCORRETA] Inespecífico.",
      "D": "[CORRETA] O risco de **Rabdomiólise** exige monitoramento de **Dores e CPK**."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 4219,
    "materia": "bmf3",
    "aula_id": "bmf3_a15",
    "tema": "bmf3_a15",
    "modulo": 3,
    "dificuldade": 2,
    "correta": 0,
    "enunciado": "Qual classe farmacológica (ex: Ciprofibrato, Fenofibrato) é a mais indicada para pacientes com Hipertrigliceridemia isolada grave (TG > 500mg/dL), visando prevenir Pancreatite?),",
    "opcoes": [
      "A) Fibratos (agonistas de receptores PPAR-alfa).",
      "B) Estatinas.",
      "C) Ezetimiba.",
      "D) Ômega 3 em doses baixas."
    ],
    "explicacao_geral": "Os fibratos aumentam a atividade da lipase lipoproteica (LPL) e a oxidação de ácidos graxos.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] Os **Fibratos** são ideais para reduzir **Triglicerídeos**.",
      "B": "[INCORRETA] Eficazes no LDL, menos potentes na redução de TG isolada.",
      "C": "[INCORRETA] Reduz apenas o LDL através da inibição da absorção.",
      "D": "[INCORRETA] Apenas doses muito elevadas (>4g/dia) teriam efeito, mas fibratos são superiores."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 4220,
    "materia": "bmf3",
    "aula_id": "bmf3_a15",
    "tema": "bmf3_a15",
    "modulo": 3,
    "dificuldade": 2,
    "correta": 2,
    "enunciado": "Qual fármaco atua especificamente bloqueando a proteína transportadora NPC1L1 nas microvilosidades do intestino, reduzindo a absorção de colesterol da dieta e biliar?),",
    "opcoes": [
      "A) Atorvastatina.",
      "B) Colestiramina.",
      "C) Ezetimiba.",
      "D) Orlistat."
    ],
    "explicacao_geral": "Frequentemente usada em associação com estatinas para potencializar a queda do LDL.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Inibidor da HMG-CoA Redutase (hepático).",
      "B": "[INCORRETA] Sequestrador de ácidos biliares.",
      "C": "[CORRETA] A **Ezetimiba** inibe a **Absorção Intestinal** de colesterol.",
      "D": "[INCORRETA] Inibidor da lipase pancreática (reduz absorção de gordura triglicérica, causa esteatorreia)."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 4221,
    "materia": "bmf3",
    "aula_id": "bmf3_a16",
    "tema": "bmf3_a16",
    "modulo": 3,
    "dificuldade": 2,
    "correta": 0,
    "enunciado": "Qual o mecanismo de ação da 'Varfarina' (Marevan) como anticoagulante?),",
    "opcoes": [
      "A) Antagonismo da Vitamina K, impedindo a síntese hepática progressiva dos fatores II, VII, IX e X.",
      "B) Inibição direta do Fator Xa.",
      "C) Ativação da Antitrombina III.",
      "D) Quebra do coágulo já formado (fibrinólise)."
    ],
    "explicacao_geral": "Exige monitoramento constante através do RNI (Relação Normatizada Internacional).",
    "explicacoes_opcoes": {
      "A": "[CORRETA] A **Varfarina** é um **Antivitamina K**.",
      "B": "[INCORRETA] Função de novos anticoagulantes (Rivaroxabana).",
      "C": "[INCORRETA] Função das Heparinas.",
      "D": "[INCORRETA] Função de trombolíticos (ex: Alteplase)."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 4222,
    "materia": "bmf3",
    "aula_id": "bmf3_a16",
    "tema": "bmf3_a16",
    "modulo": 3,
    "dificuldade": 2,
    "correta": 3,
    "enunciado": "O fármaco 'Enoxaparina' (Clexane) é uma Heparina de Baixo Peso Molecular (HBPM). Qual a vantagem em relação à Heparina Não Fracionada (HNF)?),",
    "opcoes": [
      "A) Pode ser tomada via oral.",
      "B) É mais barata.",
      "C) Não causa sangramento.",
      "D) Resposta anticoagulante mais previsível, meia-vida mais longa e não exige monitoramento laboratorial rotineiro (TTPa)."
    ],
    "explicacao_geral": "A enoxaparina inibe predominantemente o Fator Xa.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Ambas são injetáveis.",
      "B": "[INCORRETA] HBPM costuma ser mais cara.",
      "C": "[INCORRETA] Todas possuem risco de sangramento.",
      "D": "[CORRETA] A **Enoxaparina** permite **uso ambulatorial seguro**."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 4223,
    "materia": "bmf3",
    "aula_id": "bmf3_a16",
    "tema": "bmf3_a16",
    "modulo": 3,
    "dificuldade": 3,
    "correta": 1,
    "enunciado": "Qual dos seguintes fármacos pertence à classe dos DOACs (Anticoagulantes Orais Diretos) e age inibindo diretamente o Fator Xa?),",
    "opcoes": [
      "A) Dabigatrana.",
      "B) Rivaroxabana (Xarelto).",
      "C) Clopidogrel.",
      "D) Estreptoquinase."
    ],
    "explicacao_geral": "Esses fármacos não exigem monitoramento de exames de sangue como a varfarina.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Inibidor direto da Trombina (Fator IIa).",
      "B": "[CORRETA] A **Rivaroxabana** é um **Inibidor Direto do Fator Xa**.",
      "C": "[INCORRETA] Antiagregante plaquetário (Antagonista P2Y12).",
      "D": "[INCORRETA] Trombolítico."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 4224,
    "materia": "bmf3",
    "aula_id": "bmf3_a16",
    "tema": "bmf3_a16",
    "modulo": 3,
    "dificuldade": 3,
    "correta": 2,
    "enunciado": "Um paciente em uso crônico de Varfarina precisa de uma cirurgia de urgência. O cirurgião observa sangramento excessivo. Qual o antídoto específico para reverter o efeito da Varfarina?),",
    "opcoes": [
      "A) Sulfato de Protamina.",
      "B) Glucagon.",
      "C) Vitamina K (Fitomenadiona) e Plasma Fresco Congelado (ou Complexo Protrômbico).",
      "D) Adrenalina."
    ],
    "explicacao_geral": "A vitamina K demora horas para agir (nova síntese proteica), por isso usa-se plasma ou complexo em emergências.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Antídoto da Heparina.",
      "B": "[INCORRETA] Antídoto de Betabloqueadores/Bloqueadores de Cálcio.",
      "C": "[CORRETA] A **Vitamina K** reverte a **intoxicação por cumarínicos**.",
      "D": "[INCORRETA] Não afeta a cascata de coagulação desta forma."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  }
];

const data = JSON.parse(fs.readFileSync(QUESTOES_PATH, 'utf-8'));
data.questoes = data.questoes.concat(novasQuestoes);
fs.writeFileSync(QUESTOES_PATH, JSON.stringify(data, null, 2), 'utf-8');
console.log(`Sucesso: 8 questões da aula bmf3_a15/a16 adicionadas.`);
