import { useLang } from '../i18n/LanguageContext'
import { Reveal } from './core/Reveal'
import { LEADERS } from '../data/leaders'

export default function Leaders() {
  const { t } = useLang()

  return (
    <>
      <div className="leaders-jump-row">
        {LEADERS.map((leader) => (
          <a key={leader.id} href={`#leader-${leader.id}`} className="leaders-jump-item">
            <img src={leader.photo} alt="" className="leaders-jump-photo" />
            <span>{t(leader.nameKey)}</span>
          </a>
        ))}
      </div>
      <div className="leaders-full-list">
        {LEADERS.map((leader, i) => (
          <Reveal key={leader.id} delayMs={Math.min(i, 5) * 80}>
            <article className="leader-full-card" id={`leader-${leader.id}`}>
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
    </>
  )
}
