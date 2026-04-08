import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.join(__dirname, '..');
const MATERIAS_PATH = path.join(ROOT, 'data', 'materias.json');
const QUESTOES_PATH = path.join(ROOT, 'data', 'questoes.json');

const TARGETS = ['semiologia1', 'bmf1', 'pmh'];

function makeExplanations(geral, correta) {
  const letras = ['A', 'B', 'C', 'D'];
  const explicacoes = {};
  letras.forEach((l, i) => {
    explicacoes[l] = i === correta
      ? 'Correta: integra o enunciado com o raciocinio clinico e fisiopatologico esperado.'
      : 'Incorreta: apresenta erro conceitual, inversao de prioridade clinica ou conduta inadequada.'
  });

  const resumo = [
    `Resumo: ${geral}`,
    `A) ${correta === 0 ? 'CORRETA' : 'INCORRETA'}. ${explicacoes.A}`,
    `B) ${correta === 1 ? 'CORRETA' : 'INCORRETA'}. ${explicacoes.B}`,
    `C) ${correta === 2 ? 'CORRETA' : 'INCORRETA'}. ${explicacoes.C}`,
    `D) ${correta === 3 ? 'CORRETA' : 'INCORRETA'}. ${explicacoes.D}`
  ].join('\n');

  return { explicacao_geral: geral, explicacoes_opcoes: explicacoes, explicacao: resumo };
}

function mountOptions(correct, wrongs, correctIndex) {
  const opts = [];
  let wi = 0;
  for (let i = 0; i < 4; i++) {
    if (i === correctIndex) opts.push(correct);
    else opts.push(wrongs[wi++]);
  }
  return opts.map((txt, i) => `${'ABCD'[i]}) ${txt}`);
}

