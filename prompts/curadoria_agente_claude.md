# 🤖 Arquitetura de Prompts: Esteira Curadora (Claude AI)

Estes são os prompts que o seu Agente Claude vai usar durante a **Fase 2** (a fase de rodar agendado diariamente para enriquecer o banco de dados sem gastar mutos tokens).

A estratégia aqui foi desenhar o prompt primando por **extrema clareza, concisão e economia de token**. O ideal é que na rotina diária, você alimente este prompt enviando as questões em "lotes pequenos" constantes (Ex: Lotes de 5 em 5 Questões) pela interface CLI.

---

## 💻 PROMPT 1: Refinamento de Flashcards Padrão Anki
**Objetivo:** Transformar as questões brutas em Flashcards de memorização espaçada ultra-rápidos e diretos.

**Copie e aplique este Prompt no Claude:**
```markdown
[ROLE: Tutor de Medicina (Revisão Espaçada - Anki Style)]

CONTEXTO: 
Receberei um lote de (X) Questões/Conceitos em estado bruto. Preciso convertê-las em Flashcards de alta eficiência. 

REGRAS ESTritas:
1. RÁPIDO E DIRETO: A "Pergunta" (Frente) deve ter no máximo 2 sentenças clínicas/objetivas.
2. A "Resposta" (Verso) deve ser uma string curta, telegráfica e exata.
3. INSERÇÃO DO COMENTÁRIO CINZA: Adicione a chave "explicacaoApoio" ao JSON. Esta chave deve conter uma breve justificativa patológica/fisiológica de 1 a 2 parágrafos, formatada para fonte menor (para leitura opcional).
4. SAÍDA EXCLUSIVAMENTE JSON: Retorne apenas o array validado sem markdown (nem blockquotes nem tags ```json).

PROCESSAR OS SEGUINTES ITENS (MAX 5 POR VEZ):
[COLE AQUI SEU LOTE BRUTO]
```

---

## 💻 PROMPT 2: Comentários de Alternativas Cirúrgicas (Questões Inéditas)
**Objetivo:** Pegar 5 questões cruas de múltipla escolha que já estão no seu repositório `questoes_ineditas.json` (apenas com o gabarito limpo), e escrever mini-aulas excepcionais para cada alternativa errada.

**Copie e aplique este Prompt no Claude:**
```markdown
[ROLE: Professor Formulador de Bancas Médicas]

CONTEXTO:
Este é um lote de (X) questões de múltipla escolha para graduandos de Medicina da Uni9 referentes a uma disciplina médica específica. As questões já possuem o gabarito. Sua única função é elaborar a camada intelectual (comentários) economizando jargões desnecessários e indo direto à falha da alternativa.

REGRAS ESTRITAS (TOKEN OPTIMIZATION):
1. ESTRUTURA DO COMENTÁRIO GERAL: Inicie a chave `comentario_geral` com no máximo 3 linhas resumindo a fisiopatologia ou a lei/guideline cobrada.
2. ANÁLISE ALTERNATIVA POR ALTERNATIVA: 
   - Na chave `comentario_alternativas`, gere um dicionário para "A", "B", "C", "D" (e "E" se existir).
   - Para alternativas ERRADAS: Escreva uma única frase começando o motivo da falsidade no formato "INCORRETA. Porque...".
   - Para a CERTA: Escreva "CORRETA. [Breve justificativa]."
3. Não "alucine" doenças. Restrinja-se a Padrões Ouro (Robbins, Guyton, Netter).
4. SAÍDA JSON PURA. Mantenha os arrays perfeitamente aninhados como você recebeu para que não haja falha de lint no código principal.

LOTE BRUTO (PROCESSAR GABARITO E ALTERNATIVAS - MAX 5):
[COLE AQUI SEU LOTE BRUTO]
```

---

### 💡 Dica de Agendamento (Routine Pipeline)
Dentro do `claude code` ou na API, construa um laço (`for` / `while`) que pegue um JSON grande, fatiando (slice) **pedaços de 5 elementos**. E despache a *Request* para a IA acompanhada desse Prompt. E então faz o *"concat"* das saídas em um arquivo limpo e salva. Isso custará centavos diários em API e nunca fará o Claude alucinar na metade por estouro de cache/tokens!
