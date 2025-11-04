import type { ProductType } from "./ProductTypes.ts";

export type OfferTypes = {
  id: string;
  preco: number;
  dataPostagem: Date;
  validade:  Date;
  produto: ProductType;
  likes: number;
  comercioId: string;
};
