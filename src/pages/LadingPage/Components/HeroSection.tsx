import React from "react";

import { useLocation, useNavigate } from "react-router-dom";
import HeroCarousel from "./HeroCarousel.tsx";


function HeroSection() {
  const location = useLocation();
  const navigate = useNavigate();
  const isMerchantArea = location.pathname.includes("area-comerciantes");
  return (
    <section className="relative">
      <div className="z-1 absolute w-full h-80 bg-gradient-to-r from-dark-blue to-transparent lg:h-140">
        {isMerchantArea ? (
          <div className="flex flex-col text-white items-start justify-center h-full gap-5 pl-8 lg:w-1/2 lg:pl-30">
            <h1 className="font-kaisei font-bold text-2xl md:text-3xl lg:text-4xl">Divulgue suas promoções para quem realmente compra</h1>
            <p className="font-inter md:text-md lg:text-lg">
              Alcance clientes da sua cidade, aumente o movimento e venda mais,
              sem complicação.
            </p>
            <button onClick={() => navigate("/cadastro/comercio")} className="bg-dark-yellow p-2 text-dark-blue font-bold rounded-lg lg:w-70 lg:h-15 lg:text-lg font-inter">Cadastre seu comércio</button>
          </div>
        ) : (
          <div className="flex flex-col text-white items-start justify-center h-full gap-5 pl-8 lg:w-1/2 lg:pl-30">
            <h1 className="font-kaisei font-bold text-2xl lg:text-4xl">Encontre as melhores ofertas perto de você</h1>
            <p className="font-inter md:text-md lg:text-lg">
              Economize tempo e dinheiro descobrindo promoções na sua cidade,
              tudo pelo celular.
            </p>
            <button onClick={() => navigate("/cadastro/consumidor")} className="bg-dark-yellow p-2 w-40 text-dark-blue font-bold rounded-lg lg:w-70 lg:h-15 lg:text-lg font-inter">Cadastre-se</button>
          </div>
        )}
      </div>
      <HeroCarousel />
    </section>
  );
}

export default HeroSection;
