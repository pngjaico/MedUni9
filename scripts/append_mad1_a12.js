import fs from 'fs';
import path from 'path';

const QUESTOES_PATH = 'data/questoes.json';

const novasQuestoes = [
  {
    "id": 3929,
    "materia": "mad1",
    "aula_id": "mad1_a12",
    "tema": "mad1_a12",
    "modulo": 2,
    "dificuldade": 1,
    "correta": 1,
    "enunciado": "Os vírus são frequentemente definidos como 'parasitas intracelulares obrigatórios'. Por que eles recebem essa denominação?),",
    "opcoes": [
      "A) Porque são muito grandes e não cabem fora da célula.",
      "B) Porque carecem de maquinaria metabólica própria (ribossomos, produção de energia) e dependem totalmente da célula hospedeira para replicar seu genoma e sintetizar suas proteínas.",
      "C) Porque gostam de viver dentro das células para se proteger do frio.",
      "D) Porque são formados por células vegetais."
    ],
    "explicacao_geral": "Os vírus são estruturas biológicas inertes fora da célula hospedeira (virion).",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] São extremamente pequenos (medidos em nanômetros).",
      "B": "[CORRETA] O **Parasitismo Intracelular** é a essência da **virologia**.",
      "C": "[INCORRETA] Sem base biológica.",
      "D": "[INCORRETA] São entidades acelulares."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3930,
    "materia": "mad1",
    "aula_id": "mad1_a12",
    "tema": "mad1_a12",
    "modulo": 2,
    "dificuldade": 1,
    "correta": 3,
    "enunciado": "Qual a estrutura proteica que envolve e protege o ácido nucleico viral?),",
    "opcoes": [
      "A) Parede celular.",
      "B) Envelope lipídico.",
      "C) Membrana plasmática.",
      "D) Capsídeo."
    ],
    "explicacao_geral": "O capsídeo é formado por unidades chamadas capsômeros.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Vírus não possuem parede celular.",
      "B": "[INCORRETA] Membrana externa de alguns vírus, derivada da célula hospedeira.",
      "C": "[INCORRETA] Característica de células, não de vírus.",
      "D": "[CORRETA] O **Capsídeo** é a **carapaça proteica** viral."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3931,
    "materia": "mad1",
    "aula_id": "mad1_a12",
    "tema": "mad1_a12",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 0,
    "enunciado": "Os 'Vírus Envelopados' possuem uma membrana lipídica externa. Qual a implicação clínica dessa característica em relação à higiene?),",
    "opcoes": [
      "A) Eles são mais sensíveis a detergentes, solventes orgânicos e álcool 70%, que dissolvem o envelope e inativam o vírus.",
      "B) Eles são indestrutíveis por produtos químicos.",
      "C) Eles só morrem se forem fervidos por 10 horas.",
      "D) O envelope os protege de qualquer sabão."
    ],
    "explicacao_geral": "Vírus sem envelope (nus) são geralmente mais resistentes no ambiente (ex: Norovírus).",
    "explicacoes_opcoes": {
      "A": "[CORRETA] A **Sensibilidade do Envelope** explica a eficácia da **lavagem das mãos** (ex: SARS-CoV-2, HIV, Influenza).",
      "B": "[INCORRETA] Sono menos resistentes que os não-envelopados.",
      "C": "[INCORRETA] Inativação ocorre rapidamente com agentes químicos.",
      "D": "[INCORRETA] O sabão dissolve a gordura do envelope facilmente."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3932,
    "materia": "mad1",
    "aula_id": "mad1_a12",
    "tema": "mad1_a12",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 2,
    "enunciado": "A primeira etapa da replicação viral é a 'Adsorção'. O que determina o 'tropismo' de um vírus (as células específicas que ele infecta)?),",
    "opcoes": [
      "A) O tamanho da célula.",
      "B) A cor do tecido.",
      "C) A interação específica entre as proteínas da superfície viral (ligantes) e os receptores específicos na membrana da célula hospedeira.",
      "D) O acaso biológico total."
    ],
    "explicacao_geral": "Exemplo: O HIV liga-se especificamente ao receptor CD4 em linfócitos T auxiliares.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Irrelevante.",
      "B": "[INCORRETA] Irrelevante clínico.",
      "C": "[CORRETA] O **Tropismo Viral** depende do mecanismo **chave-fechadura**.",
      "D": "[INCORRETA] A infecção é um processo altamente específico e orquestrado."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3933,
    "materia": "mad1",
    "aula_id": "mad1_a12",
    "tema": "mad1_a12",
    "modulo": 2,
    "dificuldade": 3,
    "correta": 1,
    "enunciado": "Os 'Retrovírus' (como o HIV) possuem uma enzima única que desafia o dogma central da biologia. Qual é ela?),",
    "opcoes": [
      "A) DNA polimerase.",
      "B) Transcriptase Reversa (sintetiza DNA a partir de um molde de RNA).",
      "C) Helicase.",
      "D) Ligase."
    ],
    "explicacao_geral": "Isso permite que o genoma viral seja incorporado ao DNA da célula hospedeira (provírus).",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Comum a todas as células.",
      "B": "[CORRETA] A **Transcriptase Reversa** é o motor do **Ciclo Retroviral**.",
      "C": "[INCORRETA] Enzima de replicação comum.",
      "D": "[INCORRETA] Enzima de reparo/ligação de DNA comum."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3934,
    "materia": "mad1",
    "aula_id": "mad1_a12",
    "tema": "mad1_a12",
    "modulo": 2,
    "dificuldade": 3,
    "correta": 0,
    "enunciado": "O que ocorre na etapa de 'Desnudamento' (Uncoating) do ciclo viral?),",
    "opcoes": [
      "A) A liberação do genoma viral (DNA ou RNA) do capsídeo no interior da célula hospedeira para que possa ser replicado.",
      "B) A saída do vírus da célula para o sangue.",
      "C) A morte instantânea da célula.",
      "D) A multiplicação das mitocôndrias."
    ],
    "explicacao_geral": "O desnudamento é necessário para que as enzimas celulares ou virais acessem o código genético.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] O **Desnudamento** libera o **ácido nucleico** para replicação.",
      "B": "[INCORRETA] Etapa de Liberação ou Egresso.",
      "C": "[INCORRETA] A morte celular pode ocorrer muito mais tarde.",
      "D": "[INCORRETA] Irrelevante."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3935,
    "materia": "mad1",
    "aula_id": "mad1_a12",
    "tema": "mad1_a12",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 3,
    "enunciado": "O 'Efeito Citopático' (ECP) é observado em laboratórios de virologia. O que ele representa?),",
    "opcoes": [
      "A) A cura rápida da célula.",
      "B) O aumento da produção de anticorpos.",
      "C) A mudança da cor do meio de cultura.",
      "D) Alterações morfológicas visíveis nas células infectadas (como lise, formação de sincícios ou corpos de inclusão) devido ao dano gerado pela replicação viral."
    ],
    "explicacao_geral": "O ECP ajuda o virologista a identificar presuntivamente qual vírus está infectando a cultura.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Representa o dano/doença celular.",
      "B": "[INCORRETA] Isso ocorre no organismo todo, não in vitro na célula isolada desta forma.",
      "C": "[INCORRETA] Indicador de pH no metabolismo bacteriano, não ECP clássico.",
      "D": "[CORRETA] O **Efeito Citopático** é a evidência visual da **agressão viral**."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 3936,
    "materia": "mad1",
    "aula_id": "mad1_a12",
    "tema": "mad1_a12",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 2,
    "enunciado": "Muitos vírus RNA (como o vírus da gripe) possuem altas taxas de mutação. Por que isso ocorre?),",
    "opcoes": [
      "A) Porque o vírus RNA é muito inteligente.",
      "B) Porque o RNA é mais pesado que o DNA.",
      "C) Porque as RNA polimerases (enzimas de replicação) geralmente carecem de mecanismos de revisão (proofreading), cometendo muitos erros que permanecem no genoma.",
      "D) Por causa da radiação solar apenas."
    ],
    "explicacao_geral": "Isso gera a necessidade de novas vacinas anuais (ex: Influenza) ou dificulta o tratamento (ex: HIV).",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Antropomorfismo.",
      "B": "[INCORRETA] Irrelevante físico.",
      "C": "[CORRETA] A **Falta de Revisão** gera a **Alta Variabilidade** de muitos vírus RNA.",
      "D": "[INCORRETA] Fator externo, a causa principal é o erro enzimático interno."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  }
];

const data = JSON.parse(fs.readFileSync(QUESTOES_PATH, 'utf-8'));
data.questoes = data.questoes.concat(novasQuestoes);
fs.writeFileSync(QUESTOES_PATH, JSON.stringify(data, null, 2), 'utf-8');
console.log(`Sucesso: 8 questões da aula mad1_a12 adicionadas.`);
