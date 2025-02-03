import ProductsList from '../../components/ProductsList'
import hiokisushi from '../../assets/pratos/Hioki Sushi/hiokisushi.png'
import ladocevita from '../../assets/pratos/La Dolce Vita Trattoria/image 1.png'
import Game from '../../models/Game'

const promocoes: Game[] = [
  {
    id: 1,
    title: 'Hioki Sushi',
    category: 'Ação',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
    image: hiokisushi,
    infos: ['10%', 'R$ 250,00'],
    system: 'Windows'
  },
  {
    id: 2,
    title: 'La Dolce Vita Trattoria',
    category: 'Ação',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: ladocevita,
    infos: ['5%', 'R$ 290,00'],
    system: 'PS5'
  },
  {
    id: 3,
    title: 'La Dolce Vita Trattoria',
    category: 'Ação',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: ladocevita,
    infos: ['5%', 'R$ 290,00'],
    system: 'PS5'
  },
  {
    id: 4,
    title: 'La Dolce Vita Trattoria',
    category: 'Ação',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: ladocevita,
    infos: ['5%', 'R$ 290,00'],
    system: 'PS5'
  }
]

const emBreve: Game[] = [
  {
    id: 5,
    title: 'Diablo 4',
    category: 'RPG',
    description:
      'Diablo IV é um RPG de ação em desenvolvimento pela Blizzard Entretainment.',
    image: ladocevita,
    infos: ['5%', 'R$ 290,00'],
    system: 'Windows'
  },
  {
    id: 6,
    title: 'Zelda',
    category: 'Ação',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...',
    image: ladocevita,
    infos: ['5%', 'R$ 290,00'],
    system: 'PS5'
  },
  {
    id: 7,
    title: 'Star Wars',
    category: 'Ação',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...',
    image: ladocevita,
    infos: ['5%', 'R$ 290,00'],
    system: 'PS5'
  },
  {
    id: 8,
    title: 'Resident Evil 4',
    category: 'Ação',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...',
    image: hiokisushi,
    infos: ['5%', 'R$ 290,00'],
    system: 'Nintendo Switch'
  }
]

const Home = () => (
  <>
    <ProductsList games={promocoes} title="Promoções" background="gray" />
    <ProductsList games={emBreve} title="Em breve" background="black" />
  </>
)

export default Home
