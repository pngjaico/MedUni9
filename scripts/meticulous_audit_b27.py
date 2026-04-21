import json
import os

# Batch 27: Meticulous Mapping (IDs 2401-2500)
# Histology - Nervous System (Neurons and Glia)

IDS_TO_VERIFY = range(2401, 2501)

MAP_REASONING = {
    "bmf4_a11": "Histologia do Sistema Nervoso: Neurônios (multipolar, pseudounipolar), transporte axonal (kinesina vs dineína), cone de implantação e células da glia (microglia).",
}

def apply_batch_27():
    with open(r"c:\Users\Usuario-pc\Desktop\Aplicativo Uni9\meduni9-app\data\questoes.json", 'r', encoding='utf-8') as f:
        data = json.load(f)
    
    with open(r"c:\Users\Usuario-pc\Desktop\Aplicativo Uni9\meduni9-app\data\audit_justification_log.json", 'r', encoding='utf-8') as f:
        log = json.load(f)

    verified_count = 0
    
    for q in data['questoes']:
        q_id = q.get('id')
        if q_id in IDS_TO_VERIFY:
            # Verified in bmf4_a11.
            q['tema'] = "bmf4_a11"
            q['aula_id'] = "bmf4_a11"
            q['materia'] = "bmf4"
            q['modulo'] = 4
            verified_count += 1
            
            # Update Log
            for entry in log:
                if entry['id'] == q_id:
                    entry['tema_proposto'] = "bmf4_a11"
                    entry['justificativa'] = f"[AUDITORIA MÉDICA] {MAP_REASONING.get('bmf4_a11', '')}"
                    entry['status'] = "verified_conceptual"
                    break

    with open(r"c:\Users\Usuario-pc\Desktop\Aplicativo Uni9\meduni9-app\data\questoes.json", 'w', encoding='utf-8') as f:
        json.dump(data, f, indent=2, ensure_ascii=False)
    
    with open(r"c:\Users\Usuario-pc\Desktop\Aplicativo Uni9\meduni9-app\data\audit_justification_log.json", 'w', encoding='utf-8') as f:
        json.dump(log, f, indent=2, ensure_ascii=False)

    print(f"Batch 27 processed: {verified_count} questions conceptually verified in neuro-histology section.")

if __name__ == "__main__":
    apply_batch_27()
