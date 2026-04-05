/** BMF2 bmf2_a9–a16 × 12 — node scripts/append_flashcards_bmf2_m2_part2.js */
const fs = require('fs');
const path = require('path');
const OUT = path.join(__dirname, '..', 'data', 'flashcards.json');
function c(t, f, v, e, cat, o, tags) {
  return { materia: 'bmf2', tema: t, frente: f, verso: v, explicacao: e || '', dificuldade: 2, categoria: cat, origem: o, tags: tags || [] };
}
const LOTS = [
  [ // bmf2_a9
    c('bmf2_a9', 'Circulação coronariana: perfusão na sístole VE?', 'Predominantemente diastólica (compressão intramiocárdica na sístole).', '', 'mecanismo', 'material', ['coronaria']),
    c('bmf2_a9', 'Artéria coronária direita costuma irrigar?', 'Parede inferior/inferolateral (depende dominância).', '', 'definicao', 'material', ['acd']),
    c('bmf2_a9', 'Circulação colateral coronariana: importância?', 'Protege em estenose crônica (desenvolvimento).', '', 'clinica', 'material', ['colateral']),
    c('bmf2_a9', 'Metarteríola e capilar: controle local?', 'Tônus pré-capilar ajusta fluxo tecidual.', '', 'mecanismo', 'material', ['microcirculacao']),
    c('bmf2_a9', 'Sistema linfático drena?', 'Proteínas e fluido intersticial — retorno ao sistema venoso.', '', 'definicao', 'material', ['linfa']),
    c('bmf2_a9', 'Edema por aumento de pressão hidrostática capilar: exemplo?', 'IC direita — congestão sistêmica.', '', 'clinica', 'material', ['edema']),
    c('bmf2_a9', 'Isquemia miocárdica: sequência celular?', 'Disfunção contrátil antes de necrose (tempo dependente).', '', 'clinica', 'material', ['isquemia']),
    c('bmf2_a9', 'Angina típica: mecanismo?', 'Desbalanço oferta/demanda de O₂ (estenose coronariana).', '', 'clinica', 'material', ['angina']),
    c('bmf2_a9', 'NO na microcirculação: efeito?', 'Vasodilatação local.', '', 'mecanismo', 'material', ['no']),
    c('bmf2_a9', 'Linfadenite: o que é?', 'Inflamação de linfonodos drenando região infecciosa.', '', 'clinica', 'material', ['linfonodo']),
    c('bmf2_a9', 'Pontes miocárdicas: relevância?', 'Segmento coronariano intramural pode ser comprimido na sístole.', '', 'extra_livro', 'extra', ['ponte']),
    c('bmf2_a9', 'Ruptura de placa: evento agudo?', 'Trombose coronariana — IAM.', '', 'clinica', 'extra', ['iam']),
  ],
  [ // bmf2_a10
    c('bmf2_a10', 'Ângulo de Louis (esterno-manubrial) nível?', 'Articulação com 2ª costela (referência T4/T5).', '', 'prova', 'material', ['louis']),
    c('bmf2_a10', 'Traqueia bifurca nível aproximado?', 'Carina (T4–T5 aprox.).', '', 'definicao', 'material', ['carina']),
    c('bmf2_a10', 'Bronquio respiratório vs terminal?', 'Respiratório tem sacos alveolares; terminal ainda sem alvéolos.', '', 'diferenciacao', 'material', ['bronquio']),
    c('bmf2_a10', 'Alvéolos: troca gasosa ocorre onde?', 'Parede alveolo-capilar.', '', 'definicao', 'material', ['alveolo']),
    c('bmf2_a10', 'Surfactante produzido por?', 'Pneumócito tipo II — reduz tensão superficial.', '', 'mecanismo', 'material', ['surfactante']),
    c('bmf2_a10', 'Diafragma inervação motora?', 'Nervo frênico (C3–C5).', '', 'prova', 'material', ['frenico']),
    c('bmf2_a10', 'Pleura visceral vs parietal?', 'Visceral aderida ao pulmão; parietal na parede — cavidade pleural virtual.', '', 'diferenciacao', 'material', ['pleura']),
    c('bmf2_a10', 'Laringe: estrutura protege entrada aérea?', 'Epiglote (deglutição).', '', 'definicao', 'material', ['epiglote']),
    c('bmf2_a10', 'Vias aéreas superiores: aquecimento e umidificação?', 'Conchas nasais e mucosa.', '', 'mecanismo', 'material', ['nasal']),
    c('bmf2_a10', 'Ápice pulmonar projeta-se?', 'Acima da clavícula (exame físico).', '', 'clinica', 'material', ['apice']),
    c('bmf2_a10', 'Síndrome do desconforto respiratório agudo neonatal: déficit?', 'Surfactante imaturo — atelectasia.', '', 'clinica', 'extra', ['srad']),
    c('bmf2_a10', 'Corpo estranho na via aérea: laringe vs brônquio?', 'Laringe obstrução aguda; brônquio sibilos unilaterais.', '', 'extra_livro', 'extra', ['corpo-estranho']),
  ],
  [ // bmf2_a11
    c('bmf2_a11', 'Traqueia histologia: epitélio?', 'Pseudocolumnar ciliado com células caliciformes.', '', 'definicao', 'material', ['traqueia']),
    c('bmf2_a11', 'Brônquio: camada muscular?', 'Aumenta em direção periférica (até bronquíolo).', '', 'definicao', 'material', ['bronquio']),
    c('bmf2_a11', 'Pneumócito tipo I: função?', 'Reveste >90% da superfície alveolar — troca gasosa.', '', 'definicao', 'material', ['tipo1']),
    c('bmf2_a11', 'Pneumócito tipo II: função?', 'Surfactante e reparo (célula-soma).', '', 'definicao', 'material', ['tipo2']),
    c('bmf2_a11', 'Macrófago alveolar localiza-se?', 'Lúmen alveolar — fagocitose.', '', 'definicao', 'material', ['macrofago']),
    c('bmf2_a11', 'Septo interalveolar contém?', 'Capilares + células intersticiais mínimas.', '', 'definicao', 'material', ['septo']),
    c('bmf2_a11', 'Brônquio respiratório: característica?', 'Paredes com sacos alveolares (início acínus).', '', 'definicao', 'material', ['respiratorio']),
    c('bmf2_a11', 'Pleura histologicamente?', 'Mesotélio + tecido fibroso/vascular.', '', 'definicao', 'material', ['pleura']),
    c('bmf2_a11', 'Glândulas submucosas brônquicas secretam?', 'Muco — camada mucociliar.', '', 'mecanismo', 'material', ['muco']),
    c('bmf2_a11', 'Fibrose pulmonar: alteração histológica?', 'Espessamento septal + menos complacência.', '', 'clinica', 'material', ['fibrose']),
    c('bmf2_a11', 'ADPK com pneumonite: padrão?', 'Dano difuso alveolar (contexto toxicológ/infeccioso).', '', 'extra_livro', 'extra', ['dpa']),
    c('bmf2_a11', 'Células de Clara (club) em bronquíolos: papel?', 'Metabolismo xenobióticos e precursores surfactante.', '', 'extra', 'extra', ['clara']),
  ],
  [ // bmf2_a12
    c('bmf2_a12', 'Capacidade vital (CV) = ?', 'Reserva inspiratória + volume corrente + reserva expiratória (IRV+VT+ERV).', '', 'definicao', 'material', ['cv']),
    c('bmf2_a12', 'Volume residual: pode ser medido por espirometria simples?', 'Não — precisa métodos que meçam VR (corpo caixa/heli).', '', 'prova', 'material', ['vr']),
    c('bmf2_a12', 'Complacência pulmonar: definição?', 'ΔV/ΔP — distensibilidade.', '', 'definicao', 'material', ['complacencia']),
    c('bmf2_a12', 'Elastância é inversa da?', 'Complacência.', '', 'diferenciacao', 'material', ['elastancia']),
    c('bmf2_a12', 'Superfície alveolar reduz tensão com?', 'Surfactante.', '', 'mecanismo', 'material', ['surfactante']),
    c('bmf2_a12', 'Diafragma: principal músculo?', 'Inspiratório em repouso.', '', 'definicao', 'material', ['diafragma']),
    c('bmf2_a12', 'Músculos acessórios da inspiração: exemplos?', 'Esternocleidomastoideo, escalenos (esforço).', '', 'definicao', 'material', ['acessorios']),
    c('bmf2_a12', 'Obstrução de vias aéreas: curva fluxo-volume?', 'Encovamento expiratório.', '', 'clinica', 'material', ['obstrucao']),
    c('bmf2_a12', 'Restrição: padrão espirométrico?', 'CV e capacidade pulmonar total reduzidas; relação FEV1/CV pode ser normal ou alta.', '', 'clinica', 'material', ['restricao']),
    c('bmf2_a12', 'Volume corrente em repouso adulto aproximado?', '~500 mL (ordem de grandeza).', '', 'prova', 'material', ['vt']),
    c('bmf2_a12', 'PNID/CNID: conceito?', 'Pressão negativa intrapecoral na inspiração — expansão pulmonar.', '', 'extra_livro', 'extra', ['pnid']),
    c('bmf2_a12', 'Enfisema: complacência?', 'Aumentada (perda de elastina), mas pior troca gasosa.', '', 'clinica', 'extra', ['enfisema']),
  ],
  [ // bmf2_a13
    c('bmf2_a13', 'Difusão de O₂ depende de?', 'Gradiente alvéolo-capilar, área, espessura (Lei de Fick).', '', 'mecanismo', 'material', ['difusao']),
    c('bmf2_a13', 'Relação ventilação/perfusão (V/Q) ideal aproximada?', '~0,8 globalmente (não homogêneo).', '', 'definicao', 'material', ['vq']),
    c('bmf2_a13', 'Zona 1 de West (pulmão ereto): característica?', 'P_alveolar > P_arterial — pode haver perfusão mínima (zona morta).', '', 'mecanismo', 'material', ['west']),
    c('bmf2_a13', 'Zona 3 de West?', 'Fluxo sanguíneo maior (P_cap > P_alv).', '', 'mecanismo', 'material', ['west']),
    c('bmf2_a13', 'Shunt fisiológico normal?', 'Áreas com V/Q baixo (dreno venoso bronco).', '', 'definicao', 'material', ['shunt']),
    c('bmf2_a13', 'Espaço morto anatômico: exemplos?', 'Vias de condução até bronquíolos terminais.', '', 'definicao', 'material', ['morto']),
    c('bmf2_a13', 'Hipoxemia por V/Q baixo: exemplo?', 'Atelectasia local — shunt-like.', '', 'clinica', 'material', ['atelectasia']),
    c('bmf2_a13', 'Diferença alvéolo-arterial de O₂ (AaDO2) aumenta em?', 'Shunt, difusão prejudicada, V/Q muito alterado.', '', 'clinica', 'material', ['aado2']),
    c('bmf2_a13', 'CO₂ difunde vs O₂?', 'Muito mais rápido — hipoxemia costuma aparecer antes de hipercapnia em difusão.', '', 'mecanismo', 'material', ['co2']),
    c('bmf2_a13', 'Embolia pulmonar: V/Q típico na região?', 'Alto (ventilação sem perfusão — morta alveolar).', '', 'clinica', 'material', ['tep']),
    c('bmf2_a13', 'Hipóxia hipóxico vs anêmica?', 'Primeira ↓PaO₂; segunda Hb baixo com PaO₂ pode ser normal.', '', 'extra_livro', 'extra', ['hipoxia']),
    c('bmf2_a13', 'Cianose central aparece quando?', 'Desoxi-Hb ≥ ~5 g/dL no capilar (aprox.).', '', 'clinica', 'extra', ['cianose']),
  ],
  [ // bmf2_a14
    c('bmf2_a14', 'Centro respiratório bulbar: núcleos?', 'DRG (inspiratório) e VRG (inspiratório/expiratório).', '', 'definicao', 'material', ['bulbo']),
    c('bmf2_a14', 'Centro pneumotáxico: efeito?', 'Limita inspiração — ajusta frequência.', '', 'mecanismo', 'material', ['pneumotaxico']),
    c('bmf2_a14', 'Quimiorreceptores centrais localizam-se?', 'Quase-subaracnoide (sensíveis a H+ do líquido cefalorraquidiano).', '', 'definicao', 'material', ['central']),
    c('bmf2_a14', 'Quimiorreceptores periféricos: onde?', 'Corpos carotídeos e aórticos — PO₂, PCO₂, pH.', '', 'definicao', 'material', ['periferico']),
    c('bmf2_a14', 'Hipercapnia estimula ventilação principalmente via?', 'Centrais (CO₂ atravessa BHE → ↑H+).', '', 'mecanismo', 'material', ['co2']),
    c('bmf2_a14', 'Hipóxia periférica: resposta se normocápnico?', 'Menos sensível que CO₂ — exceto em crônicos com retenção.', '', 'clinica', 'material', ['hipoxia']),
    c('bmf2_a14', 'Exercício: aumento de ventilação por?', 'Propriocepção, K+, temperatura, ainda debate — não só CO₂.', '', 'mecanismo', 'material', ['exercicio']),
    c('bmf2_a14', 'Apneia do sono obstrutiva: mecanismo?', 'Colapso de vias aéreas superiores no sono.', '', 'clinica', 'material', ['aso']),
    c('bmf2_a14', 'Resposta a acidose metabólica?', '↑ ventilação (respiração de Kussmaul em DM).', '', 'clinica', 'material', ['acidose']),
    c('bmf2_a14', 'Drive respiratório em paciente CO₂ retenidor crônico?', 'Depende mais de hipóxia (menos de CO₂).', '', 'clinica', 'material', ['copd']),
    c('bmf2_a14', 'Lesão bulbar alta: risco?', 'Apneia/alteração padrão respiratório (neuro).', '', 'extra_livro', 'extra', ['bulbo']),
    c('bmf2_a14', 'Altitude: estímulo ventilatório inicial?', 'Hipóxia periférica.', '', 'extra', 'extra', ['altitude']),
  ],
  [ // bmf2_a15
    c('bmf2_a15', 'Identificar artéria pulmonar vs aorta em cadáver?', 'Pulmonar sai do VD; aorta do VE.', '', 'definicao', 'material', ['pratica']),
    c('bmf2_a15', 'Valva tricúspide: número de cúspides?', 'Três.', '', 'prova', 'material', ['tricuspide']),
    c('bmf2_a15', 'Músculo papilar liga-se a?', 'Cordas tendíneas das valvas AV — previne prolapso na sístole.', '', 'definicao', 'material', ['papilar']),
    c('bmf2_a15', 'Veia cava superior drena território principal?', 'Cabeça, pescoço, membros superiores.', '', 'definicao', 'material', ['vcs']),
    c('bmf2_a15', 'Seio coronário recebe dreno de?', 'Grande parte do coração (veias cardíacas).', '', 'definicao', 'material', ['seio-coronario']),
    c('bmf2_a15', 'Endocárdio liso nas câmaras facilita?', 'Fluxo turbulento mínimo; trombos se estase.', '', 'mecanismo', 'material', ['endocardio']),
    c('bmf2_a15', 'Corte histológico miocárdio HE mostra?', 'Fibras ramificadas com núcleos centrais.', '', 'prova', 'material', ['histologia']),
    c('bmf2_a15', 'Aorta ascendente dá origem a?', 'Coronárias direita e esquerda (típico).', '', 'definicao', 'material', ['coronarias']),
    c('bmf2_a15', 'Átrio esquerdo: relevo característico?', 'Orelhas (appendage) — fibrilação pode formar trombos.', '', 'clinica', 'material', ['ae']),
    c('bmf2_a15', 'Pericardiocentese: posição segura clássica?', 'Subxifoide ou apical guiada — evitar artérias.', '', 'clinica', 'material', ['pericardiocentese']),
    c('bmf2_a15', 'Biópsia miocárdica indica principalmente?', 'Miocardite, rejeição de transplante, infiltrativas.', '', 'extra_livro', 'extra', ['biopsia']),
    c('bmf2_a15', 'Prolapso valvar mitral: achado comum em?', 'Jovem muitas vezes benigno; pode ter regurgitação.', '', 'extra', 'extra', ['prolapso']),
  ],
  [ // bmf2_a16
    c('bmf2_a16', 'Lobo pulmonar direito: quantos?', 'Três (superior, médio, inferior).', '', 'definicao', 'material', ['lobos']),
    c('bmf2_a16', 'Lobo pulmonar esquerdo: quantos?', 'Dois (superior e inferior) — língula parte do superior.', '', 'definicao', 'material', ['lingula']),
    c('bmf2_a16', 'Hilo pulmonar contém?', 'Brônquio principal, artéria pulmonar, veias pulmonares, linfáticos.', '', 'definicao', 'material', ['hilo']),
    c('bmf2_a16', 'Recesso costodiafragmático: achado em derrame?', 'Radiografia — obliteração ângulo costofrênico.', '', 'clinica', 'material', ['derrame']),
    c('bmf2_a16', 'Traqueia palpável na região?', 'Fenda suprasternal (inspeção).', '', 'prova', 'material', ['traqueia']),
    c('bmf2_a16', 'Lâmina pré-pontada pleural em preparação histológica?', 'Mesotélio sobre tecido fibrovascular.', '', 'definicao', 'material', ['pleura']),
    c('bmf2_a16', 'Bronquíolo terminal marca?', 'Fim de condução pura — próximo acínus respiratório.', '', 'definicao', 'material', ['bronquio']),
    c('bmf2_a16', 'Preparado alveolar: células achatadas tipo I vs cuboides tipo II?', 'Tipo I fino; tipo II mais cuboidal.', '', 'diferenciacao', 'material', ['alveolo']),
    c('bmf2_a16', 'Diafragma: inserção vertebral?', 'Pilares lombares (L1–L3 direita mais longa).', '', 'prova', 'material', ['diafragma']),
    c('bmf2_a16', 'Punção pleural: local típico seguro?', 'Linha médioaxilar abaixo do 9º arco (com imagem) — evita neurovasos.', '', 'clinica', 'material', ['toracocentese']),
    c('bmf2_a16', 'Broncoscopia: indicação diagnóstica?', 'Massa, hemoptise, BAL em infecção.', '', 'extra_livro', 'extra', ['broncoscopia']),
    c('bmf2_a16', 'Cortes histológicos de brônquio mostram cartilagem?', 'Placas até bronquíolos — depois ausente.', '', 'extra', 'extra', ['cartilagem']),
  ],
];

const data = JSON.parse(fs.readFileSync(OUT, 'utf8'));
let id = 0;
for (const f of data.flashcards) if (f.id > id) id = f.id;
id++;
for (const lot of LOTS) for (const x of lot) data.flashcards.push({ ...x, id: id++ });
fs.writeFileSync(OUT, JSON.stringify(data, null, 2), 'utf8');
console.log('OK bmf2 part2 total', data.flashcards.length, 'last id', id - 1);
