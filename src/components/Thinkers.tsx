import karlMarxPhoto from '../assets/thinkers/karl-marx.jpg'
import periyarPhoto from '../assets/thinkers/periyar.jpg'
import ambedkarPhoto from '../assets/thinkers/ambedkar.jpg'

interface Thinker {
  id: string
  photo: string
  name: string
  role: string
  bio: string
  cardClass: string
}

const THINKERS: Thinker[] = [
  {
    id: 'marx',
    photo: karlMarxPhoto,
    name: 'Karl Marx',
    role: 'Philosopher & Economist',
    bio: 'His critique of capitalism gave the world a language for economic equality.',
    cardClass: 'thinker-marx',
  },
  {
    id: 'periyar',
    photo: periyarPhoto,
    name: 'Periyar E. V. Ramasamy',
    role: 'Founder, Self-Respect Movement',
    bio: 'Taught Tamils to reject caste and blind belief, and question before believing.',
    cardClass: 'thinker-periyar',
  },
  {
    id: 'ambedkar',
    photo: ambedkarPhoto,
    name: 'Dr. B. R. Ambedkar',
    role: 'Architect, Indian Constitution',
    bio: "Architect of India's Constitution and a lifelong crusader against untouchability.",
    cardClass: 'thinker-ambedkar',
  },
]

export default function Thinkers() {
  return (
    <section className="section" id="thinkers">
      <div className="wrap">
        <div className="section-head">
          <div className="eyebrow">The Foundations We Stand On</div>
          <h2 className="section-title">
            Thinkers Who Shaped <span className="accent">Our Ideology</span>
          </h2>
        </div>
        <div className="thinkers-grid">
          {THINKERS.map((t) => (
            <div key={t.id} className={`thinker-card ${t.cardClass}`}>
              <div className="thinker-photo-wrap">
                <img src={t.photo} alt={t.name} className="thinker-avatar" />
              </div>
              <div className="thinker-text">
                <h3 className="thinker-name">{t.name}</h3>
                <p className="thinker-role">{t.role}</p>
                <p className="thinker-bio">{t.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
