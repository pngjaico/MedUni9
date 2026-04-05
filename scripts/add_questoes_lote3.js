const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'data', 'questoes.json');
const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
const questoes = data.questoes || data;

const novas = [
  // ── MAD1_A1 — Sistema Imune (Abbas & Lichtman; Janeway) ─────────────────
  {
    "id": 162,
    "materia": "mad1",
    "enunciado": "Os órgãos linfoides dividem-se em primários e secundários conforme sua função. Qual alternativa diferencia corretamente as duas categorias? (Ref.: Abbas, Imunologia Celular e Molecular, 10ª ed.)",
    "opcoes": [
      "A) Órgãos primários são linfonodos e baço; secundários são timo e medula óssea, onde as células amadurecem",
      "B) Órgãos primários respondem a antígenos na primeira exposição; secundários armazenam memória imunológica",
      "C) Órgãos primários (timo e medula óssea) são sítios de maturação de linfócitos; secundários (linfonodos, baço, MALT) são onde a resposta imune ocorre após encontro com antígeno",
      "D) Timo é secundário porque só atua após exposição antigênica; medula óssea é primária por produzir células indiferenciadas"
    ],
    "correta": 2,
    "explicacao": "Resumo: Órgãos linfoides primários = maturação de linfócitos; secundários = sítios de resposta imune após apresentação antigênica. A) INCORRETA. Linfonodos e baço são órgãos SECUNDÁRIOS; timo e medula óssea são os PRIMÁRIOS. B) INCORRETA. Essa descrição inverte a lógica — primário é de maturação, não de resposta à primeira exposição. C) CORRETA. Conforme Abbas: timo (matura T) e medula óssea (matura B) são primários; linfonodos, baço e MALT são secundários onde acontece a resposta ao antígeno. D) INCORRETA. O timo é PRIMÁRIO — é no timo que os linfócitos T recebem seleção positiva e negativa, independentemente de exposição antigênica prévia.",
    "tema": "mad1_a1",
    "subfoco": "orgaos-linfoides",
    "dificuldade": 1,
    "modulo": 3
  },
  {
    "id": 163,
    "materia": "mad1",
    "enunciado": "Paciente de 32 anos apresenta IgE sérica muito elevada, eosinofilia e episódios recorrentes de urticária e broncoespasmo após contato com látex durante procedimento cirúrgico. Qual mecanismo imunológico explica esse quadro? (Ref.: Abbas, 10ª ed., cap. Hipersensibilidade)",
    "opcoes": [
      "A) Hipersensibilidade tipo I mediada por IgE ligada a mastócitos: o alérgeno realiza crosslinking de IgE-mastócito → degranulação com liberação de histamina e leucotrienos",
      "B) Hipersensibilidade tipo II por anticorpos IgG que reconhecem antígenos de superfície celular e ativam complemento causando lise",
      "C) Hipersensibilidade tipo III por depósito de imunocomplexos IgM-látex em tecidos com ativação de complemento e neutrófilos",
      "D) Hipersensibilidade tipo IV mediada por linfócitos T CD8+ citotóxicos que destroem células endoteliais sem participação de anticorpos"
    ],
    "correta": 0,
    "explicacao": "Resumo: Alergia a látex é hipersensibilidade tipo I (imediata) mediada por IgE — o alérgeno faz crosslinking de duas moléculas de IgE ligadas a mastócitos → degranulação imediata com histamina, leucotrienos e prostaglandinas → urticária e broncoespasmo. A) CORRETA. IgE elevada + eosinofilia + reação imediata após contato = hipersensibilidade tipo I (anafilática/atópica). Mastócitos sensibilizados por IgE liberam mediadores vasoativos e espasmogênicos ao encontrar o alérgeno. B) INCORRETA. Tipo II envolve IgG contra antígenos de superfície celular (ex.: anemia hemolítica autoimune) — não é a fisiopatologia da alergia a látex. C) INCORRETA. Tipo III envolve imunocomplexos IgM/IgG circulantes depositados em tecidos — manifesta-se como vasculite ou doença do soro, não urticária imediata. D) INCORRETA. Tipo IV (tardio/celular) é mediado por linfócitos T, não tem participação de anticorpos e demora 24-72h para se manifestar.",
    "tema": "mad1_a1",
    "subfoco": "hipersensibilidade-tipo-i",
    "dificuldade": 3,
    "modulo": 3
  },
  {
    "id": 164,
    "materia": "mad1",
    "enunciado": "Qual célula do sistema imune é descrita como 'ponte obrigatória entre imunidade inata e adaptativa', capturando antígenos nos tecidos periféricos e apresentando-os para linfócitos T naive nos linfonodos? (Ref.: Janeway, Imunobiologia, 9ª ed.)",
    "opcoes": [
      "A) Neutrófilo — célula de vida curta que fagocita microrganismos mas não ativa linfócitos T naive com eficiência",
      "B) Célula dendrítica — APC profissional que migra do tecido para o linfonodo e ativa linfócitos T naive via MHC I e II com coestimulação adequada",
      "C) Linfócito B — que pode apresentar antígenos via MHC II após captura por imunoglobulinas de superfície para linfócitos T já ativados",
      "D) Macrófago — apresenta antígeno via MHC II apenas para linfócitos T CD4+ já ativados, sendo menos eficiente para ativar T naive"
    ],
    "correta": 1,
    "explicacao": "Resumo: A célula dendrítica é a APC (célula apresentadora de antígeno) profissional por excelência — captura antígenos na periferia, matura e migra para o linfonodo, onde ativa linfócitos T naive com sinais 1 (MHC-antígeno) + 2 (coestimulação) + 3 (citocinas). A) INCORRETA. Neutrófilo é a primeira célula a chegar no foco infeccioso e fagocita microrganismos, mas não migra para linfonodos para ativar T naive — é eficiência para destruição, não para apresentação. B) CORRETA. Célula dendrítica = APC profissional: expressa altos níveis de MHC I e II + moléculas coestimulatórias (CD80/86) → única que ativa eficientemente linfócitos T naive, fazendo a ponte inata-adaptativa. C) INCORRETA. Linfócito B apresenta antígeno via MHC II mas para linfócitos T CD4+ já ativados (helper) — não é eficiente para T naive. D) INCORRETA. Macrófago apresenta antígeno mas é muito menos eficiente que a célula dendrítica para ativar T naive, e requer ativação prévia para alta expressão de coestimuladores.",
    "tema": "mad1_a1",
    "subfoco": "celula-dendritica-apc",
    "dificuldade": 2,
    "modulo": 3
  },
  {
    "id": 165,
    "materia": "mad1",
    "enunciado": "Criança de 7 anos apresenta quarto episódio de meningite por Neisseria meningitidis em 3 anos, sem contato epidemiológico identificado. Os demais exames imunológicos básicos são normais. Qual deficiência imunológica deve ser prioritariamente investigada e por quê? (Ref.: Abbas, 10ª ed.)",
    "opcoes": [
      "A) Deficiência de IgA sérica — porque IgA opsoniza bactérias encapsuladas para fagocitose por neutrófilos",
      "B) Deficiência de linfócito T CD4+ — porque esses linfócitos coordenam a resposta específica contra Neisseria",
      "C) Disfunção de neutrófilo (doença granulomatosa crônica) — porque neutrófilos são a primeira defesa contra meningococo",
      "D) Deficiência de complemento terminal (C5-C9) — porque o MAC (complexo de ataque à membrana) é o principal mecanismo de lise de Neisseria, bactéria sem proteção de parede espessa; sem MAC há meningite meningocócica recorrente"
    ],
    "correta": 3,
    "explicacao": "Resumo: Meningococo recorrente em mesmo paciente é sinal clássico de deficiência de complemento terminal (C5-C9), pois o MAC é o mecanismo letal primário contra Neisseria. A) INCORRETA. Deficiência de IgA causa infecções sinopulmonares recorrentes, não infecções sistêmicas por meningococo de repetição. B) INCORRETA. Deficiência de T CD4+ causa oportunistas (fungos, vírus, protozoários), não episódios recorrentes de meningococo. C) INCORRETA. Doença granulomatosa crônica (disfunção do burst oxidativo) causa abscessos por Staphylococcus e Aspergillus, não meningococo recorrente. D) CORRETA. Deficiência de C5-C9 = ausência de MAC → incapacidade de lise de Neisseria (que não tem parede de peptidoglicano espessa como Gram-positivos) → meningite meningocócica recorrente. É a associação clássica descrita em Abbas e Janeway.",
    "tema": "mad1_a1",
    "subfoco": "complemento-deficiencia",
    "dificuldade": 3,
    "modulo": 3
  },

  // ── MAD1_A2 — Imunidade Inata (Abbas; Janeway) ──────────────────────────
  {
    "id": 166,
    "materia": "mad1",
    "enunciado": "Qual receptor da imunidade inata reconhece especificamente o lipopolissacarídeo (LPS) de bactérias Gram-negativas e qual é a principal consequência clínica de sua ativação excessiva? (Ref.: Abbas, 10ª ed.; Janeway, Imunobiologia, 9ª ed.)",
    "opcoes": [
      "A) TLR2 — reconhece LPS e, em ativação excessiva, causa doença autoimune sistêmica por mimetismo molecular",
      "B) TLR4 — reconhece LPS e, em bacteremia Gram-negativa intensa, induz tempestade de TNF-α, IL-1 e IL-6 com vasodilatação sistêmica → choque séptico",
      "C) TLR9 — reconhece LPS bacteriano no citoplasma celular e induz apoptose de macrófagos infectados",
      "D) NOD2 — reconhece LPS na superfície de bactérias Gram-negativas e ativa a via do complemento clássica"
    ],
    "correta": 1,
    "explicacao": "Resumo: TLR4 reconhece LPS (endotoxina de Gram-negativas) → ativa macrófagos → produção de TNF-α, IL-1, IL-6 em cascata → choque séptico quando excessivo. A) INCORRETA. TLR2 reconhece ácido lipoteicóico de Gram-positivas e peptidoglicana, não LPS. Doença autoimune não é a consequência de ativação de TLR2. B) CORRETA. TLR4 + LPS → NF-κB → produção maciça de citocinas pró-inflamatórias (TNF-α, IL-1β, IL-6) → vasodilatação, hipotensão, coagulação intravascular = choque séptico. Base fisiopatológica de sepse por Gram-negativas. C) INCORRETA. TLR9 reconhece DNA CpG não metilado (bacteriano/viral) no endossomo — não LPS, e não no citoplasma. D) INCORRETA. NOD1/NOD2 reconhecem fragmentos de peptidoglicana intracelular, não LPS. NOD2 não ativa complemento clássico.",
    "tema": "mad1_a2",
    "subfoco": "tlr4-lps-choque",
    "dificuldade": 1,
    "modulo": 3
  },
  {
    "id": 167,
    "materia": "mad1",
    "enunciado": "Em inflamação aguda por infecção bacteriana cutânea, qual é a sequência temporal correta do recrutamento celular da imunidade inata nos primeiros estágios? (Ref.: Abbas, 10ª ed.; Robbins, Bases Patológicas, 10ª ed.)",
    "opcoes": [
      "A) Linfócitos T → células dendríticas → macrófagos → neutrófilos (ordem crescente de especificidade imune)",
      "B) Macrófagos residentes → linfócitos NK → eosinófilos → neutrófilos (ordem crescente de tamanho celular)",
      "C) Macrófagos residentes reconhecem PAMPs → secretam IL-1, IL-6, TNF-α → ativação endotelial (selectinas/integrinas) → marginação e diapedese de neutrófilos como primeira onda celular do sangue",
      "D) Neutrófilos chegam primeiro e secretam IL-12 → ativam macrófagos residentes → células dendríticas migram para o linfonodo ativando adaptativa"
    ],
    "correta": 2,
    "explicacao": "Resumo: A sequência correta: macrófagos residentes percebem o agressor → liberam citocinas pró-inflamatórias → endotélio ativa → neutrófilos são recrutados do sangue circulante como primeira onda de reforço. A) INCORRETA. Linfócitos T são da imunidade adaptativa e chegam bem depois; a ordem descrita não é baseada em eventos reais da inflamação aguda. B) INCORRETA. NK e eosinófilos não são as células recrutadas em sequência logo após os macrófagos na infecção bacteriana cutânea — o recrutamento principal é de neutrófilos. C) CORRETA. Macrófagos residentes → IL-1/TNF-α/IL-6 → ativação do endotélio (E-selectina, ICAM-1) → rolamento, adesão e diapedese de neutrófilos. Os neutrófilos chegam no foco em horas. D) INCORRETA. Invertido — são os macrófagos residentes que produzem IL-12 (não os neutrófilos), e a IL-12 ativa NK e direciona a resposta adaptativa Th1.",
    "tema": "mad1_a2",
    "subfoco": "recrutamento-celular-inflamacao",
    "dificuldade": 2,
    "modulo": 3
  },
  {
    "id": 168,
    "materia": "mad1",
    "enunciado": "As células NK (Natural Killer) eliminam células-alvo sem precisar de anticorpos ou reconhecimento de MHC. Qual é o princípio molecular que dispara a ativação da NK contra uma célula infectada por vírus? (Ref.: Janeway, Imunobiologia, 9ª ed.)",
    "opcoes": [
      "A) Ausência ou redução de MHC-I na superfície da célula-alvo — princípio do 'missing self': sem MHC-I, a NK interpreta como sinal de alvo e libera perforinas e granzimas",
      "B) Presença de MHC-II aumentada na superfície da célula-alvo, sinalizando apresentação de antígeno viral à NK",
      "C) Ligação de IgE à superfície da célula infectada, criando ponte entre o receptor FcR da NK e o alvo para citotoxicidade",
      "D) Expressão de CD4 pela célula infectada, identificando linfócito T helper infectado para eliminação preferencial"
    ],
    "correta": 0,
    "explicacao": "Resumo: NK usa o princípio 'missing self' — células normais expressam MHC-I que inibe NK; células infectadas por vírus reduzem MHC-I como estratégia de evasão, mas isso remove o freio da NK → ativação e citotoxicidade. A) CORRETA. Células infectadas por vírus frequentemente reduzem MHC-I para escapar do CD8+ citotóxico → mas isso remove o sinal inibitório para a NK ('missing self') → NK libera perforinas (perfuram membrana) e granzimas (induzem apoptose). B) INCORRETA. MHC-II não é o sinal de ativação da NK; MHC-II apresenta antígenos para linfócitos T CD4+. C) INCORRETA. Citotoxicidade celular dependente de anticorpo (ADCC) é um mecanismo real da NK, mas não é o 'missing self' — e envolve IgG (Fc), não IgE. D) INCORRETA. CD4 não é sinal de alvo para NK; a NK não reconhece marcadores T específicos para seleção de alvo.",
    "tema": "mad1_a2",
    "subfoco": "nk-missing-self",
    "dificuldade": 2,
    "modulo": 3
  },
  {
    "id": 169,
    "materia": "mad1",
    "enunciado": "Paciente com pneumonia bacteriana grave apresenta PCR 220 mg/L, febre 39°C, albumina 2,1 g/dL (VR: 3,5–5,0 g/dL). A queda de albumina nesse contexto é melhor explicada por qual mecanismo? (Ref.: Robbins e Cotran, Bases Patológicas das Doenças, 10ª ed.)",
    "opcoes": [
      "A) Perda urinária de albumina por síndrome nefrótica desencadeada pelo processo inflamatório sistêmico",
      "B) Redução da síntese hepática por hepatotoxicidade direta do antibiótico em dose habitual",
      "C) Sequestro de albumina nos espaços intersticiais pelo edema pulmonar causado pela pneumonia",
      "D) Albumina é proteína negativa de fase aguda: o fígado, em resposta à IL-6, redireciona recursos para síntese de proteínas de fase aguda (PCR, fibrinogênio, ferritina), reduzindo produção de albumina"
    ],
    "correta": 3,
    "explicacao": "Resumo: Na resposta inflamatória sistêmica, IL-6 produzida por macrófagos ativa o fígado a priorizar proteínas de fase aguda positivas (PCR, fibrinogênio) → recursos de síntese são deslocados → albumina cai (proteína negativa de fase aguda). A) INCORRETA. Síndrome nefrótica é causa de hipoalbuminemia por perda urinária, mas não é desencadeada por pneumonia — são condições distintas. B) INCORRETA. Antibióticos em dose habitual não causam hepatotoxicidade clinicamente relevante a ponto de reduzir síntese de albumina. C) INCORRETA. O sequestro intersticial pode reduzir albumina sérica transitoriamente no espaço de distribuição, mas não explica a magnitude da queda durante inflamação grave. D) CORRETA. Albumina é clássica proteína negativa de fase aguda — IL-6 induz o fígado a sintetizar PCR, fibrinogênio, ferritina e hepicidina em detrimento da albumina. Está no Robbins e é conceito clássico de laboratório clínico.",
    "tema": "mad1_a2",
    "subfoco": "proteinas-fase-aguda",
    "dificuldade": 3,
    "modulo": 3
  },

  // ── BMF4_A1 — Divisão do Sistema Nervoso (Moore; Guyton & Hall) ─────────
  {
    "id": 170,
    "materia": "bmf4",
    "enunciado": "Qual é a distinção anatômica correta entre Sistema Nervoso Central (SNC) e Sistema Nervoso Periférico (SNP)? (Ref.: Moore, Anatomia Orientada para a Clínica, 8ª ed.)",
    "opcoes": [
      "A) SNC compreende encéfalo e medula espinal, protegidos por estruturas ósseas e meninges; SNP compreende nervos cranianos, espinais e gânglios fora do SNC",
      "B) SNC compreende nervos cranianos e tratos motores; SNP engloba o encéfalo e os tratos sensitivos espinais",
      "C) SNC inclui encéfalo, medula e os 12 pares de nervos cranianos; SNP engloba apenas nervos espinais e gânglios autônomos",
      "D) SNC inclui todos os neurônios que processam informação sensorial; SNP inclui todos os neurônios que processam informação motora"
    ],
    "correta": 0,
    "explicacao": "Resumo: A divisão é anatômica — SNC = dentro do crânio e canal vertebral (encéfalo + medula); SNP = fora (nervos e gânglios). A) CORRETA. SNC = encéfalo (telencéfalo, diencéfalo, tronco, cerebelo) + medula espinal, todos protegidos por crânio/coluna e envoltos por meninges; SNP = 12 pares de nervos cranianos + 31 pares de nervos espinais + gânglios autônomos. B) INCORRETA. Os nervos cranianos fazem parte do SNP, não do SNC; os tratos não definem a divisão. C) INCORRETA. Os nervos cranianos emergem do tronco encefálico (SNC) mas percorrem como nervos do SNP — não são SNC. D) INCORRETA. A distinção não é funcional (sensorial vs. motora), mas anatômica (dentro vs. fora do crânio/coluna).",
    "tema": "bmf4_a1",
    "subfoco": "snc-snp-divisao",
    "dificuldade": 1,
    "modulo": 4
  },
  {
    "id": 171,
    "materia": "bmf4",
    "enunciado": "Em corte transversal, a distribuição de substância cinzenta e branca é oposta no encéfalo e na medula espinal. Qual alternativa descreve corretamente essa relação? (Ref.: Moore, Anatomia Orientada para a Clínica, 8ª ed.)",
    "opcoes": [
      "A) No encéfalo e na medula, a substância cinzenta ocupa o exterior nas duas estruturas, seguindo o mesmo padrão",
      "B) No encéfalo, a substância branca é externa (córtex); na medula, a branca também é externa — o padrão é idêntico",
      "C) No encéfalo, a substância cinzenta é externa (córtex cerebral) e a branca é interna; na medula, a cinzenta é interna (formato de H ou borboleta) e a branca é externa",
      "D) Substância cinzenta e branca têm a mesma distribuição em encéfalo e medula — a diferença está apenas no tipo de neurônio presente"
    ],
    "correta": 2,
    "explicacao": "Resumo: Encéfalo e medula têm distribuição invertida — no encéfalo, cinzenta é fora (córtex); na medula, cinzenta é dentro (H). Isso é clássico de questão. A) INCORRETA. O encéfalo tem cinzenta fora, mas a medula tem cinzenta dentro — não é o mesmo padrão. B) INCORRETA. No encéfalo, o córtex é cinzento (corpos neuronais), não branco. C) CORRETA. Encéfalo: substância cinzenta fora (córtex = corpos neuronais) e branca dentro (axônios mielinizados). Medula: cinzenta dentro em formato de H (corpos neuronais) e branca fora (axônios mielinizados dos tratos). D) INCORRETA. A distribuição é anatomicamente diferente entre as duas estruturas, não apenas pelo tipo de neurônio.",
    "tema": "bmf4_a1",
    "subfoco": "substancia-cinzenta-branca",
    "dificuldade": 2,
    "modulo": 4
  },
  {
    "id": 172,
    "materia": "bmf4",
    "enunciado": "Paciente em choque anafilático recebe adrenalina IM com reversão rápida da hipotensão e broncoespasmo. Qual divisão do SNA foi farmacologicamente mimetizada pela adrenalina e quais são seus receptores efetores? (Ref.: Guyton & Hall, Tratado de Fisiologia Médica, 13ª ed.)",
    "opcoes": [
      "A) Parassimpático pós-ganglionar, cujo neurotransmissor endógeno é acetilcolina em receptores muscarínicos M2 e M3",
      "B) Simpático pós-ganglionar, cujo neurotransmissor endógeno é noradrenalina em receptores adrenérgicos alfa-1 (vasoconstrição) e beta-2 (broncodilatação)",
      "C) Sistema entérico, cujo plexo de Auerbach controla o tônus vascular periférico e a broncodilatação",
      "D) Pré-ganglionar simpático, que usa acetilcolina em receptor nicotínico e causa efeitos idênticos à adrenalina exógena"
    ],
    "correta": 1,
    "explicacao": "Resumo: Adrenalina mimetiza o simpático pós-ganglionar — vasoconstrição via alfa-1 (reverte hipotensão) e broncodilatação via beta-2 (reverte broncoespasmo). A) INCORRETA. O parassimpático pós-ganglionar usa ACh em receptores muscarínicos → causa bradicardia, broncoconstrição e vasodilatação — efeitos opostos ao desejado em anafilaxia. B) CORRETA. Adrenalina = agonista adrenérgico alfa e beta. Em anafilaxia: alfa-1 → vasoconstrição → aumenta PA; beta-2 → broncodilatação → alivia broncoespasmo; beta-1 → aumenta FC e contratilidade. Mimetiza o simpático pós-ganglionar. C) INCORRETA. Sistema entérico controla TGI — não tem papel primário no tônus vascular sistêmico ou broncodilatação. D) INCORRETA. Pré-ganglionar simpático usa ACh-nicotínico; a adrenalina age nos receptores adrenérgicos dos órgãos-alvo (pós-ganglionar), não no pré-ganglionar.",
    "tema": "bmf4_a1",
    "subfoco": "sna-simpatico-adrenalina",
    "dificuldade": 2,
    "modulo": 4
  },
  {
    "id": 173,
    "materia": "bmf4",
    "enunciado": "O tronco encefálico é frequentemente confundido com estruturas adjacentes. Qual é a composição correta do tronco encefálico? (Ref.: Moore, Anatomia Orientada para a Clínica, 8ª ed.)",
    "opcoes": [
      "A) Diencéfalo + mesencéfalo + cerebelo",
      "B) Telencéfalo + mesencéfalo + bulbo",
      "C) Tálamo + ponte + bulbo",
      "D) Mesencéfalo + ponte + bulbo — o cerebelo está no rombencéfalo mas NÃO integra o tronco encefálico"
    ],
    "correta": 3,
    "explicacao": "Resumo: Tronco encefálico = mesencéfalo + ponte + bulbo (medula oblonga). Cerebelo pertence ao rombencéfalo (metencéfalo), mas é estruturalmente separado do tronco. A) INCORRETA. Diencéfalo (tálamo, hipotálamo) não integra o tronco encefálico — está entre os hemisférios e o tronco. Cerebelo também não integra o tronco. B) INCORRETA. Telencéfalo são os hemisférios cerebrais — acima do diencéfalo, muito distante do tronco. C) INCORRETA. Tálamo faz parte do diencéfalo, não do tronco. A tríade do tronco é mesencéfalo + ponte + bulbo. D) CORRETA. Tronco encefálico = mesencéfalo (superior) + ponte (média) + bulbo (inferior/medula oblonga). O cerebelo se conecta ao tronco pelos pedúnculos cerebelares mas é estrutura separada — erro clássico de prova colocar cerebelo no tronco.",
    "tema": "bmf4_a1",
    "subfoco": "tronco-encefalico",
    "dificuldade": 1,
    "modulo": 4
  },

  // ── BMF4_A2 — Embriologia do SN (Langman, Embriologia Médica) ───────────
  {
    "id": 174,
    "materia": "bmf4",
    "enunciado": "O fechamento do tubo neural ocorre entre o 18.º e o 28.º dia de gestação. A falha no fechamento do neuróporo anterior (cranial) no 25.º dia resulta em qual malformação? (Ref.: Langman, Embriologia Médica, 14ª ed.)",
    "opcoes": [
      "A) Espinha bífida com mielomeningocele — herniação de medula e raízes pelo defeito de coluna vertebral",
      "B) Anencefalia — ausência de desenvolvimento dos hemisférios cerebrais e calota craniana, incompatível com a vida pós-natal",
      "C) Hidrocefalia obstrutiva congênita por estenose do aqueduto de Sylvius",
      "D) Meningocele craniana — herniação apenas de meninges pelo defeito ósseo sem exposição do tecido neural"
    ],
    "correta": 1,
    "explicacao": "Resumo: Neuróporo anterior (cranial) fecha no 25.º dia — falha = anencefalia. Neuróporo posterior (caudal) fecha no 27.º dia — falha = espinha bífida. A) INCORRETA. Espinha bífida/mielomeningocele resulta da falha do neuróporo POSTERIOR (caudal, 27.º dia) — afeta a medula espinal, não o encéfalo. B) CORRETA. Falha do neuróporo anterior no 25.º dia impede o desenvolvimento do prosencéfalo → anencefalia (ausência de hemisférios + ausência de calota craniana) → incompatível com vida. C) INCORRETA. Hidrocefalia por estenose do aqueduto é uma malformação posterior ao fechamento do tubo — ocorre na fase de organização do sistema ventricular, não do fechamento dos neuróporos. D) INCORRETA. Meningocele craniana é herniação de meninges por defeito ósseo craniano (encefalocele), não resulta diretamente da falha do neuróporo anterior.",
    "tema": "bmf4_a2",
    "subfoco": "neuroporo-anencefalia",
    "dificuldade": 1,
    "modulo": 4
  },
  {
    "id": 175,
    "materia": "bmf4",
    "enunciado": "As células da crista neural migram para diferentes regiões do embrião dando origem a estruturas diversas. Qual relação entre crista neural e um derivado clínico é correta? (Ref.: Langman, 14ª ed.; Robbins, 10ª ed.)",
    "opcoes": [
      "A) A medula suprarrenal origina-se de células da crista neural; por isso o neuroblastoma — tumor maligno pediátrico mais comum do retroperitônio — deriva dessas células cromafins",
      "B) Os oligodendrócitos do SNC derivam de cristas neurais e são responsáveis pela mielinização central no período fetal",
      "C) O timo é derivado exclusivamente das cristas neurais, explicando por que malformações tímicas associam-se sempre a defeitos do tubo neural",
      "D) Os gânglios da raiz dorsal (DRG) derivam do mesoderma paraxial somítico, não das cristas neurais"
    ],
    "correta": 0,
    "explicacao": "Resumo: Cristas neurais → células cromafins da medula suprarrenal → neuroblastoma quando essas células sofrem transformação maligna. A) CORRETA. A medula suprarrenal deriva de células da crista neural que migram para a glândula suprarrenal e se diferenciam em células cromafins (secretam adrenalina/noradrenalina). O neuroblastoma é tumor maligno pediátrico que origina dessas células — relação crista neural-tumor diretamente cobrada no Robbins. B) INCORRETA. Oligodendrócitos derivam de precursores do tubo neural (neuroepitélio), não de cristas neurais. Células de SCHWANN (SNP) derivam de cristas neurais. C) INCORRETA. O timo deriva de endoderma da 3ª bolsa faríngea, não de cristas neurais. D) INCORRETA. Os gânglios da raiz dorsal (DRG) derivam das CRISTAS NEURAIS, que são justamente o principal derivado sensitivo periférico dessas células migratórias.",
    "tema": "bmf4_a2",
    "subfoco": "crista-neural-neuroblastoma",
    "dificuldade": 2,
    "modulo": 4
  },
  {
    "id": 176,
    "materia": "bmf4",
    "enunciado": "Na 5ª semana de desenvolvimento, o prosencéfalo subdivide-se em telencéfalo e diencéfalo. Qual estrutura adulta deriva do diencéfalo e tem papel central no controle neuroendócrino? (Ref.: Langman, Embriologia Médica, 14ª ed.)",
    "opcoes": [
      "A) Hemisférios cerebrais e núcleos da base, responsáveis por funções motoras voluntárias e cognitivas superiores",
      "B) Ponte e cerebelo, que coordenam movimentos automáticos e são derivados do metencéfalo",
      "C) Medula espinal, que origina-se diretamente da porção caudal do mielencéfalo embrionário",
      "D) Hipotálamo e tálamo, que derivam do diencéfalo — o hipotálamo coordena respostas neuroendócrinas via hipófise, regulando eixos hormonais essenciais"
    ],
    "correta": 3,
    "explicacao": "Resumo: Diencéfalo → tálamo + hipotálamo + epitálamo. O hipotálamo é o centro neuroendócrino por excelência, controlando a hipófise via hormônios liberadores e inibidores. A) INCORRETA. Hemisférios cerebrais e núcleos da base derivam do TELENCÉFALO, não do diencéfalo. B) INCORRETA. Ponte e cerebelo derivam do METENCÉFALO (rombencéfalo), não do diencéfalo. C) INCORRETA. Medula espinal deriva da porção mais caudal do tubo neural, não do mielencéfalo — que origina o bulbo. D) CORRETA. Diencéfalo → tálamo (retransmite informações sensoriais ao córtex), hipotálamo (coordena SNA e eixos neuroendócrinos: TRH→TSH→T3/T4; GHRH→GH; CRH→ACTH→cortisol) e epitálamo (glândula pineal). Langman detalha essa derivação no capítulo de neuroembriologia.",
    "tema": "bmf4_a2",
    "subfoco": "diencefalo-hipotalamo",
    "dificuldade": 3,
    "modulo": 4
  },
  {
    "id": 177,
    "materia": "bmf4",
    "enunciado": "Recém-nascido de 3 dias apresenta sinal de Babinski positivo (extensão plantar ao estímulo). A mãe pergunta se é doença neurológica. Qual é a explicação correta? (Ref.: Langman, 14ª ed.; Nelson, Textbook of Pediatrics, 21ª ed.)",
    "opcoes": [
      "A) Sinal de Babinski em RN indica lesão de neurônio motor superior e requer investigação imediata de encefalopatia hipóxico-isquêmica",
      "B) Babinski em RN sugere espasticidade por mielite transversa e requer punção lombar urgente para investigação de LCR",
      "C) É achado normal em RN e lactentes até 18–24 meses, pois o trato corticoespinal ainda não completou a mielinização — quando a mielinização termina, o Babinski desaparece e o reflexo plantar torna-se em flexão",
      "D) Indica hipertensão intracraniana por hemorragia intraventricular e requer neuroimagem imediata com USG transfontanela"
    ],
    "correta": 2,
    "explicacao": "Resumo: Babinski é normal até 18-24 meses porque o trato corticoespinal ainda não está totalmente mielinizado — sem inibição cortical completa, a extensão plantar persiste. A) INCORRETA. Babinski isolado em RN NÃO indica patologia — é esperado pela imaturidade mielinização do trato piramidal. Encefalopatia hipóxico-isquêmica tem outros sinais (hipotonia, convulsões, alteração de consciência). B) INCORRETA. Mielite transversa é rara em RN e apresenta nível sensitivo + paresia bilateral aguda, não apenas Babinski isolado. C) CORRETA. A mielinização do trato corticoespinal começa no 3.º trimestre e continua até ~2 anos. Sem controle inibitório corticoespinal maduro, o reflexo primitivo (extensão plantar) persiste — não é patológico. Após mielinização completa, o reflexo plantar torna-se em flexão. D) INCORRETA. Hipertensão intracraniana em RN manifesta-se com abaulamento da fontanela, choro agudo e vômitos — não Babinski isolado.",
    "tema": "bmf4_a2",
    "subfoco": "babinski-mielinizacao",
    "dificuldade": 2,
    "modulo": 4
  },

  // ── MAD2_A1 — Imunodeficiências Primárias (Abbas) ───────────────────────
  {
    "id": 178,
    "materia": "mad2",
    "enunciado": "Criança de 18 meses apresenta quarta internação por pneumonia. Três episódios foram por Streptococcus pneumoniae e um por Haemophilus influenzae, todos com resposta vacinal insuficiente confirmada. Peso no percentil 3. Qual braço da imunidade é provavelmente comprometido e qual exame inicial é mais informativo? (Ref.: Abbas, 10ª ed.)",
    "opcoes": [
      "A) Imunidade celular comprometida — fenotipagem de linfócitos T CD4+ e CD8+ é o exame inicial",
      "B) Função fagocitária comprometida — teste de burst oxidativo (DHR ou NBT) é o exame inicial",
      "C) Sistema complemento terminal comprometido — dosagem de C5-C9 e CH50 é o exame inicial",
      "D) Imunidade humoral comprometida — dosagem de IgG, IgA e IgM associada à avaliação de resposta vacinal é o exame inicial mais adequado"
    ],
    "correta": 3,
    "explicacao": "Resumo: Infecções sinopulmonares recorrentes por bactérias encapsuladas (pneumococo, Haemophilus) + resposta vacinal insuficiente + baixo ganho de peso = defeito de imunidade humoral (anticorpos). A) INCORRETA. Defeito celular (T) causa infecções por oportunistas — vírus (CMV, EBV grave), fungos (Candida persistente), protozoários — não sinopulmonares por bactérias encapsuladas. B) INCORRETA. Disfunção fagocitária (ex.: doença granulomatosa crônica) causa abscessos recorrentes por Staphylococcus e Aspergillus, não pneumonia por encapsulados com resposta vacinal ruim. C) INCORRETA. Deficiência de complemento terminal associa-se a meningococo recorrente, não a pneumococo e hemófilo repetidos. D) CORRETA. Defeito humoral (ex.: agamaglobulinemia de Bruton, imunodeficiência comum variável) → infecções por encapsulados recorrentes + resposta vacinal ausente. Dosagem de IgG/IgA/IgM é a triagem inicial padrão (Abbas, Robins).",
    "tema": "mad2_a1",
    "subfoco": "imunodeficiencia-humoral",
    "dificuldade": 3,
    "modulo": 3
  },
  {
    "id": 179,
    "materia": "mad2",
    "enunciado": "Criança de 6 anos apresenta terceiro abscesso subcutâneo profundo por Staphylococcus aureus em 8 meses, sem resposta completa ao antibiótico habitual e sem história de infecção respiratória de repetição. Qual defeito imunológico esse padrão sugere? (Ref.: Abbas, Imunologia Celular e Molecular, 10ª ed.)",
    "opcoes": [
      "A) Disfunção fagocitária — abscessos profundos recorrentes por Staphylococcus sem infecção das mucosas respiratórias apontam para defeito no burst oxidativo (ex.: doença granulomatosa crônica) ou na migração de neutrófilos",
      "B) Deficiência de anticorpos — o padrão humoral clássico causa infecção sinopulmonar por encapsulados, não abscessos cutâneos profundos isolados",
      "C) Deficiência de linfócito T — imunidade celular deficiente gera infecções virais e fúngicas oportunistas, não abscessos piogênicos recorrentes",
      "D) Deficiência de complemento terminal — associada especificamente a infecção meningocócica recorrente, não a abscessos por Staphylococcus"
    ],
    "correta": 0,
    "explicacao": "Resumo: Abscessos profundos recorrentes por bactérias piogênicas (Staphylococcus, Serratia, Aspergillus) sem infecção de mucosas = padrão clássico de disfunção fagocitária — principal suspeita é doença granulomatosa crônica (DGC) por defeito na NADPH oxidase. A) CORRETA. DGC: neutrófilos fagocitam mas não matam bactérias catalase-positivas (Staphylococcus, Klebsiella, Aspergillus) por defeito no burst oxidativo → abscessos profundos recorrentes com granulomas. Exame: teste NBT ou DHR. B) INCORRETA. Deficiência de anticorpos → sinusite, otite, pneumonia por pneumococo/Haemophilus, não abscessos cutâneos profundos. C) INCORRETA. Defeito de linfócito T → candidíase, pneumocistose, infecção por CMV — não abscessos por Staphylococcus. D) INCORRETA. Deficiência de complemento C5-C9 → meningococo recorrente especificamente.",
    "tema": "mad2_a1",
    "subfoco": "disfuncao-fagocitaria",
    "dificuldade": 3,
    "modulo": 3
  },
  {
    "id": 180,
    "materia": "mad2",
    "enunciado": "Qual padrão de infecção indica, de forma clássica, defeito de imunidade humoral (produção de anticorpos) em crianças? (Ref.: Abbas, 10ª ed.)",
    "opcoes": [
      "A) Infecções fúngicas recorrentes, candidíase mucocutânea persistente e pneumocistose precoce nos primeiros meses de vida",
      "B) Sinusites, otites médias e pneumonias de repetição por bactérias encapsuladas (pneumococo, hemófilo) com resposta vacinal insuficiente",
      "C) Abscessos cutâneos profundos e recorrentes por Staphylococcus e Candida com formação de granulomas",
      "D) Meningite meningocócica recorrente em mesmo paciente com evolução grave em cada episódio"
    ],
    "correta": 1,
    "explicacao": "Resumo: Bactérias encapsuladas (pneumococo, hemófilo, meningococo) dependem de anticorpos opsonizantes para serem fagocitadas eficientemente — sem IgG, o hospedeiro é suscetível a infecções sinopulmonares recorrentes. A) INCORRETA. Candidíase persistente + pneumocistose = padrão de defeito de IMUNIDADE CELULAR (linfócito T), não humoral. B) CORRETA. Defeito humoral (ex.: agamaglobulinemia de Bruton — ausência de linfócitos B maduros): otite, sinusite, pneumonia repetidas por pneumococo e Haemophilus + resposta vacinal ausente. Isso ocorre após os 6 meses, quando a IgG materna se esgota. C) INCORRETA. Abscessos profundos por Staphylococcus = disfunção fagocitária (DGC). D) INCORRETA. Meningococo recorrente = deficiência de complemento terminal (C5-C9).",
    "tema": "mad2_a1",
    "subfoco": "padrao-humoral-encapsulados",
    "dificuldade": 1,
    "modulo": 3
  },
  {
    "id": 181,
    "materia": "mad2",
    "enunciado": "Qual é a triagem laboratorial inicial mais adequada e racional para uma criança com suspeita de imunodeficiência primária antes de solicitar painéis diagnósticos complexos? (Ref.: Abbas, 10ª ed.)",
    "opcoes": [
      "A) Dosagem de complemento (CH50), função fagocitária (NBT) e fenotipagem linfocitária completa",
      "B) Biópsia de medula óssea, mielograma e sorologia para HIV",
      "C) Hemograma completo, dosagem de IgG, IgA e IgM, e avaliação da resposta vacinal (sorologias pós-vacinais para sarampo, tétano, pneumococo)",
      "D) PCR multiplex para patógenos respiratórios e cultura de lavado broncoalveolar como ponto de partida"
    ],
    "correta": 2,
    "explicacao": "Resumo: A triagem inicial deve ser simples, acessível e cobrir os principais compartimentos imunológicos — hemograma (conta células) + imunoglobulinas (avalia braço humoral) + resposta vacinal (função humoral real). A) INCORRETA. CH50, NBT e fenotipagem são exames de segunda linha, pedidos quando a triagem inicial sugere braço específico afetado — não é o primeiro passo. B) INCORRETA. Biópsia de medula óssea é exame invasivo de segunda linha para casos em que a triagem sugere hemopatia; HIV deve ser excluído, mas não é o ponto de partida de toda suspeita de imunodeficiência primária. C) CORRETA. Triagem inicial racional: hemograma (neutrófilo, linfócito, eosinófilo) + IgG/IgA/IgM (avalia humoral) + sorologias pós-vacinais (função de anticorpos in vivo). Se alterados, direcionam exames específicos. D) INCORRETA. PCR multiplex e BAL são exames para identificar agente etiológico da infecção atual, não para investigar o defeito imunológico subjacente.",
    "tema": "mad2_a1",
    "subfoco": "triagem-imunodeficiencia",
    "dificuldade": 2,
    "modulo": 3
  },

  // ── MAD2_A2 — Tolerância Imunológica (Abbas) ────────────────────────────
  {
    "id": 182,
    "materia": "mad2",
    "enunciado": "Qual é a diferença funcional essencial entre tolerância imunológica central e periférica? (Ref.: Abbas, Imunologia Celular e Molecular, 10ª ed.)",
    "opcoes": [
      "A) Tolerância central ocorre nos linfonodos periféricos e elimina linfócitos autorreativos após exposição antigênica; periférica ocorre no timo durante a maturação",
      "B) Tolerância central envolve apenas linfócitos B na medula óssea; periférica é exclusiva de linfócitos T na periferia",
      "C) Tolerância central elimina ou edita clones autorreativos durante maturação no timo (para T) e medula óssea (para B); periférica inativa, suprime ou deleta os clones autorreativos que escaparam para a circulação",
      "D) Tolerância central é mecanismo vestigial sem relevância clínica; a periférica é o único mecanismo ativo de prevenção da autoimunidade"
    ],
    "correta": 2,
    "explicacao": "Resumo: Central = filtra durante maturação (timo/medula); periférica = freio nos clones que escaparam e circulam nos tecidos. A) INCORRETA. Inverte a localização — tolerância central é no timo (T) e medula óssea (B), não nos linfonodos. B) INCORRETA. Tolerância central é tanto de linfócitos B (medula) quanto de T (timo); a periférica é de ambas as linhagens. C) CORRETA. Tolerância central (seleção tímica negativa para T; edição de receptor/deleção clonal para B) é o filtro inicial. Como nenhum filtro é perfeito, certos clones autorreativos escapam → a tolerância periférica os controla por anergia, supressão por T-reg e deleção por ativação induzida. D) INCORRETA. Tolerância central é essencial — sem ela (ex.: defeitos de AIRE no timo), ocorre autoimunidade multissistêmica grave (síndrome APECED).",
    "tema": "mad2_a2",
    "subfoco": "tolerancia-central-periferica",
    "dificuldade": 2,
    "modulo": 3
  },
  {
    "id": 183,
    "materia": "mad2",
    "enunciado": "Linfócito T encontra um antígeno próprio sem receber sinal de coestimulação (sinal 2 via CD28-B7). Qual é o resultado mais provável desse encontro imunológico? (Ref.: Abbas, 10ª ed., cap. Tolerância Periférica)",
    "opcoes": [
      "A) Ativação plena do linfócito e resposta autoimune imediata por reconhecimento do autoantígeno",
      "B) Apoptose imediata do linfócito por ativação do receptor Fas-FasL sem passagem pelo estado de anergia",
      "C) Proliferação clonal limitada que gera memória de curta duração sem inflamação tecidual clinicamente detectável",
      "D) Anergia — o linfócito fica funcionalmente inativo, incapaz de responder adequadamente a estímulos subsequentes mesmo que o antígeno seja apresentado novamente"
    ],
    "correta": 3,
    "explicacao": "Resumo: Antígeno sem coestímulo = anergia clonal — o linfócito reconhece (sinal 1) mas sem CD28-B7 (sinal 2) não prolifera nem exerce função efetora, ficando inativo. A) INCORRETA. Ativação plena exige sinal 1 (TCR-MHC) + sinal 2 (CD28-B7) + sinal 3 (citocinas). Sem sinal 2, não há ativação plena — é justamente a base da tolerância periférica. B) INCORRETA. Apoptose via Fas-FasL ocorre na deleção periférica por ativação repetida excessiva (AICD — apoptose induzida por ativação), não no primeiro contato sem coestímulo. C) INCORRETA. Sem coestimulação não há proliferação clonal nem geração de memória funcional — o resultado é paralisia funcional (anergia). D) CORRETA. Anergia clonal (descrita por Schwartz): TCR engajado + CD28 bloqueado → o linfócito entra em estado de paralisia funcional — não produz IL-2, não prolifera, não ataca o tecido próprio. Base de estratégias terapêuticas como CTLA4-Ig (abatacept).",
    "tema": "mad2_a2",
    "subfoco": "anergia-coestimulacao",
    "dificuldade": 2,
    "modulo": 3
  },
  {
    "id": 184,
    "materia": "mad2",
    "enunciado": "Paciente de 25 anos desenvolve febre reumática com cardite 3 semanas após faringoamigdalite por Streptococcus pyogenes não tratada. Qual mecanismo imunológico explica o dano valvar cardíaco? (Ref.: Abbas, 10ª ed.; Robbins, 10ª ed.)",
    "opcoes": [
      "A) Mimetismo molecular — anticorpos IgG produzidos contra a proteína M do estreptococo reconhecem cruzadamente antígenos do endocárdio (miosina cardíaca, laminina) por semelhança estrutural, causando lesão autoimune",
      "B) Hipersensibilidade tipo I por IgE anti-estreptococo ativando mastócitos no endocárdio com degranulação local e fibrose",
      "C) Infecção direta do endocárdio pelo S. pyogenes com formação de biofilme valvar e destruição mecânica",
      "D) Deficiência de tolerância central que permite ativação de linfócitos T autorreativos cardíacos independentemente do estreptococo"
    ],
    "correta": 0,
    "explicacao": "Resumo: Febre reumática = mimetismo molecular clássico — anticorpos contra proteína M de S. pyogenes reagem cruzadamente com proteínas cardíacas, gerando lesão autoimune nas valvas. A) CORRETA. A proteína M do S. pyogenes tem epítopos semelhantes à miosina cardíaca, laminina e outras proteínas do coração. Anticorpos IgG gerados contra o estreptococo atacam o endocárdio e miocárdio → febre reumática com cardite. Mecanismo de mimetismo molecular descrito em Abbas e Robbins. B) INCORRETA. Hipersensibilidade tipo I é mediada por IgE/mastócitos — não é o mecanismo da cardite reumática, que é imune-mediada por IgG. C) INCORRETA. S. pyogenes raramente infecta diretamente o endocárdio (causa mais comum de endocardite é S. aureus/viridans) — a febre reumática é uma reação pós-infecção por autoimunidade cruzada, sem bactérias no coração. D) INCORRETA. Defeito de tolerância central explicaria autoimunidade primária espontânea, não a associação temporal com infecção estreptocócica específica.",
    "tema": "mad2_a2",
    "subfoco": "mimetismo-molecular",
    "dificuldade": 3,
    "modulo": 3
  },
  {
    "id": 185,
    "materia": "mad2",
    "enunciado": "Qual é o papel das células T reguladoras (T reg / CD4+CD25+FoxP3+) na prevenção de autoimunidade e quais são suas principais citocinas efetoras? (Ref.: Abbas, 10ª ed.)",
    "opcoes": [
      "A) T reg amplificam a resposta imune efetora produzindo IL-12, ativando a diferenciação Th1 contra patógenos intracelulares",
      "B) T reg suprimem resposta imune excessiva produzindo IL-10 e TGF-β, limitando inflamação em tecidos próprios e prevenindo autoagressão",
      "C) T reg eliminam células dendríticas maduras por mecanismo citotóxico semelhante ao CD8+, evitando superativação de linfócitos T naive",
      "D) T reg produzem IFN-γ para bloquear a diferenciação de linfócitos B em plasmócitos autorreativos"
    ],
    "correta": 1,
    "explicacao": "Resumo: T reg = CD4+CD25+FoxP3+ — suprimem respostas imunes excessivas via IL-10 e TGF-β, prevenindo dano tecidual e autoimunidade. A) INCORRETA. IL-12 e ativação Th1 são funções de macrófagos e células dendríticas — T reg têm função oposta (supressora), não amplificadora. B) CORRETA. T reg expressam FoxP3 (fator de transcrição master), produzem IL-10 (anti-inflamatória, inibe APC e células T) e TGF-β (suprime proliferação de T efetores e induz tolerância). Deficiência de FoxP3 → síndrome IPEX (autoimunidade multissistêmica grave). C) INCORRETA. T reg não são citotóxicas — a supressão é por contato célula-célula e citocinas supressoras, não por mecanismo de citotoxicidade. D) INCORRETA. IFN-γ é produzido por Th1 e NK — tem função pró-inflamatória de ativação de macrófagos, não supressora de autoimunidade.",
    "tema": "mad2_a2",
    "subfoco": "t-reg-il10-tgfb",
    "dificuldade": 2,
    "modulo": 3
  },

  // ── BIOE_A4 — Amostragem e Normalidade (Hulley; Altman; Pagano & Gauvreau) ──
  {
    "id": 186,
    "materia": "bioestatistica",
    "enunciado": "A Pesquisa Nacional de Saúde (PNS) seleciona municípios, depois setores censitários e por último domicílios. Qual método de amostragem descreve corretamente esse processo? (Ref.: Hulley, Delineando a Pesquisa Clínica, 4ª ed.)",
    "opcoes": [
      "A) Amostragem por conglomerados em múltiplos estágios — seleciona unidades coletivas progressivamente menores até chegar ao indivíduo",
      "B) Amostragem estratificada proporcional — divide a população em estratos (região, sexo) e extrai amostra aleatória de cada estrato",
      "C) Amostragem aleatória simples — cada domicílio tem probabilidade igual de seleção direta desde o primeiro sorteio",
      "D) Amostragem sistemática — seleciona cada k-ésimo município de uma lista ordenada por tamanho populacional"
    ],
    "correta": 0,
    "explicacao": "Resumo: Conglomerados em múltiplos estágios = seleciona unidades maiores progressivamente menores (municípios → setores → domicílios) — método padrão de grandes inquéritos populacionais brasileiros (PNS, PNAD). A) CORRETA. Amostragem por conglomerados em múltiplos estágios: 1º estágio = municípios; 2º = setores censitários; 3º = domicílios. Vantagem: logisticamente viável sem lista completa de indivíduos. Desvantagem: menor precisão (indivíduos dentro do conglomerado são mais similares entre si). B) INCORRETA. Estratificada divide a população em subgrupos homogêneos e sorteia dentro de cada estrato — não usa unidades coletivas hierárquicas. C) INCORRETA. Aleatória simples requer lista completa de todos os indivíduos desde o início — inviável para todo o Brasil. D) INCORRETA. Sistemática seleciona cada k-ésimo elemento de uma lista, não usa estágios hierárquicos.",
    "tema": "bioe_a4",
    "subfoco": "amostragem-conglomerados",
    "dificuldade": 1,
    "modulo": 4
  },
  {
    "id": 187,
    "materia": "bioestatistica",
    "enunciado": "Estudo sobre prevalência de HAS recruta voluntários em academias de ginástica de uma cidade e encontra prevalência de 12%, muito menor que os 32% de estudos populacionais. Qual é a principal limitação metodológica? (Ref.: Hulley, Delineando a Pesquisa Clínica, 4ª ed.; Medronho, Epidemiologia)",
    "opcoes": [
      "A) Erro amostral aleatório — o tamanho da amostra foi insuficiente, gerando imprecisão expressa por IC amplo",
      "B) Erro tipo II (beta) — o estudo não tinha poder estatístico suficiente para detectar a verdadeira prevalência",
      "C) Viés de seleção (viés do trabalhador saudável) — a amostra de academia superrepresenta pessoas ativas e saudáveis, com menor prevalência de HAS, não sendo representativa da população geral",
      "D) Viés de informação — participantes subestimaram a pressão arterial ao autorrelatar, gerando classificação incorreta dos casos"
    ],
    "correta": 2,
    "explicacao": "Resumo: Recrutar em academia sistematicamente seleciona pessoas saudáveis → viés de seleção que subestima a prevalência de doenças crônicas como HAS — não é erro aleatório, é erro sistemático. A) INCORRETA. Erro amostral aleatório diminui com n maior e gera IC amplo — mas não explica sistematicamente uma direção (subestimação). B) INCORRETA. Erro tipo II é falso negativo em teste de hipótese (não detecta diferença existente) — não é a terminologia correta para viés de seleção em estudo de prevalência. C) CORRETA. Viés de seleção (especificamente 'viés do trabalhador saudável' ou 'healthy worker bias'): academias selecionam pessoas com maior atividade física e menor carga de doenças → subestima prevalência de HAS. Como Hulley afirma: 'viés não diminui com n maior — maior certeza sobre resultado errado'. D) INCORRETA. Viés de informação ocorre quando a mensuração da variável é diferente entre grupos — mas aqui o problema é a composição da amostra, não a forma de medição.",
    "tema": "bioe_a4",
    "subfoco": "vies-selecao",
    "dificuldade": 2,
    "modulo": 4
  },
  {
    "id": 188,
    "materia": "bioestatistica",
    "enunciado": "Pesquisador aplica o teste de Shapiro-Wilk (n=35) para verificar normalidade de uma variável contínua e obtém p=0,03. Qual é a interpretação correta e qual teste deve ser usado na comparação de dois grupos independentes? (Ref.: Altman, Practical Statistics for Medical Research; Pagano & Gauvreau)",
    "opcoes": [
      "A) p=0,03 é maior que 0,01 — confirma distribuição normal; usar teste t de Student bilateral",
      "B) p=0,03 confirma distribuição normal por não atingir alfa convencional de 0,01; usar ANOVA",
      "C) p=0,03 indica normalidade relativa aceitável em amostras pequenas; usar Kruskal-Wallis para dois grupos",
      "D) p=0,03 é menor que 0,05 — rejeita H0 (H0: dados seguem distribuição normal); distribuição é não normal; usar Mann-Whitney U como alternativa não-paramétrica para dois grupos independentes"
    ],
    "correta": 3,
    "explicacao": "Resumo: No Shapiro-Wilk, H0 = 'dados têm distribuição normal'. p=0,03 < 0,05 → rejeita H0 → dados NÃO são normais → usar teste não-paramétrico (Mann-Whitney para 2 grupos independentes). A) INCORRETA. p=0,03 é MENOR que 0,05 — rejeita normalidade. Comparar com 0,01 é erro de critério; o alfa convencional adotado é 0,05. B) INCORRETA. ANOVA é para 3 ou mais grupos, não para dois. Além disso, p=0,03 rejeita normalidade — ANOVA não seria adequada sem dados normais. C) INCORRETA. Kruskal-Wallis é alternativa à ANOVA (3 ou mais grupos) — para dois grupos independentes usa-se Mann-Whitney. D) CORRETA. Shapiro-Wilk: H0 = normalidade. p=0,03 < alfa (0,05) → rejeita H0 → distribuição não normal → para comparar dois grupos independentes sem normalidade = Mann-Whitney U (equivalente não-paramétrico ao teste t).",
    "tema": "bioe_a4",
    "subfoco": "shapiro-wilk-mann-whitney",
    "dificuldade": 2,
    "modulo": 4
  },

  // ── BCM1_A5 — Replicação DNA e PCR (Alberts; Lehninger) ─────────────────
  {
    "id": 189,
    "materia": "bcm1",
    "enunciado": "Laboratório recebe amostra de paciente suspeito de COVID-19. O médico requisita exame para confirmar infecção ativa pelo SARS-CoV-2 (vírus de genoma RNA). Qual técnica molecular é adequada e por quê? (Ref.: Alberts, Biologia Molecular da Célula, 6ª ed.)",
    "opcoes": [
      "A) PCR convencional com DNA polimerase termoestável — amplifica diretamente o RNA viral da amostra nasofaríngea",
      "B) RT-PCR (PCR precedido de transcrição reversa) — a transcriptase reversa converte RNA viral em cDNA; o cDNA é então amplificado pela PCR, sendo o único método que detecta genoma de vírus RNA",
      "C) PCR quantitativo (qPCR) sem etapa de transcrição reversa — quantifica partículas virais diretamente pela fluorescência do RNA",
      "D) Southern blot — detecta o genoma RNA viral por hibridização com sonda específica sem necessidade de amplificação prévia"
    ],
    "correta": 1,
    "explicacao": "Resumo: Vírus RNA (SARS-CoV-2, HIV, HCV, influenza) exige primeiro a conversão do RNA em cDNA pela transcriptase reversa → então PCR amplifica o cDNA. O ensaio completo é RT-qPCR para COVID-19. A) INCORRETA. PCR convencional trabalha com DNA molde — DNA Pol termoestável (Taq) não consegue ler diretamente RNA como molde; sem a etapa de transcrição reversa, o RNA viral não é amplificado. B) CORRETA. RT-PCR: transcriptase reversa (uma DNA polimerase RNA-dependente, como nos retrovírus) cria cDNA a partir do RNA viral → PCR amplifica o cDNA. O teste de COVID-19 era uma RT-qPCR (real-time). C) INCORRETA. qPCR detecta amplificação de DNA por fluorescência (SYBR Green ou TaqMan) — ainda precisa do cDNA como molde; não consegue quantificar RNA diretamente. D) INCORRETA. Southern blot detecta DNA, não RNA (Northern blot detecta RNA); além disso, não é ensaio diagnóstico de rotina para infecção viral ativa — sem amplificação, a sensibilidade seria baixíssima.",
    "tema": "bcm1_a5",
    "subfoco": "rt-pcr-virus-rna",
    "dificuldade": 2,
    "modulo": 1
  },
  {
    "id": 190,
    "materia": "bcm1",
    "enunciado": "Durante a replicação do DNA, a fita retardada (lagging strand) é sintetizada de forma descontínua em fragmentos de Okazaki. Qual sequência correta de eventos resolve essa descontinuidade? (Ref.: Alberts, Biologia Molecular da Célula, 6ª ed.; Lehninger, Princípios de Bioquímica, 7ª ed.)",
    "opcoes": [
      "A) Primase sintetiza RNA primer em cada fragmento → DNA Pol sintetiza fragmento de Okazaki 5'→3' → RNase/DNA Pol I remove primer e preenche o gap → DNA ligase une os fragmentos",
      "B) DNA Pol sintetiza continuamente na direção 3'→5' sem necessidade de primer → fragmentos se unem espontaneamente por termodinâmica",
      "C) Helicase sintetiza primers de DNA diretamente → DNA Pol estende cada primer → topoisomerase une os fragmentos de Okazaki completados",
      "D) Fragmentos de Okazaki são sintetizados por DNA Pol I sem primer, depois ligados pela DNA ligase na presença de ATP"
    ],
    "correta": 0,
    "explicacao": "Resumo: Fita retardada: primase sintetiza RNA primer → DNA Pol III copia o fragmento de Okazaki → DNA Pol I remove primer e preenche → DNA ligase fecha os gaps. A) CORRETA. A sequência precisa: (1) Primase = sintetiza RNA primer curto (8-12 nt) para cada fragmento; (2) DNA Pol III/delta sintetiza fragmento de Okazaki 5'→3'; (3) RNase H e DNA Pol I removem o primer de RNA e preenchem o gap com DNA; (4) DNA Ligase (usa NAD+ em procariotos, ATP em eucariotos) sela a nick entre fragmentos. B) INCORRETA. DNA Pol NÃO sintetiza 3'→5' — lê o molde 3'→5' mas sintetiza sempre 5'→3'. Não existe síntese espontânea de fragmentos. C) INCORRETA. Helicase não sintetiza primers — sua função é desfazer a dupla fita (desenovilhamento). Topoisomerase remove superenrolamento, não une fragmentos. D) INCORRETA. DNA Pol I remove primers e preenche o gap, mas também precisa de primer para iniciar (usa a extremidade 3'-OH deixada pelo fragmento anterior). DNA Pol I é diferente de DNA ligase.",
    "tema": "bcm1_a5",
    "subfoco": "fragmentos-okazaki-fita-retardada",
    "dificuldade": 2,
    "modulo": 1
  },
  {
    "id": 191,
    "materia": "bcm1",
    "enunciado": "As fluoroquinolonas (ciprofloxacino, levofloxacino) são antibióticos de amplo espectro. Qual é o mecanismo de ação correto dessas drogas a nível molecular? (Ref.: Katzung, Farmacologia Básica e Clínica, 15ª ed.; Alberts, Biologia Molecular da Célula, 6ª ed.)",
    "opcoes": [
      "A) Inibem a RNA polimerase beta bacteriana, impedindo a síntese do RNA mensageiro e a transcrição de genes essenciais",
      "B) Inibem a síntese de peptidoglicana ao bloquear a transpeptidase (proteína ligadora de penicilina — PBP), causando lise osmótica",
      "C) Inibem a DNA girase (topoisomerase II bacteriana) e a topoisomerase IV, impedindo o alívio do superenrolamento positivo durante a replicação e transcrição do DNA bacteriano → parada replicativa → morte bacteriana",
      "D) Bloqueiam a subunidade 30S do ribossomo bacteriano, impedindo a ligação do tRNA aminoacil ao sítio A durante a tradução"
    ],
    "correta": 2,
    "explicacao": "Resumo: Fluoroquinolonas = inibidores de topoisomerases II (DNA girase) e IV bacterianas → o DNA bacteriano não consegue relaxar o superenrolamento durante replicação e transcrição → morte celular. A) INCORRETA. Inibição de RNA polimerase beta bacteriana = mecanismo da rifampicina, não das fluoroquinolonas. B) INCORRETA. Bloqueio de transpeptidase (PBP) = mecanismo dos beta-lactâmicos (penicilinas, cefalosporinas, carbapenéns). C) CORRETA. Fluoroquinolonas: (1) DNA girase (topoisomerase II) = alvo principal em Gram-negativas; (2) Topoisomerase IV = alvo principal em Gram-positivas. Ambas são necessárias para remover o superenrolamento positivo gerado pela progressão da DNA Pol → sem alívio = replicação para → morte bacteriana. Seletividade: topoisomerases humanas têm estrutura diferente (menor afinidade pelas quinolonas). D) INCORRETA. Bloqueio do 30S = mecanismo de aminoglicosídeos (gentamicina) e tetraciclinas. Fluoroquinolonas não atuam em ribossomos.",
    "tema": "bcm1_a5",
    "subfoco": "fluoroquinolonas-topoisomerase",
    "dificuldade": 1,
    "modulo": 1
  }
];

novas.forEach(q => questoes.push(q));

const result = { ...data, questoes };
fs.writeFileSync(filePath, JSON.stringify(result, null, 2), 'utf8');
console.log(`Lote 3 salvo! Total: ${questoes.length}, Max ID: ${Math.max(...questoes.map(q => q.id))}`);
