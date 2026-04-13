import json
import os
import re
from collections import Counter

# Configurações
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DATA_DIR = os.path.join(BASE_DIR, 'data')
INDEX_PATH = os.path.join(DATA_DIR, 'materiais_index.json')
MATERIAS_PATH = os.path.join(DATA_DIR, 'materias.json')
QUESTOES_PATH = os.path.join(DATA_DIR, 'questoes_antigas.json')

# Lista de termos médicos genéricos que devem ser ignorados na busca por palavras-chave
IGNORED_WORDS = {
    'paciente', 'apresenta', 'quadro', 'exame', 'clínico', 'diagnóstico', 
    'tratamento', 'história', 'sintomas', 'médico', 'clínica', 'hospital',
    'exames', 'resultados', 'pacientes', 'queixa', 'principal', 'anamnese',
    'físico', 'evolui', 'apresentando', 'relata', 'refere', 'nega', 'presença',
    'ausência', 'normal', 'alteração', 'diagnóstica'
}

def get_tokens(text):
    if not text: return []
    # Remover acentos para comparação básica se necessário, mas aqui manteremos o original
    # Filtrar palavras ignoradas
    tokens = re.findall(r'\b\w{5,}\b', text.lower())
    return [t for t in tokens if t not in IGNORED_WORDS]

def run_hifi_recat(start_index=0, end_index=100):
    print(f"Executando Hifi-Recat para o bloco {start_index} a {end_index}...")
    
    # 1. Carregar Dados
    with open(INDEX_PATH, 'r', encoding='utf-8') as f:
        meta_index = json.load(f)
    with open(MATERIAS_PATH, 'r', encoding='utf-8') as f:
        materias_data = json.load(f)
    with open(QUESTOES_PATH, 'r', encoding='utf-8') as f:
        questoes_data = json.load(f)

    # 2. Processar Questões
    target_questoes = questoes_data['questoes'][start_index:end_index]
    mudancas = []
    
    # Mapear lista de IDs de aula válidos nos módulos 1-4
    valid_lessons = list(meta_index.keys())

    for q in target_questoes:
        original_aula = q.get('aula_id', 'N/A')
        original_materia = q.get('materia', 'N/A')
        
        # Texto da questão para análise
        text = f"{q.get('enunciado', '')} {q.get('explicacao_geral', '')} "
        for opt in q.get('explicacoes_opcoes', {}).values():
            text += f" {opt}"
        
        q_tokens = Counter(get_tokens(text))
        
        best_score = -1
        best_aula_id = None
        
        for aula_id, info in meta_index.items():
            score = 0
            
            # 1. Match em Negritos (Peso 20) — Termos técnicos fortes
            for term in info.get('bold', []):
                tokens_term = get_tokens(term)
                if all(t in q_tokens for t in tokens_term):
                    score += 20
            
            # 2. Match em Cabeçalhos (Peso 10)
            for header in info.get('headers', []):
                tokens_header = get_tokens(header)
                if any(t in q_tokens for t in tokens_header):
                    score += 10
            
            # 3. Match em Keywords Gerais (Peso 1) - Reduzido
            # Normalizado pela quantidade total de keywords na aula para evitar "lessons gigantes"
            kw_match_count = 0
            for kw in info.get('keywords', []):
                if kw in q_tokens:
                    kw_match_count += q_tokens[kw]
            
            # Penalizar vagamente se a aula for muito genérica (muitas keywords)
            total_kws = len(info.get('keywords', []))
            if total_kws > 0:
                score += (kw_match_count / (total_kws ** 0.5)) * 10
            
            # 4. Bônus por Matéria (DESATIVADO PARA RE-VALIDAÇÃO FRIA)
            # materia_da_aula = aula_id.split('_')[0]
            # if materia_da_aula == original_materia or original_materia.startswith(materia_da_aula):
            #     score += 30

            # if best_aula_id != original_aula:
            #     score += 5
            if score > best_score:
                best_score = score
                best_aula_id = aula_id
        
        # Só atualiza se score for robusto
        if best_aula_id and best_score > 15:
            new_materia = best_aula_id.split('_')[0]
            
            if best_aula_id != original_aula:
                mudancas.append({
                    "id": q['id'],
                    "de": f"{original_materia}/{original_aula}",
                    "para": f"{new_materia}/{best_aula_id}",
                    "score": best_score,
                    "enunciado": q.get('enunciado', '')[:60] + "..."
                })
                q['aula_id'] = best_aula_id
                q['materia'] = new_materia
                q['tema'] = best_aula_id

    # 3. Salvar (O arquivo todo, mas alterado apenas no range)
    with open(QUESTOES_PATH, 'w', encoding='utf-8') as f:
        json.dump(questoes_data, f, indent=2, ensure_ascii=False)
        
    # 4. Retornar mudanças para o relatório
    return mudancas

if __name__ == "__main__":
    # Exemplo: Rodar Bloco 1 (0-100)
    import sys
    start = int(sys.argv[1]) if len(sys.argv) > 1 else 0
    end = int(sys.argv[2]) if len(sys.argv) > 2 else 100
    mudancas = run_hifi_recat(start, end)
    
    print(f"Bloco {start}-{end} concluído. {len(mudancas)} mudanças realizadas.")
    print(json.dumps(mudancas, indent=2, ensure_ascii=False))
