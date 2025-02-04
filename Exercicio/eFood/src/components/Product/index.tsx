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
  isHome?: boolean
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
    navigate(`/prato/${id}`) // Navega para a página de detalhes do prato usando o id
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
      <Descricao>
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
          title="Saiba mais"
          onClick={handleNavigate} // Navega para a página de detalhes ao clicar no botão
        >
          Saiba mais
        </Button>
      </Descricao>
    </Card>
  )
}

export default Product
