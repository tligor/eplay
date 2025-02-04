import styled from 'styled-components'
import { cores } from '../../styles'

export const Card = styled.div`
  background-color: #fff;
  overflow: hidden;
  width: 100%;
  max-width: 472px;
  margin-bottom: 48px;
  display: flex;
  flex-direction: column;
  position: relative;
`

export const Imagem = styled.img<{ isHome?: boolean }>`
  width: 100%;
  height: ${(props) =>
    props.isHome ? '200px' : '250px'}; // 200px na Home, 250px na Prato1
  object-fit: cover;
`

export const Infos = styled.div`
  position: absolute;
  right: 8px;
  top: 8px;
`

export const Descricao = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid ${cores.rosa};
  border-top: none;
  &:nth-child(n + 3) {
    padding: 8px;
  }

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
export const Conteudo = styled.p`
  height: 82px;
  margin: 16px 0;
  overflow-wrap: break-word;
  text-align: left;
  font-size: 15px;
`
