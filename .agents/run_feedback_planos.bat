@echo off
setlocal
cd /d "%~dp0.."
if not exist ".agents\logs" mkdir ".agents\logs"

set "LOG_FILE=.agents\logs\feedback_planos.log"

set "HAS_APPROVED="
for %%F in ("data\feedback\approved\*.json") do (
	if /I not "%%~nxF"==".gitkeep" set "HAS_APPROVED=1"
)

if not defined HAS_APPROVED (
	echo [INFO] Nenhum feedback aprovado para plano. Encerrando sem executar. >> "%LOG_FILE%"
	exit /b 0
)

echo [INFO] Iniciando geração local de planos de ação de feedback >> "%LOG_FILE%"
py scripts\gerar_planos_acao_feedback.py >> "%LOG_FILE%" 2>&1
if errorlevel 1 (
	echo [ERRO] scripts\gerar_planos_acao_feedback.py falhou >> "%LOG_FILE%"
	exit /b 1
)

echo [OK] Geração local de planos de ação finalizada >> "%LOG_FILE%"
