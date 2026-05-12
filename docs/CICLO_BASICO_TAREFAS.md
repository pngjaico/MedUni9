# Ciclo Basico - Tarefas, Estado e Retomada

Este arquivo e o quadro de bordo do ciclo basico. Atualize depois de cada bloco real de trabalho. Ele deve ser lido junto com `docs/CICLO_BASICO_ANTI_COMPACT.md`.

## Estado atual

- Status geral: planejamento blindado criado; piloto `bmf1_a7` aprovado como regua v3 basica; Modulo 1 fechado em padrao premium no escopo combinado (`bmf1`, `pmh`, `sus`, `semiologia1`; `pe1` fora): 54/54 aulas limpas no relatorio, 648 essenciais, 648 flashcards, PMH sem template repetido e Semiologia1 sem explicacoes vazias.
- Unidade de trabalho: uma aula por vez.
- Meta nova: exatamente 12 questoes essenciais boas por aula.
- Edicao em massa de conteudo: proibida.
- Auditoria global: permitida.
- Browser/API externa: nao usar salvo pedido explicito.
- Fila de aulas: `data/agent_logs/ciclo_basico_aula_queue.json` (regenerada apos consolidado do Modulo 1; 54 prontas, 209 pendentes).
- Rodada posterior de imagens: `data/agent_logs/ciclo_basico_image_queue.json`.
- Modulo 3 - BMF3 fechado: 22/22 aulas com material espelhado, 12 essenciais, 12 flashcards e validadores locais OK; fila BMF3 restante apenas `sem Resumo A4`.
- Modulo 3 - Semiologia3 em execucao: `semio3_a1` fechada no contrato de material/questoes/flashcards; 93 questoes antigas contaminadas foram quarentenadas.
- Modulo 3 - Semiologia3 em execucao: `semio3_a2` fechada no contrato de material/questoes/flashcards; questao fora do recorte `2338` foi quarentenada.
- Modulo 3 - Semiologia3 em execucao: `semio3_a3` fechada no contrato de material/questoes/flashcards; 7 questoes antigas validas foram reaproveitadas e 5 lacunas reais foram criadas.
- Modulo 3 - Semiologia3 em execucao: `semio3_a4` fechada no contrato de material/questoes/flashcards; 7 questoes antigas validas foram reaproveitadas e 5 lacunas reais foram criadas.
- Modulo 3 - Semiologia3 em execucao: `semio3_a5` fechada no contrato de material/questoes/flashcards; 7 questoes antigas validas foram reaproveitadas e 5 lacunas reais foram criadas.
- Modulo 3 - Semiologia3 fechada: 6/6 aulas com material espelhado, 12 essenciais, 12 flashcards e validadores locais OK; fila pode seguir amarela apenas por `sem Resumo A4`.
- Modulo 3 - Fisiopato3 fechada: `fp3_a1`-`fp3_a15` com material espelhado, 12 essenciais, 12 flashcards, refs reais e slot de imagem registrado; fila pode seguir amarela apenas por `sem Resumo A4`.
- Modulo 3 - MAD2 em execucao: revisao pesada registrada em `data/agent_logs/modulo3_mad2_review_plan.md`; `mad2_a1` fechada no contrato de material/questoes/flashcards; questoes contaminadas `311` e `2009` foram quarentenadas.
- Modulo 3 - MAD2 em execucao: `mad2_a2` fechada no contrato de material/questoes/flashcards; 5 questoes antigas de escopo foram reescritas para remover formato template.
- Modulo 3 - MAD2 em execucao: `mad2_a3` fechada no contrato de material/questoes/flashcards; 5 questoes antigas de escopo foram reescritas e 7 lacunas reais foram criadas.
- Modulo 3 - MAD2 em execucao: `mad2_a4` fechada no contrato de material/questoes/flashcards; 5 questoes antigas de escopo foram reescritas e 7 lacunas reais foram criadas.
- Modulo 3 - MAD2 em execucao: `mad2_a5` fechada no contrato de material/questoes/flashcards; questao contaminada `355` foi quarentenada e 8 lacunas reais foram criadas.
- Modulo 3 - MAD2 em execucao: `mad2_a6` fechada no contrato de material/questoes/flashcards; questoes contaminadas `270` e `5375` foram quarentenadas e 9 lacunas reais foram criadas.
- Modulo 3 - MAD2 em execucao: `mad2_a7` fechada no contrato de material/questoes/flashcards; 5 questoes antigas de escopo foram reescritas e 7 lacunas reais foram criadas.
- Modulo 3 - MAD2 em execucao: `mad2_a8` fechada no contrato de material/questoes/flashcards; 88 questoes antigas contaminadas foram quarentenadas.
- Modulo 3 iniciado em rodada isolada: `bmf3_a10` fechada no contrato de material/questoes/flashcards; fila ainda marca amarela por `sem Resumo A4`; proxima prioridade BMF3: `bmf3_a13`.
- Modulo 3 em execucao continua: `bmf3_a13` fechada no contrato de material/questoes/flashcards; questoes contaminadas `5268` e `5518` foram quarentenadas.
- Modulo 3 em execucao continua: `bmf3_a16` fechada no contrato de material/questoes/flashcards.
- Modulo 3 em execucao continua: `bmf3_a17` fechada no contrato de material/questoes/flashcards; questao contaminada `401` foi quarentenada.
- Modulo 3 em execucao continua: `bmf3_a18` fechada no contrato de material/questoes/flashcards; questoes contaminadas `239` e `5344` foram quarentenadas.
- Modulo 3 em execucao continua: `bmf3_a19` fechada no contrato de material/questoes/flashcards.
- Modulo 3 em execucao continua: `bmf3_a20` fechada no contrato de material/questoes/flashcards; questoes contaminadas `236` e `5341` foram quarentenadas.
- Modulo 3 em execucao continua: `bmf3_a21` fechada no contrato de material/questoes/flashcards; questoes contaminadas `402` e `5521` foram quarentenadas.
- Modulo 3 em execucao continua: `bmf3_a22` fechada no contrato de material/questoes/flashcards.
- Modulo 3 em execucao continua: `bmf3_a4` fechada no contrato de material/questoes/flashcards; questoes contaminadas `407`, `5314` e `5315` foram quarentenadas.
- Modulo 3 em execucao continua: `bmf3_a7` fechada no contrato de material/questoes/flashcards.
- Modulo 3 em execucao continua: `bmf3_a8` fechada no contrato de material/questoes/flashcards.
- Modulo 3 em execucao continua: `bmf3_a9` fechada no contrato de material/questoes/flashcards; questao `362` foi quarentenada por escopo.
- Modulo 3 em execucao continua: `bmf3_a12` fechada no contrato de material/questoes/flashcards; conjunto antigo inteiro foi quarentenado por contaminacao.
- Modulo 3 em execucao continua: `bmf3_a2` fechada no contrato de material/questoes/flashcards; questoes contaminadas `327` e `5193` foram quarentenadas.
- Modulo 3 em execucao continua: `bmf3_a1` fechada no contrato de material/questoes/flashcards; questoes contaminadas `3130` e `3594` foram quarentenadas.
- Modulo 3 em execucao continua: `bmf3_a11` fechada no contrato de material/questoes/flashcards; questao quebrada `5269` foi quarentenada.
- Modulo 3 em execucao continua: `bmf3_a14` fechada no contrato de material/questoes/flashcards; 93 questoes contaminadas foram quarentenadas.
- Modulo 3 em execucao continua: `bmf3_a15` fechada no contrato de material/questoes/flashcards; questoes existentes validas foram reaproveitadas.
- Modulo 3 em execucao continua: `bmf3_a3` fechada no contrato de material/questoes/flashcards; 94 questoes contaminadas foram quarentenadas.
- Modulo 3 em execucao continua: `bmf3_a5` fechada no contrato de material/questoes/flashcards; questao contaminada `5194` foi quarentenada.
- Modulo 3 em execucao continua: `bmf3_a6` fechada no contrato de material/questoes/flashcards; questoes contaminadas `357`, `5190`, `5200` e `5312` foram quarentenadas.
- Execucao continua do Modulo 1: `data/agent_logs/modulo1_continuous_run.md`.
- Execucao continua do Modulo 2: `data/agent_logs/modulo2_continuous_run.md`; blocos `bmf2_a1`-`bmf2_a16`, `semio2_a1`-`semio2_a9`, `ds_a1`-`ds_a3`, `ind_a1`-`ind_a11` e `bcm1_a1`-`bcm1_a21` prontos; BCM1 fechado em conferencia individual, proxima frente operacional a definir sem assumir MAD1 como pronto.
- Alerta editorial resolvido no bloco atual: aulas prontas passadas foram revistas com `lint_ciclo_basico_v3`; manter a regra anti-tabela antes de continuar novas aulas.
- Retrabalho v3 basico: `data/agent_logs/ciclo_basico_v3_rework.md`.

## Feito

- [x] Auditoria critica inicial do ciclo basico gerada em `data/agent_logs/relatorio_ciclo_basico_2026-05-11.md`.
- [x] Auditor estruturado criado em `scripts/audit_ciclo_basico_report.mjs`.
- [x] Baseline identificado: 263 aulas, 4614 questoes, 2535 flashcards, 278 essenciais suspeitas, 107 espelhos divergentes.
- [x] Plano revisado definido: aula por aula, sem mutacoes em massa, alvo de 12 essenciais.
- [x] Protocolo anti-compactacao criado em `docs/CICLO_BASICO_ANTI_COMPACT.md`.
- [x] Quadro de tarefas criado neste arquivo.
- [x] Aula piloto `bmf1_a17` concluida com 12 essenciais, 12 flashcards, material espelhado e decisao de imagem registrada.
- [x] Validador por aula criado em `scripts/validate_ciclo_basico_aula.mjs`.
- [x] Gerador de fila criado em `scripts/generate_ciclo_basico_queue.mjs`.
- [x] Fila auditavel gerada: 263 aulas, 3 prontas, 260 pendentes.
- [x] Aula `bmf1_a18` concluida com 12 essenciais, 12 flashcards, material espelhado e imagem anatomica pendente para rodada posterior.
- [x] Aula `bmf1_a19` concluida com 12 essenciais, 12 flashcards, material espelhado e imagem anatomica pendente para rodada posterior.
- [x] Aula `bmf1_a20` concluida com 12 essenciais, 12 flashcards, material espelhado e imagem anatomica pendente para rodada posterior.
- [x] Aula `bmf1_a21` concluida com 12 essenciais, 12 flashcards, material espelhado, Mini Quiz funcional e imagem anatomica pendente para rodada posterior.
- [x] Aula `bmf1_a22` concluida com 12 essenciais, 12 flashcards, material espelhado, Mini Quiz funcional e imagem anatomica pendente para rodada posterior.
- [x] Aula `bmf1_a1` concluida com 12 essenciais, 12 flashcards, material espelhado, Mini Quiz funcional e imagem anatomica pendente para rodada posterior.
- [x] Aula `bmf1_a2` concluida com 12 essenciais, 12 flashcards, material espelhado, Mini Quiz funcional e imagem histologica pendente para rodada posterior.
- [x] Aula `bmf1_a2` refinada material-only no padrao v3 basico; questoes/cards preservados; `lint_ciclo_basico_v3` e validador da aula passaram.
- [x] Aula `bmf1_a3` refinada material-only no padrao v3 basico; questoes/cards preservados; `lint_ciclo_basico_v3` e validador da aula passaram.
- [x] Aula `bmf1_a4` refinada material-only no padrao v3 basico; questoes/cards preservados; `lint_ciclo_basico_v3` e validador da aula passaram.
- [x] Aula `bmf1_a5` refinada material-only no padrao v3 basico; questoes/cards preservados; `lint_ciclo_basico_v3` e validador da aula passaram.
- [x] Aula `bmf1_a6` refinada material-only no padrao v3 basico; questoes/cards preservados; `lint_ciclo_basico_v3` e validador da aula passaram.
- [x] Aula `bmf1_a22` refinada material-only no padrao v3 basico; questoes/cards preservados; `lint_ciclo_basico_v3` e validador da aula passaram.
- [x] Aula `bmf1_a17` recebeu ajuste cirurgico v3 basico; Macete MedGradPlus adicionado; questoes/cards preservados.
- [x] Aula `bmf1_a18` recebeu ajuste cirurgico v3 basico; prosa antes da primeira tabela, Macete e pegadinha adicionados; questoes/cards preservados.
- [x] Aula `bmf1_a19` recebeu ajuste cirurgico v3 basico; prosa antes da primeira tabela, Macete e pegadinha adicionados; questoes/cards preservados.
- [x] Aula `bmf1_a20` recebeu ajuste cirurgico v3 basico; prosa antes da primeira tabela, Macete e pegadinha adicionados; questoes/cards preservados.
- [x] Aula `bmf1_a21` recebeu ajuste cirurgico v3 basico; Macete MedGradPlus adicionado; questoes/cards preservados.
- [x] Checagem consolidada passou para `bmf1_a1`-`bmf1_a7` e `bmf1_a17`-`bmf1_a22`: `lint_ciclo_basico_v3` + `validate_ciclo_basico_aula` sem falhas.
- [x] Auditorias globais rodadas apos `bmf1_a8`: `npm run validate:questoes` OK com 5666 questoes consistentes; `npm run audit:questoes` OK estrutural; `audit:essenciais:local` ainda aponta 390 suspeitas globais; `audit_flashcards` ainda aponta dividas globais antigas.
- [x] Aula `bmf1_a8` concluida com material v3 basico, 12 essenciais, 12 flashcards, refs revisado e figura histologica pendente para rodada posterior.
- [x] Aula `bmf1_a9` concluida com material v3 basico, 12 essenciais, 12 flashcards, refs revisado e figura anatomica/biomecanica pendente para rodada posterior.
- [x] Aula `bmf1_a10` concluida com material v3 basico, 12 essenciais, 12 flashcards, refs revisado e figura anatomico-histologica pendente para rodada posterior.
- [x] Aula `bmf1_a11` concluida com material v3 basico, 12 essenciais, 12 flashcards, refs revisado e figura histologica pendente para rodada posterior.
- [x] Aula `bmf1_a12` concluida com material v3 basico, 12 essenciais, 12 flashcards, refs revisado e figura fisiologica pendente para rodada posterior.
- [x] Aula `bmf1_a13` concluida com material v3 basico, 12 essenciais, 12 flashcards, refs revisado e figura anatomica pendente para rodada posterior.
- [x] Aula `bmf1_a14` concluida com material v3 basico, 12 essenciais, 12 flashcards, refs revisado e figura histologica pendente para rodada posterior.
- [x] Aula `bmf1_a15` concluida com material v3 basico, 12 essenciais, 12 flashcards, refs revisado e figura glandular pendente para rodada posterior.
- [x] Aula `bmf1_a16` concluida com material v3 basico, 12 essenciais, 12 flashcards, refs revisado e figura histologica pendente para rodada posterior.
- [x] Checagem consolidada passou para todo BMF1 (`bmf1_a1`-`bmf1_a22`): `lint_ciclo_basico_v3` + `validate_ciclo_basico_aula` sem falhas.
- [x] Materia PMH concluida (`pmh_a1`-`pmh_a14`) com material v3 basico, 12 essenciais, 12 flashcards, refs revisado e figura/decisao visual registrada por aula.
- [x] Checagem consolidada passou para todo PMH: `lint_ciclo_basico_v3` + `validate_ciclo_basico_aula` sem falhas.
- [x] Aula `sus_a3` concluida com material v3 basico, 12 essenciais, 12 flashcards, refs revisado e figura/decisao visual registrada; questoes antigas fora do eixo historico foram quarentenadas.
- [x] Aula `sus_a4` concluida com material v3 basico, 12 essenciais, 12 flashcards, refs revisado e figura/decisao visual registrada; 6 questoes antigas foram reaproveitadas por ID e 24 cards foram reduzidos para 12 centrais.
- [x] Aula `sus_a5` concluida com material v3 basico, 12 essenciais, 12 flashcards, refs revisado e figura/decisao visual registrada; questoes antigas de APS/PNAB foram quarentenadas por pertencerem melhor a `sus_a8`.
- [x] Aula `sus_a6` concluida com material v3 basico, 12 essenciais, 12 flashcards, refs revisado e figura/decisao visual registrada; itens antigos foram reescritos para o eixo RAS/regionalizacao/CIB-CIT/RENASES-RENAME.
- [x] Aula `sus_a7` concluida com material v3 basico, 12 essenciais, 12 flashcards, refs revisado e figura/decisao visual registrada; controle social foi reposicionado como defesa institucional para nao repetir `sus_a4`.
- [x] Aula `sus_a8` concluida com material v3 basico, 12 essenciais, 12 flashcards, refs revisado e figura/decisao visual registrada; questoes APS/PNAB de `sus_a5` foram reativadas no eixo correto e itens RAS/RUE/RAPS foram reescritos.
- [x] Aula `sus_a9` concluida com material v3 basico, 12 essenciais, 12 flashcards, refs revisado e figura/decisao visual registrada; 81 questoes antigas de outras aulas do SUS foram quarentenadas do fluxo ativo da aula.
- [x] Aula `sus_a1` concluida com material v3 basico, 12 essenciais, 12 flashcards, refs revisado e figura/decisao visual registrada; 484 questoes antigas contaminadas por outras disciplinas/aulas foram quarentenadas do fluxo ativo.
- [x] Aula `sus_a2` concluida com material v3 basico, 12 essenciais, 12 flashcards, refs revisado e figura/decisao visual registrada; questoes historicas foram reativadas da quarentena e 5 itens de CF/88 foram retirados do eixo.
- [x] Materia SUS concluida (`sus_a1`-`sus_a9`) com linter v3 basico e validador por aula passando em todas; SUS ainda tem 9 suspeitas heuristicas de overlap revisadas manualmente e consideradas aceitaveis porque estao sustentadas nos materiais.
- [x] Aula `semio1_a1` concluida com material v3 basico individualizado, 12 essenciais, 12 flashcards, Mini Quiz funcional, refs revisado e dois slots visuais registrados (`SEMIO1-A1-F01` e `SEMIO1-A1-SPOT01`).
- [x] Aula `semio1_a2` concluida com material v3 basico individualizado, 12 essenciais, 12 flashcards, Mini Quiz funcional, refs revisado e figura/fluxograma de anamnese registrado; 6 questoes antigas contaminadas ou redundantes foram quarentenadas.
- [x] Aula `semio1_a3` concluida com material v3 basico visual, 12 essenciais, 12 flashcards, Mini Quiz funcional, refs revisado e dois slots visuais registrados (`SEMIO1-A3-F01`, `SEMIO1-A3-SPOT01`); 11 questoes antigas contaminadas ou redundantes foram quarentenadas.
- [x] Aula `semio1_a4` concluida com material v3 basico individualizado, 12 essenciais, 12 flashcards, Mini Quiz funcional, refs revisado e dois slots visuais/anatomicos registrados (`SEMIO1-A4-F01`, `SEMIO1-A4-SPOT01`); 29 questoes antigas contaminadas ou redundantes foram quarentenadas.
- [x] Aula `semio1_a5` concluida com material v3 basico individualizado, 12 essenciais, 12 flashcards, Mini Quiz funcional, refs revisado e dois slots visuais/testes registrados (`SEMIO1-A5-F01`, `SEMIO1-A5-SPOT01`); 24 questoes antigas contaminadas ou redundantes foram quarentenadas.
- [x] Aula `semio1_a6` concluida com material v3 basico sindromico, 12 essenciais, 12 flashcards, Mini Quiz funcional, refs revisado e dois slots visuais/red flags registrados (`SEMIO1-A6-F01`, `SEMIO1-A6-SPOT01`); 11 questoes antigas contaminadas ou redundantes foram quarentenadas.
- [x] Aula `semio1_a7` concluida com material v3 basico pratico/OSCE, 12 essenciais, 12 flashcards, Mini Quiz funcional, refs revisado e dois slots visuais de estacao registrados (`SEMIO1-A7-F01`, `SEMIO1-A7-F02`); 10 questoes antigas contaminadas ou redundantes foram quarentenadas.
- [x] Aula `semio1_a8` concluida com material v3 basico de ambulatorio supervisionado, 12 essenciais, 12 flashcards, Mini Quiz funcional, refs revisado e dois slots visuais/fluxo registrados (`SEMIO1-A8-F01`, `SEMIO1-A8-F02`).
- [x] Aula `semio1_a9` concluida com material v3 basico de reuniao clinica, 12 essenciais, 12 flashcards, Mini Quiz funcional, refs revisado e dois slots visuais/template registrados (`SEMIO1-A9-F01`, `SEMIO1-A9-F02`); mojibake removido e 4 explicacoes gerais reforcadas.
- [x] Materia Semiologia1 concluida (`semio1_a1`-`semio1_a9`) com linter v3 basico e validador por aula passando em todas; cada aula tem 12 essenciais, 12 flashcards e decisao visual registrada.
- [x] Reparo de fechamento do Modulo 1: `bmf1_a17`-`bmf1_a22` estavam com 0 flashcards no JSON atual; foram corrigidas aula por aula e passaram novamente no validador.
- [x] Fechamento premium do Modulo 1: explicacoes dos flashcards `semio1_a2`-`semio1_a9` preenchidas sem trocar selecao; cards `7002184` e `7002206` reescritos; PMH individualizado em 14 mapas, 14 pontes e 56 explicacoes de Mini Quiz; 28 essenciais triadas em `data/agent_logs/modulo1_essenciais_triage_2026-05-12.json`.
- [x] Aula `bmf1_a3` concluida com 12 essenciais, 12 flashcards, material espelhado, Mini Quiz funcional e imagem anatomica pendente para rodada posterior.
- [x] Aula `bmf1_a4` concluida com 12 essenciais, 12 flashcards, material espelhado, Mini Quiz funcional e imagem histologica pendente para rodada posterior.
- [x] Aula `bmf1_a5` concluida com 12 essenciais, 12 flashcards, material espelhado, Mini Quiz funcional e imagem de osteon preservada.
- [x] Aula `bmf1_a6` concluida com 12 essenciais, 12 flashcards, material espelhado, Mini Quiz funcional e imagem anatomica pendente para rodada posterior.
- [x] Corrigido no app o falso "Em breve" da Fixacao Rapida quando o Mini Quiz existe no formato `1. **pergunta**`.
- [x] Ajustado app para abrir automaticamente `Pre-Prova` quando a secao existe no material.
- [x] Identificada causa real da Fixacao Rapida vazia: Mini Quiz precisa seguir o padrao do Modulo 5 com 4 alternativas, uma marcada `- [x]` e explicacao.
- [x] Validador por aula endurecido para barrar Mini Quiz sem 4 alternativas, sem correta unica ou sem explicacao.
- [x] Contrato de execucao continua do Modulo 1 criado em `data/agent_logs/modulo1_continuous_run.md`.
- [x] Falha editorial identificada: excesso de tabelas/listas deixou aulas com cara de planilha; protocolo anti-tabela incorporado.
- [x] `bmf1_a7` aprovada como regua v3 basica adaptada.
- [x] `bmf1_a1` refinada material-only no padrao v3 basico; questoes/cards preservados.

## A fazer - infraestrutura segura

- [x] Criar fila `data/agent_logs/ciclo_basico_aula_queue.json` com prioridade por aula, sem alterar conteudo.
- [x] Criar validador por aula para checar: 12 essenciais, 12 flashcards, espelho, mojibake, schema de questoes, imagem/decisao.
- [x] Criar log por aula em `data/agent_logs/ciclo_basico_aulas/`.
- [x] Ajustar `scripts/audit_ciclo_basico_report.mjs` para usar meta de 12 essenciais, sem alterar conteudo.
- [ ] Definir taxonomia inicial de assuntos por aula em `data/taxonomia_ciclo_basico.json`.
- [ ] Atualizar `COMO-ATUALIZAR.md` depois que o fluxo estiver testado em 1 aula piloto.

## Fluxo continuo aprovado

1. Rodar/atualizar auditoria global sem alterar conteudo.
2. Regenerar `data/agent_logs/ciclo_basico_aula_queue.json`.
3. Selecionar uma aula, preferindo BMF e sequencia pedagogica quando a diferenca de prioridade for pequena.
4. Se o material estiver verde, congelar o `.md`; nao refatorar aula boa.
5. Antes de aprovar material, aplicar a regra anti-tabela: prosa guiada primeiro, tabela so para comparacao real.
6. Executar Gates 0-6 do protocolo anti-compactacao.
7. Nao finalizar a aula sem `node scripts/validate_ciclo_basico_aula.mjs <aula_id>`.
8. Registrar a aula em `docs/CICLO_BASICO_TAREFAS.md` e em `data/agent_logs/ciclo_basico_aulas/<aula_id>.md`.
9. Regerar filas e partir para a proxima aula.

## Rodada posterior de imagens

- BMF: presumir que toda aula precisa de imagem anatomica, histologica ou fisiologica util.
- Durante a aula: registrar a necessidade, `Figura-ID`, momento de insercao, descricao visual e busca Commons/atlas.
- Nao bloquear questoes/flashcards esperando imagem final.
- Depois do passe de conteudo: executar uma rodada dedicada apenas para preencher imagens, creditos, licencas e thumbnails.
- Para outras materias: julgar aula por aula; imagem so entra se melhorar entendimento, nao para decorar.

## A fazer - primeira onda

Prioridade sugerida: escolher uma aula vermelha de alto impacto, concluir do inicio ao fim e usar como piloto do novo protocolo.

- [x] Aula piloto 1: selecionar primeira aula pela fila.
- [x] Rodar Gate 0 e Gate 1 da aula piloto.
- [x] Corrigir/refatorar material somente se necessario.
- [x] Revisar item por item as questoes existentes.
- [x] Fechar exatamente 12 essenciais boas.
- [x] Revisar/corrigir flashcards da aula.
- [x] Decidir imagem e registrar.
- [x] Rodar validacoes.
- [x] Registrar entrada completa da aula neste arquivo.

## A fazer - por modulo

### Modulo 1

- [x] BMF1 aula por aula.
- [x] PMH aula por aula.
- [x] Antes de fechar o Modulo 1: reparar explicacoes vazias de flashcards em `semio1_a2`-`semio1_a9`, sem trocar a selecao dos 12 cards.
- [x] Antes de fechar o Modulo 1: fazer acabamento fino de PMH, individualizando `Mapa mental da aula` e `Ponte com a Clinica` nas 14 aulas e revisando explicacoes genericas do Mini Quiz.
- [x] Antes de fechar o Modulo 1: revisar semanticamente as 28 essenciais sinalizadas pelo relatorio atual (`bmf1` 11, `sus` 9, `semiologia1` 8), sem tratar heuristica como erro automatico.
- [x] Semiologia1 aula por aula.
- [x] SUS aula por aula.

### Modulo 2

- [ ] BCM1 aula por aula.
- [x] BMF2 aula por aula.
- [ ] DS aula por aula.
- [ ] Indicadores aula por aula.
- [x] MAD1 aula por aula.
- [x] Semiologia2 aula por aula.

### Modulo 3

- [ ] BMF3 aula por aula.
- [x] Fisiopato3 aula por aula. `fp3_a1`-`fp3_a15` fechadas no contrato v3 basico; 180/180 questoes essenciais, 180/180 flashcards, slots de imagem registrados e validadores locais OK aula por aula.
- [ ] MAD2 aula por aula.
- [ ] Saude do Trabalhador aula por aula.
- [ ] Semiologia3 aula por aula.

### Modulo 4

- [x] Bioestatistica aula por aula. `bioe_a1`-`bioe_a12` fechadas no contrato v3 basico; 144/144 questoes essenciais, 144/144 flashcards, esquemas didaticos registrados e validadores locais OK aula por aula.
- [x] BMF4 aula por aula.
- [x] Fisiopato/Farmaco aula por aula.
- [x] Semiologia4 aula por aula.

## Template de registro por aula

Copiar e preencher apos cada aula trabalhada.

```markdown
### <aula_id> - <tema>

- Status:
- Classificacao inicial:
- Material:
- Questoes essenciais:
- Flashcards:
- Imagem:
- Itens reaproveitados:
- Itens reescritos:
- Itens arquivados:
- Validacoes rodadas:
- Proxima acao concreta:
```

## Log de aulas

### bmf3_a12 - Fisiologia Renal - Filtracao Glomerular e TFG

- Status: pronta no contrato de aula do Modulo 3; fila pode seguir amarela apenas por `sem Resumo A4`.
- Classificacao inicial: vermelha.
- Material: refatorado e espelhado em `data/materiais/bmf3/bmf3_a12.md` e `materiais/modulo3/bmf3/bmf3_a12.md`; 200 linhas; 3 tabelas; Mini Quiz funcional; Pre-Prova; Pontos-Chave; Macete MedGradPlus; zero mojibake.
- Questoes essenciais: 12/12 aprovadas; IDs novos `11104-11115`; gabarito 3A/3B/3C/3D; 4 casos clinicos.
- Flashcards: 12/12 aprovados; IDs novos `16156-16167`; todos com cloze unico, categoria fechada, origem `material` e tags validas.
- Imagem: pendente_curadoria; `BMF3-A12-F01` registrada como esquema renal funcional de barreira glomerular, arteriolas e forcas de Starling.
- Itens reaproveitados: nenhum; o conjunto ativo estava semanticamente contaminado.
- Itens reescritos: material inteiro, porque havia espelho divergente, mojibake, excesso de tabelas, ausencia de flashcards e refs placeholder.
- Itens criados: questoes `11104-11115`; flashcards `16156-16167`; refs revisado em `data/refs/bmf3_a12.refs.json`; log `data/agent_logs/ciclo_basico_aulas/bmf3_a12.md`; script local `scripts/apply_bmf3_a12_pass.mjs`.
- Itens arquivados: questoes `237`, `238`, `263`, `310`, `369`, `374`, `5342` e `5343` removidas do fluxo ativo e registradas em `data/agent_logs/ciclo_basico_quarantine_questions.json` por contaminacao semantica.
- Validacoes rodadas: `node scripts/lint_ciclo_basico_v3.mjs bmf3_a12` passou; `node scripts/validate_ciclo_basico_aula.mjs bmf3_a12` passou.
- Proxima acao concreta: regenerar fila e continuar na proxima aula BMF3 vermelha de maior prioridade.

### bmf3_a9 - Fisiologia da Absorcao de Nutrientes

- Status: pronta no contrato de aula do Modulo 3; fila pode seguir amarela apenas por `sem Resumo A4`.
- Classificacao inicial: vermelha.
- Material: refatorado e espelhado em `data/materiais/bmf3/bmf3_a9.md` e `materiais/modulo3/bmf3/bmf3_a9.md`; 200 linhas; 2 tabelas; Mini Quiz funcional; Pre-Prova; Pontos-Chave; Macete MedGradPlus; zero mojibake.
- Questoes essenciais: 12/12 aprovadas; IDs reaproveitados `6233-6236`; IDs novos `11096-11103`; gabarito 3A/3B/3C/3D; 4 casos clinicos.
- Flashcards: 12/12 aprovados; IDs novos `16144-16155`; todos com cloze unico, categoria fechada, origem `material` e tags validas.
- Imagem: pendente_curadoria; `BMF3-A9-F01` registrada como mapa de absorcao por segmento intestinal.
- Itens reaproveitados: questoes `6233-6236`, reescritas para categoria, `assunto_slug`, explicacoes no padrao e alinhamento semantico.
- Itens reescritos: material inteiro, porque havia espelho divergente, mojibake, excesso de tabelas, ausencia de flashcards e refs placeholder.
- Itens criados: questoes `11096-11103`; flashcards `16144-16155`; refs revisado em `data/refs/bmf3_a9.refs.json`; log `data/agent_logs/ciclo_basico_aulas/bmf3_a9.md`; script local `scripts/apply_bmf3_a9_pass.mjs`.
- Itens arquivados: questao `362` removida do fluxo ativo e registrada em `data/agent_logs/ciclo_basico_quarantine_questions.json` por escopo anatomico fora de absorcao.
- Validacoes rodadas: `node scripts/lint_ciclo_basico_v3.mjs bmf3_a9` passou; `node scripts/validate_ciclo_basico_aula.mjs bmf3_a9` passou.
- Proxima acao concreta: regenerar fila e continuar na proxima aula BMF3 vermelha de maior prioridade.

