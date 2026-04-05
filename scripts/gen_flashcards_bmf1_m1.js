/**
 * Gera 12 flashcards/aula para BMF1 (módulo 1) — 17 aulas teóricas.
 * Proporção: 10 origem material + 2 extra (livro/guideline quando necessário).
 * Executar: node scripts/gen_flashcards_bmf1_m1.js
 */
const fs = require('fs');
const path = require('path');

const OUT = path.join(__dirname, '..', 'data', 'flashcards.json');

function card(materia, tema, frente, verso, explicacao, categoria, origem, tags) {
  return {
    materia,
    tema,
    frente,
    verso,
    explicacao: explicacao || '',
    dificuldade: 2,
    categoria,
    origem,
    tags: tags || [],
  };
}

// Cada entrada: 10× material + 2× extra (ordem: m×10, e×2)
const LOTS = [
  // bmf1_a1
  [
    card('bmf1', 'bmf1_a1', 'O plano sagital divide o corpo em que regiões?', 'Metade esquerda e metade direita.', '', 'definicao', 'material', ['planos', 'sagital']),
    card('bmf1', 'bmf1_a1', 'O plano coronal (frontal) separa o que?', 'Porções anterior e posterior.', '', 'definicao', 'material', ['planos', 'coronal']),
    card('bmf1', 'bmf1_a1', 'O plano axial (transverso) divide em que sentido?', 'Superior e inferior.', '', 'definicao', 'material', ['planos', 'axial']),
    card('bmf1', 'bmf1_a1', 'Na posição anatômica de referência, como ficam as palmas?', 'Para frente (anteriormente).', 'Base para medial/lateral e termos direcionais.', 'prova', 'material', ['posicao-anatomica']),
    card('bmf1', 'bmf1_a1', '“Medial” indica movimento em relação a quê?', 'Em direção à linha média do corpo.', '', 'definicao', 'material', ['termos-direcionais']),
    card('bmf1', 'bmf1_a1', 'Em membros, “proximal” significa o quê?', 'Mais próximo da inserção ao tronco.', '', 'definicao', 'material', ['proximal', 'distal']),
    card('bmf1', 'bmf1_a1', 'Flexão e extensão em cotovelo/joelho predominam em qual eixo?', 'Eixo sagital (transverso anteroposterior).', '', 'prova', 'material', ['movimentos', 'eixos']),
    card('bmf1', 'bmf1_a1', 'Circundução no ombro é um movimento único isolado?', 'Não — combina flexão, abdução, extensão e adução em sequência.', 'Pegadinha clássica de prova.', 'prova', 'material', ['circunducao', 'ombro']),
    card('bmf1', 'bmf1_a1', 'Onde se localiza a fossa poplítea?', 'Região posterior do joelho.', '', 'clinica', 'material', ['regioes', 'joelho']),
    card('bmf1', 'bmf1_a1', 'Por que evitar massagem bilateral simultânea no trígono carotídeo?', 'Risco de hipoperfusão cerebral por compressão bilateral.', '', 'clinica', 'material', ['pulsos', 'seguranca']),
    card('bmf1', 'bmf1_a1', 'Em neuroanatomia, “rostral” e “caudal” substituem proximal/distal em qual contexto?', 'Ao longo do eixo do neuráxis (encéfalo/medula).', 'Complemento a livros-base de anatomia.', 'extra_livro', 'extra', ['neuroanatomia', 'eixos']),
    card('bmf1', 'bmf1_a1', 'Em decúbito ventral, a face “anterior” do joelho permanece qual?', 'A face patelar (não inverte com a gravidade).', 'Confunde com mudança de posição do paciente.', 'prova', 'extra', ['decubito', 'joelho']),
  ],
  // bmf1_a2
  [
    card('bmf1', 'bmf1_a2', 'Quais são os quatro tecidos básicos do organismo?', 'Epitelial, conjuntivo, muscular e nervoso.', '', 'definicao', 'material', ['tecidos-basicos']),
    card('bmf1', 'bmf1_a2', 'Função central do epitélio de revestimento?', 'Revestir, secretar e absorver — polaridade apical-basal.', '', 'definicao', 'material', ['epitelio']),
    card('bmf1', 'bmf1_a2', 'O que caracteriza o tecido conjuntivo em relação ao epitélio?', 'Matriz extracelular abundante; células menos densas.', '', 'diferenciacao', 'material', ['conjuntivo', 'matriz']),
    card('bmf1', 'bmf1_a2', 'Endotélio vascular e alvéolos pulmonares: epitélio típico?', 'Escamoso simples.', '', 'prova', 'material', ['epitelio', 'classificacao']),
    card('bmf1', 'bmf1_a2', 'Traqueia com cílios: tipo de epitélio?', 'Pseudocolumnar estratificado (pseudostratificado).', '', 'definicao', 'material', ['traqueia', 'cilios']),
    card('bmf1', 'bmf1_a2', 'Colágeno tipo I versus tipo III na cicatrização?', 'III na granulação inicial; I predomina na cicatriz madura.', '', 'mecanismo', 'material', ['colageno', 'cicatriz']),
    card('bmf1', 'bmf1_a2', 'Músculo esquelético: estriações e núcleos?', 'Estriado; núcleos múltiplos periféricos.', '', 'diferenciacao', 'material', ['musculo-esqueletico']),
    card('bmf1', 'bmf1_a2', 'Músculo cardíaco: como são os núcleos e as células?', 'Estriado; células ramificadas com disco intercalado; núcleo central.', '', 'diferenciacao', 'material', ['musculo-cardiaco']),
    card('bmf1', 'bmf1_a2', 'Quem produz mielina no SNC e no SNP?', 'Oligodendrócito (SNC) e célula de Schwann (SNP).', '', 'prova', 'material', ['mielina', 'neuroglia']),
    card('bmf1', 'bmf1_a2', 'Metaplasia é o mesmo que displasia?', 'Não — metaplasia é substituição de um epitélio maduro por outro; displasia é desorganização/neoplasia in situ.', 'Pegadinha frequente.', 'diferenciacao', 'material', ['metaplasia', 'displasia']),
    card('bmf1', 'bmf1_a2', 'Reticular (rede de colágeno III) predomina onde em prova?', 'Estroma de órgãos hematopoéticos (ex.: medula óssea).', 'Atlas de histologia (Junqueira).', 'extra_livro', 'extra', ['reticulina', 'medula']),
    card('bmf1', 'bmf1_a2', 'Fase proliferativa da cicatrização: o que predomina?', 'Fibroblastos, neoangiogênese e colágeno tipo III (granulação).', '', 'mecanismo', 'extra', ['cicatrizacao', 'granulacao']),
  ],
  // bmf1_a3
  [
    card('bmf1', 'bmf1_a3', 'Além de suporte, cite duas funções do esqueleto.', 'Proteção de órgãos; alavancas musculares; hematopoiese; reserva mineral.', 'Qualquer duas do material.', 'definicao', 'material', ['esqueleto', 'funcoes']),
    card('bmf1', 'bmf1_a3', 'Esqueleto axial inclui o quê?', 'Crânio, coluna, tórax (esterno e costelas), hióide.', '', 'definicao', 'material', ['axial', 'apendicular']),
    card('bmf1', 'bmf1_a3', 'Exemplo de osso longo, curto e plano.', 'Longo: fêmur; curto: carpos; plano: escápula.', '', 'prova', 'material', ['classificacao-ossea']),
    card('bmf1', 'bmf1_a3', 'Onde está a cartilagem de crescimento na criança?', 'Na metáfise (placa epifisária entre epífise e diáfise).', '', 'clinica', 'material', ['fise', 'pediatria']),
    card('bmf1', 'bmf1_a3', 'Compacta versus esponjosa: resistência mecânica?', 'Compacta: torção/flexão cortical; esponjosa: trabéculas segundo linhas de tensão.', '', 'diferenciacao', 'material', ['osso', 'microarquitetura']),
    card('bmf1', 'bmf1_a3', 'Lei de Wolff resume-se em uma frase.', 'O osso remodela forma e densidade conforme cargas mecânicas.', '', 'mecanismo', 'material', ['lei-wolff']),
    card('bmf1', 'bmf1_a3', 'Ossificação endocondral versus intramembranosa?', 'Endocondral: substitui modelo cartilaginoso (maioria dos ossos longos). Intramembranosa: ossifica mesênquima direto (ex.: vários ossos do crânio).', '', 'diferenciacao', 'material', ['ossificacao']),
    card('bmf1', 'bmf1_a3', 'Fratura Salter-Harris envolve qual estrutura?', 'Placa epifisária — risco de alterar crescimento.', '', 'clinica', 'material', ['salter-harris', 'crianca']),
    card('bmf1', 'bmf1_a3', 'Quantos ossos no adulto (contagem clássica)?', '206 (com variações normais de sesamóides e suturas).', '', 'prova', 'material', ['numeros', 'adulto']),
    card('bmf1', 'bmf1_a3', 'Sesamóide clássico do joelho?', 'Patela.', '', 'definicao', 'material', ['patela', 'sesamoide']),
    card('bmf1', 'bmf1_a3', 'Por que metástases osteolíticas podem doer antes da cortical romper?', 'Trabéculas esponjosas são atacadas primeiro.', 'Raciocínio clínico-radiológico.', 'clinica', 'extra', ['metastase', 'osso']),
    card('bmf1', 'bmf1_a3', 'PTH e calcitonina: efeito rápido na reabsorção óssea?', 'PTH aumenta reabsorção osteoclástica; calcitonina reduz (visão fisiológica de prova).', 'Guyton/Costanzo — quadro geral.', 'mecanismo', 'extra', ['pth', 'osso']),
  ],
  // bmf1_a4
  [
    card('bmf1', 'bmf1_a4', 'Colágeno tipo I predomina onde?', 'Derme, tendão, osso — resistência à tração.', '', 'definicao', 'material', ['colageno-i']),
    card('bmf1', 'bmf1_a4', 'Reticulina corresponde principalmente a qual colágeno?', 'Tipo III — estroma fetal e granulação.', '', 'prova', 'material', ['colageno-iii']),
    card('bmf1', 'bmf1_a4', 'Papel do mastócito no tecido conjuntivo?', 'Libera histamina e mediadores (alergia, anafilaxia).', '', 'mecanismo', 'material', ['mastocito']),
    card('bmf1', 'bmf1_a4', 'Conjuntivo denso regular versus irregular?', 'Regular: fibras paralelas (tendão); irregular: multidirecional (derme reticular).', '', 'diferenciacao', 'material', ['denso', 'frouxo']),
    card('bmf1', 'bmf1_a4', 'Sangue é tecido conjuntivo?', 'Sim — células em plasma como matriz fluida (classificação clássica).', 'Pegadinha.', 'prova', 'material', ['sangue', 'classificacao']),
    card('bmf1', 'bmf1_a4', 'Miofibroblasto: função?', 'Contrai ferida e deposita matriz — retratação cicatricial.', '', 'mecanismo', 'material', ['miofibroblasto']),
    card('bmf1', 'bmf1_a4', 'Na granulação, qual colágeno predomina primeiro?', 'Tipo III; depois remodela para tipo I.', '', 'mecanismo', 'material', ['granulacao']),
    card('bmf1', 'bmf1_a4', 'GAGs e proteoglicanos na matriz: função mecânica?', 'Hidratação e resistência à compressão (ex.: cartilagem).', '', 'mecanismo', 'material', ['gags']),
    card('bmf1', 'bmf1_a4', 'Queloide versus hipertrofia: diferença conceitual?', 'Ambos têm excesso de colágeno; queloide ultrapassa margens da lesão.', '', 'diferenciacao', 'material', ['queloide']),
    card('bmf1', 'bmf1_a4', 'Desmoplasia tumoral refere-se a quê?', 'Estroma denso reacional ao redor do tumor (fibrose).', '', 'clinica', 'material', ['cancer', 'estroma']),
    card('bmf1', 'bmf1_a4', 'Elastina: propriedade principal?', 'Recoil elástico após distensão (pele, artérias).', 'Junqueira/Ross.', 'definicao', 'extra', ['elastina']),
    card('bmf1', 'bmf1_a4', 'Substância fundamental + fibras = o quê na definição de matriz?', 'Componentes que definem propriedades mecânicas do conjuntivo.', '', 'definicao', 'extra', ['matriz-extracelular']),
  ],
  // bmf1_a5
  [
    card('bmf1', 'bmf1_a5', 'Unidade funcional do osso compacto?', 'Osteon (sistema de Havers).', '', 'definicao', 'material', ['osteon', 'havers']),
    card('bmf1', 'bmf1_a5', 'Osteoblasto, osteócito e osteoclasto: papéis?', 'Osteoblasto forma matriz; osteócito é osteoblasto maduro na lacuna; osteoclasto reabsorve.', '', 'diferenciacao', 'material', ['celulas-osseas']),
    card('bmf1', 'bmf1_a5', 'Diferença modelagem versus remodelação óssea?', 'Modelagem altera forma global no desenvolvimento; remodelação troca tecido sem mudar forma externa aparente.', '', 'diferenciacao', 'material', ['remodelacao']),
    card('bmf1', 'bmf1_a5', 'Medula óssea vermelha versus amarela no adulto?', 'Vermelha: hematopoiese (epífises, ossos planos); amarela: gordura na diáfise dos longos.', '', 'diferenciacao', 'material', ['medula-ossea']),
    card('bmf1', 'bmf1_a5', 'Matriz orgânica versus inorgânica do osso?', 'Orgânica: colágeno I (tração); inorgânica: hidroxiapatita (rigidez à compressão).', '', 'mecanismo', 'material', ['matriz-ossea']),
    card('bmf1', 'bmf1_a5', 'Osteomalácia: problema na mineralização?', 'Matriz orgânica persiste com mineralização deficiente.', '', 'clinica', 'material', ['osteomalacia']),
    card('bmf1', 'bmf1_a5', 'Sequência geral de consolidação de fratura?', 'Hematoma → granulação/calo fibrocartilaginoso → calo ósseo → remodelação.', '', 'mecanismo', 'material', ['fratura', 'consolidacao']),
    card('bmf1', 'bmf1_a5', 'Canal de Volkmann liga o quê?', 'Canais de Havers entre si e à superfície (vasos).', '', 'definicao', 'material', ['volkmann', 'havers']),
    card('bmf1', 'bmf1_a5', 'Placa epifisária: zonas na ordem do crescimento em comprimento?', 'Reserva → proliferação → hipertrofia → calcificação → ossificação.', '', 'prova', 'material', ['placa-epifisaria']),
    card('bmf1', 'bmf1_a5', 'Osteoporose: alteração principal?', 'Perda de massa óssea com arquitetura mais porosa (não “desmineralização só” como osteomalácia).', '', 'diferenciacao', 'material', ['osteoporose']),
    card('bmf1', 'bmf1_a5', 'PTH na fisiologia óssea: efeito clássico na reabsorção?', 'Aumenta reabsorção osteoclástica (com vitamina D ativa aumenta absorção intestinal de Ca).', 'Quadro de livro-texto.', 'mecanismo', 'extra', ['pth', 'osso']),
    card('bmf1', 'bmf1_a5', 'Hipertermia maligna: vínculo com anatomia/fisiologia muscular/óssea?', 'Mutação no receptor de rianodina → Ca²⁺ descontrolado do retículo (contexto anestésico).', 'Bridge fisiologia — mencionado no material BMF muscular.', 'clinica', 'extra', ['rianodina', 'anestesia']),
  ],
  // bmf1_a7
  [
    card('bmf1', 'bmf1_a7', 'Três famílias de articulações por tecido de união?', 'Fibrosa, cartilaginosa e sinovial.', '', 'definicao', 'material', ['articulacoes']),
    card('bmf1', 'bmf1_a7', 'Articulação sinovial: componentes essenciais?', 'Cartilagem articular, cápsula, membrana sinovial, líquido sinovial.', '', 'definicao', 'material', ['sinovial']),
    card('bmf1', 'bmf1_a7', 'Cotovelo: classificação funcional sinovial?', 'Dobradiça (ginglimo) — flexão/extensão.', '', 'prova', 'material', ['cotovelo', 'dobradica']),
    card('bmf1', 'bmf1_a7', 'Ombro e quadril: tipo sinovial?', 'Esferóide (multiaxial).', '', 'definicao', 'material', ['ombro', 'quadril']),
    card('bmf1', 'bmf1_a7', 'Articulação atlantoaxial (dens): tipo?', 'Pivô (trocoide) — rotação.', '', 'prova', 'material', ['atlantoaxial']),
    card('bmf1', 'bmf1_a7', 'Joelho: meniscos são cartilagem de que tipo?', 'Fibrocartilagem (resistência a compressão/cisalhamento).', '', 'diferenciacao', 'material', ['menisco', 'fibrocartilagem']),
    card('bmf1', 'bmf1_a7', 'Nutrição da cartilagem articular hialina?', 'Por difusão a partir do líquido sinovial (avascular).', '', 'mecanismo', 'material', ['cartilagem-articular']),
    card('bmf1', 'bmf1_a7', 'Comparar estabilidade ombro vs quadril.', 'Ombro: mais mobilidade, menos estabilidade; quadril: cabeça profunda, mais estável.', '', 'diferenciacao', 'material', ['ombro', 'quadril']),
    card('bmf1', 'bmf1_a7', 'Líquido sinovial: composição em linhas?', 'Ultrafiltrado do plasma + hialuronato (lubrificação).', '', 'mecanismo', 'material', ['liquido-sinovial']),
    card('bmf1', 'bmf1_a7', 'Luxação glenoumeral anterior: estrutura associada?', 'Lesão de labrum (ex.: Bankart) é padrão clássico.', '', 'clinica', 'material', ['luxacao', 'bankart']),
    card('bmf1', 'bmf1_a7', 'Sindesmose tibiofibular distal é articulação de qual família?', 'Fibrosa.', '', 'definicao', 'extra', ['sindesmose']),
    card('bmf1', 'bmf1_a7', 'O que é articulação selar e exemplo?', 'Permite oposição do polegar — 1ª metacarpofalangeana.', 'Moore/Netter — nomenclatura.', 'prova', 'extra', ['selar', 'polegar']),
  ],
  // bmf1_a8
  [
    card('bmf1', 'bmf1_a8', 'Por que a cartilagem madura tem reparo limitado?', 'Avascular e, na maior parte, anéural — troca por difusão.', '', 'mecanismo', 'material', ['cartilagem', 'reparo']),
    card('bmf1', 'bmf1_a8', 'Colágeno predominante na cartilagem hialina adulta?', 'Tipo II (com isoformas IX e XI na rede).', '', 'prova', 'material', ['colageno-ii']),
    card('bmf1', 'bmf1_a8', 'Onde predomina fibrocartilagem no aparelho locomotor?', 'Meniscos, anel de disco IV, sínfises, inserções tendíneas.', '', 'definicao', 'material', ['fibrocartilagem']),
    card('bmf1', 'bmf1_a8', 'Cartilagem elástica: exemplos anatômicos?', 'Pavilhão auricular, epiglote, tubas auditivas.', '', 'definicao', 'material', ['cartilagem-elastic']),
    card('bmf1', 'bmf1_a8', 'Crescimento aposicional versus intersticial?', 'Aposicional: pericôndrio acrescenta camadas; intersticial: proliferação dentro da matriz (epífise).', '', 'diferenciacao', 'material', ['crescimento-cartilagem']),
    card('bmf1', 'bmf1_a8', 'Território capsular versus intersticial no corte?', 'Capsular perilacunar mais basófilo; intersticial entre grupos isogênicos.', '', 'prova', 'material', ['condrocito']),
    card('bmf1', 'bmf1_a8', 'Primeira alteração típima na osteoartrite em nível de matriz?', 'Perda de proteoglicanos/água antes do estreitamento radiológico tardio.', '', 'mecanismo', 'material', ['osteoartrite']),
    card('bmf1', 'bmf1_a8', 'Pericôndrio recobre a cartilagem exceto onde?', 'Superfície articular (lubrificada por líquido sinovial).', '', 'prova', 'material', ['pericondrio']),
    card('bmf1', 'bmf1_a8', 'Condromalácia patelar descreve o quê?', 'Amolecimento/degeneração da cartilagem patelar (gradações clínicas).', '', 'clinica', 'material', ['patela']),
    card('bmf1', 'bmf1_a8', 'Hérnia de disco envolve principalmente qual tecido?', 'Núcleo pulposo e anel fibroso (fibrocartilagem / mecânica de pressão).', '', 'clinica', 'material', ['disco', 'coluna']),
    card('bmf1', 'bmf1_a8', 'Aggrecan: função na cartilagem?', 'Proteoglicano de grande porte que retém água (compressão/resiliência).', 'Junqueira.', 'mecanismo', 'extra', ['aggrecan']),
    card('bmf1', 'bmf1_a8', 'Metacromasia em cartilagem relaciona-se a quê?', 'GAGs sulfatados na matriz (coração da coloração em lâmina).', 'Atlas de histologia.', 'prova', 'extra', ['metacromasia']),
  ],
  // bmf1_a10
  [
    card('bmf1', 'bmf1_a10', 'Endomísio, perimísio e epimísio: o que envolvem?', 'Fibra, fascículo e músculo inteiro, respectivamente.', '', 'definicao', 'material', ['envoltorios-musculares']),
    card('bmf1', 'bmf1_a10', 'Unidade motora: definição?', 'Um motoneurônio alfa e todas as fibras musculares que inerva.', '', 'definicao', 'material', ['unidade-motora']),
    card('bmf1', 'bmf1_a10', 'Músculo fusiforme versus pennado: trade-off?', 'Fusiforme: mais excursionamento; pennado: mais força por área, menos excursionamento.', '', 'diferenciacao', 'material', ['pennado', 'forca']),
    card('bmf1', 'bmf1_a10', 'Sinergistas versus antagonistas?', 'Sinergistas cooperam na mesma ação; antagonistas oponhem movimentos.', '', 'definicao', 'material', ['sinergista']),
    card('bmf1', 'bmf1_a10', 'Fibras tipo I versus II (visão geral)?', 'Tipo I: oxidativas, mais resistentes à fadiga; tipo II: mais rápidas/força explosiva.', '', 'diferenciacao', 'material', ['fibras-musculares']),
    card('bmf1', 'bmf1_a10', 'Por que músculos biarticulares lesionam mais em alongamento rápido?', 'Mecânica de tensão em dois segmentos (ex.: isquiotibiais).', '', 'clinica', 'material', ['lesao-muscular']),
    card('bmf1', 'bmf1_a10', 'Aponeurose versus tendão?', 'Aponeurose: folha achatada; tendão: cordão denso.', '', 'diferenciacao', 'material', ['aponeurose']),
    card('bmf1', 'bmf1_a10', 'Origem e inserção: o que importa clinicamente?', 'Qual extremidade se move em relação à outra na ação — não só posição anatômica nominal.', '', 'prova', 'material', ['origem-insercao']),
    card('bmf1', 'bmf1_a10', 'Compartimento muscular e fasciotomia: conceito anatômico?', 'Músculos em compartimentos limitados por fáscia — risco de síndrome compartimental se edema.', '', 'clinica', 'material', ['compartimento']),
    card('bmf1', 'bmf1_a10', 'Esfíncter: arquitetura muscular?', 'Circular ao redor de óstio (ex.: esfíncter anal).', '', 'definicao', 'material', ['esfincter']),
    card('bmf1', 'bmf1_a10', 'Lei do tamanho e velocidade em músculo pennado?', 'Mais fibras em paralelo ao eixo tendíneo → maior força isométrica; excursionamento útil menor.', 'Biomecânica básica (livro de morfofuncional).', 'mecanismo', 'extra', ['biomecanica']),
    card('bmf1', 'bmf1_a10', 'Atrofia por desnervação: nível da unidade motora afetada?', 'Todas as fibras do motoneurônio perdem inervação — padrão de falha por raiz/nervo.', 'Fisiologia aplicada.', 'clinica', 'extra', ['desnervacao']),
  ],
  // bmf1_a11
  [
    card('bmf1', 'bmf1_a11', 'Limite do sarcômero?', 'Discos Z.', '', 'definicao', 'material', ['sarcômero', 'disco-z']),
    card('bmf1', 'bmf1_a11', 'Banda A contém o quê em termos de filamentos?', 'Miosina e sobreposição com actina.', '', 'definicao', 'material', ['banda-a']),
    card('bmf1', 'bmf1_a11', 'Banda I: filamentos predominantes?', 'Só actina (filamentos finos).', '', 'definicao', 'material', ['banda-i']),
    card('bmf1', 'bmf1_a11', 'Túbulos T e retículo sarcoplasmático: função na contração?', 'Propagam despolarização; RS armazena e libera Ca²⁺.', '', 'mecanismo', 'material', ['tubulo-t', 'rs']),
    card('bmf1', 'bmf1_a11', 'Disco intercalado: estruturas e função?', 'Desmossomas (força) e junções comunicantes (propagação elétrica) entre cardiomiócitos.', '', 'mecanismo', 'material', ['disco-intercalado']),
    card('bmf1', 'bmf1_a11', 'Músculo liso: estriações ao microscópio óptico clássico?', 'Não — núcleo central, células fusiformes.', '', 'diferenciacao', 'material', ['musculo-liso']),
    card('bmf1', 'bmf1_a11', 'Placa motora: neurotransmissor e receptor?', 'Acetilcolina em receptores nicotínicos.', '', 'prova', 'material', ['placa-motora']),
    card('bmf1', 'bmf1_a11', 'Rabdomiólise libera principalmente o quê na circulação?', 'Mioglobina (e marcadores de lesão muscular).', '', 'clinica', 'material', ['rabdomiolise']),
    card('bmf1', 'bmf1_a11', 'Tipo I versus tipo II: fadiga?', 'Tipo I mais tardia; tipo II fadiga mais cedo em esforço máximo.', '', 'diferenciacao', 'material', ['tipo-i', 'tipo-ii']),
    card('bmf1', 'bmf1_a11', 'Linha H localiza-se onde?', 'Centro da banda A — região só de filamentos grossos (miosina).', '', 'prova', 'material', ['linha-h']),
    card('bmf1', 'bmf1_a11', 'Plexo mioentérico de Auerbach: localização?', 'Entre camadas longitudinal e circular da muscular externa — motilidade GI.', 'Sistema nervoso entérico (referência integrada).', 'definicao', 'extra', ['auerbach']),
    card('bmf1', 'bmf1_a11', 'Cor “escura” da carne vermelha relaciona-se a quê?', 'Mais mioglobina e mitocôndrias (fibras oxidativas).', 'Fisiologia muscular.', 'mecanismo', 'extra', ['mioglobina']),
  ],
  // bmf1_a12
  [
    card('bmf1', 'bmf1_a12', 'Teoria dos filamentos deslizantes: o que encurta no sarcômero?', 'A sobreposição actina-miosina — não o comprimento intrínseco dos filamentos.', '', 'mecanismo', 'material', ['filamentos-deslizantes']),
    card('bmf1', 'bmf1_a12', 'Ca²⁺ e troponina/tropomiosina: efeito?', 'Ca²⁺ liga troponina, move tropomiosina, expõe sítios da actina para miosina.', '', 'mecanismo', 'material', ['calcio', 'troponina']),
    card('bmf1', 'bmf1_a12', 'ATP no ciclo de ligação cruzada?', 'Hidrolisado pela cabeça da miosina para ciclos de movimento relativo.', '', 'mecanismo', 'material', ['atp', 'miosina']),
    card('bmf1', 'bmf1_a12', 'Diferença potencial de placa motora x potencial de ação da fibra?', 'Placa: evento local nicotínico; fibra: despolarização propagada na membrana.', 'Pegadinha clássica.', 'diferenciacao', 'material', ['placa-motora', 'pa']),
    card('bmf1', 'bmf1_a12', 'Liberação de Ca²⁺ do RS: canal principal citado?', 'Canal de rianodina (receptor de rianodina).', '', 'mecanismo', 'material', ['rianodina']),
    card('bmf1', 'bmf1_a12', 'Tétano somatétano: o que é?', 'Fusão de contrações parciais por alta frequência de disparo.', '', 'definicao', 'material', ['tetano']),
    card('bmf1', 'bmf1_a12', 'Contração excêntrica: característica de lesão?', 'Alongamento sob tensão — alto estresse estrutural (treino/lesão).', '', 'clinica', 'material', ['excentrica']),
    card('bmf1', 'bmf1_a12', 'Curva comprimento–tensão: por que há comprimento ótimo?', 'Máxima sobreposição eficaz actina-miosina para pontes cruzadas.', '', 'mecanismo', 'material', ['comprimento-tensao']),
    card('bmf1', 'bmf1_a12', 'Relaxamento: Ca²⁺ retorna onde?', 'Recaptado ao RS por bombas (consome ATP).', '', 'mecanismo', 'material', ['relaxamento']),
    card('bmf1', 'bmf1_a12', 'Bloqueadores não despolarizantes agem onde?', 'Competem com ACh no receptor nicotínico da placa — paralisia sem sedação.', '', 'clinica', 'material', ['bloqueio-neuromuscular']),
    card('bmf1', 'bmf1_a12', 'Hipertermia maligna: evento celular central?', 'Liberação descontrolada de Ca²⁺ do retículo (mutação em RYR1).', 'Farmacologia/anestesia — bridge do material.', 'clinica', 'extra', ['hipertermia-maligna']),
    card('bmf1', 'bmf1_a12', 'Recrutamento de unidades motoras: o que aumenta primeiro a força?', 'Recrutar mais unidades; depois aumentar frequência de disparo.', 'Fisiologia (Guyton/Costanzo).', 'mecanismo', 'extra', ['recrutamento']),
  ],
  // bmf1_a14
  [
    card('bmf1', 'bmf1_a14', 'Camadas da epiderme do superficial ao profundo (pele espessa)?', 'Córneo → granuloso → espinhoso → basal.', '', 'prova', 'material', ['epiderme', 'camadas']),
    card('bmf1', 'bmf1_a14', 'Por que a epiderme é avascular?', 'Nutrientes por difusão a partir da derme através da membrana basal.', '', 'mecanismo', 'material', ['epiderme', 'avascular']),
    card('bmf1', 'bmf1_a14', 'Melanócito: função?', 'Produz melanina e transfere a queratinócitos — proteção UV.', '', 'definicao', 'material', ['melanocito']),
    card('bmf1', 'bmf1_a14', 'Células de Langerhans: papel imune?', 'Apresentação antigênica na pele.', '', 'definicao', 'material', ['langerhans']),
    card('bmf1', 'bmf1_a14', 'Células de Merkel?', 'Mecanorrecepção.', '', 'definicao', 'material', ['merkel']),
    card('bmf1', 'bmf1_a14', 'Glândula sudorípara écrina versus apócrina: função típica?', 'Écrina: termorregulação ampla; apócrina: regiões específicas, odor após bactérias.', '', 'diferenciacao', 'material', ['sudor']),
    card('bmf1', 'bmf1_a14', 'Esôfago muscular: epitélio superficial?', 'Estratificado escamoso não queratinizado.', '', 'prova', 'material', ['esofago', 'epitelio']),
    card('bmf1', 'bmf1_a14', 'Papilas dérmicas: função?', 'Aumentam área de ancoragem e troca com epiderme.', '', 'mecanismo', 'material', ['papilas']),
    card('bmf1', 'bmf1_a14', 'Úlcera de pressão: fator mecânico central?', 'Isquemia prolongada sobre proeminências ósseas.', '', 'clinica', 'material', ['ulcera-pressao']),
    card('bmf1', 'bmf1_a14', 'Acne: eixo morfológico básico?', 'Folículo + glândula sebácea + ducto — óleo, obstrução, inflamação.', '', 'clinica', 'material', ['acne']),
    card('bmf1', 'bmf1_a14', 'Queratohialina acumula-se principalmente em qual camada?', 'Estrato granuloso.', 'Histologia de pele.', 'prova', 'extra', ['queratohialina']),
    card('bmf1', 'bmf1_a14', 'Desmossomas são mais evidentes em qual camada?', 'Estrato espinhoso (coesão mecânica).', '', 'definicao', 'extra', ['desmossomos']),
  ],
  // bmf1_a15
  [
    card('bmf1', 'bmf1_a15', 'Glândula exócrina versus endócrina?', 'Exócrina: com ducto até lúmen/superfície; endócrina: secreção na circulação.', '', 'diferenciacao', 'material', ['exocrina', 'endocrina']),
    card('bmf1', 'bmf1_a15', 'Secreção merócrina, apócrina e holócrina?', 'Merócrina: vesícula; apócrina: porção apical; holócrina: célula inteira (sebácea).', '', 'diferenciacao', 'material', ['modos-secrecao']),
    card('bmf1', 'bmf1_a15', 'Parótida: tipo de secreção predominante?', 'Serosa.', '', 'definicao', 'material', ['parotida']),
    card('bmf1', 'bmf1_a15', 'Submandibular: secreção?', 'Mista (serosa + mucosa).', '', 'definicao', 'material', ['submandibular']),
    card('bmf1', 'bmf1_a15', 'Sublingual: predominância?', 'Mucosa.', '', 'definicao', 'material', ['sublingual']),
    card('bmf1', 'bmf1_a15', 'Nervo facial (VII): relação cirúrgica clássica?', 'Atravessa a glândula parótida — risco em parotidectomia.', '', 'clinica', 'material', ['vii', 'parotida']),
    card('bmf1', 'bmf1_a15', 'Sialolitíase: sintoma típico à mastigação?', 'Dor cólica e inchaço ao comer (obstrução ductal).', '', 'clinica', 'material', ['sialolitíase']),
    card('bmf1', 'bmf1_a15', 'Arquitetura tubular versus acinar?', 'Tubular: tubos; acinar: sacos secretores; pode ser mista.', '', 'definicao', 'material', ['acino', 'tubular']),
    card('bmf1', 'bmf1_a15', 'Mama: drenagem macroscópica básica?', 'Lóbulos → ductos → papila.', '', 'mecanismo', 'material', ['mama', 'ductos']),
    card('bmf1', 'bmf1_a15', 'Capilares fenestrados em glândulas endócrinas: por quê?', 'Transporte rápido de hormônios ao sangue.', '', 'mecanismo', 'material', ['endocrino', 'capilares']),
    card('bmf1', 'bmf1_a15', 'Ducto de Wharton drena qual glândula?', 'Submandibular.', '', 'prova', 'extra', ['wharton']),
    card('bmf1', 'bmf1_a15', 'Ducto de Stensen?', 'Parótida.', '', 'prova', 'extra', ['stensen']),
  ],
  // bmf1_a17
  [
    card('bmf1', 'bmf1_a17', 'Nervo motor da língua?', 'Hipoglosso (XII).', '', 'prova', 'material', ['xii', 'lingua']),
    card('bmf1', 'bmf1_a17', 'Lesão de hipoglosso: para onde desvia a língua na protrusão?', 'Para o lado lesado.', '', 'clinica', 'material', ['hipoglosso']),
    card('bmf1', 'bmf1_a17', 'Sensibilidade geral da língua: nervo principal?', 'Trigêmeo (V) — não confundir com motor XII.', '', 'diferenciacao', 'material', ['trigemeo', 'lingua']),
    card('bmf1', 'bmf1_a17', 'Ducto de Stensen: trajeto clássico?', 'Atravessa o masseter até a cavidade oral.', '', 'definicao', 'material', ['stensen']),
    card('bmf1', 'bmf1_a17', 'Ducto de Wharton abre-se onde?', 'No assoalho da boca lateral ao frênulo (sublingual medial).', '', 'prova', 'material', ['wharton']),
    card('bmf1', 'bmf1_a17', 'Divisões da faringe em sequência crânio-caudal?', 'Nasofarínge, orofarínge, laringofarínge.', '', 'definicao', 'material', ['faringe']),
    card('bmf1', 'bmf1_a17', 'Palato duro versus mole na separação cavidades?', 'Duro: ósseo; mole: muscular — separa oral do nasofaríngeo posterior.', '', 'diferenciacao', 'material', ['palato']),
    card('bmf1', 'bmf1_a17', 'Músculos intrínsecos da língua alteram o quê?', 'Formato; extrínsecos movem a língua em relação ao hióide/crânio.', '', 'diferenciacao', 'material', ['lingua', 'musculos']),
    card('bmf1', 'bmf1_a17', 'Aspiração na deglutição relaciona-se a falha de quê?', 'Coordenação de fechamento laríngeo/elevação do palato mole e constritores.', '', 'clinica', 'material', ['degluticao', 'aspiracao']),
    card('bmf1', 'bmf1_a17', 'Parótida: nervo facial atravessa a glândula — implicação?', 'Risco de paralisia facial iatrogênica em cirurgia.', '', 'clinica', 'material', ['parotidectomia']),
    card('bmf1', 'bmf1_a17', 'Nervos IX e X no reflexo faríngeo: papel sensorial?', 'IX mais orofarínge superior; X amplia — integração do reflexo (detalhe de neuro).', 'Integração clínica.', 'prova', 'extra', ['glossofaringeo', 'vago']),
    card('bmf1', 'bmf1_a17', 'Ductos menores de Rivinus/Bartholin associam-se a qual glândula?', 'Sublingual (múltiplas aberturas).', '', 'prova', 'extra', ['sublingual', 'ductos']),
  ],
  // bmf1_a18
  [
    card('bmf1', 'bmf1_a18', 'Camadas da parede anterolateral (superficial → profundo)?', 'Pele, fáscia superficial, músculos (retos, oblíquos, transverso), fáscia transversal, peritônio parietal.', '', 'prova', 'material', ['parede-abdominal']),
    card('bmf1', 'bmf1_a18', 'Linha alba: utilidade cirúrgica citada?', 'Relativamente avascular para laparotomia mediana (com ressalvas).', '', 'clinica', 'material', ['linha-alba']),
    card('bmf1', 'bmf1_a18', 'Canal inguinal: conteúdo clássico no homem?', 'Cordão espermático (deferente + vasos) e estruturas de revestimento.', '', 'definicao', 'material', ['canal-inguinal']),
    card('bmf1', 'bmf1_a18', 'Hérnia inguinal direta versus indireta: âncora conceitual?', 'Relação com triângulo de Hasselbach e anel profundo (detalhe cirúrgico).', '', 'prova', 'material', ['hernia']),
    card('bmf1', 'bmf1_a18', 'Peritônio parietal versus visceral?', 'Parietal: parede; visceral: órgãos; potencial entre eles.', '', 'diferenciacao', 'material', ['peritonio']),
    card('bmf1', 'bmf1_a18', 'Pneumoperitônio livre na radiografia sugere?', 'Perfuração de víscera oca até cavidade peritoneal.', '', 'clinica', 'material', ['pneumoperitonio']),
    card('bmf1', 'bmf1_a18', 'Órgãos retroperitoneais: implicação de mobilidade?', 'Menor mobilidade que intraperitoneais — padrões de abscesso/drenagem diferem.', '', 'clinica', 'material', ['retroperitonio']),
    card('bmf1', 'bmf1_a18', 'Fáscia de Camper versus Scarpa (região anterolateral)?', 'Camper: gordura mais superficial; Scarpa: mais fibrosa inferiormente.', '', 'diferenciacao', 'material', ['fascias']),
    card('bmf1', 'bmf1_a18', 'Ligamento hepatoduodenal pertence a qual estrutura?', 'Borda livre do omento menor — triángulo de porta (vasos/bile duct).', '', 'prova', 'material', ['omentos']),
    card('bmf1', 'bmf1_a18', 'Mesentério do delgado ancora onde?', 'Raiz mesentérica perto do duodeno — fixação ampla das alças.', '', 'definicao', 'material', ['mesenterio']),
    card('bmf1', 'bmf1_a18', 'Triângulo de Hesselbach: relevância?', 'Ponto fraco da parede inguinal para hérnia direta (referência anatômica).', 'Anatomia cirúrgica.', 'prova', 'extra', ['hesselbach']),
    card('bmf1', 'bmf1_a18', 'Bainha do reto: composição?', 'Aponeuroses dos oblíquos e transverso ao redor do reto — suporte pélvico.', 'Atlas abdominal.', 'definicao', 'extra', ['bainha-retal']),
  ],
  // bmf1_a19
  [
    card('bmf1', 'bmf1_a19', 'Duodeno: relação com pâncreas?', 'Envolve a cabeça do pâncreas em “C”.', '', 'definicao', 'material', ['duodeno', 'pancreas']),
    card('bmf1', 'bmf1_a19', 'Papila maior duodenal: o que drena?', 'Colédoco e ducto pancreático principal (ampola).', '', 'prova', 'material', ['papila', 'duodeno']),
    card('bmf1', 'bmf1_a19', 'Jejuno versus íleo: tendência macroscópica?', 'Jejuno: alças mais largas, meso mais curto; íleo mais fino até válvula ileocecal.', '', 'diferenciacao', 'material', ['jejuno', 'ileo']),
    card('bmf1', 'bmf1_a19', 'Válvula ileocecal: função?', 'Regula esvaziamento e barreira contra refluxo bacteriano.', '', 'mecanismo', 'material', ['valvula-ileocecal']),
    card('bmf1', 'bmf1_a19', 'Apêndice vermiforme: origem anatômica?', 'Base no ceco — posição retrocecal/pélvica varia.', '', 'clinica', 'material', ['apendice']),
    card('bmf1', 'bmf1_a19', 'Marcas externas do cólon?', 'Taenias, haustra e apêndices epiploicos.', '', 'prova', 'material', ['colon', 'haustra']),
    card('bmf1', 'bmf1_a19', 'Delgado central e grosso periférico: mapa prático?', 'Delgado ocupa centro; cólon moldura periférica.', '', 'definicao', 'material', ['topografia']),
    card('bmf1', 'bmf1_a19', 'Flexuras hepática e esplênica: utilidade?', 'Pontos de angulação endoscópica e referência de laudos.', '', 'clinica', 'material', ['flexuras']),
    card('bmf1', 'bmf1_a19', 'Obstrução intestinal: achado radiológico típico?', 'Níveis hidroaéreos e distensão de alças.', '', 'clinica', 'material', ['obstrucao']),
    card('bmf1', 'bmf1_a19', 'Ceco é intraperitoneal?', 'Sim, em geral móvel com válvula ileocecal e apêndice.', '', 'prova', 'material', ['ceco']),
    card('bmf1', 'bmf1_a19', 'Partes do duodeno em sequência?', 'Superior, descendente, horizontal, ascendente.', 'Anatomia de Netter/Moore.', 'prova', 'extra', ['duodeno', 'partes']),
    card('bmf1', 'bmf1_a19', 'Tenia coli especificamente onde?', 'Paredes do cólon (bandas longitudinais).', '', 'definicao', 'extra', ['tenia']),
  ],
  // bmf1_a20
  [
    card('bmf1', 'bmf1_a20', 'Tronco celíaco irriga que território geral?', 'Esôfago abdominal, estômago, fígado, baço, duodeno proximal.', '', 'definicao', 'material', ['tronco-celiaco']),
    card('bmf1', 'bmf1_a20', 'AMS até onde chega o território arterial típico?', 'Cólon proximal até flexura esplênica (zona de transição).', '', 'prova', 'material', ['ams']),
    card('bmf1', 'bmf1_a20', 'AMI irriga principalmente?', 'Cólon distal e reto superior.', '', 'definicao', 'material', ['ami']),
    card('bmf1', 'bmf1_a20', 'Veia porta: destino do sangue digestório?', 'Fígado antes de retornar à circulação sistêmica.', '', 'mecanismo', 'material', ['veia-porta']),
    card('bmf1', 'bmf1_a20', 'Vago: efeito parassimpático no tubo digestório superior?', 'Aumenta motilidade e secreção.', '', 'mecanismo', 'material', ['vago']),
    card('bmf1', 'bmf1_a20', 'Simpático esplanânico: efeito global mesentérico?', 'Vasoconstrição e redução motilidade em stress.', '', 'mecanismo', 'material', ['simpatico']),
    card('bmf1', 'bmf1_a20', 'Plexo de Auerbach versus Meissner?', 'Auerbach: mioentérico; Meissner: submucoso.', '', 'diferenciacao', 'material', ['plexos', 'entérico']),
    card('bmf1', 'bmf1_a20', 'Hipertensão portal: conceito anatômico mínimo?', 'Obstrução/elevação da pressão no sistema portal antes do fígado.', '', 'clinica', 'material', ['hipertensao-portal']),
    card('bmf1', 'bmf1_a20', 'Isquemia mesentérica: território depende de quê?', 'Artérias mesentéricas e anastomoses — dor desproporcional + lactato.', '', 'clinica', 'material', ['isquemia-mesenterica']),
    card('bmf1', 'bmf1_a20', 'Opioides e peristalse: efeito geral?', 'Reduzem motilidade — risco de íleus (farmacologia + anatomia funcional).', '', 'clinica', 'material', ['opioides', 'ileus']),
    card('bmf1', 'bmf1_a20', 'Artéria mesentérica inferior drena/irriga principalmente cólon esquerdo e?', 'Reto superior (visão geral de território).', 'Gray’s/Netter — margens de anastomose.', 'prova', 'extra', ['ami', 'reto']),
    card('bmf1', 'bmf1_a20', 'Arco de Riolan: o que representa?', 'Anastomose entre ramos da mesentérica média e inferior (colateral).', 'Anatomia vascular variável.', 'definicao', 'extra', ['riolan']),
  ],
  // bmf1_a21
  [
    card('bmf1', 'bmf1_a21', 'Lobo hepático maior?', 'Direito; vesícula na fossa do lobo direito.', '', 'definicao', 'material', ['figado', 'lobos']),
    card('bmf1', 'bmf1_a21', 'Porta hepática: estruturas em termos gerais?', 'Veia porta (posterior), artéria hepática e ducto (anterior) — variações existem.', '', 'prova', 'material', ['porta-hepatica']),
    card('bmf1', 'bmf1_a21', 'Junção ducto cístico + hepático comum forma?', 'Colédoco.', '', 'definicao', 'material', ['coleodoco']),
    card('bmf1', 'bmf1_a21', 'Obstrução do colédoco: consequência clássica?', 'Icterícia obstrutiva com dilatação de vias e padrão enzimático.', '', 'clinica', 'material', ['ictericia']),
    card('bmf1', 'bmf1_a21', 'Cabeça pancreática: relação anatômica?', 'Encaixada no duodeno em “C”.', '', 'definicao', 'material', ['pancreas', 'cabeca']),
    card('bmf1', 'bmf1_a21', 'Ducto de Wirsung drena onde?', 'Ampola duodenal (papila maior) — muitas vezes com colédoco.', '', 'prova', 'material', ['wirsung']),
    card('bmf1', 'bmf1_a21', 'Cauda pancreática: relação?', 'Aproxima-se do baço.', '', 'definicao', 'material', ['cauda-pancreas']),
    card('bmf1', 'bmf1_a21', 'Sangue portal entra no fígado; sangue hepático sai como?', 'Veias hepáticas para veia cava inferior.', '', 'mecanismo', 'material', ['veias-hepaticas']),
    card('bmf1', 'bmf1_a21', 'Cólico biliar típico: localização da dor?', 'Hipocôndrio direito pós-prandial.', '', 'clinica', 'material', ['colico-biliar']),
    card('bmf1', 'bmf1_a21', 'Pancreatite biliar: mecanismo anatômico?', 'Cálculo impactado na ampola comum → refluxo/ativação enzimática.', '', 'clinica', 'material', ['pancreatite']),
    card('bmf1', 'bmf1_a21', 'Segmentação hepática de Couinaud é usada principalmente para?', 'Planejamento de ressecção cirúrgica (mapa vascular-biliar).', 'Cirurgia — referência avançada.', 'clinica', 'extra', ['couinaud']),
    card('bmf1', 'bmf1_a21', 'Papila menor duodenal: ducto acessório?', 'Ducto pancreático acessório (quando presente).', 'Anatomia variável.', 'prova', 'extra', ['papila-menor']),
  ],
];

let id = 1;
const flashcards = [];
for (const lot of LOTS) {
  if (lot.length !== 12) {
    console.error('Lote com tamanho errado:', lot[0]?.tema, lot.length);
    process.exit(1);
  }
  for (const c of lot) {
    flashcards.push({ ...c, id: id++ });
  }
}

fs.writeFileSync(OUT, JSON.stringify({ flashcards }, null, 2), 'utf8');
console.log('OK', flashcards.length, 'flashcards →', OUT);
