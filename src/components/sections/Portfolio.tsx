import { projects } from '../../data/projects'
import { Container } from '../common/Container'
import { SectionTitle } from '../common/SectionTitle'

export function Portfolio() {
  return (
    <section id="portfolio" className="py-16">
      <Container>
        <SectionTitle title="Portfolio" />

        {projects.length === 0 ? (
          <p className="text-slate-600">Portfolio projects coming soon.</p>
        ) : (
          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <article
                key={project.id}
                className="rounded-lg border border-slate-200 p-6"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="mb-4 h-48 w-full rounded-md object-cover"
                />
                <h3 className="mb-2 text-lg font-semibold text-slate-900">
                  {project.title}
                </h3>
                <p className="text-slate-600">{project.description}</p>

                <dl className="mt-4 space-y-2 text-sm">
                  <div>
                    <dt className="font-medium text-slate-900">Situation</dt>
                    <dd className="text-slate-600">{project.situation}</dd>
                  </div>
                  <div>
                    <dt className="font-medium text-slate-900">Task</dt>
                    <dd className="text-slate-600">{project.task}</dd>
                  </div>
                  <div>
                    <dt className="font-medium text-slate-900">Action</dt>
                    <dd className="text-slate-600">{project.action}</dd>
                  </div>
                  <div>
                    <dt className="font-medium text-slate-900">Result</dt>
                    <dd className="text-slate-600">{project.result}</dd>
                  </div>
                </dl>

                <ul className="mt-4 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <li
                      key={tech}
                      className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-700"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>

                <div className="mt-4 flex gap-4">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-slate-900 underline underline-offset-4"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.repositoryUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-slate-900 underline underline-offset-4"
                  >
                    Repository
                  </a>
                </div>
              </article>
            ))}
          </div>
        )}
      </Container>
    </section>
  )
}
