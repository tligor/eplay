import { useParams } from 'react-router-dom'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Banner from '../../components/Banner'
import ProductsList from '../../components/ProductsList'
import { promocoes } from '../Home' // Importando os dados de promoções

const SaibaMais = () => {
  const { pratoId } = useParams<string>() // Especificando que pratoId será do tipo string
  const prato = promocoes.find(
    (prato) => prato.id === parseInt(pratoId || '', 10)
  ) // Busca o prato pelo ID

  if (!prato) {
    return <div>Prato não encontrado!</div> // Caso não encontre o prato, exibe uma mensagem de erro
  }

  return (
    <>
      <Header />
      <Banner image={prato.image} title={prato.title} />{' '}
      {/* Passando a imagem do prato para o Banner */}
      <h2>{prato.title}</h2>
      <ProductsList
        pratos={[prato]} // Passando o prato encontrado como um array
        title="Detalhes do Prato"
        background="gray"
      />
      <Footer />
    </>
  )
}

export default SaibaMais
