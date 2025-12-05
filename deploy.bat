@echo off
echo 🚀 Déploiement du Portfolio d'Angelo Rakotonirina
echo ==================================================

REM Vérification que Node.js est installé
where node >nul 2>nul
if %ERRORLEVEL% neq 0 (
    echo ❌ Node.js n'est pas installé. Veuillez l'installer d'abord.
    exit /b 1
)

REM Vérification que npm est installé
where npm >nul 2>nul
if %ERRORLEVEL% neq 0 (
    echo ❌ npm n'est pas installé. Veuillez l'installer d'abord.
    exit /b 1
)

echo ✅ Node.js et npm sont installés

REM Installation des dépendances si node_modules n'existe pas
if not exist "node_modules" (
    echo 📦 Installation des dépendances...
    npm install
)

REM Build du projet
echo 🔨 Construction du projet...
npm run build

if %ERRORLEVEL% equ 0 (
    echo ✅ Build réussi !
    
    REM Vérification de la taille des fichiers
    echo 📊 Taille des fichiers générés :
    for /f %%i in ('dir /s /b dist ^| find /c /v ""') do set files=%%i
    echo Nombre de fichiers dans dist/: !files!
    
    echo.
    echo 🎉 Votre portfolio est prêt pour le déploiement !
    echo 📁 Les fichiers de production se trouvent dans le dossier 'dist\'
    echo.
    echo 🌐 Options de déploiement :
    echo   • GitHub Pages : Uploadez le contenu de 'dist\' sur GitHub
    echo   • Netlify : Glissez-déposez le dossier 'dist\' sur netlify.com
    echo   • Vercel : Connectez votre repo GitHub et déployez automatiquement
    echo   • Serveur web : Copiez le contenu de 'dist\' sur votre serveur
) else (
    echo ❌ Erreur lors du build
    exit /b 1
)

pause