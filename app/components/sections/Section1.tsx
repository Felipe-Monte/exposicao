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

function ImageFrame({
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

export default function Section1() {
  return (
    <>
      <ImageFrame
        src="/images/foto-1.webp"
        alt="Ilustração de uma capela serena sob o amanhecer dourado"
        imageClass="w-full h-[320px] sm:h-[450px] lg:py-3 object-contain px-3"
        hasShadow
        hasOverlay
        priority
      />

      <ImageFrame
        src="/images/foto-2.webp"
        imageClass="w-full h-fit sm:h-[450px] object-contain"
        alt="Ilustração de uma capela serena sob o amanhecer dourado"
        hasShadow
        hasOverlay
        priority
      />

      <div className="text-center max-w-full mx-auto mb-6">
        <h1 className="font-serif text-[25px] sm:text-4xl md:text-5xl font-bold tracking-tight text-stone-900 leading-tight">
          460 anos da Ordenação Presbiteral de São José de Anchieta “ O Padre do
          Brasil”
        </h1>
      </div>

      {/* Article Body */}
      <div className="max-w-2xl mx-auto">
        <div className="font-serif text-lg text-stone-700 leading-relaxed space-y-6">
          <p className="first-letter:text-5xl first-letter:font-serif first-letter:font-bold first-letter:text-amber-600 first-letter:mr-3 first-letter:float-left first-letter:leading-[0.8] first-letter:mt-1">
            O Santuário Nacional de São José de Anchieta, localizado a 80 Km da
            capital Vitória, no Espírito Santo, é um dos principais polos de
            turismo religioso no Brasil, composto pela maravilhosa Igreja
            dedicada à Nossa Senhora da Assunção e o Museu Nacional de São José
            de Anchieta. Em 1943, o IPHAN (Instituto do Patrimônio Histórico e
            Artístico Nacional), realizou o tombamento (registro) do Santuário
            Nacional de São José de Anchieta em seus livros oficiais, visando
            garantir sua preservação histórica, cultural e paisagística. O sítio
            histórico é considerado um marco da presença jesuítica e da história
            da colonização brasileira.
          </p>
        </div>
      </div>

      <ImageFrame
        src="/images/foto-3.webp"
        alt="Mapa"
        hasShadow
        hasOverlay
        marginClass="mt-6 mb-6 lg:max-w-[780px]"
        priority
      />

      <div className="max-w-2xl mx-auto">
        <div className="font-serif text-lg text-stone-700 leading-relaxed space-y-6">
          <p>
            No dia 19 de março do Ano de Nosso Senhor Jesus Cristo de 1534,
            nasce em San Cristobal de La Laguna, popularmente conhecida como La
            Laguna, localizada na Comunidade Autônoma das Canárias, província de
            Santa Cruz de Tenerife, Espanha, aquele que estava destinado a ser o{' '}
            <em>“Apóstolo do Brasil”</em>: José de Anchieta. Recebeu o Batismo
            no dia 07 de abril do mesmo ano, na Paróquia de Nossa Senhora dos
            Remédios (atual Catedral de San Cristobal de La Laguna). Filho de
            Juan López de Anchieta, originário de Urrestilha (região do país
            basco) e Mencia Díaz de Clavijo Y Llarena (ilhéu – castelhana),
            Nosso Santo pertencia a uma família numerosa de 12 irmãos, sendo
            Pero Nunẽs e Melchior, assim como José, seguiram a vida religiosa
            como sacerdote, fato que nos apresenta, certamente, uma de suas
            primeiras influências: um lar profundamente cristão e que
            compreendeu e o amparou em todas as suas decisões, inclusive naquela
            que seria uma das mais exigentes e, ao mesmo tempo, uma das mais
            significativas de sua existência terrena: <em>“deixar”</em> seu lar
            e sua família para se entregar à missão da vida: a vocação
            missionária e evangelizadora. Aos 14 anos, o primeiro destino foi
            Portugal, em busca de estudar Filosofia no Real Colégio das Artes e
            Humanidades Clássicas no curso superior de Letras da Universidade de
            Coimbra.{' '}
            <em>
              “[…] Depois de receber a bênção dos pais, abraços e beijos de
              parentes e amigos, ei-los comovidos no convés do navio, a repetir
              mil vezes o adeus aos que ficavam, até a embarcação se distanciar
              e, pouco a pouco, perder-se de vista. […]”
            </em>
            .
          </p>
        </div>
      </div>

      <ImageFrame
        src="/images/foto-4.webp"
        alt="Ilustração de uma capela serena sob o amanhecer dourado"
        imageClass="w-full h-fit sm:h-[450px] object-contain"
        marginClass="mt-6 mb-2"
        priority
      />
      <p className="text-center text-xs sm:text-sm italic mt-2 mb-6 font-sans">
        Universidade de Coimbra, onde estudou São José de Anchieta (fato citado
        acima).
      </p>

      <ImageFrame
        src="/images/foto-5.webp"
        alt="Ilustração de uma capela serena sob o amanhecer dourado"
        priority
      />
      <ImageFrame
        src="/images/foto-6.webp"
        alt="Ilustração de uma capela serena sob o amanhecer dourado"
        imageClass="w-full h-[320px] sm:h-[450px] object-contain"
        priority
      />
      <ImageFrame
        src="/images/foto-7.webp"
        alt="Ilustração de uma capela serena sob o amanhecer dourado"
        imageClass="w-full h-fit sm:h-[450px] lg:h-fit object-contain"
        marginClass="mb-2"
        priority
      />
      <p className="text-center text-xs sm:text-sm italic mt-2 mb-6 font-sans">
        Catedral de San Cristóbal de La Laguna (referente às três imagens
        acima).
      </p>

      <div className="max-w-2xl mx-auto">
        <div className="font-serif text-lg text-stone-700 leading-relaxed space-y-6">
          <p>
            Catedral de San Cristobal de La Laguna, também denominada de
            Catedral de Nossa Senhora dos Remédios, na ilha de Tenerife. É uma
            catedral neogótica, declarado Patrimônio da Humanidade em 1999, pela
            Unesco. Local onde recém nascido José de Anchieta foi batizado . Até
            os dias atuais, guarda-se, o atestado de batismo de José, que reza
            assim:{' '}
            <em>
              “José, filho de Juan de Anchieta e de sua mulher, foi batizado a 7
              do mês de abril, por Juan Gutiérrez, vigário; foram seu padrinhos
              Doménigo Rizo e Don Alonso”
            </em>
            .
          </p>
        </div>
      </div>

      <ImageFrame
        src="/images/foto-8.webp"
        alt="Ilustração de uma capela serena sob o amanhecer dourado"
        imageClass="w-full h-fit sm:h-[450px] object-contain"
        marginClass="mt-6 mb-2"
        priority
      />
      <p className="text-center text-xs sm:text-sm italic mt-2 mb-6 font-sans">
        Casa de São José de Anchieta em Tenerife, ilhas Canárias, Espanha.
      </p>

      {/* fim da Seção 1 */}
      <hr
        className="w-16 border-t border-stone-200/60 mx-auto mt-3 mb-3"
        aria-hidden="true"
      />
    </>
  );
}
