import { Link } from 'react-router-dom'
import { Landmark, Users, CalendarDays, Mail } from 'lucide-react'
import Hero from '../components/Hero'
import Stats from '../components/Stats'
import Cta from '../components/Cta'
import { Reveal } from '../components/core/Reveal'
import { useLang } from '../i18n/LanguageContext'

const TEASERS = [
  { to: '/about', titleKey: 'home.teaserAboutTitle' as const, descKey: 'home.teaserAboutDesc' as const, Icon: Landmark },
  { to: '/leaders', titleKey: 'home.teaserLeadersTitle' as const, descKey: 'home.teaserLeadersDesc' as const, Icon: Users },
  { to: '/events', titleKey: 'home.teaserEventsTitle' as const, descKey: 'home.teaserEventsDesc' as const, Icon: CalendarDays },
  { to: '/contact', titleKey: 'home.teaserContactTitle' as const, descKey: 'home.teaserContactDesc' as const, Icon: Mail },
]

export default function Home() {
  const { t } = useLang()

  return (
    <>
      <Hero />

      <section className="section">
        <div className="wrap">
          <Reveal className="why-strip">
            <div className="eyebrow">{t('home.whyEyebrow')}</div>
            <h2 className="section-title">{t('home.whyTitle')}</h2>
            <p>{t('home.whyBody')}</p>
          </Reveal>
        </div>
      </section>

      <section className="section section-alt">
        <div className="wrap">
          <div className="home-teasers">
            {TEASERS.map((teaser, i) => (
              <Reveal key={teaser.to} delayMs={i * 90}>
                <Link to={teaser.to} className="teaser-card">
                  <span className="teaser-card-icon">
                    <teaser.Icon size={20} />
                  </span>
                  <h3>{t(teaser.titleKey)}</h3>
                  <p>{t(teaser.descKey)}</p>
                  <span className="teaser-card-arrow">&rarr;</span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Stats />
      <Cta />
    </>
  )
}
