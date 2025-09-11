import { useEffect, useState } from "react";
import OfferCard from "./OfferCard.tsx";
import type { OfferTypes } from "../../../types/OfferTypes.ts";
import api from "../../../service/api/axios.ts";


interface ListOffersProps {
  cardCount: number;
  order: string;
  offers: OfferTypes[];
}

const ListOffers = ({ cardCount, order, offers }: ListOffersProps) => {
  const offersToShow: OfferTypes[] = offers.slice(0, cardCount);


  // TODO: organizar os filtros apos arrumar a api
  const sortOffers = (offers: OfferTypes[], order: string) => {
    switch (order) {
      //     case "exp-asc":
      //       return [...offers].sort(
      //         (a, b) =>
      //           new Date(a.expiration).getTime() - new Date(b.expiration).getTime()
      //       );
      //     case "exp-desc":
      //       return [...offers].sort(
      //         (a, b) =>
      //           new Date(b.expiration).getTime() - new Date(a.expiration).getTime()
      //       );

      case "price-asc":
        return offers.sort((a, b) => a.preco - b.preco);
      case "price-desc":
        return offers.sort((a, b) => b.preco - a.preco);
      // case "relevance":
      //   return offers.sort((a, b) => b.likes - a.likes);
      default:
        return offers;
    }
  };

  const sortedOffers = sortOffers(offersToShow, order);
  // TODO: passar o id do comercio apos arrumar a api
  return (
    <div className="w-full flex items-center justify-center gap-10 py-10 md:px-10 flex-wrap lg:grid grid-cols-4 lg:w-250 ">
      {sortedOffers.length > 0 ? (
        sortedOffers.map((offer) => {
          return <OfferCard key={offer.id} {...offer}  />;
        })
      ) : (
        <p className="text-center m-10 font-inter">
          Nenhum resultado encontrado
        </p>
      )}
    </div>
  );
};

export default ListOffers;
