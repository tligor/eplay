import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store/store'
import trash from '../../assets/images.nova/trash.svg'
import {
  removerDoCarrinho,
  limparCarrinho
} from '../../store/Slice/carrinhoSlice'
import {
  CarrinhoContainer,
  CarrinhoHeader,
  CarrinhoLista,
  CarrinhoItem,
  CarrinhoTotal,
  CarrinhoButton,
  ImgProduto
} from './styles'

const Carrinho = () => {
  const dispatch = useDispatch()
  const itens = useSelector((state: RootState) => state.carrinho.itens)

  const [isOpen, setIsOpen] = useState(true) // Controlando o estado de abertura do carrinho

  const calcularTotal = () => {
    return itens.reduce((total, item) => total + item.preco, 0).toFixed(2)
  }

  // Função para fechar o carrinho
  const fecharCarrinho = () => {
    setIsOpen(false)
  }

  return (
    <CarrinhoContainer isOpen={isOpen}>
      <CarrinhoHeader>
        <h3>Carrinho</h3>
        {/* Altere para fechar o carrinho */}
      </CarrinhoHeader>
      <CarrinhoLista>
        {itens.map((item) => (
          <CarrinhoItem key={item.id}>
            <ImgProduto src={item.image} alt={item.title} />
            <div>
              <h4>{item.title}</h4>
              <p>R$ {item.preco.toFixed(2)}</p>
            </div>
            <button onClick={() => dispatch(removerDoCarrinho(item.id))}>
              <img src={trash} alt="Excluir item" />
            </button>
          </CarrinhoItem>
        ))}
      </CarrinhoLista>
      <CarrinhoTotal>
        <p>Total: R$ {calcularTotal()}</p>
      </CarrinhoTotal>
      <CarrinhoButton>Continuar para a entrega</CarrinhoButton>
    </CarrinhoContainer>
  )
}

export default Carrinho
