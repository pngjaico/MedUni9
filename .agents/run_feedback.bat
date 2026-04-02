@echo off
setlocal
cd /d "%~dp0.."
if not exist ".agents\logs" mkdir ".agents\logs"

set "LOG_FILE=.agents\logs\feedback_pipeline.log"

echo [INFO] Iniciando coleta bruta de feedback >> "%LOG_FILE%"
py scripts\processar_feedback.py >> "%LOG_FILE%" 2>&1
if errorlevel 1 (
	echo [ERRO] scripts\processar_feedback.py falhou >> "%LOG_FILE%"
	exit /b 1
)

echo [OK] Coleta bruta de feedback finalizada >> "%LOG_FILE%"
