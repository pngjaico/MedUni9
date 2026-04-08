import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.join(__dirname, '..');
const QUESTOES_PATH = path.join(ROOT, 'data', 'questoes.json');

function makeExp(geral, correta, mapa) {
  const letras = ['A', 'B', 'C', 'D'];
  const op = {};
  letras.forEach((l, i) => {
    op[l] = i === correta
      ? mapa.correta
      : mapa.erradas[i];
  });
  const texto = [
    `Resumo: ${geral}`,
    `A) ${correta === 0 ? 'CORRETA' : 'INCORRETA'}. ${op.A}`,
    `B) ${correta === 1 ? 'CORRETA' : 'INCORRETA'}. ${op.B}`,
    `C) ${correta === 2 ? 'CORRETA' : 'INCORRETA'}. ${op.C}`,
    `D) ${correta === 3 ? 'CORRETA' : 'INCORRETA'}. ${op.D}`
  ].join('\n');
  return { explicacao_geral: geral, explicacoes_opcoes: op, explicacao: texto };
}

const base = [
  {
    enunciado: 'Em anatomia descritiva, qual plano divide o corpo em porções anterior e posterior?',
    opcoes: [
      'A) Plano sagital.',
      'B) Plano coronal (frontal).',
      'C) Plano transversal (axial).',
      'D) Plano oblíquo.'
    ],
    correta: 1,
    dificuldade: 1,
    clinico: false
  },
  {
    enunciado: 'Paciente de 27 anos chega ao pronto atendimento após trauma no joelho direito durante futebol. Na ressonância em corte sagital, qual descrição anatômica está correta?',
    opcoes: [
      'A) O corte sagital divide o corpo em porções anterior e posterior.',
      'B) O compartimento medial está mais distante da linha média corporal.',
      'C) O corte sagital permite análise de estruturas em relação direita-esquerda no mesmo eixo.',
      'D) O menisco medial está lateral à tíbia no plano de referência.'
    ],
    correta: 2,
    dificuldade: 2,
    clinico: true
  },
  {
    enunciado: 'Qual combinação de termos direcionais está corretamente aplicada aos membros?',
    opcoes: [
      'A) Proximal: mais próximo do tronco; distal: mais distante do tronco.',
      'B) Proximal: mais superior no corpo inteiro; distal: mais inferior em qualquer segmento.',
      'C) Medial: mais próximo da pele; lateral: mais profundo.',
      'D) Superficial: mais próximo da linha média; profundo: mais lateral.'
    ],
    correta: 0,
    dificuldade: 1,
    clinico: false
  },
  {
    enunciado: 'Paciente de 64 anos, em acompanhamento por dor no quadril, realiza exame físico com limitação para abdução. Essa limitação descreve redução de movimento em qual plano predominante?',
    opcoes: [
      'A) Plano sagital.',
      'B) Plano transversal.',
      'C) Plano coronal (frontal).',
      'D) Plano oblíquo exclusivo.'
    ],
    correta: 2,
    dificuldade: 2,
    clinico: true
  },
  {
    enunciado: 'Paciente de 52 anos é atendido com coleção subfascial na face medial da coxa esquerda, aproximadamente 10 cm distal à prega inguinal. Para comunicar esse achado sem ambiguidade entre equipe clínica e cirúrgica, qual opção traduz melhor o uso correto da terminologia anatômica?',
    opcoes: [
      'A) Descrever apenas “abscesso na perna esquerda” para simplificar a comunicação.',
      'B) Registrar a localização com referência topográfica, lateralidade do paciente e relação proximal-distal.',
      'C) Substituir termos anatômicos por linguagem coloquial para evitar erro de interpretação.',
      'D) Informar somente profundidade da lesão, sem região nem marcos anatômicos.'
    ],
    correta: 1,
    dificuldade: 3,
    clinico: true
  },
  {
    enunciado: 'Na leitura de tomografia em cortes axiais, qual relação anatômica é mais diretamente avaliada nesse plano?',
    opcoes: [
      'A) Superior-inferior em continuidade longitudinal.',
      'B) Anterior-posterior em secção coronal.',
      'C) Direita-esquerda e anterior-posterior em fatias transversais.',
      'D) Exclusivamente superficial-profundo, sem lateralidade.'
    ],
    correta: 2,
    dificuldade: 2,
    clinico: false
  },
  {
    enunciado: 'Paciente de 33 anos, em teleatendimento após entorse de tornozelo, envia foto sem marcador de lado. Qual conduta reduz erro de interpretação anatômica?',
    opcoes: [
      'A) Solicitar nova imagem com lateralidade explícita e referência anatômica padronizada.',
      'B) Assumir automaticamente que a imagem corresponde ao lado dominante do paciente.',
      'C) Basear decisão de conduta apenas na intensidade da dor referida.',
      'D) Prescrever imobilização sem necessidade de orientação adicional.'
    ],
    correta: 0,
    dificuldade: 2,
    clinico: true
  },
  {
    enunciado: 'Em neuroanatomia, alguns eixos podem empregar termos rostral e caudal para complementar a orientação espacial. Qual alternativa expressa corretamente essa ideia?',
    opcoes: [
      'A) Rostral e caudal são sinônimos absolutos de medial e lateral.',
      'B) Rostral/caudal podem complementar a orientação crânio-caudal conforme o segmento analisado.',
      'C) Rostral equivale sempre a distal em membros superiores.',
      'D) Caudal substitui totalmente os termos superior e inferior em toda anatomia humana.'
    ],
    correta: 1,
    dificuldade: 2,
    clinico: false
  },
  {
    enunciado: 'Paciente de 71 anos, internado por dor abdominal, apresenta piora à palpação profunda em hipocôndrio direito. O cirurgião solicita descrição topográfica precisa e correlação com plano de imagem para discutir drenagem guiada. Qual conduta de comunicação anatômica é a mais adequada para segurança assistencial?',
    opcoes: [
      'A) Documentar dor “na barriga” sem delimitação regional para evitar excesso de detalhe.',
      'B) Relatar apenas o órgão suspeito, sem relação com marcos de superfície.',
      'C) Descrever região, lateralidade do paciente, profundidade e plano de corte utilizado no exame.',
      'D) Priorizar somente sinais vitais, pois topografia não altera decisão de abordagem.'
    ],
    correta: 2,
    dificuldade: 3,
    clinico: true
  },
  {
    enunciado: 'Qual afirmação está correta sobre circundução?',
    opcoes: [
      'A) É movimento único em torno de um único eixo fixo.',
      'B) Corresponde exclusivamente à rotação lateral de uma articulação.',
      'C) Representa combinação sequencial de flexão, abdução, extensão e adução.',
      'D) Ocorre apenas nas articulações fibrosas.'
    ],
    correta: 2,
    dificuldade: 3,
    clinico: false
  }
];

