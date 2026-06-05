'use client';

import { useEffect, useState } from 'react';

export default function ReadingProgressBar() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(progress);
      } else {
        setScrollProgress(0);
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Initial calculation in case the page is loaded/reloaded already scrolled
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1.5 bg-transparent z-50 pointer-events-none">
      <div
        className="h-full bg-[#66AFDA] transition-all duration-100 ease-out shadow-[0_1px_10px_rgba(102,175,218,0.5)]"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  );
}
