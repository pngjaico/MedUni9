/**
 * Anexa 60 questões (12×5 aulas) e 60 flashcards para tecnica_operatoria tcar_a1–a5.
 * Gabarito: 3× cada índice 0–12 por aula (≈25% A/B/C/D).
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const ROOT = path.join(__dirname, '..');
const Q_PATH = path.join(ROOT, 'data', 'questoes.json');
const F_PATH = path.join(ROOT, 'data', 'flashcards.json');

const PAT12 = [0, 1, 2, 3, 0, 1, 2, 3, 0, 1, 2, 3];
const MATERIA = 'tecnica_operatoria';
const MODULO = 6;

function buildExplainLines(correta, textsObj) {
  const L = ['A', 'B', 'C', 'D'];
  const explicacoes_opcoes = {};
  let explicacao = `Resumo: ${textsObj.summary}\n`;
  for (let i = 0; i < 4; i++) {
    const tag = i === correta ? 'Correta' : 'Incorreta';
    const line = textsObj[i];
    explicacoes_opcoes[L[i]] = `${tag}: ${line}`;
    explicacao += `${L[i]}) ${i === correta ? 'CORRETA' : 'INCORRETA'}. ${explicacoes_opcoes[L[i]]}\n`;
  }
  return { explicacoes_opcoes, explicacao: explicacao.trimEnd() };
}

/** Coloca a alternativa correta (índice medIdx no arranjo original) na posição 0. */
function permuteCorrectFirst(opcoes, textsObj, medIdx) {
  const newO = [0, 1, 2, 3].map((k) => opcoes[(medIdx + k) % 4]);
  const newTexts = {
    summary: textsObj.summary,
    0: textsObj[(medIdx + 0) % 4],
    1: textsObj[(medIdx + 1) % 4],
    2: textsObj[(medIdx + 2) % 4],
    3: textsObj[(medIdx + 3) % 4],
  };
  return { opcoes: newO, texts: newTexts };
}

/** Rotação: a alternativa que estava na posição 0 passa para o índice `pat` (gabarito final). */
function rotateToPat(opcoes, textsObj, pat) {
  const newO = [0, 1, 2, 3].map((j) => opcoes[(j - pat + 4) % 4]);
  const newTexts = {
    summary: textsObj.summary,
    0: textsObj[(0 - pat + 4) % 4],
    1: textsObj[(1 - pat + 4) % 4],
    2: textsObj[(2 - pat + 4) % 4],
    3: textsObj[(3 - pat + 4) % 4],
  };
  return { opcoes: newO, texts: newTexts };
}

