import Reveal from './Reveal'
import { featuredProject, movieProject, projects } from '../data/portfolio'
import type { Project, Screen } from '../data/portfolio'
import { Phone, ScannerScreen } from './PhoneMockup'
import { useApp } from '../App'
import { projectTranslations } from '../data/projectTranslations'

/** Screens live in public/screens, so they resolve under any deploy base path. */
const screenUrl = (file: string) => `${import.meta.env.BASE_URL}screens/${file}`

function ScreenFigure({ screen, copy, className = '' }: { screen: Screen; copy: { caption?: string; alt?: string }; className?: string }) {
  return (
    <figure className={`m-0 ${className}`}>
      <Phone>
        <img src={screenUrl(screen.file)} alt={copy.alt ?? screen.alt} loading="lazy" />
      </Phone>
      <figcaption className="mt-4 text-[13px] leading-[1.45] text-muted">{copy.caption ?? screen.caption}</figcaption>
    </figure>
  )
}

function Tags({ tags }: { tags: string[] }) {
  return (
    <div className="mt-8 flex flex-wrap gap-2">
      {tags.map((tag) => (
        <span key={tag} className="pill bg-sunken text-muted">
          {tag}
        </span>
      ))}
    </div>
  )
}

function ProjectHeader({ project, copy }: { project: Project; copy: { meta: string; summary: string; highlights: string[] } }) {
  return (
    <div className="grid gap-10 lg:grid-cols-[1fr_320px]">
      <div>
        <p className="text-[13px] text-muted">{copy.meta}</p>
        <h3 className="display mt-2 text-[clamp(1.8rem,4vw,2.6rem)]">{project.name}</h3>
        <p className="mt-4 max-w-prose text-[18px] leading-[1.6] text-muted">{copy.summary}</p>
      </div>
      <ul className="space-y-3 self-end text-[15px] text-muted">
        {copy.highlights.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

/** Many screens: a scroll-snap rail. Few screens: a plain grid. */
function ProjectPanel({ project, language, scrollLabel }: { project: Project; language: 'en' | 'ru'; scrollLabel: string }) {
  const copy = projectTranslations[language][project.id]
  const screens = project.screens ?? []
  const useRail = screens.length > 4

  return (
    <Reveal>
      <div className="mx-auto mt-6 max-w-grid rounded-[32px] border border-line bg-surface p-8 sm:p-12">
        <ProjectHeader project={project} copy={copy} />

        {useRail ? (
          <div className="mt-10 rounded-[24px] bg-sunken p-6 sm:p-8">
            <div className="rail" tabIndex={0} role="group" aria-label={`${project.name} app screens`}>
              {screens.map((screen) => (
                <ScreenFigure key={screen.file} screen={screen} copy={{ caption: copy.captions[screen.file], alt: copy.alts[screen.file] }} />
              ))}
            </div>
            <p className="mt-1 text-[13px] text-muted">{scrollLabel}</p>
          </div>
        ) : (
          <div className="mt-10 grid gap-8 rounded-[24px] bg-sunken p-6 sm:grid-cols-3 sm:p-10">
            {screens.map((screen) => (
              <ScreenFigure key={screen.file} screen={screen} copy={{ caption: copy.captions[screen.file], alt: copy.alts[screen.file] }} />
            ))}
          </div>
        )}

        <Tags tags={project.tags} />
      </div>
    </Reveal>
  )
}

export default function Projects() {
  const { t, language } = useApp()
  return (
    <section id="work" className="px-6 pt-24 sm:pt-28">
      <div className="mx-auto max-w-grid">
        <Reveal>
          <h2 className="display text-[clamp(2rem,5vw,3rem)]">{t.projects.title}</h2>
        </Reveal>
        <Reveal delay={0.06}>
          <p className="mt-4 max-w-prose text-[19px] text-muted">
            {t.projects.intro}
          </p>
        </Reveal>
      </div>

      {/* Featured — no screenshots, the project is under NDA */}
      <Reveal>
        <div
          className="mx-auto mt-12 max-w-grid overflow-hidden rounded-[32px]"
          style={{ background: '#07070a' }}
        >
          <div className="grid items-center gap-10 p-8 sm:p-12 lg:grid-cols-[1.05fr_.95fr] lg:p-16">
            <div className="text-white">
              <p className="text-[13px] font-medium" style={{ color: '#5ac8fa' }}>
                {projectTranslations[language].scanner.meta}
              </p>
              <h3 className="display mt-3 text-[clamp(2rem,4.6vw,3.2rem)]">{featuredProject.name}</h3>
              <p className="mt-5 max-w-[46ch] text-[18px] leading-[1.6]" style={{ color: '#a1a1a8' }}>
                {projectTranslations[language].scanner.summary}
              </p>
              <ul className="mt-8 space-y-3 text-[15px]" style={{ color: '#d6d6db' }}>
                {projectTranslations[language].scanner.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap gap-2">
                {featuredProject.tags.map((tag) => (
                  <span
                    key={tag}
                    className="pill"
                    style={{ background: 'rgba(255,255,255,.08)', color: '#d6d6db' }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <p className="mt-8 text-[13px]" style={{ color: '#8e8e93' }}>
                {t.projects.featuredNote}
              </p>
            </div>

            <div className="flex justify-center">
              <Phone width={270}>
                <ScannerScreen />
              </Phone>
            </div>
          </div>
        </div>
      </Reveal>

      {projects.map((project) => (
        <ProjectPanel key={project.id} project={project} language={language} scrollLabel={t.projects.scroll} />
      ))}

      <ProjectPanel project={movieProject} language={language} scrollLabel={t.projects.scroll} />
    </section>
  )
}
