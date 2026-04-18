import fs from 'fs';
import path from 'path';

const QUESTOES_PATH = 'data/questoes.json';

const novasQuestoes = [
  {
    "id": 4265,
    "materia": "bmf3",
    "aula_id": "bmf3_a21",
    "tema": "bmf3_a21",
    "modulo": 3,
    "dificuldade": 1,
    "correta": 1,
    "enunciado": "Qual o principal mecanismo de ação dos antifúngicos da classe dos Azóis (como o Fluconazol e Itraconazol)?),",
    "opcoes": [
      "A) Destruição direta da parede celular de quitina.",
      "B) Inibição da enzima 14-alfa-desmetilase (dependente de CYP450), bloqueando a síntese de ergosterol, componente essencial da membrana fúngica.",
      "C) Inibição da síntese proteica ribossomal.",
      "D) Interferência no metabolismo da glicose."
    ],
    "explicacao_geral": "A falta de ergosterol altera a fluidez e permeabilidade da membrana do fungo.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Função das equinocandinas (ex: Caspofungina).",
      "B": "[CORRETA] Os **Azóis** inibem a **Síntese de Ergosterol**.",
      "C": "[INCORRETA] Não é o alvo principal desta classe.",
      "D": "[INCORRETA] Absurdo metabólico."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 4266,
    "materia": "bmf3",
    "aula_id": "bmf3_a21",
    "tema": "bmf3_a21",
    "modulo": 3,
    "dificuldade": 3,
    "correta": 3,
    "enunciado": "A 'Anfotericina B' é um antifúngico potente reservado para infecções sistêmicas graves. Qual seu principal efeito colateral limitante?),",
    "opcoes": [
      "A) Perda de visão.",
      "B) Hiperglicemia severa.",
      "C) Queda de dentes.",
      "D) Nefrotoxicidade (lesão renal frequente, exigindo hidratação e monitoramento de eletrólitos)."
    ],
    "explicacao_geral": "Além da lesão renal, pode causar reações infusionais graves (febre, tremores).",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Sem relação.",
      "B": "[INCORRETA] Sem relação.",
      "C": "[INCORRETA] Absurdo.",
      "D": "[CORRETA] A **Anfotericina B** é altamente **Nefrotóxica**."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 4267,
    "materia": "bmf3",
    "aula_id": "bmf3_a21",
    "tema": "bmf3_a21",
    "modulo": 3,
    "dificuldade": 2,
    "correta": 0,
    "enunciado": "O 'Aciclovir' é utilizado no tratamento do Herpes Simples. Por que ele possui alta toxicidade seletiva para células infectadas pelo vírus?),",
    "opcoes": [
      "A) Ele precisa ser ativado (fosforilado) pela enzima timidina quinase viral para se tornar um inibidor da síntese do DNA.",
      "B) Porque o vírus atrai o remédio como um ímã.",
      "C) Porque ele só entra em células que têm DNA de vírus.",
      "D) Porque ele quebra a cápsula do vírus e não da célula humana."
    ],
    "explicacao_geral": "Sem a enzima viral, o fármaco permanece inativo na maioria das células saudáveis.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] O **Aciclovir** exige **Ativação Viral** (mais o passo de fosforilação celular).",
      "B": "[INCORRETA] Absurdo.",
      "C": "[INCORRETA] Absurdo.",
      "D": "[INCORRETA] O alvo é a polimerase do DNA, não o capsídeo."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 4268,
    "materia": "bmf3",
    "aula_id": "bmf3_a21",
    "tema": "bmf3_a21",
    "modulo": 3,
    "dificuldade": 2,
    "correta": 2,
    "enunciado": "O 'Oseltamivir' (Tamiflu) é indicado para o tratamento da Gripe (Influenza). Qual seu mecanismo de ação?),",
    "opcoes": [
      "A) Mata o vírus Influenza diretamente.",
      "B) Bloqueia a entrada do vírus na célula.",
      "C) Inibe a enzima Neuraminidase, impedindo que os novos vírus produzidos se desprendam da célula infectada para espalhar a infecção.",
      "D) É uma vacina de dose única."
    ],
    "explicacao_geral": "Deve ser iniciado preferencialmente nas primeiras 48 horas de sintomas.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Fármacos antivirais raramente 'matam' o vírus, eles inibem a replicação/disseminação.",
      "B": "[INCORRETA] Seria um inibidor de fusão/entrada.",
      "C": "[CORRETA] O **Oseltamivir** inibe a **Liberação Viral**.",
      "D": "[INCORRETA] É um fármaco de uso oral diário durante o tratamento."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 4269,
    "materia": "bmf3",
    "aula_id": "bmf3_a22",
    "tema": "bmf3_a22",
    "modulo": 3,
    "dificuldade": 1,
    "correta": 1,
    "enunciado": "O 'Metotrexato' é um DMARD (fármaco modificador do curso da doença) muito usado na Artrite Reumatoide. Como ele atua?),",
    "opcoes": [
      "A) Como um antibiótico.",
      "B) Como um antagonista do folato, inibindo a enzima di-hidrofolato redutase e interferindo na síntese de purinas e pirimidinas (reduzindo a proliferação de células imunes).",
      "C) Como um anti-inflamatório tipo aspirina.",
      "D) Fornecendo cálcio para as juntas."
    ],
    "explicacao_geral": "Os efeitos colaterais como estomatite e queda de cabelo podem ser mitigados com o uso de ácido fólico.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Inapropriado.",
      "B": "[CORRETA] O **Metotrexato** é um **Antimetabólito** (Antagonista de Folato).",
      "C": "[INCORRETA] AINEs tratam sintomas, mas não mudam o curso da doença como o metotrexato.",
      "D": "[INCORRETA] Absurdo."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 4270,
    "materia": "bmf3",
    "aula_id": "bmf3_a22",
    "tema": "bmf3_a22",
    "modulo": 3,
    "dificuldade": 3,
    "correta": 3,
    "enunciado": "Fármacos como a 'Ciclosporina' e o 'Tacrolimus' são fundamentais para evitar a rejeição de órgãos transplantados. Qual o alvo celular destes medicamentos?),",
    "opcoes": [
      "A) Receptores colinérgicos.",
      "B) Destruição da medula óssea.",
      "C) Inibição da síntese de anticorpos apenas.",
      "D) Inibição da Calcineurina, impedindo a ativação e proliferação de linfócitos T."
    ],
    "explicacao_geral": "Eles bloqueiam a via de sinalização que leva à produção de IL-2.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Irrelevante nesta via imune.",
      "B": "[INCORRETA] Efeito tóxico/mielossupressor de quimioterápicos, não o alvo seletivo destes imunomoduladores clássicos.",
      "C": "[INCORRETA] Agem primordialmente na imunidade celular.",
      "D": "[CORRETA] São **Inibidores da Calcineurina**."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 4271,
    "materia": "bmf3",
    "aula_id": "bmf3_a22",
    "tema": "bmf3_a22",
    "modulo": 3,
    "dificuldade": 2,
    "correta": 0,
    "enunciado": "Os 'Agentes Biológicos' (como o Infliximabe e Adalimumabe) revolucionaram o tratamento de doenças autoimunes. Qual o alvo específico destes fármacos?),",
    "opcoes": [
      "A) Fator de Necrose Tumoral alfa (TNF-alfa).",
      "B) Glóbulos vermelhos.",
      "C) Receptores de adrenalina.",
      "D) Vitamina C."
    ],
    "explicacao_geral": "Os anti-TNF neutralizam essa citocina inflamatória chave antes que ela se ligue aos receptores celulares.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] O **Anti-TNF** reduz a **inflamação sistêmica severa**.",
      "B": "[INCORRETA] Irrelevante.",
      "C": "[INCORRETA] Irrelevante.",
      "D": "[INCORRETA] Irrelevante."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 4272,
    "materia": "bmf3",
    "aula_id": "bmf3_a22",
    "tema": "bmf3_a22",
    "modulo": 3,
    "dificuldade": 3,
    "correta": 2,
    "enunciado": "Antes de iniciar uma terapia biológica (especialmente Anti-TNF), qual screening infeccioso é OBRIGATÓRIO devido ao risco de reativação de doença latente?),",
    "opcoes": [
      "A) Teste de gravidez.",
      "B) Pesquisa de cáries dentárias.",
      "C) Pesquisa de Tuberculose (PPD/IGRA e Raio-X de Tórax).",
      "D) Teste de audição."
    ],
    "explicacao_geral": "O TNF-alfa é fundamental para manter o granuloma da tuberculose íntegro e 'preso' no pulmão.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Importante para segurança fetal, mas não é screening de doença latente infecciosa para reativação sistêmica por imunomodulação.",
      "B": "[INCORRETA] Recomendável por focos infecciosos, mas não o protocolo de segurança biológica primário.",
      "C": "[CORRETA] Anti-TNFs aumentam o risco de **Tuberculose Disseminada**.",
      "D": "[INCORRETA] Sem relação."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  }
];

const data = JSON.parse(fs.readFileSync(QUESTOES_PATH, 'utf-8'));
data.questoes = data.questoes.concat(novasQuestoes);
fs.writeFileSync(QUESTOES_PATH, JSON.stringify(data, null, 2), 'utf-8');
console.log(`Sucesso: 8 questões da aula bmf3_a21/a22 adicionadas.`);
