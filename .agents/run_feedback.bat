@echo off
setlocal
cd /d "%~dp0.."
if not exist ".agents\logs" mkdir ".agents\logs"

set "LOG_FILE=.agents\logs\feedback_pipeline.log"

echo [INFO] Iniciando pipeline local de feedback >> "%LOG_FILE%"
py processar_feedback.py >> "%LOG_FILE%" 2>&1
if errorlevel 1 (
	echo [ERRO] processar_feedback.py falhou >> "%LOG_FILE%"
	exit /b 1
)

py gerar_requests_feedback.py >> "%LOG_FILE%" 2>&1
if errorlevel 1 (
	echo [ERRO] gerar_requests_feedback.py falhou >> "%LOG_FILE%"
	exit /b 1
)

echo [OK] Pipeline local de feedback finalizado >> "%LOG_FILE%"
