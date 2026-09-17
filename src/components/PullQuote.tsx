import { Quote } from 'lucide-react'
import { useLang } from '../i18n/LanguageContext'
import { Reveal } from './core/Reveal'
import type { TranslationKey } from '../i18n/translations'

interface PullQuoteProps {
  quoteKey: TranslationKey
  attributionKey: TranslationKey
}

export default function PullQuote({ quoteKey, attributionKey }: PullQuoteProps) {
  const { t } = useLang()

  return (
    <section className="section pull-quote-section">
      <div className="wrap">
        <Reveal className="pull-quote">
          <Quote size={30} className="pull-quote-mark" />
          <p className="pull-quote-text">{t(quoteKey)}</p>
          <span className="pull-quote-attribution">{t(attributionKey)}</span>
        </Reveal>
      </div>
    </section>
  )
}
