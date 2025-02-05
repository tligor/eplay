import { Link } from 'react-router-dom'
import { HeaderBar } from './styles'
import logo from '../../../assets/images.nova/logo.svg'
import { LinkCart } from '../styles'
const HeaderAlternativo = () => (
  <HeaderBar>
    <div>
      <h3>Restaurante</h3>
      <Link to="/">
        <img src={logo} alt="eFood" />
      </Link>
      <LinkCart>
        <p>0 - produto(s)</p>
      </LinkCart>
    </div>
  </HeaderBar>
)

export default HeaderAlternativo
