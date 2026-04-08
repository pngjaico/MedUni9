const fs = require('fs');

const path = 'data/flashcards.json';
const raw = JSON.parse(fs.readFileSync(path, 'utf8'));
const flashcards = Array.isArray(raw.flashcards) ? raw.flashcards : [];

const novos = [
  {
    materia: 'bmf4',
    tema: 'bmf4_a1',
    frente: 'A divisão anatômica que inclui encéfalo e medula espinal é o {{c1::Sistema Nervoso Central (SNC)}}.',
    verso: 'Sistema Nervoso Central (SNC)',
    explicacao: 'O SNC concentra integração e processamento principal das informações.',
    dificuldade: 1,
    categoria: 'definicao',
    origem: 'material',
    tags: ['snc', 'divisao-anatomica']
  },
  {
    materia: 'bmf4',
    tema: 'bmf4_a1',
    frente: 'A divisão anatômica formada por nervos e gânglios é o {{c1::Sistema Nervoso Periférico (SNP)}}.',
    verso: 'Sistema Nervoso Periférico (SNP)',
    explicacao: 'O SNP conecta o SNC aos órgãos e tecidos periféricos.',
    dificuldade: 1,
    categoria: 'definicao',
    origem: 'material',
    tags: ['snp', 'divisao-anatomica']
  },
  {
    materia: 'bmf4',
    tema: 'bmf4_a1',
    frente: 'A divisão funcional que controla movimentos voluntários é o sistema {{c1::somático}}.',
    verso: 'somático',
    explicacao: 'Relaciona-se ao controle da musculatura esquelética.',
    dificuldade: 1,
    categoria: 'definicao',
    origem: 'material',
    tags: ['somatico', 'funcao']
  },
  {
    materia: 'bmf4',
    tema: 'bmf4_a1',
    frente: 'A divisão funcional responsável pelo controle involuntário visceral é o sistema {{c1::autônomo (SNA)}}.',
    verso: 'autônomo (SNA)',
    explicacao: 'Regula vísceras como coração, vasos e trato gastrointestinal.',
    dificuldade: 1,
    categoria: 'definicao',
    origem: 'material',
    tags: ['sna', 'funcao']
  },
  {
    materia: 'bmf4',
    tema: 'bmf4_a1',
    frente: 'No sistema simpático, a origem segmentar clássica é {{c1::toracolombar (T1-L2)}}.',
    verso: 'toracolombar (T1-L2)',
    explicacao: 'Esse padrão ajuda a diferenciar simpático de parassimpático.',
    dificuldade: 2,
    categoria: 'prova',
    origem: 'material',
    tags: ['simpatico', 'segmentacao']
  },
  {
    materia: 'bmf4',
    tema: 'bmf4_a1',
    frente: 'No sistema parassimpático, a origem clássica é {{c1::craniossacral}}.',
    verso: 'craniossacral',
    explicacao: 'A saída ocorre em núcleos cranianos e segmentos sacrais.',
    dificuldade: 2,
    categoria: 'prova',
    origem: 'material',
    tags: ['parassimpatico', 'segmentacao']
  },
  {
    materia: 'bmf4',
    tema: 'bmf4_a1',
    frente: 'A estrutura que reúne mesencéfalo, ponte e bulbo é o {{c1::tronco encefálico}}.',
    verso: 'tronco encefálico',
    explicacao: 'É eixo importante para funções vitais e vias de passagem.',
    dificuldade: 1,
    categoria: 'definicao',
    origem: 'material',
    tags: ['tronco-encefalico', 'encefalo']
  },
  {
    materia: 'bmf4',
    tema: 'bmf4_a1',
    frente: 'No encéfalo, a substância cinzenta predomina no {{c1::córtex}}.',
    verso: 'córtex',
    explicacao: 'No córtex estão muitos corpos neuronais de integração.',
    dificuldade: 1,
    categoria: 'definicao',
    origem: 'material',
    tags: ['substancia-cinzenta', 'cortex']
  },
  {
    materia: 'bmf4',
    tema: 'bmf4_a1',
    frente: 'Na medula espinal, a substância cinzenta fica na porção {{c1::interna}}.',
    verso: 'interna',
    explicacao: 'A substância branca envolve externamente essa região.',
    dificuldade: 1,
    categoria: 'diferenciacao',
    origem: 'material',
    tags: ['medula', 'substancia-cinzenta']
  },
  {
    materia: 'bmf4',
    tema: 'bmf4_a1',
    frente: 'Nas sinapses pré-ganglionares do SNA, o neurotransmissor liberado é {{c1::acetilcolina}}.',
    verso: 'acetilcolina',
    explicacao: 'Esse ponto é básico para farmacologia autonômica inicial.',
    dificuldade: 2,
    categoria: 'mecanismo',
    origem: 'material',
    tags: ['acetilcolina', 'sna']
  },
  {
    materia: 'bmf4',
    tema: 'bmf4_a1',
    frente: 'A resposta de luta ou fuga está associada ao sistema {{c1::simpático}}.',
    verso: 'simpático',
    explicacao: 'Ele prepara o organismo para alerta e ação rápida.',
    dificuldade: 1,
    categoria: 'extra_livro',
    origem: 'extra',
    tags: ['simpatico', 'luta-ou-fuga']
  },
  {
    materia: 'bmf4',
    tema: 'bmf4_a1',
    frente: 'A principal via comissural entre os hemisférios é o {{c1::corpo caloso}}.',
    verso: 'corpo caloso',
    explicacao: 'Ele integra informações entre córtex direito e esquerdo.',
    dificuldade: 2,
    categoria: 'extra_livro',
    origem: 'extra',
    tags: ['corpo-caloso', 'comissuras']
  }
];

const kept = flashcards.filter((c) => !(c.materia === 'bmf4' && c.tema === 'bmf4_a1'));
const grouped = {};
for (const c of kept) {
  const k = `${c.materia}|${c.tema}`;
  grouped[k] = grouped[k] || [];
  grouped[k].push(c);
}
grouped['bmf4|bmf4_a1'] = novos;

const materias = Object.keys(grouped).sort((a, b) => a.localeCompare(b, 'pt-BR', { numeric: true }));
const rebuilt = [];
for (const m of materias) rebuilt.push(...grouped[m]);

let next = 1;
for (const c of rebuilt) c.id = next++;

raw.flashcards = rebuilt;
fs.writeFileSync(path, JSON.stringify(raw, null, 2) + '\n', 'utf8');

console.log('bmf4_a1 refeita com 12 cards simples.');
