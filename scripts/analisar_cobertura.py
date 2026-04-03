#!/usr/bin/env python3
"""
analisar_cobertura.py — MedGradPlus Coverage Analyzer

Lê materias.json, materiais/, flashcards.json e questoes.json.
Calcula cobertura por aula: tem material? quantos flashcards? quantas questões?
Gera status_analisador.json com ranking de prioridade para geração.

Uso:
  python scripts/analisar_cobertura.py
  python scripts/analisar_cobertura.py --modulo 2
  python scripts/analisar_cobertura.py --materia bcm1
"""

from __future__ import annotations
import argparse
import json
from pathlib import Path
from datetime import datetime

ROOT = Path(__file__).resolve().parent.parent
MATERIAS_PATH = ROOT / "data" / "materias.json"
FLASHCARDS_PATH = ROOT / "data" / "flashcards.json"
QUESTOES_PATH = ROOT / "data" / "questoes.json"
MATERIAIS_BASE = ROOT / "materiais"
STATUS_PATH = ROOT / "data" / "agent_logs" / "status_analisador.json"

# Metas por aula
META_FLASHCARDS = 12
META_QUESTOES = 5


def load_json(path: Path):
    return json.loads(path.read_text(encoding="utf-8"))


def normalize_list(raw, key: str):
    if isinstance(raw, dict):
        return raw.get(key, [])
    return raw if isinstance(raw, list) else []


def material_path(modulo: int, materia_id: str, aula_id: str) -> Path:
    return MATERIAIS_BASE / f"modulo{modulo}" / materia_id / f"{aula_id}.md"


def count_by_aula(items: list, materia_id: str) -> dict[str, int]:
    counts: dict[str, int] = {}
    for item in items:
        if item.get("materia") != materia_id:
            continue
        tema = str(item.get("tema") or "").strip()
        if not tema:
            continue
        counts[tema] = counts.get(tema, 0) + 1
    return counts


def coverage_score(has_material: bool, flashcards: int, questoes: int) -> int:
    """Quanto maior, mais urgente a geração."""
    score = 0
    if not has_material:
        score += 100
    score += max(0, META_FLASHCARDS - flashcards) * 5
    score += max(0, META_QUESTOES - questoes) * 8
    return score


def main():
    parser = argparse.ArgumentParser(description="Analisa cobertura de conteúdo por aula.")
    parser.add_argument("--modulo", type=int, default=None)
    parser.add_argument("--materia", type=str, default=None)
    parser.add_argument("--mostrar-completas", action="store_true",
                        help="Inclui aulas já 100%% cobertas no relatório")
    args = parser.parse_args()

    materias = load_json(MATERIAS_PATH)
    flashcards = normalize_list(load_json(FLASHCARDS_PATH), "flashcards")
    questoes = normalize_list(load_json(QUESTOES_PATH), "questoes")

    resultados = []
    totais = {"aulas": 0, "com_material": 0, "com_flashcards": 0, "com_questoes": 0, "completas": 0}

    for materia_id, meta in materias.items():
        if args.modulo and int(meta.get("modulo", 0)) != args.modulo:
            continue
        if args.materia and materia_id != args.materia:
            continue

        modulo = int(meta.get("modulo", 0))
        nome = str(meta.get("nome") or materia_id)
        aulas = meta.get("aulas") or []

        fc_por_aula = count_by_aula(flashcards, materia_id)
        q_por_aula = count_by_aula(questoes, materia_id)

        for aula in aulas:
            aula_id = str(aula.get("id") or "").strip()
            if not aula_id:
                continue

            tema = str(aula.get("tema") or aula_id)
            has_material = material_path(modulo, materia_id, aula_id).exists()
            fc_count = fc_por_aula.get(aula_id, 0)
            q_count = q_por_aula.get(aula_id, 0)

            totais["aulas"] += 1
            if has_material:
                totais["com_material"] += 1
            if fc_count > 0:
                totais["com_flashcards"] += 1
            if q_count > 0:
                totais["com_questoes"] += 1

            completa = has_material and fc_count >= META_FLASHCARDS and q_count >= META_QUESTOES
            if completa:
                totais["completas"] += 1

            score = coverage_score(has_material, fc_count, q_count)

            if not args.mostrar_completas and score == 0:
                continue

            resultados.append({
                "materia_id": materia_id,
                "materia_nome": nome,
                "modulo": modulo,
                "aula_id": aula_id,
                "aula_tema": tema,
                "has_material": has_material,
                "flashcards": fc_count,
                "flashcards_faltam": max(0, META_FLASHCARDS - fc_count),
                "questoes": q_count,
                "questoes_faltam": max(0, META_QUESTOES - q_count),
                "score": score,
                "completa": completa,
            })

    resultados.sort(key=lambda x: x["score"], reverse=True)

    # Resumo por matéria
    por_materia: dict[str, dict] = {}
    for r in resultados:
        m = r["materia_id"]
        if m not in por_materia:
            por_materia[m] = {"nome": r["materia_nome"], "modulo": r["modulo"],
                               "aulas_pendentes": 0, "sem_material": 0, "sem_flashcards": 0, "sem_questoes": 0}
        por_materia[m]["aulas_pendentes"] += 1
        if not r["has_material"]:
            por_materia[m]["sem_material"] += 1
        if r["flashcards"] < META_FLASHCARDS:
            por_materia[m]["sem_flashcards"] += 1
        if r["questoes"] < META_QUESTOES:
            por_materia[m]["sem_questoes"] += 1

    status = {
        "status": "ok",
        "rodou_em": datetime.now().strftime("%d/%m/%Y %H:%M"),
        "totais": totais,
        "cobertura_pct": {
            "material": round(totais["com_material"] / max(totais["aulas"], 1) * 100, 1),
            "flashcards": round(totais["com_flashcards"] / max(totais["aulas"], 1) * 100, 1),
            "questoes": round(totais["com_questoes"] / max(totais["aulas"], 1) * 100, 1),
            "completas": round(totais["completas"] / max(totais["aulas"], 1) * 100, 1),
        },
        "resumo_por_materia": por_materia,
        "fila_prioridade": resultados[:80],
        "meta_flashcards_por_aula": META_FLASHCARDS,
        "meta_questoes_por_aula": META_QUESTOES,
    }

    STATUS_PATH.parent.mkdir(parents=True, exist_ok=True)
    STATUS_PATH.write_text(json.dumps(status, ensure_ascii=False, indent=2), encoding="utf-8")

    print(f"Análise concluída em {status['rodou_em']}")
    print(f"Total de aulas: {totais['aulas']}")
    print(f"  Com material:    {totais['com_material']} ({status['cobertura_pct']['material']}%)")
    print(f"  Com flashcards:  {totais['com_flashcards']} ({status['cobertura_pct']['flashcards']}%)")
    print(f"  Com questões:    {totais['com_questoes']} ({status['cobertura_pct']['questoes']}%)")
    print(f"  Completas (100%):{totais['completas']} ({status['cobertura_pct']['completas']}%)")
    print(f"\nTop 5 prioridades:")
    for r in resultados[:5]:
        print(f"  [{r['score']:3d}] {r['aula_id']} — {r['aula_tema'][:50]}")
    print(f"\nStatus salvo em: {STATUS_PATH}")


if __name__ == "__main__":
    main()
