# Configuration EmailJS pour le formulaire de contact

## Étapes de configuration

### 1. Créer un compte EmailJS

1. Allez sur [https://www.emailjs.com/](https://www.emailjs.com/)
2. Cliquez sur "Sign Up" et créez un compte gratuit
3. Confirmez votre email

### 2. Ajouter un service email

1. Dans le dashboard EmailJS, allez dans "Email Services"
2. Cliquez sur "Add New Service"
3. Choisissez votre fournisseur d'email (Gmail, Outlook, Yahoo, etc.)
4. Suivez les instructions pour connecter votre compte email
5. Notez votre **Service ID** (ex: `service_abc123`)

### 3. Créer un template d'email

1. Allez dans "Email Templates"
2. Cliquez sur "Create New Template"
3. Utilisez ce template :

```
Sujet: Nouveau message de {{from_name}} - {{subject}}

Vous avez reçu un nouveau message depuis votre portfolio :

De : {{from_name}}
Email : {{from_email}}
Sujet : {{subject}}

Message :
{{message}}

---
Ce message a été envoyé depuis votre portfolio bilel-portfolio.manus.space
```

4. Sauvegardez et notez votre **Template ID** (ex: `template_xyz789`)

### 4. Récupérer votre Public Key

1. Allez dans "Account" > "General"
2. Trouvez votre **Public Key** dans la section "API Keys"
3. Notez-la (ex: `abcdefghijklmnop`)

### 5. Mettre à jour le code

Ouvrez le fichier `client/src/components/ContactForm.tsx` et remplacez les valeurs suivantes (lignes 63-65) :

```typescript
const SERVICE_ID = "YOUR_SERVICE_ID"; // Remplacez par votre Service ID
const TEMPLATE_ID = "YOUR_TEMPLATE_ID"; // Remplacez par votre Template ID
const PUBLIC_KEY = "YOUR_PUBLIC_KEY"; // Remplacez par votre Public Key
```

Par exemple :
```typescript
const SERVICE_ID = "service_abc123";
const TEMPLATE_ID = "template_xyz789";
const PUBLIC_KEY = "abcdefghijklmnop";
```

### 6. Tester le formulaire

1. Sauvegardez les modifications
2. Allez sur votre site
3. Remplissez le formulaire de contact
4. Cliquez sur "Envoyer"
5. Vérifiez votre boîte mail pour recevoir le message

## Limites du plan gratuit

- 200 emails/mois
- Parfait pour un portfolio personnel
- Pour plus d'emails, passez au plan payant (à partir de $7/mois)

## Sécurité

- La Public Key peut être exposée dans le code frontend (c'est normal)
- EmailJS gère la sécurité côté serveur
- Vous pouvez ajouter un CAPTCHA dans les paramètres EmailJS pour éviter le spam

## Support

- Documentation : https://www.emailjs.com/docs/
- Support : https://www.emailjs.com/support/

## Alternative : Resend

Si vous préférez une alternative moderne :
1. Créez un compte sur [https://resend.com/](https://resend.com/)
2. Suivez leur documentation pour React
3. Remplacez le code EmailJS par Resend dans ContactForm.tsx
