import Tag from '../Tag'
import { Card, Descricao, Titulo } from './styles'

const Product = () => (
  <Card>
    <img src="https://placehold.co/222x250" alt="" />
    <Titulo>Nome do jogo</Titulo>
    <Tag>Categoria</Tag>
    <Tag>Windows</Tag>
    <Descricao>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos voluptatem
      at vero, reiciendis maiores debitis quibusdam saepe neque a quas
      praesentium veritatis sapiente, quo vel, incidunt sit sed! Ipsum, error!
    </Descricao>
  </Card>
)

export default Product