### bmf3_a8 - Fisiologia das Secrecoes Digestivas

- Status: pronta no contrato de aula do Modulo 3; fila pode seguir amarela apenas por `sem Resumo A4`.
- Classificacao inicial: vermelha.
- Material: refatorado e espelhado em `data/materiais/bmf3/bmf3_a8.md` e `materiais/modulo3/bmf3/bmf3_a8.md`; 200 linhas; 3 tabelas; Mini Quiz funcional; Pre-Prova; Pontos-Chave; Macete MedGradPlus; zero mojibake.
- Questoes essenciais: 12/12 aprovadas; IDs reaproveitados `6228-6232`; IDs novos `11089-11095`; gabarito 3A/3B/3C/3D; 4 casos clinicos.
- Flashcards: 12/12 aprovados; IDs novos `16132-16143`; todos com cloze unico, categoria fechada, origem `material` e tags validas.
- Imagem: pendente_curadoria; `BMF3-A8-F01` registrada como fluxograma de secrecoes salivares, gastricas, pancreaticas e biliares.
- Itens reaproveitados: questoes `6228-6232`, reescritas para categoria, `assunto_slug`, explicacoes no padrao e alinhamento semantico.
- Itens reescritos: material inteiro, porque havia espelho divergente, mojibake, excesso de tabelas, ausencia de flashcards e refs placeholder.
- Itens criados: questoes `11089-11095`; flashcards `16132-16143`; refs revisado em `data/refs/bmf3_a8.refs.json`; log `data/agent_logs/ciclo_basico_aulas/bmf3_a8.md`; script local `scripts/apply_bmf3_a8_pass.mjs`.
- Itens arquivados: nenhum.
- Validacoes rodadas: `node scripts/lint_ciclo_basico_v3.mjs bmf3_a8` passou; `node scripts/validate_ciclo_basico_aula.mjs bmf3_a8` passou.
- Proxima acao concreta: regenerar fila e continuar na proxima aula BMF3 vermelha de maior prioridade.

### bmf3_a7 - Fisiologia da Motilidade e Regulacao Hormonal Digestiva

- Status: pronta no contrato de aula do Modulo 3; fila pode seguir amarela apenas por `sem Resumo A4`.
- Classificacao inicial: vermelha.
- Material: refatorado e espelhado em `data/materiais/bmf3/bmf3_a7.md` e `materiais/modulo3/bmf3/bmf3_a7.md`; 200 linhas; 3 tabelas; Mini Quiz funcional; Pre-Prova; Pontos-Chave; Macete MedGradPlus; zero mojibake.
- Questoes essenciais: 12/12 aprovadas; IDs reaproveitados `6223-6227`; IDs novos `11082-11088`; gabarito 3A/3B/3C/3D; 4 casos clinicos.
- Flashcards: 12/12 aprovados; IDs novos `16120-16131`; todos com cloze unico, categoria fechada, origem `material` e tags validas.
- Imagem: pendente_curadoria; `BMF3-A7-F01` registrada como infografico de motilidade digestiva e hormonios gastrina, secretina, CCK, GIP e motilina.
- Itens reaproveitados: questoes `6223-6227`, reescritas para categoria, `assunto_slug`, explicacoes no padrao e alinhamento semantico; a questao `6227` foi corrigida para GIP como incretina de celulas K, sem confundir com agonista GLP-1.
- Itens reescritos: material inteiro, porque havia espelho divergente, mojibake, excesso de tabelas, ausencia de flashcards e refs placeholder.
- Itens criados: questoes `11082-11088`; flashcards `16120-16131`; refs revisado em `data/refs/bmf3_a7.refs.json`; log `data/agent_logs/ciclo_basico_aulas/bmf3_a7.md`; script local `scripts/apply_bmf3_a7_pass.mjs`.
- Itens arquivados: nenhum.
- Validacoes rodadas: `node scripts/lint_ciclo_basico_v3.mjs bmf3_a7` passou; `node scripts/validate_ciclo_basico_aula.mjs bmf3_a7` passou.
- Proxima acao concreta: regenerar fila e continuar na proxima aula BMF3 vermelha de maior prioridade.

### bmf3_a4 - Histologia do Esofago e Estomago

- Status: pronta no contrato de aula do Modulo 3; fila pode seguir amarela apenas por `sem Resumo A4`.
- Classificacao inicial: vermelha.
- Material: refatorado e espelhado em `data/materiais/bmf3/bmf3_a4.md` e `materiais/modulo3/bmf3/bmf3_a4.md`; 188 linhas; 3 tabelas; Mini Quiz funcional; Pre-Prova; Pontos-Chave; Macete MedGradPlus; zero mojibake.
- Questoes essenciais: 12/12 aprovadas; IDs reaproveitados `5520` e `6217`; IDs novos `11072-11081`; gabarito 3A/3B/3C/3D; 4 casos clinicos.
- Flashcards: 12/12 aprovados; IDs novos `16108-16119`; todos com cloze unico, categoria fechada, origem `material` e tags validas.
- Imagem: pendente_curadoria; `BMF3-A4-F01` registrada como infografico histologico de esofago, JEG, Barrett e glandula gastrica.
- Itens reaproveitados: questoes `5520` e `6217`, reescritas para categoria, `assunto_slug`, explicacoes no padrao e alinhamento semantico.
- Itens reescritos: material inteiro, porque havia espelho divergente, mojibake, excesso de tabelas, ausencia de flashcards e refs placeholder.
- Itens criados: questoes `11072-11081`; flashcards `16108-16119`; refs revisado em `data/refs/bmf3_a4.refs.json`; log `data/agent_logs/ciclo_basico_aulas/bmf3_a4.md`; script local `scripts/apply_bmf3_a4_pass.mjs`.
- Itens arquivados: questoes `407`, `5314` e `5315` removidas do fluxo ativo e registradas em `data/agent_logs/ciclo_basico_quarantine_questions.json` por contaminacao semantica ou baixa qualidade.
- Validacoes rodadas: `node scripts/lint_ciclo_basico_v3.mjs bmf3_a4` passou; `node scripts/validate_ciclo_basico_aula.mjs bmf3_a4` passou.
- Proxima acao concreta: regenerar fila e continuar na proxima aula BMF3 vermelha de maior prioridade.

### bmf3_a22 - Parto, Puerperio e Lactacao

- Status: pronta no contrato de aula do Modulo 3; fila pode seguir amarela apenas por `sem Resumo A4`.
- Classificacao inicial: vermelha.
- Material: refatorado e espelhado em `data/materiais/bmf3/bmf3_a22.md` e `materiais/modulo3/bmf3/bmf3_a22.md`; 200 linhas; 3 tabelas; Mini Quiz funcional; Pre-Prova; Pontos-Chave; Macete MedGradPlus; zero mojibake.
- Questoes essenciais: 12/12 aprovadas; IDs reaproveitados `6136-6140`; IDs novos `11065-11071`; gabarito 3A/3B/3C/3D; 4 casos clinicos.
- Flashcards: 12/12 aprovados; IDs novos `16096-16107`; todos com cloze unico, categoria fechada, origem `material` e tags validas.
- Imagem: pendente_curadoria; `BMF3-A22-F01` registrada como infografico neuroendocrino de parto, puerperio e lactacao.
- Itens reaproveitados: questoes `6136-6140`, reescritas para categoria, `assunto_slug`, explicacoes no padrao e alinhamento semantico.
- Itens reescritos: material inteiro, porque havia espelho divergente, mojibake, excesso de tabelas, ausencia de flashcards e refs placeholder.
- Itens criados: questoes `11065-11071`; flashcards `16096-16107`; refs revisado em `data/refs/bmf3_a22.refs.json`; log `data/agent_logs/ciclo_basico_aulas/bmf3_a22.md`; script local `scripts/apply_bmf3_a22_pass.mjs`.
- Itens arquivados: nenhum.
- Validacoes rodadas: `node scripts/lint_ciclo_basico_v3.mjs bmf3_a22` passou; `node scripts/validate_ciclo_basico_aula.mjs bmf3_a22` passou.
- Proxima acao concreta: regenerar fila e continuar na proxima aula BMF3 vermelha de maior prioridade.

### bmf3_a21 - Fertilizacao, Embriologia Inicial e Implantacao

- Status: pronta no contrato de aula do Modulo 3; fila pode seguir amarela apenas por `sem Resumo A4`.
- Classificacao inicial: vermelha.
- Material: refatorado e espelhado em `data/materiais/bmf3/bmf3_a21.md` e `materiais/modulo3/bmf3/bmf3_a21.md`; 200 linhas; 3 tabelas; Mini Quiz funcional; Pre-Prova; Pontos-Chave; Macete MedGradPlus; zero mojibake.
- Questoes essenciais: 12/12 aprovadas; IDs reaproveitados `6214-6216`; IDs novos `11056-11064`; gabarito 3A/3B/3C/3D; 4 casos clinicos.
- Flashcards: 12/12 aprovados; IDs novos `16084-16095`; todos com cloze unico, categoria fechada, origem `material` e tags validas.
- Imagem: pendente_curadoria; `BMF3-A21-F01` registrada como linha do tempo de fertilizacao, clivagem, morula, blastocisto, implantacao e trofoblasto.
- Itens reaproveitados: questoes `6214-6216`, reescritas para categoria, `assunto_slug`, explicacoes no padrao e alinhamento semantico.
- Itens reescritos: material inteiro, porque havia espelho divergente, mojibake, excesso de tabelas, ausencia de flashcards e refs placeholder.
- Itens criados: questoes `11056-11064`; flashcards `16084-16095`; refs revisado em `data/refs/bmf3_a21.refs.json`; log `data/agent_logs/ciclo_basico_aulas/bmf3_a21.md`; script local `scripts/apply_bmf3_a21_pass.mjs`.
- Itens arquivados: questoes `402` e `5521` removidas do fluxo ativo e registradas em `data/agent_logs/ciclo_basico_quarantine_questions.json` por contaminacao semantica.
- Validacoes rodadas: `node scripts/lint_ciclo_basico_v3.mjs bmf3_a21` passou; `node scripts/validate_ciclo_basico_aula.mjs bmf3_a21` passou.
- Proxima acao concreta: regenerar fila e continuar na proxima aula BMF3 vermelha de maior prioridade.

### bmf3_a20 - Ciclo Menstrual e Hormonios Sexuais

- Status: pronta no contrato de aula do Modulo 3; fila pode seguir amarela apenas por `sem Resumo A4`.
- Classificacao inicial: vermelha.
- Material: refatorado e espelhado em `data/materiais/bmf3/bmf3_a20.md` e `materiais/modulo3/bmf3/bmf3_a20.md`; 194 linhas; 3 tabelas; Mini Quiz funcional; Pre-Prova; Pontos-Chave; Macete MedGradPlus; zero mojibake.
- Questoes essenciais: 12/12 aprovadas; IDs reaproveitados `6211-6213`; IDs novos `11047-11055`; gabarito 3A/3B/3C/3D; 4 casos clinicos.
- Flashcards: 12/12 aprovados; IDs novos `16072-16083`; todos com cloze unico, categoria fechada, origem `material` e tags validas.
- Imagem: pendente_curadoria; `BMF3-A20-F01` registrada como grafico temporal de FSH, LH, estradiol, progesterona, ovulacao e fases endometriais.
- Itens reaproveitados: questoes `6211-6213`, reescritas para categoria, `assunto_slug`, explicacoes no padrao e alinhamento semantico.
- Itens reescritos: material inteiro, porque havia espelho divergente, mojibake, excesso de tabelas, ausencia de flashcards e refs placeholder.
- Itens criados: questoes `11047-11055`; flashcards `16072-16083`; refs revisado em `data/refs/bmf3_a20.refs.json`; log `data/agent_logs/ciclo_basico_aulas/bmf3_a20.md`; script local `scripts/apply_bmf3_a20_pass.mjs`.
- Itens arquivados: questoes `236` e `5341` removidas do fluxo ativo e registradas em `data/agent_logs/ciclo_basico_quarantine_questions.json` por contaminacao semantica.
- Validacoes rodadas: `node scripts/lint_ciclo_basico_v3.mjs bmf3_a20` passou; `node scripts/validate_ciclo_basico_aula.mjs bmf3_a20` passou.
- Proxima acao concreta: regenerar fila e continuar na proxima aula BMF3 vermelha de maior prioridade.

### bmf3_a19 - Gametogenese - Espermatogenese e Ovogenese

- Status: pronta no contrato de aula do Modulo 3; fila pode seguir amarela apenas por `sem Resumo A4`.
- Classificacao inicial: vermelha.
- Material: refatorado e espelhado em `data/materiais/bmf3/bmf3_a19.md` e `materiais/modulo3/bmf3/bmf3_a19.md`; 192 linhas; 4 tabelas; Mini Quiz funcional; Pre-Prova; Pontos-Chave; Macete MedGradPlus; zero mojibake.
- Questoes essenciais: 12/12 aprovadas; IDs reaproveitados `6131-6135`; IDs novos `11040-11046`; gabarito 3A/3B/3C/3D; 4 casos clinicos.
- Flashcards: 12/12 aprovados; IDs novos `16060-16071`; todos com cloze unico, categoria fechada, origem `material` e tags validas.
- Imagem: pendente_curadoria; `BMF3-A19-F01` registrada como fluxograma comparativo de espermatogenese e ovogenese.
- Itens reaproveitados: questoes `6131-6135`, reescritas para categoria, `assunto_slug`, explicacoes no padrao e alinhamento semantico.
- Itens reescritos: material inteiro, porque havia espelho divergente, mojibake, ausencia de flashcards e refs placeholder.
- Itens criados: questoes `11040-11046`; flashcards `16060-16071`; refs revisado em `data/refs/bmf3_a19.refs.json`; log `data/agent_logs/ciclo_basico_aulas/bmf3_a19.md`; script local `scripts/apply_bmf3_a19_pass.mjs`.
- Itens arquivados: nenhum.
- Validacoes rodadas: `node scripts/lint_ciclo_basico_v3.mjs bmf3_a19` passou; `node scripts/validate_ciclo_basico_aula.mjs bmf3_a19` passou.
- Proxima acao concreta: regenerar fila e continuar na proxima aula BMF3 vermelha de maior prioridade.

### bmf3_a18 - Anatomia e Histologia do Sistema Reprodutor Feminino

- Status: pronta no contrato de aula do Modulo 3; fila pode seguir amarela apenas por `sem Resumo A4`.
- Classificacao inicial: vermelha.
- Material: refatorado e espelhado em `data/materiais/bmf3/bmf3_a18.md` e `materiais/modulo3/bmf3/bmf3_a18.md`; 200 linhas; 3 tabelas; Mini Quiz funcional; Pre-Prova; Pontos-Chave; Macete MedGradPlus; zero mojibake.
- Questoes essenciais: 12/12 aprovadas; IDs reaproveitados `6205-6207`; IDs novos `11031-11039`; gabarito 3A/3B/3C/3D; 4 casos clinicos.
- Flashcards: 12/12 aprovados; IDs novos `16048-16059`; todos com cloze unico, categoria fechada, origem `material` e tags validas.
- Imagem: pendente_curadoria; `BMF3-A18-F01` registrada como infografico de ovario, tuba, utero, endometrio e JEC.
- Itens reaproveitados: questoes `6205-6207`, reescritas para categoria, `assunto_slug`, explicacoes no padrao e alinhamento semantico.
- Itens reescritos: material inteiro, porque havia espelho divergente, mojibake, ausencia de Mini Quiz funcional, ausencia de flashcards e refs placeholder.
- Itens criados: questoes `11031-11039`; flashcards `16048-16059`; refs revisado em `data/refs/bmf3_a18.refs.json`; log `data/agent_logs/ciclo_basico_aulas/bmf3_a18.md`; script local `scripts/apply_bmf3_a18_pass.mjs`.
- Itens arquivados: questoes `239` e `5344` removidas do fluxo ativo e registradas em `data/agent_logs/ciclo_basico_quarantine_questions.json` por contaminacao semantica.
- Validacoes rodadas: `node scripts/lint_ciclo_basico_v3.mjs bmf3_a18` passou; `node scripts/validate_ciclo_basico_aula.mjs bmf3_a18` passou.
- Proxima acao concreta: regenerar fila e continuar na proxima aula BMF3 vermelha de maior prioridade.

### bmf3_a17 - Anatomia e Histologia do Sistema Reprodutor Masculino

- Status: pronta no contrato de aula do Modulo 3; fila pode seguir amarela apenas por `sem Resumo A4`.
- Classificacao inicial: vermelha.
- Material: refatorado e espelhado em `data/materiais/bmf3/bmf3_a17.md` e `materiais/modulo3/bmf3/bmf3_a17.md`; 197 linhas; 4 tabelas; Mini Quiz funcional; Pre-Prova; Pontos-Chave; Macete MedGradPlus; zero mojibake.
- Questoes essenciais: 12/12 aprovadas; IDs reaproveitados `6201-6204`; IDs novos `11023-11030`; gabarito 3A/3B/3C/3D; 4 casos clinicos.
- Flashcards: 12/12 aprovados; IDs novos `16036-16047`; todos com cloze unico, categoria fechada, origem `material` e tags validas.
- Imagem: pendente_curadoria; `BMF3-A17-F01` registrada como infografico do trajeto espermatico, histologia testicular, Sertoli/Leydig e zonas prostaticas.
- Itens reaproveitados: questoes `6201-6204`, reescritas para categoria, `assunto_slug`, explicacoes no padrao e alinhamento semantico.
- Itens reescritos: material inteiro, porque havia espelho divergente, mojibake, ausencia de Mini Quiz, ausencia de flashcards e refs placeholder.
- Itens criados: questoes `11023-11030`; flashcards `16036-16047`; refs revisado em `data/refs/bmf3_a17.refs.json`; log `data/agent_logs/ciclo_basico_aulas/bmf3_a17.md`; script local `scripts/apply_bmf3_a17_pass.mjs`.
- Itens arquivados: questao `401` removida do fluxo ativo e registrada em `data/agent_logs/ciclo_basico_quarantine_questions.json` por contaminacao hepatobiliar-pancreatica.
- Validacoes rodadas: `node scripts/lint_ciclo_basico_v3.mjs bmf3_a17` passou; `node scripts/validate_ciclo_basico_aula.mjs bmf3_a17` passou.
- Proxima acao concreta: regenerar fila e continuar na proxima aula BMF3 vermelha de maior prioridade.

### bmf3_a16 - Glandula Suprarrenal - Fisiologia do Cortex e da Medula

- Status: pronta no contrato de aula do Modulo 3; fila pode seguir amarela apenas por `sem Resumo A4`.
- Classificacao inicial: vermelha.
- Material: refatorado e espelhado em `data/materiais/bmf3/bmf3_a16.md` e `materiais/modulo3/bmf3/bmf3_a16.md`; 199 linhas; 4 tabelas; Mini Quiz funcional; Pre-Prova; Pontos-Chave; Macete MedGradPlus; zero mojibake.
- Questoes essenciais: 12/12 aprovadas; IDs reaproveitados `6126-6130`; IDs novos `11016-11022`; gabarito 3A/3B/3C/3D; 4 casos clinicos.
- Flashcards: 12/12 aprovados; IDs novos `16024-16035`; todos com cloze unico, categoria fechada, origem `material` e tags validas.
- Imagem: pendente_curadoria; `BMF3-A16-F01` registrada como infografico das zonas suprarrenais, eixo HPA, RAAS e estimulo simpatico.
- Itens reaproveitados: questoes `6126-6130`, reescritas para categoria, `assunto_slug`, explicacoes no padrao e alinhamento semantico.
- Itens reescritos: material inteiro, porque havia espelho divergente, mojibake, ausencia de Mini Quiz e refs placeholder.
- Itens criados: questoes `11016-11022`; flashcards `16024-16035`; refs revisado em `data/refs/bmf3_a16.refs.json`; log `data/agent_logs/ciclo_basico_aulas/bmf3_a16.md`; script local `scripts/apply_bmf3_a16_pass.mjs`.
- Itens arquivados: nenhum.
- Validacoes rodadas: `node scripts/lint_ciclo_basico_v3.mjs bmf3_a16` passou; `node scripts/validate_ciclo_basico_aula.mjs bmf3_a16` passou.
- Proxima acao concreta: regenerar fila e continuar na proxima aula BMF3 vermelha de maior prioridade.

### bmf3_a13 - Fisiologia Renal - Reabsorcao, Secrecao e Equilibrio Hidroeletrolitico

- Status: pronta no contrato de aula do Modulo 3; fila pode seguir amarela apenas por `sem Resumo A4`.
- Classificacao inicial: vermelha.
- Material: refatorado e espelhado em `data/materiais/bmf3/bmf3_a13.md` e `materiais/modulo3/bmf3/bmf3_a13.md`; 199 linhas; 3 tabelas; Mini Quiz funcional; Pre-Prova; Pontos-Chave; Macete MedGradPlus; zero mojibake.
- Questoes essenciais: 12/12 aprovadas; IDs reaproveitados `6198-6200`; IDs novos `11007-11015`; gabarito 3A/3B/3C/3D; 4 casos clinicos.
- Flashcards: 12/12 aprovados; IDs novos `16012-16023`; todos com cloze unico, categoria fechada, origem `material` e tags validas.
- Imagem: pendente_curadoria; `BMF3-A13-F01` registrada como infografico de nefron com SGLT2, NKCC2, NCC, ENaC, AQP2, ADH e aldosterona.
- Itens reaproveitados: questoes `6198-6200`, reescritas para categoria, `assunto_slug`, explicacoes no padrao e alinhamento semanticamente mais limpo.
- Itens reescritos: material inteiro, porque havia espelho divergente, mojibake, ausencia de Mini Quiz e refs placeholder.
- Itens criados: questoes `11007-11015`; flashcards `16012-16023`; refs revisado em `data/refs/bmf3_a13.refs.json`; log `data/agent_logs/ciclo_basico_aulas/bmf3_a13.md`; script local `scripts/apply_bmf3_a13_pass.mjs`.
- Itens arquivados: questoes `5268` e `5518` removidas do fluxo ativo e registradas em `data/agent_logs/ciclo_basico_quarantine_questions.json` por contaminacao semantica.
- Validacoes rodadas: `node scripts/lint_ciclo_basico_v3.mjs bmf3_a13` passou; `node scripts/validate_ciclo_basico_aula.mjs bmf3_a13` passou.
- Proxima acao concreta: regenerar fila e continuar na proxima aula BMF3 vermelha de maior prioridade.

### bmf3_a10 - Anatomia dos Rins, Ureteres, Bexiga e Uretra

- Status: pronta no contrato de aula do Modulo 3; fila segue amarela apenas por `sem Resumo A4`.
- Classificacao inicial: vermelha.
- Material: refatorado e espelhado em `data/materiais/bmf3/bmf3_a10.md` e `materiais/modulo3/bmf3/bmf3_a10.md`; 199 linhas; 3 tabelas; Mini Quiz funcional; Pre-Prova; Pontos-Chave; Macete MedGradPlus; zero mojibake.
- Questoes essenciais: 12/12 aprovadas; IDs reaproveitados `6116-6120`; IDs novos `11000-11006`; gabarito 3A/3B/3C/3D; 4 casos clinicos.
- Flashcards: 12/12 aprovados; IDs novos `16000-16011`; todos com cloze unico, categoria fechada, origem `material` e tags validas.
- Imagem: pendente_curadoria; `BMF3-A10-F01` registrada como infografico anatomico do caminho da urina, hilo VAU e estreitamentos ureterais.
- Itens reaproveitados: questoes `6116-6120`, reescritas para categoria, `assunto_slug`, opcoes sem prefixo, explicacoes por alternativa no padrao e alinhamento semantico.
- Itens reescritos: material inteiro, porque havia espelho divergente, mojibake, ausencia de Mini Quiz e refs placeholder.
- Itens criados: questoes `11000-11006`; flashcards `16000-16011`; refs revisado em `data/refs/bmf3_a10.refs.json`; log `data/agent_logs/ciclo_basico_aulas/bmf3_a10.md`; script local `scripts/apply_bmf3_a10_pass.mjs`.
- Itens arquivados: nenhum.
- Validacoes rodadas: `node scripts/lint_ciclo_basico_v3.mjs bmf3_a10` passou; `node scripts/validate_ciclo_basico_aula.mjs bmf3_a10` passou; `npm run validate:questoes` passou com 5723 questoes consistentes; `npm run audit:questoes` passou estrutural; `npm run audit:essenciais:local` rodou com 391 suspeitas globais e sem `bmf3_a10`; `node scripts/audit_flashcards.cjs` rodou com dividas globais antigas; `node scripts/audit_ciclo_basico_report.mjs` rodou; `npm run validate:materiais` falhou por 132 aulas globais antigas, sem listar `bmf3_a10`; `node scripts/generate_ciclo_basico_queue.mjs` regenerou fila com 14 prontas e 249 pendentes.
- Proxima acao concreta: continuar no Modulo 3 por BMF3; proxima aula prioritaria da fila e `bmf3_a13`.

### bmf1_a17 - Anatomia da Boca, Lingua, Glandulas Salivares e Faringe

- Status: pronta_para_aprovacao
- Classificacao inicial: amarela; flashcards e refs em estado vermelho.
- Material: corrigido e espelhado em `data/materiais/bmf1/bmf1_a17.md` e `materiais/modulo1/bmf1/bmf1_a17.md`; 111 linhas; sem artefato final duplicado; inclui Pre-Prova, Mini Quiz, Diferenciacoes e Figura sugerida.
- Questoes essenciais: 12/12 aprovadas; gabarito 3A/3B/3C/3D; 4 casos clinicos; `categoria` e `assunto_slug` preenchidos.
- Flashcards: 12/12 aprovados; 10 `material` e 2 `extra`; categorias fechadas.
- Imagem: pendente_curadoria; registrada como `BMF1-A17-F01` em `data/materiais_figuras.json`; nao foi gerada imagem IA.
- Itens reaproveitados: questoes 343-350 foram mantidas como base conceitual, mas reescritas para remover metatexto e padronizar explicacoes; cards 8588-8589 foram aproveitados com ajustes.
- Itens reescritos: questoes 343-350; cards 8590-8595, que antes estavam contaminados por metabolismo/estomago/figado e foram convertidos para conteudo real da aula.
- Itens criados: questoes 7334-7337; cards 12581-12584; refs revisado em `data/refs/bmf1_a17.refs.json`; log `data/agent_logs/ciclo_basico_aulas/bmf1_a17.md`.
- Itens arquivados: nenhum. O conteudo errado dos cards antigos foi substituido aula por aula porque os IDs ja estavam associados a `bmf1_a17`.
- Validacoes rodadas: `node scripts/validate_ciclo_basico_aula.mjs bmf1_a17` passou; `npm run validate:questoes` passou; `npm run audit:questoes` passou; `npm run audit:essenciais:local` passou com 356 suspeitas globais; `node scripts/audit_flashcards.cjs` passou como auditoria; `node scripts/audit_ciclo_basico_report.mjs` passou; `npm run validate:materiais` falhou globalmente por 115 aulas fora do piloto.
- Refinamento v3 basico: ajuste cirurgico em `scripts/refine_bmf1_a17_material_v3.mjs`, adicionando Macete MedGradPlus antes da Ponte com a Clinica; questoes/cards preservados.
- Validacao v3 basica: `node scripts/lint_ciclo_basico_v3.mjs bmf1_a17` passou; `node scripts/validate_ciclo_basico_aula.mjs bmf1_a17` passou; `npm run validate:materiais` segue falhando globalmente por outras aulas, mas nao lista `bmf1/bmf1_a17.md`.
- Proxima acao concreta: aguardar aprovacao do usuario. Se aprovado, repetir o mesmo ritual na proxima aula prioritaria; se reprovado, ajustar a regua antes de tocar em outra aula.

### bmf1_a18 - Anatomia da Parede Abdominal e Peritonio

- Status: pronta
- Classificacao inicial: vermelha.
- Material: corrigido e espelhado em `data/materiais/bmf1/bmf1_a18.md` e `materiais/modulo1/bmf1/bmf1_a18.md`; inclui Pre-Prova, Mini Quiz, Diferenciacoes e Figura sugerida; removeu artefato `<ctrl94>` e frase-ancora ruim.
- Questoes essenciais: 12/12 aprovadas; 4 casos clinicos; gabarito balanceado em 3A/3B/3C/3D; `categoria` e `assunto_slug` preenchidos.
- Flashcards: 12/12 aprovados; 11 `material` e 1 `extra`; substituidos cards contaminados por figado/vias biliares.
- Imagem: `pendente_curadoria`; `BMF1-A18-F01` registrada para rodada posterior de imagens anatomicas.
- Itens reaproveitados: questoes 6141-6145 como base conceitual; cards 8612 e 8616 como base, mas ajustados.
- Itens reescritos: questoes 6141-6145; cards 8600, 8601, 8603 e 8604, que estavam fora da aula.
- Itens criados: questoes 7401-7407; cards 12585-12590; refs revisado em `data/refs/bmf1_a18.refs.json`; log `data/agent_logs/ciclo_basico_aulas/bmf1_a18.md`.
- Itens arquivados: nenhum; conteudo errado foi substituido aula por aula nos IDs ja indexados a `bmf1_a18`.
- Validacoes rodadas: `node scripts/validate_ciclo_basico_aula.mjs bmf1_a18` passou; `npm run validate:questoes` passou; `npm run audit:questoes` passou; `npm run audit:essenciais:local` passou com 358 suspeitas globais; `node scripts/audit_flashcards.cjs` rodou com problemas globais antigos; `node scripts/audit_ciclo_basico_report.mjs` passou; `npm run validate:materiais` ainda falhou globalmente por 115 aulas fora do passe.
- Refinamento v3 basico: ajuste cirurgico em `scripts/refine_bmf1_a18_material_v3.mjs`, adicionando prosa antes da primeira tabela, Macete MedGradPlus e pegadinha; questoes/cards preservados.
- Validacao v3 basica: `node scripts/lint_ciclo_basico_v3.mjs bmf1_a18` passou; `node scripts/validate_ciclo_basico_aula.mjs bmf1_a18` passou; `npm run validate:materiais` segue falhando globalmente por outras aulas, mas nao lista `bmf1/bmf1_a18.md`.
- Proxima acao concreta: continuar em `bmf1_a19` pela fila, salvo se o usuario mudar prioridade.

### bmf1_a19 - Anatomia dos Intestinos Delgado e Grosso

- Status: pronta
- Classificacao inicial: vermelha.
- Material: corrigido e espelhado em `data/materiais/bmf1/bmf1_a19.md` e `materiais/modulo1/bmf1/bmf1_a19.md`; inclui Pre-Prova, Mini Quiz, Diferenciacoes e Figura sugerida.
- Questoes essenciais: 12/12 aprovadas; 4 casos clinicos; gabarito balanceado em 3A/3B/3C/3D; `categoria` e `assunto_slug` preenchidos.
- Flashcards: 12/12 aprovados; 11 `material` e 1 `extra`; substituido card contaminado por esofago/estomago.
- Imagem: `pendente_curadoria`; `BMF1-A19-F01` registrada para rodada posterior de imagens anatomicas.
- Itens reaproveitados: questoes 6146-6150 como base conceitual; cards 8618-8620 como base.
- Itens reescritos: questoes 6146-6150; card 8624, que estava fora da aula.
- Itens criados: questoes 7432-7438; cards 12615-12622; refs revisado em `data/refs/bmf1_a19.refs.json`; log `data/agent_logs/ciclo_basico_aulas/bmf1_a19.md`.
- Itens arquivados: nenhum; conteudo errado foi substituido aula por aula nos IDs ja indexados a `bmf1_a19`.
- Validacoes rodadas: `node scripts/validate_ciclo_basico_aula.mjs bmf1_a19` passou; `npm run validate:questoes` passou; `npm run audit:questoes` passou; `npm run audit:essenciais:local` passou com 358 suspeitas globais; `node scripts/audit_flashcards.cjs` rodou com problemas globais antigos; `node scripts/audit_ciclo_basico_report.mjs` passou; `npm run validate:materiais` ainda falhou globalmente por 115 aulas fora do passe.
- Refinamento v3 basico: ajuste cirurgico em `scripts/refine_bmf1_a19_material_v3.mjs`, adicionando prosa antes da primeira tabela, Macete MedGradPlus e pegadinha; questoes/cards preservados.
- Validacao v3 basica: `node scripts/lint_ciclo_basico_v3.mjs bmf1_a19` passou; `node scripts/validate_ciclo_basico_aula.mjs bmf1_a19` passou; `npm run validate:materiais` segue falhando globalmente por outras aulas, mas nao lista `bmf1/bmf1_a19.md`.
- Proxima acao concreta: continuar em `bmf1_a20` pela sequencia pedagogica, salvo se a fila priorizar uma aula mais critica e o usuario aceitar pular a sequencia.

