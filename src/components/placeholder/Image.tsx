
interface ImageProps {
  alt: string;
  className?: string;
}

const Image = ({ alt, className }: ImageProps) => {
  return (
    <div className={`bg-gray-200 flex items-center justify-center ${className || 'h-64'}`}>
      <span className="text-gray-400 text-sm">{alt || 'Image placeholder'}</span>
    </div>
  );
};

export default Image;
