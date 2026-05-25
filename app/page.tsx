export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col justify-between overflow-hidden px-6 py-12 md:py-20 text-center">
      {/* Background Decorative Ethereal Glows */}
      <div className="absolute top-[-20%] left-[-20%] w-[60%] h-[60%] rounded-full bg-amber-100/60 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-20%] w-[60%] h-[60%] rounded-full bg-indigo-50/40 blur-[130px] pointer-events-none" />

      {/* Top Margin Spacer */}
      <div className="h-10" />

      {/* Main Content */}
      <section className="relative z-10 max-w-xl mx-auto my-auto flex flex-col items-center">
        {/* Modern Emblem */}
        <div className="w-16 h-16 rounded-2xl bg-linear-to-tr from-amber-500/10 to-indigo-500/10 border border-amber-500/25 flex items-center justify-center mb-8 shadow-md shadow-amber-500/5 transition-transform duration-500 hover:scale-105">
          <svg
            className="w-8 h-8 text-amber-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M12 3v18M5 9h14"
            />
          </svg>
        </div>

        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-stone-900 leading-tight mb-4">
          Nossa Comunidade
        </h1>

        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-ping" />
          <span className="text-xs font-semibold tracking-wider text-amber-800 uppercase">
            Conteúdo em breve
          </span>
        </div>

        <p className="text-stone-600 text-sm sm:text-base md:text-lg leading-relaxed max-w-md">
          Estamos preparando um novo conteúdo digital com muito carinho para
          conectar nossa igreja. Em breve, novidades estarão disponíveis aqui.
          Agradecemos suas orações.
        </p>
      </section>

      {/* Footer / Scripture */}
      <footer className="relative z-10 w-full max-w-md mx-auto flex flex-col items-center gap-4 pt-6 border-t border-stone-200/60">
        <blockquote className="text-center font-serif italic text-stone-600/80 text-xs sm:text-sm">
          &ldquo;Porque, onde estiverem dois ou três reunidos em meu nome, aí
          estou eu no meio deles.&rdquo;
          <span className="block not-italic text-[10px] font-sans font-semibold uppercase tracking-widest text-stone-400 mt-1.5">
            Mateus 18:20
          </span>
        </blockquote>
      </footer>
    </main>
  );
}
