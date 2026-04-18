import fs from 'fs';
import path from 'path';

const QUESTOES_PATH = 'data/questoes.json';

const novasQuestoes = [
  {
    "id": 3937,
    "materia": "mad1",
    "aula_id": "mad1_a13",
    "tema": "mad1_a13",
    "modulo": 2,
    "dificuldade": 1,
    "correta": 1,
    "enunciado": "Qual das hepatites virais é transmitida predominantemente pela via fecal-oral (alimentos ou água contaminados) e NÃO evolui para formas crônicas?),",
    "opcoes": [
      "A) Hepatite B.",
      "B) Hepatite A.",
      "C) Hepatite C.",
      "D) Hepatite D."
    ],
    "explicacao_geral": "A vacinação infantil reduziu drasticamente a incidência de Hepatite A no Brasil.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Transmissão parenteral/sexual; pode cronificar.",
      "B": "[CORRETA] A **Hepatite A** tem transmissão **Fecal-Oral** e curso **Agudo**.",
      "C": "[INCORRETA] Transmissão parenteral; alta taxa de cronicidade.",
      "D": "[INCORRETA] Exige a presença do vírus B (coinfecção ou superinfecção)."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3938,
    "materia": "mad1",
    "aula_id": "mad1_a13",
    "tema": "mad1_a13",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 0,
    "enunciado": "Na interpretação da sorologia para Hepatite B, o que indica que o paciente está IMUNIZADO por vacinação?),",
    "opcoes": [
      "A) Anti-HBs positivo isolado (com HBsAg e Anti-HBc negativos).",
      "B) HBsAg positivo.",
      "C) Anti-HBc total positivo.",
      "D) HBeAg positivo."
    ],
    "explicacao_geral": "A vacina contém apenas o antígeno de superfície (HBsAg), gerando anticorpos específicos contra ele.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] O **Anti-HBs isolado** é o marcador de **Sucesso Vacinal**.",
      "B": "[INCORRETA] Indica infecção atual (aguda ou crônica).",
      "C": "[INCORRETA] Indica contato prévio com o vírus selvagem (cicatriz sorológica), não vacina.",
      "D": "[INCORRETA] Indica alta replicação viral e infectividade."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3939,
    "materia": "mad1",
    "aula_id": "mad1_a13",
    "tema": "mad1_a13",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 2,
    "enunciado": "Qual o principal marcador de 'Replicação Viral Ativa' e alta infectividade na Hepatite B?),",
    "opcoes": [
      "A) Anti-HBe.",
      "B) Anti-HBs.",
      "C) HBeAg.",
      "D) Anti-HBc IgM."
    ],
    "explicacao_geral": "O desaparecimento do HBeAg e surgimento do anti-HBe chama-se soroconversão HBe.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Indica redução da replicação viral.",
      "B": "[INCORRETA] Indica cura ou imunidade.",
      "C": "[CORRETA] O **HBeAg** correlaciona-se com **Alta Carga Viral**.",
      "D": "[INCORRETA] Indica infecção aguda recente (menos de 6 meses)."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3940,
    "materia": "mad1",
    "aula_id": "mad1_a13",
    "tema": "mad1_a13",
    "modulo": 2,
    "dificuldade": 3,
    "correta": 3,
    "enunciado": "A Hepatite C é conhecida por ser frequentemente silenciosa. Qual a evolução mais comum após a infecção aguda pelo HCV, sem tratamento?),",
    "opcoes": [
      "A) Cura espontânea em 99% dos casos.",
      "B) Óbito em 24 horas.",
      "C) Cura plena com imunidade vitalícia protetora.",
      "D) Cronicidade em cerca de 60-85% dos casos, com risco de cirrose e carcinoma hepatocelular (HCC)."
    ],
    "explicacao_geral": "Diferente da Hep B em adultos (que cura 95%), a Hep C raramente é eliminada espontaneamente.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Apenas 15-40% curam sozinhos.",
      "B": "[INCORRETA] Curso insidioso por décadas.",
      "C": "[INCORRETA] Anticorpos anti-HCV não conferem imunidade protetora devido à alta variabilidade do vírus.",
      "D": "[CORRETA] A **Hepatite C** é a principal causa de **Hepatopatia Crônica** e transplante."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3941,
    "materia": "mad1",
    "aula_id": "mad1_a13",
    "tema": "mad1_a13",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 1,
    "enunciado": "Um paciente apresenta Anti-HBc Total positivo e HBsAg positivo por mais de 6 meses. Qual o seu diagnóstico?),",
    "opcoes": [
      "A) Hepatite B Aguda.",
      "B) Hepatite B Crônica.",
      "C) Imunidade por vacina.",
      "D) Cura definitiva da Hepatite B."
    ],
    "explicacao_geral": "A persistência do HBsAg além de 180 dias define a cronicidade.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Exigiria Anti-HBc IgM positivo e tempo < 6 meses.",
      "B": "[CORRETA] O **HBsAg persistente** confirma a **Hepatite B Crônica**.",
      "C": "[INCORRETA] Vacina não positiva o Anti-HBc.",
      "D": "[INCORRETA] Na cura, o HBsAg some e o anti-HBs aparece."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 3942,
    "materia": "mad1",
    "aula_id": "mad1_a13",
    "tema": "mad1_a13",
    "modulo": 2,
    "dificuldade": 3,
    "correta": 2,
    "enunciado": "A Hepatite D (Vírus Delta) possui uma característica replicativa peculiar. Qual é ela?),",
    "opcoes": [
      "A) Ela é um vírus DNA gigante.",
      "B) Ela só infecta quem já tem Hepatite C.",
      "C) Ela é um vírus defectivo que necessita obrigatoriamente do HBsAg (do vírus B) para compor seu envelope e infectar novas células.",
      "D) Ela é transmitida por mosquitos."
    ],
    "explicacao_geral": "Sem o vírus B, o vírus D não consegue se propagar.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] É um vírus RNA pequeno.",
      "B": "[INCORRETA] Depende do vírus B.",
      "C": "[CORRETA] O **Vírus Delta** é um **parasita do Vírus B**.",
      "D": "[INCORRETA] Transmissão parenteral/sangue."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3943,
    "materia": "mad1",
    "aula_id": "mad1_a13",
    "tema": "mad1_a13",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 3,
    "enunciado": "Qual hepatite viral apresenta um risco significativamente maior (até 20% de letalidade) quando acomete mulheres grávidas no terceiro trimestre?),",
    "opcoes": [
      "A) Hepatite A.",
      "B) Hepatite B.",
      "C) Hepatite C.",
      "D) Hepatite E."
    ],
    "explicacao_geral": "O mecanismo exato dessa gravidade na gestação ainda não é totalmente compreendido.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Geralmente benigna em grávidas.",
      "B": "[INCORRETA] Risco existe, mas não esse nível de letalidade aguda específica fulminante comparada à Hep E.",
      "C": "[INCORRETA] Cronicidade é o problema, não a falência hepática fulminante na gravidez especificamente.",
      "D": "[CORRETA] A **Hepatite E** é perigosa no **terceiro trimestre gestacional**."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 3944,
    "materia": "mad1",
    "aula_id": "mad1_a13",
    "tema": "mad1_a13",
    "modulo": 2,
    "dificuldade": 3,
    "correta": 0,
    "enunciado": "Sobre o vírus da Hepatite B, o que representa a chamada 'Janela Imunológica'?),",
    "opcoes": [
      "A) Período em que o HBsAg sumiu, mas o Anti-HBs ainda não apareceu, sendo o Anti-HBc IgM o único marcador de infecção aguda presente.",
      "B) O tempo que o médico demora para ver o exame.",
      "C) Quando o paciente está curado e imunizado.",
      "D) O tempo entre a vacina e a proteção."
    ],
    "explicacao_geral": "É um período crítico onde o diagnóstico pode ser perdido se não se solicitar o anti-HBc.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] A **Janela Imunológica** é o 'vazio' entre o **HBsAg e o Anti-HBs**.",
      "B": "[INCORRETA] Administrativo/Logístico.",
      "C": "[INCORRETA] Caracteriza o final da janela.",
      "D": "[INCORRETA] Período de soroconversão vacinal, não janela diagnóstica clínica típica."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  }
];

const data = JSON.parse(fs.readFileSync(QUESTOES_PATH, 'utf-8'));
data.questoes = data.questoes.concat(novasQuestoes);
fs.writeFileSync(QUESTOES_PATH, JSON.stringify(data, null, 2), 'utf-8');
console.log(`Sucesso: 8 questões da aula mad1_a13 adicionadas.`);
