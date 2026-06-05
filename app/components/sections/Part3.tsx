import ImageFrame from '../ImageFrame';
import TextArea from '../TextArea';

export default function Part3() {
  return (
    <>
      <div>
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

        <div className="w-full mb-6">
          <TextArea>
            <p>
              Em 10 de fevereiro de 2021, após 20 anos de missão do Pe. Francisco
              Lucas, a paróquia recebeu seu segundo pároco: Pe. Carlos Sávio da
              Costa Ribeiro.
            </p>

            <p>
              Com o novo pároco, aconteceram reformas na Igreja Matriz,
              modernização elétrica, instalação de energia solar, reorganização da
              secretaria paroquial, melhorias litúrgicas, retorno e implantação de
              movimentos pastorais, além do fortalecimento da evangelização de
              jovens, adultos e crianças.
            </p>

            <p>
              Nosso pároco é um verdadeiro instrumento de evangelização. Por onde
              passa, com seus inúmeros dons, consegue tocar corações e aproximar
              crianças, jovens, adultos da Igreja e do amor de Deus.
            </p>

            <p>
              Sua dedicação, alegria e missão evangelizadora deram origem ao
              movimento “Paróquia em Movimento”, que traduz perfeitamente seu
              belíssimo trabalho pastoral: uma Igreja viva, acolhedora e em
              constante missão.
            </p>

            <p>
              Com a graça de Deus, a paróquia segue crescendo em unidade,
              participação e missão evangelizadora.
            </p>
          </TextArea>
        </div>

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
      </div>
    </>
  );
}
