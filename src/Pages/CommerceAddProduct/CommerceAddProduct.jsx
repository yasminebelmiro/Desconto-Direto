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
  LongerInput,
  ShortInput,
  Left,
  Right,
  Text,
  Text2,
  Text3,
  Text4,
  Column2,

} from "./style";
import { FaArrowLeft, FaCamera } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Loading from "../Loading/Loading";


const CommerceAddProduct = () => {
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
        <Title>Adicione informações sobre o produto</Title>
        <Container>
          <Column>
            <Row>
              <Left>
                <Text>Imagem</Text>
                <ContainerImg>
                  <Icon>
                    <FaCamera size={100} />
                  </Icon>
                  <Text2>Adicionar imagem</Text2>
                  <Text3>JPG, PNG somente</Text3>
                </ContainerImg>
                
              </Left>
              <Right>
                <Text4>Nome do produto</Text4>
                <LongerInput placeholder="Ex: Coca-cola 1L" />
                <Row>
                  <Column2>
                  <Text4>Validade da oferta</Text4>
                <ShortInput placeholder="DD/MM/AAAA" />
                  </Column2>
                  <Column2>
                  <Text4>Validade da oferta</Text4>
                <ShortInput placeholder="DD/MM/AAAA" />
                  </Column2>
                </Row>
                <Text4>Validade da oferta</Text4>
                <LongerInput placeholder="DD/MM/AAAA" />
              </Right>
            </Row>
            <Button>Salvar</Button>
          </Column>
        </Container>
      </Column>
    </>
  );
};

export default CommerceAddProduct;
