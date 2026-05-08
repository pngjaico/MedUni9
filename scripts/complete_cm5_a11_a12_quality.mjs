import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const MARKER = 'cm5_quality_contract_2026_05_07_cm5_a11_a12';

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
function explanation(general, exp) {
  return [`Resumo: ${general}`, `A) ${exp.A}`, `B) ${exp.B}`, `C) ${exp.C}`, `D) ${exp.D}`].join('\n');
}
function q(aula, dificuldade, caso_clinico, enunciado, opcoes, correta, general, exp) {
  return {
    materia: 'clinica_medica5',
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
    explicacao: explanation(general, exp),
  };
}
function fc(aula, dificuldade, frente, verso, explicacao, categoria, tags) {
  return { materia: 'clinica_medica5', tema: aula, dificuldade, frente, verso, explicacao, origem: `${MARKER}_${aula}`, categoria, tags };
}
function table(headers, rows) {
  return [
    `| ${headers.join(' |')} |`,
    `|${headers.map(() => '---').join('|')}|`,
    ...rows.map((row) => `| ${row.join(' |')} |`),
  ];
}

const lessons = [
  {
    aula: 'cm5_a11',
    title: 'Cefaleia',
    ref: 'ICHD-3 + NICE CG150 + ACR Appropriateness Criteria Headache 2022 + Harrison 21ª ed. + Cecil-Goldman 26ª ed.',
    image: null,
    imageDecision: { usar_imagem: false, motivo: 'Cefaleia depende de algoritmo de red flags e decisão de neuroimagem; imagem anatômica genérica não melhora a aula.' },
    relevance: [
      'Cefaleia é uma das melhores aulas para separar aluno decorador de aluno clínico. A prova não quer que você memorize cem nomes; ela quer que você reconheça **cefaleia primária comum** e não perca **cefaleia secundária perigosa**.',
      '',
      'A pergunta costuma girar em torno de quatro decisões: é migrânea, tensional ou cluster? Tem red flag? Precisa de imagem? Qual abortivo ou profilaxia faz sentido?',
      '',
      '> **Pegadinha de prova:** cefaleia forte não é automaticamente tomografia, mas cefaleia thunderclap é hemorragia subaracnoidea até prova em contrário.',
    ],
    caseLines: [
      '**Ato 1 - Entrada:** mulher de 29 anos tem crises de cefaleia unilateral pulsátil, náusea, fotofobia e piora ao esforço. Ela falta trabalho duas vezes por mês e usa analgésico quase todo dia.',
      '',
      '**Ato 2 - Virada:** no pronto atendimento, outro paciente chega com a "pior dor da vida", início explosivo durante esforço e rigidez de nuca. As duas pessoas têm cefaleia, mas a prioridade não é a mesma.',
      '',
      '**Ato 3 - Decisão:** a primeira vinheta pede diagnóstico de migrânea e plano de abortivo/profilaxia, além de abuso de medicação. A segunda pede investigação urgente de HSA.',
      '',
      '> **Moral da vinheta:** aqui no MedGradPlus, cefaleia começa por segurança. Primeiro red flag, depois rótulo bonito.',
    ],
    sections: [
      {
        title: 'Classificação Inicial',
        lines: [
          'A primeira divisão é entre **cefaleia primária** e **cefaleia secundária**.',
          '',
          ...table(['Tipo', 'Pistas', 'Exemplo'], [
            ['**Primária**', 'exame neurológico normal e padrão recorrente', 'migrânea, tensional, cluster'],
            ['**Secundária**', 'red flag, exame alterado ou início atípico', 'HSA, meningite, tumor, arterite temporal'],
            ['**Mista prática**', 'primária com uso excessivo de medicação', 'cefaleia por abuso de analgésico'],
          ]),
          '',
          'O erro ruim é fechar migrânea em uma dor nova com sinal neurológico. O erro oposto é pedir neuroimagem para toda migrânea antiga e estável.',
          '',
          '**Macete MedGradPlus - primeiro perigo, depois nome:** antes de chamar de migrânea, pergunte se há explosão, febre, déficit, papiledema, câncer, imunossupressão, gestação ou idade avançada.',
        ],
      },
      {
        title: 'Red Flags SNOOP10',
        lines: [
          'Use SNOOP10 como checklist mental. Não precisa recitar a sigla inteira, precisa detectar a vinheta perigosa.',
          '',
          '- **Sistêmico:** febre, perda de peso, câncer, HIV.',
          '- **Neurológico:** déficit focal, crise epiléptica, confusão.',
          '- **Onset súbito:** thunderclap.',
          '- **Older:** início após 50 anos.',
          '- **Pattern change:** mudança de padrão ou piora progressiva.',
          '- **Papiledema:** hipertensão intracraniana.',
          '- **Pregnancy/puerpério:** trombose venosa cerebral, pré-eclâmpsia.',
          '- **Postural/precipitada por Valsalva:** pressão intracraniana.',
          '',
          '> **Armadilha de banca:** exame neurológico normal reduz risco, mas não salva uma cefaleia thunderclap. O início explosivo manda na conduta.',
        ],
      },
      {
        title: 'Migrânea',
        lines: [
          'Migrânea típica é recorrente, dura 4-72 horas e costuma ter **dor pulsátil**, **unilateral**, intensidade moderada a forte, piora com atividade, náusea, fotofobia ou fonofobia.',
          '',
          'Aura é fenômeno neurológico reversível, geralmente visual, que se instala gradualmente. Aura não é déficit súbito fixo.',
          '',
          ...table(['Elemento', 'Migrânea', 'Armadilha'], [
            ['**Dor**', 'pulsátil, unilateral, piora ao esforço', 'pode ser bilateral'],
            ['**Sintomas**', 'náusea, foto/fonofobia', 'vômitos não tornam secundária sozinho'],
            ['**Aura**', 'gradual e reversível', 'não confundir com AIT súbito'],
            ['**Tratamento crise**', 'AINE, triptano, antiemético', 'evitar opioide'],
          ]),
          '',
          'Triptanos são úteis, mas não são para todo mundo. Evite em doença coronariana, AVC prévio, vasculopatia importante e hipertensão grave não controlada.',
        ],
      },
      {
        title: 'Tensional e Cluster',
        lines: [
          'Cefaleia tensional parece aperto bilateral, leve a moderado, sem vômitos e sem piora importante com atividade.',
          '',
          'Cluster é outra história: dor orbitária ou temporal unilateral, muito intensa, curta, recorrente, com lacrimejamento, hiperemia conjuntival, rinorreia, ptose ou miose.',
          '',
          ...table(['Cefaleia', 'Pista que cai', 'Conduta de prova'], [
            ['**Tensional**', 'aperto bilateral, sem náusea forte', 'analgésico simples e prevenção de abuso'],
            ['**Cluster**', 'homem, dor orbitária, sintomas autonômicos', 'oxigênio alto fluxo e sumatriptano'],
            ['**Migrânea**', 'náusea, foto/fonofobia, piora ao esforço', 'AINE/triptano e profilaxia se frequente'],
          ]),
          '',
          '**Macete MedGradPlus - cluster não fica quieto:** migrânea costuma querer quarto escuro; cluster deixa o paciente inquieto, andando, desesperado.',
        ],
      },
      {
        title: 'Quando Pedir Neuroimagem',
        lines: [
          'Peça imagem quando há red flag, exame neurológico alterado, cefaleia nova em contexto perigoso ou suspeita específica.',
          '',
          'Em thunderclap, a primeira investigação costuma ser **TC de crânio sem contraste**. Se a suspeita de HSA continua alta, a estratégia pode incluir punção lombar ou angioTC conforme contexto e tempo de início.',
          '',
          'Não pedir imagem em migrânea estável, típica e com exame neurológico normal é boa medicina, não negligência.',
          '',
          '> **Pérola Clínica:** neuroimagem sem indicação aumenta achado incidental e ansiedade. Neuroimagem omitida em red flag perde doença grave. A diferença é a vinheta.',
        ],
      },
      {
        title: 'Tratamento Agudo e Profilaxia',
        lines: [
          'Crise de migrânea: tratar cedo, escolher via conforme náusea/vômito, hidratar se necessário, antiemético quando indicado e evitar opioide.',
          '',
          'Profilaxia entra quando há crises frequentes, incapacitantes, abuso de abortivo, contraindicação a abortivos ou preferência do paciente.',
          '',
          ...table(['Perfil', 'Profilático possível', 'Cuidado'], [
            ['**HAS/tremor**', 'betabloqueador', 'asma e bradicardia'],
            ['**Obesidade**', 'topiramato', 'gestação e cognição'],
            ['**Insônia/dor crônica**', 'amitriptilina', 'sedação e anticolinérgico'],
            ['**Refratária**', 'toxina botulínica ou anti-CGRP', 'acesso e critério'],
          ]),
          '',
          'Cefaleia por abuso de medicação aparece quando o paciente usa analgésicos ou triptanos com frequência alta. A solução não é mais remédio do mesmo tipo.',
        ],
      },
      {
        title: 'Diagnósticos que a Banca Usa para Derrubar',
        lines: [
          '- **Arterite temporal:** >50 anos, dor temporal, claudicação mandibular, VHS/PCR altos; iniciar corticoide se suspeita forte.',
          '- **Meningite:** cefaleia, febre, rigidez de nuca, alteração mental; tríade pode estar incompleta.',
          '- **Hipertensão intracraniana idiopática:** mulher jovem, obesidade, papiledema, zumbido pulsátil.',
          '- **Glaucoma agudo:** olho vermelho doloroso, halos, náusea, midríase média.',
          '- **Trombose venosa cerebral:** puerpério, trombofilia, cefaleia progressiva, crise convulsiva.',
          '',
          'Se a cefaleia veio com olho vermelho, febre, déficit focal, papiledema ou idade nova de início, não trate como "enxaqueca comum" por reflexo.',
        ],
      },
    ],
    keyPoints: [
      'Primeiro procure red flags; depois classifique primária.',
      'Migrânea típica tem náusea, foto/fonofobia e piora ao esforço.',
      'Aura migranosa é gradual e reversível; AIT é súbito.',
      'Cluster é orbitária unilateral com sintomas autonômicos.',
      'Thunderclap é HSA até prova em contrário.',
      'TC sem contraste é passo inicial clássico na thunderclap.',
      'Não pedir imagem em migrânea estável sem red flags é correto.',
      'Evite opioide em crise de migrânea.',
      'Profilaxia depende de frequência, incapacidade e abuso de abortivo.',
      'Arterite temporal com suspeita forte recebe corticoide sem esperar biópsia.',
      'Cefaleia por abuso de medicação perpetua o problema.',
      'Gravidez/puerpério muda o risco da cefaleia.',
    ],
    quiz: [
      ['Qual achado é red flag de cefaleia secundária?', 'Início thunderclap', 'História recorrente igual há anos', 'Exame neurológico normal em migrânea típica', 'Fotofobia isolada em jovem com padrão antigo', 'Thunderclap muda a prioridade diagnóstica.'],
      ['Migrânea típica costuma ter:', 'Náusea e fotofobia', 'Dor sempre bilateral sem náusea', 'Dor orbitária com rinorreia obrigatória', 'Febre e rigidez de nuca sempre', 'Náusea, foto/fonofobia e piora ao esforço são pistas fortes.'],
      ['Cluster é mais bem descrita por:', 'Dor orbitária unilateral com sintomas autonômicos', 'Aperto bilateral leve', 'Dor de início explosivo única', 'Dor difusa com febre', 'Cluster tem padrão trigêmino-autonômico.'],
      ['Na thunderclap, o exame inicial clássico é:', 'TC de crânio sem contraste', 'Radiografia de seios da face', 'EEG de rotina', 'TSH', 'TC sem contraste busca HSA no contexto agudo.'],
      ['Qual conduta é inadequada na crise de migrânea comum?', 'Opioide como rotina', 'AINE se elegível', 'Triptano se sem contraindicação', 'Antiemético se náusea', 'Opioide aumenta cronificação e abuso.'],
      ['Cefaleia nova após 50 anos com claudicação mandibular sugere:', 'Arterite temporal', 'Cefaleia tensional simples', 'Labirintite', 'Cistite', 'Arterite temporal ameaça visão e pede tratamento rápido.'],
    ],
    preProva: [
      'Cefaleia é prova de triagem de risco. Se tem red flag, investigue. Se é padrão primário típico, trate e previna abuso. Migrânea, tensional e cluster têm perfis muito diferentes. Thunderclap não espera ambulatório.',
      '**Cefaleia = perigo primeiro, fenótipo depois.**',
      '- Explosiva: pense HSA.',
      '- Febre/rigidez: pense meningite.',
      '- >50 anos/mandíbula: pense arterite temporal.',
      '- Orbitária autonômica: pense cluster.',
      '- Náusea/fotofobia: pense migrânea.',
    ],
    errors: [
      'Pedir TC para toda migrânea estável.',
      'Não pedir TC em thunderclap.',
      'Usar opioide como rotina.',
      'Confundir aura gradual com AIT súbito.',
      'Ignorar abuso de analgésico.',
      'Esquecer arterite temporal em idoso.',
    ],
    fontes: [
      'International Headache Society. **ICHD-3 - International Classification of Headache Disorders**.',
      'NICE. **Headaches in over 12s: diagnosis and management (CG150)**.',
      'ACR. **Appropriateness Criteria: Headache, 2022**.',
      'Harrison Medicina Interna, 21ª edição, capítulos de cefaleias.',
      'Cecil-Goldman Medicine, 26ª edição, capítulos de neurologia clínica.',
    ],
  },
  {
    aula: 'cm5_a12',
    title: 'Demência e Meningite',
    ref: 'NICE NG97 + WHO meningitis 2025 + IDSA bacterial meningitis + Harrison 21ª ed. + Cecil-Goldman 26ª ed.',
    image: {
      id: 'CM5-A12-F01',
      urlImagem: 'https://upload.wikimedia.org/wikipedia/commons/6/62/%D0%A2%D0%B8%D0%BF%D0%BE%D0%B2%D0%B8%D0%B9_%D0%B2%D0%B8%D1%81%D0%B8%D0%BF_%D0%BD%D0%B0_%D0%BA%D0%B8%D1%81%D1%82%D1%96_%D0%BF%D1%80%D0%B8_%D0%BC%D0%B5%D0%BD%D1%96%D0%BD%D0%B3%D0%BE%D0%BA%D0%BE%D0%BA%D1%86%D0%B5%D0%BC%D1%96%D1%97.jpg',
      urlThumbnail: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/%D0%A2%D0%B8%D0%BF%D0%BE%D0%B2%D0%B8%D0%B9_%D0%B2%D0%B8%D1%81%D0%B8%D0%BF_%D0%BD%D0%B0_%D0%BA%D0%B8%D1%81%D1%82%D1%96_%D0%BF%D1%80%D0%B8_%D0%BC%D0%B5%D0%BD%D1%96%D0%BD%D0%B3%D0%BE%D0%BA%D0%BE%D0%BA%D1%86%D0%B5%D0%BC%D1%96%D1%97.jpg/960px-%D0%A2%D0%B8%D0%BF%D0%BE%D0%B2%D0%B8%D0%B9_%D0%B2%D0%B8%D1%81%D0%B8%D0%BF_%D0%BD%D0%B0_%D0%BA%D0%B8%D1%81%D1%82%D1%96_%D0%BF%D1%80%D0%B8_%D0%BC%D0%B5%D0%BD%D1%96%D0%BD%D0%B3%D0%BE%D0%BA%D0%BE%D0%BA%D1%86%D0%B5%D0%BC%D1%96%D1%97.jpg',
      urlPaginaCommons: 'https://commons.wikimedia.org/wiki/File:%D0%A2%D0%B8%D0%BF%D0%BE%D0%B2%D0%B8%D0%B9_%D0%B2%D0%B8%D1%81%D0%B8%D0%BF_%D0%BD%D0%B0_%D0%BA%D0%B8%D1%81%D1%82%D1%96_%D0%BF%D1%80%D0%B8_%D0%BC%D0%B5%D0%BD%D1%96%D0%BD%D0%B3%D0%BE%D0%BA%D0%BE%D0%BA%D1%86%D0%B5%D0%BC%D1%96%D1%97.jpg',
      licenca: 'Public domain',
      credito: 'Глей А.І., Шкурба А.В.',
      legenda: 'Exantema purpúrico em meningococcemia. Em meningite, rash petequial/purpúrico com instabilidade muda urgência e isolamento.',
      descricaoVisual: 'Rash purpúrico/petequial em mão de paciente com meningococcemia.',
    },
    imageDecision: { usar_imagem: true, figura_id: 'CM5-A12-F01', motivo: 'Rash petequial/purpúrico em meningococcemia é sinal visual de urgência e muda conduta; não é imagem decorativa.' },
    relevance: [
      'Esta aula junta uma doença lenta e uma emergência. **Demência** cobra raciocínio longitudinal: declínio cognitivo, funcionalidade, informante e causas reversíveis. **Meningite** cobra minuto a minuto: suspeitar, coletar o que der e não atrasar antibiótico.',
      '',
      'A banca gosta de duas armadilhas: chamar delirium de demência e atrasar antibiótico esperando tomografia ou líquor perfeito.',
      '',
      '> **Pegadinha de prova:** a tríade clássica de meningite pode estar incompleta. Se o paciente tem febre, cefaleia, rigidez, alteração mental ou rash purpúrico, pense emergência.',
    ],
    caseLines: [
      '**Ato 1 - Entrada:** homem de 76 anos perde dinheiro, se perde no bairro e a filha relata piora progressiva há 18 meses. Ele ainda conversa bem na consulta, mas não administra remédios.',
      '',
      '**Ato 2 - Virada:** no plantão, mulher de 24 anos chega com febre, cefaleia intensa, sonolência e manchas purpúricas nas mãos. A equipe discute esperar TC antes de qualquer antibiótico.',
      '',
      '**Ato 3 - Decisão:** no idoso, o ponto é confirmar declínio cognitivo com perda funcional e excluir mimetizadores. Na jovem, meningite meningocócica é emergência: isolamento, hemoculturas se possível e antibiótico sem atraso indevido.',
      '',
      '> **Moral da vinheta:** demência pede método; meningite pede velocidade. Confundir o ritmo da doença derruba a conduta.',
    ],
    sections: [
      {
        title: 'Figura sugerida',
        lines: [
          '**Figura-ID:** `CM5-A12-F01`',
          '- **Momento:** na abertura do bloco de meningite, antes de sinais de gravidade.',
          '- **Descrição técnica:** rash purpúrico/petequial de meningococcemia.',
          '- **Legenda:** rash petequial/purpúrico em meningococcemia. Em meningite, esse achado muda urgência, isolamento e profilaxia de contatos.',
        ],
      },
      {
        title: 'Demência, Delirium, Depressão e CCL',
        lines: [
          'Demência é declínio cognitivo ou comportamental adquirido, persistente, que interfere na independência funcional.',
          '',
          ...table(['Quadro', 'Tempo', 'Pista'], [
            ['**Delirium**', 'agudo e flutuante', 'atenção alterada, infecção, droga, metabólico'],
            ['**Demência**', 'crônico e progressivo', 'perda funcional e informante confirma'],
            ['**Depressão**', 'subagudo, humor central', 'queixa cognitiva pode ser intensa'],
            ['**CCL**', 'cognição alterada', 'independência preservada'],
          ]),
          '',
          'A pergunta de prova costuma dar um idoso esquecido. Antes de chamar Alzheimer, pergunte: é agudo? flutua? tem perda funcional? tem remédio anticolinérgico? tem depressão?',
          '',
          '**Macete MedGradPlus - atenção antes de memória:** se a atenção oscila, pense delirium. Demência não aparece de ontem para hoje.',
        ],
      },
      {
        title: 'Avaliação Inicial da Demência',
        lines: [
          'A avaliação começa por história com informante. Pergunte início, progressão, função, finanças, medicação, álcool, sono, quedas, alucinações, marcha e segurança.',
          '',
          'Use teste cognitivo como ferramenta, não como sentença. Mini-Mental, MoCA ou instrumentos locais ajudam, mas escolaridade e linguagem mudam desempenho.',
          '',
          'Exames iniciais buscam reversíveis e mimetizadores: hemograma, eletrólitos, função renal/hepática, TSH, B12, glicemia, cálcio, sorologias conforme contexto e neuroimagem estrutural em muitos pacientes.',
          '',
          '> **Armadilha de banca:** demência não é diagnóstico por Mini-Mental baixo isolado. Precisa perda funcional e contexto clínico.',
        ],
      },
      {
        title: 'Padrões de Demência',
        lines: [
          ...table(['Tipo', 'Pista', 'Pegadinha'], [
            ['**Alzheimer**', 'memória episódica inicial', 'evolução lenta'],
            ['**Vascular**', 'degraus, AVC, função executiva', 'controle de risco vascular'],
            ['**Lewy**', 'flutuação, alucinação visual, parkinsonismo', 'sensibilidade a antipsicótico'],
            ['**Frontotemporal**', 'comportamento ou linguagem precoce', 'idade mais jovem'],
            ['**HPN**', 'marcha, urina, cognição', 'marcha costuma vir primeiro'],
          ]),
          '',
          'Anticolinesterásicos podem ser usados em Alzheimer e alguns quadros selecionados. Memantina entra em doença moderada a grave ou combinação conforme caso. O tratamento não é só remédio: segurança, cuidador e diretivas importam.',
          '',
          '**Macete MedGradPlus - demência tem sobrenome:** Alzheimer não é sinônimo de todo esquecimento. O padrão de início é o sobrenome clínico.',
        ],
      },
      {
        title: 'Meningite: Suspeita Clínica',
        lines: [
          'Meningite bacteriana é emergência infecciosa. O quadro pode incluir febre, cefaleia, rigidez de nuca, vômitos, fotofobia, alteração mental, convulsão e rash.',
          '',
          'A tríade febre, rigidez de nuca e alteração mental é específica quando aparece, mas não é sensível o bastante para esperar os três elementos.',
          '',
          'Rash petequial ou purpúrico com febre sugere meningococcemia e risco de choque.',
          '',
          '> **Pérola Clínica:** se a punção lombar atrasar, antibiótico não pode atrasar junto. Coletou hemocultura se deu tempo? trate.',
        ],
      },
      {
        title: 'TC Antes da Punção Lombar',
        lines: [
          'Nem todo paciente precisa TC antes da punção. A TC entra quando há risco de lesão expansiva, hipertensão intracraniana ou herniação.',
          '',
          'Indicações práticas: imunossupressão, doença neurológica prévia relevante, crise convulsiva recente, papiledema, rebaixamento importante, déficit focal ou suspeita de massa.',
          '',
          'Se TC vai atrasar a punção, colete hemoculturas e dê antibiótico empírico. A prova pune quem espera o fluxo perfeito enquanto o paciente piora.',
        ],
      },
      {
        title: 'Líquor e Tratamento Empírico',
        lines: [
          ...table(['Líquor', 'Bacteriana', 'Viral'], [
            ['**Células**', 'neutrófilos', 'linfócitos'],
            ['**Glicose**', 'baixa', 'normal'],
            ['**Proteína**', 'alta', 'normal ou moderada'],
            ['**Pressão**', 'pode estar alta', 'variável'],
          ]),
          '',
          'Tratamento empírico em adulto geralmente cobre pneumococo e meningococo com ceftriaxona ou cefotaxima associada a vancomicina em muitos protocolos. Ampicilina entra quando há risco de Listeria, como idade avançada, gestação ou imunossupressão.',
          '',
          'Dexametasona deve vir antes ou junto do primeiro antibiótico quando indicada, especialmente pensando em pneumococo.',
        ],
      },
      {
        title: 'Isolamento, Notificação e Profilaxia',
        lines: [
          'Suspeita de meningococo exige precaução respiratória por gotículas, notificação e avaliação de contatos.',
          '',
          'Quimioprofilaxia é para contato próximo de meningococo e alguns cenários de Hib. Não é para qualquer pessoa que passou no corredor.',
          '',
          ...table(['Situação', 'Conduta'], [
            ['**Contato domiciliar íntimo**', 'avaliar profilaxia'],
            ['**Profissional com exposição a secreção**', 'avaliar profilaxia'],
            ['**Contato casual**', 'geralmente não precisa'],
            ['**Rash purpúrico e choque**', 'emergência e isolamento'],
          ]),
          '',
          'O controle de contatos é saúde pública. A conduta errada tanto perde prevenção quanto medicaliza gente sem risco real.',
        ],
      },
    ],
    keyPoints: [
      'Delirium é agudo, flutuante e altera atenção.',
      'Demência exige perda funcional.',
      'CCL preserva independência.',
      'Depressão pode simular demência.',
      'Alzheimer começa com memória episódica; Lewy flutua e alucina.',
      'HPN lembra marcha, urina e cognição.',
      'Meningite bacteriana é emergência.',
      'Tríade clássica pode estar incompleta.',
      'TC antes da LP só quando há indicação.',
      'Antibiótico não deve atrasar se LP atrasar.',
      'Líquor bacteriano tende a neutrófilos, glicose baixa e proteína alta.',
      'Meningococo exige isolamento, notificação e profilaxia de contatos próximos.',
    ],
    quiz: [
      ['Delirium se diferencia de demência principalmente por:', 'Início agudo/flutuante e atenção alterada', 'Declínio estável por 5 anos', 'Perda funcional lentamente progressiva', 'Memória episódica isolada', 'Atenção flutuante é a pista central.'],
      ['Comprometimento cognitivo leve significa:', 'Alteração cognitiva sem perda de independência', 'Demência grave', 'Meningite viral', 'Delirium séptico', 'CCL preserva funcionalidade básica.'],
      ['Alucinações visuais, flutuação e parkinsonismo sugerem:', 'Demência com corpos de Lewy', 'Alzheimer típico obrigatório', 'Cistite', 'Enxaqueca', 'Lewy tem esse tripé clínico.'],
      ['Meningite bacteriana suspeita com LP atrasada exige:', 'Antibiótico empírico sem atraso indevido', 'Esperar 24 horas sem tratamento', 'Tratar só se cultura positiva', 'Dar apenas analgésico', 'Atraso antibiótico aumenta mortalidade.'],
      ['Qual é indicação prática de TC antes da punção lombar?', 'Déficit focal ou papiledema', 'Cefaleia leve antiga', 'Rinite isolada', 'Disúria sem febre', 'Déficit/papiledema sugerem risco intracraniano.'],
      ['Líquor bacteriano típico tem:', 'Neutrófilos, glicose baixa e proteína alta', 'Sem células e glicose alta', 'Eosinófilos sempre', 'Proteína zero', 'Esse padrão sustenta meningite bacteriana.'],
    ],
    preProva: [
      'Demência é declínio com perda funcional; delirium é atenção aguda e flutuante. Meningite bacteriana é emergência: se suspeitou, organize hemocultura, LP quando seguro, antibiótico e dexametasona quando indicada sem atraso indevido.',
      '**Ritmo da doença guia a conduta.**',
      '- Crônico progressivo: demência.',
      '- Agudo flutuante: delirium.',
      '- Cognição sem perda funcional: CCL.',
      '- Febre e cefaleia com alteração mental: meningite.',
      '- LP atrasou: antibiótico anda.',
    ],
    errors: [
      'Diagnosticar Alzheimer sem avaliar delirium, depressão e medicações.',
      'Usar teste cognitivo sem funcionalidade.',
      'Dar antipsicótico sem cautela em Lewy.',
      'Esperar a tríade completa para suspeitar meningite.',
      'Atrasar antibiótico por TC ou LP.',
      'Fazer profilaxia para contato casual sem risco.',
    ],
    fontes: [
      'NICE. **Dementia: assessment, management and support (NG97)**.',
      'WHO. **Meningitis diagnosis, treatment and care guideline, 2025**.',
      'IDSA. **Practice Guidelines for the Management of Bacterial Meningitis**.',
      'Harrison Medicina Interna, 21ª edição, capítulos de demência e meningites.',
      'Cecil-Goldman Medicine, 26ª edição, capítulos de neurologia e infectologia.',
    ],
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
    ...lesson.caseLines,
    '',
    '---',
    '',
  ];

  for (const section of lesson.sections) {
    lines.push(`## ${section.title}`, '', ...section.lines, '', '---', '');
  }

  lines.push('## Pontos-Chave', '');
  for (const point of lesson.keyPoints) lines.push(`- ${point}`);
  lines.push('', '---', '', '## Mini Quiz', '');
  lesson.quiz.forEach((item, i) => {
    const [stem, correct, b, c, d, exp] = item;
    lines.push(`**${i + 1}. ${stem}**`, '', `- [x] ${correct}`, `- [ ] ${b}`, `- [ ] ${c}`, `- [ ] ${d}`, '', `> **Explicação:** ${exp}`, '');
  });
  lines.push('---', '', '## Pré-Prova', '', '### Síntese para a prova', '', lesson.preProva[0], '', '### Macete-âncora', '', lesson.preProva[1], '', ...lesson.preProva.slice(2), '', '### Erros que derrubam nota', '');
  for (const err of lesson.errors) lines.push(`- ${err}`);
  lines.push('', '---', '', '## Fontes', '');
  for (const fonte of lesson.fontes) lines.push(`- ${fonte}`);
  return lines.join('\n');
}

