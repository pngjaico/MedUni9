import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const AULA = 'cm5_a10';
const MARKER = 'cm5_quality_contract_2026_05_07_cm5_a10';
const FIG_ID = 'CM5-A10-F01';

function p(rel) { return path.join(ROOT, rel); }
function readJson(rel) { return JSON.parse(fs.readFileSync(p(rel), 'utf8')); }
function writeJson(rel, data) {
  fs.mkdirSync(path.dirname(p(rel)), { recursive: true });
  fs.writeFileSync(p(rel), `${JSON.stringify(data, null, 2)}\n`, 'utf8');
}
function writeText(rel, text) {
  fs.mkdirSync(path.dirname(p(rel)), { recursive: true });
  fs.writeFileSync(p(rel), `${text.replace(/\r\n/g, '\n').replace(/\n*$/, '')}\n`, 'utf8');
}
function explanation(general, exp) {
  return [`Resumo: ${general}`, `A) ${exp.A}`, `B) ${exp.B}`, `C) ${exp.C}`, `D) ${exp.D}`].join('\n');
}
function q(dificuldade, caso_clinico, enunciado, opcoes, correta, general, exp) {
  return {
    materia: 'clinica_medica5',
    tema: AULA,
    aula_id: AULA,
    modulo: 5,
    dificuldade,
    caso_clinico,
    essencial: true,
    origem: MARKER,
    enunciado,
    opcoes,
    correta,
    explicacao_geral: general,
    explicacoes_opcoes: exp,
    explicacao: explanation(general, exp),
  };
}
function fc(dificuldade, frente, verso, explicacao, categoria, tags) {
  return { materia: 'clinica_medica5', tema: AULA, dificuldade, frente, verso, explicacao, origem: MARKER, categoria, tags };
}

