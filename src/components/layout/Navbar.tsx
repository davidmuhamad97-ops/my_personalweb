import { NAV_LINKS, SITE_NAME } from '../../utils/constants'
import { useScrollSpy } from '../../hooks/useScrollSpy'

const SECTION_IDS = NAV_LINKS.map((link) => link.href.slice(1)) as readonly string[]

export function Navbar() {
  const activeId = useScrollSpy(SECTION_IDS)

  return (
    <header className="sticky top-0 z-10 border-b border-slate-200 bg-white/80 backdrop-blur">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3 sm:px-6">
        <a href="#top" className="text-lg font-semibold text-slate-900">
          {SITE_NAME}
        </a>

        <ul className="hidden items-center gap-6 sm:flex">
          {NAV_LINKS.map((link) => {
            const id = link.href.slice(1)
            const isActive = activeId === id

            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  aria-current={isActive ? 'true' : undefined}
                  className="group relative text-sm text-slate-600 transition-colors duration-200 hover:text-slate-900"
                >
                  {link.label}
                  {/* Animated underline */}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 rounded-full bg-slate-900 transition-all duration-300 ease-out ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </a>
              </li>
            )
          })}
        </ul>
      </nav>
    </header>
  )
}
