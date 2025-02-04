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

export const Imagem = styled.img`
  width: 100%;
  height: 200px;
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
    justify-content: space-between;
    max-height: 45px;
    align-items: center;
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

export const Button = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 8px 16px;
  cursor: pointer;
  font-size: 14px;
  margin-top: 16px;

  &:hover {
    background-color: #0056b3;
  }
`
export const Conteudo = styled.p`
  height: 90px;
`
