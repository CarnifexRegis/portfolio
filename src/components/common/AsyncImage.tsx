import { useState } from 'react';

interface AsyncImageProps {
  src: string;
  alt: string;
  className?: string;
  aspectRatio?: string;
}

export const AsyncImage = ({ src, alt, className = '', aspectRatio = 'aspect-video' }: AsyncImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={`relative ${aspectRatio} overflow-hidden bg-bg-secondary ${className}`}>
      {/* Shimmer effect while loading */}
      {!isLoaded && (
        <div className="absolute inset-0 shimmer opacity-50 transition-opacity duration-300" />
      )}

      {/* Actual Image */}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={() => setIsLoaded(true)}
        className={`w-full h-full object-cover transition-opacity duration-500 ease-in-out ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
      />
      
      {/* Bottom Gradient Fade - shared style */}
      <div className={`absolute inset-0 bg-gradient-to-t from-bg/80 via-transparent to-transparent opacity-60 transition-opacity duration-500 ${
        isLoaded ? 'opacity-60' : 'opacity-0'
      }`} />
    </div>
  );
};
