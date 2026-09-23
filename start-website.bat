@echo off
title MA AARATI ENTERPRISE - Local Server
cd /d "%~dp0"
echo ========================================================
echo   MA AARATI ENTERPRISE - Starting Local Website Server
echo ========================================================
echo.
echo Opening http://localhost:5173 in your default browser...
start http://localhost:5173
echo.
echo Server running at:
echo   - Local:   http://localhost:5173
echo   - Network: http://192.168.31.238:5173
echo.
echo Press Ctrl+C in this window anytime to stop the server.
echo ========================================================
echo.
npm run dev -- --host 0.0.0.0 --port 5173
pause
