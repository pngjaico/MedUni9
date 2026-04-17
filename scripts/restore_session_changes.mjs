/**
 * restore_session_changes.mjs
 * Reaplicar todas as mudanças da sessão de 2026-04-17:
 * 1. Expandir currículo do Módulo 8 (pe8, eci8, ecl8) com aulas completas
 * 2. Unificar neu8 + psic8 => sm8 (28 aulas)
 * 3. Injetar 8 questões essenciais sus_a1 (IDs 3461-3468)
 */

import fs from 'fs';

const MATERIAS_PATH = './data/materias.json';
const QUESTOES_PATH = './data/questoes.json';

// ─── 1. EXPANSÃO DO MÓDULO 8 ─────────────────────────────────────────────────

const materias = JSON.parse(fs.readFileSync(MATERIAS_PATH, 'utf8'));

materias['pe8'] = {
  nome: 'Projeto Extensionista 8 — Saúde do Idoso',
  sigla: 'PE8',
  modulo: 8,
  ativo: true,
  icon: '',
  cor: '#10B981',
  descricao: 'Saúde do idoso, envelhecimento ativo e redes de atenção integral.',
  professores: [],
  totalCards: 0,
  totalQuestoes: 0,
  aulas: [
    { id: 'pe8_a1', tema: 'Envelhecimento Populacional e PNSPI', descricao: 'Perfil demográfico do idoso no Brasil e a Política Nacional de Saúde da Pessoa Idosa.' },
    { id: 'pe8_a2', tema: 'Avaliação Multidimensional do Idoso', descricao: 'Instrumentos de avaliação funcional, cognitiva e social do paciente idoso.' },
    { id: 'pe8_a3', tema: 'Síndromes Geriátricas (5Is)', descricao: 'Imobilidade, instabilidade, incontinência, iatrogenia e insuficiência cognitiva.' },
    { id: 'pe8_a4', tema: 'Polifarmácia e Critérios de Beers', descricao: 'Farmacologia no idoso, medicamentos inapropriados e critérios de Beers.' },
    { id: 'pe8_a5', tema: 'Redes de Atenção ao Idoso e Cuidado Paliativo', descricao: 'RAS para idosos, ILPI, cuidado domiciliar e princípios de cuidados paliativos.' },
    { id: 'pe8_a6', tema: 'Promoção da Saúde e Envelhecimento Ativo', descricao: 'Atividade física, nutrição e prevenção de quedas em idosos.' },
  ]
};