### bmf1_a20 - Inervacao e Vascularizacao Gastrointestinal

- Status: pronta
- Classificacao inicial: vermelha.
- Material: corrigido e espelhado em `data/materiais/bmf1/bmf1_a20.md` e `materiais/modulo1/bmf1/bmf1_a20.md`; inclui Pre-Prova, Mini Quiz, Diferenciacoes e Figura sugerida.
- Questoes essenciais: 12/12 aprovadas; 4 casos clinicos; gabarito balanceado em 3A/3B/3C/3D; `categoria` e `assunto_slug` preenchidos.
- Flashcards: 12/12 aprovados; 11 `material` e 1 `extra`; substituidos cards contaminados por esofago/histologia intestinal fora do eixo da aula.
- Imagem: `pendente_curadoria`; `BMF1-A20-F01` registrada para rodada posterior de imagens anatomicas.
- Itens reaproveitados: alguns conceitos de porta/celiaco/Auerbach/Meissner dos flashcards; questoes 3153-3159 foram mantidas como IDs, mas reescritas porque estavam fora da aula.
- Itens reescritos: questoes 3153-3156, 3158-3159; cards 8623, 8625-8632.
- Itens criados: questoes 7463-7468; cards 12647-12649; refs revisado em `data/refs/bmf1_a20.refs.json`; log `data/agent_logs/ciclo_basico_aulas/bmf1_a20.md`.
- Itens arquivados: nenhum; conteudo errado foi substituido aula por aula nos IDs ja indexados a `bmf1_a20`.
- Validacoes rodadas: `node scripts/validate_ciclo_basico_aula.mjs bmf1_a20` passou; `npm run validate:questoes` passou; `npm run audit:questoes` passou; `npm run audit:essenciais:local` passou com 361 suspeitas globais; `node scripts/audit_flashcards.cjs` rodou com problemas globais antigos; `node scripts/audit_ciclo_basico_report.mjs` passou; `npm run validate:materiais` ainda falhou globalmente por 116 aulas fora do passe.
- Refinamento v3 basico: ajuste cirurgico em `scripts/refine_bmf1_a20_material_v3.mjs`, adicionando prosa antes da primeira tabela, Macete MedGradPlus e pegadinha; questoes/cards preservados.
- Validacao v3 basica: `node scripts/lint_ciclo_basico_v3.mjs bmf1_a20` passou; `node scripts/validate_ciclo_basico_aula.mjs bmf1_a20` passou; `npm run validate:materiais` segue falhando globalmente por outras aulas, mas nao lista `bmf1/bmf1_a20.md`.
- Proxima acao concreta: rodar validacoes globais e continuar em `bmf1_a21`.

### bmf1_a21 - Anatomia do Figado, Vias Biliares e Pancreas

- Status: pronta
- Classificacao inicial: vermelha.
- Material: corrigido e espelhado em `data/materiais/bmf1/bmf1_a21.md` e `materiais/modulo1/bmf1/bmf1_a21.md`; corrigiu mojibake, espelho divergente, Pre-Prova ausente e Mini Quiz fora do padrao interativo.
- Questoes essenciais: 12/12 aprovadas; 2 casos clinicos; gabarito balanceado em 3A/3B/3C/3D; `categoria` e `assunto_slug` preenchidos.
- Flashcards: 12/12 aprovados; 11 `material` e 1 `extra`.
- Imagem: `pendente_curadoria`; `BMF1-A21-F01` registrada para rodada posterior de imagens anatomicas.
- Itens reaproveitados: IDs 394-400 e 3161-3167 como base quando alinhados; IDs contaminados 309, 338, 366, 380 e 387 foram reescritos dentro da aula.
- Itens reescritos: questoes 309, 338, 366, 380, 387, 394-400, 3161, 3163-3167; cards 8642-8644.
- Itens criados: cards 12674-12682; refs revisado em `data/refs/bmf1_a21.refs.json`; log `data/agent_logs/ciclo_basico_aulas/bmf1_a21.md`.
- Itens arquivados: nenhum.
- Validacoes rodadas: `node scripts/validate_ciclo_basico_aula.mjs bmf1_a21` passou; `npm run validate:questoes` passou; `npm run validate:materiais` nao lista mais `bmf1_a21`, mas ainda falha globalmente por dividas antigas.
- Refinamento v3 basico: ajuste cirurgico em `scripts/refine_bmf1_a21_material_v3.mjs`, adicionando Macete MedGradPlus antes da Ponte com a Clinica; questoes/cards preservados.
- Validacao v3 basica: `node scripts/lint_ciclo_basico_v3.mjs bmf1_a21` passou; `node scripts/validate_ciclo_basico_aula.mjs bmf1_a21` passou; `npm run validate:materiais` segue falhando globalmente por outras aulas, mas nao lista `bmf1/bmf1_a21.md`.
- Proxima acao concreta: continuar em `bmf1_a22`, congelando material se estiver verde.

### bmf1_a22 - Pratica - Sistema Digestorio em Anatomia

- Status: pronta
- Classificacao inicial: vermelha.
- Material: corrigido e espelhado em `data/materiais/bmf1/bmf1_a22.md` e `materiais/modulo1/bmf1/bmf1_a22.md`; corrigiu mojibake, espelho divergente, Mini Quiz ausente e Pre-Prova ausente.
- Questoes essenciais: 12/12 aprovadas; 4 casos clinicos; gabarito balanceado em 3A/3B/3C/3D; `categoria` e `assunto_slug` preenchidos.
- Flashcards: 12/12 aprovados; 11 `material` e 1 `extra`.
- Imagem: `pendente_curadoria`; `BMF1-A22-F01` registrada para rodada posterior de imagens anatomicas.
- Itens reaproveitados: questoes 3169, 3170, 3171, 3172, 3175 e 3176 como IDs; cards 8647, 8649, 8652 e 8655 como IDs.
- Itens reescritos: questoes 3169, 3170, 3171, 3172, 3175, 3176; cards 8647, 8649, 8652 e 8655.
- Itens criados: questoes 7591-7596; cards 12707-12714; refs revisado em `data/refs/bmf1_a22.refs.json`; log `data/agent_logs/ciclo_basico_aulas/bmf1_a22.md`.
- Itens arquivados: nenhum.
- Validacoes rodadas: `node scripts/validate_ciclo_basico_aula.mjs bmf1_a22` passou.
- Refinamento v3 basico: material-only refeito em `scripts/refine_bmf1_a22_material_v3.mjs`; 192 linhas, 2 tabelas, prosa guiada, Macete MedGradPlus, pegadinha, Ponte com a Clinica, Mini Quiz funcional e Pre-Prova; questoes/cards preservados.
- Validacao v3 basica: `node scripts/lint_ciclo_basico_v3.mjs bmf1_a22` passou; `node scripts/validate_ciclo_basico_aula.mjs bmf1_a22` passou; `npm run validate:materiais` segue falhando globalmente por outras aulas, mas nao lista `bmf1/bmf1_a22.md`.
- Proxima acao concreta: continuar em `bmf1_a1`, congelando material se estiver verde.

### bmf1_a1 - Introducao ao Estudo da Anatomia Humana

- Status: pronta
- Classificacao inicial: vermelha.
- Material: corrigido e espelhado em `data/materiais/bmf1/bmf1_a1.md` e `materiais/modulo1/bmf1/bmf1_a1.md`; removeu mojibake, divergencia de espelho, artefato `<ctrl94>` e ausencia de Mini Quiz funcional.
- Questoes essenciais: 12/12 aprovadas; 4 casos clinicos; gabarito balanceado em 3A/3B/3C/3D; `categoria` e `assunto_slug` preenchidos.
- Flashcards: 12/12 aprovados; todos `material`; cards redundantes arquivados.
- Imagem: `pendente_curadoria`; `BMF1-A1-F01` registrada para rodada posterior de imagens anatomicas.
- Itens reaproveitados: questoes 3001, 3002, 3003, 3005, 3006 e 3008 como base conceitual; cards 8395, 8397, 8398, 8399, 8401, 8403, 8404, 8405, 8406, 8551, 8569 e 8570.
- Itens reescritos: questoes 3001, 3002, 3003, 3005, 3006 e 3008; cards 8395, 8397, 8398, 8399, 8401, 8403, 8404, 8405, 8406, 8551, 8569 e 8570.
- Itens criados: questoes 7609-7614; refs revisado em `data/refs/bmf1_a1.refs.json`; log `data/agent_logs/ciclo_basico_aulas/bmf1_a1.md`.
- Itens arquivados: questoes 2480, 2514, 2534, 3040, 3013, 3111, 3142, 3150, 3526, 3537, 3557 e 3608 por estarem fora do escopo da aula; cards 8402, 8527, 8528, 8529, 8530, 8531 e 8537 por redundancia.
- Validacoes rodadas: `node scripts/validate_ciclo_basico_aula.mjs bmf1_a1` passou; `npm run validate:questoes` passou; `npm run audit:questoes` passou; `npm run audit:essenciais:local` rodou com suspeitas globais; `node scripts/audit_flashcards.cjs` voltou a zero explicacoes vazias apos correcao; `node scripts/audit_ciclo_basico_report.mjs` passou; `node scripts/generate_ciclo_basico_queue.mjs` marcou 7 prontas; `npm run validate:materiais` ainda falha globalmente, mas nao lista `bmf1/bmf1_a1.md`.
- Proxima acao concreta: regenerar auditoria/fila e continuar em `bmf1_a2`.

### bmf1_a2 - Introducao aos Tecidos Humanos

- Status: pronta
- Classificacao inicial: vermelha.
- Material: corrigido e espelhado em `data/materiais/bmf1/bmf1_a2.md` e `materiais/modulo1/bmf1/bmf1_a2.md`; removeu mojibake, divergencia de espelho, artefato `<ctrl94>`, ausencia de Mini Quiz funcional e lacuna de diferenciacoes.
- Questoes essenciais: 12/12 aprovadas; 4 casos clinicos; gabarito balanceado em 3A/3B/3C/3D; `categoria` e `assunto_slug` preenchidos.
- Flashcards: 12/12 aprovados; todos `material`; cards fora do escopo central ou redundantes arquivados.
- Imagem: `pendente_curadoria`; `BMF1-A2-F01` registrada para rodada posterior de imagens histologicas.
- Itens reaproveitados: questoes 3009, 3010, 3011, 3012, 3014 e 3016 como base conceitual; cards 8408, 8409, 8410, 8411, 8412, 8413, 8414, 8415, 8416, 8587, 8602 e 8605.
- Itens reescritos: questoes 3009, 3010, 3011, 3012, 3014 e 3016; cards 8408-8416, 8587, 8602 e 8605.
- Itens criados: questoes 7615-7620; refs revisado em `data/refs/bmf1_a2.refs.json`; log `data/agent_logs/ciclo_basico_aulas/bmf1_a2.md`.
- Itens arquivados: cards 8407, 8417, 8418, 8573, 8575, 8577, 8578, 8596, 8597, 8598 e 8599 por redundancia ou fora do nucleo da aula.
- Validacoes rodadas: `node scripts/validate_ciclo_basico_aula.mjs bmf1_a2` passou; `npm run validate:questoes` passou; `npm run audit:questoes` passou; `npm run audit:essenciais:local` rodou com suspeitas globais; `node scripts/audit_flashcards.cjs` passou como auditoria sem explicacoes vazias; `node scripts/audit_ciclo_basico_report.mjs` passou; `node scripts/generate_ciclo_basico_queue.mjs` marcou 8 prontas; `npm run validate:materiais` ainda falha globalmente, mas nao lista `bmf1/bmf1_a2.md`.
- Proxima acao concreta: regenerar auditoria/fila e continuar em `bmf1_a3`.

### bmf1_a3 - Generalidades do Sistema Esqueletico

- Status: pronta
- Classificacao inicial: vermelha.
- Material: corrigido e espelhado em `data/materiais/bmf1/bmf1_a3.md` e `materiais/modulo1/bmf1/bmf1_a3.md`; removeu mojibake, divergencia de espelho, artefato `<ctrl94>` e ausencia de Mini Quiz funcional.
- Questoes essenciais: 12/12 aprovadas; 4 casos clinicos; gabarito balanceado em 3A/3B/3C/3D; `categoria` e `assunto_slug` preenchidos.
- Flashcards: 12/12 aprovados; todos `material`; cards contaminados por BMF4 arquivados.
- Imagem: `pendente_curadoria`; `BMF1-A3-F01` registrada para rodada posterior de imagem anatomica de osso longo.
- Itens reaproveitados: questoes 413, 414, 415, 417, 419, 420, 3017, 3019, 3020, 3021, 3022 e 3023 como IDs; cards 8419-8430.
- Itens reescritos: questoes 413, 414, 415, 417, 419, 420, 3017, 3019, 3020, 3021, 3022 e 3023; cards 8419-8430.
- Itens criados: nenhum; a aula foi fechada com reaproveitamento dos IDs existentes.
- Itens arquivados: questoes 320, 421 e 442 por escopo/redundancia; cards 11390, 11418, 11446, 11474, 11502, 11530, 11558, 11586 e 11614 por contaminacao de BMF4.
- Validacoes rodadas: `node scripts/validate_ciclo_basico_aula.mjs bmf1_a3` passou; `npm run validate:questoes` passou; `npm run audit:questoes` passou; `npm run audit:essenciais:local` rodou com suspeitas globais; `node scripts/audit_flashcards.cjs` passou como auditoria sem explicacoes vazias; `node scripts/audit_ciclo_basico_report.mjs` passou; `node scripts/generate_ciclo_basico_queue.mjs` marcou 9 prontas; `npm run validate:materiais` ainda falha globalmente, mas nao lista `bmf1/bmf1_a3.md`.
- Refinamento v3 basico: material-only refeito em `scripts/refine_bmf1_a3_material_v3.mjs`; 197 linhas, 2 tabelas, prosa guiada, Macete MedGradPlus, pegadinha, Ponte com a Clinica, Mini Quiz funcional e Pre-Prova; questoes/cards preservados.
- Validacao v3 basica: `node scripts/lint_ciclo_basico_v3.mjs bmf1_a3` passou; `node scripts/validate_ciclo_basico_aula.mjs bmf1_a3` passou; `npm run validate:materiais` segue falhando globalmente por outras aulas, mas nao lista `bmf1/bmf1_a3.md`.
- Proxima acao concreta: regenerar auditoria/fila e continuar em `bmf1_a4`.

### bmf1_a4 - Tecido Conjuntivo - Celulas e Matriz

- Status: pronta
- Classificacao inicial: vermelha.
- Material: corrigido e espelhado em `data/materiais/bmf1/bmf1_a4.md` e `materiais/modulo1/bmf1/bmf1_a4.md`; removeu mojibake, divergencia de espelho, ausencia de Mini Quiz funcional e ausencia de Pre-Prova.
- Questoes essenciais: 12/12 aprovadas; 4 casos clinicos; gabarito balanceado em 3A/3B/3C/3D; `categoria` e `assunto_slug` preenchidos.
- Flashcards: 12/12 aprovados; todos `material`; cards contaminados por BMF3/BMF4 arquivados.
- Imagem: `pendente_curadoria`; `BMF1-A4-F01` registrada para rodada posterior de imagem histologica do conjuntivo.
- Itens reaproveitados: questoes 422, 423, 426, 427, 428, 429, 3025, 3026, 3027, 3029, 3031 e 3032 como IDs; cards 8431-8442.
- Itens reescritos: questoes 422, 423, 426, 427, 428, 429, 3025, 3026, 3027, 3029, 3031 e 3032; cards 8431-8442.
- Itens criados: nenhum; a aula foi fechada com reaproveitamento dos IDs existentes.
- Itens arquivados: questoes 305, 356, 424, 425, 430, 431, 5109, 5169 e 5180 por escopo/redundancia; cards 11388, 11389, 11416, 11417, 11444, 11445, 11472, 11473, 11500, 11501, 11528, 11529, 11556, 11557, 11584, 11585, 11612 e 11613 por contaminacao de BMF3/BMF4.
- Validacoes rodadas: `node scripts/validate_ciclo_basico_aula.mjs bmf1_a4` passou; `npm run validate:questoes` passou; `npm run audit:questoes` passou; `npm run audit:essenciais:local` rodou com suspeitas globais; `node scripts/audit_flashcards.cjs` passou como auditoria sem explicacoes vazias; `node scripts/audit_ciclo_basico_report.mjs` passou; `node scripts/generate_ciclo_basico_queue.mjs` marcou 10 prontas; `npm run validate:materiais` ainda falha globalmente, mas nao lista `bmf1/bmf1_a4.md`.
- Refinamento v3 basico: material-only refeito em `scripts/refine_bmf1_a4_material_v3.mjs`; 186 linhas, 2 tabelas, prosa guiada, Macete MedGradPlus, pegadinha, Ponte com a Clinica, Mini Quiz funcional e Pre-Prova; questoes/cards preservados.
- Validacao v3 basica: `node scripts/lint_ciclo_basico_v3.mjs bmf1_a4` passou; `node scripts/validate_ciclo_basico_aula.mjs bmf1_a4` passou; `npm run validate:materiais` segue falhando globalmente por outras aulas, mas nao lista `bmf1/bmf1_a4.md`.
- Proxima acao concreta: regenerar auditoria/fila e continuar em `bmf1_a5`.

### bmf1_a5 - Tecido Osseo - Estrutura e Ossificacao

- Status: pronta
- Classificacao inicial: vermelha.
- Material: corrigido e espelhado em `data/materiais/bmf1/bmf1_a5.md` e `materiais/modulo1/bmf1/bmf1_a5.md`; removeu mojibake, divergencia de espelho, ausencia de Mini Quiz funcional e ausencia de Pre-Prova.
- Questoes essenciais: 12/12 aprovadas; 3 casos clinicos; gabarito balanceado em 3A/3B/3C/3D; `categoria` e `assunto_slug` preenchidos.
- Flashcards: 12/12 aprovados; todos `material`; cards contaminados por BMF4 e cards com mojibake arquivados.
- Imagem: `BMF1-A5-F01` preservada com URL ja existente; `BMF1-A5-F02` e `BMF1-A5-F03` permanecem pendentes para rodada posterior.
- Itens reaproveitados: questoes 433, 435, 436, 439, 440, 3033, 3034, 3035, 3036, 3037, 3038 e 3039 como IDs; cards 8443-8454.
- Itens reescritos: questoes 433, 435, 436, 439, 440, 3033, 3034, 3035, 3036, 3037, 3038 e 3039; cards 8443-8454.
- Itens criados: nenhum; a aula foi fechada com reaproveitamento dos IDs existentes.
- Itens arquivados: questao 329 por estar fora da aula; questoes 434, 437, 438 e 441 por redundancia apos fechamento dos 12 essenciais; cards 11391, 11419, 11447, 11475, 11503, 11531, 11559, 11587, 11615, 11914 e 11916 por contaminacao ou mojibake.
- Validacoes rodadas: `node scripts/validate_ciclo_basico_aula.mjs bmf1_a5` passou; `npm run validate:questoes` passou; `npm run audit:questoes` passou sem problemas estruturais de mapeamento; `npm run audit:essenciais:local` rodou com suspeitas globais antigas; `node scripts/audit_flashcards.cjs` rodou sem explicacoes vazias; `node scripts/audit_ciclo_basico_report.mjs` passou; `node scripts/generate_ciclo_basico_queue.mjs` marcou 11 aulas prontas; `npm run validate:materiais` ainda falha globalmente, mas nao lista `bmf1/bmf1_a5.md`.
- Refinamento v3 basico: material-only refeito em `scripts/refine_bmf1_a5_material_v3.mjs`; 198 linhas, 2 tabelas, prosa guiada, Macete MedGradPlus, pegadinha, Ponte com a Clinica, Mini Quiz funcional e Pre-Prova; questoes/cards preservados.
- Validacao v3 basica: `node scripts/lint_ciclo_basico_v3.mjs bmf1_a5` passou; `node scripts/validate_ciclo_basico_aula.mjs bmf1_a5` passou; `npm run validate:materiais` segue falhando globalmente por outras aulas, mas nao lista `bmf1/bmf1_a5.md`.
- Proxima acao concreta: regenerar auditoria/fila e continuar em `bmf1_a6`.

### bmf1_a6 - Pratica - Ossos da Coluna, Membros Superiores e Inferiores

- Status: pronta
- Classificacao inicial: vermelha.
- Material: corrigido e espelhado em `data/materiais/bmf1/bmf1_a6.md` e `materiais/modulo1/bmf1/bmf1_a6.md`; removeu mojibake, divergencia de espelho, placeholder de figura, ausencia de Mini Quiz funcional e cabecalhos de Pre-Prova fora do contrato.
- Questoes essenciais: 12/12 aprovadas; 4 casos clinicos; gabarito balanceado em 3A/3B/3C/3D; `categoria` e `assunto_slug` preenchidos.
- Flashcards: 12/12 aprovados; todos `material`; cards antigos fora do escopo foram reescritos.
- Imagem: `pendente_curadoria`; `BMF1-A6-F01` registrada para rodada posterior de imagens anatomicas.
- Itens reaproveitados: questoes 443, 445, 447, 448, 449, 450, 3041, 3042, 3043, 3045, 3046 e 3047; cards 8455, 8457, 8458, 8459, 8460, 8461, 8462, 8463, 8464 e 8465.
- Itens reescritos: questoes 443, 445, 447, 448, 449, 450, 3041, 3042, 3043, 3045, 3046 e 3047; cards 8455, 8457, 8458, 8459, 8460, 8461, 8462, 8463, 8464 e 8465.
- Itens criados: cards 12715 e 12716; refs revisado em `data/refs/bmf1_a6.refs.json`; log `data/agent_logs/ciclo_basico_aulas/bmf1_a6.md`.
- Itens arquivados: questao 330 por estar fora do escopo da aula.
- Validacoes rodadas: `node scripts/validate_ciclo_basico_aula.mjs bmf1_a6` passou; `npm run validate:questoes` passou com 5530 questoes consistentes; `npm run audit:questoes` passou sem problemas estruturais de mapeamento; `npm run audit:essenciais:local` rodou com 378 suspeitas globais; `node scripts/audit_flashcards.cjs` rodou sem explicacoes vazias; `node scripts/audit_ciclo_basico_report.mjs` passou; `node scripts/generate_ciclo_basico_queue.mjs` marcou 12 aulas prontas; `npm run validate:materiais` ainda falha globalmente, mas nao lista `bmf1/bmf1_a6.md`.
- Refinamento v3 basico: material-only refeito em `scripts/refine_bmf1_a6_material_v3.mjs`; 192 linhas, 2 tabelas, prosa guiada, Macete MedGradPlus, pegadinha, Ponte com a Clinica, Mini Quiz funcional e Pre-Prova; questoes/cards preservados.
- Validacao v3 basica: `node scripts/lint_ciclo_basico_v3.mjs bmf1_a6` passou; `node scripts/validate_ciclo_basico_aula.mjs bmf1_a6` passou; `npm run validate:materiais` segue falhando globalmente por outras aulas, mas nao lista `bmf1/bmf1_a6.md`.
- Proxima acao concreta: continuar em `bmf1_a7` pelo Gate 0, congelando material se estiver verde.

### bmf2_a1 - Potencial de Ação Cardíaco e Sistema de Condução

- Status: pronta
- Classificacao inicial: vermelha
- Material: refatorado
- Questoes essenciais: 12/12 aprovadas
- Flashcards: 12/12 aprovados
- Imagem: pendente_curadoria
- Itens reaproveitados: flashcards 10123-10132, 10135 e 10136
- Itens reescritos: material, refs e flashcards mantidos
- Itens arquivados: questoes 219, 291, 292, 2473, 2508, 2542, 2754, 2903, 3148, 3601, 3602, 3603, 3605, 3606, 3607, 3620, 5119, 5188, 5189, 5307, 5319, 5324; flashcards 10133, 10134
- Validacoes rodadas: `node scripts\lint_ciclo_basico_v3.mjs bmf2_a1` passou; `node scripts\validate_ciclo_basico_aula.mjs bmf2_a1` passou; `node scripts\generate_ciclo_basico_queue.mjs` marcou 14 prontas/249 pendentes; `npm run validate:questoes` passou com 5710 questoes consistentes
- Proxima acao concreta: continuar em `bmf2_a2`

### bmf4_a1 - Divisão do Sistema Nervoso

- Status: pronta
- Classificação inicial: vermelha
- Material: refatorado
- Questões essenciais: 12/12 aprovadas
- Flashcards: 12/12 aprovados
- Imagem: pendente_curadoria (BMF4-A1-F01; fluxograma SNC/SNP/somático/autonômico)
- Itens reaproveitados: flashcards 3019-3025 e 3040-3042 como base, reescritos no contrato atual
- Itens reescritos: material completo; 12 questões essenciais novas 13000-13011; flashcards 18000-18001 criados
- Itens arquivados: questões 367, 2716, 2724, 2762, 2778, 2913; flashcards contaminados/redundantes 46
- Validações rodadas: `node scripts\lint_ciclo_basico_v3.mjs bmf4_a1` passou sem issues; `node scripts\validate_ciclo_basico_aula.mjs bmf4_a1` passou sem issues
- Próxima ação concreta: continuar em `bmf4_a2`, mantendo a mesma regra de uma aula por vez

### bmf4_a2 - Embriologia do Sistema Nervoso

- Status: pronta
- Classificação inicial: vermelha
- Material: refatorado
- Questões essenciais: 12/12 aprovadas
- Flashcards: 12/12 aprovados
- Imagem: pendente_curadoria (BMF4-A2-F01; esquema de neurulação e vesículas encefálicas)
- Itens reaproveitados: flashcards 3043-3051 e 3054 como base, reescritos no contrato atual
- Itens reescritos: material completo; 12 questões essenciais novas 13024-13035; flashcards 18014-18015 criados
- Itens arquivados: questões 332, 333, 384, 6413, 6414; flashcards 0
- Validações rodadas: `node scripts\lint_ciclo_basico_v3.mjs bmf4_a2` passou sem issues; `node scripts\validate_ciclo_basico_aula.mjs bmf4_a2` passou sem issues
- Próxima ação concreta: continuar em `bmf4_a3`, mantendo a mesma regra de uma aula por vez

### bmf2_a2 - Propriedades do Músculo Cardíaco

- Status: pronta
- Classificacao inicial: vermelha
- Material: refatorado
- Questoes essenciais: 12/12 aprovadas
- Flashcards: 12/12 aprovados
- Imagem: pendente_curadoria
- Itens reaproveitados: flashcards 10173-10176
- Itens reescritos: material, refs e flashcards mantidos
- Itens arquivados: 113 questoes; 0 flashcards
- Validacoes rodadas: `node scripts\lint_ciclo_basico_v3.mjs bmf2_a2` passou; `node scripts\validate_ciclo_basico_aula.mjs bmf2_a2` passou; `npm run validate:questoes` passou com 5641 questoes consistentes
- Proxima acao concreta: continuar em `bmf2_a3`

### bmf2_a3 - Circulação Sistêmica e Pulmonar; Tipos de Vasos

- Status: pronta
- Classificacao inicial: vermelha
- Material: refatorado
- Questoes essenciais: 12/12 aprovadas
- Flashcards: 12/12 aprovados
- Imagem: pendente_curadoria
- Itens reaproveitados: flashcards 2551-2561
- Itens reescritos: material, refs e flashcards mantidos
- Itens arquivados: 9 questoes; 6 flashcards
- Validacoes rodadas: `node scripts\lint_ciclo_basico_v3.mjs bmf2_a3` passou; `node scripts\validate_ciclo_basico_aula.mjs bmf2_a3` passou; `npm run validate:questoes` passou com 5669 questoes consistentes
- Proxima acao concreta: continuar em `bmf2_a4`

### bmf4_a3 - Formação do Nervo Espinal

- Status: pronta
- Classificação inicial: vermelha
- Material: refatorado
- Questões essenciais: 12/12 aprovadas
- Flashcards: 12/12 aprovados
- Imagem: pendente_curadoria (BMF4-A3-F01)
- Itens reaproveitados: conceitos centrais do catálogo e do material anterior quando alinhados
- Itens reescritos: material completo; 12 questões essenciais; 12 flashcards
- Itens arquivados: questões 304, 331, 337, 386, 6415; flashcards 9
- Validações rodadas: `node scripts\lint_ciclo_basico_v3.mjs bmf4_a3` passou sem issues; `node scripts\validate_ciclo_basico_aula.mjs bmf4_a3` passou sem issues
- Próxima ação concreta: continuar em `bmf4_a4`, mantendo a mesma regra de uma aula por vez

### bmf4_a4 - Crânio e Fossas Cranianas

- Status: pronta
- Classificação inicial: vermelha
- Material: refatorado
- Questões essenciais: 12/12 aprovadas
- Flashcards: 12/12 aprovados
- Imagem: pendente_curadoria (BMF4-A4-F01)
- Itens reaproveitados: conceitos centrais do catálogo e do material anterior quando alinhados
- Itens reescritos: material completo; 12 questões essenciais; 12 flashcards
- Itens arquivados: questões 446, 2501, 2502, 2503, 2504, 2505, 2506, 2507, 2509, 2510, 2511, 2512, 2513, 2515, 2516, 2517, 2518, 2519, 2520, 2521, 2522, 2523, 2524, 2525, 2526, 2527, 2528, 2529, 2530, 2531, 2532, 2533, 2535, 2536, 2537, 2538, 2539, 2540, 2541, 2543, 2544, 2545, 2546, 2547, 2548, 2549, 2550, 2551, 2552, 2553, 2554, 2555, 2557, 2558, 2559, 2560, 2561, 2562, 2563, 2564, 2565, 2566, 2567, 2568, 2569, 2570, 2571, 2572, 2573, 2574, 2575, 2576, 2577, 2578, 2579, 2580, 2581, 2582, 2583, 2584, 2585, 2586, 2587, 2588, 2589, 2590, 2591, 2592, 2593, 2594, 2595, 2596, 2597, 2598, 2599, 2600; flashcards 89
- Validações rodadas: `node scripts\lint_ciclo_basico_v3.mjs bmf4_a4` passou sem issues; `node scripts\validate_ciclo_basico_aula.mjs bmf4_a4` passou sem issues
- Próxima ação concreta: continuar em `bmf4_a5`, mantendo a mesma regra de uma aula por vez

### bmf4_a5 - Morfologia do Telencéfalo

- Status: pronta
- Classificação inicial: vermelha
- Material: refatorado
- Questões essenciais: 12/12 aprovadas
- Flashcards: 12/12 aprovados
- Imagem: pendente_curadoria (BMF4-A5-F01)
- Itens reaproveitados: conceitos centrais do catálogo e do material anterior quando alinhados
- Itens reescritos: material completo; 12 questões essenciais; 12 flashcards
- Itens arquivados: questões 6416, 6417, 6418, 6419, 6420; flashcards 45
- Validações rodadas: `node scripts\lint_ciclo_basico_v3.mjs bmf4_a5` passou sem issues; `node scripts\validate_ciclo_basico_aula.mjs bmf4_a5` passou sem issues
- Próxima ação concreta: continuar em `bmf4_a6`, mantendo a mesma regra de uma aula por vez

