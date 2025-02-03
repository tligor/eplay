import styled from 'styled-components'
import { Props } from '.'
import { cores } from '../../styles'

export const Container = styled.section<Omit<Props, 'title' | 'games'>>`
  display: flex;
  padding: 32px 0;
  background-color: ${cores.branco};
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 24px;
  margin-top: 40px;

  div {
    width: 472px;
    height: 398px;
  }
`

export const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
`