materias['eci8'] = {
  nome: 'Emergências Cirúrgicas Prevalentes',
  sigla: 'ECI8',
  modulo: 8,
  ativo: true,
  icon: '',
  cor: '#B91C1C',
  descricao: 'Avaliação e manejo cirúrgico de urgências traumáticas e não traumáticas.',
  professores: [],
  totalCards: 0,
  totalQuestoes: 0,
  aulas: [
    { id: 'eci8_a1', tema: 'ATLS — Avaliação Primária e Secondary Survey', descricao: 'Protocolo ATLS, ABCDE do trauma, revisão primária e secundária.' },
    { id: 'eci8_a2', tema: 'Trauma Torácico', descricao: 'Pneumotórax hipertensivo, hemotórax maciço, tamponamento e tórax instável.' },
    { id: 'eci8_a3', tema: 'Trauma Abdominal', descricao: 'Mecanismos de lesão, FAST, laparotomia de controle de danos.' },
    { id: 'eci8_a4', tema: 'Choque — Classificação e Reposição', descricao: 'Tipos de choque, classes de hemorragia e protocolo de reposição volêmica.' },
    { id: 'eci8_a5', tema: 'Trauma Cranioencefálico (TCE)', descricao: 'Escala de Coma de Glasgow, lesões primárias/secundárias e manejo inicial.' },
    { id: 'eci8_a6', tema: 'Trauma de Pelve e Retroperitônio', descricao: 'Fraturas pélvicas instáveis, lesões vasculares e urológicas associadas.' },
    { id: 'eci8_a7', tema: 'Queimaduras', descricao: 'Classificação, superfície corporal queimada (Regra dos 9s) e fluidoterapia de Parkland.' },
    { id: 'eci8_a8', tema: 'Trauma de Extremidades e Síndromes Compartimentais', descricao: 'Fraturas expostas, síndrome de esmagamento e fasciotomia.' },
    { id: 'eci8_a9', tema: 'Abdome Agudo — Inflamatório e Obstrutivo', descricao: 'Apendicite, colecistite, pancreatite, obstrução intestinal.' },
    { id: 'eci8_a10', tema: 'Abdome Agudo — Perfurativo e Vascular', descricao: 'Úlcera perfurada, diverticulite, isquemia mesentérica aguda.' },
    { id: 'eci8_a11', tema: 'Hemorragia Digestiva Alta e Baixa', descricao: 'Etiologia, diagnóstico endoscópico e manejo cirúrgico.' },
    { id: 'eci8_a12', tema: 'Emergências Hepatopancreáticas', descricao: 'Colangite aguda, pancreatite grave (Ranson, BISAP) e fístulas biliares.' },
    { id: 'eci8_a13', tema: 'Urgência Coloretal — Volvo e Hérnias Complicadas', descricao: 'Volvo de sigmoide, hérnias irredutíveis, encarceradas e estranguladas.' },
    { id: 'eci8_a14', tema: 'Fundamentos de Ortopedia Traumatológica', descricao: 'Classificação das fraturas, princípios de redução e fixação.' },
    { id: 'eci8_a15', tema: 'Fraturas da Coluna Vertebral', descricao: 'Classificação de Denis, fraturas estáveis/instáveis e comprometimento neurológico.' },
    { id: 'eci8_a16', tema: 'Fraturas do Membro Superior', descricao: 'Clavícula, úmero proximal, cotovelo e punho — manejo ortopédico.' },
    { id: 'eci8_a17', tema: 'Fraturas do Membro Inferior', descricao: 'Colo do fêmur, diáfise femoral, plateau tibial e tornozelo.' },
    { id: 'eci8_a18', tema: 'Lesões Ligamentares e Luxações', descricao: 'Ombro, joelho, tornozelo — diagnóstico e abordagem inicial.' },
    { id: 'eci8_a19', tema: 'Osteomielite e Artrite Séptica', descricao: 'Diagnóstico imagiológico, agentes etiológicos e indicação cirúrgica.' },
    { id: 'eci8_a20', tema: 'Urgências Vasculares Periféricas', descricao: 'Isquemia aguda de membro, trombose venosa profunda e embolia arterial.' },
    { id: 'eci8_a21', tema: 'Aneurismas e Dissecção Aórtica', descricao: 'AAA roto, dissecção de aorta (Stanford A/B) e manejo emergencial.' },
    { id: 'eci8_a22', tema: 'Doença Arterial Obstrutiva Periférica (DAOP)', descricao: 'Claudicação intermitente e isquemia crítica.' },
    { id: 'eci8_a23', tema: 'Síndromes Aórticas Agudas (Dissecção)', descricao: 'Classificação de Stanford e manejo emergencial.' },
    { id: 'eci8_a24', tema: 'Fundamentos da Cirurgia Cardíaca', descricao: 'Monitorização, CEC e proteção miocárdica.' },
    { id: 'eci8_a25', tema: 'Cirurgia Valvar (Mitral e Aórtica)', descricao: 'Estenose e insuficiência; próteses cardíacas.' },
    { id: 'eci8_a26', tema: 'Revascularização do Miocárdio (RM)', descricao: 'Aspectos técnicos, seleção de enxertos e indicações.' },
    { id: 'eci8_a27', tema: 'Introdução à Cirurgia Torácica', descricao: 'Vias de acesso, toracocentese e drenagem pleural.' },
    { id: 'eci8_a28', tema: 'Câncer de Pulmão e Nódulo Solitário', descricao: 'Estadiamento, diagnóstico e tratamento cirúrgico.' },
    { id: 'eci8_a29', tema: 'Derrame Pleural e Empiema', descricao: 'Fisiopatologia, diagnóstico e manejo cirúrgico.' },
    { id: 'eci8_a30', tema: 'Pneumotórax Espontâneo e Adquirido', descricao: 'Classificação, tratamento e prevenção de recidiva.' },
  ]
};

