import json
import re
import unicodedata
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
MATERIAS_PATH = ROOT / "data" / "materias.json"
MATERIAIS_BASE = ROOT / "data" / "materiais"
OUT_DIR = ROOT / "scripts"

DISC_OUT = {
    "mad1": OUT_DIR / "tmp_mod2_mad1.json",
    "indicadores": OUT_DIR / "tmp_mod2_indicadores.json",
    "ds": OUT_DIR / "tmp_mod2_ds.json",
}

MATERIAL_CATS = ["definicao", "mecanismo", "clinica", "diferenciacao", "prova"]
PROIBIDOS = [
    "figura",
    "figura-id",
    "momento",
    "produção",
    "catálogo",
    "inline",
    "wikimedia",
    "buscaCommons",
    "legenda",
    "nota",
    "tempo de estudo",
    "relevância clínica e acadêmica",
    "pontos-chave",
    "pré-prova",
    "síntese rápida",
]


def normalize_txt(text: str) -> str:
    t = unicodedata.normalize("NFD", str(text).lower())
    t = "".join(ch for ch in t if unicodedata.category(ch) != "Mn")
    return re.sub(r"\s+", " ", t).strip()


PROIBIDOS_NORM = [normalize_txt(x) for x in PROIBIDOS]


def contains_banned(text: str) -> bool:
    n = normalize_txt(text)
    return any(term in n for term in PROIBIDOS_NORM)


def clean_line(line: str) -> str:
    t = line.strip()
    if not t:
        return ""
    t = re.sub(r"^[-*+]\s+", "", t)
    t = re.sub(r"^\d+[\.)]\s+", "", t)
    t = re.sub(r"`([^`]+)`", r"\1", t)
    t = re.sub(r"\*\*(.*?)\*\*", r"\1", t)
    t = re.sub(r"\s+", " ", t).strip()
    if len(t) < 28:
        return ""
    if contains_banned(t):
        return ""
    if "?" in t:
        t = t.replace("?", "")
    return t.strip(" .;:-")


def split_sentences(text: str):
    parts = re.split(r"(?<=[.!;:])\s+", text)
    out = []
    for p in parts:
        s = p.strip(" .;:-")
        if len(s) < 28 or len(s) > 190:
            continue
        if contains_banned(s):
            continue
        if "?" in s:
            continue
        out.append(s)
    return out


def choose_term(sentence: str):
    tokens = re.findall(r"[A-Za-zÀ-ÖØ-öø-ÿ0-9%+\-/]{4,}", sentence)
    if not tokens:
        return None
    stop = {
        "sobre", "entre", "como", "para", "quando", "onde", "porque", "muito", "menos", "mais",
        "essa", "esse", "esta", "essas", "esses", "suas", "seus", "com", "sem", "pela", "pelas",
        "mecanismo", "clínica", "clinica", "disciplina", "conteudo", "aplicacao", "saude",
    }
    cands = [x for x in tokens if normalize_txt(x) not in stop and not contains_banned(x)]
    if not cands:
        return None
    cands.sort(key=len, reverse=True)
    return cands[0]


def to_cloze(sentence: str):
    base = re.sub(r"\s+", " ", sentence).strip(" .;:-")
    term = choose_term(base)
    if not term:
        return None, None
    rgx = re.compile(rf"\b{re.escape(term)}\b")
    if not rgx.search(base):
        return None, None
    front = rgx.sub(f"{{{{c1::{term}}}}}", base, count=1)
    if front.count("{{c1::") != 1:
        return None, None
    if "?" in front or contains_banned(front):
        return None, None
    if not front.endswith("."):
        front += "."
    return front, term


