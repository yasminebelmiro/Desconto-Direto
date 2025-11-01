import { useEffect, useState } from "react";
import Separator from "../../components/Separator.tsx";
import FlyersCarousel from "./components/FlyersCarousel.tsx";
import Header from "./components/Header.tsx";
import ListOffers from "./components/ListOffers.tsx";
import type { OfferTypes } from "../../types/OfferTypes.ts";
import type { FlyerTypes } from "../../types/FlyerTypes.ts";
import { MerchantService } from "../../service/MerchantService.ts";

const MerchantHome = () => {
  const [offers, setOffers] = useState<OfferTypes[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const [flyers, setFlyers] = useState<FlyerTypes[]>([]);
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    if (!offers) {
      setLoading(false);
      return;
    }
    if (!flyers) {
      setLoading(false);
      return;
    }
    MerchantService.getById(userId)
      .then((data) => {
        setFlyers(data.panfletos);
        setOffers(data.ofertas);
      })
      .catch(console.error)
      .finally(() => {
        setLoading(false);
      });
  }, []);
  return (
    <>
      <Header />
      <div>
        <Separator
          section="Meus panfletos"
          route="/comerciantes/novo-panfleto"
        />

        <FlyersCarousel flyers={flyers} loading={loading} />
        <Separator section="Minhas ofertas" route="/comerciantes/nova-oferta" />
        <div className="flex items-center justify-center">
          <ListOffers offers={offers} loading={loading} />
        </div>
      </div>
    </>
  );
};

export default MerchantHome; 