const buckets = {
  tcar_a1: [
    {
      enunciado:
        'Antissepsia, na prática cirúrgica, objetiva principalmente:',
      opcoes: [
        'Reduzir microrganismos em tecido vivo com agente químico adequado',
        'Esterilizar instrumental metálico em autoclave',
        'Eliminar esporos de superfícies de mesa não crítica',
        'Substituir a troca de luvas perfuradas',
      ],
      texts: {
        summary:
          'Antissepsia atua em tecido vivo; esterilização e desinfecção têm alvos distintos.',
        0: 'Antissepsia reduz flora em pele/mucosas vivas com antisséptico.',
        1: 'Esterilização de metal é processo físico/químico em artigos, não antissepsia de pele.',
        2: 'Redução em superfície refere-se mais a desinfecção, não antissepsia.',
        3: 'Perfuração de luva exige troca; antissepsia não corrige quebra de barreira.',
      },
    },
    {
      enunciado: 'Esterilização é definida como processo que:',
      opcoes: [
        'Reduz parcialmente bactérias vegetativas em objetos',
        'Garante ausência apenas de fungos filamentosos',
        'Elimina todas as formas microbianas, inclusive esporos',
        'Equivale à antissepsia bem executada da pele',
      ],
      texts: {
        summary:
          'Esterilização mira eliminação completa de vida microbiana, incluindo esporos.',
        0: 'Redução parcial é desinfecção ou antissepsia, não esterilização.',
        1: 'Não se restringe a fungos.',
        2: 'Definição clássica inclui destruição de esporos.',
        3: 'Pele não é esterilizada; usa-se antissepsia.',
      },
    },
    {
      enunciado:
        'Em relação à assepsia operatória, qual afirmação é mais precisa?',
      opcoes: [
        'Resume-se ao uso de luva estéril pelo cirurgião',
        'É sinônimo de desinfecção de piso e macas',
        'Conjunto de medidas para impedir contaminação do campo e do ato cirúrgico',
        'Aplica-se somente ao paciente, não à equipe',
      ],
      texts: {
        summary:
          'Assepsia protege o procedimento e o campo; envolve equipe, fluxo e técnica.',
        0: 'Luva é um elemento, não o conceito inteiro.',
        1: 'Desinfecção ambiental complementa, mas não define assepsia cirúrgica.',
        2: 'Conceito abrange barreiras e conduta para evitar introdução de germes.',
        3: 'Equipe e paciente integram a cadeia asséptica.',
      },
    },
    {
      enunciado:
        'Na antissepsia de pele antes de incisão, a orientação técnica usual do gesto é:',
      opcoes: [
        'Da periferia para o centro, voltando para redistribuir produto',
        'Circular aleatório sem critério de área',
        'Somente horizontal em um único passe sem tempo de contato',
        'Do centro para a periferia, sem retornar ao centro com a mesma compressa',
      ],
      texts: {
        summary:
          'Movimento centro-periferia evita reintroduzir contaminantes na zona da incisão.',
        0: 'Periferia-centro arrasta germes para o centro.',
        1: 'Falta lógica de barreira.',
        2: 'Tempo de ação e técnica padronizada importam.',
        3: 'Evita recontaminar área central preparada.',
      },
    },
    {
      enunciado:
        'O indicador biológico em ciclo de esterilização visa principalmente:',
      opcoes: [
        'Demonstrar morte microbiana eficaz frente ao processo validado',
        'Substituir leitura de temperatura no painel do equipamento',
        'Comprovar apenas que o pacote esteve no setor de expurgo',
        'Medir umidade relativa exclusivamente da sala limpa',
      ],
      texts: {
        summary:
          'Indicador biológico valida letalidade microbiana; físico e químico têm outros papéis.',
        0: 'Uso de esporos resistentes testa eficácia do ciclo.',
        1: 'Parâmetro físico ainda é necessário; papéis são complementares.',
        2: 'Setor de expurgo não valida esterilização.',
        3: 'Umidade ambiente não é o objetivo do biológico.',
      },
    },
    {
      enunciado:
        'Clorexidina alcoólica, em preparo cutâneo, costuma se destacar por:',
      opcoes: [
        'Não precisar de tempo de secagem antes da incisão',
        'Apresentar ação residual prolongada em pele, com início rápido',
        'Ser primeira escolha para irrigação de câmara anterior sem restrição',
        'Substituir o controle físico de ciclo em autoclave',
      ],
      texts: {
        summary:
          'Clorexidina alcoólica combina rapidez e efeito residual; há contraindicações (mucosa/olho).',
        0: 'Secagem adequada continua obrigatória.',
        1: 'Perfil de ação residual é vantagem clássica frente a muitos esquemas.',
        2: 'Uso ocular/mucoso não é livre; há risco e contraindicações.',
        3: 'Validação de autoclave não se substitui por antisséptico.',
      },
    },
    {
      enunciado:
        'Suspeita de quebra de esterilidade do campo durante o procedimento. Conduta adequada:',
      opcoes: [
        'Ignorar se o sangramento for pequeno',
        'Prosseguir sem comunicar para não atrasar cirurgia',
        'Comunicar imediatamente, repor barreira/material e ajustar técnica',
        'Aplicar apenas mais antisséptico sobre campo já montado',
      ],
      texts: {
        summary:
          'Quebra de campo exige reconhecimento verbal e correção, não “tapar” o problema.',
        0: 'Gravidade não depende do volume de sangue.',
        1: 'Comunicação é regra de segurança.',
        2: 'Restabelecer condições assépticas ou substituir material contaminado.',
        3: 'Campo aberto não se “reasssepta” com disfarce superficial.',
      },
    },
    {
      enunciado:
        'Indicador químico interno de pacote esterilizado informa, em geral, que:',
      opcoes: [
        'O material é aprovado clinicamente sem necessidade de rastreio de lote',
        'O teste biológico do dia foi negativo sem processar amostra',
        'A embalagem dispensa tempo de exposição mínimo',
        'O pacote foi exposto à condição do processo de esterilização',
      ],
      texts: {
        summary:
          'Indicador químico documenta exposição ao ciclo; biológico valida letalidade.',
        0: 'Rastreabilidade e outros controles permanecem necessários.',
        1: 'Químico não substitui biológico.',
        2: 'Parâmetros de ciclo continuam obrigatórios.',
        3: 'Confirma passagem pelo processo conforme classe do indicador.',
      },
    },
    {
      enunciado:
        'Antes da primeira incisão, após antissepsia alcoólica, é fundamental:',
      opcoes: [
        'Respeitar tempo de ação e secagem do antisséptico antes de campos e bisturi',
        'Iniciar a incisão com a pele ainda exuberantemente úmida de álcool',
        'Pular antissepsia se o paciente já tomou banho no dia',
        'Utilizar apenas compressa seca sem produto se houver alergia não investigada',
      ],
      texts: {
        summary:
          'Secagem e tempo de contato influenciam eficácia e segurança (ex.: vapor de álcool).',
        0: 'Evita incisão com campo úmido e vapor inflamável.',
        1: 'Umidade excessiva é erro que compromete técnica e risco térmico.',
        2: 'Banho não substitui preparo de pele em sala.',
        3: 'Alergia deve ser investigada e substituir antisséptico com critério, não omitir preparo.',
      },
    },
    {
      enunciado:
        'Desinfecção de superfície não crítica difere da esterilização porque:',
      opcoes: [
        'Garante ausência total de esporos em qualquer artigo',
        'Reduz carga microbiana, mas não equivale a eliminar toda vida microbiana como na esterilização',
        'Só age contra vírus; bactérias resistem sempre',
        'Só pode ser feita com autoclave portátil',
      ],
      texts: {
        summary:
          'Desinfecção tem nível de letalidade menor que esterilização.',
        0: 'Ausência de esporos é meta da esterilização.',
        1: 'Definição operacional correta do nível intermediário.',
        2: 'Espectro e eficácia variam com agente e tempo; afirmação é falsa.',
        3: 'Autoclave é esterilização, não desinfecção usual de superfície.',
      },
    },
    {
      enunciado:
        'Em cirurgia geral hospitalar, método frequente de esterilização de artigos compatíveis é:',
      opcoes: [
        'Irradiação ultravioleta de bancada como único passo',
        'Autoclave com vapor saturado sob pressão em ciclo validado',
        'Imersão em álcool 70% por 30 segundos sem enxágue',
        'Secagem ao ar ambiente de instrumental após uso',
      ],
      texts: {
        summary:
          'Vapor sob pressão é padrão para muitos artigos; requer validação e embalagem.',
        0: 'UV tem penetração limitada e não substitui ciclo termo.',
        1: 'Processo clássico bem estabelecido.',
        2: 'Álcool não esteriliza instrumental.',
        3: 'Secagem não esteriliza.',
      },
    },
    {
      enunciado:
        'Sobre embalagem e esterilização de instrumental, é correto afirmar que:',
      opcoes: [
        'Pacote rasgado pode ser usado se o interior “parecer” íntegro',
        'Indicador químico ausente dispensa abertura em sala',
        'Lote e validade não precisam ser conferidos pelo usuário',
        'Sem embalagem adequada e rastreabilidade não há garantia de esterilização válida para uso',
      ],
      texts: {
        summary:
          'Integridade, indicadores e rastreio são parte da cadeia de segurança.',
        0: 'Integridade da barreira é critério rígido.',
        1: 'Falta de indicador exige segregação e análise.',
        2: 'Usuário deve conferir identificação.',
        3: 'Barreira estéril e documentação são inseparáveis do conceito de uso seguro.',
      },
    },
  ],
  tcar_a2: [
    {
      enunciado: 'Área restrita do centro cirúrgico inclui tipicamente:',
      opcoes: [
        'Estacionamento externo e refeitório do hospital',
        'Recepção administrativa sem vestimenta especial',
        'Sala cirúrgica e adjacências com barreira máxima junto ao campo',
        'Farmácia central aberta ao público',
      ],
      texts: {
        summary:
          'Zona restrita aproxima-se do campo e exige maior controle de circulação e paramentação.',
        0: 'Área não restrita.',
        1: 'Circulação geral.',
        2: 'Definição de proximidade crítica ao ato.',
        3: 'Ambiente não ligado ao fluxo cirúrgico restrito.',
      },
    },
    {
      enunciado:
        'Fluxo de materiais limpos e contaminados no bloco deve ser, idealmente:',
      opcoes: [
        'Bidirecional no mesmo corredor para ganhar tempo',
        'Convergente na mesa do instrumentador sem marcação',
        'Aleatório conforme disponibilidade de staff',
        'Unidirecional, com rotas definidas para evitar contaminação cruzada',
      ],
      texts: {
        summary:
          'Separação lógica de trajetos reduz cruzamento sujo/limpo.',
        0: 'Cruzamento é proscrito.',
        1: 'Mesa estéril não recebe retorno de contaminado.',
        2: 'Organização não é opcional.',
        3: 'Princípio de segurança estrutural.',
      },
    },
    {
      enunciado:
        'A roupa “privativa” do centro cirúrgico destina-se principalmente a:',
      opcoes: [
        'Substituir o scrub e campo estéril do cirurgião',
        'Uso exclusivo no bloco como barreira básica de ambiente, sem levar a áreas externas',
        'Proteção contra radiação ionizante isolada',
        'Identificar hierarquia médica apenas por cor',
      ],
      texts: {
        summary:
          'Privativa limita contaminação partindo do corpo para o ambiente controlado.',
        0: 'Não substitui paramentação para campo.',
        1: 'Conceito de barreira de bloco com restrição de uso externo.',
        2: 'Objetivo principal não é radioproteção.',
        3: 'Finalidade é controle infeccioso, não formal.',
      },
    },
    {
      enunciado:
        'Área semirrestrita difere da restrita sobretudo porque:',
      opcoes: [
        'Permite street clothes e calçados externos',
        'Exige o mesmo campo aberto da cirurgia',
        'Há circulação controlada e traje adequado, mas menor proximidade ao campo que a zona restrita crítica',
        'É equivalente ao estacionamento coberto',
      ],
      texts: {
        summary:
          'Camadas de controle aumentam à medida que se chega ao campo.',
        0: 'Ainda há exigências de vestimenta.',
        1: 'Campo só na sala adequada.',
        2: 'Gradiente de proteção.',
        3: 'Não é área externa.',
      },
    },
    {
      enunciado:
        'Frente do avental e mangas estéreis funcionalmente são consideradas:',
      opcoes: [
        'Zonas potencialmente contaminadas como o dorso do tronco',
        'Áreas não seguras abaixo da cintura sem exceção',
        'Áreas habitualmente tratadas como estéreis para manipulação próxima ao campo',
        'Equivalentes à pele do paciente não preparada',
      ],
      texts: {
        summary:
          'Paramentação define zona “esterilizável” frontal versus dorso/cintura inferior.',
        0: 'Dorso não é tratado como estéril.',
        1: 'Abaixo da cintura não é zona segura.',
        2: 'Frente e mangas são usadas como barreira válida.',
        3: 'Paciente tem antissepsia própria.',
      },
    },
    {
      enunciado:
        'Time-out cirúrgico imediatamente antes da incisão visa:',
      opcoes: [
        'Substituir consentimento e marcação se já houve discussão informal',
        'Reduzir número de compressas disponíveis na mesa',
        'Pausa de segurança: conferir paciente, sítio, lateralidade e itens críticos',
        'Documentar tempo operatório em minutos cirúrgicos',
      ],
      texts: {
        summary:
          'Checklist WHO/time-out reduz erro de lado, procedimento e equipe despreparada.',
        0: 'Consentimento e marcação permanecem obrigatórios.',
        1: 'Não é inventário restritivo mal interpretado.',
        2: 'Definição correta da pausa.',
        3: 'Não é cronometria de peça.',
      },
    },
    {
      enunciado:
        'Erro comum de paramentação que pode contaminar campo:',
      opcoes: [
        'Manter máscara cobrindo nariz fixa sem ajustá-la com as mãos',
        'Apoiar braços em suporte quando possível',
        'Ajustar máscara tocando região frontal estéril do campo',
        'Confirmar integridade das luvas após manuseio externo',
      ],
      texts: {
        summary:
          'Mãos “em campo” não tocam face; quebra de técnica vem de gestos reflexos.',
        0: 'Correto.',
        1: 'Melhora ergonomia.',
        2: 'Contaminação típica.',
        3: 'Boa prática.',
      },
    },
    {
      enunciado:
        'Material estéril armazenado no bloco deve, em regra:',
      opcoes: [
        'Ficar úmido dentro de saco plástico comum sem identificação',
        'Permitir empilhamento sem limite que comprima indicadores',
        'Estar seco, identificado, com validade e integridade de embalagem verificável',
        'Ser reprocessado automaticamente após um único uso sem critério',
      ],
      texts: {
        summary:
          'Armazenamento conserva barreira microbiana e rastreio.',
        0: 'Umidade compromete.',
        1: 'Compressão pode romper barreira.',
        2: 'Padrão mínimo.',
        3: 'Reprocessamento segue normas, não é automático.',
      },
    },
    {
      enunciado:
        'Circulante, na lógica de sala cirúrgica, posiciona-se para:',
      opcoes: [
        'Realizar diérese principal no lugar do residente',
        'Fornecer suprimentos fora do campo sem contaminá-lo e sem tocar instrumental estéril aberto',
        'Substituir o instrumentador na passagem de pinças sobre o campo',
        'Realizar anestesia geral isoladamente',
      ],
      texts: {
        summary:
          'Circulante apoia sem invadir zona estéril da mesa montada.',
        0: 'Papel do cirurgião/auxiliar.',
        1: 'Definição clássica.',
        2: 'Instrumentador cuida da mesa estéril.',
        3: 'Anestesista é função distinta.',
      },
    },
    {
      enunciado:
        'Ao duvidar se uma parte da barreira está contaminada, conduta tecnicamente segura:',
      opcoes: [
        'Assumir que segue estéril se ninguém viu o toque',
        'Ignorar quando o procedimento está quase terminando',
        'Tratar como contaminado e repor/trocar o necessário',
        'Passar solução alcoólica sobre luva perfurada sem trocá-la',
      ],
      texts: {
        summary:
          'Na dúvida, quebrou: refaz barreira.',
        0: 'Risco inaceitável.',
        1: 'Prazo não desculpa violação.',
        2: 'Princípio básico.',
        3: 'Perfuração exige troca de luva.',
      },
    },
    {
      enunciado:
        'Caixa cirúrgica estéril aberta em sala deve ser conferida quanto a:',
      opcoes: [
        'Somente aparência estética do pano',
        'Integridade da embalagem, umidade indevida e validade antes da abertura no campo',
        'Cor do instrumental exclusivamente',
        'Peso total sem critério de conteúdo',
      ],
      texts: {
        summary:
          'Inspeção visual e documentação precedem abertura.',
        0: 'Insuficiente.',
        1: 'Checklist mínimo real.',
        2: 'Cor não valida esterilidade.',
        3: 'Peso não substitui conferência.',
      },
    },
    {
      enunciado:
        '“Time-out” mal realizado costuma falhar por:',
      opcoes: [
        'Ser lido em voz alta com confirmação ativa da equipe',
        'Integrar lateralidade e site marcados antes do corte',
        'Tornar-se ritual sem alterar conduta quando há discrepância',
        'Incluir antibioticoprofilaxia quando indicada',
      ],
      texts: {
        summary:
          'Checklist só protege se mudar plano quando há erro detectado.',
        0: 'Comportamento desejável.',
        1: 'Elemento essencial.',
        2: 'Falha de implementação real.',
        3: 'Item válido de checklist.',
      },
    },
  ],
  tcar_a3: [
    {
      enunciado:
        'Diérese corresponde, em cirurgia, a:',
      opcoes: [
        'Abertura de planos anatômicos por corte, dissecção ou energia adequada',
        'Somente ligaduras definitivas de pedículos volumosos',
        'Fechamento por planos com nós contínuos',
        'Reposicionamento do paciente na mesa',
      ],
      texts: {
        summary:
          'Tempos clássicos: diérese abre, hemostasia controla sangue, síntese aproxima.',
        0: 'Abertura é diérese.',
        1: 'Hemostasia.',
        2: 'Síntese.',
        3: 'Logística de mesa.',
      },
    },
    {
      enunciado:
        'Hemostasia adequada antes da síntese visa principalmente:',
      opcoes: [
        'Eliminar necessidade de contagem de compressas',
        'Manter campo visível, reduzir sangramento e estabilizar paciente para fechamento seguro',
        'Substituir drenagem em toda cirurgia',
        'Adiar revisão de planos profundos',
      ],
      texts: {
        summary:
          'Visibilidade e hemodinâmica precedem fechamento definitivo.',
        0: 'Contagem é independente.',
        1: 'Objetivo técnico e clínico.',
        2: 'Drenagem é decisão à parte.',
        3: 'Revisão não deve ser adiada.',
      },
    },
    {
      enunciado:
        'Síntese tecidual deve respeitar, entre outros:',
      opcoes: [
        'Apenas velocidade de fechamento em qualquer tecido',
        'Planos anatômicos, tensão adequada e perfusão de bordas',
        'Uso exclusivo de fio grosso para “segurança aparente”',
        'Ignorar eliminação de espaço morto quando indicado',
      ],
      texts: {
        summary:
          'Fechamento é biofísico: plano, tensão, vascularização.',
        0: 'Trauma e isquemia importam.',
        1: 'Conjunto correto.',
        2: 'Calibre excessivo machuca.',
        3: 'Espaço morto pode complicar.',
      },
    },
    {
      enunciado:
        'Tesoura Metzenbaum é mais adequada, em regra, para:',
      opcoes: [
        'Fáscia espessa e tendão sem funículo separado',
        'Tecido delicado e dissecção fina',
        'Corte de osso cortical',
        'Amputação traumática em emergência sem hemostasia',
      ],
      texts: {
        summary:
          'Metzenbaum: delicada; Mayo: mais densa.',
        0: 'Perfil da Mayo.',
        1: 'Uso clássico Metzenbaum.',
        2: 'Serra/ostetomia, não tesoura Metzenbaum.',
        3: 'Não define instrumento; cenário inválido como foco.',
      },
    },
    {
      enunciado:
        'Pinça hemostática tipo mosquito costuma servir para:',
      opcoes: [
        'Preensão de víscera oca friável sem sangramento',
        'Clampar vasos pequenos ou bordas com sangramento localizado com precisão',
        'Substituir afastador de grande porte abdominal',
        'Realizar síntese contínua de pele sozinha',
      ],
      texts: {
        summary:
          'Instrumentos de hemostasia têm escalas de tamanho e mordida.',
        0: 'Pode traumatizar; há pinças de exposição.',
        1: 'Uso típico em microvasos superficiais.',
        2: 'Função de exposição.',
        3: 'Necessita agulha/fio.',
      },
    },
    {
      enunciado:
        'Organização da mesa por “tempos operatórios” busca:',
      opcoes: [
        'Misturar tudo para o circulante decidir ao acaso',
        'Antecipar necessidade: diérese, hemostasia, exposição e síntese em setores lógicos',
        'Impedir que o instrumentador veja o campo',
        'Reduzir número de instrumentos a um único cabo',
      ],
      texts: {
        summary:
          'Setores funcionais aceleram e reduzem erro.',
        0: 'Desorganização.',
        1: 'Objetivo didático e prático.',
        2: 'Instrumentador precisa de visão do ato.',
        3: 'Minimalismo extremo nem sempre é seguro.',
      },
    },
    {
      enunciado:
        'Erro frequente no aprendizado de técnica básica:',
      opcoes: [
        'Revisar sangramento antes de fechar plano profundo',
        'Harmonizar calibre de fio com resistência do tecido',
        'Iniciar síntese com hemostasia incompleta do plano atual',
        'Reconhecer limites de tração da pinça de exposição',
      ],
      texts: {
        summary:
          'Fechar sob sangramento obscurece campo e aumenta risco de coleção.',
        0: 'Correto.',
        1: 'Correto.',
        2: 'Erro clássico.',
        3: 'Correto.',
      },
    },
    {
      enunciado:
        'Porta-agulha Mayo-Hegar é usado principalmente para:',
      opcoes: [
        'Afastar retalhos sem contato com agulha',
        'Segurar agulha, auxiliar arco de sutura e amarrar com técnica adequada',
        'Cauterizar leito capilar difuso sem pinçar',
        'Medir profundidade de cavidade apenas',
      ],
      texts: {
        summary:
          'Porta-agulha é extensão da mão na sutura.',
        0: 'Afastador.',
        1: 'Função.',
        2: 'Eletrocautério.',
        3: 'Não é medida.',
      },
    },
    {
      enunciado:
        'Bisturi, no tempo de diérese, exige:',
      opcoes: [
        'Incisão sem planejamento se o tecido “ceder” sozinho',
        'Controle de profundidade, estabilização da pele e ergonomia para cortes precisos',
        'Uso exclusivo com lâmina trocada após cada hora de relógio cirúrgico genérico',
        'Evitar troca de lâmina para reduzir custo a qualquer preço',
      ],
      texts: {
        summary:
          'Técnica de incisão combina tração contrá, ângulo e lâmina afiada.',
        0: 'Planejamento importa.',
        1: 'Conjunto técnico.',
        2: 'Troca depende de desgaste e tecido.',
        3: 'Lâmina cega aumenta trauma.',
      },
    },
    {
      enunciado:
        'Afastadores (ex.: Farabeuf, conforme caso) servem para:',
      opcoes: [
        'Substituir punção de diagnóstico ecoguiada',
        'Manter exposição do campo operatório sem ocupar ambas as mãos do auxiliar',
        'Realizar eletrocoagulação bipolar profunda',
        'Compactar órgãos para estética externa',
      ],
      texts: {
        summary:
          'Exposição segura libera mãos para dissecção e hemostasia.',
        0: 'Não relacionado.',
        1: 'Definição.',
        2: 'Pinça bipolar tem função distinta.',
        3: 'Não é finalidade.',
      },
    },
    {
      enunciado:
        'Sequência didática em cirurgia limpa simples costuma ser:',
      opcoes: [
        'Síntese plena antes de qualquer hemostasia',
        'Diérese → dissecção controlada → hemostasia → revisão → síntese por planos',
        'Hemostasia exclusiva antes de abrir qualquer plano',
        'Afastamento sem diérese prévia sempre',
      ],
      texts: {
        summary:
          'Fluxo lógico reduz sangramento oculto e deiscência.',
        0: 'Incoerente.',
        1: 'Sequência clássica.',
        2: 'Inicialmente precisa abrir para tratar sangramento.',
        3: 'Muitas vezes precisa de acesso primeiro.',
      },
    },
    {
      enunciado:
        'Pinça anatômica (“com dentes finos”) comparada à de “dente de rato” em pele:',
      opcoes: [
        'É sempre mais traumática para pele e fáscia',
        'Não tem função em cirurgia geral',
        'Oferece preensão menos trauma em tecido delicado quando usada corretamente frente ao dente de rato em certas camadas',
        'Substitui pinça hemostática Kelly em pedículo de artéria mesentérica mayor',
      ],
      texts: {
        summary:
          'Escolha de pinça de preensão depende de tecido e intento.',
        0: 'A pinça anatômica nem sempre é “sempre” mais traumática; depende do uso.',
        1: 'A pinça anatômica tem função em cirurgia geral.',
        2: 'Em tecido delicado, a anatômica bem utilizada pode ser menos traumática que dente de rato.',
        3: 'Não substitui pinça hemostática em pedículo maior.',
      },
    },
  ],
  tcar_a4: [
    {
      enunciado:
        'Cirurgião principal tem como responsabilidade central:',
      opcoes: [
        'Gerenciar somente documentação pós-operatória sem decisão em campo',
        'Definir estratégia operatória e decidir momentos críticos do procedimento',
        'Substituir anestesista na indução sem qualificação',
        'Impedir comunicação com instrumentador para agilizar',
      ],
      texts: {
        summary:
          'Liderança técnica e decisão ficam com cirurgião principal.',
        0: 'Papel clínico em sala é decisório.',
        1: 'Definição.',
        2: 'Funções separadas.',
        3: 'Comunicação deve fluir.',
      },
    },
    {
      enunciado:
        'Primeiro auxiliar apoia o cirurgião principal principalmente com:',
      opcoes: [
        'Anestesia de via aérea avançada',
        'Exposição, tração controlada e hemostasia auxiliar conforme comando',
        'Processamento de material em autoclave durante o ato',
        'Recepção de visitantes no bloco',
      ],
      texts: {
        summary:
          'Auxiliar ativo melhora campo e ritmo.',
        0: 'Anestesia.',
        1: 'Funções clássicas.',
        2: 'CME não intervém em mesa aberta dessa forma.',
        3: 'Circulação e normas de visita.',
      },
    },
    {
      enunciado:
        'Instrumentador deve:',
      opcoes: [
        'Entrar e sair da mesa estéril livremente sem avisar',
        'Antecipar passos, organizar mesa por tempos e passar instrumental de modo seguro',
        'Realizar troca de lâmpada céu operatório dentro do campo sem técnica',
        'Opinar clinicamente sobre diagnóstico definitivo sem base',
      ],
      texts: {
        summary:
          'Instrumentação é antecipação técnica, não só entrega passiva.',
        0: 'Movimentação comunicada e técnica.',
        1: 'Definição competente.',
        2: 'Manutenção segue protocolo.',
        3: 'Papel colaborativo sem usurpar médico.',
      },
    },
    {
      enunciado:
        'Comunicação em “alça fechada” significa:',
      opcoes: [
        'Ordem dita baixo para o paciente não ouvir',
        'Comando único sem confirmação da equipe',
        'Ordem clara, repetição pelo receptor e confirmação antes do uso crítico',
        'Uso exclusivo de gestos sem palavras',
      ],
      texts: {
        summary:
          'Fechamento do laço verbal reduz erro de material.',
        0: 'Não é sigilo para paciente.',
        1: 'Confirmação é essência.',
        2: 'Definição.',
        3: 'Verbalização padronizada.',
      },
    },
    {
      enunciado:
        'Ergonomia em mesa cirúrgica inclui:',
      opcoes: [
        'Flexão lombar prolongada sem ajuste de altura',
        'Retroiluminação do campo aceitável para “economizar energia”',
        'Ajustar altura da mesa, foco de luz e apoio de braços quando possível',
        'Cruzar braços sobre campo por longos períodos',
      ],
      texts: {
        summary:
          'Postura sustenta precisão no tempo.',
        0: 'Flexão lombar prolongada sem ajuste de altura compromete ergonomia.',
        1: 'Retroiluminação não substitui boa direção de luz ao leito operatório.',
        2: 'Ajustar altura da mesa, foco de luz e apoio de braços reduz fadiga e erro.',
        3: 'Manter braços cruzados sobre o campo por longos períodos atrapalha o ato.',
      },
    },
    {
      enunciado:
        'Aspiração no campo deve ser conduzida para:',
      opcoes: [
        'Ocultar o campo do cirurgião durante todo o tempo',
        'Remover fluidos e melhorar visibilidade sem interferir no gesto principal',
        'Substituir hemostasia definitiva em vaso íntegro sangrando',
        'Irrigar cavidade com pressão máxima contínua sem critério',
      ],
      texts: {
        summary:
          'Aspirador é extensão da visão, não obstáculo permanente.',
        0: 'Erro de técnica.',
        1: 'Objetivo.',
        2: 'Clampagem/ligadura podem ser necessários.',
        3: 'Irrigação tem parâmetros.',
      },
    },
    {
      enunciado:
        'Contagem de compressas e agulhas é responsabilidade:',
      opcoes: [
        'Apenas do paciente em sedação',
        'Exclusivamente administrativa pós-saída da sala',
        'Coletiva do time cirúrgico com registro explícito em momentos definidos',
        'Opcional em cirurgias “pequenas”',
      ],
      texts: {
        summary:
          'Objeto retido é evento evitável com protocolo.',
        0: 'Absurdo.',
        1: 'Ocorre em sala com time.',
        2: 'Definição de segurança.',
        3: 'Porte não dispensa contagem.',
      },
    },
    {
      enunciado:
        'Entrega segura de bisturi ao cirurgião inclui:',
      opcoes: [
        'Arremesso parabólico sobre o campo',
        'Orientar empunhadura e direção segura da lâmina, evitando punção acidental',
        'Entregar com lâmina voltada para o receptor sem aviso',
        'Colocar na mesa fora do campo sem identificar destino',
      ],
      texts: {
        summary:
          'Passagem de instrumento cortante exige respeito à ponta.',
        0: 'Proibido.',
        1: 'Técnica.',
        2: 'Deve anunciar orientação.',
        3: 'Entrega direta preferível.',
      },
    },
    {
      enunciado:
        'Segundo auxiliar, quando presente, costuma colaborar com:',
      opcoes: [
        'Decidir indicação de antibioticoterapia empírica sem cultura em todos os casos',
        'Apoio de campo, sucção secundária e logística local conforme necessidade',
        'Assinar alta hospitalar sozinho',
        'Executar anestesia regional sem prescrição',
      ],
      texts: {
        summary:
          'Função de apoio móvel no campo.',
        0: 'Médico assistente decide com critério.',
        1: 'Descrição típica.',
        2: 'Papel administrativo médico.',
        3: 'Competência legal e técnica.',
      },
    },
    {
      enunciado:
        'Trocar posição em relação ao cirurgião durante o ato exige:',
      opcoes: [
        'Movimento brusco silencioso para não alarmar o paciente',
        'Comunicação prévia para evitar tração inesperada e colisão instrumental',
        'Apenas comando interno mental sem verbalização',
        'Desligar luzes principais para privacidade',
      ],
      texts: {
        summary:
          'Coordenação evita lesão e perda de campo.',
        0: 'Perigoso.',
        1: 'Conduta correta.',
        2: 'Falar antes de mover.',
        3: 'Sem relação com privacidade.',
      },
    },
    {
      enunciado:
        'Falha de equipe em sala frequentemente decorre de:',
      opcoes: [
        'Uso de checklist de segurança bem ensaiado',
        'Comunicação fechada e confirmações redundantes em tarefas críticas',
        'Mensagem verbal ambígua e falta de confirmação do material solicitado',
        'Instrumentação antecipando próximo passo com mesa organizada',
      ],
      texts: {
        summary:
          'Erro humano cresce com linguagem imprecisa.',
        0: 'Previne erro.',
        1: 'Previne erro.',
        2: 'Causa típica.',
        3: 'Boa prática.',
      },
    },
    {
      enunciado:
        'Interno em cirurgia, ao identificar dúvida sobre gesto solicitado, deve:',
      opcoes: [
        'Executar mesmo sem entender para demonstrar iniciativa',
        "Inventar alternativa sem consultar o cirurgião",
        'Parar, esclarecer verbalmente e só então prosseguir com comando explícito',
        'Retirar-se da sala sem aviso',
      ],
      texts: {
        summary:
          'Cirurgia exige segurança psicomotora baseada em entendimento mútuo.',
        0: 'Arriscado.',
        1: 'Inaceitável.',
        2: 'Conduta profissional.',
        3: 'Comunicar saída se necessário.',
      },
    },
  ],
  tcar_a5: [
    {
      enunciado:
        'Fio monofilamentar, em comparação clássica ao multifilamentar, tende a apresentar:',
      opcoes: [
        'Maior capilaridade e colonização relativa do sulco intersticial entre filamentos',
        'Menor arrasto tecidual e menor capilaridade quando comparado a multifilamento',
        'Impossibilidade de uso em pele',
        'Degradação enzimática imediata em todos os casos',
      ],
      texts: {
        summary:
          'Monofilamento reduz sulcos microbianos; multifilamento pode ter mais capilaridade.',
        0: 'Descreve multifilamento.',
        1: 'Vantagem típica do monofilamento.',
        2: 'Pele usa monofilamento inabsorvível frequentemente.',
        3: 'Absorvíveis têm taxas variáveis.',
      },
    },
    {
      enunciado:
        'Poliglactina 910 (ex.: Vicryl) caracteriza-se como fio:',
      opcoes: [
        'Inabsorvível monofilamentar para hérnia de grande tensão isolada',
        'Absorvível multifilamentar muito usado em planos intermediários e mucosas conforme indicação',
        'Metalestruturado para osteossíntese',
        'Só indicado para cardioextracorpóreo sem exceção',
      ],
      texts: {
        summary:
          'Vicryl é absorvível trançado clássico.',
        0: 'Não descreve poliglactina.',
        1: 'Correto.',
        2: 'Não é fio metálico.',
        3: 'Uso cirúrgico geral amplo.',
      },
    },
    {
      enunciado:
        'Polipropileno costuma ser escolhido quando se deseja:',
      opcoes: [
        'Perda rápida de força tensil em 7 dias',
        'Manutenção prolongada de suporte por ser inabsorvível de baixa reatividade',
        'Absorção aguda sem tração',
        'Uso exclusivo em nervo periférico sem microsutura',
      ],
      texts: {
        summary:
          'Prolene é monofilamento inabsorvível de referência em muitas indicações.',
        0: 'Absorvível perde força.',
        1: 'Perfil desejado.',
        2: 'Não é absorvível.',
        3: 'Indicações variam.',
      },
    },
    {
      enunciado:
        'Agulha com ponta cortante convencional costuma ser preferida para:',
      opcoes: [
        'Perfuração de fígado parenquimatoso friável exclusivamente com ponta romba',
        'Pele e tecidos fibrosos que exigem penetração cortante controlada',
        'Mucosa gástrica sem trauma nunca',
        'Sutura de nervópio desnudo sem visualização',
      ],
      texts: {
        summary:
          'Ponta cortante facilita entrada em planos resistentes superficiais.',
        0: 'Ponta apropriação invertida.',
        1: 'Indicação típica.',
        2: 'Mucosa pode usar taper; generalização falsa.',
        3: 'Microcirurgia tem regras específicas.',
      },
    },
    {
      enunciado:
        'Agulha cilíndrica (taper point) é mais indicada para:',
      opcoes: [
        'Pele espessa em região palmoplantar sem exceção com corte agressivo',
        'Tecidos friáveis ou delicados em que se deseja menor corte de fibras na penetração',
        'Osteodese com broca integrada',
        'Fechamento rápido de tendão calcâneo sem técnica de tensão',
      ],
      texts: {
        summary:
          'Taper dilata em vez de talhar agressivamente.',
        0: 'Costuma ser cortante/reversa em pele espessa.',
        1: 'Correto.',
        2: 'Não é broca.',
        3: 'Técnica e material específicos.',
      },
    },
    {
      enunciado:
        'Em campo com risco infeccioso elevado, uso de multifilamento:',
      opcoes: [
        'Deve ser ampliado sem critério pelo “melhor” manuseio',
        'Requer cautela relacionada à capilaridade e colonização potencial versus monofilamento',
        'É proibido em qualquer cirurgia eletiva do planeta',
        'Substitui drenagem obliteratoria em todos os casos',
      ],
      texts: {
        summary:
          'Contexto contaminado modula escolha de fio.',
        0: 'Risco aumenta sem critério.',
        1: 'Raciocínio técnicamente correto.',
        2: 'Hiperbole incorreta.',
        3: 'Drenagem é decisão anatômica/clínica.',
      },
    },
    {
      enunciado:
        'Memória (“spring”) excessiva do fio durante nó dificulta:',
      opcoes: [
        'Somente escolha da agulha, nunca o arco',
        'Ajuste fino da tensão e favorece nós frouxos ou instáveis se mal controlado',
        'Perfuração em pele',
        'Contagem de instrumentais',
      ],
      texts: {
        summary:
          'Monofilamentos exigem mais lances e controle de tensão.',
        0: 'Afeta também manobra.',
        1: 'Efeito clínico.',
        2: 'Menos relacionado direto.',
        3: 'Sem relação.',
      },
    },
    {
      enunciado:
        'Polidioxanona (ex.: PDS) costuma ser escolhida quando:',
      opcoes: [
        'É necessário suporte absorvível prolongado em planos de tensão como parede/fáscia',
        'Desejamos absorção em 24–48 h sem vestígio em todos os pacientes',
        'O objetivo é sempre apenas estética da sutura cuticular sem resistência',
        'Só é usada em oftalmologia pediátrica estrita',
      ],
      texts: {
        summary:
          'PDS tem absorção lenta comparada a muitos absorvíveis rápidos.',
        0: 'Tempo de suporte maior.',
        1: 'Não absorve tão rápido.',
        2: 'Função mecânica importa.',
        3: 'Uso mais amplo.',
      },
    },
    {
      enunciado:
        'Erro ao apertar o nó com excesso de tração pode causar:',
      opcoes: [
        'Aumento da perfusão da borda do ferimento',
        'Isquemia tecidual, necrose de borda e risco de deiscência',
        'Cicatrização hipertrófica garantida positivamente',
        'Eliminação automática de seroma',
      ],
      texts: {
        summary:
          'Tensão adequada coapta sem estrangular.',
        0: 'Estrangulação reduz perfusão.',
        1: 'Correto.',
        2: 'Não há garantia hipertrófica assim.',
        3: 'Seroma depende de múltiplos fatores.',
      },
    },
    {
      enunciado:
        'Nó seguro exige, entre outros cuidados:',
      opcoes: [
        'Cauda excessivamente longa sempre para facilitar retratação',
        'Ignorar simetria das mordidas em pele',
        'Lances firmes alternados no eixo e controle de tensão sem “serração” da borda',
        'Corte da cauda rente demais sem supervisão em qualquer plano',
      ],
      texts: {
        summary:
          'Arquitetura do nó e tensão protegem borda.',
        0: 'Cauda longa pode irritar.',
        1: 'Simetria importa para borda.',
        2: 'Técnica correta.',
        3: 'Cauda curta pode afrouxar.',
      },
    },
    {
      enunciado:
        'Poliamida (Nylon) como fio inabsorvível monofilamentar costuma ser aplicada em:',
      opcoes: [
        'Fechamento temporário único de fáscia em neonato sem critério',
        'Adesivos exclusivos subcutâneos sem passagem de agulha',
        'Suturas de pele e situações que requerem resistência inicial e manejo com monofilamento',
        'Resorção completa em poucas horas em qualquer paciente, sem variabilidade',
      ],
      texts: {
        summary:
          'Nylon/etilon é clássico em pele com agulha cortante.',
        0: 'Uso depende de protocolo neonatal.',
        1: 'Não cobre todos os casos.',
        2: 'Indicação típica.',
        3: 'O tempo de manutenção da resistência varia; não há resorção “fixa em horas” universal.',
      },
    },
    {
      enunciado:
        'Escolha de agulha com curvatura 1/2, em relação a 3/8, costuma correlacionar-se com:',
      opcoes: [
        'Sempre cirurgia abdomininal superficial exclusiva',
        'Campo superficial apenas sem exceção',
        'Espaços mais profundos ou restritos onde arco completo auxilia manobra',
        'Ausência de necessidade de porta-agulha',
      ],
      texts: {
        summary:
          'Curvatura adequa-se à geometria do plano.',
        0: 'Generalização falsa.',
        1: '3/8 costuma ser “campo aberto”.',
        2: 'Uso clássico de 1/2 em profundidade.',
        3: 'Porta-agulha quase sempre necessário.',
      },
    },
  ],
};

