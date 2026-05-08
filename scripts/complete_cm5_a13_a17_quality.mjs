import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const MARKER = 'cm5_quality_contract_2026_05_07_cm5_a13_a17';

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
function exp(general, a, b, c, d) {
  return [`Resumo: ${general}`, `A) ${a}`, `B) ${b}`, `C) ${c}`, `D) ${d}`].join('\n');
}
function makeQ(aula, item, idx) {
  const [dif, caso, enunciado, correta, b, c, d, general] = item;
  return {
    materia: 'clinica_medica5',
    tema: aula,
    aula_id: aula,
    modulo: 5,
    dificuldade: dif,
    caso_clinico: caso,
    essencial: true,
    origem: `${MARKER}_${aula}`,
    enunciado,
    opcoes: [`A) ${correta}`, `B) ${b}`, `C) ${c}`, `D) ${d}`],
    correta: 0,
    explicacao_geral: general,
    explicacoes_opcoes: {
      A: `CORRETA: ${general}`,
      B: 'INCORRETA: alternativa incompatível com a vinheta ou com a diretriz.',
      C: 'INCORRETA: distrator comum de prova, mas não resolve o caso.',
      D: 'INCORRETA: não é a prioridade clínica.',
    },
    explicacao: exp(general, `CORRETA: ${general}`, 'INCORRETA: incompatível.', 'INCORRETA: distrator.', 'INCORRETA: não é prioridade.'),
  };
}
function makeFc(aula, [dif, frente, verso, explicacao, categoria, tags]) {
  return { materia: 'clinica_medica5', tema: aula, dificuldade: dif, frente, verso, explicacao, origem: `${MARKER}_${aula}`, categoria, tags };
}
function table(headers, rows) {
  return [
    `| ${headers.join(' | ')} |`,
    `| ${headers.map(() => '---').join(' | ')} |`,
    ...rows.map((row) => `| ${row.join(' | ')} |`),
  ];
}

