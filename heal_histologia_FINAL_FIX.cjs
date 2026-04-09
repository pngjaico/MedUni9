const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'data', 'histologia_atlas_v2.json');
const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

const fragments = {
  "PAVI": "MENTOSO", "PAVIMEN": "TOSO", "CILIN": "DRICO", "CILIN": "DRICAS",
  "ESTRA": "TIFICADO", "ESTRATIFICA": "DO", "ESTRATIFICADOPAVIMEN": "TOSO",
  "QUERA": "TINIZADO", "QUERA": "TINA", "QUERATINAESPES": "SA",
  "PSEUDO-ESTRA": "TIFICADO", "PSEUDOESTRA": "TIFICADO", "MICRO": "TUBULOS",
  "NETO": "COROS", "REORGANI": "ZACAO", "SUDO": "RIPARA", "SUDORÍ": "PARA",
  "EXO": "CRINA", "EXO": "CRINO", "ENDO": "CRINA", "ENDO": "CRINO",
  "CALICI": "FORME", "CALICI": "FORMES", "BASE": "MENTAL", "CON": "JUNTIVO",
  "ADIP": "OSO", "MUSCU": "LAR", "CARTI": "LAGINOSO", "CARTILAGEM": "FIBROSA",
  "OS": "SEO", "HEMA": "CIAS", "ERITRO": "CITOS", "LEUCO": "CITOS",
  "PLA": "QUETAS", "NEU": "RO", "GLIA": "IS", "PROCES": "SO", "MATE": "RIAL",
  "ESTRU": "TURA", "EPITE": "LIO", "MEMBRA": "NA", "GRANU": "LOSA",
  "DESCON": "DENSACAO", "CROMOSSO": "MOS", "ACIDO": "FILA", "CARIOTE": "CA",
  "TRANS": "VERSAL", "LONGI": "TUDINAL", "INFI": "TRACAO", "NITRA": "TADO",
  "PAVIMEN": "TOSAS", "DE": "CEBOLA", "FIBRO": "SA", "HIALI": "NA",
  "CONDROBLAS": "TOS", "CONDRO": "CITOS", "PERICON": "DRIO", "PERICONDRIO": "FIBROSO",
  "TERRITO": "RIAL", "FORMAN": "DO", "GRUPOS": "ISOGENOS", "ISOGENOS": "AXIAIS",
  "PROFA": "SE", "META": "SE", "ANA": "FASE", "TELO": "FASE"
};

function cleanLine(text, slideTitle) {
  if (!text) return "";
  let t = String(text).trim();
  t = t.replace(/^([A-Z]\d+)([A-Z]{3,})/i, '$1 $2');
  t = t.replace(/\b[A-Z]\d+[:\-·—]?\s*/ig, '');
  t = t.replace(/^DHisto\s+/i, '');

  if (slideTitle) {
    const titleBase = slideTitle.split('—')[0].replace(/[\-\s]/g, '').toLowerCase();
    const lineBase = t.substring(0, slideTitle.length + 5).replace(/[\-\s]/g, '').toLowerCase();
    if (lineBase.includes(titleBase)) {
      t = t.replace(new RegExp(`^.*?${slideTitle.split('—')[0].trim()}[\\s\\-]*`, 'i'), '');
    }
    t = t.replace(/^Menisco-HE\s*/i, '');
  }

  t = t.replace(/DECEBOLA/ig, 'DE CEBOLA');
  t = t.replace(/PLANTA\s*DOPE/ig, 'PLANTA DO PÉ');
  t = t.replace(/PONTADE\s*SETA/ig, 'PONTA DE SETA');
  t = t.replace(/ARTEFATO\s*DE\s*TECNICA/ig, 'Artefato de técnica');
  t = t.replace(/GRUPOSISOGENOSAXIAIS/ig, 'Grupos isógenos axiais');
  t = t.replace(/MATRIZAPRESENTANDO/ig, 'Matriz apresentando');

  Object.entries(fragments).forEach(([pre, suf]) => {
    const r1 = new RegExp(`\\b${pre}\\.?\\s+${suf}\\b`, 'ig');
    t = t.replace(r1, pre + suf);
    const r2 = new RegExp(`\\b${pre}\\s+${suf}\\b`, 'ig');
    t = t.replace(r2, pre + suf);
  });

  return t.replace(/\s+/g, ' ').trim();
}

function healLegenda(lines, slideTitle) {
  if (!Array.isArray(lines)) return [];
  let cleaned = lines.map(line => cleanLine(line, slideTitle)).filter(x => x.length > 1);
  let merged = [];
  let buffer = "";

  for (let line of cleaned) {
    if (buffer) {
      const isListItem = /^\(?[a-z0-9]\)?[\s\-\)]/.test(line);
      const isShort = line.length < 15;
      const startsLower = /^[a-z]/.test(line);
      const endsOpen = !/[.!?;:]$/.test(buffer);
      
      let shouldJoin = endsOpen || startsLower || isShort || !isListItem;
      
      if (line.startsWith('(') || line.toLowerCase().includes('ponta de seta')) shouldJoin = true;
      if (buffer.toLowerCase().endsWith('fibro') || buffer.toLowerCase().endsWith('fibro.')) shouldJoin = true;

      if (shouldJoin) {
        buffer += " " + line;
      } else {
        merged.push(buffer);
        buffer = line;
      }
    } else {
      buffer = line;
    }
  }
  if (buffer) merged.push(buffer);

  return merged.map(s => {
    let res = s.toLowerCase().trim();
    if (!res) return "";
    res = res.charAt(0).toUpperCase() + res.slice(1);
    ["HE", "HF", "DNA", "RNA", "PRATA", "MALLORY", "M.GRUNWALD-GIEMSA"].forEach(sig => {
      const r = new RegExp(`\\b${sig.toLowerCase()}\\b`, 'g');
      res = res.replace(r, sig);
    });
    // Remove specific known noisy starts
    res = res.replace(/^sa-HE\s+/i, '');
    res = res.replace(/\.+$/, '');
    return res;
  }).filter(x => x && x.length > 3);
}

data.sistemas.forEach(s => {
  s.divisoes.forEach(d => {
    d.laminas.forEach(l => {
      l.titulo = cleanLine(l.titulo || '').replace(/^Raiz de cebola - hf —\s*/i, '');
      l.titulo = l.titulo.charAt(0).toUpperCase() + l.titulo.slice(1);
      l.legendaTranscrita = healLegenda(l.legendaTranscrita || [], l.titulo);
    });
  });
});

fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
console.log(`Sucesso FINAL-FIX!`);
