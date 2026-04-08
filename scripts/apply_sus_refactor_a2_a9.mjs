/**
 * Refatora questões SUS sus_a2…sus_a9 em data/questoes.json (sus_a1 intocado).
 * Executar da raiz: node scripts/apply_sus_refactor_a2_a9.mjs
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const jpath = path.join(__dirname, "..", "data", "questoes.json");

function finalizeExpl(p) {
  const L = ["A", "B", "C", "D"];
  let ex = `Resumo: ${p.explicacao_geral}\n`;
  for (let i = 0; i < 4; i++) {
    const tag = p.correta === i ? "CORRETA" : "INCORRETA";
    ex += `${L[i]}) ${tag}. ${p.explicacoes_opcoes[L[i]]}\n`;
  }
  p.explicacao = ex.trimEnd();
}

/** @type {Record<number, any>} */
const U = {};

function add(
  id,
  enunciado,
  opcoes,
  correta,
  dificuldade,
  explicacao_geral,
  explicacoes_opcoes
) {
  U[id] = {
    enunciado,
    opcoes,
    correta,
    dificuldade,
    explicacao_geral,
    explicacoes_opcoes,
  };
}

// ——— sus_a2 (722–731) ———
add(
  722,
  "No Brasil colonial e no Império, a organização da assistência em saúde restringia-se, em grande medida, a:",
  [
    "A) Sistema previdenciário universal que cobria campo e cidade.",
    "B) Rede única de hospitais públicos estaduais no interior.",
    "C) Caridade religiosa e ações pontuais em epidemias, com Estado mínimo.",
    "D) Atenção primária universal com microáreas e equipes de saúde da família.",
  ],
  2,
  1,
  "Antes do SUS, não havia sistema universal; predominavam caridade, campanhas e elite médica urbana.",
  {
    A: "Incorreta: Previdência social ampla é traço posterior; no período colonial/imperial não havia esse desenho.",
    B: "Incorreta: Havia pouca penetração estatal no interior; não existia rede pública homogênea.",
    C: "Correta: Assistência religiosa/caridade e respostas focais a epidemias, sem sistema nacional.",
    D: "Incorreta: ESF/APS como política territorial é construto do SUS, não da Colônia/Império.",
  }
);

add(
  723,
  "Na Primeira República (1889–1930), qual característica do país ajuda a entender o modelo sanitário da época?",
  [
    "A) Urbanização plena e extinção da agricultura.",
    "B) Brasil um país majoritariamente rural, ações muitas vezes ligadas a saneamento e portos.",
    "C) Universalização imediata do prontuário eletrônico nacional.",
    "D) Monopólio estatal da alta complexidade em todos os estados.",
  ],
  1,
  1,
  "A Primeira República combinou ruralidade com campanhas sanitárias e controle de portos, sem sistema único.",
  {
    A: "Incorreta: O país seguia majoritariamente rural; urbanização plena não descreve o período.",
    B: "Correta: Ruralidade e campanhas/portos traduzem assistência focal e não universal.",
    C: "Incorreta: Tecnologia de informação em saúde não define esse período histórico.",
    D: "Incorreta: Não havia organização homogênea da alta complexidade pelo Estado.",
  }
);

add(
  724,
  "Mulher de 30 anos, trabalhadora rural sem carteira assinada. Na Era Vargas (1930–1945), o padrão típico de proteção social em saúde para esse perfil era:",
  [
    "A) Acesso idêntico ao do trabalhador urbano formal em todo o território.",
    "B) Exclusão total: nenhuma política pública ou trabalhista.",
    "C) Fortalecimento do Estado interventor, mas proteções mais seletivas ao trabalho formal urbano; rural/informal ficavam à margem.",
    "D) Funcionamento pleno do SUS com financiamento tripartite já implementado.",
  ],
  2,
  2,
  "Vargas modernizou sem universalizar: proteção trabalhista inicial foi segmentada.",
  {
    A: "Incorreta: Quem estava fora do vínculo formal urbano continuava com pouca proteção.",
    B: "Incorreta: Houve avanço de políticas seletivas; não é ausência total.",
    C: "Correta: Estado mais forte, porém benefícios trabalhistas/saúde voltados sobretudo ao formal urbano.",
    D: "Incorreta: O SUS surge décadas depois, com CF/88 e leis orgânicas.",
  }
);

add(
  725,
  "Entre 1945 e 1964, a expansão da previdência por categorias trabalhistas reforçou qual padrão do sistema de saúde?",
  [
    "A) Eliminação total da segmentação entre trabalhadores.",
    "B) Cobertura homogênea da APS em todas as microáreas do país.",
    "C) Extinção imediata do pagamento direto e da filantropia.",
    "D) Continuidade da fragmentação: mais acesso para quem tinha vínculo formal; exclusão de parcelas rurais ou informais.",
  ],
  3,
  2,
  "A previdência por categoria aprofundou a fragmentação histórica.",
  {
    A: "Incorreta: Persistiam desigualdades entre quem tinha ou não vínculo.",
    B: "Incorreta: APS territorializada como política nacional vem com o projeto do SUS, não descreve esse recorte.",
    C: "Incorreta: Filantropia e desembolso privado continuaram relevantes fora dos segmentos cobertos.",
    D: "Correta: Modelo segmentado por categoria aprofundou exclusões históricas.",
  }
);

add(
  726,
  "No período de 1964–1984, além do crescimento econômico e da urbanização, o setor saúde apresentou:",
  [
    "A) Convivência de serviço público precário para grande parte da população com segmentos privados/previdenciários; germes sociais da crítica posterior ao modelo.",
    "B) Extinção dos planos privados e hospitais filantrópicos.",
    "C) Ausência total de movimento de reforma sanitária na sociedade civil.",
    "D) Aplicação integral imediata da Lei 8.080/1990 durante o regime.",
  ],
  0,
  2,
  "Ditadura: crescimento com exclusão; base social para a reforma sanitária foi se formando.",
  {
    A: "Correta: Dualidade assistencial e exclusão; movimentos posteriormente reforçam crítica ao modelo.",
    B: "Incorreta: Setor privado e filantropia não desapareceram.",
    C: "Incorreta: Havia germes de crítica e organização que antecedem a redemocratização.",
    D: "Incorreta: A Lei 8.080 é de 1990, após a Constituinte.",
  }
);

add(
  727,
  "Em prova, ao comparar “campanha sanitária” (como na República Velha) com “sistema universal de saúde”, a distinção mais adequada é:",
  [
    "A) Campanha é permanente e substitui organização de rede; universal é episódico.",
    "B) Campanha atua de modo pontual em agravos; universalização pressupõe direito contínuo e rede articulada.",
    "C) Ambos excluem vigilância epidemiológica.",
    "D) Universalização significa apenas ampliar leitos hospitalares sem APS.",
  ],
  1,
  2,
  "Campanha é focal; sistema universal combina direito, financiamento e coordenação de cuidados.",
  {
    A: "Incorreta: Inverte os conceitos: campanhas são episódicas; sistema exige continuidade.",
    B: "Correta: Enunciado captura lógica de ação focal versus organização sistêmica.",
    C: "Incorreta: Vigilância pode integrar ambos os desenhos em graus diferentes.",
    D: "Incorreta: Universalização no SUS envolve rede e APS, não só hospital.",
  }
);

add(
  728,
  "Qual afirmação melhor resume o “antes do SUS” até a redemocratização, segundo a linha histórica da aula?",
  [
    "A) O país tinha sistema único, público e equânime desde o século XIX.",
    "B) O modelo já era idêntico ao atual SUS com Pacto pela Vida.",
    "C) Predomínio de fragmentação entre caridade, público limitado e previdência, sem direito amplo universal.",
    "D) A equidade territorial plena foi alcançada ainda na ditadura militar.",
  ],
  2,
  2,
  "Fragmentação histórica explica a urgência política do projeto do SUS.",
  {
    A: "Incorreta: Não havia sistema único nem universalização.",
    B: "Incorreta: Instrumentos de pactuação e desenho do SUS são posteriores.",
    C: "Correta: Pedacos assistenciais, não sistema integrado por direito.",
    D: "Incorreta: Exclusões regionais e sociais permaneceram marcantes.",
  }
);

add(
  729,
  "Paciente idoso relata que só obteve acompanhamento ambulatorial regular após aposentar-se com vínculo formal. Esse relato ilustra, historicamente:",
  [
    "A) Efeito exclusivo da caridade no século XXI.",
    "B) Herança de segmentação por vínculo trabalhista/previdência antes da lógica universal do SUS.",
    "C) Prova de que o SUS eliminou todas as filas em 1988.",
    "D) Ausência total de desigualdades entre público e privado no Brasil republicano.",
  ],
  1,
  3,
  "O acesso amarrado ao vínculo reflete previdência e segmentação histórica.",
  {
    A: "Incorreta: O caso remete a lógica trabalhista/previdenciária, não só caridade colonial.",
    B: "Correta: Direitos amarrados a categorias são traço do arranjo pré-SUS que ainda ecoa.",
    C: "Incorreta: CF/88 funda direito, mas desigualdades persistem; filas não desapareceram.",
    D: "Incorreta: Desigualdade público/privado é justamente herança histórica.",
  }
);

