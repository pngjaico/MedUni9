/**
 * Reforço conservador de ** no corpo da aula (antes de ## Pré-Prova), módulos 1–4.
 * Só adiciona marcadores; não altera palavras. Máx. 2 ênfases por linha; ignora linhas que já têm negrito.
 */
const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");
const MODULES = [1, 2, 3, 4].map((n) => path.join(ROOT, "materiais", `modulo${n}`));

// Mais longas primeiro (evita recortar subfrases)
const PHRASES = [
  "distúrbios circulatórios",
  "acurácia diagnóstica",
  "tomada de decisão clínica",
  "MHC de classe II",
  "MHC de classe I",
  "linfócitos T CD4+",
  "linfócitos T CD8+",
  "Sistema Nervoso Central",
  "Sistema Nervoso Periférico",
  "sistema nervoso autônomo",
  "resposta primária e secundária",
  "memória imunológica",
  "especificidade antigênica",
  "imunidade adaptativa",
  "imunidade inata",
  "imunidade humoral",
  "imunidade celular",
  "seleção clonal",
  "receptores de antígeno",
  "células apresentadoras",
  "apresentação de antígeno",
  "resposta primária",
  "resposta secundária",
  "tolerância central",
  "tolerância periférica",
  "substância cinzenta",
  "substância branca",
  "medula espinhal",
  "tronco encefálico",
  "sistema límbico",
  "barreira hematoencefálica",
  "acetilcolina",
  "noradrenalina",
  "norepinefrina",
  "dopamina",
  "serotonina",
  "GABA",
  "potencial de ação",
  "potencial de repouso",
  "sinapse elétrica",
  "sinapse química",
  "neurotransmissor",
  "neurotransmissores",
  "receptor nicotínico",
  "receptor muscarínico",
  "receptor adrenérgico",
  "receptor alfa",
  "receptor beta",
  "fármaco agonista",
  "fármaco antagonista",
  "biodisponibilidade",
  "meia-vida",
  "clearance",
  "volume de distribuição",
  "efeito adverso",
  "fisiopatológica",
  "fisiopatológico",
  "necrose",
  "apoptose",
  "isquemia",
  "infarto",
  "trombose",
  "embolia",
  "reperfusão",
  "hipóxia",
  "edema",
  "choque séptico",
  "choque",
  "metaplasia",
  "displasia",
  "intervalo de confiança",
  "valor de p",
  "p < 0,05",
  "significância estatística",
  "sensibilidade",
  "especificidade",
  "valor preditivo",
  "razão de chances",
  "HIV",
  "AIDS",
  "Uninove",
  "PCR em tempo real",
  "reação em cadeia",
  "DNA",
  "RNA",
  "mRNA",
  "ATP",
  "ADP",
  "AMP",
  "cAMP",
  "pH",
  "LCR",
  "SNC",
  "SNP",
  "SNA",
  "OMS",
  "SUS",
  "PSF",
  "IgG",
  "IgM",
  "IgA",
  "IgE",
  "IgD",
  "CD4+",
  "CD8+",
  "TCR",
  "APC",
  "MHC",
  "IFN-γ",
  "TNF-α",
  "IL-2",
  "IL-4",
  "IL-6",
  "IL-10",
  "IL-12",
  "TGF-β",
  "NF-κB",
  "COX-2",
  "ECG",
  "TC",
  "RM",
  "USG",
  "DPP",
  "DPN",
  "RNM",
];

function isSkippableLine(t) {
  if (!t.trim()) return true;
  if (t.trim().startsWith("#")) return true;
  if (t.trim().startsWith(">")) return true;
  if (t.trim().startsWith("|")) return true;
  if (t.trim().startsWith("---")) return true;
  if (/^\s*[-*]\s+/.test(t)) return true;
  if (/^\s*\d+\.\s+/.test(t)) return true;
  if (t.includes("**")) return true;
  return false;
}

function wordishBoundary(s, start, len) {
  const before = start > 0 ? s[start - 1] : " ";
  const after = start + len < s.length ? s[start + len] : " ";
  const isWord = (c) => /[0-9A-Za-zÀ-ÿ+±]/.test(c);
  if (isWord(before) || isWord(after)) return false;
  return true;
}

function isInsideBoldMarker(s, idx) {
  const before = s.slice(0, idx);
  const n = (before.match(/\*\*/g) || []).length;
  return n % 2 === 1;
}

function enhanceLine(line) {
  if (line.includes("**")) return line;
  let out = line;
  let added = 0;
  for (const phrase of PHRASES) {
    if (added >= 2) break;
    let idx = 0;
    while ((idx = out.indexOf(phrase, idx)) !== -1) {
      if (!isInsideBoldMarker(out, idx) && wordishBoundary(out, idx, phrase.length)) {
        out =
          out.slice(0, idx) +
          "**" +
          phrase +
          "**" +
          out.slice(idx + phrase.length);
        added++;
        break;
      }
      idx += phrase.length;
    }
  }
  return out;
}

function processBodyBeforePreProva(text) {
  const marker = "\n## Pré-Prova\n";
  const i = text.indexOf(marker);
  if (i === -1) return { head: text, changed: false };
  const head = text.slice(0, i);
  const tail = text.slice(i);
  const lines = head.split(/\r?\n/);
  let changed = false;
  const outLines = lines.map((line) => {
    const t = line;
    if (isSkippableLine(t)) return line;
    if (t.length < 40) return line;
    const next = enhanceLine(t);
    if (next !== line) changed = true;
    return next;
  });
  return { head: outLines.join("\n") + tail, changed };
}

function walk(dir, acc) {
  if (!fs.existsSync(dir)) return;
  for (const name of fs.readdirSync(dir)) {
    const p = path.join(dir, name);
    if (fs.statSync(p).isDirectory()) walk(p, acc);
    else if (name.endsWith(".md")) acc.push(p);
  }
}

let filesChanged = 0;
for (const mod of MODULES) {
  const files = [];
  walk(mod, files);
  for (const f of files.sort()) {
    const raw = fs.readFileSync(f, "utf8");
    const norm = raw.replace(/\r\n/g, "\n");
    const { head: next, changed } = processBodyBeforePreProva(norm);
    if (!changed) continue;
    const out = next.replace(/\n/g, "\r\n");
    fs.writeFileSync(f, out, "utf8");
    filesChanged++;
    const rel = path.relative(path.join(ROOT, "materiais"), f);
    const dst = path.join(ROOT, "data", "materiais", rel);
    fs.mkdirSync(path.dirname(dst), { recursive: true });
    fs.writeFileSync(dst, out, "utf8");
    console.log(rel);
  }
}
console.log("files touched:", filesChanged);
