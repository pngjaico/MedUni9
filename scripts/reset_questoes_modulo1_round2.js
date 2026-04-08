import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.join(__dirname, '..');
const MATERIAS_PATH = path.join(ROOT, 'data', 'materias.json');
const QUESTOES_PATH = path.join(ROOT, 'data', 'questoes.json');
const BACKUP_DIR = path.join(ROOT, 'data', 'backups');

function ensureDir(dir) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

function nowStamp() {
  const d = new Date();
  const p = (n) => String(n).padStart(2, '0');
  return `${d.getFullYear()}${p(d.getMonth() + 1)}${p(d.getDate())}_${p(d.getHours())}${p(d.getMinutes())}${p(d.getSeconds())}`;
}

function cleanTema(tema) {
  return String(tema || '').replace(/\s+/g, ' ').trim();
}

function buildQuestion(aula, materiaId, modulo, localId) {
  const temaNome = cleanTema(aula.tema);
  const isClinical = [2, 5, 8].includes(localId);
  const correct = localId % 4;

  const bases = [
    {
      enunciado: `Qual alternativa descreve corretamente o conceito central relacionado a "${temaNome}"?`,
      opcoes: [
        `A) O tema "${temaNome}" deve ser interpretado apenas como memorização de nomenclatura, sem aplicação prática.`,
        `B) O tema "${temaNome}" integra definição, mecanismo e implicação para tomada de decisão clínica/acadêmica.`,
        `C) O tema "${temaNome}" é exclusivamente histórico e não se relaciona com avaliação prática.`,
        `D) O tema "${temaNome}" é irrelevante para integração com outras disciplinas do módulo.`
      ]
    },
    {
      enunciado: `Considerando "${temaNome}", qual linha de raciocínio diferencia melhor interpretação superficial de interpretação mecanística?`,
      opcoes: [
        'A) Focar apenas no termo isolado, sem relacionar causa, efeito e contexto.',
        'B) Relacionar achado, mecanismo fisiopatológico e consequência prática.',
        'C) Priorizar apenas decoreba de exceções sem compreender regra geral.',
        'D) Ignorar dados contextuais e escolher a opção mais longa.'
      ]
    },
    {
      enunciado: `Caso clínico: paciente com queixa compatível com "${temaNome}" apresenta dados iniciais conflitantes. Qual conduta cognitiva inicial é a mais apropriada?`,
      opcoes: [
        'A) Fechar diagnóstico na primeira hipótese sem revisar critérios.',
        'B) Organizar hipótese principal, diferenciais e critérios objetivos antes da decisão final.',
        'C) Excluir hipótese principal apenas por um sinal inespecífico isolado.',
        'D) Priorizar conduta definitiva sem correlação clínico-laboratorial.'
      ]
    },
    {
      enunciado: `No contexto de "${temaNome}", qual alternativa representa melhor um distrator plausível em prova e por que ele engana?`,
      opcoes: [
        'A) Alternativa com termo correto em contexto errado, confundindo aplicação.',
        'B) Alternativa claramente absurda e sem relação com o assunto.',
        'C) Alternativa sem verbo e sem informação útil.',
        'D) Alternativa que repete exatamente o enunciado, sem sentido.'
      ]
    },
    {
      enunciado: `Em revisão de "${temaNome}", qual estratégia aumenta a chance de acerto em questões integradas?`,
      opcoes: [
        'A) Resolver só questões fáceis e ignorar casos aplicados.',
        'B) Treinar reconhecimento de padrão, mecanismo e erro típico de alternativa.',
        'C) Decorar letra de gabarito mais frequente.',
        'D) Evitar comparar conceitos próximos para não confundir.'
      ]
    },
    {
      enunciado: `Caso clínico aplicado a "${temaNome}": após intervenção inicial, qual critério indica melhor evolução favorável do paciente?`,
      opcoes: [
        'A) Melhorar apenas um sintoma subjetivo sem marcador objetivo.',
        'B) Melhorar correlação clínica + dado objetivo esperado para o quadro.',
        'C) Alterar somente exame isolado sem coerência temporal.',
        'D) Manter piora clínica com dado laboratorial estável.'
      ]
    },
    {
      enunciado: `Em "${temaNome}", o que caracteriza uma alternativa tecnicamente correta em nível de prova?`,
      opcoes: [
        'A) Afirmação absoluta sem exceções ou contexto.',
        'B) Formulação alinhada a mecanismo, critério e contexto da questão.',
        'C) Linguagem vaga sem relação com achados do enunciado.',
        'D) Uso de jargão para parecer correto, sem conteúdo verificável.'
      ]
    },
    {
      enunciado: `Ao estudar "${temaNome}", qual erro de raciocínio é mais comum e deve ser evitado?`,
      opcoes: [
        'A) Integrar dados de história, exame e fisiopatologia.',
        'B) Diferenciar hipótese principal de diagnósticos diferenciais.',
        'C) Confundir achado associado com causa primária obrigatória.',
        'D) Reavaliar hipótese após novo dado objetivo.'
      ]
    },
    {
      enunciado: `Caso clínico curto sobre "${temaNome}": há duas hipóteses próximas. Qual elemento desempata melhor?`,
      opcoes: [
        'A) Dado semiológico/laboratorial discriminativo com valor preditivo no contexto.',
        'B) Opinião de preferência sem critério objetivo.',
        'C) Sinal inespecífico comum às duas hipóteses.',
        'D) Escolha pela alternativa com maior número de palavras.'
      ]
    },
    {
      enunciado: `Sobre integração interdisciplinar de "${temaNome}", qual alternativa é mais correta?`,
      opcoes: [
        'A) O tema não dialoga com semiologia, fisiopatologia ou terapêutica.',
        'B) O tema só é útil para prova teórica e não para prática.',
        'C) O tema integra base conceitual, interpretação clínica e tomada de decisão.',
        'D) O tema depende apenas de memorização de termos soltos.'
      ]
    }
  ];

  const selected = bases[localId];
  const letters = ['A', 'B', 'C', 'D'];
  const corretaLetra = letters[correct];

  const explicacoesOpcoes = {};
  letters.forEach((l, idx) => {
    if (idx === correct) {
      explicacoesOpcoes[l] = 'Esta alternativa é a correta porque mantém coerência entre enunciado, mecanismo e aplicação prática.';
    } else {
      explicacoesOpcoes[l] = 'Esta alternativa está incorreta porque apresenta simplificação indevida, contexto inadequado ou erro de interpretação do problema.';
    }
  });

  const explicacaoGeral = isClinical
    ? `A questão exige raciocínio clínico aplicado em "${temaNome}", priorizando integração entre dados do caso e critério objetivo.`
    : `A questão avalia compreensão estruturada de "${temaNome}", exigindo vínculo entre conceito, mecanismo e uso prático.`;

  const explicacao = [
    `Resumo: ${explicacaoGeral}`,
    `A) ${correct === 0 ? 'CORRETA' : 'INCORRETA'}. ${explicacoesOpcoes.A}`,
    `B) ${correct === 1 ? 'CORRETA' : 'INCORRETA'}. ${explicacoesOpcoes.B}`,
    `C) ${correct === 2 ? 'CORRETA' : 'INCORRETA'}. ${explicacoesOpcoes.C}`,
    `D) ${correct === 3 ? 'CORRETA' : 'INCORRETA'}. ${explicacoesOpcoes.D}`
  ].join('\n');

  return {
    materia: materiaId,
    enunciado: selected.enunciado,
    opcoes: selected.opcoes,
    correta: correct,
    explicacao,
    explicacao_geral: explicacaoGeral,
    explicacoes_opcoes: explicacoesOpcoes,
    tema: aula.id,
    dificuldade: isClinical ? 3 : 2,
    modulo
  };
}

