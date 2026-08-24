interface TimelineItem {
  date: string
  title: string
  body: string
}

const TIMELINE: TimelineItem[] = [
  {
    date: 'May 2007',
    title: 'The Foundation',
    body: 'The parent organisation, Dravida Iyakka Tamizhar Peravai, was launched at Kamarajar Arangam, Chennai, inaugurated by then Tamil Nadu Finance Minister Prof. K. Anbazhagan. The student wing, Dravida Manavar Peravai, was institutionalised alongside it to systematically educate college and university students on anti-caste ideology and rationalism.',
  },
  {
    date: '2014',
    title: '"Dravidam 100" Campaign',
    body: 'Marking a century of organised Dravidian ideology, tracing back to the 1916 formation of the Justice Party, DMP spearheaded youth rallies, debate circles and campus lectures teaching students the history of reservation and social justice in South India.',
  },
  {
    date: '2017 – 2020',
    title: 'Anti-NEET & Federalism Protests',
    body: "Following the implementation of national-level exams like NEET in Tamil Nadu, DMP mobilised widespread student agitation, positioning education as a state-level right rather than a centrally mandated system.",
  },
  {
    date: 'Present',
    title: 'Ongoing Institution-Building',
    body: 'DMP carries its ideology forward through Karunchattai Pathippagam (Blackshirt Publishing House), Dravida Palli (Dravidian Ideological School) and Dravida Nutpu Kazhagam (Dravidian Friendship Forum), passing foundational thought to millennial and Gen-Z students.',
  },
]

export default function History() {
  return (
    <section className="section history-section" id="history">
      <div className="wrap">
        <div className="section-head">
          <div className="eyebrow">Two Decades of Struggle</div>
          <h2 className="section-title">
            Our <span className="accent">History</span>
          </h2>
        </div>
        <div className="timeline-list">
          {TIMELINE.map((item) => (
            <div className="timeline-row" key={item.date}>
              <div className="timeline-date">{item.date}</div>
              <div className="timeline-content">
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
