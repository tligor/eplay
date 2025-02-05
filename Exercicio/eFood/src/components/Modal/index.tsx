import { useDispatch } from 'react-redux'
import { adicionarAoCarrinho } from '../../store/Slice/carrinhoSlice'
import {
  ModalOverlay,
  ModalContent,
  ModalImage,
  ModalDetails,
  ModalTitle,
  ModalDescription,
  ModalButton,
  CloseButton
} from './styles'
import btnclose from '../../assets/images.nova/close.svg'

type ModalProps = {
  isOpen: boolean
  onClose: () => void
  image: string
  title: string
  preco: number
  description: string
  largeDescription: string
  Quantidade: string
  id: number
  nota: number
  infosts: string
  onOpenCarrinho: () => void // Função para abrir o carrinho
}

const Modal = ({
  isOpen,
  onClose,
  image,
  title,
  description,
  preco,
  largeDescription,
  Quantidade,
  id,
  nota,
  infosts,
  onOpenCarrinho
}: ModalProps) => {
  // Garantir que useDispatch é chamado no topo do componente
  const dispatch = useDispatch()

  // Não renderizar o modal se não estiver aberto
  if (!isOpen) return null

  // Função que será chamada quando o botão de adicionar for clicado
  const handleAdicionarAoCarrinho = () => {
    const prato = {
      id,
      title,
      preco,
      image,
      description,
      largeDescription,
      quantidade: Quantidade,
      nota,
      infosts,
      infos: [infosts] // Certificando-se de que infos seja um array
    }

    // Despachando a ação para adicionar o item ao carrinho
    dispatch(adicionarAoCarrinho(prato))

    // Abrindo o carrinho e fechando o modal
    onOpenCarrinho()
    onClose()
  }

  return (
    <ModalOverlay>
      <ModalContent>
        <ModalImage src={image} alt={title} />
        <ModalDetails>
          <ModalTitle>{title}</ModalTitle>
          <ModalDescription>{largeDescription}</ModalDescription>
          <p>{Quantidade}</p>
          <ModalButton onClick={handleAdicionarAoCarrinho}>
            Adicionar ao carrinho - R$ {preco.toFixed(2)}
          </ModalButton>
        </ModalDetails>
        <CloseButton onClick={onClose}>
          <img src={btnclose} alt="Fechar" />
        </CloseButton>
      </ModalContent>
    </ModalOverlay>
  )
}

export default Modal
