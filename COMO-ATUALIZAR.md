# COMO ATUALIZAR O MEDUNI9

Guia completo para manter e atualizar o MedUni9 sem precisar de uma nova sessão Claude a cada vez. 🚀

---

## 1. ESTRUTURA DO PROJETO

Antes de começar, entenda o que cada arquivo faz:

### index.html
O arquivo principal do app. Contém a interface visual e toda a lógica do frontend. Você só precisa mexer aqui se quiser mudar o design ou adicionar novas funcionalidades (como filtros, nova tela, etc).

### admin.html
Painel administrativo para gerenciar o app. Aqui você pode adicionar flashcards, questões e códigos de ativação sem mexer no código. Use este arquivo para operações de rotina.

### manifest.json
Configuração da PWA (Progressive Web App). Define o nome do app, ícones, cores e comportamento quando instalado no celular. Geralmente não precisa mexer.

### sw.js
Service Worker que permite o app funcionar offline. Gerencia cache de arquivos. Não mexer a menos que queira melhorar a funcionalidade offline.

### firebase.json
Configuração para deploy no Firebase Hosting. Define pastas públicas e regras. Deixe como está, você não precisa mexer.

### data/materias.json
Lista de todas as matérias, semestres e blocos do curso. Exemplo:
```json
{
  "materias": [
    {
      "id": "farmacologia_bloco1",
      "nome": "Farmacologia",
      "semestre": 1,
      "bloco": 1,
      "descricao": "Introdução à Farmacologia Geral"
    }
  ]
}
```

### data/flashcards.json
Seus flashcards de estudo. Cada card tem pergunta, resposta, matéria e dificuldade. Este é um dos arquivos que você vai atualizar com frequência.

### data/questoes.json
Questões de simulado extraídas de provas antigas. Contém enunciado, alternativas, resposta correta e explicação. Você vai atualizar bastante aqui.

### data/codigos.json
Códigos de ativação para alunos novos. Cada código tem um ID único e status de uso.

---

## 2. COMO ADICIONAR FLASHCARDS

### Manualmente via admin.html:
1. Abra `admin.html` no navegador
2. Vá para aba "Adicionar Flashcards"
3. Preencha:
   - **Pergunta**: A questão do flashcard
   - **Resposta**: A resposta correta
   - **Matéria**: Selecione de materias.json
   - **Dificuldade**: Fácil, Média ou Difícil
4. Clique em "Salvar"
5. O flashcard é adicionado ao `data/flashcards.json`

### Manualmente editando JSON:
Abra `data/flashcards.json` e adicione:

```json
{
  "flashcards": [
    {
      "id": "flsh_farm_001",
      "pergunta": "Qual é o mecanismo de ação da aspirina?",
      "resposta": "Inibição irreversível da ciclooxigenase (COX), reduzindo a síntese de prostaglandinas e tromboxanos.",
      "materia": "farmacologia_bloco1",
      "dificuldade": "media",
      "dataCriacao": "2026-03-29"
    },
    {
      "id": "flsh_farm_002",
      "pergunta": "Cite 3 efeitos adversos dos AINE.",
      "resposta": "1) Lesão GI (úlceras, gastrite); 2) Nefrotoxicidade; 3) Hipersensibilidade",
      "materia": "farmacologia_bloco1",
      "dificuldade": "dificil",
      "dataCriacao": "2026-03-29"
    }
  ]
}
```

### Usando Claude Code:
Prompt exemplo:
```
Adicione 15 flashcards de Farmacologia sobre analgésicos e anti-inflamatórios
baseados nesta prova: [cole o texto da prova aqui]

Mantenha as respostas concisas e use a dificuldade apropriada.
```

---

## 3. COMO ADICIONAR QUESTÕES

### Manualmente via admin.html:
1. Abra `admin.html`
2. Vá para aba "Adicionar Questões"
3. Preencha:
   - **Enunciado**: O texto completo da questão
   - **Alternativas**: A, B, C, D, E
   - **Resposta Correta**: A alternativa certa
   - **Explicação**: Por que esta resposta está correta
   - **Matéria**: Selecione de materias.json
   - **Semestre**: Em qual semestre foi cobrado
4. Clique em "Salvar"

### Manualmente editando JSON:
Abra `data/questoes.json` e adicione:

```json
{
  "questoes": [
    {
      "id": "quest_farm_001",
      "enunciado": "Um paciente chega ao PS com infarto agudo do miocárdio. Qual medicamento deve ser administrado imediatamente?",
      "alternativas": {
        "a": "Atorvastatina 80mg",
        "b": "Ácido acetilsalicílico 500mg + Clopidogrel 600mg",
        "c": "Metoprolol 100mg",
        "d": "Furosemida 40mg",
        "e": "Doxiciclina 100mg"
      },
      "respostaCorreta": "b",
      "explicacao": "No infarto agudo do miocárdio, é fundamental iniciar dupla antiagregação (AAS + Clopidogrel) o mais rapidamente possível para prevenir trombose e melhoria do fluxo coronariano.",
      "materia": "cardiologia_bloco3",
      "semestre": 3,
      "fonte": "ENAM 2024",
      "dificuldade": "dificil",
      "dataCriacao": "2026-03-29"
    }
  ]
}
```

