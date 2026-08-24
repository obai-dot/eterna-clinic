import "./About.css";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-container">

        {/* Image */}
        <div className="about-image-wrapper">
          <div className="about-image">
            <img
              src="/images/about-clinic.jpg"
              alt="Éterna Clinic"
            />
          </div>

          <div className="about-image-accent"></div>

          <div className="about-experience">
            <span>10+</span>
            <p>Years of<br />Excellence</p>
          </div>
        </div>

        {/* Content */}
        <div className="about-content">

          <span className="about-eyebrow">
            About Éterna
          </span>

          <h2>
            Where Beauty
            <br />
            Meets <em>Precision.</em>
          </h2>

          <div className="about-line"></div>

          <p className="about-intro">
            At Eterna, we believe true beauty is never about changing
            who you are. It is about bringing out the best version of you
            through precision, expertise, and personalized care.
          </p>

          <p className="about-description">
            From advanced dental treatments to refined aesthetic and
            skincare procedures, every experience at Éterna is designed
            around one thing — you. Our approach combines modern
            technology, clinical expertise, and an uncompromising
            attention to detail.
          </p>

          <div className="about-stats">
            <div className="about-stat">
              <span>5K+</span>
              <p>Happy Patients</p>
            </div>

            <div className="about-stat">
              <span>15+</span>
              <p>Expert Treatments</p>
            </div>

            <div className="about-stat">
              <span>100%</span>
              <p>Personalized Care</p>
            </div>
          </div>

          <a href="#appointment" className="about-button">
            Discover Éterna
            <span>↗</span>
          </a>

        </div>
      </div>
    </section>
  );
};

export default About;