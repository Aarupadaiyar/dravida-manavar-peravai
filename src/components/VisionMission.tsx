import { LampContainer } from './ui/lamp'

export default function VisionMission() {
  return (
    <section className="section vm-section section-alt" id="vision-mission">
      <div className="eyebrow vm-section-eyebrow">Our Compass</div>
      <div className="vm-lamp-row">
        <div className="vm-lamp-col">
          <LampContainer>
            <h2 className="vm-lamp-title lamp-fade-in">Vision</h2>
          </LampContainer>
          <p className="vm-floating-text">
            A Tamil society free of caste, superstition and inherited privilege &mdash; where every student,
            regardless of birth or background, stands as an equal citizen with the same access to education,
            opportunity and self-respect.
          </p>
        </div>
        <div className="vm-lamp-col">
          <LampContainer>
            <h2 className="vm-lamp-title lamp-fade-in">Mission</h2>
          </LampContainer>
          <p className="vm-floating-text">
            To organise, educate and mobilise Tamil students around the Dravidian principles of rationalism and
            social justice; to defend the language, land and rights of Tamils; and to build a new generation of
            fearless, questioning leaders.
          </p>
        </div>
      </div>
    </section>
  )
}
