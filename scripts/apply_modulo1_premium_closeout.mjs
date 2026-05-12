import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const today = "2026-05-12";

function readJson(rel) {
  return JSON.parse(fs.readFileSync(path.join(ROOT, rel), "utf8"));
}

function writeJson(rel, value) {
  fs.writeFileSync(path.join(ROOT, rel), `${JSON.stringify(value, null, 2)}\n`, "utf8");
}

function readText(rel) {
  return fs.readFileSync(path.join(ROOT, rel), "utf8").replace(/\r\n/g, "\n").replace(/\r/g, "\n");
}

function writeText(rel, value) {
  fs.writeFileSync(path.join(ROOT, rel), `${value.replace(/\r\n/g, "\n").replace(/\r/g, "\n").replace(/\n*$/u, "")}\n`, "utf8");
}

function normalize(value) {
  return String(value || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();
}

function replaceSection(md, heading, body) {
  const lines = md.split("\n");
  const target = normalize(heading);
  let startHeading = -1;
  let level = 0;
  for (let i = 0; i < lines.length; i += 1) {
    const m = /^(#{2,3})\s+(.+?)\s*$/.exec(lines[i]);
    if (m && normalize(m[2]) === target) {
      startHeading = i;
      level = m[1].length;
      break;
    }
  }
  if (startHeading < 0) throw new Error(`Seção não encontrada: ${heading}`);
  let end = lines.length;
  for (let i = startHeading + 1; i < lines.length; i += 1) {
    const m = /^(#{2,3})\s+\S/.exec(lines[i]);
    if (m && m[1].length <= level) {
      end = i;
      break;
    }
  }
  const replacement = body.replace(/\n*$/u, "").split("\n");
  return [...lines.slice(0, startHeading + 1), ...replacement, ...lines.slice(end)].join("\n");
}

function replaceMiniQuizExplanations(md, explanations) {
  const lines = md.split("\n");
  let startHeading = -1;
  let level = 0;
  for (let i = 0; i < lines.length; i += 1) {
    const m = /^(#{2,3})\s+(.+?)\s*$/.exec(lines[i]);
    if (m && normalize(m[2]) === "mini quiz") {
      startHeading = i;
      level = m[1].length;
      break;
    }
  }
  if (startHeading < 0) throw new Error("Seção Mini Quiz não encontrada");
  let end = lines.length;
  for (let i = startHeading + 1; i < lines.length; i += 1) {
    const m = /^(#{2,3})\s+\S/.exec(lines[i]);
    if (m && m[1].length <= level) {
      end = i;
      break;
    }
  }
  let idx = 0;
  for (let i = startHeading + 1; i < end; i += 1) {
    if (/^\s*>\s*\*\*Explica[^:]*:\*\*/i.test(lines[i])) {
      if (!explanations[idx]) throw new Error(`Mini Quiz tem explicação extra na posição ${idx + 1}`);
      lines[i] = `> **Explicação:** ${explanations[idx]}`;
      idx += 1;
    }
  }
  if (idx !== explanations.length) throw new Error(`Mini Quiz esperava ${explanations.length} explicações, encontrou ${idx}`);
  return lines.join("\n");
}

const semioExplanations = {
  semio1_a2: [
    "Transformar queixa vaga em hipótese testável evita pular direto para diagnóstico e força a anamnese a produzir dados úteis para exame e conduta.",
    "Início súbito, progressivo ou pós-trauma muda a prioridade entre lesão aguda, inflamação e processo crônico.",
    "Fatores de piora e melhora separam padrão mecânico, inflamatório e neuropático, além de orientar restrição e analgesia.",
    "Rigidez matinal prolongada e melhora com movimento deslocam o raciocínio para inflamação articular, não apenas sobrecarga.",
    "Contar articulações é triagem semiológica básica; monoartrite quente com febre muda urgência e exige excluir infecção.",
    "Oligoartrite ajuda a reconhecer padrões como espondiloartrite ou artrite reativa, sem chamar tudo de poliartrite.",
    "Essas pistas sistêmicas conectam pele, olho, intestino e articulação, evitando tratar a dor como queixa ortopédica isolada.",
    "Fluoroquinolona é pista medicamentosa prática porque aumenta suspeita de lesão tendínea, especialmente se houver dor no Aquiles.",
    "Estalo, torção e derrame precoce indicam lesão interna do joelho e justificam exame dirigido de estabilidade e menisco.",
    "Criança com claudicação pode ter desde sinovite transitória até infecção ou doença do quadril; o roteiro reduz erro de gravidade.",
    "Carga, esporte e trabalho explicam mecanismo de sobreuso e permitem plano preventivo, não só nomear uma tendinite.",
    "Red flags mudam a velocidade da avaliação porque podem indicar infecção, neoplasia, déficit neurológico ou incapacidade funcional relevante.",
  ],
  semio1_a3: [
    "Uma ordem fixa de inspeção reduz omissões e transforma observação em exame reprodutível, especialmente em OSCE.",
    "Separar o que é visual do que é palpável evita afirmar calor local sem tocar e melhora a precisão semiológica.",
    "Valgo e varo são spots visuais frequentes; reconhecer o eixo ajuda a antecipar sobrecarga compartimental e marcha.",
    "Heberden localiza osteoartrite em interfalângicas distais e impede confundir nódulo degenerativo com sinovite difusa.",
    "Dactilite aponta para inflamação de dedo inteiro e é pista forte para espondiloartrites, não apenas edema local.",
    "A marcha antálgica revela proteção do lado doloroso e orienta onde examinar primeiro, antes de testes especiais.",
    "Steppage traduz déficit de dorsiflexão; reconhecer o padrão evita chamar pé caído de simples dor ao caminhar.",
    "Marcha anserina denuncia fraqueza proximal e pede força de cintura pélvica, não apenas inspeção do joelho.",
    "Bursite pré-patelar tem topografia superficial; diferenciar de derrame articular evita interpretação errada do aumento de volume.",
    "Derrame rápido pós-trauma sugere lesão interna ou sangramento articular e muda cuidado com mobilização e testes.",
    "Na criança, marcha e apoio entregam gravidade funcional; ausência de febre não libera uma avaliação superficial.",
    "Escoliose com déficit não é só deformidade postural; exige checar trato neurológico e sinais de compressão.",
  ],
  semio1_a4: [
    "Palpação progressiva reduz dor desnecessária e a comparação anatômica dá valor ao achado, não apenas à queixa.",
    "Temperatura local só faz sentido comparada com o lado oposto, porque inflamação é diferença clínica, não sensação isolada.",
    "Dor na interlinha organiza hipótese intra-articular e direciona testes de menisco, derrame e sinovite.",
    "O sinal da tecla transforma suspeita de derrame em achado físico, útil antes de concluir por dor inespecífica.",
    "Tabaqueira dolorosa após queda é armadilha clássica porque fratura de escafoide pode passar despercebida no início.",
    "A dor no epicôndilo lateral ligada a esforço repetitivo ancora o diagnóstico em topografia e função do tendão.",
    "Cisto de Baker é comum, mas edema de perna exige não perder trombose; a palpação deve abrir diferencial seguro.",
    "Falha palpável muda o raciocínio de tendinopatia para ruptura e altera urgência de imobilização e encaminhamento.",
    "Dor óssea focal após trauma de alta energia não deve ser manipulada repetidamente, porque fratura vira prioridade.",
    "Febre com dor profunda progressiva impede rotular como contratura, pois infecção osteoarticular exige investigação rápida.",
    "Alodinia ou sensibilização central mostra que dor real nem sempre vem de sinovite ou lesão estrutural visível.",
    "Pé frio e sem pulso é alerta vascular; em diabéticos, essa leitura pode ser mais urgente que dor musculoesquelética.",
  ],
  semio1_a5: [
    "ADM ativa testa movimento real do paciente e combina dor, força, tendão e comando neurológico no mesmo gesto.",
    "ADM passiva isola melhor limite articular ou capsular, ajudando a separar bloqueio mecânico de fraqueza.",
    "A diferença entre ativa e passiva é um atalho prático para localizar problema em músculo, tendão, nervo ou articulação.",
    "MRC 3/5 é divisor clássico: o membro vence a gravidade, mas ainda não sustenta resistência externa.",
    "MRC 2/5 identifica força muito baixa; o movimento só aparece quando a gravidade é retirada.",
    "Dor pode simular fraqueza; separar pseudo-fraqueza de paresia evita diagnóstico neurológico indevido ou perda de déficit real.",
    "Lachman tem valor porque testa estabilidade anterior do joelho e se encaixa no trauma rotacional com derrame precoce.",
    "Jobe foca supraespinal; interpretar dor e fraqueza em conjunto evita chamar todo teste doloroso de ruptura.",
    "Neer e Hawkins provocam conflito subacromial, mas precisam ser lidos junto com ADM e força do manguito.",
    "Phalen e Tinel conectam sintoma sensitivo ao território mediano, útil para diferenciar túnel do carpo de dor inespecífica.",
    "Finkelstein localiza dor radial do punho e ajuda a reconhecer tenossinovite por sobreuso do primeiro compartimento extensor.",
    "Cozen reproduz dor no epicôndilo lateral por contração resistida, ligando achado físico à função extensora.",
  ],
  semio1_a6: [
    "Red flags vêm antes do rótulo porque déficit, febre, esfíncter e isquemia mudam risco e prioridade de encaminhamento.",
    "Dermátomo, parestesia, déficit e Lasègue coerentes tornam radiculopatia mais provável que dor lombar comum.",
    "Anestesia em sela e retenção urinária são sinais de compressão grave; reconhecer cedo evita dano neurológico permanente.",
    "Sinais de trato longo em cervicalgia apontam para medula, não para dor muscular simples.",
    "Artrite séptica é diagnóstico que não pode ser perdido; cristal ou gota não exclui infecção associada.",
    "Podagra é spot de prova porque combina início súbito, hálux inflamado e contexto metabólico típico.",
    "Pequenas articulações simétricas com rigidez prolongada orientam síndrome inflamatória sistêmica, não artrose isolada.",
    "Rigidez curta, crepitação e dor de carga ajudam a reconhecer padrão degenerativo sem inflar investigação inflamatória.",
    "Fibromialgia exige reconhecer dor difusa e sono ruim sem inventar sinovite; isso muda orientação e cuidado.",
    "Alterações autonômicas com dor desproporcional ajudam a lembrar SDRC, diagnóstico que depende de padrão regional.",
    "Melhora com flexão é pista de claudicação neurogênica e separa estenose de claudicação vascular pura.",
    "Ausência de sinovite objetiva evita tratar fibromialgia como artrite, mas preserva a legitimidade da dor.",
  ],
  semio1_a7: [
    "Identificação, higiene e consentimento protegem segurança, ética e pontuação antes de qualquer técnica examinadora.",
    "Manequim permite repetição sem risco, ideal para ganhar sequência motora antes de lidar com dor real.",
    "Paciente padronizado treina vínculo e comunicação, competências que o manequim não reproduz.",
    "A sequência básica garante cobertura completa e impede saltar para teste especial antes do exame essencial.",
    "Teste sem hipótese vira gesto teatral; a estação valoriza raciocínio que justifica a manobra escolhida.",
    "Pausar e adaptar diante de dor mostra segurança clínica e respeito, além de evitar piorar a lesão.",
    "Comparação bilateral é simples e poderosa, mas costuma ser esquecida quando o aluno fica preso ao lado doloroso.",
    "Debriefing só melhora desempenho quando vira ajuste concreto, observável na próxima tentativa.",
    "Verbalizar incerteza com plano é melhor que fingir achado; isso preserva confiabilidade do exame.",
    "Fechamento organizado mostra que o aluno traduziu achados em conduta, não apenas executou manobras.",
    "Trauma exige checagem neurovascular porque lesão de vaso ou nervo muda urgência e documentação.",
    "Cauda equina simulada testa prioridade: reconhecer urgência vale mais que completar exame musculoesquelético longo.",
  ],
  semio1_a8: [
    "Ambulatório supervisionado exige juntar relação, exame e decisão; separar essas partes deixa a consulta artificial.",
    "Imagem só agrega quando altera diagnóstico, risco ou plano; pedir por ansiedade gera cascata e pouco aprendizado.",
    "SOAP organiza dado objetivo e subjetivo, facilitando seguimento e discussão segura com o preceptor.",
    "Profissão e lazer transformam a conduta em plano funcional, ajustado ao que o paciente precisa fazer.",
    "Osteoartrite de joelho melhora mais quando analgesia vem com exercício e educação, não só prescrição isolada.",
    "Imagem normal não encerra dor difusa; função, sono, humor e exame objetivo precisam voltar ao centro.",
    "No pé diabético, ausência de dor pode indicar perda de proteção e aumenta risco de ferida grave.",
    "Dor intensa após trauma exige documentar pulso, perfusão, sensibilidade e motricidade antes de concluir por dor local.",
    "Plano sem retorno e alarmes não é seguro; o aluno precisa deixar próximo passo rastreável.",
    "Red flag com dúvida é motivo para acionar supervisão, não para decidir sozinho ou esconder insegurança.",
    "Consentimento e exposição mínima mantêm dignidade do paciente real e sustentam uma prática ensinável.",
    "Lombalgia comum costuma começar conservadora, mas com retorno e alarmes para não perder evolução perigosa.",
  ],
  semio1_a9: [
    "Reunião clínica vale quando transforma informação em decisão; só recitar prontuário não demonstra raciocínio.",
    "Perfil de risco e problema central dão contexto para julgar gravidade antes de listar hipóteses soltas.",
    "Em locomotor, o primeiro filtro é segurança: o que mata, comprime, infecta ou isquemia precisa vir antes.",
    "Dado negativo relevante prova busca ativa de red flags e evita parecer que o risco foi ignorado.",
    "Monoartrite febril é perigosa porque artrite séptica destrói articulação; gota só entra depois de segurança.",
    "Retenção urinária com lombalgia muda prioridade para compressão neurológica, não analgesia simples.",
    "Exame complementar precisa mudar decisão, risco ou plano; sem isso tende a gerar atraso e cascata.",
    "Buscar dado contrário combate viés de confirmação e fortalece a hipótese que realmente sobrevive ao exame.",
    "Incerteza honesta fica segura quando vem com plano de confirmação, prazo e supervisão.",
    "Conduta, prazo e alarmes tornam o plano executável para paciente e equipe.",
    "Hipótese principal, alternativa perigosa e plano imediato fecham a reunião com prioridade clínica clara.",
    "Imagem útil esclarece uma decisão real; imagem automática aumenta achados incidentais e confusão.",
  ],
};

const pmhUpdates = {
  pmh_a1: {
    mapa: [
      "Comece pela pergunta energética: a reação libera energia suficiente para avançar ou precisa ser acoplada a ATP?",
      "Depois separe carreadores. **NADH/FADH2** levam elétrons para a cadeia respiratória; **NADPH** sustenta biossíntese redutora e defesa antioxidante.",
      "Feche com hipóxia: se a cadeia respiratória falha, o piruvato vira lactato para regenerar **NAD+** e manter a glicólise funcionando por curto prazo.",
    ],
    ponte: [
      "Na hipoxemia, choque ou isquemia, a bioenergética deixa de ser abstrata: menos oxigênio limita fosforilação oxidativa e empurra a célula para lactato.",
      "Em prova da Uni9, a vinheta costuma mostrar cansaço, acidose lática ou contexto de baixa perfusão. A resposta correta normalmente separa **direção termodinâmica** de **velocidade enzimática**.",
      "Armadilha comum: achar que ΔG negativo significa reação rápida. Quem muda velocidade é enzima; ΔG informa favorabilidade e necessidade de acoplamento.",
    ],
    quiz: [
      "ΔG negativo indica favorabilidade termodinâmica, mas não garante velocidade; enzimas aceleram, não mudam sozinhas a direção final da reação.",
      "NADPH é o carreador redutor típico de biossíntese e defesa antioxidante; NADH e FADH2 são mais ligados à produção de ATP na cadeia respiratória.",
      "Na hipóxia, converter piruvato em lactato regenera NAD+, permitindo que a glicólise continue produzindo ATP mesmo sem boa fosforilação oxidativa.",
      "A distinção central é: ΔG orienta direção/favorabilidade, enquanto enzimas controlam a velocidade e a barreira de ativação.",
    ],
  },
  pmh_a2: {
    mapa: [
      "Organize a aula por velocidade de resposta: alosteria muda a atividade em segundos, fosforilação em minutos, expressão gênica em horas.",
      "Depois ancore nos hormônios: **insulina** sinaliza abundância e armazenamento; **glucagon** sinaliza jejum e mobilização hepática.",
      "Por fim, pergunte qual enzima está sendo regulada. A mesma fosforilação pode ativar uma via e inibir outra, dependendo do alvo.",
    ],
    ponte: [
      "O controle enzimático aparece quando o paciente muda de pós-prandial para jejum: o fígado precisa alternar glicogênio, gliconeogênese e oxidação conforme o sinal hormonal.",
      "Na prova, frases como 'rápido', 'minutos' ou 'nova síntese proteica' indicam o nível de regulação cobrado, não apenas o nome da via.",
      "A pegadinha é decorar que fosforilação 'ativa'. Isso é falso: o efeito depende da enzima e do contexto metabólico.",
    ],
    quiz: [
      "Regulação alostérica é mais rápida porque depende da ligação de metabólitos à enzima já existente, sem precisar produzir nova proteína.",
      "Insulina marca estado alimentado e favorece captação, síntese e armazenamento de energia em glicogênio, lipídios e proteínas.",
      "No fígado, glucagon aumenta a produção e liberação de glicose, especialmente por glicogenólise inicial e gliconeogênese.",
      "Fosforilação é reversível e contextual: pode ativar uma enzima enquanto inibe outra, coordenando vias opostas.",
    ],
  },
  pmh_a3: {
    mapa: [
      "Monte o raciocínio como uma bifurcação: glicólise quebra glicose para gerar ATP; gliconeogênese reconstrói glicose quando o corpo precisa manter glicemia.",
      "A chave de prova é **PFK-1**, estimulada por AMP e F2,6BP e freada por ATP/citrato. Ela decide se a glicose segue para degradação.",
      "Conecte com Cori: músculo ou hemácia geram lactato; fígado reconverte lactato em glicose, gastando energia para sustentar tecidos dependentes.",
    ],
    ponte: [
      "Exercício intenso e hipóxia explicam lactato sem precisar inventar falência hepática: o objetivo imediato é regenerar NAD+ para manter glicólise.",
      "No jejum, o fígado usa lactato, alanina e glicerol para produzir glicose. A prova costuma misturar substrato certo com acetil-CoA, que não vira glicose líquida.",
      "A armadilha é tratar glicólise e gliconeogênese como setas reversíveis simples; as etapas irreversíveis exigem enzimas próprias.",
    ],
    quiz: [
      "PFK-1 é a etapa comprometida da glicólise porque decide a entrada efetiva da glicose na via degradativa.",
      "Formar lactato regenera NAD+, indispensável para manter a glicólise quando a reoxidação mitocondrial está limitada.",
      "Lactato é substrato clássico da gliconeogênese hepática no ciclo de Cori; acetil-CoA não gera glicose líquida.",
      "F2,6BP coordena as vias opostas ao ativar PFK-1 e inibir frutose-1,6-bisfosfatase.",
    ],
  },
  pmh_a4: {
    mapa: [
      "Comece pelo destino do acetil-CoA: o ciclo de Krebs extrai elétrons e os entrega como **NADH/FADH2**.",
      "Depois siga esses elétrons na cadeia respiratória: complexos I, III e IV bombeiam prótons; o complexo II entra com FADH2, mas não bombeia.",
      "Feche com oxigênio e ATP sintase. Sem O2 como aceptor final, o gradiente cai e a produção mitocondrial de ATP despenca.",
    ],
    ponte: [
      "Cianeto, hipóxia e desacopladores viram questões clínicas porque todos quebram a mesma lógica: elétron, próton, gradiente e ATP.",
      "Na vinheta, acidose lática com hipóxia aponta para bloqueio da fosforilação oxidativa, não para defeito primário da ureia ou do colesterol.",
      "A pegadinha é esquecer o complexo II: ele participa da cadeia, mas não bombeia prótons, por isso rende menos ATP.",
    ],
    quiz: [
      "O complexo II transfere elétrons do FADH2 para a cadeia, mas não contribui diretamente para o bombeamento de prótons.",
      "Oxigênio é o aceptor final de elétrons; sem ele, a cadeia trava e o gradiente de prótons não se mantém.",
      "Cianeto bloqueia o complexo IV, impedindo a redução do oxigênio e colapsando a fosforilação oxidativa.",
      "ATP sintase usa o gradiente de prótons como força motriz para fosforilar ADP em ATP.",
    ],
  },
  pmh_a5: {
    mapa: [
      "Separe função por tecido: fígado guarda glicogênio para manter glicemia; músculo guarda glicogênio para uso próprio.",
      "A via das pentoses tem dois produtos que sempre devem aparecer juntos: **NADPH** para redução/antioxidante e **ribose-5-fosfato** para nucleotídeos.",
      "Conecte G6PD à hemácia: sem NADPH suficiente, a glutationa reduzida cai e o eritrócito sofre com estresse oxidativo.",
    ],
    ponte: [
      "Jejum curto cobra glicogenólise hepática; exercício cobra glicogênio muscular. Misturar esses destinos é erro comum em prova.",
      "Crise hemolítica após fármaco oxidante, infecção ou fava é pista de G6PD, não de defeito de LDL ou de ciclo da ureia.",
      "A armadilha é achar que todo glicogênio vira glicose para o sangue. Músculo não exporta glicose livre de modo relevante.",
    ],
    quiz: [
      "O fígado tem glicose-6-fosfatase e consegue liberar glicose para sustentar a glicemia; músculo usa seu glicogênio localmente.",
      "A via das pentoses fornece NADPH para reações redutoras/antioxidantes e ribose-5-fosfato para síntese de nucleotídeos.",
      "Deficiência de G6PD reduz NADPH na hemácia e aumenta vulnerabilidade a dano oxidativo, gerando hemólise.",
      "Insulina favorece a forma ativa da glicogênio sintase, direcionando glicose para armazenamento como glicogênio.",
    ],
  },
  pmh_a6: {
    mapa: [
      "Organize por estado hormonal: alimentado é insulina; jejum é glucagon; estresse metabólico adiciona catecolaminas e cortisol.",
      "Depois localize o transportador: **GLUT4** responde à insulina em músculo e adipócito, enquanto fígado e cérebro seguem outra lógica.",
      "Feche com diabetes: baixa ação de insulina combina hiperglicemia, lipólise e risco de cetogênese, especialmente no DM1.",
    ],
    ponte: [
      "Na prática, hiperglicemia não é só 'muito açúcar': ela reflete falha de captação, produção hepática inadequada e alteração hormonal integrada.",
      "DM1 em descompensação cobra cetose/cetoacidose; DM2 costuma cobrar resistência insulínica, síndrome metabólica e resposta parcial à insulina.",
      "A pegadinha é esquecer que G6PD também entra aqui como vulnerabilidade oxidativa da hemácia, não como regulador hormonal da glicose.",
    ],
    quiz: [
      "GLUT4 é o transportador insulino-responsivo mais importante em músculo e adipócito, aumentando captação no estado alimentado.",
      "DM1 tem deficiência importante de insulina, favorecendo lipólise, cetogênese e risco de cetoacidose.",
      "Glucagon age no fígado para aumentar produção de glicose, sobretudo por glicogenólise inicial e gliconeogênese.",
      "G6PD baixa reduz defesa antioxidante da hemácia e aumenta risco de hemólise oxidativa em situações gatilho.",
    ],
  },
  pmh_a7: {
    mapa: [
      "Comece pelo transporte: ácido graxo de cadeia longa precisa da carnitina/CPT para entrar na matriz mitocondrial.",
      "Depois separe vias opostas: **beta-oxidação** gera acetil-CoA, NADH e FADH2; **síntese de ácidos graxos** consome NADPH.",
      "O freio central é malonil-CoA. Quando a célula está sintetizando gordura, ele inibe CPT-1 para impedir oxidação simultânea.",
    ],
    ponte: [
      "Jejum prolongado aumenta beta-oxidação hepática e pode gerar corpos cetônicos; isso é adaptação, não automaticamente doença.",
      "Defeito de carnitina/CPT aparece como incapacidade de usar gordura em jejum ou esforço, com hipoglicemia e baixa cetogênese.",
      "A armadilha é misturar acetil-CoA com glicose: excesso de acetil-CoA vira cetona ou entra em Krebs, mas não vira glicose líquida.",
    ],
    quiz: [
      "Malonil-CoA inibe CPT-1 para bloquear entrada de ácidos graxos na mitocôndria durante síntese lipídica.",
      "Beta-oxidação quebra ácidos graxos e produz acetil-CoA, NADH e FADH2 para energia mitocondrial.",
      "A síntese de ácidos graxos usa NADPH como poder redutor, frequentemente vindo da via das pentoses.",
      "No jejum prolongado, acetil-CoA hepático excedente é convertido em corpos cetônicos para exportação energética.",
    ],
  },
  pmh_a8: {
    mapa: [
      "Siga o lipídio pelo trajeto: quilomícron leva gordura da dieta, VLDL sai do fígado, LDL entrega colesterol e HDL faz transporte reverso.",
      "Depois fixe o alvo farmacológico: estatina inibe **HMG-CoA redutase**, reduz síntese hepática de colesterol e aumenta captação de LDL.",
      "Feche com risco: LDL alto alimenta aterosclerose; HDL participa da retirada de colesterol dos tecidos, mas não anula risco sozinho.",
    ],
    ponte: [
      "Painel lipídico vira raciocínio clínico quando você separa triglicerídeo, LDL, HDL e contexto de risco cardiovascular.",
      "A prova costuma trocar lipoproteínas: quilomícron é dieta; LDL é entrega periférica; HDL é retorno ao fígado.",
      "A pegadinha é tratar estatina como remédio que 'dissolve placa'. O efeito central é reduzir síntese hepática e LDL circulante.",
    ],
    quiz: [
      "Quilomícron carrega lipídios absorvidos no intestino, principalmente triglicerídeos da dieta.",
      "Estatinas inibem HMG-CoA redutase, etapa limitante da síntese hepática de colesterol.",
      "LDL entrega colesterol para tecidos e se associa diretamente ao risco aterosclerótico quando elevado.",
      "HDL participa do transporte reverso, retirando colesterol de tecidos e levando ao fígado.",
    ],
  },
  pmh_a9: {
    mapa: [
      "Organize a dislipidemia pelo risco dominante: LDL alto fala aterosclerose; triglicerídeo muito alto fala pancreatite.",
      "Depois conecte resistência insulínica: ela aumenta lipólise, fluxo de ácidos graxos ao fígado, VLDL e esteatose metabólica.",
      "Feche com síndromes: hipercolesterolemia familiar aponta para receptor de LDL; cetoacidose aponta para baixa ação de insulina e cetogênese.",
    ],
    ponte: [
      "Na prática, síndrome metabólica junta cintura, pressão, glicose, triglicerídeos e HDL baixo, mostrando risco cardiometabólico integrado.",
      "TG muito alto não é só número de laudo: acima de faixas extremas, a complicação temida é pancreatite aguda.",
      "A armadilha é enxergar diabetes, esteatose e dislipidemia como problemas separados; eles compartilham resistência insulínica.",
    ],
    quiz: [
      "Triglicerídeos muito elevados aumentam risco de pancreatite, especialmente em níveis extremos.",
      "Hipercolesterolemia familiar clássica envolve defeitos no receptor de LDL ou vias relacionadas à depuração de LDL.",
      "Na cetoacidose, baixa ação de insulina favorece lipólise, excesso de ácidos graxos hepáticos e cetogênese.",
      "Esteatose metabólica se liga à resistência insulínica, que aumenta fluxo de gordura para o fígado e lipogênese.",
    ],
  },
  pmh_a10: {
    mapa: [
      "Comece pelo nitrogênio: transaminação move grupos amino e depende de vitamina B6; desaminação libera amônia.",
      "Depois proteja o cérebro: amônia é tóxica e o fígado a converte em ureia por um ciclo parcialmente mitocondrial.",
      "Feche com CPS I e N-acetilglutamato, o sinal que liga excesso de nitrogênio à entrada no ciclo da ureia.",
    ],
    ponte: [
      "Confusão, sonolência ou alteração neurológica com amônia alta não é detalhe laboratorial; é toxicidade cerebral.",
      "Doença hepática e erros do ciclo da ureia aparecem como falha de detoxificação, não como simples 'proteína alta'.",
      "A pegadinha é confundir ureia com urato: ureia elimina nitrogênio de aminoácidos; ácido úrico vem de purinas.",
    ],
    quiz: [
      "Transaminases usam piridoxal fosfato, derivado da vitamina B6, para transferir grupos amino.",
      "O fígado é o órgão central do ciclo da ureia, convertendo amônia tóxica em forma menos tóxica para excreção.",
      "N-acetilglutamato ativa CPS I e sinaliza entrada de nitrogênio no ciclo da ureia.",
      "Amônia elevada afeta principalmente o sistema nervoso, causando encefalopatia e alteração do nível de consciência.",
    ],
  },
  pmh_a11: {
    mapa: [
      "Organize proteínas por três destinos: estrutura, enzimas/transportadores e combustível em jejum ou doença.",
      "Depois separe deficiência nutricional de erro inato: kwashiorkor fala falta proteica; fenilcetonúria fala acúmulo de fenilalanina.",
      "Feche com caquexia: inflamação mantém catabolismo muscular mesmo quando a lógica parece parecida com jejum.",
    ],
    ponte: [
      "Edema em desnutrição proteica mostra que proteína plasmática não é detalhe bioquímico; ela sustenta pressão oncótica.",
      "Na triagem neonatal, erro inato importa porque dieta e diagnóstico precoce mudam dano neurológico futuro.",
      "A armadilha é tratar caquexia como jejum simples. Inflamação e catabolismo persistente tornam a resposta nutricional mais complexa.",
    ],
    quiz: [
      "Fenilcetonúria clássica eleva fenilalanina por defeito na conversão adequada desse aminoácido.",
      "Hiperamonemia grave causa encefalopatia porque a amônia é neurotóxica e altera metabolismo cerebral.",
      "Kwashiorkor se associa a deficiência proteica importante, com hipoalbuminemia e edema.",
      "Caquexia envolve inflamação e catabolismo persistente, diferente da adaptação mais poupadora do jejum simples.",
    ],
  },
  pmh_a12: {
    mapa: [
      "Separe síntese de degradação: purinas e pirimidinas constroem DNA/RNA, mas purinas degradam até ácido úrico.",
      "Depois lembre da via salvage: **HGPRT** reaproveita bases e reduz necessidade de síntese de novo.",
      "Feche com gota e fármacos: xantina oxidase forma ácido úrico; alopurinol bloqueia essa etapa.",
    ],
    ponte: [
      "Dor súbita no hálux com hiperuricemia cobra metabolismo de purinas, inflamação por cristais e contexto clínico, não só laboratório.",
      "Lesch-Nyhan é pista forte de HGPRT: excesso de ácido úrico vem junto de manifestações neurológicas/comportamentais.",
      "A pegadinha é confundir ureia com ácido úrico. Ureia vem de aminoácidos; ácido úrico vem de purinas.",
    ],
    quiz: [
      "Purinas são degradadas até ácido úrico em humanos, por isso excesso de purina pode se ligar à gota.",
      "HGPRT é enzima da via salvage, reaproveitando bases purínicas para formar nucleotídeos.",
      "Lesch-Nyhan decorre de deficiência de HGPRT, com falha de salvamento purínico e hiperuricemia.",
      "Alopurinol inibe xantina oxidase, reduzindo a formação de ácido úrico a partir de xantina/hipoxantina.",
    ],
  },
  pmh_a13: {
    mapa: [
      "Monte o corpo como rede: fígado estabiliza glicemia, músculo consome e exporta lactato/alanina, adipócito libera ácidos graxos, cérebro prioriza glicose e cetonas.",
      "Depois siga os ciclos: Cori leva lactato ao fígado; alanina leva nitrogênio e carbono do músculo ao fígado.",
      "Feche com jejum prolongado: cérebro aumenta uso de corpos cetônicos e poupa glicose, enquanto músculo muda combustível.",
    ],
    ponte: [
      "A integração metabólica explica por que um exame isolado raramente basta: glicemia, lactato, cetonas e estado nutricional conversam entre órgãos.",
      "Na prova, identifique quem exporta e quem consome. Músculo tem glicogênio, mas não sustenta glicemia de outros tecidos.",
      "A armadilha é esquecer o fígado como central logística: ele recebe substratos, produz glicose/cetonas e coordena o jejum.",
    ],
    quiz: [
      "O fígado é o principal estabilizador da glicemia porque libera glicose e organiza glicogenólise/gliconeogênese.",
      "O ciclo de Cori leva lactato produzido por tecidos periféricos ao fígado, onde pode virar glicose.",
      "No jejum prolongado, corpos cetônicos passam a suprir parte importante da demanda energética cerebral.",
      "Músculo não exporta glicose livre de modo relevante, pois usa seu glicogênio para consumo local.",
    ],
  },
  pmh_a14: {
    mapa: [
      "Organize por cenário: jejum adapta e poupa proteína; exercício mobiliza combustível; estresse/sepses aumentam hormônios contrarreguladores e catabolismo.",
      "Depois marque os riscos: realimentação pode causar hipofosfatemia; diabetes descompensado pode virar cetose e acidose.",
      "Feche com caquexia e doença grave: inflamação muda o metabolismo e impede ler perda muscular como simples falta de comida.",
    ],
    ponte: [
      "Paciente crítico, diabético descompensado ou desnutrido cobra integração: glicose, lipólise, proteína muscular, eletrólitos e hormônios.",
      "Síndrome de realimentação é armadilha porque o perigo aparece quando o alimento volta, especialmente com queda de fosfato.",
      "A pegadinha é chamar toda perda de peso de jejum adaptativo. Na caquexia, inflamação e catabolismo sustentam perda muscular.",
    ],
    quiz: [
      "No jejum prolongado, o cérebro aumenta uso de corpos cetônicos, poupando parte da necessidade de glicose.",
      "Hipofosfatemia é marcador clássico da síndrome de realimentação, porque a entrada de glicose aumenta demanda intracelular por fosfato.",
      "Sepse induz resposta contrarreguladora e inflamatória, com hiperglicemia de estresse e proteólise muscular.",
      "Caquexia oncológica envolve inflamação sistêmica e perda muscular, não apenas redução voluntária de ingesta.",
    ],
  },
};

const triageDecisions = [
  [346, "keep", "Falso positivo: questão central de glândula submandibular, ducto de Wharton e sialolitíase; mantida."],
  [347, "keep", "Falso positivo: diferencia sublingual por Rivinus/milo-hióideo, alinhada ao material."],
  [349, "keep", "Falso positivo: vinheta de sialolitíase é essencial e clinicamente útil."],
  [439, "keep", "Falso positivo: ossificação endocondral é conceito nuclear da aula de osso."],
  [445, "fix", "Corrigidos acentos e explicações; conceito C7 vértebra proeminente mantido."],
  [3005, "keep", "Falso positivo: movimento de flexão cervical é base anatômica da aula."],
  [3175, "keep", "Falso positivo: omento menor/maior é central para peritônio."],
  [7406, "keep", "Falso positivo: diferencia mesentério e omento maior com função anatômica."],
  [7610, "keep", "Falso positivo: abdução/adução é vocabulário anatômico essencial."],
  [7614, "keep", "Falso positivo: circundução integra movimentos básicos."],
  [3095, "keep", "Falso positivo: tétano fisiológico é conceito central de contração muscular."],
  [5002006, "keep", "Falso positivo: participação complementar privada no SUS é ponto constitucional essencial."],
  [5002009, "keep", "Falso positivo: Lei 8.142/90 é item essencial de controle social/financiamento."],
  [5002011, "keep", "Falso positivo: ruptura cidadania versus vínculo previdenciário está alinhada à aula."],
  [3385, "keep", "Falso positivo: Lei 8.080/90 como organização do SUS é central."],
  [5002012, "keep", "Falso positivo: regionalização/hierarquização aparece em fluxo assistencial real."],
  [5002013, "keep", "Falso positivo: descentralização federativa é diretriz essencial."],
  [3406, "keep", "Falso positivo: CIB/CIT são pacto interfederativo essencial."],
  [5002031, "keep", "Falso positivo: COAP é instrumento regional e pertence ao eixo da aula."],
  [5002036, "keep", "Falso positivo: desabastecimento liga gestão, financiamento, logística e controle social."],
  [624, "keep", "Falso positivo: dor neuropática por qualidade sensitiva é essencial em Semiologia1."],
  [625, "keep", "Falso positivo: dor periarticular por tendão/contração resistida é conceito central."],
  [629, "keep", "Falso positivo: red flags locomotoras são prioridade semiótica."],
  [630, "keep", "Falso positivo: MRC 3/5 é corte básico de força."],
  [663, "fix", "Normalizada dificuldade e explicações por alternativa; gaveta anterior/LCA mantida."],
  [671, "fix", "Normalizada dificuldade e explicações por alternativa; Neer/Hawkins mantida."],
  [3351, "rewrite", "Reescritas alternativas fracas; conceito de úlcera indolor neuropática preservado."],
  [3357, "rewrite", "Removido enquadramento metadidático; questão agora cobra racionalidade de exame por impacto em conduta."],
];

function updateFlashcards() {
  const root = readJson("data/flashcards.json");
  const cards = root.flashcards || [];
  let updated = 0;
  for (const [aulaId, explanations] of Object.entries(semioExplanations)) {
    const aulaCards = cards
      .filter((card) => card.tema === aulaId)
      .sort((a, b) => Number(a.id) - Number(b.id));
    if (aulaCards.length !== 12) throw new Error(`${aulaId}: esperado 12 flashcards, encontrado ${aulaCards.length}`);
    if (explanations.length !== 12) throw new Error(`${aulaId}: esperado 12 explicações, encontrado ${explanations.length}`);
    aulaCards.forEach((card, index) => {
      card.explicacao = explanations[index];
      updated += 1;
    });
  }

  const byId = new Map(cards.map((card) => [Number(card.id), card]));
  const card7002184 = byId.get(7002184);
  if (!card7002184) throw new Error("card 7002184 não encontrado");
  card7002184.frente = "Imagem no ambulatório só é útil quando {{c1::muda conduta}}.";
  card7002184.verso = "Ela deve orientar diagnóstico, risco, encaminhamento ou plano real.";
  card7002184.explicacao = "Imagem só agrega quando altera diagnóstico, risco ou plano; pedir por ansiedade gera cascata e pouco aprendizado.";

  const card7002201 = byId.get(7002201);
  if (card7002201) {
    card7002201.explicacao = "Exame complementar precisa mudar decisão, risco ou plano; sem isso tende a gerar atraso e cascata.";
  }
  const card7002206 = byId.get(7002206);
  if (!card7002206) throw new Error("card 7002206 não encontrado");
  card7002206.frente = "Imagem útil esclarece {{c1::decisão clínica real}}; imagem automática gera cascata.";
  card7002206.verso = "Evite ressonância sem propósito.";
  card7002206.explicacao = "Imagem útil esclarece uma decisão real; imagem automática aumenta achados incidentais e confusão.";

  writeJson("data/flashcards.json", root);
  return { updated };
}

function updatePmhMaterials() {
  const touched = [];
  for (const [aulaId, update] of Object.entries(pmhUpdates)) {
    const relA = `data/materiais/pmh/${aulaId}.md`;
    const relB = `materiais/modulo1/pmh/${aulaId}.md`;
    let md = readText(relA);
    md = replaceSection(md, "Mapa mental da aula", update.mapa.join("\n\n"));
    md = replaceSection(md, "Ponte com a Clínica", update.ponte.join("\n\n"));
    md = replaceMiniQuizExplanations(md, update.quiz);
    writeText(relA, md);
    writeText(relB, md);
    touched.push(aulaId);
  }
  return { touched };
}

function setOptionExplanations(q, correctIndex, explanations) {
  const letters = ["A", "B", "C", "D"];
  q.explicacoes_opcoes = {};
  for (const [index, letter] of letters.entries()) {
    const prefix = index === correctIndex ? "[CORRETA]" : "[INCORRETA]";
    q.explicacoes_opcoes[letter] = `${prefix} ${explanations[index]}`;
  }
}

function updateQuestions() {
  const root = readJson("data/questoes.json");
  const questions = root.questoes || [];
  const byId = new Map(questions.map((q) => [Number(q.id), q]));

  const q445 = byId.get(445);
  if (!q445) throw new Error("questão 445 não encontrada");
  Object.assign(q445, {
    enunciado: "Durante o exame físico, o processo espinhoso mais evidente na base do pescoço costuma ser usado como marco para contar níveis vertebrais. Qual vértebra é esse marco?",
    opcoes: ["C2, o áxis", "C7, a vértebra proeminente", "T12, a última torácica", "L5, a última lombar"],
    correta: 1,
    dificuldade: 1,
    explicacao_geral: "C7 é chamada de vértebra proeminente porque seu processo espinhoso costuma ser palpável na base do pescoço, servindo como referência prática para contagem vertebral.",
    explicacao: "C7 é chamada de vértebra proeminente porque seu processo espinhoso costuma ser palpável na base do pescoço, servindo como referência prática para contagem vertebral.",
  });
  setOptionExplanations(q445, 1, [
    "C2 é o áxis e tem papel na rotação cervical alta, mas não é o marco palpável clássico da base do pescoço.",
    "C7 tem processo espinhoso proeminente e é o ponto de referência mais usado para iniciar contagem vertebral no exame.",
    "T12 marca a transição toracolombar, não o ponto palpável cervical clássico.",
    "L5 fica na região lombar baixa e não serve como marco cervical.",
  ]);

  const q663 = byId.get(663);
  if (!q663) throw new Error("questão 663 não encontrada");
  Object.assign(q663, {
    opcoes: [
      "Ligamento colateral medial, avaliado principalmente por estresse em valgo.",
      "Ligamento cruzado anterior, por translação anterior da tíbia.",
      "Tendão patelar, por dor anterior na extensão resistida.",
      "Nervo fibular comum, por dorsiflexão e sensibilidade lateral.",
    ],
    correta: 1,
    dificuldade: 2,
    explicacao_geral: "A gaveta anterior busca deslocamento anterior da tíbia em relação ao fêmur. Esse achado avalia principalmente a integridade do ligamento cruzado anterior, embora técnica e relaxamento interfiram no exame.",
    explicacao: "A gaveta anterior busca deslocamento anterior da tíbia em relação ao fêmur e avalia principalmente o ligamento cruzado anterior.",
  });
  setOptionExplanations(q663, 1, [
    "O colateral medial é melhor testado por estresse em valgo, não pela gaveta anterior.",
    "A gaveta anterior provoca translação anterior da tíbia e se relaciona ao LCA.",
    "Tendão patelar gera dor anterior e perda de extensão, mas não é o alvo da gaveta.",
    "Nervo fibular comum é avaliação neurovascular/neurológica, não teste ligamentar de gaveta.",
  ]);

  const q671 = byId.get(671);
  if (!q671) throw new Error("questão 671 não encontrada");
  Object.assign(q671, {
    opcoes: [
      "Compressão do nervo mediano no túnel do carpo.",
      "Impacto subacromial e conflito do manguito no ombro.",
      "Instabilidade anterior do joelho por lesão do LCA.",
      "Tenossinovite radial do punho no primeiro compartimento extensor.",
    ],
    correta: 1,
    dificuldade: 2,
    explicacao_geral: "Neer e Hawkins são testes provocativos do ombro usados para sugerir impacto subacromial. O resultado deve ser interpretado junto de dor, amplitude de movimento e força do manguito rotador.",
    explicacao: "Neer e Hawkins provocam conflito subacromial no ombro e precisam ser lidos com os demais achados do manguito.",
  });
  setOptionExplanations(q671, 1, [
    "Túnel do carpo é investigado por manobras como Phalen e Tinel no punho.",
    "Neer e Hawkins provocam impacto subacromial, especialmente em contexto de dor do ombro.",
    "LCA é avaliado por testes como Lachman e gaveta anterior, não por Neer/Hawkins.",
    "De Quervain é avaliada por Finkelstein, não por testes de impacto do ombro.",
  ]);

  const q3351 = byId.get(3351);
  if (!q3351) throw new Error("questão 3351 não encontrada");
  Object.assign(q3351, {
    enunciado: "No ambulatório, uma pessoa com diabetes apresenta úlcera plantar indolor. Qual leitura semiológica é mais segura?",
    opcoes: [
      "Possível neuropatia com perda de sensibilidade protetora e risco elevado.",
      "Lesão de baixo risco porque a ausência de dor indica tecido preservado.",
      "Achado típico de lesão aguda do ligamento cruzado anterior.",
      "Sinal obrigatório de artrite inflamatória sistêmica ativa.",
    ],
    correta: 0,
    dificuldade: 2,
    explicacao_geral: "No pé diabético, úlcera plantar indolor pode indicar neuropatia periférica com perda de sensibilidade protetora. A ausência de dor aumenta risco porque o paciente não percebe trauma, pressão ou infecção inicial.",
    explicacao: "No pé diabético, ausência de dor em úlcera plantar sugere neuropatia e perda de proteção dolorosa, o que aumenta risco clínico.",
  });
  setOptionExplanations(q3351, 0, [
    "Úlcera indolor em diabético sugere neuropatia e perda da proteção dolorosa, exigindo avaliação cuidadosa.",
    "Ausência de dor não tranquiliza; pode ser justamente sinal de neuropatia e maior risco.",
    "LCA rompido se relaciona a trauma de joelho, instabilidade e derrame, não a úlcera plantar.",
    "Artrite inflamatória pode causar dor e sinovite, mas não explica obrigatoriamente úlcera plantar indolor.",
  ]);

  const q3357 = byId.get(3357);
  if (!q3357) throw new Error("questão 3357 não encontrada");
  Object.assign(q3357, {
    enunciado: "Em uma lombalgia sem red flags, qual critério torna uma ressonância realmente útil no ambulatório?",
    opcoes: [
      "Ser o exame mais caro disponível no serviço.",
      "Substituir anamnese e exame físico quando há pouco tempo.",
      "Confirmar uma hipótese sem impacto no plano terapêutico.",
      "Esclarecer risco, diagnóstico ou conduta que mudará o plano.",
    ],
    correta: 3,
    dificuldade: 2,
    explicacao_geral: "Exame complementar deve ser solicitado quando pode mudar decisão clínica: confirmar risco, orientar encaminhamento, alterar tratamento ou explicar sinal de alarme. Sem esse impacto, a chance de cascata e achado incidental aumenta.",
    explicacao: "Ressonância é útil quando o resultado muda risco, diagnóstico ou conduta; sem red flags, pedido automático tende a gerar cascata.",
  });
  setOptionExplanations(q3357, 3, [
    "Preço ou sofisticação não tornam o exame indicado.",
    "Imagem não substitui anamnese e exame físico; ela responde a uma necessidade clínica específica.",
    "Confirmar algo que não muda o plano aumenta ruído e achados incidentais.",
    "A indicação é forte quando o resultado altera risco, encaminhamento, tratamento ou seguimento.",
  ]);

  writeJson("data/questoes.json", root);
  return { fixed: [445, 663, 671], rewritten: [3351, 3357] };
}

function writeTriageLog(questionResult) {
  const log = {
    generatedAt: new Date().toISOString(),
    scope: "Modulo 1 - 28 essenciais sinalizadas",
    rule: "Heurística não foi tratada como erro automático; cada item foi revisado contra aula/material.",
    summary: {
      reviewed: triageDecisions.length,
      keepFalsePositive: triageDecisions.filter(([, decision]) => decision === "keep").length,
      fixed: questionResult.fixed.length,
      rewritten: questionResult.rewritten.length,
      demoted: 0,
      replaced: 0,
    },
    decisions: triageDecisions.map(([id, decision, notes]) => ({ id, decision, notes })),
  };
  writeJson("data/agent_logs/modulo1_essenciais_triage_2026-05-12.json", log);
}

const flashcards = updateFlashcards();
const pmh = updatePmhMaterials();
const questions = updateQuestions();
writeTriageLog(questions);

console.log(
  JSON.stringify(
    {
      ok: true,
      today,
      flashcards,
      pmh,
      questions,
      triageLog: "data/agent_logs/modulo1_essenciais_triage_2026-05-12.json",
    },
    null,
    2,
  ),
);
