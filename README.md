# Mon Portfolio 

Site portfolio personnel construit avec Vite + React + TypeScript et Tailwind CSS.

## Résumé
Ce dépôt contient le portfolio de Diane KASSI, développeuse Full Stack. Le site est une application React (TypeScript) servie par Vite. Il présente :
- une page d'accueil (Hero)
- une section À propos
- une section Expérience
- une section Projets
- une section Compétences
- un formulaire de contact

## Technologies
- Node.js / npm
- Vite
- React 18
- TypeScript
- Tailwind CSS
- PostCSS & Autoprefixer
- lucide-react (icônes)
- supabase (présent en dépendance mais non utilisé dans le code visible)

## Scripts utiles
- `npm run dev` : lance le serveur de développement (Vite)
- `npm run build` : construit la version de production
- `npm run preview` : sert la build de production localement
- `npm run lint` : lance ESLint sur le projet

## Installation locale
Prérequis : Node 18+ recommandé, npm.

1. Cloner le dépôt :

```bash
git clone <url-du-repo>
cd <repo>
```

2. Installer les dépendances :

```bash
npm install
```

3. Lancer le serveur de développement :

```bash
npm run dev
```

Le site sera disponible par défaut sur http://localhost:5173

## Structure du projet
- `index.html` : point d'entrée HTML
- `src/main.tsx` : boot React
- `src/App.tsx` : layout principal et gestion du thème sombre
- `src/index.css` : import Tailwind
- `src/components/*` : composants (Header, Hero, About, Experience, Projects, Skills, Contact, Footer)
- `src/assets/` : images et médias
- `vite.config.ts` : configuration Vite
- `tailwind.config.js`, `postcss.config.js` : configuration Tailwind/PostCSS

## Personnalisation rapide
- Modifier le contenu : éditer les composants dans `src/components`.
- Modifier l'image de profil : remplacer `src/assets/diane.jpeg`.
- Mettre à jour les liens des projets : éditer `src/components/Projects.tsx`.

## Déploiement
La build produira des fichiers statiques dans `dist/`. Vous pouvez déployer ces fichiers sur GitHub Pages, Netlify, Vercel, ou tout autre service de hosting statique.

Exemple (Netlify / Vercel) : push sur GitHub et connecter le repo au service — il détectera Vite et construira automatiquement avec `npm run build`.

### Déploiement recommandé : Netlify (formulaire sécurisé)
Ce projet utilise un formulaire compatible Netlify dans la section `Contact`. Pour que Netlify recueille les messages :

1. Connectez votre dépôt GitHub à Netlify (New site from Git).
2. Par défaut Netlify détecte Vite ; build command : `npm run build`, publish directory : `dist`.
3. Déployez. Netlify traitera automatiquement les formulaires qui contiennent `data-netlify="true"` et un champ `form-name`.
4. Dans l'interface Netlify > Forms vous verrez les messages reçus. Vous pouvez configurer les notifications par email depuis Netlify.

Remarque : l'email et le numéro personnel ont été retirés du front-end pour éviter le spam. Le formulaire Netlify vous permet de recevoir les messages sans exposer votre contact public.

## Sécurité & données sensibles
- Aucune clé secrète ne doit être commitée. Si vous ajoutez Supabase ou d'autres services, utilisez des variables d'environnement et `.env` (non commité).

## Notes spécifiques observées
- Le paquet `@supabase/supabase-js` est dans `package.json` mais je n'ai pas trouvé d'utilisation de Supabase dans les fichiers parcourus.
- `lucide-react` est utilisé pour les icônes. Vite exclut cette dépendance dans `optimizeDeps.exclude` (dans `vite.config.ts`).

## Recommandations / améliorations possibles
- Ajouter un fichier `.env.example` pour documenter les variables d'environnement.
- Mettre en place des tests unitaires (Vitest) si besoin.
- Ajouter un CI (GitHub Actions) pour lint/build/test automatique.
- Optimiser les images (ex: compression, lazy-loading) et vérifier le nom du fichier `***.jpeg` vs `***.jpeg` (cohérence casse sur systèmes sensibles).

## Commands rapides
```bash
npm install
npm run dev
npm run build
npm run preview
npm run lint
```


