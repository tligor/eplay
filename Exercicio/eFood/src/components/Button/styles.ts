import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { cores } from '../../styles'

type ButtonProps = {
  fullWidth?: boolean
  isHome?: boolean
}

export const ButtonContainer = styled.button<ButtonProps>`
  border: 2px solid ${cores.rosa};
  color: ${(props) => (props.isHome ? cores.cinza : cores.rosa)};
  background-color: ${(props) => (props.isHome ? cores.rosa : cores.cinza)};
  font-size: 14px;
  font-weight: 700;
  line-height: 16px;
  cursor: pointer;
  width: ${({ fullWidth, isHome }) =>
    fullWidth && !isHome ? '100%' : '82px'}; // 82px na Home, 100% na página 1
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
  width: ${({ fullWidth, isHome }) =>
    fullWidth && !isHome ? '100%' : 'auto'}; // auto na Home, 100% na página 1
  text-align: center;
  display: inline-block;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${cores.rosa};
  }
`
