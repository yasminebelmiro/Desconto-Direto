import React, { useEffect, useState } from "react";
import { api } from "../../service/api";
import CostumerCardOffer from "../CostumerCardOffer/CostumerCardOffer";
import { useNavigate, useParams } from "react-router-dom";

const CostumeProfileCommerceOfferList = () => {
  const { idConsumer, idCommerce} = useParams();
  const [commerce, setCommerce] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchOffers = async () => {
      try {
        const response = await api.get(`/comercios/find/${idCommerce}`);
        setCommerce(response.data);
      } catch (error) {
        console.error("Erro ao buscar ofertas:", error);
      }
    };

    fetchOffers();
  }, []);

  const handleProfileMarket = (name, commerceId) => {
    navigate(`/consumidor/${idConsumer}/${name}/${commerceId}`);
  };

  if (commerce.length === 0) {
    return <div>Nenhuma oferta encontrada</div>;
  }

  return (
    <>
      {commerce.ofertas.map((oferta) => (
        <CostumerCardOffer
          key={oferta.id}
          id={oferta.id}
          icon={commerce.fotoUrl}
          img={oferta.produto.fotoUrl}
          name={oferta.produto.nome}
          price={`R$ ${oferta.preco}`}
          description={oferta.produto.medida}
          validity={new Date(oferta.validade).toLocaleDateString("pt-BR")}
          onProfileMarket={() => handleProfileMarket(commerce.nome, commerce.id)}
        />
      ))}
    </>
  );
};

export default CostumeProfileCommerceOfferList;