add(
  730,
  "No Império, a concentração da elite médica em centros urbanos com baixa penetração no interior contribuiu para:",
  [
    "A) Desigualdade estrutural antiga entre urbano e rural/periferias.",
    "B) Equidade automática entre todas as províncias.",
    "C) Extinção das epidemias sem políticas públicas.",
    "D) Regionalização plena da alta complexidade na forma atual do SUS.",
  ],
  0,
  3,
  "Elite urbana e campanhas explicam raízes antigas da desigualdade em saúde.",
  {
    A: "Correta: Padrão urbano/elite versus interior sem rede universal.",
    B: "Incorreta: Não havia equidade territorial plena.",
    C: "Incorreta: Epidemias exigiram ações públicas pontuais; não sumiram espontaneamente.",
    D: "Incorreta: Regionalização RAS/Decreto 7.508 é arcabouço recente do SUS.",
  }
);

add(
  731,
  "Homem de 52 anos, sem plano de saúde, aguarda especialista no SUS há meses; familiar com plano é atendido na mesma semana. A leitura histórica compatível com o material é:",
  [
    "A) Fenômeno totalmente novo, sem relação com o passado segmentado do país.",
    "B) Persistência de desigualdades ligadas a trajetória de segmentação público-privado/previdência.",
    "C) Prova de que apenas a ESF causa fila de especialistas.",
    "D) Evidência de que o SUS foi concebido para privilegiar quem paga plano.",
  ],
  1,
  3,
  "Segmentação histórica explica contrastes de acesso entre estratos e modalidades de financiamento.",
  {
    A: "Incorreta: Desigualdade atual dialoga com modelo histórico fragmentado.",
    B: "Correta: Herança de segmentação e privilégios ajuda a interpretar o contraste.",
    C: "Incorreta: Filas têm causas múltiplas (oferta, regulação, financiamento), não um único programa.",
    D: "Incorreta: O projeto universal do SUS visa ampliar acesso público; o problema é equidade de fato.",
  }
);

// ——— sus_a3 (732–741) ———
add(
  732,
  "A 8ª Conferência Nacional de Saúde, marco da Reforma Sanitária brasileira, ocorreu em:",
  [
    "A) 1986.",
    "B) 1964.",
    "C) 1990.",
    "D) 2000.",
  ],
  0,
  1,
  "Memorize 1986 junto ao processo constituinte e à construção do texto sobre direito social à saúde.",
  {
    A: "Correta: 8ª CNS em 1986 consolidou diretrizes que influenciam a Constituinte.",
    B: "Incorreta: Ano do golpe militar; não corresponde à conferência.",
    C: "Incorreta: 1990 concentra Leis Orgânicas; a conferência é anterior.",
    D: "Incorreta: Data fora do marco histórico central da reforma.",
  }
);

add(
  733,
  "A respeito do estatuto jurídico imediato da 8ª CNS, assinale a alternativa correta.",
  [
    "A) Trata-se de lei federal que criou o SUS de pleno direito no mesmo ato.",
    "B) É conferência política que orientou o debate constituinte, sem equivaler, por si só, a diploma legal.",
    "C) Foi decretada como emenda constitucional isolada em 1986.",
    "D) Revogou automaticamente toda assistência privada no Brasil.",
  ],
  1,
  2,
  "Conferência produz diretrizes; operacionalização vem com CF/88 e normas posteriores.",
  {
    A: "Incorreta: Criação normativa detalhada do SUS ocorre depois, com lei orgânica.",
    B: "Correta: Influência constituinte sem ser lei por si só.",
    C: "Incorreta: Não substitui o processo da Constituinte de 1987–1988.",
    D: "Incorreta: A reforma critica privatização assistencial, mas não a “revoga” genericamente.",
  }
);

add(
  734,
  "Um núcleo da crítica da Reforma Sanitária ao “modelo hospitalocêntrico” é:",
  [
    "A) Defesa do acesso apenas hospitalar como suficiente para equidade.",
    "B) Valorização exclusiva da alta tecnologia sem APS.",
    "C) Enfatizar ações de promoção, prevenção, vigilância e APS, indo além do episódio agudo de internação.",
    "D) Eliminação de qualquer participação comunitária.",
  ],
  2,
  2,
  "Hospital sem atenção a causas e continuidade reproduz exclusão; a reforma propõe integralidade e vigilância.",
  {
    A: "Incorreta: Hospitalocentrismo é justamente o alvo da crítica.",
    B: "Incorreta: Crítica não “só tecnologia”; é modelo excludente e desarticulado.",
    C: "Correta: Fortalecer vigilância, APS e causas do adoecimento, não só internação.",
    D: "Incorreta: Participação social é princípio, não algo a excluir.",
  }
);

add(
  735,
  "Na Constituição de 1988, a saúde aparece como direito fundamental ligado ao dever do Estado. O alcance típico cobrado em prova inclui:",
  [
    "A) Benefício assistencial discricionário, “se sobrar orçamento”.",
    "B) Direito restrito a segurados da previdência.",
    "C) Garantia apenas de campanhas anuais de vacinação, sem rede permanente.",
    "D) Políticas sociais e econômicas voltadas à redução de risco de doença e ao acesso universal e igualitário às ações de promoção, proteção e recuperação.",
  ],
  3,
  2,
  "Art. 196 sintetiza direito-dever e universalidade de acesso às ações e serviços.",
  {
    A: "Incorreta: Saúde não é favor discricionário.",
    B: "Incorreta: Universalidade vai além de categoria previdenciária.",
    C: "Incorreta: Campanhas complementam, mas o texto exige organização mais ampla.",
    D: "Correta: Formulação próxima ao art. 196 da CF/88.",
  }
);

add(
  736,
  "Com a redemocratização (1985–1988), no campo da saúde observou-se principalmente:",
  [
    "A) Abertura para participação social e crítica ao modelo assistencialista e excludente.",
    "B) Extinção imediata de conferências e conselhos.",
    "C) Proibição de debater financiamento público.",
    "D) Eliminação da ideia de saúde como direito de cidadania.",
  ],
  0,
  2,
  "Nova República reabre espaço político para direitos sociais e reforma sanitária.",
  {
    A: "Correta: Participação e crítica ao hospitalocentrismo/privilégios ganham terreno.",
    B: "Incorreta: Instrumentos de participação são herdados e reforçados no projeto do SUS.",
    C: "Incorreta: Financiamento é justamente eixo de debate.",
    D: "Incorreta: Cidadania e saúde se articulam na agenda da reforma.",
  }
);

add(
  737,
  "“Universalização” defendida pela Reforma Sanitária difere de “privatização da assistência” porque:",
  [
    "A) Universalização transfere a gestão exclusiva ao mercado.",
    "B) Universalização visa ampliar e organizar o acesso público e equânime; privatização tende a mercantilizar sem garantir equidade.",
    "C) São sinônimos em prova de saúde coletiva.",
    "D) Ambas excluem a atenção primária.",
  ],
  1,
  2,
  "Universalização no arcabouço do SUS é pública e solidária; privatização não resolve por si a equidade.",
  {
    A: "Incorreta: Universalização no texto reformista não é entregar ao mercado.",
    B: "Correta: Contraste entre expansão pública de direitos e lógica de mercado.",
    C: "Incorreta: Conceitos são antagônicos no debate reformista.",
    D: "Incorreta: APS é peça central do projeto de universalização.",
  }
);

add(
  738,
  "No quadro da Reforma Sanitária ecoando na CF/88, “participação social” materializa-se sobretudo como:",
  [
    "A) Meramente opinativa, sem vínculo com orçamento.",
    "B) Restrita a campanhas publicitárias de hospitais.",
    "C) Controle social, conferências e espaços de deliberação comunitária.",
    "D) Substituição da gestão técnica por voluntariado informal sem regras.",
  ],
  2,
  3,
  "Participação não é enfeite: institui controle social e pactuação democrática.",
  {
    A: "Incorreta: Participação normatizada busca influenciar prioridades e fiscalizar.",
    B: "Incorreta: Marketing institucional não substitui controle social.",
    C: "Correta: Conferências/conselhos são exemplos típicos.",
    D: "Incorreta: Há marcos legais e papéis definidos; não é caos voluntário.",
  }
);

