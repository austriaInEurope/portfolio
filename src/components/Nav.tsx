import { profile } from '../data/portfolio'
import { useApp } from '../App'

export default function Nav() {
  const { language, setLanguage, theme, toggleTheme, t } = useApp()

  const links = [
    { href: '#work', label: t.nav.work },
    { href: '#about', label: t.nav.about },
    { href: '#skills', label: t.nav.skills },
    { href: '#contact', label: t.nav.contact },
  ]

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className="border-b border-line backdrop-blur-xl"
        style={{ background: 'color-mix(in srgb, var(--canvas) 78%, transparent)' }}
      >
        <nav className="mx-auto flex h-[56px] max-w-grid items-center gap-3 px-4 sm:px-6">
          <a href="#top" className="tight shrink-0 text-[15px] font-semibold">
            {profile.name}
          </a>

          <div className="hidden min-w-0 flex-1 items-center justify-center gap-7 text-[13px] text-muted lg:flex">
            {links.map((link) => (
              <a key={link.href} href={link.href} className="transition-colors hover:text-ink">
                {link.label}
              </a>
            ))}
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-ink"
            >
              {t.nav.linkedin}
            </a>
            <a
              href="https://set.ki/QDe2Cag"
              target="_blank"
              rel="noreferrer"
              className="font-medium text-accent transition-opacity hover:opacity-75"
            >
              {t.nav.setApp}
            </a>
          </div>

          <div className="ml-auto flex shrink-0 items-center gap-2">
            <div
              className="flex items-center rounded-full border border-line bg-surface/80 p-0.5 shadow-sm"
              aria-label={t.language.label}
            >
              <button
                type="button"
                onClick={() => setLanguage('en')}
                aria-pressed={language === 'en'}
                className={`rounded-full px-2.5 py-1 text-[11px] font-semibold transition-all ${
                  language === 'en' ? 'bg-ink text-canvas shadow-sm' : 'text-muted hover:text-ink'
                }`}
              >
                EN
              </button>
              <button
                type="button"
                onClick={() => setLanguage('ru')}
                aria-pressed={language === 'ru'}
                className={`rounded-full px-2.5 py-1 text-[11px] font-semibold transition-all ${
                  language === 'ru' ? 'bg-ink text-canvas shadow-sm' : 'text-muted hover:text-ink'
                }`}
              >
                RU
              </button>
            </div>

            <button
              type="button"
              onClick={toggleTheme}
              aria-label={theme === 'dark' ? t.theme.light : t.theme.dark}
              title={theme === 'dark' ? t.theme.light : t.theme.dark}
              className="theme-toggle inline-flex h-9 w-9 items-center justify-center rounded-full border border-line bg-surface/80 text-muted shadow-sm transition-all hover:-translate-y-0.5 hover:text-ink"
            >
              {theme === 'dark' ? (
                <svg viewBox="0 0 24 24" className="h-[17px] w-[17px]" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                  <path d="M21 15.2A8.5 8.5 0 0 1 8.8 3a8.5 8.5 0 1 0 12.2 12.2Z" />
                </svg>
              ) : (
                <svg viewBox="0 0 24 24" className="h-[17px] w-[17px]" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                  <circle cx="12" cy="12" r="3.4" />
                  <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
                </svg>
              )}
            </button>

            <a
              href="#contact"
              className="hidden rounded-full bg-accent px-4 py-[7px] text-[13px] font-medium text-white transition-all hover:-translate-y-0.5 hover:opacity-90 sm:block"
            >
              {t.nav.contact}
            </a>
          </div>
        </nav>
      </div>
    </header>
  )
}
