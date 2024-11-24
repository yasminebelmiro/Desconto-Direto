import React from "react";
import HeaderConsumer from "../../components/HeaderConsumer/HeaderConsumer";
import CardOffer from "../../components/CardOffer/CardOffer";
import { Back, FavoriteContainer, Row, Title, Cards } from "./style";
import { FaArrowLeft } from "react-icons/fa";

import { useNavigate } from "react-router-dom";

const FavoriteOffer = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate("/home-consumidor");
  };
  return (
    <>
      <HeaderConsumer authenticated={true} />
      <Row>
        <Back onClick={handleBack}>
          <FaArrowLeft size={25} />
        </Back>

        <Title>Oferas Favoritas</Title>
      </Row>
      <FavoriteContainer>
        <Cards>
          <CardOffer />
          <CardOffer />
          <CardOffer />
          <CardOffer />
        </Cards>
      </FavoriteContainer>
    </>
  );
};

export default FavoriteOffer;
