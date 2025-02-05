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
  id: string
  $fullWidth?: boolean
  $isHome?: boolean
  onOpenModal?: () => void // Tornando a prop opcional
}

const Product = ({
  description,
  image,
  infos,
  title,
  nota,
  id,
  $isHome = true,
  onOpenModal // Recebendo a prop
}: Props) => {
  const navigate = useNavigate()

  const handleNavigate = () => {
    if ($isHome) {
      navigate(`/prato/${id}`)
    } else {
      onOpenModal?.() // Chamando a função apenas se existir
    }
  }

  return (
    <Card $isHome={$isHome}>
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
          title={$isHome ? 'Saiba mais' : 'Adicionar ao carrinho'}
          onClick={handleNavigate}
          fullWidth={!$isHome}
          isHome={$isHome}
        >
          {$isHome ? 'Saiba mais' : 'Adicionar ao carrinho'}
        </Button>
      </Descricao>
    </Card>
  )
}

export default Product
