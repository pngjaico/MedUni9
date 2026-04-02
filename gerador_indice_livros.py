import os
import json
import fitz  # PyMuPDF

LIVROS_DIR = r'c:\Users\Usuario-pc\Desktop\Aplicativo Uni9\meduni9-app\conteudos\materiais\livros_base'
SAIDA_JSON = os.path.join(LIVROS_DIR, 'indice_livros.json')

def extrair_indices():
    indice_geral = {}
    
    if not os.path.exists(LIVROS_DIR):
        print(f"Diretório não encontrado: {LIVROS_DIR}")
        return

    arquivos = [f for f in os.listdir(LIVROS_DIR) if f.endswith('.pdf')]
    
    for arquivo in arquivos:
        caminho_pdf = os.path.join(LIVROS_DIR, arquivo)
        try:
            doc = fitz.open(caminho_pdf)
            toc = doc.get_toc() # formato: [nivel, titulo, pagina]
            
            nome_amigavel = arquivo.replace('_', ' ').replace('.pdf', '').strip()
            
            # Se o livro for o Goodman (ou outro sem metadatos), informaremos no JSON
            if len(toc) == 0:
                indice_geral[arquivo] = {
                    "nome_arquivo": arquivo,
                    "possui_sumario_nativo": False,
                    "total_paginas": doc.page_count,
                    "capitulos": []
                }
            else:
                capitulos = []
                for item in toc:
                    nivel, titulo, pagina = item
                    capitulos.append({
                        "nivel": nivel,
                        "titulo": titulo.strip(),
                        "pagina": pagina
                    })
                
                indice_geral[arquivo] = {
                    "nome_arquivo": arquivo,
                    "possui_sumario_nativo": True,
                    "total_paginas": doc.page_count,
                    "capitulos": capitulos
                }
                
            doc.close()
            print(f"Processado: {arquivo} | Capitulos: {len(toc)}")
        except Exception as e:
            print(f"Erro ao ler {arquivo}: {str(e)}")

    with open(SAIDA_JSON, 'w', encoding='utf-8') as f:
        json.dump(indice_geral, f, ensure_ascii=False, indent=2)
        
    print(f"\nIndice Mestre gerado com sucesso em: {SAIDA_JSON}")

if __name__ == "__main__":
    print("Iniciando varredura RAG nos Livros Textos...\n")
    extrair_indices()
