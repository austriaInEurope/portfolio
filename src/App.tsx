import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { translations, type Language } from './data/i18n'

type AppContextValue = {
  language: Language
  setLanguage: (language: Language) => void
  theme: 'light' | 'dark'
  toggleTheme: () => void
  t: typeof translations.en
}

const AppContext = createContext<AppContextValue | null>(null)

export function useApp() {
  const context = useContext(AppContext)
  if (!context) throw new Error('useApp must be used inside AppContext')
  return context
}

export default function App() {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('portfolio-language')
    return saved === 'ru' ? 'ru' : 'en'
  })
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    const saved = localStorage.getItem('portfolio-theme')
    if (saved === 'light' || saved === 'dark') return saved
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  })

  useEffect(() => {
    localStorage.setItem('portfolio-language', language)
    document.documentElement.lang = language
  }, [language])

  useEffect(() => {
    localStorage.setItem('portfolio-theme', theme)
    document.documentElement.dataset.theme = theme
  }, [theme])

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      theme,
      toggleTheme: () => setTheme((current) => (current === 'dark' ? 'light' : 'dark')),
      t: translations[language],
    }),
    [language, theme],
  )

  return (
    <AppContext.Provider value={value}>
      <Nav />
      <main id="top" className="pt-[56px]">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </main>
    </AppContext.Provider>
  )
}
