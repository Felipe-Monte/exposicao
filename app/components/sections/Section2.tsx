'use client';

import ImageCarousel from '../ImageCarousel';
import ImageFrame from '../ImageFrame';
import TextArea from '../TextArea';

export default function Section2() {
  const grammarArtPhotos = [
    {
      src: '/images/foto-18.webp',
      alt: 'Gramática Artística',
    },
    {
      src: '/images/foto-19.webp',
      alt: 'Gramática Artística',
    },
  ];

  const letterPhotos = [
    {
      src: '/images/foto-20.webp',
      alt: 'Carta',
    },
    {
      src: '/images/foto-21.webp',
      alt: 'Carta',
    },
  ];

  return (
    <>
      <div className="max-w-full mx-auto mb-6">
        <div className="text-center max-w-full mx-auto mb-6">
          <h1 className="font-serif text-[25px] sm:text-4xl md:text-5xl font-bold tracking-tight text-stone-900 leading-tight">
            Fundação de São Paulo
          </h1>
        </div>

        <ImageFrame
          src="/images/foto-16.webp"
          alt="Fundação de São Paulo"
          imageClass="object-contain"
        />

        <ImageFrame
          src="/images/foto-16.webp"
          alt="Fundação de São Paulo"
          imageClass="object-contain"
        />

        <TextArea>
          <p>
            No dia 25 de janeiro de 1554 (data da primeira missa) o Padre Manuel
            da Nóbrega (1571 – 1570) superior jesuíta no Brasil, juntamente ao
            irmão José de Anchieta (1534 – 1597), fundam São Paulo dos Campo de
            Piratininga (“peixe seco” em tupi), vila da Capitania de São
            Vicente. O povoado nasceu do Real Colégio de São Paulo, situados
            entre os rios Tamanduateí (rio dos tamanduás verdadeiros) e
            Anhangabaú (rio ou água do mau espírito) tornando-se a capital
            paulista. A localização estratégica (posição alta no planalto), o
            clima ameno e a aliança com o cacique Tibiriça, foram fundamentais.
          </p>
        </TextArea>

        <ImageFrame
          src="/images/foto-17.webp"
          alt="Tibiriça"
          imageClass=" object-contain w-[70%] mx-auto"
        />

        <TextArea>
          <p>
            Tibiriça foi líder indígena tupiniquim, aliado dos portugueses e que
            foi convertido e batizado pelos jesuítas José de Anchieta e Leonardo
            Nunes. Seu nome de batismo cristão foi Martim Afonso de Souza, em
            homenagem ao fundador da vila de São Vicente, passando a se chamar,
            então, Martim Afonso de Souza Tibiriça.
          </p>
        </TextArea>

        <ImageCarousel images={grammarArtPhotos} />

        <TextArea>
          <p>
            A arte da Gramática da Língua mais usada na Costa do Brasil foi
            escrita por São José de Anchieta em 1555. Pesquisadores afirmam que,
            já em 1556, era usada uma primeira versão manuscrita dessa Gramática
            no Colégio da Bahia. A obra foi impressa pela primeira vez em 1595,
            em Portugal, dois anos antes de seu falecimento em Reritiba (“lugar
            de muitas ostras” em tupi), atual município de Anchieta, no Espírito
            Santo. O objetivo maior era facilitar o trabalhos missionário e a
            catequese. A Arte da Gramática da Língua mais usada na Costa do
            Brasil é considerada um estudo rebuscado para o seu tempo.
          </p>
        </TextArea>

        <ImageCarousel images={letterPhotos} />

        <TextArea>
          <p>
            As Cartas do Padre Anchieta são um conjunto de correspondências e
            relatórios escritos entre as décadas de 1550 a 1590. Estes
            documentos representam um dos principais registros históricos,
            geográficos e antropológicos do início da colonização do Brasil. Os
            temas abordados eram muitos, como: o cotidianos das sociedades
            originárias, seus costumes, hábitos, sabores, cheiros, aspectos
            físicos, rituais, estruturas familiares, a fauna, a flora, as
            necessidades de recursos para a trabalho de evangelização, as
            conquistas e as muitas dificuldades diante desse mundo tão belo e
            desafiador do seu tempo.
          </p>
        </TextArea>

        <ImageFrame
          src="/images/foto-22.webp"
          alt="Ubatuba"
          imageClass="object-contain"
        />

        {/* fim da Seção 2 */}
        <hr
          className="w-16 border-t border-stone-200/60 mx-auto mt-3 mb-3"
          aria-hidden="true"
        />
      </div>
    </>
  );
}