const lessons = [
  {
    aula: 'cm5_a13',
    title: 'Otites, Rinites e Rinossinusites',
    ref: 'AAO-HNS otite externa + AAP otite média + AAO-HNS rinite alérgica + Harrison 21ª ed. + Cecil-Goldman 26ª ed.',
    image: {
      id: 'CM5-A13-F01',
      urlImagem: 'https://upload.wikimedia.org/wikipedia/commons/f/f3/Acute_Otitis_Media_Stage_of_Resolution.jpg',
      urlThumbnail: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Acute_Otitis_Media_Stage_of_Resolution.jpg/960px-Acute_Otitis_Media_Stage_of_Resolution.jpg',
      urlPaginaCommons: 'https://commons.wikimedia.org/wiki/File:Acute_Otitis_Media_Stage_of_Resolution.jpg',
      licenca: 'CC BY 4.0',
      credito: 'Michael Hawke MD',
      legenda: 'Otoscopia em otite média aguda. Abaulamento, opacidade e perda de mobilidade da membrana timpânica sustentam o diagnóstico.',
      descricaoVisual: 'Imagem otoscópica de otite média aguda.',
      momento: 'Após diferenciação entre OMA, OME e otite externa.',
      buscaEn: 'acute otitis media otoscopy tympanic membrane',
      buscaPt: 'otoscopia otite média aguda membrana timpânica',
    },
    imageDecision: { usar_imagem: true, figura_id: 'CM5-A13-F01', motivo: 'Otoscopia é critério diagnóstico de OMA; imagem ajuda a separar OMA de OME e otite externa.' },
    relevance: [
      'ORL ambulatorial parece simples até a banca perguntar quem precisa antibiótico, quem precisa gota tópica e quem precisa só corticoide nasal. O erro comum é transformar toda dor de ouvido e todo catarro em antibiótico.',
      '',
      'Nesta aula, o foco é separar **otite média aguda**, **otite média com efusão**, **otite externa**, **rinite alérgica** e **rinossinusite bacteriana aguda**.',
      '',
      '> **Pegadinha de prova:** líquido atrás da membrana timpânica sem febre, dor importante ou abaulamento não é otite média aguda. É efusão até prova em contrário.',
    ],
    case: [
      '**Ato 1 - Entrada:** criança com otalgia e febre chega ao pronto atendimento. A otoscopia mostra membrana timpânica abaulada, opaca e com mobilidade reduzida.',
      '',
      '**Ato 2 - Virada:** no consultório ao lado, adulto com ouvido tampado há semanas após resfriado tem líquido retro timpânico, mas sem febre e sem dor intensa.',
      '',
      '**Ato 3 - Decisão:** a primeira vinheta é OMA; a segunda é OME. Tratar as duas igual é desperdício de antibiótico e sinal de raciocínio ruim.',
      '',
      '> **Moral da vinheta:** em ouvido, otoscopia manda mais que a palavra "dor".',
    ],
    sections: [
      ['OMA, OME e Otite Externa', [
        ...table(['Condição', 'Pista principal', 'Conduta'], [
          ['**OMA**', 'abaulamento timpânico, dor, febre', 'analgesia e antibiótico em perfis indicados'],
          ['**OME**', 'efusão sem infecção aguda', 'observação e audição se persistente'],
          ['**Otite externa**', 'dor ao tracionar pavilhão/tragus', 'limpeza e gotas tópicas'],
        ]),
        '',
        'OMA é diagnóstico otoscópico. Hiperemia isolada em criança chorando não fecha OMA.',
        '',
        '**Macete MedGradPlus - ouvido médio abaula:** OMA abaula membrana. OME só ocupa espaço. Externa dói quando você mexe no pavilhão.',
      ]],
      ['Antibiótico: Quando Sim e Quando Não', [
        'Amoxicilina segue como base em muitos cenários de OMA. Amoxicilina-clavulanato entra quando há falha, conjuntivite purulenta associada ou risco de beta-lactamase.',
        '',
        'Observação pode ser adequada em casos leves e idade apropriada, com reavaliação. OME não recebe antibiótico só por existir líquido.',
        '',
        '> **Armadilha de banca:** antibiótico para OME é um erro clássico. O problema é ventilação/efusão, não infecção aguda.',
      ]],
      ['Rinite Alérgica', [
        'Rinite alérgica combina prurido nasal/ocular, espirros, rinorreia aquosa e obstrução, frequentemente com história atópica.',
        '',
        'Corticoide intranasal é pilar para sintomas persistentes. Anti-histamínico ajuda prurido e espirros. Descongestionante tópico prolongado causa rinite medicamentosa.',
        '',
        '**Macete MedGradPlus - coça, espirra, escorre:** esse trio com olho coçando puxa rinite alérgica, não antibiótico.',
      ]],
      ['Rinossinusite Viral, Bacteriana e Crônica', [
        ...table(['Tipo', 'Duração/padrão', 'Pista'], [
          ['**Viral**', '<10 dias e melhorando', 'resfriado comum'],
          ['**Bacteriana**', 'persistente, grave ou piora dupla', 'dor facial, secreção purulenta, febre'],
          ['**Crônica**', '>12 semanas', 'obstrução, secreção, olfato, pressão'],
        ]),
        '',
        'Não peça radiografia ou TC em rinossinusite aguda não complicada. Imagem entra em complicação, recorrência grave, crônica selecionada ou suspeita alternativa.',
      ]],
      ['Complicações', [
        'Red flags orbitárias e intracranianas: edema periorbitário, dor ocular, oftalmoplegia, diplopia, redução visual, cefaleia intensa, vômitos, confusão e sinais meníngeos.',
        '',
        '> **Pérola Clínica:** rinossinusite com olho mexendo mal não é "sinusite forte". É possível complicação orbitária até prova em contrário.',
      ]],
    ],
    key: ['OMA exige otoscopia compatível.', 'Abaulamento timpânico pesa mais que hiperemia isolada.', 'OME não é OMA e não recebe antibiótico automático.', 'Otite externa dói ao tracionar pavilhão ou comprimir tragus.', 'Rinite alérgica coça e espirra.', 'Corticoide intranasal é pilar em rinite persistente.', 'Rinossinusite viral melhora antes de 10 dias.', 'Bacteriana é persistente, grave ou piora dupla.', 'Não pedir imagem em rinossinusite aguda simples.', 'Complicação orbitária muda urgência.', 'Amox-clav entra em risco/falha/beta-lactamase.', 'Analgesia é tratamento, não detalhe.'],
    quiz: [
      ['OMA é melhor sustentada por qual achado?', 'Membrana timpânica abaulada e opaca', 'Prurido nasal isolado', 'Dor ao mastigar', 'Tosse crônica', 'OMA depende de achado otoscópico compatível.'],
      ['OME deve ser tratada rotineiramente com:', 'Observação e avaliação auditiva se persistente', 'Antibiótico obrigatório', 'Corticoide sistêmico eterno', 'Cirurgia imediata em todos', 'OME não é infecção aguda.'],
      ['Otite externa costuma doer com:', 'Tração do pavilhão ou pressão no tragus', 'Compressão de panturrilha', 'Palpação de tireoide', 'Inspiração profunda', 'A dor é no canal externo.'],
      ['Rinossinusite bacteriana aguda é sugerida por:', 'Persistência, gravidade ou piora dupla', 'Coriza clara por 2 dias', 'Espirros ao pólen', 'Rouquidão isolada', 'O padrão temporal separa viral de bacteriana.'],
      ['Rinite alérgica persistente tem como pilar:', 'Corticoide intranasal', 'Antibiótico mensal', 'Anticoagulação', 'Insulina', 'Corticoide nasal controla inflamação local.'],
      ['Sinusite com diplopia e dor ocular sugere:', 'Complicação orbitária', 'Resfriado comum simples', 'OME', 'Cefaleia tensional', 'Olho muda gravidade.'],
    ],
    questions: [
      [2, true, 'Criança com febre, otalgia e membrana timpânica abaulada. Qual diagnóstico?', 'Otite média aguda.', 'Otite média com efusão obrigatória.', 'Rinite alérgica.', 'Vertigem central.', 'Abaulamento timpânico com quadro agudo sustenta OMA.'],
      [2, true, 'Adulto pós-resfriado com ouvido tampado e efusão sem febre ou otalgia intensa. Conduta inicial?', 'Observar e reavaliar, sem antibiótico automático.', 'Antibiótico venoso obrigatório.', 'Corticoide sistêmico para todos.', 'Timpanotomia imediata em todos.', 'OME não deve ser tratada como OMA.'],
      [2, false, 'Dor ao tracionar pavilhão e comprimir tragus sugere:', 'Otite externa.', 'OMA típica.', 'Rinite medicamentosa.', 'Meningite.', 'A dor provocada no pavilhão localiza canal externo.'],
      [2, false, 'Rinossinusite bacteriana aguda é sugerida por:', 'Persistência por mais de 10 dias, quadro grave ou piora dupla.', 'Coriza clara por 48 horas.', 'Prurido ocular sazonal.', 'Tosse seca isolada.', 'Padrão temporal e gravidade indicam bactéria.'],
      [2, false, 'Qual exame evitar em rinossinusite aguda não complicada?', 'Radiografia/TC de rotina.', 'Exame físico.', 'Avaliação de red flags.', 'Anamnese temporal.', 'Imagem não agrega em quadro simples.'],
      [2, false, 'Tratamento de rinite alérgica persistente geralmente tem como pilar:', 'Corticoide intranasal.', 'Amoxicilina sempre.', 'Diurético.', 'Anticoagulante.', 'Corticoide intranasal controla inflamação.'],
      [2, true, 'Paciente usa descongestionante nasal tópico há semanas e piorou obstrução. Diagnóstico provável?', 'Rinite medicamentosa.', 'OMA.', 'Ceratite.', 'CRAO.', 'Uso prolongado causa rebote.'],
      [3, true, 'Sinusite com edema periorbitário, diplopia e dor ocular. Conduta?', 'Investigar complicação orbitária com urgência.', 'Tratar como resfriado comum.', 'Aguardar 3 meses sem retorno.', 'Dar apenas anti-histamínico.', 'Sinais orbitários são red flags.'],
      [2, false, 'Amoxicilina-clavulanato em OMA é mais lembrada quando há:', 'Falha terapêutica ou conjuntivite purulenta associada.', 'OME leve isolada.', 'Rinite alérgica pura.', 'Vertigem posicional.', 'Risco de beta-lactamase muda escolha.'],
      [1, false, 'Rinite alérgica costuma ter:', 'Espirros, prurido e rinorreia aquosa.', 'Cilindros hemáticos.', 'Dor orbitária autonômica.', 'Proteinúria maciça.', 'O padrão é alérgico nasal/ocular.'],
      [2, false, 'Qual frase sobre hiperemia timpânica isolada é correta?', 'Não fecha OMA sozinha.', 'Fecha OMA sempre.', 'É indicação de cirurgia em todos.', 'Exclui dor de ouvido.', 'Hiperemia isolada é inespecífica.'],
      [2, true, 'Nadador com otalgia e secreção no canal auditivo. Tratamento base?', 'Gotas tópicas e cuidado do canal.', 'Antibiótico sistêmico obrigatório em todos.', 'Diurético.', 'Triptano.', 'Otite externa é tratada localmente na maioria.'],
    ],
    cards: [
      [2, 'OMA precisa de membrana timpânica {{c1::abaulada}}.', 'abaulada', 'Hiperemia isolada não basta.', 'otite', ['cm5', 'orl']],
      [2, 'OME é efusão sem infecção {{c1::aguda}}.', 'aguda', 'Não recebe antibiótico automático.', 'otite', ['cm5', 'ome']],
      [2, 'Otite externa dói ao tracionar {{c1::pavilhão}}.', 'pavilhão', 'Também dói ao pressionar tragus.', 'otite', ['cm5', 'externa']],
      [2, 'Rinossinusite bacteriana é persistente, grave ou de {{c1::piora dupla}}.', 'piora dupla', 'Padrão temporal manda.', 'rinossinusite', ['cm5', 'sinusite']],
      [2, 'Rinite alérgica tem prurido, espirros e rinorreia {{c1::aquosa}}.', 'aquosa', 'Olho coçando reforça alergia.', 'rinite', ['cm5', 'rinite']],
      [2, 'Corticoide {{c1::intranasal}} é pilar da rinite alérgica persistente.', 'intranasal', 'Melhor controle anti-inflamatório local.', 'tratamento', ['cm5', 'rinite']],
      [2, 'Descongestionante tópico prolongado causa rinite {{c1::medicamentosa}}.', 'medicamentosa', 'Rebote piora obstrução.', 'rinite', ['cm5', 'rebote']],
      [2, 'Rinossinusite aguda simples não precisa de {{c1::TC}} de rotina.', 'TC', 'Imagem fica para complicação/atipia.', 'imagem', ['cm5', 'sinusite']],
      [3, 'Diplopia em sinusite sugere complicação {{c1::orbitária}}.', 'orbitária', 'Olho muda gravidade.', 'red_flag', ['cm5', 'sinusite']],
      [2, 'OME persistente deve levantar avaliação de {{c1::audição}}.', 'audição', 'Risco de impacto funcional.', 'otite', ['cm5', 'audicao']],
      [2, 'Amox-clav é lembrada em OMA com conjuntivite {{c1::purulenta}}.', 'purulenta', 'Sugere patógeno produtor de beta-lactamase.', 'tratamento', ['cm5', 'oma']],
      [1, 'Analgesia é parte central do tratamento da {{c1::otalgia}}.', 'otalgia', 'Não trate só o micróbio.', 'tratamento', ['cm5', 'dor']],
    ],
    fontes: ['AAP. **The Diagnosis and Management of Acute Otitis Media**.', 'AAO-HNS. **Clinical Practice Guideline: Acute Otitis Externa**.', 'AAO-HNS. **Clinical Practice Guideline: Allergic Rhinitis**.', 'Harrison Medicina Interna, 21ª edição, capítulos de ORL clínica.', 'Cecil-Goldman Medicine, 26ª edição, capítulos de infecções respiratórias altas.'],
  },
  {
    aula: 'cm5_a14',
    title: 'Faringotonsilites, Disfonias e Surdez',
    ref: 'CDC/IDSA faringite estreptocócica + AAO-HNS disfonia + AAO-HNS surdez súbita + Harrison 21ª ed. + Cecil-Goldman 26ª ed.',
    image: null,
    imageDecision: { usar_imagem: false, motivo: 'Aula depende de decisão clínica, testes e manobras; imagem estática não agrega o suficiente.' },
    relevance: [
      'Faringite, rouquidão e perda auditiva são temas de porta de entrada. A prova quer evitar dois erros: antibiótico para quadro viral e perda de surdez súbita neurossensorial como se fosse cerume.',
      '',
      'Aqui o padrão é: **viral versus estreptocócica**, **abscesso versus faringite simples**, **disfonia benigna versus red flag**, **condutiva versus sensorioneural**.',
      '',
      '> **Pegadinha de prova:** Centor alto não é licença para antibiótico cego em todo mundo. Sintomas virais fortes derrubam probabilidade de estreptococo.',
    ],
    case: [
      '**Ato 1 - Entrada:** adolescente com febre, exsudato tonsilar, linfonodo cervical anterior doloroso e ausência de tosse.',
      '',
      '**Ato 2 - Virada:** outro paciente tem febre, odinofagia, trismo, voz abafada e desvio de úvula.',
      '',
      '**Ato 3 - Decisão:** o primeiro pede teste/tratamento para estreptococo conforme contexto; o segundo é abscesso peritonsilar até prova em contrário.',
      '',
      '> **Moral da vinheta:** garganta não é tudo igual. Trismo e voz abafada mudam o jogo.',
    ],
    sections: [
      ['Faringite Viral versus Estreptocócica', [
        ...table(['Pista', 'Viral', 'GAS'], [
          ['**Tosse/rinorreia**', 'favorece viral', 'contra GAS'],
          ['**Febre/exsudato**', 'pode ocorrer', 'favorece GAS'],
          ['**Linfonodo**', 'variável', 'cervical anterior doloroso'],
          ['**Teste**', 'evita antibiótico indevido', 'RADT/cultura conforme idade'],
        ]),
        '',
        '**Macete MedGradPlus - tosse tira ponto:** tosse, coriza, conjuntivite e rouquidão puxam viral. Exsudato sozinho não manda antibiótico.',
      ]],
      ['EBV e Complicações Supurativas', [
        'EBV causa febre, faringite, linfonodo posterior, fadiga e esplenomegalia. Amoxicilina pode causar rash, que a banca adora usar como pista.',
        '',
        'Abscesso peritonsilar: trismo, voz abafada, sialorreia, desvio de úvula e dor unilateral. Retrofaríngeo tem rigidez cervical, toxemia e risco de via aérea.',
        '',
        '> **Armadilha de banca:** trismo não é faringite simples. Pense coleção e via aérea.',
      ]],
      ['Disfonia', [
        'Disfonia aguda após IVAS costuma ser laringite viral. Mas disfonia persistente ou com red flags exige laringoscopia.',
        '',
        'Red flags: tabagismo, etilismo, hemoptise, disfagia, odinofagia, perda de peso, massa cervical, estridor, profissional da voz ou duração maior que 4 semanas.',
        '',
        '**Macete MedGradPlus - rouquidão que passa não assusta; rouquidão que fica investiga:** principalmente em tabagista.',
      ]],
      ['Surdez Condutiva versus Sensorioneural', [
        ...table(['Teste', 'Condutiva', 'Sensorioneural'], [
          ['**Rinne**', 'BC > AC no ouvido afetado', 'AC > BC'],
          ['**Weber**', 'lateraliza para afetado', 'lateraliza para melhor ouvido'],
          ['**Exemplo**', 'cerume, otite, otosclerose', 'surdez súbita, presbiacusia, Ménière'],
        ]),
        '',
        'Rinne normal é condução aérea maior que óssea. Weber ajuda a localizar lateralização.',
      ]],
      ['Surdez Súbita', [
        'Surdez súbita neurossensorial é perda rápida, geralmente unilateral, em até 72 horas. É urgência otológica.',
        '',
        'Não chame de cerume sem otoscopia e sem pensar em audiometria. A janela de corticoide e avaliação especializada importa.',
        '',
        '> **Pérola Clínica:** perda auditiva súbita não é "volta se não melhorar". É tempo-dependente.',
      ]],
    ],
    key: ['Sintomas virais fortes reduzem chance de GAS.', 'Exsudato isolado não basta.', 'RADT/cultura evita antibiótico indevido.', 'EBV dá linfonodo posterior e esplenomegalia.', 'Amoxicilina em EBV pode dar rash.', 'Trismo e voz abafada sugerem abscesso.', 'Disfonia >4 semanas ou tabagista precisa laringoscopia.', 'Rinne normal é AC > BC.', 'Weber lateraliza para o lado condutivo.', 'Surdez súbita neurossensorial é urgência.', 'Não culpe cerume sem examinar.', 'Estridor é red flag de via aérea.'],
    quiz: [
      ['Qual achado favorece faringite viral?', 'Tosse e rinorreia', 'Ausência de tosse', 'Exsudato com febre isolado', 'Linfonodo anterior doloroso', 'Tosse/coriza apontam viral.'],
      ['EBV sugere:', 'Linfonodo posterior e esplenomegalia', 'Cilindro hemático', 'Dor orbitária autonômica', 'Papiledema', 'Mononucleose tem padrão sistêmico.'],
      ['Trismo, voz abafada e desvio de úvula sugerem:', 'Abscesso peritonsilar', 'Rinite alérgica', 'OME', 'Migrânea', 'Coleção peritonsilar muda conduta.'],
      ['Disfonia persistente em tabagista pede:', 'Laringoscopia', 'Antibiótico mensal', 'Triptano', 'Epley', 'Red flag oncológica.'],
      ['Rinne normal é:', 'Condução aérea maior que óssea', 'Condução óssea sempre maior', 'Ausência de audição', 'Teste visual', 'AC > BC é normal.'],
      ['Surdez súbita neurossensorial deve ser tratada como:', 'Urgência otológica', 'Queixa estética', 'Cistite', 'Rinite', 'Janela terapêutica importa.'],
    ],
    questions: [
      [2, true, 'Paciente com tosse, coriza, rouquidão e odinofagia. Conduta mais provável?', 'Suporte; quadro sugere viral.', 'Penicilina obrigatória sem teste.', 'Drenagem peritonsilar.', 'Corticoide intratimpânico.', 'Sintomas virais reduzem probabilidade de GAS.'],
      [2, true, 'Febre, exsudato, linfonodo anterior doloroso e ausência de tosse. Próximo passo em muitos contextos?', 'Testar/tratar GAS conforme idade e disponibilidade.', 'Ignorar sempre.', 'Tratar como EBV obrigatório.', 'Fazer TC de crânio.', 'Quadro aumenta chance de estreptococo.'],
      [2, true, 'Febre, faringite, linfonodo posterior, fadiga e esplenomegalia. Diagnóstico provável?', 'Mononucleose por EBV.', 'Cistite.', 'VPPB.', 'CRAO.', 'O padrão é mononucleose.'],
      [3, true, 'Odinofagia, trismo, voz abafada e desvio de úvula. Hipótese?', 'Abscesso peritonsilar.', 'Faringite viral simples.', 'Rinite alérgica.', 'Surdez súbita.', 'Trismo e desvio de úvula sugerem coleção.'],
      [2, false, 'Disfonia persistente por mais de 4 semanas em tabagista exige:', 'Laringoscopia/avaliação especializada.', 'Antibiótico para sinusite sempre.', 'Alta sem retorno.', 'Teste de gravidez apenas.', 'Persistência e tabagismo são red flags.'],
      [2, false, 'Weber lateraliza para o ouvido afetado em:', 'Perda condutiva.', 'Perda sensorioneural sempre.', 'Meningite.', 'Dermatite.', 'Perda condutiva amplifica percepção óssea no lado afetado.'],
      [2, false, 'Rinne com condução óssea maior que aérea no ouvido direito sugere:', 'Perda condutiva direita.', 'Audição normal direita.', 'Surdez central obrigatória.', 'Vertigem central.', 'BC > AC é anormal e condutivo.'],
      [3, true, 'Perda auditiva unilateral em 24 horas, sem cerume ao exame. Conduta?', 'Tratar como surdez súbita neurossensorial e encaminhar com urgência.', 'Aguardar 6 meses.', 'Dar anti-histamínico apenas.', 'Epley.', 'SSNHL é tempo-dependente.'],
      [2, false, 'Qual achado contraindica tratar como faringite simples banal?', 'Estridor.', 'Odinofagia leve.', 'Coriza clara.', 'Espirro isolado.', 'Estridor indica via aérea.'],
      [1, false, 'Agente clássico de faringite bacteriana que preocupa febre reumática:', 'Streptococcus pyogenes.', 'Rinovírus.', 'Candida auris.', 'Malassezia.', 'GAS é o alvo clássico.'],
      [2, true, 'Paciente com EBV recebe amoxicilina e faz exantema. Interpretação?', 'Rash associado à mononucleose, não alergia obrigatória.', 'Anafilaxia sempre.', 'Psoríase.', 'CRAO.', 'Rash com aminopenicilina é pista de EBV.'],
      [2, false, 'Rouquidão aguda pós-IVAS sem red flags geralmente é:', 'Laringite viral autolimitada.', 'Câncer obrigatório.', 'SSNHL.', 'Glaucoma.', 'Quadro agudo típico é benigno.'],
    ],
    cards: [
      [2, 'Tosse, coriza e rouquidão favorecem faringite {{c1::viral}}.', 'viral', 'Reduz probabilidade de GAS.', 'faringite', ['cm5', 'orl']],
      [2, 'GAS clássico tem febre, exsudato e ausência de {{c1::tosse}}.', 'tosse', 'Centor/McIsaac ajudam probabilidade.', 'faringite', ['cm5', 'gas']],
      [2, 'EBV causa linfonodo posterior e {{c1::esplenomegalia}}.', 'esplenomegalia', 'Evitar esporte se baço aumentado.', 'ebv', ['cm5', 'mononucleose']],
      [2, 'Amoxicilina em EBV pode causar {{c1::rash}}.', 'rash', 'Não significa alergia obrigatória.', 'ebv', ['cm5', 'rash']],
      [3, 'Trismo e desvio de úvula sugerem abscesso {{c1::peritonsilar}}.', 'peritonsilar', 'Não é faringite simples.', 'abscesso', ['cm5', 'orl']],
      [2, 'Disfonia >4 semanas em tabagista pede {{c1::laringoscopia}}.', 'laringoscopia', 'Red flag oncológica.', 'disfonia', ['cm5', 'voz']],
      [2, 'Rinne normal é condução aérea maior que {{c1::óssea}}.', 'óssea', 'AC > BC.', 'audicao', ['cm5', 'rinne']],
      [2, 'Weber lateraliza para o lado afetado na perda {{c1::condutiva}}.', 'condutiva', 'Na sensorioneural lateraliza para o melhor ouvido.', 'audicao', ['cm5', 'weber']],
      [3, 'Surdez súbita neurossensorial é urgência {{c1::otológica}}.', 'otológica', 'Audiometria e tratamento têm janela.', 'surdez', ['cm5', 'ssnhl']],
      [2, 'Estridor em dor de garganta é red flag de {{c1::via aérea}}.', 'via aérea', 'Prioridade muda.', 'red_flag', ['cm5', 'estridor']],
      [2, 'Cultura após RADT negativo é mais lembrada em {{c1::crianças}}.', 'crianças', 'Risco de febre reumática muda estratégia.', 'faringite', ['cm5', 'gas']],
      [1, 'Penicilina/amoxicilina tratam faringite por {{c1::GAS}}.', 'GAS', 'Quando diagnóstico é confirmado/provável conforme protocolo.', 'tratamento', ['cm5', 'gas']],
    ],
    fontes: ['CDC. **Clinical Guidance for Group A Streptococcal Pharyngitis**.', 'IDSA. **Streptococcal Pharyngitis Guideline**.', 'AAO-HNS. **Clinical Practice Guideline: Hoarseness (Dysphonia)**.', 'AAO-HNS. **Sudden Hearing Loss Guideline Update**.', 'Harrison Medicina Interna, 21ª edição, capítulos de ORL e infectologia.'],
  },
  {
    aula: 'cm5_a15',
    title: 'Labirintopatias e Vertigem',
    ref: 'AAO-HNS BPPV + SAEM GRACE-3 dizziness + AAO-HNS Ménière + Harrison 21ª ed. + Cecil-Goldman 26ª ed.',
    image: null,
    imageDecision: { usar_imagem: false, motivo: 'Vertigem é melhor ensinada por timing/gatilho e manobras descritas; imagem estática tende a confundir.' },
    relevance: [
      'Vertigem é um campo onde a palavra "labirintite" atrapalha. A prova quer que você pare de usar diagnóstico genérico e classifique por **tempo**, **gatilho**, **sintomas auditivos** e **sinais centrais**.',
      '',
      'O alvo é reconhecer VPPB, neurite vestibular, Ménière, migrânea vestibular e AVC de fossa posterior.',
      '',
      '> **Pegadinha de prova:** TC normal não exclui AVC de fossa posterior. Se há sinal central, não se tranquilize com uma TC ruim para essa pergunta.',
    ],
    case: [
      '**Ato 1 - Entrada:** mulher de 54 anos tem vertigem de segundos ao virar na cama. Dix-Hallpike reproduz sintomas e nistagmo típico.',
      '',
      '**Ato 2 - Virada:** homem de 68 anos com HAS chega com vertigem contínua, ataxia importante, nistagmo vertical e disartria.',
      '',
      '**Ato 3 - Decisão:** a primeira vinheta é VPPB e pede Epley. A segunda é central até prova em contrário.',
      '',
      '> **Moral da vinheta:** vertigem com gatilho posicional breve não é igual a vertigem contínua com ataxia.',
    ],
    sections: [
      ['Abordagem por Timing e Gatilho', [
        ...table(['Padrão', 'Exemplo', 'Pista'], [
          ['**Episódica desencadeada**', 'VPPB', 'segundos, posição'],
          ['**Episódica espontânea**', 'Ménière, migrânea vestibular', 'minutos-horas'],
          ['**Contínua aguda**', 'neurite ou AVC', 'dias, nistagmo, náusea'],
        ]),
        '',
        '**Macete MedGradPlus - tempo antes do rótulo:** pergunte duração e gatilho antes de dizer labirintite.',
      ]],
      ['VPPB', [
        'VPPB é vertigem breve, posicional, desencadeada por virar na cama, olhar para cima ou mudar posição da cabeça.',
        '',
        'Dix-Hallpike diagnostica canal posterior; Epley trata. Remédio vestibular prolongado só atrasa compensação.',
        '',
        '> **Armadilha de banca:** VPPB não precisa de RM em todo caso típico. Precisa de manobra correta.',
      ]],
      ['Síndrome Vestibular Aguda', [
        'Vertigem contínua por dias com náusea, nistagmo e intolerância ao movimento pode ser neurite vestibular ou AVC.',
        '',
        'HINTS é útil apenas no paciente certo e por examinador treinado. Não use HINTS em tontura episódica sem nistagmo contínuo.',
        '',
        '**Macete MedGradPlus - HINTS não é brinquedo:** aplicar no contexto errado dá falsa segurança.',
      ]],
      ['Sinais Centrais', [
        'Red flags centrais: nistagmo vertical, nistagmo que muda de direção, skew deviation, ataxia grave, disartria, diplopia, déficit focal, cefaleia nova e risco vascular.',
        '',
        'AVC de cerebelo pode parecer "labirintite" no começo. A diferença está no exame neurológico e no padrão do nistagmo.',
        '',
        '> **Pérola Clínica:** incapacidade de andar sem apoio em vertigem aguda é central até provar o contrário.',
      ]],
      ['Ménière e Migrânea Vestibular', [
        ...table(['Doença', 'Pistas', 'Conduta'], [
          ['**Ménière**', 'vertigem minutos-horas, tinnitus, plenitude, hipoacusia', 'restrição sal, manejo ORL'],
          ['**Migrânea vestibular**', 'história migranosa, foto/fonofobia, aura', 'profilaxia migrânea se recorrente'],
          ['**Labirintite**', 'vertigem com perda auditiva inflamatória/infecciosa', 'não usar como rótulo genérico'],
        ]),
        '',
        'Neurite vestibular não deve ter perda auditiva importante. Se tem perda auditiva, mude a hipótese.',
      ]],
    ],
    key: ['Vertigem se aborda por tempo e gatilho.', 'VPPB dura segundos e é posicional.', 'Dix-Hallpike diagnostica VPPB posterior.', 'Epley trata VPPB posterior.', 'Neurite vestibular é contínua e sem perda auditiva.', 'Labirintite tem perda auditiva.', 'Ménière tem vertigem, tinnitus, plenitude e hipoacusia.', 'Migrânea vestibular tem pistas migranosas.', 'Nistagmo vertical é central.', 'Ataxia grave é red flag.', 'TC normal não exclui AVC posterior.', 'HINTS só no contexto correto.'],
    quiz: [
      ['Vertigem de segundos ao virar na cama sugere:', 'VPPB', 'CRAO', 'Faringite GAS', 'Demência', 'Padrão posicional breve é VPPB.'],
      ['Tratamento de VPPB de canal posterior:', 'Manobra de Epley', 'Antibiótico', 'Insulina', 'Punção lombar', 'Reposicionamento canalicular trata a causa.'],
      ['Nistagmo vertical sugere:', 'Lesão central', 'VPPB típica sempre', 'Rinite alérgica', 'Otite externa', 'Vertical é red flag central.'],
      ['Ménière combina vertigem com:', 'Tinnitus, plenitude e hipoacusia', 'Proteinúria', 'Exantema purpúrico', 'Disúria', 'Sintomas auditivos definem pista.'],
      ['HINTS deve ser usado principalmente em:', 'Síndrome vestibular aguda contínua com nistagmo', 'Tontura de segundos sem nistagmo', 'Dor de garganta', 'Rinite', 'Contexto errado invalida.'],
      ['TC normal em suspeita de AVC posterior:', 'Não exclui com segurança', 'Exclui sempre', 'Diagnostica VPPB', 'Substitui exame neurológico', 'Fossa posterior é limitação clássica.'],
    ],
    questions: [
      [2, true, 'Vertigem breve ao virar na cama com Dix-Hallpike positivo. Tratamento?', 'Manobra de Epley.', 'Antibiótico venoso.', 'Trombólise obrigatória.', 'Amoxicilina.', 'VPPB de canal posterior trata com reposicionamento.'],
      [2, false, 'Vertigem contínua por dias sem perda auditiva após IVAS sugere:', 'Neurite vestibular.', 'Ménière obrigatória.', 'OMA.', 'Psoríase.', 'Neurite dá síndrome vestibular aguda periférica sem audição.'],
      [3, true, 'Vertigem contínua, disartria, ataxia grave e nistagmo vertical. Conduta?', 'Tratar como central/AVC até prova em contrário.', 'Epley domiciliar e alta.', 'Antibiótico para OMA.', 'Corticoide nasal.', 'Sinais centrais são red flags.'],
      [2, false, 'Ménière é sugerida por:', 'Vertigem recorrente com tinnitus, plenitude e hipoacusia.', 'Vertigem de 5 segundos sem audição.', 'Dor de garganta.', 'Rash vesicular dermatomal.', 'Sintomas auditivos flutuantes são pista.'],
      [2, false, 'HINTS é mais apropriado em:', 'Síndrome vestibular aguda contínua com nistagmo.', 'Vertigem posicional breve típica.', 'Faringite viral.', 'Surdez condutiva por cerume.', 'HINTS precisa contexto específico.'],
      [2, false, 'Qual achado diferencia labirintite de neurite vestibular?', 'Perda auditiva.', 'Náusea.', 'Vertigem.', 'Intolerância ao movimento.', 'Audição muda hipótese.'],
      [2, false, 'Migrânea vestibular costuma ter:', 'História migranosa ou foto/fonofobia associada.', 'Cilindros hemáticos.', 'Abaulamento timpânico.', 'Proteinúria maciça.', 'Pistas migranosas orientam diagnóstico.'],
      [2, true, 'Paciente com VPPB típica solicita RM. Melhor resposta?', 'Não é rotina se quadro típico e sem red flags.', 'Sempre fazer antes de Epley.', 'Nunca examinar.', 'Punção lombar obrigatória.', 'Quadro típico não precisa RM automática.'],
      [3, false, 'Qual achado é central em vertigem?', 'Skew deviation.', 'Náusea isolada.', 'Piora com movimento.', 'Vômito isolado.', 'Skew aponta tronco/cerebelo.'],
      [2, false, 'Vertigem com incapacidade de andar sem apoio deve acender alerta para:', 'Causa central.', 'Rinite alérgica.', 'OME.', 'Faringite viral.', 'Ataxia grave é red flag.'],
      [2, false, 'Medicamento vestibular prolongado em VPPB é ruim porque:', 'Atrasa compensação e não reposiciona otólitos.', 'Cura otólitos sempre.', 'Substitui Epley.', 'Previne AVC.', 'A causa é mecânica.'],
      [2, false, 'TC de crânio normal em vertigem central suspeita:', 'Não exclui AVC de fossa posterior.', 'Fecha VPPB.', 'Exclui toda doença grave.', 'Diagnostica Ménière.', 'TC tem baixa sensibilidade inicial.'],
    ],
    cards: [
      [2, 'VPPB é vertigem breve desencadeada por {{c1::posição}}.', 'posição', 'Segundos ao virar na cama.', 'vppb', ['cm5', 'vertigem']],
      [2, 'Dix-Hallpike diagnostica VPPB de canal {{c1::posterior}}.', 'posterior', 'Reproduz vertigem e nistagmo típico.', 'vppb', ['cm5', 'dix']],
      [2, 'Epley é tratamento de {{c1::VPPB}}.', 'VPPB', 'Reposiciona otólitos.', 'tratamento', ['cm5', 'epley']],
      [2, 'Neurite vestibular não deve ter perda {{c1::auditiva}} importante.', 'auditiva', 'Perda auditiva sugere labirintite/Ménière.', 'neurite', ['cm5', 'vertigem']],
      [2, 'Ménière combina vertigem, tinnitus, plenitude e {{c1::hipoacusia}}.', 'hipoacusia', 'Crises duram minutos a horas.', 'meniere', ['cm5', 'vertigem']],
      [3, 'Nistagmo vertical sugere causa {{c1::central}}.', 'central', 'Red flag de tronco/cerebelo.', 'central', ['cm5', 'vertigem']],
      [3, 'Ataxia grave em vertigem aguda sugere {{c1::AVC}} posterior.', 'AVC', 'Não tranquilizar com TC normal.', 'central', ['cm5', 'avc']],
      [2, 'HINTS só serve na síndrome vestibular aguda {{c1::contínua}}.', 'contínua', 'Não usar em tontura episódica.', 'hints', ['cm5', 'hints']],
      [2, 'Migrânea vestibular associa vertigem a pistas {{c1::migranosas}}.', 'migranosas', 'Foto/fonofobia e história de migrânea ajudam.', 'migranea', ['cm5', 'vertigem']],
      [2, 'Labirintite verdadeira combina vertigem e perda {{c1::auditiva}}.', 'auditiva', 'Não usar como rótulo genérico.', 'labirintite', ['cm5', 'orl']],
      [2, 'TC normal não exclui AVC de fossa {{c1::posterior}}.', 'posterior', 'Limitação de sensibilidade.', 'imagem', ['cm5', 'avc']],
      [1, 'Vertigem deve ser classificada por tempo e {{c1::gatilho}}.', 'gatilho', 'Evita rótulo genérico.', 'abordagem', ['cm5', 'vertigem']],
    ],
    fontes: ['AAO-HNS. **Clinical Practice Guideline: Benign Paroxysmal Positional Vertigo**.', 'SAEM. **GRACE-3: Acute Dizziness and Vertigo**.', 'AAO-HNS. **Clinical Practice Guideline: Ménière Disease**.', 'Harrison Medicina Interna, 21ª edição, capítulos de tontura e vertigem.', 'Cecil-Goldman Medicine, 26ª edição, capítulos de neurologia e ORL.'],
  },
  {
    aula: 'cm5_a16',
    title: 'Anatomia e Fisiologia da Visão, Olho Vermelho e Trauma',
    ref: 'AAO Preferred Practice Pattern conjunctivitis/keratitis + AAO EyeWiki trauma ocular + Harrison 21ª ed. + Cecil-Goldman 26ª ed.',
    image: {
      id: 'CM5-A16-F01',
      urlImagem: 'https://upload.wikimedia.org/wikipedia/commons/1/1e/Schematic_diagram_of_the_human_eye_en.svg',
      urlThumbnail: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Schematic_diagram_of_the_human_eye_en.svg/960px-Schematic_diagram_of_the_human_eye_en.svg.png',
      urlPaginaCommons: 'https://commons.wikimedia.org/wiki/File:Schematic_diagram_of_the_human_eye_en.svg',
      licenca: 'CC BY-SA 3.0',
      credito: 'Rhcastilhos and Jmarchn',
      legenda: 'Anatomia básica do olho. Córnea, câmara anterior, cristalino, retina e nervo óptico orientam o raciocínio do olho vermelho e do trauma.',
      descricaoVisual: 'Esquema anatômico do olho humano.',
      momento: 'Após relevância, antes da abordagem do olho vermelho.',
      buscaEn: 'schematic diagram human eye',
      buscaPt: 'diagrama olho humano anatomia',
    },
    imageDecision: { usar_imagem: true, figura_id: 'CM5-A16-F01', motivo: 'Anatomia ocular é base para localizar córnea, câmara anterior, retina e nervo óptico na triagem de olho vermelho/trauma.' },
    relevance: [
      'Olho vermelho é uma aula de triagem de risco. A prova não quer que você saiba todos os colírios; quer que você reconheça quando não é conjuntivite simples.',
      '',
      'Os gatilhos de urgência são **dor intensa**, **fotofobia verdadeira**, **baixa visual**, **trauma**, **lente de contato**, **pupila anormal** e **suspeita de globo aberto**.',
      '',
      '> **Pegadinha de prova:** olho vermelho com dor e baixa visual não é conjuntivite até prova em contrário.',
    ],
    case: [
      '**Ato 1 - Entrada:** jovem com secreção ocular bilateral, prurido, sem dor e sem baixa visual após contato com colega gripado.',
      '',
      '**Ato 2 - Virada:** usuário de lente de contato tem dor, fotofobia e defeito corneano que cora com fluoresceína.',
      '',
      '**Ato 3 - Decisão:** a primeira vinheta é conjuntivite provável. A segunda é ceratite até prova em contrário e precisa urgência oftalmológica.',
      '',
      '> **Moral da vinheta:** olho vermelho sem dor e com visão normal é um mundo; olho vermelho doloroso com lente de contato é outro.',
    ],
    sections: [
      ['Figura sugerida', ['**Figura-ID:** `CM5-A16-F01`', '- **Momento:** abertura da aula, antes de classificar olho vermelho.', '- **Descrição técnica:** córnea, câmara anterior, cristalino, retina e nervo óptico.', '- **Legenda:** anatomia básica para localizar as urgências de olho vermelho e trauma.']],
      ['Localização Anatômica', [
        ...table(['Estrutura', 'Função', 'Quando cai'], [
          ['**Córnea**', 'refração e barreira', 'abrasão, ceratite, corpo estranho'],
          ['**Câmara anterior**', 'humor aquoso', 'hifema, uveíte, glaucoma agudo'],
          ['**Cristalino**', 'acomodação', 'catarata e trauma'],
          ['**Retina**', 'fototransdução', 'descolamento e oclusões'],
          ['**Nervo óptico**', 'sinal visual', 'neurite e papiledema'],
        ]),
        '',
        '**Macete MedGradPlus - dor localiza profundidade:** conjuntiva coça; córnea dói e dá fotofobia; pressão alta no olho dá náusea e halos.',
      ]],
      ['Olho Vermelho: Triagem', [
        'Pergunte visão, dor, fotofobia, trauma, lente de contato, secreção, pupila, cefaleia, náusea e exposição química.',
        '',
        'Fotofobia consensual é sinal ruim: iluminar o olho bom causa dor no olho doente, sugerindo uveíte/iritis.',
        '',
        '> **Armadilha de banca:** secreção não exclui ceratite. Usuário de lente de contato com dor é Pseudomonas até prova em contrário.',
      ]],
      ['Conjuntivite, Ceratite, Uveíte e Glaucoma', [
        ...table(['Doença', 'Pista', 'Perigo'], [
          ['**Conjuntivite**', 'prurido/secreção, visão preservada', 'contágio, higiene'],
          ['**Ceratite**', 'dor, fotofobia, fluoresceína', 'úlcera e cicatriz'],
          ['**Uveíte**', 'fotofobia consensual, miose', 'doença sistêmica'],
          ['**Glaucoma agudo**', 'dor, halos, náusea, midríase média', 'perda visual'],
          ['**Esclerite**', 'dor profunda intensa', 'vasculite associada'],
        ]),
        '',
        'Hiposfagma isolado assusta no espelho, mas costuma ser benigno se não há trauma grave, dor ou baixa visual.',
      ]],
      ['Trauma Ocular', [
        'Queimadura química é a emergência mais direta: irrigue imediatamente antes de completar burocracia do exame.',
        '',
        'Suspeita de globo aberto: escudo rígido, não comprimir, não medir pressão intraocular, NPO, antiemético, antibiótico sistêmico e oftalmologia.',
        '',
        '**Macete MedGradPlus - química lava, globo aberto protege:** irrigar queimadura; não apertar globo perfurado.',
      ]],
      ['Condutas que Não Pode Errar', [
        'Lente de contato com dor: pensar ceratite bacteriana, especialmente Pseudomonas.',
        '',
        'Glaucoma agudo: dor ocular, halos, náusea/vômito, midríase média fixa e córnea turva. É urgência.',
        '',
        '> **Pérola Clínica:** antes de chamar de conjuntivite, prove que a visão está preservada e que não há dor/fotofobia relevante.',
      ]],
    ],
    key: ['Córnea dolorosa dá fotofobia.', 'Conjuntivite simples preserva visão.', 'Lente de contato com dor é red flag.', 'Fluoresceína marca abrasão/úlcera.', 'Fotofobia consensual sugere uveíte.', 'Glaucoma agudo dá dor, halos, náusea e midríase.', 'Hiposfagma isolado costuma ser benigno.', 'Queimadura química exige irrigação imediata.', 'Globo aberto não recebe tonometria.', 'Use escudo rígido em globo aberto.', 'Hifema pós-trauma exige avaliação.', 'Baixa visual sempre muda urgência.'],
    quiz: [
      ['Olho vermelho com baixa visual e dor deve ser tratado como:', 'Urgência até prova em contrário', 'Conjuntivite simples sempre', 'Rinite', 'OME', 'Dor + baixa visual muda risco.'],
      ['Queimadura química ocular exige primeiro:', 'Irrigação imediata', 'TC de crânio', 'Esperar oftalmo chegar', 'Colírio anestésico domiciliar', 'Tempo de irrigação salva visão.'],
      ['Suspeita de globo aberto contraindica:', 'Tonometria', 'Escudo rígido', 'Antiemético', 'NPO', 'Não comprimir nem medir PIO.'],
      ['Usuário de lente com dor e fluoresceína positiva sugere:', 'Ceratite', 'Conjuntivite banal', 'Rinite', 'Cefaleia tensional', 'Ceratite pode ameaçar córnea.'],
      ['Glaucoma agudo tem:', 'Dor, halos, náusea e midríase média', 'Prurido nasal', 'Otalgia', 'Vertigem posicional', 'Quadro autonômico ocular.'],
      ['Fotofobia consensual aponta para:', 'Uveíte/iritis', 'Hiposfagma simples', 'OME', 'Psoríase', 'Dor ao iluminar o olho bom é sinal intraocular.'],
    ],
    questions: [
      [2, true, 'Olho vermelho, prurido, secreção, visão normal e sem dor. Diagnóstico mais provável?', 'Conjuntivite.', 'Glaucoma agudo.', 'Globo aberto.', 'CRAO.', 'Sem dor/baixa visual favorece conjuntivite simples.'],
      [3, true, 'Usuário de lente de contato com dor, fotofobia e defeito corneano. Conduta?', 'Suspeitar ceratite e encaminhar/tratar com urgência.', 'Tratar como rinite.', 'Alta sem exame.', 'Epley.', 'Lente + dor é red flag corneano.'],
      [3, true, 'Produto químico atinge olho. Primeira conduta?', 'Irrigação imediata.', 'Medir acuidade antes de tudo sempre.', 'Esperar pH sem lavar.', 'Antibiótico oral apenas.', 'Irrigação não pode atrasar.'],
      [3, true, 'Trauma com suspeita de globo aberto. O que evitar?', 'Tonometria e compressão ocular.', 'Escudo rígido.', 'Antiemético.', 'NPO.', 'Pressão pode extruir conteúdo ocular.'],
      [2, false, 'Glaucoma agudo é sugerido por:', 'Dor ocular, halos, náusea e pupila média fixa.', 'Prurido bilateral leve.', 'Otalgia.', 'Disúria.', 'Quadro é doloroso e sistêmico.'],
      [2, false, 'Fotofobia consensual sugere:', 'Uveíte anterior.', 'Hiposfagma benigno isolado.', 'Rinite alérgica.', 'OME.', 'Dor consensual sugere inflamação intraocular.'],
      [2, false, 'Hiposfagma isolado sem dor/trauma/baixa visual costuma ser:', 'Benigno e autolimitado.', 'Glaucoma agudo obrigatório.', 'Ceratite grave sempre.', 'Meningite.', 'Sangue subconjuntival isolado assusta mas tende a ser benigno.'],
      [2, false, 'Fluoresceína ajuda a detectar:', 'Abrasão ou úlcera de córnea.', 'Demência.', 'Surdez súbita.', 'Adenomegalia.', 'Corante evidencia epitélio corneano.'],
      [2, true, 'Dor ocular profunda intensa com hiperemia violácea sugere:', 'Esclerite.', 'Rinite.', 'Cefaleia tensional.', 'OME.', 'Esclerite dói muito e pode ser sistêmica.'],
      [2, false, 'Baixa visual em olho vermelho indica:', 'Avaliação urgente.', 'Conjuntivite banal sempre.', 'Esperar 6 meses.', 'Sem necessidade de exame.', 'Visão reduzida é red flag.'],
      [2, true, 'Hifema após trauma ocular é:', 'Sangue na câmara anterior e precisa avaliação.', 'Rinite medicamentosa.', 'Otite externa.', 'Psoríase.', 'Hifema pode elevar PIO e ameaçar visão.'],
      [2, false, 'Câmara anterior se relaciona a:', 'Humor aquoso e pressão intraocular.', 'Tímpano.', 'Linfonodo.', 'Baço.', 'Anatomia orienta glaucoma/hifema.'],
    ],
    cards: [
      [2, 'Olho vermelho com dor e baixa visual é {{c1::urgência}}.', 'urgência', 'Não trate como conjuntivite banal.', 'olho_vermelho', ['cm5', 'oftalmo']],
      [3, 'Queimadura química ocular exige {{c1::irrigação imediata}}.', 'irrigação imediata', 'Não espere completar exame.', 'trauma', ['cm5', 'queimadura']],
      [3, 'Globo aberto contraindica {{c1::tonometria}}.', 'tonometria', 'Não comprimir o olho.', 'trauma', ['cm5', 'globo_aberto']],
      [2, 'Lente de contato com dor sugere {{c1::ceratite}}.', 'ceratite', 'Pseudomonas é preocupação.', 'cornea', ['cm5', 'lente']],
      [2, 'Fluoresceína evidencia abrasão/úlcera de {{c1::córnea}}.', 'córnea', 'Útil em dor/fotofobia.', 'cornea', ['cm5', 'fluoresceina']],
      [2, 'Fotofobia consensual sugere {{c1::uveíte}}.', 'uveíte', 'Dor ao iluminar o olho contralateral.', 'uveite', ['cm5', 'fotofobia']],
      [2, 'Glaucoma agudo dá dor, halos, náusea e pupila {{c1::média fixa}}.', 'média fixa', 'Urgência visual.', 'glaucoma', ['cm5', 'glaucoma']],
      [1, 'Hiposfagma isolado sem dor costuma ser {{c1::benigno}}.', 'benigno', 'Verificar trauma/anticoagulação se contexto.', 'conjuntiva', ['cm5', 'hiposfagma']],
      [2, 'Esclerite causa dor ocular {{c1::profunda}} intensa.', 'profunda', 'Associa doença sistêmica.', 'esclerite', ['cm5', 'olho']],
      [2, 'Hifema é sangue na câmara {{c1::anterior}}.', 'anterior', 'Pode elevar PIO.', 'trauma', ['cm5', 'hifema']],
      [2, 'Córnea é estrutura-chave em dor e {{c1::fotofobia}}.', 'fotofobia', 'Lesão corneana dói muito.', 'anatomia', ['cm5', 'cornea']],
      [2, 'Baixa visual é red flag em olho {{c1::vermelho}}.', 'vermelho', 'Muda urgência.', 'red_flag', ['cm5', 'olho']],
    ],
    fontes: ['AAO. **Conjunctivitis Preferred Practice Pattern**.', 'AAO. **Bacterial Keratitis Preferred Practice Pattern**.', 'AAO EyeWiki. **Pre-Ophthalmologist Management of Eye Trauma**.', 'Harrison Medicina Interna, 21ª edição, capítulos de oftalmologia clínica.', 'Cecil-Goldman Medicine, 26ª edição, capítulos de urgências oculares.'],
  },
  {
    aula: 'cm5_a17',
    title: 'Perda Súbita da Visão e Fundo de Olho',
    ref: 'AAO/EyeWiki retina e papiledema + AHA retinal stroke + Harrison 21ª ed. + Cecil-Goldman 26ª ed.',
    image: {
      id: 'CM5-A17-F01',
      urlImagem: 'https://upload.wikimedia.org/wikipedia/commons/3/37/Fundus_photograph_of_normal_right_eye.jpg',
      urlThumbnail: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Fundus_photograph_of_normal_right_eye.jpg/960px-Fundus_photograph_of_normal_right_eye.jpg',
      urlPaginaCommons: 'https://commons.wikimedia.org/wiki/File:Fundus_photograph_of_normal_right_eye.jpg',
      licenca: 'CC0',
      credito: 'Mikael Häggström',
      legenda: 'Fundo de olho normal. Papila, mácula e vasos são o mapa básico para reconhecer oclusões, papiledema e retinopatia.',
      descricaoVisual: 'Fotografia de fundo de olho normal.',
      momento: 'Na abertura do bloco de fundo de olho.',
      buscaEn: 'normal fundus photograph right eye',
      buscaPt: 'fundo de olho normal retina',
    },
    imageDecision: { usar_imagem: true, figura_id: 'CM5-A17-F01', motivo: 'Fundo de olho normal é referência visual essencial para interpretar perda súbita da visão e retinopatias.' },
    relevance: [
      'Perda súbita da visão é AVC, retina, nervo óptico ou meio ocular até prova em contrário. O aluno que chama tudo de "descolamento" ou "enxaqueca ocular" perde diagnóstico tempo-dependente.',
      '',
      'A aula usa três eixos: **monocular versus binocular**, **dolorosa versus indolor**, **transitória versus persistente**.',
      '',
      '> **Pegadinha de prova:** oclusão de artéria central da retina é AVC ocular. Não é colírio e retorno ambulatorial.',
    ],
    case: [
      '**Ato 1 - Entrada:** homem de 72 anos perde visão monocular direita de forma súbita, indolor e persistente. Fundo mostra retina pálida e mácula em cereja.',
      '',
      '**Ato 2 - Virada:** mulher de 63 anos tem cefaleia temporal, claudicação mandibular e perda visual. O residente quer esperar biópsia.',
      '',
      '**Ato 3 - Decisão:** CRAO aciona protocolo vascular; arterite temporal com risco visual recebe corticoide imediato se suspeita forte.',
      '',
      '> **Moral da vinheta:** retina também é circulação. Tempo perdido vira cegueira.',
    ],
    sections: [
      ['Figura sugerida', ['**Figura-ID:** `CM5-A17-F01`', '- **Momento:** abertura do bloco de fundo de olho.', '- **Descrição técnica:** papila óptica, mácula, vasos e retina normal.', '- **Legenda:** fundo normal para comparar com oclusões, papiledema e retinopatia.']],
      ['Eixos da Perda Visual', [
        ...table(['Eixo', 'Pergunta', 'Exemplo'], [
          ['**Monocular**', 'olho ou nervo óptico?', 'CRAO, CRVO, descolamento, neurite'],
          ['**Binocular**', 'via retroquiasmática?', 'AVC occipital, migrânea aura'],
          ['**Dolorosa**', 'inflamação/pressão?', 'neurite, glaucoma, uveíte'],
          ['**Indolor**', 'vascular/retina?', 'CRAO, CRVO, descolamento'],
        ]),
        '',
        '**Macete MedGradPlus - um olho é pré-quiasma:** perda monocular localiza antes do quiasma, até prova em contrário.',
      ]],
      ['CRAO e CRVO', [
        'CRAO: perda visual monocular súbita, indolor e grave; retina pálida e mancha vermelho-cereja. É stroke ocular.',
        '',
        'CRVO: perda subaguda ou súbita, fundo em "blood and thunder", hemorragias difusas, veias tortuosas.',
        '',
        '> **Armadilha de banca:** CRAO não é "encaminhar em 30 dias". É urgência vascular sistêmica.',
      ]],
      ['Descolamento de Retina e Hemorragia Vítrea', [
        'Flashes, floaters e sombra/cortina no campo visual sugerem descolamento de retina.',
        '',
        'Hemorragia vítrea dá perda visual com reflexo vermelho reduzido e pode ocorrer em retinopatia diabética proliferativa.',
        '',
        '**Macete MedGradPlus - cortina é retina soltando:** flashes e moscas volantes com cortina pedem avaliação urgente.',
      ]],
      ['Neurite Óptica, Papiledema e Arterite Temporal', [
        ...table(['Doença', 'Pista', 'Conduta'], [
          ['**Neurite óptica**', 'dor ao mover olho, RAPD, jovem', 'avaliar desmielinização'],
          ['**Papiledema**', 'bilateral, cefaleia, obscurecimentos', 'investigar hipertensão intracraniana'],
          ['**Arterite temporal**', '>50 anos, mandíbula, VHS/PCR', 'corticoide urgente'],
        ]),
        '',
        'Arterite temporal é diagnóstico que não espera biópsia quando a visão está em risco.',
      ]],
      ['Fundo de Olho Básico', [
        'Aprenda quatro estruturas: papila, mácula, vasos e periferia. A prova descreve alterações nesses termos.',
        '',
        'Retinopatia diabética: microaneurismas, hemorragias, exsudatos e neovasos em estágios avançados. Papiledema: borda de papila borrada, elevação e hemorragias peripapilares.',
        '',
        '> **Pérola Clínica:** fundo de olho normal não descarta neurite óptica retrobulbar. O nervo pode estar doente antes da papila inchar.',
      ]],
    ],
    key: ['Perda monocular localiza olho/nervo óptico.', 'CRAO é AVC ocular.', 'Mácula vermelho-cereja sugere CRAO.', 'CRVO dá blood and thunder.', 'Flashes e cortina sugerem descolamento.', 'Neurite óptica dói ao mover o olho.', 'RAPD sugere lesão aferente.', 'Papiledema costuma ser bilateral.', 'Arterite temporal ameaça visão.', 'Corticoide não espera biópsia em suspeita forte.', 'Retinopatia diabética tem microaneurismas e neovasos.', 'Aura migranosa costuma ser binocular/gradual e reversível.'],
    quiz: [
      ['CRAO deve ser encarada como:', 'AVC ocular', 'Conjuntivite', 'Rinite', 'Otite', 'É evento vascular tempo-dependente.'],
      ['Blood and thunder no fundo sugere:', 'CRVO', 'VPPB', 'OME', 'Rinite', 'Hemorragias difusas e veias tortuosas.'],
      ['Flashes, floaters e cortina sugerem:', 'Descolamento de retina', 'Faringite', 'Cefaleia tensional', 'Dermatite', 'Cortina é pista clássica.'],
      ['Dor ao mover olho e RAPD em jovem sugere:', 'Neurite óptica', 'CRVO', 'OMA', 'Rinite', 'Nervo óptico inflamado dói.'],
      ['Perda visual em idoso com claudicação mandibular exige:', 'Corticoide urgente se suspeita forte', 'Esperar biópsia por semanas', 'Antibiótico nasal', 'Epley', 'Arterite temporal ameaça visão.'],
      ['Papiledema bilateral sugere:', 'Hipertensão intracraniana', 'Otite externa', 'Psoríase', 'Cistite', 'Papila edemaciada é sinal de pressão.'],
    ],
    questions: [
      [3, true, 'Perda visual monocular súbita indolor com retina pálida e cherry-red spot. Conduta?', 'Tratar como CRAO/AVC ocular urgente.', 'Colírio e retorno em 30 dias.', 'Epley.', 'Amoxicilina.', 'CRAO é emergência vascular.'],
      [2, false, 'Fundo em blood and thunder sugere:', 'Oclusão de veia central da retina.', 'CRAO.', 'VPPB.', 'Faringite viral.', 'CRVO dá hemorragias difusas.'],
      [2, true, 'Flashes, floaters e cortina descendo no campo visual. Hipótese?', 'Descolamento de retina.', 'Conjuntivite alérgica.', 'Rinite.', 'Otite externa.', 'Cortina é pista clássica.'],
      [2, true, 'Jovem com dor à movimentação ocular e perda visual subaguda. Diagnóstico provável?', 'Neurite óptica.', 'CRVO.', 'OME.', 'Rinite.', 'Neurite óptica dói e afeta aferência.'],
      [3, true, 'Idoso com perda visual, cefaleia temporal e claudicação mandibular. Conduta?', 'Corticoide urgente e investigação de arterite temporal.', 'Esperar biópsia sem tratar.', 'Antibiótico para sinusite.', 'Alta.', 'Risco de cegueira exige ação.'],
      [2, false, 'Papiledema bilateral sugere investigar:', 'Hipertensão intracraniana.', 'Otite média.', 'Tinea corporis.', 'Disfonia.', 'Papiledema é sinal de pressão intracraniana.'],
      [2, false, 'RAPD indica alteração na via:', 'Aferente óptica.', 'Auditiva condutiva.', 'Vestibular periférica.', 'Olfatória nasal.', 'Defeito pupilar aferente localiza retina/nervo.'],
      [2, false, 'Aura migranosa visual costuma ser:', 'Gradual, reversível e frequentemente binocular.', 'Monocular súbita e fixa sempre.', 'Purulenta.', 'Com otalgia.', 'Aura tem progressão e reversibilidade.'],
      [2, false, 'Microaneurismas, hemorragias e exsudatos sugerem:', 'Retinopatia diabética.', 'VPPB.', 'EBV.', 'Rinite.', 'Padrão microvascular diabético.'],
      [2, false, 'Perda monocular localiza a lesão geralmente:', 'Antes do quiasma.', 'Sempre no cerebelo.', 'Sempre na cóclea.', 'Na bexiga.', 'Monocular é pré-quiasmática.'],
      [3, true, 'Perda visual com cefaleia e papiledema. Próximo raciocínio?', 'Hipertensão intracraniana e investigação urgente.', 'Conjuntivite banal.', 'Otite externa.', 'Faringite viral.', 'Papiledema muda urgência.'],
      [2, false, 'Hemorragia vítrea em diabético proliferativo pode causar:', 'Perda visual súbita com reflexo vermelho reduzido.', 'Prurido nasal.', 'Dor de garganta.', 'Vertigem posicional.', 'Sangue no vítreo bloqueia visão.'],
    ],
    cards: [
      [3, 'CRAO é {{c1::AVC ocular}}.', 'AVC ocular', 'Perda monocular súbita indolor é urgência.', 'retina', ['cm5', 'crao']],
      [2, 'Cherry-red spot sugere {{c1::CRAO}}.', 'CRAO', 'Retina pálida com mácula em cereja.', 'retina', ['cm5', 'fundoscopia']],
      [2, 'Blood and thunder sugere {{c1::CRVO}}.', 'CRVO', 'Hemorragias difusas e veias tortuosas.', 'retina', ['cm5', 'crvo']],
      [2, 'Flashes, floaters e cortina sugerem descolamento de {{c1::retina}}.', 'retina', 'Avaliação urgente.', 'retina', ['cm5', 'descolamento']],
      [2, 'Neurite óptica dói ao mover o {{c1::olho}}.', 'olho', 'Pode ter RAPD.', 'nervo_optico', ['cm5', 'neurite']],
      [2, 'RAPD é defeito pupilar {{c1::aferente}}.', 'aferente', 'Localiza retina/nervo óptico.', 'pupila', ['cm5', 'rapd']],
      [2, 'Papiledema bilateral sugere hipertensão {{c1::intracraniana}}.', 'intracraniana', 'Investigar causa.', 'papiledema', ['cm5', 'papila']],
      [3, 'Arterite temporal com risco visual recebe {{c1::corticoide}} urgente.', 'corticoide', 'Não esperar biópsia se suspeita forte.', 'arterite', ['cm5', 'gca']],
      [2, 'Perda visual monocular localiza antes do {{c1::quiasma}}.', 'quiasma', 'Olho, retina ou nervo óptico.', 'localizacao', ['cm5', 'visao']],
      [2, 'Aura migranosa visual costuma ser gradual e {{c1::reversível}}.', 'reversível', 'Diferencia de evento vascular súbito.', 'aura', ['cm5', 'migranea']],
      [2, 'Retinopatia diabética tem microaneurismas e {{c1::exsudatos}}.', 'exsudatos', 'Neovasos indicam estágio proliferativo.', 'retina', ['cm5', 'diabetes']],
      [2, 'Hemorragia vítrea reduz o reflexo {{c1::vermelho}}.', 'vermelho', 'Sangue bloqueia o eixo visual.', 'retina', ['cm5', 'vitreo']],
    ],
    fontes: ['American Heart Association. **Retinal artery occlusion as retinal stroke**.', 'AAO EyeWiki. **Central Retinal Artery Occlusion**.', 'AAO EyeWiki. **Retinal Vein Occlusion**.', 'AAO EyeWiki. **Retinal Detachment**.', 'Harrison Medicina Interna, 21ª edição, capítulos de oftalmologia e neurologia vascular.'],
  },
];

