import fs from 'fs';
import path from 'path';

const QUESTOES_PATH = 'data/questoes.json';

const novasQuestoes = [
  {
    "id": 3537,
    "materia": "bcm1",
    "aula_id": "bcm1_a14",
    "tema": "bcm1_a14",
    "modulo": 2,
    "dificuldade": 1,
    "correta": 1,
    "enunciado": "Os lisossomos são organelas digestivas da célula. Qual o ambiente interno necessário para que suas enzimas (hidrolases ácidas) funcionem corretamente?),",
    "opcoes": [
      "A) Ambiente básico (pH superior a 8).",
      "B) Ambiente ácido (pH em torno de 5,0).",
      "C) Ambiente neutro (pH 7,0).",
      "D) O pH não importa para os lisossomos."
    ],
    "explicacao_geral": "O pH ácido é mantido por uma bomba de prótons que consome ATP.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Hidrolases são inativas/desnaturadas em pH básico.",
      "B": "[CORRETA] O **pH ácido** é o 'interruptor' de ativação das **enzimas lisossomais**.",
      "C": "[INCORRETA] No citoplasma (pH ~7,2), se um lisossomo estourar, as enzimas perdem força, protegendo a célula.",
      "D": "[INCORRETA] O pH é o fator regulador central."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3538,
    "materia": "bcm1",
    "aula_id": "bcm1_a14",
    "tema": "bcm1_a14",
    "modulo": 2,
    "dificuldade": 1,
    "correta": 3,
    "enunciado": "A 'Autofagia' é um processo vital mediado pelos lisossomos. O que ela representa?),",
    "opcoes": [
      "A) A morte da célula por falta de comida.",
      "B) A entrada de bactérias externas.",
      "C) A produção de novas mitocôndrias.",
      "D) A digestão e reciclagem de componentes da própria célula (como organelas velhas ou defeituosas)."
    ],
    "explicacao_geral": "A autofagia permite a renovação celular e a sobrevivência em períodos de carência nutricional.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] É um mecanismo de sobrevivência e limpeza.",
      "B": "[INCORRETA] Isso é heterofagia (fagocitose).",
      "C": "[INCORRETA] Mitocôndrias surgem por fissão.",
      "D": "[CORRETA] A **Autofagia** é o sistema de **reciclagem e limpeza interna** da célula."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3539,
    "materia": "bcm1",
    "aula_id": "bcm1_a14",
    "tema": "bcm1_a14",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 0,
    "enunciado": "Os peroxissomos são organelas que realizam reações oxidativas. Qual a enzima responsável por degradar o peróxido de hidrogênio (H2O2) tóxico em água e oxigênio?),",
    "opcoes": [
      "A) Catalase.",
      "B) Histamina.",
      "C) Lactase.",
      "D) Amilase."
    ],
    "explicacao_geral": "O peróxido de hidrogênio é um subproduto das oxidases presentes no peroxissomo.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] A **Catalase** protege a célula do estresse oxidativo dentro dos **peroxissomos**.",
      "B": "[INCORRETA] Mediador inflamatório.",
      "C": "[INCORRETA] Degrada lactose.",
      "D": "[INCORRETA] Degrada amido."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3540,
    "materia": "bcm1",
    "aula_id": "bcm1_a14",
    "tema": "bcm1_a14",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 2,
    "enunciado": "Além da proteção antioxidante, qual outra função metabólica fundamental ocorre nos peroxissomos?),",
    "opcoes": [
      "A) Síntese de proteínas de exportação.",
      "B) Glicólise anaeróbica.",
      "C) Beta-oxidação de ácidos graxos de cadeia muito longa (VLCFAs).",
      "D) Produção de anticorpos."
    ],
    "explicacao_geral": "Os ácidos graxos são encurtados no peroxissomo para depois serem finalizados na mitocôndria.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Função do RER.",
      "B": "[INCORRETA] Ocorre no citosol.",
      "C": "[CORRETA] Os **peroxissomos** processam **gorduras complexas** que a mitocôndria não consegue iniciar.",
      "D": "[INCORRETA] Função do RER/Golgi."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3541,
    "materia": "bcm1",
    "aula_id": "bcm1_a14",
    "tema": "bcm1_a14",
    "modulo": 2,
    "dificuldade": 3,
    "correta": 1,
    "enunciado": "A Doença de Tay-Sachs é causada por uma deficiência da enzima Hexosaminidase A. Como resultado, gangliosídeos (lipídios complexos) acumulam-se nos neurônios, levando à degeneração. Em qual organela esse acúmulo ocorre?),",
    "opcoes": [
      "A) Mitocôndria.",
      "B) Lisossomo.",
      "C) Retículo Endoplasmático Liso.",
      "D) Núcleo."
    ],
    "explicacao_geral": "Tay-Sachs é o exemplo clássico de doença de depósito lisossomal.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Causaria erro na produção de energia (ATPs), não acúmulo de gangliosídeos.",
      "B": "[CORRETA] O **Lisossomo** é o local de depósito nas **doenças enzimáticas degradativas**.",
      "C": "[INCORRETA] Sintetiza lipídios, mas não é o local de sua degradação final patológica.",
      "D": "[INCORRETA] O DNA não é afetado pelo acúmulo lipídico vacuolar."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 3542,
    "materia": "bcm1",
    "aula_id": "bcm1_a14",
    "tema": "bcm1_a14",
    "modulo": 2,
    "dificuldade": 3,
    "correta": 3,
    "enunciado": "A Adrenoleucodistrofia (retratada no filme 'O Óleo de Lorenzo') é uma patologia ligada ao acúmulo de ácidos graxos de cadeia muito longa que destroem a mielina dos neurônios. Qual a organela defeituosa?),",
    "opcoes": [
      "A) Ribossomo.",
      "B) Aparelho de Golgi.",
      "C) Centríolo.",
      "D) Peroxissomo."
    ],
    "explicacao_geral": "O defeito está no transportador de membrana que leva os ácidos graxos para dentro do peroxissomo.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Foco em proteínas.",
      "B": "[INCORRETA] Foco em endereçamento.",
      "C": "[INCORRETA] Foco em divisão celular.",
      "D": "[CORRETA] A **Adrenoleucodistrofia** é uma **doença peroxissomal** grave."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 3543,
    "materia": "bcm1",
    "aula_id": "bcm1_a14",
    "tema": "bcm1_a14",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 0,
    "enunciado": "Qual a relação entre o processo de 'Fagocitose' e os lisossomos?),",
    "opcoes": [
      "A) O fagossomo (com a bactéria) funde-se ao lisossomo para formar o fagolisossomo, onde ocorrerá a digestão do material extrínseco.",
      "B) Os lisossomos jogam suas enzimas para fora da célula para comer a bactéria.",
      "C) Os lisossomos não participam da fagocitose.",
      "D) O lisossomo se transforma em uma bactéria."
    ],
    "explicacao_geral": "O lisossomo fornece o maquinário enzimático necessário para a destruição de patógenos.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] A fusão com o **lisossomo** finaliza a **fagocitose** via digestão ácida.",
      "B": "[INCORRETA] Enzimas lisossomais agem apenas no compartimento intracelular (vácuo digestivo).",
      "C": "[INCORRETA] Eles são o componente 'executor' do processo.",
      "D": "[INCORRETA] Absurdo biológico."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3544,
    "materia": "bcm1",
    "aula_id": "bcm1_a14",
    "tema": "bcm1_a14",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 2,
    "enunciado": "Um paciente com Síndrome de Zellweger (ausência de peroxissomos funcionais) apresenta graves danos neurológicos e hepáticos. Por que os peroxissomos são tão abundantes no Fígado?),",
    "opcoes": [
      "A) Para produzir açúcar.",
      "B) Para armazenar sangue.",
      "C) Para realizar a desintoxicação de metabólitos e substâncias exógenas e processar colesterol.",
      "D) Para fabricar hemoglobina."
    ],
    "explicacao_geral": "O fígado e o rim são os centros de faxina química do corpo, ricos em REL e peroxissomos.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Glicogênese é um processo enzimático mais complexo que não depende exclusivamente do peroxissomo.",
      "B": "[INCORRETA] O fígado é vascularizado, mas peroxissomos são organelas intracelulares.",
      "C": "[CORRETA] A **desintoxicação e o metabolismo lipídico** são as causas da abundância de **peroxissomos no fígado**.",
      "D": "[INCORRETA] Ocorre na medula óssea."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  }
];

const data = JSON.parse(fs.readFileSync(QUESTOES_PATH, 'utf-8'));
data.questoes = data.questoes.concat(novasQuestoes);
fs.writeFileSync(QUESTOES_PATH, JSON.stringify(data, null, 2), 'utf-8');
console.log(`Sucesso: 8 questões da aula bcm1_a14 adicionadas.`);
