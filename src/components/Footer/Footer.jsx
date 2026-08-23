import "./Footer.css";

const Footer = () => {
  const whatsappLink =
    "https://wa.me/962792400060?text=Hello%20Eterna%20Clinic%2C%20I%27d%20like%20to%20book%20an%20appointment.";

  const instagramLink =
    "https://www.instagram.com/eterna_clinic?igsi=Z3Jsbnc5eDFub3Rk&utm_source=qr";

  const facebookLink =
    "https://www.facebook.com/share/1D2cm1kvTi/?mibextid=wwXIfr";

  const mapsLink =
    "https://maps.app.goo.gl/4X19tZH2SWgmaTgu7?g_st=ic";

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Main Footer */}
        <div className="footer-main">

          {/* Brand */}
          <div className="footer-brand">

            <a href="#home" className="footer-logo">
              <span className="footer-logo-main">
                ETERNA
              </span>

              <span className="footer-logo-sub">
                CLINIC
              </span>
            </a>

            <p>
              Where precision meets beauty,
              <br />
              and confidence begins.
            </p>

          </div>

          {/* Navigation */}
          <div className="footer-column">

            <span className="footer-heading">
              Explore
            </span>

            <nav className="footer-links">
              <a href="#home">Home</a>
              <a href="#about">About</a>
              <a href="#services">Services</a>
              <a href="#before-after">Results</a>
              <a href="#gallery">Gallery</a>
            </nav>

          </div>

          {/* Connect */}
          <div className="footer-column">

            <span className="footer-heading">
              Connect
            </span>

            <nav className="footer-links">

              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp
                <span>↗</span>
              </a>

              <a
                href={instagramLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
                <span>↗</span>
              </a>

              <a
                href={facebookLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
                <span>↗</span>
              </a>

              <a
                href={mapsLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Location
                <span>↗</span>
              </a>

            </nav>

          </div>

          {/* Appointment */}
          <div className="footer-column footer-appointment">

            <span className="footer-heading">
              Your Journey
            </span>

            <p>
              Ready to begin?
            </p>

            <a
              href={whatsappLink}
              className="footer-button"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book Appointment
              <span>↗</span>
            </a>

          </div>

        </div>

        {/* Large Brand */}
        <div className="footer-big-logo">
          ETERNA
        </div>

        {/* Bottom */}
        <div className="footer-bottom">

          <span>
            © 2026 Eterna Clinic. All rights reserved.
          </span>

          <span>
            Amman, Jordan
          </span>

          <button
            className="footer-top"
            onClick={scrollToTop}
          >
            Back to top
            <span>↑</span>
          </button>

        </div>

      </div>
    </footer>
  );
};

export default Footer;