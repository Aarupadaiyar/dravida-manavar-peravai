import { Users } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import Button from '../components/Button'
import { FORUMS } from '../data/forums'
import { Reveal } from '../components/core/Reveal'
import { useLang } from '../i18n/LanguageContext'

export default function Forums() {
  const { t } = useLang()
  const navigate = useNavigate()

  return (
    <section className="section">
      <div className="wrap">
        <Reveal className="page-header">
          <span className="page-header-icon">
            <Users size={22} />
          </span>
          <div className="eyebrow">{t('forums.eyebrow')}</div>
          <h1 className="section-title">{t('forums.title')}</h1>
          <p className="page-header-subtitle">{t('page.forumsSubtitle')}</p>
          <div className="events-stat-badge">
            <strong>{FORUMS.length}</strong> {t('forums.activeForumsLabel')}
          </div>
        </Reveal>
        <div className="forums-card-grid">
          {FORUMS.map((forum, i) => (
            <Reveal key={forum.id} delayMs={Math.min(i, 6) * 60}>
              <div className="forum-card" onClick={() => navigate(`/forums/${forum.id}`)}>
                <img src={forum.logo} alt={forum.title} className="forum-card-logo" />
                <h3 className="forum-card-title">{forum.title}</h3>
                <p className="forum-card-desc">{forum.description}</p>
                <Button
                  className="forum-card-join"
                  onClick={(e) => {
                    e.stopPropagation()
                    navigate(`/join?forum=${encodeURIComponent(forum.title)}`)
                  }}
                >
                  {t('page.forumJoinUs')}
                </Button>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
