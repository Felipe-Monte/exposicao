'use client';

import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-800 selection:bg-amber-100 selection:text-amber-900 font-sans antialiased">
      <main className="max-w-4xl mx-auto px-6 py-12 md:py-20">
        <article className="relative">
          {/* Header info */}
          <div className="text-center max-w-full mx-auto mb-6">
            <h1 className="font-serif text-[25px] sm:text-4xl md:text-5xl font-bold tracking-tight text-stone-900 leading-tight mb-6">
              A Beleza de Caminhar Juntos: O Poder da Comunidade
            </h1>

            <p className="text-stone-600 text-lg leading-relaxed mb-6 font-serif italic">
              Em um mundo cada vez mais conectado por telas, mas distante em
              presença, redescobrir o valor de caminhar em comunhão real é um
              sopro de vida para a alma.
            </p>
          </div>

          {/* Hero Cover Image Container */}
          <div className="relative rounded-2xl md:rounded-3xl overflow-hidden shadow-xl shadow-stone-200 border border-stone-200/50 mb-6 group">
            <div className="absolute inset-0 bg-linear-to-t from-stone-900/40 via-transparent to-transparent opacity-60 z-10 pointer-events-none" />
            <img
              src="/artigo_comunidade.png"
              alt="Ilustração de uma capela serena sob o amanhecer dourado"
              className="w-full h-[320px] sm:h-[450px] object-cover group-hover:scale-[1.02] transition-transform duration-700 ease-out"
            />
            <div className="absolute bottom-4 left-6 right-6 z-20 hidden sm:block">
              <span className="text-stone-100/90 text-xs italic bg-stone-900/60 backdrop-blur-xs px-3 py-1.5 rounded-md border border-stone-100/10">
                Ilustração exclusiva de nossa capela sob as colinas douradas.
              </span>
            </div>
          </div>

          {/* Article Body */}
          <div className="max-w-2xl mx-auto">
            <div className="font-serif text-lg text-stone-700 leading-relaxed space-y-6">
              <p className="first-letter:text-5xl first-letter:font-serif first-letter:font-bold first-letter:text-amber-600 first-letter:mr-3 first-letter:float-left first-letter:leading-[0.8] first-letter:mt-1">
                A verdadeira comunidade não é apenas um grupo de pessoas que se
                reúne sob o mesmo teto aos domingos ou em ocasiões formais. Ela
                representa um ecossistema de cuidado mútuo, onde as alegrias
                cotidianas são celebradas em conjunto e os fardos difíceis são
                compartilhados com empatia e amor prático.
              </p>

              <p>
                Quando nos abrimos para o outro, criamos pontes indestrutíveis.
                A fé, que muitas vezes parece um caminho solitário no silêncio
                do coração, ganha asas e cores quando compartilhada. É no
                diálogo sincero, no abraço fraterno e na oração em conjunto que
                experimentamos o verdadeiro significado de ser uma comunidade
                unida.
              </p>

              {/* Subheading */}
              <h2 className="font-serif text-2xl font-bold text-stone-900 my-5">
                O Sentido de Pertencimento
              </h2>

              <p>
                Não fomos feitos para o isolamento. Os tempos modernos nos
                oferecem uma ilusão de proximidade por meio de interações
                virtuais rápidas, mas a alma humana continua ansiando pelo
                toque, pela escuta ativa e pelo olhar nos olhos. Pertencer a uma
                comunidade ativa nos recorda que somos importantes, ouvidos e,
                acima de tudo, amados.
              </p>

              {/* Pull Quote */}
              <blockquote className="border-l-4 border-amber-500 pl-6 my-6 font-serif italic text-stone-900 text-xl sm:text-2xl leading-relaxed bg-amber-50/30 py-4 pr-4 rounded-r-xl">
                &ldquo;Porque, onde estiverem dois ou três reunidos em meu nome,
                aí estou eu no meio deles.&rdquo;
                <span className="block not-italic text-xs font-sans font-bold uppercase tracking-wider text-amber-800 mt-2">
                  Mateus 18:20
                </span>
              </blockquote>

              <p>
                Olhar para o futuro da nossa comunidade é enxergar um horizonte
                de esperança. Ao abrirmos este espaço digital, nosso propósito é
                estender os laços da nossa capela física para a vida cotidiana
                de cada um de vocês. Que este seja um refúgio de inspiração,
                aprendizado e profunda conexão.
              </p>
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
