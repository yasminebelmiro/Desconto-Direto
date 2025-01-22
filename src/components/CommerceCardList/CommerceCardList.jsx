import React, { useEffect, useState } from "react";
import CommerceCardOffer from "../CommerceCardOffer/CommerceCardOffer";
import { CardsContainer } from "./style";
import { api } from "../../service/api";
import { useParams } from "react-router-dom";

const CommerceCardList = () => {
  const [commerce, setCommerce] = useState(null);
  const [loading, setLoading] = useState(true);
  const { idCommerce } = useParams();
  console.log(idCommerce);

  const fetchCommerce = async () => {
    try {
      const response = await api.get(`/comercios/find/${idCommerce}`);
      setCommerce(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Erro ao buscar os dados do comércio:", error);
    }finally{
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCommerce();
  }, [idCommerce]);

  const handleDelete = async (id) => {
    try {
      const deletOfferConfirm = confirm("Deseja deletar esta oferta?")
      if(deletOfferConfirm){
        await api.delete(`/ofertas/delete/${id} `) 
        console.log(`Oferta com id ${id} deletada da API`);
        alert("Oferta deletada com sucesso!")
        window.location.reload();
      }else{
        console.log("Operação cancelada");
      }
       
    } catch (error) {
      console.error(error);
    }
  };

  if (loading) {
    return <p>Carregando...</p>;
  } else if (!commerce) {
    // TODO: Estilizar esses retornos
    return <p>Você não tem oferta no momemnto</p>;
  }

  return (
    <CardsContainer>
      {commerce.ofertas.flatMap((oferta) => {
        return [
          <CommerceCardOffer
            key={oferta.id}
            id={oferta.id}
            img={oferta.produto.fotoUrl}
            icon={commerce.fotoUrl}
            name={oferta.produto.nome}
            description={oferta.produto.descricao}
            validity={new Date(oferta.validade).toLocaleDateString("pt-BR")}
            onDelete={() => handleDelete(oferta.id)}
          />,
        ];
      })}
    </CardsContainer>
  );
};

export default CommerceCardList;
