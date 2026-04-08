const fs = require('fs');

const path = 'data/flashcards.json';
const data = JSON.parse(fs.readFileSync(path, 'utf8'));
const cards = Array.isArray(data.flashcards) ? data.flashcards : [];

const byTema = {
  ds_a1: {
    material: [
      ['Determinante {{c1::socioambiental}} participa diretamente do risco de adoecimento.', 'socioambiental', 'definicao', ['determinantes', 'saude-coletiva']],
      ['Ondas de {{c1::calor}} aumentam agravos e sobrecarga do sistema de saúde.', 'calor', 'clinica', ['clima', 'eventos-extremos']],
      ['Poluição do {{c1::ar}} eleva doenças respiratórias e cardiovasculares.', 'ar', 'mecanismo', ['poluicao', 'morbidade']],
      ['Escassez {{c1::hídrica}} altera exposição e vulnerabilidade em saúde.', 'hídrica', 'mecanismo', ['agua', 'vulnerabilidade']],
      ['Enchentes ampliam risco de doença infecciosa por falha de {{c1::saneamento}}.', 'saneamento', 'clinica', ['enchentes', 'saneamento']],
      ['Vulnerabilidade social aumenta o risco {{c1::acumulado}} no território.', 'acumulado', 'prova', ['vulnerabilidade', 'territorio']],
      ['Equidade distribui recursos conforme {{c1::necessidade}} em saúde pública.', 'necessidade', 'definicao', ['equidade', 'sus']],
      ['Inequidade significa distribuição {{c1::desigual}} de dano e acesso.', 'desigual', 'definicao', ['iniquidade', 'acesso']],
      ['Evento climático vira problema de saúde quando gera impacto {{c1::sanitário}}.', 'sanitário', 'diferenciacao', ['clima', 'saude-publica']],
      ['Risco coletivo depende de contexto {{c1::territorial}} compartilhado.', 'territorial', 'prova', ['risco-coletivo', 'territorio']],
      ['Saúde coletiva integra ambiente, sociedade e {{c1::clínica}}.', 'clínica', 'definicao', ['saude-coletiva', 'integracao']],
      ['Mudança climática não é tema só ambiental; é tema de saúde {{c1::pública}}.', 'pública', 'prova', ['clima', 'pegadinha']],
      ['Determinante socioambiental não é fator secundário; é fator {{c1::central}}.', 'central', 'prova', ['determinantes', 'prova']],
      ['Território define exposição e {{c1::acesso}} ao cuidado.', 'acesso', 'mecanismo', ['territorio', 'sus']],
      ['Desigualdade socioeconômica amplifica {{c1::morbimortalidade}} em eventos extremos.', 'morbimortalidade', 'clinica', ['desigualdade', 'desfechos']],
      ['Processo saúde-doença inclui ambiente e condição {{c1::social}}.', 'social', 'definicao', ['processo-saude-doenca', 'dss']],
      ['Leitura de prova correta integra risco ambiental, DSS e resposta do {{c1::SUS}}.', 'SUS', 'prova', ['sus', 'prova']],
      ['Exposição ambiental sem proteção social tende a piorar {{c1::desfechos}}.', 'desfechos', 'mecanismo', ['protecao-social', 'desfecho']],
      ['Em áreas pobres, o mesmo evento gera maior dano por menor capacidade de {{c1::resposta}}.', 'resposta', 'clinica', ['equidade', 'vulnerabilidade']],
      ['Papel da APS inclui vigilância e ação {{c1::territorializada}}.', 'territorializada', 'clinica', ['aps', 'territorio']],
      ['Saúde urbana exige prevenção estruturada e não ação {{c1::pontual}}.', 'pontual', 'prova', ['prevencao', 'planejamento']],
      ['Poluição e clima extremo podem elevar internações por doença {{c1::respiratória}}.', 'respiratória', 'clinica', ['internacoes', 'respiratorio']],
      ['Acesso desigual ao cuidado converte risco ambiental em iniquidade {{c1::sanitária}}.', 'sanitária', 'mecanismo', ['iniquidade', 'acesso']],
      ['Equidade não é tratar todos igual; é priorizar quem tem maior {{c1::risco}}.', 'risco', 'diferenciacao', ['equidade', 'priorizacao']],
      ['Em DS, o foco é fisiopatologia social com impacto {{c1::populacional}}.', 'populacional', 'definicao', ['fisiopatologia-social', 'saude-publica']]
    ],
    extra: [
      ['PM2,5 corresponde a material particulado com diâmetro aerodinâmico ≤ {{c1::2,5 µm}}.', '2,5 µm', 'extra_livro', ['pm25', 'poluicao']],
      ['Ilha de calor urbana descreve aumento térmico no {{c1::centro}} da cidade.', 'centro', 'extra_livro', ['ilha-de-calor', 'urbanizacao']],
      ['Evento extremo com água contaminada aumenta risco de {{c1::diarreia}} aguda.', 'diarreia', 'extra_livro', ['agua', 'infeccao']],
      ['Análise de risco em saúde ambiental combina exposição, suscetibilidade e {{c1::contexto}}.', 'contexto', 'extra_livro', ['risco', 'saude-ambiental']],
      ['Adaptação climática em saúde prioriza grupos com maior {{c1::vulnerabilidade}}.', 'vulnerabilidade', 'extra_livro', ['adaptacao', 'clima']]
    ]
  },
  ds_a2: {
    material: [
      ['Os {{c1::ODS}} conectam políticas sociais, ambientais e desfechos em saúde.', 'ODS', 'definicao', ['ods', 'saude-publica']],
      ['ODS 3 depende de metas de outros ODS por lógica {{c1::intersetorial}}.', 'intersetorial', 'prova', ['ods3', 'intersetorialidade']],
      ['Cidade saudável requer saneamento, habitação e {{c1::mobilidade}} segura.', 'mobilidade', 'clinica', ['cidade', 'infraestrutura']],
      ['Sustentabilidade inclui dimensão ambiental, social e {{c1::econômica}}.', 'econômica', 'definicao', ['sustentabilidade', 'pilares']],
      ['Urbanização sem planejamento aumenta iniquidade e carga de {{c1::doença}}.', 'doença', 'mecanismo', ['urbanizacao', 'iniquidade']],
      ['Saneamento universal reduz agravo infeccioso e vulnerabilidade {{c1::sanitária}}.', 'sanitária', 'clinica', ['saneamento', 'prevencao']],
      ['Planejamento territorial é medida de prevenção {{c1::estrutural}} em saúde.', 'estrutural', 'prova', ['planejamento', 'prevencao']],
      ['Intervenção assistencial trata efeito; intervenção estrutural reduz {{c1::causa}} coletiva.', 'causa', 'diferenciacao', ['assistencial', 'estrutural']],
      ['Ilhas de calor agravam risco em populações urbanas {{c1::frágeis}}.', 'frágeis', 'clinica', ['ilha-de-calor', 'risco']],
      ['ODS não são lista decorativa; funcionam como linguagem de {{c1::planejamento}}.', 'planejamento', 'prova', ['ods', 'politicas-publicas']],
      ['Saúde urbana melhora com integração entre saúde, urbanismo e {{c1::educação}}.', 'educação', 'mecanismo', ['intersetorialidade', 'cidade']],
      ['Prevenção sustentável é estratégia de {{c1::longo prazo}}.', 'longo prazo', 'definicao', ['prevencao', 'sustentabilidade']],
      ['Sem equidade urbana, crescimento pode ampliar {{c1::adoecimento}} coletivo.', 'adoecimento', 'mecanismo', ['equidade', 'urbanizacao']],
      ['ODS 6 aborda {{c1::água e saneamento}} como base de saúde urbana.', 'água e saneamento', 'prova', ['ods6', 'saneamento']],
      ['ODS 11 trata de {{c1::cidades sustentáveis}} com impacto sanitário.', 'cidades sustentáveis', 'prova', ['ods11', 'cidades']],
      ['Gestão de resíduos integra prevenção de risco {{c1::ambiental}} nas cidades.', 'ambiental', 'clinica', ['residuos', 'saude-urbana']],
      ['O consultório recebe efeitos de decisões urbanas tomadas antes do {{c1::sintoma}}.', 'sintoma', 'prova', ['clinica', 'politicas-publicas']],
      ['Mobilidade ativa reduz emissões e melhora saúde {{c1::cardiometabólica}}.', 'cardiometabólica', 'clinica', ['mobilidade-ativa', 'prevencao']],
      ['Habitação precária aumenta exposição a riscos {{c1::sociossanitários}}.', 'sociossanitários', 'mecanismo', ['habitacao', 'dss']],
      ['Intersetorialidade significa coordenação real entre setores e não ação {{c1::isolada}}.', 'isolada', 'diferenciacao', ['intersetorialidade', 'gestao']],
      ['Sustentabilidade socioambiental envolve justiça social e desfecho em {{c1::saúde}}.', 'saúde', 'definicao', ['sustentabilidade', 'justica-social']],
      ['Cidade sustentável reduz exposição a risco e melhora {{c1::equidade}}.', 'equidade', 'clinica', ['cidade', 'equidade']],
      ['ODS integrados têm maior efeito sanitário que ODS 3 {{c1::isolado}}.', 'isolado', 'prova', ['ods3', 'pegadinha']],
      ['Infraestrutura urbana deficiente eleva carga de doença {{c1::evitável}}.', 'evitável', 'mecanismo', ['infraestrutura', 'doenca']],
      ['Prevenção estrutural tende a ser mais {{c1::custo-efetiva}} no longo prazo.', 'custo-efetiva', 'prova', ['economia-da-saude', 'prevencao']]
    ],
    extra: [
      ['IDSC-BR é índice que acompanha metas dos {{c1::ODS}} no Brasil.', 'ODS', 'extra_livro', ['idsc-br', 'ods']],
      ['ODS 13 aborda ação contra a mudança do {{c1::clima}}.', 'clima', 'extra_livro', ['ods13', 'clima']],
      ['Áreas verdes urbanas ajudam a reduzir estresse térmico e risco {{c1::cardiovascular}}.', 'cardiovascular', 'extra_livro', ['areas-verdes', 'saude-urbana']],
      ['Transporte público de qualidade reduz exposição a poluentes e {{c1::iniquidade}} de acesso.', 'iniquidade', 'extra_livro', ['mobilidade', 'equidade']],
      ['Planejamento urbano orientado à saúde prioriza territórios com maior {{c1::vulnerabilidade}}.', 'vulnerabilidade', 'extra_livro', ['planejamento', 'priorizacao']]
    ]
  },
  ds_a3: {
    material: [
      ['Lei sem {{c1::implementação}} não garante melhoria de desfecho em saúde.', 'implementação', 'prova', ['politica-publica', 'governanca']],
      ['Política efetiva exige financiamento, coordenação e {{c1::monitoramento}}.', 'monitoramento', 'mecanismo', ['politicas-publicas', 'indicadores']],
      ['Indicador de resultado mede impacto {{c1::sanitário}} real.', 'sanitário', 'definicao', ['indicadores', 'avaliacao']],
      ['Indicador de processo mede execução da {{c1::ação}}.', 'ação', 'diferenciacao', ['indicadores', 'processo']],
      ['Coordenação {{c1::federativa}} é central no contexto brasileiro.', 'federativa', 'prova', ['federalismo', 'sus']],
      ['SUS articula vigilância, APS e resposta a risco {{c1::ambiental}}.', 'ambiental', 'clinica', ['sus', 'vigilancia']],
      ['Sem integração com saneamento e habitação, efeito sanitário fica {{c1::limitado}}.', 'limitado', 'mecanismo', ['intersetorialidade', 'sus']],
      ['Justiça socioambiental busca reduzir exposição {{c1::desigual}} ao risco.', 'desigual', 'definicao', ['justica-socioambiental', 'equidade']],
      ['Programa lançado não equivale a problema {{c1::resolvido}}.', 'resolvido', 'prova', ['pegadinha', 'politicas-publicas']],
      ['Efetividade territorial depende de cobertura, acesso e {{c1::qualidade}}.', 'qualidade', 'mecanismo', ['territorio', 'implementacao']],
      ['Política pública em saúde precisa ser intersetorial e {{c1::territorializada}}.', 'territorializada', 'definicao', ['intersetorialidade', 'territorio']],
      ['A existência da norma não substitui avaliação por {{c1::indicadores}}.', 'indicadores', 'prova', ['avaliacao', 'governanca']],
      ['Governança integra níveis de gestão e capacidade de {{c1::resposta}}.', 'resposta', 'mecanismo', ['governanca', 'sus']],
      ['Equidade territorial prioriza áreas com maior {{c1::necessidade}}.', 'necessidade', 'clinica', ['equidade', 'priorizacao']],
      ['Financiamento estável sustenta continuidade de {{c1::ações}} públicas.', 'ações', 'mecanismo', ['financiamento', 'politicas-publicas']],
      ['Vigilância em saúde depende de dado confiável e ação {{c1::oportuna}}.', 'oportuna', 'clinica', ['vigilancia', 'indicadores']],
      ['Ação setorial isolada tem alcance menor que ação {{c1::intersetorial}}.', 'intersetorial', 'diferenciacao', ['setorial', 'intersetorialidade']],
      ['Cobertura formal sem impacto não caracteriza política {{c1::efetiva}}.', 'efetiva', 'prova', ['avaliacao', 'resultado']],
      ['Território é unidade-chave para medir mudança de {{c1::indicador}}.', 'indicador', 'prova', ['territorio', 'monitoramento']],
      ['SUS em rede melhora resposta quando há integração com proteção {{c1::social}}.', 'social', 'clinica', ['sus', 'rede']],
      ['Norma publicada é passo inicial; efetividade depende de {{c1::execução}}.', 'execução', 'diferenciacao', ['norma', 'efetividade']],
      ['Política socioambiental funciona quando reduz dano e amplia {{c1::acesso}}.', 'acesso', 'mecanismo', ['socioambiental', 'acesso']],
      ['No Brasil, desigualdade regional exige estratégia territorial {{c1::diferenciada}}.', 'diferenciada', 'clinica', ['desigualdade-regional', 'equidade']],
      ['Leitura de prova correta: cruzar governança, indicador e {{c1::impacto}}.', 'impacto', 'prova', ['prova', 'avaliacao']],
      ['Justiça socioambiental combina redução de risco e ampliação de {{c1::cuidado}}.', 'cuidado', 'definicao', ['justica-socioambiental', 'sus']]
    ],
    extra: [
      ['Marco legal do saneamento no Brasil é a Lei {{c1::14.026/2020}}.', '14.026/2020', 'extra_livro', ['marco-legal', 'saneamento']],
      ['Universalização do saneamento exige metas de cobertura e {{c1::qualidade}} do serviço.', 'qualidade', 'extra_livro', ['saneamento', 'metas']],
      ['Avaliação de política deve combinar indicador de processo e de {{c1::resultado}}.', 'resultado', 'extra_livro', ['avaliacao', 'indicadores']],
      ['Atenção primária territorializada melhora detecção precoce de risco {{c1::ambiental}}.', 'ambiental', 'extra_livro', ['aps', 'vigilancia']],
      ['Em governança pública, transparência favorece controle {{c1::social}} e ajuste de rota.', 'social', 'extra_livro', ['governanca', 'controle-social']]
    ]
  }
};

