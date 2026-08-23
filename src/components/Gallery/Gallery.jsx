import { useState } from "react";
import "./Gallery.css";

const galleryItems = [
  {
    type: "image",
    src: "/images/gallery-1.jpg",
    alt: "Eterna Clinic interior",
    size: "large",
  },
  {
    type: "image",
    src: "/images/gallery-2.jpg",
    alt: "Eterna dental treatment",
    size: "small",
  },
  {
    type: "video",
    src: "/videos/gallery-video-1.mp4",
    poster: "/images/gallery-video-poster.jpg",
    alt: "Eterna Clinic experience",
    size: "small",
  },
  {
    type: "image",
    src: "/images/gallery-3.jpg",
    alt: "Eterna aesthetic treatment",
    size: "medium",
  },
  {
    type: "image",
    src: "/images/gallery-4.jpg",
    alt: "Eterna Clinic details",
    size: "medium",
  },
  {
    type: "image",
    src: "/images/gallery-5.jpg",
    alt: "Eterna skincare treatment",
    size: "large",
  },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="gallery" id="gallery">
      <div className="gallery-container">

        {/* Header */}
        <div className="gallery-header">

          <div>
            <span className="gallery-eyebrow">
              Inside Eterna
            </span>

            <h2>
              A glimpse into
              <br />
              <em>the experience.</em>
            </h2>
          </div>

          <p>
            Step inside Eterna and discover an environment where
            thoughtful design, advanced technology, and personalized
            care come together.
          </p>

        </div>

        {/* Gallery */}
        <div className="gallery-grid">

          {galleryItems.map((item, index) => (
            <div
              className={`gallery-item ${item.size}`}
              key={index}
            >

              {item.type === "image" ? (
                <button
                  className="gallery-media"
                  onClick={() => setSelectedImage(item.src)}
                  aria-label={`Open ${item.alt}`}
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                  />

                  <span className="gallery-expand">
                    ↗
                  </span>
                </button>
              ) : (
                <div className="gallery-media gallery-video">

                  <video
                    src={item.src}
                    poster={item.poster}
                    muted
                    loop
                    autoPlay
                    playsInline
                  />

                  <div className="gallery-video-overlay">
                    <span className="gallery-play">
                      ▶
                    </span>

                    <span>
                      Eterna Experience
                    </span>
                  </div>

                </div>
              )}

            </div>
          ))}

        </div>

      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="gallery-lightbox"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="gallery-close"
            onClick={() => setSelectedImage(null)}
            aria-label="Close image"
          >
            ×
          </button>

          <img
            src={selectedImage}
            alt="Eterna Clinic"
          />
        </div>
      )}

    </section>
  );
};

export default Gallery;