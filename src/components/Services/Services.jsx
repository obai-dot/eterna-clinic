import "./Services.css";

const services = [
  {
    number: "01",
    title: "Dental",
    subtitle: "A confident smile, refined.",
    description:
      "Advanced dental care designed to create healthy, natural-looking smiles with precision and attention to detail.",
    image: "/images/services-dental.jpg",
    link: "#dental",
  },
  {
    number: "02",
    title: "Aesthetics",
    subtitle: "Enhance what makes you, you.",
    description:
      "Refined Botox and filler treatments designed to enhance your natural features while keeping every result beautifully balanced.",
    image: "/images/services-aesthetic.jpg",
    link: "#aesthetic",
  },
  {
    number: "03",
    title: "Skin Care",
    subtitle: "Healthy skin. Timeless glow.",
    description:
      "Personalized skin treatments focused on restoring radiance, improving texture, and revealing your skin's natural beauty.",
    image: "/images/services-skincare.jpg",
    link: "#skincare",
  },
];

const Services = () => {
  return (
    <section className="services" id="services">
      <div className="services-container">

        {/* Section Header */}
        <div className="services-header">
          <div>
            <span className="services-eyebrow">
              What We Offer
            </span>

            <h2>
              Care, crafted
              <br />
              <em>around you.</em>
            </h2>
          </div>

          <p className="services-intro">
            From your smile to your skin, every treatment at Eterna
            is thoughtfully designed to bring out your most confident self.
          </p>
        </div>

        {/* Services */}
        <div className="services-grid">
          {services.map((service) => (
            <article className="service-card" key={service.number}>

              {/* Image */}
              <div className="service-image">
                <img
                  src={service.image}
                  alt={`${service.title} treatment at Eterna`}
                />

                <div className="service-overlay"></div>

                <span className="service-number">
                  {service.number}
                </span>

                <a
                  href={service.link}
                  className="service-arrow"
                  aria-label={`Explore ${service.title}`}
                >
                  ↗
                </a>
              </div>

              {/* Content */}
              <div className="service-content">
                <h3>{service.title}</h3>

                <span className="service-subtitle">
                  {service.subtitle}
                </span>

                <p>{service.description}</p>

                <a
                  href={service.link}
                  className="service-link"
                >
                  Explore treatments
                  <span>→</span>
                </a>
              </div>

            </article>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;