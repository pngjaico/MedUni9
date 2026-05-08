import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const MARKER = 'farm_quality_contract_2026_05_07_a1_a2';

function p(rel) { return path.join(ROOT, rel); }
function readJson(rel) { return JSON.parse(fs.readFileSync(p(rel), 'utf8')); }
function writeJson(rel, data) {
  fs.mkdirSync(path.dirname(p(rel)), { recursive: true });
  fs.writeFileSync(p(rel), `${JSON.stringify(data, null, 2)}\n`, 'utf8');
}
function writeText(rel, text) {
  fs.mkdirSync(path.dirname(p(rel)), { recursive: true });
  fs.writeFileSync(p(rel), `${text.replace(/\r\n/g, '\n').replace(/\n*$/, '')}\n`, 'utf8');
}
function table(headers, rows) {
  return [`| ${headers.join(' | ')} |`, `| ${headers.map(() => '---').join(' | ')} |`, ...rows.map((row) => `| ${row.join(' | ')} |`)];
}
function makeExplanation(general, exp) {
  return [`Resumo: ${general}`, `A) ${exp.A}`, `B) ${exp.B}`, `C) ${exp.C}`, `D) ${exp.D}`].join('\n');
}
function q(aula, dificuldade, caso_clinico, enunciado, opcoes, correta, general, exp) {
  return {
    materia: 'farmaco_aplicada',
    tema: aula,
    aula_id: aula,
    modulo: 5,
    dificuldade,
    caso_clinico,
    essencial: true,
    origem: `${MARKER}_${aula}`,
    enunciado,
    opcoes,
    correta,
    explicacao_geral: general,
    explicacoes_opcoes: exp,
    explicacao: makeExplanation(general, exp),
  };
}
function fc(aula, dificuldade, frente, verso, explicacao, categoria, tags) {
  return { materia: 'farmaco_aplicada', tema: aula, dificuldade, frente, verso, explicacao, origem: `${MARKER}_${aula}`, categoria, tags };
}

