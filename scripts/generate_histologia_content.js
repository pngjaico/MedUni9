/**
 * Gera data/histologia_revisao.json e data/histologia_atlas.json.
 * Run: node scripts/generate_histologia_content.js
 */
const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');
const outRevisao = path.join(root, 'data', 'histologia_revisao.json');
const outAtlas = path.join(root, 'data', 'histologia_atlas.json');

function lamina(id, titulo, extra = '') {
  return {
    id,
    titulo,
    alt: titulo,
    urlImagem: '',
    descricaoNecessaria:
      extra ||
      'Lâmina em preparação. Sugestão: imagens CC-BY em Wikimedia Commons (categoria histologia) ou figuras OpenStax Anatomy & Physiology.',
    pinos: [],
  };
}

function div(id, titulo, laminas, modulo) {
  const o = { id, titulo, laminas };
  if (modulo != null && modulo >= 1 && modulo <= 4) o.modulo = modulo;
  return o;
}

const atlasSistemas = [
  {
    id: 'tecidos_fundamentais',
    titulo: 'Tecidos fundamentais e pele',
    ordem: 0,
    cor: '#14B8A6',
    icone: 'muscle',
    divisoes: [
      div('tf_epitelio', 'Epitélio', [
        lamina('tf_e1', 'Epitélio pavimentoso simples', ''),
        lamina('tf_e2', 'Epitélio cuboidal / colunar', ''),
        lamina('tf_e3', 'Epitélio estratificado (esofago, pele)', ''),
      ], 1),
      div('tf_conjuntivo', 'Tecido conjuntivo', [
        lamina('tf_c1', 'CT frouxo — tecido celular subcutâneo', ''),
        lamina('tf_c2', 'CT denso regular / irregular', ''),
        lamina('tf_c3', 'Tecido adiposo branco', ''),
      ], 1),
      div('tf_muscular_geral', 'Panorama muscular (3 tipos)', [
        lamina('tf_m1', 'Comparativo esquelético / cardíaco / liso (esquema)', ''),
      ], 1),
      div('tf_nervoso', 'Tecido nervoso', [
        lamina('tf_n1', 'Neurônio multipolar + neuroglia', ''),
      ], 1),
      div('tf_pele', 'Pele', [
        lamina('tf_p1', 'Pele fina — epiderme / derme', ''),
        lamina('tf_p2', 'Pele espessa — planta / palma', ''),
      ], 1),
    ],
  },
  {
    id: 'sistema_esqueletico',
    titulo: 'Sistema esquelético (osso, cartilagem)',
    ordem: 1,
    cor: '#F59E0B',
    icone: 'bone',
    divisoes: [
      div('se_tecidos', 'Panorama: tecidos do aparelho locomotor', [
        lamina('se_tec_1', 'Cartilagem hialina — traqueia ou bronquio', ''),
        lamina('se_tec_2', 'Cartilagem elástica — epiglote', ''),
        lamina('se_tec_3', 'Cartilagem fibrosa — disco intervertebral (anulus)', ''),
      ]),
      div('se_osso', 'Osso', [
        lamina('se_os_1', 'Osso compacto — sistema haversiano', ''),
        lamina('se_os_2', 'Osso esponjoso — trabéculas', ''),
        lamina('se_os_3', 'Osteoblastos / osteoclastos (metáfise)', ''),
      ]),
      div('se_ossificacao', 'Ossificação e crescimento', [
        lamina('se_osi_1', 'Ossificação intramembranosa', ''),
        lamina('se_osi_2', 'Ossificação endocondral — placa epifisária', ''),
      ]),
    ],
  },
  {
    id: 'sistema_articular',
    titulo: 'Sistema articular (cartilagem, sinóvia)',
    ordem: 2,
    cor: '#EA580C',
    icone: 'joint',
    divisoes: [
      div('sa_sinovial', 'Articulação sinovial', [
        lamina('sa_1', 'Cartilagem articular hialina', ''),
        lamina('sa_2', 'Membrana sinovial e prega sinovial', ''),
      ]),
      div('sa_discos', 'Discos e meniscos', [
        lamina('sa_3', 'Fibrocartilagem — menisco de joelho', ''),
      ]),
    ],
  },
  {
    id: 'sistema_muscular',
    titulo: 'Sistema muscular (tecido muscular)',
    ordem: 3,
    cor: '#DC2626',
    icone: 'muscle',
    divisoes: [
      div('sm_esqueletico', 'Músculo esquelético', [
        lamina('sm_1', 'Fibras esqueléticas — estriadas, multinucleadas', ''),
        lamina('sm_2', 'Junções neuromusculares (NMJ)', ''),
      ]),
      div('sm_cardiaco', 'Músculo cardíaco', [
        lamina('sm_3', 'Cardiócitos — discos intercalares, núcleo central', ''),
      ]),
      div('sm_liso', 'Músculo liso', [
        lamina('sm_4', 'Fibras lisas — parede de vaso ou víscera', ''),
      ]),
    ],
  },
  {
    id: 'sistema_circulatorio',
    titulo: 'Sistema circulatório (vasos, sangue, coração)',
    ordem: 4,
    cor: '#EF4444',
    icone: 'heart',
    divisoes: [
      div('sc_sangue', 'Sangue e hematopoiese', [
        lamina('sc_1', 'Esfregaço — série eritrocitária e leucocitária', ''),
        lamina('sc_2', 'Medula óssea — megacariócito / plaquetas', ''),
      ]),
      div('sc_vasos', 'Vasos', [
        lamina('sc_3', 'Artéria — íntima, média, adventícia', ''),
        lamina('sc_4', 'Véia de grande calibre', ''),
        lamina('sc_5', 'Capilar contínuo / fenestrado', ''),
      ]),
      div('sc_coracao', 'Coração', [
        lamina('sc_6', 'Miocárdio — cardiomiocitos', ''),
        lamina('sc_7', 'Endocárdio / válvula (panorama)', ''),
      ]),
      div('sc_linfoide', 'Órgãos linfoides (imunidade)', [
        lamina('sc_8', 'Linfonodo — zona paracortical e folículos', ''),
        lamina('sc_9', 'Baço — polpa branca e polpa vermelha', ''),
        lamina('sc_10', 'Tonsila palatina — epitélio e folículos', ''),
      ]),
    ],
  },
  {
    id: 'sistema_respiratorio',
    titulo: 'Sistema respiratório (vias e parênquima)',
    ordem: 5,
    cor: '#06B6D4',
    icone: 'lungs',
    divisoes: [
      div('sr_vias', 'Vias aéreas condutoras', [
        lamina('sr_1', 'Epitélio respiratório pseudostratificado — traqueia', ''),
        lamina('sr_2', 'Brônquio — placas cartilaginosas', ''),
      ]),
      div('sr_pulmao', 'Parênquima pulmonar', [
        lamina('sr_3', 'Bronquíolo respiratório', ''),
        lamina('sr_4', 'Alvéolos — barreira hematoalveolar', ''),
      ]),
    ],
  },
  {
    id: 'sistema_digestorio',
    titulo: 'Sistema digestório (tubo e anexos)',
    ordem: 6,
    cor: '#059669',
    icone: 'stomach',
    divisoes: [
      div('sd_esofago_estomago', 'Esôfago e estômago', [
        lamina('sd_1', 'Esôfago — epitélio estratificado / transição', ''),
        lamina('sd_2', 'Estômago — glândulas fúndicas e pilóricas', ''),
      ], 3),
      div('sd_intestino', 'Intestino delgado e grosso', [
        lamina('sd_3', 'Duodeno — vilosidades e criptas', ''),
        lamina('sd_4', 'Íleo — placas de Peyer', ''),
        lamina('sd_5', 'Cólon — células caliciformes', ''),
      ], 3),
      div('sd_anexos', 'Fígado, pâncreas exócrino, vesícula', [
        lamina('sd_6', 'Fígado — lóbulo clássico', ''),
        lamina('sd_7', 'Pâncreas exócrino — acinos', ''),
        lamina('sd_8', 'Vesícula biliar — epitélio colunar', ''),
      ], 3),
    ],
  },
  {
    id: 'sistema_urinario',
    titulo: 'Sistema urinário (rins e vias)',
    ordem: 7,
    cor: '#3B82F6',
    icone: 'kidney',
    divisoes: [
      div('su_rim', 'Rim', [
        lamina('su_1', 'Córtex renal — corpúsculos e túbulos', ''),
        lamina('su_2', 'Medula — pirâmides e papila', ''),
        lamina('su_3', 'Néfron — alça de Henle (panorama)', ''),
      ]),
      div('su_vias', 'Vias urinárias', [
        lamina('su_4', 'Bexiga — epitélio de transição', ''),
        lamina('su_5', 'Ureter — parede muscular', ''),
      ]),
    ],
  },
  {
    id: 'sistema_genital_masculino',
    titulo: 'Sistema genital masculino',
    ordem: 8,
    cor: '#6366F1',
    icone: 'male',
    divisoes: [
      div('sgm_testiculo', 'Testículo e espermatogênese', [
        lamina('sgm_1', 'Túbulos seminíferos — espermatogênese', ''),
        lamina('sgm_2', 'Interstício — células de Leydig', ''),
      ]),
      div('sgm_acessorios', 'Glândulas acessórias', [
        lamina('sgm_3', 'Próstata — glândulas e concreções', ''),
        lamina('sgm_4', 'Vesícula seminal', ''),
      ]),
    ],
  },
  {
    id: 'sistema_genital_feminino',
    titulo: 'Sistema genital feminino',
    ordem: 9,
    cor: '#EC4899',
    icone: 'female',
    divisoes: [
      div('sgf_ovario', 'Ovário', [
        lamina('sgf_1', 'Folículo primário / em crescimento', ''),
        lamina('sgf_2', 'Corpo lúteo', ''),
      ]),
      div('sgf_uterino', 'Útero e tubas', [
        lamina('sgf_3', 'Endométrio — fase proliferativa / secretora', ''),
        lamina('sgf_4', 'Tuba uterina — alça', ''),
      ]),
    ],
  },
  {
    id: 'sistema_neural',
    titulo: 'Sistema neural (encéfalo, medula e nervos)',
    ordem: 10,
    cor: '#8B5CF6',
    icone: 'brain',
    divisoes: [
      div('sn_neuronio', 'Neurônio e neuroglia', [
        lamina('sn_1', 'Neurônio multipolar — corpos celulares', ''),
        lamina('sn_2', 'Neuroglia — astrócitos / oligodendrócito', ''),
        lamina('sn_3', 'Bainha de mielina: comparação central e periférica', ''),
      ]),
      div('sn_snc', 'Encéfalo e medula', [
        lamina('sn_4', 'Córtex cerebral — laminação', ''),
        lamina('sn_5', 'Cerebelo — camada molecular, Purkinje, granular', ''),
        lamina('sn_6', 'Medula espinal — substância cinzenta', ''),
      ]),
      div('sn_pns', 'Gânglios', [
        lamina('sn_7', 'Gânglio sensitivo (pseudo-unipolar)', ''),
        lamina('sn_8', 'Gânglio autonômico', ''),
      ]),
      div('sn_endocrino', 'Glândulas endócrinas (panorama)', [
        lamina('sn_9', 'Tireoide — folículos e coloide', ''),
        lamina('sn_10', 'Glândula suprarrenal — córtex em zonas e medula', ''),
      ]),
    ],
  },
];

