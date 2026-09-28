import { testimonials } from '../../data/testimonials'
import { Container } from '../common/Container'
import { SectionTitle } from '../common/SectionTitle'

const CARD_GRADIENTS = [
  'from-indigo-500 to-violet-500',
  'from-sky-500 to-cyan-500',
  'from-teal-500 to-emerald-500',
  'from-fuchsia-500 to-pink-500',
] as const

export function Testimonials() {
  return (
    <section id="testimonials" className="py-16">
      <Container>
        <SectionTitle title="Testimonials" />

        {testimonials.length === 0 ? (
          <p className="text-slate-600">Testimonials coming soon.</p>
        ) : (
          <div className="grid gap-6 md:grid-cols-2">
            {testimonials.map((testimonial, index) => (
              <blockquote
                key={testimonial.author}
                className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br ${CARD_GRADIENTS[index % CARD_GRADIENTS.length]} p-6 text-white shadow-lg shadow-slate-900/10 transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-xl hover:shadow-slate-900/20`}
              >
                {/* Decorative oversized quote mark */}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-2 -top-4 select-none text-[7rem] font-serif leading-none text-white/15"
                >
                  “
                </span>

                {/* Soft light bloom that follows hover */}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -left-16 -top-16 h-40 w-40 rounded-full bg-white/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
                />

                <p className="relative text-white/90">“{testimonial.quote}”</p>

                <footer className="relative mt-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 font-semibold">
                    {testimonial.author.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-white">
                      {testimonial.author}
                    </p>
                    <p className="text-sm text-white/70">{testimonial.role}</p>
                  </div>
                </footer>
              </blockquote>
            ))}
          </div>
        )}
      </Container>
    </section>
  )
}
