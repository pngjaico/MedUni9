import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const MARKER = 'cm5_quality_contract_2026_05_07';

function p(rel) {
  return path.join(ROOT, rel);
}

function readJson(rel) {
  return JSON.parse(fs.readFileSync(p(rel), 'utf8'));
}

function writeJson(rel, data) {
  fs.writeFileSync(p(rel), `${JSON.stringify(data, null, 2)}\n`, 'utf8');
}

function writeText(rel, text) {
  fs.mkdirSync(path.dirname(p(rel)), { recursive: true });
  fs.writeFileSync(p(rel), `${text.replace(/\r\n/g, '\n').replace(/\n*$/, '')}\n`, 'utf8');
}

function buildExplanation(general, optionExplanations) {
  return [
    `Resumo: ${general}`,
    `A) ${optionExplanations.A}`,
    `B) ${optionExplanations.B}`,
    `C) ${optionExplanations.C}`,
    `D) ${optionExplanations.D}`,
  ].join('\n');
}

function q(aulaId, dificuldade, casoClinico, enunciado, opcoes, correta, general, exp) {
  return {
    materia: 'clinica_medica5',
    tema: aulaId,
    aula_id: aulaId,
    modulo: 5,
    dificuldade,
    caso_clinico: casoClinico,
    essencial: true,
    origem: MARKER,
    enunciado,
    opcoes,
    correta,
    explicacao_geral: general,
    explicacoes_opcoes: exp,
    explicacao: buildExplanation(general, exp),
  };
}

function fc(aulaId, dificuldade, frente, verso, explicacao, categoria, tags) {
  return {
    materia: 'clinica_medica5',
    tema: aulaId,
    dificuldade,
    frente,
    verso,
    explicacao,
    origem: MARKER,
    categoria,
    tags,
  };
}

function a1ExtraQuestions() {
  return [
    q(
      'cm5_a1',
      2,
      false,
      'Durante aferição ambulatorial da pressão arterial, qual detalhe técnico reduz erro sistemático de classificação?',
      [
        'A) Medir com o braço apoiado na altura do coração, após repouso, usando manguito adequado.',
        'B) Medir sempre sobre a roupa para manter conforto térmico.',
        'C) Usar manguito pequeno em braço grande para aumentar sensibilidade diagnóstica.',
        'D) Considerar apenas a primeira medida, mesmo se houver diferença importante.'
      ],
      0,
      'A técnica de medida muda o diagnóstico. Braço sem apoio, manguito inadequado e ausência de repouso tendem a superestimar ou subestimar a PA.',
      {
        A: 'CORRETA: posição, repouso e manguito adequado são pré-analíticos obrigatórios.',
        B: 'INCORRETA: roupa interfere no posicionamento e na compressão do manguito.',
        C: 'INCORRETA: manguito pequeno em braço grande superestima a pressão.',
        D: 'INCORRETA: medidas repetidas e média são mais confiáveis que medida isolada.'
      }
    ),
    q(
      'cm5_a1',
      2,
      false,
      'Adulto com PA 146x92 mmHg confirmada, baixo risco cardiovascular global e sem lesão de órgão-alvo pergunta se precisa iniciar remédio imediatamente. Qual conduta é mais coerente?',
      [
        'A) Orientar mudança de estilo de vida, reavaliar em curto prazo e iniciar fármaco se persistir fora da meta.',
        'B) Internar para nitroprussiato porque toda PA acima de 140x90 é emergência.',
        'C) Ignorar o achado porque baixo risco exclui hipertensão.',
        'D) Prescrever dupla terapia obrigatória para todo estágio 1 sem exceção.'
      ],
      0,
      'No estágio 1 de baixo risco, a decisão inicial pode priorizar medidas não farmacológicas com reavaliação, desde que o seguimento seja garantido.',
      {
        A: 'CORRETA: baixo risco permite tentativa estruturada de medidas de estilo de vida.',
        B: 'INCORRETA: emergência depende de lesão aguda de órgão-alvo.',
        C: 'INCORRETA: baixo risco não anula o diagnóstico pressórico.',
        D: 'INCORRETA: dupla terapia universal é exagero para estágio 1 de baixo risco.'
      }
    ),
    q(
      'cm5_a1',
      3,
      true,
      'Homem de 64 anos, diabético, tabagista, com PA 148x94 mmHg confirmada e microalbuminúria. Sem sintomas agudos. Qual raciocínio terapêutico está correto?',
      [
        'A) Tratar apenas com dieta por 12 meses, pois estágio 1 nunca recebe fármaco no início.',
        'B) Iniciar tratamento farmacológico associado a medidas de estilo de vida, pois o risco cardiovascular é alto.',
        'C) Usar clonidina de resgate sempre que a PAS passar de 140 mmHg.',
        'D) Evitar IECA/BRA porque albuminúria contraindica bloqueio do sistema renina-angiotensina.'
      ],
      1,
      'Diabetes, tabagismo e albuminúria elevam risco. Em alto risco, o tratamento medicamentoso não deve ficar esperando meses de observação.',
      {
        A: 'INCORRETA: estágio 1 de alto risco costuma exigir fármaco desde o início.',
        B: 'CORRETA: risco alto muda a urgência terapêutica, mesmo sem sintomas.',
        C: 'INCORRETA: clonidina de resgate não é estratégia crônica de qualidade.',
        D: 'INCORRETA: albuminúria favorece IECA/BRA quando não houver contraindicação.'
      }
    ),
    q(
      'cm5_a1',
      3,
      true,
      'Paciente chega com dor torácica dorsal lancinante, diferença de PA entre membros e suspeita de dissecção aguda de aorta. PA 210x120 mmHg e FC 112 bpm. Qual sequência anti-hipertensiva evita piorar o estresse de parede?',
      [
        'A) Nitroprussiato isolado antes de controlar a frequência cardíaca.',
        'B) Hidralazina intravenosa como primeira opção por vasodilatação arterial direta.',
        'C) Betabloqueador intravenoso primeiro; depois vasodilatador se necessário.',
        'D) Diurético de alça isolado até normalizar a pressão.'
      ],
      2,
      'Na dissecção aórtica, reduzir pressão sem controlar dP/dt pode aumentar cisalhamento. Betabloqueio vem antes do vasodilatador.',
      {
        A: 'INCORRETA: vasodilatação isolada pode gerar taquicardia reflexa.',
        B: 'INCORRETA: hidralazina aumenta resposta simpática e não é primeira linha nesse cenário.',
        C: 'CORRETA: beta bloqueio reduz frequência e força de ejeção antes da vasodilatação.',
        D: 'INCORRETA: diurético não resolve o mecanismo agudo da dissecção.'
      }
    ),
    q(
      'cm5_a1',
      3,
      true,
      'Mulher de 71 anos chega com dispneia intensa, crepitações difusas, SatO2 86%, PA 224x126 mmHg e sinais de edema agudo de pulmão. Qual classificação e lógica de conduta estão corretas?',
      [
        'A) Urgência hipertensiva; reduzir lentamente em semanas.',
        'B) Emergência hipertensiva; há lesão aguda de órgão-alvo e necessidade de terapia intravenosa monitorizada.',
        'C) Hipertensão do avental branco; confirmar apenas com MRPA.',
        'D) Pseudocrise ansiosa; sedar e liberar sem investigação.'
      ],
      1,
      'Edema agudo de pulmão é lesão aguda de órgão-alvo. O manejo deve ser monitorizado e não se confunde com PA alta assintomática.',
      {
        A: 'INCORRETA: dispneia hipoxêmica com congestão define gravidade aguda.',
        B: 'CORRETA: emergência é definida pelo dano agudo, não só pelo número da PA.',
        C: 'INCORRETA: MAPA/MRPA não é a prioridade diante de insuficiência respiratória.',
        D: 'INCORRETA: ansiedade não explica crepitações difusas e hipoxemia.'
      }
    ),
    q(
      'cm5_a1',
      2,
      true,
      'Homem de 58 anos inicia IECA por HAS e apresenta elevação importante de creatinina dias depois. Há sopro abdominal e doença aterosclerótica periférica. Qual causa secundária deve subir no diferencial?',
      [
        'A) Hipertensão renovascular por estenose de artéria renal.',
        'B) Hipertensão do avental branco sem repercussão sistêmica.',
        'C) Síndrome de Cushing descartada apenas pelo uso de IECA.',
        'D) Coarctação de aorta típica do idoso aterosclerótico.'
      ],
      0,
      'Piora relevante da função renal após IECA/BRA, sopro abdominal e aterosclerose sugerem doença renovascular.',
      {
        A: 'CORRETA: o bloqueio do SRAA pode descompensar filtração quando há estenose renal significativa.',
        B: 'INCORRETA: avental branco não explica creatinina subindo após IECA.',
        C: 'INCORRETA: Cushing tem outro conjunto de pistas e não é descartado por IECA.',
        D: 'INCORRETA: coarctação é causa de HAS em jovens, com diferença de pulsos/PA entre membros.'
      }
    ),
    q(
      'cm5_a1',
      2,
      true,
      'Paciente jovem tem crises paroxísticas de cefaleia, sudorese, palpitações e picos pressóricos. Entre as causas secundárias de HAS, qual triagem inicial é mais apropriada?',
      [
        'A) Relação aldosterona/renina, pois toda HAS paroxística é hiperaldosteronismo.',
        'B) Dosagem de metanefrinas plasmáticas livres ou urinárias fracionadas.',
        'C) Teste ergométrico como exame confirmatório de feocromocitoma.',
        'D) MAPA isolado para excluir causa endócrina.'
      ],
      1,
      'A tríade adrenérgica paroxística sugere feocromocitoma/paraganglioma. A triagem bioquímica se baseia em metanefrinas.',
      {
        A: 'INCORRETA: hiperaldosteronismo costuma lembrar HAS com hipocalemia, não crise adrenérgica clássica.',
        B: 'CORRETA: metanefrinas são o caminho inicial para excesso catecolaminérgico.',
        C: 'INCORRETA: teste ergométrico não confirma feocromocitoma.',
        D: 'INCORRETA: MAPA documenta padrão pressórico, mas não fecha etiologia endócrina.'
      }
    ),
  ];
}

