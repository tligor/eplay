import styled from 'styled-components'
import { cores } from '../../styles'

export const Card = styled.div<{ isHome?: boolean }>`
  background-color: ${(props) =>
    props.isHome
      ? cores.brancoSeco
      : cores.rosa}; // brancoSeco na Home, rosa na Página1
  overflow: hidden;
  width: 100%;
  max-width: ${({ isHome }) => (isHome ? '472px' : '100%')};
  margin-bottom: 48px;
  display: flex;
  flex-direction: column;
  position: relative;
`

export const Imagem = styled.img<{ isHome?: boolean }>`
  width: 100%;
  height: ${(props) =>
    props.isHome ? '200px' : '167px'}; // 200px na Home, 167px na Página1
  object-fit: cover;
  padding: ${(props) =>
    props.isHome ? '0px' : '8px'}; // 0px na Home, 8px na Página1
`

export const Infos = styled.div`
  position: absolute;
  right: 8px;
  top: 8px;
`

export const Descricao = styled.div<{ isHome?: boolean }>`
  display: flex;
  flex-direction: column;
  border: ${({ isHome }) =>
    isHome ? `1px solid ${cores.rosa}` : 'none'}; // Borda apenas na Home
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

export const Conteudo = styled.p<{ isHome?: boolean }>`
  margin: 16px 0;
  overflow-wrap: break-word;
  text-align: left;
  font-size: 15px;
  display: -webkit-box;
  -webkit-line-clamp: ${({ isHome }) =>
    isHome ? 5 : 5}; // Limita o número de linhas (4 na Home, 3 na Página1)
  -webkit-box-orient: vertical;
  overflow: hidden;
`
