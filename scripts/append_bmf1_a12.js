import fs from 'fs';
import path from 'path';

const QUESTOES_PATH = 'data/questoes.json';

const novasQuestoes = [
  {
    "id": 3089,
    "materia": "bmf1",
    "aula_id": "bmf1_a12",
    "tema": "bmf1_a12",
    "modulo": 1,
    "dificuldade": 1,
    "correta": 1,
    "enunciado": "A transmissão do impulso do neurônio motor para a fibra muscular ocorre na junção neuromuscular. Qual neurotransmissor é obrigatoriamente liberado nessa fenda para iniciar a contração no músculo esquelético?",
    "opcoes": [
      "A) Noradrenalina.",
      "B) Acetilcolina.",
      "C) Glutamato.",
      "D) Dopamina."
    ],
    "explicacao_geral": "A **acetilcolina** (ACh) é o mediador químico universal da placa motora esquelética.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Noradrenalina atua no sistema nervoso autônomo simpático.",
      "B": "[CORRETA] A **ACh** liga-se a receptores nicotínicos no sarcolema, desencadeando a despolarização.",
      "C": "[INCORRETA] Glutamato é o principal neurotransmissor excitatório do SNC.",
      "D": "[INCORRETA] Dopamina está envolvida em circuitos de recompensa e controle motor central."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3090,
    "materia": "bmf1",
    "aula_id": "bmf1_a12",
    "tema": "bmf1_a12",
    "modulo": 1,
    "dificuldade": 2,
    "correta": 3,
    "enunciado": "Um paciente com Miastenia Gravis apresenta fraqueza muscular que piora com o esforço, pois possui anticorpos que bloqueiam os receptores de acetilcolina. Qual é o tipo específico desse receptor na placa motora?",
    "opcoes": [
      "A) Muscarínico M1.",
      "B) Adrenérgico Beta-1.",
      "C) Dopaminérgico D2.",
      "D) Nicotínico."
    ],
    "explicacao_geral": "Os receptores na placa motora são canais iônicos dependentes de ligante.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Receptores muscarínicos são típicos do sistema parassimpático e órgãos internos.",
      "B": "[INCORRETA] Adrenérgicos respondem à noradrenalina/adrenalina.",
      "C": "[INCORRETA] Dopaminérgicos não atuam na junção neuromuscular esquelética.",
      "D": "[CORRETA] O **receptor nicotínico** de acetilcolina é o alvo da falha na **Miastenia Gravis**."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 3091,
    "materia": "bmf1",
    "aula_id": "bmf1_a12",
    "tema": "bmf1_a12",
    "modulo": 1,
    "dificuldade": 2,
    "correta": 2,
    "enunciado": "Qual íon é indispensável para 'destravar' o sarcômero, ligando-se à troponina e permitindo o início da contração?",
    "opcoes": [
      "A) Sódio (Na+).",
      "B) Potássio (K+).",
      "C) Cálcio (Ca2+).",
      "D) Magnésio (Mg2+)."
    ],
    "explicacao_geral": "O cálcio intracelular é o mensageiro que aciona os filamentos contráteis.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] O sódio é importante para o potencial de ação da membrana.",
      "B": "[INCORRETA] O potássio é importante para a repolarização.",
      "C": "[CORRETA] O **cálcio** é armazenado no retículo e liberado no citosol para iniciar o encurtamento.",
      "D": "[INCORRETA] O magnésio atua como cofator enzimático, mas não é o gatilho da contração."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3092,
    "materia": "bmf1",
    "aula_id": "bmf1_a12",
    "tema": "bmf1_a12",
    "modulo": 1,
    "dificuldade": 3,
    "correta": 0,
    "enunciado": "O Rigor Mortis (rigidez cadavérica) ocorre horas após a morte. Qual a causa bioquímica de os músculos permanecerem contraídos e rígidos nesse estado?",
    "opcoes": [
      "A) Falta de ATP, impedindo que a miosina se desconecte da actina.",
      "B) Produção excessiva de adrenalina pós-morte.",
      "C) Estímulo elétrico contínuo dos nervos periféricos.",
      "D) Rompimento total dos sarcômeros."
    ],
    "explicacao_geral": "A separação da cabeça da miosina do filamento de actina é um processo ativo que consome energia.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] Sem **ATP**, a cabeça da miosina fica 'travada' no filamento de actina, mantendo o músculo rígido.",
      "B": "[INCORRETA] Não há produção hormonal após o óbito.",
      "C": "[INCORRETA] Os nervos param de funcionar imediatamente sem oxigênio.",
      "D": "[INCORRETA] Os sarcômeros permanecem íntegros, mas bloqueados em estado de contração."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 3093,
    "materia": "bmf1",
    "aula_id": "bmf1_a12",
    "tema": "bmf1_a12",
    "modulo": 1,
    "dificuldade": 2,
    "correta": 1,
    "enunciado": "O ATP desempenha três papéis fundamentais na contração. Qual deles é responsável pelo 'golpe de força' (deslizamento efetivo)?",
    "opcoes": [
      "A) A própria ligação do ATP à miosina.",
      "B) A liberação do ADP e Fosfato inorgânico (Pi) da cabeça da miosina.",
      "C) O bombeamento de sódio para fora da célula.",
      "D) A síntese de acetilcolina."
    ],
    "explicacao_geral": "A energia é armazenada na miosina na hidrólise, mas o movimento ocorre na dissociação dos produtos.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] A ligação do ATP causa o **desligamento** da miosina.",
      "B": "[CORRETA] A saída do **ADP + Pi** gera a alteração conformacional que traciona a actina.",
      "C": "[INCORRETA] Bomba de Sódio/Potássio mantém o potencial, mas não gera o golpe de força.",
      "D": "[INCORRETA] ACh é sintetizada no neurônio, não no sarcômero."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3094,
    "materia": "bmf1",
    "aula_id": "bmf1_a12",
    "tema": "bmf1_a12",
    "modulo": 1,
    "dificuldade": 3,
    "correta": 2,
    "enunciado": "Como o músculo relaxa após o estímulo? Qual o mecanismo principal para cessar a contração?",
    "opcoes": [
      "A) Difusão passiva do cálcio para fora da célula através da pele.",
      "B) Consumo total de toda a actina disponível.",
      "C) Recaptação ativa de cálcio para o retículo sarcoplasmático pela bomba SERCA.",
      "D) Degradação da miosina pela enzima miosinase."
    ],
    "explicacao_geral": "Para relaxar, a concentração de cálcio citosólico deve cair drasticamente.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] O cálcio não sai pela pele.",
      "B": "[INCORRETA] As proteínas actina/miosina não são consumidas, elas são estáveis.",
      "C": "[CORRETA] O relaxamento é um processo que **consome ATP** para 'sequestrar' o cálcio de volta ao estoque.",
      "D": "[INCORRETA] A miosina não é degradada a cada contração."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3095,
    "materia": "bmf1",
    "aula_id": "bmf1_a12",
    "tema": "bmf1_a12",
    "modulo": 1,
    "dificuldade": 2,
    "correta": 3,
    "enunciado": "Um veneno de cobra (como o curare) bloqueia competitivamente os receptores nicotínicos na placa motora. Qual a consequência direta para a vítima?",
    "opcoes": [
      "A) Convulsões generalizadas por excesso de estímulo.",
      "B) Infarto agudo do miocárdio imediato.",
      "C) Perda total da audição e visão.",
      "D) Paralisia muscular flácida, podendo levar à morte por asfixia (parada respiratória)."
    ],
    "explicacao_geral": "Sem a ligação da acetilcolina, o comando voluntário do cérebro não chega aos músculos.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Convulsões ocorreriam se houvesse hiperativação ou falta de inibição central.",
      "B": "[INCORRETA] O curare afeta músculo esquelético, o coração possui receptores muscarínicos predominantemente para frenagem e autorritmicidade.",
      "C": "[INCORRETA] Os sentidos não dependem de receptores nicotínicos periféricos.",
      "D": "[CORRETA] O bloqueio da placa motora impede o uso do **diafragma**, causando óbito por insuficiência respiratória."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 3096,
    "materia": "bmf1",
    "aula_id": "bmf1_a12",
    "tema": "bmf1_a12",
    "modulo": 1,
    "dificuldade": 1,
    "correta": 0,
    "enunciado": "O 'encurtamento' do músculo durante a contração isotônica é melhor explicado pela Teoria do Deslizamento dos Filamentos. O que acontece com os filamentos proteicos individuais nessa teoria?",
    "opcoes": [
      "A) Eles sofrem sobreposição mas NÃO mudam seu próprio comprimento individual.",
      "B) Eles encolhem como molas sob pressão química.",
      "C) Eles derretem parcialmente para se fundirem ao osso.",
      "D) Eles dobram-se ao meio para reduzir o espaço."
    ],
    "explicacao_geral": "As proteínas actina e miosina são polímeros rígidos; o encurtamento do sarcômero vem do aumento da área de contato entre elas.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] O segredo da contração é o **deslizamento** e sobreposição, sem alteração física do tamanho da molécula de miosina ou actina.",
      "B": "[INCORRETA] Os filamentos não são elásticos como molas nesse nível de organização.",
      "C": "[INCORRETA] Não há fusão proteica com o osso.",
      "D": "[INCORRETA] Eles permanecem retilíneos, deslizando um sobre o outro."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  }
];

const data = JSON.parse(fs.readFileSync(QUESTOES_PATH, 'utf-8'));
data.questoes = data.questoes.concat(novasQuestoes);
fs.writeFileSync(QUESTOES_PATH, JSON.stringify(data, null, 2), 'utf-8');
console.log(`Sucesso: 8 questões da aula bmf1_a12 adicionadas.`);