### bmf4_a6 - Córtex Cerebral - Citoarquitetura e Funções

- Status: pronta
- Classificação inicial: vermelha
- Material: refatorado
- Questões essenciais: 12/12 aprovadas
- Flashcards: 12/12 aprovados
- Imagem: pendente_curadoria (BMF4-A6-F01)
- Itens reaproveitados: conceitos centrais do catálogo e do material anterior quando alinhados
- Itens reescritos: material completo; 12 questões essenciais; 12 flashcards
- Itens arquivados: questões 6421, 6422, 6423, 6424, 6425; flashcards 25
- Validações rodadas: `node scripts\lint_ciclo_basico_v3.mjs bmf4_a6` passou sem issues; `node scripts\validate_ciclo_basico_aula.mjs bmf4_a6` passou sem issues
- Próxima ação concreta: continuar em `bmf4_a7`, mantendo a mesma regra de uma aula por vez

### bmf2_a4 - Câmaras, Valvas e Ciclo Cardíaco

- Status: pronta
- Classificacao inicial: vermelha
- Material: refatorado
- Questoes essenciais: 12/12 aprovadas
- Flashcards: 12/12 aprovados
- Imagem: pendente_curadoria
- Itens reaproveitados: nenhum; legado contaminado
- Itens reescritos: material e refs
- Itens arquivados: 11 questoes; 114 flashcards
- Validacoes rodadas: `node scripts\lint_ciclo_basico_v3.mjs bmf2_a4` passou; `node scripts\validate_ciclo_basico_aula.mjs bmf2_a4` passou; `npm run validate:questoes` passou com 5642 questoes consistentes
- Proxima acao concreta: continuar em `bmf2_a5`

### bmf4_a9 - Morfologia do Cerebelo

- Status: pronta
- Classificação inicial: vermelha
- Material: refatorado
- Questões essenciais: 12/12 aprovadas
- Flashcards: 12/12 aprovados
- Imagem: pendente_curadoria (BMF4-A9-F01)
- Itens reaproveitados: conceitos centrais do catálogo e do material anterior quando alinhados
- Itens reescritos: material completo; 12 questões essenciais; 12 flashcards
- Itens arquivados: questões 6435, 6436, 6437, 6438, 6439; flashcards 12
- Validações rodadas: `node scripts\lint_ciclo_basico_v3.mjs bmf4_a9` passou sem issues; `node scripts\validate_ciclo_basico_aula.mjs bmf4_a9` passou sem issues
- Próxima ação concreta: continuar em `bmf4_a10`, mantendo a mesma regra de uma aula por vez

### bmf4_a10 - Morfologia da Medula Espinal

- Status: pronta
- Classificação inicial: vermelha
- Material: refatorado
- Questões essenciais: 12/12 aprovadas
- Flashcards: 12/12 aprovados
- Imagem: pendente_curadoria (BMF4-A10-F01)
- Itens reaproveitados: conceitos centrais do catálogo e do material anterior quando alinhados
- Itens reescritos: material completo; 12 questões essenciais; 12 flashcards
- Itens arquivados: questões 6375, 6376, 6377, 6378, 6379; flashcards 12
- Validações rodadas: `node scripts\lint_ciclo_basico_v3.mjs bmf4_a10` passou sem issues; `node scripts\validate_ciclo_basico_aula.mjs bmf4_a10` passou sem issues
- Próxima ação concreta: continuar em `bmf4_a11`, mantendo a mesma regra de uma aula por vez

### bmf4_a7 - Morfologia do Diencéfalo

- Status: pronta
- Classificação inicial: vermelha
- Material: refatorado
- Questões essenciais: 12/12 aprovadas
- Flashcards: 12/12 aprovados
- Imagem: pendente_curadoria (BMF4-A7-F01)
- Itens reaproveitados: conceitos centrais do catálogo e do material anterior quando alinhados
- Itens reescritos: material completo; 12 questões essenciais; 12 flashcards
- Itens arquivados: questões 6426, 6427, 6428, 6429, 6430; flashcards 55
- Validações rodadas: `node scripts\lint_ciclo_basico_v3.mjs bmf4_a7` passou sem issues; `node scripts\validate_ciclo_basico_aula.mjs bmf4_a7` passou sem issues
- Próxima ação concreta: continuar em `bmf4_a8`, mantendo a mesma regra de uma aula por vez

### bmf4_a8 - Morfologia do Tronco Encefálico

- Status: pronta
- Classificação inicial: vermelha
- Material: refatorado
- Questões essenciais: 12/12 aprovadas
- Flashcards: 12/12 aprovados
- Imagem: pendente_curadoria (BMF4-A8-F01)
- Itens reaproveitados: conceitos centrais do catálogo e do material anterior quando alinhados
- Itens reescritos: material completo; 12 questões essenciais; 12 flashcards
- Itens arquivados: questões nenhuma; flashcards 0
- Validações rodadas: `node scripts\lint_ciclo_basico_v3.mjs bmf4_a8` passou sem issues; `node scripts\validate_ciclo_basico_aula.mjs bmf4_a8` passou sem issues
- Próxima ação concreta: continuar em `bmf4_a9`, mantendo a mesma regra de uma aula por vez

### bmf2_a5 - Histologia Cardíaca

- Status: pronta
- Classificacao inicial: vermelha
- Material: refatorado
- Questoes essenciais: 12/12 aprovadas
- Flashcards: 12/12 aprovados
- Imagem: pendente_curadoria
- Itens reaproveitados: nenhum
- Itens reescritos: material e refs
- Itens arquivados: 6 questoes; 0 flashcards
- Validacoes rodadas: `node scripts\lint_ciclo_basico_v3.mjs bmf2_a5` passou; `node scripts\validate_ciclo_basico_aula.mjs bmf2_a5` passou; `npm run validate:questoes` passou com 5592 questoes consistentes
- Proxima acao concreta: continuar em `bmf2_a6`

### bmf4_a11 - Histologia do Sistema Nervoso - Neurônios e Glia

- Status: pronta
- Classificação inicial: vermelha
- Material: refatorado
- Questões essenciais: 12/12 aprovadas
- Flashcards: 12/12 aprovados
- Imagem: pendente_curadoria (BMF4-A11-F01)
- Itens reaproveitados: conceitos centrais do catálogo e do material anterior quando alinhados
- Itens reescritos: material completo; 12 questões essenciais; 12 flashcards
- Itens arquivados: questões 2401, 2402, 2403, 2404, 2405, 2406, 2407, 2408, 2409, 2410, 2411, 2413, 2414, 2415, 2416, 2417, 2418, 2419, 2420, 2421, 2422, 2423, 2424, 2425, 2426, 2427, 2428, 2429, 2431, 2432, 2433, 2434, 2435, 2436, 2437, 2438, 2439, 2440, 2441, 2442, 2443, 2444, 2445, 2446, 2447, 2448, 2449, 2451, 2452, 2453, 2454, 2455, 2456, 2457, 2458, 2459, 2460, 2461, 2462, 2463, 2464, 2465, 2466, 2467, 2468, 2469, 2470, 2471, 2472, 2474, 2475, 2476, 2477, 2478, 2479, 2481, 2482, 2483, 2484, 2485, 2486, 2487, 2488, 2489, 2490, 2491, 2492, 2493, 2494, 2495, 2496, 2497, 2498, 2499, 2500; flashcards 12
- Validações rodadas: `node scripts\lint_ciclo_basico_v3.mjs bmf4_a11` passou sem issues; `node scripts\validate_ciclo_basico_aula.mjs bmf4_a11` passou sem issues
- Próxima ação concreta: continuar em `bmf4_a12`, mantendo a mesma regra de uma aula por vez

### bmf4_a12 - Neurotransmissão e Fibra Nervosa

- Status: pronta
- Classificação inicial: vermelha
- Material: refatorado
- Questões essenciais: 12/12 aprovadas
- Flashcards: 12/12 aprovados
- Imagem: pendente_curadoria (BMF4-A12-F01)
- Itens reaproveitados: conceitos centrais do catálogo e do material anterior quando alinhados
- Itens reescritos: material completo; 12 questões essenciais; 12 flashcards
- Itens arquivados: questões 6380, 6381, 6382, 6383, 6384; flashcards 12
- Validações rodadas: `node scripts\lint_ciclo_basico_v3.mjs bmf4_a12` passou sem issues; `node scripts\validate_ciclo_basico_aula.mjs bmf4_a12` passou sem issues
- Próxima ação concreta: continuar em `bmf4_a13`, mantendo a mesma regra de uma aula por vez

### bmf4_a13 - Nervos Cranianos e Vias Descendentes

- Status: pronta
- Classificação inicial: vermelha
- Material: refatorado
- Questões essenciais: 12/12 aprovadas
- Flashcards: 12/12 aprovados
- Imagem: pendente_curadoria (BMF4-A13-F01)
- Itens reaproveitados: conceitos centrais do catálogo e do material anterior quando alinhados
- Itens reescritos: material completo; 12 questões essenciais; 12 flashcards
- Itens arquivados: questões 6385, 6386, 6387, 6388, 6389; flashcards 12
- Validações rodadas: `node scripts\lint_ciclo_basico_v3.mjs bmf4_a13` passou sem issues; `node scripts\validate_ciclo_basico_aula.mjs bmf4_a13` passou sem issues
- Próxima ação concreta: continuar em `bmf4_a14`, mantendo a mesma regra de uma aula por vez

### bmf4_a14 - Vascularização do SNC

- Status: pronta
- Classificação inicial: vermelha
- Material: refatorado
- Questões essenciais: 12/12 aprovadas
- Flashcards: 12/12 aprovados
- Imagem: pendente_curadoria (BMF4-A14-F01)
- Itens reaproveitados: conceitos centrais do catálogo e do material anterior quando alinhados
- Itens reescritos: material completo; 12 questões essenciais; 12 flashcards
- Itens arquivados: questões 6390, 6391, 6392, 6393, 6394; flashcards 12
- Validações rodadas: `node scripts\lint_ciclo_basico_v3.mjs bmf4_a14` passou sem issues; `node scripts\validate_ciclo_basico_aula.mjs bmf4_a14` passou sem issues
- Próxima ação concreta: continuar em `bmf4_a15`, mantendo a mesma regra de uma aula por vez

### bmf2_a6 - ECG e Ciclo Cardíaco

- Status: pronta
- Classificacao inicial: vermelha
- Material: refatorado
- Questoes essenciais: 12/12 aprovadas
- Flashcards: 12/12 aprovados
- Imagem: pendente_curadoria
- Itens reaproveitados: base parcial de sincronia eletromecanica
- Itens reescritos: material e refs
- Itens arquivados: 5 questoes; 0 flashcards
- Validacoes rodadas: `node scripts\lint_ciclo_basico_v3.mjs bmf2_a6` passou; `node scripts\validate_ciclo_basico_aula.mjs bmf2_a6` passou; `npm run validate:questoes` passou com 5631 questoes consistentes
- Proxima acao concreta: continuar em `bmf2_a7`

### bmf4_a15 - Meninges, Sistema Ventricular e Barreiras Encefálicas

- Status: pronta
- Classificação inicial: vermelha
- Material: refatorado
- Questões essenciais: 12/12 aprovadas
- Flashcards: 12/12 aprovados
- Imagem: pendente_curadoria (BMF4-A15-F01)
- Itens reaproveitados: conceitos centrais do catálogo e do material anterior quando alinhados
- Itens reescritos: material completo; 12 questões essenciais; 12 flashcards
- Itens arquivados: questões 6395, 6396, 6397, 6398, 6399; flashcards 10
- Validações rodadas: `node scripts\lint_ciclo_basico_v3.mjs bmf4_a15` passou sem issues; `node scripts\validate_ciclo_basico_aula.mjs bmf4_a15` passou sem issues
- Próxima ação concreta: continuar em `bmf4_a16`, mantendo a mesma regra de uma aula por vez

### bmf4_a16 - Sensibilidade Geral

- Status: pronta
- Classificação inicial: vermelha
- Material: refatorado
- Questões essenciais: 12/12 aprovadas
- Flashcards: 12/12 aprovados
- Imagem: pendente_curadoria (BMF4-A16-F01)
- Itens reaproveitados: conceitos centrais do catálogo e do material anterior quando alinhados
- Itens reescritos: material completo; 12 questões essenciais; 12 flashcards
- Itens arquivados: questões 6400, 6401, 6402, 6403, 6404; flashcards 12
- Validações rodadas: `node scripts\lint_ciclo_basico_v3.mjs bmf4_a16` passou sem issues; `node scripts\validate_ciclo_basico_aula.mjs bmf4_a16` passou sem issues
- Próxima ação concreta: continuar em `bmf4_a17`, mantendo a mesma regra de uma aula por vez

### bmf4_a17 - Órgãos dos Sentidos

- Status: pronta
- Classificação inicial: vermelha
- Material: refatorado
- Questões essenciais: 12/12 aprovadas
- Flashcards: 12/12 aprovados
- Imagem: pendente_curadoria (BMF4-A17-F01)
- Itens reaproveitados: conceitos centrais do catálogo e do material anterior quando alinhados
- Itens reescritos: material completo; 12 questões essenciais; 12 flashcards
- Itens arquivados: questões 6405, 6406, 6407, 6408, 6409; flashcards 10
- Validações rodadas: `node scripts\lint_ciclo_basico_v3.mjs bmf4_a17` passou sem issues; `node scripts\validate_ciclo_basico_aula.mjs bmf4_a17` passou sem issues
- Próxima ação concreta: continuar em `bmf4_a18`, mantendo a mesma regra de uma aula por vez

### bmf4_a18 - Glândulas Endócrinas e Regulação Hormonal

- Status: pronta
- Classificação inicial: vermelha
- Material: refatorado
- Questões essenciais: 12/12 aprovadas
- Flashcards: 12/12 aprovados
- Imagem: pendente_curadoria (BMF4-A18-F01)
- Itens reaproveitados: conceitos centrais do catálogo e do material anterior quando alinhados
- Itens reescritos: material completo; 12 questões essenciais; 12 flashcards
- Itens arquivados: questões 2907, 2909, 6410, 6411, 6412; flashcards 22
- Validações rodadas: `node scripts\lint_ciclo_basico_v3.mjs bmf4_a18` passou sem issues; `node scripts\validate_ciclo_basico_aula.mjs bmf4_a18` passou sem issues
- Próxima ação concreta: continuar em `semiologia4`, mantendo a mesma regra de uma aula por vez

### bmf2_a7 - Débito Cardíaco e Lei de Starling

- Status: pronta
- Classificacao inicial: vermelha
- Material: refatorado
- Questoes essenciais: 12/12 aprovadas
- Flashcards: 12/12 aprovados
- Imagem: pendente_curadoria
- Itens reaproveitados: base parcial do material
- Itens reescritos: material e refs
- Itens arquivados: 16 questoes; 0 flashcards
- Validacoes rodadas: `node scripts\lint_ciclo_basico_v3.mjs bmf2_a7` passou; `node scripts\validate_ciclo_basico_aula.mjs bmf2_a7` passou; `npm run validate:questoes` passou com 5680 questoes consistentes
- Proxima acao concreta: continuar em `bmf2_a8`

### bmf2_a8 - Inervação do Coração e Regulação da Pressão Arterial

- Status: pronta
- Classificacao inicial: vermelha
- Material: refatorado
- Questoes essenciais: 12/12 aprovadas
- Flashcards: 12/12 aprovados
- Imagem: pendente_curadoria
- Itens reaproveitados: base parcial do material
- Itens reescritos: material e refs
- Itens arquivados: 6 questoes; 0 flashcards
- Validacoes rodadas: `node scripts\lint_ciclo_basico_v3.mjs bmf2_a8` passou; `node scripts\validate_ciclo_basico_aula.mjs bmf2_a8` passou; `npm run validate:questoes` passou com 5706 questoes consistentes
- Observacao de fila: `generate_ciclo_basico_queue.mjs` manteve status amarelo por `sem Resumo A4`, sem falha nos validadores obrigatorios
- Proxima acao concreta: continuar em `bmf2_a9`

### bmf2_a9 - Circulação Coronariana, Microcirculação e Linfática

- Status: pronta
- Classificacao inicial: vermelha
- Material: refatorado
- Questoes essenciais: 12/12 aprovadas
- Flashcards: 12/12 aprovados
- Imagem: pendente_curadoria
- Itens reaproveitados: base parcial do material
- Itens reescritos: material e refs
- Itens arquivados: 13 questoes; 0 flashcards
- Validacoes rodadas: `node scripts\lint_ciclo_basico_v3.mjs bmf2_a9` passou; `node scripts\validate_ciclo_basico_aula.mjs bmf2_a9` passou; `npm run validate:questoes` passou com 5731 questoes consistentes
- Proxima acao concreta: continuar em `bmf2_a10`

### bmf2_a10 - Anatomia da Caixa Torácica e Vias Aéreas

- Status: pronta
- Classificacao inicial: vermelha
- Material: refatorado
- Questoes essenciais: 12/12 aprovadas
- Flashcards: 12/12 aprovados
- Imagem: pendente_curadoria
- Itens reaproveitados: nenhum
- Itens reescritos: material e refs
- Itens arquivados: 13 questoes; 0 flashcards
- Validacoes rodadas: `node scripts\lint_ciclo_basico_v3.mjs bmf2_a10` passou; `node scripts\validate_ciclo_basico_aula.mjs bmf2_a10` passou; `npm run validate:questoes` passou com 5773 questoes consistentes
- Proxima acao concreta: continuar em `bmf2_a11`

### bmf2_a11 - Histologia do Sistema Respiratório

- Status: pronta
- Classificacao inicial: vermelha
- Material: refatorado
- Questoes essenciais: 12/12 aprovadas
- Flashcards: 12/12 aprovados
- Imagem: pendente_curadoria
- Itens reaproveitados: base parcial do material
- Itens reescritos: material e refs
- Itens arquivados: 8 questoes; 0 flashcards
- Validacoes rodadas: `node scripts\lint_ciclo_basico_v3.mjs bmf2_a11` passou; `node scripts\validate_ciclo_basico_aula.mjs bmf2_a11` passou; `npm run validate:questoes` passou com 5784 questoes consistentes
- Proxima acao concreta: continuar em `bmf2_a12`

### bmf2_a12 - Volumes, Capacidades e Mecânica Pulmonar

- Status: pronta
- Classificacao inicial: vermelha
- Material: refatorado
- Questoes essenciais: 12/12 aprovadas
- Flashcards: 12/12 aprovados
- Imagem: pendente_curadoria
- Itens reaproveitados: base parcial do material
- Itens reescritos: material e refs
- Itens arquivados: 9 questoes; 0 flashcards
- Validacoes rodadas: `node scripts\lint_ciclo_basico_v3.mjs bmf2_a12` passou; `node scripts\validate_ciclo_basico_aula.mjs bmf2_a12` passou; `npm run validate:questoes` passou com 5732 questoes consistentes
- Proxima acao concreta: continuar em `bmf2_a13`

### semio4_a1 - Fundamentos da Semiologia Neurológica

- Status: pronta
- Classificação inicial: vermelha
- Material: refeito e espelhado
- Questões essenciais: 12/12 aprovadas
- Flashcards: 12/12 aprovados
- Imagem: pendente_curadoria (SEMIO4-A1-F01)
- Itens reaproveitados: nenhum; aula anterior tinha espelho divergente e contaminação de itens
- Itens reescritos: material completo; 12 questões essenciais; 12 flashcards
- Itens arquivados: questões 98; flashcards 78
- Validações rodadas: `node scripts\lint_ciclo_basico_v3.mjs semio4_a1` passou sem issues; `node scripts\validate_ciclo_basico_aula.mjs semio4_a1` passou sem issues
- Próxima ação concreta: continuar em `semio4_a2`, mantendo a regra de uma aula por vez

### bmf2_a13 - Trocas Gasosas e Relação Ventilação/Perfusão

- Status: pronta
- Classificacao inicial: vermelha
- Material: refatorado
- Questoes essenciais: 12/12 aprovadas
- Flashcards: 12/12 aprovados
- Imagem: pendente_curadoria
- Itens reaproveitados: base parcial do material
- Itens reescritos: material e refs
- Itens arquivados: 18 questoes; 0 flashcards
- Validacoes rodadas: `node scripts\lint_ciclo_basico_v3.mjs bmf2_a13` passou; `node scripts\validate_ciclo_basico_aula.mjs bmf2_a13` passou; `npm run validate:questoes` passou com 5757 questoes consistentes
- Proxima acao concreta: continuar em `bmf2_a14`

### bmf2_a14 - Controle Central da Respiração

- Status: pronta
- Classificacao inicial: vermelha
- Material: refatorado
- Questoes essenciais: 12/12 aprovadas
- Flashcards: 12/12 aprovados
- Imagem: pendente_curadoria
- Itens reaproveitados: base parcial do material
- Itens reescritos: material e refs
- Itens arquivados: 10 questoes; 0 flashcards
- Validacoes rodadas: `node scripts\lint_ciclo_basico_v3.mjs bmf2_a14` passou; `node scripts\validate_ciclo_basico_aula.mjs bmf2_a14` passou; `npm run validate:questoes` passou com 5790 questoes consistentes; `node scripts\generate_ciclo_basico_queue.mjs` gerou 22 prontas/241 pendentes
- Proxima acao concreta: continuar em `bmf2_a15`

### bmf2_a15 - Prática - Anatomia e Histologia Cardiovascular

- Status: pronta
- Classificacao inicial: vermelha
- Material: refatorado
- Questoes essenciais: 12/12 aprovadas
- Flashcards: 12/12 aprovados
- Imagem: pendente_curadoria
- Itens reaproveitados: tema pratico e parte da intencao de OSPE
- Itens reescritos: material e refs
- Itens arquivados: 6 questoes; 0 flashcards
- Validacoes rodadas: `node scripts\lint_ciclo_basico_v3.mjs bmf2_a15` passou; `node scripts\validate_ciclo_basico_aula.mjs bmf2_a15` passou; `npm run validate:questoes` passou com 5867 questoes consistentes; `node scripts\generate_ciclo_basico_queue.mjs` gerou 22 prontas/241 pendentes
- Proxima acao concreta: continuar em `bmf2_a16`

### semio4_a2 - Anamnese Neurológica

- Status: pronta
- Classificação inicial: vermelha
- Material: refeito e espelhado
- Questões essenciais: 12/12 aprovadas
- Flashcards: 12/12 aprovados
- Imagens: pendente_curadoria (SEMIO4-A2-F01); pendente_curadoria (SEMIO4-A2-F02)
- Itens reaproveitados: nenhum; itens antigos foram arquivados para evitar contaminação semântica
- Itens reescritos: material completo; 12 questões essenciais; 12 flashcards
- Itens arquivados: questões 6; flashcards 35
- Validações rodadas: `node scripts\lint_ciclo_basico_v3.mjs semio4_a2` passou sem issues; `node scripts\validate_ciclo_basico_aula.mjs semio4_a2` passou sem issues
- Próxima ação concreta: continuar na próxima aula de `semiologia4`, mantendo a regra de uma aula por vez

### semio4_a3 - Nível de Consciência e Nervos Cranianos

- Status: pronta
- Classificação inicial: vermelha
- Material: refeito e espelhado
- Questões essenciais: 12/12 aprovadas
- Flashcards: 12/12 aprovados
- Imagens: pendente_curadoria (SEMIO4-A3-F01); pendente_curadoria (SEMIO4-A3-F02)
- Itens reaproveitados: nenhum; itens antigos foram arquivados para evitar contaminação semântica
- Itens reescritos: material completo; 12 questões essenciais; 12 flashcards
- Itens arquivados: questões 5; flashcards 12
- Validações rodadas: `node scripts\lint_ciclo_basico_v3.mjs semio4_a3` passou sem issues; `node scripts\validate_ciclo_basico_aula.mjs semio4_a3` passou sem issues
- Próxima ação concreta: continuar na próxima aula de `semiologia4`, mantendo a regra de uma aula por vez

### semio4_a4 - Exame Motor e Reflexos Tendíneos

- Status: pronta
- Classificação inicial: vermelha
- Material: refeito e espelhado
- Questões essenciais: 12/12 aprovadas
- Flashcards: 12/12 aprovados
- Imagens: pendente_curadoria (SEMIO4-A4-F01); pendente_curadoria (SEMIO4-A4-F02)
- Itens reaproveitados: nenhum; itens antigos foram arquivados para evitar contaminação semântica
- Itens reescritos: material completo; 12 questões essenciais; 12 flashcards
- Itens arquivados: questões 6; flashcards 12
- Validações rodadas: `node scripts\lint_ciclo_basico_v3.mjs semio4_a4` passou sem issues; `node scripts\validate_ciclo_basico_aula.mjs semio4_a4` passou sem issues
- Próxima ação concreta: continuar na próxima aula de `semiologia4`, mantendo a regra de uma aula por vez

### semio4_a5 - Exame Sensorial e Provas Cerebelares

- Status: pronta
- Classificação inicial: vermelha
- Material: refeito e espelhado
- Questões essenciais: 12/12 aprovadas
- Flashcards: 12/12 aprovados
- Imagens: pendente_curadoria (SEMIO4-A5-F01); pendente_curadoria (SEMIO4-A5-F02)
- Itens reaproveitados: nenhum; itens antigos foram arquivados para evitar contaminação semântica
- Itens reescritos: material completo; 12 questões essenciais; 12 flashcards
- Itens arquivados: questões 6; flashcards 34
- Validações rodadas: `node scripts\lint_ciclo_basico_v3.mjs semio4_a5` passou sem issues; `node scripts\validate_ciclo_basico_aula.mjs semio4_a5` passou sem issues
- Próxima ação concreta: continuar na próxima aula de `semiologia4`, mantendo a regra de uma aula por vez

### semio4_a6 - Funções Cognitivas

- Status: pronta
- Classificação inicial: vermelha
- Material: refeito e espelhado
- Questões essenciais: 12/12 aprovadas
- Flashcards: 12/12 aprovados
- Imagens: pendente_curadoria (SEMIO4-A6-F01)
- Itens reaproveitados: nenhum; itens antigos foram arquivados para evitar contaminação semântica
- Itens reescritos: material completo; 12 questões essenciais; 12 flashcards
- Itens arquivados: questões 6; flashcards 12
- Validações rodadas: `node scripts\lint_ciclo_basico_v3.mjs semio4_a6` passou sem issues; `node scripts\validate_ciclo_basico_aula.mjs semio4_a6` passou sem issues
- Próxima ação concreta: continuar na próxima aula de `semiologia4`, mantendo a regra de uma aula por vez

### semio4_a7 - Síndromes Neurológicas Clínicas

- Status: pronta
- Classificação inicial: vermelha
- Material: refeito e espelhado
- Questões essenciais: 12/12 aprovadas
- Flashcards: 12/12 aprovados
- Imagens: pendente_curadoria (SEMIO4-A7-F01); pendente_curadoria (SEMIO4-A7-F02)
- Itens reaproveitados: nenhum; itens antigos foram arquivados para evitar contaminação semântica
- Itens reescritos: material completo; 12 questões essenciais; 12 flashcards
- Itens arquivados: questões 7; flashcards 12
- Validações rodadas: `node scripts\lint_ciclo_basico_v3.mjs semio4_a7` passou sem issues; `node scripts\validate_ciclo_basico_aula.mjs semio4_a7` passou sem issues
- Próxima ação concreta: continuar na próxima aula de `semiologia4`, mantendo a regra de uma aula por vez

### semio4_a8 - Propedêutica Complementar em Neurologia

- Status: pronta
- Classificação inicial: vermelha
- Material: refeito e espelhado
- Questões essenciais: 12/12 aprovadas
- Flashcards: 12/12 aprovados
- Imagens: pendente_curadoria (SEMIO4-A8-F01); pendente_curadoria (SEMIO4-A8-F02)
- Itens reaproveitados: nenhum; itens antigos foram arquivados para evitar contaminação semântica
- Itens reescritos: material completo; 12 questões essenciais; 12 flashcards
- Itens arquivados: questões 6; flashcards 12
- Validações rodadas: `node scripts\lint_ciclo_basico_v3.mjs semio4_a8` passou sem issues; `node scripts\validate_ciclo_basico_aula.mjs semio4_a8` passou sem issues
- Próxima ação concreta: continuar na próxima aula de `semiologia4`, mantendo a regra de uma aula por vez

### semio4_a9 - Prática Simulada - Manequins e Pacientes Padronizados

- Status: pronta
- Classificação inicial: vermelha
- Material: refeito e espelhado
- Questões essenciais: 12/12 aprovadas
- Flashcards: 12/12 aprovados
- Imagens: pendente_curadoria (SEMIO4-A9-F01)
- Itens reaproveitados: nenhum; itens antigos foram arquivados para evitar contaminação semântica
- Itens reescritos: material completo; 12 questões essenciais; 12 flashcards
- Itens arquivados: questões 6; flashcards 12
- Validações rodadas: `node scripts\lint_ciclo_basico_v3.mjs semio4_a9` passou sem issues; `node scripts\validate_ciclo_basico_aula.mjs semio4_a9` passou sem issues
- Próxima ação concreta: continuar na próxima aula de `semiologia4`, mantendo a regra de uma aula por vez

### semio4_a10 - Prática Real - Ambulatório de Neurologia

- Status: pronta
- Classificação inicial: vermelha
- Material: refeito e espelhado
- Questões essenciais: 12/12 aprovadas
- Flashcards: 12/12 aprovados
- Imagens: pendente_curadoria (SEMIO4-A10-F01)
- Itens reaproveitados: nenhum; itens antigos foram arquivados para evitar contaminação semântica
- Itens reescritos: material completo; 12 questões essenciais; 12 flashcards
- Itens arquivados: questões 6; flashcards 12
- Validações rodadas: `node scripts\lint_ciclo_basico_v3.mjs semio4_a10` passou sem issues; `node scripts\validate_ciclo_basico_aula.mjs semio4_a10` passou sem issues
- Próxima ação concreta: continuar na próxima aula de `semiologia4`, mantendo a regra de uma aula por vez

### bmf2_a16 - Prática - Anatomia e Histologia Respiratória

- Status: pronta
- Classificacao inicial: vermelha
- Material: refatorado
- Questoes essenciais: 12/12 aprovadas
- Flashcards: 12/12 aprovados
- Imagem: pendente_curadoria
- Itens reaproveitados: tema pratico respiratorio e parte dos marcos de OSPE
- Itens reescritos: material, refs e figura placeholder
- Itens arquivados: 6 questoes; 0 flashcards
- Validacoes rodadas: `node scripts\lint_ciclo_basico_v3.mjs bmf2_a16` passou; `node scripts\validate_ciclo_basico_aula.mjs bmf2_a16` passou; `npm run validate:questoes` passou com 5986 questoes consistentes; `node scripts\generate_ciclo_basico_queue.mjs` gerou 22 prontas/241 pendentes
- Proxima acao concreta: BMF2 fechado; continuar em `semio2_a1`

### Bloco BMF2 - Fechamento

- Status: pronto
- Escopo fechado: `bmf2_a1`-`bmf2_a16`
- Materiais: 16/16 no v3 basico, espelhados em `data/materiais/bmf2/` e `materiais/modulo2/bmf2/`
- Questoes essenciais: 192/192 finais, 12 por aula
- Flashcards: 192/192 finais, 12 por aula
- Imagens: necessidades registradas como pendente_curadoria, sem geracao de imagem nesta rodada
- Conferencia final: os 16 linters `lint_ciclo_basico_v3` passaram; os 16 contratos `validate_ciclo_basico_aula` passaram
- Proxima acao concreta: iniciar `semio2_a1`

### semio2_a1 - Fundamentos da Semiologia Cardiorrespiratória

