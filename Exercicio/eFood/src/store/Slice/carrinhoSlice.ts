import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid'
import Pratos from '../../models/Pratos'

interface CarrinhoState {
  itens: Pratos[]
}

const initialState: CarrinhoState = {
  itens: []
}

const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    adicionarAoCarrinho: (state, action: PayloadAction<Omit<Pratos, 'id'>>) => {
      const novoItem = {
        ...action.payload,
        id: uuidv4() // Gera um ID único para o item
      }
      state.itens.push(novoItem)
    },
    removerDoCarrinho: (state, action: PayloadAction<string>) => {
      state.itens = state.itens.filter((item) => item.id !== action.payload)
    },
    limparCarrinho: (state) => {
      state.itens = []
    }
  }
})

export const { adicionarAoCarrinho, removerDoCarrinho, limparCarrinho } =
  carrinhoSlice.actions

export default carrinhoSlice.reducer
