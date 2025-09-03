import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ReactModal from "react-modal";
import flyers from "../../../mocks/flyers.json" with { type: "json" };

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
    <div className="font-inter w-full h-full max-w-5xl mx-auto">
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
        className="flex flex-col lg:flex-row items-center justify-center h-full bg-white p-8 "
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
          <button
            className="p-4 w-1/2 bg-dark-blue rounded-2xl text-dark-yellow font-bold cursor-pointer"
            onClick={() => setFlyerSelected(null)}
          >
            Fechar
          </button>
        </div>
      </ReactModal>
    </div>
  );
};

export default FlyersCarousel;
