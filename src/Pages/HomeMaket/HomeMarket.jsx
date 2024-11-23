import React from "react";

import Footer from "../../components/Footer/Footer";
import { Divisor, Text, Button } from "./style";
import Carousel from "../../components/Carousel/Carousel";
import { FaPlusCircle } from "react-icons/fa";

import HeaderConsumer from "../../components/HeaderConsumer/HeaderConsumer";
import CardList from "../../components/CardList/CardList";

const HomeMaket = () => {
  return (
    <>
      <HeaderConsumer />
      <Divisor>
        <Text>Meus Panfletos</Text>
        <Button>
          Adicionar <FaPlusCircle size={15} />{" "}
        </Button>
      </Divisor>
      <Carousel />
      <Divisor>
        <Text>Minhas Ofertas</Text>
        <Button>
          Adicionar <FaPlusCircle size={15} />
        </Button>
      </Divisor>
      <CardList />
      <Footer />
    </>
  );
};

export default HomeMaket;
