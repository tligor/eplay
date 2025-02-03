import Tag from '../Tag'
import { Card, Descricao, Titulo, Infos, Imagem } from './styles'

type Props = {
  title: string
  category: string
  system: string
  description: string
  infos: string[]
  image: string
}

const Product = ({ description, image, infos, title }: Props) => (
  <Card>
    <Imagem src={image} alt={title} />
    <Infos>
      {infos.map((info) => (
        <Tag key={info}>{info}</Tag>
      ))}
    </Infos>
    <Titulo>{title}</Titulo>
    <Descricao>{description}</Descricao>
  </Card>
)

export default Product
