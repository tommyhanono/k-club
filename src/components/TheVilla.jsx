import { useState, useEffect } from 'react'
import './TheVilla.css'

const FLOORS = [
  {
    id: 'ground',
    label: 'Ground Floor',
    area: '843 m²',
    description: 'Five en-suite guest bedrooms line the main wing, each with direct terrace access. The open living and dining area connects to a full Kosher-certified kitchen, two outdoor pools, a nautical bar, and boat-shaped hot tub on the beachfront terrace.',
    rooms: [
      'Guest Bedrooms × 4 (en suite)',
      'Open Living & Dining Area',
      'Full Kosher-Certified Kitchen',
      'Infinity Pool (main)',
      'Jacuzzi / Secondary Pool',
      'Boat-Shaped Outdoor Bar',
      'Boat-Shaped Hot Tub',
      'Covered Outdoor Terrace',
    ],
  },
  {
    id: 'upper',
    label: 'Upper Floor',
    area: '217 m²',
    description: 'The entire upper level is dedicated to the master suite — bedrooms, bathrooms, a walk-in closet, and a sweeping Pacific-facing terrace with lounge area and panoramic ocean views.',
    rooms: [
      'Master Bedroom Suite',
      'En-Suite Bathrooms',
      'Walk-in Closet',
      'Private Pacific-View Terrace',
      'Terrace Lounge & Dining',
      'Ocean & Marina Views',
    ],
  },
]

const B = import.meta.env.BASE_URL

const GALLERY = [
  { src: B + 'assets/render-night-crop.jpg', caption: 'K Club Residencia — Night Render' },
  { src: B + 'assets/bv-34.jpg', caption: 'Terrace with Private Pool & Beach Views' },
  { src: B + 'assets/render-sunset-crop.jpg', caption: 'Villa Exterior — Golden Hour' },
  { src: B + 'assets/bv-3.jpg', caption: 'Open-Plan Living Room — Ocean Views' },
  { src: B + 'assets/marina-sunset.jpg', caption: 'Buenaventura Marina at Sunset' },
  { src: B + 'assets/bv-26.jpg', caption: 'Luxury Living & Dining Area' },
  { src: B + 'assets/bv-aerial-clean.jpg', caption: 'Buenaventura Private Peninsula — Aerial View' },
  { src: B + 'assets/bv-12.jpg', caption: 'Full Kosher-Certified Kitchen' },
  { src: B + 'assets/render-entrance-crop.jpg', caption: 'Villa Entrance — Dusk Arrival' },
  { src: B + 'assets/bv-1.jpg', caption: 'Beachfront Terrace & Lounge' },
  { src: B + 'assets/bv-5.jpg', caption: 'Upper Terrace — Pacific Ocean Views' },
  { src: B + 'assets/render-portecochere-crop.jpg', caption: 'Private Porte-Cochère — Luxury Arrival' },
]

export default function TheVilla() {
  const [activeFloor, setActiveFloor] = useState('ground')
  const [lightbox, setLightbox] = useState(null)
  const floor = FLOORS.find(f => f.id === activeFloor)

  useEffect(() => {
    if (lightbox === null) return
    const onKey = e => {
      if (e.key === 'Escape') setLightbox(null)
      if (e.key === 'ArrowLeft') setLightbox(l => (l - 1 + GALLERY.length) % GALLERY.length)
      if (e.key === 'ArrowRight') setLightbox(l => (l + 1) % GALLERY.length)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [lightbox])

  return (
    <section id="villa" className="villa">
      <div className="villa__container">
        <div className="villa__header">
          <p className="section-label">The Residence</p>
          <h2 className="section-title">A Villa Unlike Any Other</h2>
          <p className="villa__lead">
            Two levels of refined living on the edge of the Pacific — where architecture, nature, and the art of Kosher hospitality converge.
          </p>
        </div>

        <div className="villa__specs">
          {[
            { value: '~1,060', unit: 'm²', label: 'Total Built Area' },
            { value: '5', unit: '', label: 'Bedrooms' },
            { value: '2', unit: '', label: 'Pools & Jacuzzi' },
            { value: '100%', unit: '', label: 'Kosher Certified' },
          ].map(s => (
            <div key={s.label} className="villa__spec">
              <div className="villa__spec-value">{s.value}<span>{s.unit}</span></div>
              <div className="villa__spec-label">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="villa__floor-section">
          <div className="villa__floor-tabs">
            {FLOORS.map(f => (
              <button
                key={f.id}
                className={`villa__tab ${activeFloor === f.id ? 'villa__tab--active' : ''}`}
                onClick={() => setActiveFloor(f.id)}
              >
                {f.label}
                <span>{f.area}</span>
              </button>
            ))}
          </div>

          <div className="villa__floor-content">
            <div className="villa__floor-plan">
              <img
                src={B + (activeFloor === 'ground' ? 'assets/floorplan-ground-crop.jpg' : 'assets/floorplan-upper-crop.jpg')}
                alt={`${floor.label} — Architectural Plan`}
                className="villa__floor-img"
              />
            </div>

            <div className="villa__floor-info">
              <p className="villa__floor-desc">{floor.description}</p>
              <ul className="villa__floor-rooms">
                {floor.rooms.map(r => (
                  <li key={r}>
                    <span className="villa__room-dot" />
                    {r}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="villa__gallery">
          {GALLERY.map((img, i) => (
            <button key={i} className="villa__gallery-item" onClick={() => setLightbox(i)}>
              <img src={img.src} alt={img.caption} loading="lazy" />
              <div className="villa__gallery-caption">{img.caption}</div>
            </button>
          ))}
        </div>
      </div>

      {lightbox !== null && (
        <div className="villa__lightbox" onClick={() => setLightbox(null)}>
          <img src={GALLERY[lightbox].src} alt={GALLERY[lightbox].caption} />
          <p>{GALLERY[lightbox].caption}</p>
          <button className="villa__lightbox-close" onClick={() => setLightbox(null)}>✕</button>
          <button
            className="villa__lightbox-prev"
            onClick={e => { e.stopPropagation(); setLightbox(l => (l - 1 + GALLERY.length) % GALLERY.length) }}
          >‹</button>
          <button
            className="villa__lightbox-next"
            onClick={e => { e.stopPropagation(); setLightbox(l => (l + 1) % GALLERY.length) }}
          >›</button>
        </div>
      )}
    </section>
  )
}
