import { useState } from "react";
import { Button } from "shared/ui";
import "./ProductGallery.css";

export function ProductGallery({ images = [], alt = "" }) {
  const [index, setIndex] = useState(0);
  const safeImages = images.length > 0 ? images : [];
  const current = safeImages[index] ?? null;

  if (!safeImages.length) {
    return <div className="product-gallery__empty">Нет изображений</div>;
  }

  const goPrev = () => {
    setIndex((prev) => (prev - 1 + safeImages.length) % safeImages.length);
  };

  const goNext = () => {
    setIndex((prev) => (prev + 1) % safeImages.length);
  };

  return (
    <div className="product-gallery">
      <img src={current} alt={alt} className="product-gallery__image" />
      {safeImages.length > 1 ? (
        <div className="product-gallery__controls">
          <Button variant="ghost" onClick={goPrev} aria-label="Предыдущее фото">
            ←
          </Button>
          <span className="product-gallery__counter">
            {index + 1} / {safeImages.length}
          </span>
          <Button variant="ghost" onClick={goNext} aria-label="Следующее фото">
            →
          </Button>
        </div>
      ) : null}
    </div>
  );
}
