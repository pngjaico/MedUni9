import json
import re

def fix_mojibake(text):
    if not isinstance(text, str): return text
    if 'Ã' not in text and 'Â' not in text: return text # Optimization
    try:
        # Standard Mojibake: UTF-8 interpreted as Latin-1 and saved as UTF-8 again
        return text.encode('latin-1').decode('utf-8')
    except:
        return text

def clean_artifacts(text):
    if not isinstance(text, str): return text
    # Remove common legacy prefixes
    patterns = [
        r'\[PROVA MÉDICA\]\s*',
        r'\[PROVA MÃ‰DICA\]\s*',
        r'PROVA MÉDICA:?\s*',
        r'QUESTÃO \d+:?\s*',
        r'^\s*-\s*', # Initial bullet points
    ]
    for p in patterns:
        text = re.sub(p, '', text, flags=re.IGNORECASE)
    return text.strip()

def process_item(item):
    # Enunciado
    item['enunciado'] = clean_artifacts(fix_mojibake(item['enunciado']))
    
    # Opcoes
    if 'opcoes' in item:
        item['opcoes'] = [clean_artifacts(fix_mojibake(opt)) for opt in item['opcoes']]
        
    # Explicacao Geral
    if 'explicacao_geral' in item:
        item['explicacao_geral'] = fix_mojibake(item['explicacao_geral'])
        
    # Explicacoes Opcoes
    if 'explicacoes_opcoes' in item:
        new_exps = {}
        for key, val in item['explicacoes_opcoes'].items():
            new_exps[key] = fix_mojibake(val)
        item['explicacoes_opcoes'] = new_exps
        
    # Explicacao (Legacy field)
    if 'explicacao' in item:
        item['explicacao'] = fix_mojibake(item['explicacao'])
        
    return item

def unify():
    print("Loading main banco...")
    with open('data/questoes.json', 'r', encoding='utf-8') as f:
        main_data = json.load(f)
    
    print("Loading antiga banco...")
    try:
        with open('data/questoes_antigas.json', 'r', encoding='utf-8-sig') as f:
            antiga_data = json.load(f)
            if isinstance(antiga_data, dict) and 'questoes' in antiga_data:
                antiga_items = antiga_data['questoes']
            elif isinstance(antiga_data, list):
                antiga_items = antiga_data
            else:
                antiga_items = []
    except Exception as e:
        print(f"Error loading antiga: {e}")
        antiga_items = []

    print(f"Processing main bank ({len(main_data['questoes'])} items)...")
    consolidated = []
    
    # Process main bank
    for q in main_data['questoes']:
        if q.get('essencial', False):
            consolidated.append(q) # Keep essentials untouched
        else:
            consolidated.append(process_item(q))
            
    # Process and integrate antiga bank
    print(f"Processing and integrating antiga bank ({len(antiga_items)} items)...")
    
    # Find max ID to avoid collisions
    max_id = max([q['id'] for q in consolidated if 'id' in q] + [0])
    
    for q in antiga_items:
        # Avoid duplicates (by content if id is suspicious)
        # For simplicity for now, we just give new IDs and mark as non-essential
        q['essencial'] = False
        max_id += 1
        q['id'] = max_id
        consolidated.append(process_item(q))

    # Save consolidated
    print(f"Saving {len(consolidated)} items to data/questoes.json...")
    with open('data/questoes.json', 'w', encoding='utf-8') as f:
        json.dump({"questoes": consolidated}, f, ensure_ascii=False, indent=2)
    
    print("Consolidation and Global Cleanup COMPLETE.")

if __name__ == "__main__":
    unify()
