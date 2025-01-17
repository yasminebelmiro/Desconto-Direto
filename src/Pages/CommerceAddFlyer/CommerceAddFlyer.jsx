import React, { useEffect, useState } from "react";
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
import { useNavigate, useParams } from "react-router-dom";
import Loading from "../Loading/Loading";
import { api } from "../../service/api";

const CommerceAddFlyer = () => {
  const navigate = useNavigate();
  const { idCommerce } = useParams();
  const [commerce, setCommerce] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCommerce = async () => {
      try {
        const response = await api.get(`/comercios/find/${idCommerce}`);
        if (response.data) {
          setCommerce(response.data);
        } else {
          navigate("/404");
        }
      } catch (error) {
        console.error("Erro ao buscar comércio:", error);
        navigate("/404");
      } finally {
        setLoading(false);
      }
    };

    fetchCommerce();
  }, [idCommerce, navigate]);

  if (loading) {
    return <Loading />;
  }

  if (!commerce) {
    return null;
  }
  const handleBack = () => {
    navigate(`/comercio/home/${idCommerce}`);
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
