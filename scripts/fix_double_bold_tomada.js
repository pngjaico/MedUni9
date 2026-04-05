const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");

const RE1 =
  /Este tema conecta base fisiopatológica com \*\*\*\*tomada de decisão\*\* clínica\*\*\./g;
const FIX1 =
  "Este tema conecta base **fisiopatológica** com **tomada de decisão clínica**.";

const RE2 =
  /é ferramenta para \*\*\*\*tomada de decisão\*\* clínica\*\* inicial\./g;
const FIX2 =
  "é ferramenta para **tomada de decisão clínica** inicial.";

const files = [
  "materiais/modulo4/fisiopato_farmaco/ff4_a1.md",
  "materiais/modulo4/fisiopato_farmaco/ff4_a2.md",
  "materiais/modulo4/fisiopato_farmaco/ff4_a3.md",
  "materiais/modulo4/fisiopato_farmaco/ff4_a4.md",
  "materiais/modulo4/fisiopato_farmaco/ff4_a5.md",
  "materiais/modulo4/fisiopato_farmaco/ff4_a6.md",
  "materiais/modulo4/fisiopato_farmaco/ff4_a7.md",
  "materiais/modulo4/fisiopato_farmaco/ff4_a8.md",
  "materiais/modulo4/fisiopato_farmaco/ff4_a9.md",
  "materiais/modulo4/fisiopato_farmaco/ff4_a10.md",
  "materiais/modulo4/fisiopato_farmaco/ff4_a11.md",
  "materiais/modulo4/fisiopato_farmaco/ff4_a12.md",
  "materiais/modulo4/fisiopato_farmaco/ff4_a13.md",
  "materiais/modulo4/fisiopato_farmaco/ff4_a14.md",
  "materiais/modulo2/semiologia2/semio2_a3.md",
];

function apply(rel) {
  const f = path.join(ROOT, rel);
  if (!fs.existsSync(f)) return false;
  let s = fs.readFileSync(f, "utf8");
  let n = s.replace(RE1, FIX1).replace(RE2, FIX2);
  if (n === s) return false;
  fs.writeFileSync(f, n, "utf8");
  const dst = path.join(ROOT, "data", "materiais", rel.replace(/^materiais\//, ""));
  fs.mkdirSync(path.dirname(dst), { recursive: true });
  fs.writeFileSync(dst, n, "utf8");
  return true;
}

for (const rel of files) {
  if (apply(rel)) console.log("fixed", rel);
}
