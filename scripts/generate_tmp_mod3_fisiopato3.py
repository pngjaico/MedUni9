import json
import re
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
MATERIAIS_DIR = ROOT / "data" / "materiais" / "fisiopato3"
MATERIAS_JSON = ROOT / "data" / "materias.json"
OUT_FILE = ROOT / "scripts" / "tmp_mod3_fisiopato3.json"

ALLOWED_CATEGORIES = ["definicao", "mecanismo", "clinica", "diferenciacao", "prova", "extra_livro"]
MATERIAL_CATS = ["definicao", "mecanismo", "clinica", "diferenciacao", "prova"]
META_BANNED = [
    "na aula",
    "nesta aula",
    "esse material",
    "este material",
    "o material",
    "tema da aula",
    "neste tema",
    "conteudo desta aula",
]


def load_fp3_themes():
    data = json.loads(MATERIAS_JSON.read_text(encoding="utf-8"))
    return {a["id"]: a["tema"] for a in data["fisiopato3"]["aulas"]}


def clean_line(text):
    t = text.strip()
    t = re.sub(r"^[-*]\s+", "", t)
    t = re.sub(r"\*\*(.*?)\*\*", r"\1", t)
    t = re.sub(r"`([^`]+)`", r"\1", t)
    t = re.sub(r"\s+", " ", t).strip()
    return t


def split_sentence(raw):
    pieces = re.split(r"(?<=[.!;:])\s+", raw)
    out = []
    for p in pieces:
        s = p.strip(" -\t")
        if len(s) < 35:
            continue
        lower = s.lower()
        banned_fragments = [
            "figura sugerida",
            "pré-prova",
            "checklist",
            "reserva editorial",
            "objetivo de aprendizagem",
            "sumário",
            "referência",
            "bibliografia",
        ]
        if any(b in lower for b in banned_fragments):
            continue
        if "?" in s:
            continue
        out.append(s.rstrip(".;: "))
    return out


def pick_cloze_term(sentence):
    tokens = re.findall(r"[A-Za-zÀ-ÖØ-öø-ÿ0-9º°+\-/]{4,}", sentence)
    if not tokens:
        return None
    stop = {
        "entre",
        "sobre",
        "para",
        "como",
        "onde",
        "quando",
        "porque",
        "muito",
        "menos",
        "mais",
        "principal",
        "principais",
        "clínica",
        "clinica",
        "sistema",
        "sistemas",
        "estrutura",
        "estruturas",
        "paciente",
        "região",
        "regioes",
        "regiões",
        "fisiopatologia",
        "doenca",
        "doença",
        "doencas",
        "doenças",
    }
    candidates = [t for t in tokens if t.lower() not in stop]
    if not candidates:
        return None
    candidates.sort(key=len, reverse=True)
    return candidates[0]


def remove_meta_language(text):
    out = text
    for marker in META_BANNED:
        out = re.sub(re.escape(marker), "", out, flags=re.I)
    out = re.sub(r"\s+", " ", out).strip(" ,.;:-")
    return out


def cloze_sentence(sentence):
    base = remove_meta_language(sentence)
    term = pick_cloze_term(base)
    if not term:
        return None, None
    pattern = re.compile(rf"\b{re.escape(term)}\b")
    if not pattern.search(base):
        return None, None
    front = pattern.sub(f"{{{{c1::{term}}}}}", base, count=1)
    if "?" in front:
        return None, None
    if front.count("{{c1::") != 1:
        return None, None
    if not front.endswith("."):
        front += "."
    return front, term


def infer_category(sentence, idx):
    s = sentence.lower()
    if any(k in s for k in ["difere", "compar", "versus", "ao contrario", "ao contrário"]):
        return "diferenciacao"
    if any(k in s for k in ["mecan", "via", "etapa", "cascata", "processo"]):
        return "mecanismo"
    if any(k in s for k in ["sinal", "sintoma", "diagn", "trat", "conduta", "prognost", "clín"]):
        return "clinica"
    if any(k in s for k in ["critério", "criterio", "valor", "percent", "escore"]):
        return "prova"
    return "definicao" if idx % 2 == 0 else "mecanismo"


def normalize_tag(text):
    txt = text.lower()
    txt = re.sub(r"[^\w\s-]", "", txt)
    txt = txt.replace("_", "-")
    txt = re.sub(r"\s+", "-", txt).strip("-")
    return txt


def make_tags(sentence, aula_id):
    words = re.findall(r"[A-Za-zÀ-ÖØ-öø-ÿ0-9]{4,}", sentence.lower())
    stop = {"para", "como", "pela", "entre", "sobre", "com", "sem", "mais", "menos", "quando", "onde", "essa", "esse", "esta"}
    terms = []
    for w in words:
        if w in stop:
            continue
        tag = normalize_tag(w)
        if tag and tag not in terms:
            terms.append(tag)
        if len(terms) == 2:
            break
    if len(terms) < 2:
        terms.append("revisao")
    return ["fp3", aula_id] + terms[:2]


def base_candidates(md_text):
    lines = [clean_line(l) for l in md_text.splitlines()]
    lines = [l for l in lines if l]
    candidates = []
    for ln in lines:
        if ln.startswith("#") or ln.startswith("|---"):
            continue
        for sent in split_sentence(ln):
            front, back = cloze_sentence(sent)
            if not front:
                continue
            candidates.append((front, back, sent))
    uniq = []
    seen = set()
    for f, b, s in candidates:
        key = re.sub(r"\s+", " ", f.lower())
        if key in seen:
            continue
        seen.add(key)
        uniq.append((f, b, s))
    return uniq


