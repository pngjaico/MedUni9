import os
import re
import json
import glob

# Configurações
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
MATERIAIS_DIR = os.path.join(BASE_DIR, 'materiais')
OUTPUT_INDEX = os.path.join(BASE_DIR, 'data', 'materiais_index.json')

def extract_keywords(text):
    # Encontrar palavras em negrito (markdown)
    bold_terms = re.findall(r'\*\*(.*?)\*\*', text)
    # Encontrar cabeçalhos
    headers = re.findall(r'^#+ (.*)', text, re.MULTILINE)
    # Limpeza básica de tokens longos e técnicos
    all_words = re.findall(r'\b\w{5,}\b', text.lower())
    
    return {
        "bold": list(set(bold_terms)),
        "headers": list(set(headers)),
        "keywords": list(set(all_words))
    }

def build_index():
    index = {}
    # Mapear módulos 1 a 4
    for modulo in range(1, 5):
        path = os.path.join(MATERIAIS_DIR, f'modulo{modulo}', '**', '*.md')
        files = glob.glob(path, recursive=True)
        
        for file_path in files:
            # Pegar o ID da aula pelo nome do arquivo (ex: pmh_a6.md -> pmh_a6)
            aula_id = os.path.splitext(os.path.basename(file_path))[0]
            
            try:
                with open(file_path, 'r', encoding='utf-8') as f:
                    content = f.read()
                    index[aula_id] = extract_keywords(content)
                    index[aula_id]['modulo'] = modulo
            except Exception as e:
                print(f"Erro ao ler {file_path}: {e}")
                
    # Salvar o índice
    os.makedirs(os.path.dirname(OUTPUT_INDEX), exist_ok=True)
    with open(OUTPUT_INDEX, 'w', encoding='utf-8') as f:
        json.dump(index, f, indent=2, ensure_ascii=False)
    
    print(f"Índice de materiais construído com sucesso: {len(index)} aulas indexadas.")

if __name__ == "__main__":
    build_index()
