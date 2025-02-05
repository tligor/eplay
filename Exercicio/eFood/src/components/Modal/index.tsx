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
}

const Modal = ({ isOpen, onClose, image, title, description }: ModalProps) => {
  if (!isOpen) return null // Não renderiza o modal se não estiver aberto

  return (
    <ModalOverlay>
      <ModalContent>
        <ModalImage src={image} alt={title} />
        <ModalDetails>
          <ModalTitle>{title}</ModalTitle>
          <ModalDescription>{description}</ModalDescription>
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
