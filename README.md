# Roman Ferrero — Portfolio

[![Live](https://img.shields.io/badge/live-roman--ferrero.vercel.app-7c3aed)](https://roman-ferrero.vercel.app)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](#license)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white)](https://vite.dev)
[![Tailwind](https://img.shields.io/badge/Tailwind-4-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com)

Personal portfolio of **Roman Ferrero**, advanced Computer Engineering student at **Universidad ORT Uruguay** and full-stack developer.

Single-page application with bilingual content (ES / EN), dark / light theme, scroll-triggered animations and a minimal, modern aesthetic.

> **Live demo**: <https://roman-ferrero.vercel.app>

## Features

- **6 sections**: Hero, About, Skills, Projects, Experience timeline, Contact
- **Bilingual** (Spanish / English) with persistent toggle
- **Theme toggle** (dark / light) with system preference detection and no-flash bootstrap
- **Scroll-spy navigation** with animated active-link pill
- **Scroll progress bar** at the top of the page
- **Skip-to-content** link for keyboard / screen-reader users
- **Auto-generated gradients** for project cards (deterministic per name)
- **Real-data driven**: all content lives in `src/data/*.js` files
- **Polished SEO**: Open Graph, Twitter cards, JSON-LD `Person` schema, sitemap, robots.txt
- **Responsive** mobile-first layout
- **Animated** with Framer Motion (subtle, never distracting)

## Tech stack

- [React 19](https://react.dev/) + [Vite 8](https://vite.dev/)
- [Tailwind CSS v4](https://tailwindcss.com/) - utility-first styling, class-based dark mode
- [Framer Motion](https://www.framer.com/motion/) - animations
- [react-i18next](https://react.i18next.com/) - i18n (Spanish / English)
- [lucide-react](https://lucide.dev/) + [react-icons](https://react-icons.github.io/react-icons/) - iconography
- ESLint - code quality

## Getting started

```bash
# Install dependencies
npm install

# Start dev server (http://localhost:5173)
npm run dev

# Production build
npm run build

# Preview production build
npm run preview

# Lint
npm run lint
```

## Project structure

```
src/
├── assets/              Static assets
├── components/
│   ├── ui/              Atomic, reusable building blocks (Button, Container, ProjectCard, Timeline)
│   ├── layout/          Navbar, Footer, SkipToContent, ScrollProgress, theme + lang toggles
│   └── sections/        Hero, About, Skills, Projects, Experience, Contact
├── context/             React contexts (ThemeProvider)
├── hooks/               useTheme, useLanguage, useActiveSection
├── data/                Content (projects, skills, experience, social, stats)
├── i18n/                Translation files and config
├── lib/                 Utility helpers (cn, gradient)
├── App.jsx              Root component
├── index.css            Tailwind import + theme tokens
└── main.jsx             Entry point

public/
├── favicon.svg          Personal favicon (RF on violet)
├── cv.pdf               Downloadable resume
├── og-image.png         Social preview (1200x630)
├── robots.txt           Search engine rules
└── sitemap.xml          Sitemap for indexing
```

## Customization

All content is data-driven. Edit these files to make the site yours:

| File | What to change |
| --- | --- |
| `src/data/social.js` | Email, GitHub, LinkedIn URLs |
| `src/data/stats.js` | About-section statistics (years, projects, languages) |
| `src/data/skills.js` | Tech stack grouped by category |
| `src/data/projects.js` | Featured projects (name, description, tags, links) |
| `src/data/experience.js` | Timeline entries (education + work) |
| `src/i18n/locales/es.json` | All Spanish copy |
| `src/i18n/locales/en.json` | All English copy |

## Required public assets

The site references three files inside `public/` that you must provide:

| File | Purpose | Specs |
| --- | --- | --- |
| `cv.pdf` | Linked from the Hero "Download CV" button | Any PDF |
| `og-image.png` | Preview on LinkedIn / WhatsApp / Slack / Twitter | 1200 x 630 px, PNG |
| `favicon.svg` | Browser tab icon | Already included |

### Open Graph image specs

Design `public/og-image.png` (1200 x 630) with:

- Dark background (`#0a0a0f`) or violet gradient (`#7c3aed` → `#a78bfa`)
- "Roman Ferrero" — large white bold text (Inter or similar)
- "Full-Stack Developer & SE Student" — violet accent below
- Optional: stack icons strip at the bottom, RF monogram in a corner
- Save as PNG (max 5 MB ideally < 1 MB)

## Deployment

This portfolio is deployed on **Vercel** with continuous deployment from `main`.

### Initial setup

1. Push the repo to GitHub
2. Sign in to [vercel.com](https://vercel.com) with the same GitHub account
3. Click **Add New → Project** and import the repo
4. Vercel auto-detects Vite: framework `Vite`, build `npm run build`, output `dist`
5. Click **Deploy**. First build takes ~30s

### After deploying

Update these URLs in the codebase to point to your real domain:

- `index.html`: `<link rel="canonical">`, `og:url`, `og:image`, `twitter:image`, JSON-LD `url` and `image`
- `public/sitemap.xml`: `<loc>` URLs
- `public/robots.txt`: `Sitemap` URL
- `README.md`: badges and live demo link

### Custom domain (optional)

In Vercel: **Project → Settings → Domains → Add**. Point your DNS to Vercel's nameservers or add a CNAME.

## Roadmap

- [x] **Phase 1** - Foundation: Vite + React scaffold, Tailwind v4, theme tokens, project structure
- [x] **Phase 2** - Layout: theme provider, i18n (ES/EN), navbar with scroll-spy, footer, theme + language toggles
- [x] **Phase 3** - Hero + About sections
- [x] **Phase 4** - Skills section
- [x] **Phase 5** - Projects section
- [x] **Phase 6** - Experience timeline + Contact
- [x] **Phase 7** - Polish: SEO, favicon, scroll progress, skip-to-content, deploy

## License

MIT (c) Roman Ferrero