function questions() {
  return [
    q(2, false, 'Qual achado favorece origem glomerular da hematúria?', ['A) Hemácias dismórficas e cilindros hemáticos.', 'B) Nitrito positivo isolado sem sintomas.', 'C) Dor suprapúbica isolada sempre.', 'D) Urina clara sem proteína ou sedimento.'], 0, 'Hematúria glomerular costuma vir com hemácias dismórficas, cilindros hemáticos e proteinúria variável.', { A: 'CORRETA: aponta lesão no filtro glomerular.', B: 'INCORRETA: sugere bacteriúria, mas não prova glomerulopatia.', C: 'INCORRETA: dor suprapúbica sugere cistite, não origem glomerular.', D: 'INCORRETA: não sustenta glomerulopatia.' }),
    q(2, false, 'A combinação edema, hipertensão, hematúria e queda de função renal sugere qual síndrome?', ['A) Síndrome nefrítica.', 'B) Cistite simples obrigatória.', 'C) Cólica biliar.', 'D) Hipertireoidismo subclínico.'], 0, 'Síndrome nefrítica é inflamação glomerular com hematúria, hipertensão, edema e redução de filtração.', { A: 'CORRETA: é o padrão sindrômico.', B: 'INCORRETA: cistite não explica cilindros, HAS e queda renal.', C: 'INCORRETA: não tem relação com sedimento glomerular.', D: 'INCORRETA: não explica o quadro renal.' }),
    q(2, false, 'Qual conjunto é mais compatível com síndrome nefrótica?', ['A) Proteinúria maciça, hipoalbuminemia e edema.', 'B) Disúria, polaciúria e nitrito positivo apenas.', 'C) Febre, rigidez de nuca e fotofobia.', 'D) Dor torácica pleurítica e hemoptise isolada.'], 0, 'Síndrome nefrótica é perda importante de proteína, edema e hipoalbuminemia, com risco de trombose e infecção.', { A: 'CORRETA: define o fenótipo nefrótico.', B: 'INCORRETA: é mais urinário baixo.', C: 'INCORRETA: sugere meningite.', D: 'INCORRETA: pode ter relação com vasculite em outro contexto, mas não define nefrótica.' }),
    q(3, true, 'Paciente com hematúria, proteinúria, creatinina subindo em dias e cilindros hemáticos. Qual conduta inicial é mais correta?', ['A) Tratar como glomerulonefrite rapidamente progressiva até prova em contrário e acionar nefrologia.', 'B) Dar antibiótico oral para cistite simples e rever em 6 meses.', 'C) Ignorar porque hematúria sempre é benigna.', 'D) Fazer apenas analgesia com AINE por 30 dias.'], 0, 'Queda rápida de função renal com sedimento nefrítico é emergência nefrológica e pode exigir investigação urgente, biópsia e tratamento específico.', { A: 'CORRETA: janela terapêutica pode ser curta.', B: 'INCORRETA: subestima risco de perda renal.', C: 'INCORRETA: hematúria glomerular não é achado trivial.', D: 'INCORRETA: AINE pode piorar função renal.' }),
    q(2, true, 'Homem jovem apresenta hematúria macroscópica 1 dia após infecção de vias aéreas. Qual hipótese clássica fica mais provável?', ['A) Nefropatia por IgA.', 'B) Glomerulonefrite pós-estreptocócica clássica.', 'C) Cistite por cateter permanente.', 'D) Bacteriúria assintomática da gestante.'], 0, 'Nefropatia por IgA faz hematúria sinfaríngea, muito próxima do quadro de via aérea.', { A: 'CORRETA: timing é a pista.', B: 'INCORRETA: pós-estreptocócica costuma vir depois de latência maior.', C: 'INCORRETA: não é o padrão da vinheta.', D: 'INCORRETA: não se aplica ao paciente.' }),
    q(3, true, 'Mulher com lúpus, edema, hematúria, proteinúria e queda de complemento. Qual passo é mais importante para definir classe e tratamento?', ['A) Avaliação nefrológica e considerar biópsia renal.', 'B) Tratar como cistite simples sem investigar rim.', 'C) Corticoide eterno sem estratificar.', 'D) Suspender todo anti-hipertensivo.'], 0, 'Nefrite lúpica depende de classificação histológica para orientar intensidade de imunossupressão.', { A: 'CORRETA: classe muda prognóstico e tratamento.', B: 'INCORRETA: sedimento e complemento sugerem rim glomerular.', C: 'INCORRETA: imunossupressão sem diagnóstico é perigosa.', D: 'INCORRETA: controle pressórico é parte do cuidado.' }),
    q(2, false, 'Em bacteriúria assintomática, quando geralmente se deve rastrear e tratar?', ['A) Gestação e antes de procedimento urológico invasivo com risco de sangramento mucoso.', 'B) Todo idoso institucionalizado sem sintomas.', 'C) Todo paciente diabético assintomático.', 'D) Qualquer urina com odor forte sem sintoma.'], 0, 'IDSA restringe tratamento de bacteriúria assintomática a cenários com benefício claro, principalmente gestação e procedimentos urológicos invasivos selecionados.', { A: 'CORRETA: são exceções clássicas.', B: 'INCORRETA: tratar colonização aumenta dano.', C: 'INCORRETA: diabetes isolado não justifica tratamento se assintomático.', D: 'INCORRETA: odor não define ITU.' }),
    q(2, true, 'Idosa em instituição tem urocultura positiva, sem disúria, sem febre, sem dor lombar e sem instabilidade. Qual conduta é mais adequada?', ['A) Não tratar bacteriúria assintomática e procurar outras causas se houver queixa inespecífica.', 'B) Antibiótico amplo por 14 dias sempre.', 'C) Internar para antibiótico venoso obrigatório.', 'D) Diagnosticar pielonefrite apenas pela cultura.'], 0, 'Cultura positiva sem sintomas urinários ou sinais sistêmicos não deve virar antibiótico automático.', { A: 'CORRETA: evita sobretratamento e resistência.', B: 'INCORRETA: aumenta dano sem benefício.', C: 'INCORRETA: não há critérios de gravidade.', D: 'INCORRETA: pielonefrite exige quadro clínico compatível.' }),
    q(1, true, 'Mulher jovem com disúria, urgência, polaciúria, sem febre e sem dor lombar. Qual síndrome é mais provável?', ['A) Cistite aguda não complicada.', 'B) Glomerulonefrite rapidamente progressiva.', 'C) Síndrome nefrótica pura.', 'D) Meningite bacteriana.'], 0, 'Disúria, urgência e polaciúria sem sinais sistêmicos apontam para ITU baixa.', { A: 'CORRETA: quadro típico.', B: 'INCORRETA: faltam sedimento glomerular e queda renal.', C: 'INCORRETA: faltam edema e proteinúria maciça.', D: 'INCORRETA: não há sinais neurológicos.' }),
    q(2, true, 'Paciente com febre, calafrios, dor lombar e Giordano positivo. Qual diagnóstico sindrômico é mais provável?', ['A) Pielonefrite aguda.', 'B) Bacteriúria assintomática.', 'C) Rinite viral.', 'D) Hipotireoidismo.'], 0, 'Febre e dor lombar com sinal de Giordano sugerem infecção urinária alta.', { A: 'CORRETA: é o padrão de pielonefrite.', B: 'INCORRETA: há sintomas sistêmicos.', C: 'INCORRETA: não explica dor lombar/Giordano.', D: 'INCORRETA: sem relação.' }),
    q(2, false, 'Qual situação torna ITU mais provável de ser complicada?', ['A) Homem, obstrução, cálculo, cateter, gestação ou imunossupressão.', 'B) Mulher jovem hígida com disúria isolada.', 'C) Urina escura após beterraba.', 'D) Tosse seca isolada.'], 0, 'ITU complicada envolve fatores anatômicos, funcionais, gestacionais, masculinos, imunológicos ou dispositivos.', { A: 'CORRETA: lista fatores de maior risco.', B: 'INCORRETA: tende a ser cistite não complicada.', C: 'INCORRETA: não define ITU.', D: 'INCORRETA: não é urinário.' }),
    q(3, true, 'Paciente com edema, proteinúria importante e dor súbita em flanco com hematúria. Qual complicação da síndrome nefrótica deve ser lembrada?', ['A) Trombose de veia renal.', 'B) Otite média.', 'C) Crise tireotóxica.', 'D) Labirintite viral.'], 0, 'Síndrome nefrótica aumenta risco trombótico; dor em flanco e hematúria podem sugerir trombose de veia renal.', { A: 'CORRETA: é complicação clássica.', B: 'INCORRETA: não se conecta ao quadro.', C: 'INCORRETA: não explica proteinúria.', D: 'INCORRETA: não explica sinais renais.' }),
  ];
}

