import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ReactModal from "react-modal";
import type { FlyerTypes } from "../../../types/FlyerTypes.ts";
interface FlyersCarouselProps {
  flyers: FlyerTypes[];
}
const FlyersCarousel = ({ flyers }: FlyersCarouselProps) => {
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 2,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 3000,
  };

  const [flyer, setFlyer] = useState<FlyerTypes[]>([]);
  const [flyerSelected, setFlyerSelected] = useState<null | FlyerTypes[][0]>(
    null
  );

  useEffect(() => {
    setFlyer(flyers);
  }, [flyers]);

  const formatedData = (date: string) => {
    const data = new Date(date);
    return data.toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  };

  return (
    <div>
      {flyer.length > 0 ? (
        <div className="font-inter w-full max-w-3xl mx-auto">
          <Slider {...settings}>
            {flyer.map((item) => (
              <img
                key={item.id}
                src={item.fotoUrl}
                alt={`Panfleto`}
                className="h-full w-auto mx-auto object-contain cursor-pointer"
                onClick={() => setFlyerSelected(item)}
              />
            ))}
          </Slider>

          <ReactModal
            className="flex flex-col md:flex-row items-center  overflow-y-auto h-full bg-white p-8"
            isOpen={!!flyerSelected}
            onRequestClose={() => setFlyerSelected(null)}
            contentLabel="Panfleto Detalhes"
          >
            <div className="w-full lg:w-1/2 h-screen flex items-center justify-center">
              <img
                className="w-auto h-[80%] lg:w-[60%] lg:h-auto rounded-lg"
                src={flyerSelected?.fotoUrl}
                alt={`Panfleto de ?`}
              />
            </div>
            <div className="pt-4 w-full lg:w-1/2  flex flex-col items-center gap-4">
              <h1 className="text-2xl font-bold">Comercio</h1>
              <p>
                Publicado em <span className="font-bold">Data publicação</span>
              </p>
              <p>
                Válido até{" "}
                <span className="font-bold text-red-500">
                  {formatedData(flyerSelected?.dataExpiracao ?? "").toString()}
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
      ) : (
        <p className=" text-center m-10 font-inter">
          Nenhum resultado encontrado
        </p>
      )}
    </div>
  );
};

export default FlyersCarousel;
