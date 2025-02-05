import { useEffect, useRef, useState } from 'react'
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
  ImgProduto,
  FormularioEntregaContainer,
  FormularioInput,
  FormularioButton
} from './styles'

interface CarrinhoProps {
  isOpen: boolean
  onClose: () => void
}

const Carrinho = ({ isOpen, onClose }: CarrinhoProps) => {
  const dispatch = useDispatch()
  const itens = useSelector((state: RootState) => state.carrinho.itens)
  const carrinhoRef = useRef<HTMLDivElement>(null)
  const [showForm, setShowForm] = useState(false) // Estado para controlar a exibição do formulário

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
      {!showForm ? ( // Exibir o carrinho ou o formulário com base no estado `showForm`
        <>
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
          <CarrinhoButton onClick={() => setShowForm(true)}>
            Continuar para a entrega
          </CarrinhoButton>
        </>
      ) : (
        <FormularioEntregaContainer>
          <h3>Entrega</h3>
          <label htmlFor="nome">Quem irá receber</label>
          <FormularioInput id="nome" type="text" />
          <label htmlFor="address">Endereço</label>
          <FormularioInput id="address" type="text" />
          <label htmlFor="city">Cidade</label>
          <FormularioInput id="city" type="text" placeholder="Cidade" />
          <label htmlFor="cep">CEP</label>
          <FormularioInput id="cep" type="text" placeholder="CEP" />
          <label htmlFor="numberHome">Número</label>
          <FormularioInput id="numberHome" type="text" placeholder="Número" />
          <label htmlFor="complement">Complemento (opcional)</label>
          <FormularioInput
            id="complement"
            type="text"
            placeholder="Complemento"
          />
          <FormularioButton onClick={() => alert('Continuar com o pagamento')}>
            Continuar com o pagamento
          </FormularioButton>
          <FormularioButton onClick={() => setShowForm(false)}>
            Voltar para o carrinho
          </FormularioButton>
        </FormularioEntregaContainer>
      )}
    </CarrinhoContainer>
  )
}

export default Carrinho
