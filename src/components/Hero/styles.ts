import styled from 'styled-components'
import banner from '../../assets/images/fundo_hogwarts.png'
import { cores } from '../../styles'
import { TagContainer } from '../Tag/styles'

export const Banner = styled.div`
  display: block;
  width: 100%;
  height: 480px;
  position: relative;

  background-image: url('${banner}');
  background-repeat: no-repeat;
  background-size: 100vw;
  background-position: center;

  padding-top: 16px;

  &:after {
    position: absolute;
    background-color: rgba(0, 0, 0, 0.56);
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    content: '';
  }

  ${TagContainer} {
    margin-right: 8px;
  }

  .container {
    z-index: 1;
    position: relative;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-between;
  }
`

export const Infos = styled.div`
  padding: 16px;
  background-color: ${cores.preto};
  max-width: 290px;
  font-weight: bold;

  h2 {
    font-size: 32px;
  }
  p {
    font-size: 18px;
    margin: 16px 0;

    span:first-child {
      text-decoration: line-through;
    }
  }
`