/** Índice (0–3) da alternativa correta em cada item de `buckets[tema]`, antes do embaralhamento A–D. */
const MED = {
  tcar_a1: [0, 2, 2, 3, 0, 1, 2, 3, 0, 1, 1, 3],
  tcar_a2: [2, 3, 1, 2, 2, 2, 2, 2, 1, 2, 1, 2],
  tcar_a3: [0, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 2],
  tcar_a4: [1, 1, 1, 2, 2, 1, 2, 1, 1, 1, 2, 2],
  tcar_a5: [1, 1, 1, 1, 1, 1, 1, 0, 1, 2, 2, 2],
};

function emitLessonFixed(startId, tema, explGeral, rows) {
  const meds = MED[tema];
  const out = [];
  rows.forEach((row, i) => {
    const pat = PAT12[i];
    const med = meds[i];
    const p0 = permuteCorrectFirst(row.opcoes, row.texts, med);
    const bucket = rotateToPat(p0.opcoes, p0.texts, pat);
    const { explicacoes_opcoes, explicacao } = buildExplainLines(pat, bucket.texts);
    const opts = bucket.opcoes.map((t, j) => `${['A', 'B', 'C', 'D'][j]}) ${t}`);
    out.push({
      id: startId + i,
      materia: MATERIA,
      tema,
      enunciado: row.enunciado,
      opcoes: opts,
      correta: pat,
      dificuldade: row.dificuldade ?? 2,
      modulo: MODULO,
      explicacao_geral: explGeral,
      explicacoes_opcoes,
      explicacao,
    });
  });
  return out;
}