function a2Questions() {
  return [
    q('cm5_a2', 1, false, 'Em um eletrocardiograma padrão, qual calibração deve ser checada antes de interpretar voltagem e intervalo?', ['A) Velocidade de 25 mm/s e amplitude de 10 mm/mV.', 'B) Velocidade de 10 mm/s e amplitude de 25 mm/mV.', 'C) Apenas o nome do paciente, pois calibração não altera leitura clínica.', 'D) Velocidade variável escolhida automaticamente sem registro.'], 0, 'A calibração padrão permite transformar quadradinhos em tempo e milímetros em voltagem.', { A: 'CORRETA: 25 mm/s e 10 mm/mV são a base da leitura convencional.', B: 'INCORRETA: inverte os parâmetros e levaria a erro de tempo e voltagem.', C: 'INCORRETA: identificação é obrigatória, mas calibração também é.', D: 'INCORRETA: velocidade diferente precisa estar explícita.' }),
    q('cm5_a2', 2, false, 'Em ritmo regular, há 4 quadrados grandes entre dois complexos QRS consecutivos. Qual é a frequência cardíaca aproximada?', ['A) 300 bpm.', 'B) 150 bpm.', 'C) 75 bpm.', 'D) 40 bpm.'], 2, 'Na velocidade padrão, a regra 300/número de quadrados grandes estima a frequência em ritmo regular.', { A: 'INCORRETA: 300 bpm corresponderia a 1 quadrado grande.', B: 'INCORRETA: 150 bpm corresponderia a 2 quadrados grandes.', C: 'CORRETA: 300 dividido por 4 = 75 bpm.', D: 'INCORRETA: 40 bpm exigiria cerca de 7 a 8 quadrados grandes.' }),
    q('cm5_a2', 2, false, 'Qual conjunto define melhor ritmo sinusal em um ECG de 12 derivações?', ['A) Onda P antes de cada QRS, positiva em DII e negativa em aVR, com relação P:QRS 1:1.', 'B) QRS largo e irregular, independentemente da presença de onda P.', 'C) Ausência de onda P com intervalo RR irregularmente irregular.', 'D) Qualquer ritmo com frequência entre 60 e 100 bpm.'], 0, 'Ritmo sinusal exige origem atrial sinusal, não apenas frequência normal.', { A: 'CORRETA: esse padrão indica ativação atrial compatível com nó sinusal.', B: 'INCORRETA: QRS largo e irregular sugere outro problema de condução ou ritmo.', C: 'INCORRETA: ausência de P e irregularidade lembram fibrilação atrial.', D: 'INCORRETA: frequência normal não prova origem sinusal.' }),
    q('cm5_a2', 2, false, 'Pelo método rápido do eixo, QRS predominantemente positivo em DI e negativo em aVF sugere qual achado?', ['A) Eixo normal obrigatório.', 'B) Desvio de eixo para a esquerda ou zona limítrofe a depender de DII.', 'C) Desvio de eixo para a direita franco.', 'D) Eixo indeterminado com DI e aVF negativos.'], 1, 'DI positivo e aVF negativo deslocam o vetor para o quadrante superior esquerdo; DII ajuda a separar normal limítrofe de desvio esquerdo.', { A: 'INCORRETA: não é automaticamente normal.', B: 'CORRETA: DII diferencia eixo entre 0 e -30 de desvio menor que -30 graus.', C: 'INCORRETA: desvio direito costuma ter DI negativo e aVF positivo.', D: 'INCORRETA: eixo extremo ocorre com DI e aVF negativos.' }),
    q('cm5_a2', 2, false, 'Um ECG mostra intervalo PR de 240 ms, QRS estreito e todas as ondas P conduzidas. Qual interpretação é mais adequada?', ['A) Bloqueio atrioventricular de primeiro grau.', 'B) Bloqueio atrioventricular total.', 'C) Taquicardia ventricular sustentada.', 'D) Fibrilação atrial.'], 0, 'PR prolongado com condução 1:1 define bloqueio AV de primeiro grau.', { A: 'CORRETA: PR maior que 200 ms com QRS conduzido é BAV de primeiro grau.', B: 'INCORRETA: BAV total tem dissociação AV.', C: 'INCORRETA: taquicardia ventricular exige ritmo ventricular rápido, geralmente QRS largo.', D: 'INCORRETA: fibrilação atrial não tem ondas P organizadas.' }),
    q('cm5_a2', 2, false, 'Qual achado torna um QRS largo e muda imediatamente o diferencial para bloqueio de ramo, ritmo ventricular ou pré-excitação?', ['A) QRS >= 120 ms.', 'B) PR de 160 ms.', 'C) Onda P positiva em DII.', 'D) Intervalo RR regular.'], 0, 'QRS largo é definido por duração aumentada, não por regularidade ou morfologia isolada de P.', { A: 'CORRETA: 120 ms é o corte prático para QRS alargado em adultos.', B: 'INCORRETA: PR de 160 ms é normal.', C: 'INCORRETA: P positiva em DII sugere ritmo sinusal, mas não define QRS.', D: 'INCORRETA: regularidade do RR não mede duração ventricular.' }),
    q('cm5_a2', 3, true, 'Homem de 62 anos chega com dor torácica há 50 minutos. ECG mostra supra de ST em DII, DIII e aVF, com infra em DI e aVL. Qual leitura topográfica é prioritária?', ['A) Infarto com supra de parede inferior, com alterações recíprocas laterais altas.', 'B) Pericardite difusa obrigatória, pois qualquer supra é global.', 'C) Sobrecarga ventricular esquerda isolada sem síndrome coronariana.', 'D) Alteração inespecífica sem necessidade de conduta tempo-dependente.'], 0, 'Supra em derivações contíguas inferiores com alterações recíprocas sugere IAM com supra de ST e demanda reperfusão conforme contexto.', { A: 'CORRETA: DII, DIII e aVF mapeiam parede inferior; DI/aVL podem mostrar recíprocas.', B: 'INCORRETA: pericardite tende a supra difuso e padrão clínico diferente.', C: 'INCORRETA: dor típica com supra regional não deve ser reduzida a sobrecarga.', D: 'INCORRETA: esse é um padrão tempo-dependente.' }),
    q('cm5_a2', 3, true, 'Mulher de 70 anos, diabética, apresenta dor torácica e sudorese. ECG sem supra, mas com infradesnivelamento de ST horizontal em V4-V6 e troponina elevada. Qual interpretação é mais coerente?', ['A) Isquemia subendocárdica compatível com SCA sem supra, se o quadro clínico apoiar.', 'B) ECG normal, pois só supra de ST tem valor diagnóstico.', 'C) Bloqueio AV total por definição.', 'D) Hipercalemia clássica isolada.'], 0, 'Infra de ST horizontal/descendente em território compatível, com sintomas e troponina, sustenta SCA sem supra.', { A: 'CORRETA: SCA sem supra depende da integração entre sintomas, ECG e biomarcadores.', B: 'INCORRETA: infra de ST pode ser achado isquêmico importante.', C: 'INCORRETA: bloqueio AV é distúrbio de condução, não descrito pelo ST.', D: 'INCORRETA: hipercalemia típica cursa com ondas T apiculadas e outros achados.' }),
    q('cm5_a2', 2, true, 'Paciente com doença renal crônica chega com fraqueza. ECG mostra ondas T altas, estreitas e apiculadas difusas. Qual distúrbio deve ser investigado de imediato?', ['A) Hipocalemia grave.', 'B) Hipercalemia.', 'C) Hipocalcemia isolada.', 'D) Hipotireoidismo subclínico.'], 1, 'Ondas T apiculadas difusas em paciente renal lembram hipercalemia, uma emergência eletrolítica.', { A: 'INCORRETA: hipocalemia tende a onda U, achatamento de T e depressão de ST.', B: 'CORRETA: hipercalemia altera repolarização e pode evoluir para alargamento de QRS.', C: 'INCORRETA: hipocalcemia prolonga QT, não causa T apiculada típica.', D: 'INCORRETA: hipotireoidismo não explica esse padrão agudo.' }),
    q('cm5_a2', 2, false, 'Qual achado de intervalo deve acender alerta para risco de torsades de pointes, especialmente se houver fármacos ou distúrbios eletrolíticos associados?', ['A) QTc muito prolongado, particularmente acima de 500 ms.', 'B) PR de 160 ms.', 'C) QRS de 90 ms.', 'D) Eixo elétrico entre 0 e +90 graus.'], 0, 'QTc muito prolongado aumenta risco de arritmia ventricular polimórfica, sobretudo com hipocalemia, hipomagnesemia ou fármacos.', { A: 'CORRETA: QTc acima de 500 ms é marcador prático de alto risco.', B: 'INCORRETA: PR de 160 ms é normal.', C: 'INCORRETA: QRS de 90 ms é estreito.', D: 'INCORRETA: eixo normal não prediz torsades.' }),
    q('cm5_a2', 3, true, 'Durante monitorização, o traçado parece irregular e caótico, mas o paciente está conversando, com pulso radial regular e eletrodos parcialmente soltos. Qual atitude evita erro grave?', ['A) Tratar como fibrilação ventricular sem checar o paciente.', 'B) Correlacionar o traçado com pulso, clínica e qualidade dos eletrodos antes de rotular arritmia.', 'C) Ignorar todo ECG de monitor porque nunca tem utilidade.', 'D) Anticoagular imediatamente por fibrilação atrial confirmada.'], 1, 'Artefato pode simular arritmia grave. ECG nunca deve ser interpretado separado do paciente e da qualidade técnica.', { A: 'INCORRETA: choque indevido por artefato é erro grave.', B: 'CORRETA: olhar o paciente e checar eletrodos é parte da interpretação.', C: 'INCORRETA: monitor tem utilidade, mas precisa de correlação.', D: 'INCORRETA: FA exige padrão eletrocardiográfico verdadeiro, não artefato.' }),
    q('cm5_a2', 2, false, 'Na leitura sistemática do ECG, por que comparar com traçados prévios é uma etapa de alto rendimento?', ['A) Porque todo achado antigo é automaticamente benigno.', 'B) Porque mudanças novas de ST-T, QRS ou ritmo podem ter significado agudo maior que alterações crônicas estáveis.', 'C) Porque dispensa história clínica e troponina.', 'D) Porque substitui a calibração do exame atual.'], 1, 'ECG é exame comparativo. Alteração nova pesa mais no raciocínio agudo que alteração antiga estável.', { A: 'INCORRETA: achado antigo pode ser importante, mas tende a reduzir suspeita de evento agudo se estável.', B: 'CORRETA: novidade temporal muda a probabilidade diagnóstica.', C: 'INCORRETA: ECG não substitui clínica e biomarcadores.', D: 'INCORRETA: calibração continua obrigatória no traçado atual.' }),
  ];
}

