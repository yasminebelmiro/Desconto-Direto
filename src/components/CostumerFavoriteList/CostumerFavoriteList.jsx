import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { api } from "../../service/api";
import CostumerFavorite from "../CostumerFavorite/CostumerFavorite";

const CostumerFavoriteList = () => {
  const [favorites, setFavorites] = useState([]); 
  const { idConsumer } = useParams(); 

 
  const fetchFavorites = async () => {
    try {
      const response = await api.get(`/clientes/find/${idConsumer}`);
      setFavorites(response.data.ofertasPreferidas || []); 
    } catch (error) {
      console.error("Erro ao buscar ofertas preferidas:", error);
    }
  };

  useEffect(() => {
    fetchFavorites();
  }, []); 

  const navigate = useNavigate();

  const handleProfileMarket = (userId, name, commerceId ) => {
    navigate(`/consumidor/${userId}/${name}/${commerceId}`);
  };

  return (
    <>
      {favorites.length > 0 ? (
        favorites.map((oferta) => (
          <CostumerFavorite
            key={oferta.id}
            id={oferta.id}
            // BUG: A API não retorna a foto do comércio no favoritos
            //icon={card.fotoUrl} 
            img={oferta.produto.fotoUrl}
            name={oferta.produto.nome}
            price={`R$ ${oferta.preco}`}
            description={oferta.produto.medida}
            validity={new Date(oferta.validade).toLocaleDateString("pt-BR")}
            onProfileMarket={() => handleProfileMarket(card.id, card.nome, card.id)} 
          />
        ))
      ) : (
        <p>Você ainda não possui ofertas favoritas.</p>
      )}
    </>
  );
};

export default CostumerFavoriteList;
