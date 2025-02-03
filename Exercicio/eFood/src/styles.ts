import { createGlobalStyle } from 'styled-components'

export const breakpoints = {
  sm: '480px',
  md: '768px',
  lg: '1024px',
  xl: '1200px'
}

export const cores = {
  rosa: '#E66767',
  branco: '#FFF8F1',
  brancoSeco: '#FFF',
  preto: '#111',
  cinza: '#FFEBD9',
  verde: '#10AC84',
  cinzaClaro: '#A3A3A3'
}

export const GlobalCss = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
  }
  body{
    background-color: ${cores.rosa};
    color: ${cores.rosa};
  }

  .container{
    max-width: 100vw;
  margin: 0 auto;
  }
  `
