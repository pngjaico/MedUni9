#!/usr/bin/env python3
"""
aprovar_pendentes.py — Aplica relatórios aprovados dos agentes autônomos

Uso:
  python scripts/aprovar_pendentes.py           # interativo: aprova/rejeita um a um
  python scripts/aprovar_pendentes.py --listar  # só lista os pendentes, sem aplicar
  python scripts/aprovar_pendentes.py --todos   # aprova todos automaticamente (cuidado)
"""

from __future__ import annotations
import argparse
import json
import datetime
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
PENDENTES_DIR = ROOT / "data" / "agent_logs" / "pendentes"


def listar_pendentes() -> list[Path]:
    if not PENDENTES_DIR.exists():
        return []
    files = sorted(PENDENTES_DIR.glob("*.json"))
    return [f for f in files if json.loads(f.read_text(encoding="utf-8")).get("status") == "pendente"]


def exibir_relatorio(rel: dict):
    print(f"\n{'='*60}")
    print(f"  Agente  : {rel.get('agente', '?')}")
    print(f"  Gerado  : {rel.get('gerado_em', '?')[:19]}")
    print(f"  Resumo  : {rel.get('resumo', '?')}")
    print(f"  Ações   : {len(rel.get('acoes', []))} operações")
    print()
    for acao in rel.get("acoes", []):
        tipo = acao.get("tipo", "?")
        arquivo = acao.get("arquivo", "?")
        aula_id = acao.get("aula_id", "")
        qtd = acao.get("quantidade", "")
        chars = acao.get("chars", "")
        novo = acao.get("novo", False)

        if tipo == "write_file":
            tag = "[NOVO]" if novo else "[ATUALIZAR]"
            info = f"{chars} chars" if chars else ""
            print(f"  ✦ {arquivo} {tag} {info}")
        elif tipo == "append_json":
            print(f"  ✦ +{qtd} items → {arquivo}  (aula: {aula_id})")
    print(f"{'='*60}")


def aplicar_relatorio(rel: dict, rel_path: Path) -> bool:
    acoes = rel.get("acoes", [])
    arquivos_modificados = []
    erros = []

    for acao in acoes:
        tipo = acao.get("tipo")
        arquivo = ROOT / acao.get("arquivo", "")
        conteudo = acao.get("conteudo", "")

        if tipo == "write_file":
            try:
                arquivo.parent.mkdir(parents=True, exist_ok=True)
                # conteudo pode ser string (md) ou dict/json serializado
                if arquivo.suffix == ".json" and isinstance(conteudo, str):
                    # tenta fazer parse para reserializar bonito
                    try:
                        obj = json.loads(conteudo)
                        conteudo = json.dumps(obj, ensure_ascii=False, indent=2)
                    except Exception:
                        pass
                arquivo.write_text(conteudo, encoding="utf-8")
                arquivos_modificados.append(str(arquivo.relative_to(ROOT)))
                print(f"  ✓ {arquivo.relative_to(ROOT)}")
            except Exception as e:
                erros.append((str(arquivo), str(e)))
                print(f"  ✗ ERRO em {arquivo}: {e}")

        elif tipo == "append_json":
            try:
                items = acao.get("items", [])
                if not items:
                    print(f"  ⚠ append_json sem items para {arquivo}")
                    continue
                data = json.loads(arquivo.read_text(encoding="utf-8"))
                if isinstance(data, list):
                    data.extend(items)
                    result = data
                else:
                    campo = acao.get("campo_array")
                    if campo and campo in data:
                        data[campo].extend(items)
                    else:
                        # tenta encontrar o array principal
                        for key, val in data.items():
                            if isinstance(val, list):
                                val.extend(items)
                                break
                    result = data
                arquivo.write_text(json.dumps(result, ensure_ascii=False, indent=2), encoding="utf-8")
                arquivos_modificados.append(str(arquivo.relative_to(ROOT)))
                print(f"  ✓ +{len(items)} items → {arquivo.relative_to(ROOT)}")
            except Exception as e:
                erros.append((str(arquivo), str(e)))
                print(f"  ✗ ERRO em {arquivo}: {e}")

    if erros:
        print(f"\n  {len(erros)} erro(s) encontrados:")
        for path, err in erros:
            print(f"    {path}: {err}")
        return False

    # Marca como aprovado
    rel["status"] = "aprovado"
    rel["aprovado_em"] = datetime.datetime.now().isoformat()
    rel["arquivos_aplicados"] = arquivos_modificados
    rel_path.write_text(json.dumps(rel, ensure_ascii=False, indent=2), encoding="utf-8")

    return True


def main():
    parser = argparse.ArgumentParser(description="Aplica relatórios pendentes dos agentes.")
    parser.add_argument("--listar", action="store_true", help="Só lista pendentes, não aplica")
    parser.add_argument("--todos", action="store_true", help="Aprova todos sem confirmação")
    args = parser.parse_args()

    pendentes = listar_pendentes()

    if not pendentes:
        print("Nenhum relatório pendente encontrado em data/agent_logs/pendentes/")
        return

    print(f"\n{len(pendentes)} relatório(s) pendente(s):\n")
    for i, path in enumerate(pendentes, 1):
        rel = json.loads(path.read_text(encoding="utf-8"))
        print(f"  [{i}] {path.name}")
        print(f"      Agente: {rel.get('agente')} | {rel.get('resumo', '')[:80]}")

    if args.listar:
        print("\nModo --listar: nenhuma alteração feita.")
        return

    print()
    for rel_path in pendentes:
        rel = json.loads(rel_path.read_text(encoding="utf-8"))
        exibir_relatorio(rel)

        if args.todos:
            resposta = "s"
        else:
            try:
                resposta = input(f"\nAprovar '{rel_path.name}'? [s/n/q para sair]: ").strip().lower()
            except (EOFError, KeyboardInterrupt):
                print("\nInterrompido.")
                break

        if resposta == "q":
            print("Saindo.")
            break
        elif resposta == "s":
            print(f"\nAplicando {rel_path.name}...")
            ok = aplicar_relatorio(rel, rel_path)
            if ok:
                print(f"\n  Aprovado e aplicado com sucesso.")
            else:
                print(f"\n  Aplicado com erros — verifique acima.")
        else:
            rel["status"] = "rejeitado"
            rel["rejeitado_em"] = datetime.datetime.now().isoformat()
            rel_path.write_text(json.dumps(rel, ensure_ascii=False, indent=2), encoding="utf-8")
            print(f"  Rejeitado: {rel_path.name}")

    # Sugestão de commit
    print(f"\n{'='*60}")
    print("Lembre de commitar as alterações aprovadas:")
    print("  git add -A && git commit -m 'feat: aplicar relatórios aprovados dos agentes'")
    print(f"{'='*60}\n")


if __name__ == "__main__":
    main()
