import ProductsList from '../../components/ProductsList'
import hiokisushi from '../../assets/pratos/Hioki Sushi/hiokisushi.png'
import diablo from '../../assets/images/diablo.png'
import zelda from '../../assets/images/zelda.png'
import starWars from '../../assets/images/star_wars.png'
import Game from '../../models/Pratos'

const promocoes: Game[] = [
  {
    id: 1,
    title: 'Hioki Sushi',
    nota: 10,
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
    image: hiokisushi,
    infos: ['15%', 'R$ 250,00']
  },
  {
    id: 2,
    title: 'Diablo',
    nota: 10,
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
    image: diablo,
    infos: ['5%', 'R$ 290,00']
  },
  {
    id: 3,
    title: 'Star Wars',
    nota: 10,
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
    image: starWars,
    infos: ['5%', 'R$ 290,00']
  },
  {
    id: 4,
    title: 'Zelda',
    nota: 10,
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...',
    image: zelda,
    infos: ['5%', 'R$ 290,00']
  }
]

const Categories = () => (
  <>
    <ProductsList pratos={promocoes} title="RPG" background="gray" />
    <ProductsList pratos={promocoes} title="Aventura" background="gray" />
  </>
)

export default Categories
