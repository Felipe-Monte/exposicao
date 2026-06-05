import ImageCarousel from '../ImageCarousel';
import ImageFrame from '../ImageFrame';
import TextArea from '../TextArea';

export default function Part2() {
  return (
    <div>
      <ImageFrame
        src="/images/section2/picture4.webp"
        alt="Padre Lucas"
        imageClass="w-[70%] mx-auto"
      />

      <p className="text-center text-xs sm:text-sm italic mb-6 font-sans">
        Padre Francisco Lucas de Sousa Neto. Primeiro Pároco dessa paróquia
        .(2001 à 2021). Nascido em 7 de outubro de 1958 natural de Taipu-Rn. Aos
        67 anos recebeu em 2026 o titulo de Monsenhor.
      </p>

      <ImageCarousel
        images={[
          {
            src: '/images/section2/picture5.webp',
            alt: 'Construção',
          },
          {
            src: '/images/section2/picture6.webp',
            alt: 'Construção',
          },
          {
            src: '/images/section2/picture7.webp',
            alt: 'Construção',
          },
          {
            src: '/images/section2/picture8.webp',
            alt: 'Construção',
          },
        ]}
        className="mb-6"
      />

      <p className="text-center text-xs sm:text-sm italic mb-6 font-sans">
        Fotos da ampliação do templo. Obras iniciadas em 01 de dezembro 2003.
        Arquiteta: Camila Claudia Dantas Fonseca. Ajuda importante de Noel
        Augusto dos Santos, Ana, Julia e demais membros da comunidade.
      </p>

      <div className="w-full mb-6">
        <TextArea>
          <p>
            Situada no limite entre as paróquias de Nossa Senhora da Esperança e
            de São Sebastião, a Área Pastoral ficou sob os cuidados do Padre
            Francisco Lucas de Sousa Neto. Sob sua liderança, a comunidade
            floresceu rapidamente: em apenas dez meses, no dia 9 de junho de 2001,
            o espaço foi oficialmente elevado a Paróquia do Bem-Aventurado José de
            Anchieta, tendo Padre Lucas como seu primeiro pároco. Apenas cinco
            anos após essa emancipação, o antigo e modesto prédio dava lugar ao
            novo templo.
          </p>
          <p>
            O último passo dessa jornada de emancipação aconteceu no dia 29 de
            maio de 2005. Sob a liderança de Padre Lucas e com o apoio de
            missionários dedicados, a comunidade concretizou o sonho de possuir um
            templo próprio.
          </p>
        </TextArea>
      </div>

      <ImageFrame src="/images/section2/picture9.webp" alt="Padre  Cura" />

      <p className="text-center text-xs sm:text-sm italic mb-6 font-sans">
        Padre Francisco Lucas, após receber alta do hospital em 23 de Abril de
        2012.
      </p>

      <div className="w-full mb-6">
        <TextArea>
          <p>
            Em 14 de Janeiro de 2012, padre Lucas como é mais conhecido, celebrou
            a missa com fortes dores. Mesmo assim conseguiu terminar a celebração,
            logo após foi ao hospital onde foi diagnosticado com pancreatite aguda
            ficando três meses hospitalizado entre a vida e a morte.
          </p>
          <p>
            Os médicos já diziam que tudo que podiam fazer tinham feito e que ele
            estava nas mãos de Deus a espera de um milagre.
          </p>
          <p>
            E para honra e gloria de Deus, o milagre aconteceu. O padre começou a
            reagir a cada dia, ate chegar a receber alta. Tendo assim uma CURA
            MILAGROSA.
          </p>
        </TextArea>
      </div>

      <ImageFrame
        src="/images/section2/picture10.webp"
        alt="Dom Heitor Sales"
        imageClass="object-contain w-[70%] mx-auto"
      />

      <p className="text-center text-xs sm:text-sm italic mb-6 font-sans">
        Dom Heitor de Araújo Sales - Arcebispo que atuava na Arquidiocese de
        Natal em 2001. Período quando a então área pastoral se transformou em
        Paróquia no dia 09 de Junho de 2001.
      </p>

      <ImageFrame
        src="/images/section2/picture11.webp"
        alt="Dom Matias"
        imageClass="w-[70%] mx-auto"
      />

      <p className="text-center text-xs sm:text-sm italic mb-6 font-sans">
        Dom Matias Patrício de Macêdo
        <br />
        Arcebispo da Arquidiocese de Natal entre 2004 a 2011.
      </p>

      <ImageFrame
        src="/images/section2/picture12.webp"
        alt="Dom Jacome"
        imageClass="w-[70%] mx-auto"
      />

      <p className="text-center text-xs sm:text-sm italic mb-6 font-sans">
        Dom Jaime Vieira Rocha
        <br />
        Arcebispo da Arquidiocese de Natal entre os anos de 2012 a 2022.
      </p>
    </div>
  );
}