const lessons = [
  {
    aula: 'farm_a1',
    title: 'Farmacologia do Sistema Digestório',
    ref: 'Goodman & Gilman 14ª ed. + Katzung 16ª ed. + ACG GERD 2022 + ACG Gastroparesis 2022 + ACG H. pylori 2024',
    imageDecision: { usar_imagem: false, motivo: 'Aula ganha mais com tabelas receptor-fármaco-conduta; imagem de trato digestório seria decorativa.' },
    relevance: [
      'Farmacologia digestória cai porque quase todo paciente usa remédio para refluxo, náusea, gastrite, dor epigástrica ou dispepsia. A banca não cobra decorar nomes comerciais; cobra **mecanismo**, **quando usar**, **efeito adverso** e **armadilha de prescrição**.',
      '',
      'O foco desta aula é dominar antiácidos, bloqueadores H2, IBP, citoprotetores, esquemas com bismuto, antieméticos e procinéticos.',
      '',
      '> **Pegadinha de prova:** omeprazol não é antiácido imediato. IBP precisa ativação em bomba de prótons e funciona melhor antes da refeição.',
    ],
    case: [
      '**Ato 1 - Entrada:** homem de 46 anos com pirose quase diária recebe omeprazol "quando sente queimar" depois do jantar. Ele diz que melhora pouco.',
      '',
      '**Ato 2 - Virada:** mulher diabética com gastroparesia recebe metoclopramida por tempo indefinido e volta com movimentos involuntários orofaciais.',
      '',
      '**Ato 3 - Decisão:** no primeiro caso, o problema é uso errado do IBP. No segundo, a droga certa por tempo errado virou toxicidade neurológica.',
      '',
      '> **Moral da vinheta:** em farmacologia, acertar a classe não basta. Dose, horário, duração e contraindicação decidem se o remédio ajuda ou machuca.',
    ],
    sections: [
      ['Antiácidos, Alginato e Bloqueadores H2', [
        'Antiácidos neutralizam ácido já secretado. São úteis para alívio rápido, mas não cicatrizam esofagite erosiva importante como um IBP.',
        '',
        'Alginato forma barreira mecânica pós-prandial e pode ajudar em refluxo regurgitativo. Bloqueadores H2 reduzem secreção por histamina, principalmente noturna, mas sofrem tolerância com uso contínuo.',
        '',
        ...table(['Classe', 'Mecanismo', 'Armadilha'], [
          ['**Antiácidos**', 'neutralizam ácido luminal', 'alívio curto e interações'],
          ['**Alginato**', 'barreira pós-prandial', 'não substitui investigação de alarme'],
          ['**H2**', 'bloqueiam receptor H2 parietal', 'taquifilaxia'],
          ['**IBP**', 'inibem bomba H/K ATPase', 'tomar antes da refeição'],
        ]),
        '',
        '**Macete MedGradPlus - antiácido apaga incêndio, IBP corta gás:** antiácido age no ácido que já saiu; IBP reduz a produção que viria depois.',
      ]],
      ['Inibidores da Bomba de Prótons', [
        'IBP são pró-fármacos ativados em ambiente ácido do canalículo da célula parietal. Inibem irreversivelmente a bomba H/K ATPase.',
        '',
        'Uso correto: geralmente 30-60 minutos antes da refeição principal quando o alvo é refluxo/DRGE. Em erosiva grave ou esquemas de H. pylori, pode haver uso duas vezes ao dia conforme protocolo.',
        '',
        'Efeitos adversos e cautelas: hipomagnesemia, deficiência de B12/ferro em usos longos, maior risco de infecção entérica em alguns contextos, nefrite intersticial rara e rebote ácido ao suspender abruptamente após uso prolongado.',
        '',
        '> **Armadilha de banca:** "não melhorou com IBP" só vale depois de checar adesão, horário, dose, duração e sinais de alarme.',
      ]],
      ['Citoprotetores e Bismuto', [
        'Sucralfato forma barreira sobre mucosa ulcerada e precisa de meio ácido para funcionar melhor. Interfere na absorção de vários fármacos, então a distância de administração importa.',
        '',
        'Misoprostol é análogo de prostaglandina E1. Pode reduzir lesão por AINE em perfil selecionado, mas causa cólica/diarreia e é contraindicado na gestação por efeito uterotônico.',
        '',
        'Bismuto entra em esquemas de H. pylori e pode escurecer fezes/língua. Isso assusta, mas não deve ser confundido automaticamente com melena.',
        '',
        '**Macete MedGradPlus - citoproteção não é analgesia:** sucralfato e misoprostol protegem mucosa; não são remédio para "tirar dor" imediatamente.',
      ]],
      ['H. pylori e Esquemas com Bismuto', [
        'Na era de resistência à claritromicina, a tendência moderna é preferir terapia quádrupla com bismuto quando susceptibilidade é desconhecida em muitos cenários.',
        '',
        ...table(['Componente', 'Papel', 'Ponto de prova'], [
          ['**IBP**', 'eleva pH e ajuda antibiótico', 'geralmente 2x/dia no esquema'],
          ['**Bismuto**', 'efeito antimicrobiano/citoprotetor', 'fezes escuras'],
          ['**Tetraciclina**', 'antibiótico', 'não trocar automaticamente por doxiciclina'],
          ['**Metronidazol**', 'antianaeróbio/protozoário', 'aderência e eventos GI'],
        ]),
        '',
        'Teste de cura deve ser lembrado após tratamento, respeitando janela sem IBP/antibiótico conforme protocolo local.',
      ]],
      ['Antieméticos por Receptor', [
        'Escolha antiemético por mecanismo: vestibular, quimioterapia, gastroenterite, gastroparesia, enxaqueca ou obstrução não são a mesma náusea.',
        '',
        ...table(['Classe', 'Exemplo', 'Efeito adverso chave'], [
          ['**5-HT3**', 'ondansetrona', 'QT e constipação'],
          ['**D2**', 'metoclopramida', 'extrapiramidal e discinesia tardia'],
          ['**H1**', 'dimenidrinato/meclizina', 'sedação'],
          ['**M1**', 'escopolamina', 'anticolinérgico'],
          ['**NK1**', 'aprepitanto', 'interação CYP3A4'],
        ]),
        '',
        '> **Pérola Clínica:** vômito por obstrução intestinal não é convite para procinético. Primeiro pense se existe bloqueio mecânico.',
      ]],
      ['Procinéticos', [
        'Metoclopramida antagoniza D2 e agoniza 5-HT4, aumentando esvaziamento gástrico e tônus do esfíncter esofágico inferior. É útil em gastroparesia, mas não é vitamina digestiva.',
        '',
        'Riscos: sonolência, acatisia, distonia, parkinsonismo, hiperprolactinemia, síndrome neuroléptica maligna rara e discinesia tardia, especialmente com uso prolongado.',
        '',
        'Evite procinético em suspeita de obstrução, perfuração ou sangramento GI relevante. Em diabético com gastroparesia, controle glicêmico e dieta também importam.',
        '',
        '**Macete MedGradPlus - pró-cinético empurra; se tem parede na frente, piora:** antes de acelerar o intestino, exclua obstrução.',
      ]],
    ],
    key: [
      'Antiácidos aliviam rápido, mas duram pouco.',
      'Bloqueadores H2 têm taquifilaxia.',
      'IBP funciona melhor antes da refeição.',
      'IBP cicatriza esofagite melhor que H2.',
      'Sucralfato reduz absorção de outros fármacos.',
      'Misoprostol é contraindicado na gestação.',
      'Bismuto pode escurecer fezes e língua.',
      'Ondansetrona pode prolongar QT.',
      'Metoclopramida pode causar efeitos extrapiramidais.',
      'Metoclopramida prolongada pode causar discinesia tardia.',
      'Procinético é contraindicado em obstrução/perfuração.',
      'Antiemético deve seguir o mecanismo da náusea.',
    ],
    quiz: [
      ['Qual orientação melhora o uso do IBP para DRGE?', 'Tomar antes da refeição', 'Tomar só depois da dor', 'Misturar com antiácido sempre', 'Usar apenas à noite em todos', 'IBP precisa bomba ativa, por isso o horário importa.'],
      ['Qual fármaco é contraindicado na gestação por efeito uterotônico?', 'Misoprostol', 'Sucralfato', 'Alginato', 'Famotidina', 'Misoprostol é análogo de prostaglandina.'],
      ['Metoclopramida prolongada aumenta risco de:', 'Discinesia tardia', 'Hipocalcemia imediata', 'Surdez condutiva', 'Hemólise obrigatória', 'O alerta neurológico é central.'],
      ['Ondansetrona exige cautela por risco de:', 'Prolongamento de QT', 'Hiperplasia gengival', 'Nefrite sempre', 'Broncoespasmo obrigatório', 'QT e constipação são efeitos relevantes.'],
      ['Bismuto pode causar:', 'Fezes e língua escurecidas', 'Retina pálida', 'Surdez súbita', 'Agranulocitose obrigatória', 'Escurecimento benigno pode confundir com melena.'],
      ['Procinético deve ser evitado quando há suspeita de:', 'Obstrução gastrointestinal', 'Gastroparesia diabética sem obstrução', 'Náusea por lentificação gástrica', 'Refluxo selecionado', 'Empurrar contra obstrução é perigoso.'],
    ],
    pre: 'FARM a1 cobra uso racional: antiácido é alívio curto; H2 ajuda ácido noturno, mas perde efeito; IBP deve ser usado no horário certo; citoprotetores protegem mucosa; antiemético depende de receptor; procinético não é para obstrução.',
    anchor: ['IBP antes da refeição.', 'Metoclopramida por tempo curto e com cautela neurológica.', 'Misoprostol nunca na gestação.', 'Bismuto escurece sem ser melena automaticamente.', 'Náusea vestibular, química e motora pedem classes diferentes.'],
    errors: ['Usar IBP como antiácido de resgate.', 'Esquecer interação do sucralfato.', 'Prescrever misoprostol para gestante.', 'Manter metoclopramida indefinidamente.', 'Dar procinético em obstrução.', 'Chamar fezes escuras por bismuto de sangramento sem contexto.'],
    fontes: [
      'Goodman & Gilman. **As Bases Farmacológicas da Terapêutica**, 14ª edição, capítulos de farmacologia gastrointestinal.',
      'Katzung. **Farmacologia Básica e Clínica**, 16ª edição, capítulos de fármacos gastrointestinais.',
      'ACG. **Clinical Guideline for the Diagnosis and Management of GERD, 2022**.',
      'ACG. **Clinical Guideline: Gastroparesis, 2022**.',
      'ACG. **Clinical Guideline: Treatment of Helicobacter pylori Infection, 2024**.',
      'FDA. **Metoclopramide boxed warning and prescribing information**.',
    ],
  },
  {
    aula: 'farm_a2',
    title: 'Anti-inflamatórios - AINEs e Corticoides',
    ref: 'Goodman & Gilman 14ª ed. + Katzung 16ª ed. + FDA NSAID warnings + ACR GIOP 2022 + Endocrine Society glucocorticoid-induced adrenal insufficiency',
    imageDecision: { usar_imagem: false, motivo: 'O conteúdo é risco-benefício, contraindicação e monitorização; fluxogramas e tabelas superam imagem decorativa.' },
    relevance: [
      'AINE e corticoide são remédios fáceis de prescrever e fáceis de usar mal. Em prova, eles aparecem quando o paciente tem DRC, anticoagulante, úlcera prévia, insuficiência cardíaca, asma, diabetes, infecção ou uso crônico.',
      '',
      'O objetivo é saber quando o anti-inflamatório ajuda, quando causa dano e quando precisa prevenção de complicações.',
      '',
      '> **Pegadinha de prova:** "só por poucos dias" não torna AINE seguro em DRC avançada, IC descompensada ou sangramento digestivo ativo.',
    ],
    case: [
      '**Ato 1 - Entrada:** homem com DRC, HAS em IECA e diurético recebe ibuprofeno para lombalgia. Três dias depois volta com creatinina e potássio subindo.',
      '',
      '**Ato 2 - Virada:** mulher com lúpus usa prednisona há meses e ninguém avaliou osso, glicemia, PA, vacinação ou risco de adrenal suprimida.',
      '',
      '**Ato 3 - Decisão:** AINE fez a tríade do rim sofrer; corticoide crônico exige plano de prevenção, desmame e stress dose quando apropriado.',
      '',
      '> **Moral da vinheta:** anti-inflamatório sem contexto é prescrição pela metade.',
    ],
    sections: [
      ['AINEs: COX, Prostaglandinas e Plaquetas', [
        'AINEs inibem ciclo-oxigenase e reduzem prostaglandinas. Isso reduz dor, febre e inflamação, mas também remove proteção gástrica, renal e plaquetária.',
        '',
        ...table(['Alvo', 'Benefício', 'Risco'], [
          ['**COX-1**', 'constitutiva', 'sangramento GI e plaquetas'],
          ['**COX-2**', 'inflamação', 'risco cardiovascular em seletivos'],
          ['**AAS**', 'antiagregação irreversível', 'sangramento'],
          ['**Prostaglandina renal**', 'mantém aferente', 'IRA em hipoperfusão'],
        ]),
        '',
        '**Macete MedGradPlus - prostaglandina protege estômago e rim:** quando você bloqueia, a dor melhora, mas o paciente vulnerável perde defesa.',
      ]],
      ['Toxicidade dos AINEs', [
        'Riscos principais: dispepsia, úlcera, sangramento GI, lesão renal aguda, retenção hidrossalina, piora de PA, descompensação de IC, broncoespasmo em sensíveis e eventos cardiovasculares.',
        '',
        'A tríade perigosa para rim é IECA/BRA + diurético + AINE. O IECA dilata eferente, o diurético reduz volume e o AINE contrai aferente ao tirar prostaglandina.',
        '',
        '> **Armadilha de banca:** COX-2 seletivo reduz risco GI relativo, mas não vira remédio cardiovascularmente neutro.',
      ]],
      ['Como Escolher AINE', [
        'A regra é menor dose efetiva pelo menor tempo necessário. Prefira tópico quando o alvo é local e a evidência permite. Avalie idade, DRC, IC, HAS, anticoagulação, úlcera prévia e risco cardiovascular.',
        '',
        ...table(['Perfil', 'Preferência', 'Evitar'], [
          ['**Idoso/úlcera**', 'proteção GI se indispensável', 'AINE sem plano'],
          ['**DRC/IC**', 'analgesia alternativa', 'AINE sistêmico'],
          ['**Anticoagulante**', 'evitar combinação', 'AINE + sangramento'],
          ['**Dor localizada**', 'tópico quando possível', 'sistêmico reflexo'],
        ]),
        '',
        'Gastroproteção com IBP pode ser indicada em alto risco GI, mas não protege rim nem coração.',
      ]],
      ['Corticoides: Mecanismo e Potência', [
        'Glicocorticoides modulam transcrição gênica, reduzem citocinas, migração leucocitária, fosfolipase A2, COX-2 e resposta imune. O efeito é forte porque atua em vários pontos da inflamação.',
        '',
        'Prednisona/prednisolona, metilprednisolona, dexametasona e hidrocortisona diferem em potência glicocorticoide, meia-vida e atividade mineralocorticoide.',
        '',
        '**Macete MedGradPlus - corticoide é freio geral:** freia inflamação, mas também freia defesa, osso, eixo adrenal e metabolismo.',
      ]],
      ['Efeitos Adversos dos Corticoides', [
        'Efeitos de curto prazo: hiperglicemia, retenção, insônia, humor, dispepsia, psicose em suscetíveis, hipertensão e maior risco infeccioso.',
        '',
        'Efeitos de longo prazo: osteoporose, miopatia, catarata, glaucoma, pele fina, síndrome de Cushing iatrogênica, necrose avascular, supressão adrenal e infecções oportunistas.',
        '',
        ...table(['Risco', 'Prevenção'], [
          ['**Osso**', 'avaliar risco, cálcio/vitamina D e antiosteoporótico se indicado'],
          ['**Metabólico**', 'monitorar glicemia, PA e peso'],
          ['**Infecção**', 'vacinas e rastreio conforme dose/duração'],
          ['**Adrenal**', 'desmame e stress dose quando indicado'],
        ]),
      ]],
      ['Desmame, Eixo Adrenal e Stress Dose', [
        'Corticoide crônico pode suprimir eixo hipotálamo-hipófise-adrenal. Suspensão abrupta após uso relevante pode causar insuficiência adrenal ou rebote da doença de base.',
        '',
        'Em doses suprafisiológicas, o desmame costuma ser mais rápido no início e mais lento quando chega a doses fisiológicas. Paciente com uso atual/recente e risco de supressão pode precisar cobertura em estresse quando não testado.',
        '',
        '> **Pérola Clínica:** corticoide é remédio de saída planejada. Se você não pensou no desmame quando prescreveu, prescreveu incompleto.',
      ]],
    ],
    key: [
      'AINE reduz prostaglandina e inflamação.',
      'Prostaglandina protege mucosa gástrica e perfusão renal.',
      'AINE aumenta risco GI, renal e cardiovascular.',
      'IECA/BRA + diurético + AINE é combinação renal perigosa.',
      'COX-2 seletivo não elimina risco cardiovascular.',
      'AAS inibe plaqueta de modo irreversível.',
      'IBP protege GI, não rim.',
      'Corticoide aumenta glicemia, PA e risco infeccioso.',
      'Uso crônico causa osteoporose e supressão adrenal.',
      'Corticoide prolongado precisa plano de desmame.',
      'Stress dose pode ser necessária em uso atual/recente de glicocorticoide.',
      'Vacinação e osso não são detalhes em corticoide crônico.',
    ],
    quiz: [
      ['Qual combinação aumenta risco de IRA hemodinâmica?', 'IECA/BRA + diurético + AINE', 'IBP + alginato', 'Ondansetrona + soro oral', 'Sucralfato + dieta', 'A tríade compromete aferente, volume e eferente.'],
      ['AINEs aumentam sangramento GI porque reduzem:', 'Prostaglandinas protetoras', 'T3 livre', 'Albumina urinária', 'Insulina pancreática', 'COX-1/prostaglandina protege mucosa.'],
      ['COX-2 seletivo tende a reduzir risco GI relativo, mas aumenta preocupação com:', 'Eventos cardiovasculares', 'Surdez súbita', 'Tinea capitis', 'Papiledema', 'Risco CV segue relevante.'],
      ['Corticoide crônico exige avaliar:', 'Osteoporose, glicemia, PA, infecção e eixo adrenal', 'Só cor da urina', 'Apenas otoscopia', 'Apenas KOH', 'Monitorização é parte da prescrição.'],
      ['Suspensão abrupta de corticoide prolongado pode causar:', 'Insuficiência adrenal', 'Cura definitiva sempre', 'CRAO', 'VPPB', 'Eixo adrenal pode estar suprimido.'],
      ['IBP associado ao AINE protege principalmente:', 'Risco gastrointestinal', 'Risco renal', 'Risco de AVC por COX-2', 'Hiperglicemia por corticoide', 'IBP não protege rim/coração.'],
    ],
    pre: 'FARM a2 é risco-benefício. AINE bloqueia COX e tira prostaglandina: ajuda dor, mas agride estômago, rim e coração. Corticoide é anti-inflamatório potente, mas cobra preço metabólico, infeccioso, ósseo e adrenal.',
    anchor: ['AINE: dor melhor, rim/estômago/coração sob risco.', 'Corticoide: inflamação menor, defesa e eixo adrenal sob risco.', 'Menor dose pelo menor tempo.', 'AINE em DRC/IC/anticoagulado é perigo.', 'Corticoide crônico precisa plano de osso, vacina, glicemia e desmame.'],
    errors: ['Dar AINE sistêmico em DRC sem avaliar risco.', 'Associar AINE a anticoagulante sem plano.', 'Achar que IBP protege rim.', 'Suspender corticoide crônico abruptamente.', 'Esquecer osteoporose induzida por glicocorticoide.', 'Não orientar stress dose quando há risco adrenal.'],
    fontes: [
      'Goodman & Gilman. **As Bases Farmacológicas da Terapêutica**, 14ª edição, capítulos de anti-inflamatórios.',
      'Katzung. **Farmacologia Básica e Clínica**, 16ª edição, capítulos de AINEs e corticosteroides.',
      'FDA. **NSAID cardiovascular and gastrointestinal warnings**.',
      'American College of Rheumatology. **2022 Guideline for Prevention and Treatment of Glucocorticoid-Induced Osteoporosis**.',
      'Endocrine Society. **Glucocorticoid-Induced Adrenal Insufficiency Guideline**.',
    ],
  },
];