add(
  739,
  "Gestante de 24 anos busca pré-natal na UBS e comenta que “antes só ia ao hospital quando descompensava”. O enfoque da Reforma Sanitária que melhor responde a esse padrão é:",
  [
    "A) Reforçar apenas leitos de alta complexidade.",
    "B) Proibir qualquer encaminhamento hospitalar.",
    "C) Priorizar APS, vigilância e continuidade do cuidado antes da urgência evitável.",
    "D) Transferir integralmente o pré-natal para o setor privado.",
  ],
  2,
  3,
  "Reduzir hospitalocentrismo implica fortalecer porta de entrada resolutiva e linha de cuidado.",
  {
    A: "Incorreta: Hospital é complemento; não resolve sozinho ausência de cuidado longitudinal.",
    B: "Incorreta: Encaminhamento é necessário quando indicado; o problema é usar hospital como única porta.",
    C: "Correta: APS e vigilância coordenam riscos e reduzem internações evitáveis.",
    D: "Incorreta: Projeto do SUS é fortalecer o público universal, não privatizar pré-natal.",
  }
);

add(
  740,
  "A 8ª Conferência Nacional de Saúde (1986) consolidou diretrizes que, entre outras, incluíam:",
  [
    "A) Universalidade, integralidade, equidade, descentralização, participação social e papel estratégico da atenção primária.",
    "B) Substituição do financiamento público por seguro exclusivamente privado.",
    "C) Eliminação da vigilância epidemiológica.",
    "D) Centralização absoluta sem papel dos municípios.",
  ],
  0,
  1,
  "A 8ª CNS sintetiza princípios que atravessam o texto constitucional e as leis orgânicas.",
  {
    A: "Correta: Lista próxima aos princípios doutrinários cobrados nas próximas aulas.",
    B: "Incorreta: A crítica reformista não pressupõe desfinanciar o público.",
    C: "Incorreta: Vigilância é central na reforma.",
    D: "Incorreta: Descentralização é eixo, não hipercentralização municipal zero.",
  }
);

add(
  741,
  "Na transição das ideias da Reforma Sanitária para a CF/88, “descentralização” federativa associa-se principalmente a:",
  [
    "A) Suprimir competências estaduais e municipais.",
    "B) Distribuir responsabilidades entre União, estados e municípios no cuidado em saúde.",
    "C) Concentrar todas as decisões em secretaria única nacional.",
    "D) Transferir o SUS integralmente para organismos internacionais.",
  ],
  1,
  3,
  "CF e Lei 8.080 pressupõem coordenação federativa, não monopólio de um ente.",
  {
    A: "Incorreta: O desenho preconiza compartilhamento federativo.",
    B: "Correta: Corresponde à ideia de comando em cada esfera com articulação.",
    C: "Incorreta: Comando único é por esfera, não monopólio federal absoluto de tudo.",
    D: "Incorreta: Sem previsão de entrega do SUS a instância externa.",
  }
);

// ——— sus_a4 (742–751) Lei 8080/8142 ———
add(
  742,
  "Segundo a Lei nº 8.080/1990, o princípio da universalidade implica que:",
  [
    "A) Todos têm direito ao acesso integral às ações e serviços de saúde.",
    "B) Apenas segurados de planos privados utilizam o SUS.",
    "C) O acesso é restrito a quem comprova pagamento de taxas municipais.",
    "D) Somente gestantes e crianças integram o sistema.",
  ],
  0,
  1,
  "Universalidade é pilar doutrinário da Lei 8.080.",
  {
    A: "Correta: Definição canônica do princípio.",
    B: "Incorreta: SUS é público e universal; plano não é requisito.",
    C: "Incorreta: Acesso universal não se condiciona a taxa comercial.",
    D: "Incorreta: Sistema abrange toda a população.",
 }
);

add(
  743,
  "A Lei nº 8.142/1990 tem como foco típico de prova:",
  [
    "A) Somente critérios de internação hospitalar.",
    "B) Participação da comunidade, conferências e conselhos de saúde e regras de transferência de recursos.",
    "C) Definição exclusiva de protocolos de antibiótico.",
    "D) Regulamentação de planos de saúde exclusivamente privados.",
  ],
  1,
  2,
  "8.142 normatiza controle social e instrumentos participativos.",
  {
    A: "Incorreta: Internação é eixo da 8.080, não exclusivo da 8.142.",
    B: "Correta: Converge com o título da lei.",
    C: "Incorreta: Assistência farmacológica não é núcleo da 8.142.",
    D: "Incorreta: 8.142 não substitui a ANS; foco é participação e pactuação.",
  }
);

add(
  744,
  "Equidade no SUS, conforme o material, diferencia-se de igualdade formal porque:",
  [
    "A) Ignora desigualdades históricas.",
    "B) Trata todos exatamente igual mesmo com necessidades diferentes.",
    "C) Exige ponderar desigualdades e diferenciar intervenções para tornar o acesso efetivo.",
    "D) Restringe atendimento a quem tem maior renda.",
  ],
  2,
  2,
  "Equidade corrige desigualdades; igualdade “cega” pode perpetuar injustiça.",
  {
    A: "Incorreta: Equidade supõe olhar às desigualdades.",
    B: "Incorreta: Isso descreve igualdade formal; equidade ajusta pelo grau de necessidade.",
    C: "Correta: Tratar desigualmente os desiguais na extensão da desigualdade.",
    D: "Incorreta: Princípio não privilegia renda, mas necessidade.",
  }
);

add(
  745,
  "Integralidade, entre os princípios doutrinários do SUS (Lei 8.080), significa:",
  [
    "A) Cobrir apenas consultas médicas ambulatoriais.",
    "B) Limitar-se a vacinação e puericultura.",
    "C) Assistência fragmentada apenas no território central da capital.",
    "D) Abranger promoção, prevenção, tratamento e reabilitação, sem reduzir a saúde ao episódio agudo.",
  ],
  3,
  2,
  "Integralidade completa o cuidado ao longo do necessário, não só um nível assistencial.",
  {
    A: "Incorreta: APS é mais que consulta; integralidade inclui outros níveis e ações.",
    B: "Incorreta: Vacinas são parte, não o todo.",
    C: "Incorreta: Integralidade não é “espacialidade apenas”.",
    D: "Correta: Ciclo completo do cuidado em saúde.",
  }
);

add(
  746,
  "O art. 196 da CF/88 estabelece a saúde como direito de todos e dever do Estado, a ser garantido mediante políticas que visem, entre outros fins, a:",
  [
    "A) Redução do risco de doença e outros agravos e acesso universal e igualitário às ações de promoção, proteção e recuperação da saúde.",
    "B) Privatização obrigatória de todos os hospitais públicos.",
    "C) Exclusão de ações de prevenção do SUS.",
    "D) Centralização da vigilância apenas em laboratório federal único.",
  ],
  0,
  2,
  "Art. 196 sintetiza direito social e deveres correlatos de política pública.",
  {
    A: "Correta: Alinha-se à redação constitucional típica de prova.",
    B: "Incorreta: CF admite complementaridade privada limitada; não privatização oblíqua total.",
    C: "Incorreta: Prevenção é parte do dever estatal.",
    D: "Incorreta: Vigilância é compartilhada federativamente.",
  }
);

add(
  747,
  "Em um município, acontece periodicamente assembleia ampla que elabora propostas para a saúde, enquanto outro colegiado fiscaliza execução e pactua metas ao longo do ano. Esse arranjo aproxima-se, respectivamente, de:",
  [
    "A) Conselho de ética médica e core bancário.",
    "B) Conferência de saúde (debate ampliado) e conselho de saúde (deliberação/fiscalização continuada).",
    "C) Comissão de internação e tribunal regional.",
    "D) Apenas marketing institucional sem legitimidade.",
  ],
  1,
  3,
  "8.142 distingue conferência periódica de conselho permanente.",
  {
    A: "Incorreta: Órgãos assistenciais não substituem instâncias de participação.",
    B: "Correta: Conferência mobiliza periodicamente; conselho é permanente.",
    C: "Incorreta: Internação e judiciário não são os instrumentos citados.",
    D: "Incorreta: Há base legal para participação social, não mero marketing.",
  }
);

add(
  748,
  "Homem de 60 anos com dor torácica estável é encaminhado direto ao pronto-socorro de hospital terciário sem passar pela UBS, sem critério de urgência e sem registro na APS. Sob a lógica do SUS, isso ilustra principalmente:",
  [
    "A) Uso adequado obrigatório da alta complexidade.",
    "B) Fortalecimento automático da APS.",
    "C) Desrespeito à hierarquização e à resolutividade na porta de entrada.",
    "D) Exclusão necessária da regionalização.",
  ],
  2,
  3,
  "O sistema pressupõe APS como coordenadora e uso ordenado dos níveis de atenção.",
  {
    A: "Incorreta: Alta complexidade sem critério prejudica equidade e fluxo.",
    B: "Incorreta: Saltar a APS fragiliza coordenação.",
    C: "Correta: Hierarquia e referência/contrarreferência são princípios organizativos.",
    D: "Incorreta: Regionalização é instrumento de organização, não algo a “excluir”.",
  }
);

