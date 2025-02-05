import styled from 'styled-components'
import { cores } from '../../styles'

export const Card = styled.div<{ $isHome?: boolean }>`
  background-color: ${(props) =>
    props.$isHome ? cores.brancoSeco : cores.rosa}; // Usando $isHome
  overflow: hidden;
  width: 100%;
  max-width: ${({ $isHome }) => ($isHome ? '472px' : '100%')}; // Usando $isHome
  margin-bottom: 48px;
  display: flex;
  flex-direction: column;
  position: relative;
`

export const Imagem = styled.img<{ $isHome?: boolean }>`
  width: 100%;
  height: ${(props) => (props.$isHome ? '200px' : '167px')};
  object-fit: cover;
  padding: ${(props) => (props.$isHome ? '0px' : '8px')};
`

export const Infos = styled.div`
  position: absolute;
  right: 8px;
  top: 8px;
`

export const Descricao = styled.div<{ $isHome?: boolean }>`
  display: flex;
  flex-direction: column;
  border: ${({ $isHome }) =>
    $isHome ? `1px solid ${cores.rosa}` : 'none'}; // Usando $isHome
  border-top: none;
  padding: 8px; // Padding aplicado em ambas as páginas

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-height: 25px;
  }
`

export const Titulo = styled.h2`
  font-size: 18px;
  font-weight: bold;
  justify-content: space-between;
`

export const Nota = styled.div`
  font-size: 18px;
  font-weight: bold;
  img {
    width: 21px;
    height: 20px;
    margin-left: 8px;
  }
`

export const Conteudo = styled.p<{ $isHome?: boolean }>`
  height: ${(props) => (props.$isHome ? '82px' : '75px')}; // Usando $isHome
  margin: 16px 0;
  overflow-wrap: break-word;
  text-align: left;
  font-size: 15px;
`
