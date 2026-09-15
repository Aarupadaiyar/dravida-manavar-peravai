import { useLang } from '../i18n/LanguageContext'
import type { TranslationKey } from '../i18n/translations'
import { Reveal } from './core/Reveal'
import logo from '../assets/logo.jpg'
import marxPhoto from '../assets/thinkers/karl-marx.jpg'
import periyarPhoto from '../assets/thinkers/periyar.jpg'
import ambedkarPhoto from '../assets/thinkers/ambedkar.jpg'
import annaPhoto from '../assets/leaders/anna.jpg'
import kalaignarPhoto from '../assets/leaders/kalaignar.jpg'
import stalinPhoto from '../assets/leaders/stalin.jpg'

interface Leader {
  id: string
  photo: string
  nameKey: TranslationKey
  roleKey: TranslationKey
  bioKey: TranslationKey
}

const LEADERS: Leader[] = [
  { id: 'marx', photo: marxPhoto, nameKey: 'leaders.marx.name', roleKey: 'leaders.marx.role', bioKey: 'leaders.marx.bio' },
  { id: 'periyar', photo: periyarPhoto, nameKey: 'leaders.periyar.name', roleKey: 'leaders.periyar.role', bioKey: 'leaders.periyar.bio' },
  { id: 'ambedkar', photo: ambedkarPhoto, nameKey: 'leaders.ambedkar.name', roleKey: 'leaders.ambedkar.role', bioKey: 'leaders.ambedkar.bio' },
  { id: 'bhagat-singh', photo: logo, nameKey: 'leaders.bhagatSingh.name', roleKey: 'leaders.bhagatSingh.role', bioKey: 'leaders.bhagatSingh.bio' },
  { id: 'anna', photo: annaPhoto, nameKey: 'leaders.anna.name', roleKey: 'leaders.anna.role', bioKey: 'leaders.anna.bio' },
  { id: 'kalaignar', photo: kalaignarPhoto, nameKey: 'leaders.kalaignar.name', roleKey: 'leaders.kalaignar.role', bioKey: 'leaders.kalaignar.bio' },
  { id: 'stalin', photo: stalinPhoto, nameKey: 'leaders.stalin.name', roleKey: 'leaders.stalin.role', bioKey: 'leaders.stalin.bio' },
  { id: 'subavee', photo: logo, nameKey: 'leaders.subavee.name', roleKey: 'leaders.subavee.role', bioKey: 'leaders.subavee.bio' },
]

export default function Leaders() {
  const { t } = useLang()

  return (
    <div className="leaders-full-list">
      {LEADERS.map((leader, i) => (
        <Reveal key={leader.id} delayMs={Math.min(i, 5) * 80}>
          <article className="leader-full-card">
            <img src={leader.photo} alt={t(leader.nameKey)} className="leader-full-photo" />
            <div className="leader-full-body">
              <h3 className="leader-full-name">{t(leader.nameKey)}</h3>
              <p className="leader-full-role">{t(leader.roleKey)}</p>
              <p className="leader-full-bio">{t(leader.bioKey)}</p>
            </div>
          </article>
        </Reveal>
      ))}
    </div>
  )
}
