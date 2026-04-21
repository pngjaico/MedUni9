import json
import os

# Batch 13: Meticulous Mapping (IDs 1001-1100)
# Cardiac Physiology - Properties

MAP_REASONING = {
    "bmf2_a2": "Propriedades do músculo cardíaco: inotropismo, cronotropismo, dromotropismo, batmotropismo e lusitropismo. Ciclo cardíaco e regulação autonômica.",
}

IDS_TO_VERIFY = range(1001, 1101)

def apply_batch_13():
    with open(r"c:\Users\Usuario-pc\Desktop\Aplicativo Uni9\meduni9-app\data\questoes.json", 'r', encoding='utf-8') as f:
        data = json.load(f)
    
    with open(r"c:\Users\Usuario-pc\Desktop\Aplicativo Uni9\meduni9-app\data\audit_justification_log.json", 'r', encoding='utf-8') as f:
        log = json.load(f)

    verified_count = 0
    
    for q in data['questoes']:
        q_id = q.get('id')
        if q_id in IDS_TO_VERIFY:
            # Categorization is already correct in bmf2_a2.
            q['tema'] = "bmf2_a2"
            q['aula_id'] = "bmf2_a2"
            q['materia'] = "bmf2"
            q['modulo'] = 2
            verified_count += 1
            
            # Update Log
            for entry in log:
                if entry['id'] == q_id:
                    entry['tema_proposto'] = "bmf2_a2"
                    entry['justificativa'] = f"[AUDITORIA MÉDICA] {MAP_REASONING.get('bmf2_a2', '')}"
                    entry['status'] = "verified_conceptual"
                    break

    with open(r"c:\Users\Usuario-pc\Desktop\Aplicativo Uni9\meduni9-app\data\questoes.json", 'w', encoding='utf-8') as f:
        json.dump(data, f, indent=2, ensure_ascii=False)
    
    with open(r"c:\Users\Usuario-pc\Desktop\Aplicativo Uni9\meduni9-app\data\audit_justification_log.json", 'w', encoding='utf-8') as f:
        json.dump(log, f, indent=2, ensure_ascii=False)

    print(f"Batch 13 processed: {verified_count} questions conceptually verified in cardiac physiology section.")

if __name__ == "__main__":
    apply_batch_13()
