/**
 * Converte ### O que você PRECISA saber + lista em ### Síntese para a prova (prosa).
 * Escreve em data/materiais e espelha em materiais/moduloN.
 *
 * Uso: node scripts/fix_precisa_to_sintese.mjs
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const MATERIAS = path.join(ROOT, "data", "materias.json");

/** @type {Record<string, number>} materiaId -> modulo */
function loadModulos() {
  const j = JSON.parse(fs.readFileSync(MATERIAS, "utf8"));
  const m = {};
  for (const [id, v] of Object.entries(j)) {
    if (v && typeof v.modulo === "number") m[id] = v.modulo;
  }
  return m;
}

const RE_BLOCK =
  /### O que você PRECISA saber\s*\n+([\s\S]*?)\n+(### Diferenciações[^\n]*)\n/m;

function stripMdBold(s) {
  return s.replace(/\*\*([^*]+)\*\*/g, "$1");
}

function sentenceCase(s) {
  s = s.trim();
  if (!s) return s;
  if (!/[.!?]$/.test(s)) s += ".";
  return s.charAt(0).toUpperCase() + s.slice(1);
}

function listToProse(listText) {
  const lines = listText.split(/\r?\n/);
  const items = [];
  for (const line of lines) {
    const m = line.match(/^\s*-\s+(.*)$/);
    if (m) items.push(stripMdBold(m[1]).trim());
  }
  if (items.length === 0) return null;
  const n = items.length;
  const nParas = n <= 4 ? 2 : n <= 8 ? 3 : 4;
  const perChunk = Math.ceil(n / nParas);
  const paras = [];
  for (let i = 0; i < n; i += perChunk) {
    const chunk = items.slice(i, i + perChunk).map(sentenceCase);
    paras.push(chunk.join(" "));
  }
  return paras.join("\n\n");
}

function transformContent(content) {
  content = content.replace(/\r\n/g, "\n");
  if (
    content.includes("### Síntese para a prova") &&
    content.includes("### O que você PRECISA saber")
  ) {
    return content.replace(
      /### O que você PRECISA saber\s*\n+([\s\S]*?)(?=\n### Diferenciações)/m,
      ""
    );
  }
  if (content.includes("### Síntese para a prova")) return content;
  const m = content.match(RE_BLOCK);
  if (!m) return content;
  const prose = listToProse(m[1]);
  if (!prose) return content;
  const replacement = `### Síntese para a prova\n\n${prose}\n\n${m[2]}\n`;
  return content.replace(RE_BLOCK, replacement);
}

function mirrorWrite(materiaId, modulo, aulaFile, body) {
  const dataPath = path.join(ROOT, "data", "materiais", materiaId, aulaFile);
  fs.mkdirSync(path.dirname(dataPath), { recursive: true });
  fs.writeFileSync(dataPath, body, "utf8");
  const modPath = path.join(ROOT, "materiais", `modulo${modulo}`, materiaId, aulaFile);
  fs.mkdirSync(path.dirname(modPath), { recursive: true });
  fs.writeFileSync(modPath, body, "utf8");
}

function main() {
  const modulos = loadModulos();
  /** Disciplinas a corrigir (inclui pe1 ainda inativo no catálogo) */
  const TARGETS = ["bmf1", "clinica_medica6", "ds", "pe1"];
  let changed = 0;
  let scanned = 0;

  for (const materiaId of TARGETS) {
    const mod = modulos[materiaId];
    if (!mod) {
      console.warn(`Sem módulo em materias.json para ${materiaId}, pulando.`);
      continue;
    }
    const dir = path.join(ROOT, "data", "materiais", materiaId);
    if (!fs.existsSync(dir)) continue;
    const files = fs.readdirSync(dir).filter((f) => f.endsWith(".md"));
    for (const f of files.sort()) {
      scanned++;
      const fp = path.join(dir, f);
      const raw = fs.readFileSync(fp, "utf8");
      const next = transformContent(raw);
      if (next === normRaw(raw)) continue;
      mirrorWrite(materiaId, mod, f, next);
      changed++;
      console.log("OK", materiaId, f);
    }
  }
  console.log("fix_precisa_to_sintese: scanned", scanned, "changed", changed);
}

function normRaw(s) {
  return s.replace(/\r\n/g, "\n");
}

main();
