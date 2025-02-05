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
  largeDescription: string // Nova propriedade
  Quantidade: string // Nova propriedade
}

const Modal = ({
  isOpen,
  onClose,
  image,
  title,
  description,
  preco,
  largeDescription,
  Quantidade
}: ModalProps) => {
  if (!isOpen) return null // Não renderiza o modal se não estiver aberto

  return (
    <ModalOverlay>
      <ModalContent>
        <ModalImage src={image} alt={title} />
        <ModalDetails>
          <ModalTitle>{title}</ModalTitle>
          <ModalDescription>{largeDescription}</ModalDescription>
          <p>{Quantidade}</p> {/* Exibindo a quantidade */}
          <ModalButton onClick={onClose}>
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