- Status: pronta
- Classificacao inicial: vermelha
- Material: refatorado
- Questoes essenciais: 12/12 aprovadas
- Flashcards: 12/12 aprovados
- Imagem: pendente_curadoria
- Itens reaproveitados: tema e estrutura geral antiga, reescritos para contrato v3 basico
- Itens reescritos: material, refs e figura
- Itens arquivados: 8 questoes; 26 flashcards
- Validacoes rodadas: `node scripts\lint_ciclo_basico_v3.mjs semio2_a1` passou; `node scripts\validate_ciclo_basico_aula.mjs semio2_a1` passou; `npm run validate:questoes` passou com 6107 questoes consistentes; `node scripts\generate_ciclo_basico_queue.mjs` gerou 36 prontas/227 pendentes
- Proxima acao concreta: continuar em `semio2_a2`

### semio2_a2 - Anamnese Cardiorrespiratória

- Status: pronta
- Classificacao inicial: vermelha
- Material: refatorado
- Questoes essenciais: 12/12 aprovadas
- Flashcards: 12/12 aprovados
- Imagem: pendente_curadoria
- Itens reaproveitados: tema e lista de queixas antigas, reescritos para contrato v3 basico
- Itens reescritos: material, refs e figura
- Itens arquivados: 6 questoes; 25 flashcards
- Validacoes rodadas: `node scripts\lint_ciclo_basico_v3.mjs semio2_a2` passou; `node scripts\validate_ciclo_basico_aula.mjs semio2_a2` passou; `npm run validate:questoes` passou com 6125 questoes consistentes; `node scripts\generate_ciclo_basico_queue.mjs` gerou 36 prontas/227 pendentes
- Proxima acao concreta: continuar em `semio2_a3`

### ff4_a1 - Patologia Geral - Lesão Celular e Distúrbios Circulatórios

- Status: pronta após segunda passada qualitativa
- Classificação inicial: vermelha
- Material: refatorado com maior densidade, 200 linhas, prosa antes de tabela, Mini Quiz funcional e Pré-Prova revisado
- Questões essenciais: 12/12 aprovadas; lote ativo anterior arquivado e refeito do zero
- Flashcards: 12/12 aprovados; lote ativo anterior arquivado e refeito do zero; 10 origem material e 2 origem extra
- Imagens: pendente_curadoria (FF4-A1-F01); pendente_curadoria (FF4-A1-F02)
- Itens reaproveitados: nenhum dos itens ativos anteriores; somente escopo conceitual da aula
- Itens reescritos: material completo; 12 questões essenciais; 12 flashcards; refs
- Itens arquivados: questões 12; flashcards 12 nesta segunda passada, além do arquivamento inicial do legado
- Validações rodadas: `node scripts\lint_ciclo_basico_v3.mjs ff4_a1` passou sem issues; `node scripts\validate_ciclo_basico_aula.mjs ff4_a1` passou sem issues; checagem local confirmou gabarito 3/3/3/3, 3 casos clínicos e flashcards 10 material/2 extra
- Próxima ação concreta: continuar em `ff4_a2` com refatoração manual e itens refeitos do zero, mantendo uma aula por vez

### ff4_a2 - Princípios de Farmacoterapia

- Status: pronta no contrato v3 básico
- Classificação inicial: vermelha
- Material: refatorado do zero, 200 linhas, espelhado, com Mini Quiz funcional e Pré-Prova revisado
- Questões essenciais: 12/12 aprovadas; lote ativo antigo arquivado e refeito do zero
- Flashcards: 12/12 aprovados; lote ativo antigo arquivado e refeito do zero; 10 origem material e 2 origem extra
- Imagens: pendente_curadoria (FF4-A2-F01); pendente_curadoria (FF4-A2-F02)
- Itens reaproveitados: nenhum item ativo anterior
- Itens reescritos: material completo; 12 questões essenciais; 12 flashcards; refs
- Itens arquivados: questões 12; flashcards 12 na passada final, além do arquivamento inicial do legado
- Validações rodadas: `node scripts\lint_ciclo_basico_v3.mjs ff4_a2` passou sem issues; `node scripts\validate_ciclo_basico_aula.mjs ff4_a2` passou sem issues; checagem local confirmou gabarito 3/3/3/3, 3 casos clínicos e flashcards 10 material/2 extra
- Próxima ação concreta: continuar em `ff4_a3` com refatoração manual e itens refeitos do zero, mantendo uma aula por vez

### ff4_a3 - AINEs, Corticoides e Antineoplásicos

- Status: pronta no contrato v3 básico
- Classificação inicial: vermelha
- Material: refatorado do zero, 195 linhas, espelhado, com Mini Quiz funcional e Pré-Prova revisado
- Questões essenciais: 12/12 aprovadas; lote ativo antigo arquivado e refeito do zero
- Flashcards: 12/12 aprovados; lote ativo antigo arquivado e refeito do zero; 10 origem material e 2 origem extra
- Imagens: pendente_curadoria (FF4-A3-F01); pendente_curadoria (FF4-A3-F02)
- Itens reaproveitados: nenhum item ativo anterior
- Itens reescritos: material completo; 12 questões essenciais; 12 flashcards; refs
- Itens arquivados: questões 5; flashcards 12
- Validações rodadas: `node scripts\lint_ciclo_basico_v3.mjs ff4_a3` passou sem issues; `node scripts\validate_ciclo_basico_aula.mjs ff4_a3` passou sem issues; checagem local confirmou gabarito 3/3/3/3, 3 casos clínicos e flashcards 10 material/2 extra
- Próxima ação concreta: continuar em `ff4_a4` com refatoração manual e itens refeitos do zero, mantendo uma aula por vez

### ff4_a4 - Fisiopatologia das Doenças Cerebrovasculares

- Status: pronta no contrato v3 básico
- Classificação inicial: vermelha
- Material: refatorado do zero, 200 linhas, espelhado, com Mini Quiz funcional e Pré-Prova revisado
- Questões essenciais: 12/12 aprovadas; lote ativo antigo arquivado e refeito do zero
- Flashcards: 12/12 aprovados; lote ativo antigo arquivado e refeito do zero; 10 origem material e 2 origem extra
- Imagens: pendente_curadoria (FF4-A4-F01); pendente_curadoria (FF4-A4-F02)
- Itens reaproveitados: nenhum item ativo anterior
- Itens reescritos: material completo; 12 questões essenciais; 12 flashcards; refs
- Itens arquivados: questões 5; flashcards 12
- Validações rodadas: `node scripts\lint_ciclo_basico_v3.mjs ff4_a4` passou sem issues; `node scripts\validate_ciclo_basico_aula.mjs ff4_a4` passou sem issues; checagem local confirmou gabarito 3/3/3/3, 3 casos clínicos e flashcards 10 material/2 extra
- Próxima ação concreta: continuar em `ff4_a5` com refatoração manual e itens refeitos do zero, mantendo uma aula por vez

### ff4_a5 - Neoplasias Primárias do SNC

- Status: pronta no contrato v3 básico
- Classificação inicial: vermelha
- Material: refatorado do zero, 190 linhas, espelhado, com Mini Quiz funcional e Pré-Prova revisado
- Questões essenciais: 12/12 aprovadas; lote ativo antigo arquivado e refeito do zero
- Flashcards: 12/12 aprovados; lote ativo antigo arquivado e refeito do zero; 10 origem material e 2 origem extra
- Imagens: pendente_curadoria (FF4-A5-F01); pendente_curadoria (FF4-A5-F02)
- Itens reaproveitados: nenhum item ativo anterior
- Itens reescritos: material completo; 12 questões essenciais; 12 flashcards; refs
- Itens arquivados: questões 5; flashcards 12
- Validações rodadas: `node scripts\lint_ciclo_basico_v3.mjs ff4_a5` passou sem issues; `node scripts\validate_ciclo_basico_aula.mjs ff4_a5` passou sem issues; checagem local confirmou gabarito 3/3/3/3, 3 casos clínicos e flashcards 10 material/2 extra
- Próxima ação concreta: continuar em `ff4_a6` com refatoração manual e itens refeitos do zero, mantendo uma aula por vez

### ff4_a6 - Farmacologia do SNA - Simpático e Parassimpático

- Status: pronta no contrato v3 básico
- Classificação inicial: vermelha
- Material: refatorado do zero, 182 linhas, espelhado, com Mini Quiz funcional e Pré-Prova revisado
- Questões essenciais: 12/12 aprovadas; lote ativo antigo arquivado e refeito do zero
- Flashcards: 12/12 aprovados; lote ativo antigo arquivado e refeito do zero; 10 origem material e 2 origem extra
- Imagens: pendente_curadoria (FF4-A6-F01); pendente_curadoria (FF4-A6-F02)
- Itens reaproveitados: nenhum item ativo anterior
- Itens reescritos: material completo; 12 questões essenciais; 12 flashcards; refs
- Itens arquivados: questões 5; flashcards 12
- Validações rodadas: `node scripts\lint_ciclo_basico_v3.mjs ff4_a6` passou sem issues; `node scripts\validate_ciclo_basico_aula.mjs ff4_a6` passou sem issues; checagem local confirmou gabarito 3/3/3/3, 3 casos clínicos e flashcards 10 material/2 extra
- Próxima ação concreta: continuar em `ff4_a7` com refatoração manual e itens refeitos do zero, mantendo uma aula por vez

### ff4_a7 - Bloqueadores Neuromusculares e Opioides

- Status: pronta no contrato v3 básico
- Classificação inicial: vermelha
- Material: refatorado do zero, 180 linhas, espelhado, com Mini Quiz funcional e Pré-Prova revisado
- Questões essenciais: 12/12 aprovadas; lote ativo antigo arquivado e refeito do zero
- Flashcards: 12/12 aprovados; lote ativo antigo arquivado e refeito do zero; 10 origem material e 2 origem extra
- Imagens: pendente_curadoria (FF4-A7-F01); pendente_curadoria (FF4-A7-F02)
- Itens reaproveitados: nenhum item ativo anterior
- Itens reescritos: material completo; 12 questões essenciais; 12 flashcards; refs
- Itens arquivados: questões 5; flashcards 12
- Validações rodadas: `node scripts\lint_ciclo_basico_v3.mjs ff4_a7` passou sem issues; `node scripts\validate_ciclo_basico_aula.mjs ff4_a7` passou sem issues; checagem local confirmou gabarito 3/3/3/3, 3 casos clínicos e flashcards 10 material/2 extra
- Próxima ação concreta: continuar em `ff4_a8` com refatoração manual e itens refeitos do zero, mantendo uma aula por vez

### ff4_a8 - Anestésicos Locais e Gerais

- Status: pronta no contrato v3 básico
- Classificação inicial: vermelha
- Material: refatorado do zero, 188 linhas, espelhado, com Mini Quiz funcional e Pré-Prova revisado
- Questões essenciais: 12/12 aprovadas; lote ativo antigo arquivado e refeito do zero
- Flashcards: 12/12 aprovados; lote ativo antigo arquivado e refeito do zero; 10 origem material e 2 origem extra
- Imagens: pendente_curadoria (FF4-A8-F01); pendente_curadoria (FF4-A8-F02)
- Itens reaproveitados: nenhum item ativo anterior
- Itens reescritos: material completo; 12 questões essenciais; 12 flashcards; refs
- Itens arquivados: questões 5; flashcards 12
- Validações rodadas: `node scripts\lint_ciclo_basico_v3.mjs ff4_a8` passou sem issues; `node scripts\validate_ciclo_basico_aula.mjs ff4_a8` passou sem issues; checagem local confirmou gabarito 3/3/3/3, 3 casos clínicos e flashcards 10 material/2 extra
- Próxima ação concreta: continuar em `ff4_a9` com refatoração manual e itens refeitos do zero, mantendo uma aula por vez

### ff4_a9 - Psicofarmacologia

- Status: pronta no contrato v3 básico
- Classificação inicial: vermelha
- Material: refatorado do zero, 180 linhas, espelhado, com Mini Quiz funcional e Pré-Prova revisado
- Questões essenciais: 12/12 aprovadas; lote ativo antigo arquivado e refeito do zero
- Flashcards: 12/12 aprovados; lote ativo antigo arquivado e refeito do zero; 10 origem material e 2 origem extra
- Imagens: pendente_curadoria (FF4-A9-F01); pendente_curadoria (FF4-A9-F02)
- Itens reaproveitados: nenhum item ativo anterior
- Itens reescritos: material completo; 12 questões essenciais; 12 flashcards; refs; catálogo de figuras recuperado para restaurar entradas truncadas
- Itens arquivados: questões 5; flashcards 12
- Validações rodadas: `node scripts\lint_ciclo_basico_v3.mjs ff4_a9` passou sem issues; `node scripts\validate_ciclo_basico_aula.mjs ff4_a9` passou sem issues; checagem local confirmou gabarito 3/3/3/3, 3 casos clínicos e flashcards 10 material/2 extra
- Próxima ação concreta: continuar em `ff4_a10` com refatoração manual e itens refeitos do zero, mantendo uma aula por vez

### ff4_a10 - Fisiopatologia da Hipófise

- Status: pronta no contrato v3 básico
- Classificação inicial: vermelha
- Material: refatorado do zero, 181 linhas, espelhado, com Mini Quiz funcional e Pré-Prova revisado
- Questões essenciais: 12/12 aprovadas; lote ativo antigo arquivado e refeito do zero
- Flashcards: 12/12 aprovados; 10 origem material e 2 origem extra
- Imagens: pendente_curadoria (FF4-A10-F01); pendente_curadoria (FF4-A10-F02)
- Itens reaproveitados: nenhum item ativo anterior
- Itens reescritos: material completo; 12 questões essenciais; 12 flashcards; refs
- Itens arquivados: questões 5; flashcards 0
- Validações rodadas: `node scripts\lint_ciclo_basico_v3.mjs ff4_a10` passou sem issues; `node scripts\validate_ciclo_basico_aula.mjs ff4_a10` passou sem issues; checagem local confirmou gabarito 3/3/3/3, 3 casos clínicos e flashcards 10 material/2 extra
- Próxima ação concreta: continuar em `ff4_a11` com refatoração manual e itens refeitos do zero, mantendo uma aula por vez

### ff4_a11 - Fisiopatologia da Glândula Adrenal

- Status: pronta no contrato v3 básico
- Classificação inicial: vermelha
- Material: refatorado do zero, 171 linhas, espelhado, com Mini Quiz funcional e Pré-Prova revisado
- Questões essenciais: 12/12 aprovadas; lote ativo antigo arquivado e refeito do zero
- Flashcards: 12/12 aprovados; 10 origem material e 2 origem extra
- Imagens: pendente_curadoria (FF4-A11-F01); pendente_curadoria (FF4-A11-F02)
- Itens reaproveitados: nenhum item ativo anterior
- Itens reescritos: material completo; 12 questões essenciais; 12 flashcards; refs
- Itens arquivados: questões 5; flashcards 0
- Validações rodadas: `node scripts\lint_ciclo_basico_v3.mjs ff4_a11` passou sem issues; `node scripts\validate_ciclo_basico_aula.mjs ff4_a11` passou sem issues; checagem local confirmou gabarito 3/3/3/3, 3 casos clínicos e flashcards 10 material/2 extra
- Próxima ação concreta: continuar em `ff4_a12` com refatoração manual e itens refeitos do zero, mantendo uma aula por vez

### ff4_a12 - Fisiopatologia do Pâncreas Endócrino

- Status: pronta no contrato v3 básico
- Classificação inicial: vermelha
- Material: refatorado do zero, 173 linhas, espelhado, com Mini Quiz funcional e Pré-Prova revisado
- Questões essenciais: 12/12 aprovadas; lote ativo antigo arquivado e refeito do zero
- Flashcards: 12/12 aprovados; 10 origem material e 2 origem extra
- Imagens: pendente_curadoria (FF4-A12-F01); pendente_curadoria (FF4-A12-F02)
- Itens reaproveitados: nenhum item ativo anterior
- Itens reescritos: material completo; 12 questões essenciais; 12 flashcards; refs
- Itens arquivados: questões 5; flashcards 0
- Validações rodadas: `node scripts\lint_ciclo_basico_v3.mjs ff4_a12` passou sem issues; `node scripts\validate_ciclo_basico_aula.mjs ff4_a12` passou sem issues; checagem local confirmou gabarito 3/3/3/3, 3 casos clínicos e flashcards 10 material/2 extra
- Próxima ação concreta: continuar em `ff4_a13` com refatoração manual e itens refeitos do zero, mantendo uma aula por vez

### ff4_a13 - Hipoglicemiantes e Insulinas

- Status: pronta no contrato v3 básico
- Classificação inicial: vermelha
- Material: refatorado do zero, 168 linhas, espelhado, com Mini Quiz funcional e Pré-Prova revisado
- Questões essenciais: 12/12 aprovadas; lote ativo antigo arquivado e refeito do zero
- Flashcards: 12/12 aprovados; 10 origem material e 2 origem extra
- Imagens: pendente_curadoria (FF4-A13-F01); pendente_curadoria (FF4-A13-F02)
- Itens reaproveitados: nenhum item ativo anterior; lote antigo estava volumoso e estruturalmente quebrado
- Itens reescritos: material completo; 12 questões essenciais; 12 flashcards; refs
- Itens arquivados: questões 102; flashcards 0
- Validações rodadas: `node scripts\lint_ciclo_basico_v3.mjs ff4_a13` passou sem issues; `node scripts\validate_ciclo_basico_aula.mjs ff4_a13` passou sem issues; checagem local confirmou gabarito 3/3/3/3, 3 casos clínicos e flashcards 10 material/2 extra
- Próxima ação concreta: continuar em `ff4_a14` com refatoração manual e itens refeitos do zero, mantendo uma aula por vez

### ff4_a14 - Diagnósticos Diferenciais - Integração Clínica

- Status: pronta no contrato v3 básico
- Classificação inicial: vermelha
- Material: refatorado do zero, 168 linhas, espelhado, com Mini Quiz funcional, Ponte com a Clínica e Pré-Prova revisado
- Questões essenciais: 12/12 aprovadas; lote ativo antigo arquivado e refeito do zero
- Flashcards: 12/12 aprovados; 10 origem material e 2 origem extra; reparo local necessário porque a primeira gravação não deixou cards ativos
- Imagens: pendente_curadoria (FF4-A14-F01); pendente_curadoria (FF4-A14-F02)
- Itens reaproveitados: nenhum item ativo anterior
- Itens reescritos: material completo; 12 questões essenciais; 12 flashcards; refs
- Itens arquivados: questões 5; flashcards 0
- Validações rodadas: `node scripts\lint_ciclo_basico_v3.mjs ff4_a14` passou sem issues; `node scripts\validate_ciclo_basico_aula.mjs ff4_a14` passou sem issues; checagem local confirmou gabarito 3/3/3/3, 3 casos clínicos e flashcards 10 material/2 extra
- Próxima ação concreta: Fisiopato/Fármaco concluída em checagem consolidada; próxima frente do Módulo 4 é Bioestatística

### semio2_a3 - Exame Físico Cardiovascular

- Status: pronta
- Classificacao inicial: vermelha
- Material: refatorado
- Questoes essenciais: 12/12 aprovadas
- Flashcards: 12/12 aprovados
- Imagem: pendente_curadoria
- Itens reaproveitados: tema e roteiro antigo de exame cardiovascular, reescritos para contrato v3 basico
- Itens reescritos: material, refs e figura
- Itens arquivados: 6 questoes; 10 flashcards
- Validacoes rodadas: `node scripts\lint_ciclo_basico_v3.mjs semio2_a3` passou; `node scripts\validate_ciclo_basico_aula.mjs semio2_a3` passou; `npm run validate:questoes` passou com 6053 questoes consistentes; `node scripts\generate_ciclo_basico_queue.mjs` gerou 36 prontas/227 pendentes
- Proxima acao concreta: continuar em `semio2_a4`

### semio2_a4 - Exame Físico Respiratório

- Status: pronta
- Classificacao inicial: vermelha
- Material: refatorado
- Questoes essenciais: 12/12 aprovadas
- Flashcards: 12/12 aprovados
- Imagem: pendente_curadoria
- Itens reaproveitados: tema e roteiro antigo de exame respiratorio, reescritos para contrato v3 basico
- Itens reescritos: material, refs e figura
- Itens arquivados: 7 questoes; 0 flashcards
- Validacoes rodadas: `node scripts\lint_ciclo_basico_v3.mjs semio2_a4` passou; `node scripts\validate_ciclo_basico_aula.mjs semio2_a4` passou; `npm run validate:questoes` passou com 6058 questoes consistentes; `node scripts\generate_ciclo_basico_queue.mjs` gerou 36 prontas/227 pendentes
- Proxima acao concreta: continuar em `semio2_a5`

### semio2_a5 - Interpretação de Achados e Síndromes Cardiorrespiratórias

- Status: pronta
- Classificacao inicial: vermelha
- Material: refatorado
- Questoes essenciais: 12/12 aprovadas
- Flashcards: 12/12 aprovados
- Imagem: pendente_curadoria
- Itens reaproveitados: tema e parte da taxonomia antiga, com poda forte de excesso e reescrita completa
- Itens reescritos: material, refs e figura
- Itens arquivados: 99 questoes; 0 flashcards
- Validacoes rodadas: `node scripts\lint_ciclo_basico_v3.mjs semio2_a5` passou; `node scripts\validate_ciclo_basico_aula.mjs semio2_a5` passou; `npm run validate:questoes` passou com 5978 questoes consistentes; `node scripts\generate_ciclo_basico_queue.mjs` gerou 36 prontas/227 pendentes
- Proxima acao concreta: continuar em `semio2_a6`

### semio2_a6 - Prática Simulada - Manequins e Pacientes Padronizados

- Status: pronta
- Classificacao inicial: vermelha
- Material: refatorado
- Questoes essenciais: 12/12 aprovadas
- Flashcards: 12/12 aprovados
- Imagem: pendente_curadoria
- Itens reaproveitados: tema antigo de pratica simulada, reescrito para contrato v3 basico
- Itens reescritos: material, refs e figura
- Itens arquivados: 5 questoes; 0 flashcards
- Validacoes rodadas: `node scripts\lint_ciclo_basico_v3.mjs semio2_a6` passou; `node scripts\validate_ciclo_basico_aula.mjs semio2_a6` passou; `npm run validate:questoes` passou com 5898 questoes consistentes; `node scripts\generate_ciclo_basico_queue.mjs` gerou 36 prontas/227 pendentes
- Proxima acao concreta: continuar em `semio2_a7`

### semio2_a7 - Prática Real - Ambulatório Supervisionado

- Status: pronta
- Classificacao inicial: vermelha
- Material: refatorado
- Questoes essenciais: 12/12 aprovadas
- Flashcards: 12/12 aprovados
- Imagem: pendente_curadoria
- Itens reaproveitados: tema antigo de pratica real, reescrito para contrato v3 basico
- Itens reescritos: material, refs e figura
- Itens arquivados: 5 questoes; 0 flashcards
- Validacoes rodadas: `node scripts\lint_ciclo_basico_v3.mjs semio2_a7` passou; `node scripts\validate_ciclo_basico_aula.mjs semio2_a7` passou; `npm run validate:questoes` passou com 5912 questoes consistentes; `node scripts\generate_ciclo_basico_queue.mjs` gerou 36 prontas/227 pendentes
- Proxima acao concreta: continuar em `semio2_a8`

### semio2_a8 - Reunião Clínica - Casos Cardiovasculares

- Status: pronta
- Classificacao inicial: vermelha
- Material: refatorado
- Questoes essenciais: 12/12 aprovadas
- Flashcards: 12/12 aprovados
- Imagem: pendente_curadoria
- Itens reaproveitados: tema antigo de reuniao cardiovascular, reescrito para contrato v3 basico
- Itens reescritos: material, refs e figura
- Itens arquivados: 5 questoes; 0 flashcards
- Validacoes rodadas: `node scripts\lint_ciclo_basico_v3.mjs semio2_a8` passou; `node scripts\validate_ciclo_basico_aula.mjs semio2_a8` passou; `npm run validate:questoes` passou com 5926 questoes consistentes; `node scripts\generate_ciclo_basico_queue.mjs` gerou 36 prontas/227 pendentes
- Proxima acao concreta: continuar em `semio2_a9`

### semio2_a9 - Reunião Clínica - Casos Respiratórios

- Status: pronta
- Classificacao inicial: vermelha
- Material: refatorado
- Questoes essenciais: 12/12 aprovadas
- Flashcards: 12/12 aprovados
- Imagem: pendente_curadoria
- Itens reaproveitados: tema antigo de reuniao respiratoria, reescrito para contrato v3 basico
- Itens reescritos: material, refs e figura
- Itens arquivados: 5 questoes; 0 flashcards
- Validacoes rodadas: `node scripts\lint_ciclo_basico_v3.mjs semio2_a9` passou; `node scripts\validate_ciclo_basico_aula.mjs semio2_a9` passou; `npm run validate:questoes` passou com 5940 questoes consistentes; `node scripts\generate_ciclo_basico_queue.mjs` gerou 36 prontas/227 pendentes
- Proxima acao concreta: Semiologia2 fechada; continuar em `bcm1_a1`

### Bloco Semiologia2 - Fechamento

- Status: pronto
- Escopo fechado: `semio2_a1`-`semio2_a9`
- Materiais: 9/9 no v3 basico, espelhados em `data/materiais/semiologia2/` e `materiais/modulo2/semiologia2/`
- Questoes essenciais: 108/108 finais, 12 por aula
- Flashcards: 108/108 finais, 12 por aula
- Imagens: necessidades cardio-respiratorias registradas como pendente_curadoria, sem geracao de imagem nesta rodada
- Linter v3 basico: serve para Semiologia2; detectou corretamente falhas estruturais iniciais em `semio2_a1`
- Conferencia final: os 9 linters `lint_ciclo_basico_v3` passaram; os 9 contratos `validate_ciclo_basico_aula` passaram
- Proxima acao concreta: iniciar `bcm1_a1`

### bioe_a1 - Aplicacoes e Definicao de Bioestatistica

- Status: pronta no contrato v3 basico do Modulo 4
- Classificacao inicial: vermelha
- Material: refatorado e espelhado; 178 linhas no linter, prosa antes de tabela, Mini Quiz funcional e Pre-Prova
- Questoes essenciais: 12/12 refeitas do zero; IDs `13732-13743`
- Flashcards: 12/12 refeitos do zero; IDs `18712-18723`
- Imagem: 2 esquemas didaticos registrados para curadoria posterior, sem gerar imagem agora
- Itens reaproveitados: nenhum; a aula antiga tinha 5 questoes, 0 flashcards, material curto e refs placeholder
- Itens arquivados: 5 questoes antigas; 0 flashcards
- Validacoes rodadas: `node scripts\lint_ciclo_basico_v3.mjs bioe_a1`; `node scripts\validate_ciclo_basico_aula.mjs bioe_a1`
- Proxima acao concreta: continuar em `bioe_a2`

### bioe_a2 - Tipos de Variaveis Estatisticas

- Status: pronta no contrato v3 basico do Modulo 4
- Classificacao inicial: vermelha
- Material: refatorado e espelhado; 173 linhas no linter, prosa antes de tabela, Mini Quiz funcional e Pre-Prova
- Questoes essenciais: 12/12 refeitas do zero; IDs `13744-13755`
- Flashcards: 12/12 refeitos do zero; IDs `18724-18735`
- Imagem: 2 esquemas didaticos registrados para curadoria posterior, sem gerar imagem agora
- Itens reaproveitados: nenhum; havia contaminacao extensa de outras aulas e 0 flashcards
- Itens arquivados: 98 questoes antigas; 0 flashcards
- Validacoes rodadas: `node scripts\lint_ciclo_basico_v3.mjs bioe_a2`; `node scripts\validate_ciclo_basico_aula.mjs bioe_a2`
- Proxima acao concreta: continuar em `bioe_a3`

### bioe_a3 - Medidas de Tendencia Central e Dispersao

- Status: pronta no contrato v3 basico do Modulo 4
- Classificacao inicial: vermelha
- Material: refatorado e espelhado; 182 linhas no linter, prosa antes de tabela, Mini Quiz funcional e Pre-Prova
- Questoes essenciais: 12/12 refeitas do zero; IDs `13756-13767`
- Flashcards: 12/12 refeitos do zero; IDs `18736-18747`
- Imagem: 2 esquemas didaticos registrados para curadoria posterior, sem gerar imagem agora
- Itens reaproveitados: nenhum; a aula antiga tinha 5 questoes, 0 flashcards e refs placeholder
- Itens arquivados: 5 questoes antigas; 0 flashcards
- Validacoes rodadas: `node scripts\lint_ciclo_basico_v3.mjs bioe_a3`; `node scripts\validate_ciclo_basico_aula.mjs bioe_a3`
- Proxima acao concreta: continuar em `bioe_a4`

### bioe_a4 - Definicao da Amostra e Normalidade dos Dados

- Status: pronta no contrato v3 basico do Modulo 4
- Classificacao inicial: vermelha
- Material: refatorado e espelhado; 185 linhas no linter, prosa antes de tabela, Mini Quiz funcional e Pre-Prova
- Questoes essenciais: 12/12 refeitas do zero; IDs `13768-13779`
- Flashcards: 12/12 refeitos do zero; IDs `18748-18759`
- Imagem: 2 esquemas didaticos registrados para curadoria posterior, sem gerar imagem agora
- Itens reaproveitados: nenhum; a aula antiga tinha 5 questoes, 0 flashcards e refs placeholder
- Itens arquivados: 5 questoes antigas; 0 flashcards
- Validacoes rodadas: `node scripts\lint_ciclo_basico_v3.mjs bioe_a4`; `node scripts\validate_ciclo_basico_aula.mjs bioe_a4`
- Proxima acao concreta: continuar em `bioe_a5`

### bioe_a5 - Analise Inferencial - Testes de Hipoteses

- Status: pronta no contrato v3 basico do Modulo 4
- Classificacao inicial: vermelha
- Material: refatorado e espelhado; 175 linhas no linter, prosa antes de tabela, Mini Quiz funcional e Pre-Prova
- Questoes essenciais: 12/12 refeitas do zero; IDs `13780-13791`
- Flashcards: 12/12 refeitos do zero; IDs `18760-18771`
- Imagem: 2 esquemas didaticos registrados para curadoria posterior, sem gerar imagem agora
- Itens reaproveitados: nenhum; a aula antiga tinha 5 questoes, 0 flashcards e refs placeholder
- Itens arquivados: 5 questoes antigas; 0 flashcards
- Validacoes rodadas: `node scripts\lint_ciclo_basico_v3.mjs bioe_a5`; `node scripts\validate_ciclo_basico_aula.mjs bioe_a5`
- Proxima acao concreta: continuar em `bioe_a6`

### bioe_a6 - Pesquisas Qualitativas na Saude

- Status: pronta no contrato v3 basico do Modulo 4
- Classificacao inicial: vermelha
- Material: refatorado e espelhado; 176 linhas no linter, prosa antes de tabela, Mini Quiz funcional e Pre-Prova
- Questoes essenciais: 12/12 refeitas do zero; IDs `13792-13803`
- Flashcards: 12/12 refeitos do zero; IDs `18772-18783`
- Imagem: 2 esquemas didaticos registrados para curadoria posterior, sem gerar imagem agora
- Itens reaproveitados: nenhum; a aula antiga tinha 5 questoes, 0 flashcards e refs placeholder
- Itens arquivados: 5 questoes antigas; 0 flashcards
- Validacoes rodadas: `node scripts\lint_ciclo_basico_v3.mjs bioe_a6`; `node scripts\validate_ciclo_basico_aula.mjs bioe_a6`
- Ajuste final: 3 flashcards tiveram categoria corrigida de `metodologia` para `mecanismo`, respeitando o contrato fechado
- Proxima acao concreta: continuar em `bioe_a7`

### bioe_a7 - Introducao a Epidemiologia Analitica

- Status: pronta no contrato v3 basico do Modulo 4
- Classificacao inicial: vermelha
- Material: refatorado e espelhado; 174 linhas no linter, prosa antes de tabela, Mini Quiz funcional e Pre-Prova
- Questoes essenciais: 12/12 refeitas do zero; IDs `13804-13815`
- Flashcards: 12/12 refeitos do zero; IDs `18784-18795`
- Imagem: 2 esquemas didaticos registrados para curadoria posterior, sem gerar imagem agora
- Itens reaproveitados: nenhum; a aula antiga tinha 5 questoes, 0 flashcards e refs placeholder
- Itens arquivados: 5 questoes antigas; 0 flashcards
- Validacoes rodadas: `node scripts\lint_ciclo_basico_v3.mjs bioe_a7`; `node scripts\validate_ciclo_basico_aula.mjs bioe_a7`
- Proxima acao concreta: continuar em `bioe_a8`