function a2Flashcards() {
  return [
    fc('cm5_a2', 1, 'No ECG padrão, cada quadradinho pequeno no eixo horizontal vale {{c1::0,04 s}}.', '0,04 s', 'Com velocidade de 25 mm/s, 1 mm corresponde a 0,04 segundo; quadrado grande vale 0,20 segundo.', 'calibracao', ['cm5', 'ecg', 'calibracao']),
    fc('cm5_a2', 1, 'A calibração vertical padrão do ECG é {{c1::10 mm/mV}}.', '10 mm/mV', 'Se a calibração mudar, a interpretação de baixa voltagem ou sobrecarga ventricular pode ficar errada.', 'calibracao', ['cm5', 'ecg', 'voltagem']),
    fc('cm5_a2', 1, 'Em ritmo regular, frequência cardíaca ≈ {{c1::300 / quadrados grandes entre R-R}}.', '300 / quadrados grandes', 'A regra só funciona bem em ritmo regular; em irregular, conte QRS em 10 segundos e multiplique por 6.', 'frequencia', ['cm5', 'ecg', 'frequencia']),
    fc('cm5_a2', 2, 'Ritmo sinusal exige P antes de cada QRS, P positiva em DII e {{c1::negativa em aVR}}.', 'P negativa em aVR', 'Frequência normal sem esse padrão não prova origem sinusal.', 'ritmo', ['cm5', 'ecg', 'ritmo-sinusal']),
    fc('cm5_a2', 2, 'No método rápido do eixo, DI positivo e aVF positivo indicam eixo {{c1::normal}}.', 'Normal', 'DI e aVF colocam o vetor nos quadrantes. DII ajuda nos casos limítrofes.', 'eixo', ['cm5', 'ecg', 'eixo']),
    fc('cm5_a2', 2, 'PR normal mede {{c1::120-200 ms}}.', '120-200 ms', 'PR maior que 200 ms com condução 1:1 sugere bloqueio AV de primeiro grau.', 'intervalos', ['cm5', 'ecg', 'pr']),
    fc('cm5_a2', 2, 'QRS largo em adulto é QRS {{c1::>= 120 ms}}.', '>= 120 ms', 'QRS largo muda o diferencial para bloqueio de ramo, ritmo ventricular ou pré-excitação.', 'intervalos', ['cm5', 'ecg', 'qrs']),
    fc('cm5_a2', 3, 'QTc muito prolongado, especialmente {{c1::> 500 ms}}, aumenta risco de torsades.', '> 500 ms', 'Corrija eletrólitos e revise fármacos que prolongam QT quando esse achado aparece.', 'intervalos', ['cm5', 'ecg', 'qtc']),
    fc('cm5_a2', 2, 'Supra de ST em derivações contíguas com recíprocas sugere {{c1::IAM com supra}} no contexto correto.', 'IAM com supra', 'Topografia depende das derivações: inferiores DII/DIII/aVF, anteriores V1-V4, laterais DI/aVL/V5-V6.', 'isquemia', ['cm5', 'ecg', 'stemi']),
    fc('cm5_a2', 2, 'Infra de ST horizontal/descendente em dor torácica sugere {{c1::isquemia subendocárdica}}.', 'Isquemia subendocárdica', 'A interpretação depende de sintomas, troponina e comparação com ECG prévio.', 'isquemia', ['cm5', 'ecg', 'st']),
    fc('cm5_a2', 2, 'Ondas T altas, estreitas e apiculadas em paciente renal lembram {{c1::hipercalemia}}.', 'Hipercalemia', 'Hipercalemia pode evoluir para alargamento de QRS e arritmia fatal.', 'eletrolitos', ['cm5', 'ecg', 'hipercalemia']),
    fc('cm5_a2', 3, 'Traçado caótico com paciente bem e pulso regular deve levantar suspeita de {{c1::artefato}}.', 'Artefato', 'Correlacione ECG com paciente, pulso e eletrodos antes de diagnosticar arritmia grave.', 'tecnica', ['cm5', 'ecg', 'artefato']),
  ];
}

