import Reveal from './Reveal'
import { skillGroups } from '../data/portfolio'
import { useApp } from '../App'

export default function Skills() {
  const { t } = useApp()
  return (
    <section id="skills" className="mt-28 border-y border-line bg-surface px-6 py-24 sm:py-28">
      <div className="mx-auto max-w-grid">
        <Reveal><h2 className="display text-[clamp(2rem,5vw,3rem)]">{t.skills.title}</h2></Reveal>
        <Reveal delay={0.06}><p className="mt-4 max-w-prose text-[19px] text-muted">{t.skills.intro}</p></Reveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, index) => (
            <Reveal key={group.title} delay={(index % 3) * 0.05}>
              <div className="lift h-full rounded-3xl border border-line bg-sunken p-7">
                <h3 className="tight text-[19px] font-semibold">{group.title}</h3>
                <ul className="mt-5 space-y-3 text-[16px] text-muted">{group.items.map((item) => <li key={item}>{item}</li>)}</ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
