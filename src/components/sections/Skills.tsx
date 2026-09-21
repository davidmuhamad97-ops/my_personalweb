import { skillGroups } from '../../data/skills'
import { Container } from '../common/Container'
import { SectionTitle } from '../common/SectionTitle'

export function Skills() {
  return (
    <section id="skills" className="py-16">
      <Container>
        <SectionTitle title="Skills" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <div key={group.category} className="rounded-lg border border-slate-200 p-6">
              <h3 className="mb-4 text-lg font-semibold text-slate-900">
                {group.category}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-700"
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
