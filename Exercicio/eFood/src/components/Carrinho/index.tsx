import { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store/store'
import trash from '../../assets/images.nova/trash.svg'
import { removerDoCarrinho } from '../../store/Slice/carrinhoSlice'
import {
  CarrinhoContainer,
  CarrinhoHeader,
  CarrinhoLista,
  CarrinhoItem,
  CarrinhoTotal,
  CarrinhoButton,
  ImgProduto
} from './styles'

interface CarrinhoProps {
  isOpen: boolean
  onClose: () => void
}

const Carrinho = ({ isOpen, onClose }: CarrinhoProps) => {
  const dispatch = useDispatch()
  const itens = useSelector((state: RootState) => state.carrinho.itens)
  const carrinhoRef = useRef<HTMLDivElement>(null)

  const calcularTotal = () => {
    return itens.reduce((total, item) => total + item.preco, 0).toFixed(2)
  }

  // Fechar o carrinho ao clicar fora
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        carrinhoRef.current &&
        !carrinhoRef.current.contains(event.target as Node)
      ) {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null // Não renderizar o carrinho se não estiver aberto

  return (
    <CarrinhoContainer isOpen={isOpen} ref={carrinhoRef}>
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
        <p>Valor total</p>
        <p>R$ {calcularTotal()}</p>
      </CarrinhoTotal>
      <CarrinhoButton>Continuar para a entrega</CarrinhoButton>
    </CarrinhoContainer>
  )
}

export default Carrinho
