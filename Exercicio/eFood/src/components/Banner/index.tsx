import { Imagem, Title, Container } from './styles'

type BannerProps = {
  image: string // Espera uma imagem como prop
  title: string
}

const Banner = ({ image, title }: BannerProps) => (
  <Container className="container">
    <Imagem style={{ backgroundImage: `url(${image})` }}></Imagem>
    <Title>{title}</Title>
  </Container>
)

export default Banner
