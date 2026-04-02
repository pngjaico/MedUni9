import json
import re
from datetime import datetime
from pathlib import Path

ROOT = Path(__file__).parent
APPROVED_DIR = ROOT / "data" / "feedback" / "approved"
PROCESSED_DIR = ROOT / "data" / "feedback" / "processed"
PLANS_DIR = ROOT / "data" / "feedback" / "plans"
ARCHIVED_DIR = ROOT / "data" / "feedback" / "archived"
STATUS_FILE = ROOT / "data" / "agent_logs" / "status_feedback_planos.json"

for directory in (APPROVED_DIR, PROCESSED_DIR, PLANS_DIR, ARCHIVED_DIR):
    directory.mkdir(parents=True, exist_ok=True)


def load_json(path, default):
    try:
        with open(path, "r", encoding="utf-8") as f:
            return json.load(f)
    except Exception:
        return default


def save_json(path, data):
    with open(path, "w", encoding="utf-8") as f:
        json.dump(data, f, ensure_ascii=False, indent=2)


def slugify(text):
    return re.sub(r"[^a-z0-9]+", "-", (text or "").lower()).strip("-") or "feedback"


def next_plan_id(today):
    used = set()
    for folder in (PLANS_DIR, ARCHIVED_DIR):
        for fp in folder.glob(f"plan_{today}_*.json"):
            m = re.match(rf"plan_{re.escape(today)}_(\d+)$", fp.stem)
            if m:
                used.add(int(m.group(1)))
    index = 1
    while index in used:
        index += 1
    return f"plan_{today}_{index:03d}"


def existing_plan_sources():
    source_ids = set()
    for folder in (PLANS_DIR, ARCHIVED_DIR):
        for fp in folder.glob("*.json"):
            obj = load_json(fp, {})
            if obj.get("source_feedback_id"):
                source_ids.add(str(obj["source_feedback_id"]))
    return source_ids


def impact_from_feedback(tipo, mensagem):
    text = (mensagem or "").lower()
    if tipo == "bug":
        return "alto"
    if any(word in text for word in ["erro", "trav", "sumiu", "não abre", "nao abre"]):
        return "alto"
    if tipo in ("interface", "conteudo"):
        return "medio"
    return "baixo"


def plan_title(feedback):
    tipo = feedback.get("tipo", "sugestao")
    mensagem = (feedback.get("mensagem") or "").strip()
    short = mensagem[:62].rstrip() + ("..." if len(mensagem) > 62 else "")
    prefix = {
        "bug": "Plano para corrigir bug reportado",
        "sugestao": "Plano para avaliar melhoria sugerida",
        "conteudo": "Plano para revisar conteúdo solicitado",
        "interface": "Plano para ajuste de interface",
    }.get(tipo, "Plano para analisar feedback")
    return f"{prefix}: {short or 'sem descrição'}"


def plan_actions(feedback):
    tipo = feedback.get("tipo", "sugestao")
    mensagem = (feedback.get("mensagem") or "").lower()

    if "feedback" in mensagem and ("barra" in mensagem or "menu" in mensagem or "toggle" in mensagem):
        return [
            "Mapear o ponto atual do botão de feedback no app e remover a versão antiga.",
            "Adicionar o acesso ao feedback na navegação principal do app, junto às demais abas.",
            "Validar a navegação em mobile e desktop e revisar textos/ícones antes de liberar."
        ]

    base = {
        "bug": [
            "Reproduzir o problema descrito pelo usuário em ambiente local.",
            "Identificar a causa raiz no código ou nos dados envolvidos.",
            "Aplicar a correção e validar se o fluxo ficou estável em mobile e desktop."
        ],
        "sugestao": [
            "Avaliar se a sugestão melhora a experiência sem aumentar complexidade desnecessária.",
            "Definir a alteração mínima necessária para atender o pedido.",
            "Testar o resultado visual e funcional antes de liberar."
        ],
        "conteudo": [
            "Localizar a disciplina ou material relacionado ao feedback aprovado.",
            "Definir a correção ou complemento de conteúdo necessário.",
            "Validar coerência pedagógica antes de publicar a alteração."
        ],
        "interface": [
            "Mapear o elemento visual citado pelo feedback aprovado.",
            "Propor o ajuste de layout/posição/legibilidade com menor impacto possível.",
            "Testar a interface atualizada em telas pequenas e grandes."
        ]
    }
    return base.get(tipo, [
        "Entender o contexto do feedback aprovado.",
        "Definir a menor ação possível para resolver o caso.",
        "Validar o resultado final antes de publicar."
    ])


def main():
    now = datetime.now()
    today_iso = now.strftime("%Y-%m-%d")
    now_iso = now.isoformat()
    now_br = now.strftime("%d/%m/%Y %H:%M")
    now_hhmm = now.strftime("%H:%M")

    status = {
        "status": "ok",
        "rodou_em": now_br,
        "feedbacks_aprovados_lidos": 0,
        "planos_gerados": 0,
        "acoes": [],
        "observacoes": ""
    }

    already_planned = existing_plan_sources()
    approved_files = sorted(APPROVED_DIR.glob("*.json"))
    approved_feedbacks = []
    for fp in approved_files:
        obj = load_json(fp, None)
        if not obj:
            continue
        if str(obj.get("_id", "")) in already_planned:
            continue
        approved_feedbacks.append((fp, obj))

    status["feedbacks_aprovados_lidos"] = len(approved_feedbacks)

    if not approved_feedbacks:
        status["status"] = "idle"
        status["acoes"].append({"tipo": "info", "hora": now_hhmm, "texto": "Nenhum feedback bruto aprovado aguardando plano."})
        status["observacoes"] = "Sem feedbacks aprovados para gerar plano de ação."
        save_json(STATUS_FILE, status)
        print("[INFO] Nenhum feedback aprovado aguardando plano")
        return

    generated = []
    for source_file, feedback in approved_feedbacks:
        plan_id = next_plan_id(today_iso)
        plan = {
            "id": plan_id,
            "status": "pendente",
            "source_feedback_id": feedback.get("_id"),
            "tipo_feedback": feedback.get("tipo", "sugestao"),
            "titulo": plan_title(feedback),
            "resumo": feedback.get("mensagem") or "Feedback sem mensagem detalhada.",
            "acoes": plan_actions(feedback),
            "impacto": impact_from_feedback(feedback.get("tipo"), feedback.get("mensagem")),
            "disciplina": feedback.get("disciplina"),
            "criadoEm": now_iso
        }
        save_json(PLANS_DIR / f"{plan_id}.json", plan)

        feedback["planId"] = plan_id
        feedback["planGeradoEm"] = now_iso
        save_json(PROCESSED_DIR / source_file.name, feedback)
        source_file.unlink()
        generated.append(plan_id)

    status["planos_gerados"] = len(generated)
    status["acoes"].append({"tipo": "ok", "hora": now_hhmm, "texto": f"{len(generated)} plano(s) de ação gerado(s)."})
    status["acoes"].extend({"tipo": "ok", "hora": now_hhmm, "texto": f"Plano {plan_id} criado"} for plan_id in generated)
    status["observacoes"] = f"{len(generated)} plano(s) gerado(s) em {today_iso}."
    save_json(STATUS_FILE, status)
    print(f"[OK] {len(generated)} plano(s) gerado(s)")


if __name__ == "__main__":
    main()
