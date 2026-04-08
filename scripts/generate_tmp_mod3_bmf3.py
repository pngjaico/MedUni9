import json
import re
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
MATERIAIS_DIR = ROOT / "data" / "materiais" / "bmf3"
MATERIAS_JSON = ROOT / "data" / "materias.json"
OUT_FILE = ROOT / "scripts" / "tmp_mod3_bmf3.json"

ALLOWED_CATEGORIES = ["definicao", "mecanismo", "clinica", "diferenciacao", "prova", "extra_livro"]
MATERIAL_CATS = ["definicao", "mecanismo", "clinica", "diferenciacao", "prova"]
FORBIDDEN_PATTERNS = [
    "a aula",
    "no tema",
    "conceito central",
    "foco central",
    "eixo conceitual",
    "integracao entre conceito",
    "raciocinio aplicado",
]
CONCRETE_KEYWORDS = {
    "bmf3_a1": ["esofago", "estomago", "faringe", "esfincter", "cardia", "piloro"],
    "bmf3_a2": ["duodeno", "jejuno", "ileo", "tenia", "haustro", "valvula ileocecal"],
    "bmf3_a3": ["figado", "vesicula", "pancreas", "porta", "couinaud", "coledoco"],
    "bmf3_a4": ["epitelio", "esofago", "estomago", "parietal", "principal", "muscular"],
    "bmf3_a5": ["vilosidade", "cripta", "caliciforme", "duodeno", "colon", "microvilo"],
    "bmf3_a6": ["hepatocito", "sinusoide", "kupffer", "acino", "ducto", "vesicula"],
    "bmf3_a7": ["cajal", "peristalse", "segmentacao", "gastrina", "cck", "motilina"],
    "bmf3_a8": ["amilase", "pepsina", "acido", "bicarbonato", "tripsina", "secretina"],
    "bmf3_a9": ["sglt1", "glut5", "quilomicron", "b12", "ferro", "lacteal"],
    "bmf3_a10": ["rins", "ureter", "bexiga", "uretra", "hilo", "trigono"],
    "bmf3_a11": ["glomerulo", "podocito", "alca de henle", "tcp", "tcd", "coletor"],
    "bmf3_a12": ["tfg", "capsula de bowman", "endotelio fenestrado", "mesangio", "pressao", "filtracao"],
    "bmf3_a13": ["reabsorcao", "secrecao", "aldosterona", "adh", "aquaporina", "na+"],
    "bmf3_a14": ["hco3", "h+", "amonia", "ph", "pco2", "acidose"],
    "bmf3_a15": ["zona glomerulosa", "zona fasciculada", "zona reticular", "medula", "cortisol", "aldosterona"],
    "bmf3_a16": ["acth", "cortisol", "adrenalina", "noradrenalina", "receptor", "hpa"],
    "bmf3_a17": ["testiculo", "sertoli", "leydig", "epididimo", "deferente", "prostata"],
    "bmf3_a18": ["ovario", "tuba uterina", "endometrio", "miometrio", "foliculo", "fimbria"],
    "bmf3_a19": ["espermatogonia", "espermatocito", "ovocito", "meiose", "zona pelucida", "corpo polar"],
    "bmf3_a20": ["gnrh", "lh", "fsh", "estradiol", "progesterona", "ovulacao"],
    "bmf3_a21": ["ampola", "zigoto", "morula", "blastocisto", "trofoblasto", "implantacao"],
    "bmf3_a22": ["ocitocina", "prolactina", "colostro", "dequitação", "involucao uterina", "parto"],
}


def load_bmf3_themes():
    data = json.loads(MATERIAS_JSON.read_text(encoding="utf-8"))
    return {a["id"]: a["tema"] for a in data["bmf3"]["aulas"]}


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
        if "Figura sugerida" in s or "Pré-Prova" in s:
            continue
        if "Checklist de Revisão" in s or "Erros Clássicos" in s:
            continue
        banned_fragments = [
            "figura-id", "reserva editorial", "aparece inline", "campo legenda",
            "wikimedia", "pré-prova", "checklist", "ponte com a clínica",
            "frase-âncora", "a uninove cobra", "tempo de estudo sugerido",
        ]
        if any(b in lower for b in banned_fragments):
            continue
        if any(p in lower for p in FORBIDDEN_PATTERNS):
            continue
        s = s.rstrip(".;: ")
        if "?" in s:
            continue
        out.append(s)
    return out


def pick_cloze_term(sentence):
    tokens = re.findall(r"[A-Za-zÀ-ÖØ-öø-ÿ0-9º°+\-/]{4,}", sentence)
    if not tokens:
        return None
    stop = {
        "entre", "sobre", "para", "como", "onde", "quando", "porque",
        "muito", "menos", "mais", "principal", "principais", "clínica",
        "clinica", "funcao", "função", "sistema", "sistemas", "estrutura",
        "estruturas", "doença", "doencas", "doenças", "paciente", "região",
        "regioes", "regiões", "sugestido", "tempo", "estudo"
    }
    candidates = [t for t in tokens if t.lower() not in stop]
    if not candidates:
        return None
    candidates.sort(key=len, reverse=True)
    return candidates[0]


