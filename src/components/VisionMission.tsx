import { Compass, Target } from 'lucide-react'
import { useLang } from '../i18n/LanguageContext'
import { Reveal } from './core/Reveal'

export default function VisionMission() {
  const { t } = useLang()

  return (
    <section className="section vm-section section-alt" id="vision-mission">
      <div className="wrap">
        <div className="eyebrow vm-section-eyebrow">{t('visionMission.eyebrow')}</div>
        <div className="vm-grid">
          <Reveal className="vm-card">
            <span className="vm-card-icon">
              <Compass size={22} />
            </span>
            <h3>{t('visionMission.visionTitle')}</h3>
            {t('visionMission.visionBody')
              .split('\n\n')
              .map((para, i) => (
                <p key={i}>{para}</p>
              ))}
          </Reveal>
          <Reveal className="vm-card" delayMs={100}>
            <span className="vm-card-icon">
              <Target size={22} />
            </span>
            <h3>{t('visionMission.missionTitle')}</h3>
            {t('visionMission.missionBody')
              .split('\n\n')
              .map((para, i) => (
                <p key={i}>{para}</p>
              ))}
          </Reveal>
        </div>
      </div>
    </section>
  )
}
