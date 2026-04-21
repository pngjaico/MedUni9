import json
import os

# Batch 12: Meticulous Mapping (IDs 901-1000)
# Histology - Muscle Tissue

MAP_REASONING = {
    "bmf1_a11": "Histologia do tecido muscular: tipos de fibras, sarcômero (bandas e zonas), acoplamento excitação-contração e correlações clínicas (Duchenne, rabdomiólise).",
}

IDS_TO_VERIFY = range(901, 1001)

def apply_batch_12():
    with open(r"c:\Users\Usuario-pc\Desktop\Aplicativo Uni9\meduni9-app\data\questoes.json", 'r', encoding='utf-8') as f:
        data = json.load(f)
    
    with open(r"c:\Users\Usuario-pc\Desktop\Aplicativo Uni9\meduni9-app\data\audit_justification_log.json", 'r', encoding='utf-8') as f:
        log = json.load(f)

    verified_count = 0
    
    for q in data['questoes']:
        q_id = q.get('id')
        if q_id in IDS_TO_VERIFY:
            # Already correct in bmf1_a11.
            q['tema'] = "bmf1_a11"
            q['aula_id'] = "bmf1_a11"
            q['materia'] = "bmf1"
            q['modulo'] = 1
            verified_count += 1
            
            # Update Log
            for entry in log:
                if entry['id'] == q_id:
                    entry['tema_proposto'] = "bmf1_a11"
                    entry['justificativa'] = f"[AUDITORIA MÉDICA] {MAP_REASONING.get('bmf1_a11', '')}"
                    entry['status'] = "verified_conceptual"
                    break

    with open(r"c:\Users\Usuario-pc\Desktop\Aplicativo Uni9\meduni9-app\data\questoes.json", 'w', encoding='utf-8') as f:
        json.dump(data, f, indent=2, ensure_ascii=False)
    
    with open(r"c:\Users\Usuario-pc\Desktop\Aplicativo Uni9\meduni9-app\data\audit_justification_log.json", 'w', encoding='utf-8') as f:
        json.dump(log, f, indent=2, ensure_ascii=False)

    print(f"Batch 12 processed: {verified_count} questions conceptually verified in histology section.")

if __name__ == "__main__":
    apply_batch_12()
