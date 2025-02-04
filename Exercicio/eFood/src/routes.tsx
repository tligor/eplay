import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Prato from './pages/Prato/1' // Usando uma página genérica para os pratos

const Rotas = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/prato/:pratoId" element={<Prato />} />{' '}
      {/* Usando o parâmetro dinâmico */}
    </Routes>
  )
}

export default Rotas
