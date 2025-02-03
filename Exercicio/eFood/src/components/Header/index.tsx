import { Link } from 'react-router-dom'
import { HeaderBar } from './styles'
import logo from '../../assets/images.nova/logo.svg'
const Header = () => (
  <HeaderBar>
    <div>
      <Link to="/">
        <img src={logo} alt="eFood" />
      </Link>
      <h1>Viva experiências gastronômicas no conforto da sua casa</h1>
    </div>
  </HeaderBar>
)

export default Header
