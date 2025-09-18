import type { ZodString } from "zod";
import type { FlyerTypes } from "./FlyerTypes.ts";
import type { OfferTypes } from "./OfferTypes.ts";

export type MerchantTypes = {
  id: string;
  nome: string;
  telefone: string;
  categoria: string;
  telefoneCelular: string;
  instagram: string;
  endereco: string;
  bairro: string;
  cep: string;
  fazEntrega: boolean;
  email: string;
  senha: string;
  horarioAbertura: string;
  horarioFechamento: string;
  aberto: boolean;
  fotoUrl: string;
  ofertas: OfferTypes;
  panfletos: FlyerTypes;
};
