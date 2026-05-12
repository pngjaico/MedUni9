# Relatorio de Revisao - Modulo 1 MedGradPlus

Gerado em: 2026-05-12T20:44:33.927Z

## Veredito

O Modulo 1 esta **fechado textualmente** no escopo combinado, mas ainda nao esta fechado como rodada visual premium.

O contrato aula-aula esta consistente: materiais espelhados, Mini Quiz funcional, 12 essenciais, 12 flashcards, refs e decisao visual por aula. As pendencias textuais anteriores foram tratadas: Semiologia1 nao tem mais explicacoes vazias, PMH foi individualizado e as essenciais sinalizadas foram triadas.

## Escopo

- Inclui: BMF1, PMH, SUS e Semiologia1.
- Exclui por regra operacional: PE1.
- Total revisado: 54 aulas.

| Materia | Aulas | OK estrut. | Questoes | Essenciais | Flashcards | Figuras | Suspeitas | Linhas |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| sus | 9 | 9/9 | 108 | 108 | 108 | 9 | 9 | 168-185 |
| semiologia1 | 9 | 9/9 | 108 | 108 | 108 | 17 | 6 | 147-181 |
| bmf1 | 22 | 22/22 | 387 | 264 | 264 | 24 | 11 | 152-200 |
| pmh | 14 | 14/14 | 494 | 168 | 168 | 14 | 0 | 163-163 |

## O que temos

- 648 questoes essenciais no Modulo 1, alvo de 12 por aula.
- 648 flashcards no Modulo 1, alvo de 12 por aula.
- 64 decisoes/slots visuais registrados no Modulo 1.
- 1097 questoes totais vinculadas ao Modulo 1, incluindo nao essenciais reaproveitadas.
- Fila do ciclo basico: 54 prontas, 209 pendentes, 263 aulas totais.

## Validacoes recentes

- `npm run validate:questoes`: passou com 5012 questoes consistentes com o catalogo.
- `npm run audit:questoes`: sem `aula_id` invalido, sem `tema` invalido, sem mismatch de materia e sem aula com material abaixo do minimo de essenciais.
- `npm run audit:essenciais:local`: 384 suspeitas globais; 26 no Modulo 1, com 26 ja triadas e 0 pendentes.
- `node scripts/audit_flashcards.cjs`: auditoria global ainda aponta dividas antigas fora do contrato aula-aula; ver secao de pendencias.
- Observacao operacional: a execucao oficial 54x2 de `validate_ciclo_basico_aula` + `lint_ciclo_basico_v3` ficou lenta e estourou timeout nesta rodada; o consolidado deste relatorio carrega os JSONs uma vez e checa as invariantes centrais mais auditoria adicional de qualidade de flashcards.

## Falhas estruturais do Modulo 1

- Nenhuma falha de qualidade estruturada detectada pelo consolidado em uma passada.

## Pendencias reais

1. **Rodada visual premium ainda nao esta pronta.** Existem 64 decisoes/slots visuais, mas 63 ainda nao possuem URL/imagem final.
2. **Resumo A4 continua ausente no ciclo basico.** O auditor global aponta 263 materiais sem Resumo A4; isso e backlog de produto, nao bloqueio textual deste fechamento.
3. **Dividas globais fora do Modulo 1 ainda existem.** O ciclo basico ainda tem 38 falhas de material, 8 aulas com menos de 12 questoes e 8 com menos de 12 essenciais.

## PMH - checagem editorial

- Mapa mental da aula: 14 versoes unicas em 14 aulas.
- Ponte com a Clinica: 14 versoes unicas em 14 aulas.
- Mini Quiz PMH com explicacao generica padronizada: 0 aulas sinalizadas.

Minha leitura: PMH agora esta coerente como produto do Modulo 1. O relatorio precisa continuar monitorando repeticao de template, mas a triagem atual mostra 14 mapas unicos, 14 pontes unicas e zero explicacao generica de Mini Quiz.

## Essenciais sinalizadas no Modulo 1

- sus: 9 essenciais sinalizadas
- semiologia1: 6 essenciais sinalizadas
- bmf1: 11 essenciais sinalizadas

Triagem: 28 revisadas no log premium; 26 das suspeitas atuais ja estao reconciliadas; 0 seguem pendentes.