const expl = {
  tcar_a1:
    'Antissepsia, assepsia, desinfecção e esterilização: barreiras, preparo de pele e rastreio de material.',
  tcar_a2:
    'Zonas do centro cirúrgico, fluxos, paramentação e time-out de segurança.',
  tcar_a3:
    'Tempos operatórios (diérese, hemostasia, síntese) e instrumental básico de mesa.',
  tcar_a4:
    'Papéis da equipe, ergonomia, instrumentação e comunicação em alça fechada.',
  tcar_a5:
    'Propriedades de fios, escolha por plano e agulhas (ponta e curvatura).',
};

const qjPre = JSON.parse(fs.readFileSync(Q_PATH, 'utf8'));
let nid = qjPre.questoes.length
  ? Math.max(...qjPre.questoes.map((x) => x.id)) + 1
  : 1;

const lessons = [
  ['tcar_a1', buckets.tcar_a1],
  ['tcar_a2', buckets.tcar_a2],
  ['tcar_a3', buckets.tcar_a3],
  ['tcar_a4', buckets.tcar_a4],
  ['tcar_a5', buckets.tcar_a5],
];

const newQuestoes = [];
for (const [tema, rows] of lessons) {
  newQuestoes.push(...emitLessonFixed(nid, tema, expl[tema], rows));
  nid += rows.length;
}

