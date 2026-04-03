# Tasks Futuras — MedUni9

> Arquivo de backlog de funcionalidades planejadas mas ainda não implementadas.
> Atualizar sempre que uma task for concluída ou uma nova ideia surgir.
> Formato: `- [ ]` pendente | `- [x]` feito | prioridade alta/média/baixa

---

## Painel Admin

- [ ] **Aba "Referências" no admin** — ler `data/refs/{aula_id}.refs.json` e exibir livros e justificativas de cada material gerado. Pasta já existe e é populada pelo agente revisor. (Prioridade: média)
- [ ] **Dashboard de cobertura** — tabela por matéria mostrando % de aulas com material, flashcards e questões. Base: `data/agent_logs/status_analisador.json`. (Prioridade: média)
- [ ] **Visualizador de logs dos agentes** — exibir `data/agent_logs/status_*.json` no admin com histórico de execuções. (Prioridade: baixa)
- [ ] **Aprovação de materiais gerados** — fluxo no admin para revisar e aprovar/rejeitar materiais antes de publicar no Firebase. (Prioridade: média)

---

## Conteúdo e Geração

- [ ] **Completar BMF1** — gerar aulas a3 até a22 no formato correto (breadcrumb + Pré-Prova). (Prioridade: alta)
- [ ] **Completar Módulo 2** — bcm1 (a9–a21) e mad1 (a9–a24) com formato correto. (Prioridade: alta)
- [ ] **Gerar SUS** — sus_a1 até sus_a8 (módulo 1, alta importância para prova). (Prioridade: alta)
- [ ] **Revisar PMH a1–a14** — formato antigo (sem breadcrumb, acentuação inconsistente); agente revisor corrige. (Prioridade: alta)
- [ ] **Flashcards por aula** — meta de 12 flashcards por aula. Agente gerador prioriza aulas com 0–3 cards. (Prioridade: alta)
- [ ] **Questões por aula** — meta de 5 questões por aula. Agente gerador prioriza aulas sem questão. (Prioridade: alta)
- [ ] **Imagens nos materiais** — esquemas visuais gerados por IA para cada aula; armazenar em `materiais/imgs/`. (Prioridade: baixa)

---

## App / UX

- [ ] **Busca global** — campo de busca no app que filtra aulas, flashcards e questões por texto livre. (Prioridade: média)
- [ ] **Progresso por matéria** — barra de progresso calculada a partir dos checklists concluídos pelo aluno. (Prioridade: média)
- [ ] **Modo offline melhorado** — garantir que materiais acessados recentemente fiquem em cache para offline. (Prioridade: baixa)
- [ ] **Notificações de revisão espaçada** — lembrar o aluno de rever flashcards com intervalo crescente (spaced repetition). (Prioridade: baixa)

---

## Infra / Agentes

- [ ] **Agente de deploy automático** — `run_deploy.bat` que detecta novos arquivos em `materiais/` e roda `firebase deploy` automaticamente. (Prioridade: média)
- [ ] **Agente analisador de cobertura** — script Python que calcula cobertura por aula e atualiza `status_analisador.json`. (Prioridade: média)
- [ ] **Schedule automático dos agentes** — usar Windows Task Scheduler para rodar revisor + gerador toda madrugada. (Prioridade: baixa)
- [ ] **Integração com NotebookLM** — enviar materiais gerados para notebooks automáticos via MCP notebooklm. (Prioridade: baixa)

---

_Última atualização: 2026-04-02_