function toCard(materia, tema, tuple, origem) {
  const [frente, verso, categoria, tags] = tuple;
  return {
    materia,
    tema,
    frente,
    verso,
    explicacao: '',
    dificuldade: 2,
    categoria,
    origem,
    tags
  };
}

const regenerated = [];
Object.entries(byTema).forEach(([tema, parts]) => {
  parts.material.forEach((t) => regenerated.push(toCard('ds', tema, t, 'material')));
  parts.extra.forEach((t) => regenerated.push(toCard('ds', tema, t, 'extra')));
});

const validCloze = regenerated.every((c) => (c.frente.match(/\{\{c1::[^}]+\}\}/g) || []).length === 1);
if (!validCloze) throw new Error('Falha: card sem cloze valido');

const perTema = regenerated.reduce((acc, c) => {
  acc[c.tema] = acc[c.tema] || { total: 0, material: 0, extra: 0 };
  acc[c.tema].total += 1;
  acc[c.tema][c.origem] += 1;
  return acc;
}, {});

Object.values(perTema).forEach((x) => {
  if (x.total !== 30 || x.material !== 25 || x.extra !== 5) {
    throw new Error('Falha de proporcao por tema');
  }
});

const kept = cards.filter((c) => c.materia !== 'ds');
let nextId = kept.reduce((m, c) => Math.max(m, Number(c.id) || 0), 0) + 1;
regenerated.forEach((c) => {
  c.id = nextId++;
});

data.flashcards = [...kept, ...regenerated];
fs.writeFileSync(path, JSON.stringify(data, null, 2) + '\n', 'utf8');
console.log('DS regenerada em cloze:', regenerated.length, 'cards');
