import styled from 'styled-components'
import { Props } from '.'
import { cores } from '../../styles'

export const Container = styled.section<{
  $background: 'gray' | 'black'
  $isHome?: boolean
}>`
  display: flex;
  padding: ${(props) =>
    props.$isHome ? '32px 0' : '16px 0'}; // Usando $isHome
  background-color: ${cores.branco};
`

export const List = styled.ul<{ $isHome?: boolean }>`
  display: grid;
  grid-template-columns: ${(props) =>
    props.$isHome ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)'}; // Usando $isHome
  column-gap: ${(props) => (props.$isHome ? '24px' : '40px')}; // Usando $isHome
  margin-top: 40px;
  width: 100%;
  div {
    width: ${(props) => (props.$isHome ? 'auto' : '320px')}; // Usando $isHome
    height: ${(props) => (props.$isHome ? '398px' : '338px')}; // Usando $isHome
  }
`
