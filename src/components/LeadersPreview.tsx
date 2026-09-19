import { Link } from 'react-router-dom'
import { useLang } from '../i18n/LanguageContext'
import { Reveal } from './core/Reveal'
import { LEADERS } from '../data/leaders'

const PREVIEW_IDS = ['periyar', 'ambedkar', 'marx', 'anna', 'kalaignar', 'stalin']

export default function LeadersPreview() {
  const { t } = useLang()
  const preview = PREVIEW_IDS.map((id) => LEADERS.find((l) => l.id === id)!).filter(Boolean)

  return (
    <section className="section">
      <div className="wrap">
        <div className="section-head">
          <div className="eyebrow">{t('home.leadersPreviewEyebrow')}</div>
          <h2 className="section-title">{t('home.leadersPreviewTitle')}</h2>
        </div>
        <div className="leaders-preview-grid">
          {preview.map((leader, i) => (
            <Reveal key={leader.id} delayMs={i * 70} variant="scale">
              <Link to={`/leaders#leader-${leader.id}`} className="leaders-preview-card">
                <img
                  src={leader.photo}
                  alt={t(leader.nameKey)}
                  className="leaders-preview-photo"
                  loading="lazy"
                  decoding="async"
                />
                <span className="leaders-preview-name">{t(leader.nameKey)}</span>
              </Link>
            </Reveal>
          ))}
        </div>
        <div className="home-section-cta">
          <Link to="/leaders" className="btn-ghost">
            {t('home.leadersPreviewCta')}
          </Link>
        </div>
      </div>
    </section>
  )
}
