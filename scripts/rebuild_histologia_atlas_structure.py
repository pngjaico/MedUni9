#!/usr/bin/env python3
from __future__ import annotations

import json
import re
from datetime import datetime, timezone
from html import unescape
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
LEGACY_ROOT = ROOT / "Meus Sites" / "Atlas Hisotlogia" / "histologia.icb.ufg.br"
ATLAS_PATH = ROOT / "data" / "histologia_atlas.json"
REPORT_PATH = ROOT / "data" / "histologia_legendas_qc_relatorio.json"
AUDIT_PATH = ROOT / "data" / "histologia_atlas_legenda_audit.json"

PAGES = [
    "citologia.html", "epite.html", "conj.html", "cartilagem.html", "osso.html", "musc.html",
    "nervo.html", "vasc.html", "linfa.html", "diges.html", "pele.html", "respi.html",
    "urina.html", "endoc.html", "senti.html", "masc.html", "repfem.html", "embri.html",
]

CATEGORY_META = {
    "1_citologia": ("tecidos_fundamentais", "tf_citologia", "Citologia"),
    "2_epitelio": ("tecidos_fundamentais", "tf_epitelio", "Epitélio"),
    "3_conjuntivo": ("tecidos_fundamentais", "tf_conjuntivo", "Tecido conjuntivo"),
    "4_cartilagem": ("sistema_esqueletico", "se_cartilagem", "Cartilagem"),
    "5_osso": ("sistema_esqueletico", "se_osso", "Osso"),
    "6_musculo": ("sistema_muscular", "sm_histologia", "Histologia muscular"),
    "7_nervoso": ("sistema_neural", "sn_neuronio", "Tecido nervoso"),
    "8_vascular": ("sistema_circulatorio", "sc_vasos", "Vasos e coração"),
    "9_linfatico": ("sistema_circulatorio", "sc_linfoide", "Sistema linfático"),
    "10_digestorio": ("sistema_digestorio", "sd_laminas_atlas", "Sistema digestório"),
    "11_pele": ("tecidos_fundamentais", "tf_pele", "Pele"),
    "12_respiratorio": ("sistema_respiratorio", "sr_laminas_atlas", "Sistema respiratório"),
    "13_urinario": ("sistema_urinario", "su_laminas_atlas", "Sistema urinário"),
    "14_endocrinas": ("sistema_neural", "sn_endocrino", "Endócrinas"),
    "15_sentido": ("sistema_neural", "sn_sentidos", "Órgãos dos sentidos"),
    "16_masculino": ("sistema_genital_masculino", "sgm_laminas_atlas", "Sistema genital masculino"),
    "17_feminino": ("sistema_genital_feminino", "sgf_laminas_atlas", "Sistema genital feminino"),
    "18_embrionario": ("tecidos_fundamentais", "tf_embriologia", "Embriologia"),
}


def clean_text(raw: str) -> str:
    txt = unescape(raw)
    txt = txt.replace("\r", " ").replace("\n", " ")
    txt = re.sub(r"<[^>]+>", " ", txt)
    txt = re.sub(r"\s+", " ", txt).strip(" -\t")
    return txt


def strip_inner_tags(html_frag: str) -> str:
    return re.sub(r"<[^>]+>", " ", html_frag)


def u_block_lines(u_inner: str) -> list[str]:
    lines: list[str] = []
    for part in re.split(r"<br\s*/?>", u_inner, flags=re.IGNORECASE):
        t = clean_text(part)
        if t:
            lines.append(t)
    return lines


def parse_ordered_legend_blocks(section_html: str) -> list[tuple[str, str, list[str]]]:
    """Blocos na ordem do HTML: (âncora, título do link, linhas do <u> seguinte)."""
    blocks: list[tuple[str, str, list[str]]] = []
    pattern = re.compile(
        r"<b>\s*<a\s+href=\"#([^\"]+)\"[^>]*>(.*?)</a>\s*</b>",
        re.IGNORECASE | re.DOTALL,
    )
    for m in pattern.finditer(section_html):
        anchor = m.group(1).strip().lower()
        heading_raw = m.group(2)
        heading = clean_text(strip_inner_tags(heading_raw))
        sub_start = m.end()
        next_m = pattern.search(section_html, sub_start)
        sub_end = next_m.start() if next_m else len(section_html)
        chunk = section_html[sub_start:sub_end]
        u_m = re.search(r"<u[^>]*>(.*?)</u>", chunk, re.IGNORECASE | re.DOTALL)
        detail: list[str] = u_block_lines(u_m.group(1)) if u_m else []
        blocks.append((anchor, heading, detail))
    return blocks


