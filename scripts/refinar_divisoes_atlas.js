/**
 * Reagrupa lâminas de sistemas que estão só em "Geral" em divisões alinhadas a
 * organização típica de atlas (Moore, Netter, Rouvière): regiões e aparelhos.
 *
 * Uso: node scripts/refinar_divisoes_atlas.js
 */
const fs = require('fs');
const path = require('path');

const IN_PATH = path.resolve(__dirname, '..', 'data', 'anatomia_atlas.json');
const OUT_PATH = IN_PATH;

function slugify(s) {
  return s.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .toLowerCase().replace(/[^a-z0-9]+/g, '_').replace(/^_|_$/g, '');
}

function splitCirculatorio(titulo) {
  const t = titulo;
  const low = titulo.toLowerCase();
  if (/pulm[oõ]es|timo|traqueia e pulm|laringe.*pulm[oõ]es/i.test(t)) {
    return { key: 'mediastino', titulo: 'Mediastino e visão global' };
  }
  if (/esqueleto fibroso|fibroso/i.test(low)) {
    return { key: 'esqueleto_fibroso', titulo: 'Esqueleto fibroso e condução elétrica' };
  }
  if (/aberto|rebat|átrio|ventrículo|ventricular|face esternocostal|face diafragmática|base e face/i.test(t)) {
    return { key: 'camaras_valvas', titulo: 'Coração — faces e câmaras' };
  }
  return { key: 'coração_superfícies', titulo: 'Coração — superfícies e vasos de entrada/saída' };
}

function splitRespiratorio(titulo) {
  const t = titulo;
  if (/hemicabeça/i.test(t)) return { key: 'face_seios', titulo: 'Face, nariz e seios paranasais' };
  if (/laringe/i.test(t) && !/pulm/i.test(t)) return { key: 'laringe', titulo: 'Laringe' };
  if (/traqueia|br[oô]nquio/i.test(t)) return { key: 'traqueia', titulo: 'Traqueia e brônquios' };
  if (/pulm[aã]o|pulm[oõ]es/i.test(t) && !/traqueia e pulm/i.test(t)) return { key: 'pulmoes', titulo: 'Pulmões' };
  if (/diafragma/i.test(t)) return { key: 'diafragma', titulo: 'Diafragma' };
  if (/laringe.*pulm[oõ]es|cora[cç][aã]o.*pulm/i.test(t)) return { key: 'visao_global', titulo: 'Visão global (vias aéreas e mediastino)' };
  return { key: 'outros', titulo: 'Outras vistas' };
}

function splitUrinario(titulo) {
  const t = titulo.toLowerCase();
  if (/bexiga|ureter|ferradura/i.test(t)) return { key: 'vias_bexiga', titulo: 'Ureter, bexiga e variações' };
  return { key: 'rins', titulo: 'Rins e relações' };
}

function splitGenitalM(titulo) {
  const t = titulo.toLowerCase();
  if (/test[ií]culo|epid[ií]dimo|deferente/i.test(t)) return { key: 'testiculo', titulo: 'Testículo, epidídimo e ducto deferente' };
  if (/pr[oó]stata|gl[aâ]ndulas seminais|seminais/i.test(t)) return { key: 'prostata', titulo: 'Próstata e glândulas seminais' };
  if (/p[eê]nis/i.test(t)) return { key: 'penis', titulo: 'Pênis' };
  if (/bexiga.*pr[oó]stata|pr[oó]stata.*p[eê]nis/i.test(t)) return { key: 'visao_pelve_m', titulo: 'Bexiga, próstata e pênis (vistas combinadas)' };
  return { key: 'outros_m', titulo: 'Outras vistas' };
}

function splitGenitalF(titulo) {
  const t = titulo.toLowerCase();
  if (/vulva/i.test(t)) return { key: 'vulva', titulo: 'Vulva' };
  if (/[oó]rg[aã]os genitais femininos internos/i.test(t)) return { key: 'internos_f', titulo: 'Órgãos genitais internos' };
  return { key: 'pelve_f', titulo: 'Pelve feminina e cortes' };
}

function splitNeural(titulo) {
  const t = titulo.toLowerCase();
  if (/commons|wikimedia|lobos cerebrais/i.test(t) || /cerebrum|lobes/i.test(t)) {
    return { key: 'encefalo_diagrama', titulo: 'Encéfalo — diagramas e referência' };
  }
  return { key: 'encefalo_material', titulo: 'Encéfalo e SNC (material Asclépio)' };
}

const ROUTERS = {
  sistema_circulatorio: splitCirculatorio,
  sistema_respiratorio: splitRespiratorio,
  sistema_urinario: splitUrinario,
  sistema_genital_masculino: splitGenitalM,
  sistema_genital_feminino: splitGenitalF,
  sistema_neural: splitNeural,
};

function refineSistema(sistema) {
  const router = ROUTERS[sistema.id];
  if (!router) return sistema;

  const geral = sistema.divisoes.find(d => d.titulo === 'Geral' && d.laminas && d.laminas.length);
  if (!geral) return sistema;

  const buckets = new Map();
  for (const lam of geral.laminas) {
    const { key, titulo: divTitulo } = router(lam.titulo);
    const fullKey = sistema.id + '_' + key;
    if (!buckets.has(fullKey)) {
      buckets.set(fullKey, { id: fullKey, titulo: divTitulo, laminas: [] });
    }
    buckets.get(fullKey).laminas.push(lam);
  }

  const novasDivisoes = sistema.divisoes.filter(d => d.titulo !== 'Geral');
  const ordenadas = [...buckets.values()].sort((a, b) => a.titulo.localeCompare(b.titulo, 'pt'));
  sistema.divisoes = [...novasDivisoes, ...ordenadas];
  return sistema;
}

const raw = JSON.parse(fs.readFileSync(IN_PATH, 'utf8'));
raw.version = (raw.version || 0) + 1;
raw.updatedAt = new Date().toISOString();
raw.refinamentoDivisoes = 'Atlas: divisões por região/aparelho (Moore/Netter-style); ver scripts/refinar_divisoes_atlas.js';

raw.sistemas = raw.sistemas.map(refineSistema);

let divs = 0, lams = 0;
for (const s of raw.sistemas) {
  divs += s.divisoes.length;
  for (const d of s.divisoes) lams += d.laminas.length;
}

fs.writeFileSync(OUT_PATH, JSON.stringify(raw, null, 2), 'utf8');
console.log('Atualizado:', OUT_PATH);
console.log('Sistemas:', raw.sistemas.length, '| Divisões:', divs, '| Lâminas:', lams);
