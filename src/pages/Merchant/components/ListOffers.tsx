import type { OfferTypes } from "../../../types/OfferTypes.ts";
import OfferCard from "./OfferCard.tsx";

interface ListOffersProps {
  offers: OfferTypes[];
}

const ListOffers = ({offers}: ListOffersProps) => {
    const formatedPrice = (price: number) => {
        return price.toFixed(2).replace('.', ',');  
    }

  return (
    <div className="flex items-center justify-center gap-10 py-10 md:px-10 flex-wrap lg:grid grid-cols-4 lg:w-250 ">
      {offers.map((offer) => (
        <OfferCard
          key={offer.id}
          imgProduct={offer.produto.fotoUrl}
          name={offer.produto.nome}
          expiration={offer.validade}
          price={formatedPrice(offer.preco)}
          likes={offer.likes}
        />
      ))}
    </div>
  );
};

export default ListOffers;
