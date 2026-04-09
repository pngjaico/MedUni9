const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'data', 'histologia_atlas_v2.json');
const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

const tissueContexts = ["Cartilagem fibrosa", "Cartilagem hialina", "Cartilagem elástica", "Tecido conjuntivo", "Epitélio", "Pele", "Osso"];

function cleanLine(text, slideTitle) {
  if (!text) return "";
  let t = String(text).trim();
  
  // High intensity de-stucking for common OCR fails
  t = t.replace(/CARTILAGEM\s*FIBROSA/ig, 'Cartilagem fibrosa');
  t = t.replace(/TECIDO\s*ADIPOSO/ig, 'Tecido adiposo');
  t = t.replace(/TECIDO\s*CONJUNTIVO/ig, 'Tecido conjuntivo');
  t = t.replace(/CARTILAGEM\s*HIALINA/ig, 'Cartilagem hialina');
  t = t.replace(/ARTEFATO\s*DE\s*TECNICA/ig, 'Artefato de técnica');
  t = t.replace(/DECEBOLA/ig, 'de cebola');

  // Remove system codes (B1-, D3:, etc)
  t = t.replace(/^([A-Z]\d+)([A-Z]{3,})/i, '$1 $2');
  t = t.replace(/\b[A-Z]\d+[:\-·—]?\s*/ig, '');
  t = t.replace(/^DHisto\s+/i, '');

  if (slideTitle) {
    const titleBase = slideTitle.split('—')[0].trim();
    if (titleBase.length > 3) {
      // Avoid matching very short titles like "Pele" if it's too generic, but here we want to remove redundancy
      const r = new RegExp(`^${titleBase.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}[\\s\\-·—:]*`, 'i');
      t = t.replace(r, '');
    }
  }

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
      const endsOpen = !/[.!?;:]$/.test(buffer);
      // Join if looks like a fragment (lower case, ends with hyphen, or just short)
      let shouldJoin = endsOpen || !isListItem || line.length < 15 || /^[a-z]/.test(line);
      
      if (line.startsWith('(') || line.toLowerCase().includes('ponta de seta')) shouldJoin = true;
      if (buffer.toLowerCase().endsWith('fibro') || buffer.toLowerCase().endsWith('fibro.')) shouldJoin = true;

      if (shouldJoin) {
        if (buffer.endsWith('-')) buffer = buffer.slice(0,-1);
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
    
    // Case-insensitive peel back BEFORE sentence casing
    for(let tissue of tissueContexts) {
       const tissueLow = tissue.toLowerCase();
       // Check if line starts with tissue context, allowing for "he/hf" tag
       const r = new RegExp(`^${tissueLow}[\\s\\-·:]*(he|hf)?[\\s\\-·:]*`, 'i');
       if (r.test(res)) {
          const remainder = res.replace(r, '').trim();
          if (remainder.length > 3) {
             res = remainder;
          }
          break;
       }
    }

    // Sentence Case
    res = res.charAt(0).toUpperCase() + res.slice(1);
    
    // Custom replacements
    res = res.replace(/pontade/ig, 'ponta de');
    res = res.replace(/decebola/ig, 'de cebola');

    // Siglas
    ["HE", "HF", "DNA", "RNA", "PRATA", "MALLORY", "M.GRUNWALD-GIEMSA"].forEach(sig => {
      const r = new RegExp(`\\b${sig.toLowerCase()}\\b`, 'g');
      res = res.replace(r, sig);
    });
    
    res = res.replace(/\.+$/, '');
    return res;
  }).filter(x => x && x.length > 3);
}

data.sistemas.forEach(s => {
  s.divisoes.forEach(d => {
    d.laminas.forEach(l => {
      // 1. Clean the title first (remove A1-, etc)
      l.titulo = cleanLine(l.titulo || '').replace(/^Raiz de cebola - hf —\s*/i, '');
      l.titulo = l.titulo.charAt(0).toUpperCase() + l.titulo.slice(1);
      
      // 2. Clean the Alt text to match
      if (l.alt) {
         l.alt = cleanLine(l.alt, null);
         l.alt = l.alt.charAt(0).toUpperCase() + l.alt.slice(1);
      }

      // 3. Heal the legend with the cleaned title for redundancy check
      l.legendaTranscrita = healLegenda(l.legendaTranscrita || [], l.titulo);
    });
  });
});

fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
console.log(`Sucesso! Histologia 100% limpa (FINAL_V3).`);
