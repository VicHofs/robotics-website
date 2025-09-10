import { useEffect, useRef, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { CloseButton, LightboxContent, LightboxOverlay, Masonry, Section, Item, NavButton } from "./styles";
import { ChevronLeft, ChevronRight } from "lucide-react";

type GalleryImage = { src: string; caption: string };
type GalleryProps = { images: GalleryImage[]; title?: string; showTitle?: boolean };

const Gallery: React.FC<GalleryProps> = ({ images, title, showTitle }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const activeItem = typeof activeIndex === "number" ? images[activeIndex] : null;
  const touchStart = useRef<{ x: number; y: number } | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    const t = e.touches[0];
    touchStart.current = { x: t.clientX, y: t.clientY };
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!touchStart.current) return;
    const t = e.changedTouches[0];
    const dx = t.clientX - touchStart.current.x;
    const dy = t.clientY - touchStart.current.y;
    touchStart.current = null;
    const absX = Math.abs(dx);
    const absY = Math.abs(dy);
    const threshold = 40;
    if (absX > absY && absX > threshold) {
      if (dx < 0) {
        setActiveIndex((i) => (i === null ? 0 : (i + 1) % images.length));
      } else {
        setActiveIndex((i) => (i === null ? 0 : (i - 1 + images.length) % images.length));
      }
    }
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveIndex(null);
      if (e.key === "ArrowRight" && images.length) {
        setActiveIndex((i) =>
          i === null ? 0 : (i + 1 + images.length) % images.length,
        );
      }
      if (e.key === "ArrowLeft" && images.length) {
        setActiveIndex((i) =>
          i === null ? 0 : (i - 1 + images.length) % images.length,
        );
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [images.length]);

  return (
    <Section>
      {showTitle && title ? <h2>{title}</h2> : null}
      <Masonry>
        {images.map(({ src, caption }, i) => (
          <Item key={src}>
            <button onClick={() => setActiveIndex(i)} aria-label="Open image">
              <img src={src} alt={caption} loading="lazy" />
            </button>
          </Item>
        ))}
      </Masonry>

      <AnimatePresence>
        {activeItem && (
          <LightboxOverlay
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveIndex(null)}
          >
            <NavButton
              className="prev"
              onClick={(e) => {
                e.stopPropagation();
                setActiveIndex((i) =>
                  i === null ? 0 : (i - 1 + images.length) % images.length,
                );
              }}
              aria-label="Previous image"
            >
              <ChevronLeft size={20} />
            </NavButton>
            <NavButton
              className="next"
              onClick={(e) => {
                e.stopPropagation();
                setActiveIndex((i) => (i === null ? 0 : (i + 1) % images.length));
              }}
              aria-label="Next image"
            >
              <ChevronRight size={20} />
            </NavButton>
            <LightboxContent
              initial={{ scale: 0.98, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.98, opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              <figure>
                <img src={activeItem.src} alt={activeItem.caption} />
                <figcaption>{activeItem.caption}</figcaption>
              </figure>
              <CloseButton onClick={() => setActiveIndex(null)} aria-label="Close">
                Close
              </CloseButton>
            </LightboxContent>
          </LightboxOverlay>
        )}
      </AnimatePresence>
    </Section>
  );
};

export default Gallery;
