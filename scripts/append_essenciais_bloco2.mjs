import { readFileSync, writeFileSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');
const QUESTOES_PATH = path.join(ROOT, 'data', 'questoes.json');

const raw = JSON.parse(readFileSync(QUESTOES_PATH, 'utf8'));
const questoes = raw.questoes || [];
let nextId = Math.max(...questoes.map((q) => Number(q.id) || 0)) + 1;

const novasQuestoes = [
  {
    materia: 'bmf3',
    tema: 'bmf3_a19',
    aula_id: 'bmf3_a19',
    modulo: 3,
    dificuldade: 1,
    caso_clinico: false,
    essencial: true,
    enunciado: 'Na **espermatogênese**, uma espermatogônia que completa a meiose origina, ao final do processo, quantos gametas funcionais?',
    opcoes: [
      'A) Um',
      'B) Dois',
      'C) Três',
      'D) Quatro'
    ],
    correta: 3,
    explicacao_geral: 'A espermatogênese é um processo **simétrico** de divisão celular, no qual uma célula germinativa origina **quatro espermatozoides funcionais**. Esse é um contraste clássico com a ovogênese, que produz apenas um gameta maduro.',
    explicacoes_opcoes: {
      A: 'INCORRETA: A produção de apenas **um** gameta funcional é característica da ovogênese.',
      B: 'INCORRETA: O processo meiótico completo masculino não termina com apenas **dois** gametas funcionais.',
      C: 'INCORRETA: Não há formação final de **três** gametas funcionais na espermatogênese.',
      D: 'CORRETA: A espermatogênese gera **quatro espermatozoides funcionais** a partir de uma célula inicial.'
    },
    explicacao: 'A regra de prova é simples: **espermatogênese = 4 gametas funcionais**.'
  },
  {
    materia: 'bmf3',
    tema: 'bmf3_a19',
    aula_id: 'bmf3_a19',
    modulo: 3,
    dificuldade: 2,
    caso_clinico: false,
    essencial: true,
    enunciado: 'Em relação ao bloqueio meiótico da linhagem germinativa feminina, o **ovócito primário** permanece interrompido desde a vida fetal até a ovulação em qual fase?',
    opcoes: [
      'A) Metáfase I',
      'B) Prófase I',
      'C) Anáfase II',
      'D) Telófase II'
    ],
    correta: 1,
    explicacao_geral: 'O **ovócito primário** entra em meiose ainda na vida fetal e permanece bloqueado em **prófase I** até a ovulação. Esse bloqueio prolongado é central para entender a fisiologia reprodutiva feminina e o aumento de erros cromossômicos com a idade materna.',
    explicacoes_opcoes: {
      A: 'INCORRETA: O bloqueio fetal clássico não ocorre em **metáfase I**.',
      B: 'CORRETA: O ovócito primário fica estacionado em **prófase I** desde a vida fetal até pouco antes da ovulação.',
      C: 'INCORRETA: A **anáfase II** não corresponde ao longo bloqueio pré-ovulatório.',
      D: 'INCORRETA: O ovócito não permanece parado em **telófase II**.'
    },
    explicacao: 'Na mulher, o primeiro bloqueio obrigatório é: **nasce em prófase I**.'
  },
  {
    materia: 'bmf3',
    tema: 'bmf3_a19',
    aula_id: 'bmf3_a19',
    modulo: 3,
    dificuldade: 2,
    caso_clinico: false,
    essencial: true,
    enunciado: 'A **espermiogênese** corresponde especificamente à fase em que a espermátide:',
    opcoes: [
      'A) sofre meiose I para originar espermatócito secundário',
      'B) duplica seu material genético antes da mitose',
      'C) modifica sua forma, formando acrossomo e flagelo',
      'D) completa a ovogênese dentro do folículo ovariano'
    ],
    correta: 2,
    explicacao_geral: 'A **espermiogênese** não é uma divisão celular, mas sim uma etapa de **diferenciação morfológica**. Nela, a espermátide ganha flagelo, condensa o núcleo e forma o **acrossomo**, tornando-se um espermatozoide maduro.',
    explicacoes_opcoes: {
      A: 'INCORRETA: A formação do espermatócito secundário ocorre na **meiose I**, não na espermiogênese.',
      B: 'INCORRETA: A duplicação de DNA precede divisões celulares e não define a espermiogênese.',
      C: 'CORRETA: A espermiogênese é a fase de remodelação estrutural da espermátide, incluindo **acrossomo** e **flagelo**.',
      D: 'INCORRETA: Essa alternativa mistura conceitos da linhagem masculina com a feminina.'
    },
    explicacao: 'Em prova, diferencie: **espermatogênese** é o processo todo; **espermiogênese** é a mudança de forma.'
  },
  {
    materia: 'bmf3',
    tema: 'bmf3_a19',
    aula_id: 'bmf3_a19',
    modulo: 3,
    dificuldade: 3,
    caso_clinico: true,
    essencial: true,
    enunciado: 'Mulher de 39 anos procura aconselhamento reprodutivo após gestação prévia com trissomia. O médico explica que o risco de não disjunção cromossômica aumenta com a idade materna porque muitos ovócitos permaneceram por décadas em uma fase meiótica prolongada. Qual é essa fase?',
    opcoes: [
      'A) Prófase I',
      'B) Metáfase I',
      'C) Metáfase II',
      'D) Telófase I'
    ],
    correta: 0,
    explicacao_geral: 'O aumento da **idade materna** se associa a maior risco de aneuploidias porque os ovócitos ficam bloqueados em **prófase I** durante longos anos. Esse repouso prolongado favorece falhas de coesão cromossômica e erros de segregação meiótica.',
    explicacoes_opcoes: {
      A: 'CORRETA: O bloqueio de décadas ocorre em **prófase I**, ponto-chave para explicar o risco de não disjunção com a idade materna.',
      B: 'INCORRETA: O longo repouso não se estabelece em **metáfase I**.',
      C: 'INCORRETA: A **metáfase II** corresponde ao segundo bloqueio, já próximo da ovulação.',
      D: 'INCORRETA: O bloqueio prolongado não ocorre em **telófase I**.'
    },
    explicacao: 'A associação entre idade materna avançada e trissomias passa primeiro pelo bloqueio em **prófase I**.'
  },
  {
    materia: 'bmf3',
    tema: 'bmf3_a19',
    aula_id: 'bmf3_a19',
    modulo: 3,
    dificuldade: 2,
    caso_clinico: true,
    essencial: true,
    enunciado: 'Durante fertilização in vitro com ICSI, o embriologista informa que o ovócito coletado estava no estágio ideal para ser fecundado. Qual situação descreve corretamente esse momento fisiológico?',
    opcoes: [
      'A) Ovócito I parado em prófase I',
      'B) Ovócito II bloqueado em metáfase II',
      'C) Óvulo já maduro após término espontâneo da meiose II',
      'D) Zigoto em primeira clivagem'
    ],
    correta: 1,
    explicacao_geral: 'Na ovulação, a célula liberada é o **ovócito II**, que permanece bloqueado em **metáfase II**. A conclusão da meiose II ocorre apenas após a fecundação, razão pela qual esse estágio é o ideal para técnicas como a ICSI.',
    explicacoes_opcoes: {
      A: 'INCORRETA: O **ovócito I** bloqueado em prófase I ainda não corresponde à célula ovulada.',
      B: 'CORRETA: O **ovócito II em metáfase II** é a célula normalmente captada e fecundada na reprodução assistida.',
      C: 'INCORRETA: A meiose II não termina espontaneamente antes da fecundação.',
      D: 'INCORRETA: O **zigoto** já representa estágio posterior à fecundação.'
    },
    explicacao: 'A pergunta clássica da FIV é: o que se coleta? **Ovócito II em metáfase II**.'
  },
  {
    materia: 'bmf3',
    tema: 'bmf3_a22',
    aula_id: 'bmf3_a22',
    modulo: 3,
    dificuldade: 1,
    caso_clinico: false,
    essencial: true,
    enunciado: 'Qual hormônio está mais diretamente relacionado à **produção** de leite nas glândulas mamárias?',
    opcoes: [
      'A) Prolactina',
      'B) Ocitocina',
      'C) Progesterona',
      'D) hCG'
    ],
    correta: 0,
    explicacao_geral: 'A **prolactina**, secretada pela adeno-hipófise, estimula a **síntese de leite** pelas glândulas mamárias. Essa função deve ser diferenciada da ação da ocitocina, que participa principalmente da ejeção do leite.',
    explicacoes_opcoes: {
      A: 'CORRETA: A **prolactina** é o principal hormônio responsável pela produção de leite.',
      B: 'INCORRETA: A **ocitocina** atua principalmente na ejeção, não na síntese do leite.',
      C: 'INCORRETA: A **progesterona** participa da gestação, mas não é o hormônio principal da produção láctea pós-parto.',
      D: 'INCORRETA: O **hCG** está ligado à manutenção inicial da gestação, e não à lactação.'
    },
    explicacao: 'Para não confundir: **prolactina fabrica, ocitocina ejeta**.'
  },
  {
    materia: 'bmf3',
    tema: 'bmf3_a22',
    aula_id: 'bmf3_a22',
    modulo: 3,
    dificuldade: 2,
    caso_clinico: false,
    essencial: true,
    enunciado: 'O chamado **reflexo de Ferguson** durante o trabalho de parto é um exemplo de:',
    opcoes: [
      'A) Feedback negativo entre hipófise e ovário',
      'B) Feedback positivo mediado por distensão cervical e liberação de ocitocina',
      'C) Inibição neural da contratilidade uterina',
      'D) Mecanismo dependente exclusivamente de prolactina'
    ],
    correta: 1,
    explicacao_geral: 'O **reflexo de Ferguson** ocorre quando a distensão do colo do útero pelo polo fetal aumenta a liberação de **ocitocina**, intensificando as contrações. Trata-se de um exemplo clássico de **feedback positivo**, que se mantém até o nascimento.',
    explicacoes_opcoes: {
      A: 'INCORRETA: O reflexo de Ferguson não é um mecanismo ovariano de feedback negativo.',
      B: 'CORRETA: Há **feedback positivo** entre distensão cervical, liberação de ocitocina e aumento das contrações.',
      C: 'INCORRETA: O mecanismo não inibe; ele **potencializa** a contratilidade uterina.',
      D: 'INCORRETA: A **prolactina** não é o hormônio central desse reflexo.'
    },
    explicacao: 'Parto é uma das raras situações clássicas de **feedback positivo** em fisiologia.'
  },
  {
    materia: 'bmf3',
    tema: 'bmf3_a22',
    aula_id: 'bmf3_a22',
    modulo: 3,
    dificuldade: 2,
    caso_clinico: false,
    essencial: true,
    enunciado: 'Durante o **puerpério**, a redução progressiva do tamanho uterino nas semanas após o parto recebe o nome de:',
    opcoes: [
      'A) Decidualização',
      'B) Involução uterina',
      'C) Nidação',
      'D) Ovulação reflexa'
    ],
    correta: 1,
    explicacao_geral: 'Após o parto, o útero sofre intensa contração e reorganização estrutural para retornar ao tamanho pré-gestacional. Esse processo fisiológico do puerpério é chamado de **involução uterina**.',
    explicacoes_opcoes: {
      A: 'INCORRETA: A **decidualização** está relacionada ao preparo endometrial para a gestação.',
      B: 'CORRETA: O retorno progressivo do útero ao tamanho habitual é a **involução uterina**.',
      C: 'INCORRETA: A **nidação** corresponde à implantação embrionária, não ao pós-parto.',
      D: 'INCORRETA: **Ovulação reflexa** não descreve o fenômeno uterino do puerpério.'
    },
    explicacao: 'No pós-parto, o útero precisa se contrair e diminuir: isso é **involução uterina**.'
  },
  {
    materia: 'bmf3',
    tema: 'bmf3_a22',
    aula_id: 'bmf3_a22',
    modulo: 3,
    dificuldade: 3,
    caso_clinico: true,
    essencial: true,
    enunciado: 'Puérpera no alojamento conjunto refere que o bebê suga adequadamente, mas sente “o leite descer” apenas quando a amamentação já está iniciada. Qual hormônio é o principal responsável por esse reflexo de ejeção láctea?',
    opcoes: [
      'A) Prolactina',
      'B) hPL',
      'C) Ocitocina',
      'D) FSH'
    ],
    correta: 2,
    explicacao_geral: 'A **ocitocina**, liberada pela neuro-hipófise em resposta à sucção, promove contração das células mioepiteliais da mama e desencadeia a **ejeção do leite**. A prolactina, por sua vez, é mais associada à produção do leite.',
    explicacoes_opcoes: {
      A: 'INCORRETA: A **prolactina** estimula produção láctea, mas não é a principal responsável pela ejeção imediata do leite.',
      B: 'INCORRETA: O **hPL** atua na gestação e no metabolismo materno-fetal, não no reflexo de ejeção láctea.',
      C: 'CORRETA: A **ocitocina** promove a contração mioepitelial que faz o leite ser ejetado.',
      D: 'INCORRETA: O **FSH** está ligado ao eixo gonadal, sem papel central na ejeção do leite.'
    },
    explicacao: 'Memorize a dupla: **prolactina produz** e **ocitocina faz descer** o leite.'
  },
  {
    materia: 'bmf3',
    tema: 'bmf3_a22',
    aula_id: 'bmf3_a22',
    modulo: 3,
    dificuldade: 2,
    caso_clinico: true,
    essencial: true,
    enunciado: 'Mulher no terceiro mês pós-parto mantém amamentação exclusiva, inclusive durante a noite, e pergunta por que ainda não menstruou. Qual mecanismo endócrino explica melhor essa amenorreia lactacional?',
    opcoes: [
      'A) A prolactina elevada inibe o GnRH e reduz a ovulação',
      'B) A ocitocina elevada estimula diretamente a secreção de FSH',
      'C) O hCG persiste por meses e mantém o eixo ovariano bloqueado',
      'D) A progesterona placentária continua alta durante todo o puerpério'
    ],
    correta: 0,
    explicacao_geral: 'Na amamentação exclusiva, níveis elevados de **prolactina** ajudam a suprimir a liberação pulsátil de **GnRH**, reduzindo a secreção gonadotrófica e dificultando a ovulação. Esse é o mecanismo básico da **amenorreia lactacional**.',
    explicacoes_opcoes: {
      A: 'CORRETA: A **prolactina** elevada contribui para inibir o **GnRH**, reduzindo a chance de ovulação no puerpério inicial.',
      B: 'INCORRETA: A **ocitocina** não é o principal hormônio supressor do eixo reprodutivo nesse contexto.',
      C: 'INCORRETA: O **hCG** não permanece elevado por meses como mecanismo da amenorreia lactacional.',
      D: 'INCORRETA: A placenta já foi eliminada, então a progesterona placentária não se mantém elevada.'
    },
    explicacao: 'Amamentação exclusiva protege contra nova ovulação principalmente via **prolactina alta e GnRH inibido**.'
  },
  {
    materia: 'bmf1',
    tema: 'bmf1_a18',
    aula_id: 'bmf1_a18',
    modulo: 1,
    dificuldade: 1,
    caso_clinico: false,
    essencial: true,
    enunciado: 'Qual estrutura da parede abdominal superficial é descrita como a camada **gordurosa** da fáscia superficial?',
    opcoes: [
      'A) Fáscia de Camper',
      'B) Fáscia de Scarpa',
      'C) Fáscia transversal',
      'D) Linha alba'
    ],
    correta: 0,
    explicacao_geral: 'A fáscia superficial da parede abdominal apresenta duas camadas principais: a **fáscia de Camper**, mais superficial e **gordurosa**, e a **fáscia de Scarpa**, mais profunda e fibrosa. Essa diferenciação é muito cobrada em anatomia da parede anterolateral.',
    explicacoes_opcoes: {
      A: 'CORRETA: A **fáscia de Camper** é a camada superficial gordurosa do subcutâneo abdominal.',
      B: 'INCORRETA: A **fáscia de Scarpa** é a camada fibrosa profunda, não a gordurosa.',
      C: 'INCORRETA: A **fáscia transversal** fica em plano mais profundo, relacionada à parede interna.',
      D: 'INCORRETA: A **linha alba** é uma estrutura tendínea mediana, não uma camada de fáscia superficial.'
    },
    explicacao: 'A ordem clássica do subcutâneo é **Camper gordurosa** e **Scarpa fibrosa**.'
  },
  {
    materia: 'bmf1',
    tema: 'bmf1_a18',
    aula_id: 'bmf1_a18',
    modulo: 1,
    dificuldade: 2,
    caso_clinico: false,
    essencial: true,
    enunciado: 'A **hérnia inguinal direta** relaciona-se mais diretamente a qual área anatômica de fraqueza da parede abdominal?',
    opcoes: [
      'A) Anel inguinal profundo',
      'B) Triângulo de Hasselbach',
      'C) Hiato esofágico',
      'D) Forame obturatório'
    ],
    correta: 1,
    explicacao_geral: 'A **hérnia inguinal direta** surge por fraqueza da parede posterior do canal inguinal, atravessando o **triângulo de Hasselbach**. Essa anatomia a diferencia da hérnia indireta, que percorre o trajeto do canal pelo anel profundo.',
    explicacoes_opcoes: {
      A: 'INCORRETA: O **anel inguinal profundo** é a porta de entrada clássica da hérnia **indireta**.',
      B: 'CORRETA: A hérnia **direta** protrui pela parede enfraquecida no **triângulo de Hasselbach**.',
      C: 'INCORRETA: O **hiato esofágico** não participa da anatomia da hérnia inguinal.',
      D: 'INCORRETA: O **forame obturatório** está relacionado a outro tipo de hérnia pélvica.'
    },
    explicacao: 'A associação obrigatória é: **direta = triângulo de Hasselbach**.'
  },
  {
    materia: 'bmf1',
    tema: 'bmf1_a18',
    aula_id: 'bmf1_a18',
    modulo: 1,
    dificuldade: 2,
    caso_clinico: false,
    essencial: true,
    enunciado: 'Em uma laparotomia mediana, o cirurgião prefere a **linha alba** porque ela apresenta qual vantagem anatômica principal?',
    opcoes: [
      'A) Rico suprimento arterial com menor risco de infecção',
      'B) Ausência de peritônio parietal',
      'C) Plano mediano relativamente avascular e sem fibras musculares importantes',
      'D) Comunicação direta com o espaço retroperitoneal'
    ],
    correta: 2,
    explicacao_geral: 'A **linha alba** é uma rafe tendínea mediana formada pela fusão das aponeuroses abdominais. Por ser relativamente **avascular** e não conter massa muscular importante, constitui via clássica de acesso cirúrgico mediano.',
    explicacoes_opcoes: {
      A: 'INCORRETA: A linha alba não é escolhida por grande vascularização, mas justamente por ser relativamente avascular.',
      B: 'INCORRETA: O peritônio parietal continua existindo em plano profundo à incisão mediana.',
      C: 'CORRETA: A **linha alba** oferece acesso mediano com menor sangramento e sem secção relevante de fibras musculares.',
      D: 'INCORRETA: A via mediana não cria comunicação direta imediata com o espaço retroperitoneal.'
    },
    explicacao: 'Quando a prova pergunta por que o corte mediano é tão usado, a resposta gira em torno de **plano avascular**.'
  },
  {
    materia: 'bmf1',
    tema: 'bmf1_a18',
    aula_id: 'bmf1_a18',
    modulo: 1,
    dificuldade: 3,
    caso_clinico: true,
    essencial: true,
    enunciado: 'Homem de 72 anos apresenta abaulamento inguinal medial ao trajeto habitual do funículo espermático, sem progressão para o escroto. O achado é mais compatível com qual tipo de hérnia?',
    opcoes: [
      'A) Hérnia inguinal indireta',
      'B) Hérnia femoral',
      'C) Hérnia inguinal direta',
      'D) Hérnia umbilical'
    ],
    correta: 2,
    explicacao_geral: 'A **hérnia inguinal direta** costuma ocorrer por fraqueza adquirida da parede posterior do canal inguinal, frequentemente em idosos. Em geral, protrui medialmente, no **triângulo de Hasselbach**, e não costuma alcançar o escroto como a indireta.',
    explicacoes_opcoes: {
      A: 'INCORRETA: A **hérnia indireta** entra pelo anel inguinal profundo e tende a acompanhar o trajeto do canal, podendo alcançar o escroto.',
      B: 'INCORRETA: A **hérnia femoral** aparece inferior ao ligamento inguinal, em topografia diferente.',
      C: 'CORRETA: O quadro descrito é típico de **hérnia inguinal direta**.',
      D: 'INCORRETA: A **hérnia umbilical** apresenta topografia distinta da região inguinal.'
    },
    explicacao: 'Em idoso com hérnia medial e sem descida escrotal, a melhor hipótese é **hérnia inguinal direta**.'
  },
  {
    materia: 'bmf1',
    tema: 'bmf1_a18',
    aula_id: 'bmf1_a18',
    modulo: 1,
    dificuldade: 2,
    caso_clinico: true,
    essencial: true,
    enunciado: 'Paciente com abdome agudo desenvolve dor intensa e bem localizada após irritação do peritônio. Essa dor somática definida ocorre principalmente quando o processo inflamatório atinge qual folheto?',
    opcoes: [
      'A) Peritônio visceral',
      'B) Omento maior',
      'C) Mesentério jejunal',
      'D) Peritônio parietal'
    ],
    correta: 3,
    explicacao_geral: 'O **peritônio parietal** possui inervação somática, produzindo dor **aguda e bem localizada** quando inflamado. Já o peritônio visceral relaciona-se mais a dor surda, difusa e mal localizada.',
    explicacoes_opcoes: {
      A: 'INCORRETA: O **peritônio visceral** gera dor mais difusa e mal localizada.',
      B: 'INCORRETA: O **omento maior** não é o folheto cuja inervação somática explica a dor localizada descrita.',
      C: 'INCORRETA: O **mesentério** participa do suporte visceral, mas a dor somática localizada é atribuída ao peritônio parietal.',
      D: 'CORRETA: A dor aguda, bem delimitada e de irritação peritoneal está ligada ao **peritônio parietal**.'
    },
    explicacao: 'Na clínica, dor que o paciente “aponta com o dedo” sugere irritação do **peritônio parietal**.'
  }
];

for (const item of novasQuestoes) {
  item.id = nextId++;
}

const existentes = new Set(questoes.map((q) => `${q.materia}:${q.aula_id}:${q.enunciado}`));
const filtradas = novasQuestoes.filter((q) => !existentes.has(`${q.materia}:${q.aula_id}:${q.enunciado}`));

if (filtradas.length === 0) {
  console.log('ℹ️ Nenhuma nova questão para inserir.');
  process.exit(0);
}

questoes.push(...filtradas);
writeFileSync(QUESTOES_PATH, JSON.stringify({ ...raw, questoes }, null, 2), 'utf8');

console.log(`✅ ${filtradas.length} questões adicionadas em bmf3_a19, bmf3_a22 e bmf1_a18.`);
