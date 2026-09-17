import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import bgVideo from '../assets/background.mp4'
import { useLang } from '../i18n/LanguageContext'

const SCROLL_LERP = 0.08

export default function Hero() {
  const heroRef = useRef<HTMLElement | null>(null)
  const [glow, setGlow] = useState(0)
  const targetGlow = useRef(0)
  const rafId = useRef<number | null>(null)
  const { t } = useLang()

  useEffect(() => {
    const hero = heroRef.current
    if (!hero) return

    const onScroll = () => {
      const rect = hero.getBoundingClientRect()
      const vh = window.innerHeight || 800
      const p = (vh - rect.top) / (vh + rect.height)
      targetGlow.current = Math.min(1, Math.max(0, p))
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()

    let curGlow = 0
    const tick = () => {
      curGlow += (targetGlow.current - curGlow) * SCROLL_LERP
      setGlow(curGlow)
      rafId.current = requestAnimationFrame(tick)
    }
    rafId.current = requestAnimationFrame(tick)

    return () => {
      window.removeEventListener('scroll', onScroll)
      if (rafId.current !== null) cancelAnimationFrame(rafId.current)
    }
  }, [])

  const overlayStyle = { opacity: 0.44 + glow * 0.18 }

  return (
    <section className="hero hero-sun" id="top" ref={heroRef}>
      <video
        className="hero-video"
        src={bgVideo}
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="hero-video-overlay" style={overlayStyle} />
      <div className="hero-vignette" />
      <div className="hero-grain" />
      <div className="hero-inner">
        <h1 className="hero-banner">
          <span className="hero-banner-row">திராவிட மாணவர் பேரவை</span>
        </h1>
        <p className="hero-role-line">
          <span className="hero-role-word">{t('hero.tagline')}</span>
        </p>
        <p className="hero-tag">{t('hero.tag')}</p>
        <div className="hero-cta-row">
          <Link to="/join" className="btn-primary btn-sun">
            {t('hero.ctaJoin')}
          </Link>
          <Link to="/leaders" className="btn-sun-outline">
            {t('hero.ctaLeaders')}
          </Link>
        </div>
      </div>
      <div className="scroll-cue">
        <span>{t('hero.scroll')}</span>
        <span className="scroll-line">
          <span className="scroll-line-dot" />
        </span>
      </div>
    </section>
  )
}