### bioe_a8 - Estudo Transversal

- Status: pronta no contrato v3 basico do Modulo 4
- Classificacao inicial: vermelha
- Material: refatorado e espelhado; 189 linhas no linter, prosa antes de tabela, Mini Quiz funcional e Pre-Prova
- Questoes essenciais: 12/12 refeitas do zero; IDs `13816-13827`
- Flashcards: 12/12 refeitos do zero; IDs `18796-18807`
- Imagem: 2 esquemas didaticos registrados para curadoria posterior, sem gerar imagem agora
- Itens reaproveitados: nenhum; havia item fora de escopo sobre meta-analise, perguntas template e 0 flashcards
- Itens arquivados: 5 questoes antigas; 0 flashcards
- Ajuste final: material compactado para v3 basico, cabecalhos acentuados do contrato restaurados, 3 explicacoes gerais reforcadas e tags de flashcards corrigidas
- Validacoes rodadas: `node scripts\lint_ciclo_basico_v3.mjs bioe_a8`; `node scripts\validate_ciclo_basico_aula.mjs bioe_a8`
- Proxima acao concreta: continuar em `bioe_a9`

### bioe_a9 - Estudo de Coorte

- Status: pronta no contrato v3 basico do Modulo 4
- Classificacao inicial: vermelha
- Material: refatorado e espelhado; 181 linhas no linter, prosa antes de tabela, Mini Quiz funcional e Pre-Prova
- Questoes essenciais: 12/12 refeitas do zero; IDs `13828-13839`
- Flashcards: 12/12 refeitos do zero; IDs `18808-18819`
- Imagem: 2 esquemas didaticos registrados para curadoria posterior, sem gerar imagem agora
- Itens reaproveitados: nenhum; a aula antiga tinha 5 questoes template, 0 flashcards e refs placeholder
- Itens arquivados: 5 questoes antigas; 0 flashcards
- Validacoes rodadas: `node scripts\lint_ciclo_basico_v3.mjs bioe_a9`; `node scripts\validate_ciclo_basico_aula.mjs bioe_a9`
- Proxima acao concreta: continuar em `bioe_a10`

### bioe_a10 - Estudo Caso-Controle

- Status: pronta no contrato v3 basico do Modulo 4
- Classificacao inicial: vermelha
- Material: refatorado e espelhado; 181 linhas no linter, prosa antes de tabela, Mini Quiz funcional e Pre-Prova
- Questoes essenciais: 12/12 refeitas do zero; IDs `13840-13851`
- Flashcards: 12/12 refeitos do zero; IDs `18820-18831`
- Imagem: 2 esquemas didaticos registrados para curadoria posterior, sem gerar imagem agora
- Itens reaproveitados: nenhum; a aula antiga tinha 5 questoes template, 0 flashcards e refs placeholder
- Itens arquivados: 5 questoes antigas; 0 flashcards
- Ajuste final: negritos de Pontos-Chave reforcados para passar a regua editorial do linter v3 basico
- Validacoes rodadas: `node scripts\lint_ciclo_basico_v3.mjs bioe_a10`; `node scripts\validate_ciclo_basico_aula.mjs bioe_a10`
- Proxima acao concreta: continuar em `bioe_a11`

### bioe_a11 - Estudo Ecologico

- Status: pronta no contrato v3 basico do Modulo 4
- Classificacao inicial: vermelha
- Material: refatorado e espelhado; 179 linhas no linter, prosa antes de tabela, Mini Quiz funcional e Pre-Prova
- Questoes essenciais: 12/12 refeitas do zero; IDs `13852-13863`
- Flashcards: 12/12 refeitos do zero; IDs `18832-18843`
- Imagem: 2 esquemas didaticos registrados para curadoria posterior, sem gerar imagem agora
- Itens reaproveitados: nenhum; havia item fora de escopo sobre curva epidemica, perguntas template, 0 flashcards e refs placeholder
- Itens arquivados: 5 questoes antigas; 0 flashcards
- Ajuste final: negrito de Pontos-Chave reforcado e tag com acento corrigida para `inferencia`
- Validacoes rodadas: `node scripts\lint_ciclo_basico_v3.mjs bioe_a11`; `node scripts\validate_ciclo_basico_aula.mjs bioe_a11`
- Proxima acao concreta: continuar em `bioe_a12`

### bioe_a12 - Ensaio Clinico Randomizado e Ensaio Comunitario

- Status: pronta no contrato v3 basico do Modulo 4
- Classificacao inicial: vermelha
- Material: refatorado e espelhado; 180 linhas no linter, prosa antes de tabela, Mini Quiz funcional e Pre-Prova
- Questoes essenciais: 12/12 refeitas do zero; IDs `13864-13875`
- Flashcards: 12/12 refeitos do zero; IDs `18844-18855`
- Imagem: 2 esquemas didaticos registrados para curadoria posterior, sem gerar imagem agora
- Itens reaproveitados: nenhum; a aula antiga tinha 5 questoes template, 0 flashcards e refs placeholder
- Itens arquivados: 5 questoes antigas; 0 flashcards
- Validacoes rodadas: `node scripts\lint_ciclo_basico_v3.mjs bioe_a12`; `node scripts\validate_ciclo_basico_aula.mjs bioe_a12`
- Proxima acao concreta: rodar verificacao consolidada de Bioestatistica e do Modulo 4

### ds_a1 - Desafios Socioambientais Globais e Saúde

- Status: pronta
- Classificacao inicial: vermelha
- Material: refatorado
- Questoes essenciais: 12/12 aprovadas
- Flashcards: 12/12 aprovados
- Imagem: pendente_curadoria
- Itens reaproveitados: tema antigo e figura placeholder, reescritos para contrato v3 basico
- Itens reescritos: material, refs e figura
- Itens arquivados: 12 questoes; 12 flashcards
- Validacoes rodadas: `node scripts\lint_ciclo_basico_v3.mjs ds_a1`; `node scripts\validate_ciclo_basico_aula.mjs ds_a1`; `npm run validate:questoes`; `node scripts\generate_ciclo_basico_queue.mjs`
- Proxima acao concreta: continuar em `ds_a2`

### ds_a2 - Sustentabilidade, ODS e Saúde nas Cidades

- Status: pronta
- Classificacao inicial: vermelha
- Material: refatorado
- Questoes essenciais: 12/12 aprovadas
- Flashcards: 12/12 aprovados
- Imagem: pendente_curadoria
- Itens reaproveitados: tema antigo e figura placeholder, reescritos para contrato v3 basico
- Itens reescritos: material, refs e figura
- Itens arquivados: 12 questoes; 12 flashcards
- Validacoes rodadas: `node scripts\lint_ciclo_basico_v3.mjs ds_a2`; `node scripts\validate_ciclo_basico_aula.mjs ds_a2`; `npm run validate:questoes`; `node scripts\generate_ciclo_basico_queue.mjs`
- Proxima acao concreta: continuar em `ds_a3`

### ds_a3 - Políticas Públicas Socioambientais e Saúde no Brasil

- Status: pronta
- Classificacao inicial: vermelha
- Material: refatorado
- Questoes essenciais: 12/12 aprovadas
- Flashcards: 12/12 aprovados
- Imagem: pendente_curadoria
- Itens reaproveitados: tema antigo, questoes excessivas antigas e figura placeholder, reescritos para contrato v3 basico
- Itens reescritos: material, refs e figura
- Itens arquivados: 106 questoes; 0 flashcards
- Validacoes rodadas: `node scripts\lint_ciclo_basico_v3.mjs ds_a3`; `node scripts\validate_ciclo_basico_aula.mjs ds_a3`; `npm run validate:questoes`; `node scripts\generate_ciclo_basico_queue.mjs`
- Proxima acao concreta: iniciar `ind_a1`

### Bloco DS - conferência final

- Status: completo no fluxo do Modulo 2
- Aulas: `ds_a1`, `ds_a2`, `ds_a3`
- Total final: 3 materiais v3 basico espelhados, 36 questoes essenciais, 36 flashcards, 3 slots de imagem pendentes de curadoria
- Validacoes: 3 linters v3 basico e 3 contratos locais passaram individualmente
- Proxima acao concreta: iniciar `ind_a1`

### ind_a1 - História da Epidemiologia

- Status: pronta
- Classificacao inicial: vermelha
- Material: refatorado
- Questoes essenciais: 12/12 aprovadas
- Flashcards: 12/12 aprovados
- Imagem: pendente_curadoria
- Itens reaproveitados: tema antigo e figura placeholder, reescritos para contrato v3 basico
- Itens reescritos: material, refs e figura
- Itens arquivados: 6 questoes; 0 flashcards
- Validacoes rodadas: `node scripts\lint_ciclo_basico_v3.mjs ind_a1`; `node scripts\validate_ciclo_basico_aula.mjs ind_a1`; `npm run validate:questoes`; `node scripts\generate_ciclo_basico_queue.mjs`
- Proxima acao concreta: continuar em `ind_a2`

### ind_a2 - HND e Níveis de Prevenção

- Status: pronta
- Classificacao inicial: vermelha
- Material: refatorado
- Questoes essenciais: 12/12 aprovadas
- Flashcards: 12/12 aprovados
- Imagem: pendente_curadoria
- Itens reaproveitados: tema antigo e figura placeholder, reescritos para contrato v3 basico
- Itens reescritos: material, refs e figura
- Itens arquivados: 6 questoes; 0 flashcards
- Validacoes rodadas: `node scripts\lint_ciclo_basico_v3.mjs ind_a2`; `node scripts\validate_ciclo_basico_aula.mjs ind_a2`; `npm run validate:questoes`; `node scripts\generate_ciclo_basico_queue.mjs`
- Proxima acao concreta: continuar em `ind_a3`

### ind_a3 - Transição Epidemiológica, Demográfica e Nutricional

- Status: pronta
- Classificacao inicial: vermelha
- Material: refatorado
- Questoes essenciais: 12/12 aprovadas
- Flashcards: 12/12 aprovados
- Imagem: pendente_curadoria
- Itens reaproveitados: tema antigo e figura placeholder, reescritos para contrato v3 basico
- Itens reescritos: material, refs e figura
- Itens arquivados: 6 questoes; 0 flashcards
- Validacoes rodadas: `node scripts\lint_ciclo_basico_v3.mjs ind_a3`; `node scripts\validate_ciclo_basico_aula.mjs ind_a3`; `npm run validate:questoes`; `node scripts\generate_ciclo_basico_queue.mjs`
- Proxima acao concreta: continuar em `ind_a4`

### ind_a4 - Indicadores Demográficos

- Status: pronta
- Classificacao inicial: vermelha
- Material: refatorado
- Questoes essenciais: 12/12 aprovadas
- Flashcards: 12/12 aprovados
- Imagem: pendente_curadoria
- Itens reaproveitados: tema antigo e figura placeholder, reescritos para contrato v3 basico
- Itens reescritos: material, refs e figura
- Itens arquivados: 6 questoes; 0 flashcards
- Validacoes rodadas: `node scripts\lint_ciclo_basico_v3.mjs ind_a4`; `node scripts\validate_ciclo_basico_aula.mjs ind_a4`; `npm run validate:questoes`; `node scripts\generate_ciclo_basico_queue.mjs`
- Proxima acao concreta: continuar em `ind_a5`

### ind_a5 - Indicadores de Morbidade

- Status: pronta
- Classificacao inicial: vermelha
- Material: refatorado
- Questoes essenciais: 12/12 aprovadas
- Flashcards: 12/12 aprovados
- Imagem: pendente_curadoria
- Itens reaproveitados: tema antigo e figura placeholder, reescritos para contrato v3 basico
- Itens reescritos: material, refs e figura
- Itens arquivados: 6 questoes; 0 flashcards
- Validacoes rodadas: `node scripts\lint_ciclo_basico_v3.mjs ind_a5`; `node scripts\validate_ciclo_basico_aula.mjs ind_a5`; `npm run validate:questoes`; `node scripts\generate_ciclo_basico_queue.mjs`
- Proxima acao concreta: continuar em `ind_a6`

### ind_a6 - Indicadores de Mortalidade Geral e Específica

- Status: pronta
- Classificacao inicial: vermelha
- Material: refatorado
- Questoes essenciais: 12/12 aprovadas
- Flashcards: 12/12 aprovados
- Imagem: pendente_curadoria
- Itens reaproveitados: tema antigo e figura placeholder, reescritos para contrato v3 basico
- Itens reescritos: material, refs e figura
- Itens arquivados: 6 questoes; 0 flashcards
- Validacoes rodadas: `node scripts\lint_ciclo_basico_v3.mjs ind_a6`; `node scripts\validate_ciclo_basico_aula.mjs ind_a6`; `npm run validate:questoes`; `node scripts\generate_ciclo_basico_queue.mjs`
- Proxima acao concreta: continuar em `ind_a7`

### ind_a7 - Indicadores de Mortalidade Materno-Infantil e Perinatal

- Status: pronta
- Classificacao inicial: vermelha
- Material: refatorado
- Questoes essenciais: 12/12 aprovadas
- Flashcards: 12/12 aprovados
- Imagem: pendente_curadoria
- Itens reaproveitados: tema antigo e figura placeholder, reescritos para contrato v3 basico
- Itens reescritos: material, refs e figura
- Itens arquivados: 7 questoes; 0 flashcards
- Validacoes rodadas: `node scripts\lint_ciclo_basico_v3.mjs ind_a7`; `node scripts\validate_ciclo_basico_aula.mjs ind_a7`; `npm run validate:questoes`; `node scripts\generate_ciclo_basico_queue.mjs`
- Proxima acao concreta: continuar em `ind_a8`

### ind_a8 - Sistemas de Informação em Saúde

- Status: pronta
- Classificacao inicial: vermelha
- Material: refatorado
- Questoes essenciais: 12/12 aprovadas
- Flashcards: 12/12 aprovados
- Imagem: pendente_curadoria
- Itens reaproveitados: tema antigo, questoes antigas excessivas e figura placeholder, reescritos para contrato v3 basico
- Itens reescritos: material, refs e figura
- Itens arquivados: 106 questoes; 0 flashcards
- Validacoes rodadas: `node scripts\lint_ciclo_basico_v3.mjs ind_a8`; `node scripts\validate_ciclo_basico_aula.mjs ind_a8`; `npm run validate:questoes`; `node scripts\generate_ciclo_basico_queue.mjs`
- Proxima acao concreta: continuar em `ind_a9`

### ind_a9 - Bioestatística — Conceitos e Tipos de Variáveis

- Status: pronta
- Classificacao inicial: vermelha
- Material: refatorado
- Questoes essenciais: 12/12 aprovadas
- Flashcards: 12/12 aprovados
- Imagem: pendente_curadoria
- Itens reaproveitados: tema antigo e figura placeholder, reescritos para contrato v3 basico
- Itens reescritos: material, refs e figura
- Itens arquivados: 6 questoes; 0 flashcards
- Validacoes rodadas: `node scripts\lint_ciclo_basico_v3.mjs ind_a9`; `node scripts\validate_ciclo_basico_aula.mjs ind_a9`; `npm run validate:questoes`; `node scripts\generate_ciclo_basico_queue.mjs`
- Proxima acao concreta: continuar em `ind_a10`

### ind_a10 - Análise Descritiva — Tendência Central e Dispersão

- Status: pronta
- Classificacao inicial: vermelha
- Material: refatorado
- Questoes essenciais: 12/12 aprovadas
- Flashcards: 12/12 aprovados
- Imagem: pendente_curadoria
- Itens reaproveitados: tema antigo e figura placeholder, reescritos para contrato v3 basico
- Itens reescritos: material, refs e figura
- Itens arquivados: 6 questoes; 0 flashcards
- Validacoes rodadas: `node scripts\lint_ciclo_basico_v3.mjs ind_a10`; `node scripts\validate_ciclo_basico_aula.mjs ind_a10`; `npm run validate:questoes`; `node scripts\generate_ciclo_basico_queue.mjs`
- Proxima acao concreta: continuar em `ind_a11`

### ind_a11 - Análise Inferencial — Testes de Hipóteses

- Status: pronta
- Classificacao inicial: vermelha
- Material: refatorado
- Questoes essenciais: 12/12 aprovadas
- Flashcards: 12/12 aprovados
- Imagem: pendente_curadoria
- Itens reaproveitados: tema antigo e figura placeholder, reescritos para contrato v3 basico
- Itens reescritos: material, refs e figura
- Itens arquivados: 6 questoes; 0 flashcards
- Validacoes rodadas: `node scripts\lint_ciclo_basico_v3.mjs ind_a11`; `node scripts\validate_ciclo_basico_aula.mjs ind_a11`; `npm run validate:questoes`; `node scripts\generate_ciclo_basico_queue.mjs`
- Proxima acao concreta: concluir conferencia final do bloco Indicadores e seguir para `bcm1_a1`

### Bloco Indicadores - conferência final

- Status: completo no fluxo do Modulo 2
- Aulas: `ind_a1` a `ind_a11`
- Total final: 11 materiais v3 basico espelhados, 132 questoes essenciais, 132 flashcards, 11 slots de imagem pendentes de curadoria
- Validacoes: 11 linters v3 basico e 11 contratos locais passaram individualmente
- Proxima acao concreta: iniciar `bcm1_a1`

### DS + Indicadores - conferência final consolidada

- Status: completo e revalidado em lote
- Aulas: `ds_a1` a `ds_a3`; `ind_a1` a `ind_a11`
- Validacoes: 14 linters v3 basico passaram; 14 contratos locais passaram; `npm run validate:questoes` passou; `node scripts\generate_ciclo_basico_queue.mjs` passou
- Contagem DS: 36 questoes essenciais, 36 flashcards, 3 slots de imagem
- Contagem Indicadores: 132 questoes essenciais, 132 flashcards, 11 slots de imagem
- Ajuste final: `ds_a1` foi reaplicada porque a conferencia detectou perda dos flashcards `14273-14284`; depois disso, a aula voltou a 12/12 e o contrato passou
- Proxima acao concreta: iniciar `bcm1_a1`

### Modulo 2 parcial - conferência final ampliada

- Status: BMF2, Semiologia2, DS e Indicadores completos e revalidados em lote
- Aulas conferidas: 39
- Validacoes: 39 linters v3 basico passaram; 39 contratos locais passaram; `npm run validate:questoes` passou; `node scripts\generate_ciclo_basico_queue.mjs` passou
- Total final conferido: 468 questoes essenciais, 468 flashcards, 40 slots de imagem
- Por bloco: BMF2 192/192; Semiologia2 108/108; DS 36/36; Indicadores 132/132
- Ajustes finais: flashcards de BMF2/Semiologia2 foram restaurados; `bmf2_a16` foi reduzida de 201 para 199 linhas para remover warning do linter
- Fila atual: 263 aulas, 215 pendentes, 48 prontas
- Proxima acao concreta: iniciar `bcm1_a1`

### bcm1_a1 - Organização da Célula Eucariótica

- Status: pronta
- Classificacao inicial: vermelha
- Material: refatorado
- Questoes essenciais: 12/12 aprovadas
- Flashcards: 12/12 aprovados
- Imagem: pendente_curadoria
- Itens reaproveitados: tema antigo e figura placeholder, reescritos para contrato v3 basico
- Itens reescritos: material, refs e figura
- Itens arquivados: 6 questoes; 0 flashcards
- Validacoes rodadas: `node scripts\lint_ciclo_basico_v3.mjs bcm1_a1`; `node scripts\validate_ciclo_basico_aula.mjs bcm1_a1`; `npm run validate:questoes`; `node scripts\generate_ciclo_basico_queue.mjs`
- Proxima acao concreta: continuar em `bcm1_a2`


### mad2_a3 - Autoimunidade

- Status: fechada no contrato v3 basico.
- Material: espelhado, Mini Quiz funcional, Pre-Prova e refs reais.
- Questoes essenciais: 12/12; reaproveitadas `6305`-`6309`; novas `11229`-`11235`.
- Flashcards: 12/12; IDs `16360`-`16371`.
- Imagem: `MAD2-A3-F01` registrada para rodada posterior.
- Validacoes rodadas: `node scripts\\lint_ciclo_basico_v3.mjs mad2_a3` OK; `node scripts\\validate_ciclo_basico_aula.mjs mad2_a3` OK.

### bcm1_a2 - Tampões Biológicos e Gasometria

- Status: pronta
- Classificacao inicial: vermelha
- Material: refatorado
- Questoes essenciais: 12/12 aprovadas
- Flashcards: 12/12 aprovados
- Imagem: pendente_curadoria
- Itens reaproveitados: tema antigo e necessidade visual de fluxograma de gasometria, reescritos para contrato v3 basico
- Itens reescritos: material, refs e figura
- Itens arquivados: 20 questoes; 0 flashcards
- Validacoes rodadas: `node scripts\lint_ciclo_basico_v3.mjs bcm1_a2`; `node scripts\validate_ciclo_basico_aula.mjs bcm1_a2`; `npm run validate:questoes`; `node scripts\generate_ciclo_basico_queue.mjs`
- Proxima acao concreta: continuar em `bcm1_a3`


### mad2_a4 - Transplantes e Transfusao Sanguinea

- Status: fechada no contrato v3 basico.
- Material: espelhado, Mini Quiz funcional, Pre-Prova e refs reais.
- Questoes essenciais: 12/12; reaproveitadas `6310`-`6314`; novas `11236`-`11242`.
- Flashcards: 12/12; IDs `16372`-`16383`.
- Imagem: `MAD2-A4-F01` registrada para rodada posterior.
- Validacoes rodadas: `node scripts\\lint_ciclo_basico_v3.mjs mad2_a4` OK; `node scripts\\validate_ciclo_basico_aula.mjs mad2_a4` OK.

### mad2_a5 - ISTs Bacterianas

- Status: fechada no contrato v3 basico.
- Material: espelhado, Mini Quiz funcional, Pre-Prova e refs reais.
- Questoes essenciais: 12/12; reaproveitadas `6315`-`6318`; novas `11243`-`11250`; arquivada `355`.
- Flashcards: 12/12; IDs `16384`-`16395`.
- Imagem: `MAD2-A5-F01` registrada para rodada posterior.
- Validacoes rodadas: `node scripts\\lint_ciclo_basico_v3.mjs mad2_a5` OK; `node scripts\\validate_ciclo_basico_aula.mjs mad2_a5` OK.

### bcm1_a3 - Organização Genômica e Estrutura Gênica

- Status: pronta
- Classificacao inicial: vermelha
- Material: refatorado
- Questoes essenciais: 12/12 aprovadas
- Flashcards: 12/12 aprovados
- Imagem: pendente_curadoria
- Itens reaproveitados: tema antigo e necessidade visual de compactacao DNA-cromossomo, reescritos para contrato v3 basico
- Itens reescritos: material, refs e figura
- Itens arquivados: 10 questoes; 0 flashcards
- Validacoes rodadas: `node scripts\lint_ciclo_basico_v3.mjs bcm1_a3`; `node scripts\validate_ciclo_basico_aula.mjs bcm1_a3`; `npm run validate:questoes`; `node scripts\generate_ciclo_basico_queue.mjs`
- Proxima acao concreta: continuar em `bcm1_a4`

### mad2_a6 - Infecções Bacterianas do Tegumento e Hanseníase

- Status: fechada no contrato v3 basico.
- Material: espelhado, Mini Quiz funcional, Pre-Prova e refs reais.
- Questoes essenciais: 12/12; reaproveitadas `6319`-`6321`; novas `11251`-`11259`; arquivadas `270` e `5375`.
- Flashcards: 12/12; IDs `16396`-`16407`.
- Imagem: `MAD2-A6-F01` registrada para rodada posterior.
- Validacoes rodadas: `node scripts\\lint_ciclo_basico_v3.mjs mad2_a6` OK; `node scripts\\validate_ciclo_basico_aula.mjs mad2_a6` OK.

### bcm1_a4 - Sinalização Celular

- Status: pronta
- Classificacao inicial: vermelha
- Material: refatorado
- Questoes essenciais: 12/12 aprovadas
- Flashcards: 12/12 aprovados
- Imagem: pendente_curadoria
- Itens reaproveitados: tema antigo e necessidade visual de mapa de vias de sinalizacao, reescritos para contrato v3 basico
- Itens reescritos: material, refs e figura
- Itens arquivados: 12 questoes; 0 flashcards
- Validacoes rodadas: `node scripts\lint_ciclo_basico_v3.mjs bcm1_a4`; `node scripts\validate_ciclo_basico_aula.mjs bcm1_a4`; `npm run validate:questoes`; `node scripts\generate_ciclo_basico_queue.mjs`
- Proxima acao concreta: continuar em `bcm1_a5`

### bcm1_a5 - Replicação do DNA e PCR

- Status: pronta
- Classificacao inicial: vermelha
- Material: refatorado
- Questoes essenciais: 12/12 aprovadas
- Flashcards: 12/12 aprovados
- Imagem: pendente_curadoria
- Itens reaproveitados: tema antigo e necessidade visual de forquilha de replicacao/PCR, reescritos para contrato v3 basico
- Itens reescritos: material, refs e figura
- Itens arquivados: 6 questoes; 0 flashcards
- Validacoes rodadas: `node scripts\lint_ciclo_basico_v3.mjs bcm1_a5`; `node scripts\validate_ciclo_basico_aula.mjs bcm1_a5`; `npm run validate:questoes`; `node scripts\audit_ciclo_basico_report.mjs`; `node scripts\generate_ciclo_basico_queue.mjs`
- Proxima acao concreta: continuar em `bcm1_a6`


### mad2_a7 - Doenças Exantemáticas Virais

- Status: fechada no contrato v3 basico.
- Material: espelhado, Mini Quiz funcional, Pre-Prova e refs reais.
- Questoes essenciais: 12/12; reaproveitadas `6322`-`6326`; novas `11260`-`11266`.
- Flashcards: 12/12; IDs `16408`-`16419`.
- Imagem: `MAD2-A7-F01` registrada para rodada posterior.
- Validacoes rodadas: `node scripts\\lint_ciclo_basico_v3.mjs mad2_a7` OK; `node scripts\\validate_ciclo_basico_aula.mjs mad2_a7` OK.

### mad2_a8 - Hepatites Virais

- Status: fechada no contrato v3 basico.
- Material: espelhado, Mini Quiz funcional, Pre-Prova e refs reais.
- Questoes essenciais: 12/12; reaproveitadas `2192`-`2200`, `4445`, `4446`; nova `11267`.
- Flashcards: 12/12; IDs `16420`-`16431`.
- Itens arquivados: 88 questoes antigas fora do recorte.
- Imagem: `MAD2-A8-F01` registrada para rodada posterior.
- Validacoes rodadas: `node scripts\\lint_ciclo_basico_v3.mjs mad2_a8` OK; `node scripts\\validate_ciclo_basico_aula.mjs mad2_a8` OK.

### mad2_a19 - Antivirais

- Status: fechada no contrato v3 básico.
- Material: espelhado, Mini Quiz funcional, Pré-Prova e refs reais.
- Questões essenciais: 12/12 novas; IDs `11388`-`11399`.
- Flashcards: 12/12 novos; IDs `16552`-`16563`.
- Itens arquivados: 12 questões; 0 flashcards.
- Imagem: `MAD2-A19-F01` registrada para rodada posterior.
- Validações rodadas: `node scripts\\lint_ciclo_basico_v3.mjs mad2_a19` OK; `node scripts\\validate_ciclo_basico_aula.mjs mad2_a19` OK.

### bcm1_a6 - Transcrição e Controle da Expressão Gênica

- Status: pronta
- Classificacao inicial: vermelha
- Material: refatorado
- Questoes essenciais: 12/12 aprovadas
- Flashcards: 12/12 aprovados
- Imagem: pendente_curadoria
- Itens reaproveitados: tema antigo e necessidade visual de processamento de pre-mRNA, reescritos para contrato v3 basico
- Itens reescritos: material, refs e figura
- Itens arquivados: 6 questoes; 0 flashcards
- Validacoes rodadas: `node scripts\lint_ciclo_basico_v3.mjs bcm1_a6`; `node scripts\validate_ciclo_basico_aula.mjs bcm1_a6`; `npm run validate:questoes`; `node scripts\audit_ciclo_basico_report.mjs`; `node scripts\generate_ciclo_basico_queue.mjs`
- Proxima acao concreta: continuar em `bcm1_a7`

### bcm1_a7 - Tradução de Proteínas

- Status: pronta
- Classificacao inicial: vermelha
- Material: refatorado
- Questoes essenciais: 12/12 aprovadas
- Flashcards: 12/12 aprovados
- Imagem: pendente_curadoria
- Itens reaproveitados: tema antigo e necessidade visual de ribossomo com sitios A-P-E, reescritos para contrato v3 basico
- Itens reescritos: material, refs e figura
- Itens arquivados: 6 questoes; 0 flashcards
- Validacoes rodadas: `node scripts\lint_ciclo_basico_v3.mjs bcm1_a7`; `node scripts\validate_ciclo_basico_aula.mjs bcm1_a7`; `npm run validate:questoes`; `node scripts\audit_ciclo_basico_report.mjs`; `node scripts\generate_ciclo_basico_queue.mjs`
- Proxima acao concreta: continuar em `bcm1_a8`

<!-- MAD1_REFACTOR_2026_05_12_START -->

## MAD1 - Refatoracao ciclo basico v3 (2026-05-12T00:00:00-03:00)

### mad1_a1 - Funções Básicas e Componentes do Sistema Imune

- Status: pronta
- Classificacao inicial: vermelha
- Material: refatorado
- Questoes essenciais: 12/12 aprovadas
- Flashcards: 12/12 aprovados
- Imagem: pendente_curadoria
- Itens reaproveitados: topicos centrais do material e mapa de flashcards MAD1 existente
- Itens reescritos: questoes essenciais, flashcards cloze, refs e contrato editorial do Markdown
- Itens arquivados: questoes antigas de MAD1 preservadas em data/agent_logs/mad1_question_archive_2026-05-12.json
- Validacoes rodadas: linter v3 basico 24/24; validate_ciclo_basico_aula 24/24; validate:questoes OK; audit:questoes OK; audit:essenciais:local rodado; audit_flashcards rodado com MAD1 sem pendencias; validate:materiais global ainda falha fora de MAD1
- Proxima acao concreta: revisar visualmente a figura sugerida e preencher Commons quando houver imagem realmente util

### mad1_a2 - Imunidade Inata

- Status: pronta
- Classificacao inicial: vermelha
- Material: refatorado
- Questoes essenciais: 12/12 aprovadas
- Flashcards: 12/12 aprovados
- Imagem: pendente_curadoria
- Itens reaproveitados: topicos centrais do material e mapa de flashcards MAD1 existente
- Itens reescritos: questoes essenciais, flashcards cloze, refs e contrato editorial do Markdown
- Itens arquivados: questoes antigas de MAD1 preservadas em data/agent_logs/mad1_question_archive_2026-05-12.json
- Validacoes rodadas: linter v3 basico 24/24; validate_ciclo_basico_aula 24/24; validate:questoes OK; audit:questoes OK; audit:essenciais:local rodado; audit_flashcards rodado com MAD1 sem pendencias; validate:materiais global ainda falha fora de MAD1
- Proxima acao concreta: revisar visualmente a figura sugerida e preencher Commons quando houver imagem realmente util

### mad1_a3 - Imunidade Adaptativa