def legend_for_anchor(blocks: list[tuple[str, str, list[str]]], anchor: str) -> list[str]:
    """Une todos os blocos com a mesma âncora (ex.: #h52 duas vezes)."""
    leg: list[str] = []
    for an, heading, detail in blocks:
        if an != anchor:
            continue
        if heading:
            leg.append(heading)
        leg.extend(detail)
    return leg if leg else []


def _u_inner_slice_open_tag(html: str, u_open_end: int) -> str:
    """HTML antigo às vezes não fecha </u>; corta em </u>, <hr ou fim de bloco."""
    rest = html[u_open_end:]
    m_close = re.search(r"</u>", rest, re.IGNORECASE)
    m_hr = re.search(r"<br\s*/>\s*<hr|<br\s*>\s*<hr|<hr\s+width", rest, re.IGNORECASE)
    if m_close and (not m_hr or m_close.start() < m_hr.start()):
        return rest[: m_close.start()]
    if m_hr:
        return rest[: m_hr.start()]
    m_ft = re.search(r"<!--\s*Footer", rest, re.IGNORECASE)
    if m_ft:
        return rest[: m_ft.start()]
    return rest[:800]


def collect_orphan_u_lines(section_html: str) -> list[str]:
    """Legendas em <u> sem bloco <b><a href=\"#...\"> (ex.: seção H7 em vasc.html)."""
    lines: list[str] = []
    for u_m in re.finditer(r"<u[^>]*>", section_html, re.IGNORECASE):
        inner = _u_inner_slice_open_tag(section_html, u_m.end())
        lines.extend(u_block_lines(inner))
    return lines


def ordered_lamina_thumb_keys(section_html: str) -> list[tuple[str, str]]:
    """Ordem das miniaturas no HTML: (categoria, alias.jpg). Única ocorrência por chave."""
    thumb_re = re.compile(
        r"<a\s+href=\"#([^\"]+)\"[^>]*>\s*<img[^>]+src=\"([^\"]+)\"",
        re.IGNORECASE | re.DOTALL,
    )
    out: list[tuple[str, str]] = []
    seen: set[tuple[str, str]] = set()
    for m in thumb_re.finditer(section_html):
        anchor = m.group(1).strip().lower()
        src = m.group(2).strip()
        if anchor in ("", "_"):
            continue
        if "images/laminas/" not in src.lower():
            continue
        cat_m = re.search(r"images/laminas/([^/]+)/", src, flags=re.IGNORECASE)
        if not cat_m:
            continue
        category = cat_m.group(1).lower()
        alias = f"{Path(src).stem.lower()}.jpg"
        key = (category, alias)
        if key in seen:
            continue
        seen.add(key)
        out.append(key)
    return out


def map_lamina_keys_to_anchors(section_html: str) -> dict[tuple[str, str], str]:
    """(categoria, alias.jpg) minúsculo → id da âncora (#h51 → h51)."""
    thumb_re = re.compile(
        r"<a\s+href=\"#([^\"]+)\"[^>]*>\s*<img[^>]+src=\"([^\"]+)\"",
        re.IGNORECASE | re.DOTALL,
    )
    out: dict[tuple[str, str], str] = {}
    for m in thumb_re.finditer(section_html):
        anchor = m.group(1).strip().lower()
        src = m.group(2).strip()
        if "images/laminas/" not in src.lower():
            continue
        cat_m = re.search(r"images/laminas/([^/]+)/", src, flags=re.IGNORECASE)
        if not cat_m:
            continue
        category = cat_m.group(1).lower()
        alias = f"{Path(src).stem.lower()}.jpg"
        out[(category, alias)] = anchor
    return out


