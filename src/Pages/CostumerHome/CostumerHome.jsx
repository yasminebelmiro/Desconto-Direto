import React, { useEffect, useState } from "react";

import { Divisor, Text, Row, CardsContainer } from "./style";
import Carousel from "../../components/Carousel/Carousel";
import CostumerHeader from "../../components/CostumerHeader/CostumerHeader";
import CostumerCardList from "../../components/CostumerCardList/CostumerCardList";


const CostumerHome = () => {
  return (
    <>
      <CostumerHeader authenticated={true} />
      <Divisor>
        <Text>Panfletos</Text>
      </Divisor>
      <Carousel />
      <Divisor>
        <Text>Top 10 ofertas</Text>
      </Divisor>
      <Row></Row>
      <Divisor>
        <Text>Ofertas</Text>
      </Divisor>
      <CardsContainer>
        <CostumerCardList />
      </CardsContainer>
    </>
  );
};

export default CostumerHome;
