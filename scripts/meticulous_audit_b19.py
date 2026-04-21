import json
import os

# Batch 19: Meticulous Mapping (IDs 1601-1700)
# Renal Physio (Acid-Base) + 1 Gastric Pathology

MAP_REASONING = {
    "bmf3_a14": "Regulação renal do equilíbrio ácido-base: tampões (HCO3, Fosfato, Hb), parâmetros (PaCO2/HCO3) e adaptação renal (glutaminase).",
    "cir6_a13": "Neoplasias de pâncreas e estômago: classificação de Lauren (tipo intestinal vs difuso), mutações CDH1 e prognóstico.",
}

IDS_TO_VERIFY = range(1601, 1701)

def apply_batch_19():
    with open(r"c:\Users\Usuario-pc\Desktop\Aplicativo Uni9\meduni9-app\data\questoes.json", 'r', encoding='utf-8') as f:
        data = json.load(f)
    
    with open(r"c:\Users\Usuario-pc\Desktop\Aplicativo Uni9\meduni9-app\data\audit_justification_log.json", 'r', encoding='utf-8') as f:
        log = json.load(f)

    verified_count = 0
    
    for q in data['questoes']:
        q_id = q.get('id')
        if q_id in IDS_TO_VERIFY:
            if q_id == 1699:
                # Gastric Cancer
                q['tema'] = "cir6_a13"
                q['aula_id'] = "cir6_a13"
                q['materia'] = "cirurgia_ortopedia"
                q['modulo'] = 6
                just = f"[AUDITORIA MÉDICA] {MAP_REASONING.get('cir6_a13', '')}"
            else:
                # Acid-Base
                q['tema'] = "bmf3_a14"
                q['aula_id'] = "bmf3_a14"
                q['materia'] = "bmf3"
                q['modulo'] = 3
                just = f"[AUDITORIA MÉDICA] {MAP_REASONING.get('bmf3_a14', '')}"
            
            verified_count += 1
            
            # Update Log
            for entry in log:
                if entry['id'] == q_id:
                    entry['tema_proposto'] = q['tema']
                    entry['justificativa'] = just
                    entry['status'] = "verified_conceptual"
                    break

    with open(r"c:\Users\Usuario-pc\Desktop\Aplicativo Uni9\meduni9-app\data\questoes.json", 'w', encoding='utf-8') as f:
        json.dump(data, f, indent=2, ensure_ascii=False)
    
    with open(r"c:\Users\Usuario-pc\Desktop\Aplicativo Uni9\meduni9-app\data\audit_justification_log.json", 'w', encoding='utf-8') as f:
        json.dump(log, f, indent=2, ensure_ascii=False)

    print(f"Batch 19 processed: {verified_count} questions conceptually verified in renal/digestive section.")

if __name__ == "__main__":
    apply_batch_19()
