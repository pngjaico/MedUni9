/**
 * BMF3 — Bloco C (264 cards). Conteúdo consolidado a partir de 4 lotes gerados em paralelo
 * + correções editoriais (categorias, tags, proporções 10+2).
 */
function buildBmf3(pack) {
  const L = pack.bind(null, 'bmf3');
  const blocks = [];

  blocks.push(...L('bmf3_a1', [
    ['No trato gastrointestinal superior, a cavidade {{c1::oral}} inicia o tubo digestório.', 'oral', 1, 'definicao'],
    ['A {{c1::faringe}} é tubo muscular comum à digestão e à respiração.', 'faringe', 1, 'definicao'],
    ['O {{c1::esôfago}} conduz o bolo da faringe ao estômago por peristalse.', 'esôfago', 1, 'mecanismo'],
    ['O {{c1::estômago}} apresenta fundo, corpo e antro ao longo das curvaturas.', 'estômago', 1, 'definicao'],
    ['O esfíncter esofágico {{c1::inferior}} marca a transição esofagogástrica.', 'inferior', 2, 'mecanismo'],
    ['A mucosa esofágica é epitélio {{c1::estratificado pavimentoso}} não queratinizado.', 'estratificado pavimentoso', 2, 'definicao'],
    ['A {{c1::cárdia}} é a abertura do esôfago para a cavidade gástrica.', 'cárdia', 1, 'definicao'],
    ['A face posterior do estômago relaciona-se com {{c1::pâncreas}} baço e rim esquerdo.', 'pâncreas', 2, 'clinica'],
    ['A grande curvatura contribui para ancorar o {{c1::ligamento gastrocólico}}.', 'ligamento gastrocólico', 2, 'definicao'],
    ['Distal ao piloro o tubo digestório segue para o {{c1::duodeno}}.', 'duodeno', 1, 'prova']
  ], [
    ['O nervo {{c1::vago}} parassimpático favorece motilidade esofágica e gástrica.', 'vago'],
    ['O esôfago abdominal atravessa o diafragma pelo {{c1::hiato esofágico}}.', 'hiato esofágico']
  ]));

  blocks.push(...L('bmf3_a2', [
    ['O {{c1::intestino delgado}} inclui duodeno jejuno e íleo em sequência.', 'intestino delgado', 1, 'definicao'],
    ['O {{c1::intestino grosso}} prolonga-se da válvula ileocecal ao canal anal.', 'intestino grosso', 1, 'definicao'],
    ['O {{c1::ceco}} é a porção cega inicial abaixo da válvula ileocecal.', 'ceco', 1, 'definicao'],
    ['O segmento entre ceco e flexura hepática é o {{c1::cólon ascendente}}.', 'cólon ascendente', 1, 'definicao'],
    ['O {{c1::cólon transverso}} suspende-se ao mesentério cólico.', 'cólon transverso', 2, 'definicao'],
    ['O {{c1::cólon descendente}} vai até o assoalho pélvico esquerdo.', 'cólon descendente', 2, 'definicao'],
    ['O {{c1::reto}} é o segmento fixo terminal até a junção anorretal.', 'reto', 1, 'definicao'],
    ['A {{c1::válvula ileocecal}} regula o trânsito do íleo para o ceco.', 'válvula ileocecal', 2, 'mecanismo'],
    ['As dilatações saculares do cólon são as {{c1::haustra}}.', 'haustra', 2, 'definicao'],
    ['Três faixas musculares longitudinais formam as {{c1::tênias cólicas}}.', 'tênias cólicas', 2, 'definicao']
  ], [
    ['Projeções adiposas no cólon são os {{c1::apêndices epiploicos}}.', 'apêndices epiploicos'],
    ['Dilatação terminal comum do reto é a {{c1::ampola retal}}.', 'ampola retal']
  ]));

  blocks.push(...L('bmf3_a3', [
    ['O {{c1::fígado}} ocupa o hipocôndrio direito e participa da bile.', 'fígado', 1, 'definicao'],
    ['O {{c1::pâncreas}} é glândula mista com ducto pancreático principal.', 'pâncreas', 1, 'definicao'],
    ['A {{c1::vesícula biliar}} armazena bile sob a face visceral hepática.', 'vesícula biliar', 1, 'definicao'],
    ['A segmentação hepática funcional segue o sistema de {{c1::Couinaud}}.', 'Couinaud', 2, 'definicao'],
    ['O triângulo de {{c1::Calot}} delimita ducto cístico ducto hepático comum e baixo fígado.', 'Calot', 2, 'clinica'],
    ['A papila duodenal maior é papila de {{c1::Vater}}.', 'Vater', 2, 'prova'],
    ['A confluência dos ductos hepáticos direito e esquerdo forma o {{c1::ducto hepático comum}}.', 'ducto hepático comum', 2, 'definicao'],
    ['União do ducto hepático comum ao {{c1::ducto cístico}} gera o colédogo.', 'ducto cístico', 2, 'mecanismo'],
    ['A {{c1::papila maior duodenal}} drena bile e suco pancreático.', 'papila maior duodenal', 2, 'mecanismo'],
    ['O ducto pancreático {{c1::acessório}} costuma drenar na papila menor.', 'acessório', 2, 'diferenciacao']
  ], [
    ['No mapa de {{c1::Couinaud}} o segmento I corresponde ao lobo caudado.', 'Couinaud'],
    ['A artéria {{c1::cística}} irriga frequentemente vesícula e ducto cístico.', 'cística']
  ]));

  blocks.push(...L('bmf3_a4', [
    ['A luz esofágica tem epitélio {{c1::estratificado pavimentoso}}.', 'estratificado pavimentoso', 1, 'definicao'],
    ['O epitélio superficial gástrico é {{c1::cilíndrico}} simples secretor.', 'cilíndrico', 1, 'diferenciacao'],
    ['A camada epitelial profunda das tubulares gástricas é a {{c1::mucosa}} como unidade básica.', 'mucosa', 2, 'definicao'],
    ['Nas glândulas cardiais o muco rico em {{c1::mucina}} protege a junção.', 'mucina', 2, 'mecanismo'],
    ['Células {{c1::parietais}} secretam ácido clorídrico e fator intrínseco.', 'parietais', 1, 'definicao'],
    ['Células {{c1::principais}} liberam pepsinogênio inativo.', 'principais', 1, 'definicao'],
    ['Epité intestinal metaplásico no esôfago distal descreve esôfago de {{c1::Barrett}}.', 'Barrett', 2, 'clinica'],
    ['Sucos glandulares drenam para fovéolas na {{c1::lâmina própria}}.', 'lâmina própria', 2, 'definicao'],
    ['A túnica muscular gástrica inclui camada interna {{c1::oblíqua}}.', 'oblíqua', 2, 'definicao'],
    ['Barrett com displasia {{c1::alta}} eleva risco de progressão neoplásica.', 'alta', 2, 'clinica']
  ], [
    ['Barrett costuma mostrar metaplasia do tipo {{c1::intestinal}} com caliciformes.', 'intestinal'],
    ['Glândulas {{c1::pilóricas}} secretam muco espesso no canal pilórico.', 'pilóricas']
  ]));

  blocks.push(...L('bmf3_a5', [
    ['Projeções mucosas digitiformes no delgado são {{c1::vilosidades}}.', 'vilosidades', 1, 'definicao'],
    ['Placas de {{c1::Peyer}} são agregados linfoides mais numerosos no íleo.', 'Peyer', 1, 'definicao'],
    ['O cólon não forma {{c1::vilosidades}} macroscópicas como o delgado.', 'vilosidades', 1, 'diferenciacao'],
    ['Enterócitos têm {{c1::microvilosidades}} no bordo em escova.', 'microvilosidades', 2, 'definicao'],
    ['Criptas de {{c1::Lieberkühn}} ficam entre vilosidades no delgado.', 'Lieberkühn', 2, 'definicao'],
    ['O epitélio cólico exibe células {{c1::caliciformes}} produtoras de muco.', 'caliciformes', 1, 'definicao'],
    ['Linfóide associado à mucosa intestinal inclui {{c1::MALT}} na lâmina própria.', 'MALT', 2, 'definicao'],
    ['Comparado ao duodeno o jejuno costuma ter vilosidades {{c1::mais longas}}.', 'mais longas', 2, 'diferenciacao'],
    ['Células {{c1::indiferenciadas}} nas criptas sustentam renovação epitelial.', 'indiferenciadas', 2, 'mecanismo'],
    ['Criptas delgadas são {{c1::mais profundas}} que criptas cólicas típicas.', 'mais profundas', 2, 'diferenciacao']
  ], [
    ['Células em {{c1::M}} no epitélio folicular transportam antígeno luminal.', 'M'],
    ['A {{c1::muscularis mucosae}} separa mucosa de submucosa no intestino.', 'muscularis mucosae']
  ]));

  blocks.push(...L('bmf3_a6', [
    ['Unidade histológica hepática clássica é o {{c1::lóbulo hepático}}.', 'lóbulo hepático', 1, 'definicao'],
    ['A {{c1::tríade portal}} reúne ramo da artéria hepática veia portal e ducto biliar.', 'tríade portal', 1, 'definicao'],
    ['Macrófagos do seio hepático são células de {{c1::Kupffer}}.', 'Kupffer', 1, 'definicao'],
    ['Cordões de hepatócitos convergem para a {{c1::veia central}}.', 'veia central', 2, 'mecanismo'],
    ['O espaço de {{c1::Disse}} fica entre hepatócitos e endotélio sinusoidal.', 'Disse', 2, 'definicao'],
    ['Capilares hepáticos especializados com luz larga são {{c1::sinusoides}}.', 'sinusoides', 1, 'definicao'],
    ['A artéria hepática costuma nascer do tronco {{c1::celíaco}}.', 'celíaco', 2, 'mecanismo'],
    ['Sangue esplâncnico entra no fígado pela {{c1::veia porta}}.', 'veia porta', 1, 'mecanismo'],
    ['A bile primária flui entre hepatócitos nos {{c1::canalículos}}.', 'canalículos', 2, 'mecanismo'],
    ['Ductos curtos unem canalículos aos interlobulares são ductos de {{c1::Hering}}.', 'Hering', 2, 'definicao']
  ], [
    ['Hepatócitos pericentrais correspondem à zona {{c1::III}} do acínus funcional.', 'III'],
    ['Estrelados no espaço de Disse são células de {{c1::Ito}}.', 'Ito']
  ]));

  blocks.push(...L('bmf3_a7', [
    ['Contrações que misturam quimo sem avanço longitudinal são motilidade de {{c1::segmentação}}.', 'segmentação', 1, 'definicao'],
    ['Entre refeições o complexo mioelétrico migratório cicla aproximadamente a cada {{c1::noventa minutos}}.', 'noventa minutos', 2, 'mecanismo'],
    ['Gastrina das células G estimula secreção de {{c1::ácido clorídrico}}.', 'ácido clorídrico', 1, 'mecanismo'],
    ['Secretina aumenta bicarbonato e volume do {{c1::pâncreas exócrino}}.', 'pâncreas exócrino', 1, 'mecanismo'],
    ['CCK estimula vesícula e enzimas {{c1::pancreáticas}} lipolíticas e proteolíticas.', 'pancreáticas', 1, 'mecanismo'],
    ['GIP inibe ácido gástrico e atrasa {{c1::esvaziamento gástrico}} após refeição mista.', 'esvaziamento gástrico', 2, 'mecanismo'],
    ['Líquidos esvaziam o estômago mais rápido que sólidos com padrão {{c1::exponencial}} na fase líquida.', 'exponencial', 2, 'mecanismo'],
    ['Gordura duodenal libera CCK e inibe esvaziamento pelo reflexo {{c1::enterogástrico}}.', 'enterogástrico', 1, 'mecanismo'],
    ['Distensão gástrica modula tônus pilórico por vias locais e {{c1::parassimpáticas}}.', 'parassimpáticas', 2, 'mecanismo'],
    ['Relaxamento receptivo do estômago recebe volume antes da trituração {{c1::antral}}.', 'antral', 2, 'definicao']
  ], [
    ['Motilina participa da fase de interdigesto e do {{c1::complexo mioelétrico migratório}}.', 'complexo mioelétrico migratório'],
    ['Na bomba H+K+ ATPase troca luminosa de {{c1::potássio}} por hidrogênio ocorre nas parietais.', 'potássio']
  ]));

  blocks.push(...L('bmf3_a8', [
    ['Sem estímulo reflexo a saliva basal é secreção {{c1::espontânea}}.', 'espontânea', 1, 'definicao'],
    ['Cheiro visão e mastigação iniciam fase {{c1::cefálica}} da saliva.', 'cefálica', 1, 'mecanismo'],
    ['Distensão oral aciona fase {{c1::oral}} da secreção salivar.', 'oral', 1, 'mecanismo'],
    ['A fase cefálica da secreção gástrica depende do nervo {{c1::vago}}.', 'vago', 1, 'mecanismo'],
    ['Distensão corporal gástrica aciona fase {{c1::gástrica}} da secreção ácida.', 'gástrica', 1, 'mecanismo'],
    ['Peptídeos no antro liberam gastrina na fase {{c1::intestinal}}.', 'intestinal', 1, 'mecanismo'],
    ['Tripsinogênio ativa-se no duodeno pela {{c1::enteropeptidase}}.', 'enteropeptidase', 2, 'mecanismo'],
    ['Quimotripsinogênio ativa-se após clivagem pela {{c1::tripsina}}.', 'tripsina', 2, 'mecanismo'],
    ['A bile na vesícula concentra-se por reabsorção de {{c1::água}} e eletrólitos.', 'água', 1, 'mecanismo'],
    ['Sais biliares retornam ao fígado pelo {{c1::ciclo enterohepático}}.', 'ciclo enterohepático', 1, 'definicao']
  ], [
    ['Amilase salivar gera {{c1::maltose}} e dextrinas a partir de amido.', 'maltose'],
    ['Lipase gástrica hidrolisa parcialmente triglicérides de cadeia {{c1::média}}.', 'média']
  ]));

  blocks.push(...L('bmf3_a9', [
    ['Glicose entra no enterócito com sódio pelo cotransportador {{c1::SGLT1}}.', 'SGLT1', 2, 'mecanismo'],
    ['Frutose usa transportador facilitado {{c1::GLUT5}} no polo apical.', 'GLUT5', 2, 'mecanismo'],
    ['Aminoácidos costumam entrar com cotransporte de {{c1::sódio}}.', 'sódio', 2, 'mecanismo'],
    ['Peptídeos curtos podem ser degradados intracelularmente a {{c1::aminoácidos}}.', 'aminoácidos', 2, 'mecanismo'],
    ['Monoglicéridos e ácidos graxos livres penetram o {{c1::enterócito}} a partir da micela.', 'enterócito', 2, 'mecanismo'],
    ['Triglicérides neoformados embrulham-se em {{c1::quilomícrons}} no enterócito.', 'quilomícrons', 1, 'mecanismo'],
    ['Quilomícrons exocitam-se na face basolateral para a lâmina {{c1::lacuna}}.', 'lacuna', 2, 'mecanismo'],
    ['B12 liga-se ao {{c1::fator intrínseco}} antes dos receptores ileais.', 'fator intrínseco', 1, 'mecanismo'],
    ['Ferro em heme absorve-se com maior eficiência no {{c1::duodeno}} proximal.', 'duodeno', 2, 'diferenciacao'],
    ['Cálcio regulado por vitamina D associa-se à {{c1::calbindina}} citosólica.', 'calbindina', 2, 'mecanismo']
  ], [
    ['Glicerol absorvido pode ser utilizado metabolicamente no {{c1::fígado}}.', 'fígado'],
    ['Carboidratos não digeríveis sofrem {{c1::fermentação}} colônica bacteriana.', 'fermentação']
  ]));

  blocks.push(...L('bmf3_a10', [
    ['Rins situam-se retroperitonealmente cerca de {{c1::T12}} a L3.', 'T12', 2, 'definicao'],
    ['O ureter desce até a {{c1::bexiga}} pela parede posterior.', 'bexiga', 1, 'definicao'],
    ['A uretra feminina é curta e exclusivamente {{c1::urinária}}.', 'urinária', 1, 'diferenciacao'],
    ['A uretra masculina inclui parte {{c1::esponjosa}} após membranosa e prostática.', 'esponjosa', 2, 'definicao'],
    ['No hilo entram artéria veia e {{c1::pelve renal}} seguida de ureter.', 'pelve renal', 2, 'definicao'],
    ['Cálices menores confluem na pelve e drenam para o {{c1::ureter}}.', 'ureter', 1, 'definicao'],
    ['Bexiga vazia repousa na {{c1::pelve}} menor.', 'pelve', 1, 'definicao'],
    ['O detrusor reveste a parede da {{c1::bexiga}}.', 'bexiga', 1, 'mecanismo'],
    ['Tecido perirenal é gordura {{c1::perirrenal}} contínua à fáscia.', 'perirrenal', 2, 'definicao'],
    ['Suprarrenais ficam no polo {{c1::superior}} de cada rim.', 'superior', 1, 'definicao']
  ], [
    ['O trígono vesical margeia orifícios ureterais e orifício {{c1::uretral}} interno.', 'uretral'],
    ['A gordura sobre o polo anterior do rim forma a pálpebra {{c1::renal}}.', 'renal']
  ]));

  blocks.push(...L('bmf3_a11', [
    ['Unidade funcional de filtração e transporte tubular é o {{c1::néfron}}.', 'néfron', 1, 'definicao'],
    ['A cápsula de Bowman envolve tufo {{c1::capilar}} glomerular.', 'capilar', 1, 'definicao'],
    ['O túbulo proximal reabsorve grande fração filtrada de {{c1::sódio}} água e glicose.', 'sódio', 1, 'mecanismo'],
    ['A alça descendente fina é muito permeável a {{c1::água}}.', 'água', 1, 'mecanismo'],
    ['A alça ascendente grossa reabsorve sal sem permeabilidade a {{c1::água}}.', 'água', 2, 'mecanismo'],
    ['Ducto coletor regula água sob hormônio {{c1::antidiurético}}.', 'antidiurético', 1, 'mecanismo'],
    ['Células intercaladas secretam {{c1::íons hidrogênio}} e participam do bicarbonato.', 'íons hidrogênio', 2, 'mecanismo'],
    ['Células granulares secretam {{c1::renina}} no aparelho juxtaglomerular.', 'renina', 1, 'mecanismo'],
    ['A mácula densa monitora carga tubular de {{c1::cloreto}} e sódio.', 'cloreto', 2, 'mecanismo'],
    ['Néfron cortical tem alça de Henle {{c1::curta}}.', 'curta', 1, 'diferenciacao']
  ], [
    ['A barreira de filtração inclui endotélio membrana basal e processos de {{c1::podócitos}}.', 'podócitos'],
    ['Células {{c1::mesangiais}} situam-se entre capilares glomerulares.', 'mesangiais']
  ]));

  blocks.push(...L('bmf3_a12', [
    ['Força favorável à filtração glomerular inclui pressão hidrostática {{c1::capilar}}.', 'capilar', 1, 'mecanismo'],
    ['A pressão oncótica plasmática tende a {{c1::reduzir}} a taxa de filtração glomerular.', 'reduzir', 2, 'mecanismo'],
    ['TFG representa a soma da filtração de todos os {{c1::néfrons}} funcionantes.', 'néfrons', 1, 'definicao'],
    ['Clearance é o volume de plasma depurado por {{c1::unidade de tempo}}.', 'unidade de tempo', 1, 'definicao'],
    ['Clearance de creatinina é usado na prática para estimar {{c1::TFG}}.', 'TFG', 1, 'clinica'],
    ['Fração de filtração é a razão TFG sobre fluxo {{c1::plasmático renal}}.', 'plasmático renal', 2, 'mecanismo'],
    ['Inulina é marcador clássico de TFG por ser filtrada sem secreção nem {{c1::reabsorção}}.', 'reabsorção', 2, 'prova'],
    ['PAH em baixa concentração aproxima o fluxo plasmático renal {{c1::efetivo}}.', 'efetivo', 2, 'prova'],
    ['Vasoconstrição da arteríola aferente tende a reduzir {{c1::TFG}}.', 'TFG', 2, 'mecanismo'],
    ['Vasoconstrição da arteríola eferente moderada pode elevar a pressão glomerular {{c1::capilar}}.', 'capilar', 2, 'diferenciacao']
  ], [
    ['A autorregulação renal envolve mecanismo miogênico e feedback {{c1::tubuloglomerular}}.', 'tubuloglomerular'],
    ['Se a creatinina sérica dobra de forma estável a TFG tende a cair cerca de {{c1::metade}}.', 'metade']
  ]));

  blocks.push(...L('bmf3_a13', [
    ['No túbulo proximal ocorre reabsorção da maior fração filtrada de {{c1::sódio}}.', 'sódio', 1, 'mecanismo'],
    ['Ramo descendente fino da alça é relativamente permeável à {{c1::água}}.', 'água', 1, 'mecanismo'],
    ['Ramo ascendente espesso é impermeável à água e reabsorve {{c1::NaCl}}.', 'NaCl', 2, 'mecanismo'],
    ['Multiplicação por contracorrente mantém gradiente osmótico {{c1::medular}}.', 'medular', 2, 'mecanismo'],
    ['ADH aumenta inserção de aquaporina 2 no ducto {{c1::coletor}}.', 'coletor', 2, 'mecanismo'],
    ['Aldosterona aumenta reabsorção de sódio no TCD e ducto {{c1::coletor}}.', 'coletor', 2, 'mecanismo'],
    ['A secreção de potássio aumenta quando o fluxo distal de sódio está {{c1::elevado}}.', 'elevado', 2, 'clinica'],
    ['Mácula densa detecta entrega de NaCl e modula tônus da arteríola {{c1::aferente}}.', 'aferente', 2, 'mecanismo'],
    ['Hipovolemia ativa sistema renina angiotensina {{c1::aldosterona}}.', 'aldosterona', 2, 'mecanismo'],
    ['SIADH cursa com incapacidade de excretar {{c1::água livre}}.', 'água livre', 2, 'clinica']
  ], [
    ['No ramo ascendente espesso o cotransportador chave é o {{c1::NKCC2}}.', 'NKCC2'],
    ['Reciclagem de ureia no coletor interno reforça hiperosmolaridade {{c1::medular}}.', 'medular']
  ]));

  blocks.push(...L('bmf3_a14', [
    ['Principal tampão plasmático no curto prazo é o sistema {{c1::bicarbonato}}.', 'bicarbonato', 1, 'definicao'],
    ['No túbulo proximal a maior parte do bicarbonato é {{c1::reabsorvida}}.', 'reabsorvida', 1, 'mecanismo'],
    ['A secreção tubular de íons H permite excreção de ácidos {{c1::fixos}}.', 'fixos', 2, 'mecanismo'],
    ['Amônio urinário aumenta na adaptação renal à {{c1::acidose}} crônica.', 'acidose', 2, 'mecanismo'],
    ['Compensação respiratória da acidose metabólica ocorre por {{c1::hiperventilação}}.', 'hiperventilação', 1, 'mecanismo'],
    ['Na alcalose metabólica a compensação esperada tende à {{c1::hipoventilação}} relativa.', 'hipoventilação', 2, 'mecanismo'],
    ['Acidose respiratória crônica eleva bicarbonato por compensação {{c1::renal}}.', 'renal', 2, 'diferenciacao'],
    ['Ânion gap elevado sugere acúmulo de ácido láctico ou {{c1::cetoácidos}}.', 'cetoácidos', 2, 'diferenciacao'],
    ['Acidúria paradoxal pode ocorrer em alcalose metabólica com depleção de {{c1::volume}}.', 'volume', 2, 'clinica'],
    ['A enzima tubular que acelera equilíbrio CO2 H2O H2CO3 é anidrase {{c1::carbônica}}.', 'carbônica', 2, 'prova']
  ], [
    ['A acidose metabólica com lactato elevado costuma cursar com ânion gap {{c1::alto}}.', 'alto'],
    ['No tampão fosfato urinário o aceptor principal de H é o {{c1::HPO4}}.', 'HPO4']
  ]));

  blocks.push(...L('bmf3_a15', [
    ['A medula suprarrenal secreta principalmente {{c1::catecolaminas}}.', 'catecolaminas', 1, 'definicao'],
    ['Do exterior para dentro a zona mais superficial é {{c1::glomerulosa}}.', 'glomerulosa', 1, 'definicao'],
    ['A zona fasciculada produz predominantemente {{c1::glicocorticoides}}.', 'glicocorticoides', 1, 'definicao'],
    ['A zona reticular produz {{c1::androgênios}} adrenais fracos.', 'androgênios', 1, 'definicao'],
    ['Irrigação inclui ramos diretos da {{c1::aorta}} e frênicas.', 'aorta', 2, 'definicao'],
    ['A veia suprarrenal esquerda costuma drenar na {{c1::renal}} esquerda.', 'renal', 2, 'definicao'],
    ['Cromafins da medula derivam da crista {{c1::neural}}.', 'neural', 2, 'mecanismo'],
    ['A suprarrenal situa-se céfalo medial ao {{c1::rim}}.', 'rim', 1, 'definicao'],
    ['Fibras simpáticas pré-ganglionares seguem esplâncnico {{c1::maior}}.', 'maior', 2, 'definicao'],
    ['A suprarrenal direita desemboca frequentemente na {{c1::veia cava inferior}}.', 'veia cava inferior', 2, 'definicao']
  ], [
    ['A camada córtical mais interna adjacente à medula é zona {{c1::reticular}}.', 'reticular'],
    ['A aldosterona é sintetizada principalmente na zona {{c1::glomerulosa}}.', 'glomerulosa']
  ]));

  blocks.push(...L('bmf3_a16', [
    ['O glicocorticóide circulante mais abundante é o {{c1::cortisol}}.', 'cortisol', 1, 'definicao'],
    ['Ritmo do cortisol segue eixo {{c1::hipotálamo-hipófise-adrenal}}.', 'hipotálamo-hipófise-adrenal', 1, 'mecanismo'],
    ['Aldosterona regula sódio e potássio via canais epiteliais e {{c1::Na-K-ATPase}}.', 'Na-K-ATPase', 2, 'mecanismo'],
    ['Medula secreta epinefrina e norepinefrina como {{c1::catecolaminas}}.', 'catecolaminas', 1, 'definicao'],
    ['Androgênios adrenais convertem-se perifericamente em {{c1::testosterona}} ativa.', 'testosterona', 2, 'mecanismo'],
    ['Insuficiência adrenal autoimune costuma faltar cortisol e {{c1::aldosterona}}.', 'aldosterona', 2, 'clinica'],
    ['Uso crônico exógeno de {{c1::glicocorticoides}} causa síndrome de Cushing iatrogênica.', 'glicocorticoides', 1, 'clinica'],
    ['Feocromocitoma hipersecreta {{c1::catecolaminas}} e causa crises hipertensivas.', 'catecolaminas', 2, 'clinica'],
    ['Cortisol plasmático liga-se muito à {{c1::CBG}}.', 'CBG', 2, 'mecanismo'],
    ['ACTH estimula intensamente a zona {{c1::fasciculada}}.', 'fasciculada', 2, 'prova']
  ], [
    ['PNMT na medula converte noradrenalina em adrenalina dependendo de {{c1::cortisol}} local.', 'cortisol'],
    ['Marcador laboratorial de androgênio adrenal é {{c1::DHEA-sulfato}}.', 'DHEA-sulfato']
  ]));

  blocks.push(...L('bmf3_a17', [
    ['Espermatogênese ocorre nos {{c1::túbulos seminíferos}}.', 'túbulos seminíferos', 1, 'definicao'],
    ['Células de {{c1::Sertoli}} sustentam barreira hematotesticular.', 'Sertoli', 1, 'definicao'],
    ['Células de {{c1::Leydig}} produzem testosterona.', 'Leydig', 1, 'definicao'],
    ['FSH estimula Sertoli para maturação {{c1::espermatogênese}}.', 'espermatogênese', 2, 'mecanismo'],
    ['LH liga-se a Leydig aumentando {{c1::testosterona}}.', 'testosterona', 1, 'mecanismo'],
    ['Espermiogênese finaliza diferenciação do {{c1::espermatozoide}}.', 'espermatozoide', 2, 'mecanismo'],
    ['Inibina B reduz feedback sobre {{c1::FSH}}.', 'FSH', 2, 'mecanismo'],
    ['Criptorquidia aumenta risco de tumor {{c1::testicular}}.', 'testicular', 2, 'clinica'],
    ['Maturação espermática prossegue no {{c1::epidídimo}}.', 'epidídimo', 1, 'definicao'],
    ['Junções ocludentes entre Sertoli formam barreira {{c1::hematotesticular}}.', 'hematotesticular', 2, 'prova']
  ], [
    ['Junções ocludentes usam proteínas como {{c1::occludina}}.', 'occludina'],
    ['DHT gera-se localmente por 5-alfa-redutase a partir de {{c1::testosterona}}.', 'testosterona']
  ]));

  blocks.push(...L('bmf3_a18', [
    ['Camada funcional do útero é o {{c1::endométrio}}.', 'endométrio', 1, 'definicao'],
    ['Folículos crescem no {{c1::ovário}} cortical.', 'ovário', 1, 'definicao'],
    ['Fase proliferativa espessa endométrio sob {{c1::estradiol}}.', 'estradiol', 2, 'mecanismo'],
    ['Corpo lúteo secreta {{c1::progesterona}} na fase secretora.', 'progesterona', 1, 'mecanismo'],
    ['Queda abrupta de progesterona inicia {{c1::menstruação}}.', 'menstruação', 1, 'mecanismo'],
    ['Estroma basal persistente é {{c1::basalis}} endometrial.', 'basalis', 2, 'definicao'],
    ['Pico de LH desencadeia {{c1::ovulação}}.', 'ovulação', 1, 'mecanismo'],
    ['Endométrio secretor mostra glândulas tortuosas em {{c1::serpentina}}.', 'serpentina', 2, 'definicao'],
    ['Miométrio tricamado tem camada circular {{c1::intermédia}} espessa.', 'intermédia', 2, 'definicao'],
    ['Implantação inicial ocorre tipicamente na parede do {{c1::útero}}.', 'útero', 2, 'clinica']
  ], [
    ['Estroma pré-decidual reage à {{c1::progesterona}} na segunda fase.', 'progesterona'],
    ['Arteríolas espiraladas remodelam-se com invasão {{c1::trofoblástica}}.', 'trofoblástica']
  ]));

  blocks.push(...L('bmf3_a19', [
    ['Espermatogônias do tipo {{c1::A}} mantêm o pool germinativo testicular.', 'A', 1, 'mecanismo'],
    ['Espermatócito primário gera espermatócitos secundários após {{c1::meiose I}}.', 'meiose I', 2, 'mecanismo'],
    ['A {{c1::meiose II}} dos espermatócitos secundários origina espermátides haploides.', 'meiose II', 2, 'mecanismo'],
    ['O ovócito primário fica bloqueado em prófase da meiose {{c1::I}}.', 'I', 2, 'diferenciacao'],
    ['Ovócito secundário é ovulado em metáfase da meiose {{c1::II}}.', 'II', 2, 'prova'],
    ['A conclusão da meiose II feminina ocorre somente após {{c1::fecundação}}.', 'fecundação', 2, 'mecanismo'],
    ['Na ovogênese a citocinese desigual forma {{c1::corpo polar}} com pouco citoplasma.', 'corpo polar', 2, 'mecanismo'],
    ['A aromatase da granulosa converte andrógenos da teca em {{c1::estrógeno}}.', 'estrógeno', 2, 'mecanismo'],
    ['O {{c1::acrossomo}} contém enzimas necessárias para penetrar a zona pelúcida.', 'acrossomo', 2, 'definicao'],
    ['A recombinação genética entre homólogos ocorre no {{c1::crossing over}}.', 'crossing over', 2, 'definicao']
  ], [
    ['A espermatogênese completa dura aproximadamente {{c1::74 dias}}.', '74 dias'],
    ['A maioria dos folículos ovarianos sofre {{c1::atresia}} ao longo da vida reprodutiva.', 'atresia']
  ]));

  blocks.push(...L('bmf3_a20', [
    ['O eixo {{c1::HPO}} integra hipotálamo hipófise e ovário.', 'HPO', 1, 'definicao'],
    ['Pulsos de GnRH estimulam secreção de {{c1::FSH}} e LH.', 'FSH', 1, 'mecanismo'],
    ['O surto pré-ovulatório de {{c1::LH}} desencadeia ruptura folicular.', 'LH', 2, 'mecanismo'],
    ['A fase {{c1::folicular}} acompanha endométrio proliferativo.', 'folicular', 1, 'definicao'],
    ['A fase {{c1::lútea}} é dominada pela progesterona do corpo lúteo.', 'lútea', 1, 'definicao'],
    ['Concentração sustentada de estradiol produz retrocontrole {{c1::positivo}} no eixo.', 'positivo', 2, 'diferenciacao'],
    ['A progesterona transforma o endométrio em padrão {{c1::secretor}}.', 'secretor', 2, 'mecanismo'],
    ['A regressão do corpo lúteo reduz esteroides e inicia {{c1::menstruação}}.', 'menstruação', 1, 'mecanismo'],
    ['A inibina B da granulosa reduz principalmente secreção de {{c1::FSH}}.', 'FSH', 2, 'mecanismo'],
    ['Na gravidez inicial o hCG mantém o {{c1::corpo lúteo}} funcional.', 'corpo lúteo', 2, 'clinica']
  ], [
    ['O pico de LH costuma anteceder a ovulação em torno de {{c1::36 horas}}.', '36 horas'],
    ['A fase lútea costuma durar aproximadamente {{c1::14 dias}} em ciclos ovulatórios.', '14 dias']
  ]));

  blocks.push(...L('bmf3_a21', [
    ['A fecundação ocorre tipicamente na ampola da {{c1::tuba uterina}}.', 'tuba uterina', 1, 'definicao'],
    ['Capacitação espermática precede a reação {{c1::acrossômica}}.', 'acrossômica', 2, 'mecanismo'],
    ['Enzimas acrossômicas permitem atravessar a {{c1::zona pelúcida}}.', 'zona pelúcida', 2, 'mecanismo'],
    ['Após fusão dos gametas, a reação cortical bloqueia {{c1::poliespermia}}.', 'poliespermia', 2, 'mecanismo'],
    ['A união dos pronúcleos forma o {{c1::zigoto}} diploide.', 'zigoto', 1, 'definicao'],
    ['A {{c1::mórula}} surge por clivagens antes da cavitação blastocística.', 'mórula', 2, 'mecanismo'],
    ['O {{c1::blastocisto}} contém massa celular interna e trofoblasto.', 'blastocisto', 1, 'definicao'],
    ['A implantação inicia-se no endométrio em estado {{c1::secretor}}.', 'secretor', 2, 'mecanismo'],
    ['O sinciciotrofoblasto produz {{c1::hCG}} nas primeiras semanas.', 'hCG', 2, 'clinica'],
    ['A janela endometrial de receptividade ocorre por volta do sétimo dia pós {{c1::ovulação}}.', 'ovulação', 2, 'prova']
  ], [
    ['A eclosão do blastocisto para implantar-se chama-se {{c1::hatching}}.', 'hatching'],
    ['Implantação ectópica mais comum ocorre na porção {{c1::ampular}} da tuba.', 'ampular']
  ]));

  blocks.push(...L('bmf3_a22', [
    ['Contrações de parto aumentam com ação uterina da {{c1::ocitocina}}.', 'ocitocina', 1, 'mecanismo'],
    ['{{c1::Prostaglandinas}} participam da maturação cervical e do aumento do tônus uterino.', 'Prostaglandinas', 1, 'mecanismo'],
    ['Distensão do colo reforça liberação de ocitocina no reflexo de {{c1::Ferguson}}.', 'Ferguson', 2, 'mecanismo'],
    ['A prolactina da adeno-hipófise estimula síntese de {{c1::leite}}.', 'leite', 1, 'mecanismo'],
    ['A ejeção láctea depende de contração mioepitelial mediada por {{c1::ocitocina}}.', 'ocitocina', 2, 'mecanismo'],
    ['A sucção no mamilo eleva rapidamente secreção de {{c1::prolactina}}.', 'prolactina', 2, 'mecanismo'],
    ['O segundo período do parto termina com a {{c1::expulsão}} fetal.', 'expulsão', 1, 'definicao'],
    ['A dequitação corresponde à saída da {{c1::placenta}} no terceiro período.', 'placenta', 1, 'definicao'],
    ['No puerpério imediato o controle de sangramento depende de boa {{c1::contração}} uterina.', 'contração', 2, 'clinica'],
    ['A lactação exclusiva reduz pulsos de GnRH e pode cursar com {{c1::amenorreia}}.', 'amenorreia', 2, 'clinica']
  ], [
    ['A primeira secreção rica em IgA chama-se {{c1::colostro}}.', 'colostro'],
    ['A queda de progesterona após a dequitação favorece início da {{c1::lactogênese}}.', 'lactogênese']
  ]));

  return blocks;
}

module.exports = { buildBmf3 };
