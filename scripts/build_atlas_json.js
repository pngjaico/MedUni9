/**
 * Converte atlas-anatomico-asclepio-ufu.md → data/anatomia_atlas.json
 * 
 * Uso: node scripts/build_atlas_json.js
 */
const fs = require('fs');
const path = require('path');

const MD_PATH = path.resolve(__dirname, '..', 'atlas-anatomico-asclepio-ufu.md');
const OUT_PATH = path.resolve(__dirname, '..', 'data', 'anatomia_atlas.json');

const raw = fs.readFileSync(MD_PATH, 'utf8');
const lines = raw.split(/\r?\n/);

const SYSTEM_COLORS = {
  'SISTEMA ESQUELÉTICO': '#F59E0B',
  'SISTEMA ARTICULAR': '#EA580C',
  'SISTEMA MUSCULAR': '#DC2626',
  'SISTEMA CIRCULATÓRIO': '#EF4444',
  'SISTEMA RESPIRATÓRIO': '#06B6D4',
  'SISTEMA DIGESTÓRIO': '#10B981',
  'SISTEMA URINÁRIO': '#3B82F6',
  'SISTEMA GENITAL MASCULINO': '#6366F1',
  'SISTEMA GENITAL FEMININO': '#EC4899',
  'SISTEMA NEURAL': '#8B5CF6',
};

const SYSTEM_ICONS = {
  'SISTEMA ESQUELÉTICO': 'bone',
  'SISTEMA ARTICULAR': 'joint',
  'SISTEMA MUSCULAR': 'muscle',
  'SISTEMA CIRCULATÓRIO': 'heart',
  'SISTEMA RESPIRATÓRIO': 'lungs',
  'SISTEMA DIGESTÓRIO': 'stomach',
  'SISTEMA URINÁRIO': 'kidney',
  'SISTEMA GENITAL MASCULINO': 'male',
  'SISTEMA GENITAL FEMININO': 'female',
  'SISTEMA NEURAL': 'brain',
};

function slugify(s) {
  return s.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .toLowerCase().replace(/[^a-z0-9]+/g, '_').replace(/^_|_$/g, '');
}

function parsePercent(str) {
  const m = str.match(/([\d.]+)%/);
  return m ? Math.round(parseFloat(m[1])) : null;
}

