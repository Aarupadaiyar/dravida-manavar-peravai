import logo from '../assets/logo.jpg'
import { useLang } from '../i18n/LanguageContext'
import { Reveal } from './core/Reveal'

export default function ManifestoSplit() {
  const { t } = useLang()

  return (
    <section className="manifesto-split">
      <div className="manifesto-split-media">
        <img src={logo} alt="Dravida Manavar Peravai" loading="lazy" decoding="async" />
      </div>
      <div className="manifesto-split-text">
        <Reveal>
          <p>{t('home.manifestoQuote')}</p>
        </Reveal>
      </div>
    </section>
  )
}
