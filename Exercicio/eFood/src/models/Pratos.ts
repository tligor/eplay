class Pratos {
  nota: number
  description: string
  image: string
  infos: string[]
  title: string
  id: number
  constructor(
    id: number,
    nota: number,
    description: string,
    image: string,
    infos: string[],
    title: string
  ) {
    this.nota = nota
    this.description = description
    this.image = image
    this.infos = infos
    ;(this.title = title), (this.id = id)
  }
}

export default Pratos
