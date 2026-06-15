import './Experience.css'

const MOMENTS = [
  { img: '/assets/bv-5.jpg', caption: 'Terrace with Ocean Views' },
  { img: '/assets/bv-7.jpg', caption: 'Al Fresco Family Dinners' },
  { img: '/assets/actual-marina.jpg', caption: 'Buenaventura Marina at Twilight' },
  { img: '/assets/bv-9.jpg', caption: 'Open Living — Indoor/Outdoor Flow' },
]

export default function Experience() {
  return (
    <section id="experience" className="experience">
      <div className="experience__left">
        <div className="experience__quotes">
          <p className="section-label" style={{ color: '#c9a84c' }}>The Philosophy</p>

          <blockquote className="experience__quote">
            "What if life is simpler than we've been made to believe?"
          </blockquote>
          <blockquote className="experience__quote">
            "What if the secret to well-being is hidden in Mother Nature?"
          </blockquote>
          <blockquote className="experience__quote experience__quote--accent">
            "What if all these things happened in one place?"
          </blockquote>

          <p className="experience__body">
            At K Club, the answer reveals itself with every morning tide, every family dinner on the terrace, every round of golf with the Pacific as your backdrop.
          </p>
          <p className="experience__body">
            This is not a vacation. This is the life you were meant to live.
          </p>

          <div className="experience__activities">
            {['Family Dinners', 'Yoga on the Beach', 'Golf', 'Horseback Riding', 'Fishing', 'Spa & Wellness'].map(a => (
              <span key={a} className="experience__activity">{a}</span>
            ))}
          </div>
        </div>
      </div>

      <div className="experience__right">
        <div className="experience__mosaic">
          {MOMENTS.map((m, i) => (
            <div key={i} className={`experience__mosaic-item experience__mosaic-item--${i}`}>
              <img src={m.img} alt={m.caption} loading="lazy" />
              <div className="experience__mosaic-caption">{m.caption}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
