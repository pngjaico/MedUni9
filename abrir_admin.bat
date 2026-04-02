@echo off
title MedUni9 Admin
cd /d "C:\Users\Usuario-pc\Desktop\Aplicativo Uni9\meduni9-app"
echo.
echo  MedUni9 Admin Server
echo  Abrindo http://localhost:3001/admin.html ...
echo  Feche esta janela para encerrar o servidor.
echo.
start /B powershell -WindowStyle Hidden -Command "Start-Sleep 2; Start-Process 'http://localhost:3001/admin.html'"
node server.js
