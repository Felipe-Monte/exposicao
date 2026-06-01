'use client';

import Image from 'next/image';
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CarouselImage {
  src: string;
  alt: string;
}

interface ImageCarouselProps {
  images: CarouselImage[];
  heightClass?: string;
  className?: string;
}

export default function ImageCarousel({
  images,
  heightClass = 'h-[200px] sm:h-[450px] md:h-[480px]',
  className = '',
}: ImageCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  if (!images || images.length === 0) return null;

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div
      className={`relative w-full ${heightClass} rounded-2xl md:rounded-3xl overflow-hidden border border-stone-200/50 bg-stone-100/40 shadow-xl shadow-stone-200/50 group transition-all duration-300 ${className}`}
    >
      {/* Imagens */}
      {images.map((photo, idx) => (
        <div
          key={photo.src}
          className={`absolute inset-0 transition-all duration-700 ease-in-out ${
            idx === activeIndex
              ? 'opacity-100 translate-x-0 scale-100 z-10'
              : idx < activeIndex
                ? 'opacity-0 -translate-x-8 scale-95 z-0 pointer-events-none'
                : 'opacity-0 translate-x-8 scale-95 z-0 pointer-events-none'
          }`}
        >
          <div className="relative w-full h-full">
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes="(max-w-768px) 100vw, 800px"
              priority={idx === 0}
              className="object-contain"
            />
          </div>
        </div>
      ))}

      {/* Botão Anterior */}
      {images.length > 1 && (
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 sm:p-2.5 rounded-full bg-white/80 hover:bg-white backdrop-blur-sm border border-stone-200/40 shadow-md text-stone-800 transition-all duration-300 md:opacity-0 md:group-hover:opacity-100 md:-translate-x-2 md:group-hover:translate-x-0 focus:outline-none focus:ring-2 focus:ring-amber-500/50 cursor-pointer"
          aria-label="Imagem anterior"
        >
          <ChevronLeft className="w-5 h-5 text-stone-800 stroke-[2.5]" />
        </button>
      )}

      {/* Botão Próximo */}
      {images.length > 1 && (
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 sm:p-2.5 rounded-full bg-white/80 hover:bg-white backdrop-blur-sm border border-stone-200/40 shadow-md text-stone-800 transition-all duration-300 md:opacity-0 md:group-hover:opacity-100 md:translate-x-2 md:group-hover:translate-x-0 focus:outline-none focus:ring-2 focus:ring-amber-500/50 cursor-pointer"
          aria-label="Próxima imagem"
        >
          <ChevronRight className="w-5 h-5 text-stone-800 stroke-[2.5]" />
        </button>
      )}

      {/* Indicadores (Dots) */}
      {images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                idx === activeIndex
                  ? 'w-6 bg-stone-800'
                  : 'w-2 bg-stone-800/45 hover:bg-stone-800/70'
              }`}
              aria-label={`Ir para imagem ${idx + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
