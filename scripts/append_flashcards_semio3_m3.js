/** SEMIO3 semio3_a1–a6 × 12 — node scripts/append_flashcards_semio3_m3.js */
const fs = require('fs');
const path = require('path');
const OUT = path.join(__dirname, '..', 'data', 'flashcards.json');
function c(t, f, v, e, cat, o, tags) {
  return { materia: 'semiologia3', tema: t, frente: f, verso: v, explicacao: e || '', dificuldade: 2, categoria: cat, origem: o, tags: tags || [] };
}
const LOTS = [
  [ // semio3_a1
    c('semio3_a1', 'Anamnese abdominal: SOCRATES para dor?', 'Site, onset, character, radiation, associations, time, exacerbations, severity.', '', 'definicao', 'material', ['dor']),
    c('semio3_a1', 'Distensão abdominal: causas mecânicas?', 'Gás, líquido, massa, gravidez.', '', 'clinica', 'material', ['distensao']),
    c('semio3_a1', 'Alteração do hábito intestinal: alarmes?', 'Sangue, perda de peso, idade >50.', '', 'clinica', 'material', ['habito']),
    c('semio3_a1', 'Náuseas e vômitos: perguntar?', 'Conteúdo, timing pós-alimento, medicações.', '', 'clinica', 'material', ['vomito']),
    c('semio3_a1', 'Disúria: sintomas associados?', 'Frequência, urgência, suprapúbica, febre (ITU).', '', 'clinica', 'material', ['disuria']),
    c('semio3_a1', 'Melena vs hematoquezia?', 'Digestivo alto vs baixo (aproximação).', '', 'diferenciacao', 'material', ['melena']),
    c('semio3_a1', 'Icterícia com colúria e acolia?', 'Colestase/obstrução biliar extra-hepática (padrão).', '', 'clinica', 'material', ['ictericia']),
    c('semio3_a1', 'Ascite na história: causas?', 'Cirrose, malignidade, cardíaca, tuberculosa.', '', 'clinica', 'material', ['ascite']),
    c('semio3_a1', 'Avaliação nutricional rápida?', 'IMC, perda de peso não intencional.', '', 'definicao', 'material', ['nutricao']),
    c('semio3_a1', 'Alergia a contrastes iodados: perguntar antes de TC?', 'Risco de reação anafilática.', '', 'clinica', 'material', ['alergia']),
    c('semio3_a1', 'Anticoagulante + sangramento GI?', 'Risco hemorrágico — estabilidade hemodinâmica.', '', 'extra_livro', 'extra', ['ac']),
    c('semio3_a1', 'Síndrome constitucional: pensar?', 'Neoplasia, TB, HIV (triagem).', '', 'extra', 'extra', ['constitucional']),
  ],
  [ // semio3_a2
    c('semio3_a2', 'Inspeção abdominal: posição do paciente?', 'Decúbito dorsal, abdômen exposto com privacidade.', '', 'definicao', 'material', ['inspecao']),
    c('semio3_a2', 'Palpação superficial antes da profunda?', 'Detectar defesa antes de profundizar.', '', 'mecanismo', 'material', ['palpacao']),
    c('semio3_a2', 'Sinal de Murphy: técnica?', 'Palpação HCD na inspiração — interrupção por dor (colecistite).', '', 'clinica', 'material', ['murphy']),
    c('semio3_a2', 'Massa abdominal: caracterizar?', 'Local, tamanho, consistência, mobilidade, borda.', '', 'definicao', 'material', ['massa']),
    c('semio3_a2', 'Percussão: timpânico vs maciço?', 'Gás vs líquido/sólido.', '', 'diferenciacao', 'material', ['percussao']),
    c('semio3_a2', 'Ausculta intestinal: hiperativo vs ausente?', 'Obstrução precoce vs paralítico/late.', '', 'clinica', 'material', ['ruidos']),
    c('semio3_a2', 'Sinal de piólon palpável?', 'Hidronefrose/massa (contexto).', '', 'clinica', 'material', ['piolon']),
    c('semio3_a2', 'Descompressão brusca positiva?', 'Irritação peritoneal (apendicite, etc.).', '', 'clinica', 'material', ['descompressao']),
    c('semio3_a2', 'Hérnia inguinal vs femoral: local?', 'Acima vs abaixo ligamento inguinal (regra prática).', '', 'diferenciacao', 'material', ['hernia']),
    c('semio3_a2', 'Exame de orifícios herniários: manobra?', 'Tosse com palpação (aumento pressão intra-abd).', '', 'mecanismo', 'material', ['manobra']),
    c('semio3_a2', 'Blumberg histórico: relevância atual?', 'Dor à descompressão — sensibilidade variável para apendicite.', '', 'extra_livro', 'extra', ['blumberg']),
    c('semio3_a2', 'Asterixis na palmação-estendida?', 'Falência hepática (entre causas).', '', 'extra', 'extra', ['asterixis']),
  ],
  [ // semio3_a3
    c('semio3_a3', 'Hematúria: classificar?', 'Micro vs macro; inicial vs total; com dor vs indolor.', '', 'definicao', 'material', ['hematuria']),
    c('semio3_a3', 'Pielonefrite: sintomas sistêmicos?', 'Febre, calafrios, dor lombar.', '', 'clinica', 'material', ['pielonefrite']),
    c('semio3_a3', 'Cistite: localização da dor?', 'Suprapúbica, disúria, sem febre alta (regra).', '', 'clinica', 'material', ['cistite']),
    c('semio3_a3', 'Litíase ureter: dor típica?', 'Cólica lombar irradiando para virilha.', '', 'clinica', 'material', ['litíase']),
    c('semio3_a3', 'Percussão lombar (Giordano) sensível?', 'Pielonefrite — não específico sozinho.', '', 'clinica', 'material', ['giordano']),
    c('semio3_a3', 'Edema periorbital matinal: pensar?', 'Síndrome nefrótica (entre causas).', '', 'clinica', 'material', ['edema']),
    c('semio3_a3', 'Oligúria: definição prática?', 'Diurese <400 mL/dia adulto (aprox.).', '', 'definicao', 'material', ['oliguria']),
    c('semio3_a3', 'Bexiga palpável: causas?', 'Retenção urinária, obstrução prostática.', '', 'clinica', 'material', ['bexiga']),
    c('semio3_a3', 'ITU recorrente: investigar?', 'Anatomia (cálculo, refluxo), pós-menopausa, diabetes.', '', 'clinica', 'material', ['itu']),
    c('semio3_a3', 'Proteinúria no edema: exames?', 'Urina I ou 24h, relação albumina/creatinina.', '', 'clinica', 'material', ['proteinuria']),
    c('semio3_a3', 'Síndrome nefrótica vs nefrítica: diferença rápida?', 'Edema + proteinúria massiva vs hematúria + HTA + função variável.', '', 'extra_livro', 'extra', ['glomerulo']),
    c('semio3_a3', 'Presença de cilindros hemáticos na urina sugere?', 'Origem glomerular (avaliar sedimento).', '', 'extra', 'extra', ['sedimento']),
  ],
  [ // semio3_a4
    c('semio3_a4', 'Anamnese sexual: abordagem respeitosa?', 'Privacidade, linguagem neutra, não julgar.', '', 'definicao', 'material', ['anamnese']),
    c('semio3_a4', 'Disfunção erétil: causas orgânicas?', 'Vascular, neurogênica, endócrina, fármacos.', '', 'clinica', 'material', ['de']),
    c('semio3_a4', 'Dor testicular aguda: urgência?', 'Torção até 6h — USG Doppler.', '', 'clinica', 'material', ['torsao']),
    c('semio3_a4', 'Secreção uretral: pensar?', 'Gonorreia, clamídia (entre STIs).', '', 'clinica', 'material', ['uretrite']),
    c('semio3_a4', 'Toque retal: avalia?', 'Próstata (tamanho, consistência, sulcos), ampola retal.', '', 'definicao', 'material', ['toque']),
    c('semio3_a4', 'Próstata aumentada e macia: comum?', 'HPB benigna; nódulo duro → suspeita câncer.', '', 'clinica', 'material', ['prostata']),
    c('semio3_a4', 'Hérnia inguinal no homem: reduzível?', 'Risco de encarceramento/incarceramento.', '', 'clinica', 'material', ['hernia']),
    c('semio3_a4', 'Varicocele: posição?', 'Plexo pampiniforme — aumenta em ortostase.', '', 'clinica', 'material', ['varicocele']),
    c('semio3_a4', 'Hipospádias: inspeção?', 'Meato uretral ventral — congenito.', '', 'clinica', 'material', ['hipospadias']),
    c('semio3_a4', 'Infertilidade masculina: exame inicial?', 'Espermograma após anamnese.', '', 'clinica', 'material', ['infertilidade']),
    c('semio3_a4', 'PSA: uso como rastreamento?', 'Controverso — decisão compartilhada >50 anos (protocolos).', '', 'extra_livro', 'extra', ['psa']),
    c('semio3_a4', 'Priapismo isquêmico: tempo?', 'Emergência urológica (horas).', '', 'extra', 'extra', ['priapismo']),
  ],
  [ // semio3_a5
    c('semio3_a5', 'História ginecológica: idade da menarca?', 'Ciclos, DUM, gravidezes, contracepção.', '', 'definicao', 'material', ['gineco']),
    c('semio3_a5', 'Corrimento vaginal: caracterizar?', 'Cor, odor, prurido (candidíase vs BV vs tricomonas).', '', 'clinica', 'material', ['corrimento']),
    c('semio3_a5', 'Dispareunia profunda vs superficial?', 'Endometriose/DO vs vulvodinia/infecção.', '', 'diferenciacao', 'material', ['dispareunia']),
    c('semio3_a5', 'Sangramento pós-menopausa: conduta?', 'Investigar endométrio (USG, biópsia).', '', 'clinica', 'material', ['sangramento']),
    c('semio3_a5', 'Exame especular: visualiza?', 'Colo, vagina, conteúdo cervical.', '', 'definicao', 'material', ['especulo']),
    c('semio3_a5', 'Toque vaginal bimanual: avalia?', 'Útero (tamanho, mobilidade), anexos (massas/dor).', '', 'definicao', 'material', ['toque']),
    c('semio3_a5', 'Sinal de Chandelier na mobilização cervical?', 'Dor intensa — PID (sugestivo).', '', 'clinica', 'material', ['pid']),
    c('semio3_a5', 'Bartholin abscesso: local?', 'Lábios maiores — dor unilateral.', '', 'clinica', 'material', ['bartholin']),
    c('semio3_a5', 'Gestante: exame gentil?', 'Evitar toque vaginal desnecessário no 1º trimestre sem indicação.', '', 'clinica', 'material', ['gestante']),
    c('semio3_a5', 'Amenorreia primária: investigar?', 'Anatomia, cromossomos, eixo HHG.', '', 'clinica', 'material', ['amenorreia']),
    c('semio3_a5', 'Papanicolau: rastreio de?', 'Lesões cervicais (HPV).', '', 'extra_livro', 'extra', ['pap']),
    c('semio3_a5', 'Violência sexual: conduta?', 'Profilaxia STI/gravidez, acolhimento, notificação conforme lei.', '', 'extra', 'extra', ['violencia']),
  ],
  [ // semio3_a6
    c('semio3_a6', 'Ambulatório supervisionado: foco?', 'Segurança do paciente + feedback ao aluno.', '', 'definicao', 'material', ['supervisao']),
    c('semio3_a6', 'Correlacionar achado com exame complementar?', 'Urina I, creatinina, β-hCG quando indicado.', '', 'clinica', 'material', ['correlacao']),
    c('semio3_a6', 'Diagnóstico diferencial de dor lombar baixa?', 'Renal vs musculoesquelética vs ginecológica.', '', 'clinica', 'material', ['dd']),
    c('semio3_a6', 'Massa anexial em jovem: pensar?', 'Cisto funcional vs endometrioma vs neoplasia (imagem).', '', 'clinica', 'material', ['anexo']),
    c('semio3_a6', 'Encaminhar urologia: indicações?', 'Hematúria persistente, nódulo prostático suspeito.', '', 'clinica', 'material', ['encaminhamento']),
    c('semio3_a6', 'Prontuário: registrar consentimento?', 'Exames íntimos documentados com clareza.', '', 'definicao', 'material', ['prontuario']),
    c('semio3_a6', 'Paciente LGBTQIA+: abordagem?', 'Perguntar pronome e parceiros sem suposições.', '', 'mecanismo', 'material', ['lgbtqia']),
    c('semio3_a6', 'Erro comum de iniciante no toque?', 'Não lubrificar especulo adequadamente.', '', 'clinica', 'material', ['tecnica']),
    c('semio3_a6', 'USG FAST na emergência abdominal?', 'Líquido livre — trauma (contexto).', '', 'clinica', 'material', ['fast']),
    c('semio3_a6', 'Telemedicina em urologia: limite?', 'Exame físico completo pode ser inviável.', '', 'clinica', 'material', ['tele']),
    c('semio3_a6', 'Checklist pré-procedimento invasivo?', 'Identificar paciente, lateralidade, consentimento.', '', 'extra_livro', 'extra', ['seguranca']),
    c('semio3_a6', 'Second opinion em cirurgias eletivas?', 'Direito do paciente — documentar.', '', 'extra', 'extra', ['second-opinion']),
  ],
];

const data = JSON.parse(fs.readFileSync(OUT, 'utf8'));
let id = 0;
for (const f of data.flashcards) if (f.id > id) id = f.id;
id++;
for (const lot of LOTS) for (const x of lot) data.flashcards.push({ ...x, id: id++ });
fs.writeFileSync(OUT, JSON.stringify(data, null, 2), 'utf8');
console.log('OK semio3 total', data.flashcards.length, 'last id', id - 1);
