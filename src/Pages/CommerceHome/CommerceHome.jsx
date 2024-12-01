import React from "react";

import { Divisor, Text, Button } from "./style";
import Carousel from "../../components/Carousel/Carousel";
import { FaPlusCircle } from "react-icons/fa";

import CommerceCardList from "../../components/CommerceCardList/CommerceCardList";
import CommerceHeader from "../../components/CommerceHeader/CommerceHeader";
import { useNavigate } from "react-router-dom";

const CommerceHome = () => {
  const navigate = useNavigate();
  const handleAddPanfleto = () => {
    navigate("/comercio/novo-panfleto");
  };
  const handleAddOferta = () => {
    navigate("/comercio/nova-oferta");
  };

  return (
    <>
      <CommerceHeader authenticated={true} />
      <Divisor>
        <Text>Meus Panfletos</Text>
        <Button onClick={handleAddPanfleto}>
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