const revisaoSistemas = [
  {
    id: 'tecidos_fundamentais',
    name: 'Tecidos fundamentais e pele',
    icone: 'muscle',
    color: '#14B8A6',
    subsections: [
      {
        title: 'Panorama dos quatro tipos de tecido',
        regiao: 'tecido_basico',
        blocks: [
          {
            type: 'sequence',
            title: 'Ordem de estudo sugerida para o iniciante',
            steps: [
              { label: 'Epitélio', detail: 'Reveste cavidades e superfícies; forma glândulas. Pense em polaridade entre face basal e apical.' },
              { label: 'Tecido conjuntivo', detail: 'Células dispersas em matriz rica; vai do tecido frouxo ao osso, passando por cartilagem e sangue.' },
              { label: 'Tecido muscular', detail: 'Esquelético, cardíaco e liso diferem por estriações, núcleos e localização. Compare sempre três cortes no microscópio.' },
              { label: 'Tecido nervoso', detail: 'Neurônios e células da neuroglia; base para entender encéfalo, medula e nervos periféricos.' },
            ],
          },
          {
            type: 'hub',
            title: 'Tecido conjuntivo: famílias principais',
            center: 'Matriz e fibras definem o comportamento',
            branches: [
              { label: 'Frouxo (areolar)', hint: 'Subcutâneo; nutre epitélios e permite troca.' },
              { label: 'Denso', hint: 'Regular em tendão; irregular na derme reticular.' },
              { label: 'Especializado', hint: 'Cartilagem, osso, sangue — funções mecânicas ou de transporte.' },
            ],
          },
          {
            type: 'cards',
            items: [
              {
                q: 'Como a pele se organiza em camadas',
                a: 'Epiderme estratificada (queratinizada ou não), derme papilar e reticular, hipoderme com tecido conjuntivo frouxo e adiposo.',
              },
              {
                q: 'Epitélio glandular: o que memorizar primeiro',
                a: 'Glandulas exócrinas possuem ducto; endócrinas não. Depois distingua simples ou composto e o tipo de secreção (serosa ou mucosa).',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'sistema_esqueletico',
    name: 'Sistema esquelético',
    icone: 'bone',
    color: '#F59E0B',
    subsections: [
      {
        title: 'Cartilagem e osso: visão geral',
        regiao: 'tecido_basico',
        blocks: [
          {
            type: 'sequence',
            title: 'Do revestimento ao osso maduro',
            steps: [
              { label: 'Tecido conjuntivo junto aos ossos', detail: 'Periósteo e medula óssea guardam células que remodelam e hematopoietizam.' },
              { label: 'Três cartilagens', detail: 'Hialina (traquéia, superfície articular), elástica (orelha, epiglote), fibrosa (meniscos, disco intervertebral).' },
              { label: 'Osso compacto e esponjoso', detail: 'Compacto com sistemas de Havers; esponjoso com trabéculas na metáfise e arquitetura leve.' },
            ],
          },
          {
            type: 'hub',
            title: 'Cartilagem: três tipos',
            center: 'Matriz rica em fibras e condrócitos',
            branches: [
              { label: 'Hialina', hint: 'Superfície articular, anéis traqueais.' },
              { label: 'Elástica', hint: 'Flexível: pavilhão auricular, epiglote.' },
              { label: 'Fibrosa', hint: 'Discos intervertebrais, meniscos.' },
            ],
          },
          {
            type: 'cards',
            items: [
              {
                q: 'Osso compacto: unidade estrutural',
                a: 'Sistemas de Havers organizam lamelas em torno de um canal central com vasos. Osteócitos ocupam lacunas e comunicam-se por canalículos.',
              },
              {
                q: 'Osso esponjoso',
                a: 'Trabéculas alinhadas a linhas de força; hematopoiese em regiões ricas em medula vermelha no adulto (exemplos: esterno, ossos planos, epífises proximais de fémur e úmero).',
              },
            ],
          },
        ],
      },
      {
        title: 'Ossificação e crescimento ósseo',
        blocks: [
          {
            type: 'sequence',
            title: 'Como o osso se forma e cresce',
            steps: [
              { label: 'Ossificação intramembranosa', detail: 'Ossos planos do crânio e clavícula formam-se a partir de tecido conjuntivo sem modelo cartilaginoso prévio.' },
              { label: 'Ossificação endocondral', detail: 'A maioria dos ossos longos substitui um modelo de cartilagem por osso em etapas ordenadas.' },
              { label: 'Placa epifisária', detail: 'Permite crescimento em comprimento até fechar; após o fechamento, cessa o alongamento longitudinal.' },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'sistema_articular',
    name: 'Sistema articular',
    icone: 'joint',
    color: '#EA580C',
    subsections: [
      {
        title: 'Articulações e tecidos de revestimento',
        regiao: 'tecido_basico',
        blocks: [
          {
            type: 'hub',
            title: 'Superfície articular',
            center: 'Cartilagem hialina + sinóvia',
            branches: [
              { label: 'Cartilagem articular', hint: 'sem pericôndrio' },
              { label: 'Membrana sinovial', hint: 'sinoviócitos tipos A/B' },
              { label: 'Líquido sinovial', hint: 'similar ao plasma' },
            ],
          },
          {
            type: 'cards',
            items: [
              {
                q: 'Fibrocartilagem em articulações',
                a: 'Discos intervertebrais, meniscos — resistência a compressão e cisalhamento.',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'sistema_muscular',
    name: 'Sistema muscular',
    icone: 'muscle',
    color: '#DC2626',
    subsections: [
      {
        title: 'Três tipos de músculo',
        regiao: 'tecido_basico',
        blocks: [
          {
            type: 'sequence',
            title: 'Comparar esquelético, cardíaco e liso',
            steps: [
              { label: 'Músculo esquelético', detail: 'Estriado, núcleos periféricos, contração voluntária; liga-se a ossos pelo tendão.' },
              { label: 'Músculo cardíaco', detail: 'Estriado, núcleo central, discos intercalares; contração rítmica involuntária.' },
              { label: 'Músculo liso', detail: 'Não estriado, núcleo central; paredes de vísceras e vasos, contrato lento e involuntário.' },
            ],
          },
          {
            type: 'cards',
            items: [
              {
                q: 'Sarcômero: o que observar',
                a: 'Região entre duas linhas Z; filamentos de actina e miosina formam bandas claras e escuras. Memorize a alternância de bandas A e I e a linha H no meio da banda A.',
              },
            ],
          },
        ],
      },
      {
        title: 'Placa neuromuscular e fibra esquelética',
        blocks: [
          {
            type: 'cards',
            items: [
              {
                q: 'Junção neuromuscular',
                a: 'Terminal nervoso forma sulco na fibra; membrana muscular com dobras (junctional folds). Núcleos das fibras ficam perifericamente. Relacione com a lâmina de placa motora no atlas.',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'sistema_circulatorio',
    name: 'Sistema circulatório',
    icone: 'heart',
    color: '#EF4444',
    subsections: [
      {
        title: 'Sangue e medula óssea',
        regiao: 'tecido_basico',
        blocks: [
          {
            type: 'hub',
            title: 'Séries sanguíneas na medula',
            center: 'Medula vermelha como fábrica celular',
            branches: [
              { label: 'Hemácias', hint: 'Sem núcleo no adulto; transportam oxigênio.' },
              { label: 'Leucócitos granulares', hint: 'Neutrófilos, eosinófilos, basófilos — núcleos lobados e grânulos distintos.' },
              { label: 'Linfócitos e monócitos', hint: 'Defesa adaptativa e fagocitose; monócitos tornam-se macrófagos nos tecidos.' },
            ],
          },
          {
            type: 'cards',
            items: [
              {
                q: 'Órgãos linfoides na circulação',
                a: 'Linfonodos filtram linfa; baço filtra sangue. Veja as lâminas correspondentes no atlas para comparar arquitetura folicular e cordões.',
              },
            ],
          },
        ],
      },
      {
        title: 'Coração e grandes vasos',
        blocks: [
          {
            type: 'sequence',
            title: 'Camadas da parede arterial e da veia',
            steps: [
              { label: 'Íntima', detail: 'Endotélio em contato com o sangue; pode incluir tecido subendotelial fino.' },
              { label: 'Média', detail: 'Principalmente músculo liso e elástica nas artérias grandes; espessura varia com o calibre.' },
              { label: 'Adventícia', detail: 'Tecido conjuntivo que ancora o vaso aos órgãos vizinhos.' },
            ],
          },
          {
            type: 'cards',
            items: [
              {
                q: 'Tipos de capilares',
                a: 'Contínuos com junções apertadas na barreira hematoencefálica; sinusoides no fígado e no baço; fenestrados nos rins e em parte do intestino para filtração e troca.' },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'sistema_respiratorio',
    name: 'Sistema respiratório',
    icone: 'lungs',
    color: '#06B6D4',
    subsections: [
      {
        title: 'Traquéia, brônquios e parênquima pulmonar',
        blocks: [
          {
            type: 'sequence',
            title: 'Mudança do epitélio ao longo das vias aéreas',
            steps: [
              { label: 'Traquéia e brônquios principais', detail: 'Epitélio colunar pseudoestratificado com células mucíparas; cartilagem em anéis ou placas.' },
              { label: 'Bronquíolos', detail: 'Epitélio cúbico; ausência de cartilagem na parede.' },
              { label: 'Alvéolos', detail: 'Epitélio muito fino; pneumócitos tipo I para troca gasosa e tipo II para surfactante.' },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'sistema_digestorio',
    name: 'Sistema digestório',
    icone: 'stomach',
    color: '#059669',
    subsections: [
      {
        title: 'Tubo digestório: esôfago ao cólon',
        blocks: [
          {
            type: 'sequence',
            title: 'Epitélio e função em cada região',
            steps: [
              { label: 'Esôfago', detail: 'Epitélio estratificado não queratinizado que resiste ao atrito; transição próximo ao estômago.' },
              { label: 'Estômago', detail: 'Mucosa com fossetas e glândulas fúndicas e pilóricas secretando muco, ácido e enzimas.' },
              { label: 'Intestino delgado', detail: 'Vilosidades e criptas aumentam área; no íleo surgem placas de tecido linfoide.' },
              { label: 'Intestino grosso', detail: 'Absorção de água e sais; células caliciformes abundantes no epitélio.' },
            ],
          },
          {
            type: 'hub',
            title: 'Fígado, pâncreas exócrino e vesícula biliar',
            center: 'Parênquima glandular e vias biliares',
            branches: [
              { label: 'Fígado', hint: 'Lóbulos com tríade portal: ramo arterial, ramo portal, ducto biliar.' },
              { label: 'Pâncreas exócrino', hint: 'Acinos secretores e sistema ductal que desemboca no duodeno.' },
              { label: 'Vesícula biliar', hint: 'Armazena bile; epitélio colunar especializado.' },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'sistema_urinario',
    name: 'Sistema urinário',
    icone: 'kidney',
    color: '#3B82F6',
    subsections: [
      {
        title: 'Rim: néfron e segmentos tubulares',
        blocks: [
          {
            type: 'sequence',
            title: 'Fluxo do filtrado ao longo do néfron',
            steps: [
              { label: 'Corpúsculo renal', detail: 'Podócitos envolvem capilares; filtração para o espaço de Bowman.' },
              { label: 'Túbulo contorcido proximal', detail: 'Reabsorção maciça de água, nutrientes e íons.' },
              { label: 'Alça de Henle', detail: 'Cria gradiente osmótico na medula para concentrar a urina.' },
              { label: 'Túbulo contorcido distal e ducto coletor', detail: 'Ajuste final de sódio e água sob hormônios como a vasopressina.' },
            ],
          },
        ],
      },
      {
        title: 'Bexiga e ureter',
        blocks: [
          {
            type: 'cards',
            items: [
              {
                q: 'Epitélio da bexiga',
                a: 'Epitélio de transição permite distensão; a lâmina própria contém colágeno abundante. O ureter apresenta musculatura lisa na parede para peristaltismo.',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'sistema_genital_masculino',
    name: 'Sistema genital masculino',
    icone: 'male',
    color: '#6366F1',
    subsections: [
      {
        title: 'Testículo e espermatogênese',
        blocks: [
          {
            type: 'hub',
            title: 'Túbulo seminífero e barreira hemato-testicular',
            center: 'Suporte das células de Sertoli',
            branches: [
              { label: 'Espermatogônias', hint: 'Reserva na membrana basal do túbulo.' },
              { label: 'Espermatócitos', hint: 'Divisões de meiose para reduzir cromossomos.' },
              { label: 'Espermátides e espermatozoides', hint: 'Maturação e liberação ao lúmen com auxílio das células de Sertoli.' },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'sistema_genital_feminino',
    name: 'Sistema genital feminino',
    icone: 'female',
    color: '#EC4899',
    subsections: [
      {
        title: 'Ovário: folículos e endométrio',
        blocks: [
          {
            type: 'sequence',
            title: 'Maturação do folículo e do endométrio',
            steps: [
              { label: 'Folículo primordial', detail: 'Oócito rodeado por uma camada simples de células.' },
              { label: 'Folículos primário e secundário', detail: 'Estrato granulosa espessa; antro liquórico aparece no folículo antral.' },
              { label: 'Ovulação e corpo lúteo', detail: 'Após liberar o ovócito, as células restantes secretam progesterona na fase lútea.' },
              { label: 'Endométrio', detail: 'Proliferação e secreção refletem o ciclo hormonal no útero.' },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'sistema_neural',
    name: 'Sistema neural',
    icone: 'brain',
    color: '#8B5CF6',
    subsections: [
      {
        title: 'Neurônio, bainha de mielina e neuroglia',
        blocks: [
          {
            type: 'sequence',
            title: 'Onde a mielina se forma',
            steps: [
              { label: 'No encéfalo e na medula espinal', detail: 'Oligodendrócitos envolvem vários axónios; cada célula mieliniza vários segmentos.' },
              { label: 'Nos nervos periféricos', detail: 'Células de Schwann envolvem um axónio de cada vez e participam da regeneração.' },
            ],
          },
          {
            type: 'cards',
            items: [
              {
                q: 'Papéis da neuroglia',
                a: 'Astrócitos sustentam a barreira hematoencefálica e o meio ionico; oligodendrócitos e células de Schwann produzem mielina; microglia atuam como defesa imune; epéndimo reveste ventrículos.',
              },
            ],
          },
        ],
      },
      {
        title: 'Glândulas endócrinas: panorama',
        blocks: [
          {
            type: 'cards',
            items: [
              {
                q: 'Tireoide e suprarrenal (revisão de conceitos)',
                a: 'Tireoide: folículos com coloide e epitélio follicular que captam iodo. Suprarrenal: córtex em três zonas (glomerulosa, fasciculada, reticular) e medula com cromafins.',
              },
            ],
          },
        ],
      },
    ],
  },
];

const atlasJson = {
  version: 4,
  tipo: 'histologia',
  updatedAt: new Date().toISOString(),
  referenciaAsclepio: {
    nome: 'OpenStax Anatomy & Physiology (capítulos de tecidos)',
    url: 'https://openstax.org/details/books/anatomy-and-physiology-2e',
  },
  nota:
    'Este atlas organiza lâminas por sistema e por órgão. As imagens em microscopia serão acrescentadas com fontes abertas; até lá, use os títulos como guia de estudo.',
  sistemas: atlasSistemas,
};

const revisaoJson = {
  version: 3,
  updatedAt: new Date().toISOString(),
  sistemas: revisaoSistemas,
};

fs.writeFileSync(outAtlas, JSON.stringify(atlasJson, null, 2), 'utf8');
fs.writeFileSync(outRevisao, JSON.stringify(revisaoJson, null, 2), 'utf8');
console.log('Wrote', outAtlas, 'and', outRevisao);
