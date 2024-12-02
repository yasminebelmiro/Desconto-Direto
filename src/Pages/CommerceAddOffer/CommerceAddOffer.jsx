import React from "react";
import CommerceHeader from "../../components/CommerceHeader/CommerceHeader";
import {
  Back,
  Container,
  Column,
  Row,
  Title,
  Button,
  ContainerImg,
  Icon,
  LongerInput,
  ShortInput,
  Left,
  Right,
  Text,
  Text2,
  Text4,
  LeftInput,
  AddOProduto,
} from "./style";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { CiImageOn } from "react-icons/ci";

const CommerceAddOffer = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate("/comercio/home");
  };

  const handleNewProduct = () => {
    navigate("/comercio/novo-produto");
  };
  return (
    <>
      <CommerceHeader authenticated={true} />
      <Back onClick={handleBack}>
        <FaArrowLeft size={25} />
      </Back>
      <Column>
        <Title>Adicione informações sobre sua oferta</Title>
        <Container>
          <Column>
            <Text>Selecione um produto já cadastrado</Text>
            <LeftInput placeholder="Procure por um produto aqui"/>
            <Row>
              <Left>
                <ContainerImg>
                  <Icon>
                    <CiImageOn size={100} />
                  </Icon>
                  <Text2>Imagem do produto</Text2>
                </ContainerImg>
                <AddOProduto onClick={handleNewProduct}>Cadastrar produto</AddOProduto>
              </Left>
              <Right>
                <Text4>Nome da oferta</Text4>
                <LongerInput placeholder="Ex: Refrigerante 1L"/>
                <Text4>Validade da oferta</Text4>
                <ShortInput placeholder="DD/MM/AAAA"/>
                <Text4>Preço da oferta</Text4>
                <ShortInput placeholder="R$99,99" />
              </Right>
            </Row>
            <Button>Salvar</Button>
          </Column>
        </Container>
      </Column>
    </>
  );
};

export default CommerceAddOffer;
