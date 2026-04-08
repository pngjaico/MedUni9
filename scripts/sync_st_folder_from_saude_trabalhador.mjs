/**
 * Mantém data/materiais/st espelhado a partir de saude_trabalhador (mesmos st_a*.md).
 * Útil para referências legadas à pasta st/; o catálogo ativo usa saude_trabalhador.
 *
 * Uso: node scripts/sync_st_folder_from_saude_trabalhador.mjs
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");

const SRC = path.join(ROOT, "data", "materiais", "saude_trabalhador");
const DST_DATA = path.join(ROOT, "data", "materiais", "st");
const DST_MOD = path.join(ROOT, "materiais", "modulo3", "st");

function main() {
  if (!fs.existsSync(SRC)) {
    console.error("Fonte inexistente:", SRC);
    process.exit(1);
  }
  fs.mkdirSync(DST_DATA, { recursive: true });
  fs.mkdirSync(DST_MOD, { recursive: true });
  let n = 0;
  for (const f of fs.readdirSync(SRC).filter((x) => x.endsWith(".md"))) {
    const body = fs.readFileSync(path.join(SRC, f), "utf8");
    fs.writeFileSync(path.join(DST_DATA, f), body, "utf8");
    fs.writeFileSync(path.join(DST_MOD, f), body, "utf8");
    n++;
  }
  console.log("sync_st_folder: copiados", n, "arquivos para data/materiais/st e materiais/modulo3/st");
}

main();
