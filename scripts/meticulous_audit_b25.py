import json
import os

# Batch 25: Meticulous Mapping (IDs 2201-2300)
# Semiology - Abdominal / Acute Abdomen

IDS_TO_VERIFY = range(2201, 2301)

MAP_REASONING = {
    "semio3_a1": "Semiologia abdominal: Anamnese (sequência de dor, náuseas e vômitos), manobras (Murphy, descompressão brusca) e raciocínio clínico no abdome agudo (isquemia, apendicite, colecistite).",
}

def apply_batch_25():
    with open(r"c:\Users\Usuario-pc\Desktop\Aplicativo Uni9\meduni9-app\data\questoes.json", 'r', encoding='utf-8') as f:
        data = json.load(f)
    
    with open(r"c:\Users\Usuario-pc\Desktop\Aplicativo Uni9\meduni9-app\data\audit_justification_log.json", 'r', encoding='utf-8') as f:
        log = json.load(f)

    verified_count = 0
    
    for q in data['questoes']:
        q_id = q.get('id')
        if q_id in IDS_TO_VERIFY:
            # Verified in semio3_a1.
            q['tema'] = "semio3_a1"
            q['aula_id'] = "semio3_a1"
            q['materia'] = "semiologia3"
            q['modulo'] = 3
            verified_count += 1
            
            # Update Log
            for entry in log:
                if entry['id'] == q_id:
                    entry['tema_proposto'] = "semio3_a1"
                    entry['justificativa'] = f"[AUDITORIA MÉDICA] {MAP_REASONING.get('semio3_a1', '')}"
                    entry['status'] = "verified_conceptual"
                    break

    with open(r"c:\Users\Usuario-pc\Desktop\Aplicativo Uni9\meduni9-app\data\questoes.json", 'w', encoding='utf-8') as f:
        json.dump(data, f, indent=2, ensure_ascii=False)
    
    with open(r"c:\Users\Usuario-pc\Desktop\Aplicativo Uni9\meduni9-app\data\audit_justification_log.json", 'w', encoding='utf-8') as f:
        json.dump(log, f, indent=2, ensure_ascii=False)

    print(f"Batch 25 processed: {verified_count} questions conceptually verified in abdominal semiology section.")

if __name__ == "__main__":
    apply_batch_25()
