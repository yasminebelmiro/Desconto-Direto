import type { OfferTypes } from "./OfferTypes.ts"

export type ConsumerType = {
id: string,
email: string,
senha: string,
telefone: string,
ofertasPreferidas: OfferTypes
}