### Importante: Reformule as questões!
**NUNCA copie questões palavra por palavra das provas originais**. Sempre reformule com palavras diferentes, mantenha o conceito e a resposta, mas mude a estrutura.

---

## 4. COMO ADICIONAR CÓDIGOS DE ATIVAÇÃO

### Gerar códigos:
Você pode usar Claude para gerar códigos. Prompt:
```
Gere 30 códigos de ativação únicos para MedUni9.
Cada código deve ter 8 caracteres (letras maiúsculas e números).
Retorne em formato JSON pronto para adicionar ao data/codigos.json
```

### Adicionar manualmente via admin.html:
1. Abra `admin.html`
2. Vá para aba "Códigos de Ativação"
3. Gere códigos ou Cole códigos gerados
4. Clique em "Salvar"

### Formato JSON:
```json
{
  "codigos": [
    {
      "codigo": "UNIMED9K",
      "ativo": true,
      "dataGeracao": "2026-03-29",
      "dataUso": null,
      "usuarioId": null,
      "limite": 1
    },
    {
      "codigo": "MEDUNI9X",
      "ativo": true,
      "dataGeracao": "2026-03-29",
      "dataUso": null,
      "usuarioId": null,
      "limite": 1
    }
  ]
}
```

**Importante**: Cada código é usado apenas uma vez. Depois que um aluno ativa com um código, o campo `dataUso` é preenchido e `usuarioId` recebe o ID do aluno.

---

## 5. COMO FAZER DEPLOY NO FIREBASE

### Primeira vez (Setup inicial):

#### Passo 1: Instale Firebase Tools
```bash
npm install -g firebase-tools
```

#### Passo 2: Faça login
```bash
firebase login
```
Isso vai abrir navegador para você logar com sua conta Google.

#### Passo 3: Inicialize o projeto
```bash
cd /seu/caminho/para/meduni9-app
firebase init
```

Durante a inicialização:
- Selecione "Hosting"
- Escolha o projeto "meduni9"
- Public directory: `.` (ponto, a raiz)
- Configure as rewrites para SPA (y/n): `Y`
- Sobrescrever index.html: `N`

#### Passo 4: Primeiro deploy
```bash
firebase deploy
```

### Depois (Deploy rápido):

Toda vez que fizer mudanças:

```bash
firebase deploy
```

Pronto! Seu app está atualizado em produção.

### Ver logs e status:
```bash
firebase hosting:channel:list
firebase open hosting:site
```

---

## 6. COMO USAR COM CLAUDE CODE

Claude Code é uma forma rápida de fazer atualizações sem ter que mexer manualmente em tudo.

### Instalar Claude Code:
```bash
npm install -g @anthropic-ai/claude-code
```

### Usar no seu projeto:

```bash
cd /seu/caminho/para/meduni9-app
claude code
```

### Exemplos de prompts úteis:

**Adicionar flashcards de uma prova:**
```
Adicione 20 flashcards de Farmacologia baseados nesta prova:

[Cole aqui o texto de uma prova sobre Farmacologia]

Mantenha respostas concisas, use dificuldade apropriada (facil/media/dificil),
e reformule as questões com palavras diferentes.
Adicione ao data/flashcards.json
```

**Gerar códigos de ativação:**
```
Gere 30 códigos de ativação únicos para MedUni9.
Cada código deve ter 8 caracteres (letras maiúsculas e números, sem repetição).
Adicione ao data/codigos.json com o formato correto.
```

**Atualizar interface:**
```
Atualize o index.html para adicionar um filtro por dificuldade (Fácil, Média, Difícil)
na seção de flashcards. Os cards devem filtrar quando o usuário seleciona uma dificuldade.
```

**Adicionar questões de simulado:**
```
Extraia as questões abaixo e adicione ao data/questoes.json:

[Cole as questões aqui]

Importante:
- Reformule cada questão com palavras diferentes
- Mantenha a resposta correta e o conceito
- Adicione uma explicação clara do porquê da resposta
```

---

## 7. COMO EXTRAIR QUESTÕES DE PROVAS

### Passo a passo:

#### 1. Abra a prova PDF
Abra a prova da qual quer extrair questões.

#### 2. Copie ou descreva as questões
Copie o texto das questões ou descreva-as:
```
Questão 1:
Um paciente com febre, tosse e dispneia é internado...
a) Penicilina
b) Ceftriaxona
...

Questão 2:
...
```