add(
  749,
  "Qual diploma legal institui o Sistema Único de Saúde (SUS) no plano federal, segundo a aula?",
  [
    "A) Decreto municipal modelo.",
    "B) Portaria ministerial exclusivamente administrativa.",
    "C) Medida provisória de caráter trabalhista.",
    "D) Lei nº 8.080, de 19 de setembro de 1990.",
  ],
  3,
  1,
  "Lei 8.080 é a “lei-mãe” do desenho do SUS.",
  {
    A: "Incorreta: Base legal federal do SUS não é decreto local.",
    B: "Incorreta: Portaria não substitui a lei orgânica de criação.",
    C: "Incorreta: MP trabalhista não institui o SUS.",
    D: "Correta: Data e número memorizáveis de prova.",
  }
);

add(
  750,
  "Regionalização, como princípio organizativo do SUS, objetiva principalmente:",
  [
    "A) Organizar o cuidado em regiões de saúde, planejando oferta e reduzindo improviso e superlotação.",
    "B) Impedir encaminhamentos entre municípios.",
    "C) Substituir a APS por hospitais exclusivamente.",
    "D) Eliminar conselhos de saúde.",
  ],
  0,
  2,
  "Regionalização articula território, leitos e transporte sanitário.",
  {
    A: "Correta: Planejamento por região para coerência assistencial.",
    B: "Incorreta: Referência entre serviços permanece necessária.",
    C: "Incorreta: APS segue como porta de entrada preferencial.",
    D: "Incorreta: Participação social não é suprimida por regionalizar.",
  }
);

add(
  751,
  "Na distinção pedagógica do material, “universalidade” e “equidade” relacionam-se assim:",
  [
    "A) Universalidade é só para quem reside em capitais.",
    "B) Universalidade garante acesso a todos; equidade ajusta recursos segundo necessidades para efetivar o direito.",
    "C) Equidade dispensa o público universal.",
    "D) São sinônimos intercambiáveis em qualquer banca.",
  ],
  1,
  3,
  "Universalidade abarca todos; equidade corrige desigualdades de necessidade.",
  {
    A: "Incorreta: Universalidade não tem recorte só capitalino.",
    B: "Correta: Combinação canônica de princípios doutrinários.",
    C: "Incorreta: Equidade operacionaliza universalidade, não a substitui.",
    D: "Incorreta: Conceitos são complementares, não idênticos.",
  }
);

// ——— sus_a5 (752–761) Pacto pela Vida ———
add(
  752,
  "A taxa de mortalidade infantil (por mil nascidos vivos) é, tipicamente, um indicador que:",
  [
    "A) Mede apenas ocupação de leitos de UTI neonatal.",
    "B) Substitui a vigilância de surtos febris.",
    "C) Reflete desfecho populacional sensível a APS, saneamento, nutrição e cuidado materno-infantil.",
    "D) Ignora completamente o pré-natal.",
  ],
  2,
  1,
  "Mortalidade infantil sintetiza múltiplos determinantes; por isso o Pacto pela Vida prioriza linhas materno-infantis.",
  {
    A: "Incorreta: É indicador populacional, não só taxa de ocupação de um setor.",
    B: "Incorreta: Vigilância permanece necessária para outros agravos.",
    C: "Correta: Desfecho sensível a políticas sociais e cuidado pré-natal/puericultura.",
    D: "Incorreta: Pré-natal é fator central na sua redução.",
  }
);

add(
  753,
  "No conjunto de pactos do Ministério da Saúde, o “Pacto pela Vida” diferencia-se do “Pacto pela Gestão” porque:",
  [
    "A) O primeiro trata apenas de folha de pagamento de servidores estatutários.",
    "B) O primeiro organiza prioridades sanitárias com foco em resultados (mortalidade, rastreamento, idoso, emergências), enquanto o segundo enfatiza capacidade de gerir, pactuar e monitorar administrativamente.",
    "C) O Pacto pela Vida exclui vigilância epidemiológica.",
    "D) O Pacto pela Gestão proíbe metas de saúde.",
  ],
  1,
  2,
  "“Vida” = resultados em saúde; “Gestão” = governança e indicadores administrativos.",
  {
    A: "Incorreta: Não se resume a folha.",
    B: "Correta: Contraste clássico pedido em prova conceitual.",
    C: "Incorreta: Emergentes/endemias integram o eixo do Pacto pela Vida.",
    D: "Incorreta: Gestão lida justamente com metas e pactuação.",
  }
);

add(
  754,
  "Mulher de 50 anos, assintomática, faz citologia oncótica de rastreamento que revela lesão que exige seguimento. Do ponto de vista do Pacto pelo câncer de colo, o erro assistencial maior seria:",
  [
    "A) Registrar resultado apenas no prontuário sem comunicar a paciente.",
    "B) Encaminhar ao tratamento e garantir continuidade da linha de cuidado.",
    "C) Rastrear sem assegurar vínculo ao diagnóstico e tratamento quando necessário.",
    "D) Integrar vigilância com APS para busca ativa de atrasadas.",
  ],
  2,
  2,
  "Integralidade no rastreamento exige linha completa: rastrear sem tratar viola o cuidado.",
  {
    A: "Incorreta: Falha grave, mas a alternativa C captura erro estrutural do fluxo referenciado na aula.",
    B: "Incorreta: É conduta desejável, não erro.",
    C: "Correta: “Rastrear sem tratar” é pegadinha clássica do material.",
    D: "Incorreta: Integração é boa prática.",
  }
);

add(
  755,
  "Na vigilância em saúde, o Pacto pela Vida costuma articular ações como:",
  [
    "A) Eliminar notificação de agravos de notificação compulsória.",
    "B) Restringir vacinação a hospitais terciários apenas.",
    "C) Substituir APS por laboratório central exclusivo.",
    "D) Notificação, investigação de eventos e respostas como bloqueio vacinal quando indicado.",
  ],
  3,
  2,
  "Vigilância integra monitoramento e ação em saúde pública, não só exame.",
  {
    A: "Incorreta: Notificação é pilar da vigilância.",
    B: "Incorreta: Vacinação é fortalecida na APS e na rede.",
    C: "Incorreta: APS e vigilância devem integrar-se.",
    D: "Correta: Exemplos típicos do material (tabela APS/vigilância/urgência).",
  }
);

add(
  756,
  "Óbito materno é evento raro, porém grave; do ponto de vista de indicadores e pactos, exige:",
  [
    "A) Investigação e ações para reduzir risco obstétrico, articulando linha materno-infantil.",
    "B) Ignorar o caso por ser estatisticamente infrequente.",
    "C) Transferir a responsabilidade exclusivamente ao Judiciário.",
    "D) Considerar inevitável sem qualquer análise evitável.",
  ],
  0,
  2,
  "Óbito materno demanda vigilância e resposta do sistema, não naturalização.",
  {
    A: "Correta: Material destaca raridade + gravidade + necessidade de investigação.",
    B: "Incorreta: Raridade não dispensa resposta em saúde pública.",
    C: "Incorreta: Sistema deve agir em políticas de redução de risco.",
    D: "Incorreta: Mortes evitáveis são foco de pactuação.",
  }
);

add(
  757,
  "Cobertura vacinal elevada reflete, entre outros aspectos:",
  [
    "A) Apenas preferência estética da população.",
    "B) Desempenho do programa e confiança da população no serviço e na comunicação.",
    "C) Eliminação total da necessidade de vigilância.",
    "D) Substituição integral do pré-natal.",
  ],
  1,
  2,
  "Cobertura vacinal sintetiza adesão e logística do programa.",
  {
    A: "Incorreta: Indicador é político-assistencial, não estético.",
    B: "Correta: Conforme a aula (desempenho e confiança).",
    C: "Incorreta: Vacina e vigilância coexistem.",
    D: "Incorreta: Vacinação complementa outras linhas de cuidado.",
  }
);

add(
  758,
  "O Pacto pela Vida agrega, segundo a aula, programas de alto impacto voltados a:",
  [
    "A) Apenas reforma administrativa interna do Ministério.",
    "B) Exclusivamente contratos de telemedicina privada.",
    "C) Metas exclusivamente contábeis sem desfechos em saúde.",
    "D) Resultados em saúde como mortalidade, rastreamento de câncer, idoso, materno-infantil e emergentes/endemias.",
  ],
  3,
  3,
  "Pacto pela Vida traduz prioridades sanitárias mensuráveis em vidas.",
  {
    A: "Incorreta: Isso aproxima-se mais do Pacto pela Gestão.",
    B: "Incorreta: Foco é política pública de resultados, não modalidade assistencial isolada.",
    C: "Incorreta: Há metas de saúde, não só administrativas frias.",
    D: "Correta: Eixos listados no material.",
  }
);

