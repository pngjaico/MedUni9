import fs from 'fs';
import path from 'path';

const QUESTOES_PATH = 'data/questoes.json';

const novasQuestoes = [
  {
    "id": 3585,
    "materia": "bcm1",
    "aula_id": "bcm1_a20",
    "tema": "bcm1_a20",
    "modulo": 2,
    "dificuldade": 1,
    "correta": 1,
    "enunciado": "O ciclo celular é a série de eventos que levam à divisão da célula. Em qual fase ocorre a duplicação do material genético (DNA)?),",
    "opcoes": [
      "A) Fase G1.",
      "B) Fase S (Síntese).",
      "C) Fase G2.",
      "D) Mitose."
    ],
    "explicacao_geral": "A fase S garante que cada célula filha receba uma cópia completa do genoma.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Fase de crescimento e verificação metabólica inicial.",
      "B": "[CORRETA] A **Fase S** é o momento da **replicação do DNA**.",
      "C": "[INCORRETA] Fase de preparação final para a mitose.",
      "D": "[INCORRETA] Momento da segregação física dos cromossomos."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3586,
    "materia": "bcm1",
    "aula_id": "bcm1_a20",
    "tema": "bcm1_a20",
    "modulo": 2,
    "dificuldade": 1,
    "correta": 3,
    "enunciado": "Neurônios e células musculares cardíacas maduras geralmente não se dividem mais. Em qual fase do ciclo elas se encontram permanentemente?),",
    "opcoes": [
      "A) Metáfase.",
      "B) Fase S.",
      "C) Fase G2.",
      "D) Fase G0 (Quiescência)."
    ],
    "explicacao_geral": "A fase G0 é uma saída do ciclo celular ativo para um estado especializado.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Estado de divisão ativa.",
      "B": "[INCORRETA] Estariam duplicando DNA.",
      "C": "[INCORRETA] Estariam prontas para dividir.",
      "D": "[CORRETA] A **Fase G0** caracteriza células **diferenciadas** que não proliferam."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3587,
    "materia": "bcm1",
    "aula_id": "bcm1_a20",
    "tema": "bcm1_a20",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 0,
    "enunciado": "O sistema de controle do ciclo celular depende de moléculas que se unem para ativar a progressão. Quais são essas moléculas?),",
    "opcoes": [
      "A) Ciclinas e CDKs (Cinases Dependentes de Ciclina).",
      "B) Glicose e Insulina.",
      "C) Água e Sal.",
      "D) Actina e Miosina."
    ],
    "explicacao_geral": "As CDKs só são ativas quando ligadas à sua respectiva ciclina.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] O complexo **Ciclina/CDK** é o motor de controle do **ciclo celular**.",
      "B": "[INCORRETA] Moléculas metabólicas/hormonais.",
      "C": "[INCORRETA] Componentes inorgânicos.",
      "D": "[INCORRETA] Proteínas de movimento."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3588,
    "materia": "bcm1",
    "aula_id": "bcm1_a20",
    "tema": "bcm1_a20",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 2,
    "enunciado": "A 'Metáfase' é uma fase da mitose onde ocorre um evento visual característico. Qual é?),",
    "opcoes": [
      "A) Os cromossomos desaparecem.",
      "B) O núcleo se duplica em dez partes.",
      "C) Alinhamento dos cromossomos no equador da célula (placa metafásica).",
      "D) A célula explode."
    ],
    "explicacao_geral": "O alinhamento garante que as fibras do fuso tracionem as cromátides irmãs de forma igual.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Estão mais visíveis e condensados que nunca.",
      "B": "[INCORRETA] Divisão binária típica.",
      "C": "[CORRETA] A **Metáfase** é o momento de **alinhamento central** dos cromossomos.",
      "D": "[INCORRETA] Evento patológico ou de lise, não mitótico normal."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3589,
    "materia": "bcm1",
    "aula_id": "bcm1_a20",
    "tema": "bcm1_a20",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 1,
    "enunciado": "Um paciente em quimioterapia usa um fármaco que impede a formação do fuso mitótico (Microtúbulos). Em qual fase do ciclo celular essa divisão será interrompida?),",
    "opcoes": [
      "A) Fase G1.",
      "B) Mitose (especialmente o ponto de controle da metáfase).",
      "C) Fase S.",
      "D) Fase G0."
    ],
    "explicacao_geral": "Sem os microtúbulos, os cromossomos não se alinham e a célula não prossegue para a anáfase.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] O fuso é necessário muito depois de G1.",
      "B": "[CORRETA] Fármacos antimitóticos travam a célula na **Mitose**.",
      "C": "[INCORRETA] A replicação do DNA em S é anterior à formação do fuso visível.",
      "D": "[INCORRETA] Células em G0 não formam fuso mitótico."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 3590,
    "materia": "bcm1",
    "aula_id": "bcm1_a20",
    "tema": "bcm1_a20",
    "modulo": 2,
    "dificuldade": 3,
    "correta": 0,
    "enunciado": "A proteína p53 é conhecida como a 'Guardiã do Genoma'. Qual a sua função quando o DNA celular sofre danos?),",
    "opcoes": [
      "A) Ela interrompe o ciclo celular para reparo ou induz a apoptose se o dano for irreparável, impedindo o surgimento de câncer.",
      "B) Ela duplica o DNA quebrado rapidamente.",
      "C) Ela transforma o câncer em músculo.",
      "D) Ela desliga o sistema imune."
    ],
    "explicacao_geral": "A p53 atua principalmente no checkpoint G1/S através da ativação da p21 (inibidor de CDK).",
    "explicacoes_opcoes": {
      "A": "[CORRETA] A **p53** é o principal **supressor de tumor** do organismo.",
      "B": "[INCORRETA] Ela para o ciclo para que o DNA polimerase/enzimas de reparo ajam, mas a p53 não duplica DNA sozinha.",
      "C": "[INCORRETA] Sem fundamento biológico.",
      "D": "[INCORRETA] Ela atua no controle interno de qualidade genômica da própria célula."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 3591,
    "materia": "bcm1",
    "aula_id": "bcm1_a20",
    "tema": "bcm1_a20",
    "modulo": 2,
    "dificuldade": 3,
    "correta": 3,
    "enunciado": "No câncer, o ciclo celular torna-se descontrolado. Qual alteração molecular é comum em células tumorais agressivas?),",
    "opcoes": [
      "A) Aumento da produção de melanina.",
      "B) Perda de cor da membrana.",
      "C) Inativação total das mitocôndrias.",
      "D) Mutações que inativam os supressores de tumor (como p53 ou RB) ou hiperexpressam oncogenes (como ciclina D)."
    ],
    "explicacao_geral": "Isso permite que a célula ignore os sinais de parada e se divida indefinidamente.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Característico do melanoma, mas não é a causa do descontrole do ciclo em si.",
      "B": "[INCORRETA] Irrelevante.",
      "C": "[INCORRETA] Células cancerosas dependem de alta energia (geralmente via glicólise aeróbica/Efeito Warburg), mas mantêm mitocôndrias para biosíntese.",
      "D": "[CORRETA] O **câncer** é essencialmente uma patologia de **desregulação do ciclo celular**."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 3592,
    "materia": "bcm1",
    "aula_id": "bcm1_a20",
    "tema": "bcm1_a20",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 2,
    "enunciado": "O que ocorre durante a 'Anáfase' da mitose?),",
    "opcoes": [
      "A) O DNA é sintetizado.",
      "B) O núcleo reaparece.",
      "C) Os microtúbulos encurtam e separam as cromátides irmãs para os polos opostos da célula.",
      "D) A citocinese termina."
    ],
    "explicacao_geral": "A anáfase é o momento crítico de separação da informação genética.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Ocorrido na Fase S.",
      "B": "[INCORRETA] Ocorre na Telófase.",
      "C": "[CORRETA] A **Anáfase** é a fase de **migração dos cromossomos** para os polos.",
      "D": "[INCORRETA] A citocinese (clivagem citoplasmática) ocorre após a anáfase, concluindo em telófase/G1."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  }
];

const data = JSON.parse(fs.readFileSync(QUESTOES_PATH, 'utf-8'));
data.questoes = data.questoes.concat(novasQuestoes);
fs.writeFileSync(QUESTOES_PATH, JSON.stringify(data, null, 2), 'utf-8');
console.log(`Sucesso: 8 questões da aula bcm1_a20 adicionadas.`);
