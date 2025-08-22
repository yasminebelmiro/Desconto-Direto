import React from "react";
import Header from "./components/Header.tsx";
import Separator from "../../../components/Separator.tsx";

const ConsumerHome = () => {
  return (
    <>
      <Header />
      <div>
        <Separator section="Panfletos"/>
        {/* <CarouselOffers /> */}
        <Separator section="Top ofertas"/>
        <Separator section="Últimas ofertas"/>
      </div>
    </>
  );
};

export default ConsumerHome;
