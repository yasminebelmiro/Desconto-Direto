import OfferCard from "./OfferCard.tsx";
import type { OfferTypes } from "../../../types/OfferTypes.ts";
import { useEffect, useState } from "react";
import api from "../../../lib/axios.ts";
import Loading from "../../../components/Loading.tsx";
import NotFoundItem from "../../../components/NotFoundItem.tsx";

interface ListOffersProps {
  cardCount: number;
  order: string;
  offers: OfferTypes[];
  loading: boolean
}

const ListOffers = ({ offers, cardCount, order, loading }: ListOffersProps) => {
  const offersToShow: OfferTypes[] = offers.slice(0, cardCount);

  const sortOffers = (offers: OfferTypes[], order: string) => {
    switch (order) {
      case "price-asc":
        return offers.sort((a, b) => a.preco - b.preco);
      case "price-desc":
        return offers.sort((a, b) => b.preco - a.preco);
      case "exp-asc":
        return offers.sort(
          (a, b) =>
            new Date(a.validade).getTime() - new Date(b.validade).getTime()
        );

      case "exp-desc":
        return offers.sort(
          (a, b) =>
            new Date(b.validade).getTime() - new Date(a.validade).getTime()
        );
      case "relevance":
        return offers.sort((a, b) => b.likes - a.likes);

      case "last":
        return offers.sort(
          (a, b) =>
            new Date(b.dataPostagem).getTime() -
            new Date(a.dataPostagem).getTime()
        );
      default:
        return offers;
    }
  };

  const sortedOffers = sortOffers(offersToShow, order);

  return (
    <>
      {loading ? (
        <Loading />
      ) : sortedOffers.length <= 0 ? (
        <NotFoundItem />
      ) : (
        <div className="w-full flex items-center justify-center gap-10 py-10 md:px-10 flex-wrap lg:grid grid-cols-4 lg:w-250 ">
          {sortedOffers.map((offer) => {
            return <OfferCard key={offer.id} {...offer} />;
          })}
        </div>
      )}
    </>
  );
};

export default ListOffers;
