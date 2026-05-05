import { ThemeProvider } from "./context/ThemeProvider.jsx"
import { Navbar } from "./components/layout/Navbar.jsx"
import { Footer } from "./components/layout/Footer.jsx"
import { Container } from "./components/ui/Container.jsx"
import { Hero } from "./components/sections/Hero.jsx"
import { About } from "./components/sections/About.jsx"
import { useLanguage } from "./hooks/useLanguage.js"

/**
 * Sections still pending implementation. They render a "Coming soon"
 * placeholder so the navbar scroll-spy and anchor links keep working.
 */
const PENDING_SECTIONS = ["skills", "projects", "experience", "contact"]

function PlaceholderSection({ id }) {
  const { t } = useLanguage()
  return (
    <section
      id={id}
      className="flex min-h-[60vh] items-center justify-center scroll-mt-20"
    >
      <Container className="text-center">
        <p className="text-xs uppercase tracking-[0.2em] text-text-muted">
          {t(`nav.${id}`)}
        </p>
        <h2 className="mt-3 text-3xl font-bold text-text-strong sm:text-4xl">
          Coming soon
        </h2>
        <p className="mt-2 text-sm text-text-muted">
          Section content will be added in upcoming phases.
        </p>
      </Container>
    </section>
  )
}

function AppShell() {
  return (
    <div className="flex min-h-screen flex-col bg-bg text-text">
      <Navbar />
      <main className="flex-1 pt-16">
        <Hero />
        <About />
        {PENDING_SECTIONS.map((id) => (
          <PlaceholderSection key={id} id={id} />
        ))}
      </main>
      <Footer />
    </div>
  )
}

function App() {
  return (
    <ThemeProvider>
      <AppShell />
    </ThemeProvider>
  )
}

export default App
