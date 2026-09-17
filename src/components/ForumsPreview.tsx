import { Link } from 'react-router-dom'
import { useLang } from '../i18n/LanguageContext'
import { Reveal } from './core/Reveal'
import { FORUMS } from '../data/forums'

export default function ForumsPreview() {
  const { t } = useLang()

  return (
    <section className="section section-alt">
      <div className="wrap">
        <div className="section-head">
          <div className="eyebrow">{t('home.forumsPreviewEyebrow')}</div>
          <h2 className="section-title">{t('home.forumsPreviewTitle')}</h2>
        </div>
        <div className="forums-preview-row">
          {FORUMS.map((forum, i) => (
            <Reveal key={forum.id} delayMs={i * 70}>
              <Link to={`/forums/${forum.id}`} className="forums-preview-card">
                <img src={forum.logo} alt="" className="forums-preview-logo" />
                <span className="forums-preview-title">{forum.title}</span>
              </Link>
            </Reveal>
          ))}
        </div>
        <div className="home-section-cta">
          <Link to="/forums" className="btn-ghost">
            {t('home.forumsPreviewCta')}
          </Link>
        </div>
      </div>
    </section>
  )
}
