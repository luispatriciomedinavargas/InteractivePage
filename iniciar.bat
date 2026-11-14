@echo off
rem Abre la aplicacion en pantalla completa permitiendo que la musica
rem de fondo suene sola desde el principio, sin tener que hacer clic.
rem Usa Chrome si esta instalado; si no, Edge.

set "PAGINA=%~dp0index.html"
rem Perfil aparte: asi el permiso de sonido funciona aunque el navegador ya este abierto.
set "PERFIL=%LOCALAPPDATA%\AplicacionInteractiva-navegador"

set "NAVEGADOR="
if exist "%ProgramFiles%\Google\Chrome\Application\chrome.exe" set "NAVEGADOR=%ProgramFiles%\Google\Chrome\Application\chrome.exe"
if not defined NAVEGADOR if exist "%ProgramFiles(x86)%\Google\Chrome\Application\chrome.exe" set "NAVEGADOR=%ProgramFiles(x86)%\Google\Chrome\Application\chrome.exe"
if not defined NAVEGADOR if exist "%LOCALAPPDATA%\Google\Chrome\Application\chrome.exe" set "NAVEGADOR=%LOCALAPPDATA%\Google\Chrome\Application\chrome.exe"
if not defined NAVEGADOR if exist "%ProgramFiles(x86)%\Microsoft\Edge\Application\msedge.exe" set "NAVEGADOR=%ProgramFiles(x86)%\Microsoft\Edge\Application\msedge.exe"
if not defined NAVEGADOR if exist "%ProgramFiles%\Microsoft\Edge\Application\msedge.exe" set "NAVEGADOR=%ProgramFiles%\Microsoft\Edge\Application\msedge.exe"

if not defined NAVEGADOR (
  echo No se encontro Google Chrome ni Microsoft Edge en esta computadora.
  pause
  exit /b 1
)

start "" "%NAVEGADOR%" --user-data-dir="%PERFIL%" --autoplay-policy=no-user-gesture-required --start-fullscreen --no-first-run --no-default-browser-check "%PAGINA%"
