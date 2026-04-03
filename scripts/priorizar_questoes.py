#!/usr/bin/env python3
"""
priorizar_questoes.py — MedUni9 Question Priority Queue

Lê materias.json, materiais/ e questoes.json.
Lista aulas que têm material mas questões insuficientes (< 5).
Gera fila de prioridade para o agente gerador de questões.

Saída: data/agent_logs/status_questoes.json

Uso:
  python scripts/priorizar_questoes.py
  python scripts/priorizar_questoes.py --modulo 2
  python scripts/priorizar_questoes.py --materia bcm1
  python scripts/priorizar_questoes.py --meta 5
"""

from __future__ import annotations
import argparse
import json
from pathlib import Path
from datetime import datetime

ROOT = Path(__file__).resolve().parent.parent
MATERIAS_PATH = ROOT / "data" / "materias.json"
QUESTOES_PATH = ROOT / "data" / "questoes.json"
MATERIAIS_BASE = ROOT / "materiais"
STATUS_PATH = ROOT / "data" / "agent_logs" / "status_questoes.json"

META_QUESTOES = 5


def load_json(path: Path):
    return json.loads(path.read_text(encoding="utf-8"))


def normalize_list(raw, key: str):
    if isinstance(raw, dict):
        return raw.get(key, [])
    return raw if isinstance(raw, list) else []


def count_by_aula(items: list, materia_id: str) -> dict[str, int]:
    counts: dict[str, int] = {}
    for item in items:
        if item.get("materia") != materia_id:
            continue
        tema = str(item.get("tema") or "").strip()
        if tema:
            counts[tema] = counts.get(tema, 0) + 1
    return counts


def main():
    parser = argparse.ArgumentParser(description="Prioriza aulas para geração de questões.")
    parser.add_argument("--modulo", type=int, default=None)
    parser.add_argument("--materia", type=str, default=None)
    parser.add_argument("--meta", type=int, default=META_QUESTOES)
    args = parser.parse_args()

    meta = args.meta
    materias = load_json(MATERIAS_PATH)
    questoes = normalize_list(load_json(QUESTOES_PATH), "questoes")

    fila = []
    stats = {"total_aulas_com_material": 0, "com_meta_atingida": 0, "sem_nenhuma": 0, "total_questoes": len(questoes)}

    for materia_id, info in materias.items():
        if args.modulo and int(info.get("modulo", 0)) != args.modulo:
            continue
        if args.materia and materia_id != args.materia:
            continue

        modulo = int(info.get("modulo", 0))
        nome = str(info.get("nome") or materia_id)
        aulas = info.get("aulas") or []
        q_por_aula = count_by_aula(questoes, materia_id)

        for aula in aulas:
            aula_id = str(aula.get("id") or "").strip()
            if not aula_id:
                continue

            md_path = MATERIAIS_BASE / f"modulo{modulo}" / materia_id / f"{aula_id}.md"
            if not md_path.exists():
                continue  # sem material = agente gerador primeiro

            stats["total_aulas_com_material"] += 1
            q_count = q_por_aula.get(aula_id, 0)
            faltam = max(0, meta - q_count)

            if faltam == 0:
                stats["com_meta_atingida"] += 1
                continue
            if q_count == 0:
                stats["sem_nenhuma"] += 1

            score = faltam * 15 + (120 if q_count == 0 else 0)
            if modulo in (1, 2):
                score += 15

            fila.append({
                "aula_id": aula_id,
                "materia_id": materia_id,
                "materia_nome": nome,
                "modulo": modulo,
                "aula_tema": str(aula.get("tema") or aula_id),
                "aula_descricao": str(aula.get("descricao") or ""),
                "questoes_atuais": q_count,
                "questoes_faltam": faltam,
                "material_path": str(md_path.relative_to(ROOT)).replace("\\", "/"),
                "score": score,
            })

    fila.sort(key=lambda x: x["score"], reverse=True)

    status = {
        "status": "ok",
        "rodou_em": datetime.now().strftime("%d/%m/%Y %H:%M"),
        "meta_questoes_por_aula": meta,
        "stats": stats,
        "total_na_fila": len(fila),
        "fila_prioridade": fila[:60],
        "acoes": [
            {"tipo": "info", "hora": datetime.now().strftime("%H:%M"),
             "texto": f"{len(fila)} aulas na fila | {stats['sem_nenhuma']} sem nenhuma questão"}
        ],
    }

    STATUS_PATH.parent.mkdir(parents=True, exist_ok=True)
    STATUS_PATH.write_text(json.dumps(status, ensure_ascii=False, indent=2), encoding="utf-8")

    print(f"Priorização de questões — {datetime.now().strftime('%d/%m/%Y %H:%M')}")
    print(f"  Aulas com material: {stats['total_aulas_com_material']}")
    print(f"  Com meta atingida ({meta} questões): {stats['com_meta_atingida']}")
    print(f"  Sem nenhuma questão: {stats['sem_nenhuma']}")
    print(f"  Na fila para gerar: {len(fila)}")
    print(f"\nTop 10 urgentes:")
    for item in fila[:10]:
        print(f"  [{item['score']:3d}] {item['aula_id']} — {item['questoes_atuais']}/{meta} questões — {item['aula_tema'][:40]}")
    print(f"\nStatus salvo em: {STATUS_PATH}")


if __name__ == "__main__":
    main()
