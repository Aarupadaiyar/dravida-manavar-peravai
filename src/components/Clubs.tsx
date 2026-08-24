import CardFlip from './ui/card-flip'
import spreadGreenLogo from '../assets/clubs/spread-green.png'
import goRedLogo from '../assets/clubs/go-red.png'
import overseasStudentsLogo from '../assets/clubs/overseas-tamil-students.png'
import repubRainbowsLogo from '../assets/clubs/repub-rainbows.png'
import deAnnihilationLogo from '../assets/clubs/de-annihilation.png'

interface Club {
  id: string
  title: string
  subtitle: string
  description: string
  features: string[]
  logo: string
}

const CLUBS: Club[] = [
  {
    id: 'spread-green',
    title: 'Spread Green',
    subtitle: 'Environmental action wing',
    description:
      'Tree plantation drives, campus greening and climate awareness campaigns led by student volunteers across Tamil Nadu.',
    features: ['Tree Plantation', 'Campus Greening', 'Climate Awareness', 'Eco Campaigns'],
    logo: spreadGreenLogo,
  },
  {
    id: 'go-red',
    title: 'Go Red',
    subtitle: 'Health & blood donation wing',
    description:
      'Organising blood donation camps and health awareness drives to keep our communities safe and cared for.',
    features: ['Blood Donation', 'Health Camps', 'Awareness Drives', 'Community Care'],
    logo: goRedLogo,
  },
  {
    id: 'overseas-students',
    title: 'Overseas Students',
    subtitle: 'Support for Tamils abroad',
    description:
      'Connecting and supporting Tamil students studying overseas with mentorship, resources and a home away from home.',
    features: ['Mentorship', 'Peer Network', 'Resource Support', 'Global Tamils'],
    logo: overseasStudentsLogo,
  },
  {
    id: 'repub-rainbows',
    title: 'REPUB Rainbows',
    subtitle: 'Inclusivity & pride wing',
    description:
      'Building a safe, inclusive space for LGBTQ+ students within the movement, rooted in the same self-respect ideology.',
    features: ['Safe Spaces', 'Peer Support', 'Awareness', 'Inclusion'],
    logo: repubRainbowsLogo,
  },
  {
    id: 'de-annihilation',
    title: 'De-Annihilation Club',
    subtitle: 'Anti-caste awareness wing',
    description:
      "Named for Ambedkar's call to annihilate caste — organising discussions and campaigns against caste discrimination.",
    features: ['Anti-Caste Study Circles', 'Campus Campaigns', 'Awareness Drives', 'Ambedkarite Thought'],
    logo: deAnnihilationLogo,
  },
]

export default function Clubs() {
  return (
    <section className="section" id="clubs">
      <div className="wrap">
        <div className="section-head">
          <div className="eyebrow">Where Members Take Action</div>
          <h2 className="section-title">
            Our <span className="accent">Clubs</span>
          </h2>
        </div>
        <div className="clubs-grid">
          {CLUBS.map((club) => (
            <CardFlip
              key={club.id}
              title={club.title}
              subtitle={club.subtitle}
              description={club.description}
              features={club.features}
              logo={club.logo}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
