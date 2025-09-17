import type { FlyerTypes } from "./FlyerTypes.ts";
import type { OfferTypes } from "./OfferTypes.ts";

export type MerchantTypes = {
  id: string;
  nome: string;
  telefone: string;
  telefoneCelular: string;
  instagram: string;
  bairro: string;
  cep: string;
  fazEntrega: boolean;
  email: string;
  senha: string;
  horarioAbertura: Date;
  horarioFechamento: Date;
  aberto: boolean;
  fotoUrl: string;
  ofertas: OfferTypes;
  panfletos: FlyerTypes;
};
