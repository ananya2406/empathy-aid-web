
import { useState } from 'react';

interface ImageProps {
  alt: string;
  className?: string;
  src?: string;
}

const Image = ({ alt, className, src }: ImageProps) => {
  const [hasError, setHasError] = useState(false);

  const handleImageError = () => {
    setHasError(true);
  };

  if (!src || hasError) {
    return (
      <div className={`bg-relief-gray-light/40 flex items-center justify-center ${className || 'h-64'}`}>
        <span className="text-relief-secondary text-sm">{alt || 'Image placeholder'}</span>
      </div>
    );
  }

  return (
    <img 
      src={src} 
      alt={alt} 
      className={`object-cover w-full h-full ${className || ''}`}
      onError={handleImageError}
    />
  );
};

export default Image;