let fid =
  Math.max(...JSON.parse(fs.readFileSync(F_PATH, 'utf8')).flashcards.map((x) => x.id)) + 1;

function fc(tema, frente, verso, tags, cat = 'material', dif = 2) {
  return {
    materia: MATERIA,
    tema,
    frente,
    verso,
    explicacao: '',
    dificuldade: dif,
    categoria: cat,
    origem: 'material',
    tags,
    id: fid++,
  };
}

const newFC = [
  // tcar_a1
  ...[
    ['Antissepsia visa reduzir microrganismos onde?', 'Em tecido vivo, com agente químico.', ['antissepsia']],
    ['Definição de esterilização.', 'Eliminação de todas as formas de vida microbiana, inclusive esporos.', ['esterilizacao']],
    ['Assepsia operatória é o quê?', 'Medidas que impedem contaminação do campo e do ato cirúrgico.', ['assepsia']],
    ['Sentido clássico do preparo de pele.', 'Do centro para a periferia, sem retornar ao centro com a mesma compressa.', ['preparo-pele']],
    ['Indicador biológico do ciclo térmico valida o quê?', 'Letalidade microbiana efetiva do processo (ex.: esporos em rotina).', ['cme']],
    ['Clorexidina alcoólica: vantagem prática.', 'Ação residual e início rápido; cuidado em mucosa/olho.', ['clorexidina']],
    ['Quebra de esterilidade percebida. Conduta?', 'Comunicar, repor barreiras ou material e corrigir técnica.', ['campo']],
    ['Indicador químico no pacote informa?', 'Que o pacote foi exposto ao processo; não substitui biológico sozinho.', ['indicador']],
    ['Erro antes da incisão após antissepsia alcoólica.', 'Cortar com pele ainda muito úmida ou sem respeitar secagem/tempo de ação.', ['seguranca']],
    ['Desinfecção vs esterilização.', 'Desinfecção reduz carga; esterilização visa eliminar vida microbiana total, incluindo esporos.', ['conceitos']],
    ['Método frequente para esterilizar artigos compatíveis.', 'Autoclave com vapor saturado sob pressão em ciclo validado.', ['autoclave']],
    ['Esterilização válida exige embalagem?', 'Sim: barreira adequada e rastreabilidade integram a garantia de uso.', ['embalagem']],
  ].map(([f, v, t], i) => fc('tcar_a1', f, v, t)),
  // tcar_a2
  ...[
    ['Três níveis clássicos de área no bloco.', 'Não restrita, semirrestrita e restrita (maior controle perto do campo).', ['zonas']],
    ['Fluxo limpo e contaminado.', 'Unidirecional, com rotas separadas para evitar contaminação cruzada.', ['fluxo']],
    ['Roupa privativa.', 'Uso restrito ao bloco; barreira básica de ambiente.', ['paramentacao']],
    ['Área restrita inclui tipicamente.', 'Sala cirúrgica e adjacências críticas ao campo estéril.', ['restrita']],
    ['Frente do avental estéril.', 'Considerada zona funcionalmente estéril para manuseio próximo ao campo.', ['avental']],
    ['Time-out antes da incisão.', 'Conferir paciente, sítio, lateralidade, antibioticoprofilaxia e recursos críticos.', ['timeout']],
    ['Dúvida sobre contaminação.', 'Tratar como contaminado e repor/trocar o necessário.', ['seguranca']],
    ['Material estéril armazenado.', 'Seco, identificado, validade e integridade de embalagem conferidos.', ['armazenamento']],
    ['Circulante.', 'Apoia fora do campo sem contaminar mesa estéril aberta.', ['equipe']],
    ['Costas do avental e abaixo da cintura.', 'Não são consideradas esterilmente seguras.', ['avental']],
    ['Abertura de caixa cirúrgica.', 'Conferir integridade, umidade anormal e validade antes do uso.', ['caixa']],
    ['Time-out ineficaz.', 'Ritual que não muda plano quando há discrepância detectada.', ['cultura-seguranca']],
  ].map(([f, v, t]) => fc('tcar_a2', f, v, t)),
  // tcar_a3
  ...[
    ['Diérese.', 'Abertura de planos: corte, dissecção ou energia adequada.', ['dierese']],
    ['Hemostasia.', 'Controle de sangramento para visibilidade e estabilidade antes de síntese.', ['hemostasia']],
    ['Síntese.', 'Reaproximação de planos com tensão e perfusão adequadas.', ['sintese']],
    ['Tesoura Metzenbaum.', 'Dissecção de tecido delicado; Mayo costuma ser para tecido mais resistente.', ['instrumental']],
    ['Pinça mosquito.', 'Hemostasia de pequenos vasos ou sangramento localizado.', ['mosquito']],
    ['Mesa organizada por tempos.', 'Setores: diérese, hemostasia, exposição, síntese.', ['mesa']],
    ['Porta-agulha Mayo-Hegar.', 'Manipula agulha e facilita sutura com técnica segura.', ['porta-agulha']],
    ['Erro antes de fechar.', 'Síntese com hemostasia incompleta do plano.', ['erro']],
    ['Afastador.', 'Mantém exposição sem ocupar ambas as mãos do auxiliar.', ['afastador']],
    ['Bisturi.', 'Incisão com controle de profundidade, tração da pele e lâmina afiada.', ['bisturi']],
    ['Sequência didática cirurgia limpa.', 'Abrir/dissecar → hemostasia → revisar → fechar por planos.', ['sequencia']],
    ['Pinça anatômica vs dente de rato.', 'Escolha conforme tecido e necessidade de tração firme ou delicada.', ['pinca']],
  ].map(([f, v, t]) => fc('tcar_a3', f, v, t)),
  // tcar_a4
  ...[
    ['Cirurgião principal.', 'Responsável pela estratégia e decisões críticas do ato.', ['cirurgiao']],
    ['Primeiro auxiliar.', 'Exposição, tração e hemostasia auxiliar sob comando.', ['auxiliar']],
    ['Instrumentador.', 'Antecipa passos e organiza mesa; passa instrumental com segurança.', ['instrumentador']],
    ['Alça fechada.', 'Ordem, repetição e confirmação antes de uso crítico.', ['comunicacao']],
    ['Ergonomia em sala.', 'Altura da mesa, luz e apoio de braços quando possível.', ['ergonomia']],
    ['Aspiração.', 'Limpar fluidos e melhorar visão sem bloquear o gesto principal.', ['aspiracao']],
    ['Contagem de compressas/agulhas.', 'Responsabilidade coletiva com comunicação explícita.', ['contagem']],
    ['Passar bisturi.', 'Orientar lâmina e entregar com segurança, sem arremesso.', ['seguranca']],
    ['Segundo auxiliar.', 'Apoio de campo, aspiração secundária e logística em geral.', ['auxiliar-2']],
    ['Mudar posição na mesa.', 'Avisar antes para evitar tração e choque instrumental.', ['equipe']],
    ['Causa comum de erro.', 'Comando verbal ambíguo sem confirmação.', ['erro']],
    ['Dúvida sobre gesto.', 'Esclarecer com cirurgião antes de executar.', ['internato']],
  ].map(([f, v, t]) => fc('tcar_a4', f, v, t)),
  // tcar_a5
  ...[
    ['Monofilamento vs multifilamento (capilaridade).', 'Monofilamento tende a menor capilaridade; multifilamento pode favorecer capilaridade.', ['fios']],
    ['Poliglactina 910 (Vicryl).', 'Absorvível multifilamentar; usos conforme plano (ex.: subcutâneo/mucosa).', ['vicryl']],
    ['Polipropileno (Prolene).', 'Inabsorvível monofilamentar, baixa reatividade; suporte prolongado.', ['prolene']],
    ['Agulha cortante.', 'Pele e tecidos que precisam penetração cortante controlada.', ['agulha']],
    ['Agulha cilíndrica (taper).', 'Tecidos friáveis/delicados com menor talha de fibras.', ['taper']],
    ['Multifilamento em campo sujo.', 'Maior cautela (capilaridade); decisão contextual.', ['infeccao']],
    ['Memória do monofilamento.', 'Pode dificultar ajuste fino da tensão do nó se mal controlado.', ['no']],
    ['PDS (polidioxanona).', 'Absorvível de suporte mais prolongado; útil em planos de tensão.', ['pds']],
    ['Nó muito apertado.', 'Pode comprometer perfusão e favorecer isquemia/deiscência.', ['noc']],
    ['Nó seguro.', 'Lances alternados, tensão progressiva sem estrangular borda.', ['noc']],
    ['Nylon (poliamida).', 'Inabsorvível monofilamentar comum em sutura de pele.', ['nylon']],
    ['Curvatura 1/2 vs 3/8.', '1/2 ajuda em espaços profundos ou restritos; 3/8 em campo mais aberto.', ['agulha']],
  ].map(([f, v, t]) => fc('tcar_a5', f, v, t)),
];

