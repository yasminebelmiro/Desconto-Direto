import type { ProductType } from "./ProductTypes.ts"

export type OfferTypes = {
    id:string,
    nome:string,
    preco:number,
    validade:string,
    produto: ProductType
}