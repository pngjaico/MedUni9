/**
 * Migra campo `tema` em data/questoes.json e data/flashcards.json
 * para ids oficiais (aula_id) de data/materias.json.
 *
 * Uso: node scripts/migrate_tema_to_aula_id.js
 */
const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');
const materiasPath = path.join(root, 'data', 'materias.json');
const questoesPath = path.join(root, 'data', 'questoes.json');
const flashcardsPath = path.join(root, 'data', 'flashcards.json');

const materias = JSON.parse(fs.readFileSync(materiasPath, 'utf8'));

const cat = {};
Object.keys(materias)
  .filter((k) => !k.startsWith('_'))
  .forEach((k) => {
    cat[k] = (materias[k].aulas || []).map((a) => ({
      id: a.id,
      tema: (a.tema || '').toLowerCase(),
      desc: (a.descricao || '').toLowerCase(),
    }));
  });

/** Mapas legado slug / rótulo livre -> aula_id oficial */
const LEGACY_MAP = {
  bcm1: {
    bcm1_acido_base: 'bcm1_a2',
    bcm1_agua_ph: 'bcm1_a2',
    bcm1_membrana: 'bcm1_a1',
    bcm1_aminoacidos: 'bcm1_a7',
    bcm1_betaoxidacao: 'bcm1_a1',
    bcm1_carboidratos: 'bcm1_a1',
    bcm1_corpos_cetonicos: 'bcm1_a1',
    bcm1_dna_replicacao: 'bcm1_a5',
    bcm1_enzimas_cinetica: 'bcm1_a4',
    bcm1_fosforilacao: 'bcm1_a1',
    bcm1_gliconeogenese: 'bcm1_a1',
    bcm1_glicose: 'bcm1_a1',
    bcm1_integracao: 'bcm1_a1',
    bcm1_krebs: 'bcm1_a1',
    bcm1_lipideos: 'bcm1_a1',
    bcm1_nucleotideos: 'bcm1_a3',
    bcm1_regulacao_genica: 'bcm1_a8',
    bcm1_traducao: 'bcm1_a7',
    bcm1_transcricao: 'bcm1_a6',
    bcm1_vitaminas: 'bcm1_a19',
  },
  bmf1: {
    bmf1_membrana_bio: 'bmf1_a2',
    bmf1_mmii_vasos_nervos: 'bmf1_a13',
    bmf1_sist_articular: 'bmf1_a7',
    bmf1_sist_esqueletico: 'bmf1_a3',
    bmf1_tec_cartilaginems: 'bmf1_a8',
    bmf1_tec_conjuntivo: 'bmf1_a4',
    bmf1_tec_epitelial: 'bmf1_a14',
    bmf1_tec_osseo: 'bmf1_a5',
    'anatomia do sistema locomotor': 'bmf1_a3',
    'biofísica celular e neuromuscular': 'bmf1_a12',
    'histologia dos tecidos de suporte': 'bmf1_a4',
    'anatomia neurológica - nervo obturatório': 'bmf1_a13',
    'anatomia vascular - membro inferior': 'bmf1_a13',
    'anatomia vascular - veias do membro inferior': 'bmf1_a13',
  },
  indicadores: {
    'história da medicina': 'ind_a1',
    'metodologia científica - medidas de saúde': 'ind_a5',
    'metodologia científica - tipos de variáveis': 'ind_a9',
    'metodologia científica - variáveis': 'ind_a9',
    'pnsp e protocolos': 'ind_a8',
    'pandemia covid-19': 'ind_a3',
  },
  sus: {
    'determinantes sociais de saúde': 'sus_a1',
    'esf - atribuições da equipe': 'sus_a8',
    'epidemiologia básica': 'sus_a1',
    'genética - síndromes cromossômicas': 'sus_a1',
    'história da medicina - período moderno': 'sus_a3',
    'história da medicina - século xx': 'sus_a3',
    'mccp - conceitos': 'sus_a9',
    'mccp - experiência da doença': 'sus_a9',
    'mccp - método clínico centrado na pessoa': 'sus_a9',
    'medidas epidemiológicas': 'sus_a1',
    'medidas epidemiológicas - frequência': 'sus_a1',
    'pnsp - objetivos': 'sus_a4',
    'políticas de saúde': 'sus_a4',
    'primeiros socorros e emergências': 'sus_a1',
    'procedimentos básicos em saúde': 'sus_a8',
    'protocolos de manejo de covid-19': 'sus_a5',
    'covid-19 / sars-cov-2 - diagnóstico': 'sus_a5',
    'sus - conceitos e princípios': 'sus_a4',
    'sus - princípios e estrutura': 'sus_a4',
    'sus princípios e diretrizes': 'sus_a4',
    'semiótica - definições básicas': 'sus_a1',
    'semiótica - sinal, sintoma e síndrome': 'sus_a1',
    'sinais vitais e exame físico': 'sus_a1',
    'síndrome metabólica': 'sus_a1',
    'síndrome metabólica - diagnóstico': 'sus_a1',
    'territorialização e esf': 'sus_a8',
    'territorialização em saúde': 'sus_a8',
    'tipos de incidentes de segurança': 'sus_a8',
    'ética médica e código de ética': 'sus_a4',
    'anatomia cardíaca - circulação fetal': 'sus_a1',
    'anatomia cardíaca - irrigação': 'sus_a1',
    'anatomia cardíaca - septos': 'sus_a1',
    'anatomia cardíaca - septos e circulação fetal': 'sus_a1',
    'atenção primária - ubs': 'sus_a8',
    'aterosclerose - fatores de risco': 'sus_a1',
    'aterosclerose e sistema cardiovascular': 'sus_a1',
    'biossegurança e segurança do paciente': 'sus_a8',
    'pandemia covid-19': 'sus_a5',
  },
};

