import { useEffect, useState } from 'react'

/**
 * Tracks which section is currently in view and returns its id.
 * Used to highlight the active navigation link.
 */
export function useScrollSpy(sectionIds: readonly string[]) {
  const [activeId, setActiveId] = useState<string>('')

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null)

    if (sections.length === 0) {
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        }
      },
      {
        // Trigger when a section crosses the middle band of the viewport.
        rootMargin: '-45% 0px -50% 0px',
        threshold: 0,
      },
    )

    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [sectionIds])

  return activeId
}
