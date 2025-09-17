import Separator from "../../components/Separator.tsx";
import FlyersCarousel from "./components/FlyersCarousel.tsx";
import Header from "./components/Header.tsx";
import ListOffers from "./components/ListOffers.tsx";
import { useEffect, useState } from "react";
import api from "../../service/api/axios.ts";
import type { OfferTypes } from "../../types/OfferTypes.ts";

const ConsumerHome = () => {

  return (
    <>
      <Header />
      <div>
        <Separator section="Panfletos" />
        <FlyersCarousel />
        <Separator section="Top ofertas" typeUser="consumidores" />
        <div className="flex items-center justify-center ">
          <ListOffers cardCount={8} order="relevance" />
        </div>
        <Separator section="Últimas ofertas" typeUser="consumidores" />
        <div className="flex items-center justify-center">
          <ListOffers cardCount={8} order="last" />
        </div>
      </div>
    </>
  );
};

export default ConsumerHome;
