import Button from './Button'
import { useLang } from '../i18n/LanguageContext'

export default function Cta() {
  const { t } = useLang()

  return (
    <section className="cta-section">
      <div className="wrap">
        <div className="cta-inner">
          <div className="eyebrow">{t('cta.eyebrow')}</div>
          <p className="cta-line">{t('cta.headline')}</p>
          <p className="cta-sub">{t('cta.body')}</p>
          <Button>{t('cta.button')}</Button>
        </div>
      </div>
    </section>
  )
}
