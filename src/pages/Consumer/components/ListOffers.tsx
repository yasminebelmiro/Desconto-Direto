import React from "react";
import { id } from "zod/v4/locales";
import OfferCard from "./OfferCard.tsx";

import offers from "../../../mocks/offers.json" with { type: "json" };
function ListOffers() {
  const formatedPrice = (price: number) => {
    return price.toFixed(2).replace(".", ",");
  };
  return (
    <div className="flex items-center justify-center gap-10 py-10 md:px-10 flex-wrap lg:grid grid-cols-4 lg:w-250 ">
      {offers.map((offer) => (
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
