import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Footer from '../../components/Footer'
import Banner from '../../components/Banner'
import { promocoes } from '../../models/data' // sndPage não é mais importada aqui
import HeaderAlternativo from '../../components/Header/HeaderAlternativo'
import ProductsList from '../../components/ProductsList'
import Pratos from '../../models/Pratos'
import Modal from '../../components/Modal'
import Carrinho from '../../components/Carrinho'
import { fetchSndPageData } from '../../models/api' // Importe o serviço da API

const Prato1 = () => {
  const { pratoId } = useParams<string>() // pratoId é uma string
  const prato = promocoes.find((prato) => prato.id === pratoId) // Comparação direta de strings

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedPrato, setSelectedPrato] = useState<Pratos | null>(null)
  const [isCarrinhoOpen, setIsCarrinhoOpen] = useState(false)
  const [sndPageData, setSndPageData] = useState<Pratos[]>([]) // Estado para os dados da API
  const [loading, setLoading] = useState<boolean>(true) // Estado para carregamento
  const [error, setError] = useState<string | null>(null) // Estado para erros

  // Buscar os dados da API ao montar o componente
  useEffect(() => {
    const getSndPageData = async () => {
      try {
        const data = await fetchSndPageData()
        setSndPageData(data)
      } catch (err) {
        setError('Erro ao carregar dados da sndPage')
      } finally {
        setLoading(false)
      }
    }

    getSndPageData()
  }, [])

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

  // Exibir mensagem de carregamento ou erro
  if (loading) return <div>Carregando...</div>
  if (error) return <div>{error}</div>

  return (
    <>
      <HeaderAlternativo />
      <Banner
        image={prato.image}
        title={prato.title}
        infos={[infosModificada]}
      />
      <ProductsList
        pratos={sndPageData} // Usando os dados da API
        title=""
        background="gray"
        isHome={false}
        onOpenModal={openModal}
      />
      <Footer />

      {/* Modal */}
      {isModalOpen && selectedPrato && (
        <Modal
          isOpen={isModalOpen}
          onClose={closeModal}
          onOpenCarrinho={openCarrinho}
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
      {isCarrinhoOpen && (
        <Carrinho isOpen={isCarrinhoOpen} onClose={closeCarrinho} />
      )}
    </>
  )
}

export default Prato1
