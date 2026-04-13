# SEO Consulting 13

Site statique pour l'agence **SEO Consulting 13**, spécialisée dans le référencement local et la création de site web pour les TPE et PME de Provence (Bouches-du-Rhône et Vaucluse). Zéro tracking, zéro cookie, formulaires via Web3Forms.

## Stack technique

- **HTML5 + CSS3 + JavaScript vanilla** — aucune dépendance, aucun build step, aucun framework
- Déployé sur **Vercel** via GitHub
- Formulaires de contact via **Web3Forms** (gratuit, pas de cookie, RGPD-friendly)

## Lancer en local

Ouvrir `index.html` dans un navigateur, ou utiliser un serveur statique :

```bash
# Avec Python
python -m http.server 8000

# Avec Node.js
npx serve .
```

## Arborescence

```
/
├── index.html                      Page d'accueil
├── a-propos.html                   Page À propos
├── contact.html                    Page Contact
├── 404.html                        Page 404
├── mentions-legales.html           Mentions légales
├── politique-confidentialite.html  Politique de confidentialité
├── merci.html                      Page de confirmation (noindex)
├── robots.txt                      Directives crawlers
├── sitemap.xml                     Plan du site (23 URLs)
├── humans.txt                      Crédits
├── vercel.json                     Configuration Vercel
├── README.md                       Ce fichier
│
├── assets/
│   ├── css/style.css               Feuille de styles principale
│   ├── js/main.js                  JavaScript (menu, FAQ, scroll)
│   └── img/
│       ├── favicon.svg             Favicon SVG
│       └── og-image.svg            Image Open Graph
│
├── data/
│   └── villes.json                 Données des 9 villes couvertes
│
├── services/                       Pages services (7 pages)
│   ├── index.html                  Hub services
│   ├── seo.html                    Référencement naturel
│   ├── sea.html                    Google Ads
│   ├── creation-site-web.html      Création de site
│   ├── refonte-site-web.html       Refonte de site
│   ├── audit-strategie-web.html    Audit & stratégie
│   └── optimisation-continue.html  Optimisation continue
│
├── villes/                         Pages villes (10 pages)
│   ├── index.html                  Hub zone d'intervention
│   ├── marseille.html
│   ├── aix-en-provence.html
│   ├── avignon.html
│   ├── aubagne.html
│   ├── martigues.html
│   ├── salon-de-provence.html
│   ├── la-ciotat.html
│   ├── vitrolles.html
│   └── gardanne.html
│
└── blog/
    └── index.html                  Blog (en préparation)
```

## Checklist de mise en production

- [ ] Aller sur https://web3forms.com, entrer l'email `contact@seo-consulting13.fr`, copier la clé API reçue
- [ ] Remplacer TOUTES les occurrences de `TODO_WEB3FORMS_KEY` dans le projet (`index.html`, `/villes/*.html`, `/contact.html`)
- [ ] Tester un envoi de formulaire depuis chaque type de page (accueil, une page ville, page contact) et vérifier la réception
- [ ] Vérifier que la redirection vers `/merci` fonctionne après envoi
- [ ] Remplacer `TODO_RAISON_SOCIALE`, `TODO_SIRET`, `TODO_ADRESSE`, `TODO_DIRECTEUR` et autres placeholders dans `/mentions-legales.html` et `/politique-confidentialite.html`
- [ ] Vérifier que l'adresse `contact@seo-consulting13.fr` est active et reçoit les emails
- [ ] Créer un `apple-touch-icon.png` 180x180
- [ ] Convertir `og-image.svg` en `og-image.jpg` pour meilleure compatibilité réseaux sociaux
- [ ] Configurer le domaine custom `seo-consulting13.fr` sur Vercel
- [ ] Vérifier les redirections HTTPS automatiques
- [ ] Créer la fiche Google Business Profile avec les coordonnées cohérentes du site
- [ ] Créer un compte Google Search Console (gratuit, sans tracking côté visiteur) et soumettre le sitemap
- [ ] Relire toutes les pages villes pour vérifier l'unicité du contenu
- [ ] Tester le bouton mailto sur mobile et desktop
- [ ] Lancer un Lighthouse sur les pages clés (cible ≥95 partout)

## Note importante

Ce site n'utilise **aucun cookie de tracking**, **aucun outil d'analyse d'audience**. Les formulaires de contact sont gérés par **Web3Forms** (aucun cookie installé côté visiteur, données non stockées).

Pour mesurer l'audience plus tard sans compromis sur la vie privée, l'option recommandée est **Vercel Analytics** (intégré, activable en 1 clic dans le dashboard Vercel, sans script côté client).
