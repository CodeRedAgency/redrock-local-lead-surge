import { ImgHTMLAttributes } from 'react';

interface OptimizedImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  width: number;
  height: number;
  priority?: boolean;
  className?: string;
}

/**
 * OptimizedImage component that provides:
 * - Explicit width and height to prevent layout shift
 * - Modern image format support (WebP with fallback)
 * - Lazy loading for non-priority images
 * - Proper aspect ratio handling
 */
export const OptimizedImage = ({
  src,
  alt,
  width,
  height,
  priority = false,
  className = '',
  ...rest
}: OptimizedImageProps) => {
  // Convert image path to WebP if available
  const webpSrc = src.replace(/\.(jpg|jpeg|png)$/i, '.webp');
  const hasWebp = src.match(/\.(jpg|jpeg|png)$/i);

  return (
    <picture>
      {hasWebp && (
        <source
          srcSet={webpSrc}
          type="image/webp"
        />
      )}
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? 'eager' : 'lazy'}
        decoding={priority ? 'sync' : 'async'}
        fetchPriority={priority ? 'high' : 'auto'}
        className={className}
        style={{
          aspectRatio: `${width} / ${height}`,
          maxWidth: '100%',
          height: 'auto'
        }}
        {...rest}
      />
    </picture>
  );
};

