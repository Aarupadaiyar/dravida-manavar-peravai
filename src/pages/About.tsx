import { Landmark } from 'lucide-react'
import VisionMission from '../components/VisionMission'
import History from '../components/History'
import Impact from '../components/Impact'
import ParallelBody from '../components/ParallelBody'
import { Reveal } from '../components/core/Reveal'
import { useLang } from '../i18n/LanguageContext'

export default function About() {
  const { t } = useLang()

  return (
    <>
      <section className="section page-header-section">
        <div className="wrap">
          <Reveal className="page-header">
            <span className="page-header-icon">
              <Landmark size={22} />
            </span>
            <div className="eyebrow">{t('page.aboutEyebrow')}</div>
            <h1 className="section-title">{t('page.aboutTitle')}</h1>
          </Reveal>
        </div>
      </section>
      <VisionMission />
      <History />
      <Impact />
      <ParallelBody />
    </>
  )
}
