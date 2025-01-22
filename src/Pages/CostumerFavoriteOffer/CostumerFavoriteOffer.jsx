import React, { useEffect, useState } from "react";

import { Back, CardsContainer, FavoriteContainer, Row, Title } from "./style";
import { FaArrowLeft } from "react-icons/fa";

import { useNavigate, useParams } from "react-router-dom";

import CostumerHeader from "../../components/CostumerHeader/CostumerHeader";
import CostumerFavoriteList from "../../components/CostumerFavoriteList/CostumerFavoriteList";
import Loading from "../Loading/Loading";
import { api } from "../../service/api";

const CostumerFavoriteOffer = () => {
  const navigate = useNavigate();
  const { idConsumer } = useParams();
  const [consummer, setConsummer] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchConsummer = async () => {
      try {
        const response = await api.get(`/clientes/find/${idConsumer}`);
        if (response.data) {
          setConsummer(response.data);
        } else navigate("/404");
      } catch (error) {
        console.error("Erro ao buscar cliente:", error);
        navigate("/404");
      } finally {
        setLoading(false);
      }
    };
    fetchConsummer();
  }, [idConsumer, navigate]);

  if (loading) {
    return <Loading />;
  }

  if (!consummer) {
    return null;
  }
  const handleBack = () => {
    navigate(`/consumidor/home/${idConsumer}`);
  };

  return (
    <>
      <CostumerHeader authenticated={true} />
      <Back onClick={handleBack}>
        <FaArrowLeft size={25} />
      </Back>
      <Row>
        <Title>Ofetas Favoritas</Title>
      </Row>
      <FavoriteContainer>
      <CardsContainer>
        <CostumerFavoriteList/>
      </CardsContainer>
      </FavoriteContainer>
    </>
  );
};

export default CostumerFavoriteOffer;
