# MedUni9 - Registrar Agendamentos Locais (Fluxo Feedback em 2 etapas)
# Execute como Administrador: clique com botao direito > Executar como administrador
#
# ORDEM DA MADRUGADA:
#   00:30 - Feedback Coleta (baixa feedback bruto do Firestore)
#   00:50 - Feedback Planos (gera planos de acao so para feedbacks aprovados)
#   01:20 - Curadoria
#   02:30 - Ingestao PDFs
#   03:30 - Analisador
#   04:30 - Padronizador
#   05:30 - Deploy Firebase

$basePath = "C:\Users\Usuario-pc\Desktop\Aplicativo Uni9\meduni9-app\.agents"
$settings = New-ScheduledTaskSettingsSet -StartWhenAvailable -DontStopIfGoingOnBatteries -WakeToRun

# Remove task antiga do fluxo anterior, se existir
Unregister-ScheduledTask -TaskName "MedUni9_Feedback" -Confirm:$false -ErrorAction SilentlyContinue

# 00:30 - Coleta Bruta de Feedback
$a0 = New-ScheduledTaskAction -Execute "$basePath\run_feedback.bat"
$t0 = New-ScheduledTaskTrigger -Daily -At '12:30AM'
Register-ScheduledTask -TaskName "MedUni9_Feedback_Coleta" -Action $a0 -Trigger $t0 -Settings $settings -RunLevel Highest -Force
Write-Host "[OK] MedUni9_Feedback_Coleta   - 00:30" -ForegroundColor Green

# 00:50 - Geracao de Planos de Acao de Feedback
$a0b = New-ScheduledTaskAction -Execute "$basePath\run_feedback_planos.bat"
$t0b = New-ScheduledTaskTrigger -Daily -At '12:50AM'
Register-ScheduledTask -TaskName "MedUni9_Feedback_Planos" -Action $a0b -Trigger $t0b -Settings $settings -RunLevel Highest -Force
Write-Host "[OK] MedUni9_Feedback_Planos   - 00:50" -ForegroundColor Green

# 01:20 - Curadoria de Questoes
$a1 = New-ScheduledTaskAction -Execute "$basePath\run_curadoria.bat"
$t1 = New-ScheduledTaskTrigger -Daily -At '01:20AM'
Register-ScheduledTask -TaskName "MedUni9_Curadoria" -Action $a1 -Trigger $t1 -Settings $settings -RunLevel Highest -Force
Write-Host "[OK] MedUni9_Curadoria         - 01:20" -ForegroundColor Green

# 02:30 - Ingestao de PDFs
$a2 = New-ScheduledTaskAction -Execute "$basePath\run_ingestao.bat"
$t2 = New-ScheduledTaskTrigger -Daily -At '02:30AM'
Register-ScheduledTask -TaskName "MedUni9_Ingestao_Pdfs" -Action $a2 -Trigger $t2 -Settings $settings -RunLevel Highest -Force
Write-Host "[OK] MedUni9_Ingestao_Pdfs     - 02:30" -ForegroundColor Green

# 03:30 - Analisador de Tendencias
$a3 = New-ScheduledTaskAction -Execute "$basePath\run_analisador.bat"
$t3 = New-ScheduledTaskTrigger -Daily -At '03:30AM'
Register-ScheduledTask -TaskName "MedUni9_Analisador" -Action $a3 -Trigger $t3 -Settings $settings -RunLevel Highest -Force
Write-Host "[OK] MedUni9_Analisador        - 03:30" -ForegroundColor Green

# 04:30 - Padronizador de Arquivos
$a4 = New-ScheduledTaskAction -Execute "$basePath\run_padronizador.bat"
$t4 = New-ScheduledTaskTrigger -Daily -At '04:30AM'
Register-ScheduledTask -TaskName "MedUni9_Padronizador" -Action $a4 -Trigger $t4 -Settings $settings -RunLevel Highest -Force
Write-Host "[OK] MedUni9_Padronizador      - 04:30" -ForegroundColor Green

# 05:30 - Deploy Firebase
$a5 = New-ScheduledTaskAction -Execute "$basePath\run_deploy.bat"
$t5 = New-ScheduledTaskTrigger -Daily -At '05:30AM'
Register-ScheduledTask -TaskName "MedUni9_Deploy" -Action $a5 -Trigger $t5 -Settings $settings -RunLevel Highest -Force
Write-Host "[OK] MedUni9_Deploy            - 05:30" -ForegroundColor Green

Write-Host ""
Write-Host "7 tarefas registradas. Abra o Agendador de Tarefas do Windows para confirmar." -ForegroundColor Cyan
