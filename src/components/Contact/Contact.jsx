import "./Contact.css";

const Contact = () => {
  const whatsappLink =
    "https://wa.me/962792400060?text=Hello%20Eterna%20Clinic%2C%20I%27d%20like%20to%20know%20more%20about%20your%20services.";

  const instagramLink =
    "https://www.instagram.com/eterna_clinic?igsi=Z3Jsbnc5eDFub3Rk&utm_source=qr";

  const facebookLink =
    "https://www.facebook.com/share/1D2cm1kvTi/?mibextid=wwXIfr";

  const mapsLink =
    "https://maps.app.goo.gl/4X19tZH2SWgmaTgu7?g_st=ic";

  return (
    <section className="contact" id="contact">
      <div className="contact-container">

        {/* Header */}
        <div className="contact-header">
          <span className="contact-eyebrow">
            Get In Touch
          </span>

          <h2>
            Let's start
            <br />
            <em>your journey.</em>
          </h2>

          <p>
            Have a question, want to explore a treatment,
            or simply want to know more about Eterna?
            Our team would love to hear from you.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="contact-grid">

          {/* WhatsApp */}
          <a
            href={whatsappLink}
            className="contact-card contact-card-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="contact-card-top">
              <span>01</span>
              <span className="contact-card-arrow">↗</span>
            </div>

            <div className="contact-card-content">
              <span className="contact-card-label">
                Message Us
              </span>

              <h3>WhatsApp</h3>

              <p>
                Speak directly with our team and
                ask about your next appointment.
              </p>
            </div>
          </a>

          {/* Instagram */}
          <a
            href={instagramLink}
            className="contact-card"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="contact-card-top">
              <span>02</span>
              <span className="contact-card-arrow">↗</span>
            </div>

            <div className="contact-card-content">
              <span className="contact-card-label">
                Follow Our Journey
              </span>

              <h3>Instagram</h3>

              <p>
                Discover our latest treatments,
                results, and moments at Eterna.
              </p>
            </div>
          </a>

          {/* Facebook */}
          <a
            href={facebookLink}
            className="contact-card"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="contact-card-top">
              <span>03</span>
              <span className="contact-card-arrow">↗</span>
            </div>

            <div className="contact-card-content">
              <span className="contact-card-label">
                Stay Connected
              </span>

              <h3>Facebook</h3>

              <p>
                Keep up with Eterna and discover
                more about our clinic.
              </p>
            </div>
          </a>

        </div>

        {/* Contact Information */}
        <div className="contact-bottom">

          {/* Phone */}
          <div className="contact-info">
            <span>Contact</span>

            <a href="tel:+962792400060">
              +962 79 240 0060
            </a>
          </div>

          {/* Location */}
          <div className="contact-info">
            <span>Clinic</span>

            <a
              href={mapsLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Eterna Clinic
              <br />
              Kilo Cir, Amman
              <span className="contact-location-arrow">
                ↗
              </span>
            </a>
          </div>

          {/* Availability */}
          <div className="contact-info">
            <span>Availability</span>

            <p>
              By Appointment
              <br />
              WhatsApp & Social
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;