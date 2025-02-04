import { useParams } from 'react-router-dom'
import Footer from '../../components/Footer'
import Banner from '../../components/Banner'
import { promocoes } from '../Home' // Importando os dados de promoções
import HeaderAlternativo from '../../components/Header/HeaderAlternativo'

const Prato1 = () => {
  const { pratoId } = useParams<string>() // Especificando que pratoId será do tipo string
  const prato = promocoes.find(
    (prato) => prato.id === parseInt(pratoId || '', 10)
  )

  if (!prato) {
    return <div>Prato não encontrado!</div> // Caso não encontre o prato, exibe uma mensagem de erro
  }

  return (
    <>
      <HeaderAlternativo />
      <Banner image={prato.image} title={prato.title} />
      <Footer />
    </>
  )
}

export default Prato1