add(
  759,
  "Na tabela da aula que relaciona áreas (APS, vigilância, rede de urgência) a exemplos, a rede de urgência inclui meta de:",
  [
    "A) Reduzir apenas tempo de espera em farmácia.",
    "B) Extinguir pronto-socorro.",
    "C) Substituir SAMU por consultório privado.",
    "D) Reduzir mortes evitáveis por causa mal assistida.",
  ],
  3,
  3,
  "Urgência entra na lógica de evitabilidade e resposta.",
  {
    A: "Incorreta: Meta é desfecho grave, não só fila de medicamento.",
    B: "Incorreta: PS permanece necessário na rede.",
    C: "Incorreta: Não há substituição por consultório privado como regra.",
    D: "Correta: Texto da tabela na aula.",
  }
);

add(
  760,
  "Os eixos típicos do Pacto pela Vida citados no material incluem:",
  [
    "A) Idoso; câncer de colo e mama; redução da mortalidade materna e infantil; emergentes e endemias.",
    "B) Apenas reforma tributária federal.",
    "C) Somente construção civil hospitalar.",
    "D) Exclusivamente educação formal em universidades.",
  ],
  0,
  3,
  "Memorize os quatro eixos centrais do pacto.",
  {
    A: "Correta: Lista do material.",
    B: "Incorreta: Pacto em Defesa trata mais de financiamento/sustentação política.",
    C: "Incorreta: Infraestrutura não define sozinha o pacto.",
    D: "Incorreta: Educação permanente importa, mas não é o eixo listado como “eixos típicos”.",
  }
);

add(
  761,
  "Pactuar, no contexto do SUS, significa principalmente:",
  [
    "A) Eliminar negociação entre gestores.",
    "B) Combinar responsabilidades entre gestores federados com metas, indicadores e repasse condicionado (conforme período e norma).",
    "C) Substituir princípios constitucionais por acordo verbal.",
    "D) Centralizar todas as decisões em um único hospital.",
  ],
  1,
  1,
  "Pactuação é acordo federativo com metas; não dispensa princípios do SUS.",
  {
    A: "Incorreta: Há negociação e responsabilização.",
    B: "Correta: Definição operacional da aula.",
    C: "Incorreta: Pacto não revoga direitos fundamentais.",
    D: "Incorreta: Descentralização federativa permanece.",
  }
);

// ——— sus_a6 (762–771) RAS / Pacto Gestão / 7.508 ———
add(
  762,
  "A Rede de Atenção à Saúde (RAS) organiza serviços em torno de:",
  [
    "A) Apenas cadastro de estabelecimentos de saúde.",
    "B) Lista fixa de CNPJ hospitalares sem critério clínico.",
    "C) Necessidades de saúde da população, integrando níveis e linhas de cuidado com referência e contrarreferência.",
    "D) Fluxo exclusivo de internação eletiva privada.",
  ],
  2,
  1,
  "RAS é fluxo e responsabilidade compartilhada, não inventário estático.",
  {
    A: "Incorreta: Cadastro informa; RAS organiza cuidado.",
    B: "Incorreta: RAS não é só lista de hospitais.",
    C: "Correta: Definição central da aula.",
    D: "Incorreta: RAS abrange APS, urgência, média e alta complexidade.",
  }
);

add(
  763,
  "Regionalizar o território em saúde visa principalmente:",
  [
    "A) Impedir qualquer transporte de pacientes.",
    "B) Planejar oferta, leitos e especialistas por região de saúde, reduzindo improviso e descompasso entre serviços.",
    "C) Apagar fronteiras epidemiológicas.",
    "D) Substituir descentralização político-administrativa.",
  ],
  1,
  2,
  "Regionalização organiza produção de saúde no espaço; descentralização distribui competências.",
  {
    A: "Incorreta: Transporte sanitário pode ser necessário na rede.",
    B: "Correta: Objetivo de planejamento territorial.",
    C: "Incorreta: Regiões têm identidade epidemiológica; não se “apaga” realidade.",
    D: "Incorreta: Conceitos são complementares, não excludentes.",
  }
);

add(
  764,
  "O Decreto nº 7.508/2011 costuma ser cobrado como marco que:",
  [
    "A) Revoga a Lei 8.080 integralmente.",
    "B) Elimina contratos entre gestor e prestador.",
    "C) Regulamenta aspectos de organização financeira e contratualização de redes, alinhando financiamento ao cuidado em rede.",
    "D) Proíbe Programação Pactuada e Integrada (PPI).",
  ],
  2,
  2,
  "7.508 reforça planejamento e contratos de rede sob a lógica da Lei 8.080.",
  {
    A: "Incorreta: A lei orgânica permanece; o decreto regulamenta facetas.",
    B: "Incorreta: Contratualização é instrumento típico.",
    C: "Correta: Foco pedagógico do material.",
    D: "Incorreta: PPI é instrumento de pactuação.",
  }
);

add(
  765,
  "Referência, no contexto da RAS, é o encaminhamento ordenado quando:",
  [
    "A) O paciente escolhe aleatoriamente qualquer hospital.",
    "B) Não há necessidade de informação clínica.",
    "C) A APS deve encerrar o caso sem comunicação.",
    "D) A complexidade exige outro ponto da rede, com justificativa e dados clínicos relevantes.",
  ],
  3,
  2,
  "Referência pressupõe critério e informação para coordenar o cuidado.",
  {
    A: "Incorreta: Fluxo deve ser ordenado, não aleatório.",
    B: "Incorreta: Dados clínicos sustentam a referência.",
    C: "Incorreta: APS coordena continuidade.",
    D: "Correta: Conforme tabela “Encaminhamento” da aula.",
  }
);

add(
  766,
  "Contratualização entre gestor e prestador, no arcabouço discutido, implica:",
  [
    "A) Relação com metas e avaliação de desempenho, indo além de repasse automático sem critério.",
    "B) Autorização para abandono de protocolos.",
    "C) Eliminação de transparência e indicadores.",
    "D) Substituição do SUS por seguro exclusivamente privado.",
  ],
  0,
  3,
  "Contratualização organiza responsabilidades e resultados na rede.",
  {
    A: "Correta: Ideia de “comprar resultados” e avaliação.",
    B: "Incorreta: Contrato deve respeitar normas e cuidado.",
    C: "Incorreta: Transparência e indicadores são esperados na gestão pactuada.",
    D: "Incorreta: SUS permanece núcleo do acesso universal.",
  }
);

add(
  767,
  "Contrarreferência deve trazer de volta à APS, idealmente:",
  [
    "A) Apenas o nome do hospital, sem conduta.",
    "B) Resumo do que foi feito no serviço de referência e plano de manutenção na atenção primária.",
    "C) Pedido de novo encaminhamento idêntico sem avaliação.",
    "D) Cancelamento automático do vínculo na UBS.",
  ],
  1,
  3,
  "Contrarreferência sustenta continuidade e coordenação.",
  {
    A: "Incorreta: Falta informação clínica e plano.",
    B: "Correta: Definição da tabela da aula.",
    C: "Incorreta: Deve haver integração e ajuste de conduta.",
    D: "Incorreta: Continuidade é atributo da APS/RAS.",
  }
);

add(
  768,
  "Qual distinção o material faz entre RAS e “cadastro de estabelecimentos”?",
  [
    "A) São sinônimos.",
    "B) RAS é fluxo e responsabilidade do cuidado; cadastro é informação sobre pontos de atenção.",
    "C) Cadastro substitui linha de cuidado.",
    "D) RAS dispensa referência e contrarreferência.",
  ],
  1,
  2,
  "RAS é organização do percurso assistencial; cadastro é insumo, não substituto.",
  {
    A: "Incorreta: Conceitos diferem.",
    B: "Correta: Diferenciação explícita na tabela comparativa.",
    C: "Incorreta: Linha de cuidado exige coordenação clínica.",
    D: "Incorreta: RAS pressupõe mecanismos de continuidade.",
  }
);

add(
  769,
  "Continuidade do cuidado na RAS pressupõe, entre outros elementos:",
  [
    "A) Encaminhamento sem retorno agendado ou responsável definido na APS.",
    "B) Apenas internação prolongada.",
    "C) Alta hospitalar sem comunicação com a UBS.",
    "D) Agendamento e responsável definido na APS para acompanhamento.",
  ],
  3,
  1,
  "Continuidade evita que o paciente “suma” entre serviços.",
  {
    A: "Incorreta: Falta de retorno quebra continuidade.",
    B: "Incorreta: Continuidade vale também no ambulatorial.",
    C: "Incorreta: Contrarreferência e comunicação são centrais.",
    D: "Correta: Item da tabela da aula.",
  }
);

