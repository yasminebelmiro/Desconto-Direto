import { useEffect, useState } from "react";
import Separator from "../../components/Separator.tsx";
import FlyersCarousel from "./components/FlyersCarousel.tsx";
import Header from "./components/Header.tsx";
import ListOffers from "./components/ListOffers.tsx";
import type { OfferTypes } from "../../types/OfferTypes.ts";
import type { FlyerTypes } from "../../types/FlyerTypes.ts";
import api from "../../service/api/axios.ts";

const MerchantHome = () => {
  const [offers, setOffers] = useState<OfferTypes[]>([]);
  const [flyers, setFlyers] = useState<FlyerTypes[]>([]);
  const userId = localStorage.getItem("userId")
  useEffect(() => {
    try {
      const fetch = async () => {
      const response = await api.get(`/comercios/find/${userId}`);
        const {ofertas,panfletos } = response.data
        setOffers(ofertas);
        setFlyers(panfletos);
        
      };
     fetch()
 
    } catch (error) {
      console.error(error);
    }
  }, []);
  return (
    <>
      <Header />
      <div>
        <Separator
          section="Meus panfletos"
          route="/comerciantes/novo-panfleto"
        />
        
        <FlyersCarousel flyers={flyers}/>
        <Separator section="Minhas ofertas" route="/comerciantes/nova-oferta" />
        <div className="flex items-center justify-center">
          <ListOffers offers={offers}/>
        </div>
      </div>
      
    </>
  );
};

export default MerchantHome;
