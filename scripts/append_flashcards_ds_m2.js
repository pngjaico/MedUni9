/** DS ds_a1–a3 × 12 — node scripts/append_flashcards_ds_m2.js */
const fs = require('fs');
const path = require('path');
const OUT = path.join(__dirname, '..', 'data', 'flashcards.json');
function c(t, f, v, e, cat, o, tags) {
  return { materia: 'ds', tema: t, frente: f, verso: v, explicacao: e || '', dificuldade: 2, categoria: cat, origem: o, tags: tags || [] };
}
const LOTS = [
  [ // ds_a1
    c('ds_a1', 'Mudanças climáticas: impacto em saúde?', 'Calor extremo, vetores, segurança alimentar, água.', '', 'definicao', 'material', ['clima']),
    c('ds_a1', 'Poluição do ar: doenças associadas?', 'DRCV, respiratórias, câncer de pulmão.', '', 'clinica', 'material', ['poluicao']),
    c('ds_a1', 'PM2,5 refere-se a?', 'Material particulado fino — penetra profundamente nos pulmões.', '', 'definicao', 'material', ['pm25']),
    c('ds_a1', 'Ilha de calor urbana?', 'Temperaturas mais altas no centro das cidades.', '', 'definicao', 'material', ['calor']),
    c('ds_a1', 'Água contaminada: riscos?', 'Diarreia, cólera, metais pesados (crônico).', '', 'clinica', 'material', ['agua']),
    c('ds_a1', 'Desmatamento e saúde?', 'Perda de biodiversidade, contato com zoonoses, clima.', '', 'mecanismo', 'material', ['desmatamento']),
    c('ds_a1', 'Equidade ambiental?', 'Populações vulneráveis sofrem mais exposição a poluentes.', '', 'definicao', 'material', ['equidade']),
    c('ds_a1', 'One Health: conceito?', 'Saúde humana integrada a animal e ecossistemas.', '', 'definicao', 'material', ['one-health']),
    c('ds_a1', 'Eventos climáticos extremos: exemplo?', 'Inundações, secas, ondas de calor.', '', 'definicao', 'material', ['extremos']),
    c('ds_a1', 'Doenças transmitidas por vetores e clima?', 'Expansão geográfica de Aedes, mudança de ciclo.', '', 'clinica', 'material', ['vetores']),
    c('ds_a1', 'COP30/COP: contexto?', 'Negociações climáticas globais (marco geral).', '', 'extra_livro', 'extra', ['cop']),
    c('ds_a1', 'Exposição ocupacional a calor?', 'Insolação, câimbras, heat stroke em trabalhadores ao ar livre.', '', 'clinica', 'extra', ['trabalho']),
  ],
  [ // ds_a2
    c('ds_a2', 'ODS 6: tema?', 'Água potável e saneamento.', '', 'definicao', 'material', ['ods6']),
    c('ds_a2', 'ODS 11: tema?', 'Cidades e comunidades sustentáveis.', '', 'definicao', 'material', ['ods11']),
    c('ds_a2', 'IDSC-BR: o que é?', 'Indicadores de Desenvolvimento Sustentável Brasil.', '', 'definicao', 'material', ['idsc']),
    c('ds_a2', 'Sustentabilidade: pilares?', 'Econômico, social, ambiental.', '', 'definicao', 'material', ['pilares']),
    c('ds_a2', 'Mobilidade ativa: benefício?', 'Menos emissões + saúde (caminhada/ciclismo).', '', 'mecanismo', 'material', ['mobilidade']),
    c('ds_a2', 'Áreas verdes urbanas: efeito?', 'Redução de estresse térmico e saúde mental.', '', 'clinica', 'material', ['verde']),
    c('ds_a2', 'Energia renovável vs fóssil?', 'Menor emissão de CO₂ e poluentes locais.', '', 'diferenciacao', 'material', ['energia']),
    c('ds_a2', 'Economia circular: ideia?', 'Reduzir desperdício e reaproveitar recursos.', '', 'definicao', 'material', ['circular']),
    c('ds_a2', 'Desigualdade urbana: saneamento?', 'Favelas com maior risco de doenças entericas.', '', 'clinica', 'material', ['saneamento']),
    c('ds_a2', 'Agenda 2030: marco?', 'Metas globais de desenvolvimento sustentável.', '', 'definicao', 'material', ['2030']),
    c('ds_a2', 'Indicador de mortalidade por PM2,5?', 'Usado em estudos de carga global de doença.', '', 'extra_livro', 'extra', ['carga']),
    c('ds_a2', 'Justiça climática?', 'Quem menos poluiu sofre mais impactos (países em desenvolvimento).', '', 'extra', 'extra', ['justica']),
  ],
  [ // ds_a3
    c('ds_a3', 'PNSSA: tema?', 'Política Nacional de Saneamento Básico (marco legal).', '', 'definicao', 'material', ['saneamento']),
    c('ds_a3', 'Componentes do saneamento?', 'Água, esgoto, resíduos sólidos, drenagem.', '', 'definicao', 'material', ['componentes']),
    c('ds_a3', 'Esgotamento inadequado: risco?', 'Contaminação de águas e solo — enteroparasitas.', '', 'clinica', 'material', ['esgoto']),
    c('ds_a3', 'Lei 14.026/2020: marco?', 'Novo marco do saneamento (metas universalização).', '', 'prova', 'material', ['marco']),
    c('ds_a3', 'Biodiversidade e saúde?', 'Medicamentos, alimentos, regulação de vetores.', '', 'mecanismo', 'material', ['biodiversidade']),
    c('ds_a3', 'Queimadas: impacto respiratório?', 'Aumento de consultas e internações por DPOC/asma.', '', 'clinica', 'material', ['queimada']),
    c('ds_a3', 'Papel do médico na vigilância ambiental?', 'Notificar agrotóxico, surtos hídricos (SINAN).', '', 'clinica', 'material', ['vigilancia']),
    c('ds_a3', 'Conama: esfera?', 'Normas ambientais federais (contexto histórico).', '', 'definicao', 'material', ['conama']),
    c('ds_a3', 'Zoonose emergente e desmatamento?', 'Contato humano-animal aumenta spillover.', '', 'mecanismo', 'material', ['zoonose']),
    c('ds_a3', 'Água para todos: ODS?', 'Meta 6.1 acesso seguro e acessível.', '', 'definicao', 'material', ['agua']),
    c('ds_a3', 'Desastres naturais: saúde mental?', 'TEPT, ansiedade em populações afetadas.', '', 'extra_livro', 'extra', ['desastre']),
    c('ds_a3', 'Licenciamento ambiental: objetivo?', 'Avaliar impactos antes de grandes obras.', '', 'extra', 'extra', ['licenca']),
  ],
];

const data = JSON.parse(fs.readFileSync(OUT, 'utf8'));
let id = 0;
for (const f of data.flashcards) if (f.id > id) id = f.id;
id++;
for (const lot of LOTS) for (const x of lot) data.flashcards.push({ ...x, id: id++ });
fs.writeFileSync(OUT, JSON.stringify(data, null, 2), 'utf8');
console.log('OK ds total', data.flashcards.length, 'last id', id - 1);