function main() {
  const data = JSON.parse(fs.readFileSync(QUESTOES_PATH, 'utf8'));
  const questoes = Array.isArray(data.questoes) ? data.questoes : [];
  const kept = questoes.filter((q) => !(q.materia === 'bmf1' && q.tema === 'bmf1_a1'));
  let nextId = kept.reduce((m, q) => Math.max(m, Number(q.id) || 0), 0) + 1;

  const novas = base.map((q, idx) => {
    const ex = makeExp(
      q.clinico
        ? 'Questão aplicada com terminologia anatômica para tomada de decisão clínica e comunicação segura entre equipes.'
        : 'Questão conceitual de anatomia com foco em planos, eixos e termos direcionais corretamente definidos.',
      q.correta,
      {
        correta: 'Correta: alternativa compatível com a definição anatômica e com a aplicação clínica solicitada.',
        erradas: {
          0: 'Incorreta: confunde plano, eixo ou termo direcional essencial.',
          1: 'Incorreta: usa referência anatômica inadequada para o contexto descrito.',
          2: 'Incorreta: interpretação incompatível com linguagem anatômica padronizada.',
          3: 'Incorreta: simplifica ou deturpa conceito básico necessário para decisão clínica.'
        }
      }
    );

    return {
      id: nextId++,
      materia: 'bmf1',
      tema: 'bmf1_a1',
      enunciado: q.enunciado,
      opcoes: q.opcoes,
      correta: q.correta,
      explicacao: ex.explicacao,
      explicacao_geral: ex.explicacao_geral,
      explicacoes_opcoes: ex.explicacoes_opcoes,
      dificuldade: q.dificuldade,
      modulo: 1
    };
  });

  const merged = [...kept, ...novas].sort((a, b) => Number(a.id) - Number(b.id));
  fs.writeFileSync(QUESTOES_PATH, JSON.stringify({ questoes: merged }, null, 2), 'utf8');

  console.log('Removidas bmf1_a1:', questoes.length - kept.length);
  console.log('Inseridas bmf1_a1:', novas.length);
}

main();
