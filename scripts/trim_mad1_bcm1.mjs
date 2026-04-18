/**
 * trim_mad1_bcm1.mjs
 * Auditoria pedagógica de mad1 (24 aulas: Microbiologia + Imunologia)
 * e bcm1 (21 aulas: Biologia Celular + Bioquímica).
 * Meta: 6 essenciais por aula (8→6, demovendo 2 por aula).
 * Critério: d1 trivial e definições óbvias; overlap com outros tópicos;
 * detalhes específicos quando o conceito já é coberto por outra questão.
 */

import { readFileSync, writeFileSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');
const QUESTOES_PATH = path.join(ROOT, 'data/questoes.json');

const data = JSON.parse(readFileSync(QUESTOES_PATH, 'utf8'));
const questoes = data.questoes;

const REBAIXAR = new Set([
  // mad1_a1: flagelos=locomoção trivial d1; pili=adesão coberto por LPS/cápsula
  3842, 3848,
  // mad1_a2: divisão binária=trivial d1; anaeróbias definição=trivial d1
  3849, 3850,
  // mad1_a3: pasteurização=alimentar detalhe; filtração laboratorial=detalhe
  3862, 3863,
  // mad1_a4: beta-lactâmicos parede d1=trivial; resistência efluxo=mecanismo detalhe
  3865, 3868,
  // mad1_a5: Strep neonatal GBS=obstétrico específico; catalase Staph/Strep=lab teste
  3875, 3880,
  // mad1_a6: Bacillus cereus=VISA detalhe; vacina+cápsula polissacarídica=imuno detalhe
  3886, 3888,
  // mad1_a7: Enterobactérias definição trivial d1; Proteus+urease=detalhe específico
  3889, 3895,
  // mad1_a8: parede lipídica M.tb=estrutural detalhe; M.leprae temp. baixa=bio curiosity
  3897, 3901,
  // mad1_a9: campo escuro sífilis=lab detalhe; LGV sorotipos=classificação detalhe
  3905, 3912,
  // mad1_a10: ergosterol membrana d1=coberto por 3916; hifas septadas=microscopia detalhe
  3913, 3917,
  // mad1_a11: dermatofitoses=queratina trivial d1; estomatite moriforme PCM=detalhe clínico
  3921, 3927,
  // mad1_a12: parasita intracelular=trivial d1; capsídeo definição=trivial d1
  3929, 3930,
  // mad1_a13: Hep A fecal-oral=trivial d1; Hep D=satellite vírus=específico
  3937, 3942,
  // mad1_a14: deriva antigênica=trivial d1; tríplice viral=trivial memorização
  3945, 3951,
  // mad1_a15: arboviroses=Aedes=trivial d1; exantema Zika coberto por 3955 (microcefalia)
  3953, 3959,
  // mad1_a16: herpesvírus=latência=coberto pela reativação AIDS; HSV-1 herpes labial=less critical
  3963, 3968,
  // mad1_a17: órgãos linfoides primários=trivial d1; MALT Placas Peyer=detalhe anatômico
  3969, 3975,
  // mad1_a18: PAMPs=trivial d1; macrófagos nomes específicos=classificação detalhe
  3977, 3984,
  // mad1_a19: estrutura Y anticorpo=trivial d1; IgM pentâmero=estrutural detalhe d3
  3985, 3989,
  // mad1_a20: MHC d1=coberto por 3994 CD4/MHC-II; apresentação cruzada=mecanismo avançado
  3993, 3999,
  // mad1_a21: helmintos=Th2/IgE=trivial d1; deficiência complemento=Neisseria=específico
  4002, 4005,
  // mad1_a22: histamina=trivial d1; diferença Tipo II vs III=coberto pelos exemplos clínicos
  4010, 4015,
  // mad1_a23: tolerância=trivial d1 definição; IL-10 Tregs=molecular detalhe específico
  4017, 4023,
  // mad1_a24: imunidade rebanho=trivial d1 (SUS overlap); adjuvantes=mecanismo específico
  4026, 4029,

  // bcm1_a1: Teoria Celular=trivial d1; resolução microscópio=detalhe técnico
  3433, 3436,
  // bcm1_a2: proporção água=numérico trivial; tensão superficial=física menos clínica
  3442, 3443,
  // bcm1_a3: carboidratos=energia trivial d1; lipídios=funções trivial d1
  3449, 3450,
  // bcm1_a4: ligação peptídica=trivial d1; estrutura primária=trivial d1
  3457, 3458,
  // bcm1_a5: sítio ativo=trivial d1; cofatores=coberto por pmh e outros contextos
  3466, 3470,
  // bcm1_a6: FRAP=técnica laboratorial específica; lipid rafts=conceito avançado
  3478, 3479,
  // bcm1_a7: difusão facilitada=trivial d1; exocitose=menos clínico que endocitose
  3481, 3487,
  // bcm1_a8: sinalização endócrina=trivial d1; receptores superfície classes=d1 classificação
  3489, 3490,
  // bcm1_a9: MTOC=trivial d1; 9+2 arrangement=estrutural detalhe coberto por Kartagener
  3498, 3502,
  // bcm1_a10: microfilamentos=actina=trivial (coberto por 3507,3508); filamentos intermediários d1=trivial
  3505, 3506,
  // bcm1_a11: colágeno mais abundante=trivial d1; desmossomo vs hemidesmossomo=estrutural detalhe
  3513, 3520,
  // bcm1_a12: células esteroidogênicas=muito REL=trivial consequência; N-glicosilação=detalhe molecular
  3526, 3527,
  // bcm1_a13: Golgi=NÃO realiza=negativa trivial d1; tráfego retrógrado COP I=detalhe direção
  3530, 3533,
  // bcm1_a14: lisossomos pH=trivial d1; fagossoma+lisossomo=coberto por 3484 (fagocitose)
  3537, 3543,
  // bcm1_a15: mitocôndria=ATP=trivial d1; endossimbiose=biologia menos clínica
  3545, 3546,
  // bcm1_a16: envelope nuclear=trivial d1; NLS=sinal localização=detalhe específico
  3553, 3557,
  // bcm1_a17: replicação semiconservativa=trivial d1; helicase=trivial d1
  3561, 3562,
  // bcm1_a18: transcrição=trivial d1; DNA vs RNA diferença=trivial d1
  3569, 3570,
  // bcm1_a19: ribossomo=local tradução=trivial d1; polirribossomo=detalhe eficiência
  3577, 3584,
  // bcm1_a20: fase S=trivial d1; metáfase=alinhamento=trivial definição
  3585, 3588,
  // bcm1_a21: apoptose=suicídio=trivial d1; necrose=acidental=trivial d1
  3593, 3594,
]);

// Fix trailing ), artifacts in ALL kept questions of mad1 and bcm1
// (batch-generated questions have systematic trailing ), artifact)
let demotions = 0, fixes = 0;
for (const q of questoes) {
  if (REBAIXAR.has(q.id) && q.essencial === true) { q.essencial = false; demotions++; }
  // Fix trailing artifact in kept questions of mad1 and bcm1
  if ((q.materia === 'mad1' || q.materia === 'bcm1') && !REBAIXAR.has(q.id) && q.enunciado) {
    const b = q.enunciado;
    q.enunciado = q.enunciado.replace(/\),\s*$/, '').replace(/\)\s*$/, '');
    if (q.enunciado !== b) fixes++;
  }
}

writeFileSync(QUESTOES_PATH, JSON.stringify({ ...data, questoes }, null, 2), 'utf8');
console.log(`✅ Demotions: ${demotions} | Artifacts fixed: ${fixes}`);

for (const mat of ['mad1', 'bcm1']) {
  const byAula = {};
  for (const q of questoes) {
    if (q.materia !== mat) continue;
    if (!byAula[q.aula_id]) byAula[q.aula_id] = { ess: 0, tot: 0, diffs: [] };
    byAula[q.aula_id].tot++;
    if (q.essencial === true) { byAula[q.aula_id].ess++; byAula[q.aula_id].diffs.push(q.dificuldade); }
  }
  console.log(`\n--- ${mat} ---`);
  for (const [aula, s] of Object.entries(byAula)) {
    const ok = s.ess >= 5 && s.ess <= 7 ? '✅' : s.ess === 0 ? '🔴' : s.ess < 5 ? '🟡' : '🔵';
    console.log(`  ${ok} ${aula}: ${s.ess}/${s.tot} | [${s.diffs.join(',')}]`);
  }
}
