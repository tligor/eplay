import styled from 'styled-components'

import { Link } from 'react-router-dom'
import { cores } from '../../styles'

export const ButtonContainer = styled.button`
  border: 2px solid ${cores.rosa};
  color: ${cores.cinza};
  background-color: ${cores.rosa};
  font-size: 14px;
  font-weight: 700;
  line-height: 16px;
  cursor: pointer;
  width: 82px;
  height: 24px;
`
export const ButtonLink = styled(Link)`
  border: 2px solid ${cores.rosa};
  color: ${cores.rosa};
  background-color: transparent;
  font-size: 16px;
  font-weight: bold;
  padding: 8px 16px;
  text-decoration: none;
  border-radius: 8px;
`
