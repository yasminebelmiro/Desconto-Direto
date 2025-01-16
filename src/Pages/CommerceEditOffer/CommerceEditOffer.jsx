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
  Text4,
  LeftInput,
  AddOProduto,
} from "./style";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { CiImageOn } from "react-icons/ci";
import { api } from "../../service/api";

const CommerceEditOffer = () => {
  const navigate = useNavigate();
  const { idCommerce, idOffer } = useParams();
  const [offer, setOffer] = useState(null);
  const [validade, setValidade] = useState("");
  const [preco, setPreco] = useState("");

  // Fetch offer data
  const fetchOffer = async () => {
    try {
      const responseOffer = await api.get(`/ofertas/find/${idOffer}`);
      setOffer(responseOffer.data);
      setValidade(
        new Date(responseOffer.data.validade).toISOString().split("T")[0]
      ); // Formato YYYY-MM-DD
      setPreco(responseOffer.data.preco);
    } catch (error) {
      console.error(error);
    }
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      // BUG: endpoint não existe
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
    fetchOffer();
  }, []);

  const handleBack = () => {
    navigate(`/comercio/home/${idCommerce}`);
  };


  if (!offer) {
    return <div>Carregando...</div>;
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
