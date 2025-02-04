import { Link } from 'react-router-dom' // Importe o Link do react-router-dom
import { Container, Links, FooterSection, LinkRouter, PFooter } from './styles' // Use LinkRouter para navegação
import logo from '../../assets/images.nova/logo.svg'
import facebook from '../../assets/images.nova/social/facebook.svg'
import instagram from '../../assets/images.nova/social/instagram.svg'
import twitter from '../../assets/images.nova/social/twitter.svg'

const Footer = () => (
  <Container>
    <div className="container">
      <FooterSection>
        <Link to="/">
          <img src={logo} alt="eFood" />
        </Link>
        <Links>
          <li>
            <LinkRouter to="/rpg">
              <img src={facebook} alt="siga no facebook" />
            </LinkRouter>{' '}
          </li>
          <li>
            <LinkRouter to="/acao">
              <img src={instagram} alt="siga no intagram" />
            </LinkRouter>
          </li>
          <li>
            <LinkRouter to="/aventura">
              <img src={twitter} alt="siga no twitter" />
            </LinkRouter>
          </li>
        </Links>
      </FooterSection>
      <PFooter>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade dos produtos é toda do
        estabelecimento contratado.
      </PFooter>
    </div>
  </Container>
)

export default Footer