function cards() {
  return [
    fc(2, 'Hematúria glomerular sugere hemácias {{c1::dismórficas}} e cilindros hemáticos.', 'Dismórficas', 'A deformação ocorre ao atravessar a barreira glomerular lesionada.', 'diagnostico', ['cm5', 'glomerulopatia']),
    fc(2, 'Síndrome nefrítica combina hematúria, edema, hipertensão e queda de {{c1::função renal}}.', 'Função renal', 'É inflamação do glomérulo, não ITU baixa.', 'sindromes', ['cm5', 'nefritica']),
    fc(2, 'Síndrome nefrótica combina proteinúria maciça, edema e {{c1::hipoalbuminemia}}.', 'Hipoalbuminemia', 'A perda de proteína reduz pressão oncótica e aumenta risco trombótico.', 'sindromes', ['cm5', 'nefrotica']),
    fc(3, 'Creatinina subindo rápido com sedimento nefrítico sugere {{c1::GNRP}}.', 'GNRP', 'Glomerulonefrite rapidamente progressiva é emergência nefrológica.', 'emergencia', ['cm5', 'gnrp']),
    fc(2, 'Hematúria sinfaríngea é pista clássica de nefropatia por {{c1::IgA}}.', 'IgA', 'Surge muito próxima de infecção de via aérea.', 'diagnostico', ['cm5', 'iga']),
    fc(2, 'Nefrite lúpica geralmente exige considerar {{c1::biópsia renal}} para classe.', 'Biópsia renal', 'A classe histológica guia intensidade terapêutica.', 'lupus', ['cm5', 'lupus']),
    fc(2, 'Bacteriúria assintomática deve ser tratada principalmente na gestação e antes de {{c1::procedimento urológico invasivo}}.', 'Procedimento urológico invasivo', 'Fora dessas situações, antibiótico costuma causar mais dano que benefício.', 'itu', ['cm5', 'asb']),
    fc(2, 'Urocultura positiva sem sintoma urinário não define {{c1::ITU}}.', 'ITU', 'Colonização é comum, especialmente em idosos e usuários de cateter.', 'itu', ['cm5', 'bacteriuria']),
    fc(1, 'Disúria, urgência e polaciúria sem febre sugerem {{c1::cistite}}.', 'Cistite', 'É o padrão de ITU baixa não complicada.', 'itu', ['cm5', 'cistite']),
    fc(2, 'Febre, dor lombar e Giordano positivo sugerem {{c1::pielonefrite}}.', 'Pielonefrite', 'É ITU alta e pode exigir avaliação de gravidade.', 'itu', ['cm5', 'pielonefrite']),
    fc(2, 'ITU em homem, gestante, obstrução, cálculo ou cateter tende a ser {{c1::complicada}}.', 'Complicada', 'O risco anatômico/funcional muda investigação e conduta.', 'itu', ['cm5', 'complicada']),
    fc(3, 'Síndrome nefrótica aumenta risco de trombose, inclusive de veia {{c1::renal}}.', 'Renal', 'Dor em flanco e hematúria no nefrótico pedem lembrar trombose.', 'complicacoes', ['cm5', 'nefrotica']),
  ];
}

