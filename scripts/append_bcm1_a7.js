import fs from 'fs';
import path from 'path';

const QUESTOES_PATH = 'data/questoes.json';

const novasQuestoes = [
  {
    "id": 3481,
    "materia": "bcm1",
    "aula_id": "bcm1_a7",
    "tema": "bcm1_a7",
    "modulo": 2,
    "dificuldade": 1,
    "correta": 1,
    "enunciado": "A 'Difusão Facilitada' é uma forma de transporte passivo. O que a torna diferente da difusão simples?),",
    "opcoes": [
      "A) Exige gasto de energia (ATP).",
      "B) Depende da ajuda de proteínas transportadoras (permeases) ou canais iônicos específicos.",
      "C) Ocorre contra o gradiente de concentração.",
      "D) Ocorre apenas em células mortas."
    ],
    "explicacao_geral": "Ambas as difusões são passivas (a favor do gradiente), mas a facilitada lida com moléculas que não cruzam a gordura sozinhas.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Transporte passivo não consome ATP.",
      "B": "[CORRETA] A **Difusão Facilitada** usa as **proteínas de membrana** para agilizar o fluxo.",
      "C": "[INCORRETA] Isso define o transporte ativo.",
      "D": "[INCORRETA] Células vivas utilizam intensamente para glicose e íons."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3482,
    "materia": "bcm1",
    "aula_id": "bcm1_a7",
    "tema": "bcm1_a7",
    "modulo": 2,
    "dificuldade": 1,
    "correta": 3,
    "enunciado": "Qual a principal função da 'Bomba de Sódio e Potássio' (Na+/K+ ATPase) nas células animais?),",
    "opcoes": [
      "A) Levar água para fora da célula apenas.",
      "B) Produzir glicose a partir do sal.",
      "C) Facilitar a entrada de ar no citoplasma.",
      "D) Manter o gradiente de concentração iônica e o potencial elétrico da membrana, gastando ATP para jogar 3 Na+ para fora e 2 K+ para dentro."
    ],
    "explicacao_geral": "Trata-se de um transporte ativo primário fundamental para a sobrevivência celular.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] A água segue o osmolaridade gerada, mas a bomba trasporta íons.",
      "B": "[INCORRETA] Enzimas metabólicas fazem isso, não a bomba iônica.",
      "C": "[INCORRETA] Gases passam por difusão simples.",
      "D": "[CORRETA] A **Bomba Na+/K+** mantém a célula **eletropositiva no exterior** e rica em potássio no interior."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3483,
    "materia": "bcm1",
    "aula_id": "bcm1_a7",
    "tema": "bcm1_a7",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 0,
    "enunciado": "Um paciente ingere uma solução oral de reidratação contendo Glicose e Sódio. No intestino, a glicose entra na célula 'pegando carona' no gradiente de sódio criado pela bomba basal. Que tipo de transporte é este?),",
    "opcoes": [
      "A) Transporte Ativo Secundário (Simporte).",
      "B) Difusão Simples.",
      "C) Exocitose.",
      "D) Pinocitose."
    ],
    "explicacao_geral": "O transporte ativo secundário usa a energia potencial de um gradiente iônico preexistente.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] O **Simporte Na+/Glicose** é um clássico **transporte ativo secundário**.",
      "B": "[INCORRETA] Glicose é polar e volumosa, não atravessa a membrana sem ajuda.",
      "C": "[INCORRETA] Saída de substâncias em vesículas.",
      "D": "[INCORRETA] 'Beber' da célula de forma não específica."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 3484,
    "materia": "bcm1",
    "aula_id": "bcm1_a7",
    "tema": "bcm1_a7",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 2,
    "enunciado": "A 'Fagocitose' é um processo de endocitose realizado por células especializadas, como os neutrófilos e macrófagos. Qual a sua principal característica?),",
    "opcoes": [
      "A) Englobamento de apenas gotas de líquido.",
      "B) Saída de neurotransmissores da célula.",
      "C) Ingestão de partículas sólidas grandes (como bactérias ou restos celulares) através da emissão de pseudópodes.",
      "D) Aumento da membrana plasmática sem entrada de material."
    ],
    "explicacao_geral": "A fagocitose defende o corpo contra invasores de grande porte.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Isso define a pinocitose.",
      "B": "[INCORRETA] Isso define a exocitose.",
      "C": "[CORRETA] A **Fagocitose** envolve a formação de **fagossomos** para digestão intracelular.",
      "D": "[INCORRETA] Causa a internalização de partes da membrana."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3485,
    "materia": "bcm1",
    "aula_id": "bcm1_a7",
    "tema": "bcm1_a7",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 1,
    "enunciado": "Um veneno de cobra bloqueia os 'Canais de Sódio dependentes de voltagem' nos neurônios. Qual a consequência direta desse bloqueio para o sistema nervoso?),",
    "opcoes": [
      "A) Os neurônios vão produzir mais energia.",
      "B) Incapacidade de gerar potenciais de ação (impulsos elétricos), levando à paralisia e falha na comunicação nervosa.",
      "C) O cérebro vai brilhar no escuro.",
      "D) Os canais de potássio vão se transformar em canais de cálcio."
    ],
    "explicacao_geral": "Os canais iônicos são os mediadores da excitabilidade elétrica celular.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Bloqueia a função, não aumenta o metabolismo favoravelmente.",
      "B": "[CORRETA] Sem o fluxo de Na+ pelo canal, o **impulso nervoso** é interrompido.",
      "C": "[INCORRETA] Absurdo biológico.",
      "D": "[INCORRETA] Canais são proteínas específicas e não mudam sua seletividade básica."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 3486,
    "materia": "bcm1",
    "aula_id": "bcm1_a7",
    "tema": "bcm1_a7",
    "modulo": 2,
    "dificuldade": 3,
    "correta": 3,
    "enunciado": "A Endocitose Mediada por Receptores é uma forma altamente específica de transporte. Qual molécula plasmática é transportada para dentro das células humanas através deste mecanismo?),",
    "opcoes": [
      "A) Glicose.",
      "B) Oxigênio.",
      "C) Água.",
      "D) Colesterol (via LDL - Lipoproteína de Baixa Densidade)."
    ],
    "explicacao_geral": "A falha nos receptores de LDL causa a Hipercolesterolemia Familiar.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Transportada por difusão facilitada (GLUT).",
      "B": "[INCORRETA] Difusão simples.",
      "C": "[INCORRETA] Osmose/Aquaporinas.",
      "D": "[CORRETA] O **LDL** entra na célula via **endocitose mediada por receptores** específicos."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 3487,
    "materia": "bcm1",
    "aula_id": "bcm1_a7",
    "tema": "bcm1_a7",
    "modulo": 2,
    "dificuldade": 3,
    "correta": 0,
    "enunciado": "Exocitose é o processo de liberação de substâncias para o meio extracelular. Em qual das situações abaixo a exocitose é o mecanismo fundamental de ação?),",
    "opcoes": [
      "A) Liberação de insulina pelas células beta do pâncreas e neurotransmissores nas sinapses neuronais.",
      "B) Entrada de oxigênio nos pulmões.",
      "C) Filtragem de sangue no rim.",
      "D) Contração do coração."
    ],
    "explicacao_geral": "Moléculas grandes produzidas na célula são empacotadas no Golgi e liberadas por vesículas.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] A **secreção de hormônios e sinalizadores** ocorre via **exocitose**.",
      "B": "[INCORRETA] Ocorre por difusão.",
      "C": "[INCORRETA] Ocorre por pressão hidrostática (ultrafiltração).",
      "D": "[INCORRETA] Resultado do deslizamento de proteínas contráteis."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3488,
    "materia": "bcm1",
    "aula_id": "bcm1_a7",
    "tema": "bcm1_a7",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 2,
    "enunciado": "A 'Fibrose Cística' é causada por uma mutação em uma proteína de transmembrana (CFTR). Qual a função biológica dessa proteína que, ao falhar, causa muco espesso nos pulmões?),",
    "opcoes": [
      "A) Ela transporta oxigênio.",
      "B) Ela digere o açúcar do pulmão.",
      "C) Ela é um canal de Cloreto (Cl-), responsável por regular o fluxo de água nos tecidos epiteliais.",
      "D) Ela produz luz fluorescente."
    ],
    "explicacao_geral": "O canal CFTR transporta íons cloreto; sem ele, o sódio e a água não fluem corretamente para hidratar o muco.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Hemoglobina pulmonar não existe nesse contexto.",
      "B": "[INCORRETA] Função metabólica enzimática.",
      "C": "[CORRETA] A **Fibrose Cística** é uma **canalopatia de Cloreto**.",
      "D": "[INCORRETA] Fantasia biológica."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  }
];

const data = JSON.parse(fs.readFileSync(QUESTOES_PATH, 'utf-8'));
data.questoes = data.questoes.concat(novasQuestoes);
fs.writeFileSync(QUESTOES_PATH, JSON.stringify(data, null, 2), 'utf-8');
console.log(`Sucesso: 8 questões da aula bcm1_a7 adicionadas.`);