function norm(s) {
  return String(s || '')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .trim();
}

function resolveTema(materiaId, rawTema) {
  const t = String(rawTema || '').trim();
  if (!t) return { tema: t, how: 'empty' };

  const aulas = cat[materiaId];
  if (!aulas || aulas.length === 0) return { tema: t, how: 'no_catalog' };

  if (aulas.some((a) => a.id === t)) return { tema: t, how: 'already_id' };

  const n = norm(t);
  const perMateria = LEGACY_MAP[materiaId];
  if (perMateria) {
    if (perMateria[t]) return { tema: perMateria[t], how: 'legacy_exact' };
    if (perMateria[n]) return { tema: perMateria[n], how: 'legacy_norm' };
    const slugKey = t.replace(/\s+/g, '_').toLowerCase();
    if (perMateria[slugKey]) return { tema: perMateria[slugKey], how: 'legacy_slug' };
    for (const [k, v] of Object.entries(perMateria)) {
      if (norm(k) === n) return { tema: v, how: 'legacy_key_norm' };
    }
  }

  let best = null;
  let bestScore = 0;
  const words = n.split(/[^a-z0-9]+/).filter((w) => w.length > 2);
  for (const a of aulas) {
    const pool = `${a.tema} ${a.desc}`;
    let score = 0;
    for (const w of words) {
      if (pool.includes(w)) score += 1;
    }
    if (score > bestScore) {
      bestScore = score;
      best = a.id;
    }
  }
  if (best && bestScore >= 1) return { tema: best, how: `fuzzy_${bestScore}` };

  return { tema: aulas[0].id, how: 'fallback_first_aula' };
}

function migrateFile(filePath, arrayKey) {
  const raw = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  const isArray = Array.isArray(raw);
  const arr = isArray ? raw : raw[arrayKey] || [];
  const report = { file: path.basename(filePath), changed: 0, samples: [] };

  const next = arr.map((item) => {
    const { tema: newTema, how } = resolveTema(item.materia, item.tema);
    if (newTema !== item.tema) {
      report.changed++;
      if (report.samples.length < 12) {
        report.samples.push({ id: item.id, from: item.tema, to: newTema, how });
      }
      return { ...item, tema: newTema };
    }
    return item;
  });

  const out = isArray ? next : { ...raw, [arrayKey]: next };
  fs.writeFileSync(filePath, JSON.stringify(out, null, 2), 'utf8');
  return report;
}

const r1 = migrateFile(questoesPath, 'questoes');
const r2 = migrateFile(flashcardsPath, 'flashcards');

console.log(JSON.stringify({ questoes: r1, flashcards: r2 }, null, 2));
