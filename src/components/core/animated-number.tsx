import { useEffect, useRef, useState } from 'react'

interface AnimatedNumberProps {
  value: number
  className?: string
  durationMs?: number
}

function easeOutCubic(t: number) {
  return 1 - Math.pow(1 - t, 3)
}

export function AnimatedNumber({ value, className, durationMs = 1600 }: AnimatedNumberProps) {
  const [display, setDisplay] = useState(0)
  const rafId = useRef<number | null>(null)
  const fromRef = useRef(0)

  useEffect(() => {
    const from = fromRef.current
    const to = value
    if (from === to) return
    const start = performance.now()

    const tick = (now: number) => {
      const elapsed = now - start
      const t = Math.min(1, elapsed / durationMs)
      const eased = easeOutCubic(t)
      setDisplay(from + (to - from) * eased)
      if (t < 1) {
        rafId.current = requestAnimationFrame(tick)
      } else {
        fromRef.current = to
      }
    }
    rafId.current = requestAnimationFrame(tick)

    return () => {
      if (rafId.current !== null) cancelAnimationFrame(rafId.current)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value, durationMs])

  return <span className={className}>{Math.round(display).toLocaleString()}</span>
}
