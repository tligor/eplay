import { BrowserRouter } from 'react-router-dom'
import { GlobalCss } from './styles'

import Rotas from './routes' // Certifique-se de que Rotas está corretamente importado

function App() {
  return (
    <BrowserRouter>
      <GlobalCss />
      <div className="container">
        <Rotas /> {/* As páginas serão carregadas através das rotas */}
      </div>
    </BrowserRouter>
  )
}

export default App
