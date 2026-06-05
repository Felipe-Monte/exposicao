'use client';

import ImageFrame from './ImageFrame';

interface WelcomeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function WelcomeModal({ isOpen, onClose }: WelcomeModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-stone-950/60 backdrop-blur-md z-50 flex items-center justify-center p-4 transition-all duration-300 animate-in fade-in">
      <div
        className="bg-white p-8 md:p-10 rounded-3xl shadow-2xl max-w-md w-full border border-stone-200/80 flex flex-col items-center text-center gap-4 relative overflow-hidden animate-in zoom-in-95 duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Image */}
        <ImageFrame
          src="/images/foto-22.webp"
          alt="Anchieta"
          imageClass="w-full h-[180px] object-cover"
          marginClass="w-full mb-0"
          hasShadow={false}
          priority
        />
        {/* Text Contents */}
        <div className="space-y-4">
          <div className="space-y-1.5">
            <span className="block text-xs uppercase tracking-widest text-[#66AFDA] font-semibold font-sans">
              Exposição Virtual
            </span>
            <h2 className="font-serif text-2xl font-bold tracking-tight text-stone-900 leading-snug">
              Seja bem-vindo ao Jubileu de 25 Anos PSJA
            </h2>
          </div>

          <div className=" text-stone-600 text-sm leading-relaxed">
            <p>
              Este acervo foi cedido pelo{' '}
              <strong className="text-stone-800 font-semibold">
                Santuário Nacional de São José de Anchieta
              </strong>
              , no estado do Espírito Santo. E seu conteúdo foi organizado pelo
              historiador{' '}
              <strong className="text-stone-800 font-semibold">
                Fabrício Noronha
              </strong>{' '}
              e sua equipe.
            </p>
            <p className="text-stone-500 font-medium italic pt-4 border-t border-stone-100">
              Na sequência, nós faremos uma viagem na história de nossa Paróquia
              de 1978 até os dias de hoje.
            </p>
          </div>
        </div>

        {/* Action Button */}
        <button
          onClick={onClose}
          className="w-full py-3.5 bg-[#66AFDA] hover:bg-[#529ec9] active:scale-[0.98] text-white font-semibold rounded-full cursor-pointer transition-all duration-200 shadow-lg shadow-[#66AFDA]/20 flex items-center justify-center gap-2 hover:shadow-xl hover:shadow-[#66AFDA]/30"
        >
          <span>Entrar na Exposição</span>
        </button>
      </div>
    </div>
  );
}
