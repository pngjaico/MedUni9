import sys
from pypdf import PdfReader

try:
    reader = PdfReader("document_pdf.pdf")
    text = ""
    for page in reader.pages:
        text += page.extract_text() + "\n"
    
    with open("document_pdf_text.txt", "w", encoding="utf-8") as f:
        f.write(text)
    print("Sucesso!")
except Exception as e:
    print(f"Erro: {e}")