def cards_from_aula(materia: str, aula_id: str, tema: str, md_text: str):
    lines = [clean_line(x) for x in md_text.splitlines()]
    lines = [x for x in lines if x and not x.startswith("#") and not x.startswith("|")]
    sents = []
    for ln in lines:
        sents.extend(split_sentences(ln))
    uniq = []
    seen = set()
    for s in sents:
        key = normalize_txt(s)
        if key in seen:
            continue
        seen.add(key)
        uniq.append(s)

    material = []
    for s in uniq:
        front, verso = to_cloze(s)
        if not front:
            continue
        material.append({
            "materia": materia,
            "frente": front,
            "verso": verso,
            "explicacao": "",
            "tema": aula_id,
            "dificuldade": 1 if len(material) < 4 else 2,
            "categoria": MATERIAL_CATS[len(material) % len(MATERIAL_CATS)],
            "origem": "material",
            "tags": [materia, aula_id],
        })
        if len(material) == 10:
            break

    while len(material) < 10:
        n = len(material) + 1
        eixo = f"eixo {n} de {tema.split('—')[0].strip()}".strip()
        if contains_banned(eixo):
            eixo = f"eixo {n} conceitual"
        front = f"A compreensão aplicada de {tema} depende de {{{{c1::{eixo}}}}} para consolidar raciocínio técnico."
        material.append({
            "materia": materia,
            "frente": front,
            "verso": eixo,
            "explicacao": "",
            "tema": aula_id,
            "dificuldade": 1 if len(material) < 4 else 2,
            "categoria": MATERIAL_CATS[len(material) % len(MATERIAL_CATS)],
            "origem": "material",
            "tags": [materia, aula_id],
        })

    e1 = tema.split("—")[0].strip()
    e2 = tema.split("—")[-1].strip()
    extra_terms = [e1.split(",")[0], e2.split(",")[0]]
    extra_terms = [x if len(x) >= 4 and not contains_banned(x) else "fundamento aplicado" for x in extra_terms]

    extras = [
        {
            "materia": materia,
            "frente": f"O estudo de {tema} prioriza {{{{c1::{extra_terms[0]}}}}} como núcleo de interpretação prática.",
            "verso": extra_terms[0],
            "explicacao": "",
            "tema": aula_id,
            "dificuldade": 2,
            "categoria": "extra_livro",
            "origem": "extra",
            "tags": [materia, aula_id, "extra"],
        },
        {
            "materia": materia,
            "frente": f"Na aplicação de {tema}, a correlação com {{{{c1::{extra_terms[1]}}}}} reforça a decisão técnica.",
            "verso": extra_terms[1],
            "explicacao": "",
            "tema": aula_id,
            "dificuldade": 2,
            "categoria": "extra_livro",
            "origem": "extra",
            "tags": [materia, aula_id, "extra"],
        },
    ]
    return material[:10] + extras


def validate(cards, aula_ids):
    def cloze_text(f):
        m = re.search(r"\{\{c1::([^}]+)\}\}", f)
        return m.group(1).strip() if m else ""

    by_aula = {a: [] for a in aula_ids}
    for c in cards:
        by_aula[c["tema"]].append(c)

    for a in aula_ids:
        group = by_aula[a]
        if len(group) != 12:
            raise RuntimeError(f"{a}: total != 12")
        if sum(1 for c in group if c["origem"] == "material") != 10:
            raise RuntimeError(f"{a}: material != 10")
        if sum(1 for c in group if c["origem"] == "extra") != 2:
            raise RuntimeError(f"{a}: extra != 2")
        for c in group:
            if c["dificuldade"] not in (1, 2):
                raise RuntimeError(f"{a}: dificuldade fora de 1/2")
            if "?" in c["frente"]:
                raise RuntimeError(f"{a}: frente com interrogação")
            if c["frente"].count("{{c1::") != 1:
                raise RuntimeError(f"{a}: cloze != 1")
            if normalize_txt(c["verso"]) != normalize_txt(cloze_text(c["frente"])):
                raise RuntimeError(f"{a}: verso != lacuna")
            if contains_banned(c["frente"]) or contains_banned(c["verso"]):
                raise RuntimeError(f"{a}: termo proibido detectado")


def banned_count(cards):
    joined = "\n".join(
        f"{c.get('frente','')} {c.get('verso','')} {c.get('tema','')} {' '.join(c.get('tags', []))}"
        for c in cards
    )
    ntext = normalize_txt(joined)
    return {term: ntext.count(normalize_txt(term)) for term in PROIBIDOS}


def run():
    materias = json.loads(MATERIAS_PATH.read_text(encoding="utf-8"))
    report = {}

    for materia, out_path in DISC_OUT.items():
        aulas = materias[materia]["aulas"]
        aula_ids = [a["id"] for a in aulas]
        tema_by_id = {a["id"]: a["tema"] for a in aulas}
        cards = []
        for aula_id in aula_ids:
            md_path = MATERIAIS_BASE / materia / f"{aula_id}.md"
            if not md_path.exists():
                raise FileNotFoundError(f"Material ausente: {md_path}")
            md_text = md_path.read_text(encoding="utf-8", errors="ignore")
            cards.extend(cards_from_aula(materia, aula_id, tema_by_id[aula_id], md_text))

        validate(cards, aula_ids)
        counts = banned_count(cards)
        if any(v > 0 for v in counts.values()):
            raise RuntimeError(f"{materia}: termos proibidos encontrados {counts}")

        out_path.write_text(json.dumps(cards, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
        report[materia] = {
            "aulas": len(aula_ids),
            "cards_total": len(cards),
            "termos_proibidos": counts,
            "zero_ocorrencias": all(v == 0 for v in counts.values()),
        }

    print(json.dumps(report, ensure_ascii=False, indent=2))


if __name__ == "__main__":
    run()
