#!/usr/bin/env python3
from __future__ import annotations

import json
import re
import shutil
from datetime import datetime, timezone
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
LEGACY_LAMINAS = ROOT / "Meus Sites" / "Atlas Hisotlogia" / "histologia.icb.ufg.br" / "images" / "laminas"
TARGET_ASSETS = ROOT / "data" / "histologia" / "atlas"
ATLAS_JSON_PATH = ROOT / "data" / "histologia_atlas.json"
REPORT_JSON_PATH = ROOT / "data" / "histologia_atlas_migracao_relatorio.json"
DOC_REPORT_PATH = ROOT / "docs" / "histologia-atlas-migracao.md"


CATEGORY_TO_DIVISION = {
    "1_citologia": ("tecidos_fundamentais", "tf_citologia", "Citologia"),
    "2_epitelio": ("tecidos_fundamentais", "tf_epitelio", "Epitélio"),
    "3_conjuntivo": ("tecidos_fundamentais", "tf_conjuntivo", "Tecido conjuntivo"),
    "4_cartilagem": ("sistema_esqueletico", "se_cartilagem", "Cartilagem"),
    "5_osso": ("sistema_esqueletico", "se_osso", "Osso"),
    "6_musculo": ("sistema_muscular", "sm_histologia", "Histologia muscular"),
    "7_nervoso": ("sistema_neural", "sn_neuronio", "Tecido nervoso"),
    "8_vascular": ("sistema_circulatorio", "sc_vasos", "Vasos"),
    "9_linfatico": ("sistema_circulatorio", "sc_linfoide", "Linfático"),
    "10_digestorio": ("sistema_digestorio", "sd_laminas_atlas", "Lâminas do digestório"),
    "11_pele": ("tecidos_fundamentais", "tf_pele", "Pele"),
    "12_respiratorio": ("sistema_respiratorio", "sr_laminas_atlas", "Lâminas do respiratório"),
    "13_urinario": ("sistema_urinario", "su_laminas_atlas", "Lâminas do urinário"),
    "14_endocrinas": ("sistema_neural", "sn_endocrino", "Endócrinas"),
    "15_sentido": ("sistema_neural", "sn_sentidos", "Órgãos dos sentidos"),
    "16_masculino": ("sistema_genital_masculino", "sgm_laminas_atlas", "Histologia do sistema masculino"),
    "17_feminino": ("sistema_genital_feminino", "sgf_laminas_atlas", "Histologia do sistema feminino"),
    "18_embrionario": ("tecidos_fundamentais", "tf_embriologia", "Embriologia"),
}


def slugify(name: str) -> str:
    text = name.lower().strip()
    text = re.sub(r"[^a-z0-9]+", "_", text)
    return text.strip("_")


def ensure_division(atlas: dict, system_id: str, division_id: str, division_title: str) -> dict:
    for sys in atlas["sistemas"]:
        if sys["id"] == system_id:
            for div in sys["divisoes"]:
                if div["id"] == division_id:
                    return div
            new_div = {"id": division_id, "titulo": division_title, "laminas": []}
            sys["divisoes"].append(new_div)
            return new_div
    raise ValueError(f"Sistema não encontrado: {system_id}")


def classify_relevance(file_size: int, has_zoom: bool) -> str:
    if has_zoom and file_size > 45_000:
        return "alta"
    if file_size > 20_000:
        return "media"
    return "baixa"