function questionsFor(aula) {
  if (aula === 'cm5_a11') {
    return [
      q(aula, 2, false, 'Qual característica é red flag em cefaleia?', ['A) Início súbito thunderclap.', 'B) Crises iguais há anos com exame normal.', 'C) Fotofobia em migrânea típica antiga.', 'D) Náusea recorrente no mesmo padrão.'], 0, 'Thunderclap sugere HSA e exige investigação urgente.', { A: 'CORRETA: início explosivo muda risco.', B: 'INCORRETA: padrão antigo sem red flag é baixo risco.', C: 'INCORRETA: pode ocorrer em migrânea.', D: 'INCORRETA: náusea isolada não é red flag.' }),
      q(aula, 2, true, 'Mulher de 28 anos com dor unilateral pulsátil, náusea, fotofobia e piora ao esforço por 8 horas. Exame normal. Qual diagnóstico é mais provável?', ['A) Migrânea.', 'B) Cluster.', 'C) Arterite temporal.', 'D) Cistite.'], 0, 'O fenótipo é típico de migrânea sem red flags.', { A: 'CORRETA: reúne critérios clínicos.', B: 'INCORRETA: cluster é orbitária com autonômicos.', C: 'INCORRETA: faltam idade e claudicação mandibular.', D: 'INCORRETA: não é urinário.' }),
      q(aula, 2, false, 'Qual quadro sugere cefaleia em salvas?', ['A) Dor orbitária unilateral intensa com lacrimejamento e rinorreia.', 'B) Aperto bilateral leve sem sintomas autonômicos.', 'C) Dor thunderclap única.', 'D) Dor com febre e rigidez de nuca.'], 0, 'Cluster é trigêmino-autonômica, intensa e unilateral.', { A: 'CORRETA: padrão clássico.', B: 'INCORRETA: lembra tensional.', C: 'INCORRETA: sugere HSA.', D: 'INCORRETA: sugere meningite.' }),
      q(aula, 3, true, 'Paciente relata a pior cefaleia da vida, início máximo em segundos durante esforço. Qual exame inicial clássico?', ['A) TC de crânio sem contraste.', 'B) Radiografia de tórax.', 'C) TSH.', 'D) Eletroencefalograma de rotina.'], 0, 'Cefaleia thunderclap exige excluir hemorragia subaracnoidea.', { A: 'CORRETA: primeiro passo clássico.', B: 'INCORRETA: não avalia HSA.', C: 'INCORRETA: não responde urgência.', D: 'INCORRETA: não é exame inicial de HSA.' }),
      q(aula, 2, false, 'Quando evitar neuroimagem de rotina?', ['A) Migrânea típica estável, exame neurológico normal e sem red flags.', 'B) Cefaleia nova com déficit focal.', 'C) Papiledema.', 'D) Câncer ativo e cefaleia nova.'], 0, 'Imagem não é necessária na migrânea estável típica sem sinais de alarme.', { A: 'CORRETA: evita achados incidentais.', B: 'INCORRETA: déficit é red flag.', C: 'INCORRETA: papiledema exige investigação.', D: 'INCORRETA: câncer muda risco.' }),
      q(aula, 2, false, 'Qual tratamento deve ser evitado como rotina em crise de migrânea?', ['A) Opioide.', 'B) AINE se elegível.', 'C) Triptano se sem contraindicação.', 'D) Antiemético se náusea importante.'], 0, 'Opioide aumenta risco de cronificação, recorrência e abuso de medicação.', { A: 'CORRETA: não deve ser rotina.', B: 'INCORRETA: pode ser primeira linha.', C: 'INCORRETA: pode ser adequado.', D: 'INCORRETA: é útil quando indicado.' }),
      q(aula, 2, true, 'Paciente usa analgésico quase diariamente e piorou frequência de cefaleia. Qual hipótese deve entrar?', ['A) Cefaleia por abuso de medicação.', 'B) Cura espontânea da migrânea.', 'C) Hipotireoidismo obrigatório.', 'D) Otite média sempre.'], 0, 'Uso frequente de abortivos pode perpetuar cefaleia crônica.', { A: 'CORRETA: é armadilha comum.', B: 'INCORRETA: houve piora.', C: 'INCORRETA: não é obrigatório.', D: 'INCORRETA: sem sinais otológicos.' }),
      q(aula, 2, false, 'Qual indicação favorece profilaxia de migrânea?', ['A) Crises frequentes ou incapacitantes.', 'B) Uma crise leve a cada 3 anos.', 'C) Ausência de impacto funcional.', 'D) Qualquer cefaleia com exame normal.'], 0, 'Profilaxia é para reduzir frequência/incapacidade ou abuso de abortivos.', { A: 'CORRETA: critério prático.', B: 'INCORRETA: baixo impacto.', C: 'INCORRETA: sem necessidade.', D: 'INCORRETA: precisa perfil adequado.' }),
      q(aula, 2, true, 'Homem de 70 anos com cefaleia temporal nova, dor ao mastigar e VHS alto. Qual conduta é mais adequada?', ['A) Suspeitar arterite temporal e iniciar corticoide se suspeita forte.', 'B) Aguardar biópsia por semanas sem tratar.', 'C) Tratar como cistite.', 'D) Usar triptano obrigatório.'], 0, 'Arterite temporal ameaça visão; tratamento não deve esperar confirmação tardia quando suspeita é alta.', { A: 'CORRETA: protege visão.', B: 'INCORRETA: atraso pode cegar.', C: 'INCORRETA: não tem relação.', D: 'INCORRETA: não é migrânea.' }),
      q(aula, 2, false, 'Aura migranosa típica se diferencia de AIT porque costuma ser:', ['A) Gradual, reversível e com sintomas positivos.', 'B) Súbita e fixa por semanas.', 'C) Sempre acompanhada de febre.', 'D) Exclusivamente motora permanente.'], 0, 'Aura costuma progredir gradualmente e resolver.', { A: 'CORRETA: pista útil.', B: 'INCORRETA: sugere outro diagnóstico.', C: 'INCORRETA: febre não é aura.', D: 'INCORRETA: permanente não é típico.' }),
      q(aula, 2, false, 'Tratamento abortivo clássico da cefaleia em salvas inclui:', ['A) Oxigênio em alto fluxo e sumatriptano.', 'B) Amoxicilina.', 'C) Levotiroxina.', 'D) Diurético tiazídico.'], 0, 'Cluster responde a oxigênio alto fluxo e triptano em muitos casos.', { A: 'CORRETA: conduta de prova.', B: 'INCORRETA: não é infecção bacteriana.', C: 'INCORRETA: tireoide não trata cluster.', D: 'INCORRETA: não aborta crise.' }),
      q(aula, 3, true, 'Puérpera com cefaleia progressiva, crise convulsiva e déficit focal. Qual diagnóstico deve ser lembrado?', ['A) Trombose venosa cerebral.', 'B) Cefaleia tensional simples.', 'C) Rinite alérgica.', 'D) Dermatite seborreica.'], 0, 'Puerpério aumenta risco trombótico; cefaleia com convulsão/déficit é red flag.', { A: 'CORRETA: precisa investigação urgente.', B: 'INCORRETA: há red flags.', C: 'INCORRETA: não explica convulsão.', D: 'INCORRETA: não é neurológico.' }),
    ];
  }
  return [
    q(aula, 1, false, 'O que diferencia demência de comprometimento cognitivo leve?', ['A) Prejuízo funcional na demência.', 'B) Febre obrigatória na demência.', 'C) Líquor com neutrófilos na demência.', 'D) Dor lombar na demência.'], 0, 'Demência exige perda de independência funcional.', { A: 'CORRETA: funcionalidade é chave.', B: 'INCORRETA: febre sugere outro processo.', C: 'INCORRETA: isso é meningite bacteriana.', D: 'INCORRETA: não define cognição.' }),
    q(aula, 2, true, 'Idoso confuso desde ontem, sonolento à tarde e melhor pela manhã, com infecção urinária. Qual síndrome é mais provável?', ['A) Delirium.', 'B) Alzheimer típico.', 'C) CCL.', 'D) Cefaleia em salvas.'], 0, 'Início agudo e flutuação com atenção alterada definem delirium.', { A: 'CORRETA: padrão agudo/flutuante.', B: 'INCORRETA: Alzheimer é crônico.', C: 'INCORRETA: CCL não é agudo.', D: 'INCORRETA: não explica confusão.' }),
    q(aula, 2, false, 'Qual padrão sugere demência com corpos de Lewy?', ['A) Flutuação cognitiva, alucinações visuais e parkinsonismo.', 'B) Disúria e polaciúria.', 'C) Dor torácica ao esforço.', 'D) Febre e exantema apenas.'], 0, 'Lewy combina flutuação, alucinação visual e parkinsonismo, com sensibilidade a antipsicóticos.', { A: 'CORRETA: tripé clássico.', B: 'INCORRETA: urinário baixo.', C: 'INCORRETA: cardiológico.', D: 'INCORRETA: inespecífico.' }),
    q(aula, 2, false, 'Tríade clássica de hidrocefalia de pressão normal:', ['A) Marcha, incontinência urinária e cognição.', 'B) Febre, tosse e dispneia.', 'C) Disúria, urgência e polaciúria.', 'D) Dor orbitária, lacrimejamento e rinorreia.'], 0, 'HPN costuma começar com marcha e associa urina/cognição.', { A: 'CORRETA: tríade de prova.', B: 'INCORRETA: respiratório.', C: 'INCORRETA: cistite.', D: 'INCORRETA: cluster.' }),
    q(aula, 3, true, 'Paciente com febre, cefaleia, sonolência e rash purpúrico. Qual conduta é mais adequada?', ['A) Tratar como meningite/meningococcemia com urgência e isolamento.', 'B) Esperar cultura por 72 horas sem antibiótico.', 'C) Tratar como demência crônica.', 'D) Dar alta com analgésico simples.'], 0, 'Rash purpúrico com febre sugere meningococcemia e risco de choque.', { A: 'CORRETA: emergência.', B: 'INCORRETA: atraso é perigoso.', C: 'INCORRETA: quadro é agudo infeccioso.', D: 'INCORRETA: subestima gravidade.' }),
    q(aula, 2, false, 'Qual situação indica TC antes da punção lombar em suspeita de meningite?', ['A) Déficit neurológico focal.', 'B) Rigidez de nuca isolada em paciente alerta sem déficit.', 'C) Dor de garganta isolada.', 'D) Disúria sem febre.'], 0, 'Déficit focal aumenta preocupação com lesão expansiva/risco de herniação.', { A: 'CORRETA: indicação prática.', B: 'INCORRETA: não obriga TC por si só.', C: 'INCORRETA: não é meningite.', D: 'INCORRETA: não se aplica.' }),
    q(aula, 3, true, 'Suspeita alta de meningite bacteriana, mas a TC vai atrasar a punção. O que fazer?', ['A) Coletar hemoculturas se possível e iniciar antibiótico empírico.', 'B) Aguardar a TC e a LP por horas sem tratamento.', 'C) Tratar apenas com antiemético.', 'D) Dar corticoide isolado por 3 dias.'], 0, 'Antibiótico não deve atrasar quando LP está atrasada.', { A: 'CORRETA: reduz mortalidade.', B: 'INCORRETA: atraso piora desfecho.', C: 'INCORRETA: não trata infecção.', D: 'INCORRETA: corticoide isolado não basta.' }),
    q(aula, 2, false, 'Líquor bacteriano típico mostra:', ['A) Neutrófilos, proteína alta e glicose baixa.', 'B) Nenhuma célula e glicose alta.', 'C) Eosinófilos sempre com proteína zero.', 'D) Apenas hemácias sem leucócitos.'], 0, 'Meningite bacteriana gera padrão neutrofílico com consumo de glicose e proteína elevada.', { A: 'CORRETA: padrão clássico.', B: 'INCORRETA: não é bacteriano.', C: 'INCORRETA: não é regra.', D: 'INCORRETA: não descreve meningite bacteriana.' }),
    q(aula, 2, false, 'Quando adicionar ampicilina ao esquema empírico de meningite?', ['A) Idoso, gestante ou imunossuprimido pelo risco de Listeria.', 'B) Todo adolescente hígido obrigatoriamente.', 'C) Apenas cefaleia tensional.', 'D) Dermatite seborreica.'], 0, 'Ampicilina cobre Listeria em grupos de risco.', { A: 'CORRETA: critério clássico.', B: 'INCORRETA: não é universal.', C: 'INCORRETA: não é meningite.', D: 'INCORRETA: não se aplica.' }),
    q(aula, 2, false, 'Dexametasona em meningite bacteriana deve ser administrada:', ['A) Antes ou junto do primeiro antibiótico quando indicada.', 'B) Sempre 5 dias após antibiótico.', 'C) Nunca em hipótese alguma.', 'D) Apenas depois da alta.'], 0, 'Benefício depende de tempo, especialmente antes/junto do antibiótico.', { A: 'CORRETA: tempo importa.', B: 'INCORRETA: tarde perde lógica.', C: 'INCORRETA: há indicações.', D: 'INCORRETA: não faz sentido.' }),
    q(aula, 2, false, 'Profilaxia de contatos em meningite meningocócica é indicada principalmente para:', ['A) Contatos próximos.', 'B) Qualquer pessoa que mora na mesma cidade.', 'C) Quem viu notícia na internet.', 'D) Todo paciente com demência.'], 0, 'Risco é maior em contatos íntimos/domiciliares ou exposição a secreções.', { A: 'CORRETA: alvo da profilaxia.', B: 'INCORRETA: amplo demais.', C: 'INCORRETA: sem exposição.', D: 'INCORRETA: sem relação.' }),
    q(aula, 2, true, 'Paciente com declínio comportamental precoce, desinibição e alteração de linguagem antes de perda de memória importante. Qual demência lembrar?', ['A) Frontotemporal.', 'B) Meningite bacteriana.', 'C) Cistite simples.', 'D) Cefaleia em salvas.'], 0, 'Frontotemporal costuma começar com comportamento ou linguagem, muitas vezes em idade mais jovem.', { A: 'CORRETA: padrão típico.', B: 'INCORRETA: meningite é aguda.', C: 'INCORRETA: urinário.', D: 'INCORRETA: cefaleia.' }),
  ];
}