- bmf1/bmf1_a17 q346: A glândula submandibular é melhor reconhecida por qual conjunto anatômico-clínico?
- bmf1/bmf1_a17 q347: Qual característica identifica melhor a glândula sublingual?
- bmf1/bmf1_a17 q349: Paciente relata dor abaixo da mandíbula e aumento local que surgem principalmente ao iniciar a refeição. Qual mecanismo explica melhor esse quadro?
- bmf1/bmf1_a5 q439: A maioria dos ossos longos se forma principalmente por:
- bmf1/bmf1_a6 q445: Durante o exame físico, o processo espinhoso mais evidente na base do pescoço costuma ser usado como marco para contar níveis vertebrais. Qual vértebra é esse marco?
- semiologia1/semio1_a1 q624: Queimação, choque, formigamento e irradiação em trajeto sugerem mais fortemente dor:
- semiologia1/semio1_a1 q625: Dor máxima sobre tendão patelar, fora da interlinha, reproduzida por extensão resistida do joelho, sugere origem:
- semiologia1/semio1_a1 q629: Dor vertebral com febre, perda de peso, trauma relevante ou déficit neurológico deve levar o examinador a:
- semiologia1/semio1_a1 q630: Na escala MRC, grau 3 significa:
- semiologia1/semio1_a5 q663: A manobra de gaveta anterior no joelho avalia principalmente:
- semiologia1/semio1_a5 q671: Neer e Hawkins são manobras relacionadas principalmente a:
- bmf1/bmf1_a1 q3005: O movimento de aproximar o queixo do tórax, reduzindo o ângulo na região cervical, é chamado de:
- bmf1/bmf1_a12 q3095: Como se chama a fusão de contrações musculares quando estímulos chegam em frequência muito alta?
- bmf1/bmf1_a22 q3175: Qual relação diferencia corretamente omento menor e omento maior?
- sus/sus_a4 q3385: A Lei 8.080/90 é mais bem associada a qual função dentro do SUS?
- sus/sus_a6 q3406: Qual alternativa diferencia corretamente CIB e CIT?
- bmf1/bmf1_a18 q7406: Qual alternativa diferencia corretamente mesentério e omento maior?
- bmf1/bmf1_a1 q7610: Qual alternativa diferencia corretamente abdução e adução?
- bmf1/bmf1_a1 q7614: A circundução do ombro é melhor entendida como:
- sus/sus_a3 q5002006: No desenho constitucional do SUS, a participação da iniciativa privada deve ser entendida principalmente como:
- sus/sus_a3 q5002009: A Lei 8.142/90 deve acender qual associação imediata?
- sus/sus_a3 q5002011: Um trabalhador informal com hipertensão procura seguimento na UBS e não apresenta contribuição previdenciária. Pela ruptura trazida pelo SUS, a conduta institucional correta é reconhecer que:
- sus/sus_a4 q5002012: Uma UBS encaminha usuário para serviço regional de cardiologia e depois recebe contrarreferência para seguimento. O arranjo combina principalmente:
- sus/sus_a4 q5002013: A descentralização no SUS significa principalmente:
- sus/sus_a6 q5002031: O COAP foi pensado como instrumento para:
- sus/sus_a7 q5002036: Paciente com diabetes fica sem medicação por desabastecimento recorrente da farmácia municipal. A leitura mais completa é:

## Imagens

- Status por figura/slot: pendente_curadoria=20, pendente=43, encontrada=1.
- Sem URL/imagem final: 63/64.
- BMF1: manter prioridade para anatomia/histologia/fisiologia util.
- Semiologia1: manter spots e imagens de exame fisico.
- PMH/SUS: usar infograficos quando simplificarem fluxo, nao como decoracao.

## Proxima sequencia recomendada

1. Rodada visual dedicada do Modulo 1, com pausa operacional entre aulas e sem imagem decorativa.
2. BMF1 primeiro, depois spots/fluxos de Semiologia1, depois PMH/SUS apenas quando o esquema realmente melhorar aprendizagem.
3. Validar URL, credito, licenca e legenda em `data/materiais_figuras.json`.
4. Depois disso, declarar Modulo 1 fechado tambem no pacote visual.