function buildMaterial(lesson) {
  const lines = [
    '---',
    `aula_id: ${lesson.aula}`,
    'materia: farmaco_aplicada',
    'modulo: 5',
    `tema: ${lesson.title}`,
    'versao_v3: 3.0.0',
    'status: published_local',
    'revisado_em: 2026-05-07',
    'checksum_lint: pass_pending',
    '---',
    '',
    `# ${lesson.title}`,
    '',
    '**Disciplina:** Farmacologia Aplicada',
    `**Módulo:** 5 | **Referência principal:** ${lesson.ref}`,
    '**Tempo de estudo sugerido:** 30-40 min',
    '',
    '---',
    '',
    '## Relevância Clínica e Acadêmica',
    '',
    ...lesson.relevance,
    '',
    '---',
    '',
    '## Caso da Semana',
    '',
    ...lesson.case,
    '',
    '---',
    '',
  ];
  for (const [title, body] of lesson.sections) {
    lines.push(`## ${title}`, '', ...body, '', '---', '');
  }
  lines.push('## Pontos-Chave', '');
  for (const point of lesson.key) lines.push(`- ${point}`);
  lines.push('', '---', '', '## Mini Quiz', '');
  lesson.quiz.forEach(([stem, correct, b, c, d, why], idx) => {
    lines.push(`**${idx + 1}. ${stem}**`, '', `- [x] ${correct}`, `- [ ] ${b}`, `- [ ] ${c}`, `- [ ] ${d}`, '', `> **Explicação:** ${why}`, '');
  });
  lines.push('---', '', '## Pré-Prova', '', '### Síntese para a prova', '', lesson.pre, '', '### Macete-âncora', '', '**Farmacologia boa é indicação + risco + monitorização.**', '');
  for (const item of lesson.anchor) lines.push(`- ${item}`);
  lines.push('', '### Erros que derrubam nota', '');
  for (const item of lesson.errors) lines.push(`- ${item}`);
  lines.push('', '---', '', '## Fontes', '');
  for (const fonte of lesson.fontes) lines.push(`- ${fonte}`);
  return lines.join('\n');
}

