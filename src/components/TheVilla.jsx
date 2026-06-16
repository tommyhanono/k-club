import { useState, useEffect } from 'react'
import './TheVilla.css'

const FLOORS = [
  {
    id: 'ground',
    label: 'Ground Floor',
    area: '643 m²',
    description: 'Open-plan living and dining areas flow seamlessly onto the terrace and infinity pool. A full Kosher kitchen, guest rooms, and direct beach access define the ground level.',
    rooms: [
      'Open Living & Dining',
      'Full Kosher Kitchen',
      'Guest Bedrooms × 3',
      'Direct Pool Access',
      'Outdoor Terrace',
      'Beach Access',
    ],
    svgRooms: [
      { x: 60, y: 60, w: 280, h: 160, label: 'Living & Dining' },
      { x: 360, y: 60, w: 180, h: 160, label: 'Kosher Kitchen' },
      { x: 60, y: 240, w: 160, h: 130, label: 'Bedroom 1' },
      { x: 240, y: 240, w: 160, h: 130, label: 'Bedroom 2' },
      { x: 420, y: 240, w: 120, h: 130, label: 'Bedroom 3' },
      { x: 60, y: 390, w: 480, h: 100, label: 'Terrace & Pool Deck', accent: true },
    ],
  },
  {
    id: 'upper',
    label: 'Upper Floor',
    area: '217 m²',
    description: 'The master suite occupies the entire upper level — a sanctuary with panoramic Pacific views, private jacuzzi terrace, and bespoke finishes throughout.',
    rooms: [
      'Master Suite',
      'Walk-in Closet',
      'Master Bathroom',
      'Private Jacuzzi Terrace',
      'Marina View Lounge',
      'Study / Office',
    ],
    svgRooms: [
      { x: 80, y: 80, w: 340, h: 200, label: 'Master Suite' },
      { x: 440, y: 80, w: 100, h: 120, label: 'Walk-in' },
      { x: 440, y: 220, w: 100, h: 60, label: 'Bath' },
      { x: 80, y: 300, w: 200, h: 140, label: 'Jacuzzi Terrace', accent: true },
      { x: 300, y: 300, w: 240, h: 140, label: 'Lounge / View' },
    ],
  },
]

const B = import.meta.env.BASE_URL

const GALLERY = [
  { src: B + 'assets/bv-34.jpg', caption: 'Terrace with Private Pool & Beach Views' },
  { src: B + 'assets/marina-sunset.jpg', caption: 'Buenaventura Marina at Sunset' },
  { src: B + 'assets/bv-3.jpg', caption: 'Open-Plan Living Room — Ocean Views' },
  { src: B + 'assets/bv-26.jpg', caption: 'Luxury Living & Dining Area' },
  { src: B + 'assets/bv-aerial-clean.jpg', caption: 'Buenaventura Private Peninsula — Aerial View' },
  { src: B + 'assets/bv-12.jpg', caption: 'Full Kosher-Certified Kitchen' },
  { src: B + 'assets/bv-1.jpg', caption: 'Beachfront Terrace & Lounge' },
  { src: B + 'assets/bv-5.jpg', caption: 'Upper Terrace — Pacific Ocean Views' },
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
            { value: '2', unit: '', label: 'Levels' },
            { value: '∞', unit: '', label: 'Infinity Pool' },
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
              <svg viewBox="0 0 600 520" className="villa__svg">
                <rect width="600" height="520" fill="#f7f3ec" rx="4" />
                {floor.svgRooms.map((r, i) => (
                  <g key={i}>
                    <rect
                      x={r.x} y={r.y} width={r.w} height={r.h}
                      fill={r.accent ? '#1a2744' : 'white'}
                      stroke={r.accent ? '#1a2744' : '#c9a84c'}
                      strokeWidth="1.5"
                      rx="2"
                    />
                    <text
                      x={r.x + r.w / 2}
                      y={r.y + r.h / 2}
                      textAnchor="middle"
                      dominantBaseline="middle"
                      fill={r.accent ? 'white' : '#1a2744'}
                      fontSize="11"
                      fontFamily="Inter, sans-serif"
                      fontWeight="400"
                      letterSpacing="0.05em"
                    >
                      {r.label}
                    </text>
                  </g>
                ))}
                <text x="12" y="510" fill="#c9a84c" fontSize="9" fontFamily="Inter, sans-serif" letterSpacing="0.1em">
                  {floor.label.toUpperCase()} · {floor.area} · SCHEMATIC REPRESENTATION
                </text>
              </svg>
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