add(
  770,
  "A linha maternal-infantil exemplificada (pré-natal na UBS ↔ maternidade ↔ puericultura) expressa:",
  [
    "A) Integração de níveis com continuidade do cuidado na RAS.",
    "B) Proibição de parto hospitalar.",
    "C) APS apenas para vacinação.",
    "D) Descentralização sem regionalização.",
  ],
  0,
  2,
  "Linhas de cuidado conectam pontos da rede com critérios de entrada e saída.",
  {
    A: "Correta: Exemplo didático da aula.",
    B: "Incorreta: Maternidade de referência integra a linha.",
    C: "Incorreta: Pré-natal é cuidado longitudinal na APS.",
    D: "Incorreta: Regionalização organiza oferta no território.",
  }
);

add(
  771,
  "Paciente retorna da especialidade sem resumo de alta ou plano terapêutico para a UBS. Esse cenário configura falha típica de:",
  [
    "A) Apenas estética do prontuário.",
    "B) RAS e ausência de contrarreferência com continuidade assistencial.",
    "C) Vigilância laboratorial exclusiva.",
    "D) Cadastro de microárea sem vínculo.",
  ],
  1,
  3,
  "Quebra de informação entre pontos é falha de rede e coordenação.",
  {
    A: "Incorreta: Impacto é clínico e de segurança do cuidado.",
    B: "Correta: Material associa “sumir entre serviços” à falha de RAS/contrarreferência.",
    C: "Incorreta: Laboratório não substitui coordenação clínica.",
    D: "Incorreta: Problema central é fluxo e comunicação entre serviços.",
  }
);

// ——— sus_a7 (772–781) Pacto em Defesa ———
add(
  772,
  "Subfinanciamento crônico do SUS manifesta-se, entre outros modos, como:",
  [
    "A) Filas, demora diagnóstica e precarização de condições de trabalho.",
    "B) Eliminação total de desigualdades regionais.",
    "C) Universalização automática sem necessidade de gestão.",
    "D) Extinção de conselhos de saúde.",
  ],
  0,
  1,
  "Financiamento insuficiente atinge acesso e trabalho em saúde.",
  {
    A: "Correta: Consequências citadas na aula.",
    B: "Incorreta: Desigualdades persistem.",
    C: "Incorreta: Direito exige organização e recursos.",
    D: "Incorreta: Participação social é instrumento de defesa do SUS.",
  }
);

add(
  773,
  "A complementaridade da iniciativa privada na CF/88 não autoriza:",
  [
    "A) Regulação e contrapartidas sociais quando aplicável.",
    "B) Tratar a complementaridade como licença para desfinanciar o SUS ou substituir o acesso universal.",
    "C) Contratos com fins públicos em determinadas lógicas legais.",
    "D) Participação complementar em nichos definidos constitucionalmente.",
  ],
  1,
  2,
  "Complemento não pode elidir o núcleo público universal.",
  {
    A: "Incorreta: Regulação é compatível com complementaridade.",
    B: "Correta: Pegadinha clássica do material.",
    C: "Incorreta: Contratualização pode existir sob regras.",
    D: "Incorreta: Complementaridade é constitucionalmente admitida com limites.",
  }
);

add(
  774,
  "Privilégios fiscais e distorções que favorecem segmentos privados sem contrapartida social tendem a:",
  [
    "A) Resolver automaticamente a equidade no SUS.",
    "B) Eliminar necessidade de controle social.",
    "C) Agravar injustiças e pressionar o projeto de universalização e equidade.",
    "D) Substituir o financiamento público por doações espontâneas.",
  ],
  2,
  3,
  "Ameaças ao SUS incluem distorções que beneficiam privado sem retorno social.",
  {
    A: "Incorreta: Equidade não surge automaticamente.",
    B: "Incorreta: Controle social permanece necessário.",
    C: "Correta: Alinhado à crítica do material.",
    D: "Incorreta: Financiamento estatal é dever, não substituível por esmola.",
  }
);

add(
  775,
  "Controle social difere de “marketing institucional” porque:",
  [
    "A) Ambos são idênticos.",
    "B) Marketing substitui conselhos e conferências.",
    "C) Controle social não tem legitimidade legal.",
    "D) Controle social envolve deliberação e fiscalização de políticas; marketing persuasivo não substitui participação democrática.",
  ],
  3,
  2,
  "Participação não é propaganda: é institucionalidade participativa.",
  {
    A: "Incorreta: Propósitos diferem.",
    B: "Incorreta: Marketing não cumpre papel de conselho/conferência.",
    C: "Incorreta: Base legal em 8.142 e CF.",
    D: "Correta: Distinção da tabela da aula.",
  }
);

add(
  776,
  "Fragmentação assistencial ocorre quando:",
  [
    "A) Há coordenação plena entre APS e especialidade com contrarreferência.",
    "B) Perde-se a coordenação do cuidado e a continuidade entre pontos da rede.",
    "C) Existe linha de cuidado pactuada.",
    "D) Regionalização está implementada com PPI.",
  ],
  1,
  2,
  "Fragmentação é perda de encadeamento assistencial.",
  {
    A: "Incorreta: Descreve RAS forte.",
    B: "Correta: Definição do material.",
    C: "Incorreta: Linha de cuidado integra.",
    D: "Incorreta: Planejamento reduz fragmentação.",
  }
);

add(
  777,
  "Equidade, como bandeira do projeto do SUS, implica que:",
  [
    "A) Basta cortar custos onde for mais barato politicamente.",
    "B) Pode exigir mais investimento onde há maior necessidade, indo além de “eficiência financeira fria”.",
    "C) Trata todos igualmente sem olhar necessidade.",
    "D) É sinônimo de privatização.",
  ],
  1,
  1,
  "Equidade corrige injustiças históricas; não é mera contabilidade.",
  {
    A: "Incorreta: Critério é necessidade e justiça, não conveniência.",
    B: "Correta: Tabela comparativa equidade versus eficiência fria.",
    C: "Incorreta: Igualdade formal não basta.",
    D: "Incorreta: Equidade é princípio doutrinário do SUS público.",
  }
);

add(
  778,
  "O Pacto em Defesa do SUS traduz compromissos voltados a:",
  [
    "A) Eliminar financiamento público.",
    "B) Substituir o SUS por seguro obrigatório privado universal.",
    "C) Fortalecimento institucional, financiamento e sustentação política do sistema.",
    "D) Proibir conferências de saúde.",
  ],
  2,
  2,
  "Defesa do SUS articula financiamento, participação e universalidade.",
  {
    A: "Incorreta: Financiamento público é condição do direito.",
    B: "Incorreta: Núcleo universal é público pelo SUS.",
    C: "Correta: Foco típico do pacto na aula.",
    D: "Incorreta: Conferências são espaço de participação.",
  }
);

add(
  779,
  "O art. 196 da CF/88 ancora a saúde como direito fundamental. Em prova, isso implica que o financiamento:",
  [
    "A) É favor discricionário se sobrar recurso ao fim do ano.",
    "B) Pode ser ignorado em nome apenas de metas fiscais arbitrárias.",
    "C) É irrelevante para a organização do SUS.",
    "D) É dever estatal vinculado à organização do sistema e não pode ser tratado como esmola anual.",
  ],
  3,
  3,
  "Direito social pressupõe dever de organização e recursos estáveis.",
  {
    A: "Incorreta: Saúde não é favor.",
    B: "Incorreta: Dever não desaparece por conveniência fiscal mal fundamentada.",
    C: "Incorreta: Financiamento sustenta oferta e equidade.",
    D: "Correta: Espírito do material sobre financiamento como oxigênio do sistema.",
  }
);

add(
  780,
  "Participação social na defesa do SUS materializa-se, entre outros, por:",
  [
    "A) Conselhos e conferências com papel de fiscalização e deliberação sobre prioridades.",
    "B) Substituição de equipes técnicas por voluntários sem formação.",
    "C) Eliminação de dados abertos e transparência.",
    "D) Restrição de acesso à informação para usuários.",
  ],
  0,
  3,
  "Controle social legitima e corrige trajetórias de política.",
  {
    A: "Correta: Instrumentos clássicos da participação.",
    B: "Incorreta: Participação não elimina trabalho técnico.",
    C: "Incorreta: Transparência fortalece controle.",
    D: "Incorreta: Acesso à informação é peça do controle social.",
  }
);

add(
  781,
  "Afirmar que “ampliar plano privado resolve a fila do SUS” sem políticas de equidade costuma ser considerado, no raciocínio da aula:",
  [
    "A) Verdade absoluta sem ressalvas.",
    "B) Visão ingênua: pode selecionar risco e não resolve injustiça estrutural do acesso universal.",
    "C) Equivalente à regionalização plena.",
    "D) Síntese da Lei 8.142.",
  ],
  1,
  2,
  "Mercantilização seletiva não substitui compromisso com equidade e SUS.",
  {
    A: "Incorreta: O material apresenta crítica.",
    B: "Correta: Alinhado à pegadinha sobre plano privado e equidade.",
    C: "Incorreta: Regionalização é instrumento do SUS público.",
    D: "Incorreta: 8.142 trata de participação social.",
  }
);

