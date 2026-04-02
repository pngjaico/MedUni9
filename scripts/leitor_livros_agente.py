import argparse
import fitz
import os

LIVROS_DIR = r'c:\Users\Usuario-pc\Desktop\Aplicativo Uni9\meduni9-app\conteudos\materiais\livros_base'

def get_arquivo_livro(termo_busca):
    # Procura um pdf no dir que bata com o termo de busca (case insensitive)
    termo = termo_busca.lower()
    for f in os.listdir(LIVROS_DIR):
        if f.endswith('.pdf') and termo in f.lower():
            return os.path.join(LIVROS_DIR, f)
    return None

def extrair_texto(caminho_pdf, pagina_inicio, pagina_fim):
    try:
        doc = fitz.open(caminho_pdf)
        texto_extraido = ""
        
        # Paginas ajustadas para 0-index
        p_in = max(0, pagina_inicio - 1)
        p_out = min(doc.page_count - 1, pagina_fim - 1)
        
        for i in range(p_in, p_out + 1):
            page = doc.load_page(i)
            # Tentar extrair blocos de texto limpos
            texto_extraido += page.get_text("text") + "\n\n"
            
        doc.close()
        return texto_extraido.strip()
    except Exception as e:
        return f"Erro na extração: {str(e)}"

import sys
if sys.stdout.encoding != 'utf-8':
    sys.stdout.reconfigure(encoding='utf-8')

if __name__ == '__main__':
    parser = argparse.ArgumentParser(description="Agente de Leitura de Livros Medicos")
    parser.add_argument("--livro", required=True, help="Palavra chave do livro (ex: robbins, guyton)")
    parser.add_argument("--paginas", required=True, help="Intervalo de extração ex: 50-55")
    
    args = parser.parse_args()
    
    caminho = get_arquivo_livro(args.livro)
    if not caminho:
        print(f"Livro contendo '{args.livro}' não encontrado.")
        exit(1)
        
    try:
        inicio, fim = map(int, args.paginas.split('-'))
        if inicio > fim: inicio, fim = fim, inicio
    except:
        print("Formato de paginas invalido. Use Inicio-Fim ex: 50-55")
        exit(1)
        
    print(f"Fatiando: {os.path.basename(caminho)} (Pags {inicio} a {fim})...\n")
    texto = extrair_texto(caminho, inicio, fim)
    
    # Imprime os 2000 primeiros caracteres para teste terminal (se mt longo, Claude pode gerar um out file dps)
    print("--------------------------------------------------")
    print(texto[:3500] + ("\n...(truncado para console. Leia output total direcionando > saida.txt)" if len(texto) > 3500 else ""))
    print("--------------------------------------------------")
    print(f"Total Caracteres Extraídos: {len(texto)}")
