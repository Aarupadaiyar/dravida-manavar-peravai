import { useLang } from '../i18n/LanguageContext'
import { Reveal } from './core/Reveal'
import { openFounderPopup } from './FounderPopup'
import suPaveePhoto from '../assets/people/su-pavee.jpg'
import arulPhoto from '../assets/people/arul.jpg'

export default function LeadershipSpotlight({ alt = false }: { alt?: boolean }) {
  const { t } = useLang()

  return (
    <section className={`section${alt ? ' section-alt' : ''}`}>
      <div className="wrap">
        <div className="section-head">
          <div className="eyebrow">{t('spotlight.eyebrow')}</div>
          <h2 className="section-title">{t('spotlight.title')}</h2>
        </div>
        <div className="spotlight-grid">
          <Reveal>
            <button type="button" className="spotlight-card" onClick={() => openFounderPopup('founder')}>
              <img src={suPaveePhoto} alt={t('founderPopup.founderName')} className="spotlight-photo" />
              <div>
                <h3>{t('founderPopup.founderName')}</h3>
                <p className="spotlight-role">{t('founderPopup.founderRole')}</p>
                <span className="spotlight-cta">{t('spotlight.founderCta')} &rarr;</span>
              </div>
            </button>
          </Reveal>
          <Reveal delayMs={90}>
            <button type="button" className="spotlight-card" onClick={() => openFounderPopup('secretary')}>
              <img src={arulPhoto} alt={t('founderPopup.secretaryName')} className="spotlight-photo" />
              <div>
                <h3>{t('founderPopup.secretaryName')}</h3>
                <p className="spotlight-role">{t('founderPopup.secretaryRole')}</p>
                <span className="spotlight-cta">{t('spotlight.secretaryCta')} &rarr;</span>
              </div>
            </button>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
