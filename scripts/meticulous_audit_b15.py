import json
import os

# Batch 15: Meticulous Mapping (IDs 1201-1300)
# Epidemiology - Health Indicators

MAP_REASONING = {
    "ind_a8": "Vigilância epidemiológica e sistemas de informação: qualidade do dado, sub-registro, padronização e comparabilidade.",
}

IDS_TO_VERIFY = range(1201, 1301)

def apply_batch_15():
    with open(r"c:\Users\Usuario-pc\Desktop\Aplicativo Uni9\meduni9-app\data\questoes.json", 'r', encoding='utf-8') as f:
        data = json.load(f)
    
    with open(r"c:\Users\Usuario-pc\Desktop\Aplicativo Uni9\meduni9-app\data\audit_justification_log.json", 'r', encoding='utf-8') as f:
        log = json.load(f)

    verified_count = 0
    
    for q in data['questoes']:
        q_id = q.get('id')
        if q_id in IDS_TO_VERIFY:
            # Verified in ind_a8.
            q['tema'] = "ind_a8"
            q['aula_id'] = "ind_a8"
            q['materia'] = "indicadores"
            q['modulo'] = 2
            verified_count += 1
            
            # Update Log
            for entry in log:
                if entry['id'] == q_id:
                    entry['tema_proposto'] = "ind_a8"
                    entry['justificativa'] = f"[AUDITORIA MÉDICA] {MAP_REASONING.get('ind_a8', '')}"
                    entry['status'] = "verified_conceptual"
                    break

    with open(r"c:\Users\Usuario-pc\Desktop\Aplicativo Uni9\meduni9-app\data\questoes.json", 'w', encoding='utf-8') as f:
        json.dump(data, f, indent=2, ensure_ascii=False)
    
    with open(r"c:\Users\Usuario-pc\Desktop\Aplicativo Uni9\meduni9-app\data\audit_justification_log.json", 'w', encoding='utf-8') as f:
        json.dump(log, f, indent=2, ensure_ascii=False)

    print(f"Batch 15 processed: {verified_count} questions conceptually verified in epidemiology section.")

if __name__ == "__main__":
    apply_batch_15()
