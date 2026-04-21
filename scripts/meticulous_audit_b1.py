import json
import os

# Batch 1: Meticulous Mapping (IDs 202-250)
MAP_REASONING = {
    "tcar_a1": "Conceitos de barreira estéril, antissepsia de pele e processos de autoclave pertencem à Técnica Operatória.",
    "tcar_a2": "Zonamento de centro cirúrgico e fluxos de materiais limpos/sujos são temas de Ambiente Cirúrgico.",
    "tcar_a4": "Responsabilidades de equipe, segurança (contagem de compressas) e instrumentação direta.",
    "tcar_a5": "Propriedades físicas de fios (monofilamentar vs multifilamentar) e escolha de agulhas."
}

MAPPINGS = {
    range(202, 214): "tcar_a1",
    (215,): "tcar_a1",
    (214,): "tcar_a2",
    range(244, 250): "tcar_a4",
    (250,): "tcar_a5"
}

def get_target_id(q_id):
    for r, target in MAPPINGS.items():
        if isinstance(r, range) and q_id in r: return target
        if isinstance(r, tuple) and q_id in r: return target
    return None

QUESTOES_PATH = r"c:\Users\Usuario-pc\Desktop\Aplicativo Uni9\meduni9-app\data\questoes.json"
LOG_PATH = r"c:\Users\Usuario-pc\Desktop\Aplicativo Uni9\meduni9-app\data\audit_justification_log.json"

def apply_batch_1():
    with open(QUESTOES_PATH, 'r', encoding='utf-8') as f:
        data = json.load(f)
    
    with open(LOG_PATH, 'r', encoding='utf-8') as f:
        log = json.load(f)

    updated_ids = []
    
    for q in data['questoes']:
        q_id = q.get('id')
        target_aula = get_target_id(q_id)
        
        if target_aula:
            old_tema = q.get('tema')
            q['tema'] = target_aula
            q['aula_id'] = target_aula
            q['materia'] = "tecnica_operatoria"
            q['modulo'] = 6
            updated_ids.append(q_id)
            
            # Update Log with Conceptual Justice
            # Find the entry in log
            for entry in log:
                if entry['id'] == q_id:
                    entry['tema_proposto'] = target_aula
                    entry['justificativa'] = f"[AUDITORIA MÉDICA] {MAP_REASONING.get(target_aula, '')}"
                    entry['status'] = "updated_conceptual"
                    break

    with open(QUESTOES_PATH, 'w', encoding='utf-8') as f:
        json.dump(data, f, indent=2, ensure_ascii=False)
    
    with open(LOG_PATH, 'w', encoding='utf-8') as f:
        json.dump(log, f, indent=2, ensure_ascii=False)

    print(f"Batch 1 processed: {len(updated_ids)} questions updated conceptually.")

if __name__ == "__main__":
    apply_batch_1()