function cardsFor(aula) {
  if (aula === 'cm5_a11') {
    return [
      fc(aula, 2, 'Cefaleia {{c1::thunderclap}} é HSA até prova em contrário.', 'thunderclap', 'Início máximo em segundos/minutos é red flag forte.', 'red_flag', ['cm5', 'cefaleia']),
      fc(aula, 2, 'Migrânea típica tem náusea e {{c1::foto/fonofobia}}.', 'foto/fonofobia', 'Piora ao esforço e dor pulsátil ajudam.', 'migranea', ['cm5', 'cefaleia']),
      fc(aula, 2, 'Aura migranosa costuma ser gradual e {{c1::reversível}}.', 'reversível', 'Déficit súbito fixo sugere AIT/AVC.', 'migranea', ['cm5', 'aura']),
      fc(aula, 2, 'Cluster tem dor orbitária unilateral com sintomas {{c1::autonômicos}}.', 'autonômicos', 'Lacrimejamento, rinorreia, ptose ou miose.', 'cluster', ['cm5', 'cefaleia']),
      fc(aula, 2, 'Crise de cluster trata com oxigênio alto fluxo e {{c1::sumatriptano}}.', 'sumatriptano', 'Verapamil é prevenção clássica.', 'tratamento', ['cm5', 'cluster']),
      fc(aula, 2, 'Migrânea estável sem red flags geralmente não precisa de {{c1::neuroimagem}}.', 'neuroimagem', 'Imagem sem indicação aumenta incidentaloma.', 'imagem', ['cm5', 'cefaleia']),
      fc(aula, 2, 'Triptanos devem ser evitados em doença vascular e hipertensão grave {{c1::não controlada}}.', 'não controlada', 'São vasoconstritores.', 'tratamento', ['cm5', 'migranea']),
      fc(aula, 2, 'Uso frequente de abortivos causa cefaleia por {{c1::abuso de medicação}}.', 'abuso de medicação', 'Mais analgésico pode perpetuar a dor.', 'cronificacao', ['cm5', 'cefaleia']),
      fc(aula, 2, 'Profilaxia de migrânea entra em crises frequentes ou {{c1::incapacitantes}}.', 'incapacitantes', 'Também se há abuso ou contraindicação de abortivos.', 'profilaxia', ['cm5', 'migranea']),
      fc(aula, 2, 'Cefaleia após 50 anos com claudicação mandibular sugere arterite {{c1::temporal}}.', 'temporal', 'Iniciar corticoide se suspeita forte.', 'red_flag', ['cm5', 'arterite']),
      fc(aula, 2, 'Cefaleia com papiledema sugere hipertensão {{c1::intracraniana}}.', 'intracraniana', 'Exige investigação, não é migrânea simples.', 'red_flag', ['cm5', 'papiledema']),
      fc(aula, 3, 'Puerpério + cefaleia + convulsão/déficit lembra trombose {{c1::venosa cerebral}}.', 'venosa cerebral', 'Contexto hipercoagulável muda risco.', 'red_flag', ['cm5', 'tvc']),
    ];
  }
  return [
    fc(aula, 1, 'Demência exige declínio cognitivo com perda {{c1::funcional}}.', 'funcional', 'Sem perda de independência, pense em CCL.', 'demencia', ['cm5', 'demencia']),
    fc(aula, 2, 'Delirium é agudo, flutuante e altera {{c1::atenção}}.', 'atenção', 'Não confundir com Alzheimer.', 'delirium', ['cm5', 'delirium']),
    fc(aula, 2, 'CCL altera cognição mas preserva {{c1::independência}}.', 'independência', 'Funcionalidade separa CCL de demência.', 'demencia', ['cm5', 'ccl']),
    fc(aula, 2, 'Lewy combina flutuação, alucinações visuais e {{c1::parkinsonismo}}.', 'parkinsonismo', 'Cuidado com antipsicóticos.', 'demencia', ['cm5', 'lewy']),
    fc(aula, 2, 'HPN lembra marcha, urina e {{c1::cognição}}.', 'cognição', 'Mnemônico clássico da tríade.', 'demencia', ['cm5', 'hpn']),
    fc(aula, 2, 'Meningite bacteriana é emergência e não espera tríade {{c1::completa}}.', 'completa', 'Tríade pode estar ausente.', 'meningite', ['cm5', 'meningite']),
    fc(aula, 2, 'TC antes da LP é indicada com déficit focal ou {{c1::papiledema}}.', 'papiledema', 'Também imunossupressão, convulsão recente e rebaixamento importante.', 'meningite', ['cm5', 'lp']),
    fc(aula, 3, 'Se LP atrasar em meningite suspeita, não atrase {{c1::antibiótico}}.', 'antibiótico', 'Coletar hemoculturas se possível.', 'meningite', ['cm5', 'antibiotico']),
    fc(aula, 2, 'Líquor bacteriano típico tem glicose {{c1::baixa}}.', 'baixa', 'Também neutrófilos e proteína alta.', 'liquor', ['cm5', 'meningite']),
    fc(aula, 2, 'Ampicilina cobre {{c1::Listeria}} em idosos, gestantes e imunossuprimidos.', 'Listeria', 'Adicionar ao esquema empírico nesses grupos.', 'tratamento', ['cm5', 'listeria']),
    fc(aula, 2, 'Dexametasona deve vir antes ou junto do primeiro {{c1::antibiótico}} quando indicada.', 'antibiótico', 'Tempo define benefício.', 'tratamento', ['cm5', 'dexametasona']),
    fc(aula, 2, 'Meningococo exige profilaxia de contatos {{c1::próximos}}.', 'próximos', 'Contato casual geralmente não entra.', 'saude_publica', ['cm5', 'meningococo']),
  ];
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

function updateFigures() {
  const data = readJson('data/materiais_figuras.json');
  const newIds = new Set(lessons.filter((lesson) => lesson.image).map((lesson) => lesson.image.id));
  const entries = (data.entries || []).filter((fig) => !newIds.has(fig.id));
  for (const lesson of lessons) {
    if (!lesson.image) continue;
    entries.push({
      id: lesson.image.id,
      modulo: 5,
      disciplina: 'clinica_medica5',
      aula: lesson.aula,
      caminhoMaterial: `materiais/modulo5/clinica_medica5/${lesson.aula}.md`,
      momento: 'Abertura do bloco de meningite, antes dos sinais de gravidade.',
      descricaoVisual: lesson.image.descricaoVisual,
      tipoSugerido: 'Fotografia clínica Wikimedia Commons.',
      buscaCommonsEn: 'meningococcemia petechial purpuric rash hand',
      buscaCommonsPt: 'rash purpúrico meningococcemia mão',
      status: 'aprovada',
      urlImagem: lesson.image.urlImagem,
      urlThumbnail: lesson.image.urlThumbnail,
      urlPaginaCommons: lesson.image.urlPaginaCommons,
      licenca: lesson.image.licenca,
      credito: lesson.image.credito,
      legenda: lesson.image.legenda,
      notas: 'Figura usada porque o sinal cutâneo muda urgência, isolamento e suspeita de meningococcemia.',
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
      generatedAt: '2026-05-07T23:35:00.000Z',
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

console.log('CM5 a11-a12 atualizadas com materiais, essenciais, flashcards e imagem quando relevante.');
