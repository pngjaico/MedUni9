#!/usr/bin/env python3
from __future__ import annotations

import json
import re
from html import unescape
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
LEGACY_ROOT = ROOT / "Meus Sites" / "Atlas Hisotlogia" / "histologia.icb.ufg.br"
ATLAS_PATH = ROOT / "data" / "histologia_atlas.json"


PAGES = [
    "citologia.html", "epite.html", "conj.html", "cartilagem.html", "osso.html", "musc.html",
    "nervo.html", "vasc.html", "linfa.html", "diges.html", "pele.html", "respi.html",
    "urina.html", "endoc.html", "senti.html", "masc.html", "repfem.html", "embri.html",
]


def normalize_space(text: str) -> str:
    text = unescape(text)
    text = re.sub(r"<[^>]+>", " ", text)
    text = text.replace("\n", " ").replace("\r", " ")
    text = re.sub(r"\s+", " ", text).strip(" -\t")
    return text


def base_code_from_stem(stem: str) -> str:
    m = re.match(r"^([a-z]\d+)", stem.lower())
    return m.group(1) if m else stem.lower()


def resolve_code_from_stem(stem: str, code_to_title: dict[str, str]) -> str | None:
    stem = stem.lower()
    m = re.match(r"^([a-z])(\d+)", stem)
    if not m:
        return None
    letter, digits = m.group(1), m.group(2)
    # Try exact, then progressively shorter numeric prefixes (f22 -> f2, j153 -> j15 -> j1).
    for end in range(len(digits), 0, -1):
        code = f"{letter}{digits[:end]}"
        if code in code_to_title:
            return code
    return None


def parse_page_titles(html: str) -> dict[str, str]:
    id_to_title: dict[str, str] = {}
    code_to_title: dict[str, str] = {}

    for m in re.finditer(r"<h2[^>]*>(.*?)</h2>", html, flags=re.IGNORECASE | re.DOTALL):
        txt = normalize_space(m.group(1))
        code_match = re.match(r"^([A-Z]\d+)\s*:\s*(.+)$", txt, flags=re.IGNORECASE)
        if code_match:
            code = code_match.group(1).lower()
            title = code_match.group(2).strip()
            code_to_title[code] = title

    for m in re.finditer(r"<a[^>]+href=\"#([^\"]+)\"[^>]*>(.*?)</a>", html, flags=re.IGNORECASE | re.DOTALL):
        anchor = m.group(1).strip().lower()
        txt = normalize_space(m.group(2))
        if not txt:
            continue
        txt = re.sub(r"^\([A-Z]\)\s*", "", txt).strip()
        txt = re.sub(r"\s*-\s*\([A-Z]\)\s*$", "", txt).strip()
        txt = re.sub(r"\s*/\s*$", "", txt).strip()
        if len(txt) >= 4 and not re.match(r"^[a-z]\d+(-\d+)?$", txt, flags=re.IGNORECASE):
            id_to_title[anchor] = txt

    # fallback for derived ids (ex: f1-2 -> f1)
    for anchor in list(id_to_title.keys()):
        code = base_code_from_stem(anchor)
        if code not in code_to_title:
            code_to_title[code] = id_to_title[anchor]

    return {"id_to_title": id_to_title, "code_to_title": code_to_title}


def parse_section_image_titles(html: str) -> dict[str, str]:
    section_map: dict[str, str] = {}
    matches = list(re.finditer(r"<h2[^>]*>(.*?)</h2>", html, flags=re.IGNORECASE | re.DOTALL))
    if not matches:
        return section_map

    spans = []
    for i, m in enumerate(matches):
        start = m.end()
        end = matches[i + 1].start() if i + 1 < len(matches) else len(html)
        h2_text = normalize_space(m.group(1))
        code_match = re.match(r"^([A-Z]\d+)\s*:\s*(.+)$", h2_text, flags=re.IGNORECASE)
        title = code_match.group(2).strip() if code_match else h2_text
        spans.append((start, end, title))

    for start, end, title in spans:
        block = html[start:end]
        for m in re.finditer(r"img[^>]+src=\"([^\"]+)\"", block, flags=re.IGNORECASE):
            src = m.group(1).strip()
            stem = Path(src).stem.lower()
            if stem:
                section_map[f"{stem}.jpg"] = title
    return section_map


def build_alias_title_map() -> dict[str, str]:
    alias_to_title: dict[str, str] = {}
    for page in PAGES:
        path = LEGACY_ROOT / page
        if not path.exists():
            continue
        html = path.read_text(encoding="utf-8", errors="ignore")
        parsed = parse_page_titles(html)
        id_to_title = parsed["id_to_title"]
        code_to_title = parsed["code_to_title"]
        section_titles = parse_section_image_titles(html)

        # map image file -> lightbox id
        for m in re.finditer(
            r"<a[^>]+class=\"lightbox\"[^>]+id=\"([^\"]+)\"[^>]*>\s*<img[^>]+src=\"([^\"]+)\"",
            html,
            flags=re.IGNORECASE | re.DOTALL,
        ):
            anchor_id = m.group(1).strip().lower()
            src = m.group(2).strip()
            stem = Path(src).stem.lower()
            resolved = resolve_code_from_stem(stem, code_to_title)
            title = id_to_title.get(anchor_id) or (code_to_title.get(resolved) if resolved else None)
            if title:
                alias_to_title[f"{stem}.jpg"] = title

        for alias, title in section_titles.items():
            alias_to_title.setdefault(alias, title)
    return alias_to_title


def main() -> None:
    alias_map = build_alias_title_map()
    data = json.loads(ATLAS_PATH.read_text(encoding="utf-8"))
    updated = 0
    fallback = 0

    for sistema in data.get("sistemas", []):
        for divisao in sistema.get("divisoes", []):
            for lamina in divisao.get("laminas", []):
                alias = str(lamina.get("aliasLegado") or "").lower()
                if not alias:
                    continue
                title = alias_map.get(alias)
                if title:
                    lamina["titulo"] = title
                    lamina["alt"] = title
                    updated += 1
                else:
                    fallback += 1

    data["updatedAt"] = data.get("updatedAt")
    ATLAS_PATH.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print("titles_updated", updated)
    print("titles_missing", fallback)


if __name__ == "__main__":
    main()
