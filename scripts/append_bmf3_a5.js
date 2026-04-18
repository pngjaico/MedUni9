import fs from 'fs';
import path from 'path';

const QUESTOES_PATH = 'data/questoes.json';

const novasQuestoes = [
  {
    "id": 4137,
    "materia": "bmf3",
    "aula_id": "bmf3_a5",
    "tema": "bmf3_a5",
    "modulo": 3,
    "dificuldade": 1,
    "correta": 1,
    "enunciado": "Os analgésicos opioides (como a Morfina) exercem seu efeito principal ligando-se a quais receptores no sistema nervoso central?),",
    "opcoes": [
      "A) Receptores Adrenérgicos Alfa.",
      "B) Receptores Opioides (especialmente o receptor Mu).",
      "C) Receptores Muscarínicos M1.",
      "D) Receptores GABA-A."
    ],
    "explicacao_geral": "A ativação do receptor Mu bloqueia a transmissão dos sinais de dor na medula espinal e altera a percepção da dor no cérebro.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Alvo do simpático.",
      "B": "[CORRETA] O **Receptor Mu** é o principal alvo dos **opioides**.",
      "C": "[INCORRETA] Alvo do parassimpático.",
      "D": "[INCORRETA] Alvo de benzodiazepínicos e barbitúricos (ansiolíticos/sedantes)."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 4138,
    "materia": "bmf3",
    "aula_id": "bmf3_a5",
    "tema": "bmf3_a5",
    "modulo": 3,
    "dificuldade": 1,
    "correta": 3,
    "enunciado": "Qual dos seguintes efeitos é considerado o PRINCIPAL risco de vida em uma overdose aguda de opioides?),",
    "opcoes": [
      "A) Cólica abdominal.",
      "B) Coceira intensa (Prurido).",
      "C) Constipação intestinal.",
      "D) Depressão Respiratória (redução da frequência e volume respiratórios)."
    ],
    "explicacao_geral": "Os opioides diminuem a sensibilidade do centro respiratório bulbar ao CO2.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Incomodo, não fatal.",
      "B": "[INCORRETA] Frequentemente por liberação de histamina, mas não fatal sozinha via opioide.",
      "C": "[INCORRETA] Efeito colateral crônico muito comum, não a causa de óbito agudo.",
      "D": "[CORRETA] A **Depressão Respiratória** é a principal **causa de morte** por opioides."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 4139,
    "materia": "bmf3",
    "aula_id": "bmf3_a5",
    "tema": "bmf3_a5",
    "modulo": 3,
    "dificuldade": 2,
    "correta": 0,
    "enunciado": "Um paciente chega ao pronto-socorro desacordado, com as pupilas muito contraídas (miose 'em ponta de alfinete') e respirando apenas 4 vezes por minuto. Qual o antídoto imediato?),",
    "opcoes": [
      "A) Naloxona (Antagonista opioide).",
      "B) Atropina.",
      "C) Flumazenil.",
      "D) Glicose por via venosa."
    ],
    "explicacao_geral": "A tríade: coma, depressão respiratória e miose aponta fortemente para intoxicação por opioides.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] A **Naloxona** reverte a **Intoxicação por Opioides**.",
      "B": "[INCORRETA] Antídoto para colinérgicos (causaria midríase e taquicardia).",
      "C": "[INCORRETA] Antídoto para benzodiazepínicos.",
      "D": "[INCORRETA] Trata hipoglicemia, mas não a depressão respiratória por opioide."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 4140,
    "materia": "bmf3",
    "aula_id": "bmf3_a5",
    "tema": "bmf3_a5",
    "modulo": 3,
    "dificuldade": 2,
    "correta": 2,
    "enunciado": "Qual o efeito colateral mais comum do uso CRÔNICO de opioides, ao qual o paciente dificilmente desenvolve tolerância?),",
    "opcoes": [
      "A) Náusea e vômito.",
      "B) Sonolência.",
      "C) Constipação (Obstipação) intestinal.",
      "D) Euforia."
    ],
    "explicacao_geral": "Diferente de outros efeitos, a redução da motilidade intestinal persiste durante todo o tratamento.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Tende a melhorar após os primeiros dias.",
      "B": "[INCORRETA] O paciente desenvolve tolerância aos efeitos sedativos iniciais.",
      "C": "[CORRETA] A **Constipação** é o efeito de longa data mais **incômodo**.",
      "D": "[INCORRETA] Desenvolve-se tolerância rápida, exigindo doses maiores."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 4141,
    "materia": "bmf3",
    "aula_id": "bmf3_a5",
    "tema": "bmf3_a5",
    "modulo": 3,
    "dificuldade": 3,
    "correta": 1,
    "enunciado": "Sobre o 'Tramadol', por que ele é considerado um opioide com mecanismo de ação 'duplo'?),",
    "opcoes": [
      "A) Atua no estômago e no rim ao mesmo tempo.",
      "B) É um agonista fraco de receptores Mu e também inibe a recaptação de Serotonina e Noradrenalina.",
      "C) Atua em vírus e bactérias.",
      "D) Bloqueia a COX-2 e os receptores opioides."
    ],
    "explicacao_geral": "Este perfil o torna útil em certas dores neuropáticas, mas exige cuidado com a síndrome serotoninérgica.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Absurdo.",
      "B": "[CORRETA] O **Tramadol** tem mecanismo **Opioide e Monoaminérgico**.",
      "C": "[INCORRETA] Não é antimalárico.",
      "D": "[INCORRETA] Não tem ação sobre a ciclo-oxigenase."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 4142,
    "materia": "bmf3",
    "aula_id": "bmf3_a5",
    "tema": "bmf3_a5",
    "modulo": 3,
    "dificuldade": 2,
    "correta": 3,
    "enunciado": "A 'Codeína' é frequentemente utilizada como analgésico e também como:",
    "opcoes": [
      "A) Diurético.",
      "B) Antibiótico potente.",
      "C) Laxante.",
      "D) Antitussígeno (bloqueia o reflexo da tosse no centro bulbar)."
    ],
    "explicacao_geral": "Doses baixas de codeína são muito eficazes para tosse seca e irritativa.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Causaria retenção hídrica em alguns contextos.",
      "B": "[INCORRETA] Uso irracional.",
      "C": "[INCORRETA] Ela causa constipação (oposto de laxante).",
      "D": "[CORRETA] A **Codeína** é um potente **Inibidor da Tosse**."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 4143,
    "materia": "bmf3",
    "aula_id": "bmf3_a5",
    "tema": "bmf3_a5",
    "modulo": 3,
    "dificuldade": 3,
    "correta": 0,
    "enunciado": "A 'Tolerância' aos opioides significa que:),",
    "opcoes": [
      "A) O paciente precisa de doses cada vez maiores para obter o mesmo efeito analgésico original.",
      "B) O paciente se tornou imune ao fármaco e nunca mais sentirá efeito.",
      "C) O fármaco se tornou tóxico em doses pequenas.",
      "D) O paciente não aceita mais tomar o remédio."
    ],
    "explicacao_geral": "A tolerância ocorre por dessensibilização e 'down-regulation' de receptores na membrana celular.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] A **Tolerância** exige o **Escalonamento de Dose**.",
      "B": "[INCORRETA] O efeito ainda existe, mas em patamares de dose diferentes.",
      "C": "[INCORRETA] Isso seria sensibilização ou idiossincrasia.",
      "D": "[INCORRETA] Comportamental/Psicológico, não farmacodinâmico puro."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 4144,
    "materia": "bmf3",
    "aula_id": "bmf3_a5",
    "tema": "bmf3_a5",
    "modulo": 3,
    "dificuldade": 2,
    "correta": 2,
    "enunciado": "Qual o opioide de escolha para dor intensa e aguda (ex: infarto agudo do miocárdio ou dor pós-operatória severa) devido à sua eficácia e facilidade de titulação venosa?),",
    "opcoes": [
      "A) Dipirona.",
      "B) Tramadol oral.",
      "C) Morfina.",
      "D) Paracetamol."
    ],
    "explicacao_geral": "A morfina, além da analgesia, reduz a pré-carga cardíaca e a ansiedade no infarto (Protocolo MONA).",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Insuficiente para dor severa de infarto.",
      "B": "[INCORRETA] Ação mais lenta e menos previsível para dor aguda extrema.",
      "C": "[CORRETA] A **Morfina** é o padrão-ouro para **Dor Intensa**.",
      "D": "[INCORRETA] Analgésico simples."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  }
];

const data = JSON.parse(fs.readFileSync(QUESTOES_PATH, 'utf-8'));
data.questoes = data.questoes.concat(novasQuestoes);
fs.writeFileSync(QUESTOES_PATH, JSON.stringify(data, null, 2), 'utf-8');
console.log(`Sucesso: 8 questões da aula bmf3_a5 adicionadas.`);
