import Reveal from './Reveal'
import { useApp } from '../App'

export default function About() {
  const { t } = useApp()

  return (
    <section id="about" className="border-y border-line bg-surface px-6 py-24 sm:py-28">
      <div className="mx-auto grid max-w-grid gap-14 lg:grid-cols-[1fr_360px]">
        <div>
          <Reveal><h2 className="display text-[clamp(2rem,5vw,3rem)]">{t.about.title}</h2></Reveal>
          <Reveal delay={0.08}>
            <div className="mt-7 max-w-prose space-y-5 text-[19px] leading-[1.65] text-muted">
              <p>{t.about.p1}</p><p>{t.about.p2}</p><p>{t.about.p3}</p>
            </div>
          </Reveal>
        </div>
        <Reveal delay={0.14}>
          <aside className="rounded-3xl border border-line bg-sunken p-7">
            <dl className="space-y-6 text-[15px]">
              {t.about.facts.map(([label, value]) => (
                <div key={label}><dt className="text-muted">{label}</dt><dd className="mt-1 font-medium">{value}</dd></div>
              ))}
            </dl>
          </aside>
        </Reveal>
      </div>
    </section>
  )
}
