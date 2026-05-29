'use client';

import Footer from './components/Footer';
import Section1 from './components/sections/Section1';

export default function Home() {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-800 selection:bg-amber-100 selection:text-amber-900 font-sans antialiased">
      <main className="max-w-4xl mx-auto px-4 py-12 md:py-20">
        <article className="relative flex flex-col items-center justify-center">
          <Section1 />
        </article>
      </main>

      <Footer />
    </div>
  );
}
