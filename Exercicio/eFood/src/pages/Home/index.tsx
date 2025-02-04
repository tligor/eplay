import ProductsList from '../../components/ProductsList'
import hiokisushi from '../../assets/pratos/Hioki Sushi/hiokisushi.png'
import ladocevita from '../../assets/pratos/La Dolce Vita Trattoria/image 1.png'
import Pratos from '../../models/Pratos'

const promocoes: Pratos[] = [
  {
    id: 1,
    title: 'Hioki Sushi',
    nota: 10,
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
    image: hiokisushi,
    infos: ['10%', 'R$ 250,00']
  },
  {
    id: 2,
    title: 'La Dolce Vita Trattoria',
    nota: 10,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: ladocevita,
    infos: ['5%', 'R$ 290,00']
  },
  {
    id: 3,
    title: 'La Dolce Vita Trattoria',
    nota: 10,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: ladocevita,
    infos: ['5%', 'R$ 290,00']
  },
  {
    id: 4,
    title: 'La Dolce Vita Trattoria',
    nota: 10,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: ladocevita,
    infos: ['5%', 'R$ 290,00']
  },
  {
    id: 5,
    title: 'La Dolce Vita Trattoria',
    nota: 10,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: ladocevita,
    infos: ['5%', 'R$ 290,00']
  },
  {
    id: 6,
    title: 'La Dolce Vita Trattoria',
    nota: 10,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: ladocevita,
    infos: ['5%', 'R$ 290,00']
  }
]

const Home = () => (
  <>
    <ProductsList pratos={promocoes} title="" background="gray" />
  </>
)

export default Home
