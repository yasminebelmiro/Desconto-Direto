import React from "react";
import logo from "../../assets/logo.png";
import { Container, Img } from "./style";

const Loading = () => {
  return (
    <Container>
      <Img src={logo} alt="logo giratrória" />
    </Container>
  );
};

export default Loading;
