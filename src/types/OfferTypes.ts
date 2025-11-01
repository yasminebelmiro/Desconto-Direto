import type { ProductType } from "./ProductTypes.ts";

export type OfferTypes = {
  id: string;
  preco: number;
  dataPostagem: Date;
  validade: string;
  produto: ProductType;
  likes: number;
  comercioId: string;
};
