import styled from 'styled-components'
import { cores } from '../../styles'

interface CarrinhoContainerProps {
  isOpen: boolean // Definir o tipo da propriedade `isOpen`
}

export const CarrinhoContainer = styled.aside<CarrinhoContainerProps>`
  width: 360px;
  height: 100vh;
  background: ${cores.rosa};
  position: fixed;
  top: 0;
  right: ${(props) => (props.isOpen ? '0' : '-360px')};
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.1);
  padding: 20px;
  overflow-y: auto;
  transition: right 0.3s ease-in-out;
  z-index: 99;
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
`

export const CarrinhoHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`

export const CarrinhoLista = styled.ul`
  list-style: none;
  padding: 0;
`

export const CarrinhoItem = styled.li`
  display: flex;
  margin-bottom: 15px;
  width: 100%;
  height: 100px;
  color: ${cores.rosa};
  background-color: ${cores.cinza};
  padding: 10px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: relative;

  div {
    display: flex;
    flex-direction: column;
    margin-left: 8px;

    h4 {
      margin-bottom: 16px;
    }
  }

  button {
    background: transparent;
    border: none;
    padding: 5px 10px;
    cursor: pointer;
    position: absolute;
    bottom: 0;
    right: 0;
  }
`

export const CarrinhoTotal = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  font-weight: bold;
`

export const CarrinhoButton = styled.button`
  width: 100%;
  text-align: center;
  padding: 10px;
  font-size: 16px;
  font-weight: 700;
  background: ${cores.cinza};
  color: ${cores.rosa};
  border: none;
  cursor: pointer;
  margin-top: 20px;
`
export const ImgProduto = styled.img`
  width: 80px;
  height: 80px;
`
export const FormularioEntregaContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  h3 {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 16px;
    color: ${cores.cinza};
  }
  label {
    font-size: 16px;
    font-weight: 700;
    line-height: 16.4px;
    color: ${cores.cinza};
  }
`
export const FormularioInput = styled.input`
  width: 100%;
  padding: 8px;
  height: 32px;
  border: 1px solid ${cores.cinza};
  border-radius: 4px;
  outline: none;

  &::placeholder {
    color: ${cores.cinza};
  }
`
export const FormularioButton = styled.button`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  font-weight: 700;
  background: ${cores.cinza};
  color: ${cores.rosa};
  border: none;
  cursor: pointer;
  margin-top: 8px;

  &:hover {
    opacity: 0.9;
  }
`
