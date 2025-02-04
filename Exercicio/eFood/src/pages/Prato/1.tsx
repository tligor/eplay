import { useEffect } from 'react' // Importando o useEffect
import { useParams } from 'react-router-dom'
import Footer from '../../components/Footer'
import Banner from '../../components/Banner'
import { promocoes, sndPage } from '../../models/data' // Importando os dados de promoções e sndPage
import HeaderAlternativo from '../../components/Header/HeaderAlternativo'
import ProductsList from '../../components/ProductsList'

const Prato1 = () => {
  const { pratoId } = useParams<string>() // Especificando que pratoId será do tipo string
  const prato = promocoes.find(
    (prato) => prato.id === parseInt(pratoId || '', 10)
  )

  // Adiciona a classe ao body quando o componente é montado
  useEffect(() => {
    document.body.classList.add('pagina-prato1')

    // Remove a classe quando o componente é desmontado
    return () => {
      document.body.classList.remove('pagina-prato1')
    }
  }, [])

  if (!prato) {
    return <div>Prato não encontrado!</div> // Caso não encontre o prato, exibe uma mensagem de erro
  }

  // Modifica a string infos para remover "da Semana"
  const infosModificada = prato.infos[0].replace(' da Semana', '').trim()

  return (
    <>
      <HeaderAlternativo />
      {/* Passa a string modificada para o Banner */}
      <Banner image={prato.image} title={prato.title} infos={prato.infos} />
      <ProductsList
        pratos={sndPage} // Usando sndPage para exibir os pratos na segunda página
        title=""
        background="gray"
        isHome={false}
      />
      <Footer />
    </>
  )
}

export default Prato1
