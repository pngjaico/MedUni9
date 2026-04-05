/**
 * Acrescenta PMH — 14 aulas × 12 cards (10 material + 2 extra).
 * node scripts/append_flashcards_pmh_m1.js
 */
const fs = require('fs');
const path = require('path');
const OUT = path.join(__dirname, '..', 'data', 'flashcards.json');

function c(materia, tema, frente, verso, explicacao, categoria, origem, tags) {
  return { materia, tema, frente, verso, explicacao: explicacao || '', dificuldade: 2, categoria, origem, tags: tags || [] };
}

const LOTS = [
  // pmh_a1
  [
    c('pmh', 'pmh_a1', 'O que ΔG negativo indica em condições fisiológicas?', 'Reação exergônica (espontânea na direção escrita).', 'Velocidade é enzima; ΔG é direção termodinâmica.', 'definicao', 'material', ['delta-g', 'gibbs']),
    c('pmh', 'pmh_a1', 'ΔG informa a velocidade da reação?', 'Não — enzimas regulam taxa; ΔG indica favorabilidade termodinâmica.', '', 'prova', 'material', ['enzima', 'dg']),
    c('pmh', 'pmh_a1', 'Primeira lei da termodinâmica no metabolismo?', 'Conservação de energia — energia transforma-se, não desaparece.', '', 'definicao', 'material', ['primeira-lei']),
    c('pmh', 'pmh_a1', 'Segunda lei: por que a vida precisa de fluxo de energia?', 'Processos espontâneos aumentam entropia global; células mantêm ordem local dissipando calor.', '', 'mecanismo', 'material', ['entropia']),
    c('pmh', 'pmh_a1', 'Função principal do ATP no metabolismo?', 'Acoplar catabolismo exergônico a trabalho celular endergônico.', '', 'definicao', 'material', ['atp']),
    c('pmh', 'pmh_a1', 'NADH e FADH2 carregam o quê para a cadeia respiratória?', 'Elétrons (poder redutor) provenientes de oxidações.', '', 'mecanismo', 'material', ['nadh', 'fadh2']),
    c('pmh', 'pmh_a1', 'NADPH costuma ser usado principalmente em quê?', 'Vias anabólicas e defesa antioxidante (ex.: PPP) — não confundir com NADH energético.', '', 'diferenciacao', 'material', ['nadph']),
    c('pmh', 'pmh_a1', 'Hipóxia: por que aumenta lactato?', 'PDH e cadeia respiratória limitadas; glicólise anaeróbia regenera NAD+ via lactato.', '', 'clinica', 'material', ['lactato', 'hipoxia']),
    c('pmh', 'pmh_a1', 'O que é acoplamento metabólico?', 'Ligar reação endergônica a exergônica (ex.: hidrólise de ATP) sem dissipar só calor.', '', 'definicao', 'material', ['acoplamento']),
    c('pmh', 'pmh_a1', 'Desacoplador mitocondrial: efeito?', 'Dissipa gradiente de prótons — calor sem ATP útil; ↑ consumo de O2.', '', 'clinica', 'material', ['desacoplador']),
    c('pmh', 'pmh_a1', 'Valor aproximado clássico de ΔG°\' da hidrólise do ATP?', 'Ordem de grandeza ~30 kJ/mol (varia com pH/Mg2+; conceito > número exato).', 'Bioquímica (Stryer/Lehninger).', 'prova', 'extra', ['atp', 'energia']),
    c('pmh', 'pmh_a1', 'Catabolismo versus anabolismo em termos de ΔG?', 'Catabolismo libera energia livre globalmente; anabolismo consome (pago por ATP/NADPH).', '', 'diferenciacao', 'extra', ['catabolismo', 'anabolismo']),
  ],
  // pmh_a2
  [
    c('pmh', 'pmh_a2', 'Estado pós-prandial: hormônio predominante?', 'Insulina — favorece armazenamento (glicogênio, lipogênese).', '', 'definicao', 'material', ['insulina']),
    c('pmh', 'pmh_a2', 'Jejum: sinal hormonal típico no fígado?', 'Glucagon ↑ — cAMP, glicogenólise e gliconeogênese.', '', 'mecanismo', 'material', ['glucagon']),
    c('pmh', 'pmh_a2', 'GLUT4 é dependente de insulina onde?', 'Músculo e adipócitos — mobilização vesicular à membrana.', '', 'prova', 'material', ['glut4']),
    c('pmh', 'pmh_a2', 'AMPK detecta o quê?', 'Baixa energia (AMP/ATP alto) — favorece captação e oxidação.', '', 'mecanismo', 'material', ['ampk']),
    c('pmh', 'pmh_a2', 'mTOR integra principalmente quais sinais?', 'Nutrientes e insulina — regula síntese proteica e crescimento.', '', 'definicao', 'material', ['mtor']),
    c('pmh', 'pmh_a2', 'Cortisol sustentado: efeito metabólico típico?', 'Favorece gliconeogênese e proteólise (substrato para glicose).', '', 'clinica', 'material', ['cortisol']),
    c('pmh', 'pmh_a2', 'Catecolaminas agudas: efeito em glicogênio?', 'Glicogenólise e lipólise rápidas.', '', 'mecanismo', 'material', ['catecolaminas']),
    c('pmh', 'pmh_a2', 'Glucagon age mais marcadamente em qual órgão?', 'Fígado (versus insulina pan-tecidal nos alvos).', '', 'prova', 'material', ['glucagon']),
    c('pmh', 'pmh_a2', 'DM2: mecanismo compensatório inicial frequente?', 'Hiperinsulinemia por resistência periférica.', '', 'clinica', 'material', ['dm2']),
    c('pmh', 'pmh_a2', 'Exercício aeróbio prolongado: sensor metabólico ativado?', 'AMPK favorece oxidação mitocondrial.', '', 'mecanismo', 'material', ['exercicio']),
    c('pmh', 'pmh_a2', 'SIRT1 e restrição calórica: papel geral?', 'Sensor de NAD+ ligado a adaptação metabólica e longevidade (contexto pesquisa).', '', 'extra_livro', 'extra', ['sirt1']),
    c('pmh', 'pmh_a2', 'Insulinoma: achado glicêmico típico?', 'Hipoglicemia com hiperinsulinismo inapropriado.', '', 'clinica', 'extra', ['insulinoma']),
  ],
  // pmh_a3
  [
    c('pmh', 'pmh_a3', 'Enzima reguladora principal da glicólise?', 'Fosfofrutoquinase-1 (PFK-1).', '', 'prova', 'material', ['pfk-1']),
    c('pmh', 'pmh_a3', 'Ativador alostérico hepático da PFK-1 citado no material?', 'Frutose-2,6-bifosfato (F2,6BP).', '', 'mecanismo', 'material', ['f26bp']),
    c('pmh', 'pmh_a3', 'Glicólise anaeróbia: função do lactato?', 'Regenerar NAD+ a partir do NADH para manter glicólise.', '', 'mecanismo', 'material', ['lactato']),
    c('pmh', 'pmh_a3', 'Ciclo de Cori: quem produz e quem recicla lactato?', 'Músculo → lactato; fígado → glicose (gliconeogênese).', '', 'definicao', 'material', ['cori']),
    c('pmh', 'pmh_a3', 'Por que gliconeogênese não é glicólise reversa?', 'Passos irreversíveis exigem enzimas de bypass (4 etapas).', '', 'prova', 'material', ['gliconeogenese']),
    c('pmh', 'pmh_a3', 'Qual enzima libera glicose livre ao sangue?', 'Glicose-6-fosfatase — só fígado/rim (hepatócito/córtex renal).', '', 'prova', 'material', ['g6pase']),
    c('pmh', 'pmh_a3', 'Músculo exporta glicose livre?', 'Não — falta G6Pase; glicogênio é uso local.', '', 'diferenciacao', 'material', ['musculo']),
    c('pmh', 'pmh_a3', 'Substratos clássicos da gliconeogênese?', 'Lactato, glicerol, aminoácidos glicogênicos (ex.: alanina).', '', 'definicao', 'material', ['substratos']),
    c('pmh', 'pmh_a3', 'Insulina na gliconeogênese hepática?', 'Reprime (↓ PEPCK etc.); glucagon estimula.', '', 'mecanismo', 'material', ['insulina']),
    c('pmh', 'pmh_a3', 'Balanço energético líquido da gliconeogênese?', 'Consome ATP/GTP — custo energético.', '', 'mecanismo', 'material', ['atp']),
    c('pmh', 'pmh_a3', 'PEP carboxiquinase (PEPCK): papel no bypass?', 'Oxaloacetato → fosfoenolpiruvato.', '', 'mecanismo', 'extra', ['pepck']),
    c('pmh', 'pmh_a3', 'Piruvato quinase: por que irreversível?', 'Alto ΔG negativo na direção piruvato; requer via alternativa para gliconeogênese.', '', 'prova', 'extra', ['piruvato-quinase']),
  ],
  // pmh_a4
  [
    c('pmh', 'pmh_a4', 'Piruvato desidrogenase converte piruvato em quê?', 'Acetil-CoA + CO2 + NADH (mitocôndria).', '', 'mecanismo', 'material', ['pdh']),
    c('pmh', 'pmh_a4', 'Cofator de PDH frequentemente citado em deficiência/alcoholismo?', 'Tiamina (B1).', '', 'clinica', 'material', ['tiamina']),
    c('pmh', 'pmh_a4', 'Produto energético direto do ciclo de Krebs além de NADH/FADH2?', 'GTP (substrato nível sustrato fosforilação).', '', 'prova', 'material', ['krebs', 'gtp']),
    c('pmh', 'pmh_a4', 'Destino dos elétrons de NADH/FADH2 na mitocôndria?', 'Cadeia respiratória até O2 com bombeamento de prótons.', '', 'mecanismo', 'material', ['etc']),
    c('pmh', 'pmh_a4', 'ATP sintase usa o quê para fosforilar ADP?', 'Fluxo de H+ de volta à matriz (quimiosmose).', '', 'mecanismo', 'material', ['atp-sintase']),
    c('pmh', 'pmh_a4', 'Rendimento aproximado por NADH mitocondrial?', '~2,5 ATP; FADH2 ~1,5 (valores didáticos).', '', 'prova', 'material', ['rendimento']),
    c('pmh', 'pmh_a4', 'Oligomicina inibe o quê?', 'ATP sintase (F0).', '', 'clinica', 'material', ['oligomicina']),
    c('pmh', 'pmh_a4', 'Cianeto age principalmente onde?', 'Inibe cadeia respiratória (complexo IV — uso de O2).', '', 'clinica', 'material', ['cianeto']),
    c('pmh', 'pmh_a4', 'NADH citoplasmático da glicólise: problema?', 'Não atravessa membrana livremente — shuttles (malato-aspartato, glicerol-3P).', '', 'prova', 'material', ['shuttles']),
    c('pmh', 'pmh_a4', 'Desacoplantes como DNP: mecanismo?', 'Transportam prótons pela membrana dissipando gradiente — calor sem ATP.', '', 'mecanismo', 'material', ['dnp']),
    c('pmh', 'pmh_a4', 'Complexo II: substrato de entrada na ETC?', 'FADH2 (succinato desidrogenase) — entra no Q.', '', 'mecanismo', 'extra', ['complexo-ii']),
    c('pmh', 'pmh_a4', 'Inibidor do complexo I citado em provas (rotenona)?', 'Bloqueia fluxo de elétrons desde NADH.', '', 'extra_livro', 'extra', ['rotenona']),
  ],
  // pmh_a5
  [
    c('pmh', 'pmh_a5', 'Glicogênio hepático versus muscular: destino da glicose?', 'Fígado exporta glicose (G6Pase); músculo só uso local.', '', 'diferenciacao', 'material', ['glicogenio']),
    c('pmh', 'pmh_a5', 'Enzima-chave da glicogenólise?', 'Glicogênio fosforilase.', '', 'prova', 'material', ['fosforilase']),
    c('pmh', 'pmh_a5', 'Glicogênio sintase forma ligações?', 'α-1,4; ramificação α-1,6 pela enzima ramificadora.', '', 'mecanismo', 'material', ['sintase']),
    c('pmh', 'pmh_a5', 'Doadora de glicose na glicogênese?', 'UDP-glicose.', '', 'definicao', 'material', ['udp-glicose']),
    c('pmh', 'pmh_a5', 'Via das pentoses-fosfato: produto principal da fase oxidativa?', 'NADPH.', '', 'prova', 'material', ['ppp', 'nadph']),
    c('pmh', 'pmh_a5', 'PPP gera ATP diretamente?', 'Não — NADPH e ribose-5P (não é via ATP da glicólise).', '', 'prova', 'material', ['ppp']),
    c('pmh', 'pmh_a5', 'Enzima inicial da fase oxidativa do PPP?', 'Glicose-6-fosfato desidrogenase (G6PD).', '', 'prova', 'material', ['g6pd']),
    c('pmh', 'pmh_a5', 'Deficiência de G6PD: mecanismo da hemólise?', 'NADPH insuficiente — glutationa reduzida não neutraliza peróxidos.', '', 'clinica', 'material', ['g6pd']),
    c('pmh', 'pmh_a5', 'Herança da deficiência de G6PD?', 'Ligada ao X.', '', 'prova', 'material', ['heranca']),
    c('pmh', 'pmh_a5', 'Insulina na glicogênese?', 'Ativa sintase (desfosforilação) e inibe fosforilase.', '', 'mecanismo', 'material', ['insulina']),
    c('pmh', 'pmh_a5', 'Favismo relaciona-se a quê?', 'Hemólise em G6PD deficiente após exposição a favas/oxidantes.', '', 'clinica', 'extra', ['favismo']),
    c('pmh', 'pmh_a5', 'NADPH além do PPP: uso em eritrócitos?', 'Mantém glutationa reduzida (defesa antioxidante).', '', 'mecanismo', 'extra', ['glutationa']),
  ],
  // pmh_a6
  [
    c('pmh', 'pmh_a6', 'GLUT1 predomina onde?', 'Hemácias e barreira hematoencefálica — captação constitutiva de glicose.', '', 'prova', 'material', ['glut1']),
    c('pmh', 'pmh_a6', 'Cérebro depende de insulina para captar glicose basal?', 'Não — GLUT1 constitutivo; hipoglicemia neurológica com limiar típico ~70 mg/dL.', '', 'clinica', 'material', ['hipoglicemia']),
    c('pmh', 'pmh_a6', 'HbA1c reflete o quê?', 'Média glicêmica ~3 meses (glicação da hemoglobina).', '', 'definicao', 'material', ['hba1c']),
    c('pmh', 'pmh_a6', 'HbA1c pode ser falsamente baixa em quais situações?', 'Hemólise, anemia (menor tempo de vida do eritrócito).', '', 'clinica', 'material', ['hba1c']),
    c('pmh', 'pmh_a6', 'Glicemia de jejum ≥126 mg/dL (adulto): significado clássico?', 'Critério diagnóstico de DM (confirmar com repetição/segundo teste).', '', 'prova', 'material', ['dm']),
    c('pmh', 'pmh_a6', 'Cetoacidose diabética versus EHH: cetonas?', 'CAD — elevadas; EHH — ausentes ou leves.', '', 'diferenciacao', 'material', ['cad', 'ehh']),
    c('pmh', 'pmh_a6', 'Critério de Whipple para hipoglicemia?', 'Sintomas com glicemia baixa, alívio com glicose.', '', 'prova', 'material', ['whipple']),
    c('pmh', 'pmh_a6', 'Insulina inibe lipólise?', 'Sim — favorece armazenamento.', '', 'mecanismo', 'material', ['insulina']),
    c('pmh', 'pmh_a6', 'SGLT1 participa de quê na absorção?', 'Transporte intestinal de glicose/galactose com Na+.', '', 'definicao', 'material', ['sglt1']),
    c('pmh', 'pmh_a6', 'Hiperglicemia do alba: fatores hormonais?', '↑ contrarreguladores noturnos (GH, cortisol) com resistência relativa à insulina.', '', 'clinica', 'material', ['alba']),
    c('pmh', 'pmh_a6', 'TTGO: uso principal além do DM?', 'Rastreamento/diagnóstico de diabetes gestacional (limiares específicos).', '', 'clinica', 'extra', ['ttgo']),
    c('pmh', 'pmh_a6', 'HbA1c pode diagnosticar DM sem jejum?', 'Sim em adultos sem condições que alterem hemácias (pela diretriz vigente).', '', 'prova', 'extra', ['diagnostico']),
  ],
  // pmh_a7
  [
    c('pmh', 'pmh_a7', 'CPT I: função e localização regulatória?', 'Mitocôndria externa — forma acilcarnitina (transporte de ácidos graxos longos).', '', 'prova', 'material', ['cpt1']),
    c('pmh', 'pmh_a7', 'Malonil-CoA inibe o quê?', 'CPT I — síntese e oxidação de AG não maximizam juntos no mesmo tecido.', '', 'mecanismo', 'material', ['malonil-coa']),
    c('pmh', 'pmh_a7', 'Produto a cada volta de beta-oxidação?', 'Acetil-CoA + NADH + FADH2 (e acil-CoA encurtado).', '', 'mecanismo', 'material', ['beta-oxidacao']),
    c('pmh', 'pmh_a7', 'Ácidos graxos ímpares terminam em?', 'Propionil-CoA → succinil-CoA (TCA).', '', 'prova', 'material', ['impares']),
    c('pmh', 'pmh_a7', 'Enzima limitante da lipogênese?', 'Acetil-CoA carboxilase (ACC) → malonil-CoA.', '', 'prova', 'material', ['acc']),
    c('pmh', 'pmh_a7', 'Produto final da síntese de AG em humanos (cadeia saturada comum)?', 'Palmitato (C16).', '', 'definicao', 'material', ['palmitato']),
    c('pmh', 'pmh_a7', 'NADPH para lipogênese vem principalmente de?', 'PPP e shuttle do malato (visão integrada).', '', 'mecanismo', 'material', ['nadph']),
    c('pmh', 'pmh_a7', 'Cetogênese hepática produz quais corpos cetônicos?', 'Acetoacetato, beta-hidroxibutirato, acetona.', '', 'definicao', 'material', ['cetose']),
    c('pmh', 'pmh_a7', 'Cérebro usa cetônicos quando?', 'Jejum prolongado — combustível alternativo à glicose.', '', 'clinica', 'material', ['cerebro']),
    c('pmh', 'pmh_a7', 'Cetose fisiológica versus cetoacidose diabética?', 'CAD inclui hiperglicemia e ânion gap com deficiência de insulina.', '', 'diferenciacao', 'material', ['cad']),
    c('pmh', 'pmh_a7', 'Peroxissomos oxidam AG muito longos até?', 'Encurtam para continuar na mitocôndria (visão geral de cadeia longa).', '', 'extra_livro', 'extra', ['peroxissomo']),
    c('pmh', 'pmh_a7', 'Fibratos: alvo molecular principal?', 'Agonismo PPARα — ↑ clearance de TG.', '', 'clinica', 'extra', ['fibratos']),
  ],
  // pmh_a8
  [
    c('pmh', 'pmh_a8', 'Enzima limitante da síntese de colesterol?', 'HMG-CoA redutase — alvo das estatinas.', '', 'prova', 'material', ['hmg-coa']),
    c('pmh', 'pmh_a8', 'Função principal do LDL?', 'Entregar colesterol periférico via receptor LDL (LDLR).', '', 'definicao', 'material', ['ldl']),
    c('pmh', 'pmh_a8', 'HDL: conceito funcional central?', 'Transporte reverso de colesterol para o fígado.', '', 'definicao', 'material', ['hdl']),
    c('pmh', 'pmh_a8', 'Quilomícrons transportam principalmente?', 'Triglicerídeos dietéticos (intestino).', '', 'definicao', 'material', ['quilomicrons']),
    c('pmh', 'pmh_a8', 'VLDL exporta o quê do fígado?', 'Triglicerídeos endógenos.', '', 'definicao', 'material', ['vldl']),
    c('pmh', 'pmh_a8', 'Ácidos biliares derivam de?', 'Colesterol hepático — ciclo entero-hepático.', '', 'mecanismo', 'material', ['acidos-biliares']),
    c('pmh', 'pmh_a8', 'Secuestrantes de ácidos biliares reduzem LDL como?', '↑ conversão hepática de colesterol em ácidos biliares.', '', 'mecanismo', 'material', ['secuestrantes']),
    c('pmh', 'pmh_a8', 'Macrofago espumoso vem de?', 'Fagocitose de LDL oxidado na parede vascular.', '', 'clinica', 'material', ['aterosclerose']),
    c('pmh', 'pmh_a8', 'LCAT: papel no HDL?', 'Esterifica colesterol livre no HDL.', '', 'definicao', 'material', ['lcat']),
    c('pmh', 'pmh_a8', 'CETP faz o quê?', 'Troca ésteres de colesterol entre lipoproteínas.', '', 'definicao', 'material', ['cetp']),
    c('pmh', 'pmh_a8', 'Inibidores de PCSK9 reduzem LDL como?', '↑ número de LDLR na superfície hepática.', '', 'clinica', 'extra', ['pcsk9']),
    c('pmh', 'pmh_a8', 'Ezetimiba inibe absorção intestinal de colesterol via?', 'NPC1L1.', '', 'mecanismo', 'extra', ['ezetimiba']),
  ],
  // pmh_a9
  [
    c('pmh', 'pmh_a9', 'Quando a fórmula de Friedewald para LDL falha?', 'TG muito altas (ex.: >400 mg/dL) ou presença marcada de quilomícron.', '', 'prova', 'material', ['friedewald']),
    c('pmh', 'pmh_a9', 'LDL direto é preferido quando?', 'Hipertrigliceridemia severa invalida cálculo.', '', 'clinica', 'material', ['ldl-direto']),
    c('pmh', 'pmh_a9', 'TG >1000 mg/dL: risco agudo clássico?', 'Pancreatite.', '', 'clinica', 'material', ['pancreatite']),
    c('pmh', 'pmh_a9', 'Estatinas: mecanismo hipolipemiante?', 'Inibem HMG-CoA redutase — ↓ síntese de colesterol.', '', 'mecanismo', 'material', ['estatina']),
    c('pmh', 'pmh_a9', 'Fibratos: receptor/transcrição?', 'PPARα — reduzem TG e aumentam HDL (visão geral).', '', 'mecanismo', 'material', ['fibratos']),
    c('pmh', 'pmh_a9', 'Ômega-3 icosapento: uso lipídico comum?', 'Reduz TG hepáticos (indicações específicas por produto).', '', 'clinica', 'material', ['omega3']),
    c('pmh', 'pmh_a9', 'Hipertrigliceridemia secundária: causas citadas?', 'Álcool, hipotireoidismo, gravidez, alguns fármacos.', '', 'clinica', 'material', ['secundaria']),
    c('pmh', 'pmh_a9', 'FH: suspeita clínica?', 'LDL muito alto, história familiar, xantomas tendinosos.', '', 'clinica', 'material', ['fh']),
    c('pmh', 'pmh_a9', 'ApoB: o que representa em risco?', 'Número de partículas aterogênicas (VLDL/LDL).', '', 'definicao', 'material', ['apob']),
    c('pmh', 'pmh_a9', 'Lp(a): característica?', 'Partícula aterogênica independente com componente proteico específico.', '', 'definicao', 'material', ['lpa']),
    c('pmh', 'pmh_a9', 'Meta de LDL em alto risco cardiovascular: lógica?', 'Quanto maior o risco basal, menor meta (diretrizes ESC/ACC/SBC).', '', 'clinica', 'extra', ['metas']),
    c('pmh', 'pmh_a9', 'Bempedoico ácido: mecanismo distinto da estatina?', 'Inibe ATP citrato liase hepática — ↓ colesterol (alternativa em intolerância).', '', 'extra_livro', 'extra', ['bempedoico']),
  ],
  // pmh_a10
  [
    c('pmh', 'pmh_a10', 'ALT (TGP) é mais específica de qual órgão?', 'Fígado.', '', 'prova', 'material', ['alt']),
    c('pmh', 'pmh_a10', 'AST (TGO) também eleva em?', 'Músculo, miocárdio — menos específica que ALT para hepatopatia isolada.', '', 'diferenciacao', 'material', ['ast']),
    c('pmh', 'pmh_a10', 'Relação AST/ALT >2 sugere padrão clássico associado a?', 'Doença alcoólica hepática (entre outras causas).', '', 'clinica', 'material', ['alcool']),
    c('pmh', 'pmh_a10', 'Amonia neurotóxica deve ser convertida principalmente em?', 'Ureia no fígado (ciclo da ureia).', '', 'mecanismo', 'material', ['amonia']),
    c('pmh', 'pmh_a10', 'Primeira enzima limitante do ciclo da ureia (mitocôndria)?', 'Carbamoil fosfato sintetase I (CPS I).', '', 'prova', 'material', ['cps1']),
    c('pmh', 'pmh_a10', 'Deficiência de OTC: herança?', 'Ligada ao X — hiperamonemia.', '', 'clinica', 'material', ['otc']),
    c('pmh', 'pmh_a10', 'Ciclo glicose-alanina: função?', 'Exportar carbono de aminoácidos do músculo ao fígado para gliconeogênese.', '', 'definicao', 'material', ['alanina']),
    c('pmh', 'pmh_a10', 'Arginase produz o quê a partir de arginina?', 'Ornitina + ureia (último passo do ciclo da ureia).', '', 'mecanismo', 'material', ['arginase']),
    c('pmh', 'pmh_a10', 'Encefalopatia hepática: relação com amônia?', 'Falência na conversão a ureia e shunts porto-sistêmicos elevam amônia.', '', 'clinica', 'material', ['ehe']),
    c('pmh', 'pmh_a10', 'CK elevada sugere lesão de?', 'Músculo esquelético (rabdomiólise) — diferencial com hepatite pura.', '', 'clinica', 'material', ['ck']),
    c('pmh', 'pmh_a10', 'N-acetilglutamato: papel em CPS I?', 'Cofator alostérico essencial para ativação da CPS I mitocondrial.', '', 'extra_livro', 'extra', ['nag']),
    c('pmh', 'pmh_a10', 'Shunt porto-sistêmico: efeito na amônia?', 'Aumenta amônia sistêmica por bypass do metabolismo hepático.', '', 'clinica', 'extra', ['shunt']),
  ],
  // pmh_a11
  [
    c('pmh', 'pmh_a11', 'Albumina baixa no crítico significa só desnutrição?', 'Não — inflamação, capillar leak e síntese reduzida.', '', 'clinica', 'material', ['albumina']),
    c('pmh', 'pmh_a11', 'Pré-albumina (transtirretina): vantagem sobre albumina?', 'Meia-vida curta — reflete mudanças mais rápidas (com cautelas).', '', 'definicao', 'material', ['pre-albumina']),
    c('pmh', 'pmh_a11', 'PCR: tipo de proteína de fase aguda?', 'Sobe rapidamente com IL-6 na inflamação.', '', 'definicao', 'material', ['pcr']),
    c('pmh', 'pmh_a11', 'Anemia da doença crônica: mecanismo do ferro?', 'Hepcidina ↑ — ferro retido em macrófagos.', '', 'mecanismo', 'material', ['hepcidina']),
    c('pmh', 'pmh_a11', 'PKU: defeito enzimático?', 'Fenilalanina hidroxilase — acúmulo de fenilalanina.', '', 'clinica', 'material', ['pku']),
    c('pmh', 'pmh_a11', 'Homocistinúria: achado ocular clássico?', 'Ectopia lenticular.', '', 'clinica', 'material', ['homocistinuria']),
    c('pmh', 'pmh_a11', 'Ureia (BUN) depende de quê além da função renal?', 'Ingesta proteica e hidratação.', '', 'clinica', 'material', ['bun']),
    c('pmh', 'pmh_a11', 'Gamopatia monoclonal: exame inicial?', 'Eletroforese de proteínas séricas e imunofixação.', '', 'clinica', 'material', ['eletroforese']),
    c('pmh', 'pmh_a11', 'Balanço nitrogenal negativo indica?', 'Catabolismo proteico líquido (trauma, sepse).', '', 'clinica', 'material', ['balanco-n']),
    c('pmh', 'pmh_a11', 'Ferritina alta isoladamente interpreta-se como?', 'Pode ser reagente de fase aguda — não só sobrecarga de ferro.', '', 'prova', 'material', ['ferritina']),
    c('pmh', 'pmh_a11', 'Ornitina transcarbamoilase (OTC): localização?', 'Mitocôndria — passo após CPS I no ciclo da ureia.', '', 'mecanismo', 'extra', ['otc']),
    c('pmh', 'pmh_a11', 'Maple syrup urine disease: substratos acumulados?', 'Aminoácidos de cadeia ramificada (enzimas desidrogenases).', '', 'clinica', 'extra', ['msud']),
  ],
  // pmh_a12
  [
    c('pmh', 'pmh_a12', 'PRPP: papel nas vias de nucleotídeos?', 'Ativador comum (fosforibosil pirofosfato).', '', 'prova', 'material', ['prpp']),
    c('pmh', 'pmh_a12', 'Via de novo de purinas: precursor central?', 'IMP antes de AMP e GMP.', '', 'definicao', 'material', ['purinas']),
    c('pmh', 'pmh_a12', 'Enzima limitante da síntese de pirimidinas (citoplasma)?', 'CAD — CPS II (não confundir com CPS I mitocondrial da ureia).', '', 'prova', 'material', ['cad']),
    c('pmh', 'pmh_a12', 'Alopurinol inibe qual enzima?', 'Xantina oxidase — ↓ ácido úrico.', '', 'mecanismo', 'material', ['alopurinol']),
    c('pmh', 'pmh_a12', '5-FU: mecanismo clássico?', 'Inibe timidilato sintase (dTMP a partir de dUMP).', '', 'mecanismo', 'material', ['5fu']),
    c('pmh', 'pmh_a12', 'Metotrexato: alvo principal?', 'Inibe DHFR — síntese de THF para timidina e purinas.', '', 'mecanismo', 'material', ['mtx']),
    c('pmh', 'pmh_a12', 'Lesch-Nyhan: defeito?', 'HGPRT da via salvage — hiperuricemia e sintomas neurológicos.', '', 'clinica', 'material', ['lesch-nyhan']),
    c('pmh', 'pmh_a12', 'Ribonucleotídeo redutase converte?', 'NDP → dNDP (precursores de DNA).', '', 'mecanismo', 'material', ['rnr']),
    c('pmh', 'pmh_a12', 'Hiperuricemia implica gota sempre?', 'Não — cristais + inflamação definem crise de gota.', '', 'prova', 'material', ['gota']),
    c('pmh', 'pmh_a12', 'Hidroxiureia: alvo citado?', 'Ribonucleotídeo redutase.', '', 'clinica', 'material', ['hidroxiureia']),
    c('pmh', 'pmh_a12', 'Ralmitrequir (ou análogos): contexto oncológico?', 'Inibidores de síntese de nucleotídeos — uso conforme protocolo.', '', 'extra_livro', 'extra', ['onco']),
    c('pmh', 'pmh_a12', 'Ácido úrico forma predominante no plasma?', 'Uratos (forma ionizada), pH influencia precipitação.', '', 'mecanismo', 'extra', ['urato']),
  ],
  // pmh_a13
  [
    c('pmh', 'pmh_a13', 'Fígado como hub metabólico: cite duas funções.', 'Gliconeogênese, ciclo da ureia, cetogênese, VLDL (quais duas forem pedidas).', '', 'definicao', 'material', ['figado']),
    c('pmh', 'pmh_a13', 'Músculo exporta glicose livre?', 'Não — sem G6Pase; exporta lactato e alanina.', '', 'prova', 'material', ['musculo']),
    c('pmh', 'pmh_a13', 'Ciclo de Cori liga quais tecidos?', 'Músculo (lactato) e fígado (glicose).', '', 'definicao', 'material', ['cori']),
    c('pmh', 'pmh_a13', 'Adipócito: hormônio principal que inibe lipólise?', 'Insulina.', '', 'mecanismo', 'material', ['lipolise']),
    c('pmh', 'pmh_a13', 'Cérebro em jejum prolongado usa o quê além de glicose?', 'Corpos cetônicos.', '', 'mecanismo', 'material', ['cerebro']),
    c('pmh', 'pmh_a13', 'Rim contribui para gliconeogênese em jejum?', 'Sim — córtex (glutamina entre substratos).', '', 'definicao', 'material', ['rim']),
    c('pmh', 'pmh_a13', 'Glicerol da lipólise vira?', 'Substrato gluconeogênico no fígado.', '', 'mecanismo', 'material', ['glicerol']),
    c('pmh', 'pmh_a13', 'Insuficiência hepática: por que hipoglicemia?', '↓ glicogenólise/gliconeogênese e disfunção global.', '', 'clinica', 'material', ['ih']),
    c('pmh', 'pmh_a13', 'Trauma aumenta catabolismo por quê?', '↑ cortisol/catecolaminas — proteólise e hiperglicemia de estresse.', '', 'clinica', 'material', ['trauma']),
    c('pmh', 'pmh_a13', 'Gravidez: resistência insulínica fisiológica?', 'Sim — adaptação materno-fetal.', '', 'clinica', 'material', ['gestacao']),
    c('pmh', 'pmh_a13', 'Ciclo de Cahill refere-se a?', 'Integração proteína-glicose no catabolismo (visão conceitual).', '', 'extra_livro', 'extra', ['cahill']),
    c('pmh', 'pmh_a13', 'Lactato hepático na sepse: origem periférica?', '↑ glicólise aeróbia/anaeróbia tecidual com clearance hepática limitada.', '', 'clinica', 'extra', ['sepse']),
  ],
  // pmh_a14
  [
    c('pmh', 'pmh_a14', 'Jejum curto: fonte principal de glicose inicial?', 'Glicogenólise hepática.', '', 'mecanismo', 'material', ['jejum']),
    c('pmh', 'pmh_a14', 'Jejum prolongado: após esgotar glicogênio hepático?', '↑ gliconeogênese e cetogênese; cérebro usa cetônicos.', '', 'mecanismo', 'material', ['cetose']),
    c('pmh', 'pmh_a14', 'Exercício sprint: fonte energética dominante?', 'Glicogenólise anaeróbia + lactato.', '', 'clinica', 'material', ['sprint']),
    c('pmh', 'pmh_a14', 'Maratona: fadiga por depleção comum?', 'Glicogênio muscular e hidratação.', '', 'clinica', 'material', ['maratona']),
    c('pmh', 'pmh_a14', 'Sepse: padrão glicêmico típico?', 'Hiperglicemia de estresse com resistência insulínica.', '', 'clinica', 'material', ['sepse']),
    c('pmh', 'pmh_a14', 'Síndrome de realimentação: íons críticos?', 'Fosfato, potássio e magnésio intracelulares caem com entrada de glicose.', '', 'clinica', 'material', ['realimentacao']),
    c('pmh', 'pmh_a14', 'Por que iniciar calorias baixas no realimentando desnutrido?', 'Evitar choque de insulina e queda brusca de fosfato.', '', 'prova', 'material', ['realimentacao']),
    c('pmh', 'pmh_a14', 'Efeito Warburg: característica metabólica tumoral?', 'Glicólise aeróbia mesmo com O2 disponível — lactato tumoral.', '', 'definicao', 'material', ['warburg']),
    c('pmh', 'pmh_a14', 'Cachexia oncológica: mediadores inflamatórios citados?', 'TNF-α, IL-6 — anorexia e catabolismo.', '', 'mecanismo', 'material', ['cachexia']),
    c('pmh', 'pmh_a14', 'Nutrição enteral precoce no trauma: benefício?', 'Melhora desfecho infeccioso e integridade de mucosa.', '', 'clinica', 'material', ['nutricao']),
    c('pmh', 'pmh_a14', 'Treino aeróbio crônico aumenta o quê nas fibras?', 'Mitocôndrias e enzimas oxidativas (adaptação).', '', 'mecanismo', 'extra', ['treino']),
    c('pmh', 'pmh_a14', 'GLP-1 e metabolismo: efeito principal?', '↑ insulina glicose-dependente e saciedade — contexto DM2/obesidade.', '', 'extra_livro', 'extra', ['glp1']),
  ],
];

const raw = fs.readFileSync(OUT, 'utf8');
const data = JSON.parse(raw);
let maxId = 0;
for (const f of data.flashcards) if (f.id > maxId) maxId = f.id;
let id = maxId + 1;
for (const lot of LOTS) {
  if (lot.length !== 12) {
    console.error('Tamanho inválido', lot[0]?.tema, lot.length);
    process.exit(1);
  }
  for (const x of lot) data.flashcards.push({ ...x, id: id++ });
}
fs.writeFileSync(OUT, JSON.stringify(data, null, 2), 'utf8');
console.log('OK total', data.flashcards.length, 'último id', id - 1);
