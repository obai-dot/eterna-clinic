import { useState } from "react";
import "./FeaturedTreatments.css";

const treatments = [
  {
    number: "01",
    title: "Smile Design",
    category: "Dental",
    description:
      "A personalized approach to creating a balanced, natural-looking smile designed around your features.",
    image: "/images/treatment-smile.jpg",
  },
  {
    number: "02",
    title: "Veneers",
    category: "Dental",
    description:
      "Refined porcelain veneers crafted to enhance shape, proportion, and the natural beauty of your smile.",
    image: "/images/treatment-veneers.jpg",
  },
  {
    number: "03",
    title: "Botox & Fillers",
    category: "Aesthetics",
    description:
      "Subtle enhancements designed to restore balance, soften features, and preserve your natural expression.",
    image: "/images/treatment-aesthetic.jpg",
  },
  {
    number: "04",
    title: "Skin Rejuvenation",
    category: "Skin Care",
    description:
      "Advanced treatments focused on improving skin quality, texture, hydration, and natural radiance.",
    image: "/images/treatment-skin.jpg",
  },
];

const FeaturedTreatments = () => {
  const [activeTreatment, setActiveTreatment] = useState(0);

  const active = treatments[activeTreatment];

  return (
    <section className="featured-treatments" id="treatments">
      <div className="featured-container">

        {/* Header */}
        <div className="featured-header">
          <span className="featured-eyebrow">
            Our Treatments
          </span>

          <h2>
            Designed for
            <br />
            <em>refined results.</em>
          </h2>
        </div>

        {/* Main Content */}
        <div className="featured-content">

          {/* Image */}
          <div className="featured-image-wrapper">
            <div className="featured-image">
              <img
                key={active.image}
                src={active.image}
                alt={active.title}
              />

              <div className="featured-image-overlay"></div>

              <span className="featured-image-category">
                {active.category}
              </span>
            </div>
          </div>

          {/* Treatment List */}
          <div className="featured-list">

            {treatments.map((treatment, index) => (
              <button
                key={treatment.number}
                className={`featured-item ${
                  activeTreatment === index ? "active" : ""
                }`}
                onMouseEnter={() => setActiveTreatment(index)}
                onFocus={() => setActiveTreatment(index)}
                onClick={() => setActiveTreatment(index)}
              >
                <span className="featured-number">
                  {treatment.number}
                </span>

                <div className="featured-item-content">
                  <span className="featured-item-category">
                    {treatment.category}
                  </span>

                  <h3>{treatment.title}</h3>

                  <p>{treatment.description}</p>
                </div>

                <span className="featured-arrow">
                  ↗
                </span>
              </button>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
};

export default FeaturedTreatments;