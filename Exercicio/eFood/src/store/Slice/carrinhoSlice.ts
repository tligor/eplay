import { createSlice, PayloadAction } from '@reduxjs/toolkit'
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
    adicionarAoCarrinho: (state, action: PayloadAction<Pratos>) => {
      state.itens.push(action.payload)
    },
    removerDoCarrinho: (state, action: PayloadAction<number>) => {
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
