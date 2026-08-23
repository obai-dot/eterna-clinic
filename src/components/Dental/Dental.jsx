import "./Dental.css";

const dentalTreatments = [
  {
    number: "01",
    title: "Smile Design",
    description:
      "A personalized approach to creating a balanced, natural-looking smile designed around your features.",
  },
  {
    number: "02",
    title: "Veneers",
    description:
      "Refined porcelain veneers designed to enhance shape, symmetry, and the overall appearance of your smile.",
  },
  {
    number: "03",
    title: "Teeth Whitening",
    description:
      "Professional whitening treatments to restore brightness and create a fresher, more confident smile.",
  },
  {
    number: "04",
    title: "Crowns & Restorations",
    description:
      "Modern restorative dentistry focused on protecting damaged teeth while maintaining a natural appearance.",
  },
  {
    number: "05",
    title: "Dental Implants",
    description:
      "Long-lasting tooth replacement solutions designed for function, comfort, and a natural-looking result.",
  },
  {
    number: "06",
    title: "Clear Aligners",
    description:
      "A discreet approach to straightening teeth and creating a more harmonious smile.",
  },
];

const Dental = () => {
  return (
    <section className="dental" id="dental">
      <div className="dental-container">

        {/* Header */}
        <div className="dental-header">

          <div className="dental-heading">
            <span className="dental-eyebrow">
              01 — Dental
            </span>

            <h2>
              A confident
              <br />
              <em>smile, refined.</em>
            </h2>
          </div>

          <div className="dental-intro">
            <p>
              Advanced dental care designed to create
              healthy, natural-looking smiles with
              precision and attention to detail.
            </p>

            <span className="dental-caption">
              Precision · Function · Aesthetics
            </span>
          </div>

        </div>

        {/* Image */}
        <div className="dental-image-wrapper">
          <img
            src="/images/services-dental.jpg"
            alt="Dental treatment at Eterna Clinic"
          />

          <div className="dental-image-overlay">
            <span>
              Eterna Dental
            </span>

            <span>
              01 / 03
            </span>
          </div>
        </div>

        {/* Treatments */}
        <div className="dental-treatments">

          <div className="dental-treatments-header">
            <span>
              Our Treatments
            </span>

            <span>
              Dental Care
            </span>
          </div>

          <div className="dental-list">

            {dentalTreatments.map((treatment) => (
              <div
                className="dental-treatment"
                key={treatment.number}
              >
                <span className="dental-number">
                  {treatment.number}
                </span>

                <div className="dental-treatment-main">
                  <h3>
                    {treatment.title}
                  </h3>

                  <p>
                    {treatment.description}
                  </p>
                </div>

                <span className="dental-treatment-arrow">
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

export default Dental;