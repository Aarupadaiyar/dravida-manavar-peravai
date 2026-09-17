import { CalendarDays } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import CardFlip from '../components/ui/card-flip'
import { CLUBS } from '../data/clubs'
import { Reveal } from '../components/core/Reveal'
import { useLang } from '../i18n/LanguageContext'

export default function Events() {
  const { t } = useLang()
  const navigate = useNavigate()

  return (
    <section className="section">
      <div className="wrap">
        <Reveal className="page-header">
          <span className="page-header-icon">
            <CalendarDays size={22} />
          </span>
          <div className="eyebrow">{t('clubs.eyebrow')}</div>
          <h1 className="section-title">{t('clubs.title')}</h1>
          <p className="page-header-subtitle">{t('page.eventsSubtitle')}</p>
          <div className="events-stat-badge">
            <strong>{CLUBS.length}</strong> {t('events.activeClubsLabel')}
          </div>
        </Reveal>
        <div className="clubs-grid">
          {CLUBS.map((club, i) => (
            <Reveal key={club.id} delayMs={i * 80}>
              <CardFlip
                title={club.title}
                subtitle={club.subtitle}
                description={club.description}
                features={club.features}
                logo={club.logo}
                onClick={() => navigate(`/events/${club.id}`)}
              />
            </Reveal>
          ))}
        </div>
        <Reveal className="events-block">
          <h3 className="events-title">{t('clubs.eventsTitle')}</h3>
          <div className="events-empty">{t('clubs.eventsEmpty')}</div>
        </Reveal>
      </div>
    </section>
  )
}
