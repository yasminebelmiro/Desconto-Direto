import Separator from "../../components/Separator.tsx";
import FlyersCarousel from "./components/FlyersCarousel.tsx";
import Header from "./components/Header.tsx";
import ListOffers from "./components/ListOffers.tsx";
import { useEffect, useState } from "react";
import type { OfferTypes } from "../../types/OfferTypes.ts";
import type { FlyerTypes } from "../../types/FlyerTypes.ts";
import { OfferService } from "../../service/OfferService.ts";
import { FlyerService } from "../../service/FlyerService.ts";

const ConsumerHome = () => {
  const [offers, setOffers] = useState<OfferTypes[]>([]);
  const [flyers, setFlyers] = useState<FlyerTypes[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const cardCount = 8;
  useEffect(() => {
    if (!flyers) {
      setLoading(false);
      return;
    }
    if (!offers) {
      setLoading(false);
      return;
    }
    FlyerService.getAll()
      .then(setFlyers)
      .catch(console.error)
      .finally(() => setLoading(false));
    OfferService.getAll()
      .then(setOffers)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);
  return (
    <>
      <Header />
      <div>
        <Separator section="Panfletos" />
        <FlyersCarousel flyers={flyers} loading={loading} />
        <Separator section="Top ofertas" typeUser="consumidores" />
        <div className="flex items-center justify-center ">
          <ListOffers
            offers={offers}
            cardCount={cardCount}
            order="relevance"
            loading={loading}
          />
        </div>
        <Separator section="Últimas ofertas" typeUser="consumidores" />
        <div className="flex items-center justify-center">
          <ListOffers
            offers={offers}
            cardCount={cardCount}
            order="last"
            loading={loading}
          />
        </div>
      </div>
    </>
  );
};

export default ConsumerHome;
