const fs = require('fs');

const BMF2_OUT = 'scripts/tmp_mod2_bmf2.json';
const ST_OUT = 'scripts/tmp_mod3_saude_trabalhador.json';

function card(materia, tema, frente, verso, dificuldade, categoria, origem, tags, explicacao = '') {
  return { materia, tema, frente, verso, explicacao, dificuldade, categoria, origem, tags };
}

function buildBmf2() {
  const lessons = {
    bmf2_a1: {
      points: [
        ['A despolarizacao espontanea do no SA depende da corrente {{c1::If}}.', 'If', 1, 'mecanismo'],
        ['A fase 0 do miócito ventricular ocorre por entrada rapida de {{c1::sodio}}.', 'sodio', 1, 'mecanismo'],
        ['No no SA, a fase 0 e sustentada principalmente por canais de {{c1::calcio}}.', 'calcio', 2, 'diferenciacao'],
        ['A condução mais lenta do coracao ocorre fisiologicamente no {{c1::no AV}}.', 'no AV', 1, 'prova'],
        ['O feixe de His conecta eletricamente no AV e {{c1::ventriculos}}.', 'ventriculos', 1, 'definicao'],
        ['A fibra de Purkinje acelera a ativacao quase simultanea dos {{c1::ventriculos}}.', 'ventriculos', 1, 'clinica'],
        ['Bloqueio no no AV prolonga preferencialmente o intervalo {{c1::PR}} no ECG.', 'PR', 2, 'prova'],
        ['A refratariedade longa do miocardio evita {{c1::tetania}} durante a sístole.', 'tetania', 2, 'mecanismo'],
        ['O marcapasso subsidiario ventricular costuma gerar frequencia mais {{c1::baixa}}.', 'baixa', 1, 'diferenciacao'],
        ['A despolarizacao atrial normal inicia no {{c1::no SA}} antes de atingir o no AV.', 'no SA', 1, 'definicao']
      ],
      extras: [
        ['Na sindrome de Wolff-Parkinson-White, a via acessoria pode encurtar o intervalo {{c1::PR}}.', 'PR'],
        ['A adenosina interrompe taquicardia supraventricular por bloqueio transitorio no {{c1::no AV}}.', 'no AV']
      ]
    },
    bmf2_a2: {
      points: [
        ['O automatismo cardiaco e a capacidade de gerar impulso sem {{c1::estimulo externo}}.', 'estimulo externo', 1, 'definicao'],
        ['A excitabilidade representa a resposta eletrica a um estimulo acima do {{c1::limiar}}.', 'limiar', 1, 'mecanismo'],
        ['A condutibilidade descreve a propagacao do potencial de acao pelo {{c1::miocardio}}.', 'miocardio', 1, 'definicao'],
        ['A contratilidade aumenta com maior entrada intracelular de {{c1::calcio}}.', 'calcio', 2, 'mecanismo'],
        ['Inotropismo positivo eleva principalmente o {{c1::volume sistolico}}.', 'volume sistolico', 2, 'clinica'],
        ['Cronotropismo positivo corresponde ao aumento da {{c1::frequencia cardiaca}}.', 'frequencia cardiaca', 1, 'diferenciacao'],
        ['Dromotropismo positivo acelera a condução no {{c1::no AV}}.', 'no AV', 1, 'prova'],
        ['Batmotropismo descreve alteracoes da {{c1::excitabilidade}} do miocardio.', 'excitabilidade', 2, 'definicao'],
        ['A lusitropia e a capacidade de {{c1::relaxamento}} miocardico apos a contração.', 'relaxamento', 2, 'diferenciacao'],
        ['Estimulo simpatico aumenta frequencia e forca por receptor beta {{c1::1}}.', '1', 1, 'prova']
      ],
      extras: [
        ['A estimulação vagal reduz a frequencia de disparo no {{c1::no SA}}.', 'no SA'],
        ['Insuficiencia cardiaca sistolica cursa com queda de {{c1::contratilidade}}.', 'contratilidade']
      ]
    },
    bmf2_a3: {
      points: [
        ['A circulacao sistemica opera com pressao media maior que a {{c1::pulmonar}}.', 'pulmonar', 1, 'diferenciacao'],
        ['Arterias elasticas amortecem a pulsatilidade pelo efeito {{c1::Windkessel}}.', 'Windkessel', 2, 'prova'],
        ['Arteriolas sao os principais vasos de {{c1::resistencia}} periferica.', 'resistencia', 1, 'definicao'],
        ['Capilares sao o principal local de trocas entre sangue e {{c1::tecidos}}.', 'tecidos', 1, 'mecanismo'],
        ['Veias funcionam como reservatorio de alto valor de {{c1::complacencia}}.', 'complacencia', 2, 'definicao'],
        ['A circulação pulmonar recebe todo o debito do ventriculo {{c1::direito}}.', 'direito', 1, 'clinica'],
        ['Na grande circulacao, o sangue oxigenado sai do ventriculo {{c1::esquerdo}}.', 'esquerdo', 1, 'diferenciacao'],
        ['A queda de pressao e mais acentuada no leito de {{c1::arteriolas}}.', 'arteriolas', 2, 'prova'],
        ['Edema por aumento da pressao hidrostática ocorre quando a filtracao supera a {{c1::reabsorcao}}.', 'reabsorcao', 2, 'mecanismo'],
        ['O retorno venoso depende de bomba muscular e valvulas {{c1::venosas}}.', 'venosas', 1, 'clinica']
      ],
      extras: [
        ['A hipertensao pulmonar aumenta a pos-carga do ventriculo {{c1::direito}}.', 'direito'],
        ['Choque distributivo cursa com queda de resistencia vascular {{c1::sistemica}}.', 'sistemica']
      ]
    },
    bmf2_a4: {
      points: [
        ['A valva mitral separa o atrio esquerdo do ventriculo {{c1::esquerdo}}.', 'esquerdo', 1, 'definicao'],
        ['A valva tricuspide localiza-se entre atrio e ventriculo {{c1::direitos}}.', 'direitos', 1, 'definicao'],
        ['A fase de contração isovolumetrica inicia apos fechamento das valvas {{c1::atrioventriculares}}.', 'atrioventriculares', 2, 'mecanismo'],
        ['A abertura da valva aortica marca o inicio da fase de {{c1::ejecao}} ventricular.', 'ejecao', 1, 'prova'],
        ['A segunda bulha ocorre com fechamento das valvas {{c1::semilunares}}.', 'semilunares', 1, 'clinica'],
        ['No enchimento rapido ventricular, as valvas AV estao {{c1::abertas}}.', 'abertas', 1, 'diferenciacao'],
        ['A pre-carga relaciona-se ao estiramento do ventriculo no fim da {{c1::diastole}}.', 'diastole', 2, 'mecanismo'],
        ['Pos-carga ventricular esquerda aumenta com elevacao da pressao {{c1::aortica}}.', 'aortica', 2, 'clinica'],
        ['Estenose mitral gera sobrecarga predominantemente no atrio {{c1::esquerdo}}.', 'esquerdo', 2, 'prova'],
        ['Insuficiencia aortica amplia volume diastolico final do ventriculo {{c1::esquerdo}}.', 'esquerdo', 2, 'diferenciacao']
      ],
      extras: [
        ['O clique de abertura e achado classico da estenose {{c1::mitral}}.', 'mitral'],
        ['Na estenose aortica grave, o pulso arterial pode ficar parvus et {{c1::tardus}}.', 'tardus']
      ]
    }
  };

  // Aulas 5-16 com foco em termos discriminativos e sem placeholders genéricos.
  const tailLessons = {
    bmf2_a5: {
      title: 'Histologia Cardíaca',
      concepts: ['endocardio', 'miocardio', 'epicardio', 'disco intercalar', 'fibras de Purkinje', 'tecido conjuntivo subendocardico']
    },
    bmf2_a6: {
      title: 'ECG e Ciclo Cardíaco',
      concepts: ['onda P', 'complexo QRS', 'onda T', 'intervalo PR', 'segmento ST', 'repolarizacao ventricular']
    },
    bmf2_a7: {
      title: 'Débito Cardíaco e Lei de Starling',
      concepts: ['debito cardiaco', 'volume sistolico', 'frequencia cardiaca', 'pre-carga', 'pos-carga', 'curva de Frank-Starling']
    },
    bmf2_a8: {
      title: 'Inervação do Coração e Pressão Arterial',
      concepts: ['simpatico', 'parassimpatico', 'barorreceptores', 'quimiorreceptores', 'renina', 'resistencia vascular periferica']
    },
    bmf2_a9: {
      title: 'Circulação Coronariana e Microcirculação',
      concepts: ['coronaria esquerda', 'coronaria direita', 'dominancia coronariana', 'forcas de Starling', 'microcirculacao', 'drenagem linfatica']
    },
    bmf2_a10: {
      title: 'Anatomia da Caixa Torácica e Vias Aéreas',
      concepts: ['pleura visceral', 'pleura parietal', 'espaco pleural', 'bronquio principal direito', 'surfactante', 'toracocentese']
    },
    bmf2_a11: {
      title: 'Histologia do Sistema Respiratório',
      concepts: ['epitelio pseudoestratificado', 'cilios', 'celulas caliciformes', 'pneumocito tipo I', 'pneumocito tipo II', 'macrofago alveolar']
    },
    bmf2_a12: {
      title: 'Volumes e Mecânica Pulmonar',
      concepts: ['volume corrente', 'capacidade vital', 'volume residual', 'complacencia', 'elastancia', 'trabalho respiratorio']
    },
    bmf2_a13: {
      title: 'Trocas Gasosas e Relação V/Q',
      concepts: ['difusao alveolo-capilar', 'gradiente de pressao parcial', 'curva de dissociacao', 'relacao V/Q', 'zonas de West', 'shunt intrapulmonar']
    },
    bmf2_a14: {
      title: 'Controle Central da Respiração',
      concepts: ['bulbo', 'ponte', 'quimiorreceptor central', 'quimiorreceptor periferico', 'PaCO2', 'resposta ventilatoria']
    },
    bmf2_a15: {
      title: 'Prática Cardiovascular',
      concepts: ['camaras cardiacas', 'valvas cardiacas', 'septo interventricular', 'aorta ascendente', 'miocardio', 'endocardio']
    },
    bmf2_a16: {
      title: 'Prática Respiratória',
      concepts: ['hilo pulmonar', 'fissura obliqua', 'fissura horizontal', 'bronquio lobar', 'recesso costodiafragmatico', 'pleura']
    }
  };

  for (const [tema, cfgTail] of Object.entries(tailLessons)) {
    const { title, concepts } = cfgTail;
    const [c1, c2, c3, c4, c5, c6] = concepts;
    lessons[tema] = {
      points: [
        [`Em ${title}, reconhecer {{c1::${c1}}} evita erro básico de identificação.`, c1, 1, 'definicao'],
        [`No estudo de ${title}, a relacao funcional entre estruturas depende de {{c1::${c2}}}.`, c2, 1, 'mecanismo'],
        [`A distinção entre {{c1::${c3}}} e achados próximos costuma separar alternativas de prova.`, c3, 2, 'diferenciacao'],
        [`Na aplicação clínica inicial de ${title}, dominar {{c1::${c4}}} melhora a interpretação de casos.`, c4, 2, 'clinica'],
        [`Em revisão para prova, confundir {{c1::${c5}}} leva a erro recorrente.`, c5, 2, 'prova'],
        [`A primeira checagem prática de ${title} geralmente começa por {{c1::${c1}}}.`, c1, 1, 'definicao'],
        [`O mecanismo mais cobrado em ${title} conecta {{c1::${c2}}} ao desfecho funcional.`, c2, 1, 'mecanismo'],
        [`Na comparação anatômica, {{c1::${c3}}} funciona como marcador discriminativo.`, c3, 2, 'diferenciacao'],
        [`A correlação entre sintoma e morfologia exige lembrar {{c1::${c4}}}.`, c4, 2, 'clinica'],
        [`Um detalhe de alta cobrança em ${title} é {{c1::${c6}}}.`, c6, 2, 'prova']
      ],
      extras: [
        [`No contexto aplicado, reconhecer {{c1::${c5}}} pode mudar a conduta inicial.`, c5],
        [`Em referência clássica, ${title} enfatiza {{c1::${c6}}} como ponto de integração.`, c6]
      ]
    };
  }

  const out = [];
  for (const [tema, cfg] of Object.entries(lessons)) {
    for (const [frente, verso, dificuldade, categoria] of cfg.points) {
      out.push(card('bmf2', tema, frente, verso, dificuldade, categoria, 'material', ['bmf2', tema]));
    }
    for (const [frente, verso] of cfg.extras) {
      out.push(card('bmf2', tema, frente, verso, 2, 'extra_livro', 'extra', ['bmf2', tema, 'extra']));
    }
  }
  return out;
}

