const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'data', 'questoes.json');
const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
const questoes = data.questoes || data;

const novas = [
  // ── MAD2_A9 — HIV/AIDS ──────────────────────────────────────────────────
  {
    "id": 132,
    "materia": "mad2",
    "enunciado": "Qual marcador laboratorial avalia o grau de imunossupressão do paciente com HIV e estima o risco de infecções oportunistas?",
    "opcoes": [
      "A) Contagem de linfócitos T CD4+",
      "B) Carga viral do HIV",
      "C) Anticorpos anti-HIV (ELISA)",
      "D) PCR qualitativo para detecção do HIV"
    ],
    "correta": 0,
    "explicacao": "Resumo: CD4 mede o estado imunológico; carga viral mede replicação viral — são perguntas distintas. A) CORRETA. A contagem de CD4 reflete a competência do sistema imune e o risco de oportunistas — abaixo de 200 cel/mm³ há alto risco. B) INCORRETA. Carga viral mede a quantidade de vírus circulante e serve para monitorar resposta ao tratamento, não imunossupressão. C) INCORRETA. O ELISA detecta anticorpos, sendo útil para diagnóstico, não para monitoramento imunológico. D) INCORRETA. PCR qualitativo confirma presença do vírus (útil na janela diagnóstica), mas não avalia estado imunológico.",
    "tema": "mad2_a9",
    "subfoco": "cd4-carga-viral",
    "dificuldade": 1,
    "modulo": 3
  },
  {
    "id": 133,
    "materia": "mad2",
    "enunciado": "Paciente de 28 anos relata relação sexual desprotegida há 3 semanas. Apresenta febre, faringite, adenomegalia cervical e mal-estar. Teste rápido para HIV: negativo. Qual é a conduta mais adequada?",
    "opcoes": [
      "A) Encerrar a investigação, pois teste negativo descarta HIV definitivamente",
      "B) Repetir a testagem após completar a janela diagnóstica, pois o quadro é compatível com síndrome retroviral aguda",
      "C) Solicitar hemocultura para afastar sepse bacteriana e dispensar o paciente",
      "D) Iniciar antibioticoterapia empírica para faringite estreptocócica"
    ],
    "correta": 1,
    "explicacao": "Resumo: A síndrome retroviral aguda ocorre nas primeiras semanas após infecção e pode coincidir com a janela diagnóstica, gerando falso negativo no teste rápido. A) INCORRETA. Teste negativo precoce não descarta HIV — na janela diagnóstica, os anticorpos ainda não foram produzidos em quantidade suficiente. B) CORRETA. O quadro é compatível com síndrome retroviral aguda (febre, faringite, adenomegalia após exposição recente) e o teste pode estar na janela. Deve-se repetir após o período adequado. C) INCORRETA. Descartar contexto da exposição e não investigar HIV é conduta inadequada. D) INCORRETA. Tratar empiricamente sem considerar a exposição ao HIV é insuficiente e pode atrasar diagnóstico.",
    "tema": "mad2_a9",
    "subfoco": "janela-diagnostica",
    "dificuldade": 2,
    "modulo": 3
  },
  {
    "id": 134,
    "materia": "mad2",
    "enunciado": "Paciente de 35 anos, HIV positivo sem acompanhamento há 2 anos, apresenta tosse seca progressiva, febre e dispneia. CD4: 80 células/mm³. RX tórax: infiltrado intersticial bilateral. Qual é o diagnóstico mais provável?",
    "opcoes": [
      "A) Faringite viral autolimitada com comprometimento pulmonar por disseminação hematogênica",
      "B) Tuberculose miliar por reativação endógena em imunocompetente",
      "C) Pneumocistose (pneumonia por Pneumocystis jirovecii — PPC)",
      "D) Pneumonia bacteriana típica por Streptococcus pneumoniae com boa resposta esperada"
    ],
    "correta": 2,
    "explicacao": "Resumo: CD4 abaixo de 200 cel/mm³ é o limiar clássico para pneumocistose, principal infecção oportunista pulmonar em HIV avançado. A) INCORRETA. Faringite autolimitada não causa quadro pulmonar grave com esse padrão. B) INCORRETA. Tuberculose pode ocorrer com CD4 mais alto (até 350); miliar é grave mas o infiltrado intersticial bilateral difuso com CD4 < 200 aponta mais para PPC. C) CORRETA. Pneumocistose é a infecção oportunista pulmonar mais clássica em HIV com CD4 < 200 cel/mm³ — infiltrado intersticial bilateral é o padrão radiológico típico. D) INCORRETA. Pneumonia bacteriana pode ocorrer em qualquer CD4, mas não explica esse padrão intersticial bilateral em paciente com imunossupressão grave sem tratamento.",
    "tema": "mad2_a9",
    "subfoco": "oportunistas",
    "dificuldade": 3,
    "modulo": 3
  },
  {
    "id": 135,
    "materia": "mad2",
    "enunciado": "Paciente em uso regular de TARV há 18 meses apresenta carga viral indetectável (< 50 cópias/mL) em todos os controles. O que esse resultado indica corretamente?",
    "opcoes": [
      "A) Erradicação completa do HIV do organismo, podendo suspender o tratamento",
      "B) Ausência de necessidade de continuar monitoramento laboratorial",
      "C) Desenvolvimento de resistência aos antirretrovirais com replicação silenciosa",
      "D) Supressão virológica sustentada com manutenção da adesão ao tratamento"
    ],
    "correta": 3,
    "explicacao": "Resumo: Carga viral indetectável significa supressão da replicação viral, não erradicação — o reservatório latente persiste. A) INCORRETA. Indetectável não é cura. O reservatório viral em células de longa duração persiste mesmo com TARV eficaz. B) INCORRETA. O monitoramento de CD4 e carga viral deve continuar mesmo com supressão mantida para detectar falha virológica. C) INCORRETA. Resistência geraria carga viral detectável e crescente, não indetectável. D) CORRETA. Indetectável = controle eficaz da replicação viral, associado à adesão regular — melhora prognóstico e reduz transmissão, mas não elimina o vírus.",
    "tema": "mad2_a9",
    "subfoco": "tarv-indetectavel",
    "dificuldade": 2,
    "modulo": 3
  },

  // ── MAD2_A10 — Herpesvírus ──────────────────────────────────────────────
  {
    "id": 136,
    "materia": "mad2",
    "enunciado": "Qual é a principal característica biológica que distingue os herpesvírus de outros vírus e justifica a ocorrência de episódios clínicos recorrentes ao longo da vida?",
    "opcoes": [
      "A) Capacidade de estabelecer latência em células do hospedeiro e se reativar em situações de imunossupressão, estresse ou trauma",
      "B) Alta taxa de mutação antigênica que gera novas variantes a cada ciclo replicativo",
      "C) Transmissão exclusiva por contato sexual, sem possibilidade de disseminação sistêmica",
      "D) Eliminação espontânea e completa após a fase aguda, sem persistência no organismo"
    ],
    "correta": 0,
    "explicacao": "Resumo: Latência é a assinatura biológica dos herpesvírus — o vírus permanece no hospedeiro de forma silenciosa e pode ser reativado. A) CORRETA. Herpesvírus estabelecem latência em células nervosas (HSV, VZV) ou linfócitos (EBV, CMV) e se reativam quando a imunidade do hospedeiro cai ou há gatilho local. B) INCORRETA. Alta taxa de mutação é característica de vírus RNA como influenza e HIV; herpesvírus são DNA com menor taxa de mutação. C) INCORRETA. Herpesvírus se transmitem por múltiplas vias e podem ter disseminação sistêmica. D) INCORRETA. A eliminação completa não ocorre — a latência é justamente a persistência silenciosa que causa recorrências.",
    "tema": "mad2_a10",
    "subfoco": "latencia-reativacao",
    "dificuldade": 1,
    "modulo": 3
  },
  {
    "id": 137,
    "materia": "mad2",
    "enunciado": "Paciente de 72 anos, diabético, procura a UPA com dor em queimação no hemitórax direito há 4 dias, seguida do aparecimento de lesões vesiculares agrupadas em faixa unilateral, respeitando dermátomo. Qual é o diagnóstico e o agente causal?",
    "opcoes": [
      "A) Dermatite de contato alérgica com sobreinfecção por Staphylococcus aureus",
      "B) Herpes-zóster causado pela reativação do vírus varicela-zóster (VZV)",
      "C) Impetigo bolhoso por Staphylococcus aureus produtor de toxina esfoliativa",
      "D) Varicela em adulto imunocompetente com manifestação atípica unilateral"
    ],
    "correta": 1,
    "explicacao": "Resumo: Dor neuropática precedendo lesões vesiculares em dermátomo unilateral em adulto mais velho = herpes-zóster por reativação de VZV latente no gânglio sensitivo. A) INCORRETA. Dermatite de contato não respeita dermátomo, não tem padrão neuropático e não apresenta vesículas agrupadas em faixa. B) CORRETA. Herpes-zóster: dor neuropática + vesículas em faixa unilateral por dermátomo + adulto idoso com reativação de VZV. A diabetes reforça contexto de imunossupressão relativa. C) INCORRETA. Impetigo bolhoso não respeita dermátomo e não é precedido por dor neuropática intensa. D) INCORRETA. Varicela é a primoinfecção por VZV — disseminada, bilateral, em diferentes estágios. Zóster é a reativação.",
    "tema": "mad2_a10",
    "subfoco": "vzv-varicela-zoster",
    "dificuldade": 2,
    "modulo": 3
  },
  {
    "id": 138,
    "materia": "mad2",
    "enunciado": "Adolescente de 17 anos apresenta febre há 10 dias, odinofagia intensa, linfadenopatia cervical bilateral volumosa e fadiga marcante. Hemograma: linfocitose com linfócitos atípicos. Qual é o agente etiológico mais compatível?",
    "opcoes": [
      "A) Streptococcus pyogenes (SBHA) com faringite bacteriana típica",
      "B) Citomegalovírus (CMV) em paciente imunocompetente jovem",
      "C) Vírus Epstein-Barr (EBV) — mononucleose infecciosa",
      "D) Herpes simplex vírus tipo 1 (HSV-1) com faringoamigdalite herpética"
    ],
    "correta": 2,
    "explicacao": "Resumo: A tríade mononucleose-like (febre prolongada + adenomegalia + fadiga) com linfócitos atípicos é a assinatura do EBV em jovens. A) INCORRETA. SBHA causa faringite aguda sem linfocitose atípica; não provoca fadiga prolongada marcante nem adenomegalia volumosa bilateral. B) INCORRETA. CMV pode causar síndrome mononucleose-like, mas é menos provável em jovem imunocompetente sem histórico de imunossupressão — EBV é muito mais frequente nesse perfil. C) CORRETA. EBV é o agente clássico da mononucleose infecciosa: febre, odinofagia, adenomegalia, fadiga e linfocitose com linfócitos atípicos (linfócitos T ativados contra EBV). D) INCORRETA. HSV-1 causa faringoamigdalite com vesículas dolorosas, mas não provoca o padrão sistêmico com linfocitose atípica típico da mononucleose.",
    "tema": "mad2_a10",
    "subfoco": "ebv-mononucleose",
    "dificuldade": 2,
    "modulo": 3
  },
  {
    "id": 139,
    "materia": "mad2",
    "enunciado": "Paciente transplantado renal em uso de tacrolimus e micofenolato há 6 meses apresenta febre prolongada, leucopenia e antigenemia positiva ao monitoramento mensal. Qual herpesvírus deve ser prioritariamente investigado nesse contexto?",
    "opcoes": [
      "A) Herpes simplex vírus tipo 2 (HSV-2) — agente de lesões genitais recorrentes",
      "B) Vírus varicela-zóster (VZV) — causador de zóster dermatomérico",
      "C) Vírus Epstein-Barr (EBV) — associado à síndrome mononucleose-like em jovens",
      "D) Citomegalovírus (CMV) — principal oportunista herpético em transplantados"
    ],
    "correta": 3,
    "explicacao": "Resumo: CMV é o principal herpesvírus a investigar em pacientes imunossuprimidos, especialmente transplantados — a antigenemia positiva é justamente o método de monitoramento padrão. A) INCORRETA. HSV-2 causa lesões genitais recorrentes; não é monitorado por antigenemia e não é a principal preocupação em transplantado sem lesões mucocutâneas. B) INCORRETA. VZV pode reativar como zóster em imunossuprimidos, mas não é o mais prevalente e não é rastreado por antigenemia. C) INCORRETA. EBV é relevante em transplantados para investigação de PTLD (doença linfoproliferativa), mas não é o contexto primário de antigenemia mensal. D) CORRETA. CMV é o oportunista herpético mais importante em transplantados — a antigenemia para CMV é o exame de monitoramento padrão nesse cenário imunossupressor.",
    "tema": "mad2_a10",
    "subfoco": "cmv-imunossuprimido",
    "dificuldade": 3,
    "modulo": 3
  },

  // ── MAD2_A11 — Poliovírus ───────────────────────────────────────────────
  {
    "id": 140,
    "materia": "mad2",
    "enunciado": "Qual é a principal via de transmissão do poliovírus e qual estrutura representa o principal portal de entrada no organismo?",
    "opcoes": [
      "A) Via fecal-oral, com porta de entrada pelo trato gastrointestinal e mucosa orofaríngea",
      "B) Via respiratória, com porta de entrada pelas vias aéreas superiores e pulmão",
      "C) Via parenteral, por contato com sangue ou secreções contaminadas",
      "D) Via vetorial, por picada de artrópodes hematófagos em regiões endêmicas"
    ],
    "correta": 0,
    "explicacao": "Resumo: Poliovírus é um enterovírus — sua transmissão é fecal-oral e a infecção começa no trato gastrointestinal, não no sistema nervoso. A) CORRETA. A transmissão fecal-oral explica por que a doença está diretamente associada a condições sanitárias precárias e baixa cobertura vacinal; o vírus coloniza o intestino antes de qualquer comprometimento neurológico. B) INCORRETA. A via respiratória não é a principal; o poliovírus é classicamente lembrado como enterovírus de transmissão entérica. C) INCORRETA. Transmissão parenteral não é descrita para poliovírus. D) INCORRETA. Transmissão vetorial é de outros vírus (dengue, febre amarela); poliovírus não tem artrópode como vetor.",
    "tema": "mad2_a11",
    "subfoco": "transmissao-fecal-oral",
    "dificuldade": 1,
    "modulo": 3
  },
  {
    "id": 141,
    "materia": "mad2",
    "enunciado": "Criança de 4 anos, não vacinada para poliomielite, apresenta fraqueza aguda assimétrica de membros inferiores após doença febril 2 semanas antes. Exame: hipotonia, hiporreflexia e ausência de alterações sensitivas. Qual é o diagnóstico mais compatível?",
    "opcoes": [
      "A) Síndrome de Guillain-Barré, caracterizada por fraqueza simétrica ascendente com componente sensitivo",
      "B) Poliomielite paralítica por poliovírus, com comprometimento de neurônio motor inferior",
      "C) Mielite transversa por herpesvírus, com nível sensitivo definido",
      "D) Distrofia muscular de Duchenne com progressão aguda desencadeada por infecção"
    ],
    "correta": 1,
    "explicacao": "Resumo: Paralisia flácida aguda assimétrica sem sensitivo comprometido + criança não vacinada = poliomielite paralítica. A) INCORRETA. Guillain-Barré é simétrico, ascendente, com parestesias sensitivas e pode ter paralisia facial — difere pelo padrão simétrico e pelo componente sensitivo. B) CORRETA. Poliomielite paralítica: déficit motor flácido agudo (hipotonia + hiporreflexia), assimétrico, sem sensitivo, em criança não vacinada após prodromo febril — padrão clássico de acometimento de neurônio motor inferior. C) INCORRETA. Mielite transversa tem nível sensitivo definido e geralmente é simétrica — ausente aqui. D) INCORRETA. Distrofia de Duchenne tem progressão lenta, não aguda, e é bilateral simétrica.",
    "tema": "mad2_a11",
    "subfoco": "paralisia-flacida-aguda",
    "dificuldade": 2,
    "modulo": 3
  },
  {
    "id": 142,
    "materia": "mad2",
    "enunciado": "A poliomielite paralítica acomete o neurônio motor inferior. Qual combinação de achados clínicos é compatível com essa lesão?",
    "opcoes": [
      "A) Hiperreflexia, espasticidade e sinal de Babinski positivo",
      "B) Rigidez muscular, bradicinesia e tremor de repouso",
      "C) Hipotonia, hiporreflexia e ausência de sinal de Babinski",
      "D) Perda sensitiva em bota e luva com arreflexia progressiva simétrica"
    ],
    "correta": 2,
    "explicacao": "Resumo: Neurônio motor inferior (NMI) = fraqueza flácida com redução de reflexos, sem sinais piramidais — oposto da lesão de neurônio motor superior (NMS). A) INCORRETA. Hiperreflexia + espasticidade + Babinski = síndrome do NMS (trato corticoespinal), como no AVC ou esclerose múltipla. B) INCORRETA. Rigidez + bradicinesia + tremor de repouso = síndrome parkinsoniana (sistema extrapiramidal), não NMI. C) CORRETA. Hipotonia + hiporreflexia + Babinski ausente = síndrome do NMI clássica, como na poliomielite paralítica ou síndrome de Guillain-Barré. D) INCORRETA. Perda sensitiva em bota e luva com arreflexia simétrica = polineuropatia periférica (ex.: diabética), não padrão puro de poliomielite.",
    "tema": "mad2_a11",
    "subfoco": "neuronio-motor-inferior",
    "dificuldade": 2,
    "modulo": 3
  },
  {
    "id": 143,
    "materia": "mad2",
    "enunciado": "Em um município com cobertura vacinal para poliomielite abaixo de 70%, qual é a principal consequência epidemiológica esperada e a medida de maior impacto para reverter esse cenário?",
    "opcoes": [
      "A) Aumento de síndrome mononucleose-like; antibióticos profiláticos nas escolas",
      "B) Maior risco de meningite bacteriana; vacinação antimeningocócica urgente",
      "C) Disseminação de encefalite herpética; aciclovir em dose supressora para crianças",
      "D) Risco de reintrodução e circulação viral com casos paralíticos; vacinação em massa com cobertura ≥ 95%"
    ],
    "correta": 3,
    "explicacao": "Resumo: Poliovírus é extremamente sensível à cobertura vacinal — queda abaixo do limiar de imunidade coletiva abre espaço para reemergência de casos paralíticos. A) INCORRETA. Mononucleose-like é causada por EBV/CMV, não relacionada à cobertura vacinal para pólio. B) INCORRETA. Meningite bacteriana tem outra etiologia e outra vacina; não é consequência da queda de cobertura antipoliomielítica. C) INCORRETA. Encefalite herpética não tem relação com vacinação contra poliovírus. D) CORRETA. Queda de cobertura abaixo do limiar de imunidade coletiva (~95%) permite circulação viral mesmo em área antes considerada livre de pólio — a única medida eficaz é vacinação em massa.",
    "tema": "mad2_a11",
    "subfoco": "vacinacao-saude-publica",
    "dificuldade": 3,
    "modulo": 3
  },

  // ── FP3_A1 — Lesão Celular e Morte Celular ─────────────────────────────
  {
    "id": 144,
    "materia": "fisiopato3",
    "enunciado": "Paciente com infarto renal confirmado por tomografia apresenta tecido em análise histopatológica. Qual tipo de necrose é esperado e qual é sua principal característica morfológica?",
    "opcoes": [
      "A) Necrose coagulativa, com preservação do contorno celular em 'fantasma' por desnaturação proteica",
      "B) Necrose liquefativa, com dissolução e formação de cavidade cística no tecido renal",
      "C) Necrose caseosa, com material granular amarelado e aspecto de queijo branco",
      "D) Necrose gordurosa, com saponificação e manchas calcárias por ação de lipases"
    ],
    "correta": 0,
    "explicacao": "Resumo: Órgãos sólidos ricos em proteínas estruturais (rim, coração, baço) sofrem necrose coagulativa — o arcabouço proteico é desnaturado mas preserva o contorno celular. A) CORRETA. Necrose coagulativa: isquemia desnatura proteínas enzimáticas e estruturais → célula mantém o 'fantasma' do contorno sem detalhes internos — é o padrão dos infartos de órgãos sólidos. B) INCORRETA. Liquefativa ocorre no cérebro (pobre em proteínas, rico em lipídios) e em abscessos bacterianos, não no rim. C) INCORRETA. Necrose caseosa é característica da tuberculose e histoplasmose — aspecto de queijo branco no centro do granuloma. D) INCORRETA. Necrose gordurosa ocorre na pancreatite aguda e no trauma mamário, não no infarto renal.",
    "tema": "fp3_a1",
    "subfoco": "necrose-coagulativa",
    "dificuldade": 1,
    "modulo": 3
  },
  {
    "id": 145,
    "materia": "fisiopato3",
    "enunciado": "No exame histológico de um tecido, observam-se células com fragmentação nuclear em pequenos corpos envoltos por membrana, sem infiltrado inflamatório adjacente. Esse padrão corresponde a qual processo?",
    "opcoes": [
      "A) Necrose coagulativa por isquemia aguda com extravasamento de conteúdo intracelular",
      "B) Apoptose, com formação de corpos apoptóticos e ausência de reação inflamatória",
      "C) Necrose liquefativa com digestão enzimática do citoplasma e formação de pus",
      "D) Cariólise como estágio terminal da necrose com dissolução completa do núcleo"
    ],
    "correta": 1,
    "explicacao": "Resumo: Apoptose é a morte celular programada — a célula fragmenta seu DNA, embala os fragmentos em corpos apoptóticos e é fagocitada sem inflamação. A) INCORRETA. Necrose coagulativa causa extravasamento de conteúdo, inflamação adjacente e não forma corpos apoptóticos — é o oposto do padrão descrito. B) CORRETA. Apoptose: fragmentação nuclear em corpos apoptóticos envoltos por membrana intacta + sem inflamação = morte celular programada. Na histologia, aparecem como 'pontinhos' escuros. C) INCORRETA. Necrose liquefativa causa inflamação marcante, digestão celular extensa e formação de cavidade — incompatível com ausência de inflamação. D) INCORRETA. Cariólise é dissolução do núcleo na necrose, não fragmentação em corpos envoltos por membrana.",
    "tema": "fp3_a1",
    "subfoco": "apoptose-vs-necrose",
    "dificuldade": 2,
    "modulo": 3
  },
  {
    "id": 146,
    "materia": "fisiopato3",
    "enunciado": "Paciente com AVC isquêmico extenso de artéria cerebral média apresenta, após 2 semanas, área cavitária na RM. Por que o cérebro sofre necrose liquefativa em vez de coagulativa, como ocorre no rim?",
    "opcoes": [
      "A) Porque o cérebro tem alto teor de proteínas estruturais que, ao coagular, formam cavidade",
      "B) Porque o cérebro possui imunidade privilegiada que impede reação coagulativa normal",
      "C) Porque o cérebro é rico em lipídios e tem pouco arcabouço proteico, facilitando a digestão e formação de cavidade",
      "D) Porque as bainhas de mielina contêm ácidos graxos que reagem com lipases liberadas na isquemia"
    ],
    "correta": 2,
    "explicacao": "Resumo: A composição tecidual determina o tipo de necrose — cérebro pobre em proteínas e rico em lipídios é facilmente digerido pelas enzimas liberadas, formando cavidade (liquefativa). A) INCORRETA. É o oposto — o cérebro tem pouco arcabouço proteico, não alto teor; são os órgãos sólidos como rim e coração que têm proteínas estruturais que coagulam. B) INCORRETA. Imunidade privilegiada do SNC é conceito relacionado à resposta inflamatória, não ao tipo morfológico de necrose. C) CORRETA. Cérebro = rico em lipídios (mielina) e pobre em proteínas estruturais → enzimas digerem facilmente o tecido → necrose liquefativa com formação de cavidade cística. D) INCORRETA. Necrose gordurosa ocorre no pâncreas e mama por ação de lipases pancreáticas, não é o mecanismo do infarto cerebral.",
    "tema": "fp3_a1",
    "subfoco": "necrose-liquefativa-cerebro",
    "dificuldade": 3,
    "modulo": 3
  },
  {
    "id": 147,
    "materia": "fisiopato3",
    "enunciado": "Qual tipo de necrose é encontrado no centro do granuloma tuberculoso e qual é sua aparência macroscópica característica?",
    "opcoes": [
      "A) Necrose coagulativa — tecido pálido e firme, semelhante à carne cozida",
      "B) Necrose liquefativa — cavidade preenchida por material aquoso e purulento",
      "C) Necrose gordurosa — manchas brancas calcárias por saponificação de gordura",
      "D) Necrose caseosa — material granular e amarelado com aspecto de queijo branco"
    ],
    "correta": 3,
    "explicacao": "Resumo: A tuberculose gera granuloma com centro de necrose caseosa — combinação de componentes coagulativo e liquefativo que resulta no aspecto de queijo. A) INCORRETA. Necrose coagulativa é o padrão dos infartos de órgãos sólidos (rim, coração) — firme e pálida, não granular e amarelada. B) INCORRETA. Necrose liquefativa é de abscessos e AVC isquêmico — aquosa, sem o aspecto de queijo característico da TB. C) INCORRETA. Necrose gordurosa ocorre no pâncreas e mama por ação de lipases — manchas brancas calcárias por saponificação, diferente do granuloma TB. D) CORRETA. Necrose caseosa = aspecto de queijo branco-amarelado no centro do granuloma tuberculoso; também ocorre na histoplasmose. É a assinatura histológica da tuberculose.",
    "tema": "fp3_a1",
    "subfoco": "necrose-caseosa-tb",
    "dificuldade": 1,
    "modulo": 3
  },
  {
    "id": 148,
    "materia": "fisiopato3",
    "enunciado": "Paciente com IAM extenso tem fluxo coronariano reestabelecido após 90 minutos de isquemia. Nas horas seguintes, observa-se extensão da área de necrose além da zona inicialmente isquêmica. Qual mecanismo explica esse fenômeno paradoxal?",
    "opcoes": [
      "A) Lesão de reperfusão: entrada de oxigênio em mitocôndrias já danificadas gera surto de radicais livres que ampliam a necrose",
      "B) Reoclusão trombótica do vaso tratado por anticoagulação insuficiente",
      "C) Espasmo coronariano reflexo desencadeado pela manipulação do balão durante angioplastia",
      "D) Progressão da aterosclerose em outros territórios coronarianos não relacionados ao vaso tratado"
    ],
    "correta": 0,
    "explicacao": "Resumo: A reperfusão após isquemia prolongada pode paradoxalmente ampliar o dano por lesão oxidativa — o oxigênio que chega em mitocôndrias lesadas gera radicais livres em surto. A) CORRETA. Lesão de reperfusão: mitocôndrias danificadas pela isquemia, ao receber oxigênio, geram radicais livres de oxigênio (ROS) em quantidade excessiva → ampliam a área de necrose. É a base do uso de antioxidantes no IAM. B) INCORRETA. Reoclusão causaria novo déficit de fluxo, não paradoxo de extensão em território já reperfundido. C) INCORRETA. Espasmo coronariano pode ocorrer, mas não explica o mecanismo molecular de extensão da necrose já descrito. D) INCORRETA. Progressão em outros territórios é processo crônico, não causa extensão aguda de necrose nas horas após reperfusão.",
    "tema": "fp3_a1",
    "subfoco": "lesao-reperfusao",
    "dificuldade": 3,
    "modulo": 3
  },

  // ── FP3_A2 — Distúrbios Hemodinâmicos ──────────────────────────────────
  {
    "id": 149,
    "materia": "fisiopato3",
    "enunciado": "Paciente com fibrilação atrial crônica sem anticoagulação apresenta AVC isquêmico por cardioembolismo. Qual elemento da Tríade de Virchow predomina como fator de risco nesse caso?",
    "opcoes": [
      "A) Lesão endotelial — a fibrilação atrial lesa diretamente o endotélio atrial por mecanismo oxidativo contínuo",
      "B) Estase sanguínea — a contração atrial irregular e ineficiente cria zonas de fluxo lento no átrio esquerdo",
      "C) Hipercoagulabilidade — a fibrilação atrial sempre cursa com trombofilia hereditária associada",
      "D) Vasodilatação reflexa — a perda do ritmo sinusal dilata o átrio esquerdo e favorece coagulação"
    ],
    "correta": 1,
    "explicacao": "Resumo: Em fibrilação atrial, o átrio esquerdo não contrai eficientemente — cria estase no apêndice atrial, favorecendo trombo que pode embolizar para o cérebro. A) INCORRETA. Lesão endotelial direta não é o mecanismo central na FA; o endotélio pode sofrer alterações secundárias, mas a estase é o fator predominante. B) CORRETA. A FA gera contração atrial caótica e ineficiente → estase no apêndice atrial esquerdo → formação de trombo → embolismo sistêmico. Por isso anticoagulantes crônicos são indicados. C) INCORRETA. FA não causa trombofilia hereditária; hipercoagulabilidade pode coexistir, mas não é o mecanismo primário. D) INCORRETA. Vasodilatação não é elemento da Tríade de Virchow e não é o mecanismo da trombose na FA.",
    "tema": "fp3_a2",
    "subfoco": "triade-virchow",
    "dificuldade": 2,
    "modulo": 3
  },
  {
    "id": 150,
    "materia": "fisiopato3",
    "enunciado": "Vítima de acidente de moto apresenta hipotensão (PA 70x40 mmHg), taquicardia, extremidades quentes e rosadas, hematócrito normal, sem sangramento visível. Qual é o tipo de choque mais compatível?",
    "opcoes": [
      "A) Choque hipovolêmico hemorrágico com vasoconstrição periférica compensatória",
      "B) Choque cardiogênico por contusão miocárdica com redução do débito cardíaco",
      "C) Choque distributivo neurogênico por lesão medular com perda do tônus simpático",
      "D) Choque obstrutivo por hemopneumotórax com compressão do coração"
    ],
    "correta": 2,
    "explicacao": "Resumo: Pele quente + hipotensão + hematócrito normal em acidentado = choque distributivo neurogênico — a lesão medular perdeu o tônus simpático, causando vasodilatação periférica. A) INCORRETA. Choque hipovolêmico teria pele fria e pálida por vasoconstrição compensatória; hematócrito estaria alterado em hemorragia. B) INCORRETA. Choque cardiogênico teria pele fria, pulso filiforme, sinais de congestão pulmonar — não explicaria pele quente e rosada. C) CORRETA. Lesão medular → perda da inervação simpática → vasodilatação periférica → hipotensão com pele quente (choque distributivo neurogênico). Hematócrito normal confirma ausência de hemorragia significativa. D) INCORRETA. Choque obstrutivo teria sinais de tamponamento ou ausência de ruído respiratório, não pele quente com hematócrito normal.",
    "tema": "fp3_a2",
    "subfoco": "tipos-choque",
    "dificuldade": 3,
    "modulo": 3
  },
  {
    "id": 151,
    "materia": "fisiopato3",
    "enunciado": "Paciente de 22 anos em pós-operatório de fratura de fêmur há 48 horas apresenta dispneia súbita, confusão mental aguda e petéquias em tronco. Qual é o diagnóstico mais provável?",
    "opcoes": [
      "A) Tromboembolia pulmonar (TEP) por trombose venosa profunda do membro operado",
      "B) Pneumotórax espontâneo por trauma pleural durante o procedimento cirúrgico",
      "C) Anafilaxia tardia por reação ao antibiótico profilático utilizado na cirurgia",
      "D) Embolia gordurosa com tríade de hipóxia, confusão mental e petéquias"
    ],
    "correta": 3,
    "explicacao": "Resumo: Embolia gordurosa tem tríade patognomônica: hipóxia + confusão mental + petéquias, aparecendo 24-72h após fratura de osso longo. A) INCORRETA. TEP causa dispneia e hipóxia, mas não produz confusão mental aguda com petéquias — a tríade específica aponta para gordurosa. B) INCORRETA. Pneumotórax causa dispneia e murmúrio vesicular reduzido, sem confusão nem petéquias. C) INCORRETA. Anafilaxia tem urticária, broncoespasmo, hipotensão — não petéquias com confusão após 48 horas. D) CORRETA. Embolia gordurosa: fratura de osso longo + 24-72h + hipóxia + confusão mental + petéquias em tronco e membros superiores — tríade clássica por gotículas de gordura da medula óssea.",
    "tema": "fp3_a2",
    "subfoco": "embolia-gordurosa",
    "dificuldade": 2,
    "modulo": 3
  },
  {
    "id": 152,
    "materia": "fisiopato3",
    "enunciado": "Paciente com síndrome nefrótica apresenta edema generalizado (anasarca). Qual é o mecanismo fisiopatológico principal do edema nessa condição?",
    "opcoes": [
      "A) Redução da pressão oncótica plasmática por perda urinária maciça de albumina, favorecendo extravasamento para o interstício",
      "B) Aumento da pressão hidrostática capilar por sobrecarga volêmica em insuficiência cardíaca congestiva",
      "C) Obstrução linfática difusa por infiltração tumoral dos linfonodos abdominais",
      "D) Aumento da permeabilidade capilar por resposta inflamatória sistêmica aguda"
    ],
    "correta": 0,
    "explicacao": "Resumo: Na síndrome nefrótica, a proteinúria maciça leva à hipoalbuminemia → queda da pressão oncótica plasmática → líquido extravasa para o interstício. A) CORRETA. Proteinúria > 3,5 g/dia → hipoalbuminemia → pressão oncótica reduzida → líquido não é retido no vaso → anasarca. Esse mecanismo difere da ICC (pressão hidrostática). B) INCORRETA. ICC causa edema por aumento da pressão hidrostática, não por perda de albumina — mecanismo oposto ao da síndrome nefrótica. C) INCORRETA. Obstrução linfática causa linfedema localizado e duro (ex.: filariose), não anasarca generalizada. D) INCORRETA. Aumento de permeabilidade é da inflamação aguda e sepse, não da síndrome nefrótica.",
    "tema": "fp3_a2",
    "subfoco": "edema-oncose",
    "dificuldade": 1,
    "modulo": 3
  },
  {
    "id": 153,
    "materia": "fisiopato3",
    "enunciado": "Qual é a principal diferença entre trombo arterial e trombo venoso quanto à composição e ao mecanismo de formação?",
    "opcoes": [
      "A) Trombo arterial é vermelho e rico em eritrócitos, formado em zonas de baixo fluxo e evolui tipicamente para TEP",
      "B) Trombo arterial é branco e rico em plaquetas, formado em zonas de alto fluxo sobre placa aterosclerótica, causando isquemia distal",
      "C) Trombo venoso é branco e plaquetário, formado por hipercoagulabilidade e nunca embola para pulmão",
      "D) Ambos têm composição idêntica e se diferenciam apenas pelo calibre do vaso afetado"
    ],
    "correta": 1,
    "explicacao": "Resumo: Trombo arterial = plaquetário/branco/alto fluxo → isquemia; trombo venoso = eritrocitário/vermelho/baixo fluxo → TEP. A) INCORRETA. É a descrição do trombo venoso, não arterial — vermelho e rico em eritrócitos por estase; o venoso pode embolizar para TEP, mas o arterial causa isquemia distal. B) CORRETA. Trombo arterial: ambiente de alto fluxo → plaquetas ativadas por shear e pela placa → trombo rico em plaquetas e fibrina (branco) → obstrução distal (IAM, AVC isquêmico). C) INCORRETA. Trombo venoso é vermelho e eritrocitário, não branco; e é justamente o venoso que causa TEP por embolização pulmonar. D) INCORRETA. A composição é diferente e tem implicação terapêutica direta — antiagregantes para arterial, anticoagulantes para venoso.",
    "tema": "fp3_a2",
    "subfoco": "trombo-arterial-venoso",
    "dificuldade": 2,
    "modulo": 3
  },

  // ── BMF3_A1 — TGI Superior ──────────────────────────────────────────────
  {
    "id": 154,
    "materia": "bmf3",
    "enunciado": "O esôfago apresenta três estreitamentos fisiológicos com relevância clínica. Em qual nível vertebral e por qual mecanismo ocorre o segundo estreitamento esofágico?",
    "opcoes": [
      "A) C6, pelo músculo cricofaríngeo em contração permanente formando o esfíncter superior",
      "B) T10, pela passagem através do hiato diafragmático com compressão do esfíncter inferior",
      "C) T4-T5, por compressão extrínseca do arco aórtico e do brônquio esquerdo",
      "D) T1, pela compressão da veia cava superior e ducto torácico no mediastino superior"
    ],
    "correta": 2,
    "explicacao": "Resumo: Os 3 estreitamentos são — 1° C6 (cricofaríngeo muscular), 2° T4-T5 (arco aórtico + brônquio esquerdo, extrínseco), 3° T10 (hiato diafragmático/EEI). A) INCORRETA. Descreve o 1° estreitamento (cricofaríngeo em C6), não o 2°. B) INCORRETA. Descreve o 3° estreitamento — hiato diafragmático em T10 onde o EEI está localizado. C) CORRETA. O 2° estreitamento (T4-T5) é causado por compressão extrínseca: o arco aórtico pelo lado esquerdo e o brônquio esquerdo pela frente comprimem o esôfago — é o local mais comum de carcinoma espinocelular e impactação de corpo estranho. D) INCORRETA. Não é um estreitamento descrito classicamente; a veia cava superior não comprime o esôfago de forma clinicamente relevante.",
    "tema": "bmf3_a1",
    "subfoco": "estreitamentos-esofago",
    "dificuldade": 1,
    "modulo": 3
  },
  {
    "id": 155,
    "materia": "bmf3",
    "enunciado": "Paciente de 40 anos relata pirose e regurgitação após refeições há 6 meses. Manometria esofágica: pressão do EEI de 8 mmHg (VR: 15-30 mmHg). Qual é o diagnóstico e o mecanismo fisiopatológico?",
    "opcoes": [
      "A) Acalásia — falha no relaxamento do EEI hipertônico, com retenção de conteúdo no esôfago",
      "B) Estenose pilórica — hipertrofia do esfíncter pilórico causando regurgitação pós-prandial",
      "C) Hérnia de hiato paraesofágica — estômago herniado sem comprometimento funcional do EEI",
      "D) DRGE — hipotonia do EEI (< 15 mmHg) permitindo refluxo ácido para o esôfago"
    ],
    "correta": 3,
    "explicacao": "Resumo: EEI hipotônico (abaixo de 15 mmHg) não mantém barreira eficaz contra o refluxo gástrico → DRGE com pirose e regurgitação. A) INCORRETA. Acalásia é o oposto — EEI hipertônico que não relaxa → retenção esofagiana, disfagia progressiva, megaesôfago. A pressão estaria alta, não em 8 mmHg. B) INCORRETA. Estenose pilórica é mecânica, no esfíncter pilórico, não do EEI; causa vômitos em jato no lactente. C) INCORRETA. Hérnia de hiato pode contribuir para DRGE, mas o mecanismo aqui é funcional (hipotonia do EEI), não herniação anatômica. D) CORRETA. DRGE: EEI hipotônico (8 mmHg < limite 15 mmHg) → falha da barreira antirrefluxo → conteúdo gástrico ácido sobe para o esôfago → pirose e regurgitação.",
    "tema": "bmf3_a1",
    "subfoco": "eei-drge-acalasia",
    "dificuldade": 2,
    "modulo": 3
  },
  {
    "id": 156,
    "materia": "bmf3",
    "enunciado": "As células G do antro gástrico produzem um hormônio fundamental para a digestão. Qual é esse hormônio e qual é seu principal efeito fisiológico?",
    "opcoes": [
      "A) Gastrina — estimula a secreção de HCl pelas células parietais e a motilidade gástrica",
      "B) Secretina — inibe a secreção gástrica e estimula a liberação de bicarbonato pancreático",
      "C) Grelina — regula o apetite e é produzida exclusivamente pelo fundo gástrico",
      "D) Colecistocinina (CCK) — estimula a contração da vesícula biliar e inibe o esvaziamento gástrico"
    ],
    "correta": 0,
    "explicacao": "Resumo: Células G do antro → gastrina → estimulação das células parietais do corpo gástrico → secreção de HCl. A) CORRETA. Gastrina é o hormônio central da digestão gástrica: produzida pelas células G do antro em resposta a aminoácidos, distensão e estímulo vagal; estimula células parietais (HCl) e células principais (pepsinogênio). B) INCORRETA. Secretina é produzida pelo duodeno em resposta ao ácido — inibe secreção gástrica e estimula bicarbonato pancreático; não é do antro. C) INCORRETA. Grelina é produzida pelo fundo gástrico e regula apetite, mas não é das células G do antro. D) INCORRETA. CCK é duodenal — estimula vesícula e pâncreas; não é produzida pelo antro gástrico.",
    "tema": "bmf3_a1",
    "subfoco": "antro-gastrina",
    "dificuldade": 1,
    "modulo": 3
  },
  {
    "id": 157,
    "materia": "bmf3",
    "enunciado": "Durante gastrectomia subtotal, o cirurgião precisa ligar a artéria gástrica esquerda. De qual tronco vascular ela se origina e qual é sua principal área de irrigação?",
    "opcoes": [
      "A) Artéria hepática própria — irrigando a curvatura menor inferior do estômago",
      "B) Tronco celíaco diretamente — irrigando os 2/3 superiores da curvatura menor gástrica",
      "C) Artéria esplênica — irrigando o fundo gástrico pelas artérias gástricas curtas",
      "D) Artéria gastroduodenal — irrigando a curvatura maior pelo arco gastroepiplóico direito"
    ],
    "correta": 1,
    "explicacao": "Resumo: Gástrica esquerda = tronco celíaco diretamente (sem artéria intermediária) → curvatura menor superior. Gástrica direita = artéria hepática própria → curvatura menor inferior. A) INCORRETA. Descreve a gástrica direita, não a esquerda — a gástrica direita origina-se da hepática própria e irriga o 1/3 inferior da curvatura menor. B) CORRETA. Gástrica esquerda: nasce diretamente do tronco celíaco (ramo mais calibroso do tronco) → percorre o omento menor → irriga os 2/3 superiores da curvatura menor. Ligadura cirúrgica exige cuidado pelo calibre. C) INCORRETA. Artéria esplênica origina as gástricas curtas (fundo) e a gastroepiplóica esquerda (curvatura maior), não a gástrica esquerda. D) INCORRETA. Gastroduodenal origina a gastroepiplóica direita (curvatura maior direita), não a gástrica esquerda.",
    "tema": "bmf3_a1",
    "subfoco": "vascularizacao-gastrica",
    "dificuldade": 3,
    "modulo": 3
  },

  // ── BMF3_A10 — Trato Urinário ───────────────────────────────────────────
  {
    "id": 158,
    "materia": "bmf3",
    "enunciado": "Paciente com cólica renal apresenta cálculo de 4 mm no ureter evidenciado por tomografia. Considerando os três pontos de constrição ureteral, qual deles é o mais estreito e de maior probabilidade de impactação?",
    "opcoes": [
      "A) Junção ureteropélvica (JUP) — onde o ureter se origina da pelve renal",
      "B) Cruzamento com os vasos ilíacos — na borda da pelve óssea",
      "C) Junção ureterovesical (JUV) — onde o ureter penetra na parede da bexiga",
      "D) Hilo renal — onde o ureter emerge junto à artéria e à veia renais"
    ],
    "correta": 2,
    "explicacao": "Resumo: Os 3 pontos de constrição são JUP, cruzamento ilíaco e JUV — sendo a JUV o mais estreito, com maior chance de impactação de cálculos. A) INCORRETA. JUP é o 1° ponto de constrição — importante, mas não o mais estreito. B) INCORRETA. Cruzamento ilíaco é o 2° ponto — também significativo, mas de calibre maior que a JUV. C) CORRETA. JUV (3° ponto) é o mais estreito dos três pontos de constrição ureteral — cálculos que chegam até a JUV têm maior dificuldade para progredir à bexiga, causando cólica intensa. D) INCORRETA. O hilo renal não é um ponto de constrição ureteral; é apenas a saída do ureter do rim junto aos vasos.",
    "tema": "bmf3_a10",
    "subfoco": "constricoes-ureter",
    "dificuldade": 2,
    "modulo": 3
  },
  {
    "id": 159,
    "materia": "bmf3",
    "enunciado": "Na dissecção cirúrgica do hilo renal, qual é a ordem correta das estruturas da frente (anterior) para trás (posterior)?",
    "opcoes": [
      "A) Artéria renal → Veia renal → Ureter",
      "B) Ureter → Artéria renal → Veia renal",
      "C) Veia renal → Ureter → Artéria renal",
      "D) Veia renal → Artéria renal → Ureter"
    ],
    "correta": 3,
    "explicacao": "Resumo: Mnemônico VAU — Veia (anterior), Artéria (médio), Ureter (posterior) — ordem de frente para trás no hilo renal. A) INCORRETA. Artéria não é anterior — está entre veia e ureter. B) INCORRETA. Ureter é o mais posterior, não o mais anterior. C) INCORRETA. Ureter não fica entre veia e artéria — está atrás de ambas. D) CORRETA. VAU: Veia renal = mais anterior (facilmente acessada na nefrectomia), Artéria renal = plano médio, Ureter = mais posterior. Essa ordem é fundamental para cirurgia renal segura.",
    "tema": "bmf3_a10",
    "subfoco": "hilo-renal-vau",
    "dificuldade": 1,
    "modulo": 3
  },
  {
    "id": 160,
    "materia": "bmf3",
    "enunciado": "O trígono vesical é uma região de grande interesse clínico e cistoscópico. Quais são seus três vértices e por que essa região não apresenta rugas, ao contrário do restante da bexiga?",
    "opcoes": [
      "A) Os dois óstios ureterais e o óstio interno da uretra; a mucosa adere firmemente à camada muscular sem espaço para dobras",
      "B) Os dois óstios ureterais e o colo vesical; apresenta rugas por ser a zona de maior distensão durante o enchimento",
      "C) O óstio uretral interno e dois pontos de ancoragem do ligamento pubovesical; liso por ausência de músculo detrusor",
      "D) Os dois óstios ureterais e a parede posterior; não tem mucosa própria, apenas submucosa aderida"
    ],
    "correta": 0,
    "explicacao": "Resumo: Trígono = triângulo com vértices nos dois óstios ureterais e no óstio uretral interno; sua mucosa aderida à muscular impede formação de rugas. A) CORRETA. O trígono vesical tem como vértices os dois óstios ureterais (superiores) e o óstio interno da uretra (inferior); a mucosa está firmemente aderida à camada muscular — sem espaço para dobras — por isso é liso na cistoscopia, mesmo com bexiga vazia. B) INCORRETA. O colo vesical não é vértice do trígono; e o trígono não tem rugas — é justamente o contrário do restante da bexiga que fica pregueado quando vazio. C) INCORRETA. O ligamento pubovesical não delimita o trígono; e o detrusor está presente na região. D) INCORRETA. O trígono tem mucosa própria — sua especificidade é a aderência à muscular, não ausência de mucosa.",
    "tema": "bmf3_a10",
    "subfoco": "trigono-vesical",
    "dificuldade": 2,
    "modulo": 3
  },
  {
    "id": 161,
    "materia": "bmf3",
    "enunciado": "A maior frequência de infecção do trato urinário (ITU) em mulheres em relação a homens tem relação direta com uma diferença anatômica. Qual é essa diferença e qual é o mecanismo?",
    "opcoes": [
      "A) A bexiga feminina tem menor capacidade vesical, favorecendo estase urinária e proliferação bacteriana",
      "B) A uretra feminina mede apenas 3-4 cm, facilitando a ascensão bacteriana até a bexiga",
      "C) A uretra masculina é mais calibrosa, permitindo maior fluxo urinário que elimina bactérias",
      "D) As mulheres têm menor concentração de IgA secretora nas vias urinárias do que os homens"
    ],
    "correta": 1,
    "explicacao": "Resumo: A uretra feminina é curta (3-4 cm) e próxima à flora perianal e vaginal — bactérias ascendem facilmente até a bexiga. A uretra masculina (18-20 cm) é uma barreira anatômica natural. A) INCORRETA. Capacidade vesical é similar entre os sexos; a estase ocorre por disfunção miccional, não por capacidade menor. B) CORRETA. Uretra feminina = 3-4 cm → distância mínima entre meato e bexiga → E. coli e outras bactérias ascendem facilmente. Uretra masculina = 18-20 cm → barreira eficaz. Isso explica por que ITU é 10-30x mais frequente em mulheres. C) INCORRETA. O calibre uretral não é o fator determinante — é o comprimento que muda a probabilidade de ascensão bacteriana. D) INCORRETA. IgA secretora não é a causa determinante da diferença de frequência — é um mecanismo imune acessório, não a principal variável anatômica.",
    "tema": "bmf3_a10",
    "subfoco": "uretra-itu-anatomia",
    "dificuldade": 1,
    "modulo": 3
  }
];

novas.forEach(q => questoes.push(q));

const result = { ...data, questoes };
fs.writeFileSync(filePath, JSON.stringify(result, null, 2), 'utf8');
console.log(`Lote 2 salvo! Total de questoes: ${questoes.length}, Max ID: ${Math.max(...questoes.map(q => q.id))}`);
