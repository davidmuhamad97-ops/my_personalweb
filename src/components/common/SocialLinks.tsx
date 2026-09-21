import { profile } from '../../data/profile'

export function SocialLinks() {
  return (
    <ul className="flex flex-wrap gap-4">
      {profile.socialLinks.map((link) => (
        <li key={link.label}>
          <a
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-600 underline-offset-4 hover:underline"
          >
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  )
}
