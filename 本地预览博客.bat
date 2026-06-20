@echo off
chcp 65001 >nul
cd /d "%~dp0"

echo 正在启动本地博客预览...
echo.
echo 如果浏览器没有自动打开，请手动访问：
echo http://localhost:4321/
echo.

start "" "http://localhost:4321/"
corepack pnpm dev --host 127.0.0.1

pause
