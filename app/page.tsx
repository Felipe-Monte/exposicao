'use client';

import { Check, ChevronLeft, ChevronRight, LogOut } from 'lucide-react';
import { useState } from 'react';
// import Footer from './components/Footer';
import Section1 from './components/sections/Section1';
import Section2 from './components/sections/Section2';
import Section3 from './components/sections/Section3';
import Section4 from './components/sections/Section4';

export default function Home() {
  const [showSection, setShowSection] = useState(false);
  const [currentSection, setCurrentSection] = useState(1);

  const handleReveal = () => {
    setShowSection(true);
    setCurrentSection(1);
    window.scrollTo(0, 0);
  };

  const changeSection = (num: number) => {
    setCurrentSection(num);
    window.scrollTo(0, 0);
  };

  return (
    <div
      className={`bg-stone-50 text-stone-800 font-sans antialiased flex flex-col ${
        !showSection ? 'h-dvh overflow-hidden' : 'min-h-screen justify-between'
      }`}
    >
      <main
        className={`max-w-4xl w-full mx-auto px-4 flex-1 flex flex-col items-center justify-center ${
          !showSection ? 'h-full py-0' : 'py-12 md:py-20'
        }`}
      >
        {!showSection ? (
          <div className="text-center max-w-2xl mx-auto flex flex-col items-center justify-center gap-8 px-4">
            <div className="space-y-4">
              <span className="text-xs uppercase tracking-widest text-[#66AFDA] font-semibold font-sans">
                Exposição Virtual
              </span>
              <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-stone-900 leading-tight">
                460 anos da Ordenação Presbiteral de São José de Anchieta
              </h1>
              <p className="font-serif text-lg sm:text-xl text-stone-600 italic">
                “O Padre do Brasil”
              </p>
            </div>

            <button
              onClick={handleReveal}
              className="w-full sm:w-auto px-8 py-4 bg-[#66AFDA] hover:bg-[#529ec9] text-white font-medium rounded-full cursor-pointer flex items-center justify-center gap-3"
            >
              <span>Entrar na Exposição</span>
            </button>
          </div>
        ) : (
          <div className="w-full flex flex-col items-center gap-6">
            {/* Cabeçalho do Stepper */}
            <div className="w-full flex flex-col md:flex-row justify-between items-center gap-4 border-b border-stone-200/60 pb-6 mb-2 text-sm">
              <div className="flex flex-col gap-1 text-center md:text-left">
                <span className="text-xs uppercase tracking-widest text-[#66AFDA] font-semibold font-sans">
                  Exposição Virtual
                </span>
                <h3 className="font-serif text-lg font-bold text-stone-900">
                  {currentSection === 1 &&
                    'Seção I: Origens, Vocação e Chegada'}
                  {currentSection === 2 && 'Seção II: A Fundação de São Paulo'}
                  {currentSection === 3 && 'Seção III: O Apóstolo da Paz'}
                  {currentSection === 4 && 'Seção IV: O Legado e Milagres'}
                </h3>
              </div>

              {/* Progress Steps */}
              <div className="flex items-center gap-2 bg-stone-200/50 backdrop-blur-sm px-3 py-1.5 rounded-full border border-stone-200/30">
                {[1, 2, 3, 4].map((num) => (
                  <button
                    key={num}
                    onClick={() => changeSection(num)}
                    className={`px-3 py-1 rounded-full text-xs font-semibold font-sans transition-all duration-300 cursor-pointer ${
                      currentSection === num
                        ? 'bg-[#66AFDA] text-white shadow-sm'
                        : 'text-stone-600 hover:text-stone-900 hover:bg-stone-200/60'
                    }`}
                  >
                    {num}
                  </button>
                ))}
              </div>
            </div>

            <article
              id="secao-container"
              className="relative w-full flex flex-col items-center justify-center"
            >
              {currentSection === 1 && <Section1 />}
              {currentSection === 2 && <Section2 />}
              {currentSection === 3 && <Section3 />}
              {currentSection === 4 && <Section4 />}
            </article>

            {/* Painel de Navegação de Rodapé */}
            <div className="w-full border-t border-stone-200/60 pt-8 mt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
              {currentSection === 1 ? (
                <button
                  onClick={() => {
                    setShowSection(false);
                    window.scrollTo(0, 0);
                  }}
                  className="w-full sm:w-auto px-6 py-2.5 border border-stone-300 text-stone-600 font-medium rounded-full cursor-pointer flex items-center justify-center gap-2"
                >
                  <LogOut className="w-4 h-4" />
                  <span>Sair da Exposição</span>
                </button>
              ) : (
                <button
                  onClick={() => changeSection(currentSection - 1)}
                  className="w-full sm:w-auto px-6 py-2.5 border border-stone-300 text-stone-600 font-medium rounded-full cursor-pointer flex items-center justify-center gap-2"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>Seção Anterior</span>
                </button>
              )}

              {currentSection < 4 ? (
                <button
                  onClick={() => changeSection(currentSection + 1)}
                  className="w-full sm:w-auto px-6 py-2.5 bg-[#66AFDA] text-white font-medium rounded-full shadow-lg shadow-[#66AFDA]/20 cursor-pointer flex items-center justify-center gap-2"
                >
                  <span>Próxima Seção</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  onClick={() => {
                    setShowSection(false);
                    setCurrentSection(1);
                    window.scrollTo(0, 0);
                  }}
                  className="w-full sm:w-auto px-8 py-2.5 bg-emerald-600 text-white font-medium rounded-full shadow-lg shadow-emerald-600/15 cursor-pointer flex items-center justify-center gap-2"
                >
                  <Check className="w-4 h-4" />
                  <span>Finalizar Visita</span>
                </button>
              )}
            </div>
          </div>
        )}
      </main>

      {/* <Footer /> */}
    </div>
  );
}
