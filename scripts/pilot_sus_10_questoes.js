import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.join(__dirname, '..');
const QUESTOES_PATH = path.join(ROOT, 'data', 'questoes.json');

function exp(geral, correta) {
  const letters = ['A', 'B', 'C', 'D'];
  const map = {};
  for (let i = 0; i < 4; i++) {
    map[letters[i]] = i === correta
      ? 'Correta: alternativa alinhada aos princípios do SUS e ao contexto clínico-administrativo apresentado.'
      : 'Incorreta: alternativa contradiz princípio, diretriz ou fluxo operacional esperado no SUS.'
  }
  const texto = [
    `Resumo: ${geral}`,
    `A) ${correta === 0 ? 'CORRETA' : 'INCORRETA'}. ${map.A}`,
    `B) ${correta === 1 ? 'CORRETA' : 'INCORRETA'}. ${map.B}`,
    `C) ${correta === 2 ? 'CORRETA' : 'INCORRETA'}. ${map.C}`,
    `D) ${correta === 3 ? 'CORRETA' : 'INCORRETA'}. ${map.D}`
  ].join('\n');
  return { explicacao_geral: geral, explicacoes_opcoes: map, explicacao: texto };
}

const SUS_PILOTO = [
  {
    tema: 'sus_a1',
    enunciado: 'Paciente com diabetes e insegurança alimentar apresenta baixa adesão ao tratamento. Qual é a interpretação mais adequada desse cenário na APS?',
    opcoes: [
      'A) O problema é exclusivamente de comportamento individual e não exige ação intersetorial.',
      'B) Determinantes sociais impactam o cuidado e devem ser incorporados ao plano terapêutico.',
      'C) A conduta correta é focar apenas na prescrição farmacológica, sem abordagem familiar.',
      'D) A equipe deve aguardar descompensação clínica para acionar a rede social.'
    ],
    correta: 1,
    dificuldade: 3,
    geral: 'Atenção primária no SUS exige leitura de vulnerabilidade social junto ao quadro clínico, com cuidado integral e articulação em rede.'
  },
  {
    tema: 'sus_a2',
    enunciado: 'No período anterior à Constituição de 1988, o acesso à assistência em saúde no Brasil era predominantemente organizado de que forma?',
    opcoes: [
      'A) Universal e gratuito para toda a população, financiado por orçamento único.',
      'B) Vinculado à previdência e ao vínculo formal de trabalho para parte dos serviços.',
      'C) Integralmente municipalizado com forte controle social local.',
      'D) Baseado em equipes de saúde da família como principal modelo nacional.'
    ],
    correta: 1,
    dificuldade: 2,
    geral: 'Historicamente, antes do SUS, o modelo era segmentado e fortemente vinculado à lógica previdenciária.'
  },
  {
    tema: 'sus_a3',
    enunciado: 'A 8ª Conferência Nacional de Saúde teve papel central na reforma sanitária brasileira porque:',
    opcoes: [
      'A) Definiu o SUS como sistema exclusivamente hospitalar e de alta complexidade.',
      'B) Restringiu participação social para acelerar decisões técnicas federais.',
      'C) Consolidou a defesa da saúde como direito e base para o modelo universal.',
      'D) Substituiu o princípio da integralidade por programas verticais isolados.'
    ],
    correta: 2,
    dificuldade: 2,
    geral: 'A reforma sanitária ampliou a concepção de saúde como direito social e fundamentou a construção constitucional do SUS.'
  },
  {
    tema: 'sus_a4',
    enunciado: 'Paciente com suspeita de câncer é acolhido na UBS e precisa de confirmação diagnóstica. Qual fluxo está mais alinhado às Leis Orgânicas do SUS?',
    opcoes: [
      'A) Encaminhamento ordenado pela rede, com referência e contrarreferência para continuidade do cuidado.',
      'B) Busca direta e isolada de serviço terciário, sem coordenação da atenção básica.',
      'C) Dependência de capacidade de pagamento para acesso ao diagnóstico especializado.',
      'D) Encaminhamento apenas após internação em pronto-socorro.'
    ],
    correta: 0,
    dificuldade: 3,
    geral: 'Regionalização e hierarquização pressupõem rede coordenada, com APS organizando o cuidado e retorno de informação.'
  },
  {
    tema: 'sus_a5',
    enunciado: 'Município com aumento de mortalidade materna define prioridade anual de gestão. Qual ação está mais coerente com o Pacto pela Vida?',
    opcoes: [
      'A) Reduzir pré-natal para concentrar recursos em campanhas sazonais.',
      'B) Priorizar vigilância, linha de cuidado materno-infantil e acesso oportuno à rede.',
      'C) Transferir integralmente a responsabilidade para a atenção terciária.',
      'D) Manter indicadores sem meta formal para evitar distorção de avaliação.'
    ],
    correta: 1,
    dificuldade: 2,
    geral: 'O Pacto pela Vida orienta prioridades sanitárias com metas e monitoramento de indicadores de impacto.'
  },
  {
    tema: 'sus_a6',
    enunciado: 'Paciente com DPOC descompensada retorna repetidamente ao pronto atendimento sem seguimento ambulatorial. Qual intervenção de gestão tende a reduzir reinternações?',
    opcoes: [
      'A) Fragmentar atendimento por especialidade sem coordenação territorial.',
      'B) Organizar linha de cuidado na RAS com APS coordenadora e plano de alta.',
      'C) Concentrar todo cuidado em hospital de referência, sem vinculação à UBS.',
      'D) Suspender contrarreferência para acelerar o giro de leitos.'
    ],
    correta: 1,
    dificuldade: 3,
    geral: 'A Rede de Atenção à Saúde deve integrar pontos assistenciais e reduzir descontinuidade, com APS coordenando cuidado longitudinal.'
  },
  {
    tema: 'sus_a7',
    enunciado: 'Conselho local de saúde questiona corte de financiamento da atenção básica. No Pacto em Defesa do SUS, qual eixo é central nesse debate?',
    opcoes: [
      'A) Fortalecimento do SUS como política pública de Estado com participação social.',
      'B) Substituição do controle social por gestão exclusivamente técnica centralizada.',
      'C) Redução de transparência orçamentária para proteger a governabilidade.',
      'D) Priorização de ações de mercado em detrimento da universalidade.'
    ],
    correta: 0,
    dificuldade: 2,
    geral: 'Defesa do SUS envolve sustentabilidade política e social, com financiamento, transparência e participação cidadã.'
  },
  {
    tema: 'sus_a8',
    enunciado: 'Paciente idosa acamada com múltiplas comorbidades depende de cuidado contínuo no território. Qual atributo da APS é mais decisivo nesse caso?',
    opcoes: [
      'A) Atenção episódica focada apenas em demanda espontânea aguda.',
      'B) Longitudinalidade e coordenação do cuidado pela equipe de referência.',
      'C) Encaminhamento precoce de todos os problemas para nível terciário.',
      'D) Priorização exclusiva de protocolos sem plano terapêutico singular.'
    ],
    correta: 1,
    dificuldade: 3,
    geral: 'Na ESF, longitudinalidade e coordenação do cuidado sustentam seguimento de condições crônicas complexas.'
  },
  {
    tema: 'sus_a9',
    enunciado: 'Equipe da ESF identifica repetidas faltas escolares por doença respiratória em uma família. Qual ferramenta favorece análise do contexto relacional e territorial?',
    opcoes: [
      'A) Apenas escala de dor e saturação em consulta individual.',
      'B) Genograma e ecomapa para mapear vínculos e recursos de apoio.',
      'C) Solicitação imediata de tomografia para todos os conviventes.',
      'D) Encaminhamento direto para internação social sem avaliação familiar.'
    ],
    correta: 1,
    dificuldade: 2,
    geral: 'Ferramentas familiares e comunitárias ajudam a compreender rede de apoio e vulnerabilidades para planejamento de cuidado.'
  },
  {
    tema: 'sus_a4',
    enunciado: 'Paciente em hemodiálise muda de município e perde seguimento por falha de comunicação entre serviços. Qual medida de gestão é mais adequada para evitar esse desfecho?',
    opcoes: [
      'A) Definir referência e contrarreferência formal, com responsabilidade compartilhada entre pontos da rede.',
      'B) Delegar ao paciente toda a transferência de informações clínicas.',
      'C) Restringir acesso à nova rede até abertura de novo cadastro completo.',
      'D) Encerrar vínculo prévio sem transição assistencial estruturada.'
    ],
    correta: 0,
    dificuldade: 3,
    geral: 'Continuidade do cuidado no SUS depende de integração entre serviços e comunicação assistencial estruturada.'
  }
];

function main() {
  const data = JSON.parse(fs.readFileSync(QUESTOES_PATH, 'utf8'));
  const current = Array.isArray(data.questoes) ? data.questoes : [];

  const semSus = current.filter((q) => q.materia !== 'sus');
  let nextId = semSus.reduce((m, q) => Math.max(m, Number(q.id) || 0), 0) + 1;

  const novas = SUS_PILOTO.map((q) => {
    const ex = exp(q.geral, q.correta);
    return {
      id: nextId++,
      materia: 'sus',
      enunciado: q.enunciado,
      opcoes: q.opcoes,
      correta: q.correta,
      ...ex,
      tema: q.tema,
      dificuldade: q.dificuldade,
      modulo: 1
    };
  });

  const merged = [...semSus, ...novas].sort((a, b) => Number(a.id) - Number(b.id));
  fs.writeFileSync(QUESTOES_PATH, JSON.stringify({ questoes: merged }, null, 2), 'utf8');

  console.log('SUS antigo removido:', current.length - semSus.length);
  console.log('SUS novo inserido:', novas.length);
  console.log('Total final:', merged.length);
}

main();
