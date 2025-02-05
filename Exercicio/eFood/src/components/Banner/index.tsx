import { Imagem, Title, Container, Categoria } from './styles'

type BannerProps = {
  image: string // Espera uma imagem como prop
  title: string
  infos: string[] // infos continua sendo um array de strings
}

const Banner = ({ image, title, infos }: BannerProps) => (
  <Container className="container">
    <Imagem image={image} />
    <Title>{title}</Title>
    <Categoria>
      {/* Renderiza todas as infos passadas */}
      {infos.map((info, index) => (
        <span key={index}>{info}</span>
      ))}
    </Categoria>
  </Container>
)

export default Banner
