/**
 * Build an allowlisted Firebase Hosting bundle in ./public.
 * This avoids deploying the whole repository root.
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const PUBLIC = path.join(ROOT, "public");

const ROOT_FILES = [
  "index.html",
  "comprar.html",
  "landing.html",
  "termos.html",
  "admin.html",
  "manifest.json",
  "sw.js",
  "firebase-config.js",
  "stripe-config.js",
  "mascote.webp",
  "mascote_small.webp",
  "mascote_transparent.png",
  "mascote-auth.webp",
  "mascote.png",
];

const INCLUDE_OPTIONAL_ASSETS = process.env.INCLUDE_OPTIONAL_ASSETS === "1";

const ROOT_DIRS = INCLUDE_OPTIONAL_ASSETS ? ["assets", "figuras-materiais"] : ["assets"];

const DATA_FILES = [
  "materias.json",
  "flashcards.json",
  "questoes.json",
  "questoes_antigas.json",
  "materiais_figuras.json",
  "to_instrumentais.json",
  "anatomia_atlas.json",
  "anatomia_revisao.json",
  "histologia_atlas.json",
  "histologia_atlas_v2.json",
  "histologia_revisao.json",
  "anatomia_data.json",
  "histologia_data.json",
  "cupons.json",
  "embaixadores.json",
  "vendas_mensais.json",
];

const DATA_DIRS = INCLUDE_OPTIONAL_ASSETS
  ? ["curriculum", "instrumentais", "histologia", "resumos_a4", "materiais_figuras"]
  : ["curriculum", "instrumentais", "histologia", "resumos_a4", "materiais_figuras"];

function rmDirSafe(p) {
  if (fs.existsSync(p)) fs.rmSync(p, { recursive: true, force: true });
}

function ensureDir(p) {
  fs.mkdirSync(p, { recursive: true });
}

function copyFileIfExists(src, dst) {
  if (!fs.existsSync(src)) return false;
  ensureDir(path.dirname(dst));
  fs.copyFileSync(src, dst);
  return true;
}

function copyDirIfExists(src, dst) {
  if (!fs.existsSync(src)) return false;
  ensureDir(path.dirname(dst));
  fs.cpSync(src, dst, { recursive: true });
  return true;
}

function writeFallbackFavicon(dst) {
  const size = 16;
  const pixelBytes = size * size * 4;
  const maskBytes = Math.ceil(size / 32) * 4 * size;
  const imageBytes = 40 + pixelBytes + maskBytes;
  const buffer = Buffer.alloc(22 + imageBytes);

  buffer.writeUInt16LE(0, 0);
  buffer.writeUInt16LE(1, 2);
  buffer.writeUInt16LE(1, 4);
  buffer.writeUInt8(size, 6);
  buffer.writeUInt8(size, 7);
  buffer.writeUInt8(0, 8);
  buffer.writeUInt8(0, 9);
  buffer.writeUInt16LE(1, 10);
  buffer.writeUInt16LE(32, 12);
  buffer.writeUInt32LE(imageBytes, 14);
  buffer.writeUInt32LE(22, 18);

  const dib = 22;
  buffer.writeUInt32LE(40, dib);
  buffer.writeInt32LE(size, dib + 4);
  buffer.writeInt32LE(size * 2, dib + 8);
  buffer.writeUInt16LE(1, dib + 12);
  buffer.writeUInt16LE(32, dib + 14);
  buffer.writeUInt32LE(0, dib + 16);
  buffer.writeUInt32LE(pixelBytes, dib + 20);

  fs.writeFileSync(dst, buffer);
}

function main() {
  rmDirSafe(PUBLIC);
  ensureDir(PUBLIC);

  let copiedFiles = 0;
  let copiedDirs = 0;

  for (const f of ROOT_FILES) {
    if (copyFileIfExists(path.join(ROOT, f), path.join(PUBLIC, f))) copiedFiles++;
  }
  for (const d of ROOT_DIRS) {
    if (copyDirIfExists(path.join(ROOT, d), path.join(PUBLIC, d))) copiedDirs++;
  }

  const materiaisBase = path.join(ROOT, "materiais");
  const materiaisOut = path.join(PUBLIC, "materiais");
  ensureDir(materiaisOut);
  if (fs.existsSync(materiaisBase)) {
    const moduloDirs = fs
      .readdirSync(materiaisBase, { withFileTypes: true })
      .filter((entry) => entry.isDirectory() && /^modulo\d+$/i.test(entry.name))
      .map((entry) => entry.name)
      .sort((a, b) => Number(a.replace(/\D/g, "")) - Number(b.replace(/\D/g, "")));

    for (const moduloDir of moduloDirs) {
      if (copyDirIfExists(path.join(materiaisBase, moduloDir), path.join(materiaisOut, moduloDir))) copiedDirs++;
    }
  }

  const dataOut = path.join(PUBLIC, "data");
  ensureDir(dataOut);
  for (const f of DATA_FILES) {
    if (copyFileIfExists(path.join(ROOT, "data", f), path.join(dataOut, f))) copiedFiles++;
  }
  for (const d of DATA_DIRS) {
    if (copyDirIfExists(path.join(ROOT, "data", d), path.join(dataOut, d))) copiedDirs++;
  }

  writeFallbackFavicon(path.join(PUBLIC, "favicon.ico"));
  copiedFiles++;

  console.log(
    JSON.stringify(
      {
        publicDir: PUBLIC,
        copiedFiles,
        copiedDirs,
      },
      null,
      2
    )
  );
}

main();