- Status: pronta
- Classificacao inicial: vermelha
- Material: refatorado
- Questoes essenciais: 12/12 aprovadas
- Flashcards: 12/12 aprovados
- Imagem: pendente_curadoria
- Itens reaproveitados: topicos centrais do material e mapa de flashcards MAD1 existente
- Itens reescritos: questoes essenciais, flashcards cloze, refs e contrato editorial do Markdown
- Itens arquivados: questoes antigas de MAD1 preservadas em data/agent_logs/mad1_question_archive_2026-05-12.json
- Validacoes rodadas: linter v3 basico 24/24; validate_ciclo_basico_aula 24/24; validate:questoes OK; audit:questoes OK; audit:essenciais:local rodado; audit_flashcards rodado com MAD1 sem pendencias; validate:materiais global ainda falha fora de MAD1
- Proxima acao concreta: revisar visualmente a figura sugerida e preencher Commons quando houver imagem realmente util

### mad1_a4 - Inflamação Aguda e Crônica

- Status: pronta
- Classificacao inicial: vermelha
- Material: refatorado
- Questoes essenciais: 12/12 aprovadas
- Flashcards: 12/12 aprovados
- Imagem: pendente_curadoria
- Itens reaproveitados: topicos centrais do material e mapa de flashcards MAD1 existente
- Itens reescritos: questoes essenciais, flashcards cloze, refs e contrato editorial do Markdown
- Itens arquivados: questoes antigas de MAD1 preservadas em data/agent_logs/mad1_question_archive_2026-05-12.json
- Validacoes rodadas: linter v3 basico 24/24; validate_ciclo_basico_aula 24/24; validate:questoes OK; audit:questoes OK; audit:essenciais:local rodado; audit_flashcards rodado com MAD1 sem pendencias; validate:materiais global ainda falha fora de MAD1
- Proxima acao concreta: revisar visualmente a figura sugerida e preencher Commons quando houver imagem realmente util

### mad1_a5 - Hemograma — Interpretação e Nomenclatura

- Status: pronta
- Classificacao inicial: vermelha
- Material: refatorado
- Questoes essenciais: 12/12 aprovadas
- Flashcards: 12/12 aprovados
- Imagem: pendente_curadoria
- Itens reaproveitados: topicos centrais do material e mapa de flashcards MAD1 existente
- Itens reescritos: questoes essenciais, flashcards cloze, refs e contrato editorial do Markdown
- Itens arquivados: questoes antigas de MAD1 preservadas em data/agent_logs/mad1_question_archive_2026-05-12.json
- Validacoes rodadas: linter v3 basico 24/24; validate_ciclo_basico_aula 24/24; validate:questoes OK; audit:questoes OK; audit:essenciais:local rodado; audit_flashcards rodado com MAD1 sem pendencias; validate:materiais global ainda falha fora de MAD1
- Proxima acao concreta: revisar visualmente a figura sugerida e preencher Commons quando houver imagem realmente util

### mad1_a6 - Imunização — Tipos de Vacinas

- Status: pronta
- Classificacao inicial: vermelha
- Material: refatorado
- Questoes essenciais: 12/12 aprovadas
- Flashcards: 12/12 aprovados
- Imagem: pendente_curadoria
- Itens reaproveitados: topicos centrais do material e mapa de flashcards MAD1 existente
- Itens reescritos: questoes essenciais, flashcards cloze, refs e contrato editorial do Markdown
- Itens arquivados: questoes antigas de MAD1 preservadas em data/agent_logs/mad1_question_archive_2026-05-12.json
- Validacoes rodadas: linter v3 basico 24/24; validate_ciclo_basico_aula 24/24; validate:questoes OK; audit:questoes OK; audit:essenciais:local rodado; audit_flashcards rodado com MAD1 sem pendencias; validate:materiais global ainda falha fora de MAD1
- Proxima acao concreta: revisar visualmente a figura sugerida e preencher Commons quando houver imagem realmente util

### mad1_a7 - Imunodeficiências

- Status: pronta
- Classificacao inicial: vermelha
- Material: refatorado
- Questoes essenciais: 12/12 aprovadas
- Flashcards: 12/12 aprovados
- Imagem: pendente_curadoria
- Itens reaproveitados: topicos centrais do material e mapa de flashcards MAD1 existente
- Itens reescritos: questoes essenciais, flashcards cloze, refs e contrato editorial do Markdown
- Itens arquivados: questoes antigas de MAD1 preservadas em data/agent_logs/mad1_question_archive_2026-05-12.json
- Validacoes rodadas: linter v3 basico 24/24; validate_ciclo_basico_aula 24/24; validate:questoes OK; audit:questoes OK; audit:essenciais:local rodado; audit_flashcards rodado com MAD1 sem pendencias; validate:materiais global ainda falha fora de MAD1
- Proxima acao concreta: revisar visualmente a figura sugerida e preencher Commons quando houver imagem realmente util

### mad1_a8 - Tolerância Imunológica e Autoimunidade

- Status: pronta
- Classificacao inicial: vermelha
- Material: refatorado
- Questoes essenciais: 12/12 aprovadas
- Flashcards: 12/12 aprovados
- Imagem: pendente_curadoria
- Itens reaproveitados: topicos centrais do material e mapa de flashcards MAD1 existente
- Itens reescritos: questoes essenciais, flashcards cloze, refs e contrato editorial do Markdown
- Itens arquivados: questoes antigas de MAD1 preservadas em data/agent_logs/mad1_question_archive_2026-05-12.json
- Validacoes rodadas: linter v3 basico 24/24; validate_ciclo_basico_aula 24/24; validate:questoes OK; audit:questoes OK; audit:essenciais:local rodado; audit_flashcards rodado com MAD1 sem pendencias; validate:materiais global ainda falha fora de MAD1
- Proxima acao concreta: revisar visualmente a figura sugerida e preencher Commons quando houver imagem realmente util

### mad1_a9 - Transplantes e Transfusão Sanguínea

- Status: pronta
- Classificacao inicial: vermelha
- Material: refatorado
- Questoes essenciais: 12/12 aprovadas
- Flashcards: 12/12 aprovados
- Imagem: pendente_curadoria
- Itens reaproveitados: topicos centrais do material e mapa de flashcards MAD1 existente
- Itens reescritos: questoes essenciais, flashcards cloze, refs e contrato editorial do Markdown
- Itens arquivados: questoes antigas de MAD1 preservadas em data/agent_logs/mad1_question_archive_2026-05-12.json
- Validacoes rodadas: linter v3 basico 24/24; validate_ciclo_basico_aula 24/24; validate:questoes OK; audit:questoes OK; audit:essenciais:local rodado; audit_flashcards rodado com MAD1 sem pendencias; validate:materiais global ainda falha fora de MAD1
- Proxima acao concreta: revisar visualmente a figura sugerida e preencher Commons quando houver imagem realmente util

### mad1_a10 - Hipersensibilidades (Tipos I a IV)

- Status: pronta
- Classificacao inicial: vermelha
- Material: refatorado
- Questoes essenciais: 12/12 aprovadas
- Flashcards: 12/12 aprovados
- Imagem: pendente_curadoria
- Itens reaproveitados: topicos centrais do material e mapa de flashcards MAD1 existente
- Itens reescritos: questoes essenciais, flashcards cloze, refs e contrato editorial do Markdown
- Itens arquivados: questoes antigas de MAD1 preservadas em data/agent_logs/mad1_question_archive_2026-05-12.json
- Validacoes rodadas: linter v3 basico 24/24; validate_ciclo_basico_aula 24/24; validate:questoes OK; audit:questoes OK; audit:essenciais:local rodado; audit_flashcards rodado com MAD1 sem pendencias; validate:materiais global ainda falha fora de MAD1
- Proxima acao concreta: revisar visualmente a figura sugerida e preencher Commons quando houver imagem realmente util

### mad1_a11 - Estrutura e Metabolismo Bacteriano

- Status: pronta
- Classificacao inicial: vermelha
- Material: refatorado
- Questoes essenciais: 12/12 aprovadas
- Flashcards: 12/12 aprovados
- Imagem: pendente_curadoria
- Itens reaproveitados: topicos centrais do material e mapa de flashcards MAD1 existente
- Itens reescritos: questoes essenciais, flashcards cloze, refs e contrato editorial do Markdown
- Itens arquivados: questoes antigas de MAD1 preservadas em data/agent_logs/mad1_question_archive_2026-05-12.json
- Validacoes rodadas: linter v3 basico 24/24; validate_ciclo_basico_aula 24/24; validate:questoes OK; audit:questoes OK; audit:essenciais:local rodado; audit_flashcards rodado com MAD1 sem pendencias; validate:materiais global ainda falha fora de MAD1
- Proxima acao concreta: revisar visualmente a figura sugerida e preencher Commons quando houver imagem realmente util

### mad1_a12 - ISTs Bacterianas — Treponema, Neisseria e Chlamydia

- Status: pronta
- Classificacao inicial: vermelha
- Material: refatorado
- Questoes essenciais: 12/12 aprovadas
- Flashcards: 12/12 aprovados
- Imagem: pendente_curadoria
- Itens reaproveitados: topicos centrais do material e mapa de flashcards MAD1 existente
- Itens reescritos: questoes essenciais, flashcards cloze, refs e contrato editorial do Markdown
- Itens arquivados: questoes antigas de MAD1 preservadas em data/agent_logs/mad1_question_archive_2026-05-12.json
- Validacoes rodadas: linter v3 basico 24/24; validate_ciclo_basico_aula 24/24; validate:questoes OK; audit:questoes OK; audit:essenciais:local rodado; audit_flashcards rodado com MAD1 sem pendencias; validate:materiais global ainda falha fora de MAD1
- Proxima acao concreta: revisar visualmente a figura sugerida e preencher Commons quando houver imagem realmente util

### mad1_a13 - Infecções Bacterianas do Sistema Tegumentar

- Status: pronta
- Classificacao inicial: vermelha
- Material: refatorado
- Questoes essenciais: 12/12 aprovadas
- Flashcards: 12/12 aprovados
- Imagem: pendente_curadoria
- Itens reaproveitados: topicos centrais do material e mapa de flashcards MAD1 existente
- Itens reescritos: questoes essenciais, flashcards cloze, refs e contrato editorial do Markdown
- Itens arquivados: questoes antigas de MAD1 preservadas em data/agent_logs/mad1_question_archive_2026-05-12.json
- Validacoes rodadas: linter v3 basico 24/24; validate_ciclo_basico_aula 24/24; validate:questoes OK; audit:questoes OK; audit:essenciais:local rodado; audit_flashcards rodado com MAD1 sem pendencias; validate:materiais global ainda falha fora de MAD1
- Proxima acao concreta: revisar visualmente a figura sugerida e preencher Commons quando houver imagem realmente util

### mad1_a14 - Infecções Bacterianas do Sistema Urinário

- Status: pronta
- Classificacao inicial: vermelha
- Material: refatorado
- Questoes essenciais: 12/12 aprovadas
- Flashcards: 12/12 aprovados
- Imagem: pendente_curadoria
- Itens reaproveitados: topicos centrais do material e mapa de flashcards MAD1 existente
- Itens reescritos: questoes essenciais, flashcards cloze, refs e contrato editorial do Markdown
- Itens arquivados: questoes antigas de MAD1 preservadas em data/agent_logs/mad1_question_archive_2026-05-12.json
- Validacoes rodadas: linter v3 basico 24/24; validate_ciclo_basico_aula 24/24; validate:questoes OK; audit:questoes OK; audit:essenciais:local rodado; audit_flashcards rodado com MAD1 sem pendencias; validate:materiais global ainda falha fora de MAD1
- Proxima acao concreta: revisar visualmente a figura sugerida e preencher Commons quando houver imagem realmente util

### mad1_a15 - Infecções por Gram-negativas e Mycobacterium tuberculosis

- Status: pronta
- Classificacao inicial: vermelha
- Material: refatorado
- Questoes essenciais: 12/12 aprovadas
- Flashcards: 12/12 aprovados
- Imagem: pendente_curadoria
- Itens reaproveitados: topicos centrais do material e mapa de flashcards MAD1 existente
- Itens reescritos: questoes essenciais, flashcards cloze, refs e contrato editorial do Markdown
- Itens arquivados: questoes antigas de MAD1 preservadas em data/agent_logs/mad1_question_archive_2026-05-12.json
- Validacoes rodadas: linter v3 basico 24/24; validate_ciclo_basico_aula 24/24; validate:questoes OK; audit:questoes OK; audit:essenciais:local rodado; audit_flashcards rodado com MAD1 sem pendencias; validate:materiais global ainda falha fora de MAD1
- Proxima acao concreta: revisar visualmente a figura sugerida e preencher Commons quando houver imagem realmente util

### mad1_a16 - Infecções Respiratórias Virais

- Status: pronta
- Classificacao inicial: vermelha
- Material: refatorado
- Questoes essenciais: 12/12 aprovadas
- Flashcards: 12/12 aprovados
- Imagem: pendente_curadoria
- Itens reaproveitados: topicos centrais do material e mapa de flashcards MAD1 existente
- Itens reescritos: questoes essenciais, flashcards cloze, refs e contrato editorial do Markdown
- Itens arquivados: questoes antigas de MAD1 preservadas em data/agent_logs/mad1_question_archive_2026-05-12.json
- Validacoes rodadas: linter v3 basico 24/24; validate_ciclo_basico_aula 24/24; validate:questoes OK; audit:questoes OK; audit:essenciais:local rodado; audit_flashcards rodado com MAD1 sem pendencias; validate:materiais global ainda falha fora de MAD1
- Proxima acao concreta: revisar visualmente a figura sugerida e preencher Commons quando houver imagem realmente util

### mad1_a17 - Infecções por Arbovírus

- Status: pronta
- Classificacao inicial: vermelha
- Material: refatorado
- Questoes essenciais: 12/12 aprovadas
- Flashcards: 12/12 aprovados
- Imagem: pendente_curadoria
- Itens reaproveitados: topicos centrais do material e mapa de flashcards MAD1 existente
- Itens reescritos: questoes essenciais, flashcards cloze, refs e contrato editorial do Markdown
- Itens arquivados: questoes antigas de MAD1 preservadas em data/agent_logs/mad1_question_archive_2026-05-12.json
- Validacoes rodadas: linter v3 basico 24/24; validate_ciclo_basico_aula 24/24; validate:questoes OK; audit:questoes OK; audit:essenciais:local rodado; audit_flashcards rodado com MAD1 sem pendencias; validate:materiais global ainda falha fora de MAD1
- Proxima acao concreta: revisar visualmente a figura sugerida e preencher Commons quando houver imagem realmente util

### mad1_a18 - Hepatites Virais (A, B, C, D, E)

- Status: pronta
- Classificacao inicial: vermelha
- Material: refatorado
- Questoes essenciais: 12/12 aprovadas
- Flashcards: 12/12 aprovados
- Imagem: pendente_curadoria
- Itens reaproveitados: topicos centrais do material e mapa de flashcards MAD1 existente
- Itens reescritos: questoes essenciais, flashcards cloze, refs e contrato editorial do Markdown
- Itens arquivados: questoes antigas de MAD1 preservadas em data/agent_logs/mad1_question_archive_2026-05-12.json
- Validacoes rodadas: linter v3 basico 24/24; validate_ciclo_basico_aula 24/24; validate:questoes OK; audit:questoes OK; audit:essenciais:local rodado; audit_flashcards rodado com MAD1 sem pendencias; validate:materiais global ainda falha fora de MAD1
- Proxima acao concreta: revisar visualmente a figura sugerida e preencher Commons quando houver imagem realmente util

### mad1_a19 - Infecção pelo HIV e AIDS

- Status: pronta
- Classificacao inicial: vermelha
- Material: refatorado
- Questoes essenciais: 12/12 aprovadas
- Flashcards: 12/12 aprovados
- Imagem: pendente_curadoria
- Itens reaproveitados: topicos centrais do material e mapa de flashcards MAD1 existente
- Itens reescritos: questoes essenciais, flashcards cloze, refs e contrato editorial do Markdown
- Itens arquivados: questoes antigas de MAD1 preservadas em data/agent_logs/mad1_question_archive_2026-05-12.json
- Validacoes rodadas: linter v3 basico 24/24; validate_ciclo_basico_aula 24/24; validate:questoes OK; audit:questoes OK; audit:essenciais:local rodado; audit_flashcards rodado com MAD1 sem pendencias; validate:materiais global ainda falha fora de MAD1
- Proxima acao concreta: revisar visualmente a figura sugerida e preencher Commons quando houver imagem realmente util

### mad1_a20 - Infecções por Herpesvírus

- Status: pronta
- Classificacao inicial: vermelha
- Material: refatorado
- Questoes essenciais: 12/12 aprovadas
- Flashcards: 12/12 aprovados
- Imagem: pendente_curadoria
- Itens reaproveitados: topicos centrais do material e mapa de flashcards MAD1 existente
- Itens reescritos: questoes essenciais, flashcards cloze, refs e contrato editorial do Markdown
- Itens arquivados: questoes antigas de MAD1 preservadas em data/agent_logs/mad1_question_archive_2026-05-12.json
- Validacoes rodadas: linter v3 basico 24/24; validate_ciclo_basico_aula 24/24; validate:questoes OK; audit:questoes OK; audit:essenciais:local rodado; audit_flashcards rodado com MAD1 sem pendencias; validate:materiais global ainda falha fora de MAD1
- Proxima acao concreta: revisar visualmente a figura sugerida e preencher Commons quando houver imagem realmente util

### mad1_a21 - Infecções Virais do SNC e Doenças Exantemáticas

- Status: pronta
- Classificacao inicial: vermelha
- Material: refatorado
- Questoes essenciais: 12/12 aprovadas
- Flashcards: 12/12 aprovados
- Imagem: pendente_curadoria
- Itens reaproveitados: topicos centrais do material e mapa de flashcards MAD1 existente
- Itens reescritos: questoes essenciais, flashcards cloze, refs e contrato editorial do Markdown
- Itens arquivados: questoes antigas de MAD1 preservadas em data/agent_logs/mad1_question_archive_2026-05-12.json
- Validacoes rodadas: linter v3 basico 24/24; validate_ciclo_basico_aula 24/24; validate:questoes OK; audit:questoes OK; audit:essenciais:local rodado; audit_flashcards rodado com MAD1 sem pendencias; validate:materiais global ainda falha fora de MAD1
- Proxima acao concreta: revisar visualmente a figura sugerida e preencher Commons quando houver imagem realmente util

### mad1_a22 - Parasitoses — Protozoários (Chagas, Malária, Leishmaniose)

- Status: pronta
- Classificacao inicial: vermelha
- Material: refatorado
- Questoes essenciais: 12/12 aprovadas
- Flashcards: 12/12 aprovados
- Imagem: pendente_curadoria
- Itens reaproveitados: topicos centrais do material e mapa de flashcards MAD1 existente
- Itens reescritos: questoes essenciais, flashcards cloze, refs e contrato editorial do Markdown
- Itens arquivados: questoes antigas de MAD1 preservadas em data/agent_logs/mad1_question_archive_2026-05-12.json
- Validacoes rodadas: linter v3 basico 24/24; validate_ciclo_basico_aula 24/24; validate:questoes OK; audit:questoes OK; audit:essenciais:local rodado; audit_flashcards rodado com MAD1 sem pendencias; validate:materiais global ainda falha fora de MAD1
- Proxima acao concreta: revisar visualmente a figura sugerida e preencher Commons quando houver imagem realmente util

### mad1_a23 - Helmintíases e Cestoidoses

- Status: pronta
- Classificacao inicial: vermelha
- Material: refatorado
- Questoes essenciais: 12/12 aprovadas
- Flashcards: 12/12 aprovados
- Imagem: pendente_curadoria
- Itens reaproveitados: topicos centrais do material e mapa de flashcards MAD1 existente
- Itens reescritos: questoes essenciais, flashcards cloze, refs e contrato editorial do Markdown
- Itens arquivados: questoes antigas de MAD1 preservadas em data/agent_logs/mad1_question_archive_2026-05-12.json
- Validacoes rodadas: linter v3 basico 24/24; validate_ciclo_basico_aula 24/24; validate:questoes OK; audit:questoes OK; audit:essenciais:local rodado; audit_flashcards rodado com MAD1 sem pendencias; validate:materiais global ainda falha fora de MAD1
- Proxima acao concreta: revisar visualmente a figura sugerida e preencher Commons quando houver imagem realmente util

### mad1_a24 - Infecções Fúngicas Sistêmicas e Superficiais

- Status: pronta
- Classificacao inicial: vermelha
- Material: refatorado
- Questoes essenciais: 12/12 aprovadas
- Flashcards: 12/12 aprovados
- Imagem: pendente_curadoria
- Itens reaproveitados: topicos centrais do material e mapa de flashcards MAD1 existente
- Itens reescritos: questoes essenciais, flashcards cloze, refs e contrato editorial do Markdown
- Itens arquivados: questoes antigas de MAD1 preservadas em data/agent_logs/mad1_question_archive_2026-05-12.json
- Validacoes rodadas: linter v3 basico 24/24; validate_ciclo_basico_aula 24/24; validate:questoes OK; audit:questoes OK; audit:essenciais:local rodado; audit_flashcards rodado com MAD1 sem pendencias; validate:materiais global ainda falha fora de MAD1
- Proxima acao concreta: revisar visualmente a figura sugerida e preencher Commons quando houver imagem realmente util

<!-- MAD1_REFACTOR_2026_05_12_END -->

### bcm1_a8 - Controle da Expressão Gênica e Doenças

- Status: pronta
- Classificacao inicial: vermelha
- Material: refatorado
- Questoes essenciais: 12/12 aprovadas
- Flashcards: 12/12 aprovados
- Imagem: pendente_curadoria
- Itens reaproveitados: tema antigo e necessidade visual de oncogene versus supressor, reescritos para contrato v3 basico
- Itens reescritos: material, refs e figura
- Itens arquivados: 6 questoes; 0 flashcards
- Validacoes rodadas: `node scripts\lint_ciclo_basico_v3.mjs bcm1_a8`; `node scripts\validate_ciclo_basico_aula.mjs bcm1_a8`; `npm run validate:questoes`; `node scripts\audit_ciclo_basico_report.mjs`; `node scripts\generate_ciclo_basico_queue.mjs`
- Proxima acao concreta: continuar em `bcm1_a9`

### bcm1_a9 - Necrose vs Apoptose

- Status: pronta
- Classificacao inicial: vermelha
- Material: refatorado
- Questoes essenciais: 12/12 aprovadas
- Flashcards: 12/12 aprovados
- Imagem: pendente_curadoria
- Itens reaproveitados: tema antigo e slot visual de necrose versus apoptose, reescritos para contrato v3 basico
- Itens reescritos: material, refs e figura
- Itens arquivados: 6 questoes; 0 flashcards
- Validacoes rodadas: `node scripts\lint_ciclo_basico_v3.mjs bcm1_a9`; `node scripts\validate_ciclo_basico_aula.mjs bcm1_a9`; `npm run validate:questoes`; `node scripts\audit_ciclo_basico_report.mjs`; `node scripts\generate_ciclo_basico_queue.mjs`
- Proxima acao concreta: continuar em `bcm1_a10`

### mad2_a9 - Infecção pelo HIV e AIDS

- Status: fechada no contrato v3 básico.
- Material: espelhado, Mini Quiz funcional, Pré-Prova e refs reais.
- Questões essenciais: 12/12 novas; IDs `11268`-`11279`.
- Flashcards: 12/12 novos; IDs `16432`-`16443`.
- Itens arquivados: 5 questões; 0 flashcards.
- Imagem: `MAD2-A9-F01` registrada para rodada posterior.
- Validações rodadas: `node scripts\\lint_ciclo_basico_v3.mjs mad2_a9` OK; `node scripts\\validate_ciclo_basico_aula.mjs mad2_a9` OK.

### mad2_a10 - Infecções por Herpesvírus

- Status: fechada no contrato v3 básico.
- Material: espelhado, Mini Quiz funcional, Pré-Prova e refs reais.
- Questões essenciais: 12/12 novas; IDs `11280`-`11291`.
- Flashcards: 12/12 novos; IDs `16444`-`16455`.
- Itens arquivados: 7 questões; 0 flashcards.
- Imagem: `MAD2-A10-F01` registrada para rodada posterior.
- Validações rodadas: `node scripts\\lint_ciclo_basico_v3.mjs mad2_a10` OK; `node scripts\\validate_ciclo_basico_aula.mjs mad2_a10` OK.

### mad2_a11 - Infecções Virais do SNC - Poliovírus

- Status: fechada no contrato v3 básico.
- Material: espelhado, Mini Quiz funcional, Pré-Prova e refs reais.
- Questões essenciais: 12/12 novas; IDs `11292`-`11303`.
- Flashcards: 12/12 novos; IDs `16456`-`16467`.
- Itens arquivados: 5 questões; 0 flashcards.
- Imagem: `MAD2-A11-F01` registrada para rodada posterior.
- Validações rodadas: `node scripts\\lint_ciclo_basico_v3.mjs mad2_a11` OK; `node scripts\\validate_ciclo_basico_aula.mjs mad2_a11` OK.

### mad2_a12 - Infecções por Arbovírus

- Status: fechada no contrato v3 básico.
- Material: espelhado, Mini Quiz funcional, Pré-Prova e refs reais.
- Questões essenciais: 12/12 novas; IDs `11304`-`11315`.
- Flashcards: 12/12 novos; IDs `16468`-`16479`.
- Itens arquivados: 5 questões; 0 flashcards.
- Imagem: `MAD2-A12-F01` registrada para rodada posterior.
- Validações rodadas: `node scripts\\lint_ciclo_basico_v3.mjs mad2_a12` OK; `node scripts\\validate_ciclo_basico_aula.mjs mad2_a12` OK.

### bcm1_a10 - Ciclo Celular - p53 e Rb1

- Status: pronta
- Classificacao inicial: vermelha
- Material: refatorado
- Questoes essenciais: 12/12 aprovadas
- Flashcards: 12/12 aprovados
- Imagem: pendente_curadoria
- Itens reaproveitados: tema antigo e slot visual de ciclo G1-S com p53 e Rb, reescritos para contrato v3 basico
- Itens reescritos: material, refs e figura
- Itens arquivados: 6 questoes; 0 flashcards
- Validacoes rodadas: `node scripts\lint_ciclo_basico_v3.mjs bcm1_a10`; `node scripts\validate_ciclo_basico_aula.mjs bcm1_a10`; `npm run validate:questoes`; `node scripts\audit_ciclo_basico_report.mjs`; `node scripts\generate_ciclo_basico_queue.mjs`
- Proxima acao concreta: continuar em `bcm1_a11`

### bcm1_a11 - Mutações, Agentes Mutagênicos e Reparo de DNA

- Status: pronta
- Classificacao inicial: vermelha
- Material: refatorado
- Questoes essenciais: 12/12 aprovadas
- Flashcards: 12/12 aprovados
- Imagem: pendente_curadoria
- Itens reaproveitados: tema antigo e slot visual de sistemas de reparo, reescritos para contrato v3 basico
- Itens reescritos: material, refs e figura
- Itens arquivados: 6 questoes; 0 flashcards
- Validacoes rodadas: `node scripts\lint_ciclo_basico_v3.mjs bcm1_a11`; `node scripts\validate_ciclo_basico_aula.mjs bcm1_a11`; `npm run validate:questoes`; `node scripts\audit_ciclo_basico_report.mjs`; `node scripts\generate_ciclo_basico_queue.mjs`
- Proxima acao concreta: continuar em `bcm1_a12`

### mad2_a13 - Protozooses - Malária, Chagas e Toxoplasmose

- Status: fechada no contrato v3 básico.
- Material: espelhado, Mini Quiz funcional, Pré-Prova e refs reais.
- Questões essenciais: 12/12 novas; IDs `11316`-`11327`.
- Flashcards: 12/12 novos; IDs `16480`-`16491`.
- Itens arquivados: 5 questões; 0 flashcards.
- Imagem: `MAD2-A13-F01` registrada para rodada posterior.
- Validações rodadas: `node scripts\\lint_ciclo_basico_v3.mjs mad2_a13` OK; `node scripts\\validate_ciclo_basico_aula.mjs mad2_a13` OK.

### mad2_a14 - Helmintíases - Nematódeos e Estrongiloidíase

- Status: fechada no contrato v3 básico.
- Material: espelhado, Mini Quiz funcional, Pré-Prova e refs reais.
- Questões essenciais: 12/12 novas; IDs `11328`-`11339`.
- Flashcards: 12/12 novos; IDs `16492`-`16503`.
- Itens arquivados: 5 questões; 0 flashcards.
- Imagem: `MAD2-A14-F01` registrada para rodada posterior.
- Validações rodadas: `node scripts\\lint_ciclo_basico_v3.mjs mad2_a14` OK; `node scripts\\validate_ciclo_basico_aula.mjs mad2_a14` OK.

### mad2_a15 - Cestoidoses - Teníase e Cisticercose

- Status: fechada no contrato v3 básico.
- Material: espelhado, Mini Quiz funcional, Pré-Prova e refs reais.
- Questões essenciais: 12/12 novas; IDs `11340`-`11351`.
- Flashcards: 12/12 novos; IDs `16504`-`16515`.
- Itens arquivados: 5 questões; 0 flashcards.
- Imagem: `MAD2-A15-F01` registrada para rodada posterior.
- Validações rodadas: `node scripts\\lint_ciclo_basico_v3.mjs mad2_a15` OK; `node scripts\\validate_ciclo_basico_aula.mjs mad2_a15` OK.

### bcm1_a12 - Biotecnologias e Bioinformática

- Status: pronta
- Classificacao inicial: vermelha
- Material: refatorado
- Questoes essenciais: 12/12 aprovadas
- Flashcards: 12/12 aprovados
- Imagem: pendente_curadoria
- Itens reaproveitados: tema antigo e slot visual de Sanger versus NGS, reescritos para contrato v3 basico
- Itens reescritos: material, refs e figura
- Itens arquivados: 6 questoes; 0 flashcards
- Validacoes rodadas: `node scripts\lint_ciclo_basico_v3.mjs bcm1_a12`; `node scripts\validate_ciclo_basico_aula.mjs bcm1_a12`; `npm run validate:questoes`; `node scripts\audit_ciclo_basico_report.mjs`; `node scripts\generate_ciclo_basico_queue.mjs`
- Proxima acao concreta: continuar em `bcm1_a13`

### bcm1_a13 - Genética Médica - Heredograma e Padrões de Herança

- Status: pronta
- Classificacao inicial: vermelha
- Material: refatorado
- Questoes essenciais: 12/12 aprovadas
- Flashcards: 12/12 aprovados
- Imagem: pendente_curadoria
- Itens reaproveitados: tema antigo e slot visual de heredogramas comparativos, reescritos para contrato v3 basico
- Itens reescritos: material, refs e figura
- Itens arquivados: 6 questoes; 0 flashcards
- Validacoes rodadas: `node scripts\lint_ciclo_basico_v3.mjs bcm1_a13`; `node scripts\validate_ciclo_basico_aula.mjs bcm1_a13`; `npm run validate:questoes`; `node scripts\audit_ciclo_basico_report.mjs`; `node scripts\generate_ciclo_basico_queue.mjs`
- Proxima acao concreta: continuar em `bcm1_a14`

### bcm1_a14 - Alterações Cromossômicas Numéricas

- Status: pronta
- Classificacao inicial: vermelha
- Material: refatorado
- Questoes essenciais: 12/12 aprovadas
- Flashcards: 12/12 aprovados
- Imagem: pendente_curadoria
- Itens reaproveitados: tema antigo e slot visual de cariotipos de trissomias, reescritos para contrato v3 basico
- Itens reescritos: material, refs e figura
- Itens arquivados: 6 questoes; 0 flashcards
- Validacoes rodadas: `node scripts\lint_ciclo_basico_v3.mjs bcm1_a14`; `node scripts\validate_ciclo_basico_aula.mjs bcm1_a14`; `npm run validate:questoes`; `node scripts\audit_ciclo_basico_report.mjs`; `node scripts\generate_ciclo_basico_queue.mjs`
- Proxima acao concreta: continuar em `bcm1_a15`

### bcm1_a15 - Alterações Cromossômicas Estruturais

