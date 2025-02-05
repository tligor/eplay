import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { v4 as uuidv4 } from 'uuid' // Importe o UUID
import { HeaderBar } from './styles'
import logo from '../../../assets/images.nova/logo.svg'
import { LinkCart } from '../styles'
import { RootState } from '../../../store/store'
import Carrinho from '../../Carrinho' // Importando o componente Carrinho
import Modal from '../../Modal' // Importando o Modal

const HeaderAlternativo = () => {
  const [isCarrinhoOpen, setIsCarrinhoOpen] = useState(false) // Controla se o carrinho está aberto
  const [isModalOpen, setIsModalOpen] = useState(false) // Controla se o modal está aberto
  const itensNoCarrinho = useSelector(
    (state: RootState) => state.carrinho.itens
  )

  // Função para abrir o carrinho
  const onOpenCarrinho = () => {
    setIsCarrinhoOpen(true)
  }

  // Função para alternar o carrinho
  const toggleCarrinho = () => {
    return
  }

  // Função para fechar o modal
  const closeModal = () => {
    setIsModalOpen(false)
  }

  return (
    <HeaderBar>
      <div>
        <h3>Restaurante</h3>
        <Link to="/">
          <img src={logo} alt="eFood" />
        </Link>
        <LinkCart onClick={toggleCarrinho}>
          <p>{itensNoCarrinho.length} - produto(s)</p>
        </LinkCart>
      </div>

      {/* Exibindo o carrinho */}
      <Carrinho
        isOpen={isCarrinhoOpen}
        onClose={() => setIsCarrinhoOpen(false)}
      />

      {/* Modal com o onOpenCarrinho para abrir o carrinho ao adicionar ao carrinho */}
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        onOpenCarrinho={onOpenCarrinho}
        // Passando as propriedades do prato para o Modal
        image="prato.jpg"
        title="Prato delicioso"
        preco={50}
        description="Descrição do prato"
        largeDescription="Descrição detalhada do prato"
        Quantidade="1"
        id={uuidv4()}
        nota={5}
        infosts="Informações adicionais"
      />
    </HeaderBar>
  )
}

export default HeaderAlternativo
