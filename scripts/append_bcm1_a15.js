import fs from 'fs';
import path from 'path';

const QUESTOES_PATH = 'data/questoes.json';

const novasQuestoes = [
  {
    "id": 3545,
    "materia": "bcm1",
    "aula_id": "bcm1_a15",
    "tema": "bcm1_a15",
    "modulo": 2,
    "dificuldade": 1,
    "correta": 3,
    "enunciado": "As mitocôndrias são as 'usinas de força' da célula. Qual a principal molécula energética produzida por elas?),",
    "opcoes": [
      "A) Glicose.",
      "B) Hemoglobina.",
      "C) DNA.",
      "D) ATP (Adenosina Trifosfato)."
    ],
    "explicacao_geral": "O ATP é a moeda energética universal que as células utilizam para realizar trabalho.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] É o substrato que será quebrado para produzir ATP.",
      "B": "[INCORRETA] Proteína de transporte de gases.",
      "C": "[INCORRETA] Molécula de informação genética.",
      "D": "[CORRETA] A produção de **ATP** via respiração celular é a **função mitocondrial** primária."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3546,
    "materia": "bcm1",
    "aula_id": "bcm1_a15",
    "tema": "bcm1_a15",
    "modulo": 2,
    "dificuldade": 1,
    "correta": 1,
    "enunciado": "A Teoria Endossimbiótica sugere que as mitocôndrias originaram-se de bactérias ancestrais. Qual evidência estrutural apoia fortemente essa teoria?),",
    "opcoes": [
      "A) As mitocôndrias possuem núcleo próprio.",
      "B) As mitocôndrias possuem DNA circular e ribossomos próprios (70S), semelhantes aos das bactérias.",
      "C) As mitocôndrias são feitas de açúcar.",
      "D) Elas respiram oxigênio."
    ],
    "explicacao_geral": "A autonomia de replicação e o maquinário genético bacteriano são as principais evidências.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Não possuem núcleo (envelope nuclear).",
      "B": "[CORRETA] O **DNA circular** e a capacidade de fusão/fissão remetem à **origem bacteriana**.",
      "C": "[INCORRETA] Possuem membrana lipídica e rica em proteínas.",
      "D": "[INCORRETA] Muitas bactérias não respiram oxigênio, então o uso de O2 sozinho não prova a endossimbiose (embora as mitocôndrias usem)."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3547,
    "materia": "bcm1",
    "aula_id": "bcm1_a15",
    "tema": "bcm1_a15",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 2,
    "enunciado": "A Cadeia Transportadora de Elétrons e a Fosforilação Oxidativa (com a enzima ATP Sintase) ocorrem em qual compartimento específico da mitocôndria?),",
    "opcoes": [
      "A) Matriz Mitocondrial.",
      "B) Membrana Externa.",
      "C) Membrana Interna (nas Cristas Mitocondriais).",
      "D) No espaço entre as mitocôndrias."
    ],
    "explicacao_geral": "A membrana interna é impermeável e contém os complexos proteicos da cadeia respiratória.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Local onde ocorre o Ciclo de Krebs.",
      "B": "[INCORRETA] Muito permeável devido às porinas, não suporta gradiente de prótons.",
      "C": "[CORRETA] A **Membrana Interna** sustenta o **gradiente de prótons** vital para a síntese de ATP.",
      "D": "[INCORRETA] O processo é intramitocondrial."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3548,
    "materia": "bcm1",
    "aula_id": "bcm1_a15",
    "tema": "bcm1_a15",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 0,
    "enunciado": "A herança mitocondrial humana é um caso particular da genética. Qual a sua origem?),",
    "opcoes": [
      "A) Exclusivamente materna (pelo óvulo).",
      "B) Exclusivamente paterna.",
      "C) Metade do pai e metade da mãe.",
      "D) Vem do espermatozoide apenas."
    ],
    "explicacao_geral": "As mitocôndrias do espermatozoide são geralmente destruídas ou não entram no óvulo durante a fertilização.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] Todas as **mitocôndrias de um indivíduo** vieram de sua **mãe**.",
      "B": "[INCORRETA] As mitocôndrias paternas são descartadas.",
      "C": "[INCORRETA] Válido para o DNA nuclear, não mitocondrial.",
      "D": "[INCORRETA] O contrário da realidade fisiológica."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3549,
    "materia": "bcm1",
    "aula_id": "bcm1_a15",
    "tema": "bcm1_a15",
    "modulo": 2,
    "dificuldade": 3,
    "correta": 3,
    "enunciado": "O 'Cianeto' é um veneno letal que bloqueia especificamente o Complexo IV (Citocromo C Oxidase) da cadeia respiratória. Por que isso causa a morte em poucos minutos?),",
    "opcoes": [
      "A) Porque ele impede a digestão do açúcar.",
      "B) Porque ele aumenta a temperatura do corpo até 50°C.",
      "C) Porque ele dissolve o coração.",
      "D) Porque ele interrompe o fluxo de elétrons, impedindo a formação do gradiente de prótons e a produção de ATP, colapsando a energia celular (asfixia celular)."
    ],
    "explicacao_geral": "Sem ATP, os processos vitais básicos (como bombas iônicas) param e a célula morre.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Bloqueia a UTILIZAÇÃO de energia, o açúcar continua lá, mas não serve para nada.",
      "B": "[INCORRETA] Termogenina faria isso, mas cianeto para tudo.",
      "C": "[INCORRETA] Dano molecular invisível a olho nu inicialmente.",
      "D": "[CORRETA] O **Cianeto** causa um **choque energético** fatal imediato."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 3550,
    "materia": "bcm1",
    "aula_id": "bcm1_a15",
    "tema": "bcm1_a15",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 1,
    "enunciado": "O tecido adiposo marrom (comum em recém-nascidos e animais hibernantes) possui mitocôndrias com uma proteína chamada 'Termogenina' (UCP-1). Qual a sua função?),",
    "opcoes": [
      "A) Produzir açúcar mais rápido.",
      "B) 'Desacoplar' a cadeia respiratória da síntese de ATP, dissipando o gradiente de prótons na forma de Calor para manter a temperatura corporal.",
      "C) Fazer a criança crescer mais rápido.",
      "D) Dar a cor marrom para a gordura."
    ],
    "explicacao_geral": "A energia que seria usada para fazer ATP é 'desperdiçada' como calor útil para o organismo.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Consome gordura para gerar calor.",
      "B": "[CORRETA] A **Termogenina** permite a geração de **calor sem tremores**.",
      "C": "[INCORRETA] Função do hormônio do crescimento (GH).",
      "D": "[INCORRETA] O alto número de mitocôndrias e ferro é que dá a cor marrom."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 3551,
    "materia": "bcm1",
    "aula_id": "bcm1_a15",
    "tema": "bcm1_a15",
    "modulo": 2,
    "dificuldade": 3,
    "correta": 0,
    "enunciado": "As Mitocondriopatias (doenças mitocondriais) afetam principalmente tecidos como músculo cardíaco e o cérebro. Por que esses órgãos são os alvos preferenciais?),",
    "opcoes": [
      "A) Porque são órgãos com altíssima demanda energética e dependência crítica da produção contínua de ATP.",
      "B) Porque as mitocôndrias não gostam desses órgãos.",
      "C) Porque esses órgãos não possuem vasos sanguíneos.",
      "D) Porque o DNA mitocondrial só existe no cérebro."
    ],
    "explicacao_geral": "Qualquer falha na usina de força celular afeta primeiro quem gasta mais energia.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] Órgãos de **alto metabolismo** sofrem primeiro as falhas na **respiração celular**.",
      "B": "[INCORRETA] Interpretação antropomórfica dos processos biológicos.",
      "C": "[INCORRETA] São os órgãos mais vascularizados do corpo.",
      "D": "[INCORRETA] O DNA mitocondrial está presente em quase todas as células humanas (exceto hemácias maduras)."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 3552,
    "materia": "bcm1",
    "aula_id": "bcm1_a15",
    "tema": "bcm1_a15",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 2,
    "enunciado": "A 'Apoptose' (morte celular programada) pode ser iniciada pela mitocôndria. Qual proteína é liberada no citoplasma para ativar as enzimas 'executoras' (caspases)?),",
    "opcoes": [
      "A) Hemoglobina.",
      "B) Glicose.",
      "C) Citocromo C.",
      "D) Hormônio tireoidiano."
    ],
    "explicacao_geral": "O citocromo C extravasa através de poros de membrana quando há sinais de dano celular grave (via intrínseca).",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Presente apenas nas hemácias.",
      "B": "[INCORRETA] Molécula combustível.",
      "C": "[CORRETA] O **Citocromo C** fora da mitocôndria é um sinal de **morte celular** iminente.",
      "D": "[INCORRETA] Hormônio de controle metabólico sistêmico."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  }
];

const data = JSON.parse(fs.readFileSync(QUESTOES_PATH, 'utf-8'));
data.questoes = data.questoes.concat(novasQuestoes);
fs.writeFileSync(QUESTOES_PATH, JSON.stringify(data, null, 2), 'utf-8');
console.log(`Sucesso: 8 questões da aula bcm1_a15 adicionadas.`);