def main() -> None:
    atlas = json.loads(ATLAS_JSON_PATH.read_text(encoding="utf-8"))
    TARGET_ASSETS.mkdir(parents=True, exist_ok=True)

    inventory = []
    by_category = {}
    canonical_collision = set()

    for category_dir in sorted([p for p in LEGACY_LAMINAS.iterdir() if p.is_dir() and re.match(r"^\d+_", p.name)]):
        category = category_dir.name
        normal_images = sorted([p for p in category_dir.glob("*.jpg") if p.is_file()])
        zoom_dir = category_dir / "maior"
        zoom_names = {p.name for p in zoom_dir.glob("*.jpg")} if zoom_dir.exists() else set()
        category_target = TARGET_ASSETS / category
        category_target.mkdir(parents=True, exist_ok=True)
        entries = []
        seen_canonical = {}

        for img in normal_images:
            base_name = img.stem
            ext = img.suffix.lower()
            has_zoom = img.name in zoom_names
            canonical_name = f"histo_{slugify(category)}_{slugify(base_name)}{ext}"
            if canonical_name in seen_canonical:
                canonical_name = f"histo_{slugify(category)}_{slugify(base_name)}_{len(seen_canonical)+1}{ext}"
            seen_canonical[canonical_name] = True
            if canonical_name in canonical_collision:
                raise RuntimeError(f"Nome canônico duplicado global: {canonical_name}")
            canonical_collision.add(canonical_name)

            destination = category_target / canonical_name
            shutil.copy2(img, destination)

            zoom_rel = ""
            if has_zoom:
                src_zoom = zoom_dir / img.name
                zoom_target_dir = category_target / "zoom"
                zoom_target_dir.mkdir(parents=True, exist_ok=True)
                zoom_name = f"histo_{slugify(category)}_{slugify(base_name)}_zoom{ext}"
                zoom_dest = zoom_target_dir / zoom_name
                shutil.copy2(src_zoom, zoom_dest)
                zoom_rel = "/" + zoom_dest.relative_to(ROOT).as_posix()

            rel_path = "/" + destination.relative_to(ROOT).as_posix()
            record = {
                "categoriaLegada": category,
                "aliasLegado": img.name,
                "baseLegado": base_name,
                "urlCanonica": rel_path,
                "urlZoomCanonica": zoom_rel,
                "tamanhoBytes": img.stat().st_size,
                "temZoom": has_zoom,
                "classificacaoRelevancia": classify_relevance(img.stat().st_size, has_zoom),
            }
            entries.append(record)
            inventory.append(record)

        by_category[category] = entries

    # Replace atlas divisions by category with full coverage.
    for category, records in by_category.items():
        system_id, division_id, division_title = CATEGORY_TO_DIVISION[category]
        div = ensure_division(atlas, system_id, division_id, division_title)
        laminas = []
        prefix = slugify(division_id)
        for idx, rec in enumerate(records, start=1):
            legacy_stem = Path(rec["aliasLegado"]).stem
            laminas.append({
                "id": f"{prefix}_{idx:03d}",
                "titulo": f"{division_title} — {legacy_stem}",
                "alt": f"{division_title} ({legacy_stem})",
                "urlImagem": rec["urlCanonica"],
                "descricaoNecessaria": "Lâmina migrada do atlas-base para estudo no MedGradPlus.",
                "aliasLegado": rec["aliasLegado"],
                "categoriaLegada": rec["categoriaLegada"],
                "urlImagemZoom": rec["urlZoomCanonica"] or None,
                "classificacaoRelevancia": rec["classificacaoRelevancia"],
                "pinos": [],
            })
        div["laminas"] = laminas

    atlas["version"] = int(atlas.get("version", 0)) + 1
    atlas["updatedAt"] = datetime.now(timezone.utc).isoformat()
    atlas["nota"] = (
        "Atlas migrado do acervo-base local com nomenclatura canônica, alias legado e cobertura "
        "completa das 18 categorias de histologia."
    )

    # Write updated atlas
    ATLAS_JSON_PATH.write_text(json.dumps(atlas, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")

    # Write migration report JSON
    categories_report = []
    for category, records in by_category.items():
        categories_report.append({
            "categoriaLegada": category,
            "totalImagens": len(records),
            "totalZoom": sum(1 for r in records if r["temZoom"]),
            "relevanciaAlta": sum(1 for r in records if r["classificacaoRelevancia"] == "alta"),
            "relevanciaMedia": sum(1 for r in records if r["classificacaoRelevancia"] == "media"),
            "relevanciaBaixa": sum(1 for r in records if r["classificacaoRelevancia"] == "baixa"),
        })

    report = {
        "geradoEm": datetime.now(timezone.utc).isoformat(),
        "origem": str(LEGACY_LAMINAS.relative_to(ROOT).as_posix()),
        "destino": str(TARGET_ASSETS.relative_to(ROOT).as_posix()),
        "totalCategorias": len(by_category),
        "totalImagens": len(inventory),
        "totalComZoom": sum(1 for r in inventory if r["temZoom"]),
        "categorias": categories_report,
    }
    REPORT_JSON_PATH.write_text(json.dumps(report, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")

    # Write human-readable doc
    lines = [
        "# Migração do Atlas de Histologia",
        "",
        "## Resumo",
        f"- Origem: `{LEGACY_LAMINAS.relative_to(ROOT).as_posix()}`",
        f"- Destino canônico: `{TARGET_ASSETS.relative_to(ROOT).as_posix()}`",
        f"- Categorias migradas: **{report['totalCategorias']}**",
        f"- Imagens migradas: **{report['totalImagens']}**",
        f"- Imagens com versão zoom: **{report['totalComZoom']}**",
        "",
        "## Regra de nomenclatura",
        "- Formato: `histo_<categoria_legada>_<alias_arquivo>.jpg`",
        "- Exemplo: `histo_10_digestorio_j101.jpg`",
        "- Metadados preservados por lâmina: `aliasLegado`, `categoriaLegada`, `urlImagemZoom`, `classificacaoRelevancia`.",
        "",
        "## Classificação por categoria",
        "| Categoria | Total | Zoom | Relevância alta | média | baixa |",
        "|---|---:|---:|---:|---:|---:|",
    ]
    for c in categories_report:
        lines.append(
            f"| {c['categoriaLegada']} | {c['totalImagens']} | {c['totalZoom']} | "
            f"{c['relevanciaAlta']} | {c['relevanciaMedia']} | {c['relevanciaBaixa']} |"
        )

    lines.extend([
        "",
        "## Observações",
        "- O atlas do app foi atualizado para cobrir 100% das 18 categorias legadas.",
        "- A UI existente foi preservada, consumindo o mesmo `data/histologia_atlas.json`.",
        "- A tabela técnica detalhada está em `data/histologia_atlas_migracao_relatorio.json`.",
        "",
    ])
    DOC_REPORT_PATH.write_text("\n".join(lines), encoding="utf-8")


if __name__ == "__main__":
    main()
