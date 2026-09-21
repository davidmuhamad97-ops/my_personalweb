import { testimonials } from '../../data/testimonials'
import { Container } from '../common/Container'
import { SectionTitle } from '../common/SectionTitle'

export function Testimonials() {
  return (
    <section id="testimonials" className="py-16">
      <Container>
        <SectionTitle title="Testimonials" />

        {testimonials.length === 0 ? (
          <p className="text-slate-600">Testimonials coming soon.</p>
        ) : (
          <div className="grid gap-6 md:grid-cols-2">
            {testimonials.map((testimonial) => (
              <blockquote
                key={testimonial.author}
                className="rounded-lg border border-slate-200 p-6"
              >
                <p className="text-slate-600">“{testimonial.quote}”</p>
                <footer className="mt-4">
                  <p className="font-medium text-slate-900">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-slate-500">{testimonial.role}</p>
                </footer>
              </blockquote>
            ))}
          </div>
        )}
      </Container>
    </section>
  )
}
