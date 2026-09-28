import { experience } from '../../data/experience'
import { Container } from '../common/Container'
import { SectionTitle } from '../common/SectionTitle'

const CARD_GRADIENTS = [
  'from-indigo-500 to-violet-500',
  'from-sky-500 to-cyan-500',
  'from-teal-500 to-emerald-500',
] as const

export function Experience() {
  return (
    <section id="experience" className="py-16">
      <Container>
        <SectionTitle title="Experience" />
        <div className="space-y-6">
          {experience.map((item, index) => (
            <article
              key={`${item.company}-${item.position}`}
              className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br ${CARD_GRADIENTS[index % CARD_GRADIENTS.length]} p-6 text-white shadow-lg shadow-slate-900/10 transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-xl hover:shadow-slate-900/20`}
            >
              {/* Decorative oversized quote/chevron mark */}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -right-2 -top-6 select-none text-[7rem] font-serif leading-none text-white/10"
              >
                »
              </span>

              {/* Soft light bloom that follows hover */}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -left-16 -top-16 h-40 w-40 rounded-full bg-white/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
              />

              <div className="relative mb-2 flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-lg font-semibold text-white">
                  {item.position}
                </h3>
                <span className="text-sm text-white/70">
                  {item.startDate} — {item.endDate}
                </span>
              </div>
              <p className="relative text-white/80">{item.company}</p>
              <ul className="relative mt-4 list-disc space-y-1 pl-5 text-white/90 marker:text-white/60">
                {item.responsibilities.map((responsibility) => (
                  <li key={responsibility}>{responsibility}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}
