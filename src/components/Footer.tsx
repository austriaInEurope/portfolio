import { profile } from '../data/portfolio'
import { useApp } from '../App'

export default function Footer() {
  const { t } = useApp()
  return (
    <footer className="border-t border-line px-6 pb-16 pt-8">
      <div className="mx-auto flex max-w-grid flex-col gap-3 pt-8 text-[13px] text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} {profile.name} · {profile.role}, {profile.location}</p>
        <p>{t.footer}</p>
      </div>
    </footer>
  )
}
