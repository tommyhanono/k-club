import './Services.css'

const SERVICES = [
  {
    icon: '✈',
    title: 'Private Transportation',
    items: ['Private jets & helicopters', 'Luxury ground transfers', 'Yacht & boat charters', 'Jet ski & fishing charters'],
  },
  {
    icon: '✡',
    title: 'Kosher Catering',
    items: ['Full Kosher-certified kitchen', 'Meat & dairy menus', 'On-request private chef', 'Daily rabbinical service from Playa Blanca'],
  },
  {
    icon: '◈',
    title: 'Leisure & Sport',
    items: ['Padel & pickleball courts', 'Championship golf course', 'Equestrian activities', 'Spa & private massages'],
  },
  {
    icon: '⚓',
    title: 'Nautical Experiences',
    items: ['Boat-shaped outdoor bar', 'Boat-shaped hot tub', 'Marina views & access', 'Deep-sea fishing charters'],
  },
]

export default function Services() {
  return (
    <section id="services" className="services">
      <div className="services__container">
        <div className="services__header">
          <p className="section-label">Curated Services</p>
          <h2 className="section-title">Kosher Luxury, <em>Redefined</em></h2>
          <p className="services__lead">
            Every detail is managed by our on-site administrator. From arrival to departure, your experience is seamlessly choreographed.
          </p>
        </div>

        <div className="services__grid">
          {SERVICES.map(s => (
            <div key={s.title} className="services__card">
              <div className="services__icon">{s.icon}</div>
              <h3 className="services__card-title">{s.title}</h3>
              <ul className="services__list">
                {s.items.map(item => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="services__nautical-gallery">
          <div className="services__nautical-item">
            <img src={import.meta.env.BASE_URL + 'assets/boat-bar-new.jpg'} alt="Boat-shaped outdoor bar" loading="lazy" />
            <p>Signature Nautical Bar</p>
          </div>
          <div className="services__nautical-item">
            <img src={import.meta.env.BASE_URL + 'assets/boat-tub-new.jpg'} alt="Boat-shaped hot tub" loading="lazy" />
            <p>Boat-Shaped Hot Tub</p>
          </div>
          <div className="services__nautical-item">
            <img src={import.meta.env.BASE_URL + 'assets/marina-sunset.jpg'} alt="Buenaventura Marina at sunset" loading="lazy" />
            <p>Private Marina Access</p>
          </div>
        </div>

        <div className="services__kosher-note">
          <div className="services__kosher-inner">
            <span className="services__kosher-star">✡</span>
            <div>
              <strong>100% Kosher Certified Residence</strong>
              <p>The kitchen and all culinary services are fully certified. Rabbinical supervision available daily, coordinated from Playa Blanca resort. Shabbat services can be arranged upon request.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
