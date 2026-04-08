import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.join(__dirname, '..');
const QPATH = path.join(ROOT, 'data', 'questoes.json');

const novas = [
  {
    enunciado: 'Na análise do processo saúde-doença, qual afirmação melhor representa o conceito de determinação social da saúde?',
    opcoes: [
      'A) O adoecimento resulta apenas de escolhas individuais, independentemente do contexto.',
      'B) Fatores sociais, econômicos e ambientais influenciam risco, acesso e desfecho em saúde.',
      'C) Determinantes sociais impactam somente doenças infecciosas.',
      'D) O território é irrelevante para planejamento em atenção primária.'
    ],
    correta: 1,
    dificuldade: 1
  },
  {
    enunciado: 'Paciente de 44 anos com hipertensão não controlada mora em área com baixa oferta de alimentos in natura e longas jornadas de trabalho. Qual conduta da equipe de APS está mais alinhada ao enfrentamento de vulnerabilidade social?',
    opcoes: [
      'A) Repetir prescrição e responsabilizar exclusivamente o paciente pela adesão.',
      'B) Construir plano terapêutico com metas factíveis e articulação com recursos comunitários.',
      'C) Encerrar seguimento por baixa adesão inicial.',
      'D) Encaminhar automaticamente para alta complexidade.'
    ],
    correta: 1,
    dificuldade: 2
  },
  {
    enunciado: 'Em epidemiologia social, qual exemplo caracteriza iniquidade em saúde?',
    opcoes: [
      'A) Diferença de incidência entre faixas etárias por curso natural de vida.',
      'B) Maior mortalidade evitável em grupos socialmente vulneráveis por barreiras de acesso.',
      'C) Variação sazonal de doenças respiratórias.',
      'D) Diferença entre métodos diagnósticos com sensibilidades distintas.'
    ],
    correta: 1,
    dificuldade: 1
  },
  {
    enunciado: 'Paciente de 29 anos com diabetes tipo 1 falta repetidamente às consultas por dificuldade de transporte e cuidado de filhos. Qual abordagem é mais adequada pela lógica do cuidado centrado em vulnerabilidades?',
    opcoes: [
      'A) Classificar como desinteresse e reduzir frequência de acompanhamento.',
      'B) Reorganizar acompanhamento com apoio matricial e estratégias de acesso territorial.',
      'C) Suspender monitoramento até melhora espontânea do vínculo.',
      'D) Priorizar somente ajustes de insulina sem investigar barreiras.'
    ],
    correta: 1,
    dificuldade: 2
  },
  {
    enunciado: 'Mulher de 63 anos, viúva, com depressão e dor crônica, vive sozinha e sem renda estável. Na estratificação de risco em APS, qual interpretação é mais consistente com o modelo biopsicossocial?',
    opcoes: [
      'A) Tratar apenas o sintoma predominante e postergar avaliação social.',
      'B) Integrar condições clínicas, saúde mental, suporte social e funcionalidade no plano de cuidado.',
      'C) Limitar conduta a encaminhamento único para especialista.',
      'D) Aguardar agravamento para acionar rede intersetorial.'
    ],
    correta: 1,
    dificuldade: 3
  },
  {
    enunciado: 'Qual indicador é mais útil para monitorar impacto de desigualdade social sobre desfechos sanitários em território adscrito?',
    opcoes: [
      'A) Taxa de mortalidade infantil estratificada por área de vulnerabilidade.',
      'B) Número absoluto de consultas médicas no município.',
      'C) Quantidade de protocolos clínicos publicados no ano.',
      'D) Média de permanência hospitalar estadual sem recorte territorial.'
    ],
    correta: 0,
    dificuldade: 2
  },
  {
    enunciado: 'Paciente de 51 anos com DPOC mora em domicílio com exposição contínua à fumaça de biomassa. Qual intervenção da equipe tem maior potencial de reduzir risco clínico e reincidência?',
    opcoes: [
      'A) Focar apenas broncodilatador de resgate sem ações no ambiente doméstico.',
      'B) Associar manejo farmacológico com intervenção educativa e redução de exposição domiciliar.',
      'C) Encaminhar para internação preventiva prolongada.',
      'D) Restringir cuidado ao atendimento de exacerbações agudas.'
    ],
    correta: 1,
    dificuldade: 2
  },
  {
    enunciado: 'No planejamento local em saúde, qual afirmação sobre território está correta?',
    opcoes: [
      'A) Território é apenas divisão geográfica administrativa, sem dimensão social.',
      'B) Território inclui dinâmica social, rede de apoio e condições de vida que afetam risco e cuidado.',
      'C) Território deve ser considerado somente em vigilância de doenças transmissíveis.',
      'D) A adscrição territorial limita atuação intersetorial da equipe.'
    ],
    correta: 1,
    dificuldade: 2
  },
  {
    enunciado: 'Paciente de 36 anos com obesidade, ansiedade e insegurança alimentar apresenta piora metabólica. A equipe discute cuidado longitudinal. Qual estratégia aumenta chance de efetividade terapêutica nesse contexto?',
    opcoes: [
      'A) Definir metas rígidas padronizadas sem negociação com o paciente.',
      'B) Estabelecer plano compartilhado com prioridades graduais, acompanhamento multiprofissional e revisão periódica.',
      'C) Fragmentar condutas em consultas isoladas sem coordenação.',
      'D) Encaminhar precocemente para cirurgia sem manejo clínico inicial.'
    ],
    correta: 1,
    dificuldade: 3
  },
  {
    enunciado: 'Qual alternativa melhor diferencia fator de risco individual de determinante social da saúde?',
    opcoes: [
      'A) Sedentarismo é determinante social, enquanto renda é fator biológico.',
      'B) Hábito alimentar é exclusivamente determinante estrutural e não individual.',
      'C) Tabagismo pode ser fator individual, enquanto escolaridade e renda atuam como determinantes sociais.',
      'D) Determinantes sociais são variáveis clínicas medidas apenas em prontuário hospitalar.'
    ],
    correta: 2,
    dificuldade: 3
  }
];

