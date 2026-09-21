interface BackgroundPatternProps {
  className?: string
}

export function BackgroundPattern({ className = '' }: BackgroundPatternProps) {
  return (
    <svg
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
      aria-hidden="true"
    >
      <defs>
        <pattern
          id="grid"
          width="40"
          height="40"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M 40 0 L 0 0 0 40"
            fill="none"
            stroke="currentColor"
            strokeOpacity="0.06"
            strokeWidth="1"
          />
        </pattern>
        <radialGradient id="fade" cx="50%" cy="0%" r="80%">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.08" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
        </radialGradient>
      </defs>

      <rect width="100%" height="100%" fill="url(#grid)" />
      <rect width="100%" height="100%" fill="url(#fade)" />
    </svg>
  )
}
