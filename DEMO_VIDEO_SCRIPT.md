# MedGradPlus — Roteiro Completo para Vídeo Demo
> Documento para Google Stitch • App rodando em celular (modo mobile)

---

## 🎯 VISÃO GERAL DO APP

**Nome:** MedGradPlus  
**Público:** Estudantes de medicina da Uninove Vergueiro (Brasil)  
**Tipo:** PWA (Progressive Web App) — roda direto no navegador do celular  
**URL:** https://meduni9-869eb.web.app  
**Slogan:** *"Sua aprovação começa aqui"*

**O que é:** Plataforma completa de estudos para medicina com materiais, questões, flashcards com repetição espaçada, atlas de anatomia/histologia e chat com IA. Substitui Anki, apostilas físicas e grupos de WhatsApp de dúvidas.

---

## 🎨 IDENTIDADE VISUAL

| Elemento | Detalhe |
|----------|---------|
| Cor principal | Verde-teal `#00C896` |
| Tema padrão | **Escuro** — fundo azul-ardósia (`#1E2433`, `#252B3A`) |
| Tema claro | Disponível via toggle (sol/lua) |
| Fontes | DM Sans (corpo), Outfit (títulos), Lexend (apoio) |
| Estilo | Moderno, cards arredondados, sombras suaves, ícones neon |
| Animações | Fade + slide suave (0.3s), botões com hover teal glow |

**Cores por matéria (para mostrar no vídeo):**
- Semiologia → vermelho
- Anatomia → azul índigo
- Farmacologia → roxo
- Bioquímica → verde
- Pediatria → âmbar
- Obstetrícia → rosa
- Urgência/Emergência → vermelho escuro

---

## 📱 ESTRUTURA DE NAVEGAÇÃO

O app usa **menu lateral (sidebar)** que vira gaveta deslizante no celular (hamburguer ☰).

### 7 Abas Principais (ordem do menu):

```
1. 🏠 Início         — Dashboard principal
2. 📚 Materiais      — Conteúdo teórico por matéria/aula
3. ❓ Questões       — Banco de questões (modo quiz)
4. 🃏 Flashcards     — Repetição espaçada (algoritmo SM2)
5. 🫀 Anat. + Hist.  — Atlas visual interativo (BETA)
6. 💬 Feedback       — Canal de suporte/sugestões
7. 👤 Perfil         — Conta, plano, estatísticas
```

**+ Flutuante (canto inferior direito):** 💬 Monitor de Elite (chat IA — só premium)

---

## 📸 TELA A TELA — DESCRIÇÃO DETALHADA

---

### TELA 1 — LOGIN / SPLASH

**O que aparece:**
- Logo MedGradPlus centralizado
- Fundo escuro com gradiente teal
- Campo de e-mail + senha
- Botão "Entrar" verde-teal
- Link "Esqueci minha senha"
- Rodapé: "Ainda não tem conta? Fale conosco"

**Fluxo:** Usuário digita e-mail institucional → clica Entrar → carrega dashboard

---

### TELA 2 — INÍCIO (Dashboard)

**Banner de boas-vindas:**
> "Bom dia, [Nome]! 👋  
> Hoje é [dia da semana], [data]"

**Grid de stats rápidas (3 cards horizontais):**
- 🃏 `X cards` estudados hoje
- ❓ `X questões` respondidas hoje
- 🎯 `X%` de acerto hoje

**Barra de progresso diária:**
> "Você tem 47 cards para revisar hoje — continue de onde parou!"  
> [████████░░] 73%

**Lista de matérias** (rolagem vertical):
- Cada matéria: ícone colorido + nome + nº de cards + barra de progresso
- Tap → abre modal perguntando "Onde quer ir?"
  - → Materiais | → Questões | → Flashcards
- Toggle "Ver todos os módulos" / "Módulo atual"

**Banner upsell** (usuários gratuitos, no final):
> "🔓 Desbloqueie acesso completo — planos a partir de R$X"

---

### TELA 3 — MATERIAIS

**Hierarquia de navegação:**
```
Matérias → Aulas → Temas → Conteúdo
```

**Cabeçalho:**
- Selector de matéria (dropdown ou chips coloridos)
- Barra de busca 🔍 para buscar dentro dos materiais

**Lista de aulas** (cards dobráveis):
- Cada aula: título + ícone + indicador de progresso
- Tap → expande aula com temas
- Cada tema → abre conteúdo teórico

