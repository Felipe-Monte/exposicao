import ImageFrame from '../ImageFrame';
import TextArea from '../TextArea';

export default function Part4() {
  return (
    <>
      <div className="w-full mb-6">
        <TextArea>
          <p>
            A Paróquia conta, atualmente, com 36 grupos paroquiais, entre
            pastorais, movimentos e serviços. São aproximadamente 2.000 agentes
            envolvidos na missão de evangelizar.
          </p>
        </TextArea>
      </div>

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
        alt="Ministério da Palavra"
        imageClass="object-contain"
      />

      <p className="text-center text-xs sm:text-sm italic mb-6 font-sans">
        Ministério da Palavra
      </p>

      <ImageFrame
        src="/images/section2/picture25.webp"
        alt="Pastoral Adulto"
        imageClass="object-contain"
      />

      <p className="text-center text-xs sm:text-sm italic mb-6 font-sans">
        Coroinhas
      </p>

      <ImageFrame
        src="/images/section2/picture26.webp"
        alt="Pastoral Dizimo"
        imageClass="object-contain"
      />

      <p className="text-center text-xs sm:text-sm italic mb-6 font-sans">
        Pastoral Familiar
      </p>

      <ImageFrame
        src="/images/section2/picture27.webp"
        alt="Pessoa com Deficiência"
        imageClass="object-contain"
      />

      <p className="text-center text-xs sm:text-sm italic mb-6 font-sans">
        Apostolado da Oração
      </p>

      <ImageFrame
        src="/images/section2/picture28.webp"
        alt="Ministros Extraordinários da Comunhão Eucarística"
        imageClass="object-contain"
      />

      <p className="text-center text-xs sm:text-sm italic mb-6 font-sans">
        Ministros Extraordinários da Comunhão Eucarística
      </p>

      <ImageFrame
        src="/images/section2/picture29.webp"
        alt="Jovens em missão"
        imageClass="object-contain"
      />

      <p className="text-center text-xs sm:text-sm italic mb-6 font-sans">
        Jovens em missão
      </p>

      <div className="w-full mb-6">
        <TextArea>
          <p className="font-bold text-stone-900 mb-4">
            O total de grupos da Igreja são:
          </p>
          <ol className="list-decimal list-inside space-y-2 text-stone-700 font-sans text-sm">
            <li>Pastoral do Dízimo</li>
            <li>Pastoral do Esporte</li>
            <li>Pastoral da Escuta</li>
            <li>Pastoral Familiar</li>
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
    </>
  );
}
