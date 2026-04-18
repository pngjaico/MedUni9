import fs from 'fs';
import path from 'path';

const QUESTOES_PATH = 'data/questoes.json';

const novasQuestoes = [
  {
    "id": 4113,
    "materia": "bmf3",
    "aula_id": "bmf3_a2",
    "tema": "bmf3_a2",
    "modulo": 3,
    "dificuldade": 1,
    "correta": 1,
    "enunciado": "A 'Atropina' é o protótipo dos fármacos antagonistas muscarínicos. Qual o seu efeito esperado na frequência cardíaca e secreção salivar?),",
    "opcoes": [
      "A) Bradicardia e salivação excessiva.",
      "B) Taquicardia e boca seca (xerostomia).",
      "C) Parada cardíaca imediata.",
      "D) Hipotensão severa e suor frio."
    ],
    "explicacao_geral": "Como bloqueia o parassimpático, prevalece o tônus simpático (taquicardia) e cessa a estimulação glândular.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Efeito de um agonista colinérgico.",
      "B": "[CORRETA] A **Atropina** aumenta a **FC e resseca as mucosas**.",
      "C": "[INCORRETA] Pode causar arritmias, mas não é o efeito terapêutico ou colateral esperado nessa magnitude de forma universal.",
      "D": "[INCORRETA] Atropina diminui o suor e a pressão geralmente permanece estável ou sobe levemente pela taquicardia."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 4114,
    "materia": "bmf3",
    "aula_id": "bmf3_a2",
    "tema": "bmf3_a2",
    "modulo": 3,
    "dificuldade": 1,
    "correta": 3,
    "enunciado": "A 'Pilocarpina' é um agonista muscarínico utilizado no tratamento do glaucoma. Qual o seu efeito ocular que auxilia na drenagem do humor aquoso?),",
    "opcoes": [
      "A) Midríase (dilatação da pupila).",
      "B) Cegueira temporária.",
      "C) Paralisia do globo ocular.",
      "D) Miose (contração da pupila)."
    ],
    "explicacao_geral": "A miose afasta a íris do ângulo da câmara anterior, facilitando a drenagem.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Piora o glaucoma de ângulo fechado.",
      "B": "[INCORRETA] Pode causar visão turva, mas não cegueira.",
      "C": "[INCORRETA] Não afeta os músculos extrínsecos.",
      "D": "[CORRETA] A **Pilocarpina** provoca **Miose Terapêutica**."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 4115,
    "materia": "bmf3",
    "aula_id": "bmf3_a2",
    "tema": "bmf3_a2",
    "modulo": 3,
    "dificuldade": 2,
    "correta": 0,
    "enunciado": "O fármaco 'Betanecol' é utilizado para tratar qual condição clínica devido à sua ação agonista muscarínica seletiva no trato gastrointestinal e urinário?),",
    "opcoes": [
      "A) Retenção urinária pós-operatória e íleo paralítico (atonias).",
      "B) Diarreia infecciosa.",
      "C) Cólica renal.",
      "D) Crise de asma."
    ],
    "explicacao_geral": "O betanecol aumenta o tônus do detrusor da bexiga e o peristaltismo.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] O **Betanecol** estimula o **esvaziamento visceral**.",
      "B": "[INCORRETA] Pioraria o quadro.",
      "C": "[INCORRETA] Pioraria a dor por aumentar o peristaltismo ureteral.",
      "D": "[INCORRETA] Contraindicado (causa broncoconstrição)."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 4116,
    "materia": "bmf3",
    "aula_id": "bmf3_a2",
    "tema": "bmf3_a2",
    "modulo": 3,
    "dificuldade": 2,
    "correta": 2,
    "enunciado": "Qual fármaco é um antagonista muscarínico frequentemente utilizado para prevenir cinetose (enjoo de movimento) devido à sua boa penetração no SNC?),",
    "opcoes": [
      "A) Neostigmina.",
      "B) Betanecol.",
      "C) Escopolamina (Hioscina).",
      "D) Adrenalina."
    ],
    "explicacao_geral": "A escopolamina bloqueia a sinalização colinérgica no sistema vestibular e centro do vômito.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Inibidor da acetilcolinesterase (aumenta acetilcolina).",
      "B": "[INCORRETA] Agonista muscarínico.",
      "C": "[CORRETA] A **Escopolamina** é um **Antiemético Anticolinérgico**.",
      "D": "[INCORRETA] Agonista adrenérgico."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 4117,
    "materia": "bmf3",
    "aula_id": "bmf3_a2",
    "tema": "bmf3_a2",
    "modulo": 3,
    "dificuldade": 3,
    "correta": 1,
    "enunciado": "Os 'Inibidores da Acetilcolinesterase' (como a Piridostigmina) são utilizados no tratamento da Miastenia Gravis. Qual o mecanismo de ação?),",
    "opcoes": [
      "A) Bloqueiam os receptores de anticorpos.",
      "B) Impedem a degradação da acetilcolina na fenda sináptica, aumentando sua concentração e facilitando a ligação aos poucos receptores nicotínicos restantes.",
      "C) Destroem o timo do paciente.",
      "D) Fornecem energia extra para os músculos."
    ],
    "explicacao_geral": "Ao aumentar o tempo de permanência da acetilcolina, melhora-se a força muscular temporariamente.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Imunoglobulina ou plasmaférese fariam isso.",
      "B": "[CORRETA] Estes fármacos são **Inibidores Enzimáticos** que restauram a **força na Miastenia**.",
      "C": "[INCORRETA] Procedimento cirúrgico (timectomia).",
      "D": "[INCORRETA] Absurdo metabólico."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 4118,
    "materia": "bmf3",
    "aula_id": "bmf3_a2",
    "tema": "bmf3_a2",
    "modulo": 3,
    "dificuldade": 3,
    "correta": 3,
    "enunciado": "A intoxicação por organofosforados (inseticidas) causa uma 'Crise Colinérgica' grave. Qual o antídoto de primeira linha para reverter os efeitos MUSCARÍNICOS (bradicardia, secreções)?),",
    "opcoes": [
      "A) Adrenalina.",
      "B) Morfina.",
      "C) Insulina.",
      "D) Atropina."
    ],
    "explicacao_geral": "A atropina deve ser administrada em doses elevadas até a 'atropinização' do paciente (secagem das secreções).",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Pode ajudar na pressão, mas não bloqueia o receptor colinérgico.",
      "B": "[INCORRETA] Pioraria a depressão respiratória.",
      "C": "[INCORRETA] Irracional.",
      "D": "[CORRETA] A **Atropina** é o antídoto da **Intoxicação Colinérgica**."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 4119,
    "materia": "bmf3",
    "aula_id": "bmf3_a2",
    "tema": "bmf3_a2",
    "modulo": 3,
    "dificuldade": 2,
    "correta": 0,
    "enunciado": "O 'Ipratrópio' é um antagonista muscarínico administrado via inalatória. Por que ele é preferido em vez da atropina para o tratamento da DPOC e Asma?),",
    "opcoes": [
      "A) Devido ao seu caráter amônio quaternário, ele possui baixa absorção sistêmica, agindo localmente nos pulmões com poucos efeitos colaterais sistêmicos (ex: sem taquicardia severa).",
      "B) Porque ele é mais barato.",
      "C) Porque ele tem cheiro de morango.",
      "D) Porque ele mata bactérias nos pulmões."
    ],
    "explicacao_geral": "O ipratrópio promove broncodilatação sem atravessar a barreira hematencefálica.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] O **Ipratrópio** oferece **Segurança Sistêmica** na nebulização.",
      "B": "[INCORRETA] Motivo secundário/econômico.",
      "C": "[INCORRETA] Absurdo.",
      "D": "[INCORRETA] Não é um antibiótico."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 4120,
    "materia": "bmf3",
    "aula_id": "bmf3_a2",
    "tema": "bmf3_a2",
    "modulo": 3,
    "dificuldade": 2,
    "correta": 2,
    "enunciado": "Qual dos seguintes efeitos é um sintoma clássico do 'Efeito Anticolinérgico' (bloqueio muscarínico)?),",
    "opcoes": [
      "A) Diarreia.",
      "B) Suor excessivo.",
      "C) Retenção urinária.",
      "D) Produção excessiva de lágrima."
    ],
    "explicacao_geral": "Os fármacos anticolinérgicos 'secam' o corpo (boca seca, pele seca, olho seco, parada do peristaltismo e da micção).",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Efeito colinérgico.",
      "B": "[INCORRETA] Efeito colinérgico (sudorese).",
      "C": "[CORRETA] A **Retenção Urinária** é um efeito **Anticolinérgico** comum.",
      "D": "[INCORRETA] Efeito colinérgico."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  }
];

const data = JSON.parse(fs.readFileSync(QUESTOES_PATH, 'utf-8'));
data.questoes = data.questoes.concat(novasQuestoes);
fs.writeFileSync(QUESTOES_PATH, JSON.stringify(data, null, 2), 'utf-8');
console.log(`Sucesso: 8 questões da aula bmf3_a2 adicionadas.`);
