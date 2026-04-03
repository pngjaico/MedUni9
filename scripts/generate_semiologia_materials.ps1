$ErrorActionPreference = 'Stop'

function Remove-Diacritics {
  param([string]$Text)
  if ([string]::IsNullOrWhiteSpace($Text)) { return $Text }
  $normalized = $Text.Normalize([Text.NormalizationForm]::FormD)
  $sb = New-Object System.Text.StringBuilder
  foreach ($ch in $normalized.ToCharArray()) {
    $uc = [Globalization.CharUnicodeInfo]::GetUnicodeCategory($ch)
    if ($uc -ne [Globalization.UnicodeCategory]::NonSpacingMark) {
      [void]$sb.Append($ch)
    }
  }
  return $sb.ToString().Normalize([Text.NormalizationForm]::FormC)
}

function Get-AulaNumero {
  param([string]$AulaId)
  return [int](($AulaId -split '_a')[1])
}

function Build-SectionMap {
  param([string]$TemaRaw, [int]$Modulo)

  $tema = Remove-Diacritics $TemaRaw
  $sec1 = 'Anamnese e pontos de triagem'
  $sec2 = 'Exame fisico e interpretacao de achados'

  if ($tema -match 'Fundamentos') {
    $sec1 = 'Base tecnica que a Uninove espera'
    $sec2 = 'Roteiro padrao de atendimento'
  } elseif ($tema -match 'Anamnese') {
    $sec1 = 'Perguntas que mudam o diagnostico'
    $sec2 = 'Como transformar queixa em hipotese'
  } elseif ($tema -match 'Inspecao|Palpacao|Percussao|Ausculta|Nervos Cranianos|Exame Motor|Exame Sensorial|Funcoes Cognitivas') {
    $sec1 = 'Passo a passo do exame'
    $sec2 = 'Achados normais x patologicos'
  } elseif ($tema -match 'Pratica Simulada|Pratica Real') {
    $sec1 = 'Objetivos da pratica'
    $sec2 = 'Checklist de seguranca e tecnica'
  } elseif ($tema -match 'Reuniao Clinica|Sindrome|Sindrome|Interpretacao|Propedeutica') {
    $sec1 = 'Raciocinio clinico para casos'
    $sec2 = 'Hipoteses e proximo exame'
  }

  if ($Modulo -eq 4 -and $tema -match 'Neurolog') {
    $sec1 = 'Localizacao neurologica inicial'
    $sec2 = 'Sinais de alarme neurologico'
  }

  return @{ Sec1 = $sec1; Sec2 = $sec2; Tema = $tema }
}

function Build-Bridge {
  param([string]$TemaRaw, [int]$Modulo)

  $tema = Remove-Diacritics $TemaRaw
  $bridge = "Na pratica, $tema aparece no ambulatorio quando voce precisa diferenciar quadro benigno de condicao que exige investigacao rapida. Quem domina a sequencia de semiologia reduz erro de conduta e responde melhor as questoes da Uninove."

  if ($Modulo -eq 1) {
    $bridge = "No consultorio de clinica geral e ortopedia, $tema ajuda a decidir se a dor e mecanica, inflamatoria ou neuromuscular. Esse filtro inicial economiza exame desnecessario e melhora a hipotese diagnostica."
  } elseif ($Modulo -eq 2) {
    $bridge = "Em pronto atendimento, $tema e crucial para reconhecer dispneia grave, dor toracica de risco e sinais de insuficiencia cardiaca ou respiratoria. A tecnica correta de exame muda a prioridade de atendimento."
  } elseif ($Modulo -eq 3) {
    $bridge = "Na clinica medica e na saude da mulher/homem, $tema orienta quando pedir urina, ultrassom, cultura ou encaminhar para urgencia. Semiologia bem feita evita tanto subdiagnostico quanto excesso de exames."
  } elseif ($Modulo -eq 4) {
    $bridge = "Na neurologia, minutos importam. O dominio de $tema ajuda a localizar lesao, reconhecer sinal de gravidade e priorizar TC, RM ou avaliacao especializada sem atrasos."
  }

  return $bridge
}

