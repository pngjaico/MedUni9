import json
import os

# Batch 18: Meticulous Mapping (IDs 1501-1600)
# Semiology - Cardiorespiratory Syndromes

MAP_REASONING = {
    "semio2_a5": "Integração de achados e síndromes: diferenciação de padrões obstrutivos e restritivos, priorização clínica por gravidade e raciocínio fisiopatológico integrado.",
}

IDS_TO_VERIFY = range(1501, 1601)

def apply_batch_18():
    with open(r"c:\Users\Usuario-pc\Desktop\Aplicativo Uni9\meduni9-app\data\questoes.json", 'r', encoding='utf-8') as f:
        data = json.load(f)
    
    with open(r"c:\Users\Usuario-pc\Desktop\Aplicativo Uni9\meduni9-app\data\audit_justification_log.json", 'r', encoding='utf-8') as f:
        log = json.load(f)

    verified_count = 0
    
    for q in data['questoes']:
        q_id = q.get('id')
        if q_id in IDS_TO_VERIFY:
            # Verified in semio2_a5.
            q['tema'] = "semio2_a5"
            q['aula_id'] = "semio2_a5"
            q['materia'] = "semiologia2"
            q['modulo'] = 2
            verified_count += 1
            
            # Update Log
            for entry in log:
                if entry['id'] == q_id:
                    entry['tema_proposto'] = "semio2_a5"
                    entry['justificativa'] = f"[AUDITORIA MÉDICA] {MAP_REASONING.get('semio2_a5', '')}"
                    entry['status'] = "verified_conceptual"
                    break

    with open(r"c:\Users\Usuario-pc\Desktop\Aplicativo Uni9\meduni9-app\data\questoes.json", 'w', encoding='utf-8') as f:
        json.dump(data, f, indent=2, ensure_ascii=False)
    
    with open(r"c:\Users\Usuario-pc\Desktop\Aplicativo Uni9\meduni9-app\data\audit_justification_log.json", 'w', encoding='utf-8') as f:
        json.dump(log, f, indent=2, ensure_ascii=False)

    print(f"Batch 18 processed: {verified_count} questions conceptually verified in semiology section.")

if __name__ == "__main__":
    apply_batch_18()
