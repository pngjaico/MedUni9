import fs from 'fs';
import path from 'path';

const QUESTOES_PATH = 'data/questoes.json';

const novasQuestoes = [
  {
    "id": 3489,
    "materia": "bcm1",
    "aula_id": "bcm1_a8",
    "tema": "bcm1_a8",
    "modulo": 2,
    "dificuldade": 1,
    "correta": 2,
    "enunciado": "A sinalização celular permite que as células respondam ao ambiente. Qual o tipo de sinalização em que a molécula sinalizadora atua em células vizinhas, localizadas a curta distância, sem entrar na corrente sanguínea?),",
    "opcoes": [
      "A) Sinalização Endócrina.",
      "B) Sinalização Autócrina.",
      "C) Sinalização Parácrina.",
      "D) Sinalização Sináptica distante."
    ],
    "explicacao_geral": "A sinalização parácrina é típica de mediadores inflamatórios ou fatores de crescimento locais.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Hormônios viajam pelo sangue até alvos distantes.",
      "B": "[INCORRETA] A célula sinaliza para si mesma.",
      "C": "[CORRETA] A **Sinalização Parácrina** é a comunicação com as **vizinhas** de tecido.",
      "D": "[INCORRETA] Sináptica ocorre entre neurônio e célula alvo via fenda microscópica."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3490,
    "materia": "bcm1",
    "aula_id": "bcm1_a8",
    "tema": "bcm1_a8",
    "modulo": 2,
    "dificuldade": 1,
    "correta": 0,
    "enunciado": "Os receptores de superfície celular são divididos em classes. Qual classe de receptor, após a ligação do ligante, abre ou fecha um canal para permitir o fluxo de íons através da membrana?),",
    "opcoes": [
      "A) Receptores Ionotrópicos (Canais Iônicos dependentes de ligante).",
      "B) Receptores Acoplados à Proteína G (GPCR).",
      "C) Receptores Catalíticos (Tirosina Cinase).",
      "D) Receptores Nucleares."
    ],
    "explicacao_geral": "Estes receptores convertem o sinal químico diretamente em um sinal elétrico/iônico rápido.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] Os **Receptores Ionotrópicos** são típicos da neurotransmissão rápida (Ex: Nicotínico).",
      "B": "[INCORRETA] Atuam via segundos mensageiros, de forma mais lenta.",
      "C": "[INCORRETA] Atuam via fosforilação de proteínas.",
      "D": "[INCORRETA] Localizados no interior da célula, não na superfície."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3491,
    "materia": "bcm1",
    "aula_id": "bcm1_a8",
    "tema": "bcm1_a8",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 1,
    "enunciado": "Hormônios esteroides (como a Testosterona e o Cortisol) são lipofílicos e conseguem atravessar a membrana plasmática livremente. Onde seus receptores são localizados?),",
    "opcoes": [
      "A) Sempre na face externa da membrana.",
      "B) No citoplasma ou no núcleo, atuando como fatores de transcrição gênica.",
      "C) Dentro dos lisossomos.",
      "D) Não possuem receptores."
    ],
    "explicacao_geral": "Moléculas lipossolúveis não precisam de receptores de superfície para entrar na célula.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Receptores de superfície são para ligantes hidrofílicos.",
      "B": "[CORRETA] Os **Hormônios Esteroides** ligam-se a **receptores intracelulares** com efeito genômico.",
      "C": "[INCORRETA] Lisossomos digerem conteúdo, não são canais de sinalização hormonal primária.",
      "D": "[INCORRETA] Sem receptor não haveria especificidade de resposta."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3492,
    "materia": "bcm1",
    "aula_id": "bcm1_a8",
    "tema": "bcm1_a8",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 3,
    "enunciado": "Após a ativação de um Receptor Acoplado à Proteína G (GPCR), a enzima Adenilato Ciclase é comumente ativada. Qual o 'Segundo Mensageiro' produzido por essa enzima?),",
    "opcoes": [
      "A) Glicose.",
      "B) Cálcio.",
      "C) Água oxigenada.",
      "D) AMP Cíclico (cAMP)."
    ],
    "explicacao_geral": "O cAMP ativa cinases (PKA) que alteram o metabolismo celular.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Combustível metabólico central.",
      "B": "[INCORRETA] Segundo mensageiro liberado do retículo via IP3.",
      "C": "[INCORRETA] Espécie reativa de oxigênio.",
      "D": "[CORRETA] O **cAMP** é o mediador da sinalização via **Adenilato Ciclase**."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3493,
    "materia": "bcm1",
    "aula_id": "bcm1_a8",
    "tema": "bcm1_a8",
    "modulo": 2,
    "dificuldade": 3,
    "correta": 0,
    "enunciado": "O receptor de Insulina é um exemplo de Receptor de Tirosina Cinase (RTK). O que ocorre imediatamente após a ligação da insulina a este receptor?),",
    "opcoes": [
      "A) Dimerização de dois monômeros de receptor e a autofosforilação cruzada dos resíduos de tirosina.",
      "B) Destruição da insulina pela enzima do receptor.",
      "C) O receptor se solta da membrana e vai para o núcleo.",
      "D) Abertura de um canal de sódio imediato."
    ],
    "explicacao_geral": "A fosforilação cria sítios de ligação para proteínas sinalizadoras internas.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] A **dimerização e autofosforilação** são as etapas iniciais da cascata da **Insulina**.",
      "B": "[INCORRETA] A insulina é degradada posteriormente após endocitose do complexo.",
      "C": "[INCORRETA] O RTK permanece associado à membrana.",
      "D": "[INCORRETA] Insulina não atua via receptor ionotrópico direto."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 3494,
    "materia": "bcm1",
    "aula_id": "bcm1_a8",
    "tema": "bcm1_a8",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 2,
    "enunciado": "A toxina do vibrião colérico (Cólera) atua na subunidade Alfa de uma proteína G, mantendo-a permanentemente ligada ao GTP (sempre ativa). No intestino, isso causa um aumento descontrolado de cAMP. Qual o sintoma clínico resultante dessa falha na sinalização?),",
    "opcoes": [
      "A) Prisão de ventre severa.",
      "B) Febre amarela.",
      "C) Diarreia aquosa massiva e desidratação grave devido à secreção excessiva de cloreto e água para a luz intestinal.",
      "D) Melhora da absorção de nutrientes."
    ],
    "explicacao_geral": "O cAMP ativa canais iônicos (CFTR) que expulsa cloro e água da célula epitelial.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] O efeito é o oposto: hipersecretor.",
      "B": "[INCORRETA] Doença viral sem relação com a toxina colérica.",
      "C": "[CORRETA] A **Cólera** é uma doença de **desregulação da Proteína G**.",
      "D": "[INCORRETA] Causa perda de líquidos, não aumento de absorção."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 3495,
    "materia": "bcm1",
    "aula_id": "bcm1_a8",
    "tema": "bcm1_a8",
    "modulo": 2,
    "dificuldade": 3,
    "correta": 3,
    "enunciado": "O óxido nítrico (NO) é um gás sinalizador que promove a vasodilatação. Por que ele é considerado uma exceção importante nos mecanismos de sinalização?),",
    "opcoes": [
      "A) Porque ele é tóxico.",
      "B) Porque ele brilha no escuro.",
      "C) Porque ele nunca sai da célula.",
      "D) Porque ele é um gás que difunde-se livremente através da membrana e age diretamente em enzimas intracelulares (como a Guanilato Ciclase), tendo meia-vida curtíssima."
    ],
    "explicacao_geral": "O NO não precisa de receptores de membrana devido à sua natureza gasosa.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Pode ser tóxico em altas doses, mas fisiologicamente é um sinalizador.",
      "B": "[INCORRETA] Não é fluorescente.",
      "C": "[INCORRETA] Ele atravessa as membranas vizinhas rapidamente.",
      "D": "[CORRETA] A **sinalização por gases (NO)** é rápida e local (parácrina)."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3496,
    "materia": "bcm1",
    "aula_id": "bcm1_a8",
    "tema": "bcm1_a8",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 1,
    "enunciado": "Um paciente usa um medicamento chamado 'Betabloqueador' (antagonista adrenérgico) para tratar hipertensão. Qual a ação molecular desse fármaco?),",
    "opcoes": [
      "A) Ele produz mais adrenalina no corpo.",
      "B) Ele liga-se aos receptores beta-adrenérgicos impedindo a ação da adrenalina, bloqueando a ativação da Proteína G e reduzindo a força/frequência cardíaca.",
      "C) Ele dissolve as artérias.",
      "D) Ele mata as células do coração."
    ],
    "explicacao_geral": "O antagonismo impede que o sinalizador natural ative seu receptor.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] O fármaco bloqueia a ação, não aumenta a produção.",
      "B": "[CORRETA] Os **Betabloqueadores** são inibidores de receptores acoplados à **Proteína G**.",
      "C": "[INCORRETA] Causaria hemorragia fatal.",
      "D": "[INCORRETA] Ele apenas modula a atividade nervosa sobre as células."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  }
];

const data = JSON.parse(fs.readFileSync(QUESTOES_PATH, 'utf-8'));
data.questoes = data.questoes.concat(novasQuestoes);
fs.writeFileSync(QUESTOES_PATH, JSON.stringify(data, null, 2), 'utf-8');
console.log(`Sucesso: 8 questões da aula bcm1_a8 adicionadas.`);
