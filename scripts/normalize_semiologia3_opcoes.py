"""Normalize semiologia3 MCQs: opcoes[i] = letter i (A-D), correta index matches UI."""
import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
PATH = ROOT / "data" / "questoes.json"

LETTERS = ["A", "B", "C", "D"]


def parse_label(text: str):
    text = (text or "").strip()
    m = re.match(r"^([A-D])\)\s*(.*)$", text, flags=re.DOTALL)
    if m:
        return m.group(1), m.group(2).strip()
    return None, text


def strip_meta(s: str) -> str:
    if not s:
        return s
    s = re.sub(r"^(Correta|Incorreta)\s*:\s*", "", s, flags=re.I)
    s = re.sub(r"^(Correta|Incorreta)\s*\.\s*", "", s, flags=re.I)
    return s.strip()


def normalize_question(q: dict) -> bool:
    ops = q.get("opcoes") or []
    if len(ops) != 4 or q.get("correta") not in (0, 1, 2, 3):
        return False

    by_letter = {}
    for i, raw in enumerate(ops):
        L, body = parse_label(raw)
        if L is None:
            L = LETTERS[i]
            body = re.sub(r"^[A-D]\)\s*", "", str(raw).strip()).strip()
        by_letter[L] = body

    if set(by_letter.keys()) != set(LETTERS):
        return False

    old_idx = q["correta"]
    old_L, _ = parse_label(ops[old_idx])
    if old_L is None:
        old_L = LETTERS[old_idx]

    new_opcoes = [f"{L}) {by_letter[L]}" for L in LETTERS]
    q["opcoes"] = new_opcoes
    q["correta"] = LETTERS.index(old_L)

    exp = q.get("explicacoes_opcoes")
    if isinstance(exp, dict):
        new_exp = {}
        for L in LETTERS:
            new_exp[L] = strip_meta(exp.get(L, ""))
        q["explicacoes_opcoes"] = new_exp

    eg = strip_meta(q.get("explicacao_geral") or "")
    q["explicacao_geral"] = eg
    lines = [eg] if eg else []
    for L in LETTERS:
        t = strip_meta((q.get("explicacoes_opcoes") or {}).get(L, ""))
        if t:
            lines.append(f"{L}) {t}")
    q["explicacao"] = "\n".join(lines)
    return True


