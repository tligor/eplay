import Header from '../../components/Header' // Importando o Header
import Footer from '../../components/Footer' // Importando o Footer
import ProductsList from '../../components/ProductsList'
import { promocoes } from '../../models/data' // Importando os dados de promoções do data.ts

const Home = () => (
  <>
    <Header />
    <ProductsList pratos={promocoes} title="" background="gray" isHome={true} />
    <Footer />
  </>
)

export default Home
