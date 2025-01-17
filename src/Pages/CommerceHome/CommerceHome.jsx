import React, { useEffect, useState } from "react";

import { Divisor, Text, Button } from "./style";
import Carousel from "../../components/Carousel/Carousel";
import { FaPlusCircle } from "react-icons/fa";

import CommerceCardList from "../../components/CommerceCardList/CommerceCardList";
import CommerceHeader from "../../components/CommerceHeader/CommerceHeader";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "../Loading/Loading";
import { api } from "../../service/api";

const CommerceHome = () => {
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

  const handleAddPanfleto = () => {
    navigate(`/comercio/${idCommerce}/novo-panfleto`);
  };
  const handleAddOferta = () => {
    navigate(`/comercio/${idCommerce}/nova-oferta`);
  };
  return (
    <>
      <CommerceHeader authenticated={true} />
      <Divisor>
        <Text>Meus Panfletos</Text>
        <Button onClick={() => handleAddPanfleto()}>
          Adicionar <FaPlusCircle size={15} />
        </Button>
      </Divisor>
      <Carousel />
      <Divisor>
        <Text>Minhas Ofertas</Text>
        <Button onClick={handleAddOferta}>
          Adicionar <FaPlusCircle size={15} />
        </Button>
      </Divisor>
      <CommerceCardList />
    </>
  );
};

export default CommerceHome;
