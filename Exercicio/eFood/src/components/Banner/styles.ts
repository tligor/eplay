import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
`

export const Imagem = styled.div<{ image: string }>`
  width: 100%;
  height: 280px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-image: ${({ image }) => `url('${image}')`};
`

export const Title = styled.h3`
  color: white;
  position: absolute;
  top: 215px;
  left: 170px;
  font-size: 32px;
  font-weight: 900;
  line-height: 37.5px;
`

export const Categoria = styled.h3`
  color: white;
  position: absolute;
  top: 0px;
  left: 170px;
  font-size: 32px;
  font-weight: 900;
  line-height: 37.5px;
`
