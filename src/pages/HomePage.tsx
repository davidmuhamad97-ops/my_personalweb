import { About } from '../components/sections/About'
import { Contact } from '../components/sections/Contact'
import { Experience } from '../components/sections/Experience'
import { Hero } from '../components/sections/Hero'
import { Portfolio } from '../components/sections/Portfolio'
import { Skills } from '../components/sections/Skills'
import { Testimonials } from '../components/sections/Testimonials'

export function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Portfolio />
      <Experience />
      <Testimonials />
      <Contact />
    </>
  )
}
