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
  $fullWidth?: boolean
  $isHome?: boolean // Usando $isHome
}

const Product = ({
  description,
  image,
  infos,
  title,
  $fullWidth = false, // Usando um valor padrão para $fullWidth
  nota,
  id,
  $isHome = true // Usando $isHome com valor padrão
}: Props) => {
  const navigate = useNavigate()

  const handleNavigate = () => {
    if ($isHome) {
      navigate(`/prato/${id}`) // Navega para a página de detalhes do prato usando o id
    } else {
      // Lógica para adicionar ao carrinho
      console.log('Adicionar ao carrinho:', id)
    }
  }

  return (
    <Card $isHome={$isHome}>
      {/* Renderiza Infos e Tags apenas se $isHome for true */}
      {$isHome && (
        <Infos>
          {infos.map((info) => (
            <Tag key={info}>{info}</Tag>
          ))}
        </Infos>
      )}

      <Imagem src={image} alt={title} $isHome={$isHome} />

      <Descricao $isHome={$isHome}>
        <div>
          <Titulo>{title}</Titulo>
          {$isHome && (
            <Nota>
              {nota}
              <img src={star} alt="Rating" />
            </Nota>
          )}
        </div>
        <Conteudo>{description}</Conteudo>

        <Button
          type="button"
          title={$isHome ? 'Saiba mais' : 'Adicionar ao carrinho'} // Altera o texto do botão
          onClick={handleNavigate}
          fullWidth={!$isHome} // Passando $fullWidth como baseado no valor de $isHome
          isHome={$isHome} // Passando $isHome para o botão também
        >
          {$isHome ? 'Saiba mais' : 'Adicionar ao carrinho'}
        </Button>
      </Descricao>
    </Card>
  )
}

export default Product
