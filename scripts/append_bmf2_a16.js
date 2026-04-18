import fs from 'fs';
import path from 'path';

const QUESTOES_PATH = 'data/questoes.json';

const novasQuestoes = [
  {
    "id": 3721,
    "materia": "bmf2",
    "aula_id": "bmf2_a16",
    "tema": "bmf2_a16",
    "modulo": 2,
    "dificuldade": 1,
    "correta": 1,
    "enunciado": "O mecanismo de concentração da urina permite ao ser humano sobreviver com pouca água. Qual a principal função da 'Alça de Henle' nesse processo?),",
    "opcoes": [
      "A) Produzir hormônios.",
      "B) Criar e manter um gradiente osmótico hipertônico na medula renal (Multiplicação por Contracorrente).",
      "C) Filtrar o sangue pela primeira vez.",
      "D) Armazenar urina por 10 horas."
    ],
    "explicacao_geral": "Sem o gradiente na medula, a água não sairia dos ductos coletores por osmose.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Função endócrina é sistêmica renal, não específica da alça para concentração.",
      "B": "[CORRETA] A **Alça de Henle** gera a **hipertonicidade medular** necessária para a economia de água.",
      "C": "[INCORRETA] Função do Glomérulo.",
      "D": "[INCORRETA] Função da Bexiga."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3722,
    "materia": "bmf2",
    "aula_id": "bmf2_a16",
    "tema": "bmf2_a16",
    "modulo": 2,
    "dificuldade": 1,
    "correta": 3,
    "enunciado": "Qual hormônio é liberado no sangue para 'abrir canais' de água no ducto coletor, permitindo a reabsorção final de água livre?),",
    "opcoes": [
      "A) Insulina.",
      "B) Aldosterona.",
      "C) Renina.",
      "D) ADH (Hormônio Antidiurético / Vasopressina)."
    ],
    "explicacao_geral": "O ADH atua nos receptores V2 e promove a inserção de aquaporinas-2.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Controle glicêmico.",
      "B": "[INCORRETA] Reabsorve sódio, a água segue por osmose através dos espaços, mas o controle direto do poro de água livre é do ADH.",
      "C": "[INCORRETA] Enzima de controle de pressão inicial.",
      "D": "[CORRETA] O **ADH** é o regulador mestre da **concentração urinária**."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3723,
    "materia": "bmf2",
    "aula_id": "bmf2_a16",
    "tema": "bmf2_a16",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 0,
    "enunciado": "A 'Vasa Recta' são capilares em forma de alça que acompanham a alça de Henle. Qual o seu papel vital?),",
    "opcoes": [
      "A) Impedir que o gradiente osmótico medular seja 'lavado' pelo fluxo sanguíneo (Troca por Contracorrente).",
      "B) Filtrar o potássio.",
      "C) Produzir muco renal.",
      "D) Suprir oxigênio exclusivamente para o córtex."
    ],
    "explicacao_geral": "O fluxo sanguíneo na vasa recta é lento e segue a curva da alça para manter o equilíbrio osmótico.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] A **Vasa Recta** preserva a **hipertonicidade da medula**.",
      "B": "[INCORRETA] Trocas iônicas ocorrem, mas a função sistêmica de troca contracorrente é o foco.",
      "C": "[INCORRETA] Rins não produzem muco funcional excretor.",
      "D": "[INCORRETA] Elas se aprofundam na medula."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3724,
    "materia": "bmf2",
    "aula_id": "bmf2_a16",
    "tema": "bmf2_a16",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 2,
    "enunciado": "Um indivíduo bebe grande quantidade de álcool e no dia seguinte acorda com sede intensa e urina clara. Qual a explicação fisiológica?),",
    "opcoes": [
      "A) O álcool vira água no sangue.",
      "B) O álcool estimula a aldosterona.",
      "C) O álcool inibe a secreção de ADH na neuro-hipófise, impedindo a reabsorção de água nos ductos coletores e gerando urina diluída em excesso (poliúria).",
      "D) O álcool limpa o rim e faz ele trabalhar mais rápido."
    ],
    "explicacao_geral": "A inibição do ADH causa uma diabetes insipidus transitória e desidratação secundária.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Álcool é desidratante.",
      "B": "[INCORRETA] Sem esse efeito primário.",
      "C": "[CORRETA] O **Álcool** é um potente **inibidor de ADH**.",
      "D": "[INCORRETA] Visão leiga e errada do processo fisiotóxico."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 3725,
    "materia": "bmf2",
    "aula_id": "bmf2_a16",
    "tema": "bmf2_a16",
    "modulo": 2,
    "dificuldade": 3,
    "correta": 1,
    "enunciado": "A 'Ureia' não é apenas um resíduo, mas participa ativamente da concentração urinária. Qual o seu papel?),",
    "opcoes": [
      "A) Matar as células da medula.",
      "B) Ela é reciclada do ducto coletor para o interstício medular, contribuindo com cerca de 40-50% da osmolaridade da medula renal.",
      "C) Impedir o crescimento de bactérias no rim.",
      "D) Dar o cheiro forte da urina."
    ],
    "explicacao_geral": "Sem a ureia, o rim não conseguiria concentrar a urina ao máximo (1.200 mOsm/L).",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] É um soluto osmótico tolerado e vital.",
      "B": "[CORRETA] A **Reciclagem da Ureia** é fundamental para o **gradiente osmótico**.",
      "C": "[INCORRETA] Função do sistema imune e pH.",
      "D": "[INCORRETA] A ureia em si é inodora; o cheiro vem de substâncias derivadas e crescimento bacteriano pós-micção."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3726,
    "materia": "bmf2",
    "aula_id": "bmf2_a16",
    "tema": "bmf2_a16",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 3,
    "enunciado": "O reflexo de micção é controlado pelo sistema nervoso. Qual a ação do sistema parassimpático sobre a bexiga?),",
    "opcoes": [
      "A) Relaxa o músculo detrusor e fecha o esfíncter.",
      "B) Impede a produção de urina.",
      "C) Não atua na bexiga.",
      "D) Contração do músculo detrusor e relaxamento do esfíncter interno, promovendo o esvaziamento da bexiga."
    ],
    "explicacao_geral": "O parassimpático (nervos pélvicos) é o nervo da micção ('vazamento').",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Efeito simpático (enchimento).",
      "B": "[INCORRETA] Produção é renal; bexiga é apenas reservatório.",
      "C": "[INCORRETA] É a principal inervação motora da bexiga.",
      "D": "[CORRETA] O **Parassimpático** estimula o **Esvaziamento Vesical**."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3727,
    "materia": "bmf2",
    "aula_id": "bmf2_a16",
    "tema": "bmf2_a16",
    "modulo": 2,
    "dificuldade": 3,
    "correta": 0,
    "enunciado": "Um paciente com lesão medular alta (Acima de S2) perde o controle voluntário da micção, mas apresenta esvaziamento reflexo automático. Por que isso ocorre?),",
    "opcoes": [
      "A) Porque o arco reflexo sacral entre a bexiga e a medula permanece íntegro, mas a conexão com os centros superiores do cérebro (pontino e cortical) foi perdida.",
      "B) Porque o rim aprende a mandar na bexiga.",
      "C) Porque os nervos frênicos assumem o controle.",
      "D) O paciente para de produzir urina."
    ],
    "explicacao_geral": "Isso caracteriza a Bexiga Neurogênica reflexa (automática).",
    "explicacoes_opcoes": {
      "A": "[CORRETA] A **Bexiga Neurogênica** resulta da perda do **controle inibitório superior**.",
      "B": "[INCORRETA] Sem fundamento neuroanatômico.",
      "C": "[INCORRETA] Inervam o diafragma.",
      "D": "[INCORRETA] Produção renal continua, o problema é a expulsão/armazenamento."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 3728,
    "materia": "bmf2",
    "aula_id": "bmf2_a16",
    "tema": "bmf2_a16",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 2,
    "enunciado": "Qual músculo do sistema urinário está sob controle VOLUNTÁRIO (somático), permitindo segurar a urina até encontrar um local adequado?),",
    "opcoes": [
      "A) Músculo Detrusor.",
      "B) Esfíncter Uretral Interno.",
      "C) Esfíncter Uretral Externo (diafragma urogenital).",
      "D) Músculo liso do ureter."
    ],
    "explicacao_geral": "O esfíncter externo é inervado pelo nervo pudendo (Sistema Somático).",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Músculo liso involuntário da parede da bexiga.",
      "B": "[INCORRETA] Músculo liso involuntário controlado pelo sistema simpático.",
      "C": "[CORRETA] O **Esfíncter Externo** é o controle **voluntário** da micção.",
      "D": "[INCORRETA] Involuntário e realiza peristaltismo."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  }
];

const data = JSON.parse(fs.readFileSync(QUESTOES_PATH, 'utf-8'));
data.questoes = data.questoes.concat(novasQuestoes);
fs.writeFileSync(QUESTOES_PATH, JSON.stringify(data, null, 2), 'utf-8');
console.log(`Sucesso: 8 questões da aula bmf2_a16 adicionadas.`);
