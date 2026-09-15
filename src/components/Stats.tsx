import { useEffect, useRef, useState } from 'react'
import { Users, Megaphone, CalendarDays } from 'lucide-react'
import { AnimatedNumber } from './core/animated-number'
import { useLang } from '../i18n/LanguageContext'
import type { TranslationKey } from '../i18n/translations'

interface Stat {
  id: string
  target: number
  suffix: string
  labelKey: TranslationKey
  Icon: typeof Users
}

const STATS: Stat[] = [
  { id: 'lives', target: 8, suffix: ' Crore+', labelKey: 'stats.livesLabel', Icon: Users },
  { id: 'protests', target: 600, suffix: '+', labelKey: 'stats.protestsLabel', Icon: Megaphone },
  { id: 'gatherings', target: 1500, suffix: '+', labelKey: 'stats.gatheringsLabel', Icon: CalendarDays },
]

export default function Stats() {
  const sectionRef = useRef<HTMLElement | null>(null)
  const [inView, setInView] = useState(false)
  const { t } = useLang()

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
              <span className="stat-icon">
                <stat.Icon size={20} />
              </span>
              <div className="stat-num">
                <AnimatedNumber value={inView ? stat.target : 0} />
                {stat.suffix}
              </div>
              <div className="stat-label">{t(stat.labelKey)}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
