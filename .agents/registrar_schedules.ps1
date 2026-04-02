# MedUni9 — Registrar Agendamentos Locais
# Execute como Administrador: clique com botao direito > "Executar como administrador"

$basePath = "C:\Users\Usuario-pc\Desktop\Aplicativo Uni9\meduni9-app\.agents"

# --- Tarefa 1: Bibliotecario (Ingestao de PDFs) — 01h00 ---
$action1  = New-ScheduledTaskAction -Execute "$basePath\run_ingestao.bat"
$trigger1 = New-ScheduledTaskTrigger -Daily -At '01:00AM'
$settings = New-ScheduledTaskSettingsSet -StartWhenAvailable -DontStopIfGoingOnBatteries -WakeToRun
Register-ScheduledTask -TaskName "MedUni9_Ingestao_Pdfs" `
    -Action $action1 -Trigger $trigger1 -Settings $settings `
    -RunLevel Highest -Force
Write-Host "[OK] MedUni9_Ingestao_Pdfs criada - roda 01:00 todo dia" -ForegroundColor Green

# --- Tarefa 2: Curador (Lapidar Questoes) — 04h00 ---
$action2  = New-ScheduledTaskAction -Execute "$basePath\run_curadoria.bat"
$trigger2 = New-ScheduledTaskTrigger -Daily -At '04:00AM'
Register-ScheduledTask -TaskName "MedUni9_Curadoria" `
    -Action $action2 -Trigger $trigger2 -Settings $settings `
    -RunLevel Highest -Force
Write-Host "[OK] MedUni9_Curadoria criada - roda 04:00 todo dia" -ForegroundColor Green

Write-Host ""
Write-Host "Pronto! Para verificar: abra o Agendador de Tarefas do Windows" -ForegroundColor Cyan
