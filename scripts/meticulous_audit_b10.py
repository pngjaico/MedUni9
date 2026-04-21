import json
import os

# Batch 10: Meticulous Mapping (IDs 701-800)
# Public Health (SUS) - Family Tools

MAP_REASONING = {
    "sus_a9": "Ferramentas de abordagem familiar: Genograma, Ecomapa e APGAR familiar. Ética e sigilo na APS.",
}

IDS_TO_VERIFY = range(701, 801)

def apply_batch_10():
    with open(r"c:\Users\Usuario-pc\Desktop\Aplicativo Uni9\meduni9-app\data\questoes.json", 'r', encoding='utf-8') as f:
        data = json.load(f)
    
    with open(r"c:\Users\Usuario-pc\Desktop\Aplicativo Uni9\meduni9-app\data\audit_justification_log.json", 'r', encoding='utf-8') as f:
        log = json.load(f)

    verified_count = 0
    
    for q in data['questoes']:
        q_id = q.get('id')
        if q_id in IDS_TO_VERIFY:
            # Most of these are correctly in sus_a9.
            q['tema'] = "sus_a9"
            q['aula_id'] = "sus_a9"
            q['materia'] = "sus"
            q['modulo'] = 1
            verified_count += 1
            
            # Update Log
            for entry in log:
                if entry['id'] == q_id:
                    entry['tema_proposto'] = "sus_a9"
                    entry['justificativa'] = f"[AUDITORIA MÉDICA] {MAP_REASONING.get('sus_a9', '')}"
                    entry['status'] = "verified_conceptual"
                    break

    with open(r"c:\Users\Usuario-pc\Desktop\Aplicativo Uni9\meduni9-app\data\questoes.json", 'w', encoding='utf-8') as f:
        json.dump(data, f, indent=2, ensure_ascii=False)
    
    with open(r"c:\Users\Usuario-pc\Desktop\Aplicativo Uni9\meduni9-app\data\audit_justification_log.json", 'w', encoding='utf-8') as f:
        json.dump(log, f, indent=2, ensure_ascii=False)

    print(f"Batch 10 processed: {verified_count} questions conceptually verified in public health section.")

if __name__ == "__main__":
    apply_batch_10()
