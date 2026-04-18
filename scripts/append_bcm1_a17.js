import fs from 'fs';
import path from 'path';

const QUESTOES_PATH = 'data/questoes.json';

const novasQuestoes = [
  {
    "id": 3561,
    "materia": "bcm1",
    "aula_id": "bcm1_a17",
    "tema": "bcm1_a17",
    "modulo": 2,
    "dificuldade": 1,
    "correta": 1,
    "enunciado": "A replicação do DNA é descrita como 'Semiconservativa'. O que isso significa?),",
    "opcoes": [
      "A) Que apenas metade do DNA de uma célula é copiado.",
      "B) Que cada nova molécula de DNA dupla-hélice é formada por uma fita original (molde) e uma fita recém-sintetizada.",
      "C) Que o DNA original é destruído após o processo.",
      "D) Que o DNA é guardado em conserva no frio."
    ],
    "explicacao_geral": "Este mecanismo garante a fidelidade da transmissão da informação genética.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Todo o genoma deve ser duplicado antes da divisão celular.",
      "B": "[CORRETA] O termo **Semiconservativa** refere-se à manutenção de uma **fita parental** em cada cópia.",
      "C": "[INCORRETA] O molde original permanece íntegro.",
      "D": "[INCORRETA] Jogo de palavras sem sentido biológico."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3562,
    "materia": "bcm1",
    "aula_id": "bcm1_a17",
    "tema": "bcm1_a17",
    "modulo": 2,
    "dificuldade": 1,
    "correta": 0,
    "enunciado": "Qual enzima é responsável por 'desenrolar' a dupla hélice de DNA, quebrando as pontes de hidrogênio e abrindo a forquilha de replicação?),",
    "opcoes": [
      "A) Helicase.",
      "B) Ligase.",
      "C) DNA Polimerase.",
      "D) Amilase."
    ],
    "explicacao_geral": "A helicase utiliza energia (ATP) para separar as fitas complementares.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] A **Helicase** abre o caminho para o maquinário de replicação.",
      "B": "[INCORRETA] Une fragmentos de DNA.",
      "C": "[INCORRETA] Adiciona novos nucleotídeos à fita em crescimento.",
      "D": "[INCORRETA] Enzima digestiva de carboidratos."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3563,
    "materia": "bcm1",
    "aula_id": "bcm1_a17",
    "tema": "bcm1_a17",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 2,
    "enunciado": "Durante a replicação, a síntese de DNA ocorre apenas no sentido 5' -> 3'. Como a fita que corre no sentido oposto (fita descontínua ou lagging strand) é sintetizada?),",
    "opcoes": [
      "A) Ela não é sintetizada.",
      "B) No sentido 3' -> 5' de forma mágica.",
      "C) Em pequenos pedaços chamados Fragmentos de Okazaki, exigindo múltiplos primers de RNA.",
      "D) Ela é feita de RNA permanentemente."
    ],
    "explicacao_geral": "A natureza unidirecional da polimerase obriga a célula a usar esse mecanismo de 'costura' fragmentada.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Ambas as fitas devem ser duplicadas.",
      "B": "[INCORRETA] Impossível bioquimicamente para a DNA polimerase.",
      "C": "[CORRETA] Os **Fragmentos de Okazaki** permitem a replicação da **fita descontínua**.",
      "D": "[INCORRETA] Os primers de RNA são removidos e substituídos por DNA."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3564,
    "materia": "bcm1",
    "aula_id": "bcm1_a17",
    "tema": "bcm1_a17",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 3,
    "enunciado": "As Topoisomerases (como a DNA Girase) têm um papel crucial no alívio da tensão helicoidal à frente da forquilha. Qual a consequência de bloquear essas enzimas com fármacos (Ex: Ciprofloxacino ou irinotecano)?),",
    "opcoes": [
      "A) O DNA copia-se mais rápido.",
      "B) A célula brilha mais.",
      "C) Nada, pois são enzimas acessórias.",
      "D) O DNA sofre super-enrolamento e 'nós' que impedem a progressão da replicação, levando à quebra do DNA e morte celular."
    ],
    "explicacao_geral": "As topoisomerases cortam e religam o DNA para aliviar o torque.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] O processo trava.",
      "B": "[INCORRETA] Sem efeito óptico.",
      "C": "[INCORRETA] São essenciais.",
      "D": "[CORRETA] Inibidores de **Topoisomerase** são usados como **antibióticos e antineoplásicos**."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 3565,
    "materia": "bcm1",
    "aula_id": "bcm1_a17",
    "tema": "bcm1_a17",
    "modulo": 2,
    "dificuldade": 3,
    "correta": 1,
    "enunciado": "A extremidade dos cromossomos lineares eucarióticos (Telômeros) tende a encurtar a cada ciclo de divisão. Qual enzima é capaz de estender essas pontas em células germinativas e cancerosas?),",
    "opcoes": [
      "A) RNAse.",
      "B) Telomerase.",
      "C) Lactato desidrogenase.",
      "D) Transcriptase reversa de vírus apenas."
    ],
    "explicacao_geral": "A telomerase é uma ribonucleoproteína que sintetiza sequências curtas repetidas nas pontas do DNA.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Degrada RNA.",
      "B": "[CORRETA] A **Telomerase** garante a 'imortalidade' celular por manter o **comprimento dos telômeros**.",
      "C": "[INCORRETA] Atua no metabolismo anaeróbico.",
      "D": "[INCORRETA] Embora a telomerase seja um tipo de transcriptase reversa, ela é intrínseca humanamente a certos tecidos/contextos."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3566,
    "materia": "bcm1",
    "aula_id": "bcm1_a17",
    "tema": "bcm1_a17",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 0,
    "enunciado": "A Radiação Ultravioleta (UV) do sol causa danos específicos ao DNA, como a formação de 'Dímeros de Timina'. Qual o principal mecanismo de reparo que a célula usa para corrigir esse erro?),",
    "opcoes": [
      "A) Reparo por Excisão de Nucleotídeos (NER).",
      "B) Fotossíntese reversa.",
      "C) Digestão por lisossomos.",
      "D) O DNA não consegue ser reparado se exposto ao sol."
    ],
    "explicacao_geral": "O NER remove um fragmento de fita única contendo a lesão e a preenche novamente.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] O **NER** é o guardião contra os danos do **sol (Dímeros de Timina)**.",
      "B": "[INCORRETA] Inexistente.",
      "C": "[INCORRETA] Atuam fora do núcleo e em nível de organelas/proteínas, não DNA individual.",
      "D": "[INCORRETA] Células saudáveis reparam milhares de mutações UV-induzidas diariamente."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 3567,
    "materia": "bcm1",
    "aula_id": "bcm1_a17",
    "tema": "bcm1_a17",
    "modulo": 2,
    "dificuldade": 3,
    "correta": 3,
    "enunciado": "Pacientes com 'Xeroderma Pigmentoso' possuem uma sensibilidade extrema à luz solar e alto risco de câncer de pele precocemente. Qual o defeito genético dessa doença?),",
    "opcoes": [
      "A) Excesso de melanina.",
      "B) Falta de vitaminas no sangue.",
      "C) Mutação nas mitocôndrias.",
      "D) Falha incapacitante no mecanismo de Reparo por Excisão de Nucleotídeos (NER)."
    ],
    "explicacao_geral": "Sem o NER, os dímeros de timina acumulam-se e causam mutações em oncogenes/supressores de tumor.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Melanina protege, não causa a doença por si.",
      "B": "[INCORRETA] Não é uma carência nutricional.",
      "C": "[INCORRETA] Dano no DNA nuclear.",
      "D": "[CORRETA] O **Xeroderma Pigmentoso** é a patologia clássica de erro de **reparo de DNA**."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 3568,
    "materia": "bcm1",
    "aula_id": "bcm1_a17",
    "tema": "bcm1_a17",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 1,
    "enunciado": "A DNA Polimerase possui uma atividade de 'Proofreading' (Revisão) 3' -> 5'. Qual a importância dessa função?),",
    "opcoes": [
      "A) Fazer o DNA brilhar.",
      "B) Detectar e remover nucleotídeos incorporados incorretamente durante a síntese, aumentando a fidelidade da replicação em milhares de vezes.",
      "C) Impedir que o RNA saia do núcleo.",
      "D) Acelerar a replicação para durar apenas 1 segundo."
    ],
    "explicacao_geral": "A enzima 'volta' e remove o erro antes de prosseguir.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Sem efeito óptico.",
      "B": "[CORRETA] O **Proofreading** reduz drasticamente a taxa de **mutação** durante a cópia.",
      "C": "[INCORRETA] Papel de exportinas e poros nucleares.",
      "D": "[INCORRETA] A revisão torna o processo ligeiramente mais lento em prol da precisão."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  }
];

const data = JSON.parse(fs.readFileSync(QUESTOES_PATH, 'utf-8'));
data.questoes = data.questoes.concat(novasQuestoes);
fs.writeFileSync(QUESTOES_PATH, JSON.stringify(data, null, 2), 'utf-8');
console.log(`Sucesso: 8 questões da aula bcm1_a17 adicionadas.`);
