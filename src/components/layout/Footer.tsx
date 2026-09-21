import { SocialLinks } from '../common/SocialLinks'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-slate-200 py-8">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 px-4 sm:px-6">
        <SocialLinks />
        <p className="text-sm text-slate-500">© {year} All rights reserved.</p>
      </div>
    </footer>
  )
}
