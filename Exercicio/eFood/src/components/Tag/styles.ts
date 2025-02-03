import styled from 'styled-components'
import { cores } from '../../styles'
import { Props } from '.'

export const TagContainer = styled.div<Props>`
  background-color: ${cores.rosa};
  color: ${cores.brancoSeco};
  font-size: 12px;
  line-height: 14px;
  text-align: center;
  font-weight: 700;
  padding: 0;
`
