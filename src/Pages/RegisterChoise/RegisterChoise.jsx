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
import HeaderConsumer from "../../components/HeaderConsumer/HeaderConsumer";

const RegisterChoise = () => {
  const navigate = useNavigate();

  const handleConsumer = () => {
    navigate("/cadastro-consumidor");
  };

  const handleMarket = () => {
    navigate("/casdastro-comercio");
  };

  return (
    <>
      <HeaderConsumer />
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

      <Footer />
    </>
  );
};

export default RegisterChoise;