materias['ecl8'] = {
  nome: 'Emergências Clínicas Prevalentes',
  sigla: 'ECL8',
  modulo: 8,
  ativo: true,
  icon: '',
  cor: '#2563EB',
  descricao: 'Protocolos de emergência clínica, suporte de vida e cardiologia aguda.',
  professores: [],
  totalCards: 0,
  totalQuestoes: 0,
  aulas: [
    { id: 'ecl8_a1', tema: 'Taquiarritmias e Bradiarritmias', descricao: 'Diagnóstico eletrocardiográfico e protocolo ACLS.' },
    { id: 'ecl8_a2', tema: 'Insuficiência Respiratória Aguda', descricao: 'Classificação, gasometria e suporte ventilatório (VNI/IOT).' },
    { id: 'ecl8_a3', tema: 'Tromboembolismo Pulmonar (TEP)', descricao: 'Critérios diagnósticos, exames de imagem e anticoagulação.' },
    { id: 'ecl8_a4', tema: 'Síndromes Coronarianas Agudas (SCA)', descricao: 'IAM com e sem supra de ST, marcadores e tratamento.' },
    { id: 'ecl8_a5', tema: 'Insuficiência Cardíaca Aguda (ICA)', descricao: 'Fisiopatologia, perfis hemodinâmicos e manejo emergencial.' },
    { id: 'ecl8_a6', tema: 'Sepse e Choque Séptico', descricao: 'Critérios Sepsis-3, SOFA e protocolo de 1 hora.' },
    { id: 'ecl8_a7', tema: 'Injúria Renal Aguda (IRA)', descricao: 'Critérios KDIGO, indicações de diálise e manejo clínico.' },
    { id: 'ecl8_a8', tema: 'Distúrbio Hidroeletrolítico', descricao: 'Alterações de Sódio (Na) e Potássio (K) - diagnóstico e correção.' },
    { id: 'ecl8_a9', tema: 'Distúrbios Ácido-Base', descricao: 'Acidoses e alcaloses: interpretação sistemática da gasometria.' },
    { id: 'ecl8_a10', tema: 'Complicações Agudas do Hepatopata', descricao: 'Cirrose, ascite, PBE e encefalopatia hepática.' },
    { id: 'ecl8_a11', tema: 'Síndromes Ictéricas Febris', descricao: 'Investigação diagnóstica e doenças infecciosas associadas.' },
    { id: 'ecl8_a12', tema: 'Descompensações Agudas da Diabetes', descricao: 'Cetoacidose (CAD) e Estado Hiperosmolar (EHH).' },
    { id: 'ecl8_a13', tema: 'Lupus Eritematoso Sistêmico (LES)', descricao: 'Quadro clínico, anticorpos e manifestações graves.' },
    { id: 'ecl8_a14', tema: 'Linfomas (Hodgkin e Não-Hodgkin)', descricao: 'Epidemiologia, diagnóstico, estadiamento e complicações.' },
    { id: 'ecl8_a15', tema: 'Leucemias Agudas e Crônicas', descricao: 'Abordagem diagnóstica e manejo clínico das pancitopenias.' },
    { id: 'ecl8_a16', tema: 'Mieloma Múltiplo e Emergências Oncológicas', descricao: 'CRAB, síndrome de lise tumoral e neutropenia febril.' },
  ]
};

// ─── 2. UNIFICAÇÃO NEU8 + PSIC8 => SM8 ───────────────────────────────────────

delete materias['neu8'];
delete materias['psic8'];