function cm5A2Material() {
  return [
    '---',
    'aula_id: cm5_a2',
    'materia: clinica_medica5',
    'modulo: 5',
    'tema: Interpretação do Eletrocardiograma',
    'versao_v3: 3.0.0',
    'status: published_local',
    'revisado_em: 2026-05-07',
    'checksum_lint: pass_pending',
    '---',
    '',
    '# Interpretação do Eletrocardiograma',
    '',
    '**Disciplina:** Clínica Médica 5',
    '**Módulo:** 5 | **Referência principal:** AHA/ACCF/HRS Standardization and Interpretation of the Electrocardiogram + Cecil-Goldman 26ª ed.',
    '**Tempo de estudo sugerido:** 18-25 min',
    '',
    '---',
    '',
    '## Relevância Clínica e Acadêmica',
    '',
    'Aqui no MedGradPlus a gente trata ECG como **alfabetização clínica**: antes de discutir insuficiência cardíaca, arritmia, coronária ou distúrbio eletrolítico, o aluno precisa saber ler o traçado sem pular etapas. Prova de residência não cobra apenas "o que é onda P"; ela cobra **ritmo**, **frequência**, **eixo**, **intervalos**, **QRS largo**, **alteração de ST-T** e, principalmente, se você consegue separar urgência real de artefato.',
    '',
    'No pronto atendimento, ECG é exame de decisão em minutos. Um supra de ST verdadeiro muda porta-balão; uma hipercalemia com QRS alargando muda sala de emergência; um artefato confundido com fibrilação ventricular causa conduta absurda. A leitura precisa ser **sistemática**, não intuitiva.',
    '',
    '> **Pegadinha de prova:** nunca comece pelo diagnóstico final escrito pela máquina. O laudo automático erra justamente nos cenários que mais caem: bloqueios, artefato, supra discreto, sobrecarga e ritmos irregulares.',
    '',
    '---',
    '',
    '### Figura sugerida',
    '',
    '**Figura-ID:** `CM5-A2-F01`',
    '',
    '- **Momento:** logo após a relevância clínica, antes do roteiro de leitura.',
    '- **Descrição técnica:** ECG de 12 derivações normal, usado como mapa visual para localizar derivações, calibração e morfologia basal.',
    '- **Busca Commons (PT):** eletrocardiograma 12 derivações normal',
    '- **Busca Commons (EN):** normal 12 lead electrocardiogram',
    '- **Legenda rascunho:** ECG normal de 12 derivações: antes de reconhecer doença, reconheça o padrão basal.',
    '',
    '---',
    '',
    '## Calibração e qualidade técnica',
    '',
    'Antes de qualquer diagnóstico, confirme três coisas simples:',
    '',
    '1. **Nome e data** do paciente.',
    '2. **Velocidade do papel:** geralmente **25 mm/s**.',
    '3. **Amplitude:** geralmente **10 mm/mV**.',
    '',
    '| Item | Valor padrão | Como usar na prova |',
    '|---|---|---|',
    '| **Quadradinho pequeno** | 0,04 s | Medir PR, QRS, QT |',
    '| **Quadrado grande** | 0,20 s | Estimar frequência |',
    '| **Amplitude vertical** | 10 mm/mV | Baixa voltagem, sobrecarga |',
    '| **Linha de base** | estável | Artefato vs ST verdadeiro |',
    '',
    '> **Pérola Clínica:** se a linha de base está tremendo, se uma derivação sumiu ou se o paciente está conversando com "fibrilação ventricular" no monitor, pense em **artefato** antes de tratar uma arritmia inexistente.',
    '',
    '**Macete MedGradPlus - 25/10 antes de tudo:** 25 mm/s no tempo, 10 mm/mV na voltagem. Se isso não está certo, qualquer medida depois vira chute sofisticado.',
    '',
    '---',
    '',
    '## Roteiro em 8 passos',
    '',
    'Leia sempre na mesma ordem. A banca tenta te puxar para o achado chamativo; o método impede isso.',
    '',
    '1. **Identificação e calibração**.',
    '2. **Frequência cardíaca**.',
    '3. **Ritmo**.',
    '4. **Eixo elétrico**.',
    '5. **Intervalos:** PR, QRS, QT/QTc.',
    '6. **Morfologia do QRS:** bloqueio, sobrecarga, onda Q.',
    '7. **ST-T:** supra, infra, inversão, onda T apiculada.',
    '8. **Comparação com ECG prévio**.',
    '',
    '| Passo | Pergunta objetiva | Erro comum |',
    '|---|---|---|',
    '| **Frequência** | Está rápido, lento ou normal? | Usar 300 sem ritmo regular |',
    '| **Ritmo** | Toda P conduz QRS? | Chamar tudo de sinusal |',
    '| **Eixo** | DI e aVF apontam para onde? | Ignorar desvio esquerdo |',
    '| **Intervalos** | PR, QRS e QTc estão normais? | Não medir QRS largo |',
    '| **ST-T** | Há alteração regional ou difusa? | Confundir pericardite com IAM |',
    '',
    '> **Armadilha de banca:** ECG não é caça-palavra. Se você viu supra de ST, ainda precisa perguntar: derivações contíguas? há recíprocas? há clínica? há bloqueio de ramo? há ECG prévio?',
    '',
    '---',
    '',
    '## Frequência cardíaca',
    '',
    'Em ritmo **regular**, use a regra:',
    '',
    '- **300 / número de quadrados grandes entre R-R**.',
    '- 1 quadrado grande = 300 bpm.',
    '- 2 quadrados grandes = 150 bpm.',
    '- 3 quadrados grandes = 100 bpm.',
    '- 4 quadrados grandes = 75 bpm.',
    '- 5 quadrados grandes = 60 bpm.',
    '- 6 quadrados grandes = 50 bpm.',
    '',
    'Em ritmo **irregular**, não use essa regra como verdade. Conte os QRS em 10 segundos e multiplique por 6.',
    '',
    '> **Macete MedGradPlus - 300 desce a escada:** 300, 150, 100, 75, 60, 50. Se o ritmo é regular, essa escada resolve a frequência em segundos.',
    '',
    '---',
    '',
    '## Ritmo sinusal e arritmias básicas',
    '',
    'Ritmo sinusal exige:',
    '',
    '- **Onda P antes de cada QRS**.',
    '- **Relação P:QRS 1:1**.',
    '- P positiva em **DII**.',
    '- P negativa em **aVR**.',
    '- Intervalo PR relativamente constante.',
    '',
    'Não confunda **frequência normal** com ritmo sinusal. Um ritmo juncional pode ter frequência aceitável; fibrilação atrial pode às vezes não estar muito rápida; marca-passo pode capturar com QRS regular. O critério é morfológico e relacional.',
    '',
    '| Achado | Sugestão | Próximo passo mental |',
    '|---|---|---|',
    '| **Sem P organizada + RR irregular** | fibrilação atrial | confirmar irregularmente irregular |',
    '| **P antes de todo QRS + PR longo** | BAV 1º grau | medir PR |',
    '| **QRS largo regular rápido** | TV até prova em contrário | contexto e estabilidade |',
    '| **Traçado caótico + paciente bem** | artefato | checar pulso e eletrodos |',
    '',
    '---',
    '',
    '## Eixo elétrico',
    '',
    'O método rápido usa **DI** e **aVF**:',
    '',
    '| DI | aVF | Interpretação rápida |',
    '|---|---|---|',
    '| **positivo** | **positivo** | eixo normal |',
    '| **positivo** | **negativo** | eixo esquerdo ou limítrofe |',
    '| **negativo** | **positivo** | eixo direito |',
    '| **negativo** | **negativo** | eixo extremo |',
    '',
    'Quando DI é positivo e aVF negativo, olhe **DII**:',
    '',
    '- DII positivo: eixo entre 0 e -30 graus, pode ser normal limítrofe.',
    '- DII negativo: eixo menor que -30 graus, desvio esquerdo.',
    '',
    'Desvio de eixo não é diagnóstico isolado. Ele direciona hipóteses: hemibloqueio anterior esquerdo, sobrecarga ventricular, DPOC, TEP, bloqueios ou sequela de infarto.',
    '',
    '---',
    '',
    '## Intervalos: PR, QRS e QTc',
    '',
    '| Intervalo | Normal prático | Quando preocupa |',
    '|---|---|---|',
    '| **PR** | 120-200 ms | > 200 ms = BAV 1º grau |',
    '| **QRS** | < 120 ms | >= 120 ms = QRS largo |',
    '| **QTc** | depende de sexo e fórmula | > 500 ms = alto risco |',
    '',
    'O **PR** mede condução atrioventricular. PR longo com todas as ondas P conduzidas sugere **bloqueio AV de primeiro grau**.',
    '',
    'O **QRS** mede despolarização ventricular. QRS largo muda o jogo: bloqueio de ramo, ritmo ventricular, pré-excitação ou distúrbio metabólico grave entram no diferencial.',
    '',
    'O **QTc** precisa ser corrigido pela frequência. QTc muito prolongado, especialmente acima de 500 ms, aumenta risco de **torsades de pointes**.',
    '',
    '> **Pegadinha:** não chame "QRS bonito" de estreito sem medir. Em prova, o detalhe pode ser 120-140 ms, suficiente para mudar o diagnóstico.',
    '',
    '---',
    '',
    '## ST-T: isquemia, repolarização e eletrólitos',
    '',
    'A análise do ST-T deve responder quatro perguntas:',
    '',
    '1. O supra/infra está em **derivações contíguas**?',
    '2. Existe **alteração recíproca**?',
    '3. A clínica é compatível com síndrome coronariana?',
    '4. Há fator que explica pseudoalteração: bloqueio, hipertrofia, pericardite, repolarização precoce?',
    '',
    '| Padrão | Leitura provável | Cuidado |',
    '|---|---|---|',
    '| **Supra regional de ST** | IAM com supra | procurar recíprocas |',
    '| **Infra horizontal/descendente** | isquemia subendocárdica | integrar com troponina |',
    '| **Supra difuso + PR baixo** | pericardite | clínica pleurítica ajuda |',
    '| **T apiculada difusa** | hipercalemia | checar K+ urgente |',
    '| **T invertida profunda regional** | isquemia/reperfusão | comparar ECG prévio |',
    '',
    'Derivações por território:',
    '',
    '- **Inferior:** DII, DIII, aVF.',
    '- **Septal/anterior:** V1-V4.',
    '- **Lateral alta:** DI, aVL.',
    '- **Lateral baixa:** V5-V6.',
    '- **Posterior:** V7-V9 ou infra em V1-V3 com R alta, no contexto certo.',
    '',
    '---',
    '',
    '## Sobrecarga e bloqueios: o que não aprofundar aqui',
    '',
    'Esta aula ensina leitura inicial. Arritmias e condutas específicas vêm em `cm5_a4`. Ainda assim, o aluno precisa reconhecer sinais de alerta:',
    '',
    '- **QRS largo** não é detalhe.',
    '- **Bloqueio de ramo novo** em dor torácica exige cautela.',
    '- **Critérios de HVE** podem aparecer em hipertensos.',
    '- **Onda Q patológica** sugere necrose prévia ou infarto estabelecido.',
    '- **Baixa voltagem** pode lembrar derrame pericárdico, obesidade, DPOC ou hipotireoidismo.',
    '',
    'Critérios de sobrecarga, isoladamente, têm sensibilidade limitada. O ECG aponta; ecocardiograma confirma estrutura.',
    '',
    '---',
    '',
    '## Caso da Semana',
    '',
    '> **Caso da Semana - Dor torácica no corredor.**',
    '>',
    '> **Ato 1 (persona):** Homem, 61 anos, diabético e tabagista, chega com dor retroesternal opressiva há 45 minutos, sudorese e náuseas.',
    '>',
    '> **Ato 2 (dados):** PA 156x94, FC 92, SatO2 96%. ECG calibrado em 25 mm/s e 10 mm/mV mostra supra de ST em DII, DIII e aVF, com infra em DI e aVL.',
    '>',
    '> **Ato 3 (comando):**',
    '> 1. O ritmo é regular? Há P antes de cada QRS?',
    '> 2. Qual território está envolvido?',
    '> 3. Que achado reforça que o supra é isquêmico e não casual?',
    '>',
    '> Volte ao roteiro de 8 passos antes de responder. A pressa é a maior inimiga da leitura de ECG.',
    '',
    '---',
    '',
    '## Diagnóstico Diferencial do Traçado Alterado',
    '',
    '| Situação | O que parece | O que diferencia |',
    '|---|---|---|',
    '| **Artefato** | arritmia grave | paciente bem, pulso regular, eletrodo solto |',
    '| **Pericardite** | supra de ST | supra difuso, dor pleurítica, PR baixo |',
    '| **HVE** | alteração de repolarização | voltagem alta + strain lateral |',
    '| **Hipercalemia** | alteração de T/QRS | DRC, K+ alto, T apiculada difusa |',
    '| **IAM com supra** | supra regional | derivações contíguas + recíprocas |',
    '',
    '---',
    '',
    '## Conduta: quando o ECG muda o tempo',
    '',
    'O ECG não trata ninguém sozinho, mas antecipa prioridades:',
    '',
    '- Dor torácica + supra regional: acionar fluxo de reperfusão.',
    '- Suspeita de hipercalemia: dosar K+ e tratar se instabilidade/alterações típicas.',
    '- QRS largo em taquicardia regular: tratar como TV se houver dúvida e instabilidade.',
    '- QTc muito prolongado: corrigir eletrólitos e suspender fármacos de risco.',
    '- Artefato provável: checar paciente, pulso e eletrodos antes de medicar.',
    '',
    'Aqui no MedGradPlus a regra é simples: ECG é **exame de contexto**. O mesmo traçado pode mudar de significado dependendo da dor, do potássio, da troponina, da idade e do ECG prévio.',
    '',
    '---',
    '',
    '## Ponte com próximas aulas',
    '',
    '- `cm5_a3`: insuficiência cardíaca usa ECG para rastrear isquemia, HVE e ritmo.',
    '- `cm5_a4`: arritmias aprofunda FA, flutter, TSV, TV, bradiarritmias e bloqueios.',
    '- `cm5_a5`: doença coronariana usa ST-T, onda Q e teste provocativo.',
    '- `cm5_a6`: diabetes aumenta risco cardiovascular e muda pré-teste de SCA.',
    '- `cm5_a9`: DRC aumenta chance de hipercalemia e alterações de repolarização.',
    '',
    '---',
    '',
    '## Pontos-Chave',
    '',
    '- ECG começa por **identificação e calibração**.',
    '- Em ritmo regular, frequência = **300 / quadrados grandes**.',
    '- Ritmo sinusal exige **P antes de QRS**, P positiva em DII e negativa em aVR.',
    '- Eixo rápido usa **DI e aVF**.',
    '- PR normal: **120-200 ms**.',
    '- QRS largo: **>= 120 ms**.',
    '- QTc muito prolongado, especialmente **> 500 ms**, aumenta risco de torsades.',
    '- Supra de ST precisa ser **regional, contíguo e clínico**.',
    '- Infra de ST pode representar **isquemia subendocárdica**.',
    '- T apiculada difusa em renal crônico sugere **hipercalemia**.',
    '- Artefato se combate olhando **o paciente**, não só o monitor.',
    '',
    '---',
    '',
    '## Mini Quiz',
    '',
    '**1. ECG padrão mostra velocidade de 25 mm/s. Quanto vale um quadradinho pequeno no eixo horizontal?**',
    '',
    '- [ ] 0,20 s',
    '- [x] 0,04 s',
    '- [ ] 1,0 s',
    '- [ ] 0,12 s',
    '',
    '> **Explicação:** Em 25 mm/s, 1 mm corresponde a **0,04 s**; 5 mm (quadrado grande) correspondem a **0,20 s**.',
    '',
    '**2. Em ritmo regular, há 5 quadrados grandes entre dois R consecutivos. Qual a frequência aproximada?**',
    '',
    '- [ ] 100 bpm',
    '- [ ] 75 bpm',
    '- [x] 60 bpm',
    '- [ ] 50 bpm',
    '',
    '> **Explicação:** Pela regra **300 / quadrados grandes**, 300/5 = **60 bpm**.',
    '',
    '**3. Qual achado sustenta ritmo sinusal?**',
    '',
    '- [x] Onda P antes de cada QRS, positiva em DII e negativa em aVR',
    '- [ ] Ausência de onda P com RR irregular',
    '- [ ] QRS largo sem relação com onda P',
    '- [ ] Frequência entre 60 e 100 bpm, independentemente da P',
    '',
    '> **Explicação:** Ritmo sinusal não é apenas frequência normal. Precisa de **onda P sinusal** e condução organizada.',
    '',
    '**4. Homem de 61 anos com dor torácica tem supra de ST em DII, DIII e aVF, com infra em DI e aVL. Qual território e reforço diagnóstico?**',
    '',
    '- [ ] Parede anterior com alteração inespecífica',
    '- [x] Parede inferior com alterações recíprocas laterais altas',
    '- [ ] Pericardite difusa obrigatória',
    '- [ ] Hipercalemia isolada',
    '',
    '> **Explicação:** DII, DIII e aVF são derivações **inferiores**. Infra em DI/aVL funciona como alteração **recíproca**, reforçando isquemia regional.',
    '',
    '**5. Paciente renal crônico chega fraco; ECG mostra ondas T altas, estreitas e apiculadas difusas. Qual hipótese não pode ser perdida?**',
    '',
    '- [ ] Hipocalcemia',
    '- [ ] Hiponatremia',
    '- [x] Hipercalemia',
    '- [ ] Hipotireoidismo subclínico',
    '',
    '> **Explicação:** T apiculada difusa em DRC é pista de **hipercalemia**, que pode evoluir para QRS largo e arritmia fatal.',
    '',
    '**6. Monitor mostra traçado caótico, mas o paciente está acordado, falando e com pulso radial regular. Qual melhor conduta imediata?**',
    '',
    '- [ ] Chocar imediatamente sem tocar no paciente',
    '- [x] Checar pulso, clínica e eletrodos antes de rotular arritmia',
    '- [ ] Anticoagular por fibrilação atrial confirmada',
    '- [ ] Ignorar todos os ECGs de monitor',
    '',
    '> **Explicação:** Artefato pode simular arritmia grave. A leitura correta começa correlacionando **traçado + paciente + qualidade técnica**.',
    '',
    '---',
    '',
    '## Pré-Prova',
    '',
    '### Síntese para a prova',
    '',
    'Se a banca der ECG, leia em ordem: **calibração, frequência, ritmo, eixo, intervalos, QRS, ST-T e comparação**. O erro clássico é pular direto para "infarto" ou "arritmia" sem checar técnica, ritmo e derivações contíguas.',
    '',
    '### Macete-âncora',
    '',
    '**25/10, 300, P-DII, DI/aVF, PR-QRS-QTc, ST-T.**',
    '',
    '- **25/10:** calibração.',
    '- **300:** frequência em ritmo regular.',
    '- **P-DII:** ritmo sinusal.',
    '- **DI/aVF:** eixo.',
    '- **PR-QRS-QTc:** intervalos.',
    '- **ST-T:** isquemia, repolarização e eletrólitos.',
    '',
    '### Erros que derrubam nota',
    '',
    '- Chamar frequência normal de ritmo sinusal sem olhar onda P.',
    '- Usar a regra do 300 em ritmo irregular.',
    '- Ignorar QRS largo.',
    '- Interpretar supra de ST sem checar derivações contíguas.',
    '- Esquecer hipercalemia diante de T apiculada em paciente renal.',
    '- Tratar artefato como arritmia verdadeira.',
    '',
    '---',
    '',
    '## Fontes',
    '',
    '- American Heart Association / ACCF / HRS. **Recommendations for the Standardization and Interpretation of the Electrocardiogram**, partes I, III e IV.',
    '- Cecil-Goldman Medicine, 26ª edição, capítulos de abordagem cardiovascular e arritmias.',
    '- Harrison\'s Principles of Internal Medicine, 21ª edição, capítulos de eletrocardiografia clínica e síndrome coronariana.',
    '- American Heart Association. **Electrocardiogram (ECG or EKG)**, material institucional de educação em saúde.',
    '',
    '---',
    '',
    '## Questões de Residência (mapeadas)',
    '',
    '> Esta seção registra temas de provas públicas. Não transcrever enunciados no app; usar apenas para calibrar estilo e recorrência.',
    '',
    '- **ENAMED 2025, Caderno 01, Q16** - ECG em avaliação clínica e risco por baixo peso/exercício.',
    '- **ENAMED 2025, Caderno 01, Q67** - dor torácica, infradesnivelamento de ST e síndrome coronariana.',
    '- **ENARE 2024, Acesso Direto Tipo 1** - temas cardiovasculares com ritmo, pressão arterial e insuficiência cardíaca em cenário clínico.',
  ].join('\n');
}

