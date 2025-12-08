# 🚀 Déploiement Rapide - GitHub Pages

## 📋 Résumé

Votre portfolio est **prêt à être déployé** sur GitHub Pages avec votre domaine **bilelka.com**.

Tout a été configuré automatiquement. Il vous reste juste à :

1. ✅ Créer un repository GitHub

1. ✅ Pousser le code

1. ✅ Configurer les DNS

**Durée estimée : 10 minutes**

---

## 🎯 Commandes rapides

### Sur votre ordinateur (terminal)

```bash
# 1. Naviguer dans le dossier du projet
cd /chemin/vers/bilel-portfolio

# 2. Configurer le repository GitHub
git branch -M main
git remote add origin https://github.com/biIeI/biIeI.github.io.git
git push -u origin main

# 3. Compiler pour la production (optionnel, déjà fait )
pnpm build

# 4. Pousser les fichiers compilés
git add dist/
git commit -m "Deploy: Production build for GitHub Pages"
git push origin main
```

---

## 🔧 Configuration GitHub

### 1. Créer le repository

- URL : [https://github.com/new](https://github.com/new)

- Nom : **biIeI.github.io** (EXACT )

- Visibilité : Public

- Créer

### 2. Activer GitHub Pages

1. Settings → Pages

1. Build and deployment → "Deploy from a branch"

1. Branch : "main" / Folder : "/ (root)"

1. Save

### 3. Ajouter le domaine personnalisé

1. Settings → Pages

1. Custom domain : **bilelka.com**

1. Save

---

## 🌐 Configuration DNS

### Chez votre registraire (OVH, Namecheap, GoDaddy, etc.)

Ajouter ces 4 enregistrements A :

| Type | Name | Value |
| --- | --- | --- |
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |

Optionnel - Ajouter pour www :

| Type | Name | Value |
| --- | --- | --- |
| CNAME | www | biIeI.github.io |

---

## ⏱️ Délais

- **GitHub Pages** : 1-5 minutes (site accessible à biIeI.github.io)

- **DNS** : 24-48 heures (site accessible à bilelka.com)

---

## ✅ Vérification

Après 5 minutes :

- [ ] Allez sur [https://biIeI.github.io](https://biIeI.github.io) → devrait afficher votre portfolio

Après 24-48h :

- [ ] Allez sur [https://bilelka.com](https://bilelka.com) → devrait afficher votre portfolio

---

## 🐛 Problèmes ?

Consultez le fichier **GITHUB_PAGES_DEPLOYMENT.md** pour un guide complet avec dépannage.

---

## 📞 Support

Pour toute question :

- [Documentation GitHub Pages](https://docs.github.com/en/pages)

- [Configuration DNS](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site)