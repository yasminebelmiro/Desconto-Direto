import React, { useEffect } from "react";
import logo from "../../assets/logo.png";

import { ContainerMenu, Logo, ContainerMenuList, Item, Button } from "./style";
import { useLocation, useNavigate } from "react-router-dom";
const PublicHeader = () => {
  const navigate = useNavigate();
  const handleScrollToFooter = () => {
    const footer = document.getElementById("contato");
    if (footer) {
      footer.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/", { state: { scrollToFooter: true }});
    }
  };

  return (
    <ContainerMenu>
      <Logo src={logo} alt="Logo" />
      <ContainerMenuList>
        <Item to={"/"} state={{ scrollTo: "sobre" }}>
          Sobre
        </Item>
        <Item onClick={handleScrollToFooter}>Contato</Item>
        <Button onClick={() => navigate("/login")}>Login</Button>
        <Button onClick={() => navigate("/tipo-cadastro")}>Cadastrar</Button>
      </ContainerMenuList>
    </ContainerMenu>
  );
};

export default PublicHeader;
