import './Hero.css'

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <video
        className="hero__video"
        autoPlay
        muted
        loop
        playsInline
        src={import.meta.env.BASE_URL + 'assets/hero-video.mp4'}
      />
      <div className="hero__overlay" />

      <div className="hero__content">
        <p className="hero__eyebrow">Buenaventura · Riviera Pacífica · Panamá</p>
        <h1 className="hero__title">
          The Secret of the<br />
          <em>Riviera Pacífica</em>
        </h1>
        <p className="hero__sub">The Essence of Pure Living</p>

        <div className="hero__actions">
          <a href="#pricing" className="btn btn-primary">View Availability</a>
          <a href="#villa" className="btn btn-outline">Discover the Villa</a>
        </div>

        <div className="hero__badges">
          <span>✦ 100% Kosher Certified</span>
          <span>✦ Beachfront</span>
          <span>✦ ~1,060 m²</span>
          <span>✦ Private Pool</span>
        </div>
      </div>

      <a href="#villa" className="hero__scroll" aria-label="Scroll down">
        <span />
      </a>
    </section>
  )
}
