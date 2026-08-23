import "./Aesthetic.css";

const aestheticTreatments = [
  {
    number: "01",
    title: "Botox",
    description:
      "Refined treatments designed to soften the appearance of fine lines while maintaining natural facial expression.",
  },
  {
    number: "02",
    title: "Dermal Fillers",
    description:
      "Subtle enhancement and restoration of facial volume with results designed to complement your natural features.",
  },
  {
    number: "03",
    title: "Lip Enhancement",
    description:
      "Beautifully balanced lip enhancement focused on shape, proportion, hydration, and natural-looking definition.",
  },
  {
    number: "04",
    title: "Facial Contouring",
    description:
      "Strategic treatments designed to enhance facial harmony and create a more refined, balanced appearance.",
  },
  {
    number: "05",
    title: "Jawline Definition",
    description:
      "Carefully planned treatments to enhance jawline definition and create a more structured facial profile.",
  },
  {
    number: "06",
    title: "Skin Boosters",
    description:
      "Hydrating injectable treatments designed to improve skin quality, radiance, and overall appearance.",
  },
];

const Aesthetic = () => {
  return (
    <section className="aesthetic" id="aesthetic">
      <div className="aesthetic-container">

        {/* Header */}
        <div className="aesthetic-header">

          <div className="aesthetic-heading">
            <span className="aesthetic-eyebrow">
              02 — Aesthetics
            </span>

            <h2>
              Enhance what
              <br />
              <em>makes you, you.</em>
            </h2>
          </div>

          <div className="aesthetic-intro">
            <p>
              Refined Botox and filler treatments designed
              to enhance your natural features while keeping
              every result beautifully balanced.
            </p>

            <span className="aesthetic-caption">
              Balance · Precision · Confidence
            </span>
          </div>

        </div>

        {/* Image */}
        <div className="aesthetic-image-wrapper">
          <img
            src="/images/services-aesthetic.jpg"
            alt="Aesthetic treatment at Eterna Clinic"
          />

          <div className="aesthetic-image-overlay">
            <span>
              Eterna Aesthetics
            </span>

            <span>
              02 / 03
            </span>
          </div>
        </div>

        {/* Treatments */}
        <div className="aesthetic-treatments">

          <div className="aesthetic-treatments-header">
            <span>
              Our Treatments
            </span>

            <span>
              Facial Aesthetics
            </span>
          </div>

          <div className="aesthetic-list">

            {aestheticTreatments.map((treatment) => (
              <div
                className="aesthetic-treatment"
                key={treatment.number}
              >
                <span className="aesthetic-number">
                  {treatment.number}
                </span>

                <div className="aesthetic-treatment-main">
                  <h3>
                    {treatment.title}
                  </h3>

                  <p>
                    {treatment.description}
                  </p>
                </div>

                <span className="aesthetic-treatment-arrow">
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

export default Aesthetic;