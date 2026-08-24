
import "./Hero.css";

function Hero() {
  return (
    <section className="hero" id="home">

      {/* Background */}
      <div className="hero-background">
        <div className="hero-image"></div>
        <div className="hero-overlay"></div>
      </div>

      {/* Decorative 3D element */}
      <div className="hero-orb hero-orb-one"></div>
      <div className="hero-orb hero-orb-two"></div>

      {/* Main content */}
      <div className="hero-container">

        <div className="hero-content">

          <span className="hero-eyebrow">
            Éterna Clinic
          </span>

          <h1 className="hero-title">
            Where Beauty
            <span>Meets Precision.</span>
          </h1>

          <p className="hero-description">
            Advanced dental, aesthetic and skin treatments
            designed around your natural beauty.
          </p>

          <div className="hero-actions">
            <a href="#appointment" className="hero-button hero-button-primary">
              Book Your Appointment
              <span>↗</span>
            </a>

            <a href="#services" className="hero-button hero-button-secondary">
              Explore Treatments
            </a>
          </div>

        </div>

        {/* Floating information card */}
        <div className="hero-floating-card">

          <div className="hero-card-number">
            10<span>+</span>
          </div>

          <div className="hero-card-text">
            <strong>Years</strong>
            <span>of experience</span>
          </div>

        </div>

      </div>

      {/* Scroll indicator */}
      <a href="#about" className="hero-scroll">
        <span className="hero-scroll-line"></span>

        <span className="hero-scroll-text">
          Scroll to explore
        </span>
      </a>

      {/* Decorative bottom line */}
      <div className="hero-bottom-line"></div>

    </section>
  );
}

export default Hero;

