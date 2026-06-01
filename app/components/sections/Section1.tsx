'use client';

import ImageCarousel from '../ImageCarousel';
import ImageFrame from '../ImageFrame';
import TextArea from '../TextArea';

export default function Section1() {
  const cathedralPhotos = [
    {
      src: '/images/foto-5.webp',
      alt: 'Catedral de San Cristóbal de La Laguna - Fachada e Entorno',
    },
    {
      src: '/images/foto-6.webp',
      alt: 'Catedral de San Cristóbal de La Laguna - Detalhe da Arquitetura',
    },
    {
      src: '/images/foto-7.webp',
      alt: 'Catedral de San Cristóbal de La Laguna - Vista e Fachada Lateral',
    },
  ];

  const anchietaPharmacyPhotos = [
    {
      src: '/images/foto-11.webp',
      alt: 'Anchieta Farmacopeia',
    },
    {
      src: '/images/foto-12.webp',
      alt: 'Anchieta Farmacopeia',
    },
    {
      src: '/images/foto-13.webp',
      alt: 'Anchieta Farmacopeia',
    },
    {
      src: '/images/foto-14.webp',
      alt: 'Anchieta Farmacopeia',
    },
  ];

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

      <TextArea>
        <p className="first-letter:text-5xl first-letter:font-serif first-letter:font-bold first-letter:text-amber-600 first-letter:mr-3 first-letter:float-left first-letter:leading-[0.8] first-letter:mt-1">
          O Santuário Nacional de São José de Anchieta, localizado a 80 Km da
          capital Vitória, no Espírito Santo, é um dos principais polos de
          turismo religioso no Brasil, composto pela maravilhosa Igreja dedicada
          à Nossa Senhora da Assunção e o Museu Nacional de São José de
          Anchieta. Em 1943, o IPHAN (Instituto do Patrimônio Histórico e
          Artístico Nacional), realizou o tombamento (registro) do Santuário
          Nacional de São José de Anchieta em seus livros oficiais, visando
          garantir sua preservação histórica, cultural e paisagística. O sítio
          histórico é considerado um marco da presença jesuítica e da história
          da colonização brasileira.
        </p>
      </TextArea>

      <ImageFrame
        src="/images/foto-3.webp"
        alt="Mapa"
        hasShadow
        hasOverlay
        marginClass="mt-6 mb-6 lg:max-w-[780px]"
        priority
      />

      <TextArea>
        <p>
          No dia 19 de março do Ano de Nosso Senhor Jesus Cristo de 1534, nasce
          em San Cristobal de La Laguna, popularmente conhecida como La Laguna,
          localizada na Comunidade Autônoma das Canárias, província de Santa
          Cruz de Tenerife, Espanha, aquele que estava destinado a ser o{' '}
          <em>“Apóstolo do Brasil”</em>: José de Anchieta. Recebeu o Batismo no
          dia 07 de abril do mesmo ano, na Paróquia de Nossa Senhora dos
          Remédios (atual Catedral de San Cristobal de La Laguna). Filho de Juan
          López de Anchieta, originário de Urrestilha (região do país basco) e
          Mencia Díaz de Clavijo Y Llarena (ilhéu – castelhana), Nosso Santo
          pertencia a uma família numerosa de 12 irmãos, sendo Pero Nunẽs e
          Melchior, assim como José, seguiram a vida religiosa como sacerdote,
          fato que nos apresenta, certamente, uma de suas primeiras influências:
          um lar profundamente cristão e que compreendeu e o amparou em todas as
          suas decisões, inclusive naquela que seria uma das mais exigentes e,
          ao mesmo tempo, uma das mais significativas de sua existência terrena:{' '}
          <em>“deixar”</em> seu lar e sua família para se entregar à missão da
          vida: a vocação missionária e evangelizadora. Aos 14 anos, o primeiro
          destino foi Portugal, em busca de estudar Filosofia no Real Colégio
          das Artes e Humanidades Clássicas no curso superior de Letras da
          Universidade de Coimbra.{' '}
          <em>
            “[…] Depois de receber a bênção dos pais, abraços e beijos de
            parentes e amigos, ei-los comovidos no convés do navio, a repetir
            mil vezes o adeus aos que ficavam, até a embarcação se distanciar e,
            pouco a pouco, perder-se de vista. […]”
          </em>
          .
        </p>
      </TextArea>

      <ImageFrame
        src="/images/foto-4.webp"
        alt="Universidade de Coimbra"
        imageClass="w-full h-fit sm:h-[450px] object-contain"
        marginClass="mt-6 mb-2"
        priority
      />
      <p className="text-center text-xs sm:text-sm italic mt-2 mb-6 font-sans">
        Universidade de Coimbra, onde estudou São José de Anchieta (fato citado
        acima).
      </p>

      <ImageCarousel images={cathedralPhotos} />

      <p className="text-center text-xs sm:text-sm italic mt-2 mb-6 font-sans">
        Catedral de San Cristóbal de La Laguna (referente às três imagens
        acima).
      </p>

      <TextArea>
        <p>
          Catedral de San Cristobal de La Laguna, também denominada de Catedral
          de Nossa Senhora dos Remédios, na ilha de Tenerife. É uma catedral
          neogótica, declarado Patrimônio da Humanidade em 1999, pela Unesco.
          Local onde recém nascido José de Anchieta foi batizado . Até os dias
          atuais, guarda-se, o atestado de batismo de José, que reza assim:{' '}
          <em>
            “José, filho de Juan de Anchieta e de sua mulher, foi batizado a 7
            do mês de abril, por Juan Gutiérrez, vigário; foram seu padrinhos
            Doménigo Rizo e Don Alonso”
          </em>
          .
        </p>
      </TextArea>

      <ImageFrame
        src="/images/foto-8.webp"
        alt="Casa de São José de Anchieta em Tenerife"
        imageClass="w-full h-fit sm:h-[450px] object-contain"
        marginClass="mt-6 mb-2"
        priority
      />
      <p className="text-center text-xs sm:text-sm italic mt-2 mb-6 font-sans">
        Casa de São José de Anchieta em Tenerife, ilhas Canárias, Espanha.
      </p>

      <ImageFrame
        src="/images/foto-9.webp"
        alt="Santo Inácio de Loyola"
        imageClass="w-full h-fit sm:h-[450px] object-contain"
        marginClass="mt-6 mb-2"
        priority
      />
      <p className="text-center text-xs sm:text-sm italic mt-2 mb-6 font-sans">
        Santo Inácio de Loyola
      </p>

      <TextArea>
        <p>
          Em terras lusitanas, no ano de 1551, o jovem José de Anchieta, se
          encanta com a Companhia de Jesus, fundada por seu primo distante Santo
          Inácio de Loyola (1491 – 1556), bem como pelos preceitos e as
          diretrizes de sua vida e ação missionária:{' '}
          <em>“em tudo amar e servir”</em>. Ao mesmo passo que encontra a
          vocação missionária e evangelizadora, suas enfermidades também se
          agravavam:{' '}
          <em>
            “[…] ajudava cada dia, oito, dez, mais missas de joelhos, com muito
            gosto e devoção, ainda que com muito custo de sua saúde. Porque da
            continuação desse exercício, de ir por essa causa comer tarde e
            comer pouco, se lhe veio a gerar uma dor numa ilharga (no ser
            humano, cada um dos lados do corpo, dos quadris aos ombros) que o
            atormentava muito. […]” tantas vezes fez isso, e com tanta força,
            por causa da grande fadiga, veio a fazer tão grande abalo nas
            costas, que as tirou de seu lugar, ficando o espinhaço feito um S
            […]. Sucedeu-lhe daí grande doença, da qual nem as costas tornavam a
            seu lugar, nem ele nunca pôde cobrar saúde […]”.
          </em>{' '}
          A tuberculose óssea, causadora de dores intensas, associados a um
          sério acidente: uma escada cai sobre suas costas, agravando ainda mais
          sua escoliose, colaborando, de forma significativa, sua vinda para a
          “Terra Brasilis” (Terra do Brasil), onde o clima quente, o calor,
          assim como a farmácia tupiniquim, ofereceu a este servo de Deus, uma
          forma de melhor administrar suas enfermidades e suas dores, quando
          aqui desembarca aos 19 anos, no dia 13 de julho de 1553, em Salvador,
          Bahia, junto ao Governador Duarte da Costa e mais seis irmãos
          inacianos.
        </p>
      </TextArea>

      <ImageFrame
        src="/images/foto-10.webp"
        alt="A Chegada do Irmão Anchieta ao Brasil"
        imageClass="w-full h-fit sm:h-[450px] object-contain"
        marginClass="mt-6 mb-2"
        priority
      />
      <p className="text-center text-xs sm:text-sm italic mt-2 mb-6 font-sans">
        A Chegada do Irmão Anchieta ao Brasil (referente à imagem acima)
      </p>

      <ImageCarousel images={anchietaPharmacyPhotos} />

      <ImageFrame
        src="/images/foto-15.webp"
        alt="A Chegada do Irmão Anchieta ao Brasil"
        imageClass="w-full h-fit sm:h-[450px] object-contain"
        marginClass="mt-6 mb-2"
        priority
      />

      <TextArea>
        <p>
          Em terras brasileiras, durante os 44 anos aqui vividos, o Padre
          Anchieta exerceu com excelência a missão da vida: a evangelização: a
          cura espiritual e o cuidado com os enfermos: Padre Anchieta o
          boticário (farmacêutico). Assim nos descreve o Padre Anchieta sobre
          sua botica:{' '}
          <em>
            “Nossa casa é a botica de todos e, em poucos momentos está quieta a
            campainha da porta”. Em 2024, o Conselho Federal de Farmácia,
            declarou oficialmente, São José de Anchieta como padroeiro dos
            farmacêuticos. “Médico, cirurgião, parteiro, higienista, legista,
            terapeuta, ginecologo, psquiatra, nosologista, enfermeiro,
            padioleiro, coveiro, não houve ramo da medicina que não atraísse a
            divina intuição do padre Anchieta. Mezinhou, operou, sangrou,
            exumou, curou feridas bravas, cancros, mordeduras, envenenamentos;
            assistiu aos velhos, sarou feridos de guerra, frechados, combateu
            pestes, infecções, febres, epidemias”.
          </em>
        </p>
      </TextArea>

      {/* fim da Seção 1 */}
      <hr
        className="w-16 border-t border-stone-200/60 mx-auto mt-3 mb-3"
        aria-hidden="true"
      />
    </>
  );
}
