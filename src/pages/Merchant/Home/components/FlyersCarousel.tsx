import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ReactModal from "react-modal";
import { set } from "zod/v4";

const flyers = [
  {
    id: 1,
    image:
      "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/sale-promo-flyer-design-template-bdc981e993d4b9163f142c85a13e104c_screen.jpg?ts=1696311754",
    datePublication: "2023-10-01",
    dateExpiration: "2023-10-31",
    store: "Store A",
  },
  {
    id: 2,
    image:
      "https://marketplace.canva.com/EAGWLvLwUho/1/0/1131w/canva-black-november-amarelo-simples-promo%C3%A7%C3%A3o-o-m%C3%AAs-inteiro-panfleto-jVykQ1VGpEU.jpg",
    datePublication: "2023-10-05",
    dateExpiration: "2023-11-05",
    store: "Store B",
  },
  {
    id: 3,
    image: "https://img.cdndsgni.com/preview/10442240.jpg",
    datePublication: "2023-10-10",
    dateExpiration: "2023-11-10",
    store: "Store C",
  },
  {
    id: 4,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsb2seA1yo5LwH5E5hqmlPlakw7gxgDCrrvg&s",
    datePublication: "2023-10-15",
    dateExpiration: "2023-11-15",
    store: "Store D",
  },
  {
    id: 5,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrFdfff5zniOvA0pN8StzO_bVV-M7dHd0b1Q&s",
    datePublication: "2023-10-20",
    dateExpiration: "2023-11-20",
    store: "Store E",
  },
  {
    id: 6,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK4VJ69Yh6QPmuiXe-Cgv3wGTE3aah6tAKtg&s",
    datePublication: "2023-10-25",
    dateExpiration: "2023-11-25",
    store: "Store F",
  },
];
const FlyersCarousel = () => {
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 2,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 3000,
  };

  const [flyerSelected, setFlyerSelected] = useState<null | (typeof flyers)[0]>(
    null
  );

  return (
    <div className=" font-inter w-full h-full max-w-5xl mx-auto">
      <Slider {...settings}>
        {flyers.map((flyer) => (
          <img
            key={flyer.id}
            src={flyer.image}
            alt={`Panfleto de ${flyer.store}`}
            className="cursor-pointer h-full"
            onClick={() => setFlyerSelected(flyer)}
          />
        ))}
      </Slider>
      <ReactModal
        className="fixed inset-0 z-10 flex flex-col lg:flex-row items-center justify-center h-full bg-white p-8"
        isOpen={!!flyerSelected}
        onRequestClose={() => setFlyerSelected(null)}
        contentLabel="Panfleto Detalhes"
      >
        <div className="w-full lg:w-1/2 flex items-center justify-center">
          <img
            className="w-[80%] lg:w-[60%] rounded-lg"
            src={flyerSelected?.image}
            alt={`Panfleto de ${flyerSelected?.store}`}
          />
        </div>
        <div className="pt-4 w-full lg:w-1/2 flex flex-col items-center gap-4">
          <h1 className="text-2xl font-bold">{flyerSelected?.store}</h1>
          <p>
            Publicado em{" "}
            <span className="font-bold">{flyerSelected?.datePublication}</span>
          </p>
          <p>
            Válido até{" "}
            <span className="font-bold text-red-500">
              {flyerSelected?.dateExpiration}
            </span>
          </p>
          <div className="w-full flex items-center justify-center lg:flex-col gap-4 pt-5 md:p-8">
            <button className="p-4 w-3/1 lg:w-1/2 h-15 bg-red-600 rounded-2xl text-white font-bold cursor-pointer text-center text-xl">
              Excluir
            </button>
            <button className="p-4 w-3/1 lg:w-1/2 h-15 bg-dark-yellow rounded-2xl text-white font-bold cursor-pointer text-center text-xl">
              Editar
            </button>
            <button
              className="p-4 w-3/1 lg:w-1/2 h-15 bg-dark-blue rounded-2xl text-white font-bold cursor-pointer text-center text-xl"
              onClick={() => setFlyerSelected(null)}
            >
              Fechar
            </button>
          </div>
        </div>
      </ReactModal>
    </div>
  );
};

export default FlyersCarousel;
