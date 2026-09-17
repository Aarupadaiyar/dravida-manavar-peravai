import { CalendarDays } from 'lucide-react'
import { Reveal } from '../components/core/Reveal'
import { useLang } from '../i18n/LanguageContext'

export default function Events() {
  const { t } = useLang()

  return (
    <section className="section">
      <div className="wrap">
        <Reveal className="page-header">
          <span className="page-header-icon">
            <CalendarDays size={22} />
          </span>
          <div className="eyebrow">{t('events.eyebrow')}</div>
          <h1 className="section-title">{t('events.title')}</h1>
          <p className="page-header-subtitle">{t('page.eventsSubtitle')}</p>
        </Reveal>
        <Reveal className="events-block" delayMs={80}>
          <div className="events-empty">{t('events.empty')}</div>
        </Reveal>
      </div>
    </section>
  )
}
