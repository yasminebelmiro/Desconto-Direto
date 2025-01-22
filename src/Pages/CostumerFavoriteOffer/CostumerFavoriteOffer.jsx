import React, { useState } from "react";

import { Back, CardsContainer, FavoriteContainer, Row, Title } from "./style";
import { FaArrowLeft } from "react-icons/fa";

import { useNavigate, useParams } from "react-router-dom";

import CostumerHeader from "../../components/CostumerHeader/CostumerHeader";
import CostumerFavoriteList from "../../components/CostumerFavoriteList/CostumerFavoriteList";

const CostumerFavoriteOffer = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const handleBack = () => {
    navigate(`/consumidor/home/${id}`);
  };

  return (
    <>
      <CostumerHeader authenticated={true} />
      <Back onClick={handleBack}>
        <FaArrowLeft size={25} />
      </Back>
      <Row>
        <Title>Ofetas Favoritas</Title>
      </Row>
      <FavoriteContainer>
      <CardsContainer>
        <CostumerFavoriteList/>
      </CardsContainer>
      </FavoriteContainer>
    </>
  );
};

export default CostumerFavoriteOffer;
