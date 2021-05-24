import { useRef, useState } from 'react';
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

  function handleLoadedEvent() {
    setImageLoading(false);
  }

  return (
    <>
      {imageLoading && <RippleLoader width={width} height={height} />}

      <img
        ref={imageRef}
        style={{
          height,
          width,
        }}
        src={src}
        alt={alt}
        className={`image-load ${!imageLoading && 'loaded'}`}
        onLoad={handleLoadedEvent}
      />
    </>
  );
}
