import { Users } from 'lucide-react'
import LeadersList from '../components/Leaders'
import { Reveal } from '../components/core/Reveal'
import { useLang } from '../i18n/LanguageContext'

export default function LeadersPage() {
  const { t } = useLang()

  return (
    <>
      <section className="section page-header-section">
        <div className="wrap">
          <Reveal className="page-header">
            <span className="page-header-icon">
              <Users size={22} />
            </span>
            <div className="eyebrow">{t('leaders.eyebrow')}</div>
            <h1 className="section-title">{t('leaders.title')}</h1>
          </Reveal>
        </div>
      </section>
      <section className="section section-alt">
        <div className="wrap">
          <LeadersList />
        </div>
      </section>
    </>
  )
}
