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
  Input,
  Left,
  Right,
  Text,
  Text2,
  Text3,
  Text4
} from "./style";
import { FaArrowLeft, FaCamera } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const CommerceAddFlyer = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate("/comercio/home");
  };
  return (
    <>
      <CommerceHeader authenticated={true} />
      <Back onClick={handleBack}>
        <FaArrowLeft size={25} />
      </Back>
      <Column>
        <Title>Adicione uma imagem do panfleto</Title>
        <Container>
          <Column>
            <Row>
              <Left>
                <Text>Imagem</Text>
                <ContainerImg>
                  <Icon><FaCamera size={100} /></Icon>
                  <Text2>Adicionar imagem</Text2>
                  <Text3>JPG, PNG somente</Text3>
                </ContainerImg>
              </Left>
              <Right>
                <Text4>Validade do panfleto</Text4>
                <Input placeholder="DD/MM/AAAA"/>
              </Right>
              
            </Row>
            <Button>Salvar</Button>
          </Column>
        </Container>
      </Column>
    </>
  );
};

export default CommerceAddFlyer;
