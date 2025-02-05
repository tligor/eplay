import styled from 'styled-components'
import { cores } from '../../styles'

export const ModalOverlay = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5); /* Fundo semi-transparente */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`

export const ModalContent = styled.div`
  width: 1024px;
  height: 344px;
  background-color: ${cores.rosa};
  display: flex;
  position: relative;
  padding: 32px;
  border-radius: 8px;
`

export const ModalImage = styled.img`
  width: 280px;
  height: 280px;
  object-fit: cover;
  border-radius: 8px;
`

export const ModalDetails = styled.div`
  margin-left: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const ModalTitle = styled.h2`
  font-size: 18px;
  font-weight: 900;
  color: ${cores.branco};
`

export const ModalDescription = styled.p`
  font-size: 14px;
  color: ${cores.branco};
  width: 656px;
  height: 176px;
  overflow-y: auto;
`

export const ModalButton = styled.button`
  width: 218px;
  height: 24px;
  background-color: ${cores.cinza};
  color: ${cores.rosa};
  border: none;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  text-align: center;
  border-radius: 4px;
`

export const CloseButton = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  background: none;
  border: none;
  cursor: pointer;

  img {
    width: 16px;
    height: 16px;
  }
`