$materias = Get-Content 'data/materias.json' -Raw | ConvertFrom-Json
$alvos = @('semiologia1', 'semiologia2', 'semiologia3', 'semiologia4')

$gerados = @()

foreach ($materiaId in $alvos) {
  $materia = $materias.$materiaId
  if (-not $materia) { continue }

  $sigla = Remove-Diacritics $materia.sigla
  $nomeMateria = Remove-Diacritics $materia.nome
  $modulo = [int]$materia.modulo

  $dirData = Join-Path 'data/materiais' $materiaId
  $dirApp = Join-Path (Join-Path "materiais/modulo$modulo" $materiaId)

  New-Item -ItemType Directory -Path $dirData -Force | Out-Null
  New-Item -ItemType Directory -Path $dirApp -Force | Out-Null

  foreach ($aula in $materia.aulas) {
    $aulaNum = Get-AulaNumero $aula.id
    $temaRaw = [string]$aula.tema
    $descRaw = [string]$aula.descricao
    $tema = Remove-Diacritics $temaRaw
    $desc = Remove-Diacritics $descRaw

    $secMap = Build-SectionMap -TemaRaw $tema -Modulo $modulo
    $sec1 = $secMap.Sec1
    $sec2 = $secMap.Sec2
    $ponte = Build-Bridge -TemaRaw $tema -Modulo $modulo

    $conteudo = @"
# $sigla - Aula ${aulaNum}: $tema

**Disciplina:** $nomeMateria
**Modulo:** $modulo | **Tempo de estudo sugerido:** 10-15 min

---

## Por que isso cai na prova?

A Uninove cobra $tema porque esse e o tipo de tema em que o professor avalia tecnica, sequencia de pensamento e capacidade de ligar sintoma com exame fisico. Quando voce domina esse bloco, acerta melhor questoes de caso clinico e evita erro classico de decorar sem raciocinar.

---

## 1. $sec1

$desc

| Ponto-chave | O que observar | Como costuma cair |
|---|---|---|
| **Queixa principal** | Tempo de inicio, intensidade e fatores de piora/alivio | Caso clinico curto com pegadinha de anamnese |
| **Contexto clinico** | Comorbidades, medicacoes e fatores de risco | Questao de correlacao entre historia e exame |
| **Sinal de alerta** | Dado que muda prioridade de atendimento | Itens de conduta inicial |

## 2. $sec2

| Etapa do exame | Achado esperado | Erro frequente |
|---|---|---|
| **Inspecao dirigida** | Padrao normal versus alteracao relevante | Pular comparacao bilateral ou topografica |
| **Manobra principal** | Tecnica correta e interpretacao objetiva | Fazer tecnica incompleta e concluir cedo |
| **Integracao final** | Relacao entre historia, exame e hipotese | Pedir exame complementar sem hipotese clara |

---

## Erros Classicos em Prova (Uninove)

- Ignorar dado de anamnese que muda o nivel de risco do paciente.
- Descrever exame fisico sem sequencia tecnica padronizada.
- Confundir achado de triagem com diagnostico fechado.

---

## Checklist de Revisao

- [ ] Consigo fazer um roteiro de anamnese objetiva para este tema.
- [ ] Sei executar as manobras centrais do exame sem inverter etapas.
- [ ] Diferencio achado normal de achado patologico mais cobrado.
- [ ] Consigo justificar qual exame complementar pedir e por que.

---

## Ponte com a Clinica

$ponte
"@

    $nomeArquivo = "$($aula.id).md"
    $pathData = Join-Path $dirData $nomeArquivo
    $pathApp = Join-Path $dirApp $nomeArquivo

    Set-Content -Path $pathData -Value $conteudo -Encoding utf8
    Set-Content -Path $pathApp -Value $conteudo -Encoding utf8

    $gerados += $pathData
  }
}

Write-Host 'Materiais de Semiologia gerados com sucesso.'
$gerados | Sort-Object | ForEach-Object { Write-Host $_ }
