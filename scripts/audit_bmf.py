import json
import os

def audit_bmf():
    print("Iniciando Auditoria Detalhada de BMFs...")
    
    path = 'data/questoes.json'
    if not os.path.exists(path):
        return

    with open(path, 'r', encoding='utf-8') as f:
        data = json.load(f)

    bmf_list = [q for q in data['questoes'] if q.get('materia', '').startswith('bmf')]
    print(f"Total de questões BMF: {len(bmf_list)}")

    broken_patterns = ["Ã", "??", "", "[RESTAURAÇÃO]", "Opção 1"]
    
    broken_items = []
    for q in bmf_list:
        content = str(q)
        if any(p in content for p in broken_patterns):
            broken_items.append(q)

    print(f"Questões BMF quebradas encontradas: {len(broken_items)}")
    
    if broken_items:
        print("\nLista de IDs Quebrados em BMF:")
        for q in broken_items[:20]:
            print(f"ID: {q['id']} | Materia: {q['materia']} | Tema: {q.get('tema', 'N/A')}")
            print(f"  Enunciado: {q['enunciado'][:60]}...")
            
    # Also check Antigas
    antigas_path = 'data/questoes_antigas.json'
    if os.path.exists(antigas_path):
        with open(antigas_path, 'r', encoding='utf-8') as f:
            ant_data = json.load(f)
        ant_bmfs = [q for q in ant_data['questoes'] if q.get('materia', '').startswith('bmf')]
        print(f"\nTotal de BMFs em Provas Antigas: {len(ant_bmfs)}")
        ant_broken = [q for q in ant_bmfs if any(p in str(q) for p in broken_patterns)]
        print(f"Questões BMF Antigas quebradas: {len(ant_broken)}")

if __name__ == "__main__":
    audit_bmf()
