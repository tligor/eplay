import { useNavigate } from 'react-router-dom'
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
  id: number
  isHome?: boolean // Valor padrão é true (Home)
}

const Product = ({
  description,
  image,
  infos,
  title,
  nota,
  id,
  isHome = true // Valor padrão é true (Home)
}: Props) => {
  const navigate = useNavigate()

  const handleNavigate = () => {
    if (isHome) {
      navigate(`/prato/${id}`) // Navega para a página de detalhes do prato usando o id
    } else {
      // Lógica para adicionar ao carrinho
      console.log('Adicionar ao carrinho:', id)
    }
  }

  return (
    <Card isHome={isHome}>
      {/* Renderiza Infos e Tags apenas se isHome for true */}
      {isHome && (
        <Infos>
          {infos.map((info) => (
            <Tag key={info}>{info}</Tag>
          ))}
        </Infos>
      )}
      <Imagem src={image} alt={title} isHome={isHome} />
      <Descricao isHome={isHome}>
        {' '}
        {/* Passa a prop isHome */}
        <div>
          <Titulo>{title}</Titulo>
          {isHome && (
            <Nota>
              {nota}
              <img src={star} alt="Rating" />
            </Nota>
          )}
        </div>
        <Conteudo>{description}</Conteudo>
        <Button
          type="button"
          title={isHome ? 'Saiba mais' : 'Adicionar ao carrinho'} // Altera o texto do botão
          onClick={handleNavigate}
          fullWidth={!isHome} // Ocupa todo o container na segunda página
          isHome={isHome} // Passa a prop isHome
        >
          {isHome ? 'Saiba mais' : 'Adicionar ao carrinho'}
        </Button>
      </Descricao>
    </Card>
  )
}

export default Product
