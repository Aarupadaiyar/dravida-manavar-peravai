interface ImpactItem {
  num: string
  title: string
  body: string
}

const IMPACT: ImpactItem[] = [
  {
    num: '01',
    title: 'Cups & Conversation',
    body: 'Unlike traditional radical political banners, DMP popularised structured discussion circles called "Cups & Conversation," casual yet deeply academic forums that educate students on the philosophies of Thanthai Periyar, B. R. Ambedkar and Arignar Anna.',
  },
  {
    num: '02',
    title: 'Resistance Against Linguistic Imposition',
    body: 'A core highlight of DMP has been its staunch opposition to the continuous efforts of Hindi and Sanskrit imposition in southern educational curriculums, continuing the heritage of the historic 1965 anti-Hindi agitations.',
  },
  {
    num: '03',
    title: 'Social Justice Over Electoral Ambition',
    body: "Unlike mainstream student wings tied to electoral machinery, DMP's primary emphasis remains ideological literacy, a training ground for public speaking, writing and logical debate rooted in scientific temper and rationalism.",
  },
]

export default function Impact() {
  return (
    <section className="section section-alt impact-section" id="impact">
      <div className="wrap">
        <div className="section-head">
          <div className="eyebrow">Changes We've Made</div>
          <h2 className="section-title">
            Ideology <span className="accent">In Practice</span>
          </h2>
        </div>
        <div className="impact-grid">
          {IMPACT.map((item) => (
            <div className="impact-card" key={item.num}>
              <div className="impact-num">{item.num}</div>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
