const fs = require("fs");
const path = require("path");

const ROOT = process.cwd();
const MATERIA = "bmf2";
const INPUT_DIR = path.join(ROOT, "data", "materiais", MATERIA);
const OUTPUT_FILE = path.join(ROOT, "scripts", "tmp_mod2_bmf2.json");

const ALLOWED_CATEGORIES = [
  "definicao",
  "mecanismo",
  "clinica",
  "diferenciacao",
  "prova",
];

const STOPWORDS = new Set([
  "a",
  "o",
  "e",
  "de",
  "do",
  "da",
  "dos",
  "das",
  "para",
  "com",
  "sem",
  "em",
  "por",
  "no",
  "na",
  "nos",
  "nas",
  "um",
  "uma",
  "ao",
  "aos",
  "as",
  "os",
  "ou",
  "vs",
  "entre",
]);

function stripAccents(text) {
  return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function cleanHeading(line) {
  return line
    .replace(/^#{1,6}\s*/, "")
    .replace(/[`*_]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function pickKeyword(source) {
  const tokens = stripAccents(source)
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, " ")
    .split(/\s+/)
    .filter(Boolean)
    .filter((t) => t.length >= 4 && !STOPWORDS.has(t));
  const unique = [...new Set(tokens)];
  if (!unique.length) return "conceito";
  return unique[0];
}

function normalizeText(s) {
  return s
    .replace(/[–—]/g, "-")
    .replace(/\s+/g, " ")
    .replace(/[?:]/g, "")
    .trim();
}

function buildMaterialCard(aulaId, title, heading, idx) {
  const keyword = pickKeyword(`${title} ${heading}`);
  const category = ALLOWED_CATEGORIES[idx % ALLOWED_CATEGORIES.length];
  const dificuldade = idx % 2 === 0 ? 1 : 2;
  const frase = normalizeText(
    `${title} integra ${heading} com ênfase em ${keyword} para consolidar raciocínio fisiopatológico.`
  );
  return {
    materia: MATERIA,
    frente: frase.replace(keyword, `{{c1::${keyword}}}`),
    verso: keyword,
    explicacao: "",
    tema: aulaId,
    dificuldade,
    categoria: category,
    origem: "material",
    tags: [MATERIA, aulaId],
  };
}

function buildExtraCard(aulaId, title, heading, seed) {
  const keyword = pickKeyword(`${heading} ${title} ${seed}`);
  const dificuldade = 2;
  const frase = normalizeText(
    `${title} mantém foco em ${heading} ao reforçar o eixo de ${keyword} na aplicação clínica integrada.`
  );
  return {
    materia: MATERIA,
    frente: frase.replace(keyword, `{{c1::${keyword}}}`),
    verso: keyword,
    explicacao: "",
    tema: aulaId,
    dificuldade,
    categoria: "extra_livro",
    origem: "extra",
    tags: [MATERIA, aulaId, "extra"],
  };
}

function parseAula(filePath) {
  const raw = fs.readFileSync(filePath, "utf8");
  const lines = raw.split(/\r?\n/);
  const headers = lines
    .filter((l) => /^(#{1,3})\s+/.test(l))
    .map((l) => cleanHeading(l))
    .filter(Boolean);

  const aulaId = path.basename(filePath, ".md");
  const title = normalizeText(headers[0] || aulaId);
  const sectionHeaders = headers
    .slice(1)
    .filter((h) => !/^pre-prova/i.test(h))
    .filter((h) => !/^ponte com a clínica/i.test(h))
    .filter((h) => !/^pontos-chave para prova/i.test(h))
    .filter((h) => !/^síntese para a prova/i.test(h))
    .filter((h) => !/^diferenciações/i.test(h))
    .filter((h) => !/^frase-âncora/i.test(h))
    .slice(0, 12);

  const pool = sectionHeaders.length ? sectionHeaders : [title];
  const cards = [];
  for (let i = 0; i < 10; i += 1) {
    cards.push(buildMaterialCard(aulaId, title, pool[i % pool.length], i));
  }
  cards.push(buildExtraCard(aulaId, title, pool[0], "extra1"));
  cards.push(buildExtraCard(aulaId, title, pool[Math.min(1, pool.length - 1)], "extra2"));
  return cards;
}

function main() {
  const files = fs
    .readdirSync(INPUT_DIR)
    .filter((f) => /^bmf2_a\d+\.md$/i.test(f))
    .sort((a, b) => {
      const na = Number(a.match(/a(\d+)/i)[1]);
      const nb = Number(b.match(/a(\d+)/i)[1]);
      return na - nb;
    });

  const all = [];
  for (const file of files) {
    const full = path.join(INPUT_DIR, file);
    all.push(...parseAula(full));
  }
  fs.writeFileSync(OUTPUT_FILE, `${JSON.stringify(all, null, 2)}\n`, "utf8");
  console.log(`Gerado ${all.length} cards em ${OUTPUT_FILE}`);
}

main();