// ——— sus_a8 (782–791) PNAB / ESF ———
add(
  782,
  "A atenção primária à saúde, nos atributos clássicos citados, inclui:",
  [
    "A) Acesso de primeiro contato, longitudinalidade, coordenação do cuidado, integralidade e orientação familiar/comunitária.",
    "B) Apenas consulta de urgência hospitalar.",
    "C) Exclusivamente internação eletiva.",
    "D) Substituição de vigilância epidemiológica.",
  ],
  0,
  1,
  "Memorize os cinco atributos essenciais da APS.",
  {
    A: "Correta: Lista do material.",
    B: "Incorreta: Urgência hospitalar não define APS.",
    C: "Incorreta: APS é principalmente ambulatorial e comunitária.",
    D: "Incorreta: APS integra vigilância, não a extingue.",
  }
);

add(
  783,
  "A Estratégia Saúde da Família (ESF) caracteriza-se por:",
  [
    "A) Posto sem território definido ou população adscrita.",
    "B) Equipe vinculada a território definido, população adscrita e vínculo longitudinal.",
    "C) Exclusão obrigatória do ACS.",
    "D) Atendimento apenas hospitalar.",
  ],
  1,
  2,
  "ESF = equipe + território + vínculo.",
  {
    A: "Incorreta: Territorialização é central.",
    B: "Correta: Definição da aula.",
    C: "Incorreta: ACS frequentemente integra a equipe.",
    D: "Incorreta: APS resolve maior parte dos problemas na UBS.",
  }
);

add(
  784,
  "O NASF (Núcleo de Apoio à Saúde da Família) atua principalmente como:",
  [
    "A) Substituição total da equipe da UBS.",
    "B) Hospital dia exclusivo para cirurgias eletivas.",
    "C) Apoio matricial para fortalecer resolutividade da ESF com projetos terapêuticos e grupos compartilhados.",
    "D) Cadastro de CNPJ sem contato com território.",
  ],
  2,
  3,
  "NASF soma competências; não “vira” a UBS.",
  {
    A: "Incorreta: Ideia é apoio, não substituição.",
    B: "Incorreta: Foco é apoio multiprofissional à APS.",
    C: "Correta: Método de apoio matricial.",
    D: "Incorreta: Trabalho é territorializado com a equipe.",
  }
);

add(
  785,
  "O Agente Comunitário de Saúde (ACS), no desenho típico da ESF, tem papel de:",
  [
    "A) Substituir enfermeiro e médico nas prescrições.",
    "B) Realizar cirurgias de pequeno porte.",
    "C) Eliminar necessidade de cadastro ativo.",
    "D) Vínculo territorial, cadastro e encaminhamento inteligente à equipe.",
  ],
  3,
  1,
  "ACS articula território e equipe; não substitui outros profissionais.",
  {
    A: "Incorreta: ACS não substitui enfermagem/medicina.",
    B: "Incorreta: Fora do escopo.",
    C: "Incorreta: Cadastro é instrumento de equidade e planejamento.",
    D: "Correta: Função descrita na aula.",
  }
);

add(
  786,
  "A Política Nacional de Atenção Básica (PNAB) reforça, entre outras diretrizes:",
  [
    "A) Planejamento, qualidade, redução de iniquidades e integração com vigilância e urgência.",
    "B) Eliminação da ESF em todo território.",
    "C) Proibição de educação permanente.",
    "D) Descentralização zero dos municípios.",
  ],
  0,
  2,
  "PNAB normatiza diretrizes da APS no país.",
  {
    A: "Correta: Eixos típicos do texto da aula.",
    B: "Incorreta: ESF é estratégia difundida de APS.",
    C: "Incorreta: Educação permanente é valorizada.",
    D: "Incorreta: Municipalização é parte do desenho do SUS.",
  }
);

add(
  787,
  "Cadastro ativo e territorializado na APS é instrumento de:",
  [
    "A) Mero enfeite burocrático sem uso clínico.",
    "B) Substituição de consentimento informado.",
    "C) Priorização e equidade ao identificar grupos e riscos no território.",
    "D) Impedir busca ativa de gestantes e hipertensos.",
  ],
  2,
  2,
  "Cadastro viabiliza planejamento e busca ativa.",
  {
    A: "Incorreta: Material rebate “burocracia inútil”.",
    B: "Incorreta: Ética e consentimento permanecem.",
    C: "Correta: Função de equidade e planejamento.",
    D: "Incorreta: Busca ativa é justamente facilitada.",
  }
);

add(
  788,
  "Coordenação do cuidado na APS exige, além do encaminhamento:",
  [
    "A) Apenas enviar papel em branco ao especialista.",
    "B) Informação clínica, critério e retorno planejado com contrarreferência quando aplicável.",
    "C) Proibição de contato com NASF.",
    "D) Encerrar o vínculo após primeira consulta.",
  ],
  1,
  2,
  "Coordenação é atributo essencial; difere de “passar papel”.",
  {
    A: "Incorreta: Falta coordenação clínica.",
    B: "Correta: Alinhado ao comparativo APS forte versus fraca.",
    C: "Incorreta: NASF apoia projetos e casos.",
    D: "Incorreta: Longitudinalidade exige continuidade.",
  }
);

add(
  789,
  "Integrar vigilância à APS permite:",
  [
    "A) Ignorar notificações em território.",
    "B) Tratar apenas o caso individual sem contexto epidemiológico.",
    "C) Evitar bloqueios vacinais por serem “centralizados”.",
    "D) Detectar agregados de risco e agir em bloqueio e orientação sem perder o cuidado individual.",
  ],
  3,
  3,
  "Vigilância no consultório evita surto invisível e fortalece ação coletiva.",
  {
    A: "Incorreta: Notificação é responsabilidade.",
    B: "Incorreta: Integração é justamente juntar indivíduo e coletivo.",
    C: "Incorreta: Bloqueio vacinal pode ser ação local articulada.",
    D: "Correta: Ideia da aula sobre vigilância integrada à APS.",
  }
);

add(
  790,
  "Diferencie APS e serviço de urgência em um caso:",
  [
    "A) APS é episódica apenas para trauma grave.",
    "B) Urgência é porta de entrada preferencial para hipertensão e diabetes.",
    "C) APS é cuidado longitudinal e resolutivo na UBS; urgência atende agravos agudos que exigem resposta imediata.",
    "D) São idênticos em função.",
  ],
  2,
  2,
  "Primeiro contato preferencial na APS; urgência para agudo grave.",
  {
    A: "Incorreta: APS é longitudinal; não só trauma.",
    B: "Incorreta: Crônicos devem ser principalmente na APS.",
    C: "Correta: Distinção da tabela comparativa.",
    D: "Incorreta: Papéis diferem.",
  }
);

add(
  791,
  "Microárea fragmenta o território para:",
  [
    "A) Impedir responsabilização do ACS.",
    "B) Responsabilizar ACS e equipe por subconjunto populacional e priorizar visitas e busca ativa.",
    "C) Eliminar cadastro.",
    "D) Substituir conselho de saúde.",
  ],
  1,
  3,
  "Microárea operacionaliza territorialização.",
  {
    A: "Incorreta: Objetivo é responsabilização.",
    B: "Correta: Definição operacional da aula.",
    C: "Incorreta: Cadastro permanece central.",
    D: "Incorreta: São instrumentos distintos.",
  }
);

// ——— sus_a9 (792–801) Genograma / Ecomapa / EPS ———
add(
  792,
  "Um padrão repetido de doenças crônicas em múltiplas gerações no genograma deve levar o cuidado a:",
  [
    "A) Ignorar prevenção por ser “familiar”.",
    "B) Considerar irrelevante o rastreio dirigido.",
    "C) Reforçar prevenção, rastreio e aconselhamento quando indicado.",
    "D) Evitar registrar informação por estigma.",
  ],
  2,
  2,
  "Genograma orienta risco e prevenção, não é decoração genealógica.",
  {
    A: "Incorreta: Padrão familiar aumenta relevância clínica.",
    B: "Incorreta: Rastreio dirigido é justamente o passo racional.",
    C: "Correta: Uso clínico descrito na aula.",
    D: "Incorreta: Registro ético apoia cuidado.",
  }
);

add(
  793,
  "No ecomapa, linhas tensas ou quebradas entre família e serviços podem sugerir:",
  [
    "A) Que o diagnóstico psiquiátrico está fechado apenas pelo desenho.",
    "B) Isolamento ou dificuldade de acesso a suporte — explicando adesão e vulnerabilidade.",
    "C) Que não há estresse ambiental possível.",
    "D) Eliminação da necessidade de vínculo com UBS.",
  ],
  1,
  3,
  "Ecomapa contextualiza suporte social; não substitui diagnóstico.",
  {
    A: "Incorreta: Ecomapa não fecha diagnóstico por si.",
    B: "Correta: Leitura pedagógica das linhas e relações.",
    C: "Incorreta: Linhas ruins costumam marcar tensão.",
    D: "Incorreta: Continuidade na APS permanece necessária.",
  }
);

