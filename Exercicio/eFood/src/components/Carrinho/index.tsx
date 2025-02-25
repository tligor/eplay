import { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store/store'
import trash from '../../assets/images.nova/trash.svg'
import {
  removerDoCarrinho,
  limparCarrinho
} from '../../store/Slice/carrinhoSlice'
import {
  CarrinhoContainer,
  CarrinhoLista,
  CarrinhoItem,
  CarrinhoTotal,
  CarrinhoButton,
  ImgProduto,
  FormularioEntregaContainer,
  FormularioInput,
  FormularioButton,
  PedidoRealizadoContainer,
  MensagemCarrinhoVazio,
  CepNumero
} from './styles'
import React from 'react'

interface CarrinhoProps {
  isOpen: boolean
  onClose: () => void
}

const Carrinho = ({ isOpen, onClose }: CarrinhoProps) => {
  const dispatch = useDispatch()
  const itens = useSelector((state: RootState) => state.carrinho.itens)
  const carrinhoRef = useRef<HTMLDivElement>(null)
  const [showForm, setShowForm] = useState(false)
  const [showPaymentForm, setShowPaymentForm] = useState(false)
  const [orderCompleted, setOrderCompleted] = useState(false)
  const [paymentData, setPaymentData] = useState({
    nomeCartao: '',
    numeroCartao: '',
    cvv: '',
    mesVencimento: '',
    anoVencimento: ''
  })
  const [deliveryData, setDeliveryData] = useState({
    nome: '',
    endereco: '',
    cidade: '',
    cep: '',
    numero: '',
    complemento: '',
    telefone: ''
  })
  const [errors, setErrors] = useState({
    nome: false,
    endereco: false,
    cidade: false,
    cep: false,
    numero: false,
    telefone: false,
    nomeCartao: false,
    numeroCartao: false,
    cvv: false,
    mesVencimento: false,
    anoVencimento: false
  })

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

  // Máscara para telefone
  const handleTelefoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target

    // Remove todos os caracteres não numéricos
    const numericValue = value.replace(/\D/g, '')

    // Aplica a máscara (00) 00000-0000
    let formattedValue = numericValue
    if (numericValue.length > 2) {
      formattedValue = `(${numericValue.slice(0, 2)}) ${numericValue.slice(
        2,
        7
      )}`
      if (numericValue.length > 7) {
        formattedValue += `-${numericValue.slice(7, 11)}`
      }
    }

    // Limita o comprimento máximo do telefone (11 dígitos + caracteres de formatação)
    formattedValue = formattedValue.slice(0, 15) // (00) 00000-0000 tem 15 caracteres

    // Atualiza o estado do telefone
    setDeliveryData({ ...deliveryData, telefone: formattedValue })
  }

  // Máscara para CEP
  const handleCepChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target

    // Remove todos os caracteres não numéricos
    const numericValue = value.replace(/\D/g, '')

    // Aplica a máscara 00000-000
    let formattedValue = numericValue
    if (numericValue.length > 5) {
      formattedValue = `${numericValue.slice(0, 5)}-${numericValue.slice(5, 8)}`
    }

    // Limita o comprimento máximo do CEP (8 dígitos + 1 hífen)
    formattedValue = formattedValue.slice(0, 9) // 00000-000 tem 9 caracteres

    // Atualiza o estado do CEP
    setDeliveryData({ ...deliveryData, cep: formattedValue })
  }

  // Validação dos campos de entrega
  const validateDeliveryForm = () => {
    const newErrors = {
      nome: !deliveryData.nome,
      endereco: !deliveryData.endereco,
      cidade: !deliveryData.cidade,
      cep: !deliveryData.cep,
      numero: !deliveryData.numero,
      telefone: !deliveryData.telefone
    }
    setErrors({ ...errors, ...newErrors })
    return !Object.values(newErrors).some((error) => error)
  }

  // Validação dos campos de pagamento
  const validatePaymentForm = () => {
    const newErrors = {
      nomeCartao: !paymentData.nomeCartao,
      numeroCartao: !paymentData.numeroCartao,
      cvv: !paymentData.cvv,
      mesVencimento: !paymentData.mesVencimento,
      anoVencimento: !paymentData.anoVencimento
    }
    setErrors({ ...errors, ...newErrors })
    return !Object.values(newErrors).some((error) => error)
  }

  // Função para finalizar o pagamento
  const handleFinalizarPagamento = () => {
    if (validatePaymentForm()) {
      console.log('Dados do pagamento:', paymentData)
      setOrderCompleted(true)
    }
  }
  const handleFinalizarPedido = async () => {
    if (!validatePaymentForm()) return // Valida os campos de pagamento

    try {
      // Preparar os dados do pedido
      const pedido = {
        products: itens.map((item) => ({
          id: parseInt(item.id), // Converte o ID para número
          price: item.preco
        })),
        delivery: {
          receiver: deliveryData.nome,
          address: {
            description: deliveryData.endereco,
            city: deliveryData.cidade,
            zipCode: deliveryData.cep,
            number: parseInt(deliveryData.numero), // Converte o número para inteiro
            complement: deliveryData.complemento
          }
        },
        payment: {
          card: {
            name: paymentData.nomeCartao,
            number: paymentData.numeroCartao,
            code: parseInt(paymentData.cvv), // Converte o CVV para inteiro
            expires: {
              month: parseInt(paymentData.mesVencimento), // Converte o mês para inteiro
              year: parseInt(paymentData.anoVencimento) // Converte o ano para inteiro
            }
          }
        }
      }

      const response = await fetch(
        'https://fake-api-tau.vercel.app/api/efood/checkout',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(pedido)
        }
      )

      if (!response.ok) {
        throw new Error('Erro ao finalizar o pedido')
      }

      // Limpar o carrinho e exibir a mensagem de sucesso
      dispatch(limparCarrinho())
      setOrderCompleted(true)
    } catch (error) {
      console.error('Erro ao finalizar o pedido:', error)
      alert('Erro ao finalizar o pedido. Tente novamente.')
    }
  }
  // Função para concluir o pedido
  const handleConcluirPedido = () => {
    dispatch(limparCarrinho())
    setOrderCompleted(false)
    onClose()
  }

  if (!isOpen) return null

  return (
    <CarrinhoContainer isOpen={isOpen} ref={carrinhoRef}>
      {!showForm ? (
        <>
          {itens.length === 0 ? (
            <MensagemCarrinhoVazio>
              Adicione itens ao carrinho
            </MensagemCarrinhoVazio>
          ) : (
            <>
              <CarrinhoLista>
                {itens.map((item) => (
                  <CarrinhoItem key={item.id}>
                    <ImgProduto src={item.image} alt={item.title} />
                    <div>
                      <h4>{item.title}</h4>
                      <p>R$ {item.preco.toFixed(2)}</p>
                    </div>
                    <button
                      onClick={() => dispatch(removerDoCarrinho(item.id))}
                    >
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
          )}
        </>
      ) : !showPaymentForm ? (
        <FormularioEntregaContainer>
          <h3>Entrega</h3>
          <label htmlFor="nome">Quem irá receber *</label>
          <FormularioInput
            id="nome"
            type="text"
            value={deliveryData.nome}
            onChange={(e) =>
              setDeliveryData({ ...deliveryData, nome: e.target.value })
            }
            required
          />
          <label htmlFor="endereco">Endereço *</label>
          <FormularioInput
            id="endereco"
            type="text"
            value={deliveryData.endereco}
            onChange={(e) =>
              setDeliveryData({ ...deliveryData, endereco: e.target.value })
            }
            required
          />
          <label htmlFor="cidade">Cidade *</label>
          <FormularioInput
            id="cidade"
            type="text"
            value={deliveryData.cidade}
            onChange={(e) =>
              setDeliveryData({ ...deliveryData, cidade: e.target.value })
            }
            required
          />
          <CepNumero>
            <div>
              <label htmlFor="cep">CEP *</label>
              <FormularioInput
                id="cep"
                type="text"
                value={deliveryData.cep}
                onChange={handleCepChange}
                required
              />
            </div>
            <div>
              <label htmlFor="numero">Número *</label>
              <FormularioInput
                id="numero"
                type="text"
                value={deliveryData.numero}
                onChange={(e) =>
                  setDeliveryData({ ...deliveryData, numero: e.target.value })
                }
                required
              />
            </div>
          </CepNumero>
          <label htmlFor="telefone">Telefone *</label>
          <FormularioInput
            id="telefone"
            type="text"
            value={deliveryData.telefone}
            onChange={handleTelefoneChange}
            required
          />
          <label htmlFor="complemento">Complemento (opcional)</label>
          <FormularioInput
            id="complemento"
            type="text"
            value={deliveryData.complemento}
            onChange={(e) =>
              setDeliveryData({ ...deliveryData, complemento: e.target.value })
            }
          />
          {errors.telefone && (
            <span>Os campos marcados com * são obrigatórios</span>
          )}
          <FormularioButton
            onClick={() => {
              if (validateDeliveryForm()) {
                setShowPaymentForm(true)
              }
            }}
          >
            Continuar com o pagamento
          </FormularioButton>
          <FormularioButton onClick={() => setShowForm(false)}>
            Voltar para o carrinho
          </FormularioButton>
        </FormularioEntregaContainer>
      ) : orderCompleted ? (
        <PedidoRealizadoContainer>
          <h1>Pedido realizado - {Math.floor(Math.random() * 1000)}</h1>
          <p>
            Estamos felizes em informar que seu pedido já está em processo de
            preparação e, em breve, será entregue no endereço fornecido.
          </p>
          <p>
            Gostaríamos de ressaltar que nossos entregadores não estão
            autorizados a realizar cobranças extras.
          </p>
          <p>
            Lembre-se da importância de higienizar as mãos após o recebimento do
            pedido, garantindo assim sua segurança e bem-estar durante a
            refeição.
          </p>
          <p>
            Esperamos que desfrute de uma deliciosa e agradável experiência
            gastronômica. Bom apetite!
          </p>
          <FormularioButton onClick={handleConcluirPedido}>
            Concluir
          </FormularioButton>
        </PedidoRealizadoContainer>
      ) : (
        <FormularioEntregaContainer>
          <h3>Pagamento</h3>
          <label htmlFor="nomeCartao">Nome no Cartão *</label>
          <FormularioInput
            id="nomeCartao"
            type="text"
            value={paymentData.nomeCartao}
            onChange={(e) =>
              setPaymentData({ ...paymentData, nomeCartao: e.target.value })
            }
            required
          />
          <label htmlFor="numeroCartao">Número do Cartão *</label>
          <FormularioInput
            id="numeroCartao"
            type="text"
            value={paymentData.numeroCartao}
            onChange={(e) =>
              setPaymentData({ ...paymentData, numeroCartao: e.target.value })
            }
            required
          />
          <label htmlFor="cvv">CVV *</label>
          <FormularioInput
            id="cvv"
            type="text"
            value={paymentData.cvv}
            onChange={(e) =>
              setPaymentData({ ...paymentData, cvv: e.target.value })
            }
            required
          />
          <label htmlFor="mesVencimento">Mês de Vencimento *</label>
          <FormularioInput
            id="mesVencimento"
            type="text"
            value={paymentData.mesVencimento}
            onChange={(e) =>
              setPaymentData({ ...paymentData, mesVencimento: e.target.value })
            }
            required
          />
          <label htmlFor="anoVencimento">Ano de Vencimento *</label>
          <FormularioInput
            id="anoVencimento"
            type="text"
            value={paymentData.anoVencimento}
            onChange={(e) =>
              setPaymentData({ ...paymentData, anoVencimento: e.target.value })
            }
            required
          />
          {errors.anoVencimento && (
            <span>Os campos marcados com * são obrigatórios</span>
          )}
          <FormularioButton onClick={handleFinalizarPedido}>
            Finalizar pagamento
          </FormularioButton>
          <FormularioButton onClick={() => setShowPaymentForm(false)}>
            Voltar para a edição de endereço
          </FormularioButton>
        </FormularioEntregaContainer>
      )}
    </CarrinhoContainer>
  )
}

export default Carrinho
