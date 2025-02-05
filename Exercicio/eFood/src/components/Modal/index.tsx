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

type ModalProps = {
  isOpen: boolean
  onClose: () => void
  image: string
  title: string
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
          <ModalButton onClick={onClose}>Fechar</ModalButton>
        </ModalDetails>
        <CloseButton onClick={onClose}>
          <img src="/path/to/close-icon.svg" alt="Fechar" />
        </CloseButton>
      </ModalContent>
    </ModalOverlay>
  )
}

export default Modal