add(
  794,
  "Na Educação Popular em Saúde (EPS), evita-se o “banking education” porque:",
  [
    "A) O método prioriza apenas transmissão vertical de regras sem diálogo.",
    "B) O foco é diálogo, problematização e autonomia — não apenas depósito de informação no usuário.",
    "C) Palestras longas são sempre proibidas.",
    "D) Não há espaço para grupos terapêuticos.",
  ],
  1,
  1,
  "EPS é freiriana: horizontalidade e sentido compartilhado.",
  {
    A: "Incorreta: Banking education é justamente o verticalismo criticado.",
    B: "Correta: Contraste com abordagem bancária.",
    C: "Incorreta: O problema é o método, não o tempo por si.",
    D: "Incorreta: Grupos podem ser espaço de EPS.",
  }
);

add(
  795,
  "Genograma e ecomapa ganham sentido pleno quando ancorados em:",
  [
    "A) Desenho isolado sem vínculo com território e cadastro.",
    "B) Apenas estética do caderno.",
    "C) Territorialização, microárea e planejamento com equipe — evitando ferramenta “solta”.",
    "D) Substituição do consentimento e do sigilo.",
  ],
  2,
  2,
  "Ferramentas familiares/comunitárias exigem território e ética.",
  {
    A: "Incorreta: Território ancora priorização.",
    B: "Incorreta: São instrumentos clínicos.",
    C: "Correta: Integração com territorialização da aula.",
    D: "Incorreta: Sigilo e consentimento são obrigatórios.",
  }
);

add(
  796,
  "Criança com asma mal controlada: no mesmo domicílio há tabagismo e superlotação. O genograma/ecomapa ajudam principalmente a:",
  [
    "A) Ignorar fatores ambientais e familiares.",
    "B) Substituir broncodilatador por apenas orientação verbal.",
    "C) Identificar determinantes de adesão e risco além do fármaco, planejando intervenção integral.",
    "D) Remover o paciente do SUS.",
  ],
  2,
  2,
  "Cuidado integral usa contexto familiar e rede de apoio.",
  {
    A: "Incorreta: Contexto explica controle e adesão.",
    B: "Incorreta: Tratamento medicamentoso segue indicação; contexto complementa.",
    C: "Correta: Ponte com a clínica da aula.",
    D: "Incorreta: Viola princípios do SUS.",
  }
);

add(
  797,
  "Sobre sigilo, consentimento e registro de genograma/ecomapa, é correto afirmar que:",
  [
    "A) Dados sensíveis podem ser expostos publicamente sem restrição.",
    "B) Ferramentas dispensam explicação ao paciente.",
    "C) O profissional deve registrar julgamentos morais sobre a família.",
    "D) A equipe explica finalidade, obtém consentimento quando cabível e registra objetivamente, protegendo o paciente.",
  ],
  3,
  2,
  "É ética de cuidado familiar, não invasão arbitrária.",
  {
    A: "Incorreta: Sigilo protege o usuário.",
    B: "Incorreta: Transparência de finalidade é parte do cuidado ético.",
    C: "Incorreta: Registro deve ser técnico, não moralista.",
    D: "Correta: Conduta alinhada ao bloco de ética da aula.",
  }
);

add(
  798,
  "A diferença essencial entre genograma e ecomapa é:",
  [
    "A) Ambos mapeiam apenas religião.",
    "B) Genograma foca parentesco e doenças na família; ecomapa mapeia vínculos e estresses com serviços, trabalho, escola e comunidade.",
    "C) Ecomapa substitui anamnese direta.",
    "D) Genograma não admite símbolos padronizados.",
  ],
  1,
  2,
  "Um olha linhagem e saúde familiar; outro, rede social externa.",
  {
    A: "Incorreta: Ambos são mais amplos.",
    B: "Correta: Diferenciação canônica da tabela.",
    C: "Incorreta: Complementam anamnese, não substituem entrevista clínica.",
    D: "Incorreta: Há convenções básicas de símbolos.",
  }
);

add(
  799,
  "Na comparação entre abordagem vertical e abordagem popular em saúde, a vertical tende a:",
  [
    "A) Problematizar estruturas e barreiras com o usuário.",
    "B) Construir sentido compartilhado em grupo.",
    "C) Medir adesão considerando barreiras estruturais e subjetivas.",
    "D) Transmitir regra de cima para baixo sem diálogo — típico do modelo bancário criticado.",
  ],
  3,
  1,
  "Verticalismo contrasta com EPS freiriana.",
  {
    A: "Incorreta: Problematizar é traço da abordagem popular.",
    B: "Incorreta: Diálogo e sentido compartilhado são populares.",
    C: "Incorreta: Olhar barreiras é mais alinhado à abordagem popular.",
    D: "Correta: Transmissão unilateral de norma.",
  }
);

add(
  800,
  "O ACS costuma ser ponto de partida para atualizar dados de território; genograma e ecomapa ajudam a:",
  [
    "A) Traduzir informações comunitárias para a equipe clínica e reduzir decisões só com o que “lembrou na consulta”.",
    "B) Eliminar o papel do médico.",
    "C) Substituir prontuário eletrônico.",
    "D) Impedir grupos de educação em saúde.",
  ],
  0,
  3,
  "Ferramentas integram visão de território ao cuidado.",
  {
    A: "Correta: Ponte prática do material entre ACS e equipe.",
    B: "Incorreta: Complementam decisão médica.",
    C: "Incorreta: Registro formal permanece necessário.",
    D: "Incorreta: Grupos podem usar EPS e integralidade.",
  }
);

add(
  801,
  "Família monoparental extensa com rede de apoio frágil no ecomapa sugere, para o plano terapêutico:",
  [
    "A) Ignorar rede e culpar apenas o paciente.",
    "B) Articular apoio social, serviços (CRAS/CAPS conforme caso) e continuidade na UBS — sem reduzir o caso ao indivíduo isolado.",
    "C) Encerrar acompanhamento na primeira consulta.",
    "D) Proibir visita domiciliar.",
  ],
  1,
  3,
  "Estrutura e rede orientam conduta integral e territorial.",
  {
    A: "Incorreta: EPS critica culpabilização ingênua.",
    B: "Correta: Integração com territorialização e serviços sociais.",
    C: "Incorreta: Longitudinalidade é princípio da APS.",
    D: "Incorreta: Visita pode ser instrumento legítimo.",
  }
);

// ——— aplicar ———
const data = JSON.parse(fs.readFileSync(jpath, "utf8"));
const expected = new Set([
  722, 723, 724, 725, 726, 727, 728, 729, 730, 731, 732, 733, 734, 735, 736, 737, 738, 739,
  740, 741, 742, 743, 744, 745, 746, 747, 748, 749, 750, 751, 752, 753, 754, 755, 756, 757,
  758, 759, 760, 761, 762, 763, 764, 765, 766, 767, 768, 769, 770, 771, 772, 773, 774, 775,
  776, 777, 778, 779, 780, 781, 782, 783, 784, 785, 786, 787, 788, 789, 790, 791, 792, 793,
  794, 795, 796, 797, 798, 799, 800, 801,
]);

for (const q of data.questoes) {
  if (!expected.has(q.id)) continue;
  const patch = U[q.id];
  if (!patch) {
    console.error("Falta patch para id", q.id);
    process.exit(1);
  }
  if (q.materia !== "sus" || q.modulo !== 1) {
    console.error("ID", q.id, "metadados inesperados:", q.materia, q.modulo);
    process.exit(1);
  }
  Object.assign(q, patch);
  finalizeExpl(q);
}

function countByTema(tema) {
  const list = data.questoes.filter((x) => x.materia === "sus" && x.tema === tema);
  const dif = { 1: 0, 2: 0, 3: 0 };
  const corr = { 0: 0, 1: 0, 2: 0, 3: 0 };
  for (const x of list) {
    dif[x.dificuldade]++;
    corr[x.correta]++;
  }
  return { n: list.length, dif, corr };
}

for (const tema of ["sus_a2", "sus_a3", "sus_a4", "sus_a5", "sus_a6", "sus_a7", "sus_a8", "sus_a9"]) {
  const s = countByTema(tema);
  if (s.n !== 10) {
    console.error(tema, "esperado 10 questões, tem", s.n);
    process.exit(1);
  }
  if (s.dif[1] !== 2 || s.dif[2] !== 5 || s.dif[3] !== 3) {
    console.error(tema, "dificuldade 2/5/3:", s.dif);
    process.exit(1);
  }
}

fs.writeFileSync(jpath, JSON.stringify(data, null, 2) + "\n", "utf8");
console.log("OK: sus_a2…sus_a9 atualizados (80 questões). Validação 2/5/3 por aula passou.");
