@echo off
cd /d "C:\Users\Usuario-pc\Desktop\Aplicativo Uni9\meduni9-app"
"C:\Users\Usuario-pc\AppData\Roaming\npm\claude.cmd" --print "Execute o workflow detalhado em '.agents/workflows/curadoria_de_ia.md'. Regras de economia de token: processe NO MAXIMO 5 questoes por lote, apenas o lote mais antigo se houver varios. Ao terminar: faca append em data/questoes_ineditas.json, apague o lote temporario, escreva data/agent_logs/status_curadoria.json e faca git commit + push." >> ".agents\logs\curadoria_%date:~6,4%-%date:~3,2%-%date:~0,2%.txt" 2>&1