materias['sm8'] = {
  nome: 'Saúde Mental (Neurologia e Psiquiatria)',
  sigla: 'SM8',
  modulo: 8,
  ativo: true,
  icon: '',
  cor: '#6D28D9',
  descricao: 'Abordagem integrada de temas prevalentes em Neurologia e Psiquiatria.',
  professores: [],
  totalCards: 0,
  totalQuestoes: 0,
  aulas: [
    { id: 'sm8_a1',  tema: 'Exame Neurológico e Topografia',            descricao: 'Semiologia do SNC, interpretação de déficits e localização.' },
    { id: 'sm8_a2',  tema: 'AVC Isquêmico (AVCi)',                       descricao: 'Fatores de risco, exames e profilaxia secundária.' },
    { id: 'sm8_a3',  tema: 'AVC Hemorrágico e HSA',                      descricao: 'Hemorragias intracranianas e aneurismas rotos.' },
    { id: 'sm8_a4',  tema: 'Hipertensão Intracraniana e Hidrocefalia',   descricao: 'Neurofisiologia e estratégias de tratamento clínico/cirúrgico.' },
    { id: 'sm8_a5',  tema: 'Cefaleias Primárias e Secundárias',          descricao: 'Critérios de diagnóstico, red flags e investigação.' },
    { id: 'sm8_a6',  tema: 'Epilepsia e Crises Epilépticas',             descricao: 'Tipos de crises, síncope vs epilepsia e drogas antiepilépticas.' },
    { id: 'sm8_a7',  tema: 'Traumatismo Cranioencefálico (TCE)',         descricao: 'Anatomia do trauma e manejo da lesão cerebral.' },
    { id: 'sm8_a8',  tema: 'Coma e Distúrbios da Consciência',           descricao: 'Exame do paciente comatoso e diagnósticos diferenciais.' },
    { id: 'sm8_a9',  tema: 'Morte Encefálica e Legislação',              descricao: 'Protocolo diagnóstico e diretrizes de doação de órgãos.' },
    { id: 'sm8_a10', tema: 'Distúrbios Cognitivos (Demências)',          descricao: 'Avaliação cognitiva e diagnóstico da Doença de Alzheimer.' },
    { id: 'sm8_a11', tema: 'Vertigem e Síndromes Vestibulares',         descricao: 'VPPB, ataxia e investigação de tonturas.' },
    { id: 'sm8_a12', tema: 'Distúrbios do Movimento',                   descricao: 'Parkinsonismo, tremores hipo e hipercinéticos.' },
    { id: 'sm8_a13', tema: 'Infecções do SNC',                          descricao: 'Meningites e encefalites bacterianas, fúngicas e virais.' },
    { id: 'sm8_a14', tema: 'Distúrbios do Sono',                        descricao: 'Insônia, sonolência excessiva e fisiologia do sono.' },
    { id: 'sm8_a15', tema: 'Doenças Desmielinizantes',                  descricao: 'Neurologia autoimune e esclerose múltipla.' },
    { id: 'sm8_a16', tema: 'Trauma Raquimedular (TRM)',                  descricao: 'Avaliação medular e estabilização de coluna.' },
    { id: 'sm8_a17', tema: 'Entrevista Psiquiátrica e Exame Psíquico',  descricao: 'Anamnese e avaliação sistemática do estado mental.' },
    { id: 'sm8_a18', tema: 'Dependência Química',                       descricao: 'Neurobiologia, intoxicação e estratégias de tratamento.' },
    { id: 'sm8_a19', tema: 'Psicoses e Esquizofrenia',                  descricao: 'Fisiopatologia, sintomatologia e manejo medicamentoso.' },
    { id: 'sm8_a20', tema: 'Emergências Psiquiátricas e Suicídio',      descricao: 'Avaliação de risco, escuta e manejo de agitação psicomotora.' },
    { id: 'sm8_a21', tema: 'Transtornos do Neurodesenvolvimento',       descricao: 'TDAH e Espectro Autista (TEA); psicofarmacologia.' },
    { id: 'sm8_a22', tema: 'Transtornos Alimentares',                   descricao: 'Anorexia, bulimia e tratamentos psicoterápicos.' },
    { id: 'sm8_a23', tema: 'Transtornos de Ansiedade',                  descricao: 'Ansiedade patológica, pânico e fobias sociais.' },
    { id: 'sm8_a24', tema: 'Transtorno de Estresse Pós-Traumático (TEPT)', descricao: 'Conceito de trauma emocional e repercussão clínica.' },
    { id: 'sm8_a25', tema: 'Transtorno Obsessivo-Compulsivo (TOC)',     descricao: 'Síndrome obsessivo-compulsiva e estratégias de controle.' },
    { id: 'sm8_a26', tema: 'Transtornos de Humor',                      descricao: 'Depressão maior e transtorno afetivo bipolar.' },
    { id: 'sm8_a27', tema: 'Transtornos de Personalidade',              descricao: 'Formação da personalidade e principais transtornos (Cluster A/B/C).' },
    { id: 'sm8_a28', tema: 'Transtornos Somatoformes',                  descricao: 'Mecanismos de somatização e apresentação psicossomática.' },
  ]
};

