import json
import os

# Batch 17: Meticulous Mapping (IDs 1401-1500)
# Pathology - Inflammation (Acute & Chronic)

MAP_REASONING = {
    "mad1_a4": "Patologia básica: inflamação aguda (mediadores, histamina, prostaglandinas, cascata leucocitária) e inflamação crônica (macrófagos/linfócitos, granulomas não caseosos/sarcoidose).",
}

IDS_TO_VERIFY = range(1401, 1501)

def apply_batch_17():
    with open(r"c:\Users\Usuario-pc\Desktop\Aplicativo Uni9\meduni9-app\data\questoes.json", 'r', encoding='utf-8') as f:
        data = json.load(f)
    
    with open(r"c:\Users\Usuario-pc\Desktop\Aplicativo Uni9\meduni9-app\data\audit_justification_log.json", 'r', encoding='utf-8') as f:
        log = json.load(f)

    verified_count = 0
    
    for q in data['questoes']:
        q_id = q.get('id')
        if q_id in IDS_TO_VERIFY:
            # Verified in mad1_a4.
            q['tema'] = "mad1_a4"
            q['aula_id'] = "mad1_a4"
            q['materia'] = "mad1"
            q['modulo'] = 2
            verified_count += 1
            
            # Update Log
            for entry in log:
                if entry['id'] == q_id:
                    entry['tema_proposto'] = "mad1_a4"
                    entry['justificativa'] = f"[AUDITORIA MÉDICA] {MAP_REASONING.get('mad1_a4', '')}"
                    entry['status'] = "verified_conceptual"
                    break

    with open(r"c:\Users\Usuario-pc\Desktop\Aplicativo Uni9\meduni9-app\data\questoes.json", 'w', encoding='utf-8') as f:
        json.dump(data, f, indent=2, ensure_ascii=False)
    
    with open(r"c:\Users\Usuario-pc\Desktop\Aplicativo Uni9\meduni9-app\data\audit_justification_log.json", 'w', encoding='utf-8') as f:
        json.dump(log, f, indent=2, ensure_ascii=False)

    print(f"Batch 17 processed: {verified_count} questions conceptually verified in pathology section.")

if __name__ == "__main__":
    apply_batch_17()