function material() {
  return [
    '---',
    'aula_id: cm5_a10',
    'materia: clinica_medica5',
    'modulo: 5',
    'tema: Glomerulopatias e Infecção Urinária',
    'versao_v3: 3.0.0',
    'status: published_local',
    'revisado_em: 2026-05-07',
    'checksum_lint: pass_pending',
    '---',
    '',
    '# Glomerulopatias e Infecção Urinária',
    '',
    '**Disciplina:** Clínica Médica 5',
    '**Módulo:** 5 | **Referência principal:** KDIGO Glomerular Diseases 2021 + IDSA Asymptomatic Bacteriuria 2019 + Harrison 21ª ed. + Cecil-Goldman 26ª ed.',
    '**Tempo de estudo sugerido:** 30-40 min',
    '',
    '---',
    '',
    '## Relevância Clínica e Acadêmica',
    '',
    'Esta aula mistura dois temas que a prova adora confundir: **doença glomerular** e **infecção urinária**. O erro clássico é chamar toda hematúria de ITU ou tratar toda urocultura positiva como infecção.',
    '',
    'Na prática, essa confusão custa rim, antibiótico desnecessário e resistência bacteriana. O aluno bom separa **sedimento glomerular** de **sintoma urinário baixo**, identifica emergência nefrológica e sabe quando **não** tratar bacteriúria assintomática.',
    '',
    '> **Pegadinha de prova:** nitrito positivo não apaga cilindro hemático. Se existe hematúria dismórfica, proteinúria e creatinina subindo, pense rim glomerular antes de carimbar cistite.',
    '',
    '---',
    '',
    '### Figura sugerida',
    '',
    '**Figura-ID:** `CM5-A10-F01`',
    '- **Momento:** após a relevância, antes de diferenciar síndrome nefrítica e nefrótica.',
    '- **Descrição técnica:** esquema do glomérulo, cápsula de Bowman e túbulo proximal para ancorar a barreira de filtração.',
    '- **Legenda:** Glomérulo e cápsula de Bowman. A lesão da barreira de filtração explica hematúria glomerular, proteinúria e cilindros.',
    '',
    '---',
    '',
    '## Caso da Semana',
    '',
    '**Ato 1 - Entrada:** mulher de 32 anos chega com urina escura, edema palpebral, PA 166/98 mmHg e creatinina subindo. O EAS mostra hematúria, proteinúria e cilindros hemáticos.',
    '',
    '**Ato 2 - Virada:** alguém pede urocultura e quer tratar como ITU porque apareceu bactéria. Só que a paciente não tem disúria, não tem urgência, não tem febre e a história parece glomerular.',
    '',
    '**Ato 3 - Decisão:** a prioridade é reconhecer síndrome nefrítica, avaliar gravidade, investigar causas e acionar nefrologia se houver queda rápida de função renal. Antibiótico não trata cilindro hemático.',
    '',
    '> **Moral da vinheta:** urina alterada não é sinônimo de ITU. Primeiro leia o sedimento, depois decida se há infecção. Aqui no MedGradPlus, a pergunta é sempre: o problema está no filtro ou no trato urinário?',
    '',
    '---',
    '',
    '## Anatomia Funcional do Glomérulo',
    '',
    'O glomérulo é o filtro vascular dentro da cápsula de Bowman. A barreira de filtração inclui endotélio fenestrado, membrana basal glomerular e podócitos.',
    '',
    'Quando essa barreira inflama ou perde seletividade, aparecem três pistas: **hematúria glomerular**, **proteinúria** e, se a lesão é importante, **queda de eTFG**.',
    '',
    'A prova não cobra histologia por decoração. Ela cobra consequência clínica:',
    '',
    '- Hemácia atravessando filtro lesionado fica **dismórfica**.',
    '- Inflamação glomerular forma **cilindro hemático**.',
    '- Perda de proteína em grande volume gera **síndrome nefrótica**.',
    '- Queda rápida de filtração pode ser **emergência nefrológica**.',
    '',
    '**Macete MedGradPlus - filtro versus cano:** glomérulo é filtro; uretra e bexiga são cano. Cilindro e proteinúria apontam filtro. Disúria e urgência apontam cano.',
    '',
    '---',
    '',
    '## Síndrome Nefrítica e Síndrome Nefrótica',
    '',
    '| Síndrome | Achado dominante | Pistas de prova |',
    '|---|---|---|',
    '| **Nefrítica** | Inflamação glomerular | hematúria, cilindros, HAS, edema, creatinina |',
    '| **Nefrótica** | Perda proteica maciça | edema, hipoalbuminemia, proteinúria, trombose |',
    '| **Mista** | Inflamação e proteinúria relevante | lúpus, IgA grave, membranoproliferativa |',
    '',
    'Síndrome nefrítica é o glomérulo inflamado. A pergunta vem com urina cor de coca-cola, edema, hipertensão e creatinina piorando.',
    '',
    'Síndrome nefrótica é o glomérulo vazando proteína. A pergunta vem com edema importante, albumina baixa, dislipidemia e risco de trombose.',
    '',
    '> **Armadilha de banca:** proteinúria não é sempre nefrótica. Proteinúria leve ou moderada pode aparecer em síndrome nefrítica. O conjunto clínico manda mais que uma palavra isolada.',
    '',
    '---',
    '',
    '## Glomerulonefrite Rapidamente Progressiva',
    '',
    'GNRP é síndrome, não diagnóstico final. O padrão é perda rápida de função renal em dias a semanas com sedimento nefrítico.',
    '',
    'Pistas de gravidade:',
    '',
    '- Creatinina subindo rapidamente.',
    '- Oligúria.',
    '- Cilindros hemáticos.',
    '- Hematúria dismórfica.',
    '- Hipertensão e edema.',
    '- Sintomas sistêmicos, como púrpura, hemoptise ou artralgia.',
    '',
    'Conduta inicial é reconhecer urgência, internar quando grave, suspender nefrotóxicos, investigar etiologia e envolver nefrologia cedo. Em muitos cenários, a biópsia renal define tratamento.',
    '',
    '**Macete MedGradPlus - rim em queda não espera ambulatório:** creatinina subindo em dias com sedimento nefrítico é sirene. O erro é tratar como cistite simples e perder a janela.',
    '',
    '---',
    '',
    '## Principais Glomerulopatias para Prova',
    '',
    '| Doença | Pista clínica | Pegadinha |',
    '|---|---|---|',
    '| **IgA** | hematúria logo após IVAS | timing sinfaríngeo |',
    '| **Pós-infecciosa** | hematúria após latência | complemento baixo pode aparecer |',
    '| **Lúpica** | mulher jovem, LES, complemento baixo | classe muda tratamento |',
    '| **ANCA** | GNRP, pulmão, púrpura | pode ter pouca proteinúria |',
    '| **Anti-MBG** | rim e pulmão | hemoptise muda urgência |',
    '| **Membranosa** | nefrótica no adulto | pesquisar causas secundárias |',
    '| **Lesões mínimas** | nefrótica, criança ou pós-droga | sedimento pobre |',
    '| **GESF** | nefrótica, obesidade, HIV, APOL1 | pode evoluir para DRC |',
    '',
    'Em residência, a banca raramente quer uma tese de imunologia. Ela quer reconhecer a síndrome, a pista temporal e a urgência.',
    '',
    '> **Pérola Clínica:** lúpus com rim não é lugar para chute. Classe histológica muda imunossupressão, prognóstico e intensidade de seguimento.',
    '',
    '---',
    '',
    '## Investigação Inicial da Suspeita Glomerular',
    '',
    'O pacote inicial deve responder três perguntas: existe glomerulopatia, há gravidade e qual etiologia é provável.',
    '',
    '| Bloco | Exames úteis | Por quê |',
    '|---|---|---|',
    '| **Urina** | EAS, sedimento, proteína/creatinina | confirma padrão glomerular |',
    '| **Função renal** | creatinina, eTFG, eletrólitos | mede gravidade |',
    '| **Imunologia** | C3/C4, ANA, anti-DNA, ANCA, anti-MBG | direciona causa |',
    '| **Infecção** | hepatites, HIV, culturas se febre | evita imunossupressão errada |',
    '| **Imagem** | ultrassom renal | descarta obstrução e avalia rim |',
    '| **Histologia** | biópsia renal em selecionados | define classe e tratamento |',
    '',
    'Não comece imunossupressão pesada sem pensar em infecção ativa, gravidade e necessidade de biópsia. O risco é tratar o diagnóstico errado com a droga mais perigosa.',
    '',
    '---',
    '',
    '## Infecção Urinária: Síndromes',
    '',
    'ITU é diagnóstico clínico, apoiado por urina. Não é diagnóstico de laboratório isolado.',
    '',
    '| Síndrome | Pistas | Conduta geral |',
    '|---|---|---|',
    '| **Cistite** | disúria, urgência, polaciúria | tratar ITU baixa se quadro típico |',
    '| **Pielonefrite** | febre, lombalgia, Giordano | avaliar gravidade e via de antibiótico |',
    '| **Complicada** | homem, cálculo, cateter, obstrução | investigar fator associado |',
    '| **Bacteriúria assintomática** | cultura positiva sem sintoma | geralmente não tratar |',
    '',
    'A tríade de cistite é simples: disúria, urgência e polaciúria. Febre, dor lombar e calafrios sobem a infecção para rim até prova em contrário.',
    '',
    '> **Pegadinha:** piúria acompanha inflamação, mas não prova infecção que precisa antibiótico. Cateter, idoso e bacteriúria assintomática confundem muito.',
    '',
    '---',
    '',
    '## Bacteriúria Assintomática',
    '',
    'Bacteriúria assintomática é bactéria na urina sem sintomas atribuíveis ao trato urinário. A regra moderna é simples: **não trate colonização**.',
    '',
    'Exceções importantes:',
    '',
    '- Gestação.',
    '- Procedimento urológico invasivo com risco de sangramento de mucosa.',
    '',
    'Cenários em que a prova costuma tentar induzir erro:',
    '',
    '- Idoso institucionalizado com cultura positiva e sem sintoma urinário.',
    '- Paciente diabético assintomático.',
    '- Usuário de cateter crônico sem sinais sistêmicos.',
    '- Urina com odor forte isolado.',
    '- Confusão mental sem febre, instabilidade ou sintoma urinário claro.',
    '',
    '**Macete MedGradPlus - cultura não é paciente:** se não tem sintoma, trate a pessoa, não o papel do laboratório. As exceções precisam estar explícitas na vinheta.',
    '',
    '---',
    '',
    '## Como Separar Glomerulopatia de ITU na Vinheta',
    '',
    '| Pista | Favorece glomérulo | Favorece ITU |',
    '|---|---|---|',
    '| **Hematúria** | dismórfica, cilindros | macroscópica com disúria pode ocorrer |',
    '| **Proteinúria** | moderada a maciça | ausente ou discreta |',
    '| **Sintomas** | edema, HAS, oligúria | disúria, urgência, dor lombar |',
    '| **Função renal** | pode cair rápido | cai se sepse, obstrução ou pielonefrite grave |',
    '| **Cultura** | pode ser contaminante ou coexistir | ajuda se clínica compatível |',
    '',
    'Se a pergunta der cilindro hemático, a resposta quase nunca é cistite simples. Se der disúria isolada em mulher jovem, a resposta quase nunca é lúpus renal.',
    '',
    '---',
    '',
    '## Pontos-Chave',
    '',
    '- Hematúria glomerular tem **hemácias dismórficas** e **cilindros hemáticos**.',
    '- Síndrome nefrítica combina **hematúria**, **edema**, **HAS** e queda de função renal.',
    '- Síndrome nefrótica combina **proteinúria maciça**, **hipoalbuminemia** e edema.',
    '- Creatinina subindo rápido com sedimento nefrítico é **emergência nefrológica**.',
    '- IgA faz hematúria próxima de IVAS.',
    '- Nefrite lúpica pede estratificação, muitas vezes com biópsia.',
    '- ITU é clínica; urocultura isolada não fecha diagnóstico.',
    '- Cistite é disúria, urgência e polaciúria sem sinais sistêmicos.',
    '- Pielonefrite é febre, lombalgia e Giordano.',
    '- Bacteriúria assintomática geralmente **não** deve ser tratada.',
    '- Trate bacteriúria assintomática em gestação e antes de procedimento urológico invasivo selecionado.',
    '- Não use antibiótico para resolver cilindro hemático.',
    '',
    '---',
    '',
    '## Mini Quiz',
    '',
    '**1. Qual achado aponta origem glomerular da hematúria?**',
    '',
    '- [x] Hemácias dismórficas e cilindros hemáticos',
    '- [ ] Nitrito positivo isolado sem sintomas',
    '- [ ] Dor suprapúbica isolada sempre',
    '- [ ] Urina clara sem proteína',
    '',
    '> **Explicação:** cilindro hemático é pista forte de inflamação glomerular.',
    '',
    '**2. Hematúria, edema, HAS e creatinina subindo sugerem:**',
    '',
    '- [x] Síndrome nefrítica',
    '- [ ] Cistite simples',
    '- [ ] Labirintite',
    '- [ ] Hipotireoidismo',
    '',
    '> **Explicação:** é o conjunto típico de inflamação glomerular.',
    '',
    '**3. Proteinúria maciça, hipoalbuminemia e edema definem:**',
    '',
    '- [x] Síndrome nefrótica',
    '- [ ] Síndrome gripal',
    '- [ ] Bacteriúria assintomática',
    '- [ ] Rinite alérgica',
    '',
    '> **Explicação:** perda proteica importante é o eixo da síndrome nefrótica.',
    '',
    '**4. Mulher jovem com hematúria logo após IVAS lembra:**',
    '',
    '- [x] Nefropatia por IgA',
    '- [ ] Cistite por cateter',
    '- [ ] Osteoporose',
    '- [ ] Crise tireotóxica',
    '',
    '> **Explicação:** IgA tem hematúria sinfaríngea.',
    '',
    '**5. Bacteriúria assintomática deve ser tratada em qual cenário?**',
    '',
    '- [x] Gestação',
    '- [ ] Diabético assintomático sempre',
    '- [ ] Idoso sem sintoma sempre',
    '- [ ] Urina com odor forte isolado',
    '',
    '> **Explicação:** gestação é uma das exceções clássicas.',
    '',
    '**6. Febre, dor lombar e Giordano positivo sugerem:**',
    '',
    '- [x] Pielonefrite',
    '- [ ] Bacteriúria assintomática',
    '- [ ] Síndrome nefrótica pura',
    '- [ ] Disfonia funcional',
    '',
    '> **Explicação:** sinais sistêmicos e dor lombar colocam infecção no trato alto.',
    '',
    '---',
    '',
    '## Pré-Prova',
    '',
    '### Síntese para a prova',
    '',
    'Separe rim glomerular de trato urinário. **Cilindro hemático**, **hemácia dismórfica**, **proteinúria** e **creatinina subindo** apontam glomérulo. **Disúria**, **urgência** e **polaciúria** apontam cistite. **Febre**, **lombalgia** e **Giordano** apontam pielonefrite. Urocultura positiva sem sintoma é bacteriúria assintomática e geralmente não deve ser tratada.',
    '',
    '### Macete-âncora',
    '',
    '**Urina alterada não é diagnóstico.**',
    '',
    '- Filtro: cilindros, dismorfismo, proteinúria.',
    '- Cano: disúria, urgência, polaciúria.',
    '- Rim infectado: febre, lombalgia, Giordano.',
    '- Cultura positiva sem sintoma: pense colonização.',
    '- Emergência: creatinina subindo rápido com sedimento nefrítico.',
    '',
    '### Erros que derrubam nota',
    '',
    '- Chamar cilindro hemático de cistite.',
    '- Tratar bacteriúria assintomática em todo idoso.',
    '- Esquecer gestação como exceção para rastrear/tratar bacteriúria.',
    '- Ignorar proteinúria maciça no edema.',
    '- Dar AINE para paciente com rim em queda.',
    '- Começar imunossupressão sem excluir infecção relevante.',
    '- Confundir IgA com pós-infecciosa pelo timing.',
    '',
    '---',
    '',
    '## Fontes',
    '',
    '- KDIGO. **2021 Clinical Practice Guideline for the Management of Glomerular Diseases**.',
    '- IDSA. **Clinical Practice Guideline for the Management of Asymptomatic Bacteriuria: 2019 Update**.',
    '- Harrison Medicina Interna, 21ª edição, capítulos de glomerulopatias e infecção urinária.',
    '- Cecil-Goldman Medicine, 26ª edição, capítulos de nefrologia e doenças infecciosas urinárias.',
  ].join('\n');
}

