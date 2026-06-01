import Image from 'next/image';

interface ImageFrameProps {
  src: string;
  alt: string;
  imageClass?: string;
  hasShadow?: boolean;
  hasOverlay?: boolean;
  marginClass?: string;
  priority?: boolean;
}

export default function ImageFrame({
  src,
  alt,
  imageClass = 'w-full h-[320px] sm:h-[450px] object-cover',
  hasShadow = false,
  hasOverlay = false,
  marginClass = 'mb-6',
  priority = false,
}: ImageFrameProps) {
  return (
    <div
      className={`relative rounded-2xl md:rounded-3xl overflow-hidden border border-stone-200/50 group ${
        hasShadow ? 'shadow-xl shadow-stone-200' : ''
      } ${marginClass}`}
    >
      {hasOverlay && (
        <div className="absolute inset-0 bg-linear-to-t from-stone-900/40 via-transparent to-transparent opacity-60 z-10 pointer-events-none" />
      )}
      <Image
        src={src}
        alt={alt}
        width={800}
        height={450}
        priority={priority}
        className={imageClass}
      />
    </div>
  );
}
