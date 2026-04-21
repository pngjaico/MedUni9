import json
import re
import os

# Paths
QUESTOES_PATH = r"c:\Users\Usuario-pc\Desktop\Aplicativo Uni9\meduni9-app\data\questoes.json"
BACKUP_PATH = r"c:\Users\Usuario-pc\Desktop\Aplicativo Uni9\meduni9-app\data\questoes_pre_cleanup.json"

# Forbidden patterns to remove/clean
# We will remove the prefix but keep the medical content
REPLACEMENTS = [
    (r"(?i)^enunciado:\s*", ""),
    (r"(?i)^questão:\s*", ""),
    (r"(?i)^pergunta:\s*", ""),
    (r"(?i)^resposta:\s*", ""),
    (r"(?i)^explicação:\s*", ""),
    (r"(?i)^alternativa [abcd]:\s*", ""),
    (r"(?i)na aula,?\s*", ""),
    (r"(?i)sobre o tema,?\s*", ""),
    (r"(?i)conforme o material,?\s*", ""),
    (r"(?i)nesta aula,?\s*", ""),
    (r"(?i)como um modelo de linguagem,?\s*", ""),
    (r"(?i)foi abordado na aula\s*", ""),
]

def cleanup():
    if not os.path.exists(QUESTOES_PATH):
        print("File not found.")
        return

    # Backup
    with open(QUESTOES_PATH, 'r', encoding='utf-8') as f:
        data = json.load(f)
    
    with open(BACKUP_PATH, 'w', encoding='utf-8') as f:
        json.dump(data, f, indent=2, ensure_ascii=False)

    questoes = data.get('questoes', [])
    cleaned_count = 0
    issue_fixes = 0

    valid_questoes = []

    # Find max ID for fixing missing IDs
    existing_ids = [item.get('id') for item in questoes if isinstance(item.get('id'), int)]
    max_id = max(existing_ids) if existing_ids else 0

    for q in questoes:
        # Skip essential if needed, but the user said "audit total das 4k questões em 'todas'"
        # and "essenciais não mexa".
        if q.get('essencial') is True:
            valid_questoes.append(q)
            continue

        # Fix corrupted Item (Missing ID)
        if 'id' not in q or q['id'] is None:
            max_id += 1
            q['id'] = max_id
            issue_fixes += 1
            print(f"Fixed missing ID, assigned {q['id']}")

        # Fix Question 4401 (Broken Options)
        if q.get('id') == 4401 and len(q.get('opcoes', [])) > 4:
            q['opcoes'] = q['opcoes'][:4]
            issue_fixes += 1
            print("Fixed Question 4401: Truncated options to 4.")

        # Cleanup text fields
        for field in ['enunciado', 'explicacao', 'explicacao_geral']:
            if field in q and q[field]:
                original = q[field]
                for pattern, repl in REPLACEMENTS:
                    q[field] = re.sub(pattern, repl, q[field]).strip()
                
                # Capitalize first letter if it became lowercase after prefix removal
                if q[field] and q[field][0].islower():
                    q[field] = q[field][0].upper() + q[field][1:]

        # Cleanup explicacoes_opcoes
        if 'explicacoes_opcoes' in q and isinstance(q['explicacoes_opcoes'], dict):
            for key in q['explicacoes_opcoes']:
                orig = q['explicacoes_opcoes'][key]
                for pattern, repl in REPLACEMENTS:
                    q['explicacoes_opcoes'][key] = re.sub(pattern, repl, q['explicacoes_opcoes'][key]).strip()
                if q['explicacoes_opcoes'][key] and q['explicacoes_opcoes'][key][0].islower():
                    q['explicacoes_opcoes'][key] = q['explicacoes_opcoes'][key][0].upper() + q['explicacoes_opcoes'][key][1:]

        valid_questoes.append(q)
        cleaned_count += 1

    data['questoes'] = valid_questoes

    with open(QUESTOES_PATH, 'w', encoding='utf-8') as f:
        json.dump(data, f, indent=2, ensure_ascii=False)

    print(f"Fase 1 Complete: {cleaned_count} questions cleaned, {issue_fixes} structural fixes applied.")

if __name__ == "__main__":
    cleanup()
