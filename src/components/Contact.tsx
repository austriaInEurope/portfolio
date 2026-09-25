import Reveal from './Reveal'
import { profile } from '../data/portfolio'
import { useApp } from '../App'

export default function Contact() {
  const { t } = useApp()
  const channels = [
    { label: 'Email', value: profile.email, href: `mailto:${profile.email}`, note: t.contact.notes.email, external: false },
    { label: 'GitHub', value: profile.githubHandle, href: profile.github, note: t.contact.notes.github, external: true },
    { label: 'LinkedIn', value: profile.name, href: profile.linkedin, note: t.contact.notes.linkedin, external: true },
  ]

  return (
    <section id="contact" className="px-6 py-28 sm:py-36">
      <div className="mx-auto max-w-grid">
        <Reveal><h2 className="display text-[clamp(2.2rem,6vw,3.6rem)]">{t.contact.title}</h2></Reveal>
        <Reveal delay={0.06}><p className="mt-5 max-w-prose text-[19px] leading-[1.6] text-muted">{t.contact.intro}</p></Reveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-3">
          {channels.map((channel, index) => (
            <Reveal key={channel.label} delay={index * 0.05}>
              <a href={channel.href} {...(channel.external ? { target: '_blank', rel: 'noreferrer' } : {})} className="lift block h-full rounded-3xl border border-line bg-surface p-7">
                <p className="text-[13px] text-muted">{channel.label}</p>
                <p className="mt-2 break-words text-[17px] font-medium text-accent">{channel.value}</p>
                <p className="mt-3 text-[15px] text-muted">{channel.note}</p>
              </a>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.18}>
          <a href="https://set.ki/QDe2Cag" target="_blank" rel="noreferrer" className="mt-8 flex items-center justify-between rounded-3xl border border-line bg-surface p-7 transition-all hover:-translate-y-1 hover:bg-sunken">
            <div><p className="text-[13px] text-muted">Сетка</p><p className="mt-1 text-[18px] font-semibold">Сетка</p></div>
            <span className="text-accent">↗</span>
          </a>
        </Reveal>
      </div>
    </section>
  )
}
