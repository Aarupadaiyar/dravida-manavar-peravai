import { Link, useParams } from 'react-router-dom'
import { Reveal } from '../components/core/Reveal'
import { FORUMS } from '../data/forums'
import { useLang } from '../i18n/LanguageContext'
import { InstagramIcon } from '../components/SocialIcons'

export default function ForumDetail() {
  const { forumId } = useParams<{ forumId: string }>()
  const forum = FORUMS.find((f) => f.id === forumId)
  const { t } = useLang()

  if (!forum) {
    return (
      <section className="section">
        <div className="wrap">
          <div className="forum-detail">
            <Link to="/forums" className="forum-detail-back">
              &larr; {t('page.forumBack')}
            </Link>
            <p>{t('page.forumNotFound')}</p>
          </div>
        </div>
      </section>
    )
  }

  const otherForums = FORUMS.filter((f) => f.id !== forum.id)

  return (
    <section className="section">
      <div className="wrap">
        <Reveal className="forum-detail">
          <Link to="/forums" className="forum-detail-back">
            &larr; {t('page.forumBack')}
          </Link>
          <div className="forum-detail-header">
            <img src={forum.logo} alt="" className="forum-detail-logo" />
            <div>
              <h1 className="forum-detail-title">{forum.title}</h1>
              <p className="forum-detail-subtitle">{forum.subtitle}</p>
            </div>
          </div>
          <p className="forum-detail-desc">{forum.description}</p>
          <div className="forum-detail-features">
            {forum.features.map((feature) => (
              <span key={feature} className="forum-detail-feature">
                {feature}
              </span>
            ))}
          </div>
          <div className="forum-detail-actions">
            <Link to={`/join?forum=${encodeURIComponent(forum.title)}`} className="btn-primary">
              {t('page.forumJoin')}
            </Link>
            {forum.instagram && (
              <a
                href={forum.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-icon forum-detail-instagram"
                aria-label="Instagram"
              >
                <InstagramIcon />
              </a>
            )}
          </div>
        </Reveal>

        <div className="forum-detail-others">
          <h3 className="events-title">{t('forumDetail.otherForums')}</h3>
          <div className="forum-detail-others-row">
            {otherForums.map((other) => (
              <Link key={other.id} to={`/forums/${other.id}`} className="forum-detail-other-card">
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
