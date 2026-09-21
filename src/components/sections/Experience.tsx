import { experience } from '../../data/experience'
import { Container } from '../common/Container'
import { SectionTitle } from '../common/SectionTitle'

export function Experience() {
  return (
    <section id="experience" className="py-16">
      <Container>
        <SectionTitle title="Experience" />
        <div className="space-y-6">
          {experience.map((item) => (
            <article
              key={`${item.company}-${item.position}`}
              className="rounded-lg border border-slate-200 p-6"
            >
              <div className="mb-2 flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-lg font-semibold text-slate-900">
                  {item.position}
                </h3>
                <span className="text-sm text-slate-500">
                  {item.startDate} — {item.endDate}
                </span>
              </div>
              <p className="text-slate-600">{item.company}</p>
              <ul className="mt-4 list-disc space-y-1 pl-5 text-slate-600">
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
