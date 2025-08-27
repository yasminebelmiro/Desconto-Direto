import React from "react";
import { id } from "zod/v4/locales";
import OfferCard from "./OfferCard.tsx";
const offers = [
  {
    id: 1,
    imgMerchant:
      "https://img.freepik.com/vetores-gratis/design-de-logotipo-de-supermercado-com-carrinho-verde_23-2148464170.jpg?semt=ais_hybrid&w=740&q=80",
    imgProduct: "https://www.supermercadosaomarcos.com.br/arquivos/LoginID_288/Produto/nescau-204.jpg",
    name: "Achocolatado Nescau 204g",
    expiration: "31/12/2023",
    price: 10.99,
    likes: 170,
  },
  {
    id: 2,
    imgMerchant: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRodHtwdYLEXOSkLD19nCo56bq3xca3B6pdsg&s",
    imgProduct: "https://www.sondadelivery.com.br/Arquivos/ProdutosSku/199168/7893000632073.png",
    name: "Pizza Calabresa Seara 480g",
    expiration: "31/12/2023",
    price: 20.5,
    likes: 120,
  },
];
const ListOffers = () => {
    const formatedPrice = (price: number) => {
        return price.toFixed(2).replace('.', ',');  
    }
  return (
    <div className="grid grid-cols-2 gap-4 overflow-x-auto ">
      {offers.map((offer) => (
        <OfferCard
          key={offer.id}
          imgMerchant={offer.imgMerchant}
          imgProduct={offer.imgProduct}
          name={offer.name}
          expiration={offer.expiration}
          price={formatedPrice(offer.price)}
          likes={offer.likes}
        />
      ))}
    </div>
  );
};

export default ListOffers;