def apply_surgical_fixes(data: dict) -> None:
    """Content fixes after letter normalization (microtema + forma)."""
    by_id = {q["id"]: q for q in data["questoes"] if q.get("materia") == "semiologia3"}

    def rebuild_explicacao(q):
        eg = strip_meta(q.get("explicacao_geral") or "")
        lines = [eg] if eg else []
        exp = q.get("explicacoes_opcoes") or {}
        for L in LETTERS:
            t = strip_meta(exp.get(L, ""))
            if t:
                lines.append(f"{L}) {t}")
        q["explicacao"] = "\n".join(lines)

    # 2316: distratores urológicos plausíveis (não respiratório / MMII)
    q = by_id.get(2316)
    if q:
        q["opcoes"] = [
            "A) Disúria e hematúria terminal",
            "B) Urgência miccional e polaciúria",
            "C) Tenesmo vesical com sensação de esvaziamento incompleto",
            "D) Priapismo não isquêmico de longa data",
        ]
        q["correta"] = 1  # B
        q["explicacoes_opcoes"] = {
            "A": "Hematúria e disúria podem ocorrer com cálculo, mas o enunciado enfatiza irritação vesical baixa por cálculo distal.",
            "B": "Cálculo impactado na junção ureterovesical costuma associar-se a sintomas irritativos de bexiga.",
            "C": "Nictúria isolada, sem urgência ou aumento da frequência diurna, é padrão menos típico de irritação vesical por cálculo termina.",
            "D": "Priapismo não se relaciona ao trajeto ureteral distal.",
        }
        rebuild_explicacao(q)

    # 2318: distratores no universo abdome/pelve/urinário
    q = by_id.get(2318)
    if q:
        q["opcoes"] = [
            "A) Cistite aguda sem sinais de acometimento renal",
            "B) Prostatite bacteriana aguda com foco glandular",
            "C) Pielonefrite complicada por obstrução do trato urinário",
            "D) Obstrução urinária baixa crônica sem infecção ativa",
        ]
        q["correta"] = 2
        q["explicacoes_opcoes"] = {
            "A": "Cistite costuma cursar com sintomas irritativos baixos, sem febre alta e dor bilateral em ângulos costovertebrais.",
            "B": "Prostatite explica febre e dor ao toque prostático, mas o quadro com TCV bilateral chama mais atenção para rim e via alta.",
            "C": "Febre, TCV bilateral e base obstrutiva por hipertrofia prostática compõem infecção do trato alto associada a obstrução.",
            "D": "Obstrução sem infecção não explica febre, mal-estar e TCV bilateral.",
        }
        rebuild_explicacao(q)

    # 2329: equilibrar comprimento da alternativa correta (D)
    q = by_id.get(2329)
    if q:
        q["opcoes"] = [
            "A) Prescrever anti-inflamatório e revisar em 30 dias sem exames",
            "B) Tratar empiricamente como epididimite sem critério infeccioso",
            "C) Dosar marcadores tumorais isoladamente na UBS",
            "D) Encaminhar para ultrassonografia escrotal e avaliação urológica prioritária",
        ]
        q["correta"] = 3
        q["explicacao_geral"] = (
            "Nódulo intratesticular persistente requer confirmação imagem e avaliação especializada."
        )
        q["explicacoes_opcoes"] = {
            "A": "Conduta expectante atrasar definição etiológica em nódulo intratesticular.",
            "B": "Antibiótico sem evidência infecciosa pode mascarar a investigação.",
            "C": "Marcadores não substituem definição de arquitetura testicular por imagem.",
            "D": "Ultrassom escrotal é passo chave e deve ser associado à avaliação urológica precoce.",
        }
        rebuild_explicacao(q)

    # 2340: alternativas com paralelismo (comprimento semelhante)
    q = by_id.get(2340)
    if q:
        q["opcoes"] = [
            "A) Piora ciclica pré-menstrual, dispareunia profunda e dor em fundo de saco",
            "B) Melhora consistente após evacuar e alívio com flatos",
            "C) Dor pélvica difusa, sem relação com ciclo e exame pélvico normal",
            "D) Dor pélvica atribuída a estresse, sem achados em exame ginecológico",
        ]
        q["correta"] = 0
        q["explicacoes_opcoes"] = {
            "A": "Ciclo, dispareunia e dor em fundo de saco sugerem doença ginecológica estrutural (ex.: endometriose).",
            "B": "Padrão pós-evacuação é mais compatível com componente intestinal funcional.",
            "C": "Exame pélvico normal e ausência de padrão cíclico reduzem probabilidade de causa ginecológica orgânica clássica.",
            "D": "Sozinho, vínculo exclusivo com estresse não explica conjunto de achados de foco pélvico estrutural.",
        }
        rebuild_explicacao(q)

    # 2315: corrigir explicações alinhadas às alternativas após normalização prévia
    q = by_id.get(2315)
    if q and q.get("tema") == "semio3_a3":
        q["explicacoes_opcoes"] = {
            "A": "Alta expectante ignora anúria persistente com dor bilateral em flancos.",
            "B": "Anúria com dor bilateral em paciente com litíase sugere obstrução grave ou fenômeno obstrutivo agudo; há indicação de urgência urológica.",
            "C": "Cistite hemorrágica não costuma cursar com anúria e nem com dor bilateral em regiões lombares.",
            "D": "Dor lombar mecânica não explica parada de diurese nesse contexto.",
        }
        rebuild_explicacao(q)


def main():
    data = json.loads(PATH.read_text(encoding="utf-8"))
    n = 0
    for q in data["questoes"]:
        if q.get("materia") != "semiologia3":
            continue
        if normalize_question(q):
            n += 1

    apply_surgical_fixes(data)

    # Re-strip and rebuild explicacao for any question touched by surgery (already rebuilt)
    for q in data["questoes"]:
        if q.get("materia") != "semiologia3":
            continue
        if isinstance(q.get("explicacoes_opcoes"), dict):
            for L in LETTERS:
                if L in q["explicacoes_opcoes"]:
                    q["explicacoes_opcoes"][L] = strip_meta(q["explicacoes_opcoes"][L])
        q["explicacao_geral"] = strip_meta(q.get("explicacao_geral") or "")
        eg = q["explicacao_geral"]
        lines = [eg] if eg else []
        exp = q.get("explicacoes_opcoes") or {}
        for L in LETTERS:
            t = strip_meta(exp.get(L, ""))
            if t:
                lines.append(f"{L}) {t}")
        q["explicacao"] = "\n".join(lines)

    PATH.write_text(json.dumps(data, ensure_ascii=False, indent=2), encoding="utf-8")
    print("normalized", n, "questions")


if __name__ == "__main__":
    main()
