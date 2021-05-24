import { useEffect, useRef, useState } from 'react';
import { RippleLoader } from './Loaders/Ripple/RippleLoader';

interface ImageProps {
  src: string;
  alt: string;
  width: string;
  height: string;
}

export function Image({ alt, src, width, height }: ImageProps) {
  const [imageLoading, setImageLoading] = useState<boolean>(true);
  const imageRef = useRef<HTMLImageElement>(null);
  const isVisibleElementRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  function handleLoadedEvent() {
    setImageLoading(false);
  }

  useEffect(() => {
    new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      {
        threshold: 0.7,
      }
    ).observe(isVisibleElementRef.current as Element);
  }, []);

  return (
    <div ref={isVisibleElementRef}>
      {imageLoading && <RippleLoader width={width} height={height} />}

      <img
        ref={imageRef}
        style={{
          height,
          width,
        }}
        src={isVisible ? src : ''}
        alt={alt}
        className={`image ${!imageLoading && 'loaded'}`}
        onLoad={handleLoadedEvent}
      />
    </div>
  );
}
