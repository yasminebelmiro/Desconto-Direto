import React from "react";
import { useLocation } from "react-router-dom";
import CostumerHeader from "../../components/CostumerHeader/CostumerHeader";
import CostumerSearchOfferList from "../../components/CostumerSearchOfferList/CostumerSearchOfferList";
import { CardsContainer } from "../CostumerHome/style";

const CostumerSearchOffer = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const query = queryParams.get("query");
  console.log(query);
  

  return (
    <>  
      <CostumerHeader authenticated={true} />
      <div>Ofertas encontradas com {query} </div>
      <CardsContainer>
        <CostumerSearchOfferList search={query} />
      </CardsContainer>
    </>
  );
};

export default CostumerSearchOffer;
