# 🏔️ Porri - Site Touristique

Un site web moderne et élégant dédié au village de Porri en Corse, développé avec Next.js et Tailwind CSS.

## 📍 À propos de Porri

Porri est un charmant village de la Casinca corse, niché dans les montagnes à 450m d'altitude, à 15km de Bastia. Le village fait partie de la communauté de communes de la Castagniccia-Casinca et compte 44 habitants (2022). Ce site présente les points d'intérêt, l'histoire, et les informations pratiques pour découvrir cette perle authentique de la Corse.

## 🚀 Technologies utilisées

- **Next.js 15** - Framework React avec App Router
- **React 19** - Bibliothèque UI
- **TypeScript** - Typage statique
- **Tailwind CSS 4** - Framework CSS utilitaire
- **ESLint** - Linting du code

## 📁 Structure du projet

```
porri/
├── app/
│   ├── components/          # Composants réutilisables
│   │   ├── Navigation.tsx   # Navigation principale
│   │   └── Footer.tsx       # Pied de page
│   ├── visites/            # Page des visites et activités
│   │   └── page.tsx
│   ├── pratique/           # Page des informations pratiques
│   │   └── page.tsx
│   ├── globals.css         # Styles globaux
│   ├── layout.tsx          # Layout principal
│   └── page.tsx            # Page d'accueil
├── public/                 # Assets statiques
└── README.md              # Documentation
```

## 🎨 Fonctionnalités

### Page d'accueil
- **Hero section** avec appel à l'action
- **Présentation du village** avec cartes informatives
- **Section histoire** avec anecdotes
- **Points d'intérêt** principaux
- **Informations pratiques** essentielles
- **Section contact** avec CTA

### Page Visites
- **Points d'intérêt** détaillés (église, place du village)
- **Randonnées** avec niveaux de difficulté
- **Activités locales** (dégustation d'huile, cuisine corse)
- **Galerie photos** (placeholder)

### Page Pratique
- **Accès** (voiture, transports en commun)
- **Hébergements** (hôtels, gîtes, campings)
- **Restaurants** et produits locaux
- **Météo et saisons** optimales
- **Conseils pratiques** pour les visiteurs

## 🛠️ Installation et développement

### Prérequis
- Node.js 18+ 
- npm ou yarn

### Installation
```bash
# Cloner le projet
git clone [url-du-repo]
cd porri

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

Le site sera accessible sur `http://localhost:3000`

### Scripts disponibles
```bash
npm run dev      # Serveur de développement
npm run build    # Build de production
npm run start    # Serveur de production
npm run lint     # Vérification du code
```

## 🎯 Fonctionnalités techniques

- **Responsive design** - Optimisé mobile, tablette, desktop
- **Navigation fluide** - Liens internes et externes
- **Performance** - Optimisé avec Next.js
- **SEO** - Métadonnées optimisées
- **Accessibilité** - Respect des standards WCAG
- **Animations** - Transitions et micro-interactions

## 🎨 Design System

### Couleurs
- **Bleu** : `#1e40af` (Primary)
- **Vert** : `#059669` (Secondary)
- **Orange** : `#ea580c` (Accent)
- **Gris** : `#6b7280` (Text)

### Typographie
- **Geist Sans** - Police principale
- **Geist Mono** - Police monospace

### Composants
- **Cartes** avec ombres et bordures arrondies
- **Boutons** avec états hover
- **Navigation** sticky avec backdrop blur
- **Gradients** pour les backgrounds

## 📱 Responsive

Le site est entièrement responsive avec des breakpoints :
- **Mobile** : < 768px
- **Tablet** : 768px - 1024px
- **Desktop** : > 1024px

## 🚀 Déploiement

### Vercel (recommandé)
```bash
# Installer Vercel CLI
npm i -g vercel

# Déployer
vercel
```

### Autres plateformes
Le projet peut être déployé sur :
- Netlify
- AWS Amplify
- Railway
- Docker

## 🔧 Personnalisation

### Ajouter du contenu
1. Modifier les pages dans `app/`
2. Ajouter des images dans `public/`
3. Mettre à jour les métadonnées dans `layout.tsx`

### Modifier le style
1. Éditer `app/globals.css`
2. Modifier les classes Tailwind dans les composants
3. Ajouter des variables CSS personnalisées

## 📄 Licence

Ce projet est sous licence MIT.

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à :
1. Fork le projet
2. Créer une branche feature
3. Commiter vos changements
4. Pousser vers la branche
5. Ouvrir une Pull Request

## 📞 Contact

Pour toute question ou suggestion :
- 📧 Email : info@porri-corse.fr
- 🌐 Site : [porri-corse.fr](https://porri-corse.fr)

---

**Développé avec ❤️ pour le village de Porri**
