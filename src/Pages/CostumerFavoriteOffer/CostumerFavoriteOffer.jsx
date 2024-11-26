import React from "react";


import { Back, FavoriteContainer, Row, Title, Cards } from "./style";
import { FaArrowLeft } from "react-icons/fa";

import { useNavigate } from "react-router-dom";
import CommerceCardList from "../../components/CommerceCardList/CommerceCardList";
import CostumerHeader from "../../components/CostumerHeader/CostumerHeader";

const CostumerFavoriteOffer = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate("/consumidor/home");
  };
  return (
    <>
      <CostumerHeader authenticated={true} />
      <Row>
        <Back onClick={handleBack}>
          <FaArrowLeft size={25} />
        </Back>

        <Title>Oferas Favoritas</Title>
      </Row>
      <FavoriteContainer>
        <Cards>
          <CommerceCardList market={false} />
        </Cards>
      </FavoriteContainer>
    </>
  );
};

export default CostumerFavoriteOffer;
