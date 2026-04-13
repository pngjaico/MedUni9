# Prompt Canônico — Geração de Materiais de Apoio (MedGradPlus)

Documentação do repositório: [`AGENTS.md`](../AGENTS.md) na raiz (ordem de leitura para IAs).

## Objetivo

Gerar material de apoio acadêmico de **Elite** para Medicina, combinando profundidade técnica (nível Board/Guyton/Robbins), estética visual de alto rendimento (Elite Bolding) e interatividade imediata.

---

## 💎 O Padrão "Elite Depth" (Profundidade Médica)

Não crie resumos superficiais. O material deve ser a fonte definitiva de estudo para o aluno:
1. **Precisão Fisiopatológica**: Detalhe correntes iônicas (ex: Corrente If, Canais T e L), enzimas específicas, receptores e vias metabólicas.
2. **Fundamentação Acadêmica**: Baseie-se em Guyton, Robbins, Moore, Harrison e diretrizes atualizadas (Ministério da Saúde, SBC, AHA, etc.).
3. **Ponte Clínica Real**: Conecte a teoria com a prática ("Por que isso mata o paciente?" ou "Como isso aparece no exame físico?").
4. **Sem Perda de Conteúdo**: Ao revisar um material existente, **adicione profundidade** e clareza, mas nunca remova informações importantes.

---

## 🧠 Estética e Escaneabilidade (Elite Bolding)

Use a neurociência do aprendizado para destacar o que importa:
1. **Densidade no Corpo (10-15%)**: Negrite apenas termos técnicos centrais, diagnósticos padrão-ouro e condutas. **Evite** negritar frases inteiras ou verbos comuns.
2. **Densidade na Revisão (30-40%)**: Nas seções `## Pontos-Chave` e `## Pré-Prova`, a negritagem deve ser agressiva. O aluno deve conseguir entender o resumo lendo apenas os negritos.
3. **Tabelas**: A **primeira coluna (chave)** deve estar sempre em negrito. Destaque também os diferenciais críticos entre as linhas.

---

## 🖼️ Figuras e Placeholders (Padrão Wikimedia)

Para cada conceito que exija suporte visual, insira um bloco de figura imediatamente após o texto:

```markdown
### Figura sugerida
**Figura-ID:** `SIGLA-AULA-FXX` (ex: BMF2-A1-F01)
- **Descrição Técnica:** O que a imagem deve mostrar detalhadamente.
- **Busca Commons (PT):** Termos para busca no Wikimedia Commons em português.
- **Busca Commons (EN):** Termos para busca no Wikimedia Commons em inglês.
- **Legenda Rascunho:** Texto explicativo que acompanhará a imagem.
```

---

## ⚡ Mini Quiz de Fixação (Fixação Rápida)

Ao final do conteúdo (antes do Pré-Prova), insira de **3 a 5 questões** de múltipla escolha.

**Regras de Formatação (Parser Strict):**
- Use o header `## Mini Quiz`.
- Cada questão deve ter um número, enunciado em negrito, 4 opções e uma explicação.
- Marque a correta com `[x]`.

Exemplo:
```markdown
## Mini Quiz

1. **Qual a função do nó AV?**
   - [ ] Acelerar o impulso.
   - [x] Promover atraso fisiológico.
   - [ ] Inverter a polaridade.
   - [ ] Bloquear o cálcio.
   > **Explicação:** O atraso nodal permite o enchimento ventricular completo antes da sístole.
```

---

## 📋 Estrutura Obrigatória do Arquivo (.md)

```markdown
# [Título da Aula]

## Relevância Clínica e Acadêmica
[Contexto de prova e prática]

## [Tópicos de Desenvolvimento]
[Texto com Elite Depth e Elite Bolding]
[### Figura sugerida (onde couber)]

## Ponte com a Clínica
[Integração e aplicação real]

---
## Pontos-Chave para Prova
- [Bullets com alta densidade de negrito]

---
## Mini Quiz
[3 a 5 questões com explicações]

---
## Pré-Prova
> Resumo de 30 minutos antes da prova. Direto ao ponto.

### Síntese para a prova
[Prosa sintética com altíssima densidade de negrito]

### Diferenciações Críticas (Uninove)
| Conceito A | Conceito B | Como diferenciar |
|------------|------------|-----------------|
| **Termo**  | **Termo**  | Diferencial em **negrito** |

### Frase-âncora para não esquecer
> "**Mantra ou mnemônico consagrado**"
```

---

## Checklist de Validação (Obrigatório)

- [ ] Arquivo com mais de 100 linhas?
- [ ] Possui seção `## Ponte com a Clínica`?
- [ ] O Mini Quiz tem entre 3 e 5 questões com `> **Explicação:**`?
- [ ] O `## Pré-Prova` é a **última** seção de nível 2?
- [ ] Negritagem segue o padrão 10-15% no corpo e 30-40% no final?
- [ ] Encoding salvo em **UTF-8 sem BOM**?

---

## Política de Salvamento

Salve sempre nos dois caminhos:
1. `data/materiais/<disciplina>/<aula>.md`
2. `materiais/modulo<N>/<disciplina>/<aula>.md`
- [ ] Conteúdo salvo nos dois caminhos espelhados?
- [ ] Negritagem (Elite Bolding) aplicada corretamente?
- [ ] Quantidade de linhas reportada?

---

## Política de continuidade

Após concluir e validar uma aula:
1. Informar o total de linhas.
2. Confirmar que os dois caminhos foram atualizados.
3. Seguir para a próxima aula (uma por vez).

Nunca pular validação de linha e estrutura.