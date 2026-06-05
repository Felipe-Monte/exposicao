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
      />

      <p className="text-center text-xs sm:text-sm italic mb-6 font-sans">
        Fotos da ampliação do templo. Obras iniciadas em 01 de dezembro 2003.
        Arquiteta: Camila Claudia Dantas Fonseca. Ajuda importante de Noel
        Augusto dos Santos, Ana, Julia e demais membros da comunidade.
      </p>

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
      </TextArea>

      <ImageFrame src="/images/section2/picture9.webp" alt="Padre  Cura" />

      <p className="text-center text-xs sm:text-sm italic mb-6 font-sans">
        Padre Francisco Lucas, após receber alta do hospital em 23 de Abril de
        2012.
      </p>

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

      <ImageFrame
        src="/images/section2/picture13.webp"
        alt="Dom Jacome"
        imageClass="w-[70%] mx-auto"
      />

      <p className="text-center text-xs sm:text-sm italic mb-6 font-sans">
        Dom João Santos Cardoso
        <br />
        Atual Arcebispo da Arquidiocese de Natal.
      </p>

      <ImageFrame
        src="/images/section2/picture14.webp"
        alt="Padre Sávio"
        imageClass="w-[70%] mx-auto"
      />

      <p className="text-center text-xs sm:text-sm italic mb-6 font-sans">
        Padre Carlos Sávio da Costa Ribeiro
        <br />
        Pároco da paróquia desde 2021 até os dias de hoje
      </p>

      <TextArea>
        <p>
          O último passo dessa jornada de emancipação aconteceu no dia 29 de
          maio de 2005. Sob a liderança de Padre Lucas e com o apoio de
          missionários dedicados, a comunidade concretizou o sonho de possuir um
          templo próprio.
        </p>
      </TextArea>

      <ImageFrame
        src="/images/section2/picture15.webp"
        alt="Serafim"
        imageClass="w-[70%] mx-auto"
      />

      <p className="text-center text-xs sm:text-sm italic mb-6 font-sans">
        Diácono Serafim de Medeiros Victor
        <br />
        Foi um dos fundadores da paróquia e atuou desde o início da
        evangelização no bairro de Lagoa Nova. Faleceu em janeiro de 2026.
      </p>

      <ImageFrame
        src="/images/section2/picture16.webp"
        alt="Manoel Carlos"
        imageClass="w-[70%] mx-auto"
      />

      <p className="text-center text-xs sm:text-sm italic mb-6 font-sans">
        Diácono Manoel Carlos do Nascimento Silva
        <br />
        Diácono da paróquia desde 2024 até os dias de hoje
      </p>

      <ImageFrame
        src="/images/section2/picture17.webp"
        alt="Pastoral Jovem"
        imageClass="object-contain"
      />

      <p className="text-center text-xs sm:text-sm italic mb-6 font-sans">
        Pastoral da Acolhida Jovem
      </p>

      <ImageFrame
        src="/images/section2/picture18.webp"
        alt="Pastoral Adulto"
        imageClass="object-contain"
      />

      <p className="text-center text-xs sm:text-sm italic mb-6 font-sans">
        Pastoral da Acolhida Adulto
      </p>

      <ImageFrame
        src="/images/section2/picture19.webp"
        alt="Pastoral Dizimo"
        imageClass="object-contain"
      />

      <p className="text-center text-xs sm:text-sm italic mb-6 font-sans">
        Pastoral do Dízimo
      </p>

      <ImageFrame
        src="/images/section2/picture20.webp"
        alt="Pessoa com Deficiência"
        imageClass="object-contain"
      />

      <p className="text-center text-xs sm:text-sm italic mb-6 font-sans">
        Pastoral da Pessoa com Deficiência
      </p>

      <ImageFrame
        src="/images/section2/picture21.webp"
        alt="Pessoa Social"
        imageClass="object-contain"
      />

      <p className="text-center text-xs sm:text-sm italic mb-6 font-sans">
        Pastoral Social
      </p>

      <ImageFrame
        src="/images/section2/picture22.webp"
        alt="Pastoral Renovação"
        imageClass="object-contain"
      />

      <p className="text-center text-xs sm:text-sm italic mb-6 font-sans">
        Renovação Carismática Católica (RCC)
      </p>

      <ImageFrame
        src="/images/section2/picture23.webp"
        alt="Pequeninos"
        imageClass="object-contain"
      />

      <p className="text-center text-xs sm:text-sm italic mb-6 font-sans">
        Pequeninos do Senhor
      </p>

      <ImageFrame
        src="/images/section2/picture24.webp"
        alt="Palavra"
        imageClass="object-contain"
      />

      <p className="text-center text-xs sm:text-sm italic mb-6 font-sans">
        Ministério da Palavra
      </p>

      <ImageFrame
        src="/images/section2/picture25.webp"
        alt="Coroinha"
        imageClass="object-contain"
      />

      <p className="text-center text-xs sm:text-sm italic mb-6 font-sans">
        Coroinhas
      </p>

      <ImageFrame
        src="/images/section2/picture26.webp"
        alt="Familiar"
        imageClass="object-contain"
      />

      <p className="text-center text-xs sm:text-sm italic mb-6 font-sans">
        Pastoral Familiar
      </p>

      <ImageFrame
        src="/images/section2/picture27.webp"
        alt="Oração"
        imageClass="object-contain"
      />

      <p className="text-center text-xs sm:text-sm italic mb-6 font-sans">
        Apostolado da Oração
      </p>

      <ImageFrame
        src="/images/section2/picture28.webp"
        alt="Extraordinário"
        imageClass="object-contain"
      />

      <p className="text-center text-xs sm:text-sm italic mb-6 font-sans">
        Ministros Extraordinários da Comunhão Eucarística
      </p>

      <ImageFrame
        src="/images/section2/picture29.webp"
        alt="Jovem"
        imageClass="object-contain"
      />

      <p className="text-center text-xs sm:text-sm italic mb-6 font-sans">
        Jovens em missão
      </p>

      <TextArea>
        <p className="font-bold text-stone-900 mb-4">
          O total de grupos da Igreja são:
        </p>
        <ol className="list-decimal list-inside space-y-2 text-stone-700 font-sans text-sm">
          <li>Pastoral do Dízimo</li>
          <li>Pastoral do Esporte</li>
          <li>Pastoral da Escuta</li>
          <li>
            Pastoral Familiar
            <ul className="list-disc list-inside pl-6 mt-1 space-y-1 text-sm text-stone-500">
              <li>Sayonara e Flávio</li>
              <li>Rose e Junior</li>
              <li>Marco e Cinthya</li>
            </ul>
          </li>
          <li>Pastoral da Pessoa com Deficiência</li>
          <li>Pastoral Social</li>
          <li>Pascom</li>
          <li>Pastoral Santa Dulce</li>
          <li>Batismo</li>
          <li>Primeira Eucaristia</li>
          <li>Crisma</li>
          <li>Pastoral da Acolhida</li>
          <li>Acolhida Jovem</li>
          <li>Acolhida da missa por Cura e Libertação</li>
          <li>Legião de Maria</li>
          <li>Mãe Rainha</li>
          <li>Terço dos Homens</li>
          <li>Apostolado da Oração</li>
          <li>RCC</li>
          <li value={21}>Pequeninos do Senhor</li>
          <li>Setor Nossa Senhora de Lourdes</li>
          <li>Ministros da Eucaristia</li>
          <li>Ministério da Palavra</li>
          <li>Coroinhas</li>
          <li>Pastoral do Canto</li>
          <li>Escola da Fé</li>
          <li>Jovens em Missão</li>
          <li>Pastoral de Eventos</li>
          <li>Terço da Juventude</li>
          <li>ECRI</li>
          <li>EJC</li>
          <li>Segue-me</li>
          <li>EJAC</li>
          <li>ECC</li>
          <li>EC</li>
        </ol>
      </TextArea>
    </div>
  );
}
