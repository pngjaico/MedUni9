# Decisões por Disciplina — Escala Uninove

Base: `docs/relatorio_waves_uninove.json` + auditorias/relatórios vigentes.

## Legenda

- `aprovada_para_escala`: pode avançar sem nova iteração.
- `nova_iteracao`: exige novo ciclo (geração + auditoria + integração).

## Onda 1

| Disciplina | Status | Motivo |
|---|---|---|
| `tecnica_operatoria` | `nova_iteracao` | Falta auditoria humana final por bloco no gate máximo. |
| `bmf1` | `nova_iteracao` | Triagem indica pistas formais residuais. |
| `bmf4` | `nova_iteracao` | Auditoria humana já mostrou FAIL residual em anti-obviedade/microtema. |
| `mad2` | `nova_iteracao` | Precisa ciclo completo com rubrica do playbook. |
| `semiologia2` | `nova_iteracao` | Há metalinguagem residual por triagem. |
| `fisiopato3` | `nova_iteracao` | Triagem com metalinguagem e len_obvious relevantes. |
| `bcm1` | `nova_iteracao` | len_obvious elevado na triagem. |

## Onda 2

| Disciplina | Status | Motivo |
|---|---|---|
| `sus` | `nova_iteracao` | Metalinguagem + validação por bloco pendente. |
| `semiologia1` | `nova_iteracao` | Metalinguagem residual + gate máximo pendente. |
| `semiologia3` | `nova_iteracao` | Metalinguagem residual + gate máximo pendente. |
| `bmf2` | `nova_iteracao` | Precisa ciclo de auditoria por bloco. |
| `mad1` | `nova_iteracao` | Template/table-like elevado na triagem. |
| `bioestatistica` | `nova_iteracao` | Template/table-like elevado na triagem. |

## Onda 3

| Disciplina | Status | Motivo |
|---|---|---|
| `semiologia4` | `nova_iteracao` | Risco alto estrutural (template/table-like). |
| `indicadores` | `nova_iteracao` | Risco alto estrutural + duplicidade. |
| `saude_trabalhador` | `nova_iteracao` | Risco alto estrutural + duplicidade. |
| `ds` | `nova_iteracao` | Volume pequeno com alta densidade de template. |
| `pmh` | `nova_iteracao` | Risco crítico de template/table-like. |
| `fisiopato_farmaco` | `nova_iteracao` | Risco crítico + alta duplicidade. |
| `bmf3` | `nova_iteracao` | Risco crítico (template/table-like/obviedade). |

## Observação operacional

Com gate máximo escolhido, a decisão conservadora atual é manter todas em `nova_iteracao` até completar auditoria final por bloco no padrão do playbook.
