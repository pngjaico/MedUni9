# MedGradPlus — Registrar Agendamentos Locais (v2 — agentes noturnos)
# Execute como Administrador: clique com botao direito > Executar como administrador
#
# ORDEM DA MADRUGADA:
#   00:30 - Feedback Coleta (baixa feedback bruto do Firestore)
#   01:00 - Verificador Categorizacao (verifica 50 itens questoes/flashcards)
#   01:30 - Feedback Planos (gera planos para feedbacks aprovados)
#   02:00 - Gerador de Questoes (deficit duplo, ~50 questoes)
#   03:00 - Gerador de Flashcards (deficit duplo, ~50 flashcards)
#   04:00 - Revisor de Materiais (uma materia/dia + glossario)
#   05:00 - Deploy Firebase

$basePath = "C:\Users\Usuario-pc\Desktop\Aplicativo Uni9\meduni9-app\.agents"
$settings = New-ScheduledTaskSettingsSet -StartWhenAvailable -DontStopIfGoingOnBatteries -WakeToRun

# Remove tasks antigas, se existirem
$tarefasAntigas = @(
    "MedUni9_Feedback",
    "MedUni9_Curadoria",
    "MedUni9_Ingestao_Pdfs",
    "MedUni9_Analisador",
    "MedUni9_Padronizador"
)
foreach ($t in $tarefasAntigas) {
    Unregister-ScheduledTask -TaskName $t -Confirm:$false -ErrorAction SilentlyContinue
}

# 00:30 - Coleta Bruta de Feedback
$a0 = New-ScheduledTaskAction -Execute "$basePath\run_feedback.bat"
$t0 = New-ScheduledTaskTrigger -Daily -At '12:30AM'
Register-ScheduledTask -TaskName "MedUni9_Feedback_Coleta" -Action $a0 -Trigger $t0 -Settings $settings -RunLevel Highest -Force
Write-Host "[OK] MedUni9_Feedback_Coleta        - 00:30" -ForegroundColor Green

# 01:00 - Verificador de Categorizacao
$a1 = New-ScheduledTaskAction -Execute "$basePath\run_verificador.bat"
$t1 = New-ScheduledTaskTrigger -Daily -At '01:00AM'
Register-ScheduledTask -TaskName "MedUni9_Verificador" -Action $a1 -Trigger $t1 -Settings $settings -RunLevel Highest -Force
Write-Host "[OK] MedUni9_Verificador            - 01:00" -ForegroundColor Green

# 01:30 - Geracao de Planos de Acao de Feedback
$a2 = New-ScheduledTaskAction -Execute "$basePath\run_feedback_planos.bat"
$t2 = New-ScheduledTaskTrigger -Daily -At '01:30AM'
Register-ScheduledTask -TaskName "MedUni9_Feedback_Planos" -Action $a2 -Trigger $t2 -Settings $settings -RunLevel Highest -Force
Write-Host "[OK] MedUni9_Feedback_Planos        - 01:30" -ForegroundColor Green

# 02:00 - Gerador de Questoes (deficit duplo)
$a3 = New-ScheduledTaskAction -Execute "$basePath\run_gerador_questoes.bat"
$t3 = New-ScheduledTaskTrigger -Daily -At '02:00AM'
Register-ScheduledTask -TaskName "MedUni9_Gerador_Questoes" -Action $a3 -Trigger $t3 -Settings $settings -RunLevel Highest -Force
Write-Host "[OK] MedUni9_Gerador_Questoes       - 02:00" -ForegroundColor Green

# 03:00 - Gerador de Flashcards (deficit duplo)
$a4 = New-ScheduledTaskAction -Execute "$basePath\run_gerador_flashcards.bat"
$t4 = New-ScheduledTaskTrigger -Daily -At '03:00AM'
Register-ScheduledTask -TaskName "MedUni9_Gerador_Flashcards" -Action $a4 -Trigger $t4 -Settings $settings -RunLevel Highest -Force
Write-Host "[OK] MedUni9_Gerador_Flashcards     - 03:00" -ForegroundColor Green

# 04:00 - Revisor de Materiais (uma materia/dia + glossario)
$a5 = New-ScheduledTaskAction -Execute "$basePath\run_revisor.bat"
$t5 = New-ScheduledTaskTrigger -Daily -At '04:00AM'
Register-ScheduledTask -TaskName "MedUni9_Revisor_Materiais" -Action $a5 -Trigger $t5 -Settings $settings -RunLevel Highest -Force
Write-Host "[OK] MedUni9_Revisor_Materiais      - 04:00" -ForegroundColor Green

# 05:00 - Deploy Firebase
$a6 = New-ScheduledTaskAction -Execute "$basePath\run_deploy.bat"
$t6 = New-ScheduledTaskTrigger -Daily -At '05:00AM'
Register-ScheduledTask -TaskName "MedUni9_Deploy" -Action $a6 -Trigger $t6 -Settings $settings -RunLevel Highest -Force
Write-Host "[OK] MedUni9_Deploy                 - 05:00" -ForegroundColor Green

Write-Host ""
Write-Host "7 tarefas registradas. Abra o Agendador de Tarefas para confirmar." -ForegroundColor Cyan
