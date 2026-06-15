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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15663.8!2d-80.1234!3d8.1234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8faca38f19f65d39%3A0x3567d4a0db07dfbf!2sBuenaventura%2C%20Punta%20Chame%2C%20Panama!5e0!3m2!1sen!2s!4v1"
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

        <div className="location__image">
          <img src="/assets/actual-marina.jpg" alt="Buenaventura Marina at twilight" />
          <div className="location__image-overlay">
            <p>Buenaventura Private Peninsula — Pacific Coast of Panamá</p>
          </div>
        </div>
      </div>
    </section>
  )
}
