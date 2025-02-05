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
  transition: right 0.3s ease-in-out, opacity 0.3s ease-in-out;
  z-index: 99;
  visibility: ${(props) => (props.isOpen ? 'visible' : 'hidden')};
  opacity: ${(props) => (props.isOpen ? 1 : 0)};
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
