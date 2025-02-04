import hiokisushi from '../assets/pratos/Hioki Sushi/hiokisushi.png'
import ladocevita from '../assets/pratos/La Dolce Vita Trattoria/image 1.png'
import pizza from '../assets/pratos/2ndPage/pizzamarguerita.png' // Importando a imagem da pizza
import Pratos from '../models/Pratos' // Certificando-se de que o tipo Pratos está sendo importado corretamente

// Definindo o tipo 'Pratos' para garantir que os dados sigam o formato esperado
export const promocoes: Pratos[] = [
  {
    id: 1,
    title: 'Hioki Sushi',
    nota: 10,
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
    image: hiokisushi,
    infos: ['Destaque da Semana', 'Japonesa']
  },
  {
    id: 2,
    title: 'La Dolce Vita Trattoria',
    nota: 10,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: ladocevita,
    infos: ['Italiana']
  },
  {
    id: 3,
    title: 'La Dolce Vita Trattoria',
    nota: 10,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: ladocevita,
    infos: ['Italiana']
  },
  {
    id: 4,
    title: 'La Dolce Vita Trattoria',
    nota: 10,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: ladocevita,
    infos: ['Italiana']
  },
  {
    id: 5,
    title: 'La Dolce Vita Trattoria',
    nota: 10,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: ladocevita,
    infos: ['Italiana']
  },
  {
    id: 6,
    title: 'La Dolce Vita Trattoria',
    nota: 10,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: ladocevita,
    infos: ['Italiana']
  }
]

// Definindo o tipo 'PratosNovos' com a mesma estrutura de 'Pratos'
export const sndPage: Pratos[] = [
  {
    id: 1,
    title: 'Pizza Marguerita',
    nota: 10,
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: pizza, // Agora a imagem da pizza está corretamente importada
    infos: ['Destaque da Semana', 'Italiana']
  }
  // Outros pratos podem ser adicionados aqui...
]
