import styled from 'styled-components'
import { cores } from '../../styles'
import { Link } from 'react-router-dom' // Importe o Link do react-router-dom

export const Container = styled.footer`
  background-color: ${cores.cinza};
  padding: 40px 0;
  font-size: 14px;
  text-align: center;
  justify-content: center;
  display: flex;
  flex-direction: column; /* Organiza os itens em coluna */
  align-items: center; /* Centraliza horizontalmente */
  position: relative; /* Permite posicionamento absoluto dentro do Container */
  height: 298px;
`

export const SectionTitle = styled.h4`
  color: ${cores.rosa};
  font-size: 16px;
  font-weight: bold;
`

export const Links = styled.ul`
  display: flex;
  margin-top: 16px;
  justify-content: center;
`

// Renomeie o Link estilizado para StyledLink
export const StyledLink = styled.a`
  color: ${cores.cinzaClaro};
  text-decoration: none;
  margin-right: 8px;
`

// Crie um componente LinkRouter para usar com o react-router-dom
export const LinkRouter = styled(Link)`
  color: ${cores.cinzaClaro};
  text-decoration: none;
  margin-right: 8px;
  font-size: 14px;
  transition: color 0.3s ease;

  &:hover {
    color: ${cores.rosa};
  }
`

export const PFooter = styled.p`
  font-weight: 400;
  font-size: 10px;
  line-height: 12px;
  width: 480px;
  height: 24px;
  text-align: center; /* Centraliza o texto */
  position: absolute; /* Posiciona o PFooter de forma absoluta */
  bottom: 40px; /* Distância do pé da página */
  left: 50%; /* Centraliza horizontalmente */
  transform: translateX(-50%); /* Ajusta a centralização */
`

export const FooterSection = styled.div`
  margin-bottom: 34px;
`