function questionsFor(aula) {
  if (aula === 'farm_a1') {
    return [
      q(aula, 2, false, 'Qual orientação é mais correta para IBP no tratamento de DRGE típica?', ['A) Tomar 30-60 minutos antes da refeição principal.', 'B) Tomar apenas depois da pirose começar.', 'C) Usar junto de qualquer antiácido como regra obrigatória.', 'D) Tomar só de madrugada em todos os pacientes.'], 0, 'IBP funciona melhor quando há bombas ativas após refeição; horário inadequado parece falha terapêutica.', { A: 'CORRETA: melhora eficácia.', B: 'INCORRETA: IBP não é antiácido de resgate.', C: 'INCORRETA: associação não é obrigatória.', D: 'INCORRETA: não é regra geral.' }),
      q(aula, 2, false, 'Qual classe é mais eficaz que bloqueador H2 para cicatrização de esofagite erosiva?', ['A) Inibidor da bomba de prótons.', 'B) Antiácido simples.', 'C) Antagonista H1.', 'D) Anticolinérgico vestibular.'], 0, 'IBP suprime ácido de forma mais potente e sustentada que H2 para esofagite erosiva.', { A: 'CORRETA: é a classe principal.', B: 'INCORRETA: alívio curto.', C: 'INCORRETA: não é ácido gástrico.', D: 'INCORRETA: não trata esofagite.' }),
      q(aula, 2, true, 'Gestante com dor epigástrica recebe sugestão de misoprostol para proteção gástrica. Qual problema?', ['A) Misoprostol é contraindicado na gestação por efeito uterotônico.', 'B) Misoprostol é sempre primeira escolha em gestantes.', 'C) Misoprostol não tem ação em prostaglandina.', 'D) Misoprostol é antiemético 5-HT3.'], 0, 'Misoprostol pode induzir contrações uterinas e é contraindicado na gestação.', { A: 'CORRETA: risco uterino.', B: 'INCORRETA: é contraindicado.', C: 'INCORRETA: é análogo de PGE1.', D: 'INCORRETA: não é 5-HT3.' }),
      q(aula, 2, false, 'Qual efeito adverso relevante da ondansetrona deve ser lembrado?', ['A) Prolongamento do intervalo QT.', 'B) Discinesia tardia como principal risco crônico.', 'C) Úlcera por bloqueio de prostaglandina.', 'D) Supressão adrenal.'], 0, 'Ondansetrona pode prolongar QT, especialmente em predispostos ou com combinações.', { A: 'CORRETA: atenção ao ECG/risco.', B: 'INCORRETA: risco clássico é metoclopramida.', C: 'INCORRETA: é AINE.', D: 'INCORRETA: é corticoide.' }),
      q(aula, 3, true, 'Paciente usa metoclopramida diariamente há meses e apresenta movimentos involuntários orofaciais. Hipótese?', ['A) Discinesia tardia por metoclopramida.', 'B) Melhora esperada da gastroparesia.', 'C) Hipomagnesemia por antiácido.', 'D) Efeito do bismuto.'], 0, 'Metoclopramida prolongada pode causar discinesia tardia e outros efeitos extrapiramidais.', { A: 'CORRETA: toxicidade neurológica clássica.', B: 'INCORRETA: não é melhora.', C: 'INCORRETA: não explica movimentos.', D: 'INCORRETA: bismuto escurece fezes/língua.' }),
      q(aula, 2, false, 'Qual condição contraindica procinético como metoclopramida?', ['A) Suspeita de obstrução ou perfuração gastrointestinal.', 'B) Gastroparesia diabética selecionada.', 'C) Náusea por lentificação gástrica sem obstrução.', 'D) DRGE selecionada com avaliação clínica.'], 0, 'Procinético aumenta motilidade; se há bloqueio mecânico/perfuração, pode piorar desfecho.', { A: 'CORRETA: risco mecânico.', B: 'INCORRETA: pode ser indicação.', C: 'INCORRETA: pode ajudar.', D: 'INCORRETA: pode ser considerado.' }),
      q(aula, 2, false, 'Bismuto em esquemas digestivos pode causar:', ['A) Fezes e língua escurecidas.', 'B) Midríase média fixa.', 'C) Surdez neurossensorial súbita.', 'D) Hipercalemia obrigatória.'], 0, 'Bismuto pode escurecer fezes e língua, confundindo com melena se contexto não for avaliado.', { A: 'CORRETA: efeito comum.', B: 'INCORRETA: glaucoma.', C: 'INCORRETA: otológico.', D: 'INCORRETA: não é obrigatório.' }),
      q(aula, 2, false, 'Qual fármaco forma barreira sobre mucosa ulcerada e interfere na absorção de outros medicamentos?', ['A) Sucralfato.', 'B) Ondansetrona.', 'C) Prednisona.', 'D) Ibuprofeno.'], 0, 'Sucralfato adere à mucosa e pode reduzir absorção de vários fármacos.', { A: 'CORRETA: precisa espaçar.', B: 'INCORRETA: antiemético 5-HT3.', C: 'INCORRETA: corticoide.', D: 'INCORRETA: AINE.' }),
      q(aula, 2, false, 'Bloqueadores H2 perdem eficácia com uso contínuo por:', ['A) Taquifilaxia.', 'B) Discinesia tardia.', 'C) Supressão adrenal.', 'D) Nefrotoxicidade por cristais.'], 0, 'Tolerância/taquifilaxia limita H2 em uso contínuo.', { A: 'CORRETA: fenômeno típico.', B: 'INCORRETA: metoclopramida.', C: 'INCORRETA: corticoide.', D: 'INCORRETA: não é o mecanismo.' }),
      q(aula, 2, false, 'Náusea vestibular costuma responder melhor a classes como:', ['A) Anti-H1 ou antimuscarínicos.', 'B) IBP.', 'C) Bismuto isolado.', 'D) Misoprostol.'], 0, 'H1 e antimuscarínicos são úteis em cinetose/vertigem por ação vestibular.', { A: 'CORRETA: mecanismo compatível.', B: 'INCORRETA: ácido gástrico.', C: 'INCORRETA: H. pylori/diarreia.', D: 'INCORRETA: citoproteção.' }),
      q(aula, 2, false, 'No tratamento atual de H. pylori com susceptibilidade desconhecida, qual esquema é frequentemente lembrado como preferência em diretriz recente?', ['A) Terapia quádrupla com bismuto por 14 dias.', 'B) IBP isolado por 3 dias.', 'C) Antiácido simples apenas.', 'D) Metoclopramida por 12 meses.'], 0, 'ACG 2024 reforça terapia quádrupla otimizada com bismuto em muitos cenários sem susceptibilidade conhecida.', { A: 'CORRETA: padrão moderno.', B: 'INCORRETA: não erradica.', C: 'INCORRETA: não erradica.', D: 'INCORRETA: não trata H. pylori.' }),
      q(aula, 3, true, 'Paciente em QT longo usa ondansetrona, macrolídeo e hipocalemia. Qual preocupação principal?', ['A) Torsades de pointes por prolongamento de QT.', 'B) Apendicite por antiemético.', 'C) Supressão adrenal imediata.', 'D) Tinea incognito.'], 0, 'Associação de fármacos pró-QT e eletrólitos alterados aumenta risco de arritmia.', { A: 'CORRETA: risco elétrico.', B: 'INCORRETA: não é relação.', C: 'INCORRETA: corticoide crônico.', D: 'INCORRETA: dermatologia.' }),
    ];
  }
  return [
    q(aula, 2, false, 'Mecanismo central dos AINEs:', ['A) Inibição de ciclo-oxigenase e redução de prostaglandinas.', 'B) Ativação direta de receptor beta-2.', 'C) Bloqueio de bomba de prótons.', 'D) Antagonismo de receptor D2.'], 0, 'AINEs inibem COX, reduzindo prostaglandinas inflamatórias e protetoras.', { A: 'CORRETA: mecanismo-chave.', B: 'INCORRETA: broncodilatador.', C: 'INCORRETA: IBP.', D: 'INCORRETA: metoclopramida.' }),
    q(aula, 2, true, 'Paciente com DRC usa IECA e diurético; recebe ibuprofeno e piora creatinina. Mecanismo provável?', ['A) Perda da prostaglandina que mantém vasodilatação da arteríola aferente.', 'B) Aumento de eritropoetina.', 'C) Bloqueio H2.', 'D) Ativação de bomba de prótons.'], 0, 'AINE contrai aferente por reduzir prostaglandina, especialmente em rim dependente de vasodilatação.', { A: 'CORRETA: IRA hemodinâmica.', B: 'INCORRETA: não explica.', C: 'INCORRETA: H2 gástrico.', D: 'INCORRETA: IBP.' }),
    q(aula, 2, false, 'Qual combinação é conhecida como risco renal hemodinâmico importante?', ['A) IECA/BRA + diurético + AINE.', 'B) IBP + alginato + dieta.', 'C) Ondansetrona + hidratação oral.', 'D) Sucralfato + refeição.'], 0, 'A combinação reduz volume efetivo e altera arteríolas aferente/eferente.', { A: 'CORRETA: triple whammy.', B: 'INCORRETA: não é renal típico.', C: 'INCORRETA: não é esse risco.', D: 'INCORRETA: não é combinação renal.' }),
    q(aula, 2, false, 'COX-2 seletivo reduz risco GI relativo, mas exige atenção a:', ['A) Eventos cardiovasculares.', 'B) Discinesia tardia.', 'C) Hiperprolactinemia.', 'D) Fezes escuras por bismuto.'], 0, 'Seletividade COX-2 pode aumentar preocupação cardiovascular em pacientes de risco.', { A: 'CORRETA: risco central.', B: 'INCORRETA: metoclopramida.', C: 'INCORRETA: D2.', D: 'INCORRETA: bismuto.' }),
    q(aula, 2, false, 'AAS difere de muitos AINEs por:', ['A) Inibir plaquetas de forma irreversível.', 'B) Não ter risco de sangramento.', 'C) Ser corticoide.', 'D) Ativar COX-1.'], 0, 'AAS acetila COX irreversivelmente na plaqueta, que não sintetiza nova enzima.', { A: 'CORRETA: base antiagregante.', B: 'INCORRETA: há sangramento.', C: 'INCORRETA: não é corticoide.', D: 'INCORRETA: inibe COX.' }),
    q(aula, 2, true, 'Paciente anticoagulado e com úlcera prévia quer AINE oral para dor crônica. Melhor raciocínio?', ['A) Evitar se possível e buscar alternativa; se indispensável, plano de risco GI rigoroso.', 'B) Prescrever dose alta sem proteção.', 'C) Associar dois AINEs.', 'D) Trocar por corticoide crônico sem monitorar.'], 0, 'Anticoagulação e úlcera prévia elevam risco de sangramento GI.', { A: 'CORRETA: risco alto.', B: 'INCORRETA: perigoso.', C: 'INCORRETA: aumenta toxicidade.', D: 'INCORRETA: troca por outro risco.' }),
    q(aula, 2, false, 'IBP junto ao AINE protege principalmente contra:', ['A) Lesão gastrointestinal alta.', 'B) Lesão renal por AINE.', 'C) Evento cardiovascular por COX-2.', 'D) Supressão adrenal.'], 0, 'IBP reduz risco ácido/GI, mas não previne toxicidade renal ou CV.', { A: 'CORRETA: proteção GI.', B: 'INCORRETA: rim não é protegido.', C: 'INCORRETA: CV não é protegido.', D: 'INCORRETA: não é relação.' }),
    q(aula, 2, false, 'Efeito metabólico comum de glicocorticoides sistêmicos:', ['A) Hiperglicemia.', 'B) Hipoglicemia obrigatória.', 'C) Redução de PA em todos.', 'D) Hipoatividade imune inexistente.'], 0, 'Corticoides aumentam gliconeogênese e resistência insulínica.', { A: 'CORRETA: monitorar glicemia.', B: 'INCORRETA: oposto comum.', C: 'INCORRETA: podem elevar PA.', D: 'INCORRETA: imunossupressão existe.' }),
    q(aula, 2, false, 'Uso crônico de corticoide aumenta risco de:', ['A) Osteoporose e fraturas.', 'B) Crescimento ósseo ilimitado.', 'C) Proteção contra infecção oportunista.', 'D) Discinesia tardia como principal toxicidade.'], 0, 'Glicocorticoides reduzem formação óssea e aumentam reabsorção, elevando risco de fratura.', { A: 'CORRETA: prevenção deve ser avaliada.', B: 'INCORRETA: oposto.', C: 'INCORRETA: aumenta infecção.', D: 'INCORRETA: metoclopramida.' }),
    q(aula, 3, true, 'Paciente usa prednisona por meses e para abruptamente. Qual risco?', ['A) Insuficiência adrenal e rebote da doença de base.', 'B) Erradicação de H. pylori.', 'C) Cura permanente da inflamação.', 'D) Surdez súbita.'], 0, 'Uso prolongado pode suprimir eixo HHA; suspensão abrupta é perigosa.', { A: 'CORRETA: precisa desmame.', B: 'INCORRETA: não trata H. pylori.', C: 'INCORRETA: não é garantido.', D: 'INCORRETA: sem relação.' }),
    q(aula, 3, false, 'Paciente em uso atual/recente de glicocorticoide com risco de supressão adrenal e sem teste adequado sofre cirurgia/infecção grave. Conduta a lembrar:', ['A) Cobertura com dose de estresse quando indicada.', 'B) Suspender tudo abruptamente.', 'C) Dar AINE para cobrir adrenal.', 'D) Usar bismuto.'], 0, 'Diretrizes recomendam cobertura em estresse para pacientes em risco não testados adequadamente.', { A: 'CORRETA: previne crise adrenal.', B: 'INCORRETA: perigoso.', C: 'INCORRETA: AINE não substitui cortisol.', D: 'INCORRETA: sem relação.' }),
    q(aula, 2, false, 'Qual medida faz parte de prescrição racional de corticoide crônico?', ['A) Avaliar osso, glicemia, PA, infecção/vacinas e plano de desmame.', 'B) Ignorar duração.', 'C) Não orientar retorno.', 'D) Associar AINE sempre.'], 0, 'Corticoide crônico exige prevenção e monitorização ativa.', { A: 'CORRETA: pacote mínimo.', B: 'INCORRETA: duração importa.', C: 'INCORRETA: seguimento é essencial.', D: 'INCORRETA: aumenta risco GI.' }),
  ];
}

