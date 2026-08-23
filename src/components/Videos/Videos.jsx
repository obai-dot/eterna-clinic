import "./Videos.css";

const Videos = () => {
  return (
    <section className="videos" id="videos">
      <div className="videos-container">

        {/* Header */}
        <div className="videos-header">

          <div>
            <span className="videos-eyebrow">
              The Eterna Experience
            </span>

            <h2>
              See beauty
              <br />
              <em>in motion.</em>
            </h2>
          </div>

          <p>
            Step inside Eterna and discover a space where
            precision, care, and modern aesthetics come together.
          </p>

        </div>

        {/* Main Video */}
        <div className="video-feature">

          <video
            className="video-player"
            autoPlay
            muted
            loop
            playsInline
            controls
          >
            <source
              src="/videos/eterna-main.mp4"
              type="video/mp4"
            />

            Your browser does not support the video tag.
          </video>

          <div className="video-overlay">

            <span>
              Eterna Clinic
            </span>

            <span>
              01 / 01
            </span>

          </div>

        </div>

        {/* Bottom */}
        <div className="videos-bottom">

          <span>
            Precision
          </span>

          <div className="videos-line"></div>

          <span>
            Beauty
          </span>

          <div className="videos-line"></div>

          <span>
            Confidence
          </span>

        </div>

      </div>
    </section>
  );
};

export default Videos;