const BANK = {
  semiologia1: {
    semio1_a1: {
      enunciado: 'Paciente com dor articular cronica procura avaliacao inicial. Qual eixo semiologico deve ser priorizado para orientar a hipotese diagnostica inicial?',
      correta: 'Caracterizar dor, rigidez, limitacao funcional e repercussao nas atividades de vida diaria.',
      erradas: [
        'Solicitar ressonancia de rotina antes de anamnese dirigida.',
        'Restringir avaliacao ao segmento doloroso sem exame global.',
        'Basear conduta apenas em exame laboratorial inespecifico.'
      ],
      geral: 'A semiologia musculoesqueletica inicia com historia clinica estruturada e correlacao funcional.',
      dificuldade: 2
    },
    semio1_a2: {
      enunciado: 'Em dor lombar mecanica, qual achado de anamnese aumenta suspeita de etiologia inflamatoria e exige investigacao dirigida?',
      correta: 'Rigidez matinal prolongada com melhora ao movimento.',
      erradas: [
        'Piora exclusiva ao carregar peso no fim do dia.',
        'Dor localizada sem qualquer sintoma sistêmico.',
        'Melhora completa com repouso absoluto.'
      ],
      geral: 'A anamnese dirigida diferencia padroes mecanicos e inflamatorios para estratificar risco.',
      dificuldade: 3
    },
    semio1_a3: {
      enunciado: 'No exame por inspecao do aparelho locomotor, qual achado sugere processo articular cronico evolutivo?',
      correta: 'Deformidade progressiva com assimetria e perda de alinhamento segmentar.',
      erradas: [
        'Coloracao cutanea normal sem alteracoes de volume.',
        'Amplitude preservada e marcha sem compensacoes.',
        'Ausencia de edema com anatomia comparativa simetrica.'
      ],
      geral: 'A inspecao identifica sinais morfologicos precoces que orientam exame fisico complementar.',
      dificuldade: 2
    },
    semio1_a4: {
      enunciado: 'Durante palpacao de joelho doloroso, qual combinacao sugere sinovite ativa?',
      correta: 'Aumento de temperatura local, dor a palpacao e derrame articular.',
      erradas: [
        'Crepitacao isolada sem dor ou edema.',
        'Pele fria com alivio a compressao profunda.',
        'Hipotrofia muscular sem sinais inflamatorios locais.'
      ],
      geral: 'Palpacao permite reconhecer inflamacao, derrame e dor provocada de forma objetiva.',
      dificuldade: 2
    },
    semio1_a5: {
      enunciado: 'Ao avaliar forca muscular, qual estrategia reduz viés e melhora reprodutibilidade do exame?',
      correta: 'Comparar lados homologos e graduar forca por escala padronizada.',
      erradas: [
        'Aplicar resistencia maxima sem estabilizacao do segmento.',
        'Avaliar apenas o grupo muscular referido como doloroso.',
        'Ignorar dor durante teste para evitar falso negativo.'
      ],
      geral: 'Testes de mobilidade e forca exigem metodo padronizado para confiabilidade clinica.',
      dificuldade: 2
    },
    semio1_a6: {
      enunciado: 'Paciente com dor cervical irradiada para membro superior apresenta parestesia em dermatomo. Qual abordagem propedeutica e mais adequada?',
      correta: 'Correlacionar distribuicao neurologica com manobras provocativas e exame segmentar.',
      erradas: [
        'Diagnosticar sindrome miofascial sem exame neurologico.',
        'Solicitar infiltracao terapeutica antes da hipotese anatomica.',
        'Atribuir quadro a ansiedade sem avaliacao de sinais focais.'
      ],
      geral: 'Sindrome musculoesqueletica exige integracao entre topografia da dor e exame neurologico.',
      dificuldade: 3
    },
    semio1_a7: {
      enunciado: 'Em simulacao com paciente padronizado, qual conduta melhora qualidade do exame musculoesqueletico?',
      correta: 'Sequencia sistematica de anamnese, inspecao, palpacao e testes funcionais.',
      erradas: [
        'Executar somente testes especiais para ganhar tempo.',
        'Interromper entrevista ao primeiro sintoma relatado.',
        'Desconsiderar comunicacao e conforto do paciente durante manobras.'
      ],
      geral: 'Pratica simulada desenvolve raciocinio clinico e padrao tecnico replicavel no atendimento real.',
      dificuldade: 2
    },
    semio1_a8: {
      enunciado: 'No ambulatório supervisionado, qual indicador demonstra exame musculoesqueletico centrado no paciente e clinicamente util?',
      correta: 'Hipotese diagnostica clara, plano inicial e orientacao funcional compreensivel.',
      erradas: [
        'Lista extensa de achados sem sintese clinica final.',
        'Plano dependente apenas de exames de imagem imediatos.',
        'Ausencia de orientacao sobre sinais de alarme e retorno.'
      ],
      geral: 'Pratica real exige conclusao clinica objetiva e plano compartilhado com seguranca.',
      dificuldade: 2
    },
    semio1_a9: {
      enunciado: 'Na discussao de caso de dor no ombro, qual elemento sustenta melhor a hipotese de sindrome do manguito rotador?',
      correta: 'Dor em arco de movimento com testes provocativos positivos e fraqueza especifica.',
      erradas: [
        'Dor difusa sem reproducao por manobras especificas.',
        'Exame cervical completamente normal confirmando origem glenoumeral.',
        'Radiografia normal excluindo lesao funcional de partes moles.'
      ],
      geral: 'Reuniao clinica integra historia, exame fisico e testes direcionados para reduzir erro diagnostico.',
      dificuldade: 3
    }
  },
  bmf1: {
    bmf1_a1: { enunciado: 'Durante dissecao anatomica, qual plano divide o corpo em metades direita e esquerda?', correta: 'Plano sagital mediano.', erradas: ['Plano coronal.', 'Plano transversal.', 'Plano obliquo unico.'], geral: 'Terminologia anatomica padronizada e essencial para comunicacao segura.', dificuldade: 1 },
    bmf1_a2: { enunciado: 'Qual tecido possui alta celularidade, pouca matriz extracelular e reveste superficies corporais?', correta: 'Tecido epitelial.', erradas: ['Tecido conjuntivo frouxo.', 'Tecido osseo compacto.', 'Tecido muscular estriado cardiaco.'], geral: 'Introducao aos tecidos diferencia organizacao celular e funcao biologica.', dificuldade: 1 },
    bmf1_a3: { enunciado: 'A principal funcao fisiologica do sistema esqueletico e:', correta: 'Suporte mecanico, protecao e reserva mineral.', erradas: ['Produzir exclusivamente glicose para musculo.', 'Regular ventilacao alveolar por contração direta.', 'Sintetizar hormonios tireoidianos.'], geral: 'Generalidades do esqueleto incluem funcao estrutural, metabolica e hematopoietica.', dificuldade: 1 },
    bmf1_a4: { enunciado: 'No tecido conjuntivo, qual componente confere resistencia a tracao?', correta: 'Fibras colagenas.', erradas: ['Fibras reticulares exclusivamente.', 'Substancia fundamental sem fibras.', 'Condrócitos maduros.'], geral: 'Matriz extracelular determina propriedades biomecanicas do conjuntivo.', dificuldade: 2 },
    bmf1_a5: { enunciado: 'Na ossificacao endocondral, qual evento ocorre primeiro?', correta: 'Formacao de molde cartilaginoso hialino.', erradas: ['Deposicao direta de osso lamelar periferico.', 'Mineralizacao sem participacao celular.', 'Substituicao por tecido adiposo maduro.'], geral: 'Ossificacao endocondral segue etapas ordenadas com substituicao progressiva da cartilagem.', dificuldade: 2 },
    bmf1_a6: { enunciado: 'Fratura de radio distal apos queda com apoio da mao estendida envolve, inicialmente, qual estrutura ossea do antebraco?', correta: 'Epifise distal do radio.', erradas: ['Diafise proximal da ulna obrigatoriamente.', 'Escapula como foco primario.', 'Clavicula como segmento inicial sempre.'], geral: 'Pratica anatomica ossea melhora correlacao entre trauma e topografia anatomica.', dificuldade: 2 },
    bmf1_a7: { enunciado: 'Qual caracteristica define uma diartrose?', correta: 'Presenca de cavidade articular e mobilidade livre.', erradas: ['Uniao fibrosa sem movimento.', 'Sinostose ossea permanente desde o nascimento.', 'Articulacao sem capsula e sem liquido sinovial.'], geral: 'Sistema articular e classificado por estrutura e grau de mobilidade.', dificuldade: 1 },
    bmf1_a8: { enunciado: 'A cartilagem hialina articular recebe nutricao predominantemente por:', correta: 'Difusao a partir do liquido sinovial.', erradas: ['Irrigacao arterial direta abundante.', 'Veias perfurantes intrarticulares.', 'Capilares linfaticos centrais.'], geral: 'Cartilagem e tecido avascular com metabolismo dependente do microambiente articular.', dificuldade: 2 },
    bmf1_a9: { enunciado: 'Na avaliacao de entorse de tornozelo, qual articulacao e tipicamente mais envolvida?', correta: 'Talocrural.', erradas: ['Sacroiliaca bilateral obrigatoriamente.', 'Temporomandibular.', 'Esternoclavicular.'], geral: 'Pratica articular consolida reconhecimento de estruturas de maior vulnerabilidade traumatica.', dificuldade: 1 },
    bmf1_a10: { enunciado: 'Qual propriedade funcional do musculo esqueletico permite gerar movimento voluntario?', correta: 'Contratilidade.', erradas: ['Condutividade miocardiaca automatica.', 'Capacidade de hematopoiese.', 'Secrecao exocrina.'], geral: 'Generalidades musculares incluem excitabilidade, contratilidade, elasticidade e extensibilidade.', dificuldade: 1 },
    bmf1_a11: { enunciado: 'No musculo estriado esqueletico, qual estrutura delimita a unidade contratil?', correta: 'Sarcomero entre duas linhas Z.', erradas: ['Disco intercalar entre duas bandas H.', 'Endomisio entre duas fibras nervosas.', 'Reticulo sarcoplasmatico entre dois nucleolos.'], geral: 'Histologia muscular relaciona microestrutura com funcao mecanica.', dificuldade: 2 },
    bmf1_a12: { enunciado: 'A elevacao de calcio citosolico na fibra muscular desencadeia:', correta: 'Interacao actina-miosina por deslocamento da tropomiosina.', erradas: ['Bloqueio irreversivel da ATPase da miosina.', 'Relaxamento imediato sem consumo energetico.', 'Despolarizacao da placa motora por acetilcolinesterase.'], geral: 'Fisiologia da contracao depende do acoplamento excitacao-contração e ATP.', dificuldade: 2 },
    bmf1_a13: { enunciado: 'Fraqueza na extensao do joelho sugere maior comprometimento de qual grupo muscular?', correta: 'Quadriceps femoral.', erradas: ['Isquiotibiais.', 'Iliopsoas exclusivamente.', 'Gastrocnemio medial isolado.'], geral: 'Pratica de grupos musculares facilita raciocinio clinico topografico.', dificuldade: 2 },
    bmf1_a14: { enunciado: 'A principal funcao da epiderme queratinizada e:', correta: 'Barreira fisica contra perda hidrica e agressao externa.', erradas: ['Armazenar calcio como principal reservatorio corporal.', 'Produzir eritrocitos em situacao basal.', 'Realizar trocas gasosas alveolares.'], geral: 'Tegumento de revestimento protege o organismo e participa da homeostase.', dificuldade: 1 },
    bmf1_a15: { enunciado: 'Qual glandula cutanea tem papel importante na termorregulacao por sudorese?', correta: 'Glandula sudoripara ecrina.', erradas: ['Glandula sebacea em exclusividade.', 'Tireoide cervical.', 'Paratireoide.'], geral: 'Epitelio glandular inclui estruturas exocrinas com funcoes especificas.', dificuldade: 1 },
    bmf1_a16: { enunciado: 'No tecido adiposo branco, qual e a principal funcao metabolica?', correta: 'Reserva energetica e secrecao de adipocinas.', erradas: ['Conducao eletrica miocardica.', 'Filtracao glomerular.', 'Producao primaria de bile.'], geral: 'Histologia de tegumento e adiposo conecta morfologia com funcao endocrino-metabolica.', dificuldade: 2 },
    bmf1_a17: { enunciado: 'Paciente com xerostomia importante tem maior risco de alteracao em qual etapa digestiva inicial?', correta: 'Lubrificacao e digestao inicial na cavidade oral.', erradas: ['Absorcao de vitamina B12 no ileo.', 'Conjugacao hepatica de bilirrubina.', 'Reabsorcao de agua no colon distal.'], geral: 'Anatomia oral e glandulas salivares participam de funcoes mecanicas e quimicas iniciais da digestao.', dificuldade: 2 },
    bmf1_a18: { enunciado: 'Dor abdominal piora com tosse e defesa localizada sugerem irritacao de qual estrutura?', correta: 'Peritonio parietal.', erradas: ['Mucosa gastrica exclusivamente.', 'Submucosa colica isolada.', 'Endotelio venoso portal.'], geral: 'Parede abdominal e peritonio tem relevancia semiologica em abdome agudo.', dificuldade: 3 },
    bmf1_a19: { enunciado: 'A principal diferenca funcional entre intestino delgado e grosso e:', correta: 'Delgado prioriza absorcao de nutrientes; grosso, agua e eletrólitos.', erradas: ['Grosso e o principal sitio de digestao enzimatica proteica.', 'Delgado nao participa da absorcao lipídica.', 'Ambos possuem funcao identica sem especializacao regional.'], geral: 'Anatomia intestinal se relaciona diretamente com especializacao funcional do tubo digestivo.', dificuldade: 2 },
    bmf1_a20: { enunciado: 'Lesao do nervo vago pode comprometer qual aspecto gastrointestinal?', correta: 'Modulacao parassimpatica da motilidade e secrecao.', erradas: ['Formacao de bile nos hepatocitos.', 'Absorcao de ferro no duodeno por via neural direta.', 'Filtracao portal no baço.'], geral: 'Inervacao e vascularizacao GI integram controle autonomico e aporte sanguineo visceral.', dificuldade: 3 },
    bmf1_a21: { enunciado: 'Obstrucao de via biliar principal tende a produzir qual alteracao clinico-laboratorial?', correta: 'Ictericia colestatica com elevacao de bilirrubina direta e fosfatase alcalina.', erradas: ['Hipoglicemia isolada sem alteracao hepatica.', 'Queda seletiva de amilase sem ictericia.', 'Aumento de reticulocitos por hemolise imune primaria.'], geral: 'Anatomia hepatobiliar e pancreatica fundamenta interpretacao de sindromes clinicas comuns.', dificuldade: 3 },
    bmf1_a22: { enunciado: 'Na correlacao anatomia-cirurgia do sistema digestorio, qual marco e essencial para orientar colectomia direita?', correta: 'Reconhecimento de ceco, colon ascendente e flexura hepatica com seus pediculos.', erradas: ['Identificacao exclusiva de fundo gastrico.', 'Mapeamento apenas de vias biliares extra-hepaticas.', 'Avaliacao isolada do reto sem colon proximal.'], geral: 'Pratica anatomica aplicada melhora seguranca em raciocinio topografico-cirurgico.', dificuldade: 3 }
  },
  pmh: {
    pmh_a1: { enunciado: 'Qual afirmacao melhor descreve a funcao do ATP no metabolismo celular?', correta: 'Atua como moeda energetica acoplando reacoes exergonicas e endergonicas.', erradas: ['Funciona apenas como reserva estrutural de membrana.', 'E produzido exclusivamente no citosol.', 'Nao participa de regulacao enzimatica.'], geral: 'Bioenergetica integra transferencia de energia e direcionalidade das vias metabolicas.', dificuldade: 1 },
    pmh_a2: { enunciado: 'Em estado pos-prandial, qual hormonio tende a predominar promovendo armazenamento energetico?', correta: 'Insulina.', erradas: ['Glucagon.', 'Adrenalina.', 'Cortisol em pico fisiologico exclusivo.'], geral: 'Regulacao metabolica geral depende do equilibrio hormonal entre anabolismo e catabolismo.', dificuldade: 1 },
    pmh_a3: { enunciado: 'Em jejum prolongado, a gliconeogenese hepatica torna-se relevante principalmente para manter:', correta: 'Glicemia em tecidos dependentes de glicose.', erradas: ['Sintese de acidos graxos no tecido adiposo.', 'Formacao de quilomicrons intestinais.', 'Atividade da via das pentoses em eritrocitos.'], geral: 'Glicolise e gliconeogenese sao vias reciprocamente reguladas para homeostase glicemica.', dificuldade: 2 },
    pmh_a4: { enunciado: 'Na fosforilacao oxidativa, o gradiente de protons mitocondrial e utilizado para:', correta: 'Sintese de ATP pela ATP sintase.', erradas: ['Exportar piruvato para o nucleo.', 'Ativar glicogenolise citosolica direta.', 'Converter ureia em amonia.'], geral: 'Ciclo de Krebs e cadeia respiratoria convertem equivalentes redutores em energia util.', dificuldade: 2 },
    pmh_a5: { enunciado: 'Deficiencia de glicose-6-fosfato desidrogenase aumenta risco de hemolise porque reduz:', correta: 'Producao de NADPH para defesa antioxidante do eritrocito.', erradas: ['Sintese de hemoglobina fetal.', 'Entrada de glicose por GLUT4.', 'Formacao de lactato muscular em exercicio.'], geral: 'Via das pentoses e metabolismo do glicogenio possuem impacto clinico direto em hematologia.', dificuldade: 3 },
    pmh_a6: { enunciado: 'Qual combinacao e esperada no diabetes mellitus descompensado?', correta: 'Baixa acao insulinica, aumento de gliconeogenese e hiperglicemia.', erradas: ['Supressao total de lipolise com hipoglicemia persistente.', 'Predominio anabolico sem cetogenese.', 'Aumento de captacao de glicose independente de insulina em todos os tecidos.'], geral: 'Regulacao hormonal dos carboidratos explica manifestacoes clinico-laboratoriais frequentes.', dificuldade: 2 },
    pmh_a7: { enunciado: 'Durante jejum, a beta-oxidacao de acidos graxos no figado contribui principalmente para:', correta: 'Gerar acetil-CoA e energia para manutencao metabolica.', erradas: ['Produzir glicose diretamente por reversao completa da via.', 'Inibir totalmente a cetogenese.', 'Ativar sintese de colesterol de forma prioritaria.'], geral: 'Lipidios alternam entre armazenamento e uso energetico conforme estado nutricional.', dificuldade: 2 },
    pmh_a8: { enunciado: 'Qual lipoproteina esta mais associada ao transporte reverso de colesterol?', correta: 'HDL.', erradas: ['LDL.', 'VLDL.', 'Quilomicron residual como via principal exclusiva.'], geral: 'Homeostase lipidica depende do trafego entre tecidos e figado por diferentes lipoproteinas.', dificuldade: 1 },
    pmh_a9: { enunciado: 'Paciente com triglicerideos muito elevados e dor abdominal aguda tem risco aumentado de:', correta: 'Pancreatite aguda por hipertrigliceridemia.', erradas: ['Apendicite por mecanismo lipoproteico direto.', 'Doenca celíaca por malabsorção autoimune imediata.', 'Colecistite acalculosa obrigatoria em todos os casos.'], geral: 'Aplicacoes clinicas dos lipidios conectam vias metabolicas com risco cardiovascular e inflamatório.', dificuldade: 3 },
    pmh_a10: { enunciado: 'No ciclo da ureia, qual objetivo metabolico e central?', correta: 'Detoxificacao de amonia em composto excretavel.', erradas: ['Produzir glicogenio hepatico.', 'Gerar colesterol de alta densidade.', 'Sintetizar acidos biliares primarios.'], geral: 'Catabolismo de aminoacidos exige manejo seguro do nitrogenio para evitar neurotoxicidade.', dificuldade: 2 },
    pmh_a11: { enunciado: 'Em insuficiencia hepatica grave, qual alteracao relacionada a aminoacidos e comum?', correta: 'Aumento de amonia com risco de encefalopatia.', erradas: ['Reducao absoluta de ureia com melhora cognitiva.', 'Aumento de albumina por hiper-sintese hepática.', 'Bloqueio completo da transaminacao muscular.'], geral: 'Aplicacoes clinicas de proteinas relacionam metabolismo nitrogenado e funcao hepatica.', dificuldade: 3 },
    pmh_a12: { enunciado: 'A hiperuricemia da gota decorre, em parte, de alteracoes em qual eixo?', correta: 'Degradacao de purinas e excrecao de acido urico.', erradas: ['Sintese de fosfolipideos de membrana.', 'Beta-oxidacao mitocondrial exclusiva.', 'Via glicolitica anaerobia em hemacias.'], geral: 'Metabolismo de nucleotideos tem impacto direto em reumatologia e nefrologia.', dificuldade: 2 },
    pmh_a13: { enunciado: 'No jejum noturno, qual cooperacao entre orgaos ajuda a manter glicemia?', correta: 'Figado libera glicose enquanto tecido adiposo fornece acidos graxos.', erradas: ['Musculo exporta glicose livre em grande escala.', 'Eritrocito realiza beta-oxidacao para poupar glicose.', 'Cerebro converte acidos graxos de cadeia longa em glicose.'], geral: 'Integracao metabolica entre orgaos coordena combustiveis conforme disponibilidade energetica.', dificuldade: 2 },
    pmh_a14: { enunciado: 'Em sepse grave, uma adaptacao metabolica frequente e:', correta: 'Aumento do catabolismo proteico e resistencia insulinica.', erradas: ['Predominio anabolico com poupanca total de aminoacidos.', 'Supressao completa da gliconeogenese.', 'Reducao universal da demanda energetica tecidual.'], geral: 'Adaptações metabolicas ao estresse modulam prognostico e estrategias terapeuticas.', dificuldade: 3 }
  }
};

