import Pratos from '../../models/Pratos'
import Product from '../Product'
import { Container, List } from './styles'

export type Props = {
  title?: string
  background: 'gray' | 'black'
  pratos: Pratos[]
}

const ProductsList = ({ background, pratos, title }: Props) => {
  if (!pratos || pratos.length === 0) {
    return <div>Nenhum prato disponível.</div>
  }

  return (
    <Container background={background}>
      <div className="container">
        {title && <h2>{title}</h2>}
        <List>
          {pratos.map((prato) => (
            <Product
              key={prato.id}
              title={prato.title}
              description={prato.description}
              image={prato.image}
              infos={prato.infos}
              nota={prato.nota}
              id={prato.id}
            />
          ))}
        </List>
      </div>
    </Container>
  )
}

export default ProductsList
