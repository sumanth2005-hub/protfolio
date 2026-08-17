# Sumanth M B — Portfolio

Terminal-themed multi-page portfolio. React + Vite + React Router.

## Run locally
```
npm install
npm run dev
```

## Deploy (Vercel, free)
1. Push this folder to a new GitHub repo.
2. Go to vercel.com → New Project → import the repo.
3. Framework preset: Vite (auto-detected). Build command `npm run build`, output dir `dist`.
4. Deploy. You get a live `.vercel.app` URL instantly — paste that on your resume.

`vercel.json` already handles client-side routing so refreshing `/projects` etc. won't 404.

## Structure
```
src/
  components/   # Navbar, Footer, TerminalWindow (reusable shell)
  pages/        # Home, About, Projects, Contact
  data/         # profile.js — all resume content, single source of truth
```

To update content (new project, changed skills, etc.) — edit `src/data/profile.js` only. Pages read from it.