function addOrReplaceFigureBlock(md, figId, block) {
  if (md.includes(`**Figura-ID:** \`${figId}\``)) return md;
  const re = /(## Relevância Clínica e Acadêmica[\s\S]*?\n---\n)/;
  if (re.test(md)) return md.replace(re, `$1\n${block}\n---\n\n`);
  return md.replace(/(# [^\n]+\n\n)/, `$1${block}\n---\n\n`);
}

function cm5A1FigureBlock() {
  return [
    '### Figura sugerida',
    '',
    '**Figura-ID:** `CM5-A1-F01`',
    '',
    '- **Momento:** após a relevância clínica, antes da definição diagnóstica.',
    '- **Descrição técnica:** aferição domiciliar de pressão arterial com aparelho automático, reforçando técnica e confirmação fora do consultório.',
    '- **Busca Commons (PT):** aferição pressão arterial domiciliar aparelho automático',
    '- **Busca Commons (EN):** checking blood pressure at home automatic monitor',
    '- **Legenda rascunho:** Medida fora do consultório ajuda a diferenciar hipertensão sustentada, avental branco e mascarada.',
  ].join('\n');
}

function updateA1Material() {
  for (const rel of [
    'data/materiais/clinica_medica5/cm5_a1.md',
    'materiais/modulo5/clinica_medica5/cm5_a1.md',
    'piloto/cm5_a1.md',
  ]) {
    if (!fs.existsSync(p(rel))) continue;
    let md = fs.readFileSync(p(rel), 'utf8').replace(/\r\n/g, '\n');
    md = md
      .replace(/Diretriz Brasileira de Hipertensão Arterial 2020 \(SBC\)/g, 'Diretriz Brasileira de Hipertensão Arterial 2025 (SBC/SBH/SBN)')
      .replace(/Diretriz Brasileira de HAS 2020/g, 'Diretriz Brasileira de HAS 2025')
      .replace(/SBC 2020/g, 'SBC/SBH/SBN 2025')
      .replace(/Diretrizes Brasileiras de Hipertensão Arterial - 2020/g, 'Diretriz Brasileira de Hipertensão Arterial - 2025');
    md = addOrReplaceFigureBlock(md, 'CM5-A1-F01', cm5A1FigureBlock());
    writeText(rel, md);
  }
}

function updateJsonData() {
  const qData = readJson('data/questoes.json');
  let questoes = qData.questoes || [];
  questoes = questoes.filter((item) => item.origem !== MARKER);
  for (const item of questoes) {
    if (item.aula_id === 'cm5_a1' || item.tema === 'cm5_a1') {
      item.explicacao_geral = String(item.explicacao_geral || '').replace(/SBC 2020/g, 'diretriz brasileira atual');
      item.enunciado = String(item.enunciado || '').replace(/SBC 2020/g, 'diretriz brasileira atual');
      if (item.explicacao) item.explicacao = String(item.explicacao).replace(/SBC 2020/g, 'diretriz brasileira atual');
    }
  }
  const newQuestions = [...a1ExtraQuestions(), ...a2Questions()];
  let maxQ = Math.max(0, ...questoes.map((item) => Number(item.id) || 0));
  for (const item of newQuestions) item.id = ++maxQ;
  questoes.push(...newQuestions);
  writeJson('data/questoes.json', { ...qData, questoes });

  const fcData = readJson('data/flashcards.json');
  let flashcards = fcData.flashcards || [];
  flashcards = flashcards.filter((item) => item.origem !== MARKER);
  for (const item of flashcards) {
    if (item.tema === 'cm5_a1') {
      item.frente = String(item.frente || '').replace(/SBC 2020/g, 'diretriz brasileira atual');
      item.explicacao = String(item.explicacao || '').replace(/SBC 2020/g, 'diretriz brasileira atual');
    }
  }
  const newCards = a2Flashcards();
  let maxFc = Math.max(0, ...flashcards.map((item) => Number(item.id) || 0));
  for (const item of newCards) item.id = ++maxFc;
  flashcards.push(...newCards);
  writeJson('data/flashcards.json', { ...fcData, flashcards });
}

function updateFigures() {
  const data = readJson('data/materiais_figuras.json');
  const entries = (data.entries || []).filter((entry) => !['CM5-A1-F01', 'CM5-A2-F01'].includes(entry.id));
  entries.push(
    {
      id: 'CM5-A1-F01',
      modulo: 5,
      disciplina: 'clinica_medica5',
      aula: 'cm5_a1',
      caminhoMaterial: 'materiais/modulo5/clinica_medica5/cm5_a1.md',
      momento: 'Após Relevância Clínica e Acadêmica',
      descricaoVisual: 'Aferição domiciliar da pressão arterial com aparelho automático.',
      tipoSugerido: 'Foto contextual Wikimedia Commons.',
      buscaCommonsEn: 'checking blood pressure at home automatic monitor',
      buscaCommonsPt: 'aferição pressão arterial domiciliar aparelho automático',
      status: 'encontrada',
      urlImagem: 'https://upload.wikimedia.org/wikipedia/commons/8/82/Checking_blood_pressure_at_home.jpg',
      urlThumbnail: '',
      urlPaginaCommons: 'https://commons.wikimedia.org/wiki/File:Checking_blood_pressure_at_home.jpg',
      licenca: 'CC0 1.0 Public Domain Dedication',
      credito: 'Beendy234 / Wikimedia Commons',
      legenda: 'Medida domiciliar da pressão arterial: útil para confirmar HAS e investigar avental branco ou hipertensão mascarada.',
      notas: 'Arquivo Wikimedia Commons com licença CC0; imagem usada como apoio visual, não como substituto de técnica formal de aferição.',
    },
    {
      id: 'CM5-A2-F01',
      modulo: 5,
      disciplina: 'clinica_medica5',
      aula: 'cm5_a2',
      caminhoMaterial: 'materiais/modulo5/clinica_medica5/cm5_a2.md',
      momento: 'Após Relevância Clínica e Acadêmica',
      descricaoVisual: 'ECG normal de 12 derivações para orientar leitura sistemática.',
      tipoSugerido: 'Imagem Wikimedia Commons de traçado eletrocardiográfico.',
      buscaCommonsEn: 'normal 12 lead electrocardiogram',
      buscaCommonsPt: 'eletrocardiograma 12 derivações normal',
      status: 'encontrada',
      urlImagem: 'https://upload.wikimedia.org/wikipedia/commons/d/dc/Electrocardiogram_12derivations_male_23yo_Japanese.png',
      urlThumbnail: '',
      urlPaginaCommons: 'https://commons.wikimedia.org/wiki/File:Electrocardiogram_12derivations_male_23yo_Japanese.png',
      licenca: 'Public domain',
      credito: 'Tanadesuka~commonswiki / Wikimedia Commons',
      legenda: 'ECG normal de 12 derivações: referência visual para calibração, ritmo, eixo, intervalos e ST-T.',
      notas: 'Imagem em domínio público segundo metadata do Wikimedia Commons.',
    }
  );
  entries.sort((a, b) => String(a.id).localeCompare(String(b.id)));
  writeJson('data/materiais_figuras.json', { ...data, updatedAt: new Date().toISOString(), entries });
}

function writeMaterialsAndRefs() {
  const a2 = cm5A2Material();
  writeText('data/materiais/clinica_medica5/cm5_a2.md', a2);
  writeText('materiais/modulo5/clinica_medica5/cm5_a2.md', a2);

  const a1Refs = readJson('data/refs/cm5_a1.refs.json');
  a1Refs.diretrizes = [
    {
      titulo: 'Diretriz Brasileira de Hipertensão Arterial - 2025',
      instituicao: 'Sociedade Brasileira de Cardiologia / Sociedade Brasileira de Hipertensão / Sociedade Brasileira de Nefrologia',
      url: 'https://abccardiol.org/article/diretriz-brasileira-de-hipertensao-arterial-2025/',
      uso: 'referência nacional vigente para diagnóstico, estratificação, metas, tratamento e emergências hipertensivas',
    },
    ...(a1Refs.diretrizes || []).filter((d) => !String(d.titulo || '').includes('2020')),
  ];
  a1Refs.imagens = [
    {
      figura_id: 'CM5-A1-F01',
      fonte: 'Wikimedia Commons',
      url: 'https://commons.wikimedia.org/wiki/File:Checking_blood_pressure_at_home.jpg',
      licenca: 'CC0 1.0',
      status: 'catalogada_no_app',
    },
  ];
  a1Refs.revisado = false;
  a1Refs.observacoes = 'Atualizado para usar Diretriz Brasileira de Hipertensão Arterial 2025 como referência nacional vigente; questões públicas seguem mapeadas sem transcrição.';
  writeJson('data/refs/cm5_a1.refs.json', a1Refs);

  writeJson('data/refs/cm5_a2.refs.json', {
    aula_id: 'cm5_a2',
    materia: 'clinica_medica5',
    modulo: 5,
    tema: 'Interpretação do Eletrocardiograma',
    gerado_em: '2026-05-07',
    revisado: false,
    livros: [
      {
        titulo: 'Cecil-Goldman Medicine',
        edicao: '26ª edição',
        capitulo: 'Avaliação cardiovascular e eletrocardiografia clínica',
        relevancia: 'principal',
      },
      {
        titulo: "Harrison's Principles of Internal Medicine",
        edicao: '21ª edição',
        capitulo: 'Eletrocardiografia, dor torácica e síndrome coronariana',
        relevancia: 'complementar',
      },
    ],
    diretrizes: [
      {
        titulo: 'AHA/ACCF/HRS Recommendations for the Standardization and Interpretation of the Electrocardiogram',
        instituicao: 'American Heart Association / American College of Cardiology Foundation / Heart Rhythm Society',
        url: 'https://pubmed.ncbi.nlm.nih.gov/19228821/',
        uso: 'padronização de interpretação, intervalos, ST-T, QT e terminologia',
      },
      {
        titulo: 'Electrocardiogram (ECG or EKG)',
        instituicao: 'American Heart Association',
        url: 'https://www.heart.org/en/health-topics/heart-attack/diagnosing-a-heart-attack/electrocardiogram-ecg-or-ekg',
        uso: 'explicação institucional de finalidade do ECG e relação com ritmo/atividade elétrica cardíaca',
      },
    ],
    questoes_publicas: [
      {
        fonte: 'INEP ENAMED',
        ano: 2025,
        questao: '16',
        url: 'https://download.inep.gov.br/enamed/provas_e_gabaritos/2025_caderno_superampliado_preliminar.pdf',
        topico_mapeado: 'ECG em avaliação clínica e risco cardiovascular',
        status: 'mapeada_sem_transcricao',
        observacao: 'Usar como calibrador de estilo; não copiar enunciado.',
      },
      {
        fonte: 'INEP ENAMED',
        ano: 2025,
        questao: '67',
        url: 'https://download.inep.gov.br/enamed/provas_e_gabaritos/2025_caderno_superampliado_preliminar.pdf',
        topico_mapeado: 'dor torácica, infradesnivelamento de ST e síndrome coronariana',
        status: 'mapeada_sem_transcricao',
        observacao: 'Questão pública útil para calibrar integração ECG + clínica + biomarcador.',
      },
      {
        fonte: 'FGV/Ebserh ENARE',
        ano: 2024,
        questao: 'Acesso Direto - caderno tipo 1',
        url: 'https://mapa-vagas-enare-ebserh.conhecimento.fgv.br/provas-gabaritos-medica.html',
        topico_mapeado: 'temas cardiovasculares em acesso direto: ritmo, pressão arterial, insuficiência cardíaca e risco clínico',
        status: 'mapeada_sem_transcricao',
        observacao: 'Página oficial lista cadernos e gabaritos; triagem automatizada local identificou recorrência cardiovascular.',
      },
    ],
    imagens: [
      {
        figura_id: 'CM5-A2-F01',
        fonte: 'Wikimedia Commons',
        url: 'https://commons.wikimedia.org/wiki/File:Electrocardiogram_12derivations_male_23yo_Japanese.png',
        licenca: 'Public domain',
        status: 'catalogada_no_app',
      },
    ],
    pontos_de_prova: [
      'Calibração: 25 mm/s e 10 mm/mV.',
      'Frequência em ritmo regular: 300/quadrados grandes.',
      'Critérios de ritmo sinusal.',
      'Eixo por DI/aVF e papel de DII.',
      'PR, QRS e QTc.',
      'Supra/infra de ST por derivações contíguas.',
      'Hipercalemia e QTc prolongado.',
      'Artefato versus arritmia verdadeira.',
    ],
    observacoes: 'Questões públicas mapeadas por tema, sem transcrição. A aula é introdutória; arritmias completas ficam em cm5_a4.',
  });
}

function main() {
  updateA1Material();
  updateJsonData();
  updateFigures();
  writeMaterialsAndRefs();
  console.log('CM5 a1/a2 atualizadas com contrato de qualidade, imagens e essenciais.');
}

main();
