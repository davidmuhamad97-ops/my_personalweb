interface AnimatedAvatarProps {
  name: string
  className?: string
}

export function AnimatedAvatar({ name, className = '' }: AnimatedAvatarProps) {
  const initials = name
    .split(' ')
    .map((part) => part.charAt(0))
    .slice(0, 2)
    .join('')
    .toUpperCase()

  return (
    <div className={`relative inline-block ${className}`}>
      {/* Rotating conic-gradient ring */}
      <div className="absolute -inset-1 rounded-full bg-[conic-gradient(from_0deg,#6366f1,#0ea5e9,#14b8a6,#d946ef,#6366f1)] opacity-80 blur-[2px] animate-spin-slow" />

      {/* Outer ring (crisp, non-blurred) */}
      <div className="absolute -inset-1 rounded-full bg-[conic-gradient(from_0deg,#6366f1,#0ea5e9,#14b8a6,#d946ef,#6366f1)] animate-spin-slow" />

      {/* Inner content */}
      <div className="relative flex h-32 w-32 items-center justify-center rounded-full bg-slate-900 text-4xl font-bold text-white ring-4 ring-white">
        {initials}
      </div>

      {/* Soft pulsing glow behind */}
      <div className="absolute inset-0 -z-10 rounded-full bg-indigo-400/40 blur-xl animate-pulse-soft" />
    </div>
  )
}
