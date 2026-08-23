import "./Appointment.css";

const Appointment = () => {
  const whatsappLink =
    "https://wa.me/962792400060?text=Hello%20Eterna%20Clinic%2C%20I%27d%20like%20to%20book%20an%20appointment.";

  const instagramLink =
    "https://www.instagram.com/eterna_clinic?igsi=Z3Jsbnc5eDFub3Rk&utm_source=qr";

  const facebookLink =
    "https://www.facebook.com/share/1D2cm1kvTi/?mibextid=wwXIfr";

  return (
    <section className="appointment" id="appointment">
      <div className="appointment-overlay"></div>

      <div className="appointment-container">

        <span className="appointment-eyebrow">
          Your Eterna Experience
        </span>

        <h2>
          Ready to feel
          <br />
          <em>like your best self?</em>
        </h2>

        <p>
          Whether you're looking to refresh your smile,
          enhance your features, or simply take better care
          of your skin, your journey starts with a conversation.
        </p>

        <div className="appointment-actions">

          <a
            href={whatsappLink}
            className="appointment-main-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>Book Your Appointment</span>
            <span className="appointment-arrow">↗</span>
          </a>

        </div>

        <div className="appointment-socials">

          <span>Follow Eterna</span>

          <div className="appointment-social-links">

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

          </div>

        </div>

      </div>
    </section>
  );
};

export default Appointment;