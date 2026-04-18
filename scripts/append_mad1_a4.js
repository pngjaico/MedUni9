import fs from 'fs';
import path from 'path';

const QUESTOES_PATH = 'data/questoes.json';

const novasQuestoes = [
  {
    "id": 3865,
    "materia": "mad1",
    "aula_id": "mad1_a4",
    "tema": "mad1_a4",
    "modulo": 2,
    "dificuldade": 1,
    "correta": 0,
    "enunciado": "Os antibióticos Beta-lactâmicos (como Penicilinas e Cefalosporinas) exercem seu efeito bactericida através de qual mecanismo?),",
    "opcoes": [
      "A) Inibição da síntese da parede celular, ligando-se às proteínas fixadoras de penicilina (PBPs) e impedindo a reticulação do peptidoglicano.",
      "B) Bloqueio da síntese de RNA mensageiro.",
      "C) Destruição imediata das mitocôndrias bacterianas.",
      "D) Inibição da síntese de ácido fólico."
    ],
    "explicacao_geral": "Sem uma parede celular íntegra, a bactéria sofre lise osmótica e morre.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] Os **Beta-lactâmicos** atuam na **Inibição da Parede Celular**.",
      "B": "[INCORRETA] Mecanismo das Rifampicinas.",
      "C": "[INCORRETA] Bactérias são procariontes e não possuem mitocôndrias.",
      "D": "[INCORRETA] Mecanismo das Sulfonamidas."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3866,
    "materia": "mad1",
    "aula_id": "mad1_a4",
    "tema": "mad1_a4",
    "modulo": 2,
    "dificuldade": 1,
    "correta": 3,
    "enunciado": "As bactérias podem resistir aos antibióticos de diversas formas. Qual enzima é responsável por degradar o anel beta-lactâmico de penicilinas antes que elas cheguem ao alvo?),",
    "opcoes": [
      "A) DNAse.",
      "B) Helicase.",
      "C) Lipase.",
      "D) Beta-lactamase (Penicilinase)."
    ],
    "explicacao_geral": "A produção de beta-lactamases é o mecanismo mais comum de resistência em Gram-negativos e Staphylococcus.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Degrada DNA.",
      "B": "[INCORRETA] Abre a dupla fita de DNA na replicação.",
      "C": "[INCORRETA] Degrada gorduras.",
      "D": "[CORRETA] A **Beta-lactamase** é uma enzima de **inativação do fármaco**."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3867,
    "materia": "mad1",
    "aula_id": "mad1_a4",
    "tema": "mad1_a4",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 1,
    "enunciado": "Os Aminoglicosídeos (como Gentamicina e Amicacina) atuam em qual alvo celular?),",
    "opcoes": [
      "A) Membrana plasmática.",
      "B) Subunidade 30S do ribossomo, inibindo a síntese proteica e causando leitura incorreta do RNAm.",
      "C) Síntese de DNA girase.",
      "D) Cápsula bacteriana."
    ],
    "explicacao_geral": "São antibióticos potentes, mas que exigem monitoramento de função renal (nefrotoxicidade).",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Alvo das Polimixinas e Daptomicina.",
      "B": "[CORRETA] Os **Aminoglicosídeos** inibem a **Síntese Proteica** (30S).",
      "C": "[INCORRETA] Alvo das Quinolonas.",
      "D": "[INCORRETA] Antibióticos raramente miram a cápsula de forma direta."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3868,
    "materia": "mad1",
    "aula_id": "mad1_a4",
    "tema": "mad1_a4",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 2,
    "enunciado": "A 'Resistência por Efluxo' caracteriza-se por:),",
    "opcoes": [
      "A) A bactéria 'comer' o antibiótico como nutriente.",
      "B) A bactéria mudar de cor para se esconder do remédio.",
      "C) A presença de bombas proteicas na membrana que expulsam ativamente o antibiótico do interior da célula antes que ele atinja seu alvo.",
      "D) O antibiótico evaporar antes de chegar na bactéria."
    ],
    "explicacao_geral": "Esse mecanismo pode conferir resistência a múltiplas classes de antibitóticos simultaneamente (multirresistência).",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Absurdo farmacológico.",
      "B": "[INCORRETA] Absurdo biológico.",
      "C": "[CORRETA] As **Bombas de Efluxo** são mecanismos de **expulsão ativa** do fármaco.",
      "D": "[INCORRETA] Irrelevante biológico."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3869,
    "materia": "mad1",
    "aula_id": "mad1_a4",
    "tema": "mad1_a4",
    "modulo": 2,
    "dificuldade": 3,
    "correta": 0,
    "enunciado": "As Quinolonas (como Ciprofloxacino e Levofloxacino) inibem enzimas cruciais para a replicação do DNA. Quais são elas?),",
    "opcoes": [
      "A) DNA Girase (Topoisomerase II) e Topoisomerase IV.",
      "B) RNA Polimerase dependente de DNA.",
      "C) Transpeptidases de membrana.",
      "D) ATP-sintase bacteriana."
    ],
    "explicacao_geral": "A inibição destas enzimas causa quebras no DNA e morte celular (efeito bactericida).",
    "explicacoes_opcoes": {
      "A": "[CORRETA] As **Quinolonas** inibem as **Topoisomerases**, impedindo a replicação gênica.",
      "B": "[INCORRETA] Alvo da Rifampicina.",
      "C": "[INCORRETA] Outro nome para as PBPs (alvo dos beta-lactâmicos).",
      "D": "[INCORRETA] Alvo de antibióticos muito específicos contra micobactérias (ex: bedaquilina)."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3870,
    "materia": "mad1",
    "aula_id": "mad1_a4",
    "tema": "mad1_a4",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 1,
    "enunciado": "A Vancomicina é um Glicopeptídeo usado contra bactérias Gram-positivas multirresistentes (como MRSA). Qual sua limitação contra Gram-negativos?),",
    "opcoes": [
      "A) Gram-negativos não têm parede celular.",
      "B) É uma molécula muito grande que não consegue atravessar as porinas da membrana externa das Gram-negativas para chegar ao peptidoglicano.",
      "C) Gram-negativos produzem Vancomicinases universais.",
      "D) A Vancomicina só funciona no escuro."
    ],
    "explicacao_geral": "A permeabilidade é um fator chave no espectro de ação dos antibióticos.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Eles possuem, mas é mais delgada.",
      "B": "[CORRETA] A **Vancomicina** possui **Resistência Intrínseca** em Gram-negativos por barreira de tamanho.",
      "C": "[INCORRETA] Resistência em Gram-positivos (VRE) ocorre por alteração do resíduo D-Ala-D-Ala, não enzima universal em Gram-negativas.",
      "D": "[INCORRETA] Absurdo."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3871,
    "materia": "mad1",
    "aula_id": "mad1_a4",
    "tema": "mad1_a4",
    "modulo": 2,
    "dificuldade": 3,
    "correta": 3,
    "enunciado": "O uso de Inibidores de Beta-lactamase (como Ácido Clavulânico, Sulbactam e Tazobactam) em associação com antibióticos tem qual finalidade?),",
    "opcoes": [
      "A) Fazer o remédio ficar mais doce.",
      "B) Matar vírus simultaneamente.",
      "C) Aumentar a excreção renal do antibiótico.",
      "D) Agir como 'iscas' para as enzimas beta-lactamases, inativando-as e permitindo que o antibiótico atue na parede bacteriana."
    ],
    "explicacao_geral": "Exemplo clássico: Amoxicilina + Clavulanato.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Irrelevante terapêutico.",
      "B": "[INCORRETA] Antibióticos não matam vírus.",
      "C": "[INCORRETA] Geralmente não alteram a farmacocinética de eliminação dessa forma.",
      "D": "[CORRETA] Os **Inibidores de Beta-lactamase** protegem o antibiótico da **degradação enzimática**."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 3872,
    "materia": "mad1",
    "aula_id": "mad1_a4",
    "tema": "mad1_a4",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 2,
    "enunciado": "Um paciente desenvolve Colite Pseudomembranosa (infecção por Clostridioides difficile) após uso prolongado de antibióticos de amplo espectro. Por que isso ocorre?),",
    "opcoes": [
      "A) O antibiótico alimentou a bactéria má.",
      "B) O paciente pegou a bactéria no ar.",
      "C) O antibiótico destruiu a microbiota intestinal normal (disbiose), permitindo o supercrescimento de bactérias opportunistas resistentes que já estavam lá em baixo número.",
      "D) O antibiótico causou uma mutação instantânea na comida."
    ],
    "explicacao_geral": "A microbiota normal é uma importante barreira de defesa (resistência à colonização).",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Antibióticos inibem, não nutrem bactérias.",
      "B": "[INCORRETA] Transmissão fecal-oral, mas o gatilho foi a alteração da flora.",
      "C": "[CORRETA] A **Disbiose por Antibiótico** favorece **infecções oportunistas**.",
      "D": "[INCORRETA] Sem base científica."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  }
];

const data = JSON.parse(fs.readFileSync(QUESTOES_PATH, 'utf-8'));
data.questoes = data.questoes.concat(novasQuestoes);
fs.writeFileSync(QUESTOES_PATH, JSON.stringify(data, null, 2), 'utf-8');
console.log(`Sucesso: 8 questões da aula mad1_a4 adicionadas.`);