def map_lightbox_stem_to_anchor(section_html: str) -> dict[tuple[str, str], str]:
    """Fallback: <a class=lightbox id=h51><img .../h51.jpg>."""
    out: dict[tuple[str, str], str] = {}
    lb_re = re.compile(
        r"<a(?=[^>]*class=\"lightbox\")[^>]*\sid=\"([^\"]+)\"[^>]*>\s*<img[^>]+src=\"([^\"]+)\"",
        re.IGNORECASE | re.DOTALL,
    )
    for m in lb_re.finditer(section_html):
        anchor = m.group(1).strip().lower()
        src = m.group(2).strip()
        if "images/laminas/" not in src.lower():
            continue
        cat_m = re.search(r"images/laminas/([^/]+)/", src, flags=re.IGNORECASE)
        if not cat_m:
            continue
        category = cat_m.group(1).lower()
        alias = f"{Path(src).stem.lower()}.jpg"
        out[(category, alias)] = anchor
    return out


def _fill_section_laminas(
    keyed_map: dict[str, dict],
    section_html: str,
    section_title: str,
    blocks: list[tuple[str, str, list[str]]],
) -> None:
    thumb_map = map_lamina_keys_to_anchors(section_html)
    lb_map = map_lightbox_stem_to_anchor(section_html)
    all_keys = set(thumb_map.keys()) | set(lb_map.keys())

    def build_entry(cat: str, alias: str, anchor: str) -> dict:
        leg = legend_for_anchor(blocks, anchor)
        if not leg:
            stem = Path(alias).stem.lower()
            if stem != anchor:
                leg = legend_for_anchor(blocks, stem)
        if not leg:
            leg = [section_title]
        subtitulo = ""
        for an, heading, _ in blocks:
            if an == anchor and heading:
                subtitulo = heading
                break
        titulo = f"{section_title} — {subtitulo}" if subtitulo else section_title
        return {"titulo": titulo, "legenda": leg[:14]}

    for (cat, alias) in all_keys:
        anchor = thumb_map.get((cat, alias)) or lb_map.get((cat, alias))
        if not anchor:
            continue
        k = f"{cat}|{alias.lower()}"
        entry = build_entry(cat, alias, anchor)
        prev = keyed_map.get(k)
        if prev is None or len(entry["legenda"]) > len(prev.get("legenda", [])):
            keyed_map[k] = entry

    for img in re.finditer(r"img[^>]+src=\"([^\"]+)\"", section_html, flags=re.IGNORECASE):
        src = img.group(1).strip()
        if "images/laminas/" not in src.lower():
            continue
        cat_m = re.search(r"images/laminas/([^/]+)/", src, flags=re.IGNORECASE)
        if not cat_m:
            continue
        cat = cat_m.group(1).lower()
        alias = f"{Path(src).stem.lower()}.jpg"
        k = f"{cat}|{alias.lower()}"
        if k in keyed_map:
            continue
        stem = Path(alias).stem.lower()
        leg = legend_for_anchor(blocks, stem)
        if leg:
            subtitulo = next((h for an, h, _ in blocks if an == stem and h), "")
            titulo = f"{section_title} — {subtitulo}" if subtitulo else section_title
            keyed_map[k] = {"titulo": titulo, "legenda": leg[:14]}
        else:
            keyed_map[k] = {"titulo": section_title, "legenda": [section_title]}


def _fill_section_orphan_u(
    keyed_map: dict[str, dict],
    section_html: str,
    section_title: str,
) -> None:
    shared = collect_orphan_u_lines(section_html)
    if not shared:
        shared = [section_title]
    ordered_thumbs = ordered_lamina_thumb_keys(section_html)
    split_per_image = len(ordered_thumbs) >= 2 and len(shared) == len(ordered_thumbs)
    thumb_map = map_lamina_keys_to_anchors(section_html)
    lb_map = map_lightbox_stem_to_anchor(section_html)
    all_keys = set(thumb_map.keys()) | set(lb_map.keys())

    if split_per_image:
        for i, (cat, alias) in enumerate(ordered_thumbs):
            k = f"{cat}|{alias.lower()}"
            keyed_map[k] = {"titulo": section_title, "legenda": [shared[i]]}
    else:
        for (cat, alias) in all_keys:
            k = f"{cat}|{alias.lower()}"
            if k in keyed_map:
                continue
            keyed_map[k] = {"titulo": section_title, "legenda": shared[:14]}
    for img in re.finditer(r"img[^>]+src=\"([^\"]+)\"", section_html, flags=re.IGNORECASE):
        src = img.group(1).strip()
        if "images/laminas/" not in src.lower():
            continue
        cat_m = re.search(r"images/laminas/([^/]+)/", src, flags=re.IGNORECASE)
        if not cat_m:
            continue
        cat = cat_m.group(1).lower()
        alias = f"{Path(src).stem.lower()}.jpg"
        k = f"{cat}|{alias.lower()}"
        if k not in keyed_map:
            keyed_map[k] = {"titulo": section_title, "legenda": shared[:14]}


