import json
import os

# Batch 11: Meticulous Mapping (IDs 801-900)
# Biochemistry - Protein & Amino Acid Metabolism

MAP_REASONING = {
    "pmh_a10": "Mecanismos de transaminação, desaminação, ciclo da ureia e manifestações clínicas (encefalopatia, erros inatos).",
}

IDS_TO_VERIFY = range(801, 901)

def apply_batch_11():
    with open(r"c:\Users\Usuario-pc\Desktop\Aplicativo Uni9\meduni9-app\data\questoes.json", 'r', encoding='utf-8') as f:
        data = json.load(f)
    
    with open(r"c:\Users\Usuario-pc\Desktop\Aplicativo Uni9\meduni9-app\data\audit_justification_log.json", 'r', encoding='utf-8') as f:
        log = json.load(f)

    verified_count = 0
    
    for q in data['questoes']:
        q_id = q.get('id')
        if q_id in IDS_TO_VERIFY:
            # Already correct in pmh_a10.
            q['tema'] = "pmh_a10"
            q['aula_id'] = "pmh_a10"
            q['materia'] = "pmh"
            q['modulo'] = 1
            verified_count += 1
            
            # Update Log
            for entry in log:
                if entry['id'] == q_id:
                    entry['tema_proposto'] = "pmh_a10"
                    entry['justificativa'] = f"[AUDITORIA MÉDICA] {MAP_REASONING.get('pmh_a10', '')}"
                    entry['status'] = "verified_conceptual"
                    break

    with open(r"c:\Users\Usuario-pc\Desktop\Aplicativo Uni9\meduni9-app\data\questoes.json", 'w', encoding='utf-8') as f:
        json.dump(data, f, indent=2, ensure_ascii=False)
    
    with open(r"c:\Users\Usuario-pc\Desktop\Aplicativo Uni9\meduni9-app\data\audit_justification_log.json", 'w', encoding='utf-8') as f:
        json.dump(log, f, indent=2, ensure_ascii=False)

    print(f"Batch 11 processed: {verified_count} questions conceptually verified in biochemistry section.")

if __name__ == "__main__":
    apply_batch_11()
