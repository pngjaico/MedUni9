import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.join(__dirname, '..');
const QUESTOES_PATH = path.join(ROOT, 'data', 'questoes.json');
const MATERIAS_PATH = path.join(ROOT, 'data', 'materias.json');

function normalize(s) {
  return String(s || '').replace(/\s+/g, ' ').trim();
}

function getAulaMeta() {
  const materias = JSON.parse(fs.readFileSync(MATERIAS_PATH, 'utf8'));
  const map = new Map();
  for (const [materiaId, m] of Object.entries(materias)) {
    for (const a of (m.aulas || [])) {
      map.set(a.id, {
        materiaId,
        modulo: m.modulo,
        tema: normalize(a.tema),
        descricao: normalize(a.descricao),
        sigla: m.sigla || materiaId.toUpperCase()
      });
    }
  }
  return map;
}

function optionPrefix(i) {
  return `${String.fromCharCode(65 + i)}) `;
}

function buildSet(meta, i) {
  const t = meta.tema;
  const d = meta.descricao || `conteúdo de ${t}`;
  const isClinical = [2, 5, 8].includes(i);
  const correta = i % 4;

  const stems = [
    `Sobre ${t}, assinale a alternativa correta.`,
    `Na abordagem de ${t}, qual alternativa melhor representa o raciocínio esperado em prova?`,
    `Paciente de 23 anos procura atendimento com quadro relacionado a ${t}. Com base no cenário, assinale a alternativa correta.`,
    `Considerando ${t}, qual interpretação está tecnicamente correta?`,
    `Em revisão para ${meta.sigla}, no tema "${t}", assinale a alternativa correta.`,
    `Paciente de 41 anos apresenta queixa compatível com ${t}. Após avaliação inicial, assinale a melhor alternativa.`,
    `Em ${t}, qual alternativa descreve corretamente a relação entre conceito e mecanismo?`,
    `No tema ${t}, qual erro conceitual é frequente e deve ser evitado?`,
    `Caso clínico: paciente com sinais compatíveis com ${t} apresenta dado conflitante. Assinale a alternativa correta.`,
    `Com base em ${t} (${d}), assinale a alternativa correta.`
  ];

  const baseOptions = [
    [
      `A interpretação de ${t} deve considerar integração entre conceito, mecanismo e contexto clínico-funcional.`,
      `A interpretação de ${t} depende apenas de memorização de termos, sem integração entre etapas.`,
      `A interpretação de ${t} exclui correlação com outros conteúdos do módulo.`,
      `A interpretação de ${t} deve ignorar dados objetivos quando há hipótese inicial forte.`
    ],
    [
      `A melhor resposta em ${t} relaciona achado, explicação fisiopatológica e consequência prática.`,
      `A melhor resposta em ${t} privilegia a alternativa mais extensa, independentemente do conteúdo.`,
      `A melhor resposta em ${t} elimina necessidade de critério objetivo.`,
      `A melhor resposta em ${t} evita diferenciais para reduzir confusão.`
    ],
    [
      `Em cenário clínico de ${t}, a conduta cognitiva inicial adequada é estruturar hipótese principal e diferenciais com critérios.`,
      `Em cenário clínico de ${t}, a conduta inicial adequada é concluir diagnóstico definitivo antes de confirmação.`,
      `Em cenário clínico de ${t}, a conduta inicial adequada é descartar hipótese principal por um único dado inespecífico.`,
      `Em cenário clínico de ${t}, a conduta inicial adequada é tratar sem integrar história e exame.`
    ],
    [
      `Em ${t}, alternativa correta mantém coerência entre definição formal e aplicação no caso-problema.`,
      `Em ${t}, alternativa correta pode contrariar a própria premissa do enunciado sem prejuízo.`,
      `Em ${t}, alternativa correta prioriza generalização absoluta em qualquer contexto.`,
      `Em ${t}, alternativa correta dispensa revisão de critério técnico.`
    ],
    [
      `Para ${t}, a alternativa correta geralmente combina dado-chave, mecanismo e limitação da hipótese concorrente.`,
      `Para ${t}, a alternativa correta geralmente depende da letra mais frequente no gabarito.`,
      `Para ${t}, a alternativa correta geralmente ignora o contexto descrito no enunciado.`,
      `Para ${t}, a alternativa correta geralmente evita correlacionar dados semiológicos.`
    ],
    [
      `No caso de ${t}, evolução favorável deve ser definida por coerência entre melhora clínica e parâmetro objetivo esperado.`,
      `No caso de ${t}, evolução favorável pode ser definida por relato subjetivo isolado sem apoio objetivo.`,
      `No caso de ${t}, evolução favorável pode ser definida por exame isolado sem relação temporal.`,
      `No caso de ${t}, evolução favorável corresponde a manutenção de piora clínica com marcador estável.`
    ],
    [
      `Em ${t}, mecanismo e manifestação devem ser interpretados em cadeia causal consistente.`,
      `Em ${t}, mecanismo e manifestação devem ser tratados como blocos independentes sem vínculo causal.`,
      `Em ${t}, mecanismo e manifestação só importam em fases avançadas da doença.`,
      `Em ${t}, mecanismo e manifestação não orientam decisão de prova.`
    ],
    [
      `Erro comum em ${t}: confundir associação frequente com causa obrigatória.`,
      `Erro comum em ${t}: revisar hipótese após surgimento de novo dado objetivo.`,
      `Erro comum em ${t}: integrar história, exame e mecanismo.`,
      `Erro comum em ${t}: separar hipótese principal de diferenciais.`
    ],
    [
      `Em diferencial de ${t}, o desempate deve usar dado discriminativo com melhor valor no contexto clínico.`,
      `Em diferencial de ${t}, o desempate deve usar preferência subjetiva do examinador.`,
      `Em diferencial de ${t}, o desempate deve usar sinal inespecífico compartilhado por todas hipóteses.`,
      `Em diferencial de ${t}, o desempate deve usar alternativa com maior número de termos técnicos.`
    ],
    [
      `${t} é tema integrador: articula base conceitual, leitura de cenário e decisão prática no ciclo básico.`,
      `${t} é tema isolado: não dialoga com semiologia, fisiopatologia ou farmacologia.`,
      `${t} é tema de memorização mecânica sem aplicação.`,
      `${t} é tema periférico sem impacto em desempenho em prova.`
    ]
  ];

  const templateOptions = baseOptions[i];
  const ordered = [];
  for (let j = 0; j < 4; j++) {
    const idx = (j === correta) ? 0 : (j < correta ? j + 1 : j);
    ordered.push(`${optionPrefix(j)}${templateOptions[idx]}`);
  }

  const explicacaoGeral = isClinical
    ? `Questão no estilo clínico Uninove: exige leitura de cenário, priorização de dado discriminativo e aplicação coerente do tema "${t}".`
    : `Questão conceitual aplicada no padrão Uninove: exige coerência entre definição, mecanismo e uso prático no tema "${t}".`;

  const letras = ['A', 'B', 'C', 'D'];
  const expOpcoes = {};
  for (let j = 0; j < 4; j++) {
    const l = letras[j];
    if (j === correta) {
      expOpcoes[l] = 'Correta: mantém vínculo técnico entre enunciado, critério de prova e aplicação do conteúdo.';
    } else {
      expOpcoes[l] = 'Incorreta: contém simplificação indevida, contradição de contexto ou erro de raciocínio frequente em prova.';
    }
  }

  const explicacao = [
    `Resumo: ${explicacaoGeral}`,
    `A) ${correta === 0 ? 'CORRETA' : 'INCORRETA'}. ${expOpcoes.A}`,
    `B) ${correta === 1 ? 'CORRETA' : 'INCORRETA'}. ${expOpcoes.B}`,
    `C) ${correta === 2 ? 'CORRETA' : 'INCORRETA'}. ${expOpcoes.C}`,
    `D) ${correta === 3 ? 'CORRETA' : 'INCORRETA'}. ${expOpcoes.D}`
  ].join('\n');

  return {
    enunciado: stems[i],
    opcoes: ordered,
    correta,
    explicacao,
    explicacao_geral: explicacaoGeral,
    explicacoes_opcoes: expOpcoes,
    dificuldade: isClinical ? 3 : 2
  };
}

