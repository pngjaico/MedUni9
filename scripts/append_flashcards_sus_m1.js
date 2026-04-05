/**
 * Acrescenta flashcards SUS (módulo 1) — 9 aulas × 12 cards.
 * Lê data/flashcards.json e adiciona com IDs sequenciais.
 * node scripts/append_flashcards_sus_m1.js
 */
const fs = require('fs');
const path = require('path');
const OUT = path.join(__dirname, '..', 'data', 'flashcards.json');

function card(materia, tema, frente, verso, explicacao, categoria, origem, tags) {
  return { materia, tema, frente, verso, explicacao: explicacao || '', dificuldade: 2, categoria, origem, tags: tags || [] };
}

const LOTS = [
  // sus_a1
  [
    card('sus', 'sus_a1', 'O que é processo saúde-doença na visão ampliada?', 'Trajetória ao longo da vida entre saúde, risco, agravo e desfechos — não só “ter CID”.', '', 'definicao', 'material', ['psd']),
    card('sus', 'sus_a1', 'Determinantes sociais da saúde (DSS) incluem o quê?', 'Condições de vida, trabalho, moradia, renda, educação, raça/gênero e redes de proteção.', '', 'definicao', 'material', ['dss']),
    card('sus', 'sus_a1', 'Equidade no SUS implica tratar todos igualmente?', 'Não — ponderar desigualdades para tornar o acesso efetivo (diferente de igualdade formal).', '', 'prova', 'material', ['equidade']),
    card('sus', 'sus_a1', 'Prevenção primária: exemplo?', 'Vacinação, saneamento, reduzir exposição ao risco antes da doença.', '', 'prova', 'material', ['prevencao-primaria']),
    card('sus', 'sus_a1', 'Prevenção secundária: exemplo?', 'Rastreamento e diagnóstico precoce em população definida.', '', 'diferenciacao', 'material', ['prevencao-secundaria']),
    card('sus', 'sus_a1', 'Prevenção terciária: foco?', 'Limitar incapacidade e sequelas (reabilitação, manejo de crônico).', '', 'definicao', 'material', ['prevencao-terciaria']),
    card('sus', 'sus_a1', 'Vulnerabilidade programática refere-se a quê?', 'Barreiras de acesso: geográficas, econômicas, culturais, administrativas.', '', 'definicao', 'material', ['vulnerabilidade']),
    card('sus', 'sus_a1', 'DSS são “falta de vontade do paciente”?', 'Não — são estruturais (políticas, mercado, discriminação).', '', 'prova', 'material', ['dss']),
    card('sus', 'sus_a1', 'Gradiente de saúde expressa o quê?', 'Pior saúde em maior desvantagem social — desigualdade em níveis de saúde.', '', 'definicao', 'material', ['gradiente']),
    card('sus', 'sus_a1', 'Visão ampliada de saúde na CF/APS inclui?', 'Bem-estar físico, mental, social e autonomia — não só ausência de doença.', '', 'definicao', 'material', ['conceito-saude']),
    card('sus', 'sus_a1', 'Modelo de Leavell & Clark é usado para quê?', 'Classificar níveis de prevenção (primária a quaternária).', 'Referência clássica de epidemiologia aplicada.', 'prova', 'extra', ['leavell']),
    card('sus', 'sus_a1', 'Prevenção quaternária busca evitar o quê?', 'Intervenções desnecessárias ou excesso de medicalização.', '', 'definicao', 'extra', ['prevencao-quaternaria']),
  ],
  // sus_a2
  [
    card('sus', 'sus_a2', 'Período colonial à Primeira República: marco para saúde pública no Brasil?', 'Higiene urbana e saneamento ligados a interesses elitistas e portuários; pouca universalidade.', '', 'prova', 'material', ['historia-sus']),
    card('sus', 'sus_a2', 'Era Vargas: contribuição à saúde trabalhista?', 'Seguridade social restrita a trabalhadores formais (lógica contributiva).', '', 'definicao', 'material', ['vargas', 'trabalho']),
    card('sus', 'sus_a2', 'Regime militar (1964–1985): tendência do sistema de saúde?', 'Crescimento de serviços privados e seguros; foco hospitalocêntrico.', '', 'prova', 'material', ['regime-militar']),
    card('sus', 'sus_a2', 'Antes da CF/88, quem tinha acesso amplo a assistência médica?', 'Trabalhadores vinculados à previdência; população excluída dependia de campanhas e serviços precários.', '', 'clinica', 'material', ['exclusao']),
    card('sus', 'sus_a2', 'Movimento pela Reforma Sanitária criticou o quê?', 'Modelo hospitalocêntrico, privatização e desigualdade no acesso à saúde.', '', 'definicao', 'material', ['reforma-sanitaria']),
    card('sus', 'sus_a2', '8ª Conferência Nacional de Saúde (1986): importância?', 'Marco de mobilização social e bases para diretrizes do SUS na Constituinte.', '', 'prova', 'material', ['cnss']),
    card('sus', 'sus_a2', 'Constituinte de 1988: saúde como direito aparece onde?', 'Art. 196 — direito de todos e dever do Estado.', '', 'prova', 'material', ['cf88']),
    card('sus', 'sus_a2', 'O que “Nova República” (1985–1988) representa para o setor saúde?', 'Abertura política e espaço para a reforma sanitária e participação social.', '', 'mecanismo', 'material', ['nova-republica']),
    card('sus', 'sus_a2', 'Criação do SUS só com a CF/88?', 'Base constitucional; operacionalização com Leis 8.080/90 e 8.142/90.', '', 'diferenciacao', 'material', ['legislacao']),
    card('sus', 'sus_a2', 'Privatização na ditadura: efeito na equidade?', 'Aprofundou desigualdades de acesso entre planos/emprego formal e população sem vínculo.', '', 'clinica', 'material', ['equidade']),
    card('sus', 'sus_a2', '“Cepalização” em saúde refere-se a quê?', 'Concentração de serviços e tecnologia em grandes centros (crítica histórica).', 'Literatura de saúde coletiva.', 'definicao', 'extra', ['cepalizacao']),
    card('sus', 'sus_a2', 'FIOCRUZ e Instituto Oswaldo Cruz: papel histórico?', 'Pesquisa e produção de soros/vacinas — tradição de saúde pública no Brasil.', '', 'extra_livro', 'extra', ['fiocruz']),
  ],
  // sus_a3
  [
    card('sus', 'sus_a3', 'Movimento pela Reforma Sanitária defendeu qual modelo?', 'Sistema universal de saúde, descentralizado e com controle social.', '', 'definicao', 'material', ['reforma-sanitaria']),
    card('sus', 'sus_a3', '8ª CNS (1986) ocorreu em qual cidade?', 'Caxias do Sul (RS).', '', 'prova', 'material', ['8cns']),
    card('sus', 'sus_a3', 'Relação entre democracia redemocratizada e SUS?', 'Ampliação de direitos sociais na Constituinte inclui saúde como direito civilizatório.', '', 'mecanismo', 'material', ['democracia']),
    card('sus', 'sus_a3', 'Diretrizes do SUS na CF/88: princípios constitucionais citados?', 'Universalidade, integralidade, equidade e participação popular (conjunto com art. 198).', '', 'prova', 'material', ['diretrizes']),
    card('sus', 'sus_a3', 'O que “socialização da medicina” na crítica sanitária significava?', 'Romper mercantilização exclusiva e garantir direito social à saúde.', '', 'definicao', 'material', ['medicina']),
    card('sus', 'sus_a3', 'Participação social no desenho do SUS veio só depois da CF?', 'Processo participativo nas conferências e conselhos antecede e fortalece a base legal.', '', 'prova', 'material', ['participacao']),
    card('sus', 'sus_a3', 'Descentralização como princípio: objetivo?', 'Aproximar decisão e gestão dos serviços da realidade local-regional.', '', 'mecanismo', 'material', ['descentralizacao']),
    card('sus', 'sus_a3', 'Antes do SUS, “INAMPS” representava o quê?', 'Instituto previdenciário que concentrava financiamento vinculado ao trabalho formal.', '', 'definicao', 'material', ['inamps']),
    card('sus', 'sus_a3', 'Unificação de sistemas previdenciários no SUS: ideia central?', 'Superar fragmentação entre segmentos para financiamento público universal.', '', 'mecanismo', 'material', ['financiamento']),
    card('sus', 'sus_a3', 'Controle social no SUS expressa-se como?', 'Conferências e conselhos de saúde com composição paritária prevista em lei.', '', 'prova', 'material', ['controle-social']),
    card('sus', 'sus_a3', '“Saúde como direito” na CF: artigo principal?', 'Art. 196.', '', 'prova', 'extra', ['art196']),
    card('sus', 'sus_a3', 'Atenção primária como estratégia global: documento de Alma-Ata (1978) defendeu?', '“Saúde para todos até 2000” com APS como porta de entrada.', 'OMS — contexto histórico global.', 'extra_livro', 'extra', ['alma-ata']),
  ],
  // sus_a4
  [
    card('sus', 'sus_a4', 'Art. 196 CF/88: saúde é direito de quem?', 'De todos; dever do Estado (mediante políticas que garantam acesso universal e igualitário).', '', 'prova', 'material', ['art196']),
    card('sus', 'sus_a4', 'Lei 8.080/1990 institui o quê?', 'O SUS e disposições gerais sobre ações, serviços, financiamento e vigilância.', '', 'definicao', 'material', ['8080']),
    card('sus', 'sus_a4', 'Lei 8.142/1990 trata principalmente de quê?', 'Participação da comunidade (conferências e conselhos) e transferências de recursos.', '', 'diferenciacao', 'material', ['8142']),
    card('sus', 'sus_a4', 'Princípio da equidade: definição em linha?', 'Reduzir desigualdades — tratar desiguais conforme suas necessidades.', '', 'prova', 'material', ['equidade']),
    card('sus', 'sus_a4', 'Integralidade no SUS inclui quais dimensões de atenção?', 'Promoção, prevenção, tratamento e reabilitação — cuidado não fragmentado.', '', 'definicao', 'material', ['integralidade']),
    card('sus', 'sus_a4', 'Universalidade no texto legal: significa?', 'Acesso integral às ações e serviços de saúde para todas as pessoas.', '', 'definicao', 'material', ['universalidade']),
    card('sus', 'sus_a4', 'Descentralização político-administrativa: comando único significa?', 'Direção única em cada esfera de governo (sem duplicidade de comando).', '', 'prova', 'material', ['comando-unico']),
    card('sus', 'sus_a4', 'Regionalização: objetivo?', 'Organizar ações em regiões de saúde com integração e pactuação.', '', 'definicao', 'material', ['regionalizacao']),
    card('sus', 'sus_a4', 'Hierarquia no SUS: serve para quê?', 'Definir níveis de complexidade sem perder coordenação do sistema.', '', 'definicao', 'material', ['hierarquia']),
    card('sus', 'sus_a4', 'Conferência de saúde vs conselho de saúde: diferença típica?', 'Conferência: deliberativa e periódica; conselho: permanente e fiscalizador/pactuador.', '', 'diferenciacao', 'material', ['conferencia', 'conselho']),
    card('sus', 'sus_a4', 'Art. 199 CF: vedação clássica?', 'Destinação de recursos públicos a hospitais privados com fins lucrativos (salvo exceções legais).', '', 'prova', 'extra', ['art199']),
    card('sus', 'sus_a4', 'Participação da comunidade é só princípio doutrinário?', 'Também organizativa — integra princípios complementares na Lei 8080.', '', 'prova', 'extra', ['participacao']),
  ],
  // sus_a5
  [
    card('sus', 'sus_a5', 'Pacto pela Vida (2006): eixos principais?', 'Reduzir mortalidade materno-infantil, câncer de colo/mama, doenças emergentes e cuidar idoso.', '', 'definicao', 'material', ['pacto-vida']),
    card('sus', 'sus_a5', 'Controle do câncer de colo do útero na APS: estratégia central?', 'Rastreamento com exame preventivo e seguimento de casos positivos.', '', 'clinica', 'material', ['colo-utero']),
    card('sus', 'sus_a5', 'Rastreamento do câncer de mama: base em faixa etária?', 'Mamografia periódica em população-alvo conforme diretrizes do Ministério (atualizar por portaria).', '', 'prova', 'material', ['mama']),
    card('sus', 'sus_a5', 'Redução da mortalidade infantil envolve quais linhas?', 'Pré-natal, parto seguro, puericultura, imunização e aleitamento.', '', 'mecanismo', 'material', ['infantil']),
    card('sus', 'sus_a5', 'Doenças emergentes e endemias: papel da vigilância?', 'Detecção, resposta e notificação — integração com APS e níveis estaduais/federal.', '', 'clinica', 'material', ['vigilancia']),
    card('sus', 'sus_a5', 'Saúde do idoso no pacto: foco?', 'Promoção de autonomia, prevenção de quedas, vacinação e cuidado de crônicos.', '', 'clinica', 'material', ['idoso']),
    card('sus', 'sus_a5', 'Pacto pela Vida é instrumento de quê?', 'Priorização de metas sanitárias com pactuação entre gestores.', '', 'definicao', 'material', ['pactuacao']),
    card('sus', 'sus_a5', 'Política de imunização: relação com mortalidade infantil?', 'Prevenção primária por vacinas — queda de doenças evitáveis.', '', 'mecanismo', 'material', ['imunizacao']),
    card('sus', 'sus_a5', 'Rastreamento universal sem critérios pode gerar?', 'Sobrediagnóstico e danos — princípio de prevenção quaternária em debate.', '', 'prova', 'material', ['rastreamento']),
    card('sus', 'sus_a5', 'Linha de cuidado oncológico no SUS: começa onde?', 'Na APS com identificação de risco e encaminhamento ordenado.', '', 'clinica', 'material', ['oncologia']),
    card('sus', 'sus_a5', 'HPV e câncer de colo: nível de prevenção da vacina?', 'Primária (evita infecção pelo vírus antes do câncer).', 'PNI — programa nacional.', 'prova', 'extra', ['hpv']),
    card('sus', 'sus_a5', 'Aleitamento materno exclusivo até 6 meses: recomendação OMS?', 'Sim — base para políticas de nutrição infantil.', '', 'extra_livro', 'extra', ['oms', 'aleitamento']),
  ],
  // sus_a6
  [
    card('sus', 'sus_a6', 'Pacto pela gestão: foco principal?', 'Fortalecer pactuação, regionalização e responsabilização dos gestores.', '', 'definicao', 'material', ['pacto-gestao']),
    card('sus', 'sus_a6', 'Redes de Atenção à Saúde (RAS): definição?', 'Organização de serviços em rede com continuidade do cuidado por níveis de complexidade.', '', 'definicao', 'material', ['ras']),
    card('sus', 'sus_a6', 'Decreto 7.508/2011: trata de quê?', 'Regiões de saúde, redes de atenção e contratualização de serviços no SUS.', '', 'prova', 'material', ['7508']),
    card('sus', 'sus_a6', 'Contratualização de serviços: objetivo?', 'Vincular metas, financiamento e resultados entre gestor e prestador.', '', 'mecanismo', 'material', ['contratualizacao']),
    card('sus', 'sus_a6', 'Regionalização: unidade territorial de pactuação?', 'Região de saúde com integração de ações entre municípios/estado.', '', 'definicao', 'material', ['regiao-saude']),
    card('sus', 'sus_a6', 'Referência e contrarreferência: significado?', 'Encaminhar para o nível adequado e retornar com informação para continuidade na APS.', '', 'definicao', 'material', ['referencia']),
    card('sus', 'sus_a6', 'Pacto estadual e interfederativo: serve para?', 'Alinhar metas e repasses entre esferas de governo.', '', 'mecanismo', 'material', ['pacto']),
    card('sus', 'sus_a6', 'Gestão descentralizada sem coordenação gera?', 'Fragmentação do cuidado e filas desordenadas — contrário ao princípio de hierarquia.', '', 'clinica', 'material', ['gestao']),
    card('sus', 'sus_a6', 'Comissão Intergestores Bipartite (CIB): nível?', 'Estadual — pactua entre estado e municípios.', '', 'prova', 'material', ['cib']),
    card('sus', 'sus_a6', 'CIB tripartite: quem participa?', 'União, estados e municípios em decisões nacionais.', '', 'prova', 'material', ['cib-tripartite']),
    card('sus', 'sus_a6', 'Bloco de financiamento federal (custeio e investimento): conceito?', 'Aportes do Ministério vinculados a metas e indicadores do pacto.', '', 'extra_livro', 'extra', ['financiamento']),
    card('sus', 'sus_a6', 'Linha de cuidado na RAS: exemplo cardiovascular?', 'APS → ambulatorial especializado → urgência/hospital terciário com retorno à APS.', '', 'clinica', 'extra', ['linha-cuidado']),
  ],
  // sus_a7
  [
    card('sus', 'sus_a7', 'Pacto em Defesa do SUS: eixo político?', 'Fortalecer financiamento, participação social e resistência à privatização.', '', 'definicao', 'material', ['pacto-defesa']),
    card('sus', 'sus_a7', 'Financiamento do SUS: fontes principais?', 'Orçamentos públicos (União, estados, municípios) e fundos de saúde.', '', 'definicao', 'material', ['financiamento']),
    card('sus', 'sus_a7', 'Emenda Constitucional 29/2000: sobre o quê?', 'Pisos mínimos de aplicação em saúde pelos entes federados.', '', 'prova', 'material', ['ec29']),
    card('sus', 'sus_a7', 'Participação social fortalece o SUS como?', 'Controle social sobre prioridades e fiscalização de recursos.', '', 'mecanismo', 'material', ['participacao']),
    card('sus', 'sus_a7', 'Privatização da atenção: risco para o SUS?', 'Seleção adversa, inequidade e pressão por recursos públicos para setor lucrativo.', '', 'clinica', 'material', ['privatizacao']),
    card('sus', 'sus_a7', 'Conferências de saúde: periodicidade mínima típica?', 'A cada 4 anos (conferência nacional) — verificar calendário atual.', '', 'prova', 'material', ['conferencia']),
    card('sus', 'sus_a7', 'Fundos de saúde (ex.: fundo municipal): função?', 'Gerir recursos e executar financiamento da assistência no território.', '', 'definicao', 'material', ['fundos']),
    card('sus', 'sus_a7', 'SUS como política de Estado: implica?', 'Transcende governos — deve ser preservado independentemente de alternância política.', '', 'prova', 'material', ['politica-estado']),
    card('sus', 'sus_a7', 'Cobertura universal financiada só por contribuição individual?', 'Não — modelo tributário solidário no financiamento público.', '', 'prova', 'material', ['tributario']),
    card('sus', 'sus_a7', 'Auditoria e participação em conselhos: papel?', 'Transparência e correção de desvios de prioridades e gastos.', '', 'clinica', 'material', ['auditoria']),
    card('sus', 'sus_a7', 'Lei de Diretrizes Orçamentárias pode afetar saúde?', 'Define parâmetros anuais de receita/despesa — impacta execução do orçamento em saúde.', '', 'extra_livro', 'extra', ['ldo']),
    card('sus', 'sus_a7', 'Cotas de médicos e provimento de RH: desafio do SUS?', 'Distribuição desigual entre regiões — política de educação e incentivos.', '', 'clinica', 'extra', ['rh']),
  ],
  // sus_a8
  [
    card('sus', 'sus_a8', 'PNAB regula o quê?', 'Diretrizes da Atenção Primária à Saúde no Brasil.', '', 'definicao', 'material', ['pnab']),
    card('sus', 'sus_a8', 'ESF: característica territorial?', 'População adscrita e território definido para planejamento.', '', 'definicao', 'material', ['esf']),
    card('sus', 'sus_a8', 'Atributo “primeiro contato” na APS significa?', 'Porta de entrada preferencial com resolutividade e vínculo.', '', 'prova', 'material', ['primeiro-contato']),
    card('sus', 'sus_a8', 'Longitudinalidade na APS?', 'Cuidado contínuo ao longo do tempo com a mesma equipe/território.', '', 'definicao', 'material', ['longitudinalidade']),
    card('sus', 'sus_a8', 'ACS: função principal?', 'Vínculo comunitário, cadastro, visita domiciliar e encaminhamento — não substitui médico/enfermeiro.', '', 'prova', 'material', ['acs']),
    card('sus', 'sus_a8', 'NASF: objetivo?', 'Apoio matricial para fortalecer resolutividade da equipe de APS.', '', 'definicao', 'material', ['nasf']),
    card('sus', 'sus_a8', 'Apoio matricial é só “mais especialista na UBS”?', 'Não — método de trabalho em rede com projetos terapêuticos compartilhados.', '', 'diferenciacao', 'material', ['apoio-matricial']),
    card('sus', 'sus_a8', 'Equipe mínima ESF (visão clássica) inclui?', 'Médico, enfermeiro, técnico/auxiliar de enfermagem e ACS (conforme portarias vigentes).', '', 'prova', 'material', ['equipe']),
    card('sus', 'sus_a8', 'Integralidade na APS inclui?', 'Promoção, prevenção, cura e reabilitação no mesmo ponto de atenção.', '', 'definicao', 'material', ['integralidade']),
    card('sus', 'sus_a8', 'Microárea: definição operacional?', 'Recorte populacional menor dentro do território da equipe para priorização.', '', 'definicao', 'material', ['microarea']),
    card('sus', 'sus_a8', 'e-SUS APS: finalidade?', 'Registro eletrônico compartilhado para continuidade do cuidado e vigilância.', '', 'extra_livro', 'extra', ['esus']),
    card('sus', 'sus_a8', 'Linhas de cuidado (hipertensão, diabetes): iniciam na APS?', 'Sim — protocolos e encaminhamento quando há risco ou descompensação.', '', 'clinica', 'extra', ['linhas-cuidado']),
  ],
  // sus_a9
  [
    card('sus', 'sus_a9', 'Genograma: utilidade na APS?', 'Visualizar relações familiares e hereditariedade para riscos e suporte.', '', 'definicao', 'material', ['genograma']),
    card('sus', 'sus_a9', 'Ecomapa: representa o quê?', 'Rede de apoio e estressores no território (recursos e tensões).', '', 'definicao', 'material', ['ecomapa']),
    card('sus', 'sus_a9', 'Educação popular em saúde: princípio?', 'Diálogo horizontal, problematização e participação — não só transferência de comando médico.', '', 'prova', 'material', ['eps']),
    card('sus', 'sus_a9', 'Abordagem familiar: foco?', 'Família como unidade de cuidado e contexto de riscos/proteções.', '', 'definicao', 'material', ['abordagem-familiar']),
    card('sus', 'sus_a9', 'Territorialização: o que orienta priorização?', 'Dados locais de morbimortalidade e vulnerabilidade.', '', 'mecanismo', 'material', ['territorializacao']),
    card('sus', 'sus_a9', 'Visitas domiciliares: objetivo além da “ficha”?', 'Vínculo, detecção precoce e adesão a tratamentos.', '', 'clinica', 'material', ['visita']),
    card('sus', 'sus_a9', 'Instrumentos gráficos (genograma/ecomapa) substituem anamnese?', 'Não — complementam e sistematizam informação.', '', 'diferenciacao', 'material', ['instrumentos']),
    card('sus', 'sus_a9', 'Trabalho em equipe na APS: evita?', 'Fragmentação do cuidado e encaminhamentos sem contexto.', '', 'mecanismo', 'material', ['equipe']),
    card('sus', 'sus_a9', 'Participação comunitária na planificação local: exemplo?', 'Grupos temáticos, conselhos locais e ações intersetoriais.', '', 'clinica', 'material', ['participacao']),
    card('sus', 'sus_a9', 'Cuidado centrado na pessoa na APS implica?', 'Acolhimento, escuta e projeto terapêutico singular.', '', 'definicao', 'material', ['acolhimento']),
    card('sus', 'sus_a9', 'Paulo Freire: relação com EPS?', 'Método dialógico inspira educação popular em saúde no Brasil.', '', 'extra_livro', 'extra', ['freire']),
    card('sus', 'sus_a9', 'Determinação social comunitária (conceito de base): o que reforça?', 'Ações coletivas para modificar causas sociais do adoecimento.', '', 'extra_livro', 'extra', ['dsc']),
  ],
];

const raw = fs.readFileSync(OUT, 'utf8');
const data = JSON.parse(raw);
let maxId = 0;
for (const f of data.flashcards) if (f.id > maxId) maxId = f.id;

let id = maxId + 1;
for (const lot of LOTS) {
  if (lot.length !== 12) {
    console.error('Erro tamanho', lot[0]?.tema, lot.length);
    process.exit(1);
  }
  for (const c of lot) data.flashcards.push({ ...c, id: id++ });
}

fs.writeFileSync(OUT, JSON.stringify(data, null, 2), 'utf8');
console.log('OK: total', data.flashcards.length, 'último id', id - 1);
