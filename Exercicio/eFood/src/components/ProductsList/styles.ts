import styled from 'styled-components'
import { Props } from '.'
import { cores } from '../../styles'

export const Container = styled.section<Omit<Props, 'title' | 'pratos'>>`
  display: flex;
  padding: 32px 0;
  background-color: ${cores.branco};
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 24px;
  margin-top: 40px;
  width: 100%;
  div {
    width: auto;
    height: 400px;
  }
`

export const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
`
