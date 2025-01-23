import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import CostumerCardOffer from "../CostumerCardOffer/CostumerCardOffer";
import { api } from "../../service/api";


const CostumerCardList = () => {
  const {idConsumer} = useParams();
  const [cards, setCards] = useState([]);
  const ferch = async () => {
    const response = await api.get("/comercios/all");
    setCards(response.data);
  };

  useEffect(() => {
    ferch();
  }, []);

  const navigate = useNavigate();

  const handleProfileMarket = (name, commerceId ) => {
    navigate(`/consumidor/${idConsumer}/${name}/${commerceId}`);
  };

  return cards.flatMap((card) => (
    card.ofertas.map((oferta) => (
      <CostumerCardOffer
        key={oferta.id}
        id={oferta.id}
        icon={card.fotoUrl} 
        img={oferta.produto.fotoUrl} 
        name={oferta.produto.nome} 
        price={`R$ ${oferta.preco}`} 
        description={oferta.produto.medida} 
        validity={new Date(oferta.validade).toLocaleDateString("pt-BR")}
        onProfileMarket={() => handleProfileMarket(card.nome, card.id)}
      />
    ))
));
  
};

export default CostumerCardList;
