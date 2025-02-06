'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

interface CarouselProps {
  images: string[];
  interval?: number;
}

export default function Carousel({ images, interval = 5000 }: CarouselProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [images.length, interval]);

  return (
    <div className="relative w-full h-full overflow-hidden rounded-lg">
      {images.map((src, index) => (
        <div
          key={src}
          className={`absolute inset-0 transition-opacity duration-1000 ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}`}
          style={{ minHeight: '300px' }}
        >
          <Image
            src={src}
            alt={`Carousel image ${index + 1}`}
            fill
            className="object-cover"
            priority={index === 0}
            sizes="(max-width: 768px) 100vw, 33vw"
            quality={75}
            onError={(e) => console.error('Error loading image:', src)}
          />
        </div>
      ))}
    </div>
  );
}