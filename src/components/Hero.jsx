import './Hero.css'

export default function Hero() {
  const B = import.meta.env.BASE_URL
  return (
    <section id="hero" className="hero">
      <video
        className="hero__video"
        autoPlay
        muted
        loop
        playsInline
        poster={B + 'assets/render-night-crop.jpg'}
        src={B + 'assets/hero-video.mp4'}
      />
      <div className="hero__overlay" />

      <div className="hero__content">
        <div className="hero__kosher-seal">
          <span className="hero__kosher-star">✡</span>
          <span>100% Kosher Certified Residence</span>
        </div>
        <p className="hero__eyebrow">Buenaventura · Riviera Pacífica · Panamá</p>
        <h1 className="hero__title">
          The Secret of the<br />
          <em>Riviera Pacífica</em>
        </h1>
        <p className="hero__sub">The Essence of Pure Kosher Living</p>

        <div className="hero__actions">
          <a href="#pricing" className="btn btn-primary">View Availability</a>
          <a href="#villa" className="btn btn-outline">Discover the Villa</a>
        </div>

        <div className="hero__badges">
          <span>✦ Kosher Certified</span>
          <span>✦ Beachfront Villa</span>
          <span>✦ ~1,060 m²</span>
          <span>✦ Pool & Jacuzzi</span>
          <span>✦ 5 Bedrooms</span>
        </div>
      </div>

      <a href="#villa" className="hero__scroll" aria-label="Scroll down">
        <span />
      </a>
    </section>
  )
}
