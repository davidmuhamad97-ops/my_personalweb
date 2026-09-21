import type { ReactNode } from 'react'
import { Footer } from '../components/layout/Footer'
import { Navbar } from '../components/layout/Navbar'
import { BackgroundPattern } from '../components/common/BackgroundPattern'

interface MainLayoutProps {
  children: ReactNode
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div
      id="top"
      className="relative min-h-screen overflow-x-hidden bg-white text-slate-800"
    >
      <BackgroundPattern className="text-slate-400" />

      <div className="relative">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </div>
    </div>
  )
}