function updateFiles() {
  const md = material();
  writeText('data/materiais/clinica_medica5/cm5_a10.md', md);
  writeText('materiais/modulo5/clinica_medica5/cm5_a10.md', md);
}

function updateData() {
  const qData = readJson('data/questoes.json');
  let questoes = (qData.questoes || []).filter((item) => item.origem !== MARKER);
  const novos = questions();
  let maxQ = Math.max(0, ...questoes.map((item) => Number(item.id) || 0));
  for (const item of novos) item.id = ++maxQ;
  questoes.push(...novos);
  writeJson('data/questoes.json', { ...qData, questoes });

  const fcData = readJson('data/flashcards.json');
  let flashcards = (fcData.flashcards || []).filter((item) => item.origem !== MARKER);
  const novosCards = cards();
  let maxFc = Math.max(0, ...flashcards.map((item) => Number(item.id) || 0));
  for (const item of novosCards) item.id = ++maxFc;
  flashcards.push(...novosCards);
  writeJson('data/flashcards.json', { ...fcData, flashcards });
}

function updateFigure() {
  const data = readJson('data/materiais_figuras.json');
  const entries = (data.entries || []).filter((fig) => fig.id !== FIG_ID);
  entries.push({
    id: FIG_ID,
    modulo: 5,
    disciplina: 'clinica_medica5',
    aula: AULA,
    caminhoMaterial: 'materiais/modulo5/clinica_medica5/cm5_a10.md',
    momento: 'Após relevância clínica, antes da comparação entre síndrome nefrítica e nefrótica.',
    descricaoVisual: 'Glomérulo, cápsula de Bowman e túbulo proximal em esquema anatômico simples.',
    tipoSugerido: 'Esquema anatômico Wikimedia Commons.',
    buscaCommonsEn: "Bowman's capsule and glomerulus SVG",
    buscaCommonsPt: 'glomérulo cápsula de Bowman SVG',
    status: 'aprovada',
    urlImagem: 'https://upload.wikimedia.org/wikipedia/commons/1/18/Bowman%27s_capsule_and_glomerulus.svg',
    urlThumbnail: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Bowman%27s_capsule_and_glomerulus.svg/512px-Bowman%27s_capsule_and_glomerulus.svg.png',
    urlPaginaCommons: 'https://commons.wikimedia.org/wiki/File:Bowman%27s_capsule_and_glomerulus.svg',
    licenca: 'CC0',
    credito: 'Mikael Häggström',
    legenda: 'Glomérulo, cápsula de Bowman e túbulo proximal. A barreira glomerular explica hematúria dismórfica, cilindros e proteinúria.',
    notas: 'Figura usada por relevância anatômica real para separar doença glomerular de ITU; não é decoração.',
  });
  entries.sort((a, b) => String(a.id).localeCompare(String(b.id)));
  writeJson('data/materiais_figuras.json', { ...data, updatedAt: new Date().toISOString(), entries });
}

