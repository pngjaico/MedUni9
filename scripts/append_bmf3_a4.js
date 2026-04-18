import fs from 'fs';
import path from 'path';

const QUESTOES_PATH = 'data/questoes.json';

const novasQuestoes = [
  {
    "id": 4129,
    "materia": "bmf3",
    "aula_id": "bmf3_a4",
    "tema": "bmf3_a4",
    "modulo": 3,
    "dificuldade": 1,
    "correta": 1,
    "enunciado": "Qual o principal mecanismo de ação dos Anti-inflamatórios Não Esteroidais (AINEs)?),",
    "opcoes": [
      "A) Bloqueio dos receptores de dor nos músculos.",
      "B) Inibição da enzima Ciclo-oxigenase (COX), reduzindo a síntese de Prostaglandinas.",
      "C) Destruição dos nervos periféricos.",
      "D) Aumento da produção de endorfina."
    ],
    "explicacao_geral": "As prostaglandinas são mediadores da dor, inflamação e febre.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Não atuam bloqueando receptores de dor diretamente nas fibras.",
      "B": "[CORRETA] A **Inibição da COX** é o mecanismo universal dos **AINEs**.",
      "C": "[INCORRETA] Altamente tóxico e falso.",
      "D": "[INCORRETA] Função relacionada aos opioides."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 4130,
    "materia": "bmf3",
    "aula_id": "bmf3_a4",
    "tema": "bmf3_a4",
    "modulo": 3,
    "dificuldade": 1,
    "correta": 3,
    "enunciado": "O 'Paracetamol' (Acetaminofeno) é amplamente utilizado. Qual das propriedades abaixo ele NÃO possui significativamente comparado aos AINEs típicos?),",
    "opcoes": [
      "A) Analgésica (reduz dor).",
      "B) Antipirética (reduz febre).",
      "C) Nenhuma das anteriores.",
      "D) Anti-inflamatória."
    ],
    "explicacao_geral": "O paracetamol atua mais no SNC e tem pouca atividade nas COX de tecidos periféricos inflamados.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] É uma de suas funções principais.",
      "B": "[INCORRETA] É uma de suas funções principais.",
      "C": "[INCORRETA] Lógica errada.",
      "D": "[CORRETA] O **Paracetamol** é um fraco **Anti-inflamatório**."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 4131,
    "materia": "bmf3",
    "aula_id": "bmf3_a4",
    "tema": "bmf3_a4",
    "modulo": 3,
    "dificuldade": 2,
    "correta": 0,
    "enunciado": "Qual enzima é considerada 'constitutiva' (está sempre presente) e é responsável pela proteção da mucosa gástrica e função renal?),",
    "opcoes": [
      "A) COX-1.",
      "B) COX-2.",
      "C) LOX (Lipoxigenase).",
      "D) Amilase."
    ],
    "explicacao_geral": "O bloqueio da COX-1 pelos AINEs não seletivos explica seus principais efeitos gastrointestinais.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] A **COX-1** é a enzima de **manutenção (housekeeping)**.",
      "B": "[INCORRETA] É 'induzível', expressa principalmente no local da inflamação.",
      "C": "[INCORRETA] Via de formação de leucotrienos.",
      "D": "[INCORRETA] Enzima digestiva salivar/pancreática."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 4132,
    "materia": "bmf3",
    "aula_id": "bmf3_a4",
    "tema": "bmf3_a4",
    "modulo": 3,
    "dificuldade": 2,
    "correta": 2,
    "enunciado": "Por que o 'AAS' (Aspirina) é utilizado em doses baixas para prevenir infartos e AVCs?),",
    "opcoes": [
      "A) Porque ele mata bactérias no sangue.",
      "B) Porque ele dissolve gordura das artérias.",
      "C) Porque ele inibe irreversivelmente a COX-1 plaquetária, reduzindo a formação de Tromboxano A2 (um potente agregante plaquetário).",
      "D) Porque ele melhora o sono do paciente."
    ],
    "explicacao_geral": "Como as plaquetas não têm núcleo, elas não conseguem produzir novas enzimas após o bloqueio irreversível do AAS.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Não é antibiótico.",
      "B": "[INCORRETA] Não é estatina ou fibrato.",
      "C": "[CORRETA] O **AAS** age como **Antiagregante Plaquetário** permanente daquela célula.",
      "D": "[INCORRETA] Sem correlação primária."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 4133,
    "materia": "bmf3",
    "aula_id": "bmf3_a4",
    "tema": "bmf3_a4",
    "modulo": 3,
    "dificuldade": 3,
    "correta": 1,
    "enunciado": "Qual a principal vantagem teórica dos inibidores seletivos da COX-2 (como o Celecoxibe) em relação aos AINEs clássicos?),",
    "opcoes": [
      "A) Serem mais baratos.",
      "B) Menor risco de toxicidade gástrica (gastrites e úlceras), mantendo a atividade anti-inflamatória periférica.",
      "C) Menor risco de infarto do miocárdio.",
      "D) Não serem filtrados pelo fígado."
    ],
    "explicacao_geral": "Por pouparem a COX-1 gástrica, apresentam menos efeitos colaterais locais no estômago.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Geralmente mais caros.",
      "B": "[CORRETA] Os **Coxibes** visam a **Segurança Gástrica**.",
      "C": "[INCORRETA] Invertido; podem aumentar o risco cardiovascular devido ao desequilíbrio entre prostaciclina e tromboxano.",
      "D": "[INCORRETA] Todos os fármacos desse grupo sofrem metabolismo/eliminação sistêmica."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 4134,
    "materia": "bmf3",
    "aula_id": "bmf3_a4",
    "tema": "bmf3_a4",
    "modulo": 3,
    "dificuldade": 2,
    "correta": 3,
    "enunciado": "Um paciente com diagnóstico de Dengue deve evitar AINEs (especialmente AAS). Qual o motivo principal?),",
    "opcoes": [
      "A) O remédio não faz efeito na febre da dengue.",
      "B) O remédio aumenta o vírus.",
      "C) Risco de cegueira.",
      "D) Risco aumentado de sangramentos e hemorragias devido à ação antiagregante plaquetária em um cenário de plaquetopenia causada pelo vírus."
    ],
    "explicacao_geral": "Na dengue, prefere-se o uso de Paracetamol ou Dipirona.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Fazem efeito, mas são perigosos.",
      "B": "[INCORRETA] Absurdo.",
      "C": "[INCORRETA] Sem relação.",
      "D": "[CORRETA] AINEs aumentam o risco de **Dengue Hemorrágica**."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 4135,
    "materia": "bmf3",
    "aula_id": "bmf3_a4",
    "tema": "bmf3_a4",
    "modulo": 3,
    "dificuldade": 3,
    "correta": 0,
    "enunciado": "Sobre a toxicidade do Paracetamol, qual o órgão seriamente afetado em overdoses (doses > 10g-15g em adultos) devido ao acúmulo do metabólito tóxico NAPQI?),",
    "opcoes": [
      "A) Fígado (Necrose hepática fulminante).",
      "B) Coração.",
      "C) Pulmões.",
      "D) Ouvido."
    ],
    "explicacao_geral": "O NAPQI exaure as reservas de glutationa, levando ao dano celular oxidativo massivo.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] O **Paracetamol** em excesso é altamente **Hepatotóxico**.",
      "B": "[INCORRETA] Sem efeito primário agudo de necrose.",
      "C": "[INCORRETA] Sem efeito primário agudo.",
      "D": "[INCORRETA] Sem efeito (salicilatos como AAS causam tinitus/zumbido)."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 4136,
    "materia": "bmf3",
    "aula_id": "bmf3_a4",
    "tema": "bmf3_a4",
    "modulo": 3,
    "dificuldade": 2,
    "correta": 2,
    "enunciado": "Qual dos seguintes fármacos é um analgésico e antipirético, derivado pirazolônico, amplamente utilizado no Brasil e com perfil de segurança favorável, apesar de raro risco de agranulocitose?),",
    "opcoes": [
      "A) Morfina.",
      "B) Ibuprofeno.",
      "C) Dipirona (Metamizol).",
      "D) Ácido Mefenâmico."
    ],
    "explicacao_geral": "A dipirona é muito eficaz para febre alta e dores moderadas.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Analgésico opioide potente.",
      "B": "[INCORRETA] AINE clássico (mais anti-inflamatório).",
      "C": "[CORRETA] A **Dipirona** é um potente **Antipirético e Analgésico**.",
      "D": "[INCORRETA] AINE utilizado para cólicas menstruais/dor leve."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  }
];

const data = JSON.parse(fs.readFileSync(QUESTOES_PATH, 'utf-8'));
data.questoes = data.questoes.concat(novasQuestoes);
fs.writeFileSync(QUESTOES_PATH, JSON.stringify(data, null, 2), 'utf-8');
console.log(`Sucesso: 8 questões da aula bmf3_a4 adicionadas.`);