function cardsFor(aula) {
  if (aula === 'farm_a1') {
    return [
      fc(aula, 2, 'IBP deve ser tomado antes da {{c1::refeição}} principal.', 'refeição', 'Bomba ativa melhora efeito.', 'ibp', ['farm', 'digestorio']),
      fc(aula, 2, 'IBP inibe a bomba {{c1::H/K ATPase}} da célula parietal.', 'H/K ATPase', 'Inibição irreversível da bomba de prótons.', 'ibp', ['farm', 'drge']),
      fc(aula, 2, 'Bloqueador H2 perde efeito contínuo por {{c1::taquifilaxia}}.', 'taquifilaxia', 'Limita uso crônico diário.', 'h2', ['farm', 'acido']),
      fc(aula, 2, 'Sucralfato pode reduzir {{c1::absorção}} de outros fármacos.', 'absorção', 'Espaçar administração.', 'citoprotetor', ['farm', 'sucralfato']),
      fc(aula, 2, 'Misoprostol é contraindicado na {{c1::gestação}}.', 'gestação', 'Efeito uterotônico.', 'citoprotetor', ['farm', 'misoprostol']),
      fc(aula, 2, 'Bismuto pode escurecer fezes e {{c1::língua}}.', 'língua', 'Não confundir automaticamente com melena.', 'bismuto', ['farm', 'hpylori']),
      fc(aula, 2, 'Ondansetrona bloqueia receptor {{c1::5-HT3}}.', '5-HT3', 'Cuidado com QT e constipação.', 'antiemetico', ['farm', 'ondansetrona']),
      fc(aula, 2, 'Metoclopramida antagoniza {{c1::D2}} e é procinética.', 'D2', 'Também tem efeito 5-HT4.', 'procinetico', ['farm', 'metoclopramida']),
      fc(aula, 3, 'Metoclopramida prolongada pode causar discinesia {{c1::tardia}}.', 'tardia', 'Toxicidade neurológica relevante.', 'seguranca', ['farm', 'metoclopramida']),
      fc(aula, 2, 'Procinético é evitado em obstrução {{c1::gastrointestinal}}.', 'gastrointestinal', 'Pode piorar quadro mecânico.', 'contraindicacao', ['farm', 'procinético']),
      fc(aula, 2, 'Náusea vestibular responde a anti-H1 ou {{c1::antimuscarínico}}.', 'antimuscarínico', 'Mecanismo vestibular.', 'antiemetico', ['farm', 'vestibular']),
      fc(aula, 2, 'Terapia quádrupla com {{c1::bismuto}} é opção forte em H. pylori sem susceptibilidade conhecida.', 'bismuto', 'Padrão reforçado em diretriz recente.', 'hpylori', ['farm', 'bismuto']),
    ];
  }
  return [
    fc(aula, 2, 'AINEs inibem {{c1::COX}} e reduzem prostaglandinas.', 'COX', 'Base do efeito analgésico/anti-inflamatório.', 'aine', ['farm', 'aine']),
    fc(aula, 2, 'Prostaglandinas protegem mucosa gástrica e perfusão {{c1::renal}}.', 'renal', 'Bloqueio gera risco GI/renal.', 'seguranca', ['farm', 'aine']),
    fc(aula, 2, 'IECA/BRA + diurético + AINE é o {{c1::triple whammy}} renal.', 'triple whammy', 'Risco de IRA hemodinâmica.', 'renal', ['farm', 'aine']),
    fc(aula, 2, 'COX-2 seletivo mantém preocupação {{c1::cardiovascular}}.', 'cardiovascular', 'Menos GI relativo não significa sem risco.', 'cox2', ['farm', 'aine']),
    fc(aula, 2, 'AAS inibe plaquetas de forma {{c1::irreversível}}.', 'irreversível', 'Plaqueta não refaz COX.', 'aas', ['farm', 'plaqueta']),
    fc(aula, 2, 'IBP com AINE protege risco {{c1::gastrointestinal}}, não renal.', 'gastrointestinal', 'Não protege rim/coração.', 'gastroprotecao', ['farm', 'aine']),
    fc(aula, 2, 'Corticoide sistêmico aumenta risco de {{c1::hiperglicemia}}.', 'hiperglicemia', 'Monitorar diabetes/glicose.', 'corticoide', ['farm', 'glicose']),
    fc(aula, 2, 'Corticoide crônico aumenta risco de osteoporose e {{c1::fratura}}.', 'fratura', 'Avaliar prevenção.', 'corticoide', ['farm', 'osso']),
    fc(aula, 2, 'Uso prolongado de corticoide pode suprimir eixo {{c1::HHA}}.', 'HHA', 'Hipotálamo-hipófise-adrenal.', 'adrenal', ['farm', 'corticoide']),
    fc(aula, 3, 'Suspensão abrupta de corticoide crônico pode causar insuficiência {{c1::adrenal}}.', 'adrenal', 'Desmame é parte da prescrição.', 'adrenal', ['farm', 'desmame']),
    fc(aula, 3, 'Paciente em risco de supressão adrenal pode precisar dose de {{c1::estresse}}.', 'estresse', 'Cirurgia/infecção grave.', 'adrenal', ['farm', 'stress']),
    fc(aula, 2, 'Corticoide crônico exige plano de osso, glicemia, PA, infecção e {{c1::desmame}}.', 'desmame', 'Monitorização evita dano previsível.', 'seguranca', ['farm', 'corticoide']),
  ];
}

