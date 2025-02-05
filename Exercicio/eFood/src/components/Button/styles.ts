import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { cores } from '../../styles'

type ButtonProps = {
  $fullWidth?: boolean
  $isHome?: boolean
}

export const ButtonContainer = styled.button<ButtonProps>`
  border: 2px solid ${cores.rosa};
  color: ${({ $isHome }) => ($isHome ? `${cores.cinza}` : `${cores.rosa}`)};
  background-color: ${({ $isHome }) =>
    $isHome ? `${cores.rosa}` : `${cores.cinza}`};
  font-size: 14px;
  font-weight: 700;
  line-height: 16px;
  cursor: pointer;
  width: ${(props) => (props.$fullWidth && !props.$isHome ? '100%' : '82px')};
  height: 24px;
  text-align: center;
  transition: background-color 0.3s ease;
`

export const ButtonLink = styled(Link)<ButtonProps>`
  border: 2px solid ${cores.rosa};
  color: ${cores.rosa};
  background-color: transparent;
  font-size: 16px;
  font-weight: bold;
  padding: 8px 16px;
  text-decoration: none;
  border-radius: 8px;
  width: ${(props) => (props.$fullWidth && !props.$isHome ? '100%' : 'auto')};
  text-align: center;
  display: inline-block;
  transition: background-color 0.3s ease;
`
