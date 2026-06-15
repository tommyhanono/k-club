import { useState } from 'react'
import './Pricing.css'

const SEASONS = [
  {
    name: 'Holiday Peak',
    period: 'Passover · Dec 24–Jan 5 · Sukkot',
    tag: 'By Inquiry',
    tagColor: 'gold',
    nightly: 'USD 5,500',
    weekly: 'USD 34,000',
    monthly: 'On Request',
    note: 'Minimum 7 nights. Priority waitlist — book 6+ months in advance.',
  },
  {
    name: 'High Season',
    period: 'July – August · Spring Break',
    tag: 'Popular',
    tagColor: 'navy',
    nightly: 'USD 3,800',
    weekly: 'USD 24,000',
    monthly: 'USD 78,000',
    note: 'Minimum 4 nights.',
  },
  {
    name: 'Mid Season',
    period: 'March – June · October – November',
    tag: 'Best Value',
    tagColor: 'default',
    nightly: 'USD 2,800',
    weekly: 'USD 17,000',
    monthly: 'USD 55,000',
    note: 'Minimum 3 nights. Flexible stays available.',
  },
  {
    name: 'Low Season',
    period: 'January – February · September',
    tag: 'Extended Stay',
    tagColor: 'default',
    nightly: 'USD 2,200',
    weekly: 'USD 13,500',
    monthly: 'USD 42,000',
    note: 'Ideal for monthly stays. Negotiable for 30+ nights.',
  },
]

const WHATSAPP = 'https://wa.me/50766818669?text=I%27m%20interested%20in%20booking%20K%20Club%20Residencia'

export default function Pricing() {
  const [form, setForm] = useState({ name: '', email: '', dates: '', guests: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = e => {
    e.preventDefault()
    const msg = `Hello, I'd like to inquire about K Club Residencia.%0AName: ${form.name}%0ADates: ${form.dates}%0AGuests: ${form.guests}%0A${form.message}`
    window.open(`https://wa.me/50766818669?text=${encodeURIComponent(`Hello, I'd like to inquire about K Club Residencia.\nName: ${form.name}\nDates: ${form.dates}\nGuests: ${form.guests}\n${form.message}`)}`, '_blank')
    setSent(true)
  }

  return (
    <section id="pricing" className="pricing">
      <div className="pricing__container">
        <div className="pricing__header">
          <p className="section-label">Rates & Booking</p>
          <h2 className="section-title">Reserve Your Stay</h2>
          <p className="pricing__lead">
            Dynamic seasonal pricing. All rates include full property access, Kosher-certified kitchen, and dedicated on-site management.
          </p>
        </div>

        <div className="pricing__seasons">
          {SEASONS.map(s => (
            <div key={s.name} className={`pricing__season pricing__season--${s.tagColor}`}>
              <div className="pricing__season-head">
                <div>
                  <h3>{s.name}</h3>
                  <p className="pricing__period">{s.period}</p>
                </div>
                <span className={`pricing__tag pricing__tag--${s.tagColor}`}>{s.tag}</span>
              </div>
              <div className="pricing__rates">
                <div className="pricing__rate">
                  <span className="pricing__rate-value">{s.nightly}</span>
                  <span className="pricing__rate-label">per night</span>
                </div>
                <div className="pricing__rate">
                  <span className="pricing__rate-value">{s.weekly}</span>
                  <span className="pricing__rate-label">per week</span>
                </div>
                <div className="pricing__rate">
                  <span className="pricing__rate-value">{s.monthly}</span>
                  <span className="pricing__rate-label">per month</span>
                </div>
              </div>
              <p className="pricing__note">{s.note}</p>
              <a href={WHATSAPP} target="_blank" rel="noreferrer" className="btn btn-whatsapp pricing__btn">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Inquire via WhatsApp
              </a>
            </div>
          ))}
        </div>

        <div className="pricing__contact">
          <div className="pricing__contact-info">
            <p className="section-label">Get in Touch</p>
            <h3 className="pricing__contact-title">Ready to Experience K Club?</h3>
            <p>Our property manager will respond within 24 hours to confirm availability and answer any questions about your stay.</p>

            <div className="pricing__contact-methods">
              <a href={WHATSAPP} target="_blank" rel="noreferrer" className="btn btn-whatsapp">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp
              </a>
              <a href="mailto:tommyhanono@gmail.com" className="btn btn-dark">Email Us</a>
            </div>
          </div>

          <form className="pricing__form" onSubmit={handleSubmit}>
            {sent ? (
              <div className="pricing__form-success">
                <p>✓ Redirecting to WhatsApp…</p>
                <p>We'll confirm availability within 24 hours.</p>
              </div>
            ) : (
              <>
                <div className="pricing__form-row">
                  <div className="pricing__field">
                    <label>Full Name</label>
                    <input
                      type="text"
                      placeholder="Your name"
                      required
                      value={form.name}
                      onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                    />
                  </div>
                  <div className="pricing__field">
                    <label>Email</label>
                    <input
                      type="email"
                      placeholder="your@email.com"
                      required
                      value={form.email}
                      onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                    />
                  </div>
                </div>
                <div className="pricing__form-row">
                  <div className="pricing__field">
                    <label>Dates</label>
                    <input
                      type="text"
                      placeholder="e.g. Dec 24 – Jan 3"
                      value={form.dates}
                      onChange={e => setForm(f => ({ ...f, dates: e.target.value }))}
                    />
                  </div>
                  <div className="pricing__field">
                    <label>Guests</label>
                    <input
                      type="text"
                      placeholder="Number of guests"
                      value={form.guests}
                      onChange={e => setForm(f => ({ ...f, guests: e.target.value }))}
                    />
                  </div>
                </div>
                <div className="pricing__field">
                  <label>Message</label>
                  <textarea
                    rows="4"
                    placeholder="Any special requirements, questions about Kosher services, etc."
                    value={form.message}
                    onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                  />
                </div>
                <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                  Send Inquiry
                </button>
              </>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