#### 3. Use Claude para reformular
Abra Claude Code e use um prompt como:

```
Extraia estas questões de prova e reformule-as para o MedUni9:

[Cole as questões aqui]

Para cada questão:
1. Reformule o enunciado com palavras diferentes (mantenha o conceito)
2. Mantenha as 5 alternativas
3. Indique qual é a correta
4. Explique por que é a resposta correta
5. Retorne em formato JSON para data/questoes.json

Importante: NUNCA copie o enunciado original. Sempre reformule!
```

#### 4. Revise e adicione
Claude vai gerar o JSON. Revise para garantir que:
- As respostas estão corretas
- As explicações fazem sentido
- As questões foram reformuladas
- O JSON está válido

#### 5. Adicione ao arquivo
Cole o JSON no final de `data/questoes.json` (dentro do array "questoes").

---

## 8. FLUXO DE ATUALIZAÇÃO RÁPIDA

A maioria das atualizações segue este fluxo simples:

### Para adicionar CONTEÚDO (flashcards, questões, códigos):
```
1. Edite o arquivo JSON em data/
2. Rode: firebase deploy
3. Pronto! Conteúdo está atualizado em produção
```

Você **não precisa** mexer em HTML, CSS ou JavaScript para adicionar conteúdo!

### Para mudar FUNCIONALIDADE (nova tela, novo filtro, novo design):
```
1. Use Claude Code para atualizar index.html ou criar novo arquivo
2. Teste localmente: abra index.html no navegador
3. Rode: firebase deploy
4. Pronto!
```

---

## 9. DICAS IMPORTANTES

### 1. NUNCA copie questões literalmente
Se você copiar questões palavra por palavra das provas, está violando direitos autorais. Sempre reformule com palavras diferentes, mantendo apenas o conceito e a resposta.

**Exemplo errado:**
```
Original: "Um paciente com infarto agudo do miocárdio apresenta dor no peito..."
Sua versão: "Um paciente com infarto agudo do miocárdio apresenta dor no peito..."  ❌
```

**Exemplo certo:**
```
Original: "Um paciente com infarto agudo do miocárdio apresenta dor no peito..."
Sua versão: "Paciente chega ao PS relatando dor torácica súbita com eletrocardiograma mostrando..." ✅
```

### 2. Mantenha backup do data/ folder
A pasta `data/` contém todo seu conteúdo. Faça backup regularmente:

```bash
cp -r data/ data_backup_$(date +%Y%m%d)/
```

### 3. Teste localmente antes de deploy
Antes de fazer deploy no Firebase, teste localmente:

```bash
# Abra o arquivo no navegador
# Windows:
start index.html

# Mac:
open index.html

# Linux:
xdg-open index.html
```

Testar localmente não afeta os alunos e você não perde acesso se algo der errado.

### 4. JSON válido é essencial
Se você adicionar flashcards ou questões manualmente, certifique-se de que o JSON é válido:
- Use vírgulas entre objetos no array
- Use aspas duplas em chaves e valores
- Não deixe vírgula no último item

Use um validador: https://jsonlint.com/

### 5. Organize seus IDs
Use IDs consistentes:
- Flashcards: `flsh_materia_numero` (ex: `flsh_farm_001`)
- Questões: `quest_materia_numero` (ex: `quest_cardio_042`)
- Códigos: Apenas os 8 caracteres

### 6. Faça commits no Git (se estiver usando)
Se está versionando com Git:

```bash
git add data/
git commit -m "Adicionado 20 flashcards de Farmacologia"
git push
```

### 7. Monitore uso de códigos
De vez em quando, verifique quais códigos foram usados:

```bash
# Abra data/codigos.json e veja quais têm "dataUso" preenchido
# Esses já foram usados e não podem ser usados novamente
```

---

## RESUMO RÁPIDO

| Ação | Como fazer |
|------|-----------|
| Adicionar flashcard | Editar `data/flashcards.json` + `firebase deploy` |
| Adicionar questão | Editar `data/questoes.json` + `firebase deploy` |
| Gerar códigos | Usar Claude Code ou editar `data/codigos.json` + deploy |
| Mudança visual | Editar `index.html` + `firebase deploy` |
| Deploy | `firebase deploy` |
| Testar | Abrir `index.html` no navegador |
| Backup | `cp -r data/ data_backup/` |

---

## PRÓXIMOS PASSOS

1. **Hoje**: Configure Firebase seguindo a seção 5
2. **Amanhã**: Adicione seus primeiros flashcards
3. **Esta semana**: Extraia questões de uma prova e adicione
4. **Sempre**: Use Claude Code para atualizações rápidas

---

**Bom trabalho, João Vitor! O MedUni9 vai ficar incrível! 💪📚**

Dúvidas? Releia a seção correspondente ou use Claude Code com a descrição do problema.
