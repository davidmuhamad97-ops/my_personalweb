import { profile } from '../../data/profile'
import { Button } from '../common/Button'
import { Container } from '../common/Container'

export function Hero() {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <div className="flex flex-col items-start gap-6">
          <img
            src={profile.avatar}
            alt={`${profile.name} avatar`}
            width={128}
            height={128}
            className="h-32 w-32 rounded-full object-cover"
          />

          <div>
            <h1 className="text-4xl font-bold text-slate-900 sm:text-5xl">
              {profile.name}
            </h1>
            <p className="mt-2 text-xl text-slate-600">{profile.jobTitle}</p>
            <p className="mt-1 text-slate-500">{profile.location}</p>
            <p className="mt-4 max-w-2xl text-slate-600">{profile.bio}</p>
          </div>

          <div className="flex flex-wrap gap-4">
            <Button href="#portfolio">View Portfolio</Button>
            <Button href="#contact" variant="secondary">
              Contact Me
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