function exp(q, idx) {
  const letters = ['A', 'B', 'C', 'D'];
  const e = {};
  for (let i = 0; i < 4; i++) {
    const txt = q.opcoes[i].replace(/^[A-D]\)\s*/, '');
    e[letters[i]] = i === q.correta
      ? `Correta: a alternativa aborda diretamente o núcleo do problema apresentado (${txt}).`
      : `Incorreta: a opção não resolve o foco central do caso/tema ou reduz indevidamente a complexidade (${txt}).`;
  }
  const geral = `A questão ${idx + 1} exige leitura integrada de vulnerabilidade, contexto territorial e decisão em APS.`;
  const explicacao = [
    `Resumo: ${geral}`,
    `A) ${q.correta === 0 ? 'CORRETA' : 'INCORRETA'}. ${e.A}`,
    `B) ${q.correta === 1 ? 'CORRETA' : 'INCORRETA'}. ${e.B}`,
    `C) ${q.correta === 2 ? 'CORRETA' : 'INCORRETA'}. ${e.C}`,
    `D) ${q.correta === 3 ? 'CORRETA' : 'INCORRETA'}. ${e.D}`
  ].join('\n');
  return { explicacao_geral: geral, explicacoes_opcoes: e, explicacao };
}

function main() {
  const data = JSON.parse(fs.readFileSync(QPATH, 'utf8'));
  const arr = data.questoes || [];
  const keep = arr.filter((q) => !(q.materia === 'sus' && q.tema === 'sus_a1'));
  let maxId = keep.reduce((m, q) => Math.max(m, Number(q.id) || 0), 0);
  const items = novas.map((q, i) => ({
    id: ++maxId,
    materia: 'sus',
    tema: 'sus_a1',
    enunciado: q.enunciado,
    opcoes: q.opcoes,
    correta: q.correta,
    dificuldade: q.dificuldade,
    modulo: 1,
    ...exp(q, i)
  }));
  data.questoes = [...keep, ...items].sort((a, b) => a.id - b.id);
  fs.writeFileSync(QPATH, JSON.stringify(data, null, 2), 'utf8');
  console.log('sus_a1 removidas:', arr.length - keep.length);
  console.log('sus_a1 inseridas:', items.length);
}

main();
