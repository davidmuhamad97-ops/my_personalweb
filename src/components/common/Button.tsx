import type { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  href?: string
  type?: 'button' | 'submit'
  variant?: 'primary' | 'secondary'
  onClick?: () => void
}

export function Button({
  children,
  href,
  type = 'button',
  variant = 'primary',
  onClick,
}: ButtonProps) {
  const baseClasses =
    'inline-flex items-center justify-center rounded-md px-5 py-2.5 text-sm font-medium transition-colors'
  const variantClasses =
    variant === 'primary'
      ? 'bg-slate-900 text-white hover:bg-slate-700'
      : 'border border-slate-300 text-slate-700 hover:bg-slate-100'

  if (href) {
    return (
      <a href={href} className={`${baseClasses} ${variantClasses}`}>
        {children}
      </a>
    )
  }

  return (
    <button type={type} onClick={onClick} className={`${baseClasses} ${variantClasses}`}>
      {children}
    </button>
  )
}
