import React from "react";
import { id } from "zod/v4/locales";
import OfferCard from "./OfferCard.tsx";
interface ListOffersProps {
  offers: {
    id: number;
    imgMerchant: string;
    imgProduct: string;
    name: string;
    expiration: string;
    price: number;
    likes: number;
  }[];
  cardCount: number;
}

function ListOffers({offers, cardCount}: ListOffersProps) {
  const offersToShow = offers.slice(0, cardCount);
  const formatedPrice = (price: number) => {
    
    return price.toFixed(2).replace(".", ",");
  };
  return (
    <div className="flex items-center justify-center gap-10 py-10 md:px-10 flex-wrap lg:grid grid-cols-4 lg:w-250 ">
      {offersToShow.map((offer) => (
        <OfferCard
          key={offer.id}
          imgMerchant={offer.imgMerchant}
          imgProduct={offer.imgProduct}
          name={offer.name}
          expiration={offer.expiration}
          price={formatedPrice(offer.price)}
          likes={offer.likes}
        />
      ))}
    </div>
  );
}

export default ListOffers;
