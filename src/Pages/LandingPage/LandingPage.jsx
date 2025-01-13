import React, { useEffect } from "react";
import PublicHeader from "../../components/PublicHeader/PublicHeader";
import {
  ContainerHero,
  ContainerAbout,
  Left,
  Right,
  Subtitle,
  Title,
  Button,
  Image,
} from "./style";
import { useLocation, useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo === "sobre") {
      const section = document.getElementById("sobre");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  
  }, [location]);

  

  return (
    <>
      <PublicHeader />
      <ContainerHero>
        <Left>
          <Title>
            Bem-vindo ao
            <br /> Desconto Direto
          </Title>
          <Subtitle>As melhores ofertas locais em um único lugar</Subtitle>
          <Button onClick={() => navigate("/consumidor/home")}>
            Explorar ofertas
          </Button>
        </Left>
        <Right>
          <Image
            src="https://media-public.canva.com/9m4Mw/MAFr5E9m4Mw/1/tl.png"
            alt="Imagem de destaque"
          />
        </Right>
      </ContainerHero>
      <ContainerAbout id="sobre">
        <Left>
          <Image
            src="https://media-public.canva.com/0mtfQ/MAEvIr0mtfQ/1/tl.png"
            alt="Imgem sobre"
          />
        </Left>
        <Right>
          <Title>Sobre nós</Title>
          <Subtitle>
            Nosso objetivo é proporcionar uma plataforma centralizada que
            facilite a divulgação de ofertas de comércios locais e aos
            consumidores um meio fácil e acessível para descobrir e aproveitar
            ofertas relevantes em Pires do Rio
          </Subtitle>
        </Right>
      </ContainerAbout>
    </>
  );
};

export default LandingPage;
