import React, { useEffect, useState } from "react";
import { api } from "../../service/api";
import CostumerCardOffer from "../CostumerCardOffer/CostumerCardOffer";
import { useNavigate } from "react-router-dom";

const CostumerSearchOfferList = ({ search }) => {
  const [filteredOffers, setFilteredOffers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchOffers = async () => {
      try {
        const response = await api.get("/comercios/all");
        const data = response.data;

        // Filtrar mantendo a estrutura do comércio e suas ofertas
        const filteredResults = data
          .map((comercio) => ({
            ...comercio,
            ofertas: comercio.ofertas.filter(
              (oferta) =>
                oferta.produto.nome
                  .toLowerCase()
                  .includes(search.toLowerCase()) ||
                oferta.produto.categoria
                  .toLowerCase()
                  .includes(search.toLowerCase())
            ),
          }))
          .filter((comercio) => comercio.ofertas.length > 0); // Remove comércios sem ofertas correspondentes

        setFilteredOffers(filteredResults);
      } catch (error) {
        console.error("Erro ao buscar ofertas:", error);
      }
    };

    fetchOffers();
  }, [search]);

  const handleProfileMarket = (userId, name, commerceId) => {
    navigate(`/consumidor/${userId}/${name}/${commerceId}`);
  };

  if (filteredOffers.length === 0) {
    return <div>Nenhuma oferta encontrada</div>;
  }

  return (
    <>
      {filteredOffers.map((comercio) =>
        comercio.ofertas.map((oferta) => (
          <CostumerCardOffer
            key={oferta.id}
            id={oferta.id}
            icon={comercio.fotoUrl}
            img={oferta.produto.fotoUrl}
            name={oferta.produto.nome}
            price={`R$ ${oferta.preco}`}
            description={oferta.produto.medida}
            validity={new Date(oferta.validade).toLocaleDateString("pt-BR")}
            onProfileMarket={() =>
              handleProfileMarket(comercio.id, comercio.nome, comercio.id)
            }
          />
        ))
      )}
    </>
  );
};

export default CostumerSearchOfferList;
