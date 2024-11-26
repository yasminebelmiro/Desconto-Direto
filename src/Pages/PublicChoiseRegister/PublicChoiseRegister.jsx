import React from "react";

import Footer from "../../components/Footer/Footer";
import {
  Button,
  ChoiseContainer,
  Column,
  RegisterChoiseContainer,
  Row,
  Text,
} from "./style";
import Logo from "../../components/Logo/Logo";
import { useNavigate } from "react-router-dom";
import CostumerHeader from "../../components/CostumerHeader/CostumerHeader";

const PublicChoiseRegister = () => {
  const navigate = useNavigate();

  const handleConsumer = () => {
    navigate("/consumidor/cadastro");
  };

  const handleMarket = () => {
    navigate("/comercio/casdastro-comercio");
  };

  return (
    <>
      <CostumerHeader />
      <RegisterChoiseContainer>
        <ChoiseContainer>
          <Column>
            <Logo />
            <Text>Qual seu objetivo?</Text>
            <Row>
              <Button onClick={handleConsumer}>Ver ofertas</Button>
              <Button onClick={handleMarket}>Anunciar ofertas</Button>
            </Row>
          </Column>
        </ChoiseContainer>
      </RegisterChoiseContainer>

      
    </>
  );
};

export default PublicChoiseRegister;