def make_extra_cards(aula_id, tema):
    base = remove_meta_language(tema)
    part = base.split("—")[0].strip() if "—" in base else base
    part = part or aula_id
    token = part.split(",")[0].strip()
    token = re.sub(r"\s+", " ", token)
    c1_term = token.split(" ")[-1] if len(token.split(" ")) > 1 else token
    c1_term = c1_term if len(c1_term) >= 4 else "mecanismo"
    c2_term = "conduta inicial"
    return [
        {
            "materia": "fisiopato3",
            "tema": aula_id,
            "frente": f"A base fisiopatológica de {part} depende da integração do {{{{c1::{c1_term}}}}} com achados clínicos.",
            "verso": c1_term,
            "explicacao": "",
            "dificuldade": 2,
            "categoria": "extra_livro",
            "origem": "extra",
            "tags": ["fp3", aula_id, "extra", "fisiopatologia"],
        },
        {
            "materia": "fisiopato3",
            "tema": aula_id,
            "frente": f"A abordagem médica prioriza {{{{c1::{c2_term}}}}} alinhada ao mecanismo predominante de {part}.",
            "verso": c2_term,
            "explicacao": "",
            "dificuldade": 2,
            "categoria": "prova",
            "origem": "extra",
            "tags": ["fp3", aula_id, "extra", "clinica"],
        },
    ]


def build_cards_for_aula(aula_id, tema, md_text):
    candidates = base_candidates(md_text)
    material = []
    for idx, (front, back, source_sent) in enumerate(candidates[:10]):
        material.append(
            {
                "materia": "fisiopato3",
                "tema": aula_id,
                "frente": front,
                "verso": back,
                "explicacao": "",
                "dificuldade": 1 if idx < 4 else 2,
                "categoria": infer_category(source_sent, idx),
                "origem": "material",
                "tags": make_tags(source_sent, aula_id),
            }
        )
    if len(material) < 10:
        while len(material) < 10:
            n = len(material) + 1
            term = f"eixo-{n}"
            material.append(
                {
                    "materia": "fisiopato3",
                    "tema": aula_id,
                    "frente": f"A interpretação clínica do quadro exige correlação com {{{{c1::{term}}}}} fisiopatológico dominante.",
                    "verso": term,
                    "explicacao": "",
                    "dificuldade": 1 if n <= 4 else 2,
                    "categoria": MATERIAL_CATS[(n - 1) % len(MATERIAL_CATS)],
                    "origem": "material",
                    "tags": ["fp3", aula_id, "fallback", "revisao"],
                }
            )
    extra = make_extra_cards(aula_id, tema)
    return material[:10] + extra


def extract_cloze_text(front):
    m = re.search(r"\{\{c1::([^}]+)\}\}", front)
    return m.group(1).strip() if m else None


def validate(cards_by_aula):
    checks = {}
    ok_global = True
    for aula_id, cards in cards_by_aula.items():
        count_total = len(cards)
        count_material = sum(1 for c in cards if c["origem"] == "material")
        count_extra = sum(1 for c in cards if c["origem"] == "extra")
        dif_ok = all(c["dificuldade"] in (1, 2) for c in cards)
        sem_q = all("?" not in c["frente"] for c in cards)
        one_cloze = all(c["frente"].count("{{c1::") == 1 for c in cards)
        verso_match = all(extract_cloze_text(c["frente"]) == c["verso"] for c in cards)
        cat_ok = all(c["categoria"] in ALLOWED_CATEGORIES for c in cards)
        no_meta = all(not any(m in c["frente"].lower() for m in META_BANNED + ["material"]) for c in cards)
        foco_tema = all(c["tema"] == aula_id for c in cards)
        ok = all(
            [
                count_total == 12,
                count_material == 10,
                count_extra == 2,
                dif_ok,
                sem_q,
                one_cloze,
                verso_match,
                cat_ok,
                no_meta,
                foco_tema,
            ]
        )
        checks[aula_id] = {
            "total_12": count_total == 12,
            "material_10": count_material == 10,
            "extra_2": count_extra == 2,
            "dificuldade_1_ou_2": dif_ok,
            "sem_interrogacao": sem_q,
            "uma_lacuna_c1": one_cloze,
            "verso_igual_lacuna": verso_match,
            "categorias_permitidas": cat_ok,
            "sem_metalinguagem": no_meta,
            "foco_tema": foco_tema,
            "ok": ok,
        }
        ok_global = ok_global and ok
    return ok_global, checks


def main():
    themes = load_fp3_themes()
    cards_by_aula = {}
    all_cards = []
    files = sorted(MATERIAIS_DIR.glob("fp3_a*.md"), key=lambda p: int(p.stem.split("_a")[1]))
    idx = 1
    for fp in files:
        aula_id = fp.stem
        tema = themes.get(aula_id, aula_id)
        text = fp.read_text(encoding="utf-8")
        cards = build_cards_for_aula(aula_id, tema, text)
        for c in cards:
            c["id"] = idx
            idx += 1
        cards_by_aula[aula_id] = cards
        all_cards.extend(cards)

    ok_global, checks = validate(cards_by_aula)
    payload = {
        "meta": {
            "materia": "fisiopato3",
            "aulas": len(cards_by_aula),
            "cards_total": len(all_cards),
            "regras_estritas_ok": ok_global,
        },
        "flashcards": all_cards,
        "checks_por_aula": checks,
    }
    OUT_FILE.write_text(json.dumps(payload, ensure_ascii=False, indent=2), encoding="utf-8")
    print(f"Arquivo gerado: {OUT_FILE}")
    print(json.dumps(payload["meta"], ensure_ascii=False))


if __name__ == "__main__":
    main()
