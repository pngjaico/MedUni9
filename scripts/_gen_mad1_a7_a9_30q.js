import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const q = [];

const meta = [
  // id, tema, correta, dif, enunciado, opcoes [A-D], explicacao_geral, explA, explB, explC, explD, explicacao multiline
  [1522, "mad1_a7", 0, 1,
    "Lactente masculino, 8 meses, otites e pneumonia por Haemophilus de repetição. Ig séricas muito baixas e ausência de linfócitos B no sangue periférico. Mecanismo genético mais provável:",
    [
      "A) Mutação no gene BTK com bloqueio da maturação de linfócitos B na medula óssea",
      "B) Defeito em RAG com ausência combinada de linfócitos T e B típica de SCID clássica",
      "C) Deleção 22q11 com hipocalcemia e cardiopatia congênita",
      "D) Deficiência seletiva de IgA com IgG e IgM preservados"
    ],
    "A agamaglobulinemia ligada ao X (Bruton) resulta de BTK defeituoso, bloqueando a maturação de linfócitos B.",
    "BTK é necessário à progressão de pré-B; sem linfócitos B maduros, não há imunoglobulinas.",
    "RAG define SCID, mas o quadro costuma afetar T e B; aqui T costuma estar presente.",
    "DiGeorge compromete principalmente linhagem T; há cardiopatia e hipocalcemia.",
    "Deficiência de IgA não explica ausência de linfócitos B e queda global de imunoglobulinas.",
    "Resumo: XLA é defeito em BTK com ausência de B maduros e hipogamaglobulinemia.\nA) CORRETA. Mecanismo clássico da XLA.\nB) INCORRETA. Descreve outra imunodeficiência combinada.\nC) INCORRETA. Perfil de DiGeorge.\nD) INCORRETA. Incompatível com ausência de B e queda de todas as classes."
  ],
  [1523, "mad1_a7", 1, 1,
    "Recém-nascido com linfocitopenia grave, timo ausente à imagem e infecções oportunistas precoces. Diagnóstico mais compatível:",
    [
      "A) Hiper-IgM por deficiência de CD40L com linfócitos T presentes",
      "B) Imunodeficiência combinada grave (SCID) com falha na maturação ou função de linfócitos T (e frequentemente comprometimento de B)",
      "C) Deficiência isolada de IgA",
      "D) Deficiência isolada do fator C3 do complemento"
    ],
    "SCID agrupa defeitos que abolem ou comprometem gravemente a imunidade celular, com risco vital precoce.",
    "Hiper-IgM por CD40L mantém T, mas há disfunção de troca de classe; não é SCID típica.",
    "SCID apresenta linfocitopenia, timo hipoplásico e infecções oportunistas precoces.",
    "IgA isolada não cursa com imunodeficiência combinada grave.",
    "Deficiência de C3 predispõe a infecções por encapsulados, não a SCID.",
    "Resumo: SCID é emergência imunológica por falha de linfócitos T (e muitas vezes B).\nA) INCORRETA. Outro defeito de imunidade.\nB) CORRETA. Quadro típico de SCID.\nC) INCORRETA. Imunodeficiência humoral leve.\nD) INCORRETA. Defeito do complemento distinto."
  ],
  [1524, "mad1_a7", 2, 2,
    "Recém-nascido com hipocalcemia, cardiopatia congênita e infecções virais frequentes. Qual achado imunológico é mais esperado?",
    [
      "A) Ausência completa de linfócitos B maduros com níveis normais de T",
      "B) Elevação isolada de IgE como achado universal",
      "C) Hipoplasia tímica com linfocitopenia T variável e disfunção celular",
      "D) Consumo crônico de complemento com hipocomplementemia como regra"
    ],
    "A síndrome de DiGeorge (22q11) associa defeito de desenvolvimento de derivados do terceiro e quarto arcos faringeos, incluindo timo.",
    "XLA afeta B; DiGeorge afeta principalmente T.",
    "IgE não define o quadro imunológico típico.",
    "Timo hipoplásico leva a déficit de maturação T e maior suscetibilidade a vírus e fungos.",
    "Hipocomplementemia não é o pilar do DiGeorge.",
    "Resumo: DiGeorge compromete desenvolvimento timóico e linfócitos T.\nA) INCORRETA. Perfil de XLA.\nB) INCORRETA. Não é marcador central.\nC) CORRETA. Comprometimento timóico e linfócitos T.\nD) INCORRETA. Não caracteriza o defeito principal."
  ],
  [1525, "mad1_a7", 3, 2,
    "Mulher adulta com hipogamaglobulinemia e infecções sinopulmonares de repetição, linfócitos B presentes porém produção inadequada de anticorpos específicos após exposição. O quadro sugere:",
    [
      "A) Agamaglobulinemia ligada ao X por mutação em BTK",
      "B) SCID com ausência de linfócitos T e B ao fluxo",
      "C) Deficiência seletiva de IgA com IgG normal",
      "D) Imunodeficiência comum variável (CVID) com falha na diferenciação em plasmócitos produtores de anticorpos"
    ],
    "Na CVID há defeitos variados na diferenciação de B ou na produção de anticorpos, com Ig baixas e infecções recorrentes.",
    "XLA é doença de linhagem B ausente, não apenas hipogamaglobulinemia com B presentes.",
    "SCID não se apresenta só com falha de anticorpos em adulto com B circulantes típicos.",
    "Deficiência de IgA não explica pan-hipogamaglobulinemia típica da CVID.",
    "CVID explica B presentes com falha de resposta humoral efetiva.",
    "Resumo: CVID agrupa hipogamaglobulinemia com defeito na resposta humoral adaptativa.\nA) INCORRETA. XLA tem ausência de B maduros.\nB) INCORRETA. Imunidade celular gravemente comprometida.\nC) INCORRETA. Isolamento de IgA não explica o quadro.\nD) CORRETA. Mecanismo compatível com CVID."
  ],
  [1526, "mad1_a7", 0, 2,
    "Criança com infecções recorrentes por bactérias encapsuladas. Avaliação mostra consumo de C3 e via alternativa comprometida. A interpretação mais adequada é:",
    [
      "A) Defeitos precoces da cascata (como C3) prejudicam opsonização e clearance de patógenos capsulados",
      "B) Deficiência de C5-C9 costuma causar o mesmo padrão de consumo de C3 na fase crônica",
      "C) Angioedema hereditário explica infecções por pneumococos",
      "D) Properdina elevada bloqueia infecções por Neisseria"
    ],
    "C3 é ponto central de convergência; sua deficiência compromete opsonização e aumenta risco a germes encapsulados.",
    "Sem C3 efetivo, a opsonização e a resposta contra capsulados ficam prejudicadas.",
    "MAC terminal (C5-9) tem papel distinto; Neisseria é clássico, mas o padrão de C3 não é o mesmo.",
    "C1INH deficit causa angioedema, não este perfil infeccioso primário.",
    "Properdina deficiente predispõe a certas infecções, mas não explica consumo de C3 como regra.",
    "Resumo: C3 é hub de opsonização; defeito aumenta suscetibilidade a capsulados.\nA) CORRETA. Mecanismo central.\nB) INCORRETA. Confunde vias e padrões laboratoriais.\nC) INCORRETA. Doença distinta.\nD) INCORRETA. Raciocínio incorreto."
  ],
  [1527, "mad1_a7", 1, 2,
    "Jovem com meningite recorrente por Neisseria. Qual deficiência do complemento é mais clássica nesse contexto?",
    [
      "A) C3 isolado",
      "B) Componentes do complexo de ataque à membrana (C5 a C9)",
      "C) Fator B da via alternativa apenas",
      "D) C1q isolado"
    ],
    "A via lítica terminal é essencial contra Neisseria; defeitos em C5-C9 predispõem a infecções meningocócicas recorrentes.",
    "C3 predispõe a capsulados diversos, mas o vínculo clássico com Neisseria recorrente é MAC.",
    "MAC incompleto impede lise eficiente de Neisseria.",
    "Fator B não é o perfil mais clássico isolado para Neisseria recorrente.",
    "C1q associa-se a lúpus e imunocomplexos, não a esse padrão infeccioso típico.",
    "Resumo: Defeito terminal do complemento predispõe a Neisseria.\nA) INCORRETA. Outro espectro infeccioso.\nB) CORRETA. Clássico para meningococo recorrente.\nC) INCORRETA. Menos típico isoladamente.\nD) INCORRETA. Perfil distinto."
  ],
  [1528, "mad1_a7", 2, 2,
    "Menino com infecções por germes catalase-positivos (como certas bactérias e fungos), granulomas e teste de redução do NBT alterado. Diagnóstico:",
    [
      "A) Deficiência de adesão leucocitária tipo 1 (LAD1)",
      "B) Deficiência seletiva de IgA",
      "C) Doença granulomatosa crônica por defeito na NADPH oxidase dos fagócitos",
      "D) CVID com hipogamaglobulinemia"
    ],
    "Na DGC a burst oxidativo é deficiente; fagócitos não matam eficientemente catalase-positivos.",
    "LAD1 cursa com infecções de pele e atraso de separação do cordão umbilical, não NBT típico de DGC.",
    "IgA não explica granulomas e falha do burst oxidativo.",
    "DGC é diagnóstico clássico com catalase-positivos e NBT anormal.",
    "CVID não define defeito primário da oxidase.",
    "Resumo: DGC é falha do sistema oxidativo fagocitário.\nA) INCORRETA. Outro defeito de adesão.\nB) INCORRETA. Imunodeficiência humoral leve.\nC) CORRETA. Quadro típico da DGC.\nD) INCORRETA. Mecanismo distinto."
  ],
  [1529, "mad1_a7", 3, 3,
    "Adulto assintomático com IgA indetectável, IgG e IgM normais e sem infecções graves. Qual conduta é mais adequada em muitos cenários ambulatoriais?",
    [
      "A) Iniciar imunoglobulina intravenosa em todos os casos independentemente de sintomas",
      "B) Indicar plasma fresco rotineiro sem critério",
      "C) Antibiótico profilático de amplo espectro por anos em todos",
      "D) Orientar seguimento clínico e atenção a reações transfusionais em quem tem anti-IgA quando aplicável; muitos permanecem assintomáticos"
    ],
    "Deficiência seletiva de IgA pode ser assintomática; imunoglobulina não é rotina para todos.",
    "Reposição de Ig não é indicada sem indicação clínica.",
    "Plasma não é estratégia de rotina sem necessidade.",
    "Profilaxia antibiótica prolongada não é padrão para todos os assintomáticos.",
    "Muitos casos são benignos; alertar sobre transfusões quando há anti-IgA sintetizado.",
    "Resumo: Deficiência de IgA frequentemente é achado laboratorial com curso leve.\nA) INCORRETA. Sem indicação universal.\nB) INCORRETA. Não é conduta padrão.\nC) INCORRETA. Excesso sem benefício comprovado geral.\nD) CORRETA. Abordagem proporcional ao risco."
  ],
  [1530, "mad1_a7", 0, 3,
    "Menino com linfócitos T presentes, ausência de linfócitos B maduros e imunoglobulinas muito baixas; história familiar compatível com herança ligada ao X. Tratamento de reposição indicado:",
    [
      "A) Imunoglobulina humana por via intravenosa ou subcutânea conforme protocolo assistencial",
      "B) Somente antibióticos profiláticos sem reposição de anticorpos",
      "C) Transplante de medula óssea de rotina em todos os casos assintomáticos",
      "D) Vacinação com BCG em qualquer idade"
    ],
    "Na XLA a reposição de imunoglobulina é pilar para prevenir infecções graves.",
    "Ig substitui anticorpos que o paciente não produz.",
    "Somente antibióticos não substituem imunoglobulinas.",
    "Transplante não é primeira linha universal na XLA estável com Ig.",
    "Vacinas vivas atenuadas são contraindicadas em muitos casos de imunodeficiência grave.",
    "Resumo: XLA trata-se com imunoglobulina e cuidados infecciosos.\nA) CORRETA. Terapia de reposição padrão.\nB) INCORRETA. Insuficiente isoladamente.\nC) INCORRETA. Não é conduta inicial universal.\nD) INCORRETA. Risco com vacinas vivas."
  ],
  [1531, "mad1_a7", 1, 3,
    "Qual situação exige abordagem urgente com transplante de células hematopoéticas como tratamento curativo típico?",
    [
      "A) Rinite alérgica persistente leve",
      "B) SCID com imunidade T gravemente comprometida e risco vital por infecções oportunistas",
      "C) Deficiência isolada de IgA assintomática",
      "D) Hipersensibilidade cutânea tipo I a pólen"
    ],
    "SCID é emergência; sem reconstituição imune, o risco de óbito por infecção é altíssimo.",
    "Rinite não exige transplante.",
    "SCID requer transplante precoce quando indicado.",
    "IgA assintomática não indica transplante.",
    "Alergia tipo I não é tratada com transplante.",
    "Resumo: SCID grave requer reconstituição imune.\nA) INCORRETA. Quadro benigno.\nB) CORRETA. Indicação clássica.\nC) INCORRETA. Não é imunodeficiência combinada grave.\nD) INCORRETA. Mecanismo alérgico."
  ],
  // mad1_a8
  [1532, "mad1_a8", 0, 1,
    "A eliminação de timócitos fortemente autorreativos no timo exemplifica principalmente:",
    [
      "A) Tolerância central",
      "B) Tolerância periférica mediada exclusivamente por IgG",
      "C) Mimetismo molecular sem participação do timo",
      "D) Inflamação de baixo grau fisiológica"
    ],
    "A seleção negativa timóica remove clones autorreativos antes da saída para periferia.",
    "Tolerância central ocorre no órgão primário da maturação T.",
    "Periferia complementa, mas não substitui a educação timóica.",
    "Mimetismo é outro mecanismo de autoimunidade.",
    "Inflamação não define tolerância central.",
    "Resumo: Timo educa o repertório T com seleção positiva e negativa.\nA) CORRETA. Tolerância central.\nB) INCORRETA. Confunde compartimentos.\nC) INCORRETA. Outro fenômeno.\nD) INCORRETA. Conceito distinto."
  ],
  [1533, "mad1_a8", 1, 1,
    "O gene AIRE nas células epiteliais reticulares medulares contribui para:",
    [
      "A) Produzir autoanticorpos anti-DNA dupla fita no sangue",
      "B) Promover apresentação de antígenos periféricos no timo e reforçar a seleção negativa de timócitos autorreativos",
      "C) Sintetizar tireoglobulina no folículo tireoidiano",
      "D) Inibir a expressão de FoxP3 em todos os linfócitos"
    ],
    "AIRE permite expressão apresentável de antígenos de tecidos periféricos no timo, expondo timócitos a antígenos próprios.",
    "Anti-dsDNA não é função da AIRE.",
    "AIRE atua na centralização da tolerância timóica à diversidade antigênica periférica.",
    "Tireoglobulina não é papel da AIRE.",
    "FoxP3 não é inibido universalmente pela AIRE.",
    "Resumo: AIRE amplia o universo de antígenos “próprios” vistos no timo.\nA) INCORRETA. Não descreve AIRE.\nB) CORRETA. Função central na tolerância.\nC) INCORRETA. Órgão e proteína errados.\nD) INCORRETA. Relação incorreta."
  ],
  [1534, "mad1_a8", 2, 2,
    "Paciente com poliendocrinopatia autoimune suspeita. Linfócitos T CD4+ CD25+ altos com expressão nuclear de FoxP3 são classificados principalmente como:",
    [
      "A) CTL citotóxicos contra vírus",
      "B) Produtores predominantes de IgA secretora",
      "C) Células T reguladoras com papel supressor na homeostase imune e tolerância periférica",
      "D) Apresentadores profissionais de antígeno no epitélio intestinal"
    ],
    "Tregs FoxP3+ suprimem respostas exageradas e ajudam a evitar autoimunidade.",
    "CTL são CD8+ e citotóxicos.",
    "Plasmócitos produzem IgA, não Tregs.",
    "Treg FoxP3+ é o fenótipo clássico regulatório.",
    "Células apresentadoras são dendríticas/macrófagos, não Tregs.",
    "Resumo: FoxP3 marca linhagem reguladora CD4.\nA) INCORRETA. Linfócito citotóxico.\nB) INCORRETA. Função humoral.\nC) CORRETA. Treg clássica.\nD) INCORRETA. Papel de APC não é de Treg."
  ],
  [1535, "mad1_a8", 3, 2,
    "Após infecção, epitopos do patógeno assemelham-se a estruturas do hospedeiro e favorecem resposta contra o próprio tecido. Esse mecanismo denomina-se:",
    [
      "A) Seleção positiva exclusiva no timo",
      "B) Apoptose por privação de IL-7",
      "C) Epitopo criptico sem relevância clínica",
      "D) Mimetismo molecular entre antígenos microbianos e autoantígenos"
    ],
    "Mimetismo molecular explica algumas associações infecção-autoimunidade.",
    "Seleção positiva não é mimetismo.",
    "IL-7 não define o termo pedido.",
    "Epitopo criptico é outro conceito.",
    "Semelhança estrutural dispara autoimunidade cruzada.",
    "Resumo: Semelhança de epítopos liga infecção a autoimunidade.\nA) INCORRETA. Processo timóico distinto.\nB) INCORRETA. Citocina de sobrevivência.\nC) INCORRETA. Conceito diferente.\nD) CORRETA. Definição de mimetismo molecular."
  ],
  [1536, "mad1_a8", 0, 2,
    "Mulher com artrite, fotossensibilidade e FAN positivo; anti-DNA de dupla fita elevado. Qual papel é mais descrito para anti-dsDNA no LES?",
    [
      "A) Associação a nefrite por imunocomplexos e depósitos glomerulares",
      "B) Proteção contra eventos trombóticos em todos os pacientes",
      "C) Especificidade exclusiva para síndrome de Sjögren",
      "D) Marcador apenas de hipersensibilidade imediata"
    ],
    "Anti-dsDNA participa de imunocomplexos e correlaciona com nefrite lúpica em muitos casos.",
    "Imunocomplexos medeiam lesão renal.",
    "Anti-dsDNA não protege trombose universalmente.",
    "Sjögren tem outros autoanticorpos típicos.",
    "Hipersensibilidade imediata é IgE, não anti-dsDNA.",
    "Resumo: Anti-dsDNA é central no dano renal imunomediado no LES.\nA) CORRETA. Mecanismo descrito.\nB) INCORRETA. Não é regra de proteção.\nC) INCORRETA. Outra doença.\nD) INCORRETA. Tipo errado de hipersensibilidade."
  ],
  [1537, "mad1_a8", 1, 2,
    "Adolescente com poliúria, perda ponderal e anticorpos contra ilhotas pancreáticas. Mecanismo mais compatível:",
    [
      "A) Resistência periférica à insulina como único defeito",
      "B) Autoimunidade contra células beta com deficiência absoluta de insulina",
      "C) Hiperprodução de ACTH",
      "D) Estimulação do receptor de TSH por autoanticorpo"
    ],
    "O DM1 clássico associa-se a autoimunidade contra ilhotas e deficiência insulínica.",
    "DM2 predomina resistência; DM1 é destruição beta.",
    "DM1 autoimune destrói beta.",
    "ACTH não define DM1.",
    "Graves envolve TSHR, não ilhotas.",
    "Resumo: DM1 frequentemente é autoimune com destruição de beta.\nA) INCORRETA. Perfil de DM2.\nB) CORRETA. Mecanismo típico.\nC) INCORRETA. Eixo errado.\nD) INCORRETA. Doença tireoidiana."
  ],
  [1538, "mad1_a8", 2, 2,
    "Mulher com bócio difuso, tremores e exoftalmia; TSH suprimido e T4 livre elevado; TRAb positivo. Mecanismo fisiopatológico:",
    [
      "A) Tireoidite de Hashimoto com hipotireoidismo",
      "B) Nódulo autônomo produtor de TSH",
      "C) Autoanticorpos estimuladores do receptor de TSH (doença de Graves)",
      "D) Deficiência grave de iodo"
    ],
    "Graves é hipertireoidismo por anticorpo estimulador do receptor de TSH.",
    "Hashimoto cursa com hipotireoidismo.",
    "Nódulo autônomo não produz TSH.",
    "TRAb estimulador define Graves.",
    "Iodo carencial não explica hipertireoidismo típico.",
    "Resumo: Graves é autoimunidade com agonismo do TSHR.\nA) INCORRETA. Perfil oposto.\nB) INCORRETA. Fisiologia incorreta.\nC) CORRETA. Mecanismo clássico.\nD) INCORRETA. Causa de hipotireoidismo carencial."
  ],
  [1539, "mad1_a8", 3, 3,
    "Quando linfócitos T periféricos reconhecem antígeno próprio sem coestimulação adequada, podem entrar em anergia ou apoptose. Isso exemplifica:",
    [
      "A) Seleção positiva timóica",
      "B) Expressão exclusiva de AIRE no hepatócito",
      "C) Resposta Th2 dominante a parasitas",
      "D) Mecanismos de tolerância periférica complementares à educação timóica"
    ],
    "A tolerância periférica refina o repertório após o timo.",
    "Anergia periférica não é seleção positiva.",
    "AIRE é medular timica, não hepática exclusiva.",
    "Th2 não define o conceito.",
    "Anergia/apoptose periférica complementa tolerância central.",
    "Resumo: Periferia evita autoimunidade de clones que escapam ao timo.\nA) INCORRETA. Processo timóico.\nB) INCORRETA. Local e função errados.\nC) INCORRETA. Contexto parasitário.\nD) CORRETA. Tolerância periférica."
  ],
  [1540, "mad1_a8", 0, 3,
    "Sobre lúpus eritematoso sistêmico, assinale a afirmativa correta:",
    [
      "A) Anti-dsDNA é marcador importante e frequentemente correlaciona-se com nefrite",
      "B) O LES nunca envolve pele ou articulações",
      "C) FAN negativo exclui o diagnóstico em qualquer situação",
      "D) Ocorre apenas em crianças menores de 5 anos"
    ],
    "Anti-dsDNA é útil e associado a manifestações renais em parte dos pacientes.",
    "Correlação clínico-laboratorial é clássica.",
    "LES pode afetar pele e articulações.",
    "FAN pode variar; critérios clínicos completam.",
    "LES ocorre em adultos e crianças.",
    "Resumo: LES é sistêmico; anti-dsDNA tem papel em nefrite.\nA) CORRETA. Afirmação adequada.\nB) INCORRETA. Manifestações comuns existem.\nC) INCORRETA. Diagnóstico é clínico-serológico integrado.\nD) INCORRETA. Faixa etária ampla."
  ],
  [1541, "mad1_a8", 1, 3,
    "A síndrome IPEX associa-se principalmente a:",
    [
      "A) Deficiência isolada do fator C3",
      "B) Mutações em FOXP3 com falha de células T reguladoras e autoimunidade multiorgânica",
      "C) Infecção aguda por HIV como única causa",
      "D) Excesso de vitamina D como mecanismo"
    ],
    "IPEX é doença monogênica de Treg por FOXP3 defeituoso.",
    "Complemento não é o defeito.",
    "FOXP3 define Treg; sua perda leva autoimunidade grave.",
    "HIV não é IPEX.",
    "Vitamina D não causa IPEX.",
    "Resumo: FOXP3 é essencial para Treg e prevenção de autoimunidade.\nA) INCORRETA. Outro sistema.\nB) CORRETA. Mecanismo da IPEX.\nC) INCORRETA. Etiologia infecciosa não substitui IPEX.\nD) INCORRETA. Sem base fisiopatológica."
  ],
  // mad1_a9
  [1542, "mad1_a9", 0, 1,
    "Rejeição renal hiperaguda minutos após reperfusão, com trombose e necrose hemorrágica. Mecanismo imediato:",
    [
      "A) Anticorpos pré-existentes contra antígenos do doador (anti-HLA e incompatibilidade ABO grave)",
      "B) Infecção viral tardia com citomegalovirus",
      "C) Fibrose intersticial crônica lenta",
      "D) Deficiência isolada de vitamina B12"
    ],
    "Hiperaguda é mediada por anticorpos pré-formados e ativação rápida de coagulação e lesão vascular.",
    "Anticorpos circulantes causam dano imediato.",
    "CMV causa outros quadros temporais.",
    "Crônica é lenta.",
    "B12 não medeia rejeição hiperaguda.",
    "Resumo: Hiperaguda é imunidade humoral pré-sensibilizada.\nA) CORRETA. Mecanismo clássico.\nB) INCORRETA. Tempo e mecanismo.\nC) INCORRETA. Cronologia errada.\nD) INCORRETA. Irrelevante."
  ],
  [1543, "mad1_a9", 1, 1,
    "Paciente dias após transplante renal apresenta piora da função e biópsia com infiltrado linfocitário intersticial intenso. Quadro compatível com:",
    [
      "A) Nefropatia por IgA primária do receptor",
      "B) Rejeição aguda celular mediada por linfócitos T alorreativos e outros leucócitos",
      "C) Esclerose segmentar e focal idiopática do enxerto sem alorreconhecimento",
      "D) Dermatite alérgica de contato"
    ],
    "A rejeição aguda celular é ataque imune ao enxerto por células T e infiltrado inflamatório.",
    "IgA primária não define rejeição típica aguda pós-transplante assim.",
    "Infiltrado linfocitário é típico de aguda celular.",
    "FSGS idiopática sem componente imune alorreativo não é o melhor encaixe temporal.",
    "Dermatite não explica biópsia renal típica.",
    "Resumo: Aguda celular é T cells contra o enxerto.\nA) INCORRETA. Outra nefropatia.\nB) CORRETA. Padrão de rejeição aguda celular.\nC) INCORRETA. Mecanismo e tempo.\nD) INCORRETA. Órgão errado."
  ],
  [1544, "mad1_a9", 2, 2,
    "Meses a anos após transplante, arteriopatia fibrosa intimal e perda progressiva da função renal sugerem:",
    [
      "A) Rejeição hiperaguda imediata",
      "B) Infecção urinária não complicada isolada",
      "C) Rejeição crônica com remodelação vascular e fibrose",
      "D) Hiponatremia leve assintomática"
    ],
    "A crônica associa-se a fibrose e arteriopatia do enxerto ao longo do tempo.",
    "Hiperaguda é minutos a horas.",
    "ITU não explica arteriopatia fibrosa típica isoladamente.",
    "Crônica remodela vasos e parênquima.",
    "Hiponatremia não é critério histológico.",
    "Resumo: Rejeição crônica evolui com obsolescência e fibrose.\nA) INCORRETA. Tempo incompatível.\nB) INCORRETA. Diagnóstico infeccioso simples.\nC) CORRETA. Padrão crônico.\nD) INCORRETA. Laboratorial genérico."
  ],
  [1545, "mad1_a9", 3, 2,
    "Após transplante alogênico de medula, paciente com rash cutâneo, diarreia e elevação de transaminases. Quadro sugere:",
    [
      "A) Rejeição do órgão sólido pelo receptor apenas",
      "B) Infecção exclusiva por helmintos",
      "C) Trombose de veia porta idiopática",
      "D) Doença do enxerto contra o hospedeiro mediada por linfócitos T do doador"
    ],
    "GVHD clássica acomete pele, trato GI e fígado após transplante hematopoético alogênico.",
    "GVHD é ataque do enxerto ao organismo do receptor.",
    "Helmintos não são padrão único.",
    "Trombose portal não explica tríade típica.",
    "Linfócitos do doador reconhecem o hospedeiro como estranho.",
    "Resumo: GVHD é imunidade do doador contra tecidos do receptor.\nA) INCORRETA. Direção do processo.\nB) INCORRETA. Causa infecciosa incompleta.\nC) INCORRETA. Diagnóstico vascular não típico.\nD) CORRETA. Mecanismo da GVHD."
  ],
  [1546, "mad1_a9", 0, 2,
    "A compatibilidade de antígenos leucocitários humanos (HLA) entre doador e receptor influencia principalmente:",
    [
      "A) Risco de rejeição alogênica e intensidade de imunossupressão necessária",
      "B) Cor da pele do receptor",
      "C) Tipo ABO sem relevância em transplante",
      "D) Resposta vacinal à influenza exclusivamente"
    ],
    "HLA define alorreconhecimento; maior disparidade aumenta risco imunológico.",
    "HLA é central na alorresposta.",
    "Fenótipo cutâneo não é determinado por HLA para esse fim.",
    "ABO continua crucial em muitos transplantes sólidos.",
    "Influenza não é o foco primário do pareamento HLA.",
    "Resumo: Pareamento HLA modula alorreatividade.\nA) CORRETA. Efeito na rejeição.\nB) INCORRETA. Sem relação.\nC) INCORRETA. ABO importa.\nD) INCORRETA. Contexto errado."
  ],
  [1547, "mad1_a9", 1, 2,
    "Em transfusão de hemácias em situação de urgência, a compatibilidade mais crítica a garantir imediatamente é:",
    [
      "A) Identidade HLA completa entre doador e receptor",
      "B) Grupo ABO para evitar hemólise aguda por isoaglutininas pré-formadas",
      "C) Crossmatch imunológico para transplante renal em todo paciente febril",
      "D) Dosagem sérica de IgE"
    ],
    "ABO incompatível em hemácias pode causar reação hemolítica aguda grave.",
    "HLA não é teste de rotina para hemácias em urgência.",
    "Isoaglutininas anti-A ou anti-B medeiam hemólise se o ABO for incompatível.",
    "Crossmatch de transplante não substitui checagem ABO na hemotransfusão.",
    "IgE não define hemólise por incompatibilidade ABO.",
    "Resumo: Hemácias exigem respeito ao sistema ABO.\nA) INCORRETA. Não é requisito de hemácias.\nB) CORRETA. Prioridade clássica.\nC) INCORRETA. Contexto misturado.\nD) INCORRETA. Irrelevante para ABO."
  ],
  [1548, "mad1_a9", 2, 2,
    "Crossmatch positivo para anticorpos anti-HLA do receptor frente a linfócitos do doador indica:",
    [
      "A) Ausência de risco de rejeição",
      "B) Compatibilidade imunológica perfeita",
      "C) Alto risco de rejeição humoral; pode contraindicar o transplante ou exigir desensibilização",
      "D) Incompatibilidade ABO como única causa possível"
    ],
    "Anticorpos anti-doador predizem lesão humoral do enxerto.",
    "A afirma ausência de risco; na prática há sensibilização e risco elevado.",
    "Compatibilidade perfeita é incompatível com crossmatch positivo.",
    "Anticorpos anti-HLA no soro do receptor predizem risco de rejeição humoral e podem contraindicar ou exigir desensibilização.",
    "Crossmatch avalia HLA; ABO é outro eixo e não é a única base do resultado.",
    "Resumo: DSA e crossmatch positivo aumentam risco de rejeição humoral.\nA) INCORRETA. Risco aumenta.\nB) INCORRETA. Interpretação invertida.\nC) CORRETA. Implicação clínica correta.\nD) INCORRETA. Mecanismos podem coexistir; ABO não explica sozinho o resultado."
  ],
  [1549, "mad1_a9", 3, 3,
    "Biópsia renal precoce pós-transplante mostra depósito peritubular de C4d e evidência de lesão mediada por anticorpos. O processo é:",
    [
      "A) Tolerância central completa",
      "B) Infecção fúngica exclusiva sem alorreconhecimento",
      "C) Infarto renal isquêmico simples sem imunidade",
      "D) Rejeição aguda humoral com ativação do complemento pelo enxerto"
    ],
    "C4d marca ativação da cascata do complemento na microcirculação por anticorpos anti-doador.",
    "Tolerância não deposita C4d por rejeição.",
    "Fungo não explica padrão de C4d típico isoladamente.",
    "Isquemia não é o diagnóstico imunológico descrito.",
    "Anticorpos ativam complemento e lesionam capilares.",
    "Resumo: Rejeição humoral usa anticorpos e complemento.\nA) INCORRETA. Estado oposto.\nB) INCORRETA. Diagnóstico infeccioso insuficiente.\nC) INCORRETA. Mecânica vascular simples.\nD) CORRETA. Marcação e patogenia compatíveis."
  ],
  [1550, "mad1_a9", 0, 3,
    "Receptor de segundo transplante renal com PRA elevado apresenta crossmatch luminométrico positivo com soro atual. A implicação mais importante é:",
    [
      "A) Risco aumentado de rejeição mediada por anticorpos e necessidade de estratégia especializada",
      "B) Garantia de tolerância permanente sem imunossupressão",
      "C) Indicação de hemotransfusão ABO deliberadamente incompatível",
      "D) Prova de infecção bacteriana aguda única"
    ],
    "Sensibilização alorreativa eleva risco de rejeição humoral.",
    "Crossmatch positivo exige manejo cuidadoso.",
    "Não há tolerância automática.",
    "ABO incompatível não é objetivo.",
    "PRA e crossmatch não diagnosticam bacteremia.",
    "Resumo: Anticorpos anti-HLA circulantes prejudicam o enxerto.\nA) CORRETA. Risco imunológico elevado.\nB) INCORRETA. Falso.\nC) INCORRETA. Prática perigosa.\nD) INCORRETA. Contexto imune, não infeccioso."
  ],
  [1551, "mad1_a9", 1, 3,
    "Na profilaxia clássica da GVHD em transplante alogênico, esquemas frequentemente combinam:",
    [
      "A) Somente vacinação com BCG em qualquer situação",
      "B) Metotrexato e inibidor de calcineurina como base de muitos protocolos",
      "C) Dose única de vitamina C oral",
      "D) Antibioticoterapia exclusiva para anaeróbios facultativos"
    ],
    "MTX mais inibidor de calcineurina é combinação histórica de profilaxia de GVHD.",
    "BCG é vacina viva e contraindicada em imunossuprimidos graves.",
    "Metotrexato com inibidor de calcineurina integra muitos protocolos clássicos de profilaxia.",
    "Vitamina C isolada não substitui imunossupressão da GVHD.",
    "Antibiótico não realiza profilaxia imunológica da GVHD.",
    "Resumo: Profilaxia de GVHD usa imunossupressores combinados.\nA) INCORRETA. Vacina viva inadequada.\nB) CORRETA. Esquema clássico com metotrexato e inibidor de calcineurina.\nC) INCORRETA. Sem base.\nD) INCORRETA. Antibiótico não substitui imunossupressão da GVHD."
  ]
];

for (const row of meta) {
  const [id, tema, correta, dif, enunciado, opcoes, eg, a, b, c, d, expl] = row;
  q.push({
    id,
    materia: "mad1",
    tema,
    enunciado,
    opcoes,
    correta,
    dificuldade: dif,
    modulo: 2,
    explicacao_geral: eg,
    explicacoes_opcoes: { A: a, B: b, C: c, D: d },
    explicacao: expl
  });
}

const out = JSON.stringify(q, null, 2);
fs.writeFileSync(
  path.join(__dirname, "..", "data", "_generated_mad1_a7_a8_a9_30q.json"),
  out,
  "utf8"
);
