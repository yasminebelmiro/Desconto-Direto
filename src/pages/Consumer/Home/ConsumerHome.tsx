import Header from "./components/Header.tsx";
import Separator from "../../../components/Separator.tsx";
import ListOffers from "./components/ListOffers.tsx";
import FlyersCarousel from "./components/FlyersCarousel.tsx";

const ConsumerHome = () => {
  return (
    <>
      <Header />
      <div>
        <Separator section="Panfletos" />
        <FlyersCarousel />
        <Separator section="Top ofertas" />
        <div className="flex items-center justify-center">
          <ListOffers />
        </div>

        <Separator section="Últimas ofertas" />
        <div className="flex items-center justify-center">
          <ListOffers />
        </div>
      </div>
    </>
  );
};

export default ConsumerHome;
