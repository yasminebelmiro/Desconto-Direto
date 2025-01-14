import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CostumerCardOffer from "../CostumerCardOffer/CostumerCardOffer";
import { api } from "../../service/api";


const CostumerCardList = () => {
  const [cards, setCards] = useState([]);

  const ferch = async () => {
    const response = await api.get("/comercios/all");
    setCards(response.data);
  };

  useEffect(() => {
    ferch();
  }, []);

  const navigate = useNavigate();

  const handleProfileMarket = () => {
    navigate("/consumidor/perfil-comercio");
  };

  return cards.flatMap((card) => (
          card.ofertas.map((oferta) => (
            <CostumerCardOffer
              key={oferta.id}
              icon={card.fotoUrl} 
              img={oferta.produto.fotoUrl} 
              name={oferta.produto.nome} 
              price={`R$ ${oferta.preco}`} 
              description={oferta.produto.medida} 
              validity={new Date(oferta.validade).toLocaleDateString("pt-BR")}
              onProfileMarket={() => handleProfileMarket(card.id)} 
            />
          ))
  ));
  
};

export default CostumerCardList;