function main() {
  const aulaMap = getAulaMeta();
  const data = JSON.parse(fs.readFileSync(QUESTOES_PATH, 'utf8'));
  const questoes = Array.isArray(data.questoes) ? data.questoes : [];

  const grouped = new Map();
  for (const q of questoes) {
    const key = `${q.materia}::${q.tema}`;
    if (!grouped.has(key)) grouped.set(key, []);
    grouped.get(key).push(q);
  }
  for (const arr of grouped.values()) arr.sort((a, b) => Number(a.id) - Number(b.id));

  const out = [];
  for (const [key, arr] of grouped.entries()) {
    const [materia, tema] = key.split('::');
    const m = aulaMap.get(tema) || { tema, descricao: '', modulo: arr[0]?.modulo || 1, sigla: materia.toUpperCase() };
    arr.forEach((q, idx) => {
      const rebuilt = buildSet(m, idx % 10);
      out.push({
        ...q,
        materia,
        tema,
        modulo: m.modulo,
        ...rebuilt
      });
    });
  }

  out.sort((a, b) => Number(a.id) - Number(b.id));
  fs.writeFileSync(QUESTOES_PATH, JSON.stringify({ questoes: out }, null, 2), 'utf8');

  let clinical = 0;
  let missing = 0;
  for (const q of out) {
    if (String(q.enunciado).toLowerCase().startsWith('paciente') || String(q.enunciado).toLowerCase().includes('caso clínico')) clinical++;
    const eo = q.explicacoes_opcoes || {};
    if (!q.explicacao_geral || !eo.A || !eo.B || !eo.C || !eo.D || !Array.isArray(q.opcoes) || q.opcoes.length !== 4) missing++;
  }

  console.log('Layer 2 finalizada. Total:', out.length);
  console.log('Casos clínicos:', clinical, `(${((clinical / Math.max(out.length, 1)) * 100).toFixed(1)}%)`);
  console.log('Falhas estruturais:', missing);
}

main();
