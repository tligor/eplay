import styled from 'styled-components'
import { Props } from '.'
import { cores } from '../../styles'

export const Container = styled.section<
  Omit<Props, 'title' | 'pratos'> & { isHome?: boolean }
>`
  display: flex;
  padding: ${(props) =>
    props.isHome ? '32px 0' : '16px 0'}; // Menos padding na Prato1
  background-color: ${cores.branco};
`

export const List = styled.ul<{ isHome?: boolean }>`
  display: grid;
  grid-template-columns: ${(props) =>
    props.isHome ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)'};
  column-gap: ${(props) => (props.isHome ? '24px' : '40px')};
  margin-top: 40px;
  width: 100%;
  div {
    width: ${(props) => (props.isHome ? 'auto' : '320px')};
    height: ${(props) => (props.isHome ? '398px' : '338px')};
  }
`

export const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
`
