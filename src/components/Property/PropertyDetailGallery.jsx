import { useState } from "react";

function PropertyDetailGallery({ images = [], title = "Property" }) {
  const [active, setActive] = useState(0);
  if (!images.length) return null;
  const index = Math.min(active, images.length - 1);

  return (
    <div className="property-gallery">
      <img src={images[index]} alt={`${title} photo ${index + 1}`} />
      {images.length > 1 && (
        <div className="property-gallery__thumbs" role="tablist" aria-label="Property photos">
          {images.map((src, photoIndex) => (
            <button
              key={`${src}-${photoIndex}`}
              type="button"
              role="tab"
              aria-selected={photoIndex === index}
              aria-label={`Show photo ${photoIndex + 1}`}
              onClick={() => setActive(photoIndex)}
            >
              <img src={src} alt="" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default PropertyDetailGallery;
