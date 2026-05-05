import { ThemeProvider } from "./context/ThemeProvider.jsx"
import { Navbar } from "./components/layout/Navbar.jsx"
import { Footer } from "./components/layout/Footer.jsx"
import { SkipToContent } from "./components/layout/SkipToContent.jsx"
import { ScrollProgress } from "./components/layout/ScrollProgress.jsx"
import { Hero } from "./components/sections/Hero.jsx"
import { About } from "./components/sections/About.jsx"
import { Skills } from "./components/sections/Skills.jsx"
import { Projects } from "./components/sections/Projects.jsx"
import { Experience } from "./components/sections/Experience.jsx"
import { Contact } from "./components/sections/Contact.jsx"

function AppShell() {
  return (
    <div className="flex min-h-screen flex-col bg-bg text-text">
      <SkipToContent />
      <ScrollProgress />
      <Navbar />
      <main id="main-content" className="flex-1 pt-16">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
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
