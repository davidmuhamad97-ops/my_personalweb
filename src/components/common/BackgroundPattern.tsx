interface BackgroundPatternProps {
  className?: string
}

export function BackgroundPattern({ className = '' }: BackgroundPatternProps) {
  return (
    <svg
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
      viewBox="0 0 1440 900"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <defs>
        {/* Dots pattern */}
        <pattern
          id="dots"
          width="28"
          height="28"
          patternUnits="userSpaceOnUse"
        >
          <circle cx="2" cy="2" r="1.5" fill="currentColor" opacity="0.14" />
        </pattern>

        {/* Gradient mesh blobs */}
        <radialGradient id="blob-indigo" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#6366f1" stopOpacity="0.28" />
          <stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="blob-sky" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.26" />
          <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="blob-teal" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#14b8a6" stopOpacity="0.24" />
          <stop offset="100%" stopColor="#14b8a6" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="blob-fuchsia" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#d946ef" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#d946ef" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Gradient mesh blobs */}
      <circle cx="140" cy="80" r="380" fill="url(#blob-indigo)" />
      <circle cx="1260" cy="170" r="420" fill="url(#blob-sky)" />
      <circle cx="260" cy="840" r="360" fill="url(#blob-teal)" />
      <circle cx="1240" cy="760" r="400" fill="url(#blob-fuchsia)" />

      {/* Dots */}
      <rect width="100%" height="100%" fill="url(#dots)" />
    </svg>
  )
}
