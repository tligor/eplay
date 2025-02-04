import Button from '../Button'
import Tag from '../Tag'
import {
  Card,
  Descricao,
  Titulo,
  Infos,
  Imagem,
  Conteudo,
  Nota
} from './styles'
import star from '../../assets/images.nova/star.svg'

type Props = {
  title: string
  description: string
  infos: string[]
  image: string
  nota: number
}

const Product = ({ description, image, infos, title, nota }: Props) => (
  <Card>
    <Infos>
      {infos.map((info) => (
        <Tag key={info}>{info}</Tag>
      ))}
    </Infos>
    <Imagem src={image} alt={title} />
    <Descricao>
      <div>
        <Titulo>{title}</Titulo>
        <Nota>
          {nota}
          <img src={star} alt="Rating" />
        </Nota>
      </div>
      <Conteudo>{description}</Conteudo>
      <Button
        type="button"
        title="Saiba mais"
        onClick={() => console.log('Navegar para detalhes')}
      >
        Saiba mais
      </Button>
    </Descricao>
  </Card>
)

export default Product
