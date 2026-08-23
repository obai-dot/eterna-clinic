import "./WhyEterna.css";

const reasons = [
  {
    number: "01",
    title: "Expertise",
    text: "Experienced professionals combining clinical knowledge, refined technique, and an eye for natural results.",
  },
  {
    number: "02",
    title: "Precision",
    text: "Every treatment is thoughtfully planned around your features, goals, and individual needs.",
  },
  {
    number: "03",
    title: "Technology",
    text: "Modern technology and advanced techniques help us deliver safe, precise, and consistent care.",
  },
  {
    number: "04",
    title: "Personal Care",
    text: "From your first consultation to your follow-up, your experience is designed around you.",
  },
];

const WhyEterna = () => {
  return (
    <section className="why-eterna" id="why-eterna">
      <div className="why-eterna-container">

        {/* Header */}
        <div className="why-eterna-header">
          <span className="why-eterna-eyebrow">
            The Eterna Difference
          </span>

          <h2>
            More than a treatment.
            <br />
            <em>An experience.</em>
          </h2>

          <p>
            At Eterna, we bring together expertise, technology,
            and thoughtful design to create an experience that
            feels as exceptional as the results.
          </p>
        </div>

        {/* Reasons */}
        <div className="why-eterna-grid">
          {reasons.map((reason) => (
            <article
              className="why-eterna-card"
              key={reason.number}
            >
              <span className="why-eterna-number">
                {reason.number}
              </span>

              <div className="why-eterna-card-content">
                <h3>{reason.title}</h3>

                <div className="why-eterna-line"></div>

                <p>{reason.text}</p>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom Statement */}
        <div className="why-eterna-statement">
          <span>ETERNА</span>

          <p>
            Confidence begins with feeling
            <em> truly cared for.</em>
          </p>
        </div>

      </div>
    </section>
  );
};

export default WhyEterna;