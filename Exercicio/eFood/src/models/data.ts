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
    largeDescription: '',
    quantidade: '',
    image: hiokisushi,
    infos: ['Destaque da Semana', 'Japonesa']
  },
  {
    id: 2,
    title: 'La Dolce Vita Trattoria',
    nota: 10,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    largeDescription: '',
    quantidade: '',
    image: ladocevita,
    infos: ['Italiana']
  },
  {
    id: 3,
    title: 'La Dolce Vita Trattoria',
    nota: 10,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    largeDescription: '',
    quantidade: '',
    image: ladocevita,
    infos: ['Italiana']
  },
  {
    id: 4,
    title: 'La Dolce Vita Trattoria',
    nota: 10,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    largeDescription: '',
    quantidade: '',
    image: ladocevita,
    infos: ['Italiana']
  },
  {
    id: 5,
    title: 'La Dolce Vita Trattoria',
    nota: 10,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    largeDescription: '',
    quantidade: '',
    image: ladocevita,
    infos: ['Italiana']
  },
  {
    id: 6,
    title: 'La Dolce Vita Trattoria',
    nota: 10,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    largeDescription: '',
    quantidade: '',
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
    largeDescription:
      'A pizza Margherita é uma pizza clássica da culinária italiana, reconhecida por sua simplicidade e sabor inigualável. Ela é feita com uma base de massa fina e crocante, coberta com molho de tomate fresco, queijo mussarela de alta qualidade, manjericão fresco e azeite de oliva extra-virgem. A combinação de sabores é perfeita, com o molho de tomate suculento e ligeiramente ácido, o queijo derretido e cremoso e as folhas de manjericão frescas, que adicionam um toque de sabor herbáceo. É uma pizza simples, mas deliciosa, que agrada a todos os paladares e é uma ótima opção para qualquer ocasião.',
    quantidade: 'Serve: de 2 a 3 pessoas',
    image: pizza, // Agora a imagem da pizza está corretamente importada
    infos: ['Destaque da Semana', 'Italiana']
  },
  {
    id: 2,
    title: 'Pizza Marguerita',
    nota: 10,
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    largeDescription:
      'A pizza Margherita é uma pizza clássica da culinária italiana, reconhecida por sua simplicidade e sabor inigualável. Ela é feita com uma base de massa fina e crocante, coberta com molho de tomate fresco, queijo mussarela de alta qualidade, manjericão fresco e azeite de oliva extra-virgem. A combinação de sabores é perfeita, com o molho de tomate suculento e ligeiramente ácido, o queijo derretido e cremoso e as folhas de manjericão frescas, que adicionam um toque de sabor herbáceo. É uma pizza simples, mas deliciosa, que agrada a todos os paladares e é uma ótima opção para qualquer ocasião.',
    quantidade: 'Serve: de 2 a 3 pessoas',
    image: pizza, // Agora a imagem da pizza está corretamente importada
    infos: ['Destaque da Semana', 'Italiana']
  },
  {
    id: 3,
    title: 'Pizza Marguerita',
    nota: 10,
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    largeDescription:
      'A pizza Margherita é uma pizza clássica da culinária italiana, reconhecida por sua simplicidade e sabor inigualável. Ela é feita com uma base de massa fina e crocante, coberta com molho de tomate fresco, queijo mussarela de alta qualidade, manjericão fresco e azeite de oliva extra-virgem. A combinação de sabores é perfeita, com o molho de tomate suculento e ligeiramente ácido, o queijo derretido e cremoso e as folhas de manjericão frescas, que adicionam um toque de sabor herbáceo. É uma pizza simples, mas deliciosa, que agrada a todos os paladares e é uma ótima opção para qualquer ocasião.',
    quantidade: 'Serve: de 2 a 3 pessoas',
    image: pizza, // Agora a imagem da pizza está corretamente importada
    infos: ['Destaque da Semana', 'Italiana']
  },
  {
    id: 4,
    title: 'Pizza Marguerita',
    nota: 10,
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    largeDescription:
      'A pizza Margherita é uma pizza clássica da culinária italiana, reconhecida por sua simplicidade e sabor inigualável. Ela é feita com uma base de massa fina e crocante, coberta com molho de tomate fresco, queijo mussarela de alta qualidade, manjericão fresco e azeite de oliva extra-virgem. A combinação de sabores é perfeita, com o molho de tomate suculento e ligeiramente ácido, o queijo derretido e cremoso e as folhas de manjericão frescas, que adicionam um toque de sabor herbáceo. É uma pizza simples, mas deliciosa, que agrada a todos os paladares e é uma ótima opção para qualquer ocasião.',
    quantidade: 'Serve: de 2 a 3 pessoas',
    image: pizza, // Agora a imagem da pizza está corretamente importada
    infos: ['Destaque da Semana', 'Italiana']
  },
  {
    id: 5,
    title: 'Pizza Marguerita',
    nota: 10,
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    largeDescription:
      'A pizza Margherita é uma pizza clássica da culinária italiana, reconhecida por sua simplicidade e sabor inigualável. Ela é feita com uma base de massa fina e crocante, coberta com molho de tomate fresco, queijo mussarela de alta qualidade, manjericão fresco e azeite de oliva extra-virgem. A combinação de sabores é perfeita, com o molho de tomate suculento e ligeiramente ácido, o queijo derretido e cremoso e as folhas de manjericão frescas, que adicionam um toque de sabor herbáceo. É uma pizza simples, mas deliciosa, que agrada a todos os paladares e é uma ótima opção para qualquer ocasião.',
    quantidade: 'Serve: de 2 a 3 pessoas',
    image: pizza, // Agora a imagem da pizza está corretamente importada
    infos: ['Destaque da Semana', 'Italiana']
  },
  {
    id: 6,
    title: 'Pizza Marguerita',
    nota: 10,
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    largeDescription:
      'A pizza Margherita é uma pizza clássica da culinária italiana, reconhecida por sua simplicidade e sabor inigualável. Ela é feita com uma base de massa fina e crocante, coberta com molho de tomate fresco, queijo mussarela de alta qualidade, manjericão fresco e azeite de oliva extra-virgem. A combinação de sabores é perfeita, com o molho de tomate suculento e ligeiramente ácido, o queijo derretido e cremoso e as folhas de manjericão frescas, que adicionam um toque de sabor herbáceo. É uma pizza simples, mas deliciosa, que agrada a todos os paladares e é uma ótima opção para qualquer ocasião.',
    quantidade: 'Serve: de 2 a 3 pessoas',
    image: pizza, // Agora a imagem da pizza está corretamente importada
    infos: ['Destaque da Semana', 'Italiana']
  }

  // Outros pratos podem ser adicionados aqui...
]