fs.writeFileSync(MATERIAS_PATH, JSON.stringify(materias, null, 2), 'utf8');
console.log('✓ materias.json: Módulo 8 expandido + sm8 criado');

// ─── 3. INJETAR 8 QUESTÕES ESSENCIAIS SUS_A1 ─────────────────────────────────

const questoes = JSON.parse(fs.readFileSync(QUESTOES_PATH, 'utf8'));
const maxId = Math.max(...questoes.questoes.map(q => q.id || 0));
console.log('Max ID atual:', maxId);

const novasQuestoes = [
  {
    id: maxId + 1, materia: 'sus', aula_id: 'sus_a1', tema: 'sus_a1', modulo: 1, dificuldade: 2, correta: 1,
    enunciado: 'No modelo de determinantes sociais de saúde proposto por Dahlgren e Whitehead, amplamente utilizado no SUS, os fatores são organizados em camadas concêntricas. Qual das alternativas descreve corretamente um determinante estrutural (macrodeterminante) localizado na camada mais externa?',
    opcoes: ['A) Estilos de vida dos indivíduos.', 'B) Condições socioeconômicas, culturais e ambientais gerais.', 'C) Redes sociais e comunitárias.', 'D) Idade, sexo e fatores hereditários.'],
    explicacao_geral: 'O modelo de Dahlgren e Whitehead organiza os DSS em camadas, da micro (biológica) à macro (estrutural).',
    explicacoes_opcoes: { A: 'Incorreta: Estilos de vida estão na segunda camada, mais próxima do indivíduo.', B: 'Correta: A camada mais externa envolve as condições macroestruturais da sociedade.', C: 'Incorreta: Redes sociais estão na camada intermediária.', D: 'Incorreta: Fatores biológicos são o núcleo do modelo, não a camada externa.' },
    essencial: true, caso_clinico: false
  },
  {
    id: maxId + 2, materia: 'sus', aula_id: 'sus_a1', tema: 'sus_a1', modulo: 1, dificuldade: 2, correta: 0,
    enunciado: 'Um médico de família orienta uma paciente de 30 anos sobre a importância da vacinação contra o HPV e da prática regular de exercícios físicos para evitar doenças crônicas futuras. Segundo o modelo de Leavell e Clark, essas ações são classificadas como:',
    opcoes: ['A) Prevenção Primária (Promoção da Saúde e Proteção Específica).', 'B) Prevenção Secundária (Diagnóstico Precoce).', 'C) Prevenção Terciária (Reabilitação).', 'D) Prevenção Quaternária (Evitar danos iatrogênicos).'],
    explicacao_geral: 'A prevenção primária atua no período pré-patogênico, antes da doença se instalar.',
    explicacoes_opcoes: { A: 'Correta: Vacina (proteção específica) e exercícios (promoção) são prevenção primária.', B: 'Incorreta: A prevenção secundária ocorre quando a doença já existe, mas está no início.', C: 'Incorreta: Terciária foca em reduzir sequelas de doenças avançadas.', D: 'Incorreta: Quaternária visa proteger o paciente de intervenções médicas desnecessárias.' },
    essencial: true, caso_clinico: true
  },
  {
    id: maxId + 3, materia: 'sus', aula_id: 'sus_a1', tema: 'sus_a1', modulo: 1, dificuldade: 1, correta: 2,
    enunciado: 'A definição de saúde da OMS (1948) como "um estado de completo bem-estar físico, mental e social, e não apenas a ausência de doença" é frequentemente criticada na literatura acadêmica de saúde coletiva. Qual é a principal crítica a esse modelo?',
    opcoes: ['A) Ela ignora a importância dos fatores biológicos.', 'B) Ela foca excessivamente no tratamento de doenças infecciosas.', 'C) Ela estabelece uma meta inalcançável e utópica, que pode medicalizar a vida.', 'D) Ela não considera o bem-estar social como parte da saúde.'],
    explicacao_geral: 'O conceito da OMS foi um avanço por ser holístico, mas é criticado por ser estático e idealizado.',
    explicacoes_opcoes: { A: 'Incorreta: Ela inclui o "físico", abrangendo o biológico.', B: 'Incorreta: A crítica não é sobre o tipo de doença, mas sobre a definição de "saúde".', C: 'Correta: A ideia de "completo bem-estar" faz com que quase ninguém seja considerado "saudável".', D: 'Incorreta: A definição explicitamente inclui o social.' },
    essencial: true, caso_clinico: false
  },
  {
    id: maxId + 4, materia: 'sus', aula_id: 'sus_a1', tema: 'sus_a1', modulo: 1, dificuldade: 2, correta: 1,
    enunciado: 'Ao analisar a prevalência de doenças respiratórias em uma favela onde não há saneamento básico e as casas são pequenas e mal ventiladas, o gestor de saúde está focando em determinantes que a CNDSS classifica como:',
    opcoes: ['A) Fatores hereditários inalteráveis.', 'B) Condições de vida e de trabalho.', 'C) Preferências individuais de lazer.', 'D) Apenas falha no acesso a antibióticos.'],
    explicacao_geral: 'As condições de moradia e saneamento são determinantes sociais intermediários.',
    explicacoes_opcoes: { A: 'Incorreta: Moradia e saneamento são fatores ambientais/sociais, não genéticos.', B: 'Correta: Habitação e saneamento são o cerne das condições de vida que determinam a saúde.', C: 'Incorreta: O cenário descreve falta de infraestrutura, não escolhas de lazer.', D: 'Incorreta: Antibióticos tratam o efeito, os determinantes explicam a causa.' },
    essencial: true, caso_clinico: true
  },
  {
    id: maxId + 5, materia: 'sus', aula_id: 'sus_a1', tema: 'sus_a1', modulo: 1, dificuldade: 2, correta: 3,
    enunciado: 'A realização de um exame de Papanicolau (citopatológico de colo de útero) em uma paciente assintomática é um exemplo clássico de qual nível de intervenção segundo a História Natural da Doença?',
    opcoes: ['A) Promoção da saúde.', 'B) Proteção específica.', 'C) Limitação da incapacidade.', 'D) Diagnóstico precoce (Prevenção Secundária).'],
    explicacao_geral: 'O rastreamento (screening) visa detectar a doença em fase inicial, antes dos sintomas.',
    explicacoes_opcoes: { A: 'Incorreta: Promoção da saúde é genérica (ex: boa alimentação).', B: 'Incorreta: Proteção específica é direcionada (ex: vacina).', C: 'Incorreta: Limitação da incapacidade é o final da prevenção secundária (evitar piora).', D: 'Correta: Exames de rastreio são a base do diagnóstico precoce.' },
    essencial: true, caso_clinico: true
  },
  {
    id: maxId + 6, materia: 'sus', aula_id: 'sus_a1', tema: 'sus_a1', modulo: 1, dificuldade: 3, correta: 1,
    enunciado: 'O conceito de vulnerabilidade na saúde coletiva supera a ideia clássica de "grupo de risco" ao considerar três dimensões interdependentes. São elas:',
    opcoes: ['A) Biológica, Química e Física.', 'B) Individual, Social e Programática (ou Institucional).', 'C) Rica, Média e Pobre.', 'D) Genética, Ambiental e Comportamental.'],
    explicacao_geral: 'Vulnerabilidade analisa o contexto total que expõe o indivíduo ao agravo.',
    explicacoes_opcoes: { A: 'Incorreta: São riscos físicos, não o conceito de vulnerabilidade social.', B: 'Correta: A tríade clássica da vulnerabilidade (Ayres) abrange o sujeito, a sociedade e os serviços.', C: 'Incorreta: Classe social é parte da dimensão social, mas não define a tríade.', D: 'Incorreta: Esta é a visão tradicional dos fatores de risco, não o conceito ampliado.' },
    essencial: true, caso_clinico: false
  },
  {
    id: maxId + 7, materia: 'sus', aula_id: 'sus_a1', tema: 'sus_a1', modulo: 1, dificuldade: 2, correta: 0,
    enunciado: 'Na História Natural da Doença, o período que se divide em "Pré-patogênico" e "Patogênico" define a evolução do agravo. Qual alternativa descreve corretamente a fase de patogênese inicial (ou subclínica)?',
    opcoes: ['A) Quando já houve interação estímulo-hospedeiro, mas ainda não há sinais/sintomas claros.', 'B) Antes da interação do homem com o agente causador.', 'C) Quando o paciente já apresenta sequelas e incapacidade física.', 'D) No momento da reabilitação psicossocial.'],
    explicacao_geral: 'A patogênese começa com a interação estímulo-suscetível.',
    explicacoes_opcoes: { A: 'Correta: É a fase em que as alterações já ocorrem no corpo, mas são invisíveis clinicamente.', B: 'Incorreta: Antes da interação é o período pré-patogênico.', C: 'Incorreta: Sequelas ocorrem no estágio avançado da patogênese.', D: 'Incorreta: Reabilitação é prevenção terciária, após a fase clínica aguda.' },
    essencial: true, caso_clinico: false
  },
  {
    id: maxId + 8, materia: 'sus', aula_id: 'sus_a1', tema: 'sus_a1', modulo: 1, dificuldade: 2, correta: 2,
    enunciado: 'Um paciente que fuma 2 maços de cigarro por dia apresenta um determinante de saúde classificado como "estilo de vida". No modelo de DSS, este é considerado um determinante:',
    opcoes: ['A) Estrutural (distal).', 'B) Inalterável.', 'C) Próximo (intermediário).', 'D) Programático.'],
    explicacao_geral: 'Determinantes próximos são comportamentos individuais e condições imediatas.',
    explicacoes_opcoes: { A: 'Incorreta: Distal seria a legislação do tabaco ou a economia do país.', B: 'Incorreta: O fumo é um hábito passível de mudança.', C: 'Correta: Estilos de vida são determinantes próximos/individuais.', D: 'Incorreta: Programático refere-se à organização dos serviços de saúde.' },
    essencial: true, caso_clinico: true
  },
];

// Verificar colisão de IDs
const existingIds = new Set(questoes.questoes.map(q => q.id));
const collisions = novasQuestoes.filter(q => existingIds.has(q.id));
if (collisions.length > 0) {
  console.error('CONFLITO de IDs:', collisions.map(q => q.id));
  process.exit(1);
}

questoes.questoes = [...questoes.questoes, ...novasQuestoes];
fs.writeFileSync(QUESTOES_PATH, JSON.stringify(questoes, null, 2), 'utf8');
console.log(`✓ questoes.json: ${novasQuestoes.length} questões essenciais sus_a1 injetadas (IDs ${maxId+1}–${maxId+8})`);

console.log('\n✅ Todas as mudanças da sessão foram restauradas com sucesso!');
