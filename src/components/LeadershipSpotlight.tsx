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
          <Reveal className="spotlight-reveal" variant="left">
            <button type="button" className="spotlight-card" onClick={() => openFounderPopup('founder')}>
              <img
                src={suPaveePhoto}
                alt={t('founderPopup.founderName')}
                className="spotlight-photo"
                loading="lazy"
                decoding="async"
              />
              <h3>{t('founderPopup.founderName')}</h3>
              <p className="spotlight-role">{t('founderPopup.founderRole')}</p>
              <p className="spotlight-tagline">&ldquo;{t('founderPopup.founderTitle')}&rdquo;</p>
              <span className="spotlight-cta">{t('spotlight.founderCta')} &rarr;</span>
            </button>
          </Reveal>
          <Reveal className="spotlight-reveal" delayMs={90} variant="right">
            <button type="button" className="spotlight-card" onClick={() => openFounderPopup('secretary')}>
              <img
                src={arulPhoto}
                alt={t('founderPopup.secretaryName')}
                className="spotlight-photo"
                loading="lazy"
                decoding="async"
              />
              <h3>{t('founderPopup.secretaryName')}</h3>
              <p className="spotlight-role">{t('founderPopup.secretaryRole')}</p>
              <p className="spotlight-tagline">&ldquo;{t('founderPopup.secretaryTitle')}&rdquo;</p>
              <span className="spotlight-cta">{t('spotlight.secretaryCta')} &rarr;</span>
            </button>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