function updateRefs() {
  writeJson('data/refs/cm5_a10.refs.json', {
    aula_id: AULA,
    materia: 'clinica_medica5',
    tema: 'Glomerulopatias e Infecção Urinária',
    generatedAt: '2026-05-07T23:05:00.000Z',
    marker: MARKER,
    image_decision: {
      usar_imagem: true,
      figura_id: FIG_ID,
      motivo: 'A anatomia glomerular é ponto de ancoragem para entender hematúria dismórfica, cilindros e proteinúria; a imagem reduz confusão com ITU.',
    },
    fontes_base: [
      { tipo: 'diretriz', titulo: 'KDIGO 2021 Glomerular Diseases Guideline', url: 'https://kdigo.org/guidelines/gd/', uso: 'síndromes glomerulares, investigação e urgência nefrológica.' },
      { tipo: 'diretriz', titulo: 'IDSA 2019 Asymptomatic Bacteriuria Guideline', url: 'https://www.idsociety.org/practice-guideline/asymptomatic-bacteriuria/', uso: 'quando rastrear/tratar bacteriúria assintomática.' },
      { tipo: 'imagem', titulo: "Bowman's capsule and glomerulus.svg", url: 'https://commons.wikimedia.org/wiki/File:Bowman%27s_capsule_and_glomerulus.svg', licenca: 'CC0', uso: 'figura anatômica de barreira glomerular.' },
    ],
  });
}

updateFiles();
updateData();
updateFigure();
updateRefs();

console.log('CM5 a10 atualizada com material, figura Wikimedia, essenciais e flashcards.');
