import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Divisor, Text, Row, Button } from "./style";
import Carousel from "../../components/Carousel/Carousel";
import { FaPlus } from "react-icons/fa6";
import CardOfferMarket from "../../components/CardOfferMarket/CardOfferMarket";

const HomeMaket = () => {
  return (
    <>
      <Header authenticatedMarket={true} />
      <Divisor>
        <Text>Meus Panfletos</Text>
        <Button>Novo <FaPlus size={15} /> </Button>
      </Divisor>
      <Carousel />
      <Divisor>
        <Text>Minhas Ofertas</Text>
        <Button>Nova <FaPlus size={15} /></Button>
      </Divisor>
      <Row>
      <CardOfferMarket />
      <CardOfferMarket />
      <CardOfferMarket />
      <CardOfferMarket />
      <CardOfferMarket />
      <CardOfferMarket />
      <CardOfferMarket />
      <CardOfferMarket />
      <CardOfferMarket />
      <CardOfferMarket />
      <CardOfferMarket />
     
      </Row>

      <Footer />
    </>
  );
};

export default HomeMaket;
