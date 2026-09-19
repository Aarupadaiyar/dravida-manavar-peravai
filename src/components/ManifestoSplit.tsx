import { useEffect, useRef, useState } from 'react'
import logo from '../assets/logo.jpg'
import { useLang } from '../i18n/LanguageContext'

export default function ManifestoSplit() {
  const { t } = useLang()
  const sectionRef = useRef<HTMLElement | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="section manifesto-section" ref={sectionRef}>
      <div className="wrap">
        <div className="manifesto-split">
          <div className={`manifesto-split-media ${visible ? 'is-visible' : ''}`}>
            <img src={logo} alt="Dravida Manavar Peravai" loading="lazy" decoding="async" />
          </div>
          <div className="manifesto-split-text">
            <span className="manifesto-split-quotemark" aria-hidden="true">
              &ldquo;
            </span>
            <p className={visible ? 'is-visible' : ''}>{t('home.manifestoQuote')}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
