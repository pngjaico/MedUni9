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
    tema: 'bmf3_a10',
    aula_id: 'bmf3_a10',
    modulo: 3,
    dificuldade: 1,
    caso_clinico: false,
    essencial: true,
    enunciado: 'Na anatomia do hilo renal, qual estrutura ocupa a posição mais posterior na sequência clássica **VAU**?',
    opcoes: [
      'A) Veia renal',
      'B) Artéria renal',
      'C) Pelve renal/ureter',
      'D) Veia cava inferior'
    ],
    correta: 2,
    explicacao_geral: 'No **hilo renal**, a disposição anteroposterior clássica é **Veia, Artéria e Ureter/Pelve renal**. Esse arranjo é muito cobrado porque ajuda a orientar cirurgias, interpretação anatômica e leitura de imagens do pedículo renal.',
    explicacoes_opcoes: {
      A: 'INCORRETA: A **veia renal** é a estrutura mais anterior no mnemônico **VAU**.',
      B: 'INCORRETA: A **artéria renal** ocupa a posição intermediária no hilo.',
      C: 'CORRETA: O **ureter/pelve renal** é a estrutura mais posterior na organização clássica do hilo renal.',
      D: 'INCORRETA: A **veia cava inferior** não compõe a tríade anatômica do hilo renal.'
    },
    explicacao: 'Para prova, grave que o hilo renal é organizado em **VAU**: veia na frente, artéria no meio e ureter por trás.'
  },
  {
    materia: 'bmf3',
    tema: 'bmf3_a10',
    aula_id: 'bmf3_a10',
    modulo: 3,
    dificuldade: 2,
    caso_clinico: false,
    essencial: true,
    enunciado: 'A **junção ureterovesical (JUV)** é clinicamente importante porque corresponde ao local:',
    opcoes: [
      'A) onde o ureter deixa a pelve renal e se torna intraperitoneal',
      'B) mais estreito do trajeto ureteral, frequentemente associado à impactação de cálculos',
      'C) de cruzamento do ureter com a artéria renal',
      'D) em que o ureter atravessa o diafragma urogenital masculino'
    ],
    correta: 1,
    explicacao_geral: 'Os ureteres apresentam três estreitamentos fisiológicos clássicos: **junção ureteropélvica**, cruzamento com os vasos ilíacos e **junção ureterovesical**. A **JUV** é o ponto mais estreito e, por isso, local frequente de obstrução por cálculo.',
    explicacoes_opcoes: {
      A: 'INCORRETA: A saída da pelve renal corresponde à **junção ureteropélvica**, não à JUV.',
      B: 'CORRETA: A **JUV** é o trecho mais estreito do ureter e um dos principais pontos de impactação de cálculo.',
      C: 'INCORRETA: O cruzamento importante é com os **vasos ilíacos**, e não com a artéria renal.',
      D: 'INCORRETA: A JUV fica na entrada da bexiga, sem relação com o diafragma urogenital.'
    },
    explicacao: 'Se a questão falar de cálculo “travado” na chegada à bexiga, a resposta mais provável é **junção ureterovesical**.'
  },
  {
    materia: 'bmf3',
    tema: 'bmf3_a10',
    aula_id: 'bmf3_a10',
    modulo: 3,
    dificuldade: 2,
    caso_clinico: false,
    essencial: true,
    enunciado: 'A maior suscetibilidade feminina a **infecção do trato urinário** se relaciona principalmente a qual característica anatômica?',
    opcoes: [
      'A) Maior espessura do músculo detrusor',
      'B) Menor calibre do trígono vesical',
      'C) Uretra mais curta e próxima da região perineal posterior',
      'D) Presença de quatro segmentos uretrais'
    ],
    correta: 2,
    explicacao_geral: 'A **uretra feminina** mede cerca de 3 a 4 cm e está mais próxima da região perineal posterior, o que favorece a ascensão bacteriana. Essa é a principal explicação anatômica para a maior frequência de **ITU** em mulheres.',
    explicacoes_opcoes: {
      A: 'INCORRETA: A espessura do **detrusor** não explica a maior incidência feminina de ITU.',
      B: 'INCORRETA: O **trígono vesical** não é o fator anatômico principal para essa diferença epidemiológica.',
      C: 'CORRETA: A **uretra curta** e sua proximidade com a região perineal facilitam a ascensão de bactérias à bexiga.',
      D: 'INCORRETA: A divisão em quatro segmentos é característica da **uretra masculina**.'
    },
    explicacao: 'Na prática e na prova, ITU de repetição em mulher remete à **uretra curta**.'
  },
  {
    materia: 'bmf3',
    tema: 'bmf3_a10',
    aula_id: 'bmf3_a10',
    modulo: 3,
    dificuldade: 3,
    caso_clinico: true,
    essencial: true,
    enunciado: 'Mulher de 46 anos é submetida a histerectomia por miomatose. No intraoperatório, o cirurgião reforça a necessidade de identificar uma estrutura que passa inferiormente à artéria uterina, para evitar lesão iatrogênica e perda funcional renal. Qual estrutura deve ser reconhecida e preservada?',
    opcoes: [
      'A) Ligamento redondo do útero',
      'B) Ureter',
      'C) Artéria ovariana',
      'D) Nervo obturatório'
    ],
    correta: 1,
    explicacao_geral: 'Na pelve feminina, o **ureter** cruza inferiormente à **artéria uterina**, relação clássica resumida pelo mnemônico “**a água passa por baixo da ponte**”. Esse detalhe anatômico é decisivo em cirurgias ginecológicas, especialmente na histerectomia.',
    explicacoes_opcoes: {
      A: 'INCORRETA: O **ligamento redondo** não é a estrutura visceral tubular classicamente ameaçada nesse cruzamento.',
      B: 'CORRETA: O **ureter** passa por baixo da artéria uterina e pode ser lesionado ou pinçado em cirurgias ginecológicas.',
      C: 'INCORRETA: A **artéria ovariana** não corresponde à estrutura descrita pelo mnemônico cirúrgico clássico.',
      D: 'INCORRETA: O **nervo obturatório** não cruza sob a artéria uterina nesse contexto anatômico.'
    },
    explicacao: 'Em ginecologia, “**água sob a ponte**” significa **ureter passando por baixo da artéria uterina**.'
  },
  {
    materia: 'bmf3',
    tema: 'bmf3_a10',
    aula_id: 'bmf3_a10',
    modulo: 3,
    dificuldade: 2,
    caso_clinico: true,
    essencial: true,
    enunciado: 'Homem de 24 anos sofre trauma de bacia em acidente motociclístico. Evolui com dor pélvica, retenção urinária e suspeita de lesão uretral. Qual segmento da uretra masculina é mais vulnerável nesse contexto?',
    opcoes: [
      'A) Prostática',
      'B) Membranosa',
      'C) Bulbar',
      'D) Peniana'
    ],
    correta: 1,
    explicacao_geral: 'A **uretra membranosa** é o segmento mais fixo e frágil da uretra masculina, razão pela qual aparece com frequência em questões sobre **trauma pélvico** e ruptura uretral. Esse ponto é clássico em anatomia aplicada à urgência.',
    explicacoes_opcoes: {
      A: 'INCORRETA: A uretra **prostática** pode sofrer obstrução por crescimento prostático, mas não é o segmento mais associado à ruptura no trauma pélvico.',
      B: 'CORRETA: A uretra **membranosa** é a porção mais vulnerável à ruptura em fraturas de bacia.',
      C: 'INCORRETA: A uretra **bulbar** é importante em traumatismos perineais, mas não é a resposta clássica para trauma pélvico com fratura.',
      D: 'INCORRETA: A uretra **peniana** é mais móvel e menos associada a esse mecanismo traumático.'
    },
    explicacao: 'Trauma de bacia + retenção urinária + lesão uretral deve fazer pensar primeiro em **uretra membranosa**.'
  },
  {
    materia: 'bmf3',
    tema: 'bmf3_a15',
    aula_id: 'bmf3_a15',
    modulo: 3,
    dificuldade: 1,
    caso_clinico: false,
    essencial: true,
    enunciado: 'No córtex da glândula suprarrenal, qual sequência correta descreve as zonas de fora para dentro?',
    opcoes: [
      'A) Glomerulosa, Fasciculada e Reticular',
      'B) Fasciculada, Reticular e Glomerulosa',
      'C) Reticular, Glomerulosa e Fasciculada',
      'D) Medular, Fasciculada e Glomerulosa'
    ],
    correta: 0,
    explicacao_geral: 'O córtex da suprarrenal é organizado em três zonas concêntricas: **glomerulosa**, **fasciculada** e **reticular**. O mnemônico **GFR** é fundamental porque relaciona posição anatômica e função hormonal.',
    explicacoes_opcoes: {
      A: 'CORRETA: A ordem anatômica correta do córtex é **Glomerulosa, Fasciculada e Reticular**.',
      B: 'INCORRETA: A sequência proposta não respeita a disposição real das camadas corticais.',
      C: 'INCORRETA: A zona **reticular** é a mais interna do córtex, não a mais externa.',
      D: 'INCORRETA: A **medula** não integra a sequência de camadas do córtex.'
    },
    explicacao: 'Para prova, a regra é decorar **GFR** de fora para dentro.'
  },
  {
    materia: 'bmf3',
    tema: 'bmf3_a15',
    aula_id: 'bmf3_a15',
    modulo: 3,
    dificuldade: 2,
    caso_clinico: false,
    essencial: true,
    enunciado: 'As células ricas em lipídios e aspecto vacuolado, conhecidas como **espongiócitos**, são mais características de qual camada da suprarrenal?',
    opcoes: [
      'A) Zona glomerulosa',
      'B) Zona fasciculada',
      'C) Zona reticular',
      'D) Medula suprarrenal'
    ],
    correta: 1,
    explicacao_geral: 'A **zona fasciculada** é a camada cortical mais espessa e contém células ricas em lipídios, os **espongiócitos**, especializados na síntese de glicocorticoides. Esse padrão histológico é clássico em lâminas de suprarrenal.',
    explicacoes_opcoes: {
      A: 'INCORRETA: A **glomerulosa** produz aldosterona, mas não é a principal camada de espongiócitos.',
      B: 'CORRETA: A **fasciculada** é composta por espongiócitos e está associada à produção de cortisol.',
      C: 'INCORRETA: A **reticular** é mais interna e voltada à produção de andrógenos.',
      D: 'INCORRETA: A **medula** contém células cromafins, não espongiócitos.'
    },
    explicacao: 'Se a lâmina mostrar células claras e vacuoladas, pense em **zona fasciculada**.'
  },
  {
    materia: 'bmf3',
    tema: 'bmf3_a15',
    aula_id: 'bmf3_a15',
    modulo: 3,
    dificuldade: 2,
    caso_clinico: false,
    essencial: true,
    enunciado: 'A medula da suprarrenal diferencia-se do córtex por apresentar qual origem embrionária?',
    opcoes: [
      'A) Mesoderma intermediário',
      'B) Endoderma do intestino anterior',
      'C) Crista neural',
      'D) Mesênquima da cápsula renal'
    ],
    correta: 2,
    explicacao_geral: 'O **córtex suprarrenal** deriva do mesoderma, enquanto a **medula** deriva da **crista neural**, compartilhando relação embriológica com o sistema nervoso autônomo. Essa diferença de origem é muito cobrada em histologia e embriologia aplicada.',
    explicacoes_opcoes: {
      A: 'INCORRETA: O mesoderma participa do córtex, não da medula suprarrenal.',
      B: 'INCORRETA: A medula suprarrenal não se origina do endoderma.',
      C: 'CORRETA: A **crista neural** origina as células cromafins da medula.',
      D: 'INCORRETA: A cápsula renal não é a fonte embrionária da medula suprarrenal.'
    },
    explicacao: 'A pergunta clássica é: **córtex = mesoderma; medula = crista neural**.'
  },
  {
    materia: 'bmf3',
    tema: 'bmf3_a15',
    aula_id: 'bmf3_a15',
    modulo: 3,
    dificuldade: 3,
    caso_clinico: true,
    essencial: true,
    enunciado: 'Paciente apresenta crises paroxísticas de hipertensão, sudorese intensa e palpitações. A investigação sugere tumor originado de células cromafins da suprarrenal. Em qual região da glândula se localiza a lesão mais provável?',
    opcoes: [
      'A) Cápsula suprarrenal',
      'B) Zona glomerulosa',
      'C) Zona fasciculada',
      'D) Medula suprarrenal'
    ],
    correta: 3,
    explicacao_geral: 'O **feocromocitoma** origina-se das **células cromafins** da **medula suprarrenal** e cursa com excesso de catecolaminas. Por isso, o quadro típico inclui hipertensão paroxística, palpitações e sudorese.',
    explicacoes_opcoes: {
      A: 'INCORRETA: A **cápsula** não contém as células produtoras de catecolaminas envolvidas nesse tumor.',
      B: 'INCORRETA: A **glomerulosa** está associada à produção de aldosterona.',
      C: 'INCORRETA: A **fasciculada** produz cortisol, não catecolaminas.',
      D: 'CORRETA: A **medula suprarrenal** abriga as células cromafins, origem do feocromocitoma.'
    },
    explicacao: 'Feocromocitoma é a associação clássica de **catecolamina excessiva** com tumor da **medula suprarrenal**.'
  },
  {
    materia: 'bmf3',
    tema: 'bmf3_a15',
    aula_id: 'bmf3_a15',
    modulo: 3,
    dificuldade: 2,
    caso_clinico: true,
    essencial: true,
    enunciado: 'Em adrenalectomia direita, o cirurgião precisa redobrar a atenção para controlar uma veia curta que drena diretamente para a circulação venosa sistêmica. Qual vaso justifica esse cuidado anatômico?',
    opcoes: [
      'A) Veia suprarrenal direita, que drena para a veia cava inferior',
      'B) Veia suprarrenal esquerda, que drena diretamente para a aorta abdominal',
      'C) Veia renal direita, que drena para a veia porta',
      'D) Veia gonadal direita, que substitui a drenagem suprarrenal'
    ],
    correta: 0,
    explicacao_geral: 'A **veia suprarrenal direita** é curta e drena diretamente na **veia cava inferior**, o que aumenta o risco de sangramento em procedimentos cirúrgicos. Esse é um detalhe anatômico muito valorizado em questões aplicadas.',
    explicacoes_opcoes: {
      A: 'CORRETA: A **veia suprarrenal direita** é curta e desemboca diretamente na **veia cava inferior**.',
      B: 'INCORRETA: A drenagem suprarrenal esquerda não ocorre diretamente para a aorta, que é uma artéria.',
      C: 'INCORRETA: A **veia renal direita** drena para a veia cava inferior, não para o sistema porta.',
      D: 'INCORRETA: A veia gonadal não substitui a drenagem da glândula suprarrenal.'
    },
    explicacao: 'Em cirurgia, a suprarrenal direita assusta mais por causa da **veia curta para a cava**.'
  },
  {
    materia: 'bmf3',
    tema: 'bmf3_a16',
    aula_id: 'bmf3_a16',
    modulo: 3,
    dificuldade: 1,
    caso_clinico: false,
    essencial: true,
    enunciado: 'No eixo **hipotálamo-hipófise-suprarrenal**, qual hormônio hipofisário estimula a secreção cortical de cortisol?',
    opcoes: [
      'A) ACTH',
      'B) TSH',
      'C) ADH',
      'D) FSH'
    ],
    correta: 0,
    explicacao_geral: 'O eixo **HPA** funciona pela sequência **CRH → ACTH → cortisol**. O **ACTH**, liberado pela adeno-hipófise, estimula principalmente a zona fasciculada da suprarrenal a sintetizar e secretar cortisol.',
    explicacoes_opcoes: {
      A: 'CORRETA: O **ACTH** é o principal estímulo hipofisário para a produção de cortisol.',
      B: 'INCORRETA: O **TSH** regula a tireoide, não a suprarrenal.',
      C: 'INCORRETA: O **ADH** atua principalmente no controle da água e osmolaridade.',
      D: 'INCORRETA: O **FSH** está relacionado ao eixo gonadal.'
    },
    explicacao: 'A sequência essencial é **CRH, ACTH e cortisol**.'
  },
  {
    materia: 'bmf3',
    tema: 'bmf3_a16',
    aula_id: 'bmf3_a16',
    modulo: 3,
    dificuldade: 2,
    caso_clinico: false,
    essencial: true,
    enunciado: 'Qual combinação descreve corretamente os efeitos principais da **aldosterona** no néfron distal?',
    opcoes: [
      'A) Redução da reabsorção de sódio e aumento da retenção de potássio',
      'B) Aumento da reabsorção de sódio e aumento da excreção de potássio',
      'C) Inibição da secreção tubular de hidrogênio e sódio',
      'D) Reabsorção exclusiva de água, sem efeito sobre eletrólitos'
    ],
    correta: 1,
    explicacao_geral: 'A **aldosterona** atua principalmente no túbulo distal e ducto coletor, aumentando a **reabsorção de sódio** e favorecendo a **excreção de potássio**. O resultado final é expansão volêmica e elevação da pressão arterial.',
    explicacoes_opcoes: {
      A: 'INCORRETA: A aldosterona faz o oposto: **retém sódio** e favorece perda de potássio.',
      B: 'CORRETA: Esse é o efeito fisiológico clássico da **aldosterona**.',
      C: 'INCORRETA: A aldosterona não bloqueia a movimentação tubular de sódio; ela a estimula.',
      D: 'INCORRETA: O efeito principal não é exclusivo sobre água, mas sobre **sódio e potássio**.'
    },
    explicacao: 'Se a questão trouxer hipertensão com **hipocalemia**, pense em excesso de **aldosterona**.'
  },
  {
    materia: 'bmf3',
    tema: 'bmf3_a16',
    aula_id: 'bmf3_a16',
    modulo: 3,
    dificuldade: 2,
    caso_clinico: false,
    essencial: true,
    enunciado: 'Em relação ao ritmo circadiano do cortisol, assinale a alternativa correta.',
    opcoes: [
      'A) O pico fisiológico ocorre por volta da meia-noite',
      'B) O valor basal é constante durante todo o dia',
      'C) O pico matinal ocorre nas primeiras horas da manhã, próximo das 8h',
      'D) O nadir fisiológico coincide com o meio da tarde'
    ],
    correta: 2,
    explicacao_geral: 'O **cortisol** segue ritmo circadiano com **pico matinal**, geralmente nas primeiras horas da manhã, e queda progressiva ao longo do dia, atingindo valores mais baixos à noite. Esse padrão é importante para interpretação laboratorial e fisiologia do despertar.',
    explicacoes_opcoes: {
      A: 'INCORRETA: À **meia-noite** ocorre um dos menores níveis fisiológicos de cortisol.',
      B: 'INCORRETA: A secreção de cortisol varia ao longo do dia por ritmo circadiano.',
      C: 'CORRETA: O pico fisiológico ocorre pela manhã, aproximadamente às **8h**.',
      D: 'INCORRETA: O nadir tende a ocorrer à noite, não no meio da tarde.'
    },
    explicacao: 'Questão clássica: cortisol alto de manhã e baixo perto da meia-noite.'
  },
  {
    materia: 'bmf3',
    tema: 'bmf3_a16',
    aula_id: 'bmf3_a16',
    modulo: 3,
    dificuldade: 3,
    caso_clinico: true,
    essencial: true,
    enunciado: 'Homem de 39 anos usa prednisona em altas doses há vários meses e decide interromper a medicação abruptamente. Poucos dias depois, apresenta hipotensão, astenia intensa e náuseas. Qual mecanismo fisiológico explica melhor esse quadro?',
    opcoes: [
      'A) Hiperestimulação aguda da medula suprarrenal por excesso de noradrenalina',
      'B) Supressão crônica do eixo HPA com incapacidade transitória de produzir cortisol endógeno',
      'C) Ativação compensatória da zona glomerulosa com excesso de aldosterona',
      'D) Aumento abrupto da secreção de ACTH levando a hipercortisolismo'
    ],
    correta: 1,
    explicacao_geral: 'O uso prolongado de **glicocorticoide exógeno** suprime o eixo **hipotálamo-hipófise-suprarrenal** por feedback negativo. Se o medicamento for retirado abruptamente, a glândula pode estar funcionalmente atrofiada e incapaz de restabelecer a produção adequada de cortisol em tempo hábil.',
    explicacoes_opcoes: {
      A: 'INCORRETA: O problema central não é hiperatividade da medula, e sim falta de cortisol endógeno após supressão do eixo.',
      B: 'CORRETA: A **supressão do eixo HPA** explica a insuficiência adrenal secundária após retirada abrupta do corticoide.',
      C: 'INCORRETA: O quadro não decorre de excesso de aldosterona, e sim de deficiência funcional de cortisol.',
      D: 'INCORRETA: A retirada abrupta não gera hipercortisolismo; o problema é justamente a incapacidade de produzi-lo adequadamente.'
    },
    explicacao: 'Corticoide crônico exige **desmame** porque o eixo HPA pode ficar temporariamente “desligado”.'
  },
  {
    materia: 'bmf3',
    tema: 'bmf3_a16',
    aula_id: 'bmf3_a16',
    modulo: 3,
    dificuldade: 2,
    caso_clinico: true,
    essencial: true,
    enunciado: 'Paciente com adenoma produtor de aldosterona apresenta hipertensão arterial persistente. Qual alteração laboratorial é mais esperada nesse contexto?',
    opcoes: [
      'A) Hipercalcemia',
      'B) Hipercalemia',
      'C) Hipocalemia',
      'D) Hiponatremia intensa'
    ],
    correta: 2,
    explicacao_geral: 'No **hiperaldosteronismo primário**, a aldosterona aumenta a reabsorção renal de sódio e intensifica a excreção de potássio. Por isso, a associação clássica é **hipertensão com hipocalemia**.',
    explicacoes_opcoes: {
      A: 'INCORRETA: A **hipercalcemia** não é a alteração laboratorial típica do hiperaldosteronismo.',
      B: 'INCORRETA: O efeito esperado é perda urinária de potássio, e não retenção.',
      C: 'CORRETA: A **hipocalemia** é achado clássico em excesso de aldosterona.',
      D: 'INCORRETA: A aldosterona favorece retenção de sódio, não hiponatremia intensa.'
    },
    explicacao: 'Em prova, **síndrome de Conn** combina hipertensão e **potássio baixo**.'
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

console.log(`✅ ${filtradas.length} questões adicionadas em bmf3_a10, bmf3_a15 e bmf3_a16.`);
