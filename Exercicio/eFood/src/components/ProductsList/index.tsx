import Pratos from '../../models/Pratos'
import Product from '../Product'
import { Container, List } from './styles'

export type Props = {
  title?: string
  background: 'gray' | 'black'
  pratos: Pratos[]
  isHome?: boolean
  onOpenModal?: (prato: Pratos) => void
  truncateDescription?: boolean // Nova propriedade para controlar o truncamento
}

const ProductsList = ({
  background,
  pratos,
  title,
  isHome = true,
  onOpenModal,
  truncateDescription = false // Valor padrão é false
}: Props) => {
  if (!pratos || pratos.length === 0) {
    return <div>Nenhum prato disponível.</div>
  }

  return (
    <Container $background={background} $isHome={isHome}>
      <div className="container">
        {title && <h2>{title}</h2>}
        <List $isHome={isHome}>
          {pratos.map((prato) => {
            // Aplica o truncamento somente se truncateDescription for true
            const description = truncateDescription
              ? prato.description.length > 100
                ? `${prato.description.slice(0, 100)} (...)`
                : prato.description
              : prato.description

            return (
              <Product
                key={prato.id}
                title={prato.title}
                description={description}
                image={prato.image}
                infos={prato.infos}
                nota={prato.nota}
                id={prato.id}
                $isHome={isHome}
                onOpenModal={onOpenModal ? () => onOpenModal(prato) : undefined}
              />
            )
          })}
        </List>
      </div>
    </Container>
  )
}

export default ProductsList
