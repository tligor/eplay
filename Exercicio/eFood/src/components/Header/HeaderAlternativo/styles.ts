import styled from 'styled-components'
import { cores } from '../../../styles'
import bgheader from '../../../assets/images.nova/Vector.svg'
import { breakpoints } from '../../../styles'

export const HeaderBar = styled.header`
  background-color: ${cores.cinza};
  padding: 40px;
  height: 186px;
  display: flex;
  text-align: center;
  background-image: url(${bgheader});
  flex-direction: column;
  color: ${cores.rosa};

  img {
    width: 125px;
    height: 57px;
    margin: 0 auto; // Centraliza a imagem horizontalmente
  }

  div {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 300px;
    position: relative;

    h1 {
      font-size: 36px;
      font-weight: 900;
      width: 539px;
      line-height: 42.2px;
      margin: 0 auto;
      position: absolute; // Posiciona o h1 de forma independente dentro da div
      bottom: -10px;
      left: 50%;
      transform: translateX(-50%);
      color: ${cores.rosa}; // Cor do texto alterada para rosa

      // Responsividade
      @media (max-width: ${breakpoints.lg}) {
        font-size: 32px;
        width: 480px;
      }

      @media (max-width: ${breakpoints.md}) {
        font-size: 28px;
        width: 420px;
      }

      @media (max-width: ${breakpoints.sm}) {
        font-size: 24px;
        width: 100%;
        line-height: 32px;
      }
    }
  }
`

export const Links = styled.ul`
  display: flex;
  margin-left: 40px;
`

export const LinkItem = styled.li`
  margin-right: 16px;
`

export const LinkCart = styled.a`
  display: flex;
  color: ${cores.rosa}; // Cor do texto alterada para rosa

  img {
    margin-left: 16px;
  }
`
