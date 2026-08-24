import {
  MorphingDialog,
  MorphingDialogTrigger,
  MorphingDialogContent,
  MorphingDialogTitle,
  MorphingDialogImage,
  MorphingDialogSubtitle,
  MorphingDialogClose,
  MorphingDialogDescription,
  MorphingDialogContainer,
} from './core/morphing-dialog'
import { PlusIcon } from 'lucide-react'
import annaPhoto from '../assets/leaders/anna.jpg'
import kalaignarPhoto from '../assets/leaders/kalaignar.jpg'
import stalinPhoto from '../assets/leaders/stalin.jpg'

interface Leader {
  id: string
  short: string
  name: string
  photo: string
  years: string
  bio: string
  event: string
}

const LEADERS: Leader[] = [
  {
    id: 'anna',
    short: 'Anna',
    name: 'C. N. Annadurai',
    photo: annaPhoto,
    years: '1909 – 1969',
    bio: "Founded the DMK and became the first non-Congress Chief Minister in Tamil Nadu's history, turning Periyar's Self-Respect ideals into a governing party for the very first time. A gifted orator, he brought Tamil pride, rationalism and welfare-first politics into everyday governance.",
    event: '1967 – Landmark Election Victory',
  },
  {
    id: 'kalaignar',
    short: 'Kalaignar',
    name: 'M. Karunanidhi',
    photo: kalaignarPhoto,
    years: '1924 – 2018',
    bio: "Five-time Chief Minister, writer and orator who carried Anna's legacy forward for five decades. He championed federalism, reservation and welfare schemes, and led the historic anti-Hindi imposition agitation that protected Tamil's place as a language of pride.",
    event: 'Anti-Hindi Imposition Agitation',
  },
  {
    id: 'stalin',
    short: 'M. K. Stalin',
    name: 'M. K. Stalin',
    photo: stalinPhoto,
    years: '1953 – Present',
    bio: 'Current Chief Minister of Tamil Nadu, continuing the Dravidian model of governance into a new generation. He has pushed for a nationwide social justice census and greater state autonomy, and built youth-first welfare policy at the centre of his administration.',
    event: 'Leading The Social Justice Census Demand',
  },
]

export default function IdeologyLeaders() {
  return (
    <section className="section section-alt" id="ideology-leaders">
      <div className="wrap">
        <div className="section-head">
          <div className="eyebrow">Carrying The Torch Forward</div>
          <h2 className="section-title">
            Ideology <span className="accent">Leaders</span>
          </h2>
        </div>
        <div className="leaders-cards-grid">
          {LEADERS.map((leader) => (
            <MorphingDialog
              key={leader.id}
              transition={{ type: 'spring', bounce: 0.05, duration: 0.25 }}
            >
              <MorphingDialogTrigger className="leader-card-trigger">
                <MorphingDialogImage src={leader.photo} alt={leader.name} className="leader-card-photo" />
                <div className="leader-card-footer">
                  <div>
                    <MorphingDialogTitle className="leader-card-name">{leader.short}</MorphingDialogTitle>
                    <MorphingDialogSubtitle className="leader-card-role">{leader.years}</MorphingDialogSubtitle>
                  </div>
                  <span className="leader-card-plus" aria-hidden="true">
                    <PlusIcon size={14} />
                  </span>
                </div>
              </MorphingDialogTrigger>
              <MorphingDialogContainer>
                <MorphingDialogContent className="leader-dialog-content">
                  <MorphingDialogImage src={leader.photo} alt={leader.name} className="leader-dialog-photo" />
                  <div className="leader-dialog-body">
                    <MorphingDialogTitle className="leader-dialog-name">{leader.name}</MorphingDialogTitle>
                    <MorphingDialogSubtitle className="leader-dialog-role">{leader.years}</MorphingDialogSubtitle>
                    <MorphingDialogDescription
                      disableLayoutAnimation
                      variants={{
                        initial: { opacity: 0, y: 24 },
                        animate: { opacity: 1, y: 0 },
                        exit: { opacity: 0, y: 24 },
                      }}
                    >
                      <p className="leader-dialog-bio">{leader.bio}</p>
                      <span className="event-tag">{leader.event}</span>
                    </MorphingDialogDescription>
                  </div>
                  <MorphingDialogClose />
                </MorphingDialogContent>
              </MorphingDialogContainer>
            </MorphingDialog>
          ))}
        </div>
      </div>
    </section>
  )
}
