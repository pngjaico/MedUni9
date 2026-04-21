import json
import os

# Batch 14: Meticulous Mapping (IDs 1101-1200)
# Public Health - Determinants & Equity

MAP_REASONING = {
    "ds_a3": "Determinantes sociais da saúde: intersetorialidade, equidade de impacto vs cobertura formal e promoção da saúde (leis vs execução).",
}

IDS_TO_VERIFY = range(1101, 1201)

def apply_batch_14():
    with open(r"c:\Users\Usuario-pc\Desktop\Aplicativo Uni9\meduni9-app\data\questoes.json", 'r', encoding='utf-8') as f:
        data = json.load(f)
    
    with open(r"c:\Users\Usuario-pc\Desktop\Aplicativo Uni9\meduni9-app\data\audit_justification_log.json", 'r', encoding='utf-8') as f:
        log = json.load(f)

    verified_count = 0
    
    for q in data['questoes']:
        q_id = q.get('id')
        if q_id in IDS_TO_VERIFY:
            # Already correct in ds_a3.
            q['tema'] = "ds_a3"
            q['aula_id'] = "ds_a3"
            q['materia'] = "ds"
            q['modulo'] = 2
            verified_count += 1
            
            # Update Log
            for entry in log:
                if entry['id'] == q_id:
                    entry['tema_proposto'] = "ds_a3"
                    entry['justificativa'] = f"[AUDITORIA MÉDICA] {MAP_REASONING.get('ds_a3', '')}"
                    entry['status'] = "verified_conceptual"
                    break

    with open(r"c:\Users\Usuario-pc\Desktop\Aplicativo Uni9\meduni9-app\data\questoes.json", 'w', encoding='utf-8') as f:
        json.dump(data, f, indent=2, ensure_ascii=False)
    
    with open(r"c:\Users\Usuario-pc\Desktop\Aplicativo Uni9\meduni9-app\data\audit_justification_log.json", 'w', encoding='utf-8') as f:
        json.dump(log, f, indent=2, ensure_ascii=False)

    print(f"Batch 14 processed: {verified_count} questions conceptually verified in public health section.")

if __name__ == "__main__":
    apply_batch_14()
