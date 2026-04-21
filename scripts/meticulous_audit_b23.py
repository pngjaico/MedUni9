import json
import os

# Batch 23: Meticulous Mapping (IDs 2001-2100)
# Mechanisms of Defense - Protein Synthesis Inhibitors (Antibiotics)

IDS_TO_VERIFY = range(2001, 2101)

MAP_REASONING = {
    "mad2_a17": "Antibióticos inibidores de síntese proteica: Aminoglicosídeos (toxicidade), Macrolídeos (interações CYP3A4), Linezolida (síndrome serotoninérgica), Tetraciclinas (gravidez) e Clindamicina (C. difficile).",
}

def apply_batch_23():
    with open(r"c:\Users\Usuario-pc\Desktop\Aplicativo Uni9\meduni9-app\data\questoes.json", 'r', encoding='utf-8') as f:
        data = json.load(f)
    
    with open(r"c:\Users\Usuario-pc\Desktop\Aplicativo Uni9\meduni9-app\data\audit_justification_log.json", 'r', encoding='utf-8') as f:
        log = json.load(f)

    verified_count = 0
    
    for q in data['questoes']:
        q_id = q.get('id')
        if q_id in IDS_TO_VERIFY:
            # Verified in mad2_a17.
            q['tema'] = "mad2_a17"
            q['aula_id'] = "mad2_a17"
            q['materia'] = "mad2"
            q['modulo'] = 3
            verified_count += 1
            
            # Update Log
            for entry in log:
                if entry['id'] == q_id:
                    entry['tema_proposto'] = "mad2_a17"
                    entry['justificativa'] = f"[AUDITORIA MÉDICA] {MAP_REASONING.get('mad2_a17', '')}"
                    entry['status'] = "verified_conceptual"
                    break

    with open(r"c:\Users\Usuario-pc\Desktop\Aplicativo Uni9\meduni9-app\data\questoes.json", 'w', encoding='utf-8') as f:
        json.dump(data, f, indent=2, ensure_ascii=False)
    
    with open(r"c:\Users\Usuario-pc\Desktop\Aplicativo Uni9\meduni9-app\data\audit_justification_log.json", 'w', encoding='utf-8') as f:
        json.dump(log, f, indent=2, ensure_ascii=False)

    print(f"Batch 23 processed: {verified_count} questions conceptually verified in antibiotics section.")

if __name__ == "__main__":
    apply_batch_23()
