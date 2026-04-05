/** FP3 fp3_a1–a8 × 12 — materia fisiopato3 — node scripts/append_flashcards_fp3_m3_part1.js */
const fs = require('fs');
const path = require('path');
const OUT = path.join(__dirname, '..', 'data', 'flashcards.json');
function c(t, f, v, e, cat, o, tags) {
  return { materia: 'fisiopato3', tema: t, frente: f, verso: v, explicacao: e || '', dificuldade: 2, categoria: cat, origem: o, tags: tags || [] };
}
const LOTS = [
  [ // fp3_a1
    c('fp3_a1', 'Lesão celular reversível: exemplo?', 'Edema celular, degeneração hidrópica.', '', 'definicao', 'material', ['lesao']),
    c('fp3_a1', 'Necrose vs apoptose inflamatória?', 'Necrose sim; apoptose geralmente não.', '', 'diferenciacao', 'material', ['necrose']),
    c('fp3_a1', 'Lipofuscina?', 'Pigmento de desgaste residual (envelhecimento).', '', 'definicao', 'material', ['lipofuscina']),
    c('fp3_a1', 'Calcificação distrófica?', 'Tecido danificado normocalcemia.', '', 'definicao', 'material', ['distrofica']),
    c('fp3_a1', 'Calcificação metastática?', 'Hipercalcemia — rins, pulmão.', '', 'definicao', 'material', ['metastatica']),
    c('fp3_a1', 'Esteatose hepática?', 'Acúmulo de triglicerídeos nos hepatócitos.', '', 'clinica', 'material', ['esteatose']),
    c('fp3_a1', 'Adaptação hiperplasia?', 'Aumento número de células.', '', 'definicao', 'material', ['hiperplasia']),
    c('fp3_a1', 'Metaplasia?', 'Troca de um epitélio maduro por outro.', '', 'definicao', 'material', ['metaplasia']),
    c('fp3_a1', 'Displasia?', 'Proliferação com atipia — pré-neoplásico.', '', 'definicao', 'material', ['displasia']),
    c('fp3_a1', 'Hipotrofia?', 'Redução tamanho celular/órgão por uso.', '', 'definicao', 'material', ['hipotrofia']),
    c('fp3_a1', 'Corpora amylacea?', 'Depósitos proteicos com idade (cérebro/próstata).', '', 'extra_livro', 'extra', ['amyloid']),
    c('fp3_a1', 'Ferro hemosiderina?', 'Degradação hemoglobina — sobrecarga ferro.', '', 'extra', 'extra', ['hemosiderina']),
  ],
  [ // fp3_a2
    c('fp3_a2', 'Edema: Starling?', 'Hidrostático vs oncótico transudado.', '', 'mecanismo', 'material', ['edema']),
    c('fp3_a2', 'Hiperemia ativa?', 'Aumento fluxo arterial (inflamação).', '', 'definicao', 'material', ['hiperemia']),
    c('fp3_a2', 'Congestão venosa?', 'Acúmulo sangue venoso — cianose hepática.', '', 'definicao', 'material', ['congestao']),
    c('fp3_a2', 'Hemorragia petequial?', 'Vasos pequenos — plaquetopenia.', '', 'clinica', 'material', ['petequia']),
    c('fp3_a2', 'Trombose Virchow triad?', 'Estase, lesão endotelial, hipercoagulabilidade.', '', 'prova', 'material', ['trombose']),
    c('fp3_a2', 'Êmbolo vs trombo?', 'Êmbolo circula até impactar; trombo local.', '', 'diferenciacao', 'material', ['embolia']),
    c('fp3_a2', 'Infarto vermelho?', 'Órgão dupla circulação com colaterais (pulmão).', '', 'definicao', 'material', ['infarto']),
    c('fp3_a2', 'Infarto branco?', 'Órgão terminais (rim, baço).', '', 'definicao', 'material', ['infarto']),
    c('fp3_a2', 'Choque distributivo?', 'Distribuição anormal volume (sepse, anafilaxia).', '', 'clinica', 'material', ['choque']),
    c('fp3_a2', 'DIC?', 'Consumo coagulação + sangramento.', '', 'clinica', 'material', ['dic']),
    c('fp3_a2', 'Waterhouse-Friderichsen?', 'Hemorragia adrenal em meningococcemia.', '', 'extra_livro', 'extra', ['waterhouse']),
    c('fp3_a2', 'Síndrome compartimental?', 'Pressão fechada > perfusão — fasciotomia.', '', 'extra', 'extra', ['compartimento']),
  ],
  [ // fp3_a3
    c('fp3_a3', 'Biodisponibilidade oral?', 'Fração que atinge circulação sistêmica.', '', 'definicao', 'material', ['bio']),
    c('fp3_a3', 'Meia-vida (t1/2)?', 'Tempo para cair 50% concentração.', '', 'definicao', 'material', ['meia-vida']),
    c('fp3_a3', 'Clearance?', 'Volume plasma depurado por tempo.', '', 'definicao', 'material', ['clearance']),
    c('fp3_a3', 'Vd: significado?', 'Volume aparente de distribuição.', '', 'definicao', 'material', ['vd']),
    c('fp3_a3', 'CYP450: local principal?', 'Hepatócitos — metabolismo fase I.', '', 'definicao', 'material', ['cyp']),
    c('fp3_a3', 'Inibidor competitivo?', 'Mesmo sítio receptor — aumenta concentração livre.', '', 'mecanismo', 'material', ['inibidor']),
    c('fp3_a3', 'Efeito de primeiro passe?', 'Metabolismo intestinal/hepático reduz biodisponibilidade.', '', 'mecanismo', 'material', ['primeiro-passe']),
    c('fp3_a3', 'Índice terapêutico?', 'TD50/ED50 — margem segurança.', '', 'definicao', 'material', ['indice']),
    c('fp3_a3', 'Tolerância farmacológica?', 'Menor efeito com mesma dose.', '', 'definicao', 'material', ['tolerancia']),
    c('fp3_a3', 'Antagonismo farmacológico?', 'Competitivo vs não competitivo.', '', 'diferenciacao', 'material', ['antagonismo']),
    c('fp3_a3', 'Curva dose-resposta graduada?', 'Receptores variados na população celular.', '', 'extra_livro', 'extra', ['dose-resposta']),
    c('fp3_a3', 'PK em idoso: mudança?', '↓massa hepática/renal — ajustar dose.', '', 'extra', 'extra', ['idoso']),
  ],
  [ // fp3_a4
    c('fp3_a4', 'Noradrenalina: receptor principal vascular?', 'α1 vasoconstrição.', '', 'mecanismo', 'material', ['noradrenalina']),
    c('fp3_a4', 'Adrenalina em anafilaxia?', 'α + β — broncodilatação e pressão.', '', 'clinica', 'material', ['anafilaxia']),
    c('fp3_a4', 'Salbutamol: seletividade?', 'β2 pulmonar (asma).', '', 'clinica', 'material', ['beta2']),
    c('fp3_a4', 'Propranolol: uso?', 'Arritmias, HTN — não asmático (broncoespasmo).', '', 'clinica', 'material', ['propranolol']),
    c('fp3_a4', 'Fenilefrina: classe?', 'Agonista α — descongestionante nasal.', '', 'definicao', 'material', ['fenilefrina']),
    c('fp3_a4', 'Dopamina baixa dose?', 'Dilata renal (dose dependente).', '', 'mecanismo', 'material', ['dopamina']),
    c('fp3_a4', 'Clonidina: mecanismo?', 'Agonista α2 central — reduz SNA.', '', 'mecanismo', 'material', ['clonidina']),
    c('fp3_a4', 'Dobutamina: uso?', 'Choque cardiogênico — inotrópico β1.', '', 'clinica', 'material', ['dobutamina']),
    c('fp3_a4', 'Mirabegron?', 'Agonista β3 bexiga — hiperatividade.', '', 'clinica', 'material', ['mirabegron']),
    c('fp3_a4', 'Cocaina: toxidade CV?', 'Bloqueia recaptação monoaminas — vasoconstrição.', '', 'clinica', 'material', ['cocaina']),
    c('fp3_a4', 'Fentolamina: uso?', 'Reversão extravasamento α-agonistas (contexto).', '', 'extra_livro', 'extra', ['fentolamina']),
    c('fp3_a4', 'Terbutalina na prevenção parto prematuro?', 'Tocolítico β2 (uso com cautela).', '', 'extra', 'extra', ['tocolise']),
  ],
  [ // fp3_a5
    c('fp3_a5', 'Pilocarpina: receptor?', 'Muscarínico — glaucoma, xerostomia.', '', 'clinica', 'material', ['pilocarpina']),
    c('fp3_a5', 'Atropina: uso?', 'Braquicardia, intoxicação anticolinésterásicos.', '', 'clinica', 'material', ['atropina']),
    c('fp3_a5', 'Ipratrópio inalado?', 'Antimuscarínico — DPOC/asma.', '', 'clinica', 'material', ['ipratropio']),
    c('fp3_a5', 'Neostigmina: classe?', 'Anticolinésterásico — miastenia, reversão bloqueio neuromuscular.', '', 'clinica', 'material', ['neostigmina']),
    c('fp3_a5', 'SLUDGE em intoxicação colinérgica?', 'Salivação, lacrimejamento, urinação, defecação, GI, emese.', '', 'clinica', 'material', ['colinergico']),
    c('fp3_a5', 'Antídoto organofosforado?', 'Atropina + pralidoxima (reenativa colinesterase).', '', 'clinica', 'material', ['organofosforado']),
    c('fp3_a5', 'Tiotrópio vs ipratrópio?', 'LAMA longa ação vs SAMA curta.', '', 'diferenciacao', 'material', ['lamas']),
    c('fp3_a5', 'Solifenacina?', 'Antimuscarínico bexiga — incontinência urge.', '', 'clinica', 'material', ['solifenacina']),
    c('fp3_a5', 'Efeitos anticolinérgicos idosos?', 'Confusão, constipação, retenção urinária (Beers).', '', 'clinica', 'material', ['beer']),
    c('fp3_a5', 'Donepezila?', 'Inibidor acetilcolinesterase Alzheimer.', '', 'clinica', 'material', ['donepezila']),
    c('fp3_a5', 'Succinilcolina: cuidado?', 'Hipercalemia em queimados/paralisados prolongados.', '', 'extra_livro', 'extra', ['succinilcolina']),
    c('fp3_a5', 'Glycopyrrolate vs atropina?', 'Menos CNS — pré-op secreções.', '', 'extra', 'extra', ['glicopirrolato']),
  ],
  [ // fp3_a6
    c('fp3_a6', 'Inflamação aguda: mediador clássico?', 'Histamina, bradicinina, prostaglandinas.', '', 'definicao', 'material', ['aguda']),
    c('fp3_a6', 'Granuloma?', 'Macrófagos epiteloides — TB, sarcoidose.', '', 'definicao', 'material', ['granuloma']),
    c('fp3_a6', 'Cicatrização por primeira intenção?', 'Bordas aproximadas — cicatriz fina.', '', 'definicao', 'material', ['cicatrizacao']),
    c('fp3_a6', 'Segunda intenção?', 'Cavidade aberta — granulação do fundo.', '', 'definicao', 'material', ['segunda']),
    c('fp3_a6', 'Fibrose patológica?', 'Depósito colágeno excessivo — rigidez pulmonar.', '', 'clinica', 'material', ['fibrose']),
    c('fp3_a6', 'Hiperplasia compensatória?', 'Rim remanescente cresce após nefrectomia.', '', 'definicao', 'material', ['compensatoria']),
    c('fp3_a6', 'Metaplasia intestinal gástrica?', 'Fator de risco adenocarcinoma.', '', 'clinica', 'material', ['metaplasia']),
    c('fp3_a6', 'Desorganização tecidual?', 'Diferente de metaplasia — desordem arquitetural.', '', 'diferenciacao', 'material', ['desorganizacao']),
    c('fp3_a6', 'Angiogênese na cicatrização?', 'VEGF — novos vasos.', '', 'mecanismo', 'material', ['angiogenese']),
    c('fp3_a6', 'Deiscência de sutura?', 'Falha tensão/infeção — emergência cirúrgica.', '', 'clinica', 'material', ['deiscencia']),
    c('fp3_a6', 'Queloide vs hipertrofica?', 'Queloide ultrapassa margens da escara; hipertrofica não.', '', 'extra_livro', 'extra', ['quelóide']),
    c('fp3_a6', 'Transformação epitelio-mesenquimal?', 'Fibrose renal/câncer — alvo terapêutico.', '', 'extra', 'extra', ['emt']),
  ],
  [ // fp3_a7
    c('fp3_a7', 'AINE inibe?', 'COX-1/2 — prostaglandinas.', '', 'mecanismo', 'material', ['aine']),
    c('fp3_a7', 'COX-2 seletivo: exemplo?', 'Celecoxib — menor risco GI (não zero).', '', 'clinica', 'material', ['cox2']),
    c('fp3_a7', 'Efeitos adversos AINE?', 'Nefrotoxicidade, úlcera GI, CV (alguns).', '', 'clinica', 'material', ['aine']),
    c('fp3_a7', 'Corticoide inibe?', 'Fosfolipase A2 → araquidônico ↓.', '', 'mecanismo', 'material', ['corticoide']),
    c('fp3_a7', 'Prednisona: uso sistêmico?', 'Inflamações imunomediadas — titular dose mínima.', '', 'clinica', 'material', ['prednisona']),
    c('fp3_a7', 'HPA supressão por corticoide?', 'Taper gradual após uso prolongado.', '', 'clinica', 'material', ['hpa']),
    c('fp3_a7', 'Fluticasona inalada?', 'Asma — mínima absorção sistêmica em dose baixa.', '', 'clinica', 'material', ['fluticasona']),
    c('fp3_a7', 'Colchicina: uso?', 'Gota aguda, pericardite (anti-inflamatório não AINE).', '', 'clinica', 'material', ['colchicina']),
    c('fp3_a7', 'Mesalazina?', 'Doença inflamatória intestinal — tópica no cólon.', '', 'clinica', 'material', ['mesalazina']),
    c('fp3_a7', 'Infliximabe?', 'Anti-TNF — DAI, AR, etc.', '', 'clinica', 'material', ['infliximabe']),
    c('fp3_a7', 'Paracetamol: mecanismo?', 'Inibição central COX — menos periférico.', '', 'extra_livro', 'extra', ['paracetamol']),
    c('fp3_a7', 'Toxicidade paracetamol: antídoto?', 'N-acetilcisteína (tempo).', '', 'extra', 'extra', ['nac']),
  ],
  [ // fp3_a8
    c('fp3_a8', 'Oncogene vs supressor?', 'Ganho de função vs perda (duas mutações Knudson).', '', 'diferenciacao', 'material', ['oncogene']),
    c('fp3_a8', 'Invasão requer?', 'Metaloproteinases matriz + mudança adesão.', '', 'mecanismo', 'material', ['invasao']),
    c('fp3_a8', 'Metástase hematogênica vs linfática?', 'Vascular vs linfonodos.', '', 'diferenciacao', 'material', ['metastase']),
    c('fp3_a8', 'Angiogênese tumoral?', 'VEGF — alvo bevacizumabe.', '', 'clinica', 'material', ['vegf']),
    c('fp3_a8', 'Estadiamento TNM?', 'Tumor, Nódulo, Metástase.', '', 'definicao', 'material', ['tnm']),
    c('fp3_a8', 'Carcinogênese multietapas?', 'Iniciação, promoção, progressão.', '', 'definicao', 'material', ['carcinogenese']),
    c('fp3_a8', 'Marcadores tumorais: uso?', 'Auxiliares — não diagnóstico isolado (CEA, PSA).', '', 'clinica', 'material', ['marcador']),
    c('fp3_a8', 'Displasia de alto grau colo?', 'Pré-cancer — tratamento local.', '', 'clinica', 'material', ['colo']),
    c('fp3_a8', 'Sarcoma vs carcinoma?', 'Mesênquima vs epitélio.', '', 'diferenciacao', 'material', ['sarcoma']),
    c('fp3_a8', 'Cachexia neoplásica?', 'Citocinas inflamatórias — perda ponderal.', '', 'clinica', 'material', ['cachexia']),
    c('fp3_a8', 'MSI em câncer colorretal?', 'Imunoterapia anti-PD-1 responde melhor.', '', 'extra_livro', 'extra', ['msi']),
    c('fp3_a8', 'Liquid biopsy?', 'ctDNA — monitoramento.', '', 'extra', 'extra', ['liquid-biopsy']),
  ],
];

const data = JSON.parse(fs.readFileSync(OUT, 'utf8'));
let id = 0;
for (const f of data.flashcards) if (f.id > id) id = f.id;
id++;
for (const lot of LOTS) for (const x of lot) data.flashcards.push({ ...x, id: id++ });
fs.writeFileSync(OUT, JSON.stringify(data, null, 2), 'utf8');
console.log('OK fp3 part1 total', data.flashcards.length, 'last id', id - 1);
