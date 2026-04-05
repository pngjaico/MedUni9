# GradBook+ — Spec Completo de Produto

> **Destino final:** `docs/gradbook-plus/gradbook-plus-spec.md` no repo `meduni9-app`
> **Data:** 2026-04-05
> **Status:** Aprovado pelo usuário — pronto para implementação

---

## Contexto

GradBook+ é um whitebook médico digital focado em internato/plantão/UBS/pronto atendimento, integrado ao ecossistema MedGradPlus. O objetivo é entregar ao médico interno uma ferramenta de consulta rápida e registro clínico no celular — substituindo cadernos, bulas físicas e tabelas impressas — com modelo freemium que converte no momento de maior necessidade clínica.

Referências: Afya Whitebook (#1 app médico do Brasil), PEDB (calculadoras pediátricas).

---

## 1. Decisões Arquiteturais

### Stack
- **Frontend:** React 18 + Vite
- **PWA:** Workbox (offline cache para bulário top-500 + calculadoras)
- **Auth:** Firebase Authentication — mesmo projeto do MedGradPlus (`authDomain` compartilhado)
- **Banco de dados:** Firestore (projeto Firebase próprio do GradBook+)
- **Hosting:** Firebase Hosting → `gradbook.medgradplus.com.br` (ou domínio próprio futuro)
- **Pagamentos:** Stripe + Firebase Cloud Functions (webhooks)
- **IA (conteúdo):** Claude API via Cloud Function para geração de rascunhos no admin

### Firebase
- Plano **Blaze (pay-as-you-go)** obrigatório desde o dia 1 (necessário para Cloud Functions)
- Custo estimado: R$0–10/mês até 1.000 usuários; R$10–50/mês até 10.000 usuários
- Conteúdo estático (calculadoras) em JSON no bundle — cacheable offline, sem custo de leitura
- Prontuários em Firestore privado por `uid`

### Repositório
- Novo repo: `gradbook-app` (separado do `meduni9-app`)
- Compartilha design system visualmente (não via código) — segue as mesmas CSS variables e tokens

---

## 2. Design System

Herda o visual do MedGradPlus sem copiar código:

### Cores
```css
--primary: #00C896;          /* mint — cor de ação principal */
--primary-cyan: #00B4D8;     /* cyan — alternativa/hover */
--bg-dark: #1E2433;          /* background base */
--bg-sidebar: #252B3A;       /* sidebar / bottom nav */
--bg-card: rgba(255,255,255,0.05);
--surface-1: rgba(255,255,255,0.06);
--surface-2: rgba(255,255,255,0.09);
--text-primary: #E8EBF0;
--text-secondary: #8B95A8;
--border-subtle: rgba(255,255,255,0.09);
--success: #10B981;
--warning: #F59E0B;
--error: #EF4444;
--shadow-md: 0 4px 20px rgba(0,0,0,0.25);
```

### Tipografia
- **Display/Títulos:** Outfit (600–800)
- **Corpo/UI:** DM Sans (400–700)
- **Fallback:** system-ui

### Componentes base
- Botões: `border-radius: 12px`, `min-height: 48px`, `font-weight: 600`
- Cards: `border-radius: 14px`, `border: 1px solid var(--border-subtle)`
- Inputs: `border-radius: 12px`, `focus: border-color var(--primary)`
- Badges: `border-radius: 999px`, uppercase, 0.7rem
- Transições: 150–250ms, `cubic-bezier(0.16, 1, 0.3, 1)` (spring)
- Dark mode padrão; light mode via `html[data-theme="light"]`

---

## 3. Plataforma & PWA

- **Mobile-first PWA** — instalável, offline-capable, bottom navigation no mobile
- Desktop: sidebar esquerda (mesmo padrão MedGradPlus)
- Breakpoint: `768px` (mobile abaixo, desktop acima)
- Service Worker via Workbox:
  - Cache offline: bulário top-500 medicamentos + todas as calculadoras (JSON estático)
  - Estratégia: Cache First para conteúdo estático, Network First para Firestore
- Ícone, splash screen, manifest.json configurados para instalação

---

## 4. Navegação

### Bottom Navigation (mobile) / Sidebar (desktop) — 5 tabs fixos

```
🏠 Home  |  📋 Pacientes  |  🔍 Referência  |  🛠️ Ferramentas  |  ☰ Menu
```

### Regra de expansão
Novos módulos entram no **☰ Menu** como grid de cards. Se um módulo atingir top-3 em uso, pode ser promovido para tab fixo (configuração futura).

### Top Bar
- Logo GradBook+ (esquerda)
- **Busca global** (centro) — retorna resultados de bulário + calculadoras + prescrições simultaneamente
- Avatar / status da assinatura (direita)

---

## 5. Sistema Freemium & Psicologia de Conversão

### Regras de limite (Free)
- **5 usos/dia por módulo** (busca no bulário = 1 uso; calcular = 1 uso; abrir prescrição = 1 uso)
- Prontuário (lista de pacientes + templates): **ilimitado no free** — cria hábito sem fricção
- Reset diário à meia-noite

### Trial
- **7 dias com tudo desbloqueado** no onboarding — sem cartão de crédito
- Após trial: cai para limite free automaticamente

### Paywall UX (momentos de conversão)
1. **Contador na Home:** `"3 de 5 consultas restantes hoje"` com barra de progresso
2. **Último uso do dia:** alerta antes de consumir o último (`"Este é seu último uso hoje"`)
3. **Modal de bloqueio contextual:** *"Você está consultando uma conduta de sepse. Não trave no meio do plantão. Assine agora por R$29,90/mês."*
4. **Conteúdo visível com cadeado:** o usuário vê o que está perdendo (FOMO)
5. **Desconto MedGradPlus automático** no modal se detectado: `"Como assinante MedGradPlus, você tem 20% de desconto: R$23,90/mês"`

### Planos

| Plano | Preço | Detalhe |
|---|---|---|
| Free | R$ 0 | 5 usos/dia/módulo, trial 7 dias |
| Mensal | R$ 29,90 | Ilimitado, offline, todos os módulos |
| Anual | R$ 199,90 | ~R$16,60/mês — desconto 44% |
| Combo MedGradPlus | -20% automático | Detectado via Cloud Function |

---

## 6. Autenticação & Integração com MedGradPlus

### Auth unificada
- Mesmo `authDomain` Firebase do MedGradPlus
- Login com email+senha ou Google
- Se email já existe no MedGradPlus → login sem criar nova conta
- Cloud Function `onUserCreate` checa assinatura ativa no MedGradPlus → aplica desconto no Stripe automaticamente

### Integração no MedGradPlus
- **Cross-link contextual:** ao estudar aula de pneumologia no MedGradPlus → card *"Ver protocolos de pneumonia no GradBook+"*
- **Badge na sidebar** do MedGradPlus: *"Experimente o GradBook+ — 7 dias grátis"*
- **Desconto automático** via lookup no Firestore do MedGradPlus (service account)
- **Onboarding unificado:** usuário MedGradPlus pula tela de cadastro

### Fluxo de pagamento Stripe
```
Clique em "Assinar"
→ Cloud Function cria Checkout Session no Stripe
→ Redirect para Stripe Checkout (hosted page)
→ Pagamento confirmado → Stripe webhook dispara
→ Cloud Function atualiza Firestore: users/{uid}/subscription { plan, expiresAt, stripeCustomerId }
→ App detecta via onSnapshot → limites removidos em tempo real
```

- **Stripe Customer Portal** para self-service (cancelamento, troca de plano, atualização de cartão)
- **Custo Stripe:** ~3,4% + R$0,40 por transação no Brasil

---

## 7. Módulos MVP — Detalhamento Completo

### 7.1 📋 Prontuário (tab Pacientes)

**Firestore:** `users/{uid}/patients/{patientId}`

**Tela: Lista de pacientes**
- Cards com: Nome, Leito/Enfermaria, Diagnóstico principal
- Badge de status: 🟢 Estável · 🟡 Atenção · 🔴 Crítico
- Checklist de pendências inline (pode marcar sem abrir o paciente)
- FAB `+ Novo Paciente`
- Ordenação por leito ou prioridade
- Ilimitado no free (sem limite de uso diário)

**Tela: Paciente individual**
- Header: nome, leito, diagnóstico, status (editável)
- Abas internas: **Evolução · Admissão · Exames · Pendências · Notas rápidas**
- Templates pré-formatados em SOAP (Subjetivo / Objetivo / Avaliação / Plano)
- Atalhos de template: digitar `/` abre menu de atalhos (ex: `/sepse`, `/icc`, `/pneumonia`)
- Campo de exames: tabela simples hemograma, bioquímica, imagem
- **Exportar PDF:** gera documento formatado da evolução do dia

**Dados:** salvos em Firestore, privados por `uid`, nunca compartilhados

---

### 7.2 💊 Bulário (tab Referência)

**Firestore:** `drugs/{drugId}` (leitura pública, escrita apenas admin)
**Offline:** top-500 medicamentos cacheados via Workbox

**Tela principal**
- Search bar proeminente no topo
- Grid de classes terapêuticas (acesso rápido sem busca)
- Filtros: classe · sistema · via de administração

**Card do medicamento — campos completos**
- Nome genérico + comerciais
- Classe terapêutica
- Mecanismo de ação (resumido)
- Indicações principais
- **Dose adulto** (com variações por indicação)
- Dose pediátrica
- Via de administração · Frequência · Duração
- Ajuste renal (ClCr threshold)
- Categoria na gestação
- Efeitos adversos principais (top 5)
- Contraindicações absolutas
- Interações relevantes

**Verificador de interações**
- Seleciona 2+ medicamentos → resultado com nível de gravidade
- 🟡 Leve · 🟠 Moderada · 🔴 Grave · ⛔ Contraindicada
- Explicação da interação em texto simples

**Favoritos** — salva medicamentos mais usados, disponíveis offline

**Free:** 5 buscas/dia → **Premium:** ilimitado

---

### 7.3 🧮 Calculadoras (tab Ferramentas)

**Fonte:** JSON estático no bundle (offline, sem custo de Firestore)

**Grid por categoria:**

| Renal | Cardiovascular | Respiratório | Infecciologia | Geral |
|---|---|---|---|---|
| Cockcroft-Gault (ClCr) | Wells TVP | CURB-65 | SOFA | IMC |
| MDRD (TFG) | Wells TEP | PaO₂/FiO₂ (Berlim) | qSOFA | Taxa de infusão IV |
| — | TIMI | — | APACHE II | Waterlow (escaras) |
| — | Child-Pugh | — | Critérios de Sepse-3 | Correção de Na⁺ |
| — | MELD | — | — | Anion Gap |

**UX de cada calculadora**
- Inputs numéricos com unidades visíveis
- Resultado em destaque com cor: 🟢 Baixo risco · 🟡 Moderado · 🔴 Alto risco
- Interpretação em texto: *"CURB-65 = 3 → Alto risco. Considerar internação em UTI."*
- Botão `Salvar no paciente` → resultado vai direto para as notas do paciente ativo
- Histórico dos últimos 5 cálculos (sessão)

**Free:** 5 cálculos/dia → **Premium:** ilimitado

---

### 7.4 📝 Prescrições Prontas (tab Ferramentas)

**Firestore:** `prescriptions/{prescriptionId}` (leitura pública, escrita admin)

**Biblioteca de modelos — categorias**
- Internação Geral · Emergência · Antibióticos · Pós-operatório
- Controle de Dor · Sedação/Analgesia · Fluidos e Eletrólitos · Pediatria

**Fluxo de uso**
1. Busca por diagnóstico ou navega por categoria
2. Preview do modelo: lista de medicamentos + doses + instruções
3. Campos variáveis destacados: `[PESO_KG]`, `[DOSE_CALCULADA]`, `[VIA]`
4. Edição inline antes de usar
5. `Copiar como texto formatado` (clipboard) ou `Salvar no paciente`

**Meus Modelos** — usuário Premium salva suas próprias prescrições customizadas

**Free:** 5 prescrições/dia → **Premium:** ilimitado

---

## 8. Módulos Fase 2 (pós-MVP, já com estrutura de navegação preparada)

Todos entram no **☰ Menu** primeiro:

| Módulo | Descrição |
|---|---|
| 🔬 Diagnóstico Diferencial (DDx) | Input sintomas + achados → hipóteses diagnósticas rankeadas |
| 🩺 Procedimentos Práticos | Passo-a-passo: IOT, sutura, acesso venoso, paracentese, punção lombar |
| 🦠 Guia de Antibióticos | Escolha por infecção + escalonamento + ajuste renal |
| 💧 Fluidos & Eletrólitos | Tipos de soro, hidratação, correção de distúrbios |
| 🧪 Valores de Referência | Tabela completa de exames laboratoriais + interpretação |
| 🫀 Protocolos de Emergência | Fluxogramas: PCR, sepse, AVC, anafilaxia, choque |
| 📊 Atlas Visual | ECG básico, Rx tórax/abdome, dermatologia clínica |
| 📓 Anotações Pessoais | Bloco de notas rápidas, salvo localmente |

---

## 9. Módulos Fase 3 — Plantão (futuro)

- Gerenciador de plantão (escalas, finanças do plantão)
- Lista de pacientes compartilhada com equipe
- Modo noturno agressivo (tela escura máxima)
- Alertas de conduta durante o turno

## 10. Módulos Fase 4 — Formados/Residentes (futuro)

- Receituário digital
- Planos corporativos (hospitais, clínicas)
- Módulo de residência médica
- Integração com prontuário hospitalar

## 11. Módulos Fase 5 — IA Clínica (futuro)

- **GradBook Assist:** chat clínico contextual (modelo: Claude API)
- DDx por IA baseado no prontuário do paciente
- Sugestão de conduta baseada em guidelines atualizados

---

## 12. Admin Panel

**Acesso:** `/admin` — restrito por `role: "admin"` no Firestore

### Gestão de Conteúdo
- **Bulário CRUD:** formulário completo, todos os campos do medicamento
- **Calculadoras:** configura inputs, fórmula (JavaScript eval seguro), faixas de interpretação
- **Prescrições:** editor de templates com campos variáveis `[PLACEHOLDER]`
- **Procedimentos/Protocolos:** editor Markdown com preview renderizado
- **Pipeline:** Rascunho → Em Revisão → Publicado
- **Gerar com IA:** botão que chama Claude API → retorna rascunho → admin revisa antes de publicar

### Gestão de Usuários
- Lista com plano atual, data expiração, uso diário por módulo
- Aplicar desconto manual, estender trial, bloquear conta
- Exportar CSV

### Dashboard Financeiro
- MRR (Monthly Recurring Revenue)
- Churn mensal
- Taxa de conversão free → premium
- Módulo mais consultado
- Novos usuários/dia

---

## 13. Onboarding (3 telas)

1. **Contexto:** *"Como você vai usar o GradBook+?"* — Internato / Plantão / UBS / Ambulatório
   - Define sugestões de conteúdo e ordem de módulos na Home
2. **Conectar MedGradPlus** (opcional) — detecta desconto automaticamente
3. **Trial ativado:** *"7 dias com acesso total. Sem cartão de crédito."* → CTA para Home

---

## 14. Segurança Firestore (regras)

```javascript
// Prontuários: apenas o próprio usuário
match /users/{uid}/patients/{patientId} {
  allow read, write: if request.auth.uid == uid;
}

// Conteúdo clínico: leitura pública, escrita apenas service account
match /drugs/{drugId} {
  allow read: if true;
  allow write: if request.auth.token.admin == true;
}

match /prescriptions/{prescriptionId} {
  allow read: if true;
  allow write: if request.auth.token.admin == true;
}

// Subscription: escrita apenas Cloud Function
match /users/{uid}/subscription {
  allow read: if request.auth.uid == uid;
  allow write: if request.auth.token.admin == true;
}
```

---

## 15. Estrutura de Arquivos (React + Vite)

```
gradbook-app/
├── public/
│   ├── manifest.json          # PWA manifest
│   └── icons/                 # Ícones para instalação
├── src/
│   ├── main.jsx
│   ├── App.jsx                # Router principal
│   ├── firebase.js            # Config Firebase
│   ├── stripe.js              # Config Stripe client
│   │
│   ├── components/            # Componentes reutilizáveis
│   │   ├── ui/                # Button, Card, Badge, Input, Modal
│   │   ├── PaywallModal.jsx   # Modal de upgrade
│   │   ├── DailyLimitBar.jsx  # Contador de usos
│   │   └── SearchGlobal.jsx   # Busca global
│   │
│   ├── screens/               # Telas principais
│   │   ├── Home.jsx
│   │   ├── Pacientes/
│   │   │   ├── ListaPacientes.jsx
│   │   │   ├── PacienteDetalhe.jsx
│   │   │   └── TemplateEditor.jsx
│   │   ├── Referencia/
│   │   │   ├── Bulario.jsx
│   │   │   ├── BularioDetalhe.jsx
│   │   │   └── InteracoesChecker.jsx
│   │   ├── Ferramentas/
│   │   │   ├── Calculadoras.jsx
│   │   │   ├── CalculadoraDetalhe.jsx
│   │   │   ├── Prescricoes.jsx
│   │   │   └── PrescricaoDetalhe.jsx
│   │   ├── Menu.jsx           # Grid de todos os módulos
│   │   ├── Perfil.jsx
│   │   └── Assinatura.jsx
│   │
│   ├── auth/
│   │   ├── Login.jsx
│   │   ├── Cadastro.jsx
│   │   └── Onboarding.jsx
│   │
│   ├── admin/
│   │   ├── AdminDashboard.jsx
│   │   ├── AdminDrugs.jsx
│   │   ├── AdminPrescricoes.jsx
│   │   ├── AdminUsuarios.jsx
│   │   └── AdminFinanceiro.jsx
│   │
│   ├── hooks/
│   │   ├── useAuth.js
│   │   ├── useSubscription.js  # Lê plano + limites
│   │   ├── useDailyLimit.js    # Controla contagem diária
│   │   └── useOfflineCache.js
│   │
│   ├── data/
│   │   ├── calculadoras.json   # Todas as calculadoras (estático)
│   │   └── calculadoras/       # Fórmulas por calculadora
│   │
│   └── utils/
│       ├── pdfExport.js        # Geração de PDF do prontuário
│       ├── stripeLimits.js     # Lógica de limites por plano
│       └── formatters.js
│
├── functions/                  # Firebase Cloud Functions
│   ├── stripe/
│   │   ├── createCheckout.js
│   │   ├── webhook.js
│   │   └── customerPortal.js
│   ├── auth/
│   │   └── onUserCreate.js     # Detecta conta MedGradPlus + aplica desconto
│   └── admin/
│       └── generateContent.js  # Chama Claude API para rascunhos
│
├── vite.config.js              # + vite-plugin-pwa
├── firebase.json
└── firestore.rules
```

---

## 16. Verificação / Como testar end-to-end

1. **Auth:** criar conta com email já existente no MedGradPlus → deve logar diretamente
2. **Desconto:** conta MedGradPlus ativa → modal de upgrade deve mostrar preço com desconto
3. **Limites:** usar bulário 5x → na 6ª deve aparecer PaywallModal
4. **Reset diário:** mudar clock do sistema para meia-noite → limites devem resetar
5. **PWA offline:** instalar app, desligar internet → bulário top-500 e calculadoras devem funcionar
6. **Prontuário → PDF:** criar paciente, preencher evolução, exportar → PDF gerado corretamente
7. **Stripe:** usar cartão de teste `4242 4242 4242 4242` → assinatura ativa → limites removidos
8. **Admin:** login com role admin → CRUD de medicamento funcional

---

## Referências visuais
- MedGradPlus: `meduni9-app/index.html` (design system completo)
- Afya Whitebook: afyawhitebook.com.br (UX de referência)
- PEDB: pedb.com.br (calculadoras de referência)