const sistemas = [];
let curSystem = null;
let curDiv = null;
let curLamina = null;
let parsingPins = false;
let systemOrder = 0;

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];

  // ## SISTEMA XXXXX
  const sysMatch = line.match(/^## (SISTEMA .+)$/);
  if (sysMatch) {
    const name = sysMatch[1].trim();
    systemOrder++;
    curSystem = {
      id: slugify(name),
      titulo: name.charAt(0) + name.slice(1).toLowerCase().replace(/( [a-záéíóúàâêîôûãõç])/g, m => m),
      tituloOriginal: name,
      ordem: systemOrder,
      cor: SYSTEM_COLORS[name] || '#6B7280',
      icone: SYSTEM_ICONS[name] || 'bone',
      divisoes: [],
    };
    // Fix titulo: capitalize first word of each word properly  
    curSystem.titulo = name.split(' ').map((w, wi) => {
      if (wi === 0) return w.charAt(0).toUpperCase() + w.slice(1).toLowerCase();
      const lower = w.toLowerCase();
      if (['do', 'da', 'de', 'e', 'em'].includes(lower)) return lower;
      return w.charAt(0).toUpperCase() + w.slice(1).toLowerCase();
    }).join(' ');
    sistemas.push(curSystem);
    curDiv = null;
    curLamina = null;
    parsingPins = false;
    continue;
  }

  if (!curSystem) continue;

  // ### Subaba (divisão)
  const divMatch = line.match(/^### (.+)$/);
  if (divMatch) {
    const divName = divMatch[1].trim();
    curDiv = {
      id: slugify(curSystem.tituloOriginal + '_' + divName),
      titulo: divName,
      laminas: [],
    };
    curSystem.divisoes.push(curDiv);
    curLamina = null;
    parsingPins = false;
    continue;
  }

  // #### N. Titulo da lamina
  const lamMatch = line.match(/^#### (\d+)\. (.+)$/);
  if (lamMatch) {
    const num = lamMatch[1];
    const titulo = lamMatch[2].trim();
    if (titulo === '.') {
      // placeholder image with no real title — skip or use generic
    }
    
    if (!curDiv) {
      // System without explicit subsection — create a default one
      curDiv = {
        id: slugify(curSystem.tituloOriginal + '_geral'),
        titulo: 'Geral',
        laminas: [],
      };
      curSystem.divisoes.push(curDiv);
    }

    const lamId = curDiv.id + '_' + num;
    curLamina = {
      id: lamId,
      titulo: titulo === '.' ? `Lâmina ${num}` : titulo,
      urlImagem: '',
      fonte: 'asclepio',
      credito: 'Asclépio UFU — Atlas Anatômico Digital',
      urlPaginaFonte: 'https://www.asclepioanatomiaufu.com/',
      licenca: '',
      alt: titulo === '.' ? '' : titulo,
      pinos: [],
    };
    curDiv.laminas.push(curLamina);
    parsingPins = false;
    continue;
  }

  if (!curLamina) continue;

  // URL line
  const urlMatch = line.match(/\*\*🔗 URL:\*\* `(.+)`/);
  if (urlMatch) {
    curLamina.urlImagem = urlMatch[1].trim();
    continue;
  }

  // Also capture URL from image markdown
  if (!curLamina.urlImagem) {
    const imgMatch = line.match(/^!\[.*?\]\((https:\/\/www\.asclepioanatomiaufu\.com\/uploads\/.+?)\)/);
    if (imgMatch) {
      curLamina.urlImagem = imgMatch[1].trim();
      continue;
    }
  }

  // Pin table header detection
  if (line.match(/^\|\s*#\s*\|\s*Estrutura/)) {
    parsingPins = true;
    continue;
  }
  if (parsingPins && line.match(/^\|---/)) continue;

  // Pin rows
  if (parsingPins && line.startsWith('|')) {
    const cols = line.split('|').map(c => c.trim()).filter(Boolean);
    if (cols.length >= 3) {
      const rotulo = cols[1];
      const posStr = cols[2];
      // Handle multiple positions (bilateral): "(40%, 57%)" or "(63%, 36%) / (65%, 43%)"
      const posMatches = [...posStr.matchAll(/\(([\d.]+)%,\s*([\d.]+)%\)/g)];
      if (posMatches.length > 0) {
        for (const pm of posMatches) {
          const x = Math.round(parseFloat(pm[1]));
          const y = Math.round(parseFloat(pm[2]));
          curLamina.pinos.push({ rotulo, x, y });
        }
      }
    }
    continue;
  }

  // End of pin table
  if (parsingPins && !line.startsWith('|') && line.trim() !== '') {
    parsingPins = false;
  }
}

// Clean up: remove tituloOriginal, handle empty divisions
for (const sys of sistemas) {
  delete sys.tituloOriginal;
  // If system has no divisions, no fix needed
  // Remove divisions that have zero laminas? Keep them as "Em breve"
}

// Add neural from Wikimedia Commons
const neuralSys = sistemas.find(s => s.id === 'sistema_neural');
if (neuralSys) {
  // The Asclépio neural section has basically nothing (1 image, 0 pins)
  // Supplement with the Wikimedia brain image
  const encDiv = neuralSys.divisoes.find(d => d.titulo === 'Geral') || neuralSys.divisoes[0];
  if (encDiv) {
    encDiv.laminas.unshift({
      id: 'neu_lobos_commons',
      titulo: 'Lobos cerebrais — vista lateral (Wikimedia)',
      urlImagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Cerebrum_lobes.svg/960px-Cerebrum_lobes.svg.png',
      fonte: 'commons',
      credito: 'Jkwchui (via Wikimedia Commons)',
      urlPaginaFonte: 'https://commons.wikimedia.org/wiki/File:Cerebrum_lobes.svg',
      licenca: 'CC BY-SA 3.0',
      alt: 'Diagrama dos lobos cerebrais: frontal, parietal, temporal e occipital',
      pinos: [
        { rotulo: 'Lobo frontal', x: 18, y: 45 },
        { rotulo: 'Lobo parietal', x: 52, y: 22 },
        { rotulo: 'Lobo occipital', x: 82, y: 38 },
        { rotulo: 'Lobo temporal', x: 45, y: 72 },
        { rotulo: 'Cerebelo', x: 80, y: 72 },
        { rotulo: 'Tronco encefálico', x: 68, y: 85 },
      ],
    });
  }
}

const output = {
  version: 3,
  updatedAt: new Date().toISOString(),
  referenciaAsclepio: {
    nome: 'Asclépio UFU — Atlas Anatômico Digital',
    url: 'https://www.asclepioanatomiaufu.com/',
  },
  sistemas,
};

// Stats
let totalLam = 0, totalPins = 0;
for (const s of sistemas) {
  for (const d of s.divisoes) {
    totalLam += d.laminas.length;
    for (const l of d.laminas) totalPins += l.pinos.length;
  }
}

fs.writeFileSync(OUT_PATH, JSON.stringify(output, null, 2), 'utf8');
console.log(`Gerado: ${OUT_PATH}`);
console.log(`  ${sistemas.length} sistemas`);
console.log(`  ${sistemas.reduce((t, s) => t + s.divisoes.length, 0)} divisões`);
console.log(`  ${totalLam} lâminas`);
console.log(`  ${totalPins} alfinetes`);
