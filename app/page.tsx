'use client';

import { Check, ChevronLeft, ChevronRight, LogOut } from 'lucide-react';
import { useState } from 'react';
import ButtonLogout from './components/ButtonLogout';
// import Footer from './components/Footer';
import ReadingProgressBar from './components/ReadingProgressBar';
import WelcomeModal from './components/WelcomeModal';
import Part1 from './components/sections/Part1';
import Part2 from './components/sections/Part2';
import Part3 from './components/sections/Part3';
import Part4 from './components/sections/Part4';
import Part5 from './components/sections/Part5';
import Section1 from './components/sections/Section1';
import Section2 from './components/sections/Section2';
import Section3 from './components/sections/Section3';
import Section4 from './components/sections/Section4';

export default function Home() {
  const [showSection, setShowSection] = useState(false);
  const [currentSection, setCurrentSection] = useState(1);
  const [exposition, setExposition] = useState<1 | 2>(1);
  const [showWelcome, setShowWelcome] = useState(true);

  const handleRevealExposition1 = () => {
    setExposition(1);
    setShowSection(true);
    setCurrentSection(1);
    window.scrollTo(0, 0);
  };

  const handleRevealExposition2 = () => {
    setExposition(2);
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
      <WelcomeModal
        isOpen={showWelcome}
        onClose={() => setShowWelcome(false)}
      />
      <main
        className={`max-w-4xl w-full mx-auto px-4 flex-1 flex flex-col items-center justify-center ${
          !showSection ? 'h-full py-0' : 'py-12 md:py-20'
        }`}
      >
        {!showSection ? (
          <div className="text-center max-w-2xl mx-auto flex flex-col items-center justify-center gap-6 px-4">
            <div className="space-y-3">
              <span className="block text-xs uppercase tracking-widest text-[#66AFDA] font-semibold font-sans">
                Exposição Virtual
              </span>
              <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-stone-900 leading-tight">
                Tenda da memória
              </h1>
            </div>

            <div className="relative w-fit rounded-2xl overflow-hidden mb-0">
              <video
                src="/images/videos/video1.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-fit max-h-[320px] sm:max-h-[450px] object-cover"
                preload="metadata"
              />
            </div>

            <button
              onClick={handleRevealExposition1}
              className="w-full sm:w-auto px-8 py-4 bg-[#66AFDA] hover:bg-[#529ec9] text-white font-medium rounded-2xl cursor-pointer flex items-center justify-center gap-3"
            >
              <div className="flex flex-col items-center justify-center">
                <span>Entrar na exposição de</span>
                <span>São José de Anchieta</span>
              </div>
            </button>
            <button
              onClick={handleRevealExposition2}
              className="w-full sm:w-auto px-8 py-4 bg-[#66AFDA] hover:bg-[#529ec9] text-white font-medium rounded-2xl cursor-pointer flex items-center justify-center gap-3"
            >
              <div className="flex flex-col items-center justify-center">
                <span>Entrar na exposição da</span>
                <span>História da paróquia</span>
              </div>
            </button>
          </div>
        ) : (
          <div className="w-full flex flex-col items-center gap-6 relative">
            <ReadingProgressBar />
            <ButtonLogout
              onClick={() => {
                setShowSection(false);
                window.scrollTo(0, 0);
              }}
            />

            {/* Cabeçalho do Stepper */}
            <div className="w-full flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
              <div className="flex flex-col gap-1 text-center md:text-left">
                <span className="text-xs uppercase tracking-widest text-[#66AFDA] font-semibold font-sans">
                  Exposição Virtual
                </span>
                <h3 className="font-serif text-lg font-bold text-stone-900">
                  {exposition === 1 && currentSection === 1 && (
                    <>
                      Origens, Vocação e Chegada
                      <p className="font-normal text-stone-500">1534 - 1553</p>
                    </>
                  )}
                  {exposition === 1 && currentSection === 2 && (
                    <>
                      Obras
                      <p className="font-normal text-stone-500">1554 - 1563</p>
                    </>
                  )}
                  {exposition === 1 && currentSection === 3 && (
                    <>
                      Continuação Obras
                      <p className="font-normal text-stone-500">1564 - 1597</p>
                    </>
                  )}
                  {exposition === 1 &&
                    currentSection === 4 &&
                    'Legado, milagres, poemas e oração'}
                  {exposition === 2 && currentSection === 1 && (
                    <>
                      Fundação
                      <p className="font-normal text-stone-500">1978 - 1999</p>
                    </>
                  )}
                  {exposition === 2 && currentSection === 2 && (
                    <>
                      Consolidação
                      <p className="font-normal text-stone-500">2000 - 2020</p>
                    </>
                  )}
                  {exposition === 2 && currentSection === 3 && (
                    <>
                      Protagonismo
                      <p className="font-normal text-stone-500">2021 - 2026</p>
                    </>
                  )}
                  {exposition === 2 && currentSection === 4 && (
                    <>
                      Pastorais, Movimentos e Serviços
                    </>
                  )}
                  {exposition === 2 && currentSection === 5 && (
                    <>
                      Parte 5
                    </>
                  )}
                </h3>
              </div>

              {/* Progress Steps */}
              <div className="flex items-center gap-2 bg-stone-200/50 backdrop-blur-sm px-3 py-1.5 rounded-full border border-stone-200/30">
                {(exposition === 1 ? [1, 2, 3, 4] : [1, 2, 3, 4, 5]).map((num) => (
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
              {exposition === 1 && currentSection === 1 && <Section1 />}
              {exposition === 1 && currentSection === 2 && <Section2 />}
              {exposition === 1 && currentSection === 3 && <Section3 />}
              {exposition === 1 && currentSection === 4 && <Section4 />}
              {exposition === 2 && currentSection === 1 && <Part1 />}
              {exposition === 2 && currentSection === 2 && <Part2 />}
              {exposition === 2 && currentSection === 3 && <Part3 />}
              {exposition === 2 && currentSection === 4 && <Part4 />}
              {exposition === 2 && currentSection === 5 && <Part5 />}
            </article>

            {/* Painel de Navegação de Rodapé */}
            <div className="w-full border-t border-stone-200/60 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
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

              {currentSection < (exposition === 1 ? 4 : 5) ? (
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
