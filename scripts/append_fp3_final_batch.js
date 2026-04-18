import fs from 'fs';
import path from 'path';

const QUESTOES_PATH = 'data/questoes.json';

const novasQuestoes = [
  {
    "id": 4361,
    "materia": "fp3",
    "aula_id": "fp3_a11",
    "tema": "fp3_a11",
    "modulo": 3,
    "dificuldade": 1,
    "correta": 1,
    "enunciado": "Qual o mecanismo fisiopatológico central do 'Diabetes Mellitus Tipo 1'?),",
    "opcoes": [
      "A) Resistência periférica à insulina.",
      "B) Destruição autoimune das células beta pancreáticas, levando à deficiência absoluta de insulina.",
      "C) Excesso de ingestão de açúcar apenas.",
      "D) Falha na absorção intestinal de glicose."
    ],
    "explicacao_geral": "Geralmente diagnosticado na infância ou adolescência, exige insulinoterapia vitalícia.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Característica principal do DM2.",
      "B": "[CORRETA] O **DM1** é uma doença **autoimune**.",
      "C": "[INCORRETA] Estilo de vida é fator de risco para DM2, mas não define a patogênese do DM1.",
      "D": "[INCORRETA] Absurdo."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 4362,
    "materia": "fp3",
    "aula_id": "fp3_a11",
    "tema": "fp3_a11",
    "modulo": 3,
    "dificuldade": 2,
    "correta": 3,
    "enunciado": "A 'Cetoacidose Diabética' (CAD) é uma complicação aguda grave. Qual a causa da formação dos corpos cetônicos?),",
    "opcoes": [
      "A) Excesso de insulina no sangue.",
      "B) Falta de glicose para o cérebro.",
      "C) Acúmulo de ácido lático pelo exercício.",
      "D) Ausência de insulina que leva à lipólise desenfreada; os ácidos graxos liberados são convertidos em corpos cetônicos no fígado."
    ],
    "explicacao_geral": "A CAD cursa com hiperglicemia, acidose metabólica e cetonúria.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Ocorre na hipoglicemia iatrogênica.",
      "B": "[INCORRETA] A glicose está alta no sangue, mas não entra nas células.",
      "C": "[INCORRETA] Acidose lática.",
      "D": "[CORRETA] A **CAD** resulta da **lipólise por falta de insulina**."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 4363,
    "materia": "fp3",
    "aula_id": "fp3_a12",
    "tema": "fp3_a12",
    "modulo": 3,
    "dificuldade": 1,
    "correta": 0,
    "enunciado": "A 'Anemia Ferropriva' (por falta de ferro) é classificada morfologicamente como:),",
    "opcoes": [
      "A) Microcítica e Hipocrômica (hemácias pequenas e pálidas).",
      "B) Macrocítica (hemácias grandes).",
      "C) Normocítica e Normocrômica.",
      "D) Hemolítica."
    ],
    "explicacao_geral": "O ferro é essencial para a síntese do heme; sem ele, a hemoglobina não se forma adequadamente.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] A **Falta de Ferro** gera anemia **Micro/Hipo**.",
      "B": "[INCORRETA] Típico de falta de B12 ou Ácido Fólico.",
      "C": "[INCORRETA] Típico de doenças crônicas ou sangramento agudo inicial.",
      "D": "[INCORRETA] Típico de destruição periférica das hemácias."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 4364,
    "materia": "fp3",
    "aula_id": "fp3_a12",
    "tema": "fp3_a12",
    "modulo": 3,
    "dificuldade": 2,
    "correta": 2,
    "enunciado": "Qual o mecanismo da 'Anemia Perniciosa'?),",
    "opcoes": [
      "A) Perda de sangue por vermitose.",
      "B) Falta de ingestão de carne.",
      "C) Deficiência de Vitamina B12 devido à falta de Fator Intrínseco (causada por autoimunidade contra células parietais do estômago).",
      "D) Destruição da medula óssea por radiação."
    ],
    "explicacao_geral": "A vitamina B12 é essencial para a síntese de DNA e mielinização dos neurônios.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Anemia ferropriva por sangramento.",
      "B": "[INCORRETA] Causa anemia carencial, mas a 'perniciosa' refere-se especificamente à falha de absorção por falta de fator intrínseco.",
      "C": "[CORRETA] A **Anemia Perniciosa** envolve **Autoimunidade Gástrica**.",
      "D": "[INCORRETA] Anemia aplástica."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 4365,
    "materia": "fp3",
    "aula_id": "fp3_a13",
    "tema": "fp3_a13",
    "modulo": 3,
    "dificuldade": 2,
    "correta": 3,
    "enunciado": "A 'Hemofilia A' é um distúrbio da hemostasia secundária. Qual fator de coagulação está deficiente nesta doença?),",
    "opcoes": [
      "A) Fator II (Protrombina).",
      "B) Fator VII.",
      "C) Fator X.",
      "D) Fator VIII."
    ],
    "explicacao_geral": "Transmitida de forma recessiva ligada ao cromossomo X, afeta majoritariamente homens.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Hipoprotrombinemia.",
      "B": "[INCORRETA] Deficiência de fator VII (via extrínseca).",
      "C": "[INCORRETA] Deficiência de fator X.",
      "D": "[CORRETA] A **Hemofilia A** é a deficiência de **Fator VIII**."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 4366,
    "materia": "fp3",
    "aula_id": "fp3_a14",
    "tema": "fp3_a14",
    "modulo": 3,
    "dificuldade": 2,
    "correta": 1,
    "enunciado": "Qual a alteração neurotransmissora central observada na Doença de Parkinson?),",
    "opcoes": [
      "A) Excesso de Serotonina.",
      "B) Degeneração de neurônios dopaminérgicos na substância negra, levando à deficiência de Dopamina no estriado.",
      "C) Falta de Acetilcolina no hipocampo.",
      "D) Excesso de Glutamato na medula."
    ],
    "explicacao_geral": "Leva à tríade: tremor de repouso, bradicinesia e rigidez em 'roda dentada'.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Síndrome serotoninérgica causa agitação e tremores diferentes.",
      "B": "[CORRETA] **Parkinson** é deficiência de **Dopamina**.",
      "C": "[INCORRETA] Característica da Doença de Alzheimer.",
      "D": "[INCORRETA] Relacionado à excitotoxicidade em outras patologias."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 4367,
    "materia": "fp3",
    "aula_id": "fp3_a14",
    "tema": "fp3_a14",
    "modulo": 3,
    "dificuldade": 3,
    "correta": 0,
    "enunciado": "Na 'Esclerose Múltipla', qual o processo fisiopatológico básico?),",
    "opcoes": [
      "A) Desmielinização mediada por processo autoimune no Sistema Nervoso Central (SNC).",
      "B) Bloqueio da placa motora por anticorpos.",
      "C) Acúmulo de placas beta-amiloides.",
      "D) Isquemia cerebral crônica."
    ],
    "explicacao_geral": "A perda da bainha de mielina prejudica a condução dos impulsos elétricos.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] A **Esclerose Múltipla** é uma doença **Desmielinizante**.",
      "B": "[INCORRETA] Miastenia Gravis.",
      "C": "[INCORRETA] Doença de Alzheimer.",
      "D": "[INCORRETA] Demência vascular."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 4368,
    "materia": "fp3",
    "aula_id": "fp3_a15",
    "tema": "fp3_a15",
    "modulo": 3,
    "dificuldade": 2,
    "correta": 2,
    "enunciado": "Qual a principal alteração na 'Gota' (Artrite Gotosa)?),",
    "opcoes": [
      "A) Desgaste da cartilagem pela idade.",
      "B) Infecção bacteriana na articulação.",
      "C) Deposição de cristais de monourato de sódio nas articulações, secundária à hiperuricemia.",
      "D) Falta de cálcio nos ossos."
    ],
    "explicacao_geral": "Causa episódios de dor extrema, calor e rubor, frequentemente na base do grande hálux (podagra).",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Osteoartrite/Artrose.",
      "B": "[INCORRETA] Artrite Séptica.",
      "C": "[CORRETA] A **Gota** é causada pelo **Ácido Úrico**.",
      "D": "[INCORRETA] Osteoporose."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  }
];

const data = JSON.parse(fs.readFileSync(QUESTOES_PATH, 'utf-8'));
data.questoes = data.questoes.concat(novasQuestoes);
fs.writeFileSync(QUESTOES_PATH, JSON.stringify(data, null, 2), 'utf-8');
console.log(`Sucesso: 8 questões da aula fp3_a11-a15 adicionadas.`);
