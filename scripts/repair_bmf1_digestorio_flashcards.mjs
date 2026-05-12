import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const aulaId = process.argv[2];

const GROUPS = {
  bmf1_a17: [
    c(7002207, "bmf1_a17", "O espaço entre lábios/bochechas e dentes/gengivas é o {{c1::vestíbulo oral}}.", "vestíbulo oral", "Ele fica fora dos arcos dentários; a cavidade oral propriamente dita fica interna aos dentes.", "definicao", ["boca", "anatomia", "prova"]),
    c(7002208, "bmf1_a17", "A passagem entre cavidade oral e orofaringe é o {{c1::istmo das fauces}}.", "istmo das fauces", "Esse limite é importante para separar boca de orofaringe em anatomia de superfície.", "definicao", ["boca", "faringe", "prova"]),
    c(7002209, "bmf1_a17", "O nervo motor principal da língua é o {{c1::hipoglosso (XII)}}.", "hipoglosso (XII)", "A exceção clássica é o palatoglosso, geralmente associado ao vago.", "definicao", ["lingua", "nervos", "prova"]),
    c(7002210, "bmf1_a17", "Na lesão unilateral do XII, a língua desvia para o {{c1::lado lesado}} na protrusão.", "lado lesado", "O genioglosso íntegro empurra a língua em direção ao lado paralisado.", "clinica", ["lingua", "hipoglosso", "semiologia"]),
    c(7002211, "bmf1_a17", "A sensibilidade geral dos 2/3 anteriores da língua segue pelo {{c1::nervo lingual (V3)}}.", "nervo lingual (V3)", "Dor, tato e temperatura não são gosto; essa é a pegadinha mais comum.", "diferenciacao", ["lingua", "nervos", "prova"]),
    c(7002212, "bmf1_a17", "O gosto dos 2/3 anteriores da língua segue pela {{c1::corda do tímpano (VII)}}.", "corda do tímpano (VII)", "O facial carrega gosto anterior, mas o nervo lingual carrega sensibilidade geral.", "diferenciacao", ["lingua", "gosto", "nervos"]),
    c(7002213, "bmf1_a17", "O terço posterior da língua é principalmente território do {{c1::glossofaríngeo (IX)}}.", "glossofaríngeo (IX)", "O IX integra sensibilidade e gosto posteriores, além de relação com reflexo faríngeo.", "definicao", ["lingua", "nervos", "faringe"]),
    c(7002214, "bmf1_a17", "O ducto da parótida é o de {{c1::Stensen}}.", "Stensen", "Ele cruza o masseter, perfura o bucinador e abre próximo ao segundo molar superior.", "definicao", ["parotida", "ductos", "prova"]),
    c(7002215, "bmf1_a17", "A glândula mais ligada a sialolitíase por ducto de Wharton é a {{c1::submandibular}}.", "submandibular", "Dor ao comer sugere saliva contra ducto obstruído.", "clinica", ["salivares", "wharton", "clinica"]),
    c(7002216, "bmf1_a17", "A glândula salivar acima do milo-hióideo e drenada por ductos de Rivinus é a {{c1::sublingual}}.", "sublingual", "Ela contrasta com parótida/Stensen e submandibular/Wharton.", "diferenciacao", ["salivares", "rivinus", "prova"]),
    c(7002217, "bmf1_a17", "A porção da faringe atrás das coanas é a {{c1::nasofaringe}}.", "nasofaringe", "A nasofaringe contém adenoide e abertura da tuba auditiva.", "definicao", ["faringe", "nasofaringe", "prova"]),
    c(7002218, "bmf1_a17", "Na deglutição, o {{c1::palato mole}} fecha a nasofaringe para evitar refluxo nasal.", "palato mole", "A epiglote protege a entrada laríngea; falha do conjunto aumenta risco de aspiração.", "mecanismo", ["degluticao", "faringe", "clinica"]),
  ],
  bmf1_a18: [
    c(7002219, "bmf1_a18", "A camada gordurosa da fáscia superficial abdominal é a {{c1::fáscia de Camper}}.", "fáscia de Camper", "Camper é superficial e rica em gordura.", "definicao", ["parede_abdominal", "camper", "prova"]),
    c(7002220, "bmf1_a18", "A camada membranosa/fibrosa profunda da fáscia superficial é a {{c1::fáscia de Scarpa}}.", "fáscia de Scarpa", "Scarpa é mais resistente e fica profunda a Camper.", "definicao", ["parede_abdominal", "scarpa", "prova"]),
    c(7002221, "bmf1_a18", "A linha mediana aponeurótica e relativamente avascular da parede abdominal é a {{c1::linha alba}}.", "linha alba", "Por isso ela é muito usada em laparotomia mediana.", "clinica", ["parede_abdominal", "linha_alba", "cirurgia"]),
    c(7002222, "bmf1_a18", "A sequência muscular anterolateral é oblíquo externo, oblíquo interno e {{c1::transverso do abdome}}.", "transverso do abdome", "O transverso é o plano muscular mais profundo dessa sequência.", "definicao", ["parede_abdominal", "musculos", "prova"]),
    c(7002223, "bmf1_a18", "A fáscia profunda ao transverso do abdome é a {{c1::fáscia transversal}}.", "fáscia transversal", "Ela é ponto-chave na parede posterior do canal inguinal.", "definicao", ["parede_abdominal", "fascia", "inguinal"]),
    c(7002224, "bmf1_a18", "A hérnia inguinal indireta entra pelo {{c1::anel inguinal profundo}}.", "anel inguinal profundo", "Ela segue o trajeto anatômico do canal inguinal.", "diferenciacao", ["hernia", "inguinal", "prova"]),
    c(7002225, "bmf1_a18", "A hérnia inguinal direta atravessa o {{c1::triângulo de Hasselbach}}.", "triângulo de Hasselbach", "É uma fraqueza adquirida da parede posterior, típica de prova.", "diferenciacao", ["hernia", "hasselbach", "prova"]),
    c(7002226, "bmf1_a18", "O peritônio parietal gera dor {{c1::bem localizada}} quando irritado.", "bem localizada", "Ele tem inervação somática da parede abdominal.", "clinica", ["peritonio", "dor", "clinica"]),
    c(7002227, "bmf1_a18", "O peritônio visceral tende a gerar dor {{c1::vaga e mal localizada}}.", "vaga e mal localizada", "A inervação visceral explica dor referida ou pouco precisa.", "clinica", ["peritonio", "dor", "prova"]),
    c(7002228, "bmf1_a18", "A prega peritoneal que suspende alças e conduz vasos é o {{c1::mesentério}}.", "mesentério", "Ele leva vasos, linfáticos e nervos ao intestino.", "definicao", ["peritonio", "mesenterio", "vasos"]),
    c(7002229, "bmf1_a18", "O avental gorduroso que pode aderir a focos inflamatórios é o {{c1::omento maior}}.", "omento maior", "Ele ajuda a limitar contaminação intra-abdominal.", "clinica", ["peritonio", "omento", "clinica"]),
    c(7002230, "bmf1_a18", "Rins, ureteres, duodeno e pâncreas são exemplos clássicos de órgãos {{c1::retroperitoneais}}.", "retroperitoneais", "São estruturas atrás do peritônio e mais fixas.", "extra_livro", ["retroperitonio", "abdome", "prova"], "extra"),
  ],
  bmf1_a19: [
    c(7002231, "bmf1_a19", "O segmento inicial do intestino delgado em C ao redor do pâncreas é o {{c1::duodeno}}.", "duodeno", "Ele recebe bile e secreção pancreática na região da papila maior.", "definicao", ["intestino", "duodeno", "prova"]),
    c(7002232, "bmf1_a19", "O jejuno tende a ter parede mais espessa e maior vascularização que o {{c1::íleo}}.", "íleo", "O íleo tem mais placas de Peyer e arcadas mais numerosas.", "diferenciacao", ["intestino", "jejuno", "ileo"]),
    c(7002233, "bmf1_a19", "O íleo é lembrado por maior quantidade de {{c1::placas de Peyer}}.", "placas de Peyer", "Esse é um marcador anatômico-imunológico útil para diferenciar jejuno e íleo.", "definicao", ["ileo", "peyer", "histologia"]),
    c(7002234, "bmf1_a19", "A transição entre íleo terminal e ceco é a {{c1::válvula ileocecal}}.", "válvula ileocecal", "É um ponto de referência entre delgado e grosso.", "definicao", ["intestino", "ceco", "prova"]),
    c(7002235, "bmf1_a19", "As tênias do cólon convergem para a base do {{c1::apêndice}}.", "apêndice", "Esse detalhe ajuda a localizar o apêndice em peça anatômica.", "definicao", ["colon", "apendice", "anatomia"]),
    c(7002236, "bmf1_a19", "As três faixas longitudinais do cólon são as {{c1::tênias do cólon}}.", "tênias do cólon", "Elas diferenciam o cólon do intestino delgado e do reto.", "definicao", ["colon", "tenias", "prova"]),
    c(7002237, "bmf1_a19", "As saculações externas do cólon são chamadas de {{c1::haustras}}.", "haustras", "Haustras fazem parte do padrão macroscópico do cólon.", "definicao", ["colon", "haustras", "prova"]),
    c(7002238, "bmf1_a19", "A dor clássica da apendicite localiza-se na {{c1::fossa ilíaca direita}}.", "fossa ilíaca direita", "A migração da dor para FID é uma correlação anatômico-clínica de alto rendimento.", "clinica", ["apendicite", "dor", "clinica"]),
    c(7002239, "bmf1_a19", "A diverticulite do sigmoide costuma causar dor em {{c1::fossa ilíaca esquerda}}.", "fossa ilíaca esquerda", "O sigmoide fica no quadrante inferior esquerdo.", "clinica", ["diverticulite", "sigmoide", "clinica"]),
    c(7002240, "bmf1_a19", "A flexura cólica direita é a {{c1::flexura hepática}}.", "flexura hepática", "A flexura esquerda é a esplênica.", "definicao", ["colon", "flexuras", "prova"]),
    c(7002241, "bmf1_a19", "O reto não apresenta {{c1::tênias e haustras}} como os segmentos do cólon.", "tênias e haustras", "Essa diferença macroscópica é útil em anatomia prática.", "diferenciacao", ["reto", "colon", "anatomia"]),
    c(7002242, "bmf1_a19", "O mesocólon dá mobilidade a segmentos como o {{c1::cólon sigmoide}}.", "cólon sigmoide", "O sigmoide é móvel justamente pela presença de mesocólon.", "extra_livro", ["colon", "mesocolon", "prova"], "extra"),
  ],
  bmf1_a20: [
    c(7002243, "bmf1_a20", "O território do intestino anterior é irrigado pelo {{c1::tronco celíaco}}.", "tronco celíaco", "Ele supre esôfago abdominal, estômago, duodeno proximal, fígado, baço e pâncreas.", "definicao", ["vascularizacao", "tronco_celiaco", "prova"]),
    c(7002244, "bmf1_a20", "A artéria mesentérica superior irriga o intestino {{c1::médio}}.", "médio", "Inclui grande parte do delgado, ceco, apêndice, cólon ascendente e transverso proximal.", "definicao", ["vascularizacao", "ams", "prova"]),
    c(7002245, "bmf1_a20", "A artéria mesentérica inferior irriga o intestino {{c1::posterior}}.", "posterior", "Inclui cólon distal, sigmoide e parte superior do reto.", "definicao", ["vascularizacao", "ami", "prova"]),
    c(7002246, "bmf1_a20", "O nervo vago tende a aumentar {{c1::motilidade e secreção}} digestivas.", "motilidade e secreção", "Parassimpático geralmente liga a digestão.", "mecanismo", ["inervacao", "vago", "fisiologia"]),
    c(7002247, "bmf1_a20", "O simpático tende a reduzir motilidade digestiva e contrair {{c1::esfíncteres}}.", "esfíncteres", "É a lógica de luta/fuga aplicada ao tubo digestivo.", "mecanismo", ["inervacao", "simpatico", "fisiologia"]),
    c(7002248, "bmf1_a20", "O plexo submucoso, ligado à secreção, é o plexo de {{c1::Meissner}}.", "Meissner", "Ele contrasta com Auerbach, que fica entre camadas musculares.", "diferenciacao", ["plexos", "meissner", "prova"]),
    c(7002249, "bmf1_a20", "O plexo mioentérico responsável pela peristalse é o de {{c1::Auerbach}}.", "Auerbach", "Ele regula motilidade do tubo digestivo.", "diferenciacao", ["plexos", "auerbach", "prova"]),
    c(7002250, "bmf1_a20", "A veia porta é formada principalmente pela esplênica e pela {{c1::mesentérica superior}}.", "mesentérica superior", "Essa união leva sangue venoso digestório ao fígado.", "definicao", ["porta", "veias", "figado"]),
    c(7002251, "bmf1_a20", "As veias hepáticas drenam o fígado para a {{c1::veia cava inferior}}.", "veia cava inferior", "Não confundir entrada portal com saída hepática.", "diferenciacao", ["figado", "veias", "prova"]),
    c(7002252, "bmf1_a20", "A flexura esplênica é área de transição vascular entre {{c1::AMS e AMI}}.", "AMS e AMI", "Essa zona é vulnerável em hipoperfusão.", "clinica", ["vascularizacao", "flexura_esplenica", "clinica"]),
    c(7002253, "bmf1_a20", "Dor abdominal desproporcional ao exame, com lactato alto, sugere {{c1::isquemia mesentérica}}.", "isquemia mesentérica", "É a correlação clínica mais forte da irrigação intestinal.", "clinica", ["isquemia", "mesenterica", "clinica"]),
    c(7002254, "bmf1_a20", "Na hipertensão portal, varizes esofágicas surgem por colaterais {{c1::porto-sistêmicas}}.", "porto-sistêmicas", "A drenagem portal busca rotas alternativas para o sistema cava.", "extra_livro", ["porta", "varizes", "clinica"], "extra"),
  ],
  bmf1_a21: [
    c(7002255, "bmf1_a21", "Na porta hepática passam veia porta, artéria hepática própria e {{c1::ducto biliar}}.", "ducto biliar", "Essa tríade organiza a entrada vascular e a saída biliar.", "definicao", ["figado", "porta_hepatica", "prova"]),
    c(7002256, "bmf1_a21", "A veia porta entra no fígado com sangue rico em {{c1::nutrientes do tubo digestivo}}.", "nutrientes do tubo digestivo", "Ela não é a principal via de saída venosa do fígado.", "mecanismo", ["figado", "veia_porta", "fisiologia"]),
    c(7002257, "bmf1_a21", "As veias hepáticas drenam o fígado para a {{c1::veia cava inferior}}.", "veia cava inferior", "Essa é a saída venosa hepática sistêmica.", "diferenciacao", ["figado", "veias", "prova"]),
    c(7002258, "bmf1_a21", "A bile é produzida no {{c1::fígado}}.", "fígado", "A vesícula biliar armazena e concentra bile, mas não a produz.", "definicao", ["bile", "figado", "prova"]),
    c(7002259, "bmf1_a21", "A vesícula biliar {{c1::armazena e concentra}} bile.", "armazena e concentra", "Esse é o contraste central com a função do fígado.", "diferenciacao", ["vesicula", "bile", "prova"]),
    c(7002260, "bmf1_a21", "O colédoco nasce da união do ducto hepático comum com o {{c1::ducto cístico}}.", "ducto cístico", "Essa anatomia explica obstruções biliares extra-hepáticas.", "definicao", ["vias_biliares", "coledoco", "prova"]),
    c(7002261, "bmf1_a21", "A convergência entre colédoco e ducto pancreático principal ocorre na {{c1::papila maior}}.", "papila maior", "A região ampular é ponto crítico para icterícia e pancreatite biliar.", "clinica", ["papila_maior", "coledoco", "pancreas"]),
    c(7002262, "bmf1_a21", "O ducto pancreático principal é chamado de {{c1::Wirsung}}.", "Wirsung", "O ducto acessório é Santorini.", "definicao", ["pancreas", "wirsung", "prova"]),
    c(7002263, "bmf1_a21", "O ducto pancreático acessório é chamado de {{c1::Santorini}}.", "Santorini", "Ele é menos cobrado que Wirsung, mas fecha a diferenciação.", "extra_livro", ["pancreas", "santorini", "prova"], "extra"),
    c(7002264, "bmf1_a21", "A cabeça do pâncreas se encaixa no {{c1::duodeno}}.", "duodeno", "Essa relação explica compressões e envolvimento em processos periampulares.", "definicao", ["pancreas", "duodeno", "anatomia"]),
    c(7002265, "bmf1_a21", "A cauda do pâncreas se aproxima do {{c1::hilo esplênico}}.", "hilo esplênico", "É uma relação anatômica importante em cirurgia e imagem.", "definicao", ["pancreas", "baco", "anatomia"]),
    c(7002266, "bmf1_a21", "Cálculo impactado na região ampular pode causar {{c1::pancreatite biliar}}.", "pancreatite biliar", "A obstrução pode afetar o fluxo biliar e pancreático.", "clinica", ["pancreatite", "ampola", "clinica"]),
  ],
  bmf1_a22: [
    c(7002267, "bmf1_a22", "Antes de nomear estruturas em peça abdominal, a orientação deve começar pela {{c1::direita anatômica}}.", "direita anatômica", "Sem orientação espacial, flexuras e vasos são facilmente invertidos.", "prova", ["pratica", "anatomia", "prova"]),
    c(7002268, "bmf1_a22", "A entrada do estômago é a cárdia e a saída para o duodeno é o {{c1::piloro}}.", "piloro", "Esse par cárdia-piloro é básico em prática de digestório.", "diferenciacao", ["estomago", "piloro", "anatomia"]),
    c(7002269, "bmf1_a22", "O duodeno envolve principalmente a cabeça do {{c1::pâncreas}}.", "pâncreas", "Essa relação ajuda a reconhecer ambos na peça.", "definicao", ["duodeno", "pancreas", "pratica"]),
    c(7002270, "bmf1_a22", "A válvula ileocecal separa o íleo terminal do {{c1::ceco}}.", "ceco", "É marco de transição do delgado para o grosso.", "definicao", ["ileo", "ceco", "prova"]),
    c(7002271, "bmf1_a22", "Tênias, haustras e apêndices epiploicos identificam o {{c1::cólon}}.", "cólon", "São marcadores macroscópicos do intestino grosso.", "definicao", ["colon", "pratica", "prova"]),
    c(7002272, "bmf1_a22", "As tênias do cólon convergem para a base do {{c1::apêndice}}.", "apêndice", "Isso ajuda a localizar o apêndice quando ele não está óbvio.", "prova", ["apendice", "colon", "pratica"]),
    c(7002273, "bmf1_a22", "A flexura cólica direita é a {{c1::flexura hepática}}.", "flexura hepática", "Ela fica próxima ao fígado.", "definicao", ["colon", "flexuras", "anatomia"]),
    c(7002274, "bmf1_a22", "A flexura cólica esquerda é a {{c1::flexura esplênica}}.", "flexura esplênica", "Ela fica próxima ao baço e é mais superior/fixa.", "definicao", ["colon", "flexuras", "anatomia"]),
    c(7002275, "bmf1_a22", "O omento menor liga a pequena curvatura do estômago ao {{c1::fígado}}.", "fígado", "O omento maior é o avental gorduroso que desce da curvatura maior.", "diferenciacao", ["omento", "estomago", "figado"]),
    c(7002276, "bmf1_a22", "A papila maior recebe bile e secreção do ducto pancreático {{c1::principal}}.", "principal", "É a chegada conjunta do colédoco e do Wirsung na região duodenal.", "definicao", ["papila_maior", "pancreas", "bile"]),
    c(7002277, "bmf1_a22", "A artéria mesentérica superior irriga intestino delgado, ceco, apêndice e cólon {{c1::ascendente}}.", "ascendente", "Isso reforça o território de intestino médio.", "prova", ["ams", "vascularizacao", "prova"]),
    c(7002278, "bmf1_a22", "A linha pectínea é marco anatômico do {{c1::canal anal}}.", "canal anal", "Ela muda drenagem, inervação, linfáticos e padrão de dor.", "extra_livro", ["canal_anal", "linha_pectinea", "prova"], "extra"),
  ],
};