def parse_legacy_content() -> dict[str, dict]:
    keyed_map: dict[str, dict] = {}
    for page in PAGES:
        path = LEGACY_ROOT / page
        if not path.exists():
            continue
        html = path.read_text(encoding="utf-8", errors="ignore")
        h2_matches = list(re.finditer(r"<h2[^>]*>(.*?)</h2>", html, flags=re.IGNORECASE | re.DOTALL))
        for i, h2 in enumerate(h2_matches):
            start = h2.end()
            end = h2_matches[i + 1].start() if i + 1 < len(h2_matches) else len(html)
            section_html = html[start:end]
            h2_text = clean_text(h2.group(1))
            m = re.match(r"^([A-Z]\d+)\s*:\s*(.+)$", h2_text, flags=re.IGNORECASE)
            section_title = f"{m.group(1).upper()} - {m.group(2).strip()}" if m else h2_text
            blocks = parse_ordered_legend_blocks(section_html)
            if blocks:
                _fill_section_laminas(keyed_map, section_html, section_title, blocks)
            else:
                _fill_section_orphan_u(keyed_map, section_html, section_title)

    return keyed_map


def classify_legend_line(line: str) -> str:
    t = line.lower()
    if any(x in t for x in ["epitélio", "epitelio", "mesotélio", "mesotelio", "urotélio", "urotelio"]):
        return "Epitélio"
    if any(x in t for x in ["célula", "celula", "neurônio", "neuronio", "linfócito", "linfocito", "adipócito", "adipocito"]):
        return "Célula"
    if any(x in t for x in ["vaso", "capilar", "artéria", "arteria", "veia", "vênula", "venula", "sinusóide", "sinusoide"]):
        return "Vaso"
    if any(x in t for x in ["nervo", "neuróglia", "neuroglia", "axônio", "axonio"]):
        return "Nervo"
    if any(x in t for x in ["camada", "túnica", "tunica", "mucosa", "submucosa", "serosa", "adventícia", "adventicia", "córtex", "cortex", "medular"]):
        return "Camada"
    if any(x in t for x in ["glândula", "glandula", "folículo", "foliculo", "ácino", "acino"]):
        return "Glândula"
    if any(x in t for x in ["fibra", "matriz", "trabécula", "trabecula", "lamela"]):
        return "Matriz/Fibra"
    return "Estrutura"


def load_legenda_audit_por_id() -> dict:
    if not AUDIT_PATH.exists():
        return {}
    data = json.loads(AUDIT_PATH.read_text(encoding="utf-8"))
    return data.get("porId") or {}


def sort_alias_key(alias: str) -> tuple:
    alias = alias.lower().replace(".jpg", "")
    m = re.match(r"^([a-z]+)(\d+)(?:-(\d+))?$", alias)
    if m:
        return (m.group(1), int(m.group(2)), int(m.group(3) or 0))
    return (alias, 0, 0)


