# MedUni9 — Registrar Agendamentos Locais (COMPLETO)
# Execute como Administrador: clique com botao direito > "Executar como administrador"
#
# ORDEM DA MADRUGADA:
#   00:30 — Feedback        (baixa feedback do Firestore e gera requests)
#   01:00 — Curadoria       (+ importante: cura questoes brutas)
#   02:30 — Ingestao PDFs   (organiza arquivos novos)
#   03:30 — Analisador      (analytics de tendencias)
#   04:30 — Padronizador    (limpeza de nomes de arquivo)
#   05:30 — Deploy Firebase (publica tudo atualizado)

$basePath = "C:\Users\Usuario-pc\Desktop\Aplicativo Uni9\meduni9-app\.agents"
$settings = New-ScheduledTaskSettingsSet -StartWhenAvailable -DontStopIfGoingOnBatteries -WakeToRun

# --- 00:30 — Análise de Feedback ---
$a0 = New-ScheduledTaskAction -Execute "$basePath\run_feedback.bat"
$t0 = New-ScheduledTaskTrigger -Daily -At '12:30AM'
Register-ScheduledTask -TaskName "MedUni9_Feedback" -Action $a0 -Trigger $t0 -Settings $settings -RunLevel Highest -Force
Write-Host "[OK] MedUni9_Feedback           — 00:30" -ForegroundColor Green

# --- 01:00 — Curadoria de Questoes ---
$a1 = New-ScheduledTaskAction -Execute "$basePath\run_curadoria.bat"
$t1 = New-ScheduledTaskTrigger -Daily -At '01:00AM'
Register-ScheduledTask -TaskName "MedUni9_Curadoria" -Action $a1 -Trigger $t1 -Settings $settings -RunLevel Highest -Force
Write-Host "[OK] MedUni9_Curadoria          — 01:00" -ForegroundColor Green

# --- 02:30 — Ingestao de PDFs ---
$a2 = New-ScheduledTaskAction -Execute "$basePath\run_ingestao.bat"
$t2 = New-ScheduledTaskTrigger -Daily -At '02:30AM'
Register-ScheduledTask -TaskName "MedUni9_Ingestao_Pdfs" -Action $a2 -Trigger $t2 -Settings $settings -RunLevel Highest -Force
Write-Host "[OK] MedUni9_Ingestao_Pdfs      — 02:30" -ForegroundColor Green

# --- 03:30 — Analisador de Tendencias ---
$a3 = New-ScheduledTaskAction -Execute "$basePath\run_analisador.bat"
$t3 = New-ScheduledTaskTrigger -Daily -At '03:30AM'
Register-ScheduledTask -TaskName "MedUni9_Analisador" -Action $a3 -Trigger $t3 -Settings $settings -RunLevel Highest -Force
Write-Host "[OK] MedUni9_Analisador         — 03:30" -ForegroundColor Green

# --- 04:30 — Padronizador de Arquivos ---
$a4 = New-ScheduledTaskAction -Execute "$basePath\run_padronizador.bat"
$t4 = New-ScheduledTaskTrigger -Daily -At '04:30AM'
Register-ScheduledTask -TaskName "MedUni9_Padronizador" -Action $a4 -Trigger $t4 -Settings $settings -RunLevel Highest -Force
Write-Host "[OK] MedUni9_Padronizador       — 04:30" -ForegroundColor Green

# --- 05:30 — Deploy Firebase ---
$a5 = New-ScheduledTaskAction -Execute "$basePath\run_deploy.bat"
$t5 = New-ScheduledTaskTrigger -Daily -At '05:30AM'
Register-ScheduledTask -TaskName "MedUni9_Deploy" -Action $a5 -Trigger $t5 -Settings $settings -RunLevel Highest -Force
Write-Host "[OK] MedUni9_Deploy             — 05:30" -ForegroundColor Green

Write-Host ""
Write-Host "6 tarefas registradas! Abra o Agendador de Tarefas do Windows para confirmar." -ForegroundColor Cyan
