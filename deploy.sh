#!/bin/bash

echo "🚀 Déploiement du Portfolio d'Angelo Rakotonirina"
echo "=================================================="

# Vérification que Node.js est installé
if ! command -v node &> /dev/null; then
    echo "❌ Node.js n'est pas installé. Veuillez l'installer d'abord."
    exit 1
fi

# Vérification que npm est installé
if ! command -v npm &> /dev/null; then
    echo "❌ npm n'est pas installé. Veuillez l'installer d'abord."
    exit 1
fi

echo "✅ Node.js et npm sont installés"

# Installation des dépendances si node_modules n'existe pas
if [ ! -d "node_modules" ]; then
    echo "📦 Installation des dépendances..."
    npm install
fi

# Build du projet
echo "🔨 Construction du projet..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Build réussi !"
    
    # Vérification de la taille des fichiers
    echo "📊 Taille des fichiers générés :"
    du -sh dist/
    
    echo ""
    echo "🎉 Votre portfolio est prêt pour le déploiement !"
    echo "📁 Les fichiers de production se trouvent dans le dossier 'dist/'"
    echo ""
    echo "🌐 Options de déploiement :"
    echo "  • GitHub Pages : Uploadez le contenu de 'dist/' sur GitHub"
    echo "  • Netlify : Glissez-déposez le dossier 'dist/' sur netlify.com"
    echo "  • Vercel : Connectez votre repo GitHub et déployez automatiquement"
    echo "  • Serveur web : Copiez le contenu de 'dist/' sur votre serveur"
else
    echo "❌ Erreur lors du build"
    exit 1
fi