# Guide de déploiement sur GitHub Pages

Ce guide vous explique comment déployer votre portfolio Bilel Kaoulala sur GitHub Pages avec votre domaine personnalisé **bilelka.com**.

## 📋 Prérequis

- ✅ Compte GitHub (biIeI)
- ✅ Domaine personnalisé (bilelka.com)
- ✅ Git installé sur votre ordinateur
- ✅ Node.js et pnpm installés

## 🚀 Étapes de déploiement

### Étape 1 : Créer le repository GitHub

1. Allez sur [GitHub](https://github.com/new)
2. Créez un nouveau repository avec le nom : **biIeI.github.io**
3. Sélectionnez "Public"
4. Cliquez sur "Create repository"

**Important :** Le nom du repository DOIT être exactement `biIeI.github.io` pour que GitHub Pages fonctionne.

### Étape 2 : Initialiser Git localement

Ouvrez un terminal dans le dossier `/home/ubuntu/bilel-portfolio` et exécutez :

```bash
git init
git add .
git commit -m "Initial commit: Portfolio Bilel Kaoulala"
git branch -M main
git remote add origin https://github.com/biIeI/biIeI.github.io.git
git push -u origin main
```

**Note :** Remplacez `biIeI` par votre vrai nom d'utilisateur GitHub si différent.

### Étape 3 : Installer gh-pages (optionnel mais recommandé)

Pour déployer automatiquement, installez le package gh-pages :

```bash
pnpm add -D gh-pages
```

### Étape 4 : Compiler et déployer

Compilez votre projet React :

```bash
pnpm build
```

Cela créera un dossier `dist/` avec les fichiers optimisés.

### Étape 5 : Pousser les fichiers compilés sur GitHub

Option A - Avec gh-pages (automatique) :
```bash
pnpm deploy
```

Option B - Manuellement :
```bash
git add dist/
git commit -m "Deploy: Build for GitHub Pages"
git push origin main
```

### Étape 6 : Activer GitHub Pages

1. Allez sur votre repository GitHub : https://github.com/biIeI/biIeI.github.io
2. Cliquez sur "Settings" (Paramètres)
3. Allez dans "Pages" (à gauche)
4. Sous "Build and deployment", sélectionnez :
   - Source: "Deploy from a branch"
   - Branch: "main" et dossier "/ (root)"
5. Cliquez sur "Save"

Votre site sera bientôt accessible à : **https://biIeI.github.io**

---

## 🌐 Configurer le domaine personnalisé (bilelka.com)

### Étape 7 : Ajouter le domaine dans GitHub Pages

1. Dans les Settings du repository, allez dans "Pages"
2. Sous "Custom domain", entrez : **bilelka.com**
3. Cliquez sur "Save"

GitHub créera automatiquement un fichier `CNAME` (déjà présent dans ce projet).

### Étape 8 : Configurer les DNS chez votre registraire

Vous devez configurer les DNS de votre domaine pour pointer vers GitHub Pages.

**Chez votre registraire (OVH, Namecheap, GoDaddy, etc.) :**

1. Accédez à la gestion DNS de votre domaine
2. Supprimez les anciens enregistrements A (s'il y en a)
3. Ajoutez les enregistrements A suivants :

```
Type: A
Name: @
Value: 185.199.108.153

Type: A
Name: @
Value: 185.199.109.153

Type: A
Name: @
Value: 185.199.110.153

Type: A
Name: @
Value: 185.199.111.153
```

4. Optionnel - Ajoutez un enregistrement CNAME pour www :

```
Type: CNAME
Name: www
Value: biIeI.github.io
```

5. Sauvegardez les changements

**Note :** Les changements DNS peuvent prendre 24-48 heures pour se propager.

### Étape 9 : Vérifier la configuration

1. Attendez quelques minutes
2. Allez sur https://bilelka.com
3. Vous devriez voir votre portfolio !

Si vous voyez une erreur 404 ou "Not Found", attendez un peu plus (les DNS peuvent être lents à se propager).

---

## 🔄 Workflow de mise à jour

Chaque fois que vous voulez mettre à jour votre portfolio :

```bash
# 1. Faire vos modifications
# ... modifiez les fichiers ...

# 2. Compiler
pnpm build

# 3. Committer et pousser
git add .
git commit -m "Update: Description de vos changements"
git push origin main

# 4. Déployer (optionnel si vous utilisez gh-pages)
pnpm deploy
```

---

## 🐛 Dépannage

### Le site n'apparaît pas après 24h

1. Vérifiez que le repository s'appelle bien `biIeI.github.io`
2. Vérifiez que GitHub Pages est activé dans Settings → Pages
3. Vérifiez que le fichier CNAME existe dans le dossier `dist/`
4. Vérifiez les DNS chez votre registraire

### Erreur 404 ou "Not Found"

1. Attendez 24-48h pour la propagation DNS
2. Videz le cache de votre navigateur (Ctrl+Shift+Delete)
3. Testez avec un autre navigateur ou en mode incognito

### Le site s'affiche mais sans CSS/images

1. Vérifiez que `base: "/"` est configuré dans `vite.config.ts`
2. Relancez le build : `pnpm build`
3. Poussez les changements : `git push origin main`

### Certificat SSL invalide

GitHub Pages génère automatiquement un certificat SSL. Si vous voyez une erreur :

1. Attendez quelques minutes
2. Videz le cache du navigateur
3. Réessayez

---

## 📚 Ressources utiles

- [Documentation GitHub Pages](https://docs.github.com/en/pages)
- [Configuration DNS pour GitHub Pages](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site)
- [Vite - Deploying](https://vitejs.dev/guide/static-deploy.html#github-pages)

---

## ✅ Checklist finale

- [ ] Repository créé : `biIeI.github.io`
- [ ] Git initialisé et configuré
- [ ] Premier commit poussé sur GitHub
- [ ] GitHub Pages activé dans Settings
- [ ] Domaine personnalisé ajouté dans GitHub Pages
- [ ] DNS configurés chez votre registraire
- [ ] Fichier CNAME présent dans `dist/`
- [ ] Site accessible à `https://bilelka.com`

---

## 🎉 Bravo !

Votre portfolio est maintenant en ligne sur **https://bilelka.com** ! 🚀

Pour toute question, consultez la [documentation officielle de GitHub Pages](https://docs.github.com/en/pages).
