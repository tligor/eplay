// components/Banner.tsx

import { Imagem, Title, Container, Categoria } from './styles'

type BannerProps = {
  image: string // Espera uma imagem como prop
  title: string
  infos: string[] // Adicionando infos como prop
}

const Banner = ({ image, title, infos }: BannerProps) => (
  <Container className="container">
    <Imagem style={{ backgroundImage: `url(${image})` }}></Imagem>
    <Title>{title}</Title>
    <Categoria>
      {infos.map((info, index) => (
        <span key={index}>{info}</span>
      ))}
    </Categoria>
  </Container>
)

export default Banner
