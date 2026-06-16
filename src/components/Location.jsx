import './Location.css'

export default function Location() {
  return (
    <section id="location" className="location">
      <div className="location__container">
        <div className="location__header">
          <p className="section-label">Where We Are</p>
          <h2 className="section-title">Buenaventura<br /><em>Riviera Pacífica, Panamá</em></h2>
        </div>

        <div className="location__grid">
          <div className="location__info">
            <div className="location__feature">
              <h4>Private Peninsula</h4>
              <p>K Club sits on a private peninsula within Buenaventura Resort — one of Latin America's most exclusive gated communities on the Pacific coast of Panama.</p>
            </div>
            <div className="location__feature">
              <h4>World-Class Amenities</h4>
              <p>Surrounded by a private marina, 18-hole championship golf course, beach clubs, equestrian center, and full resort services — all within walking distance.</p>
            </div>
            <div className="location__feature">
              <h4>Getting Here</h4>
              <ul className="location__travel">
                <li><span>✈</span> <span><strong>1 hr</strong> from Panama City (PTY)</span></li>
                <li><span>🚗</span> <span><strong>2.5 hrs</strong> by car from Panama City</span></li>
                <li><span>🚁</span> <span><strong>40 min</strong> private helicopter</span></li>
                <li><span>⛵</span> <span>Direct marina access by yacht</span></li>
              </ul>
            </div>
          </div>

          <div className="location__map-container">
            <iframe
              title="Buenaventura Resort location"
              src="https://www.google.com/maps?q=Buenaventura+Golf+%26+Beach+Resort+Panama&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="location__map-pin">
              <span>◆</span>
              <p>K Club Residencia</p>
            </div>
          </div>
        </div>

        <div className="location__masterplan">
          <div className="location__masterplan-label">
            <p className="section-label">Site Plan</p>
            <p className="location__masterplan-desc">K Club Residencia — within Buenaventura Resort Master Plan</p>
          </div>
          <div className="location__masterplan-img">
            <img src={import.meta.env.BASE_URL + 'assets/masterplan-crop.jpg'} alt="Buenaventura Resort master plan showing K Club location" loading="lazy" />
          </div>
        </div>

        <div className="location__image">
          <img src={import.meta.env.BASE_URL + 'assets/marina-sunset.jpg'} alt="Buenaventura Marina at sunset" />
          <div className="location__image-overlay">
            <p>Buenaventura Private Peninsula — Pacific Coast of Panamá</p>
          </div>
        </div>
      </div>
    </section>
  )
}
