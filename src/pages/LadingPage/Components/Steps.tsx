import React from 'react'
import image01 from "../../../assets/AboutSection/image01.png";
import image02 from "../../../assets/AboutSection/image02.png";
import image03 from "../../../assets/AboutSection/image03.png";

import { useLocation } from "react-router-dom";
const stepConsumer = [
  {
    title: "Crie sua conta",
    description:
      "Cadastre-se rapidamente e comece a explorar promoções na sua cidade",
    image: image01,
  },
  {
    title: "Descubra ofertas",
    description: "Veja descontos e panfletos dos comércios mais próximos.",
    image: image02,
  },
  {
    title: "Guarde seus favoritos",
    description:
      "Salve as promoções  mais gosta para acompanhar sempre que quiser.",
    image: image03,
  },
];

const stepMerchant = [
  {
    title: "Publique sua oferta",
    description:
      " Cadastre-se e coloque seu comércio no mapa dos clientes da sua região.",
    image: image01,
  },

  {
    title: "Descubra ofertas",
    description:
      " Poste promoções e panfletos que vão direto pro celular da galera.",
    image: image02,
  },

  {
    title: " Colha os resultados",
    description: "Mais gente na sua loja, mais vendas no caixa. Simples assim.",
    image: image03,
  },
];

const Steps = () => {
      const location = useLocation();
      const isMerchantArea = location.pathname.includes("area-comerciantes");
  return (
    <section id="comoFunciona" className="font-inter flex flex-col md:flex-row items-center justify-center bg-light-yellow px-8 py-20 gap-5">
        {isMerchantArea
          ? stepMerchant.map((step) => (
              <div
                key={step.title}
                className="flex flex-col items-center text-center gap-4 px-8 py-15 bg-white w-70 h-105 md:h-110 rounded-3xl shadow-lg  hover:outline-5 outline-dark-yellow"
              >
                <img src={step.image} alt={step.title} />
                <h2 className="text-xl font-bold text-dark-yellow">
                  {step.title}{" "}
                </h2>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))
          : stepConsumer.map((step) => (
              <div
                key={step.title}
                className="flex flex-col items-center text-center gap-4 px-8 py-15 bg-white w-70 h-105 md:h-110 rounded-3xl shadow-lg  hover:outline-5 outline-dark-yellow"
              >
                <img src={step.image} alt={step.title} />
                <h2 className="text-xl font-bold text-dark-yellow">
                  {step.title}{" "}
                </h2>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
      </section>
  )
}

export default Steps