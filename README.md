# Roman Ferrero — Portfolio

Personal portfolio of **Roman Ferrero**, advanced Computer Engineering student at **Universidad ORT Uruguay** and full-stack developer.

Single-page application built with React + Vite, Tailwind CSS v4 and Framer Motion. Bilingual (ES / EN) with dark / light theme toggle.

> **Status:** under active development — Phase 1 (foundation) complete.

## Tech stack

- [React 19](https://react.dev/) + [Vite 8](https://vite.dev/)
- [Tailwind CSS v4](https://tailwindcss.com/) — utility-first styling, class-based dark mode
- [Framer Motion](https://www.framer.com/motion/) — animations
- [react-i18next](https://react.i18next.com/) — i18n (Spanish / English)
- [lucide-react](https://lucide.dev/) + [react-icons](https://react-icons.github.io/react-icons/) — iconography
- ESLint — code quality

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
├── assets/              Static assets (images, CV, etc.)
├── components/
│   ├── ui/              Atomic, reusable building blocks
│   ├── layout/          Navbar, Footer, theme/lang toggles
│   └── sections/        Hero, About, Skills, Projects, Experience, Contact
├── context/             React contexts (theme, i18n bootstrapping)
├── hooks/               Custom hooks
├── data/                Content data (projects, skills, experience)
├── i18n/                Translation files and config
├── lib/                 Utility helpers
├── App.jsx              Root component
├── index.css            Tailwind import + theme tokens
└── main.jsx             Entry point
```

## Roadmap

- [x] **Phase 1** - Foundation: Vite + React scaffold, Tailwind v4, theme tokens, project structure
- [x] **Phase 2** - Layout: theme provider, i18n (ES/EN), navbar with scroll-spy, footer, theme + language toggles
- [x] **Phase 3** - Hero + About sections
- [x] **Phase 4** - Skills section
- [x] **Phase 5** - Projects section
- [x] **Phase 6** - Experience timeline + Contact
- [ ] **Phase 7** — Polish: scroll animations, SEO, deployment

## License

MIT © Roman Ferrero
