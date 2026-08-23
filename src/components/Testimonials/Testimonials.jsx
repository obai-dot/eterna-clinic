import { useState } from "react";
import "./Testimonials.css";

const testimonials = [
  {
    quote:
      "From the first consultation to the final result, everything felt incredibly personal. I never felt rushed, and the attention to detail was amazing.",
    name: "Sarah M.",
    treatment: "Smile Design",
  },
  {
    quote:
      "The entire experience at Eterna was exceptional. The team made me feel comfortable from the moment I walked in, and I absolutely love my results.",
    name: "Lina A.",
    treatment: "Aesthetic Treatment",
  },
  {
    quote:
      "I wanted something subtle and natural, and that is exactly what I got. The result looks like me, just a more refreshed version.",
    name: "Maya R.",
    treatment: "Botox & Fillers",
  },
  {
    quote:
      "The clinic is beautiful, the team is professional, and the care is on another level. I finally found a place I completely trust with my skin.",
    name: "Dana K.",
    treatment: "Skin Rejuvenation",
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const previousTestimonial = () => {
    setActiveIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const active = testimonials[activeIndex];

  return (
    <section className="testimonials" id="testimonials">
      <div className="testimonials-container">

        {/* Header */}
        <div className="testimonials-header">
          <span className="testimonials-eyebrow">
            Patient Stories
          </span>

          <span className="testimonials-counter">
            {String(activeIndex + 1).padStart(2, "0")} /{" "}
            {String(testimonials.length).padStart(2, "0")}
          </span>
        </div>

        {/* Quote */}
        <div className="testimonial-content">

          <span className="quote-mark">
            “
          </span>

          <blockquote key={activeIndex}>
            {active.quote}
          </blockquote>

          <div className="testimonial-author">
            <div>
              <span className="testimonial-name">
                {active.name}
              </span>

              <span className="testimonial-treatment">
                {active.treatment}
              </span>
            </div>
          </div>

        </div>

        {/* Controls */}
        <div className="testimonial-controls">

          <button
            onClick={previousTestimonial}
            aria-label="Previous testimonial"
          >
            ←
          </button>

          <div className="testimonial-progress">
            {testimonials.map((_, index) => (
              <span
                key={index}
                className={
                  index === activeIndex ? "active" : ""
                }
              ></span>
            ))}
          </div>

          <button
            onClick={nextTestimonial}
            aria-label="Next testimonial"
          >
            →
          </button>

        </div>

      </div>
    </section>
  );
};

export default Testimonials;