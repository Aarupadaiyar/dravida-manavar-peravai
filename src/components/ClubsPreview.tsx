import { Link } from 'react-router-dom'
import { useLang } from '../i18n/LanguageContext'
import { Reveal } from './core/Reveal'
import { CLUBS } from '../data/clubs'

export default function ClubsPreview() {
  const { t } = useLang()

  return (
    <section className="section section-alt">
      <div className="wrap">
        <div className="section-head">
          <div className="eyebrow">{t('home.clubsPreviewEyebrow')}</div>
          <h2 className="section-title">{t('home.clubsPreviewTitle')}</h2>
        </div>
        <div className="clubs-preview-row">
          {CLUBS.map((club, i) => (
            <Reveal key={club.id} delayMs={i * 70}>
              <Link to={`/events/${club.id}`} className="clubs-preview-card">
                <img src={club.logo} alt="" className="clubs-preview-logo" />
                <span>{club.title}</span>
              </Link>
            </Reveal>
          ))}
        </div>
        <div className="home-section-cta">
          <Link to="/events" className="btn-ghost">
            {t('home.clubsPreviewCta')}
          </Link>
        </div>
      </div>
    </section>
  )
}
