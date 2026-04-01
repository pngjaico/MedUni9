# 📚 Pasta de Conteúdos - MedUni9

Esta pasta é usada pelo Claude Code para ler materiais de estudo e gerar questões e flashcards automaticamente.

## 🗂️ Estrutura

```
conteudos/
├── _para_categorizar/      ← Coloque aqui o .docx com as 1500 questões antigas
├── modulo1/
│   ├── BMF1/
│   ├── PMH/
│   ├── Semiologia1/
│   └── Principios_do_SUS/
├── modulo2/
│   ├── Indicadores_de_Saude/
│   ├── BCM/
│   ├── BMF2/
│   ├── MAD1/
│   └── Semiologia2/
├── modulo3/
│   ├── Semiologia3/
│   ├── BMF3/
│   ├── MsAD/
│   ├── Fisiopatologia/
│   └── Saude_do_Trabalhador/
└── modulo4/
    ├── Semiologia4/
    ├── Processos_Fisiopato_e_Farmaco/
    ├── BMF4/
    └── Bioestatisticas_e_Estudo_em_Saude/
```

## 📄 Formatos aceitos por pasta
- `.md` (Markdown) — **Preferencial**
- `.txt` (Texto simples)
- `.pdf` (Claude Code lê com plugin)
- `.docx` (Converta para .md antes de usar)

## 💡 Como usar com o Claude Code
Abra o terminal na raiz do projeto e use prompts como:
> "Leia o arquivo conteudos/modulo1/BMF1/aula1.md e gere 10 questões no formato do data/questoes.json"
