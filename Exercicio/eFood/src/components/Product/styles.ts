import styled from 'styled-components'
import { cores } from '../../styles'
import { TagContainer } from '../Tag/styles'

export const Card = styled.div`
  background-color: ${cores.brancoSeco};
  border-radius: 8px;
  position: relative;
  margin-bottom: 48px;

  ${TagContainer} {
    margin-right: 8px;
    height: 26px;
    width: auto;
    padding: 4px 6px;
  }
`

export const Titulo = styled.h3`
  font-size: 16px;
  font-weight: bold;
  display: block;
  line-height: 21px;
  margin-top: 8px;
  margin-bottom: 16px;
  padding: 8px;
`

export const Descricao = styled.p`
  font-size: 14px;
  line-height: 22px;
  display: block;
  margin-top: 16px;
  padding: 8px;
`
export const Infos = styled.div`
  position: absolute;
  top: 16px;
  left: 75%;
  display: flex;
`
export const Imagem = styled.img`
  width: 100%;
`
export const Informacoes = styled.div`
  border: 1px solid ${cores.rosa};
`
