import { profile } from '../../data/profile'
import { Container } from '../common/Container'
import { SectionTitle } from '../common/SectionTitle'

export function About() {
  return (
    <section id="about" className="py-16">
      <Container>
        <SectionTitle title="About Me" />
        <div className="max-w-3xl space-y-4 text-slate-600">
          <p>{profile.bio}</p>
          <p>
            Experienced in designing, developing, testing, and maintaining
            backend applications with a strong focus on performance,
            scalability, security, and system integration to support business
            operations. I value punctuality, attention to detail, and clear
            communication in every collaboration.
          </p>
        </div>
      </Container>
    </section>
  )
}
