'use client';

import { useState } from 'react';
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
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div
      className={`relative rounded-2xl md:rounded-3xl overflow-hidden border border-stone-200/50 group bg-stone-100/40 ${
        hasShadow ? 'shadow-xl shadow-stone-200' : ''
      } ${marginClass}`}
    >
      {/* Loading Skeleton & Spinner */}
      {isLoading && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-stone-100/60 backdrop-blur-xs animate-pulse z-20">
          <div className="flex flex-col items-center gap-2">
            <div className="w-8 h-8 border-2 border-stone-200 border-t-[#66AFDA] rounded-full animate-spin" />
            <span className="text-xs text-stone-400 font-sans tracking-wide">
              Carregando...
            </span>
          </div>
        </div>
      )}

      {hasOverlay && !isLoading && (
        <div className="absolute inset-0 bg-linear-to-t from-stone-900/40 via-transparent to-transparent opacity-60 z-10 pointer-events-none" />
      )}
      <Image
        src={src}
        alt={alt}
        width={800}
        height={450}
        priority={priority}
        className={`${imageClass} transition-all duration-300 ease-out ${
          isLoading ? 'opacity-0 scale-98 blur-xs' : 'opacity-100 scale-100 blur-0'
        }`}
        onLoad={() => setIsLoading(false)}
      />
    </div>
  );
}