def main() -> None:
    legacy = parse_legacy_content()
    atlas = json.loads(ATLAS_PATH.read_text(encoding="utf-8"))
    audit_map = load_legenda_audit_por_id()

    systems = {s["id"]: {**s, "divisoes": []} for s in atlas.get("sistemas", [])}

    qc = {
        "geradoEm": datetime.now(timezone.utc).isoformat(),
        "porCategoria": {},
        "totalFallback": 0,
        "auditoriaLegendasPorEstado": {},
        "laminasComRecorte": 0,
    }

    # Build all laminas from canonical asset folders (legacy-origin full set).
    for category, (sid, div_id, div_title) in CATEGORY_META.items():
        if sid not in systems:
            continue
        category_dir = ROOT / "data" / "histologia" / "atlas" / category
        if not category_dir.exists():
            continue
        zoom_dir = category_dir / "zoom"
        recorte_dir = category_dir / "recorte"
        images = sorted([p for p in category_dir.glob("*.jpg") if p.is_file()], key=lambda p: sort_alias_key(p.stem))
        laminas = []
        fallbacks = 0
        for idx, img in enumerate(images, start=1):
            alias_raw = img.stem.replace(f"histo_{category}_", "")
            alias_norm = f"{alias_raw}.jpg"
            alias_hyphen = f"{alias_raw.replace('_', '-')}.jpg"
            info = legacy.get(f"{category.lower()}|{alias_norm.lower()}") or legacy.get(f"{category.lower()}|{alias_hyphen.lower()}") or {}
            title = info.get("titulo") or f"{div_title} {idx}"
            legend = info.get("legenda") or [title, "Legenda em revisão para esta lâmina."]
            if not info:
                fallbacks += 1
            zoom_name = img.stem + "_zoom.jpg"
            zoom_path = zoom_dir / zoom_name
            url_completa = "/" + zoom_path.relative_to(ROOT).as_posix() if zoom_path.exists() else "/" + img.relative_to(ROOT).as_posix()
            recorte_path = recorte_dir / f"{img.stem}_recorte.jpg"
            url_recorte = (
                "/" + recorte_path.relative_to(ROOT).as_posix() if recorte_path.is_file() else None
            )
            url_display = url_recorte if url_recorte else url_completa
            lam_id = f"{div_id}_{idx:03d}"
            rec: dict = {
                "id": lam_id,
                "titulo": title,
                "alt": title,
                "urlImagem": url_display,
                "descricaoNecessaria": "Lâmina organizada a partir do atlas-base com legenda transcrita.",
                "aliasLegado": alias_hyphen,
                "categoriaLegada": category,
                "urlImagemZoom": "/" + zoom_path.relative_to(ROOT).as_posix() if zoom_path.exists() else None,
                "urlImagemCompleta": url_completa,
                "urlImagemRecorte": url_recorte,
                "classificacaoRelevancia": "alta" if zoom_path.exists() else "media",
                "legendaTranscrita": legend,
                "legendaCategorias": [classify_legend_line(line) for line in legend],
                "pinos": [],
            }
            aud = audit_map.get(lam_id)
            if isinstance(aud, dict):
                al = {
                    "estado": aud.get("estado") or "pendente",
                    "nota": aud.get("nota") or "",
                }
                for k in ("paginaLegada", "ancora", "tituloSecaoH2"):
                    if aud.get(k):
                        al[k] = aud[k]
                rec["auditoriaLegenda"] = al
            laminas.append(rec)
        if laminas:
            systems[sid]["divisoes"].append({"id": div_id, "titulo": div_title, "laminas": laminas})
        n_rec = sum(1 for L in laminas if L.get("urlImagemRecorte"))
        qc["porCategoria"][category] = {"total": len(laminas), "fallbackSemMatch": fallbacks, "comRecorte": n_rec}
        qc["totalFallback"] += fallbacks
        qc["laminasComRecorte"] += n_rec

    # Stable order by title
    for sys in systems.values():
        sys["divisoes"] = sorted(sys.get("divisoes", []), key=lambda d: d.get("titulo", ""))

    for sys in systems.values():
        for div in sys.get("divisoes", []):
            for lam in div.get("laminas", []):
                st = (lam.get("auditoriaLegenda") or {}).get("estado") or "sem_registro_audit"
                qc["auditoriaLegendasPorEstado"][st] = qc["auditoriaLegendasPorEstado"].get(st, 0) + 1

    atlas["sistemas"] = list(systems.values())
    atlas["updatedAt"] = datetime.now(timezone.utc).isoformat()
    atlas["nota"] = (
        "Atlas reorganizado por sistema e órgão; títulos e legendas padronizados a partir do acervo legado e de "
        "fallback didático para lâminas sem transcrição disponível."
    )
    ATLAS_PATH.write_text(json.dumps(atlas, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    REPORT_PATH.write_text(json.dumps(qc, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print("ok")


if __name__ == "__main__":
    main()
