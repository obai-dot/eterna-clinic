import "./SkinCare.css";

const skinTreatments = [
  {
    number: "01",
    title: "Skin Rejuvenation",
    description:
      "Personalized treatments designed to refresh the skin, improve its appearance, and restore a healthy-looking glow.",
  },
  {
    number: "02",
    title: "Hydrafacial",
    description:
      "A deep-cleansing and hydrating treatment that leaves the skin looking refreshed, smooth, and radiant.",
  },
  {
    number: "03",
    title: "Chemical Peels",
    description:
      "Targeted exfoliation designed to improve skin texture, tone, and overall clarity.",
  },
  {
    number: "04",
    title: "Skin Boosters",
    description:
      "Hydration-focused treatments designed to improve skin quality and reveal a fresher, more luminous complexion.",
  },
  {
    number: "05",
    title: "Microneedling",
    description:
      "A precision treatment that encourages natural skin renewal and helps improve texture and the appearance of imperfections.",
  },
  {
    number: "06",
    title: "Personalized Facials",
    description:
      "Tailored facial treatments selected according to your skin's individual needs and goals.",
  },
];

const SkinCare = () => {
  return (
    <section className="skincare" id="skincare">
      <div className="skincare-container">

        {/* Header */}
        <div className="skincare-header">

          <div className="skincare-heading">
            <span className="skincare-eyebrow">
              03 — Skin Care
            </span>

            <h2>
              Healthy skin.
              <br />
              <em>Timeless glow.</em>
            </h2>
          </div>

          <div className="skincare-intro">
            <p>
              Personalized skin treatments focused on
              restoring radiance, improving texture, and
              revealing your skin's natural beauty.
            </p>

            <span className="skincare-caption">
              Care · Renewal · Radiance
            </span>
          </div>

        </div>

        {/* Image */}
        <div className="skincare-image-wrapper">
          <img
            src="/images/services-skincare.jpg"
            alt="Skin care treatment at Eterna Clinic"
          />

          <div className="skincare-image-overlay">
            <span>
              Eterna Skin
            </span>

            <span>
              03 / 03
            </span>
          </div>
        </div>

        {/* Treatments */}
        <div className="skincare-treatments">

          <div className="skincare-treatments-header">
            <span>
              Our Treatments
            </span>

            <span>
              Skin Health
            </span>
          </div>

          <div className="skincare-list">

            {skinTreatments.map((treatment) => (
              <div
                className="skincare-treatment"
                key={treatment.number}
              >
                <span className="skincare-number">
                  {treatment.number}
                </span>

                <div className="skincare-treatment-main">
                  <h3>
                    {treatment.title}
                  </h3>

                  <p>
                    {treatment.description}
                  </p>
                </div>

                <span className="skincare-treatment-arrow">
                  ↗
                </span>
              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
};

export default SkinCare;