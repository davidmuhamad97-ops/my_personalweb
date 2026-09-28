import { skillGroups } from '../../data/skills'
import { Container } from '../common/Container'
import { SectionTitle } from '../common/SectionTitle'

const CARD_GRADIENTS = [
  'from-indigo-500 to-violet-500',
  'from-sky-500 to-cyan-500',
  'from-teal-500 to-emerald-500',
] as const

// Background berbeda saat card di-hover.
const CARD_HOVER_GRADIENTS = [
  'hover:from-slate-800 hover:to-slate-900',
  'hover:from-violet-600 hover:to-fuchsia-600',
  'hover:from-emerald-600 hover:to-teal-600',
] as const

export function Skills() {
  return (
    <section id="skills" className="py-16">
      <Container>
        <SectionTitle title="Skills" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, index) => (
            <div
              key={group.category}
              className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br ${CARD_GRADIENTS[index % CARD_GRADIENTS.length]} ${CARD_HOVER_GRADIENTS[index % CARD_HOVER_GRADIENTS.length]} p-6 text-white shadow-lg shadow-slate-900/10 transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-xl hover:shadow-slate-900/20`}
            >
              {/* Decorative oversized icon mark */}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -right-3 -top-5 select-none text-[6rem] font-serif leading-none text-white/10"
              >
                ⚙
              </span>

              {/* Soft light bloom that follows hover */}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -left-16 -top-16 h-40 w-40 rounded-full bg-white/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
              />

              <h3 className="relative mb-4 text-lg font-semibold text-white">
                {group.category}
              </h3>
              <ul className="relative flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-full bg-white/20 px-3 py-1 text-sm text-white transition-colors duration-300 group-hover:bg-white/30"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
