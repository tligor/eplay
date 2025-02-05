import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import Footer from '../../components/Footer'
import Banner from '../../components/Banner'
import { promocoes, sndPage } from '../../models/data'
import HeaderAlternativo from '../../components/Header/HeaderAlternativo'
import ProductsList from '../../components/ProductsList'
import Pratos from '../../models/Pratos'
import Modal from '../../components/Modal'

const Prato1 = () => {
  const { pratoId } = useParams<string>()
  const prato = promocoes.find(
    (prato) => prato.id === parseInt(pratoId || '', 10)
  )

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedPrato, setSelectedPrato] = useState<Pratos | null>(null)

  const openModal = (prato: Pratos) => {
    setSelectedPrato(prato)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedPrato(null)
  }

  useEffect(() => {
    document.body.classList.add('pagina-prato1')

    return () => {
      document.body.classList.remove('pagina-prato1')
    }
  }, [])

  if (!prato) {
    return <div>Prato não encontrado!</div>
  }

  const infosModificada = prato.infos[0].replace(' da Semana', '').trim()

  return (
    <>
      <HeaderAlternativo />
      <Banner
        image={prato.image}
        title={prato.title}
        infos={[infosModificada]}
      />
      <ProductsList
        pratos={sndPage}
        title=""
        background="gray"
        isHome={false}
        onOpenModal={openModal}
      />
      <Footer />

      {isModalOpen && selectedPrato && (
        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          image={selectedPrato.image}
          title={selectedPrato.title}
          description={selectedPrato.description}
          largeDescription={selectedPrato.largeDescription} // Passando a nova propriedade
          Quantidade={selectedPrato.quantidade} // Passando a nova propriedade
          preco={selectedPrato.preco} // Passando a nova propriedade
        />
      )}
    </>
  )
}

export default Prato1
