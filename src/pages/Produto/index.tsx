import { useParams } from 'react-router-dom'
import Hero from '../../components/Hero'
import Section from '../../components/Section'

const Produto = () => {
  const { id } = useParams()

  return (
    <>
      <Hero />
      <Section title="Sobre o jogo" background="black">
        <p>
          Hogwarts Legacy é um RPG de ação imersivo e de mundo aberto ambientado
          no mundo introduzido pela primeira vez nos livros de Harry Potter.
          Embarque em uma jornada por locais novos e familiares enquanto explora
          e descubra animais fantásticos, personalize seu personagem e crie
          poçoes, domine o lançamento de feitiços, aprimore talentos e torne-se
          o bruxo que deseja ser. Faça aliados, lute contra os bruxos das trevas
          e decida o destino do mundo bruxo. Seu legado é o que você faz dele.
          Viva o inesperado
        </p>
      </Section>
      <Section title="Mais detalhes" background="gray">
        <p>
          Plataforma: Playstation 5 Desenvolvedor: Avalanche Software Editora:
          Portkey Games, subsidiária da Warner Bros. Interactive Entertainment.
          Idiomas: O jogo oferece suporte a diversos idiomas, incluindo inglês,
          espanhol, francês, alemão, italiano, português, entre outros. As
          opções de áudio e legendas podem ser ajustadas nas configurações do
          jogo.
        </p>
      </Section>
    </>
  )
}

export default Produto