function c(id, tema, frente, verso, explicacao, categoria, tags, origem = "material") {
  return {
    id,
    frente,
    verso,
    explicacao,
    tema,
    aula_id: tema,
    materia: "bmf1",
    categoria,
    origem,
    tags,
    dificuldade: categoria === "extra_livro" ? 3 : 2,
  };
}

function readJson(rel) {
  return JSON.parse(fs.readFileSync(path.join(ROOT, rel), "utf8"));
}

function writeJson(rel, data) {
  fs.writeFileSync(path.join(ROOT, rel), `${JSON.stringify(data, null, 2)}\n`, "utf8");
}

if (!aulaId || !GROUPS[aulaId]) {
  console.error(`Uso: node scripts/repair_bmf1_digestorio_flashcards.mjs <${Object.keys(GROUPS).join("|")}>`);
  process.exit(2);
}

const raw = readJson("data/flashcards.json");
const cards = Array.isArray(raw) ? raw : raw.flashcards;
const incoming = GROUPS[aulaId];
const incomingIds = new Set(incoming.map((card) => card.id));
const collisions = cards.filter((card) => incomingIds.has(Number(card.id)) && card.tema !== aulaId && card.aula_id !== aulaId);
if (collisions.length) {
  throw new Error(`IDs ja usados fora de ${aulaId}: ${collisions.map((card) => card.id).join(", ")}`);
}

const next = cards
  .filter((card) => card.tema !== aulaId && card.aula_id !== aulaId)
  .concat(incoming)
  .sort((a, b) => Number(a.id) - Number(b.id));

if (Array.isArray(raw)) writeJson("data/flashcards.json", next);
else writeJson("data/flashcards.json", { ...raw, flashcards: next });

console.log(JSON.stringify({ aula_id: aulaId, flashcards: incoming.length }, null, 2));