const qj = qjPre;
const fj = JSON.parse(fs.readFileSync(F_PATH, 'utf8'));

// dedupe if re-run
const exists = new Set(
  qj.questoes.filter((x) => x.materia === MATERIA && /^tcar_a[1-5]$/.test(x.tema)).map((x) => `${x.tema}-${x.enunciado.slice(0, 40)}`)
);
const toAddQ = newQuestoes.filter(
  (x) => !exists.has(`${x.tema}-${x.enunciado.slice(0, 40)}`)
);

if (toAddQ.length === 0) {
  console.log('TO tcar_a1-a5 questões já presentes; nada a anexar.');
} else {
  qj.questoes.push(...toAddQ);
  fs.writeFileSync(Q_PATH, JSON.stringify(qj, null, 2) + '\n', 'utf8');
  console.log('Questões anexadas:', toAddQ.length);
}

const existsF = new Set(
  fj.flashcards.filter((x) => x.materia === MATERIA && /^tcar_a[1-5]$/.test(x.tema)).map((x) => `${x.tema}-${x.frente}`)
);
const toAddF = newFC.filter((x) => !existsF.has(`${x.tema}-${x.frente}`));
if (toAddF.length === 0) {
  console.log('Flashcards TO já presentes.');
} else {
  fj.flashcards.push(...toAddF);
  fs.writeFileSync(F_PATH, JSON.stringify(fj, null, 2) + '\n', 'utf8');
  console.log('Flashcards anexados:', toAddF.length);
}

// verificação distribuição por a classe
for (const tema of ['tcar_a1', 'tcar_a2', 'tcar_a3', 'tcar_a4', 'tcar_a5']) {
  const sub = qj.questoes.filter((x) => x.materia === MATERIA && x.tema === tema);
  const c = { A: 0, B: 0, C: 0, D: 0 };
  const L = ['A', 'B', 'C', 'D'];
  sub.forEach((x) => c[L[x.correta]]++);
  console.log(tema, c, sub.map((x) => x.correta));
}
