#!/usr/bin/env python3
"""
Popula materiais de estudo por aula em lotes limitados.

Fluxo:
1) Le materias, flashcards e questoes existentes.
2) Calcula cobertura por aula (material, flashcards, questoes).
3) Prioriza aulas com maior lacuna.
4) Gera arquivos .md por aula em conteudos/materiais/moduloX/<materia>/<aula_id>.md
5) Salva relatorio de prioridade em data/agent_logs/prioridades_materiais.json
"""

from __future__ import annotations

import argparse
import json
from dataclasses import dataclass
from pathlib import Path
from typing import Dict, List, Tuple

ROOT = Path(__file__).resolve().parent
MATERIAS_PATH = ROOT / "data" / "materias.json"
FLASHCARDS_PATH = ROOT / "data" / "flashcards.json"
QUESTOES_PATH = ROOT / "data" / "questoes.json"
REPORT_PATH = ROOT / "data" / "agent_logs" / "prioridades_materiais.json"
OUTPUT_BASE = ROOT / "conteudos" / "materiais"

DEFAULT_ESTRATEGICAS = [
    "bmf1",
    "bcm1",
    "pmh",
    "mad1",
    "mad2",
    "fisiopato_farmaco",
]


@dataclass
class AulaPriority:
    materia_id: str
    materia_nome: str
    modulo: int
    aula_id: str
    aula_tema: str
    aula_descricao: str
    material_exists: bool
    flashcards_count: int
    questoes_count: int
    priority_score: int


def load_json(path: Path):
    with path.open("r", encoding="utf-8") as f:
        return json.load(f)


def normalize_cards(raw) -> List[dict]:
    if isinstance(raw, dict) and "flashcards" in raw:
        return raw.get("flashcards", [])
    if isinstance(raw, list):
        return raw
    return []


def normalize_questoes(raw) -> List[dict]:
    if isinstance(raw, dict) and "questoes" in raw:
        return raw.get("questoes", [])
    if isinstance(raw, list):
        return raw
    return []


def target_materias(all_materias: Dict[str, dict], requested: List[str]) -> Dict[str, dict]:
    out = {}
    for m_id in requested:
        if m_id in all_materias:
            out[m_id] = all_materias[m_id]
    return out


def count_by_tema(items: List[dict], materia_id: str) -> Dict[str, int]:
    counts: Dict[str, int] = {}
    for item in items:
        if item.get("materia") != materia_id:
            continue
        tema = str(item.get("tema") or "").strip()
        if not tema:
            continue
        counts[tema] = counts.get(tema, 0) + 1
    return counts


def material_file_path(modulo: int, materia_id: str, aula_id: str) -> Path:
    return OUTPUT_BASE / f"modulo{modulo}" / materia_id / f"{aula_id}.md"


def score_aula(material_exists: bool, flashcards_count: int, questoes_count: int, modulo: int) -> int:
    # Maior score = maior prioridade
    score = 0
    if not material_exists:
        score += 120

    # Metas do MVP por aula
    # Flashcards alvo: 12 | Questoes alvo: 20
    score += max(0, 12 - flashcards_count) * 3
    score += max(0, 20 - questoes_count) * 2

    # Modulos iniciais recebem leve prioridade comercial
    if modulo in (1, 2):
        score += 8
    elif modulo in (3, 4):
        score += 4

    return score


def build_md(a: AulaPriority) -> str:
    materia_slug = a.materia_id
    aula_slug = a.aula_id
    title = f"{a.aula_tema}"

    return f"""# {title}

## Visao Geral
- Materia: {a.materia_nome} ({a.materia_id.upper()})
- Modulo: {a.modulo}
- Aula ID: {a.aula_id}
- Tempo estimado: 35 a 50 min

## Objetivo da Aula
{a.aula_descricao}

## Contexto de Prova e Pratica
Esta aula cobre os pontos essenciais que mais aparecem em revisao teorica e em aplicacao clinica inicial.

## Sumario
1. Conceitos essenciais
2. Mecanismos-chave
3. Erros comuns
4. Checklist de revisao

## 1) Conceitos Essenciais
- Definicao central do tema
- Classificacoes e organizacao do assunto
- Relacao com sinais, sintomas ou funcao biologica

## 2) Mecanismos-Chave
- Como o processo acontece passo a passo
- Pontos de regulacao e fatores que alteram o resultado
- Conexao com conteudos da materia e do modulo

## 3) Erros Comuns
- Confundir nomenclatura com mecanismo
- Memorizar isolado sem correlacao com caso
- Ignorar diferencas entre fisiologico e patologico

## 4) Checklist de Revisao
- [ ] Consigo explicar o tema em 60 segundos
- [ ] Sei diferenciar conceitos proximos
- [ ] Sei responder uma questao objetiva sobre o assunto

## Ponte para Revisao
- Flashcards existentes para esta aula: {a.flashcards_count}
- Questoes existentes para esta aula: {a.questoes_count}
- Link rapido (flashcards): /?tab=cards&materia={materia_slug}&tema={aula_slug}
- Link rapido (questoes): /?tab=quiz&materia={materia_slug}&tema={aula_slug}

## Espaço para Imagem Futura
- Status: PENDENTE
- Tipo sugerido: esquema visual do tema
- Prompt sugerido para imagem:
  "Criar um esquema didatico limpo para estudantes de medicina sobre '{a.aula_tema}', destacando os elementos centrais, fluxo logico e pontos de prova. Estilo academico, legivel em mobile, fundo claro, sem excesso de detalhes."

## Notas Editoriais
- Prioridade da aula neste lote: {a.priority_score}
- Revisar terminologia conforme plano de ensino
- Expandir com exemplos clinicos na proxima iteracao
"""


