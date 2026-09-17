import { Link, useParams } from 'react-router-dom'
import Button from '../components/Button'
import { Reveal } from '../components/core/Reveal'
import { CLUBS } from '../data/clubs'
import { useLang } from '../i18n/LanguageContext'

export default function ClubDetail() {
  const { clubId } = useParams<{ clubId: string }>()
  const club = CLUBS.find((c) => c.id === clubId)
  const { t } = useLang()

  if (!club) {
    return (
      <section className="section">
        <div className="wrap">
          <div className="club-detail">
            <Link to="/events" className="club-detail-back">
              &larr; {t('page.clubBack')}
            </Link>
            <p>{t('page.clubNotFound')}</p>
          </div>
        </div>
      </section>
    )
  }

  const otherClubs = CLUBS.filter((c) => c.id !== club.id)

  return (
    <section className="section">
      <div className="wrap">
        <Reveal className="club-detail">
          <Link to="/events" className="club-detail-back">
            &larr; {t('page.clubBack')}
          </Link>
          <div className="club-detail-header">
            <img src={club.logo} alt="" className="club-detail-logo" />
            <div>
              <h1 className="club-detail-title">{club.title}</h1>
              <p className="club-detail-subtitle">{club.subtitle}</p>
            </div>
          </div>
          <p className="club-detail-desc">{club.description}</p>
          <div className="club-detail-features">
            {club.features.map((feature) => (
              <span key={feature} className="club-detail-feature">
                {feature}
              </span>
            ))}
          </div>
          <Button>{t('page.clubJoin')}</Button>
        </Reveal>

        <div className="club-detail-others">
          <h3 className="events-title">{t('clubDetail.otherClubs')}</h3>
          <div className="club-detail-others-row">
            {otherClubs.map((other) => (
              <Link key={other.id} to={`/events/${other.id}`} className="club-detail-other-card">
                <img src={other.logo} alt="" />
                <span>{other.title}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
