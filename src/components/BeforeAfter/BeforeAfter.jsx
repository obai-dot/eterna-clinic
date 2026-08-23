import { useState, useRef } from "react";
import "./BeforeAfter.css";

const BeforeAfter = () => {
  const [position, setPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const containerRef = useRef(null);

  const updatePosition = (clientX) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();

    let newPosition =
      ((clientX - rect.left) / rect.width) * 100;

    newPosition = Math.max(0, Math.min(100, newPosition));

    setPosition(newPosition);
  };

  const handleMouseMove = (event) => {
    if (!isDragging) return;
    updatePosition(event.clientX);
  };

  const handleTouchMove = (event) => {
    updatePosition(event.touches[0].clientX);
  };

  return (
    <section className="before-after" id="before-after">

      <div className="before-after-container">

        {/* Header */}
        <div className="before-after-header">

          <div>
            <span className="before-after-eyebrow">
              Real Results
            </span>

            <h2>
              See the
              <br />
              <em>difference.</em>
            </h2>
          </div>

          <p>
            Every result is personal. Explore a selection of
            transformations achieved through precision,
            experience, and thoughtful treatment planning.
          </p>

        </div>

        {/* Comparison */}
        <div
          className={`comparison ${
            isDragging ? "is-dragging" : ""
          }`}
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onMouseUp={() => setIsDragging(false)}
          onMouseLeave={() => setIsDragging(false)}
          onTouchMove={handleTouchMove}
          onTouchEnd={() => setIsDragging(false)}
        >

          {/* AFTER */}
          <div className="comparison-after">
            <img
              src="/images/after.jpg"
              alt="After treatment result"
            />

            <span className="comparison-label after-label">
              After
            </span>
          </div>

          {/* BEFORE */}
          <div
            className="comparison-before"
            style={{
              width: `${position}%`,
            }}
          >
            <img
              src="/images/before.jpg"
              alt="Before treatment result"
            />

            <span className="comparison-label before-label">
              Before
            </span>
          </div>

          {/* HANDLE */}
          <button
            className="comparison-handle"
            style={{
              left: `${position}%`,
            }}
            onMouseDown={() => setIsDragging(true)}
            onTouchStart={() => setIsDragging(true)}
            aria-label="Drag to compare before and after"
          >
            <span></span>
            <span className="handle-arrow left">‹</span>
            <span className="handle-arrow right">›</span>
          </button>

        </div>

        {/* Bottom */}
        <div className="before-after-bottom">

          <span>
            Before
          </span>

          <div className="before-after-line"></div>

          <span>
            After
          </span>

        </div>

      </div>

    </section>
  );
};

export default BeforeAfter;