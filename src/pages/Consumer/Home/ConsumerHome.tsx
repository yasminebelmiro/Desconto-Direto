import Header from "./components/Header.tsx";
import Separator from "../../../components/Separator.tsx";
import ListOffers from "./components/ListOffers.tsx";

const ConsumerHome = () => {
  return (
    <>
      <Header />
      <div>
        <Separator section="Panfletos" />
        {/* <CarouselOffers /> */}
        <Separator section="Top ofertas" />
        <ListOffers />
        <Separator section="Últimas ofertas" />
      </div>
    </>
  );
};

export default ConsumerHome;