function buildMaterial(lesson) {
  const lines = [
    '---',
    `aula_id: ${lesson.aula}`,
    'materia: clinica_medica5',
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
    '**Disciplina:** Clínica Médica 5',
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
  if (lesson.image && !lesson.sections.some(([title]) => title === 'Figura sugerida')) {
    lines.push(
      '## Figura sugerida',
      '',
      `**Figura-ID:** \`${lesson.image.id}\``,
      `- **Momento:** ${lesson.image.momento}`,
      `- **Descrição técnica:** ${lesson.image.descricaoVisual}`,
      `- **Legenda:** ${lesson.image.legenda}`,
      '',
      '---',
      '',
    );
  }
  for (const [title, sectionLines] of lesson.sections) {
    lines.push(`## ${title}`, '', ...sectionLines, '', '---', '');
  }
  lines.push('## Pontos-Chave', '');
  for (const item of lesson.key) lines.push(`- ${item}`);
  lines.push('', '---', '', '## Mini Quiz', '');
  lesson.quiz.forEach(([stem, correct, b, c, d, explanation], i) => {
    lines.push(`**${i + 1}. ${stem}**`, '', `- [x] ${correct}`, `- [ ] ${b}`, `- [ ] ${c}`, `- [ ] ${d}`, '', `> **Explicação:** ${explanation}`, '');
  });
  lines.push('---', '', '## Pré-Prova', '', '### Síntese para a prova', '');
  lines.push(`${lesson.title} precisa ser resolvida por padrão clínico, diferencial que cai e conduta inicial. O foco de prova é reconhecer red flags, evitar tratamento automático e saber quando encaminhar ou investigar.`);
  lines.push('', '### Macete-âncora', '', '**Não trate o rótulo, trate o padrão.**', '');
  lines.push('- Primeiro localize a síndrome.', '- Depois procure red flags.', '- Só então escolha exame e tratamento.', '- Se a visão, via aérea, neurologia ou órbita entram, a urgência muda.', '');
  lines.push('### Erros que derrubam nota', '');
  lines.push('- Usar diagnóstico genérico quando a vinheta tem pista específica.', '- Pedir imagem sem indicação e esquecer imagem quando há red flag.', '- Dar antibiótico para quadro viral ou não infeccioso.', '- Perder janela de urgência por excesso de tranquilidade.', '- Ignorar contexto de idade, comorbidade e gravidade.', '');
  lines.push('---', '', '## Fontes', '');
  for (const fonte of lesson.fontes) lines.push(`- ${fonte}`);
  return lines.join('\n');
}

function updateMaterials() {
  for (const lesson of lessons) {
    const md = buildMaterial(lesson);
    writeText(`data/materiais/clinica_medica5/${lesson.aula}.md`, md);
    writeText(`materiais/modulo5/clinica_medica5/${lesson.aula}.md`, md);
  }
}
function updateData() {
  const qData = readJson('data/questoes.json');
  let questoes = (qData.questoes || []).filter((item) => !String(item.origem || '').startsWith(MARKER));
  let maxQ = Math.max(0, ...questoes.map((item) => Number(item.id) || 0));
  const newQ = lessons.flatMap((lesson) => lesson.questions.map((item, idx) => makeQ(lesson.aula, item, idx)));
  for (const item of newQ) item.id = ++maxQ;
  questoes.push(...newQ);
  writeJson('data/questoes.json', { ...qData, questoes });

  const fcData = readJson('data/flashcards.json');
  let flashcards = (fcData.flashcards || []).filter((item) => !String(item.origem || '').startsWith(MARKER));
  let maxFc = Math.max(0, ...flashcards.map((item) => Number(item.id) || 0));
  const newFc = lessons.flatMap((lesson) => lesson.cards.map((item) => makeFc(lesson.aula, item)));
  for (const item of newFc) item.id = ++maxFc;
  flashcards.push(...newFc);
  writeJson('data/flashcards.json', { ...fcData, flashcards });
}
function updateFigures() {
  const data = readJson('data/materiais_figuras.json');
  const ids = new Set(lessons.filter((l) => l.image).map((l) => l.image.id));
  const entries = (data.entries || []).filter((fig) => !ids.has(fig.id));
  for (const lesson of lessons) {
    if (!lesson.image) continue;
    entries.push({
      id: lesson.image.id,
      modulo: 5,
      disciplina: 'clinica_medica5',
      aula: lesson.aula,
      caminhoMaterial: `materiais/modulo5/clinica_medica5/${lesson.aula}.md`,
      momento: lesson.image.momento,
      descricaoVisual: lesson.image.descricaoVisual,
      tipoSugerido: 'Imagem Wikimedia Commons aprovada.',
      buscaCommonsEn: lesson.image.buscaEn,
      buscaCommonsPt: lesson.image.buscaPt,
      status: 'aprovada',
      urlImagem: lesson.image.urlImagem,
      urlThumbnail: lesson.image.urlThumbnail,
      urlPaginaCommons: lesson.image.urlPaginaCommons,
      licenca: lesson.image.licenca,
      credito: lesson.image.credito,
      legenda: lesson.image.legenda,
      notas: 'Figura incluída por relevância diagnóstica real, não por decoração.',
    });
  }
  entries.sort((a, b) => String(a.id).localeCompare(String(b.id)));
  writeJson('data/materiais_figuras.json', { ...data, updatedAt: new Date().toISOString(), entries });
}
function updateRefs() {
  for (const lesson of lessons) {
    writeJson(`data/refs/${lesson.aula}.refs.json`, {
      aula_id: lesson.aula,
      materia: 'clinica_medica5',
      tema: lesson.title,
      generatedAt: '2026-05-07T23:55:00.000Z',
      marker: `${MARKER}_${lesson.aula}`,
      image_decision: lesson.imageDecision,
      fontes_base: lesson.fontes.map((fonte) => ({ tipo: 'fonte', titulo: fonte.replace(/\*\*/g, ''), uso: 'base clínica e padrão de prova para material, questões e flashcards.' })),
    });
  }
}

updateMaterials();
updateData();
updateFigures();
updateRefs();

console.log('CM5 a13-a17 atualizadas com materiais, essenciais, flashcards e imagens quando relevantes.');