function main() {
  const materias = JSON.parse(fs.readFileSync(MATERIAS_PATH, 'utf8'));
  const oldQuestoesRaw = fs.readFileSync(QUESTOES_PATH, 'utf8');

  ensureDir(BACKUP_DIR);
  const backupPath = path.join(BACKUP_DIR, `questoes_pre_round2_${nowStamp()}.json`);
  fs.writeFileSync(backupPath, oldQuestoesRaw, 'utf8');

  const moduleOne = Object.entries(materias)
    .filter(([, m]) => m.modulo === 1 && m.ativo !== false)
    .map(([materiaId, m]) => ({ materiaId, modulo: m.modulo, aulas: m.aulas || [] }));

  const generated = [];
  let id = 1;

  for (const disc of moduleOne) {
    for (const aula of disc.aulas) {
      for (let i = 0; i < 10; i++) {
        generated.push({ id: id++, ...buildQuestion(aula, disc.materiaId, disc.modulo, i) });
      }
    }
  }

  fs.writeFileSync(QUESTOES_PATH, JSON.stringify({ questoes: generated }, null, 2), 'utf8');

  const byMateria = {};
  for (const q of generated) byMateria[q.materia] = (byMateria[q.materia] || 0) + 1;

  console.log('Backup criado em:', backupPath);
  console.log('Total de questões novas:', generated.length);
  console.log('Por disciplina:', byMateria);
  console.log('Último id:', generated.length ? generated[generated.length - 1].id : 0);
}

main();
