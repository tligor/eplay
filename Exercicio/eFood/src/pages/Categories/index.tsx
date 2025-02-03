import ProductsList from '../../components/ProductsList'
import hiokisushi from '../../assets/pratos/Hioki Sushi/hiokisushi.png'
import diablo from '../../assets/images/diablo.png'
import zelda from '../../assets/images/zelda.png'
import starWars from '../../assets/images/star_wars.png'
import Game from '../../models/Game'

const promocoes: Game[] = [
  {
    id: 1,
    title: 'Hioki Sushi',
    category: 'Destaque da semana',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
    image: hiokisushi,
    infos: ['15%', 'R$ 250,00'],
    system: 'Windows'
  },
  {
    id: 2,
    title: 'Diablo',
    category: 'Ação',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
    image: diablo,
    infos: ['5%', 'R$ 290,00'],
    system: 'PS5'
  },
  {
    id: 3,
    title: 'Star Wars',
    category: 'Ação',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
    image: starWars,
    infos: ['5%', 'R$ 290,00'],
    system: 'PS5'
  },
  {
    id: 4,
    title: 'Zelda',
    category: 'Ação',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...',
    image: zelda,
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
    image: diablo,
    infos: ['17/05'],
    system: 'Windows'
  },
  {
    id: 6,
    title: 'Zelda',
    category: 'Ação',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...',
    image: zelda,
    infos: ['5%', 'R$ 290,00'],
    system: 'PS5'
  },
  {
    id: 7,
    title: 'Star Wars',
    category: 'Ação',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...',
    image: starWars,
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
    infos: ['17/05'],
    system: 'Nintendo Switch'
  }
]

const Categories = () => (
  <>
    <ProductsList games={promocoes} title="RPG" background="gray" />
    <ProductsList games={emBreve} title="Ação" background="black" />
    <ProductsList games={promocoes} title="Aventura" background="gray" />
    <ProductsList games={emBreve} title="FPS" background="black" />
  </>
)

export default Categories
