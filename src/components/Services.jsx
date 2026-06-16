import './Services.css'

const SERVICES = [
  {
    icon: '✡',
    title: 'Kosher Catering',
    items: ['Full Kosher-certified kitchen', 'Separate meat & dairy areas', 'On-request private Kosher chef', 'Daily rabbinical service from Playa Blanca'],
  },
  {
    icon: '✈',
    title: 'Private Transportation',
    items: ['Private jets & helicopters', 'Luxury ground transfers', 'Yacht & boat charters', 'Jet ski & fishing charters'],
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

const B = import.meta.env.BASE_URL

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

        <div className="services__kosher-banner">
          <div className="services__kosher-badge">
            <span className="services__kosher-badge-star">✡</span>
            <div>
              <p className="services__kosher-badge-label">Certified</p>
              <p className="services__kosher-badge-value">100% Kosher</p>
            </div>
          </div>
          <div className="services__kosher-content">
            <h3 className="services__kosher-title">A Fully Certified Kosher Residence</h3>
            <p className="services__kosher-desc">
              K Club is one of the few private residences in Latin America with full Kosher certification. Every space, every kitchen, every service is orchestrated to meet the highest standards of Kashrut — so your family observes fully, without compromise.
            </p>
            <div className="services__kosher-grid">
              <div className="services__kosher-item">
                <span>✓</span> Certified Kosher Kitchen
              </div>
              <div className="services__kosher-item">
                <span>✓</span> Separate Meat &amp; Dairy Areas
              </div>
              <div className="services__kosher-item">
                <span>✓</span> Daily Rabbinical Supervision
              </div>
              <div className="services__kosher-item">
                <span>✓</span> Shabbat &amp; Holiday Services
              </div>
              <div className="services__kosher-item">
                <span>✓</span> Kosher Wines &amp; Spirits
              </div>
              <div className="services__kosher-item">
                <span>✓</span> Full Pesach Setup Available
              </div>
            </div>
          </div>
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
            <img src={B + 'assets/boat-bar-new.jpg'} alt="Boat-shaped outdoor bar" loading="lazy" />
            <p>Signature Nautical Bar</p>
          </div>
          <div className="services__nautical-item">
            <img src={B + 'assets/boat-tub-new.jpg'} alt="Boat-shaped hot tub" loading="lazy" />
            <p>Boat-Shaped Hot Tub</p>
          </div>
          <div className="services__nautical-item">
            <img src={B + 'assets/marina-sunset.jpg'} alt="Buenaventura Marina at sunset" loading="lazy" />
            <p>Private Marina Access</p>
          </div>
        </div>

        <div className="services__arrival">
          <div className="services__arrival-images">
            <div className="services__arrival-img services__arrival-img--main">
              <img src={B + 'assets/render-portecochere-crop.jpg'} alt="Private porte-cochère arrival" loading="lazy" />
            </div>
            <div className="services__arrival-img services__arrival-img--secondary">
              <img src={B + 'assets/render-entrance-crop.jpg'} alt="Villa entrance at dusk" loading="lazy" />
            </div>
          </div>
          <div className="services__arrival-text">
            <p className="section-label">The Arrival Experience</p>
            <h3 className="services__arrival-title">Your Journey<br /><em>Begins at the Gate</em></h3>
            <p className="services__arrival-desc">
              A private covered porte-cochère welcomes you with architectural warmth — wood-louvered pergola, curated landscaping, and staff on hand from the moment you arrive. The transition from the outside world to K Club is a moment in itself.
            </p>
            <ul className="services__arrival-list">
              <li>Private gated driveway</li>
              <li>Covered porte-cochère with pergola</li>
              <li>Dedicated on-site property manager</li>
              <li>Luggage assistance & welcome package</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
