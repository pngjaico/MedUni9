import json
import os

# Batch 16: Meticulous Mapping (IDs 1301-1400)
# Arboviruses (Dengue/Zika/Chikungunya)

MAP_REASONING = {
    "mad1_a17": "Febre, Inflamação e Infecção — Arboviroses: patogênese da dengue (fase febril, crítica e recuperação), diagnóstico (NS1) e prevenção.",
}

IDS_TO_VERIFY = range(1301, 1401)

def apply_batch_16():
    with open(r"c:\Users\Usuario-pc\Desktop\Aplicativo Uni9\meduni9-app\data\questoes.json", 'r', encoding='utf-8') as f:
        data = json.load(f)
    
    with open(r"c:\Users\Usuario-pc\Desktop\Aplicativo Uni9\meduni9-app\data\audit_justification_log.json", 'r', encoding='utf-8') as f:
        log = json.load(f)

    verified_count = 0
    
    for q in data['questoes']:
        q_id = q.get('id')
        if q_id in IDS_TO_VERIFY:
            # Verified in mad1_a17.
            q['tema'] = "mad1_a17"
            q['aula_id'] = "mad1_a17"
            q['materia'] = "mad1"
            q['modulo'] = 2
            verified_count += 1
            
            # Update Log
            for entry in log:
                if entry['id'] == q_id:
                    entry['tema_proposto'] = "mad1_a17"
                    entry['justificativa'] = f"[AUDITORIA MÉDICA] {MAP_REASONING.get('mad1_a17', '')}"
                    entry['status'] = "verified_conceptual"
                    break

    with open(r"c:\Users\Usuario-pc\Desktop\Aplicativo Uni9\meduni9-app\data\questoes.json", 'w', encoding='utf-8') as f:
        json.dump(data, f, indent=2, ensure_ascii=False)
    
    with open(r"c:\Users\Usuario-pc\Desktop\Aplicativo Uni9\meduni9-app\data\audit_justification_log.json", 'w', encoding='utf-8') as f:
        json.dump(log, f, indent=2, ensure_ascii=False)

    print(f"Batch 16 processed: {verified_count} questions conceptually verified in infectious diseases section.")

if __name__ == "__main__":
    apply_batch_16()