**Dentro do conteúdo de uma aula:**
- Texto estruturado em Markdown (títulos, listas, tabelas, negrito)
- **Mini-quizzes embutidos** — aparecem inline no texto:
  - Pergunta com 4 opções (A/B/C/D)
  - Tap na opção → feedback imediato (verde/vermelho)
  - Explicação da resposta correta expande abaixo
- Botões de acesso rápido:
  - "Ver Questões desta aula →"
  - "Estudar Flashcards →"
- Barra "Pré-Prova" no topo para revisão rápida

**Controle de acesso:**
- Usuários gratuitos: 1 aula completa por módulo desbloqueada
- Aulas bloqueadas mostram 🔒 com CTA de upgrade

---

### TELA 4 — QUESTÕES (Quiz)

**Cabeçalho com dois modos (toggle segmentado):**
```
[ ⭐ Essenciais ]  [ 📚 Todas ]
```

- **Essenciais:** questões curadas — as mais importantes de cada aula (≥5 por aula)
- **Todas:** banco completo de questões

**Filtros disponíveis:**
- Por matéria (chips coloridos ou dropdown)
- Por aula/tema (submenu)
- Dificuldade (fácil / médio / difícil)

**Tela de questão (quiz em andamento):**

```
┌─────────────────────────────┐
│  Farmacologia • Aula 3      │
│  Questão 4 de 20      🎯72% │
├─────────────────────────────┤
│                             │
│  [Enunciado clínico —       │
│   cenário de paciente,      │
│   70-90 palavras]           │
│                             │
│  A) Opção A                 │
│  B) Opção B  ◄ CORRETA ✅   │
│  C) Opção C                 │
│  D) Opção D                 │
│  E) Opção E                 │
│                             │
│  [Explicação expande aqui]  │
│  "B está correta porque..." │
│                             │
│  [PRÓXIMA QUESTÃO →]        │
└─────────────────────────────┘
```

**Feedback visual:**
- Resposta certa → fundo verde + ✅ + explicação
- Resposta errada → fundo vermelho + ❌ + destaque da certa + explicação completa

**Ao finalizar o quiz:**
- Resultado: `Você acertou 14/20 (70%)`
- Gráfico de desempenho
- Botão "Revisar Erros" → abre Caderno de Erros
- Botão "Refazer" ou "Nova Sessão"

**Caderno de Erros:**
- Lista de todas as questões que o usuário errou
- Organizado por matéria
- Pode refazer apenas os erros

---

### TELA 5 — FLASHCARDS

**Cabeçalho:**
- Filtro por matéria / aula / tema
- Contador: "47 cards para revisar hoje"
- Toggle: "Todos" / "Só os de hoje"

**Card em exibição (frente):**
```
┌─────────────────────────────┐
│  Farmacologia               │
│  ┌─────────────────────┐    │
│  │                     │    │
│  │  [Pergunta/conceito │    │
│  │   no centro]        │    │
│  │                     │    │
│  └─────────────────────┘    │
│                             │
│  [TAP PARA VIRAR]           │
└─────────────────────────────┘
```

**Card virado (verso) — animação de flip 3D:**
```
┌─────────────────────────────┐
│  Farmacologia               │
│  ┌─────────────────────┐    │
│  │                     │    │
│  │  [Resposta/         │    │
│  │   explicação]       │    │
│  │                     │    │
│  └─────────────────────┘    │
│                             │
│  [ 😅 Difícil ] [ 😊 Ok ] [ 🎯 Fácil ] │
└─────────────────────────────┘
```

**Botões de avaliação (SM2):**
- **😅 Difícil** → verá o card amanhã novamente
- **😊 Ok** → intervalo normal (ex: 3 dias)
- **🎯 Fácil** → intervalo longo (ex: 7+ dias)

**Categorias de card (chips de filtro):**
- Definição · Mecanismo · Clínica · Diferenciação · Prova · Extra

**Progresso da sessão:**
- Barra superior mostrando X/Y cards revisados

---

### TELA 6 — ATLAS ANATÔMICO + HISTOLÓGICO (BETA)

**Dois sub-modos (tabs internas):**
```
[ 🫀 Atlas Visual ]  [ ⚡ Revisão Rápida ]
```

#### Sub-tela: Atlas Visual

**Navegação hierárquica:**
```
Sistema Corporal → Divisão → Lâmina (Slide)
```

**Visualizador de imagem:**
- Imagem anatômica/histológica em alta resolução
- **Pins interativos** sobre estruturas (pontos brilhantes)
- Tap num pin → popup com nome + descrição da estrutura
- Painel lateral com legenda completa
- Zoom/pan na imagem