function updateMaterials() {
  for (const lesson of lessons) {
    const md = buildMaterial(lesson);
    writeText(`data/materiais/farmaco_aplicada/${lesson.aula}.md`, md);
    writeText(`materiais/modulo5/farmaco_aplicada/${lesson.aula}.md`, md);
  }
}

function updateData() {
  const qData = readJson('data/questoes.json');
  let questoes = (qData.questoes || []).filter((item) => !String(item.origem || '').startsWith(MARKER));
  let maxQ = Math.max(0, ...questoes.map((item) => Number(item.id) || 0));
  const novos = lessons.flatMap((lesson) => questionsFor(lesson.aula));
  for (const item of novos) item.id = ++maxQ;
  questoes.push(...novos);
  writeJson('data/questoes.json', { ...qData, questoes });

  const fcData = readJson('data/flashcards.json');
  let flashcards = (fcData.flashcards || []).filter((item) => !String(item.origem || '').startsWith(MARKER));
  let maxFc = Math.max(0, ...flashcards.map((item) => Number(item.id) || 0));
  const novosCards = lessons.flatMap((lesson) => cardsFor(lesson.aula));
  for (const item of novosCards) item.id = ++maxFc;
  flashcards.push(...novosCards);
  writeJson('data/flashcards.json', { ...fcData, flashcards });
}

function updateRefs() {
  for (const lesson of lessons) {
    writeJson(`data/refs/${lesson.aula}.refs.json`, {
      aula_id: lesson.aula,
      materia: 'farmaco_aplicada',
      tema: lesson.title,
      generatedAt: '2026-05-08T00:45:00.000Z',
      marker: `${MARKER}_${lesson.aula}`,
      image_decision: lesson.imageDecision,
      fontes_base: lesson.fontes.map((fonte) => ({ tipo: 'fonte', titulo: fonte.replace(/\*\*/g, ''), uso: 'base farmacológica e padrão de prova para material, questões e flashcards.' })),
    });
  }
}

updateMaterials();
updateData();
updateRefs();

console.log('FARM a1-a2 atualizadas com materiais v3, essenciais e flashcards.');
