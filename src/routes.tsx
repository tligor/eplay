import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Categories from './pages/Categories'
import Produto from './pages/Produto'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/categorias" element={<Categories />} />
    <Route path="/produto/:id" element={<Produto />} />
  </Routes>
)

export default Rotas
