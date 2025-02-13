const API_URL = 'https://fake-api-tau.vercel.app/api/efood/restaurantes'

interface ApiRestaurant {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: {
    foto: string
    preco: number
    id: number
    nome: string
    descricao: string
    porcao: string
  }[]
}

interface Pratos {
  id: string
  title: string
  nota: number
  description: string
  largeDescription: string
  quantidade: string
  preco: number
  image: string
  infos: string[]
}

export const fetchSndPageData = async (): Promise<Pratos[]> => {
  try {
    const response = await fetch(API_URL)
    if (!response.ok) {
      throw new Error('Erro ao buscar dados da API')
    }
    const data: ApiRestaurant[] = await response.json()

    // Transformar os dados da API no formato esperado pela sndPage
    const sndPageData: Pratos[] = data.flatMap((restaurant) =>
      restaurant.cardapio.map((item) => ({
        id: item.id.toString(),
        title: item.nome,
        nota: restaurant.avaliacao,
        description: item.descricao,
        largeDescription: '', // Pode ser preenchido se necessário
        quantidade: item.porcao,
        preco: item.preco,
        image: item.foto,
        infos: [restaurant.tipo] // Adiciona o tipo do restaurante como informação
      }))
    )

    return sndPageData
  } catch (error) {
    console.error('Erro ao buscar dados da API:', error)
    throw error
  }
}
