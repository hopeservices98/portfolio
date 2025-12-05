# 🚀 Guide de Déploiement - Portfolio d'Angelo Rakotonirina

Ce guide vous explique comment déployer votre portfolio en ligne.

## 📋 Prérequis

- Node.js (version 16 ou plus récente)
- npm ou yarn
- Un compte GitHub (pour le déploiement)

## 🛠️ Construction du Projet

### Option 1 : Script Automatique (Windows)
```bash
deploy.bat
```

### Option 2 : Script Automatique (Linux/Mac)
```bash
./deploy.sh
```

### Option 3 : Commande Manuelle
```bash
npm install
npm run build
```

Les fichiers de production seront générés dans le dossier `dist/`.

## 🌐 Options de Déploiement

### 1. GitHub Pages (Gratuit)

1. **Activer GitHub Pages :**
   - Allez dans Settings > Pages de votre repository
   - Source: "Deploy from a branch"
   - Branch: "main" / "root"

2. **Construire et pousser :**
   ```bash
   npm run build
   git add dist/
   git commit -m "Add build files for deployment"
   git push
   ```

### 2. Netlify (Gratuit)

1. **Déploiement par glisser-déposer :**
   - Allez sur [netlify.com](https://netlify.com)
   - Glissez le dossier `dist/` sur la zone de déploiement
   - Votre site sera disponible immédiatement

2. **Déploiement automatique :**
   - Connectez votre repository GitHub
   - Netlify détectera automatiquement Vite
   - Configuration de build : `npm run build`
   - Répertoire de publication : `dist`

### 3. Vercel (Gratuit)

1. **Déploiement automatique :**
   - Allez sur [vercel.com](https://vercel.com)
   - Importez votre repository GitHub
   - Vercel détectera automatiquement Vite
   - Build: `npm run build`
   - Output: `dist`

### 4. Serveur Web Personnel

1. **Construire le projet :**
   ```bash
   npm run build
   ```

2. **Uploader le contenu de `dist/` sur votre serveur via FTP/SFTP**

3. **Configurer votre serveur web pour servir les fichiers statiques**

## 📁 Structure des Fichiers de Production

```
dist/
├── index.html              # Page principale
├── assets/
│   └── index-[hash].js     # JavaScript minifié
├── profil.png              # Photo de profil
└── cv-angelo-rakotonirina.pdf # CV en PDF
```

## ⚡ Optimisations Incluses

- ✅ **Minification** : Les fichiers JS sont minifiés
- ✅ **Compression** : Support de la compression gzip
- ✅ **Tree Shaking** : Suppression du code non utilisé
- ✅ **Code Splitting** : Optimisation du chargement
- ✅ **Assets Optimization** : Images et ressources optimisées

## 🔧 Configuration Avancée

### Variables d'Environnement

Si votre site utilise des variables d'environnement, configurez-les selon la plateforme :

- **Vercel** : Vercel Dashboard > Settings > Environment Variables
- **Netlify** : Site Settings > Environment Variables
- **GitHub Pages** : Utilisez des secrets GitHub Actions

### Custom Domain

Pour utiliser un domaine personnalisé :

1. **Netlify** : Site Settings > Domain Management
2. **Vercel** : Project Settings > Domains
3. **GitHub Pages** : Repository Settings > Pages > Custom Domain

## 📊 Métriques et Monitoring

### Google Analytics
Ajoutez votre ID Google Analytics dans `index.html` avant la balise `</head>` :

```html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 🆘 Dépannage

### Erreur de Build
```bash
# Nettoyer le cache
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Erreur 404 sur les routes
Ajoutez un fichier `_redirects` dans `public/` :
```
/*    /index.html   200
```

### Problèmes de Performance
- Vérifiez la taille des images
- Activez la compression gzip sur votre serveur
- Utilisez un CDN pour les assets statiques

## 🔄 Mise à Jour

Pour mettre à jour votre portfolio :

1. Modifiez les fichiers source
2. Reconstruisez : `npm run build`
3. Déployez le nouveau dossier `dist/`

---

**Votre portfolio est maintenant prêt pour la production ! 🎉**