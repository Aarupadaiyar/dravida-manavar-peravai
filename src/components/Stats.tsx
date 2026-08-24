import { useEffect, useRef, useState } from 'react'
import { AnimatedNumber } from './core/animated-number'

interface Stat {
  id: string
  target: number
  suffix: string
  label: string
}

const STATS: Stat[] = [
  { id: 'lives', target: 8, suffix: ' Crore+', label: 'Lives Touched' },
  { id: 'protests', target: 600, suffix: '+', label: 'Protests Led' },
  { id: 'gatherings', target: 1500, suffix: '+', label: 'Gatherings Organised' },
]

export default function Stats() {
  const sectionRef = useRef<HTMLElement | null>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="stats-section" ref={sectionRef}>
      <div className="wrap">
        <div className="stats-grid">
          {STATS.map((stat) => (
            <div key={stat.id} className="stat-cell">
              <div className="stat-num">
                <AnimatedNumber value={inView ? stat.target : 0} />
                {stat.suffix}
              </div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