- Status: pronta
- Classificacao inicial: vermelha
- Material: refatorado
- Questoes essenciais: 12/12 aprovadas
- Flashcards: 12/12 aprovados
- Imagem: pendente_curadoria
- Itens reaproveitados: tema antigo e slot visual de blocos cromossomicos, reescritos para contrato v3 basico
- Itens reescritos: material, refs e figura
- Itens arquivados: 5 questoes; 0 flashcards
- Validacoes rodadas: `node scripts\lint_ciclo_basico_v3.mjs bcm1_a15`; `node scripts\validate_ciclo_basico_aula.mjs bcm1_a15`; `npm run validate:questoes`; `node scripts\audit_ciclo_basico_report.mjs`; `node scripts\generate_ciclo_basico_queue.mjs`
- Proxima acao concreta: continuar em `bcm1_a16`

### mad2_a16 - Antibióticos - Inibidores de Síntese de Parede

- Status: fechada no contrato v3 básico.
- Material: espelhado, Mini Quiz funcional, Pré-Prova e refs reais.
- Questões essenciais: 12/12 novas; IDs `11352`-`11363`.
- Flashcards: 12/12 novos; IDs `16516`-`16527`.
- Itens arquivados: 5 questões; 0 flashcards.
- Imagem: `MAD2-A16-F01` registrada para rodada posterior.
- Validações rodadas: `node scripts\\lint_ciclo_basico_v3.mjs mad2_a16` OK; `node scripts\\validate_ciclo_basico_aula.mjs mad2_a16` OK.

### mad2_a17 - Antibióticos - Inibidores de Síntese Proteica

- Status: fechada no contrato v3 básico.
- Material: espelhado, Mini Quiz funcional, Pré-Prova e refs reais.
- Questões essenciais: 12/12 novas; IDs `11364`-`11375`.
- Flashcards: 12/12 novos; IDs `16528`-`16539`.
- Itens arquivados: 96 questões; 0 flashcards.
- Imagem: `MAD2-A17-F01` registrada para rodada posterior.
- Validações rodadas: `node scripts\\lint_ciclo_basico_v3.mjs mad2_a17` OK; `node scripts\\validate_ciclo_basico_aula.mjs mad2_a17` OK.

### mad2_a18 - Antibióticos - Inibidores de Síntese de DNA e Antimetabólitos

- Status: fechada no contrato v3 básico.
- Material: espelhado, Mini Quiz funcional, Pré-Prova e refs reais.
- Questões essenciais: 12/12 novas; IDs `11376`-`11387`.
- Flashcards: 12/12 novos; IDs `16540`-`16551`.
- Itens arquivados: 5 questões; 0 flashcards.
- Imagem: `MAD2-A18-F01` registrada para rodada posterior.
- Validações rodadas: `node scripts\\lint_ciclo_basico_v3.mjs mad2_a18` OK; `node scripts\\validate_ciclo_basico_aula.mjs mad2_a18` OK.

### mad2_a20 - Antiparasitários e Antifúngicos

- Status: fechada no contrato v3 básico.
- Material: espelhado, Mini Quiz funcional, Pré-Prova e refs reais.
- Questões essenciais: 12/12 novas; IDs `11400`-`11411`.
- Flashcards: 12/12 novos; IDs `16564`-`16575`.
- Itens arquivados: 5 questões; 0 flashcards.
- Imagem: `MAD2-A20-F01` registrada para rodada posterior.
- Validações rodadas: `node scripts\\lint_ciclo_basico_v3.mjs mad2_a20` OK; `node scripts\\validate_ciclo_basico_aula.mjs mad2_a20` OK.

### bcm1_a16 - Distúrbios de Diferenciação Sexual

- Status: pronta
- Classificacao inicial: vermelha
- Material: refatorado
- Questoes essenciais: 12/12 aprovadas
- Flashcards: 12/12 aprovados
- Imagem: pendente_curadoria
- Itens reaproveitados: tema antigo e slot visual de fluxograma SRY-AMH-DHT, reescritos para contrato v3 basico
- Itens reescritos: material, refs e figura
- Itens arquivados: 7 questoes; 0 flashcards
- Validacoes rodadas: `node scripts\lint_ciclo_basico_v3.mjs bcm1_a16`; `node scripts\validate_ciclo_basico_aula.mjs bcm1_a16`; `npm run validate:questoes`; `node scripts\audit_ciclo_basico_report.mjs`; `node scripts\generate_ciclo_basico_queue.mjs`
- Proxima acao concreta: continuar em `bcm1_a17`

### bcm1_a17 - Herança Ligada ao X - Dominante e Recessiva

- Status: pronta
- Classificacao inicial: vermelha
- Material: refatorado
- Questoes essenciais: 12/12 aprovadas
- Flashcards: 12/12 aprovados
- Imagem: pendente_curadoria
- Itens reaproveitados: tema antigo e slot visual de heredograma ligado ao X, reescritos para contrato v3 basico
- Itens reescritos: material, refs e figura
- Itens arquivados: 8 questoes; 0 flashcards
- Validacoes rodadas: `node scripts\lint_ciclo_basico_v3.mjs bcm1_a17`; `node scripts\validate_ciclo_basico_aula.mjs bcm1_a17`; `npm run validate:questoes`; `node scripts\audit_ciclo_basico_report.mjs`; `node scripts\generate_ciclo_basico_queue.mjs`
- Proxima acao concreta: continuar em `bcm1_a18`

### bcm1_a18 - Herança Autossômica Recessiva 1

- Status: pronta
- Classificacao inicial: vermelha
- Material: refatorado
- Questoes essenciais: 12/12 aprovadas
- Flashcards: 12/12 aprovados
- Imagem: pendente_curadoria
- Itens reaproveitados: regra autossomica recessiva e necessidade visual de CFTR, com escopo corrigido para catalogo BCM1
- Itens reescritos: material, refs e figura
- Itens arquivados: 12 questoes; 0 flashcards
- Validacoes rodadas: `node scripts\lint_ciclo_basico_v3.mjs bcm1_a18`; `node scripts\validate_ciclo_basico_aula.mjs bcm1_a18`; `npm run validate:questoes`; `node scripts\audit_ciclo_basico_report.mjs`; `node scripts\generate_ciclo_basico_queue.mjs`
- Proxima acao concreta: continuar em `bcm1_a19`

### bcm1_a19 - Herança Autossômica Recessiva 2 - Erros Inatos do Metabolismo

- Status: pronta
- Classificacao inicial: vermelha
- Material: refatorado
- Questoes essenciais: 12/12 aprovadas
- Flashcards: 12/12 aprovados
- Imagem: pendente_curadoria
- Itens reaproveitados: tema antigo de erros inatos, reescrito para foco correto em PKU, galactosemia e frutosemia
- Itens reescritos: material, refs e figura
- Itens arquivados: 7 questoes; 0 flashcards
- Validacoes rodadas: `node scripts\lint_ciclo_basico_v3.mjs bcm1_a19`; `node scripts\validate_ciclo_basico_aula.mjs bcm1_a19`; `npm run validate:questoes`; `node scripts\audit_ciclo_basico_report.mjs`; `node scripts\generate_ciclo_basico_queue.mjs`
- Proxima acao concreta: continuar em `bcm1_a20`

### bcm1_a20 - Herança Autossômica Dominante

- Status: pronta
- Classificacao inicial: vermelha
- Material: refatorado
- Questoes essenciais: 12/12 aprovadas
- Flashcards: 12/12 aprovados
- Imagem: pendente_curadoria
- Itens reaproveitados: padrao dominante e exemplos parcialmente aproveitados, reescritos para escopo do catalogo BCM1
- Itens reescritos: material, refs e figura
- Itens arquivados: 6 questoes; 0 flashcards
- Validacoes rodadas: `node scripts\lint_ciclo_basico_v3.mjs bcm1_a20`; `node scripts\validate_ciclo_basico_aula.mjs bcm1_a20`; `npm run validate:questoes`; `node scripts\audit_ciclo_basico_report.mjs`; `node scripts\generate_ciclo_basico_queue.mjs`
- Proxima acao concreta: `bcm1_a21` ja concluida; bloco BCM1 conferido no fechamento final

### bcm1_a21 - Herança Poligênica e Bases Genéticas do Câncer

- Status: pronta
- Classificacao inicial: vermelha
- Material: refatorado
- Questoes essenciais: 12/12 aprovadas
- Flashcards: 12/12 aprovados
- Imagem: pendente_curadoria
- Itens reaproveitados: tema antigo de multifatorial e cancer, reescrito para integracao v3 basico
- Itens reescritos: material, refs e figura
- Itens arquivados: 7 questoes; 0 flashcards
- Validacoes rodadas: `node scripts\lint_ciclo_basico_v3.mjs bcm1_a21`; `node scripts\validate_ciclo_basico_aula.mjs bcm1_a21`; `npm run validate:questoes`; `node scripts\audit_ciclo_basico_report.mjs`; `node scripts\generate_ciclo_basico_queue.mjs`
- Proxima acao concreta: bloco BCM1 conferido; proxima frente do Modulo 2 depende de nova priorizacao

### fp3_a1 - Patologia Geral - Lesão Celular e Morte Celular

- Status: fechada no contrato v3 básico.
- Material: espelhado, Mini Quiz funcional, Pré-Prova e refs reais.
- Questões essenciais: 12/12 novas; IDs `11412`-`11423`.
- Flashcards: 12/12 novos; IDs `16576`-`16587`.
- Itens arquivados: 9 questões; 0 flashcards.
- Imagem: `FP3-A1-F01` registrada para rodada posterior.
- Validações rodadas: `node scripts\\lint_ciclo_basico_v3.mjs fp3_a1` OK; `node scripts\\validate_ciclo_basico_aula.mjs fp3_a1` OK.

### fp3_a2 - Distúrbios Hemodinâmicos

- Status: fechada no contrato v3 básico.
- Material: espelhado, Mini Quiz funcional, Pré-Prova e refs reais.
- Questões essenciais: 12/12 novas; IDs `11424`-`11435`.
- Flashcards: 12/12 novos; IDs `16588`-`16599`.
- Itens arquivados: 7 questões; 0 flashcards.
- Imagem: `FP3-A2-F01` registrada para rodada posterior.
- Validações rodadas: `node scripts\\lint_ciclo_basico_v3.mjs fp3_a2` OK; `node scripts\\validate_ciclo_basico_aula.mjs fp3_a2` OK.

### fp3_a3 - Princípios de Farmacoterapia

- Status: fechada no contrato v3 básico.
- Material: espelhado, Mini Quiz funcional, Pré-Prova e refs reais.
- Questões essenciais: 12/12 novas; IDs `11436`-`11447`.
- Flashcards: 12/12 novos; IDs `16600`-`16611`.
- Itens arquivados: 19 questões; 0 flashcards.
- Imagem: `FP3-A3-F01` registrada para rodada posterior.
- Validações rodadas: `node scripts\\lint_ciclo_basico_v3.mjs fp3_a3` OK; `node scripts\\validate_ciclo_basico_aula.mjs fp3_a3` OK.

### fp3_a4 - Farmacologia do SNA Simpático e Substâncias Vasoativas

- Status: fechada no contrato v3 básico.
- Material: espelhado, Mini Quiz funcional, Pré-Prova e refs reais.
- Questões essenciais: 12/12 novas; IDs `11448`-`11459`.
- Flashcards: 12/12 novos; IDs `16612`-`16623`.
- Itens arquivados: 7 questões; 0 flashcards.
- Imagem: `FP3-A4-F01` registrada para rodada posterior.
- Validações rodadas: `node scripts\\lint_ciclo_basico_v3.mjs fp3_a4` OK; `node scripts\\validate_ciclo_basico_aula.mjs fp3_a4` OK.

### fp3_a5 - Farmacologia do SNA Parassimpático

- Status: fechada no contrato v3 básico.
- Material: espelhado, Mini Quiz funcional, Pré-Prova e refs reais.
- Questões essenciais: 12/12 novas; IDs `11460`-`11471`.
- Flashcards: 12/12 novos; IDs `16624`-`16635`.
- Itens arquivados: 6 questões; 0 flashcards.
- Imagem: `FP3-A5-F01` registrada para rodada posterior.
- Validações rodadas: `node scripts\\lint_ciclo_basico_v3.mjs fp3_a5` OK; `node scripts\\validate_ciclo_basico_aula.mjs fp3_a5` OK.

### fp3_a6 - Inflamação - Morfologia e Reparo Tecidual

- Status: fechada no contrato v3 básico.
- Material: espelhado, Mini Quiz funcional, Pré-Prova e refs reais.
- Questões essenciais: 12/12 novas; IDs `11472`-`11483`.
- Flashcards: 12/12 novos; IDs `16636`-`16647`.
- Itens arquivados: 5 questões; 0 flashcards.
- Imagem: `FP3-A6-F01` registrada para rodada posterior.
- Validações rodadas: `node scripts\\lint_ciclo_basico_v3.mjs fp3_a6` OK; `node scripts\\validate_ciclo_basico_aula.mjs fp3_a6` OK.

### fp3_a7 - Anti-inflamatórios - AINEs e Corticoides

- Status: fechada no contrato v3 básico.
- Material: espelhado, Mini Quiz funcional, Pré-Prova e refs reais.
- Questões essenciais: 12/12 novas; IDs `11484`-`11495`.
- Flashcards: 12/12 novos; IDs `16648`-`16659`.
- Itens arquivados: 5 questões; 0 flashcards.
- Imagem: `FP3-A7-F01` registrada para rodada posterior.
- Validações rodadas: `node scripts\\lint_ciclo_basico_v3.mjs fp3_a7` OK; `node scripts\\validate_ciclo_basico_aula.mjs fp3_a7` OK.

### fp3_a8 - Neoplasias

- Status: fechada no contrato v3 básico.
- Material: espelhado, Mini Quiz funcional, Pré-Prova e refs reais.
- Questões essenciais: 12/12 novas; IDs `11496`-`11507`.
- Flashcards: 12/12 novos; IDs `16660`-`16671`.
- Itens arquivados: 100 questões; 0 flashcards.
- Imagem: `FP3-A8-F01` registrada para rodada posterior.
- Validações rodadas: `node scripts\\lint_ciclo_basico_v3.mjs fp3_a8` OK; `node scripts\\validate_ciclo_basico_aula.mjs fp3_a8` OK.

### fp3_a9 - Farmacoterapia Antineoplásica

- Status: fechada no contrato v3 básico.
- Material: espelhado, Mini Quiz funcional, Pré-Prova e refs reais.
- Questões essenciais: 12/12 novas; IDs `11508`-`11519`.
- Flashcards: 12/12 novos; IDs `16672`-`16683`.
- Itens arquivados: 5 questões; 0 flashcards.
- Imagem: `FP3-A9-F01` registrada para rodada posterior.
- Validações rodadas: `node scripts\\lint_ciclo_basico_v3.mjs fp3_a9` OK; `node scripts\\validate_ciclo_basico_aula.mjs fp3_a9` OK.

### fp3_a10 - Patologias das Vias Urinárias e Glomerulopatias

- Status: fechada no contrato v3 básico.
- Material: espelhado, Mini Quiz funcional, Pré-Prova e refs reais.
- Questões essenciais: 12/12 novas; IDs `11520`-`11531`.
- Flashcards: 12/12 novos; IDs `16684`-`16695`.
- Itens arquivados: 6 questões; 0 flashcards.
- Imagem: `FP3-A10-F01` registrada para rodada posterior.
- Validações rodadas: `node scripts\\lint_ciclo_basico_v3.mjs fp3_a10` OK; `node scripts\\validate_ciclo_basico_aula.mjs fp3_a10` OK.

### fp3_a11 - Doenças da Suprarrenal e Próstata

- Status: fechada no contrato v3 básico.
- Material: espelhado, Mini Quiz funcional, Pré-Prova e refs reais.
- Questões essenciais: 12/12 novas; IDs `11532`-`11543`.
- Flashcards: 12/12 novos; IDs `16696`-`16707`.
- Itens arquivados: 5 questões; 0 flashcards.
- Imagem: `FP3-A11-F01` registrada para rodada posterior.
- Validações rodadas: `node scripts\\lint_ciclo_basico_v3.mjs fp3_a11` OK; `node scripts\\validate_ciclo_basico_aula.mjs fp3_a11` OK.

### fp3_a12 - Doenças do Aparelho Reprodutor Feminino

- Status: fechada no contrato v3 básico.
- Material: espelhado, Mini Quiz funcional, Pré-Prova e refs reais.
- Questões essenciais: 12/12 novas; IDs `11544`-`11555`.
- Flashcards: 12/12 novos; IDs `16708`-`16719`.
- Itens arquivados: 98 questões; 0 flashcards.
- Imagem: `FP3-A12-F01` registrada para rodada posterior.
- Validações rodadas: `node scripts\\lint_ciclo_basico_v3.mjs fp3_a12` OK; `node scripts\\validate_ciclo_basico_aula.mjs fp3_a12` OK.

### fp3_a13 - Mama - Doenças Benignas e Malignas

- Status: fechada no contrato v3 básico.
- Material: espelhado, Mini Quiz funcional, Pré-Prova e refs reais.
- Questões essenciais: 12/12 novas; IDs `11556`-`11567`.
- Flashcards: 12/12 novos; IDs `16720`-`16731`.
- Itens arquivados: 5 questões; 0 flashcards.
- Imagem: `FP3-A13-F01` registrada para rodada posterior.
- Validações rodadas: `node scripts\\lint_ciclo_basico_v3.mjs fp3_a13` OK; `node scripts\\validate_ciclo_basico_aula.mjs fp3_a13` OK.

### fp3_a14 - Farmacologia do Sistema Geniturinário Masculino

- Status: fechada no contrato v3 básico.
- Material: espelhado, Mini Quiz funcional, Pré-Prova e refs reais.
- Questões essenciais: 12/12 novas; IDs `11568`-`11579`.
- Flashcards: 12/12 novos; IDs `16732`-`16743`.
- Itens arquivados: 5 questões; 0 flashcards.
- Imagem: `FP3-A14-F01` registrada para rodada posterior.
- Validações rodadas: `node scripts\\lint_ciclo_basico_v3.mjs fp3_a14` OK; `node scripts\\validate_ciclo_basico_aula.mjs fp3_a14` OK.

### fp3_a15 - Farmacologia do Sistema Geniturinário Feminino

- Status: fechada no contrato v3 básico.
- Material: espelhado, Mini Quiz funcional, Pré-Prova e refs reais.
- Questões essenciais: 12/12 novas; IDs `11580`-`11591`.
- Flashcards: 12/12 novos; IDs `16744`-`16755`.
- Itens arquivados: 5 questões; 0 flashcards.
- Imagem: `FP3-A15-F01` registrada para rodada posterior.
- Validações rodadas: `node scripts\\lint_ciclo_basico_v3.mjs fp3_a15` OK; `node scripts\\validate_ciclo_basico_aula.mjs fp3_a15` OK.

<!-- MAD1_PREMIUM_PASS_START -->

## MAD1 - Premium pass 2026-05-12

- Escopo: MAD1 completo, módulo 2, uma aula por chamada do aplicador local.
- Critério: material espelhado, 12 essenciais não formulaicas, 12 flashcards cloze, refs e slot de imagem.

### mad1_a1 - Funções Básicas e Componentes do Sistema Imune

- Status: premium pass aplicado.
- Material: refeito em espelho, com prosa guiada, Mini Quiz e Pré-Prova.
- Questões essenciais: 12/12 reescritas com stems variados e explicações por alternativa.
- Flashcards: 12/12 reescritos com cloze único.
- Imagem: slot curado pendente de asset real.
- Validações previstas: `node scripts\lint_ciclo_basico_v3.mjs mad1_a1`; `node scripts\validate_ciclo_basico_aula.mjs mad1_a1`.

### mad1_a2 - Imunidade Inata

- Status: premium pass aplicado.
- Material: refeito em espelho, com prosa guiada, Mini Quiz e Pré-Prova.
- Questões essenciais: 12/12 reescritas com stems variados e explicações por alternativa.
- Flashcards: 12/12 reescritos com cloze único.
- Imagem: slot curado pendente de asset real.
- Validações previstas: `node scripts\lint_ciclo_basico_v3.mjs mad1_a2`; `node scripts\validate_ciclo_basico_aula.mjs mad1_a2`.

### mad1_a3 - Imunidade Adaptativa

- Status: premium pass aplicado.
- Material: refeito em espelho, com prosa guiada, Mini Quiz e Pré-Prova.
- Questões essenciais: 12/12 reescritas com stems variados e explicações por alternativa.
- Flashcards: 12/12 reescritos com cloze único.
- Imagem: slot curado pendente de asset real.
- Validações previstas: `node scripts\lint_ciclo_basico_v3.mjs mad1_a3`; `node scripts\validate_ciclo_basico_aula.mjs mad1_a3`.

### mad1_a4 - Inflamação Aguda e Crônica

- Status: premium pass aplicado.
- Material: refeito em espelho, com prosa guiada, Mini Quiz e Pré-Prova.
- Questões essenciais: 12/12 reescritas com stems variados e explicações por alternativa.
- Flashcards: 12/12 reescritos com cloze único.
- Imagem: slot curado pendente de asset real.
- Validações previstas: `node scripts\lint_ciclo_basico_v3.mjs mad1_a4`; `node scripts\validate_ciclo_basico_aula.mjs mad1_a4`.

### mad1_a5 - Hemograma — Interpretação e Nomenclatura

- Status: premium pass aplicado.
- Material: refeito em espelho, com prosa guiada, Mini Quiz e Pré-Prova.
- Questões essenciais: 12/12 reescritas com stems variados e explicações por alternativa.
- Flashcards: 12/12 reescritos com cloze único.
- Imagem: slot curado pendente de asset real.
- Validações previstas: `node scripts\lint_ciclo_basico_v3.mjs mad1_a5`; `node scripts\validate_ciclo_basico_aula.mjs mad1_a5`.

### mad1_a6 - Imunização — Tipos de Vacinas

- Status: premium pass aplicado.
- Material: refeito em espelho, com prosa guiada, Mini Quiz e Pré-Prova.
- Questões essenciais: 12/12 reescritas com stems variados e explicações por alternativa.
- Flashcards: 12/12 reescritos com cloze único.
- Imagem: slot curado pendente de asset real.
- Validações previstas: `node scripts\lint_ciclo_basico_v3.mjs mad1_a6`; `node scripts\validate_ciclo_basico_aula.mjs mad1_a6`.

### mad1_a7 - Imunodeficiências

- Status: premium pass aplicado.
- Material: refeito em espelho, com prosa guiada, Mini Quiz e Pré-Prova.
- Questões essenciais: 12/12 reescritas com stems variados e explicações por alternativa.
- Flashcards: 12/12 reescritos com cloze único.
- Imagem: slot curado pendente de asset real.
- Validações previstas: `node scripts\lint_ciclo_basico_v3.mjs mad1_a7`; `node scripts\validate_ciclo_basico_aula.mjs mad1_a7`.

### mad1_a8 - Tolerância Imunológica e Autoimunidade

- Status: premium pass aplicado.
- Material: refeito em espelho, com prosa guiada, Mini Quiz e Pré-Prova.
- Questões essenciais: 12/12 reescritas com stems variados e explicações por alternativa.
- Flashcards: 12/12 reescritos com cloze único.
- Imagem: slot curado pendente de asset real.
- Validações previstas: `node scripts\lint_ciclo_basico_v3.mjs mad1_a8`; `node scripts\validate_ciclo_basico_aula.mjs mad1_a8`.

### mad1_a9 - Transplantes e Transfusão Sanguínea

- Status: premium pass aplicado.
- Material: refeito em espelho, com prosa guiada, Mini Quiz e Pré-Prova.
- Questões essenciais: 12/12 reescritas com stems variados e explicações por alternativa.
- Flashcards: 12/12 reescritos com cloze único.
- Imagem: slot curado pendente de asset real.
- Validações previstas: `node scripts\lint_ciclo_basico_v3.mjs mad1_a9`; `node scripts\validate_ciclo_basico_aula.mjs mad1_a9`.

### mad1_a10 - Hipersensibilidades (Tipos I a IV)

- Status: premium pass aplicado.
- Material: refeito em espelho, com prosa guiada, Mini Quiz e Pré-Prova.
- Questões essenciais: 12/12 reescritas com stems variados e explicações por alternativa.
- Flashcards: 12/12 reescritos com cloze único.
- Imagem: slot curado pendente de asset real.
- Validações previstas: `node scripts\lint_ciclo_basico_v3.mjs mad1_a10`; `node scripts\validate_ciclo_basico_aula.mjs mad1_a10`.

### mad1_a11 - Estrutura e Metabolismo Bacteriano

- Status: premium pass aplicado.
- Material: refeito em espelho, com prosa guiada, Mini Quiz e Pré-Prova.
- Questões essenciais: 12/12 reescritas com stems variados e explicações por alternativa.
- Flashcards: 12/12 reescritos com cloze único.
- Imagem: slot curado pendente de asset real.
- Validações previstas: `node scripts\lint_ciclo_basico_v3.mjs mad1_a11`; `node scripts\validate_ciclo_basico_aula.mjs mad1_a11`.

### mad1_a12 - ISTs Bacterianas — Treponema, Neisseria e Chlamydia

- Status: premium pass aplicado.
- Material: refeito em espelho, com prosa guiada, Mini Quiz e Pré-Prova.
- Questões essenciais: 12/12 reescritas com stems variados e explicações por alternativa.
- Flashcards: 12/12 reescritos com cloze único.
- Imagem: slot curado pendente de asset real.
- Validações previstas: `node scripts\lint_ciclo_basico_v3.mjs mad1_a12`; `node scripts\validate_ciclo_basico_aula.mjs mad1_a12`.

### mad1_a13 - Infecções Bacterianas — Tegumento

- Status: premium pass aplicado.
- Material: refeito em espelho, com prosa guiada, Mini Quiz e Pré-Prova.
- Questões essenciais: 12/12 reescritas com stems variados e explicações por alternativa.
- Flashcards: 12/12 reescritos com cloze único.
- Imagem: slot curado pendente de asset real.
- Validações previstas: `node scripts\lint_ciclo_basico_v3.mjs mad1_a13`; `node scripts\validate_ciclo_basico_aula.mjs mad1_a13`.

### mad1_a14 - Infecções Bacterianas — Urinário

- Status: premium pass aplicado.
- Material: refeito em espelho, com prosa guiada, Mini Quiz e Pré-Prova.
- Questões essenciais: 12/12 reescritas com stems variados e explicações por alternativa.
- Flashcards: 12/12 reescritos com cloze único.
- Imagem: slot curado pendente de asset real.
- Validações previstas: `node scripts\lint_ciclo_basico_v3.mjs mad1_a14`; `node scripts\validate_ciclo_basico_aula.mjs mad1_a14`.

### mad1_a15 - Gram-negativos e Mycobacterium tuberculosis

- Status: premium pass aplicado.
- Material: refeito em espelho, com prosa guiada, Mini Quiz e Pré-Prova.
- Questões essenciais: 12/12 reescritas com stems variados e explicações por alternativa.
- Flashcards: 12/12 reescritos com cloze único.
- Imagem: slot curado pendente de asset real.
- Validações previstas: `node scripts\lint_ciclo_basico_v3.mjs mad1_a15`; `node scripts\validate_ciclo_basico_aula.mjs mad1_a15`.

### mad1_a16 - Infecções Respiratórias Virais

- Status: premium pass aplicado.
- Material: refeito em espelho, com prosa guiada, Mini Quiz e Pré-Prova.
- Questões essenciais: 12/12 reescritas com stems variados e explicações por alternativa.
- Flashcards: 12/12 reescritos com cloze único.
- Imagem: slot curado pendente de asset real.
- Validações previstas: `node scripts\lint_ciclo_basico_v3.mjs mad1_a16`; `node scripts\validate_ciclo_basico_aula.mjs mad1_a16`.

### mad1_a17 - Infecções por Arbovírus

- Status: premium pass aplicado.
- Material: refeito em espelho, com prosa guiada, Mini Quiz e Pré-Prova.
- Questões essenciais: 12/12 reescritas com stems variados e explicações por alternativa.
- Flashcards: 12/12 reescritos com cloze único.
- Imagem: slot curado pendente de asset real.
- Validações previstas: `node scripts\lint_ciclo_basico_v3.mjs mad1_a17`; `node scripts\validate_ciclo_basico_aula.mjs mad1_a17`.

### mad1_a18 - Hepatites Virais (A, B, C, D, E)

- Status: premium pass aplicado.
- Material: refeito em espelho, com prosa guiada, Mini Quiz e Pré-Prova.
- Questões essenciais: 12/12 reescritas com stems variados e explicações por alternativa.
- Flashcards: 12/12 reescritos com cloze único.
- Imagem: slot curado pendente de asset real.
- Validações previstas: `node scripts\lint_ciclo_basico_v3.mjs mad1_a18`; `node scripts\validate_ciclo_basico_aula.mjs mad1_a18`.

### mad1_a19 - Infecção pelo HIV e AIDS

- Status: premium pass aplicado.
- Material: refeito em espelho, com prosa guiada, Mini Quiz e Pré-Prova.
- Questões essenciais: 12/12 reescritas com stems variados e explicações por alternativa.
- Flashcards: 12/12 reescritos com cloze único.
- Imagem: slot curado pendente de asset real.
- Validações previstas: `node scripts\lint_ciclo_basico_v3.mjs mad1_a19`; `node scripts\validate_ciclo_basico_aula.mjs mad1_a19`.

### mad1_a20 - Infecções por Herpesvírus

- Status: premium pass aplicado.
- Material: refeito em espelho, com prosa guiada, Mini Quiz e Pré-Prova.
- Questões essenciais: 12/12 reescritas com stems variados e explicações por alternativa.
- Flashcards: 12/12 reescritos com cloze único.
- Imagem: slot curado pendente de asset real.
- Validações previstas: `node scripts\lint_ciclo_basico_v3.mjs mad1_a20`; `node scripts\validate_ciclo_basico_aula.mjs mad1_a20`.

### mad1_a21 - Infecções Virais do SNC e Doenças Exantemáticas

- Status: premium pass aplicado.
- Material: refeito em espelho, com prosa guiada, Mini Quiz e Pré-Prova.
- Questões essenciais: 12/12 reescritas com stems variados e explicações por alternativa.
- Flashcards: 12/12 reescritos com cloze único.
- Imagem: slot curado pendente de asset real.
- Validações previstas: `node scripts\lint_ciclo_basico_v3.mjs mad1_a21`; `node scripts\validate_ciclo_basico_aula.mjs mad1_a21`.

### mad1_a22 - Parasitoses — Protozoários (Chagas, Malária, Leishmaniose)

- Status: premium pass aplicado.
- Material: refeito em espelho, com prosa guiada, Mini Quiz e Pré-Prova.
- Questões essenciais: 12/12 reescritas com stems variados e explicações por alternativa.
- Flashcards: 12/12 reescritos com cloze único.
- Imagem: slot curado pendente de asset real.
- Validações previstas: `node scripts\lint_ciclo_basico_v3.mjs mad1_a22`; `node scripts\validate_ciclo_basico_aula.mjs mad1_a22`.

### mad1_a23 - Helmintíases e Cestoidoses

- Status: premium pass aplicado.
- Material: refeito em espelho, com prosa guiada, Mini Quiz e Pré-Prova.
- Questões essenciais: 12/12 reescritas com stems variados e explicações por alternativa.
- Flashcards: 12/12 reescritos com cloze único.
- Imagem: slot curado pendente de asset real.
- Validações previstas: `node scripts\lint_ciclo_basico_v3.mjs mad1_a23`; `node scripts\validate_ciclo_basico_aula.mjs mad1_a23`.

### mad1_a24 - Infecções Fúngicas Sistêmicas e Superficiais

- Status: premium pass aplicado.
- Material: refeito em espelho, com prosa guiada, Mini Quiz e Pré-Prova.
- Questões essenciais: 12/12 reescritas com stems variados e explicações por alternativa.
- Flashcards: 12/12 reescritos com cloze único.
- Imagem: slot curado pendente de asset real.
- Validações previstas: `node scripts\lint_ciclo_basico_v3.mjs mad1_a24`; `node scripts\validate_ciclo_basico_aula.mjs mad1_a24`.

<!-- MAD1_PREMIUM_PASS_END -->
