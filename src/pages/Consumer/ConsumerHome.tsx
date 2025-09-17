import Separator from "../../components/Separator.tsx";
import FlyersCarousel from "./components/FlyersCarousel.tsx";
import Header from "./components/Header.tsx";
import ListOffers from "./components/ListOffers.tsx";
import { useEffect, useState } from "react";
import api from "../../service/api/axios.ts";
import type { OfferTypes } from "../../types/OfferTypes.ts";

const ConsumerHome = () => {
  const [offers, setOffers] = useState<OfferTypes[]>([]);
  useEffect(() => {
    try {
      const fetchRecentOffers = async () => {
        const response = await api.get("/ofertas/all");
        setOffers(response.data);
      };
      fetchRecentOffers();
    } catch (error) {
      console.error(error);
    }
  }, []);
  return (
    <>
      <Header />
      <div>
        <Separator section="Panfletos" />
        <FlyersCarousel />
        <Separator section="Top ofertas" typeUser="consumidores" />
        <div className="flex items-center justify-center ">
          <ListOffers offers={offers} cardCount={8} order="relevance" />
        </div>
        <Separator section="Últimas ofertas" typeUser="consumidores" />
        <div className="flex items-center justify-center">
          <ListOffers offers={offers} cardCount={8} order="last" />
        </div>
      </div>
    </>
  );
};

export default ConsumerHome;
