import React from "react";


import { Divisor, Text, Button } from "./style";
import Carousel from "../../components/Carousel/Carousel";
import { FaPlusCircle } from "react-icons/fa";


import CostumerHeader from "../../components/CostumerHeader/CostumerHeader";
import CommerceCardList from "../../components/CommerceCardList/CommerceCardList";

const CommerceHome = () => {
  return (
    <>
      <CostumerHeader />
      <Divisor>
        <Text>Meus Panfletos</Text>
        <Button>
          Adicionar <FaPlusCircle size={15} />{" "}
        </Button>
      </Divisor>
      <Carousel />
      <Divisor>
        <Text>Minhas Ofertas</Text>
        <Button>
          Adicionar <FaPlusCircle size={15} />
        </Button>
      </Divisor>
      <CommerceCardList market={true}/>
      
    </>
  );
};

export default CommerceHome;