def main() -> None:
    parser = argparse.ArgumentParser(description="Popula materiais por aula com prioridade e lote limitado.")
    parser.add_argument("--materias", type=str, default=",".join(DEFAULT_ESTRATEGICAS), help="Lista de materias separadas por virgula")
    parser.add_argument("--max-aulas", type=int, default=24, help="Quantidade maxima de aulas para gerar no lote")
    parser.add_argument("--por-materia", type=int, default=4, help="Maximo de aulas por materia neste lote")
    parser.add_argument("--force", action="store_true", help="Sobrescreve materiais ja existentes")
    args = parser.parse_args()

    materias = load_json(MATERIAS_PATH)
    flashcards = normalize_cards(load_json(FLASHCARDS_PATH))
    questoes = normalize_questoes(load_json(QUESTOES_PATH))

    requested_ids = [m.strip() for m in args.materias.split(",") if m.strip()]
    selected = target_materias(materias, requested_ids)

    priorities: List[AulaPriority] = []

    for materia_id, meta in selected.items():
        modulo = int(meta.get("modulo", 0) or 0)
        nome = str(meta.get("nome") or materia_id)
        aulas = meta.get("aulas") or []

        fc_by_tema = count_by_tema(flashcards, materia_id)
        q_by_tema = count_by_tema(questoes, materia_id)

        for aula in aulas:
            aula_id = str(aula.get("id") or "").strip()
            if not aula_id:
                continue
            tema = str(aula.get("tema") or aula_id)
            desc = str(aula.get("descricao") or "")

            out_file = material_file_path(modulo, materia_id, aula_id)
            exists = out_file.exists()

            fc_count = fc_by_tema.get(aula_id, 0)
            q_count = q_by_tema.get(aula_id, 0)

            score = score_aula(exists, fc_count, q_count, modulo)

            priorities.append(
                AulaPriority(
                    materia_id=materia_id,
                    materia_nome=nome,
                    modulo=modulo,
                    aula_id=aula_id,
                    aula_tema=tema,
                    aula_descricao=desc,
                    material_exists=exists,
                    flashcards_count=fc_count,
                    questoes_count=q_count,
                    priority_score=score,
                )
            )

    priorities.sort(key=lambda x: x.priority_score, reverse=True)

    # Aplica limites por materia e global
    selected_batch: List[AulaPriority] = []
    by_materia: Dict[str, int] = {}

    for item in priorities:
        if len(selected_batch) >= args.max_aulas:
            break
        if by_materia.get(item.materia_id, 0) >= args.por_materia:
            continue
        if item.material_exists and not args.force:
            continue
        selected_batch.append(item)
        by_materia[item.materia_id] = by_materia.get(item.materia_id, 0) + 1

    generated = []

    for item in selected_batch:
        out = material_file_path(item.modulo, item.materia_id, item.aula_id)
        out.parent.mkdir(parents=True, exist_ok=True)
        out.write_text(build_md(item), encoding="utf-8")
        generated.append(str(out.relative_to(ROOT)).replace("\\", "/"))

    REPORT_PATH.parent.mkdir(parents=True, exist_ok=True)
    report = {
        "materias_alvo": requested_ids,
        "config": {
            "max_aulas": args.max_aulas,
            "por_materia": args.por_materia,
            "force": args.force,
        },
        "gerados_total": len(generated),
        "gerados": generated,
        "top_prioridades": [
            {
                "materia": p.materia_id,
                "aula_id": p.aula_id,
                "aula_tema": p.aula_tema,
                "score": p.priority_score,
                "material_exists": p.material_exists,
                "flashcards": p.flashcards_count,
                "questoes": p.questoes_count,
            }
            for p in priorities[:80]
        ],
    }

    REPORT_PATH.write_text(json.dumps(report, ensure_ascii=False, indent=2), encoding="utf-8")

    print(f"Materias alvo: {', '.join(requested_ids)}")
    print(f"Aulas geradas no lote: {len(generated)}")
    print(f"Relatorio salvo em: {REPORT_PATH}")
    if generated:
        print("Primeiros arquivos gerados:")
        for path in generated[:10]:
            print(f"- {path}")


if __name__ == "__main__":
    main()
