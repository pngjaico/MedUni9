import json
import os

def scan_file(filename):
    path = f'data/{filename}.json'
    if not os.path.exists(path):
        return
    with open(path, 'r', encoding='utf-8', errors='ignore') as f:
        data = json.load(f)
    
    questoes = data.get('questoes', [])
    bad_restaur = [q for q in questoes if "RESTAUR" in str(q)]
    bad_v8 = [q for q in questoes if "V8" in str(q)]
    bad_mojibake = [q for q in questoes if "Ã" in str(q)]
    bad_placeholder = [q for q in questoes if "Opção 1" in str(q.get('opcoes', []))]
    bad_prova = [q for q in questoes if "PROVA M" in str(q)]
    
    print(f"\n--- Arquivo: {filename}.json ---")
    print(f"Total de questões: {len(questoes)}")
    print(f"Contém 'RESTAUR': {len(bad_restaur)}")
    print(f"Contém 'V8': {len(bad_v8)}")
    print(f"Contém Mojibake ('Ã'): {len(bad_mojibake)}")
    print(f"Placeholders ('Opção 1'): {len(bad_placeholder)}")
    print(f"Contém 'PROVA M': {len(bad_prova)}")

if __name__ == "__main__":
    scan_file('questoes')
    scan_file('questoes_antigas')
