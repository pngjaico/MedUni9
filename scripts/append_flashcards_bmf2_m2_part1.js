/** BMF2 bmf2_a1–a8 × 12 — node scripts/append_flashcards_bmf2_m2_part1.js */
const fs = require('fs');
const path = require('path');
const OUT = path.join(__dirname, '..', 'data', 'flashcards.json');
function c(t, f, v, e, cat, o, tags) {
  return { materia: 'bmf2', tema: t, frente: f, verso: v, explicacao: e || '', dificuldade: 2, categoria: cat, origem: o, tags: tags || [] };
}
const LOTS = [
  [ // bmf2_a1
    c('bmf2_a1', 'Ordem fisiológica da condução cardíaca?', 'Nó SA → átrio → nó AV → feixe de His → ramos → Purkinje.', '', 'definicao', 'material', ['conducao']),
    c('bmf2_a1', 'Principal marcapasso fisiológico?', 'Nó sinoatrial (SA).', '', 'definicao', 'material', ['sa']),
    c('bmf2_a1', 'Função do atraso no nó AV?', 'Permite enchimento ventricular antes da sístole.', '', 'mecanismo', 'material', ['av']),
    c('bmf2_a1', 'Sistema de Purkinje: característica?', 'Condução rápida para sincronizar depolarização ventricular.', '', 'definicao', 'material', ['purkinje']),
    c('bmf2_a1', 'PA em célula marcapasso: traço típico?', 'Despolarização diastólica espontânea (fase 4).', '', 'prova', 'material', ['marcapasso']),
    c('bmf2_a1', 'PA ventricular: fase de platô depende de?', 'Entrada de Ca²⁺ (L-type) — prolonga refratariedade.', '', 'mecanismo', 'material', ['platô']),
    c('bmf2_a1', 'Refratariedade cardíaca evita?', 'Contração tetânica (como no esquelético).', '', 'definicao', 'material', ['refratariedade']),
    c('bmf2_a1', 'Automatismo vs velocidade de condução?', 'Automatismo = geração do impulso; condução = transmissão.', '', 'diferenciacao', 'material', ['automatismo']),
    c('bmf2_a1', 'Bloqueio AV de grau alto afeta principalmente?', 'Relação átrio–ventrículo (bradicardia, dissociação).', '', 'clinica', 'material', ['bloqueio']),
    c('bmf2_a1', 'Nó SA localização aproximada?', 'Junção SVC–átrio direito.', '', 'definicao', 'material', ['sa']),
    c('bmf2_a1', 'Potássio extracelular muito alto: efeito em PA?', 'Pode achatar fase 4, aplanar T e predispor a arritmias.', '', 'extra_livro', 'extra', ['k']),
    c('bmf2_a1', 'Digital: efeito típico na condução AV?', 'Aumenta vagotonia/atrasa AV — cuidado com bloqueio.', '', 'clinica', 'extra', ['digital']),
  ],
  [ // bmf2_a2
    c('bmf2_a2', 'Miócito cardíaco: união típica entre células?', 'Discos intercalares + junções comunicantes (gap).', '', 'definicao', 'material', ['miocardio']),
    c('bmf2_a2', 'Potencial de ação em músculo cardíaco trabalhador: platô?', 'Sim — difere do esquelético.', '', 'diferenciacao', 'material', ['platô']),
    c('bmf2_a2', 'Lei de Frank–Starling (conceito)?', 'Maior pré-carga → maior força de contração (até limite).', '', 'definicao', 'material', ['starling']),
    c('bmf2_a2', 'Inotropismo positivo aumenta?', 'Força contrátil (sem mudar comprimento inicial obrigatoriamente).', '', 'definicao', 'material', ['inotropo']),
    c('bmf2_a2', 'Cronotropismo refere-se a?', 'Frequência cardíaca.', '', 'definicao', 'material', ['cronotropo']),
    c('bmf2_a2', 'Dromotropismo refere-se a?', 'Velocidade de condução.', '', 'definicao', 'material', ['dromotropo']),
    c('bmf2_a2', 'Catecolaminas: efeito em FC e contratilidade?', '↑ cronotropismo e inotropismo (β1).', '', 'mecanismo', 'material', ['adrenalina']),
    c('bmf2_a2', 'Parassimpático (vago) no coração: efeito?', '↓ FC e ↓ velocidade condução AV.', '', 'mecanismo', 'material', ['vago']),
    c('bmf2_a2', 'Comprimento sarcomérico ótimo relaciona-se a?', 'Sobrecarga de volume (preload) e enchimento diastólico.', '', 'mecanismo', 'material', ['preload']),
    c('bmf2_a2', 'Tetânico o miocárdio ventricular? Por quê?', 'Não — refratariedade longa.', '', 'prova', 'material', ['tetania']),
    c('bmf2_a2', 'Insuficiência cardíaca: Starling deprimido significa?', 'Curva ventricular deslocada — menor SV para mesmo volume.', '', 'extra_livro', 'extra', ['ic']),
    c('bmf2_a2', 'Positivos inotrópicos exógenos: exemplo?', 'Dobutamina, milrinona (contexto de choque/IC descompensada).', '', 'clinica', 'extra', ['inotropico']),
  ],
  [ // bmf2_a3
    c('bmf2_a3', 'Circulação sistémica leva sangue?', 'Do VE para órgãos e volta ao AD.', '', 'definicao', 'material', ['sistemica']),
    c('bmf2_a3', 'Circulação pulmonar: origem e retorno?', 'VD → pulmão → AE.', '', 'definicao', 'material', ['pulmonar']),
    c('bmf2_a3', 'Artéria: parede típica?', 'Músculo liso e elástica — resistência e amortecimento de pulso.', '', 'definicao', 'material', ['arteria']),
    c('bmf2_a3', 'Vênula e veia: função capacitativa?', 'Reservatório de volume (compliance).', '', 'definicao', 'material', ['veia']),
    c('bmf2_a3', 'Capilar: troca?', 'Nutrientes/gases — parede fina.', '', 'definicao', 'material', ['capilar']),
    c('bmf2_a3', 'Aorta: tipo de artéria?', 'Elástica (grande complacência na sístole).', '', 'definicao', 'material', ['aorta']),
    c('bmf2_a3', 'Artérias musculares: papel em resistência?', 'Contribuem para resistência vascular periférica (RVP).', '', 'mecanismo', 'material', ['rvp']),
    c('bmf2_a3', 'Esfincter pré-capilar: regula?', 'Fluxo capilar local.', '', 'definicao', 'material', ['precapilar']),
    c('bmf2_a3', 'Pressão média capilar influencia?', 'Filtração transcapilar (Lei de Starling).', '', 'mecanismo', 'material', ['filtracao']),
    c('bmf2_a3', 'Circulação portal hepática: particularidade?', 'Dois capilares em série (intestino → fígado).', '', 'prova', 'material', ['portal']),
    c('bmf2_a3', 'Shunt direita-esquerda: exemplo fisiológico?', 'Algumas veias bronco pulmonares → átrio esquerdo.', '', 'extra_livro', 'extra', ['shunt']),
    c('bmf2_a3', 'Pós-carga ventricular esquerda relaciona-se a?', 'Impedância aórtica/pressão arterial (afterload).', '', 'extra', 'extra', ['pos-carga']),
  ],
  [ // bmf2_a4
    c('bmf2_a4', 'Valva tricúspide localiza-se entre?', 'AD e VD.', '', 'definicao', 'material', ['tricuspide']),
    c('bmf2_a4', 'Valva mitral entre?', 'AE e VE.', '', 'definicao', 'material', ['mitral']),
    c('bmf2_a4', 'Valvas semilunares pulmonar e aórtica fecham no?', 'Início da diástole (após ejeção) — B2.', '', 'mecanismo', 'material', ['semilunar']),
    c('bmf2_a4', 'B1 corresponde a?', 'Fechamento valvar AV (início sístole ventricular).', '', 'prova', 'material', ['b1']),
    c('bmf2_a4', 'B2 corresponde a?', 'Fechamento semilunar (fim da sístole/fim ejeção).', '', 'prova', 'material', ['b2']),
    c('bmf2_a4', 'Contração isovolumétrica: o que permanece constante?', 'Volume ventricular; pressão sobe.', '', 'definicao', 'material', ['isovolumetrica']),
    c('bmf2_a4', 'Ejeção rápida vs tardia?', 'Gradiente aórtico/pulmonar mantém fluxo; fases da sístole.', '', 'mecanismo', 'material', ['ejecao']),
    c('bmf2_a4', 'Abertura valvar AV ocorre quando?', 'Quando pressão atrial > ventricular (enchimento/diástole).', '', 'mecanismo', 'material', ['abertura']),
    c('bmf2_a4', 'Volume sistólico = ?', 'Volume diastólico final − volume sistólico final.', '', 'definicao', 'material', ['vs']),
    c('bmf2_a4', 'Bulha de abertura da mitral patológica sugere?', 'Estenose mitral (SNAP).', '', 'clinica', 'material', ['estenose']),
    c('bmf2_a4', 'Sopro holodiastólico em AI: pensar?', 'Insuficiência aórtica (entre outras causas).', '', 'clinica', 'extra', ['ia']),
    c('bmf2_a4', 'Split fixo de B2: associação clássica?', 'Comunicação interatrial (CIV contexto).', '', 'extra_livro', 'extra', ['split']),
  ],
  [ // bmf2_a5
    c('bmf2_a5', 'Endocárdio: composição predominante?', 'Endotélio + tecido conjuntivo subendocárdico.', '', 'definicao', 'material', ['endocardio']),
    c('bmf2_a5', 'Miocárdio ventricular: organização das fibras?', 'Espiral — torção na sístole.', '', 'definicao', 'material', ['miocardio']),
    c('bmf2_a5', 'Epicárdio corresponde a?', 'Viscera do pericárdio seroso.', '', 'definicao', 'material', ['epicardio']),
    c('bmf2_a5', 'Cardiomiócito: núcleos típicos?', 'Frequentemente uninucleado central.', '', 'prova', 'material', ['nucleo']),
    c('bmf2_a5', 'Discos intercalares marcam?', 'Junção entre cardiomiócitos (desmossomos, aderentes).', '', 'definicao', 'material', ['disco']),
    c('bmf2_a5', 'Vaso coronário em histologia: tipo de artéria?', 'Músculo abundante — responde a vasoconstrição.', '', 'definicao', 'material', ['coronaria']),
    c('bmf2_a5', 'Subendocárdio ventricular: vulnerabilidade a?', 'Isquemia (menor perfusão na subendocárdica).', '', 'clinica', 'material', ['isquemia']),
    c('bmf2_a5', 'Células de condução: quantidade de miofibrilas?', 'Menor que miócito contrátil — mais condução.', '', 'diferenciacao', 'material', ['purkinje']),
    c('bmf2_a5', 'Matriz extracelular cardíaca: componente chave?', 'Colágeno — rigidez diastólica se fibrose.', '', 'mecanismo', 'material', ['colageno']),
    c('bmf2_a5', 'Pericárdio fibroso vs seroso?', 'Fibroso fixa; seroso reduz atrito (dupla camada).', '', 'diferenciacao', 'material', ['pericardio']),
    c('bmf2_a5', 'Miocardite: infiltração típica?', 'Inflamatória com dano/necrose de miócitos.', '', 'clinica', 'extra', ['miocardite']),
    c('bmf2_a5', 'Remodelamento ventricular pós-IAM: consequência?', 'Hipertrofia/fibrose — disfunção diastólica/sistólica.', '', 'extra_livro', 'extra', ['remodelamento']),
  ],
  [ // bmf2_a6
    c('bmf2_a6', 'Onda P no ECG representa?', 'Despolarização atrial.', '', 'definicao', 'material', ['onda-p']),
    c('bmf2_a6', 'Complexo QRS representa?', 'Despolarização ventricular.', '', 'definicao', 'material', ['qrs']),
    c('bmf2_a6', 'Onda T representa?', 'Repolarização ventricular.', '', 'definicao', 'material', ['onda-t']),
    c('bmf2_a6', 'Intervalo PR mede?', 'Condução atrial + atraso AV (até início ventricular).', '', 'definicao', 'material', ['pr']),
    c('bmf2_a6', 'Intervalo QT reflete?', 'Duração da despolarização+repolarização ventricular.', '', 'definicao', 'material', ['qt']),
    c('bmf2_a6', 'Taquicardia supraventricular: QRS geralmente?', 'Estreito (condução via sistema de His).', '', 'clinica', 'material', ['tsv']),
    c('bmf2_a6', 'Bloqueio de ramo direito: morfologia QRS?', 'Padrão rSR\' em V1 (lembrete clássico).', '', 'clinica', 'material', ['brd']),
    c('bmf2_a6', 'Elevação de ST em derivação: pensar agudo?', 'Lesão isquêmica/IAM (contexto clínico).', '', 'clinica', 'material', ['st']),
    c('bmf2_a6', 'Fibrilação atrial: onda P?', 'Ausente — linha irregular (f).', '', 'clinica', 'material', ['fa']),
    c('bmf2_a6', 'Extrassístole ventricular: QRS?', 'Alargado (ativação anômala).', '', 'clinica', 'material', ['ev']),
    c('bmf2_a6', 'Onda U: associação possível?', 'Hipocalemia, bradicardia (nem sempre patológica).', '', 'extra_livro', 'extra', ['onda-u']),
    c('bmf2_a6', 'Torsades de pointes: QT?', 'Frequentemente QT longo (fármacos/eletrolitos).', '', 'clinica', 'extra', ['torsades']),
  ],
  [ // bmf2_a7
    c('bmf2_a7', 'Débito cardíaco (DC) = ?', 'FC × volume sistólico.', '', 'definicao', 'material', ['dc']),
    c('bmf2_a7', 'Volume sistólico depende de?', 'Pré-carga, pós-carga e contratilidade.', '', 'definicao', 'material', ['vs']),
    c('bmf2_a7', 'Lei de Starling no corpo inteiro: relação?', 'Retorno venoso ↑ → DC ↑ (curva ventricular).', '', 'mecanismo', 'material', ['starling']),
    c('bmf2_a7', 'FC muito alta pode reduzir DC por?', 'Encurtar diástole → menor enchimento (SV cai).', '', 'clinica', 'material', ['taquicardia']),
    c('bmf2_a7', 'Índice cardíaco = ?', 'DC / área de superfície corporal.', '', 'definicao', 'material', ['indice']),
    c('bmf2_a7', 'Ejeção fração (FE) = ?', 'VS / volume diastólico final (ou similar).', '', 'definicao', 'material', ['fe']),
    c('bmf2_a7', 'Após-carga elevada (HAS): efeito no SV?', 'Tende a reduzir se contratilidade não compensar.', '', 'mecanismo', 'material', ['afterload']),
    c('bmf2_a7', 'Medida invasiva de DC: método?', 'Termodiluição / Fick.', '', 'prova', 'material', ['swan']),
    c('bmf2_a7', 'Exercício: DC aumenta principalmente por?', 'FC e também SV (contratilidade/Starling).', '', 'mecanismo', 'material', ['exercicio']),
    c('bmf2_a7', 'Shunt esquerda-direita: DC efetivo sistêmico?', 'Pode cair apesar de alto fluxo pulmonar.', '', 'clinica', 'material', ['shunt']),
    c('bmf2_a7', 'Inotrópico positivo aumenta DC como?', '↑ VS com mesma pré-carga (curva sobe).', '', 'extra_livro', 'extra', ['inotropico']),
    c('bmf2_a7', 'Tamponamento cardíaco: DC?', 'Obstrui enchimento — DC cai (paradoxo pulsus).', '', 'clinica', 'extra', ['tamponamento']),
  ],
  [ // bmf2_a8
    c('bmf2_a8', 'Inervação simpática cardíaca origem?', 'T1–T5 (gânglios simpáticos → plexo cardíaco).', '', 'definicao', 'material', ['simpatico']),
    c('bmf2_a8', 'Nervo vago inerva principalmente?', 'Nó SA e AV (parassimpático).', '', 'definicao', 'material', ['vago']),
    c('bmf2_a8', 'PA = ? (conceito)', 'DC × resistência vascular sistêmica (aprox.).', '', 'definicao', 'material', ['pa']),
    c('bmf2_a8', 'Barorreceptores aórticos e carotídeos detectam?', 'Pressão arterial — reflexo para ajustar FC e tônus.', '', 'mecanismo', 'material', ['barorreceptor']),
    c('bmf2_a8', 'Queda de PA: resposta reflexa?', '↑ simpático → ↑ FC e vasoconstrição.', '', 'mecanismo', 'material', ['reflexo']),
    c('bmf2_a8', 'Angiotensina II: efeito vascular e renal?', 'Vasoconstrição + retenção de Na/água (RAAS).', '', 'mecanismo', 'material', ['raas']),
    c('bmf2_a8', 'ADH (vasopressina): efeito em hipovolemia?', 'Vasoconstrição + reabsorção de água.', '', 'mecanismo', 'material', ['adh']),
    c('bmf2_a8', 'Autorregulação cerebral: mecanismo?', 'Resposta miogênica e metabólica mantêm fluxo.', '', 'definicao', 'material', ['cerebro']),
    c('bmf2_a8', 'Controle local em músculo: metabolitos?', 'Adenosina, CO₂, ↓O₂ → vasodilatação.', '', 'mecanismo', 'material', ['autorregulacao']),
    c('bmf2_a8', 'Bloqueio β: efeito em FC e renina?', '↓ FC; pode ↓ liberação de renina.', '', 'clinica', 'material', ['beta-bloqueador']),
    c('bmf2_a8', 'Hipertensão neurogênica: mecanismo?', 'Disautonomia/↑ simpático (secundárias diversas).', '', 'extra_livro', 'extra', ['htn']),
    c('bmf2_a8', 'Choque distributivo: PA e resistência?', 'PA baixa com resistência baixa ou inadequadamente elevada (sepse).', '', 'clinica', 'extra', ['choque']),
  ],
];

const data = JSON.parse(fs.readFileSync(OUT, 'utf8'));
let id = 0;
for (const f of data.flashcards) if (f.id > id) id = f.id;
id++;
for (const lot of LOTS) for (const x of lot) data.flashcards.push({ ...x, id: id++ });
fs.writeFileSync(OUT, JSON.stringify(data, null, 2), 'utf8');
console.log('OK bmf2 part1 total', data.flashcards.length, 'last id', id - 1);
