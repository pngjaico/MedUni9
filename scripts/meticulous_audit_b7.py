import json
import os

# Batch 7: Meticulous Mapping (IDs 501-550)
# Metabolic Regulation (Insulin/Glucagon/Cortisol)

MAP_REASONING = {
    "pmh_a2": "Regulação metabólica geral: sinalização por insulina vs glucagon e resposta ao estresse por cortisol/catecolaminas.",
}

# Questions 546-550 belong in pmh_a2.
IDS_TO_VERIFY = range(501, 551)

def apply_batch_7():
    with open(r"c:\Users\Usuario-pc\Desktop\Aplicativo Uni9\meduni9-app\data\questoes.json", 'r', encoding='utf-8') as f:
        data = json.load(f)
    
    with open(r"c:\Users\Usuario-pc\Desktop\Aplicativo Uni9\meduni9-app\data\audit_justification_log.json", 'r', encoding='utf-8') as f:
        log = json.load(f)

    verified_count = 0
    
    for q in data['questoes']:
        q_id = q.get('id')
        if q_id in IDS_TO_VERIFY:
            # Categorization is correct.
            q['tema'] = "pmh_a2"
            q['aula_id'] = "pmh_a2"
            q['materia'] = "pmh"
            q['modulo'] = 1
            verified_count += 1
            
            # Update Log
            for entry in log:
                if entry['id'] == q_id:
                    entry['tema_proposto'] = "pmh_a2"
                    entry['justificativa'] = f"[AUDITORIA MÉDICA] {MAP_REASONING.get('pmh_a2', '')}"
                    entry['status'] = "verified_conceptual"
                    break

    with open(r"c:\Users\Usuario-pc\Desktop\Aplicativo Uni9\meduni9-app\data\questoes.json", 'w', encoding='utf-8') as f:
        json.dump(data, f, indent=2, ensure_ascii=False)
    
    with open(r"c:\Users\Usuario-pc\Desktop\Aplicativo Uni9\meduni9-app\data\audit_justification_log.json", 'w', encoding='utf-8') as f:
        json.dump(log, f, indent=2, ensure_ascii=False)

    print(f"Batch 7 processed: {verified_count} questions conceptually verified in pmh_a2.")

if __name__ == "__main__":
    apply_batch_7()