**Sistemas disponíveis** (com ícones coloridos):
- 🦴 Sistema Esquelético
- ❤️ Sistema Cardiovascular
- 🫁 Sistema Respiratório
- 🧠 Sistema Nervoso
- [+ outros sistemas]

**Badge BETA** visível no canto

**Controle de acesso:**
- Gratuito: apenas "Sistema Esquelético > Cabeça" liberado
- Premium: acesso completo a todos os sistemas

#### Sub-tela: Revisão Rápida
- Texto estruturado por sistema/órgão
- Formatado para leitura rápida pré-prova
- Busca integrada

---

### TELA 7 — FEEDBACK

**Formulário simples:**
- Campo "Assunto" (pré-preenchido com matéria atual, se houver)
- Campo "Mensagem" (textarea)
- Botão "Enviar Feedback"
- Confirmação de envio

**Uso:** Canal direto para reportar erros de conteúdo, bugs, sugestões

---

### TELA 8 — PERFIL

**Header do perfil:**
```
  ┌───┐
  │ J │  ← Avatar (inicial do nome)
  └───┘
  João Vítor Machado
  j.v.machado@uni9.edu.br
  [🏆 PRIME] ← badge do plano
```

**Informações acadêmicas:**
- Faculdade: Uninove Vergueiro
- Módulo: 4° Módulo
- Semestre atual

**Grid de estatísticas (4 cards):**
```
┌────────┬────────┐
│  3.2k  │  847   │
│ Cards  │Questões│
├────────┼────────┤
│  🔥 5  │ 14h    │
│ Streak │Estudo  │
└────────┴────────┘
```

**Configurações:**
- 🔄 Trocar Módulo (dropdown com módulos liberados)
- 🏫 Solicitar Troca de Instituição
- 💳 Meu Plano / Fazer Upgrade
- 💬 Suporte WhatsApp
- 🌙 Tema Claro/Escuro (também disponível na sidebar)
- 🚪 Sair (logout)

**Se for Embaixador:**
- Badge especial 🌟 Embaixador
- Status de renovação

---

### FLUTUANTE — 💬 MONITOR DE ELITE (Chat IA)

**Ativação:**
- Botão flutuante verde com ícone 💬 no canto inferior direito (sempre visível para premium)
- Tap → abre janela de chat deslizando de baixo

**Interface do chat:**
```
┌─────────────────────────────┐
│ 💬 Monitor de Elite    [✕]  │
├─────────────────────────────┤
│                             │
│  [Mensagem do sistema:      │
│   "Olá! Sou seu monitor     │
│   de elite. Tire suas       │
│   dúvidas acadêmicas!"]     │
│                             │
│  [Usuário]:                 │
│  "Qual a diferença entre    │
│   beta-bloqueador seletivo  │
│   e não seletivo?"          │
│                             │
│  [IA]: Digitando... ●●●     │
│                             │
│  [IA]: "Os beta-bloqueadores│
│   seletivos agem apenas     │
│   nos receptores β1..."     │
│                             │
├─────────────────────────────┤
│ [Tire sua dúvida... ] [➤]  │
└─────────────────────────────┘
```

**Funcionalidades:**
- Respostas geradas por **Gemini (Google AI)** em tempo real
- Indicador "Digitando..." animado durante geração
- Suporte a **Markdown** nas respostas (negrito, listas)
- Auto-scroll para última mensagem
- Histórico da conversa mantido na sessão
- Fecha ao tocar fora ou no ✕

**Acesso:** Exclusivo para assinantes Prime (plano pago)  
**Usuários gratuitos:** Veem o botão bloqueado ou não veem o chat

---

## 🔄 FLUXOS PRINCIPAIS DE USO

### Fluxo 1 — Estudar uma aula nova
```
Login → Dashboard → Tap matéria → "Materiais" →
Seleciona aula → Lê conteúdo → Responde mini-quiz inline →
Clica "Ver Questões desta aula" → Faz quiz →
Resultado + Explicações → Volta ao dashboard → Stats atualizadas
```

### Fluxo 2 — Revisão diária com flashcards
```
Login → Dashboard → Vê "47 cards para revisar" →
Tap no card → Aba Flashcards → Filtra matéria →
Vira cards → Avalia cada (Difícil/Ok/Fácil) →
SM2 agenda próxima revisão → Sessão concluída →
Dashboard atualiza contagem
```

