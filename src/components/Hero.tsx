import Reveal from './Reveal'
import { profile } from '../data/portfolio'
import { useApp } from '../App'

export default function Hero() {
  const { t } = useApp()

  return (
    <section className="relative overflow-hidden px-6 pb-24 pt-20 sm:pb-32 sm:pt-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-[-180px] h-[520px] w-[820px] -translate-x-1/2 rounded-full opacity-55 blur-[110px]"
        style={{ background: 'radial-gradient(closest-side, rgba(0,113,227,.28), transparent 70%)' }}
      />

      <div className="relative mx-auto max-w-grid">
        <Reveal delay={0.05}>
          <p className="text-[15px] text-muted">{profile.location} · {t.hero.available}</p>
        </Reveal>
        <Reveal delay={0.12}>
          <h1 className="display mt-4 text-[clamp(2.9rem,9vw,5.6rem)]">{profile.name}</h1>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="tight mt-4 text-[clamp(1.35rem,3.4vw,2rem)] font-medium text-muted">{profile.role}</p>
        </Reveal>
        <Reveal delay={0.26}>
          <p className="mt-2 text-[15px] text-muted">{profile.stack}</p>
        </Reveal>
        <Reveal delay={0.32}>
          <p className="mt-8 max-w-prose text-[19px] leading-[1.6] text-muted">{profile.intro}</p>
        </Reveal>
        <Reveal delay={0.38}>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a href="#work" className="rounded-full bg-accent px-6 py-3 text-[15px] font-medium text-white transition-all hover:-translate-y-0.5 hover:opacity-90">
              {t.hero.viewProjects}
            </a>
            <a href="https://set.ki/QDe2Cag" target="_blank" rel="noreferrer" className="rounded-full border border-line bg-surface px-6 py-3 text-[15px] font-medium transition-all hover:-translate-y-0.5 hover:bg-sunken">
              {t.hero.setApp}
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer" className="rounded-full border border-line px-6 py-3 text-[15px] font-medium transition-colors hover:bg-sunken">
              {t.hero.github}
            </a>
            <a href={`mailto:${profile.email}`} className="rounded-full border border-line px-6 py-3 text-[15px] font-medium transition-colors hover:bg-sunken">
              {t.hero.contact}
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="rounded-full border border-line px-6 py-3 text-[15px] font-medium transition-colors hover:bg-sunken">
              LinkedIn
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
