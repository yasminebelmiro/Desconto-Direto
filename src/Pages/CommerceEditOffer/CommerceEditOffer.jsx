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
  ShortInput,
  Left,
  Right,
  Text,
  Text4,
  LeftInput,
} from "./style";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { CiImageOn } from "react-icons/ci";
import { api } from "../../service/api";
import Loading from "../Loading/Loading"

const CommerceEditOffer = () => {
  const navigate = useNavigate();
  const { idCommerce, idOffer } = useParams();
  const [offer, setOffer] = useState(null);
  const [validade, setValidade] = useState("");
  const [preco, setPreco] = useState("");
  const [commerce, setCommerce] = useState(null);
  const [loading, setLoading] = useState(true);


  const fetchOffer = async () => {
    try {
      const responseOffer = await api.get(`/ofertas/find/${idOffer}`);
      setOffer(responseOffer.data);
      setValidade(
        new Date(responseOffer.data.validade).toISOString().split("T")[0]
      ); 
      setPreco(responseOffer.data.preco);
    } catch (error) {
      console.error(error);
    }
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    try {

      await api.put(`/ofertas/edit/${idOffer}`, {
        validade,
        preco,
      });
      alert("Oferta atualizada com sucesso!");
      navigate(`/comercio/home/${idCommerce}`);
    } catch (error) {
      console.error(error);
      alert("Erro ao atualizar a oferta. Tente novamente.");
    }
  };

  useEffect(() => {
    fetchOffer();const fetchCommerce = async () => {
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

  const handleBack = () => {
    navigate(`/comercio/home/${idCommerce}`);
  };

  if (loading) {
    return <Loading />;
  }

  if (!commerce) {
    return null;
  }

  if (!offer) {
    return <Loading />;
  }

  return (
    <>
      <CommerceHeader authenticated={true} />
      <Back onClick={handleBack}>
        <FaArrowLeft size={25} />
      </Back>
      <Column>
        <Title>Adicione informações sobre sua oferta</Title>
        <Container>
          <Column as="form" onSubmit={onSubmit}>
            
            <Row>
              <Left>
                <Text>Selecione um produto já cadastrado</Text>
            <LeftInput value={offer.produto.nome} readOnly />
                <ContainerImg>
                  {offer.produto.fotoUrl ? (
                    <img
                      src={offer.produto.fotoUrl}
                      alt={`Imagem do produto ${offer.produto.nome}`}
                      style={{ width: "200px"}}
                    />
                  ) : (
                    <Icon>
                      <CiImageOn size={100} />
                    </Icon>
                  )}
                </ContainerImg>
              </Left>
              <Right>
                <Text4>Validade da oferta</Text4>
                <ShortInput
                  type="date"
                  value={validade}
                  onChange={(e) => setValidade(e.target.value)}
                />
                <Text4>Preço da oferta</Text4>
                <ShortInput
                  type="number"
                  placeholder="R$99,99"
                  value={preco}
                  onChange={(e) => setPreco(e.target.value)}
                />
              </Right>
            </Row>
            <Button type="submit">Salvar</Button>
          </Column>
        </Container>
      </Column>
    </>
  );
};

export default CommerceEditOffer;
