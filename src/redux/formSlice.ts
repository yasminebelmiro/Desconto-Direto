import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { FormState } from "../types/MerchantTypes.ts";


const initialState: FormState = {
  basic: {
    nome: "",
    categoria: "",
    fotoUrl: "",
  },
  details: {
    telefone: "",
    whatsapp: "",
    instagram: "",
    endereco: "",
    bairro: "",
    cep: "",
    entrega: "",
    horarioAbertura: "",
    horarioFechamento: "",
  },
  account: {
    email: "",
    senha: "",
    confirmarSenha: "",
    termosUso: false,
  },
};

const merchantSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    basicStep(
      state,
      action: PayloadAction<{
        nome: string;
        categoria: string;
        fotoUrl: string;
      }>
    ) {
      state.basic = action.payload;
    },
    detaisStep(
      state,
      action: PayloadAction<{
        telefone: string;
        whatsapp: string;
        instagram: string;
        endereco: string;
        bairro: string;
        cep: string;
        entrega: string;
        horarioAbertura: string;
        horarioFechamento: string;
      }>
    ) {
      state.details = action.payload;
    },
    accountStep(
      state,
      action: PayloadAction<{
        email: string;
        senha: string;
        confirmarSenha: string;
        termosUso: boolean;
      }>
    ) {
      state.account = action.payload;
    },
    resetForm() {
      return initialState
    }
  },
});

export const {basicStep, detaisStep, accountStep, resetForm} = merchantSlice.actions

export default merchantSlice.reducer