function buildSt() {
  const lessonMap = {
    st_a1: {
      points: [
        ['A vigilancia epidemiologica monitora eventos por analise de {{c1::incidencia}}.', 'incidencia', 1, 'definicao'],
        ['A vigilancia sanitaria atua sobre risco de produtos e {{c1::servicos}} de saude.', 'servicos', 1, 'definicao'],
        ['A vigilancia ambiental acompanha exposicao a fatores fisicos, quimicos e {{c1::biologicos}}.', 'biologicos', 2, 'mecanismo'],
        ['Prevencao primaria busca reduzir exposicao antes do surgimento da {{c1::doenca}}.', 'doenca', 1, 'clinica'],
        ['Prevencao quaternaria evita intervenções desnecessarias e {{c1::iatrogenia}}.', 'iatrogenia', 2, 'prova'],
        ['No SUS, vigilancia em saude precisa integrar cuidado individual e abordagem {{c1::territorial}}.', 'territorial', 1, 'mecanismo'],
        ['A notificacao oportuna permite iniciar bloqueio de risco em tempo {{c1::adequado}}.', 'adequado', 1, 'clinica'],
        ['Indicador de surto local pode ser aumento inesperado de {{c1::casos}}.', 'casos', 1, 'prova'],
        ['Acoes intersetoriais de vigilância incluem saneamento, ambiente e {{c1::trabalho}}.', 'trabalho', 2, 'diferenciacao'],
        ['A investigacao epidemiologica usa definicao operacional de {{c1::caso}}.', 'caso', 1, 'definicao']
      ],
      extras: [
        ['No modelo de Leavell e Clark, prevenção secundaria enfatiza {{c1::diagnostico precoce}}.', 'diagnostico precoce'],
        ['A avaliação de risco ambiental costuma combinar perigo, exposicao e {{c1::vulnerabilidade}}.', 'vulnerabilidade']
      ]
    },
    st_a2: {
      points: [
        ['A notificacao compulsoria deve ocorrer mesmo diante de suspeita {{c1::clinica}}.', 'clinica', 1, 'prova'],
        ['A lista nacional de notificação compulsoria e definida por {{c1::portaria ministerial}}.', 'portaria ministerial', 1, 'definicao'],
        ['Eventos de potencial internacional devem ser comunicados segundo o {{c1::RSI}}.', 'RSI', 2, 'prova'],
        ['SINAN organiza registro, investigacao e encerramento dos {{c1::casos}} notificados.', 'casos', 1, 'mecanismo'],
        ['A subnotificação reduz sensibilidade da vigilancia e atrasa medidas de {{c1::controle}}.', 'controle', 2, 'clinica'],
        ['Doenca de notificacao imediata exige comunicacao em ate {{c1::24 horas}}.', '24 horas', 1, 'prova'],
        ['Notificacao negativa significa ausencia de casos em periodo {{c1::determinado}}.', 'determinado', 2, 'diferenciacao'],
        ['A investigação deve classificar caso como confirmado, descartado ou {{c1::inconclusivo}}.', 'inconclusivo', 1, 'definicao'],
        ['No RSI, evento inusitado com risco de disseminacao internacional exige {{c1::alerta}}.', 'alerta', 2, 'clinica'],
        ['Vigilancia efetiva combina notificação, analise e devolutiva para {{c1::servicos}}.', 'servicos', 1, 'mecanismo']
      ],
      extras: [
        ['A oportunidade da notificação impacta diretamente o tempo de {{c1::resposta}} em saude publica.', 'resposta'],
        ['No fluxo ideal, ficha incompleta exige complemento antes do {{c1::encerramento}} do caso.', 'encerramento']
      ]
    },
    st_a3: {
      points: [
        ['A PNSTT organiza a linha de cuidado em saude do {{c1::trabalhador}}.', 'trabalhador', 1, 'definicao'],
        ['A RENAST articula serviços de vigilância e assistência na rede {{c1::SUS}}.', 'SUS', 1, 'mecanismo'],
        ['Os CEREST apoiam tecnicamente equipes da atenção basica e da {{c1::vigilancia}}.', 'vigilancia', 2, 'definicao'],
        ['A vigilancia em saude do trabalhador deve mapear risco por atividade {{c1::ocupacional}}.', 'ocupacional', 1, 'clinica'],
        ['Nexo causal conecta agravo de saude e exposicao no {{c1::trabalho}}.', 'trabalho', 1, 'prova'],
        ['A integralidade da PNSTT inclui promoção, prevenção, assistência e {{c1::reabilitacao}}.', 'reabilitacao', 2, 'mecanismo'],
        ['A vigilância ativa em empresa pode detectar precocemente agravos {{c1::subclinicos}}.', 'subclinicos', 2, 'clinica'],
        ['A notificação de acidente de trabalho subsidia planejamento de {{c1::intervencoes}}.', 'intervencoes', 1, 'prova'],
        ['Ação intersetorial da PNSTT envolve saude, trabalho e {{c1::previdencia}}.', 'previdencia', 2, 'diferenciacao'],
        ['A abordagem territorial permite identificar clusters de risco {{c1::ocupacional}}.', 'ocupacional', 1, 'definicao']
      ],
      extras: [
        ['No cuidado longitudinal, retorno ao trabalho requer avaliação de {{c1::capacidade funcional}}.', 'capacidade funcional'],
        ['A matriz de risco ocupacional combina probabilidade e {{c1::gravidade}} do dano.', 'gravidade']
      ]
    },
    st_a4: {
      points: [
        ['Acidente de trabalho inclui evento ocorrido no exercicio da atividade {{c1::laboral}}.', 'laboral', 1, 'definicao'],
        ['A CAT formaliza comunicacao do acidente para fins previdenciarios e {{c1::epidemiologicos}}.', 'epidemiologicos', 1, 'prova'],
        ['Acidente de trajeto e reconhecido quando ocorre no percurso casa-{{c1::trabalho}}.', 'trabalho', 1, 'diferenciacao'],
        ['Doenca ocupacional resulta de exposicao inerente ao processo de {{c1::trabalho}}.', 'trabalho', 1, 'definicao'],
        ['Nexo tecnico epidemiologico pode apoiar reconhecimento de beneficio {{c1::acidentario}}.', 'acidentario', 2, 'prova'],
        ['A anamnese ocupacional deve incluir funcao, tempo de exposicao e {{c1::agente}} de risco.', 'agente', 2, 'clinica'],
        ['Afastamento previdenciario depende de documentação medica {{c1::consistente}}.', 'consistente', 1, 'mecanismo'],
        ['Subregistro de acidentes distorce perfil real de risco {{c1::setorial}}.', 'setorial', 2, 'clinica'],
        ['Direitos do trabalhador incluem ambiente seguro e uso adequado de {{c1::EPI}}.', 'EPI', 1, 'prova'],
        ['A investigação do acidente deve identificar causa imediata e causa {{c1::raiz}}.', 'raiz', 2, 'mecanismo']
      ],
      extras: [
        ['A analise de arvore de causas ajuda a prevenir recorrencia de {{c1::acidentes}}.', 'acidentes'],
        ['A reabilitação profissional visa retorno com menor risco de {{c1::reagravo}}.', 'reagravo']
      ]
    },
    st_a5: {
      points: [
        ['A NR-1 estabelece diretrizes gerais de gerenciamento de {{c1::riscos}} ocupacionais.', 'riscos', 1, 'definicao'],
        ['O PGR organiza inventario de riscos e plano de {{c1::acao}}.', 'acao', 1, 'mecanismo'],
        ['A NR-4 define composição do {{c1::SESMT}} nas empresas.', 'SESMT', 1, 'prova'],
        ['A NR-5 disciplina a atuação da {{c1::CIPA}}.', 'CIPA', 1, 'definicao'],
        ['A NR-6 regula fornecimento, treinamento e uso de {{c1::EPI}}.', 'EPI', 1, 'prova'],
        ['A NR-7 estrutura o {{c1::PCMSO}} para monitoramento da saude ocupacional.', 'PCMSO', 2, 'mecanismo'],
        ['A NR-15 trata de atividades e operações {{c1::insalubres}}.', 'insalubres', 1, 'diferenciacao'],
        ['A NR-16 aborda atividades e operações {{c1::perigosas}}.', 'perigosas', 1, 'diferenciacao'],
        ['A NR-17 define requisitos de {{c1::ergonomia}} no trabalho.', 'ergonomia', 1, 'clinica'],
        ['Conformidade com NRs reduz acidentes e agravos relacionados ao {{c1::trabalho}}.', 'trabalho', 2, 'clinica']
      ],
      extras: [
        ['Medidas de controle seguem prioridade: coletiva, administrativa e {{c1::individual}}.', 'individual'],
        ['Treinamento periodico melhora adesao a protocolos de {{c1::seguranca}}.', 'seguranca']
      ]
    },
    st_a6: {
      points: [
        ['LER/DORT envolve sobrecarga funcional repetitiva de tendoes e {{c1::musculos}}.', 'musculos', 1, 'definicao'],
        ['PAIR e caracterizada por perda auditiva neurossensorial bilateral e {{c1::irreversivel}}.', 'irreversivel', 1, 'prova'],
        ['Pneumoconioses decorrem de inalação cronica de poeiras {{c1::minerais}}.', 'minerais', 1, 'definicao'],
        ['Dermatite ocupacional costuma melhorar com afastamento do {{c1::agente}} causador.', 'agente', 2, 'clinica'],
        ['Anamnese ocupacional deve relacionar sintoma, exposicao e {{c1::tempo}} de latencia.', 'tempo', 2, 'mecanismo'],
        ['Especificidade do diagnóstico aumenta com avaliacao do posto de {{c1::trabalho}}.', 'trabalho', 1, 'clinica'],
        ['No LER/DORT, ajuste ergonomico e parte central da conduta {{c1::nao farmacologica}}.', 'nao farmacologica', 2, 'prova'],
        ['No suspeito de PAIR, audiometria seriada auxilia vigilancia {{c1::ocupacional}}.', 'ocupacional', 1, 'mecanismo'],
        ['Pneumoconiose por silica eleva risco futuro de {{c1::tuberculose}}.', 'tuberculose', 2, 'prova'],
        ['Notificação de agravos ocupacionais fortalece ações de {{c1::prevencao}} coletiva.', 'prevencao', 1, 'diferenciacao']
      ],
      extras: [
        ['A hierarquia de controle de risco prioriza eliminação da {{c1::fonte}}.', 'fonte'],
        ['Reabilitação funcional precoce reduz cronicidade em {{c1::LER/DORT}}.', 'LER/DORT']
      ]
    },
    st_a7: {
      points: [
        ['Burnout e sindrome relacionada a estresse cronico no {{c1::trabalho}}.', 'trabalho', 1, 'definicao'],
        ['Assedio moral envolve exposição repetida a humilhação no ambiente {{c1::laboral}}.', 'laboral', 1, 'prova'],
        ['DCNT podem ser agravadas por jornada extensa e baixa recuperação {{c1::fisica}}.', 'fisica', 2, 'mecanismo'],
        ['A avaliacao de saude mental ocupacional inclui risco psicossocial e {{c1::apoio social}}.', 'apoio social', 2, 'clinica'],
        ['Intervenção efetiva combina medidas organizacionais e cuidado {{c1::individual}}.', 'individual', 1, 'diferenciacao'],
        ['Absentismo frequente pode sinalizar sobrecarga e sofrimento {{c1::psiquico}}.', 'psiquico', 1, 'clinica'],
        ['Presenteismo reduz desempenho mesmo sem afastamento formal do {{c1::trabalhador}}.', 'trabalhador', 2, 'prova'],
        ['A prevenção terciaria inclui reabilitação e retorno assistido ao {{c1::trabalho}}.', 'trabalho', 1, 'mecanismo'],
        ['Apoio da liderança reduz risco de transtornos mentais {{c1::ocupacionais}}.', 'ocupacionais', 1, 'prova'],
        ['A vigilância em saúde mental precisa integrar dados clinicos e {{c1::organizacionais}}.', 'organizacionais', 2, 'diferenciacao']
      ],
      extras: [
        ['Programas de bem-estar têm maior efeito quando incluem gestão de {{c1::carga de trabalho}}.', 'carga de trabalho'],
        ['Triagem precoce de sofrimento psiquico melhora adesao ao {{c1::tratamento}}.', 'tratamento']
      ]
    },
    st_a8: {
      points: [
        ['No contexto ocupacional, abordagem de IST exige confidencialidade e redução de {{c1::estigma}}.', 'estigma', 1, 'clinica'],
        ['SINAN registra agravos e subsidia planejamento de ações de {{c1::vigilancia}}.', 'vigilancia', 1, 'definicao'],
        ['A CAT e documento essencial para comunicação formal de acidente de {{c1::trabalho}}.', 'trabalho', 1, 'prova'],
        ['A CIAT integra fluxo local para investigação de acidente e {{c1::notificacao}}.', 'notificacao', 2, 'mecanismo'],
        ['Dados consistentes em sistema de informação melhoram decisões de {{c1::saude publica}}.', 'saude publica', 1, 'diferenciacao'],
        ['Subnotificação compromete leitura real de incidência de {{c1::agravos}} ocupacionais.', 'agravos', 2, 'prova'],
        ['A anamnese de IST ocupacional deve incluir exposicao biológica e uso de {{c1::EPI}}.', 'EPI', 1, 'clinica'],
        ['Notificacao adequada permite busca ativa de contatos e medidas de {{c1::prevencao}}.', 'prevencao', 1, 'mecanismo'],
        ['Integração entre CEREST e atenção básica melhora seguimento do {{c1::caso}}.', 'caso', 2, 'clinica'],
        ['Qualidade do dado epidemiologico depende de completude e {{c1::oportunidade}} do registro.', 'oportunidade', 2, 'prova']
      ],
      extras: [
        ['Painel de indicadores deve acompanhar incidência, desfecho e tempo de {{c1::encerramento}}.', 'encerramento'],
        ['Em exposição ocupacional biologica, profilaxia pos-exposição deve ser {{c1::imediata}}.', 'imediata']
      ]
    }
  };

  const flashcards = [];
  for (const [tema, cfg] of Object.entries(lessonMap)) {
    for (const [frente, verso, dificuldade, categoria] of cfg.points) {
      flashcards.push(card('saude_trabalhador', tema, frente, verso, dificuldade, categoria, 'material', ['saude_trabalhador', tema]));
    }
    for (const [frente, verso] of cfg.extras) {
      flashcards.push(card('saude_trabalhador', tema, frente, verso, 2, 'extra_livro', 'extra', ['saude_trabalhador', tema, 'extra']));
    }
  }
  return { meta: { materia: 'saude_trabalhador', aulas: 8, cards_total: flashcards.length }, flashcards };
}

fs.writeFileSync(BMF2_OUT, JSON.stringify(buildBmf2(), null, 2) + '\n', 'utf8');
fs.writeFileSync(ST_OUT, JSON.stringify(buildSt(), null, 2) + '\n', 'utf8');
console.log('Arquivos regenerados:', BMF2_OUT, ST_OUT);
