import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Footer from '../../components/Footer'
import Banner from '../../components/Banner'
import { promocoes, sndPage } from '../../models/data'
import HeaderAlternativo from '../../components/Header/HeaderAlternativo'
import ProductsList from '../../components/ProductsList'
import Pratos from '../../models/Pratos'
import Modal from '../../components/Modal'
import Carrinho from '../../components/Carrinho' // Certifique-se de ter esse componente de carrinho

const Prato1 = () => {
  const { pratoId } = useParams<string>()
  const prato = promocoes.find(
    (prato) => prato.id === parseInt(pratoId || '', 10)
  )

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedPrato, setSelectedPrato] = useState<Pratos | null>(null)
  const [isCarrinhoOpen, setIsCarrinhoOpen] = useState(false) // Estado para controlar a exibição do carrinho

  // Função para abrir o modal
  const openModal = (prato: Pratos) => {
    setSelectedPrato(prato)
    setIsModalOpen(true)
  }

  // Função para fechar o modal
  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedPrato(null)
  }

  // Função para abrir o carrinho
  const openCarrinho = () => {
    setIsCarrinhoOpen(true)
  }

  // Função para fechar o carrinho
  const closeCarrinho = () => {
    setIsCarrinhoOpen(false)
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
        onOpenModal={openModal} // Passando a função para abrir o modal
      />
      <Footer />

      {/* Modal */}
      {isModalOpen && selectedPrato && (
        <Modal
          isOpen={isModalOpen}
          onClose={closeModal}
          onOpenCarrinho={openCarrinho} // Passando a função para abrir o carrinho
          image={selectedPrato.image}
          title={selectedPrato.title}
          description={selectedPrato.description}
          largeDescription={selectedPrato.largeDescription}
          Quantidade={selectedPrato.quantidade}
          preco={selectedPrato.preco}
          id={selectedPrato.id}
          nota={selectedPrato.nota}
          infosts={selectedPrato.infos.join(', ')}
        />
      )}

      {/* Carrinho */}
      {isCarrinhoOpen && <Carrinho />}
    </>
  )
}

export default Prato1
