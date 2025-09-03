import Separator from "../../components/Separator.tsx";
import FlyersCarousel from "./components/FlyersCarousel.tsx";
import Header from "./components/Header.tsx";
import ListOffers from "./components/ListOffers.tsx";
import offers from "../../mocks/offers.json" with { type: "json" };

const ConsumerHome = () => {
  return (
    <>
      <Header />
      <div>
        <Separator section="Panfletos" />
        <FlyersCarousel />
        <Separator section="Top ofertas" typeUser="consumidores"/>
        <div className="flex items-center justify-center">
             <ListOffers offers={offers} cardCount={8}/>
        </div>
        <Separator section="Últimas ofertas" typeUser="consumidores"/>
        <div className="flex items-center justify-center">
        <ListOffers offers={offers} cardCount={8}/>
        </div>
      </div>
    </>
  );
};

export default ConsumerHome;
