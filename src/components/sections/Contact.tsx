import { profile } from '../../data/profile'
import { Button } from '../common/Button'
import { Container } from '../common/Container'
import { SectionTitle } from '../common/SectionTitle'
import { SocialLinks } from '../common/SocialLinks'

export function Contact() {
  return (
    <section id="contact" className="py-16">
      <Container>
        <SectionTitle title="Contact" />
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <p className="mb-4 text-slate-600">
              Have a question or want to work together? Reach out below.
            </p>
            <a href={`mailto:${profile.email}`} className="text-slate-900 underline underline-offset-4">
              {profile.email}
            </a>
            <div className="mt-6">
              <SocialLinks />
            </div>
          </div>

          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="mb-1 block text-sm font-medium text-slate-700">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="w-full rounded-md border border-slate-300 px-3 py-2"
              />
            </div>
            <div>
              <label htmlFor="email" className="mb-1 block text-sm font-medium text-slate-700">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full rounded-md border border-slate-300 px-3 py-2"
              />
            </div>
            <div>
              <label htmlFor="message" className="mb-1 block text-sm font-medium text-slate-700">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className="w-full rounded-md border border-slate-300 px-3 py-2"
              />
            </div>
            <Button type="submit">Send Message</Button>
          </form>
        </div>
      </Container>
    </section>
  )
}
