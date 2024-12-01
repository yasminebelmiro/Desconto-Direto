import React from "react";

import { Back, FavoriteContainer, Row, Title } from "./style";
import { FaArrowLeft } from "react-icons/fa";

import { useNavigate } from "react-router-dom";
import CostumerCardList from "../../components/CostumerCardList/CostumerCardList";
import CostumerHeader from "../../components/CostumerHeader/CostumerHeader";

const CostumerFavoriteOffer = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate("/consumidor/home");
  };
  return (
    <>
      <CostumerHeader authenticated={true} />
      <Back onClick={handleBack}>
        <FaArrowLeft size={25} />
      </Back>
      <Row>
        <Title>Oferas Favoritas</Title>
      </Row>
      <FavoriteContainer>
        <CostumerCardList />
      </FavoriteContainer>
    </>
  );
};

export default CostumerFavoriteOffer;