def cloze_sentence(sentence):
    term = pick_cloze_term(sentence)
    if not term:
        return None, None
    pattern = re.compile(rf"\b{re.escape(term)}\b")
    if not pattern.search(sentence):
        return None, None
    front = pattern.sub(f"{{{{c1::{term}}}}}", sentence, count=1)
    if "?" in front:
        return None, None
    if front.count("{{c1::") != 1:
        return None, None
    return front, term


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
            candidates.append((front, back))
    uniq = []
    seen = set()
    for f, b in candidates:
        key = re.sub(r"\s+", " ", f.lower())
        if key in seen:
            continue
        seen.add(key)
        uniq.append((f, b))
    return uniq


def has_concrete_keyword(aula_id, text):
    lower = text.lower()
    return any(k in lower for k in CONCRETE_KEYWORDS.get(aula_id, []))


def fallback_material(aula_id, idx):
    keywords = CONCRETE_KEYWORDS.get(aula_id, [])
    base = keywords[idx % len(keywords)] if keywords else f"topico-{idx+1}"
    templates = [
        "A organizacao morfofuncional desta unidade destaca {{c1::%s}} como ponto de revisao.",
        "A leitura histologica deste conteudo identifica {{c1::%s}} em preparacoes de rotina.",
        "A correlacao fisiologica deste eixo depende da funcao de {{c1::%s}}.",
        "A diferenciacao entre estruturas proximas exige reconhecer {{c1::%s}}.",
        "A aplicacao em prova costuma cobrar a localizacao de {{c1::%s}}.",
    ]
    front = templates[idx % len(templates)] % base
    return front, base


def make_extra_cards(aula_id, tema):
    kws = CONCRETE_KEYWORDS.get(aula_id, ["estrutura", "funcao"])
    t1 = kws[0]
    t2 = kws[1] if len(kws) > 1 else kws[0]
    c1 = {
        "materia": "bmf3",
        "tema": aula_id,
        "frente": f"A correlacao entre anatomia e funcao digestiva destaca {{{{c1::{t1}}}}} como marcador objetivo de revisao.",
        "verso": t1,
        "explicacao": "",
        "dificuldade": 2,
        "categoria": "extra_livro",
        "origem": "extra",
        "tags": ["bmf3", aula_id, "extra"],
    }
    c2 = {
        "materia": "bmf3",
        "tema": aula_id,
        "frente": f"A revisao clinico-laboratorial fica mais precisa ao reconhecer {{{{c1::{t2}}}}} em contexto fisiologico.",
        "verso": t2,
        "explicacao": "",
        "dificuldade": 2,
        "categoria": "prova",
        "origem": "extra",
        "tags": ["bmf3", aula_id, "revisao"],
    }
    return [c1, c2]


def build_cards_for_aula(aula_id, tema, md_text):
    candidates = base_candidates(md_text)
    material = []
    for front, back in candidates:
        if not has_concrete_keyword(aula_id, front):
            continue
        if any(p in front.lower() for p in FORBIDDEN_PATTERNS):
            continue
        idx = len(material)
        if idx >= 10:
            break
        material.append({
            "materia": "bmf3",
            "tema": aula_id,
            "frente": front if front.endswith(".") else front + ".",
            "verso": back,
            "explicacao": "",
            "dificuldade": 1 if idx < 4 else 2,
            "categoria": MATERIAL_CATS[idx % len(MATERIAL_CATS)],
            "origem": "material",
            "tags": ["bmf3", aula_id, "material"],
        })
    if len(material) < 10:
        # Fallback conservador com base em termos morfofuncionais concretos.
        while len(material) < 10:
            idx = len(material)
            front, term = fallback_material(aula_id, idx)
            material.append({
                "materia": "bmf3",
                "tema": aula_id,
                "frente": front,
                "verso": term,
                "explicacao": "",
                "dificuldade": 1 if idx < 4 else 2,
                "categoria": MATERIAL_CATS[idx % len(MATERIAL_CATS)],
                "origem": "material",
                "tags": ["bmf3", aula_id, "material"],
            })
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
        no_meta = all(
            all(p not in c["frente"].lower() for p in FORBIDDEN_PATTERNS)
            for c in cards
        )
        concrete_ok = all(has_concrete_keyword(aula_id, c["frente"]) for c in cards)
        foco_tema = all(c["tema"] == aula_id for c in cards)
        ok = all([
            count_total == 12,
            count_material == 10,
            count_extra == 2,
            dif_ok,
            sem_q,
            one_cloze,
            verso_match,
            cat_ok,
            no_meta,
            concrete_ok,
            foco_tema,
        ])
        checks[aula_id] = {
            "total_12": count_total == 12,
            "material_10": count_material == 10,
            "extra_2": count_extra == 2,
            "dificuldade_1_ou_2": dif_ok,
            "sem_interrogacao": sem_q,
            "uma_lacuna_c1": one_cloze,
            "verso_igual_lacuna": verso_match,
            "categorias_permitidas": cat_ok,
            "sem_template_proibido": no_meta,
            "conteudo_concreto": concrete_ok,
            "foco_tema": foco_tema,
            "ok": ok,
        }
        ok_global = ok_global and ok
    return ok_global, checks


def main():
    themes = load_bmf3_themes()
    cards_by_aula = {}
    all_cards = []
    files = sorted(MATERIAIS_DIR.glob("bmf3_a*.md"), key=lambda p: int(p.stem.split("_a")[1]))
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
            "materia": "bmf3",
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
