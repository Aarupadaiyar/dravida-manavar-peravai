import { Users, Languages, Scale } from 'lucide-react'
import { useLang } from '../i18n/LanguageContext'
import { Reveal } from './core/Reveal'

interface ImpactItem {
  num: string
  title: string
  body: string
  Icon: typeof Users
}

const IMPACT: ImpactItem[] = [
  {
    num: '01',
    title: 'Cups & Conversation',
    body: 'Unlike traditional radical political banners, DMP popularised structured discussion circles called "Cups & Conversation," casual yet deeply academic forums that educate students on the philosophies of Thanthai Periyar, B. R. Ambedkar and Arignar Anna.',
    Icon: Users,
  },
  {
    num: '02',
    title: 'Resistance Against Linguistic Imposition',
    body: 'A core highlight of DMP has been its staunch opposition to the continuous efforts of Hindi and Sanskrit imposition in southern educational curriculums, continuing the heritage of the historic 1965 anti-Hindi agitations.',
    Icon: Languages,
  },
  {
    num: '03',
    title: 'Social Justice Over Electoral Ambition',
    body: "Unlike mainstream student wings tied to electoral machinery, DMP's primary emphasis remains ideological literacy, a training ground for public speaking, writing and logical debate rooted in scientific temper and rationalism.",
    Icon: Scale,
  },
]

export default function Impact() {
  const { t } = useLang()

  return (
    <section className="section section-alt impact-section" id="impact">
      <div className="wrap">
        <div className="section-head">
          <div className="eyebrow">{t('impact.eyebrow')}</div>
          <h2 className="section-title">{t('impact.title')}</h2>
        </div>
        <div className="impact-grid">
          {IMPACT.map((item, i) => (
            <Reveal className="impact-card" key={item.num} delayMs={i * 90}>
              <span className="impact-icon">
                <item.Icon size={20} />
              </span>
              <div className="impact-num">{item.num}</div>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