function buildQuestion(base, materia, aulaId, localIdx, modulo) {
  const correta = localIdx % 4;
  const opcoes = mountOptions(base.correta, base.erradas, correta);
  const ex = makeExplanations(base.geral, correta);
  return {
    materia,
    tema: aulaId,
    enunciado: base.enunciado,
    opcoes,
    correta,
    dificuldade: base.dificuldade,
    modulo,
    ...ex
  };
}

function main() {
  const materias = JSON.parse(fs.readFileSync(MATERIAS_PATH, 'utf8'));
  const questoesData = JSON.parse(fs.readFileSync(QUESTOES_PATH, 'utf8'));
  const atual = Array.isArray(questoesData.questoes) ? questoesData.questoes : [];

  const semTargets = atual.filter((q) => !TARGETS.includes(q.materia));
  let nextId = semTargets.reduce((m, q) => Math.max(m, Number(q.id) || 0), 0) + 1;

  const novas = [];
  for (const materiaId of TARGETS) {
    const modulo = materias[materiaId].modulo;
    const aulas = materias[materiaId].aulas;
    aulas.forEach((aula, idx) => {
      const base = BANK[materiaId][aula.id];
      if (!base) {
        throw new Error(`Sem banco para ${materiaId}/${aula.id}`);
      }
      const q = buildQuestion(base, materiaId, aula.id, idx, modulo);
      q.id = nextId++;
      novas.push(q);
    });
  }

  const merged = [...semTargets, ...novas].sort((a, b) => Number(a.id) - Number(b.id));
  fs.writeFileSync(QUESTOES_PATH, JSON.stringify({ questoes: merged }, null, 2), 'utf8');

  console.log('Removidas (targets):', atual.length - semTargets.length);
  console.log('Inseridas (1 por aula):', novas.length);
  console.log('Total final:', merged.length);
}

main();
