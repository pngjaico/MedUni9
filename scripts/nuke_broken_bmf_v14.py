import json
import os
import re

def nuke_broken_bmf_v14():
    print("Iniciando NUCLEAR BMF PURGE v14...")
    
    # Matching the audit_bmf.py patterns exactly
    # Note: the special char in audit_bmf.py appeared as \ufffd in some views but we'll use a broad check
    broken_patterns = ["Ã", "??", "[RESTAURAÇÃO]", "Opção 1"]
    
    def is_broken(q):
        content = str(q)
        if any(p in content for p in broken_patterns):
            return True
        # Check for unprintable/replacement characters
        if "\ufffd" in content:
            return True
        return False

    def process_file(filename):
        path = f'data/{filename}.json'
        if not os.path.exists(path): return
        
        print(f"Limpando {filename}.json...")
        with open(path, 'r', encoding='utf-8', errors='replace') as f:
            data = json.load(f)
            
        original_count = len(data['questoes'])
        cleaned_list = []
        purged_count = 0
        
        for q in data['questoes']:
            if is_broken(q):
                purged_count += 1
                continue
            cleaned_list.append(q)
            
        data['questoes'] = cleaned_list
        with open(path, 'w', encoding='utf-8') as f:
            json.dump(data, f, ensure_ascii=False, indent=2)
            
        print(f"  {filename}.json: {purged_count} itens removidos. {len(cleaned_list)} restantes.")

    process_file('questoes')
    process_file('questoes_antigas')

    # Update index.html
    index_path = 'index.html'
    if os.path.exists(index_path):
        with open(index_path, 'r', encoding='utf-8', errors='ignore') as f:
            content = f.read()
        new_version = 'v700-BMF-PURGED-STABLE'
        content = re.sub(r"const APP_VERSION = '.*?';", f"const APP_VERSION = '{new_version}';", content)
        with open(index_path, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"index.html atualizado para {new_version}")

    print("PURGA V14 CONCLUÍDA.")

if __name__ == "__main__":
    nuke_broken_bmf_v14()
