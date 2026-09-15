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
      </div>
    </section>
  )
}
