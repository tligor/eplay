import styled from 'styled-components'
import { cores } from '../../styles'
import { Props } from './types/types'

export const TagContainer = styled.div<Props>`
  background-color: ${cores.rosa};
  color: ${cores.brancoSeco};
  font-size: ${(props) => (props.size === 'big' ? '16px' : '12px')};
  line-height: ${(props) =>
    props.size === 'big'
      ? '18px'
      : '14px'}; /* Ajuste a line-height para controlar a altura do texto */
  text-align: center;
  font-weight: 700;
  padding: ${(props) => (props.size === 'big' ? '8px 16px' : '4px 8px')};
  display: inline-block;
  border-radius: 4px;
  margin-left: 8px;
  z-index: 2;
  max-height: 26px;
  overflow: hidden;
  white-space: nowrap;
  min-width: fit-content;
  width: auto;
`
