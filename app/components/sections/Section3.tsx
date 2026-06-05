'use client';

import ImageCarousel from '../ImageCarousel';
import ImageFrame from '../ImageFrame';
import TextArea from '../TextArea';

export default function Section3() {
  const chapelPhotos = [
    {
      src: '/images/foto-24.webp',
      alt: 'Capela',
    },
    {
      src: '/images/foto-25.webp',
      alt: 'Capela',
    },
  ];

  const churchPhotos = [
    {
      src: '/images/foto-26.webp',
      alt: 'Igreja',
    },
    {
      src: '/images/foto-27.webp',
      alt: 'Igreja',
    },
    {
      src: '/images/foto-28.webp',
      alt: 'Igreja',
    },
  ];

  const anchietaPhotos = [
    {
      src: '/images/foto-31.webp',
      alt: 'Anchieta',
    },
    {
      src: '/images/foto-32.webp',
      alt: 'Anchieta',
    },
  ];

  const reritibaPhotos = [
    {
      src: '/images/foto-36.webp',
      alt: 'Reritiba',
    },
    {
      src: '/images/foto-37.webp',
      alt: 'Reritiba',
    },
    {
      src: '/images/foto-38.webp',
      alt: 'Reritiba',
    },
  ];

  const insideChurchPhotos = [
    {
      src: '/images/foto-39.webp',
      alt: 'Igreja',
    },
    {
      src: '/images/foto-40.webp',
      alt: 'Igreja',
    },
  ];

  const altarAnchietaPhotos = [
    {
      src: '/images/foto-41.webp',
      alt: 'Altar Anchieta',
    },
    {
      src: '/images/foto-42.webp',
      alt: 'Altar Anchieta',
    },
  ];

  const senhoraAssuncaoPhotos = [
    {
      src: '/images/foto-43.webp',
      alt: 'Nossa Senhora da Assunção',
    },
    {
      src: '/images/foto-44.webp',
      alt: 'Nossa Senhora da Assunção',
    },
  ];

  const sepultamentoAnchietaPhotos = [
    {
      src: '/images/foto-49.webp',
      alt: 'Sepultamento de São José de Anchieta',
    },
    {
      src: '/images/foto-50.webp',
      alt: 'Sepultamento de São José de Anchieta',
    },
    {
      src: '/images/foto-51.webp',
      alt: 'Sepultamento de São José de Anchieta',
    },
    {
      src: '/images/foto-52.webp',
      alt: 'Sepultamento de São José de Anchieta',
    },
  ];

  const santaQuartoPhotos = [
    {
      src: '/images/foto-46.webp',
      alt: 'Quarto de São José de Anchieta',
    },
    {
      src: '/images/foto-47.webp',
      alt: 'Quarto de São José de Anchieta',
    },
    {
      src: '/images/foto-48.webp',
      alt: 'Quarto de São José de Anchieta',
    },
  ];

  const telaAnchietaPhotos = [
    {
      src: '/images/foto-57.webp',
      alt: 'Tela Anchieta',
    },
    {
      src: '/images/foto-58.webp',
      alt: 'Tela Anchieta',
    },
  ];

  const reliquiasPhotos = [
    {
      src: '/images/foto-60.webp',
      alt: 'Relíquias de São José de Anchieta',
    },
    {
      src: '/images/foto-61.webp',
      alt: 'Relíquias de São José de Anchieta',
    },
    {
      src: '/images/foto-62.webp',
      alt: 'Relíquias de São José de Anchieta',
    },
    {
      src: '/images/foto-63.webp',
      alt: 'Relíquias de São José de Anchieta',
    },
  ];

  return (
    <>
      <div className="max-w-full mx-auto mb-6">
        <div className="text-center max-w-full mx-auto mb-6">
          <h1 className="font-serif text-[25px] sm:text-4xl md:text-5xl font-bold tracking-tight text-stone-900 leading-tight">
            O Apóstolo da Paz
          </h1>
        </div>

        <div className="w-full mb-6">
          <TextArea>
            <p>
              São José de Anchieta foi uma personalidade e um protagonista
              fundamental no Brasil Colônia, reconhecido não apenas como
              missionário jesuítas e Santo, mas também poeta (seus poemas
              dedicados à Virgem Santa), dramaturgo (pioneiro do teatro no
              Brasil). Seus versos e suas peças teatrais mesclavam elementos da
              mitologia das sociedades originárias com elementos do catolicismo.
              A imagem a seguir, remete-se a Iperoig (atual Ubatuba – SP),
              momento que o irmão José de Anchieta está como refém de paz entre
              os membros da confederação dos tamoios, entre 1562 e 1563, durante
              as negociações de um tratado de paz. Nas areias e Iperoig, nosso
              Santo escreve o célebre “Poema da Bem – Aventurada Virgem Maria”,
              contendo 5.786 versos, como um voto de sua sobrevivência e de mais
              uma intercessão da Virgem Maria em sua existência. Sem papel e
              pena, memorizava diariamente cada verso que escrevia nas areias.
            </p>
          </TextArea>
        </div>

        <ImageFrame src="/images/foto-23.webp" alt="cruz" marginClass="mb-6" />

        <ImageCarousel images={chapelPhotos} className="mb-6" />

        <div className="w-full mb-6">
          <TextArea>
            <p>
              No dia 06 de junho de 1566, há 460 anos, o irmão José de Anchieta
              é ordenado jesuíta, aos 32 anos, na antiga Capela do Colégio dos
              Jesuítas fundada em 1552, em Salvador, na Bahia. Demolida em 1933,
              hoje, no local, encontra-se o monumento “Cruz Caída”, em homenagem
              à primitiva catedral. Nesse mesmo centro histórico está a Catedral
              – Basílica Primacial de São Salvador, construída entre 1652 -1672.
            </p>
          </TextArea>
        </div>

        <ImageCarousel images={churchPhotos} className="mb-6" />

        <div className="w-full mb-6">
          <TextArea>
            <p>
              Após sua Ordenação Presbiteral, pelas têmporas do verão, adoeceu o
              padre Anchieta de febre palustre (conhecido como malária), indo
              convalescer no sítio junto a Nossa Senhora da Escada, próximo a
              Salvador, donde voltou restabelecido, a encontrar-se junto a
              Inácio de Azevedo e a seguir de volta para o Sul, na expedição de
              Mem de Sá, para a conquista do Rio de Janeiro. Nunca ficava
              ocioso, e, foi nessas circunstâncias que escreveu em seu leito, o
              primeiros dos seis Poemas Eucarísticos. Nossa Senhora da Escada é
              uma devoção mariana originária de Portugal, trazida pelos jesuítas
              do século XVI.
            </p>
          </TextArea>
        </div>

        <ImageFrame
          src="/images/foto-29.webp"
          alt="Fundação rio de janeiro"
          imageClass="object-contain"
          marginClass="mb-6"
        />
        <ImageFrame
          src="/images/foto-30.webp"
          alt="Fundação rio de janeiro"
          imageClass="object-contain"
          marginClass="mb-6"
        />

        <div className="w-full mb-6">
          <TextArea>
            <p>
              Nessa segunda metade do século XVI, as terras brasileiras eram
              também desejadas por outros reinos europeus além dos portugueses
              como: holandeses, ingleses, espanhóis, corsários e franceses.
              Sendo estes últimos dominantes do Rio de Janeiro entre os anos de
              1555 a 1567: a França Antártica. Em 1565, no dia primeiro de
              março, Estácio de Sá se estabelece entre o Pão de Açúcar e o morro
              Cara de Cão para combater os franceses, fundando ali o Rio de
              Janeiro. A fundação foi uma resposta estratégica dos portugueses
              para expulsar os franceses, que haviam estabelecido a colônia
              França Antártica na Baía de Guanabara em 1555. Estácio de Sá,
              sobrinho do governador-geral Mem de Sá, batizou a cidade como São
              Sebastião do Rio de Janeiro, em homenagem ao então rei de
              Portugal, D. Sebastião, e ao padroeiro da cidade. A expulsão
              definitiva dos franceses só ocorreu em 1567, após a Batalha de
              Uruçumirim. Estácio de Sá foi ferido mortalmente durante o
              conflito.
            </p>
          </TextArea>
        </div>

        <ImageCarousel images={anchietaPhotos} className="mb-6" />

        <div className="w-full mb-6">
          <TextArea>
            <p>
              Entre 1577 à 1587, o Padre Anchieta exerceu as funções de
              Provincial da Companhia de Jesus no Brasil, sendo substituído em
              1587 ao seu próprio pedido. Dirigiu ainda o Colégio dos Jesuítas
              em Vitória, no Espírito Santo. Em 1595, obteve a dispensa de suas
              funções e deslocou-se, definitivamente, para Reritiba (atual
              município de Anchieta), onde veio a falecer no dia 09 de junho de
              1597, aos 63 anos.
            </p>
          </TextArea>
        </div>

        <ImageFrame
          src="/images/foto-33.webp"
          alt="A aldeia de Reritiba e a igreja de Nossa Senhora da Assunção."
          imageClass="object-contain"
          marginClass="mb-6"
        />

        <ImageFrame
          src="/images/foto-34.webp"
          alt="A aldeia de Reritiba e a igreja de Nossa Senhora da Assunção."
          imageClass="object-contain"
          marginClass="mb-6"
        />

        <div className="w-full mb-6">
          <TextArea>
            <p>
              Dentre suas várias missões, destaca-se Reritiba, em tupi “lugar de
              muitas ostras”atual município de Anchieta, no Espírito Santo,
              fundada pelo Padre José de Anchieta, como superior jesuíta do seu
              tempo, no dia 15 de agosto de 1579. As obras estendem-se por onze
              anos, até o ano de 1590, também do dia 15 de agosto. Tudo pensado,
              didático, como excelente professor e mestre, pois, é o dia de
              Nossa Senhora da Assunção, sua grande devoção e inspiração de uma
              vida, a Virgem Santa de tantos versos à ELA dedicados, protetora
              da Missão de Reritiba dos tupiniquins. No próximo dia 15 de
              agosto, vamos celebrar 447 anos da edificação da Igreja e 436 sob
              a proteção da Virgem Santa.
            </p>
          </TextArea>
        </div>

        <ImageFrame
          src="/images/foto-35.webp"
          alt="Construção da igreja de Nossa Senhora da Assunção."
          imageClass="object-contain"
          marginClass="mb-6"
        />

        <div className="w-full mb-6">
          <TextArea>
            <p>
              Esta maravilhosa pintura foi feita por um artista plástico
              anchietense, Ronaldo Moreira. A obra retrata a construção da
              Igreja dedicada à Nossa Senhora da Assunção pelos tupiniquins.
              Amparado por saberes dessa história, juntamente ao imaginário e à
              liberdade criativa, o artista nos oferece uma série de elementos e
              informações sobre o cotidiano, os costumes e os trabalhos de
              evangelização do Padre José de Anchieta e seus irmãos inacianos.
            </p>
          </TextArea>
        </div>

        <ImageCarousel images={reritibaPhotos} className="mb-6" />

        <div className="w-full mb-6">
          <TextArea>
            <p>
              A construção de igrejas no século XVI baseava-se em técnicas de
              alvenaria maciça e estruturas abobadadas. As paredes eram feitas
              de pedra, tijolos e taipa, com telhados apoiados em tesouras de
              madeira. A transição do estilo gótico para o renascentista e
              maneirista introduziu fachadas simétricas, cúpulas autoportantes
              (que se sustenta por conta própria) e arcos de volta-perfeita. Na
              aldeia de Reritiba a técnica foi pedra e cal, caracterizada por
              uma alvenaria de pedras irregulares (muitas vezes trazidas como
              lastro de navios ou extraídas localmente) assentadas com argamassa
              feita à base de óleo de baleia, areia e cal de conchas de ostras
              trituradas.
            </p>
          </TextArea>
        </div>

        <ImageCarousel images={insideChurchPhotos} className="mb-6" />

        <div className="w-full mb-6">
          <TextArea>
            <p>
              O estilo arquitetônico utilizado na construção da Igreja dedicada
              à Nossa Senhora da Assunção é maneirista (estilo artístico
              europeu, surgido na Itália, que vigorou entre 1520 – 1610),
              considerado um estilo de transição entre o Renascimento e o
              Barroco. &quot;Estilo Jesuítico&quot;: Em seus estudos sobre a
              arquitetura jesuítica no Brasil (produzidos a partir de sua
              atuação no IPHAN), Lúcio Costa (1902 – 1998), classificou a
              primeira fase da arquitetura religiosa brasileira como uma
              manifestação direta do Maneirismo europeu, fortemente influenciado
              pelo modelo da Igreja de Jesus, em Roma, e propagado em Portugal
              por arquitetos como Filippo Terzi.
            </p>
          </TextArea>
        </div>

        <ImageCarousel images={altarAnchietaPhotos} className="mb-6" />

        <div className="w-full mb-6">
          <TextArea>
            <p>
              Altar original dos tempos de São José de Anchieta. Diante desse
              Altar relatos de ressurreições e curas. Seus biógrafos
              contemporâneos registraram que ele intercedeu na ressurreição de
              pessoas da região, incluindo uma menina e um indígena chamado
              Diego, além de outras diversas curas milagrosas. Nesse mesmo
              Altar, um pontilhismo (técnica artística que consiste em aplicar
              pequenos pontos de tinta pura lado a lado), arte do século XVI
              reproduzindo azulejos de Évora, Portugal.
            </p>
          </TextArea>
        </div>

        <ImageCarousel images={senhoraAssuncaoPhotos} className="mb-6" />

        <div className="w-full mb-6">
          <TextArea>
            <p>
              Nossa Senhora da Assunção é um título mariano que celebra a crença
              católica de que a Virgem Maria foi elevada de corpo e alma ao céu.
              Esta devoção possui um vínculo histórico profundo com o município
              de Anchieta, no Espírito Santo, onde a santa é a padroeira oficial
              da cidade. A celebração litúrgica em 15 de agosto começou a se
              espalhar pelo Império Bizantino e foi introduzida em Roma no
              século VII. Como parte da catequese, Anchieta escreveu a peça
              &quot;Auto da Assunção&quot; e compôs um poema de 368 versos
              dedicado à Virgem. Nessa obra, a Virgem é aclamada pelos indígenas
              como &quot;Maria Tupansy&quot; (Mãe de Deus).
            </p>
          </TextArea>
        </div>

        <ImageFrame
          src="/images/foto-45.webp"
          alt="Capela do Santíssimo"
          imageClass="object-contain"
          marginClass="mb-6"
        />

        <div className="w-full mb-6">
          <TextArea>
            <p>
              “Aqui de Cristo, afirma-se sua dupla natureza: não está qual
              partícula, nem somente em figura: mas está em essência de Cristo a
              carne pura, e integralmente esconde-se nesse estreita clausura”.
            </p>
          </TextArea>
        </div>

        <div className="w-full mb-6">
          <TextArea>
            <p>
              Do Ave, vivens Hostia,
              <br />
              de São José de Anchieta.
            </p>
          </TextArea>
        </div>

        <ImageCarousel images={santaQuartoPhotos} className="mb-6" />

        <div className="w-full mb-6">
          <TextArea>
            <p>
              Nessa mesma Reritiba viveria seus últimos três a cinco anos, não
              por uma exigência do padre José de Anchieta, que afirmava: “sou
              jesuíta, formado na obediência, irei para onde meus superiores
              determinarem”. Entretanto, sabendo de sua relação de afetividade
              com a aldeia de Reritiba, seus irmãos de ordem tem a sensibilidade
              de enviá-lo para essa missão que lhe oferecia, além do amor dos
              tupiniquins com o seu Abaré – guaçu (“grande padre” ou “grande
              pajé”), a poderosa lembrança do arquipélago das Canárias, em
              especial, Tenerife, devido à proximidade da geográfica. Dessa
              forma, a família que nunca mais o padre José de Anchieta viu, após
              deixar as Canárias (1548) em direção à Coimbra e, ao Brasil
              (1553), vivendo aqui por 44 anos, em Reritiba, pai, mãe, irmãos,
              padrinhos, amigos e nativo, se apresentavam aos olhos, ao coração
              e à mente do nosso Santo, que assim se remetia a este cenário:
              “Rerigtibá meu país”. Inegavelmente uma vida de entrega à
              evangelização. Continua sendo!!!
            </p>
          </TextArea>
        </div>

        <div className="w-full mb-6">
          <TextArea>
            <p>
              No dia 09 de junho de 1597, as enfermidades, a idade avançada para
              o seu tempo (63 anos de idade), e uma vida de muita entrega à
              missão da evangelização, parte para a eternidade junto ao SENHOR.
              “[…] o chefe da aldeia, logo de madrugada, ia acordando os que
              dormiam com sentidas lamentações: Morreu o que era nosso pai …, o
              que nos amava como filhos…., o que deu a vida por nós… […] daí a
              pouco era como uma procissão ressoante de dor. Por horas inteiras
              […]”.
            </p>
          </TextArea>
        </div>

        <div className="w-full mb-6">
          <TextArea>
            <p>
              O dia 09 de junho é reconhecido, de forma oficial pelo Estado
              brasileiro, como o dia de São José de Anchieta, devendo ser
              recordado em todas as escolas como vulto nacional.
            </p>
          </TextArea>
        </div>

        <ImageCarousel images={sepultamentoAnchietaPhotos} className="mb-6" />

        <div className="w-full mb-6">
          <TextArea>
            <p>
              Seu corpo foi transladado em 4 dias até a sede dos jesuítas em
              Vitória por três mil indígenas, sendo o destino final, o antigo
              Colégio de São Tiago (construído em 1551), seminário e residência
              dos superiores jesuítas na Capitania do Espírito Santo, atualmente
              Palácio Anchieta, sede do governo estadual. Essa escolha, assim
              como tudo o que foi pensado e realizado, representa, a grandeza do
              nosso Santo, de como era visto e tratado perante suas comunidades
              nativas: liderança espiritual e política. Ao longo dos séculos
              foram realizadas diversas intervenções, sobretudo, nas décadas
              iniciais da República, resultando na atual fachada em estilo
              eclético.
            </p>
          </TextArea>
        </div>

        <ImageFrame
          src="/images/foto-53.webp"
          alt="Lápide de São José de Anchieta"
          imageClass="object-contain"
          marginClass="mb-6"
        />

        <ImageFrame
          src="/images/foto-54.webp"
          alt="Passos de São José de Anchieta"
          imageClass="object-contain"
          marginClass="mb-6"
        />

        <ImageFrame
          src="/images/foto-55.webp"
          alt="Passos de São José de Anchieta mapa"
          imageClass="object-contain"
          marginClass="mb-6"
        />

        <ImageFrame
          src="/images/foto-56.webp"
          alt="Passos de São José de Anchieta"
          imageClass="object-contain"
          marginClass="mb-6"
        />

        <div className="w-full mb-6">
          <TextArea>
            <p>
              No interior do Palácio Anchieta, em Vitória, há um túmulo e um
              relicário dedicado ao santo, onde os visitantes podem encontrar
              uma lápide histórica e um fragmento de seus ossos (uma relíquia de
              primeiro grau). Buscando reviver a entrega, a espiritualidade e o
              legado nos ofertado por São José de Anchieta, convidamos nossos
              irmãos e irmãs para a Romaria “Os Passos de Anchieta”, famoso
              roteiro de peregrinação e turismo ecológico com 100 km de
              extensão, localizado no litoral do Espírito Santo. A jornada
              reconstitui a trilha que o jesuíta São José de Anchieta percorria
              quinzenalmente nos últimos anos de sua vida, viajando da antiga
              Vila de Rerigtiba (atual município de Anchieta) até a Vila de
              Nossa Senhora da Vitória. A caminhada oficial coletiva acontece
              anualmente durante o feriado de Corpus Christi, durando exatamente
              quatro dias. Momento de fé, de devoção, de gratidão, de reflexão,
              de fortalecimento de nossos valores cristãos e de nossa eterna
              aliança com Deus!!!
              <br />
              <br />
              Aos irmãos e irmãs interessados, recomendamos procurar nas redes
              sociais, a Associação Brasileira dos Amigos dos Passos de Anchieta
              (ABAPA), instituição organizadora, que oferece aos peregrinos e
              romeiros a logística necessária para os quatro dias dos passos
              (etapas diárias) que compõem o percurso oficial.
            </p>
          </TextArea>
        </div>

        <ImageCarousel images={telaAnchietaPhotos} className="mb-6" />

        <div className="w-full mb-6">
          <TextArea>
            <p>
              Em nossa atual Sacristia encontra-se esta maravilhosa obra de
              arte, do artista plástico paulista Alfredo Cherubín, foi
              consagrada pelo Papa Francisco S.J., nascido Jorge Mario Bergoglio
              (1936 – 2025), durante a missa de canonização do Padre Anchieta,
              no dia 03 abril de 2014, no Vaticano. Transformando o “Apóstolo do
              Brasil” no terceiro santo brasileiro.
            </p>
          </TextArea>
        </div>

        <ImageFrame
          src="/images/foto-59.webp"
          alt="São José de Anchieta"
          imageClass="object-contain"
          marginClass="mb-6"
        />

        <div className="w-full mb-6">
          <TextArea>
            <p>
              São José de Anchieta, além de sua grande vocação missionária e
              evangelizadora, era também dotado das seguintes potencialidades:
              pacificador, fundador de cidades, fundador de missões, geógrafo,
              historiador, boticário, praticante de medicina, botânico,
              antropólogo, etnólogo, naturalista, ambientalista, ecologista,
              linguista, escritor, poeta, dramaturgo, professor. Nosso Santo
              também recebeu os seguintes títulos: padroeiro da cidade de
              Anchieta dentre outros municípios e paróquias pelo Brasil,
              padroeiro dos professores, padroeiro dos catequistas, padroeiro
              dos farmacêuticos. É considerado patrono: da cadeira número 01 da
              Academia Brasileira de Letras (ABL); é patrono também da cadeira
              número 01 da Academia Brasileira de Música (ABM); padroeiro
              nacional: declarado co – padroeiro do Brasil em 2015, pela
              Conferência Nacional dos Bispos do Brasil e pelo Papa Francisco;
              Apóstolo do Brasil; Pai da cultura brasileira; Defensor dos
              Direitos Humanos; Herói Nacional.
            </p>
          </TextArea>
        </div>

        <ImageCarousel images={reliquiasPhotos} className="mb-6" />

        <div className="w-full mb-6">
          <TextArea>
            <p>
              São José de Anchieta, conhecido como o “Apóstolo do Brasil”, é
              cercado por relatos de prodígios extraordinários que aconteceram
              tanto em vida quanto após a sua morte. Embora sua canonização em
              2014 pelo Papa Francisco tenha ocorrido por meio de um processo
              chamado “canonização equipolente” — que dispensa a comprovação de
              um milagre recente devido ao seu histórico de santidade e culto
              antigo —, a biografia jesuíta e a tradição popular registram
              dezenas de fenômenos sobrenaturais.
            </p>
          </TextArea>
        </div>

        {/* fim da Seção 3 */}
        <hr
          className="w-16 border-t border-stone-200/60 mx-auto"
          aria-hidden="true"
        />
      </div>
    </>
  );
}
