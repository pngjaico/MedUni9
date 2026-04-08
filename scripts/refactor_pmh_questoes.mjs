/**
 * Refatora lotes PMH em data/questoes.json conforme prompts/prompts questões/modulo1_pmh.md
 * Executar: node scripts/refactor_pmh_questoes.mjs
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");
const QUESTOES_PATH = path.join(ROOT, "data", "questoes.json");

function buildExplicacao(resumo, correta, porLetra) {
  const ord = ["A", "B", "C", "D"];
  const lines = [`Resumo: ${resumo}`];
  for (let i = 0; i < 4; i++) {
    const L = ord[i];
    const tag = i === correta ? "CORRETA" : "INCORRETA";
    lines.push(`${L}) ${tag}. ${porLetra[L]}`);
  }
  return lines.join("\n");
}

function q(enunciado, opcoes, correta, dificuldade, resumo, porLetra) {
  return {
    enunciado,
    opcoes,
    correta,
    dificuldade,
    explicacao_geral: resumo,
    explicacoes_opcoes: {
      A: porLetra.A,
      B: porLetra.B,
      C: porLetra.C,
      D: porLetra.D,
    },
    explicacao: buildExplicacao(resumo, correta, porLetra),
  };
}

// Cada lote: 10 itens, dificuldades 1,1,2,2,2,2,2,3,3,3 e correta ~ uniforme
const LOTES = {
  pmh_a1: [
    q(
      "Em condições de pressão e temperatura constantes, reação bioquímica com ΔG negativo é, termodinamicamente:",
      [
        "A) Exergônica e espontânea nas condições dadas",
        "B) Endergônica e espontânea",
        "C) Sempre lenta porque requer ATP sintase",
        "D) Impossível em células humanas sem oxigênio molecular",
      ],
      0,
      1,
      "ΔG negativo indica processo exergônico espontâneo sob aquelas condições; velocidade é questão enzimática.",
      {
        A: "Reações exergônicas liberam energia livre (ΔG < 0) e são espontâneas termodinamicamente na condição descrita.",
        B: "Endergônicas têm ΔG positivo sozinhas; não se confunde com espontaneidade de ΔG < 0.",
        C: "ΔG não determina velocidade; catalisadores alteram taxa, não o sinal de ΔG.",
        D: "Muitas reações espontâneas ocorrem sem O₂; o gás é aceptor final na ETC, não critério universal de ΔG.",
      }
    ),
    q(
      "Qual afirmação corresponde melhor à primeira lei da termodinâmica aplicada ao metabolismo?",
      [
        "A) A entropia do universo diminui em todo processo celular",
        "B) A energia total se conserva ao se transformar entre calor e trabalho químico",
        "C) Processos espontâneos exigem sempre consumo líquido de ATP",
        "D) ATP é criado do nada nas mitocôndrias durante o jejum",
      ],
      1,
      1,
      "A primeira lei é conservação da energia nas transformações do sistema.",
      {
        A: "A segunda lei trata entropia global, não a primeira; o universo tende a maior desordem nos processos espontâneos totais.",
        B: "Energia não surge nem desaparece; muda de forma (calor, trabalho químico, ligações).",
        C: "Espontaneidade é avaliada por ΔG; ATP acopla vias, mas não é exigência da primeira lei.",
        D: "ATP é continuamente reciclado; energia veém de substratos oxidados.",
      }
    ),
    q(
      "Homem de 58 anos em choque séptico apresenta lactato elevado e acidose metabólica. Com oferta tecidual de oxigênio limitada, qual mecanismo favorece manter fluxo mínimo de glicólise?",
      [
        "A) Aceleração máxima da fosforilação oxidativa até normalizar o gradiente mitocondrial",
        "B) Bloqueio completo da glicólise por acúmulo de glicose-6-fosfato no eritrocito",
        "C) Conversão de piruvato em lactato, regenerando NAD⁺ pela lactato desidrogenase",
        "D) Síntese e exportação de glicose livre pelo músculo esquelético para o fígado",
      ],
      2,
      2,
      "Sob hipóxia, lactato regenera NAD⁺ e permite glicólise anaeróbia contínua, com custo acidótico se maciço.",
      {
        A: "Com falha da cadeia respiratória ou hipóxia, a fosforilação oxidativa não sustenta ATP aeróbio.",
        B: "Não há bloqueio fisiológico global assim; o gargalo é reoxidação de cofatores sob hipóxia.",
        C: "O desvio piruvato → lactato recicla NAD⁺, mantendo a glicólise quando a mitocôndria não reoxida NADH adequadamente.",
        D: "Músculo não expressa glicose-6-fosfatase e não exporta glicose livre.",
      }
    ),
    q(
      "Em relação a NADH e NADPH, qual distinção funcional é mais coerente com o metabolismo humano?",
      [
        "A) NADPH alimenta primariamente a cadeia respiratória na glicólise aeróbia",
        "B) NADH predomina na via das pentoses-fosfato oxidativa gerando ribose isolada",
        "C) NADH e NADPH são intercambiáveis em qualquer reação de síntese de ácidos graxos",
        "D) NADPH costuma sustentar rotas anabólicas e defesa antioxidante; NADH encaminha elétrons à cadeia respiratória no catabolismo energético típico",
      ],
      3,
      2,
      "NADH leva elétrons à ETC; NADPH fornece poder redutor a sínteses e sistemas de detox redução (ex.: glutationa).",
      {
        A: "NADPH não é o redutor principal da ETC; seu papel clássico é anabolismo e antioxidant.",
        B: "A fase oxidativa do PPP gera NADPH; NADH não é o produto característico dessa via.",
        C: "As enzimas são específicas para cada cofator; não são perfeitamente intercambiáveis.",
        D: "Concorda com o material diferenciando papéis de NADH (energia oxidativa) e NADPH (anabolismo/defesa).",
      }
    ),
    q(
      "Paciente com hipertireoidismo e taquicardia tem gasto energético aumentado. A hidrólise de ATP para ADP e Pᵢ acopla-se primariamente a:",
      [
        "A) Pagar processos endergônicos como transporte ativo e sínteses",
        "B) Aumentar entropia interna sem realizar trabalho útil",
        "C) Impedir reações exergônicas no citoplasma",
        "D) Substituir a necessidade de gradiente de prótons na ATP sintase",
      ],
      0,
      2,
      "ATP transfere energia do catabolismo a trabalhos químicos termodinamicamente desfavoráveis.",
      {
        A: "A hidrólise de ATP fornece energia livre para acoplar sínteses, bombas, etc.",
        B: "Trabalho útil ocorre no acoplamento; não é mero aumento caótico de desordem local.",
        C: "Reações exergônicas continuam; o ATP paga as endergônicas.",
        D: "A sintase depende do gradiente em condições mitocondriais normais; ATP não o substitui.",
      }
    ),
    q(
      "A segunda lei da termodinâmica, na visão biológica usual, explica por que as células precisam de aporte contínuo de energia mesmo mantendo organização molecular interna:",
      [
        "A) Porque violam a conservação de energia ao sintetizar proteínas",
        "B) Porque mantêm baixa entropia local financiada por fluxo que aumenta entropia no entorno",
        "C) Porque processos espontâneos locais eliminam dispersão de calor",
        "D) Porque o ATP armazena entropia negativa permanente no citoplasma",
      ],
      1,
      2,
      "Vida mantém ordem local à custa de dissipar energia e aumentar desordem no meio — coerente com a segunda lei global.",
      {
        A: "Síntese proteica respeita conservação; energia veém de nucleotídeos e substratos.",
        B: "Células são sistemas abertos; ordem local é paga por fluxo energético que dispersa calor externamente.",
        C: "A dissipação de calor e aumento de entropia no universo é central à segunda lei.",
        D: "ATP é reciclado; não há 'depósito' eterno de entropia negativa.",
      }
    ),
    q(
      "Exercício intenso em ambiente quente: tóxico mitocondrial dissipa gradiente de prótons sem gerar ATP. Isso assemelha-se ao conceito de:",
      [
        "A) Inibição competitiva da hexoquinase hepática",
        "B) Ativação isolada da gliconeogênese no músculo",
        "C) Desacoplamento oxidativo-fosforilativo com predomínio de calor sobre ATP útil",
        "D) Bloqueio seletivo apenas do complexo II da cadeia respiratória",
      ],
      2,
      3,
      "Desacopladores dissipam força protonmotriz; oxidação pode prosseguir com pouca conservação em ATP.",
      {
        A: "Hexoquinase não é o alvo clássico desse fenômeno energético mitocondrial.",
        B: "Músculo não realiza gliconeogênese exportável de glicose livre como o fígado.",
        C: "Conceito histórico e didático de desacoplamento com produção térmica relevante.",
        D: "Bloqueio pontual de um complexo difere de dissipar gradiente já formado.",
      }
    ),
    q(
      "Reação com ΔG marcadamente negativo pode ser lenta se a enzima específica estiver ausente ou inibida. Isso ocorre porque:",
      [
        "A) ΔG positivo é obrigatório para qualquer catálise enzimática",
        "B) Enzimas alteram o ΔG padrão da reação que catalisam",
        "C) A velocidade depende apenas da temperatura central, não da concentração de enzima",
        "D) ΔG informa direção termodinâmica favorável, não a velocidade da reação",
      ],
      3,
      3,
      "Cinética e termodinâmica são eixos distintos: ΔG e barreira de ativação/enzima.",
      {
        A: "Catálise não exige ΔG > 0; muitas reações catalisadas são exogenônicas.",
        B: "Enzimas não mudam ΔG da reação global; mudam caminho cinético.",
        C: "Vmax e saturação enzimática são centrais; temperatura não é o único fator.",
        D: "Correto: espontaneidade não implica rapidez; enzimas reduzem energia de ativação.",
      }
    ),
    q(
      "Mulher de 32 anos, maratonista, em jejum prolongado, aumenta oxidação de ácidos graxos. Os trechos catabólicos dominantes desse contexto tendem a ser:",
      [
        "A) Endergônicos por síntese concomitante de proteína muscular",
        "B) Independentes de NAD⁺, FAD e flavoproteínas mitocondriais",
        "C) Exergônicos, podendo acoplar necessidades energéticas celulares",
        "D) Equivalentes à gliconeogênese renal sem qualquer consumo de nucleosídeo trifosfato",
      ],
      2,
      3,
      "Catabolismo oxidativo de lipídios libera energia livre (trechos exergônicos) utilizável.",
      {
        A: "Anabolismo proteico não caracteriza o predomínio oxidativo de jejum prolongado no exercício.",
        B: "Redutores NADH/FADH₂ são centrais na oxidação mitocondrial.",
        C: "Oxidação de substratos libera energia acoplável — coerente com β-oxidação e ETC.",
        D: "Gliconeogênese consome energia; não descreve toda a oxidação de AG.",
      }
    ),
    q(
      "Em uma etapa, NAD⁺ é reduzido a NADH enquanto o substrato perde elétrons. O substrato foi:",
      [
        "A) Reduzido por ganho direto de elétrons do oxigênio molecular dissolvido",
        "B) Oxidado, pois perdeu elétrons captados pelo cofator nicotinamida",
        "C) Hidrolisado preferencialmente pela ATP sintase da membrana mitocondrial interna",
        "D) Fosforilado em ligação de alta energia sem alteração redox",
      ],
      1,
      3,
      "Oxidação é perda de elétrons; redução do cofator acompanha a oxidação do substrato.",
      {
        A: "O substrato oxidado perde elétrons; redução refere-se ao aceitador (NAD⁺).",
        B: "Correto: perda de elétrons pelo substrato com redução de NAD⁺ a NADH.",
        C: "ATP sintase não cumpre papel de desidrogenase em oxidação de substratos.",
        D: "O enunciado descreve evento redox, não fosforilação de substrato.",
      }
    ),
  ],

  pmh_a2: [
    q(
      "Após refeição rica em carboidrato, qual predomina no estado metabólico de absorção em indivíduo saudável?",
      [
        "A) Lipólise acelerada e cetogênese hepática marcante",
        "B) Insulinemia relativa mais alta, favorecendo captação de glicose e rotas anabólicas em tecidos sensíveis",
        "C) Glicogenólise hepática máxima por exclusão de glucagon",
        "D) AMPK ativado de forma dominante no músculo em repouso pós-prandial",
      ],
      1,
      1,
      "Pós-prandial: insulina predomina e direciona armazenamento e utilização de glicose.",
      {
        A: "Jejum/estresse favorecem mobilização lipídica; não o padrão típico absorptivo.",
        B: "Coerente com aumento de insulina e uso de nutrientes absorvidos.",
        C: "Glucagon não some totalmente; o ponto é o balanço prandial a favor de insulina.",
        D: "AMPK sinaliza baixa energia; não é o sinal dominante clássico do estado bem-alimentado em repouso.",
      }
    ),
    q(
      "Sobre glucagon, qual afirmação é mais adequada?",
      [
        "A) Aumenta captura insulino-dependente de glicose no adipócito via GLUT4",
        "B) Atua com efeito metabólico mais marcante no fígado, mobilizando substratos na vigência de jejum",
        "C) Inibe adenil ciclase hepática em todas as situações",
        "D) É secretado massivamente após ingestão de glicose isolada",
      ],
      1,
      1,
      "Glucagon predomina no jejum e tem papel central na modulação hepática de glicose.",
      {
        A: "Esse papel é clássico da insulina, não do glucagon.",
        B: "Material destaca fígado como alvo proeminente do glucagon na mobilização energética.",
        C: "Glucagon estimula cAMP no fígado via receptores acoplados a GS.",
        D: "Hiperglicemia oral suprime glucagon relativamente à insulina.",
      }
    ),
    q(
      "Homem com sepse e hiperglicemia de estresse. Qual par hormonal contribui tipicamente para elevação da glicemia nesse quadro agudo?",
      [
        "A) Somatostatina pancreática isolada",
        "B) Apenas insulina basal sem contrarreguladores",
        "C) Cortisol sustentado e catecolaminas com efeito contrarregulador",
        "D) Exclusivamente GLP-1 em jejum prolongado",
      ],
      2,
      2,
      "Estresse neuroendócrino aumenta contrarregulação e resistência periférica, elevando glicemia.",
      {
        A: "Somatostatina inibe secreção; não explica hiperglicemia de estresse isoladamente.",
        B: "Contrarreguladores são centrais na hiperglicemia de estresse.",
        C: "Cortisol e catecolaminas promovem mobilização de substrato e opõem-se à insulina.",
        D: "GLP-1 incretínico não é o eixo dominante descrito para sepse aguda.",
      }
    ),
    q(
      "Atleta em esforço prolongado: razão intracelular AMP/ATP elevada. O sensor AMPK tende a:",
      [
        "A) Estimular síntese lipídica heática máxima",
        "B) Inibir captação de glicose pelo músculo",
        "C) Favorecer rotas de economia energética e oxidação compatíveis com baixa carga energética",
        "D) Ativar irreversivelmente mTOR independentemente de aminoácidos",
      ],
      2,
      2,
      "AMPK ‘sentiu’ queda de carga energética e favorece vias que repõem ATP e reduzem gastos anabólicos.",
      {
        A: "AMPK costuma frear sínteses consumidoras quando energia está baixa.",
        B: "AMPK pode favorecer captação/oxidação em contexto de exercício e déficit energético.",
        C: "Coerente com papel de AMPK em ‘falta de energia’ intracelular.",
        D: "mTOR integra nutrientes; AMPK e mTOR frequentemente se opem em contextos de restrição energética.",
      }
    ),
    q(
      "mTOR integra sinal de nutrientes e insulina. Em restrição energética aguda, espera-se predominantemente:",
      [
        "A) Ativação máxima irreversível de sintese proteica ribossomal",
        "B) Redução relativa de vias de crescimento acopladas a mTOR frente à queda de insulina e nutrientes",
        "C) Bloqueio completo irreversível da transcrição gênica celular",
        "D) Síntese exclusiva de corpos cetônicos no músculo esquelético",
      ],
      1,
      2,
      "mTOR favorece crescimento com nutrientes; jejum/restrição costuma moderar esse eixo.",
      {
        A: "Crescimento proteico pleno não caracteriza jejum agudo.",
        B: "Menos insulina/nutrientes tende a baixar estímulo a mTOR em relação ao estado prandial.",
        C: "Transcrição global não para por completo; é um exagero.",
        D: "Cetogênese hepática é o foco clássico, não cetogênese muscular dominante.",
      }
    ),
    q(
      "Em hepatócito, insulina alta na absorção tende a favorecer qual tendência, em visão geral?",
      [
        "A) Glicogenólise máxima e gliconeogênese acelerada",
        "B) Síntese de glicogênio e inibição relativa da gliconeogênese",
        "C) Apenas lipólise sem captura de glicose",
        "D) Exclusivamente β-oxidação sem armazenamento de glicogênio",
      ],
      1,
      2,
      "Insulina hepática favorece armazenamento e corta produção de glicose de novo quando apropriado.",
      {
        A: "Isso descreve jejum/glucagon maior, não insulina alta absorptiva.",
        B: "Coerente com síntese glicogênica e freio à gliconeogênese.",
        C: "Insulina inibe lipólise; promove rotas de armazenamento.",
        D: "O fígado absorptivo não prioriza só oxidação lipídica em detrimento total do glicogênio.",
      }
    ),
    q(
      "Paciente com diabetes mellitus tipo 1 mal controlado, em jejum, apresenta cetose. Comparativamente ao estado prandial, o que muda de forma mais coerente?",
      [
        "A) Insulina endógena elevada inibe lipólise hepática",
        "B) Deficiência relativa de insulina permite contrarreguladores elevarem gliconeogênese, lipólise e cetogênese",
        "C) Glucagon torna-se inativo por ausência de receptor hepático",
        "D) AMPK deixa de existir nos hepatócitos",
      ],
      1,
      3,
      "DM1 sem insulina adequada simula ‘jejum metabólico’ com contrarregulação e cetose.",
      {
        A: "DM1 descompensado não tem insulina alta endógena típica.",
        B: "Falta de insulina permite mobilização de substrato e produção de cetônicos hepáticos.",
        C: "Receptores de glucagon permanecem funcionais; o contexto hormonal é de baixa insulina.",
        D: "AMPK permanece como proteína reguladora; o enunciado é absurdo fisiologicamente.",
      }
    ),
    q(
      "Qual enzima-reguladora da glicólise hepática é citada como principal ponto de controle sensível a ATP/AMP e F2,6BP?",
      [
        "A) Glicose-6-fosfatase",
        "B) UDP-glicose pirofosforilase",
        "C) Fosfofrutoquinase-1 (PFK-1)",
        "D) Carnitina palmitoiltransferase I",
      ],
      2,
      2,
      "PFK-1 integra sinais energéticos e F2,6BP no fígado, chave da regulação da glicólise.",
      {
        A: "G6Pase é do bypass gliconeogênico/liberação de glicose, não controle central da glicólise.",
        B: "Enzima da síntese de glicogênio, não controle da glicólise.",
        C: "Corresponde ao ponto clássico citado no curso.",
        D: "CPT-I regula entrada de AG longos na mitocôndria, via lipídica.",
      }
    ),
    q(
      "Idosa com infecção respiratória e glicemia de 220 mg/dL sem diabetes prévio conhecido. Qual integração hormonal explica parte da ‘hiperglicemia de estresse’ em UTI?",
      [
        "A) Queda isolada de cortisol e exclusão de catecolaminas",
        "B) Resistência insulínica aguda associada a pico de contrarreguladores (cortisol, catecolaminas, glucagon)",
        "C) Supressão completa de glucagon e mTOR hiperativo",
        "D) Apenas deficiência de GLUT1 no encéfalo",
      ],
      1,
      3,
      "Sepse/estresse: resistência à insulina + contrarregulação elevam glicemia.",
      {
        A: "Cortisol tende a subir na resposta ao estresse, não cair isoladamente.",
        B: "Coerente com mapa hormonal da aula aplicado ao doente grave.",
        C: "Glucagon não some; o padrão é desequilíbrio a favor de produção/mobilização.",
        D: "Transporte basal encefálico não explica hiperglicemia sistêmica inteira.",
      }
    ),
    q(
      "No exercício em sprint, predomínio inicial de ATP de fosfatos de alta energia e glicogenólise. No aeróbio longo, enfatiza-se:",
      [
        "A) Apenas gliconeogênese renal como única fonte de ATP muscular",
        "B) Oxidação mitocondrial crescente com participação de AMPK favorecendo fluxo oxidativo conforme contexto",
        "C) Inibição total de qualquer uso de glicose",
        "D) Síntese de palmitato como combustível imediato da fibra contrátil",
      ],
      1,
      3,
      "Intensidade e duração alteram substratos; aeróbio prolongado favorece oxidação.",
      {
        A: "Rim contribui em jejum prolongado, mas não é única fonte muscular de ATP.",
        B: "Integra papel de AMPK/oxidação no esforço aeróbio prolongado descrito.",
        C: "Glicose ainda é substrato importante em endurance.",
        D: "Síntese lipídica não alimenta contração imediata.",
      }
    ),
  ],

  pmh_a3: [
    q(
      "A glicólise aeróbia líquida a partir de glicose gera, por mol processado até piruvato (excluindo etapas mitocondriais subsequentes):",
      [
        "A) Consumo líquido de 4 ATP sem NADH",
        "B) Rendimento clássico de 2 ATP net e NADH citoplasmático conforme balanço das fases",
        "C) 38 ATP mitocondriais diretos sem NADH citoplasmático",
        "D) Apenas CO₂ sem ATP na citosol",
      ],
      1,
      1,
      "Glicólise: fase preparatória gasta ATP, pagadora devolve; saldo típico 2 ATP e NADH citoplasmático.",
      {
        A: "O saldo não é −4 ATP net no arranjo padrão; fases se compensam.",
        B: "Corresponde ao balanço didático usual citado.",
        C: "ATP oxidativo vem depois na ETC; não ‘direto’ só na glicólise.",
        D: "Decarboxilações da glicólise não são o foco; piruvato ainda não é CO₂ total.",
      }
    ),
    q(
      "Qual conjunto lista enzimas exclusivas dos bypasses da gliconeogênese em relação à glicólise reversa simples?",
      [
        "A) Hexoquinase, piruvato quinase, PFK-1",
        "B) Lactato desidrogenase, enolase, triose-fosfato isomerase",
        "C) Piruvato carboxilase, PEPCK, F1,6-bifosfatase, glicose-6-fosfatase (em órgãos que exportam glicose)",
        "D) Complexo da piruvato desidrogenase e succinato desidrogenase",
      ],
      2,
      1,
      "Gliconeogênese contorna passos irreversíveis com enzimas específicas, incluindo G6Pase onde há exportação.",
      {
        A: "São enzimas da glicólise ou captura de glicose, não bypass.",
        B: "Participam da via glicolítica compartilhada, não substituem irreversíveis.",
        C: "Lista clássica dos bypasses didáticos.",
        D: "Enzimas mitocondriais do TCA/PDH, não o conjunto bypass gluconeogênico.",
      }
    ),
    q(
      "Homem com hipoperfusão e lactato elevado: o lactato pode servir como substrato para:",
      [
        "A) Oxidação exclusiva irreversível sem retorno de carbono à glicose",
        "B) Armazenamento como glicogênio no músculo sem passar pelo fígado",
        "C) Ciclo de Cori com reconversão hepática a glicose (quando função hepática preservada)",
        "D) Síntese direta de ácidos biliares no eritrocito",
      ],
      2,
      2,
      "Lactato periférico volta ao fígado para gluconeogênese no ciclo de Cori.",
      {
        A: "Parte pode oxidar, mas o material enfatiza papel gluconeogênico do lactato.",
        B: "Músculo não exporta glicose livre.",
        C: "Descreve integração musculatura–fígado.",
        D: "Sem relação com eritrocitos ou vias biliares.",
      }
    ),
    q(
      "Por que o músculo esquelético não libera glicose livre para a circulação?",
      [
        "A) Porque carece de glicogênio intracelular",
        "B) Porque não expressa glicose-6-fosfatase que libera glicose do G6P",
        "C) Porque transporta glicose apenas via SGLT2",
        "D) Porque não realiza glicólise",
      ],
      1,
      2,
      "G6P fica preso como fosfato ester no músculo sem a fosfatase final.",
      {
        A: "Músculo armazena glicogênio; não é a causa.",
        B: "Correto: ausência de G6Pase impede glicose livre exportável.",
        C: "Captação muscular usa principalmente GLUT4, não SGLT2.",
        D: "Músculo glicolisa intensamente.",
      }
    ),
    q(
      "No fígado, frutose-2,6-bifosfato alto favorece predominantemente:",
      [
        "A) Gliconeogênese máxima por ativar F1,6-bifosfatase",
        "B) Glicólise ao estimular PFK-1 em detrimento do fluxo gluconeogênico oposto",
        "C) β-oxidação exclusiva sem glicólise",
        "D) Ureogênese como via paralela obrigatória",
      ],
      1,
      2,
      "F2,6BP liga reciprocidade: alto favorece glicólise hepática.",
      {
        A: "F2,6BP alto não ativa bifosfatase gliconeogênica; baixa tende a favorecer gluconeogênese.",
        B: "Coerente com material sobre PFK-1 e F2,6BP.",
        C: "Sem relação exclusiva com β-oxidação.",
        D: "Ureia lida com nitrogênio, não este elo.",
      }
    ),
    q(
      "Paciente com hipoglicemia por excesso de insulina: qual ramo do fluxo hepático fica especialmente prejudicado para sustentar glicemia?",
      [
        "A) Ciclo da ureia exclusivamente",
        "B) Gliconeogênese e mobilização contrarregulada suprimidas pela insulina excessiva",
        "C) Apenas síntese de colesterol de novo",
        "D) β-oxidação mitocondrial de cadeia longa inalterada sempre",
      ],
      1,
      2,
      "Insulina excessiva corta produção hepática de glicose (glicogenólise/gliconeogênese relativamente inibidas).",
      {
        A: "Ureia não sustenta glicemia aguda.",
        B: "Bloqueio contrarregulador explica hipoglicemia iatrogênica.",
        C: "Colesterol não é resgate glicêmico imediato.",
        D: "Oxidação lipídica pode ocorrer, mas não substitui produção de glicose cerebral rápida.",
      }
    ),
    q(
      "Após corrida de alta intensidade, lactato muscular elevado. A regeneração de NAD⁺ na via lactato está ligada a:",
      [
        "A) ATP sintase da membrana mitocondrial externa",
        "B) Complexo IV consumindo lactato diretamente",
        "C) Lactato desidrogenase reduzindo piruvato a lactato a partir de NADH, reciclando NAD⁺ em condição anaeróbia local",
        "D) Glicose-6-fosfatase muscular",
      ],
      2,
      3,
      "LDH equilibra piruvato/lactato com NADH/NAD⁺ para manter glicólise anaeróbia.",
      {
        A: "ATP sintase não recicla NAD⁺ na glicólise.",
        B: "ETC não oxida lactato diretamente nesse sentido.",
        C: "Corresponde à função de LDH e papel do lactato.",
        D: "Músculo não tem G6Pase.",
      }
    ),
    q(
      "Qual substrato clássico da gliconeogênese provem da lipólise de triacilgliceróis?",
      [
        "A) Acetil-CoA puro sem carbonos gliconeogênicos líquidos",
        "B) Glicerol convertível a DHAP intermediário da via",
        "C) Palmitato íntegro (C16) como gliconeogênico direto",
        "D) Corpos cetônicos como fonte exclusiva heptática",
      ],
      1,
      3,
      "Glicerol entra como substrato gluconeogênico após lipólise.",
      {
        A: "Duas acetil-CoA não sintetizam glicose líquida de forma clássica.",
        B: "Glicerólise fornece esqueleto de carbono para gluconeogênese.",
        C: "Ácidos graxos não são gliconeogênicos diretos por si.",
        D: "Cetonas não substituem glicerol como exemplo de substrato da aula.",
      }
    ),
    q(
      "A regulacão recíproca insulina/glucagon no hepatócito tende a:",
      [
        "A) Ativar glicólise e gliconeogênese maximamente ao mesmo tempo",
        "B) Manter PFK-1 e F1,6-bifosfatase ambas indiferentes a cAMP",
        "C) Favorecer glicólise sob insulina e gliconeogênese sob glucagon via fosforilações e expressão de enzimas-chave",
        "D) Impedir qualquer síntese de PEP em jejum",
      ],
      2,
      3,
      "Sinais hormonais alternam fluxo entre síntese de glicose e degradação de glicose no fígado.",
      {
        A: "Rotas opostas são reguladas reciprocamente, não simultaneamente no máximo.",
        B: "cAMP/glucagon modula fosforilações relevantes.",
        C: "Descrição coerente com reciprocidade didática.",
        D: "Em jejum, PEPCK e fluxo gluconeogênico aumentam sob glucagon.",
      }
    ),
    q(
      "Em lactente hipoglicêmico, deficiência de gliconeogênese hepática aguda (ex.: falência do bypass) pode associar-se a:",
      [
        "A) Exclusivamente hipercolesterol LDL isolado",
        "B) Incapacidade de gerar glicose a partir de lactato, glicerol e aminoácidos glicogênicos conforme passo bloqueado",
        "C) Excesso garantido de acetil-CoA mitocondrial sem lactato",
        "D) Apenas deficiência de vitamina D",
      ],
      1,
      2,
      "Bloqueio gluconeogênico impede manutenção glicêmica em jejum pediátrico.",
      {
        A: "Dislipidemia não é o núcleo agudo típico.",
        B: "Correto: perda de capacidade de síntese de glicose endógena.",
        C: "Perfil metabólico não se limita a isso nem é garantia de acetil-CoA ‘excesso’ benéfico.",
        D: "Vitamina D não explica hipoglicemia por enzima gluconeogênica.",
      }
    ),
  ],
};

// Continue remaining aulas in second part of file to avoid single huge write - we'll append via run

export { LOTES, buildExplicacao, q, QUESTOES_PATH };
