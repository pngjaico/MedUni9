/** ST st_a1–a8 × 12 — saude_trabalhador — node scripts/append_flashcards_st_m3.js */
const fs = require('fs');
const path = require('path');
const OUT = path.join(__dirname, '..', 'data', 'flashcards.json');
function c(t, f, v, e, cat, o, tags) {
  return { materia: 'saude_trabalhador', tema: t, frente: f, verso: v, explicacao: e || '', dificuldade: 2, categoria: cat, origem: o, tags: tags || [] };
}
const LOTS = [
  [ // st_a1
    c('st_a1', 'Vigilância epidemiológica: objetivo?', 'Coletar dados para orientar ações de saúde pública.', '', 'definicao', 'material', ['vigilancia']),
    c('st_a1', 'Vigilância sanitária: foco?', 'Riscos ambientais e produtos (ANVISA contexto).', '', 'definicao', 'material', ['sanitaria']),
    c('st_a1', 'Vigilância ambiental?', 'Exposições ambientais e saúde (qualidade ar/água).', '', 'definicao', 'material', ['ambiental']),
    c('st_a1', 'Prevenção quaternária?', 'Evitar intervenções desnecessárias.', '', 'definicao', 'material', ['quaternaria']),
    c('st_a1', 'Risco ocupacional?', 'Probabilidade + gravidade de dano relacionado ao trabalho.', '', 'definicao', 'material', ['risco']),
    c('st_a1', 'Hierarquia de controles: mais eficaz?', 'Eliminação → substituição → engenharia → EPI (último).', '', 'prova', 'material', ['hierarquia']),
    c('st_a1', 'EPI vs EPC?', 'Equipamento proteção individual vs coletivo.', '', 'diferenciacao', 'material', ['epi']),
    c('st_a1', 'Atenção básica e saúde do trabalhador?', 'Integração vigilância e cuidado.', '', 'mecanismo', 'material', ['ab']),
    c('st_a1', 'Notificação de agravo relacionado trabalho?', 'Obrigação conforme lista de doenças (SINAN).', '', 'clinica', 'material', ['notificacao']),
    c('st_a1', 'APS amplia resolutividade?', 'Primeiro contato e acolhimento.', '', 'definicao', 'material', ['aps']),
    c('st_a1', 'SUS princípios?', 'Universalidade, equidade, integralidade.', '', 'extra_livro', 'extra', ['sus']),
    c('st_a1', 'PPR (Programa de Proteção Respiratória)?', 'Conjunto medidas além do EPI (treinamento, fit test).', '', 'extra', 'extra', ['ppr']),
  ],
  [ // st_a2
    c('st_a2', 'Portaria de notificação compulsória atualizada?', 'Lista nacional de agraves (verificar vigência).', '', 'definicao', 'material', ['portaria']),
    c('st_a2', 'SINAN: uso?', 'Agravos de notificação — investigação e controle.', '', 'definicao', 'material', ['sinan']),
    c('st_a2', 'RSI (Regulamento Sanitário Internacional)?', 'Alertas internacionais e resposta a emergências (OMS).', '', 'definicao', 'material', ['rsi']),
    c('st_a2', 'Doenças de notificação imediata?', 'Eventos urgentes (sarampo, febre amarela selvagem, etc.).', '', 'clinica', 'material', ['imediata']),
    c('st_a2', 'Sigilo de dados: princípio?', 'LGPD — proteção de dados pessoais.', '', 'definicao', 'material', ['lgpd']),
    c('st_a2', 'Investigação de surto: primeiro passo?', 'Confirmar caso e definir caso suspeito/confirmado.', '', 'mecanismo', 'material', ['surto']),
    c('st_a2', 'Cadeia de notificação municipal?', 'APS → vigilância local → estadual → federal.', '', 'definicao', 'material', ['cadeia']),
    c('st_a2', 'Acidente de trabalho grave: notificar?', 'Sim — fluxos específicos (CAT, sinan).', '', 'clinica', 'material', ['acidente']),
    c('st_a2', 'Doença ocupacional: critério?', 'Relação causal com trabalho (exposição + tempo).', '', 'definicao', 'material', ['ocupacional']),
    c('st_a2', 'Vigilância sentinela?', 'Unidades monitoram doenças selecionadas.', '', 'definicao', 'material', ['sentinela']),
    c('st_a2', 'IHR 2005: foco?', 'Doenças transmissíveis emergentes e eventos químicos.', '', 'extra_livro', 'extra', ['ihr']),
    c('st_a2', 'Evento adverso pós-vacina?', 'Notificar e investigar causalidade (sistema específico).', '', 'extra', 'extra', ['esavi']),
  ],
  [ // st_a3
    c('st_a3', 'PNSTT: objetivo?', 'Integrar saúde do trabalhador no SUS.', '', 'definicao', 'material', ['pnstt']),
    c('st_a3', 'RENAST: o que é?', 'Rede Nacional de Atenção Integral à Saúde do Trabalhador.', '', 'definicao', 'material', ['renast']),
    c('st_a3', 'CEREST: função?', 'Referência técnica em saúde do trabalhador.', '', 'definicao', 'material', ['cerest']),
    c('st_a3', 'Estratégias de saúde da família e trabalho?', 'Acolhimento de riscos e exposições na APS.', '', 'mecanismo', 'material', ['esf']),
    c('st_a3', 'Matriz de planejamento em saúde do trabalhador?', 'Situação, riscos, intervenções.', '', 'definicao', 'material', ['matriz']),
    c('st_a3', 'Intersectorialidade?', 'Saúde, trabalho, assistência social integradas.', '', 'definicao', 'material', ['intersetorial']),
    c('st_a3', 'Trabalhador informal: vulnerabilidade?', 'Sem vínculo — menos proteção previdenciária.', '', 'clinica', 'material', ['informal']),
    c('st_a3', 'Teletrabalho: riscos ergonômicos?', 'Postura, sedentarismo — avaliação domiciliar.', '', 'clinica', 'material', ['teletrabalho']),
    c('st_a3', 'Saúde mental no trabalho?', 'Linha de cuidado psicossocial.', '', 'clinica', 'material', ['mental']),
    c('st_a3', 'Capacitação de profissionais APS?', 'Reconhecer doenças relacionadas ao trabalho.', '', 'definicao', 'material', ['capacitacao']),
    c('st_a3', 'PGR (Programa de Gerenciamento de Riscos)?', 'NR-1 exige avaliação de riscos ocupacionais.', '', 'extra_livro', 'extra', ['pgr']),
    c('st_a3', 'eSocial: contexto?', 'Obrigações trabalhistas previdenciárias digitalizadas.', '', 'extra', 'extra', ['esocial']),
  ],
  [ // st_a4
    c('st_a4', 'CLT: aplicação?', 'Relação empregado empregador celetista.', '', 'definicao', 'material', ['clt']),
    c('st_a4', 'CAT: finalidade?', 'Comunicação de acidente trabalho ao INSS (entre outros usos).', '', 'definicao', 'material', ['cat']),
    c('st_a4', 'BENEFÍCIO acidente típico?', 'Auxílio-doença acidentário se incapacidade.', '', 'clinica', 'material', ['beneficio']),
    c('st_a4', 'Doença profissional: requisito INSS?', 'Relação causal com trabalho em lista de atividades.', '', 'definicao', 'material', ['profissional']),
    c('st_a4', 'Trabalhador autônomo: cobertura?', 'Diferente de CLT — seguros específicos.', '', 'diferenciacao', 'material', ['autonomo']),
    c('st_a4', 'Estabilidade após acidente?', 'Regras específicas — acompanhamento jurídico.', '', 'definicao', 'material', ['estabilidade']),
    c('st_a4', 'Insalubridade/periculosidade?', 'Adicionais e exames ocupacionais (NRs).', '', 'definicao', 'material', ['insalubridade']),
    c('st_a4', 'Exame médico admissional?', 'Detecta inaptidão e estabelece linha de base.', '', 'clinica', 'material', ['aso']),
    c('st_a4', 'Exame demissional?', 'Compara com admissional — doenças ocupacionais.', '', 'clinica', 'material', ['demissional']),
    c('st_a4', 'Preenchimento CAT: prazo?', 'Segurado/empregador em prazos legais (verificar tabela atual).', '', 'prova', 'material', ['prazo']),
    c('st_a4', 'Reforma trabalhista 2017: impacto?', 'Alterações terceirização, home office (contexto).', '', 'extra_livro', 'extra', ['reforma']),
    c('st_a4', 'TST: papel?', 'Tribunal Superior do Trabalho — dissídios.', '', 'extra', 'extra', ['tst']),
  ],
  [ // st_a5
    c('st_a5', 'NR-1 atualizada exige?', 'Gerenciamento de riscos (GRO) integrado ao PGR.', '', 'definicao', 'material', ['nr1']),
    c('st_a5', 'SESMT (NR-4): quando obrigatório?', 'Por grau de risco e número de funcionários.', '', 'prova', 'material', ['sesmt']),
    c('st_a5', 'CIPA (NR-5)?', 'Representantes trabalhadores para prevenção acidentes.', '', 'definicao', 'material', ['cipa']),
    c('st_a5', 'EPI (NR-6): obrigações?', 'Fornecido gratuito, adequado ao risco, treinamento.', '', 'definicao', 'material', ['epi']),
    c('st_a5', 'PCMSO (NR-7)?', 'Programa controle médico saúde ocupacional.', '', 'definicao', 'material', ['pcmso']),
    c('st_a5', 'NR-15: insalubridade?', 'Agentes e limites de tolerância.', '', 'definicao', 'material', ['nr15']),
    c('st_a5', 'NR-16: periculosidade?', 'Inflamáveis, explosivos, energia elétrica, etc.', '', 'definicao', 'material', ['nr16']),
    c('st_a5', 'NR-17: ergonomia?', 'Mobiliário, levantamento carga, organização trabalho.', '', 'definicao', 'material', ['nr17']),
    c('st_a5', 'Treinamento em altura (NR-35)?', 'Obrigatório para trabalho em altura.', '', 'clinica', 'material', ['nr35']),
    c('st_a5', 'Espaço confinado (NR-33)?', 'Permissão de trabalho, monitoramento gases.', '', 'clinica', 'material', ['nr33']),
    c('st_a5', 'Fiscalização trabalho?', 'MTE (Ministério do Trabalho) — autuações.', '', 'extra_livro', 'extra', ['mte']),
    c('st_a5', 'PPP (Perfil Profissiográfico Previdenciário)?', 'Documento para reconhecimento de doenças ocupacionais.', '', 'extra', 'extra', ['ppp']),
  ],
  [ // st_a6
    c('st_a6', 'LER/DORT: conceito?', 'Sobrecarga tecidos musculoesqueléticos por esforço repetitivo.', '', 'definicao', 'material', ['dort']),
    c('st_a6', 'Silicose: agente?', 'Sílica livre — poeira em mineração/construção.', '', 'clinica', 'material', ['silicose']),
    c('st_a6', 'Asbestose: risco adicional?', 'Mesotelioma e câncer pulmonar.', '', 'clinica', 'material', ['asbesto']),
    c('st_a6', 'PAE (Periculosidade) e ruído?', 'NR-15 anexos — audiometria ocupacional.', '', 'clinica', 'material', ['ruido']),
    c('st_a6', 'Intoxicação exógena aguda: conduta?', 'Suporte ABCDE, antídoto se específico.', '', 'clinica', 'material', ['intoxicacao']),
    c('st_a6', 'Dermatite ocupacional: tipo?', 'Irritativa vs alérgica (testes epicutâneos).', '', 'clinica', 'material', ['dermatite']),
    c('st_a6', 'Benzeno: toxicidade?', 'Mielotoxicidade, leucemia (indústria química).', '', 'clinica', 'material', ['benzeno']),
    c('st_a6', 'Chumbo: exposição?', 'Baterias, pinturas antigas — anemia hemolítica.', '', 'clinica', 'material', ['chumbo']),
    c('st_a6', 'Monitoramento biológico?', 'Chumbo sanguíneo, metais urinários.', '', 'definicao', 'material', ['biologico']),
    c('st_a6', 'Vacinação trabalhadores saúde?', 'Hepatite B, tétano, influenza, COVID (protocolos).', '', 'clinica', 'material', ['vacina']),
    c('st_a6', 'Síndrome de vibração mão-braço?', 'Uso de ferramentas vibratórias — fenômeno de Raynaud.', '', 'extra_livro', 'extra', ['vibracao']),
    c('st_a6', 'Manganismo?', 'Exposição crônica Mn — parkinsonismo.', '', 'extra', 'extra', ['manganês']),
  ],
  [ // st_a7
    c('st_a7', 'DCNT relacionadas ao trabalho?', 'HAS, DM, obesidade — sedentarismo e estresse.', '', 'clinica', 'material', ['dcnt']),
    c('st_a7', 'Assédio moral: definição?', 'Condutas abusivas repetitivas no trabalho.', '', 'definicao', 'material', ['assedio']),
    c('st_a7', 'Assédio sexual?', 'Qualquer conduta constrangedora de natureza sexual.', '', 'definicao', 'material', ['assedio-sexual']),
    c('st_a7', 'Burnout (CID-11)?', 'Síndrome resultante de estresse laboral crônico.', '', 'definicao', 'material', ['burnout']),
    c('st_a7', 'Transtorno de estresse pós-trauma trabalho?', 'Acidentes graves, violência.', '', 'clinica', 'material', ['tept']),
    c('st_a7', 'Risks psicossociais NR-1?', 'Avaliar organização do trabalho no PGR.', '', 'definicao', 'material', ['psicossocial']),
    c('st_a7', 'Afastamento previdenciário por saúde mental?', 'Laudo detalhado e CID.', '', 'clinica', 'material', ['afastamento']),
    c('st_a7', 'Uso de álcool/drogas no trabalho?', 'Programas de apoio (EAP) e políticas internas.', '', 'clinica', 'material', ['substancias']),
    c('st_a7', 'Suicídio e trabalho?', 'Setores de alto estresse — vigilância e apoio.', '', 'clinica', 'material', ['suicidio']),
    c('st_a7', 'Acolhimento com escuta qualificada?', 'Primeiro passo em sofrimento psíquico.', '', 'mecanismo', 'material', ['acolhimento']),
    c('st_a7', 'Telefone CVV?', '188 — apoio emocional (Brasil).', '', 'extra_livro', 'extra', ['cvv']),
    c('st_a7', 'Saúde mental na pandemia COVID-19?', 'Aumento ansiedade/depressão em profissionais saúde.', '', 'extra', 'extra', ['pandemia']),
  ],
  [ // st_a8
    c('st_a8', 'IST em ambiente laboral?', 'Exposição ocupacional a fluidos (ex.: agulhas) — PEP.', '', 'clinica', 'material', ['ist']),
    c('st_a8', 'CAT comunica ao?', 'INSS e base para dados epidemiológicos.', '', 'definicao', 'material', ['cat']),
    c('st_a8', 'CIAT: função?', 'Comissão interna prevenção acidentes (contexto legislativo).', '', 'definicao', 'material', ['ciat']),
    c('st_a8', 'SINAN ocupacional: registra?', 'Doenças e acidentes relacionados trabalho.', '', 'definicao', 'material', ['sinan']),
    c('st_a8', 'Investigação de surto ocupacional?', 'Linha de tempo exposições e casos.', '', 'mecanismo', 'material', ['surto']),
    c('st_a8', 'Rastreamento de câncer ocupacional?', 'Grupos expostos a carcinógenos (monitorar protocolos).', '', 'clinica', 'material', ['rastreio']),
    c('st_a8', 'Notificação compulsória intoxicação exógena?', 'Conforme lista de agraves (verificar portaria).', '', 'definicao', 'material', ['notificacao']),
    c('st_a8', 'Vigilância em saúde do trabalhador: indicadores?', 'Incidência de ATE, DORT, perdas auditivas.', '', 'definicao', 'material', ['indicadores']),
    c('st_a8', 'Integração DATASUS trabalho?', 'Dados auxiliam políticas (SIM, SINAN).', '', 'mecanismo', 'material', ['datasus']),
    c('st_a8', 'Privacidade em fichas ocupacionais?', 'LGPD e sigilo médico.', '', 'definicao', 'material', ['lgpd']),
    c('st_a8', 'Acidente com material biológico: fluxo?', 'Lavar, notificar, avaliar risco, PEP HIV/HBV.', '', 'extra_livro', 'extra', ['biologico']),
    c('st_a8', 'e-SUS registra exposições?', 'APS pode documentar para vigilância.', '', 'extra', 'extra', ['esus']),
  ],
];

const data = JSON.parse(fs.readFileSync(OUT, 'utf8'));
let id = 0;
for (const f of data.flashcards) if (f.id > id) id = f.id;
id++;
for (const lot of LOTS) for (const x of lot) data.flashcards.push({ ...x, id: id++ });
fs.writeFileSync(OUT, JSON.stringify(data, null, 2), 'utf8');
console.log('OK st total', data.flashcards.length, 'last id', id - 1);