### Fluxo 3 — Tirar dúvida com IA
```
Estudando materiais → Dúvida surge →
Tap no botão flutuante 💬 →
Chat abre → Digita dúvida →
Gemini responde em tempo real →
Continua estudo com dúvida resolvida
```

### Fluxo 4 — Modo véspera de prova
```
Dashboard → Seleciona matéria → Modal → "Questões" →
Toggle "⭐ Essenciais" → Filtra pela aula da prova →
Quiz foca nas questões mais cobradas →
Erra questão → Explicação detalhada →
Caderno de Erros registra →
Refaz só os erros → Aprovado! 🎉
```

### Fluxo 5 — Explorar atlas anatômico
```
Menu → Anat. + Hist. →
Seleciona sistema (ex: Cardiovascular) →
Escolhe divisão (ex: Coração) →
Seleciona lâmina →
Imagem abre com pins →
Tap nos pins → Vê nome + função de cada estrutura
```

---

## ✨ DESTAQUES PARA O VÍDEO

### Momentos de "wow" para capturar:

1. **Animação de flip do flashcard** — card vira em 3D revelando a resposta
2. **Feedback verde/vermelho nas questões** — resposta certa ilumina em verde com ✅
3. **Chat IA digitando** — indicador "●●●" piscando antes da resposta aparecer letra por letra
4. **Atlas com pins interativos** — hover/tap num ponto da imagem anatômica → popup aparece
5. **Mini-quiz embutido no material** — questão aparece dentro do texto teórico
6. **Abertura do menu lateral** — gaveta desliza suavemente da esquerda
7. **Seletor de matérias colorido** — cards com ícones e cores vibrantes
8. **Transição entre telas** — fade suave
9. **Badge PRIME no perfil** — brilho/destaque
10. **Dashboard com progresso** — barra de cards diários preenchendo

---

## 📊 CONTEÚDO DO APP (ESCALA)

| Tipo | Quantidade |
|------|-----------|
| Matérias | 25+ disciplinas |
| Aulas | 260+ aulas |
| Questões essenciais | ~1.500 questões (5-7 por aula) |
| Banco total de questões | 4.900+ questões |
| Flashcards | Centenas por matéria |
| Atlas: sistemas anatômicos | 8+ sistemas |
| Atlas: lâminas histológicas | 50+ lâminas |
| Módulos cobertos | Módulos 1-8 (medicina completa) |

---

## 💡 SUGESTÕES PARA O VÍDEO

### Roteiro sugerido (60-90 segundos):

**0-5s:** Splash screen / login  
**5-15s:** Dashboard — mostrar stats, progresso, lista de matérias  
**15-25s:** Materiais — abrir aula, rolar conteúdo, acionar mini-quiz inline  
**25-40s:** Questões — modo Essenciais, responder 2-3 questões, ver feedback  
**40-50s:** Flashcards — virar cards, clicar nos botões de avaliação  
**50-58s:** Atlas visual — navegar por sistema, tapar em pin anatômico  
**58-70s:** Monitor de Elite — abrir chat, digitar dúvida, ver IA respondendo  
**70-80s:** Perfil — mostrar stats totais, badge PRIME  
**80-90s:** Volta ao Dashboard — tudo atualizado — tagline final  

### Tom do vídeo:
- **Energia:** Confiante, focado, clean
- **Ritmo:** Ágil (não ficar mais de 3s numa tela estática)
- **Cor dominante:** Teal/verde nas transições e destaques
- **Música:** Instrumental motivacional — study lofi ou corporate upbeat
- **Device:** iPhone ou Android em modo portrait, com sombra realista

---

## 🚫 O QUE NÃO MOSTRAR

- Tela de erro ou loading lento
- Conteúdo bloqueado para gratuito (a menos que seja para mostrar o upgrade)
- Aulas sem conteúdo completo
- Funcionalidade GradBook+ (ainda em desenvolvimento)

---

## 📝 NOTAS TÉCNICAS PARA STITCH

- O app é **mobile-first PWA** — aparece como app nativo no celular
- Navegador recomendado para captura: Chrome no Android ou Safari no iOS
- URL: https://meduni9-869eb.web.app
- Fazer login com conta premium para desbloquear o chat de IA
- O menu lateral abre com tap no ☰ (hamburguer) no canto superior esquerdo
- Tema escuro já é o padrão ao entrar
- Para mostrar tema claro: botão 🌙/☀️ no canto da sidebar

---

*Documento gerado em: Abril 2026 | MedGradPlus v2 | Uninove Vergueiro*
