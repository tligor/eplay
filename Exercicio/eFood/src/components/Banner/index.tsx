import { Imagem, Title, Container, Categoria } from './styles'

type BannerProps = {
  image: string // Espera uma imagem como prop
  title: string
  infos: string[] // infos continua sendo um array de strings
}

const Banner = ({ image, title, infos }: BannerProps) => {
  // Remove "da Semana" do primeiro elemento do array infos
  const infosModificada = infos[0].replace('da Semana', '').trim()

  return (
    <Container className="container">
      <Imagem style={{ backgroundImage: `url(${image})` }}></Imagem>
      <Title>{title}</Title>
      <Categoria>
        {/* Renderiza a string modificada */}
        <span>{infosModificada}</span>
      </Categoria>
    </Container>
  )
}

export default Banner
