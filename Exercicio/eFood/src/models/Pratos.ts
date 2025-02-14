class Pratos {
  preco: number
  nota: number
  description: string
  quantidade: string
  image: string
  infos: string[]
  title: string
  id: string

  constructor(
    id: string,
    nota: number,
    preco: number,
    description: string,
    quantidade: string,
    image: string,
    infos: string[],
    title: string
  ) {
    this.id = id
    this.nota = nota
    this.preco = preco
    this.description = description
    this.quantidade = quantidade
    this.image = image
    this.infos = infos
    this.title = title
  }
}

export default Pratos
