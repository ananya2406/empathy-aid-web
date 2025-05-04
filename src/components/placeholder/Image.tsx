
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
      <div className={`bg-gray-200 flex items-center justify-center ${className || 'h-64'}`}>
        <span className="text-gray-400 text-sm">{alt || 'Image placeholder'}</span>
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
