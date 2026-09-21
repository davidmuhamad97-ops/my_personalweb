import type { ReactNode } from 'react'
import { Footer } from '../components/layout/Footer'
import { Navbar } from '../components/layout/Navbar'

interface MainLayoutProps {
  children: ReactNode
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div id="top" className="min-h-screen bg-white text-slate-800">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
