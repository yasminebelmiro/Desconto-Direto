import React, { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { IoSettingsSharp } from "react-icons/io5";
import { RiCloseLargeFill } from "react-icons/ri";
import type { OfferTypes } from "../../../types/OfferTypes.ts";

const OfferCard = ({ ...props }: OfferTypes) => {

  const [isOpenOverlay, setIsOpenOverlay] = useState(false);
  const formatedPrice = (price: number) => {
    return price.toFixed(2).replace(".", ",");
  };
  const formatedData = (date: string) => {
    const data = new Date(date);
    return data.toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  };

  return (
    <div className="font-inter flex justify-center items-center">
      <div className=" relative outline-4 outline-dark-orange w-35 h-50 md:w-50 md:h-70 rounded-2xl">
        <div className="flex gap-2 items-center justify-start pt-2 pl-2">
          <FaHeart className="text-red-500 text-lg md:text-2xl" />
          <p className="text-xs text-red-500">{props.likes}</p>
        </div>
        <button
          onClick={() => setIsOpenOverlay(!isOpenOverlay)}
          className="absolute top-[-1%] right-[-1%] w-10 h-10 md:w-15 md:h-15 flex items-center justify-center rounded-2xl
     bg-dark-orange cursor-pointer outline-none "
        >
          <IoSettingsSharp className="text-2xl text-white" />
        </button>
        <div className="flex flex-col items-center justify-center text-center w-full">
          <img className="w-20 md:w-30" src={props.produto.fotoUrl} alt={props.produto.nome} />
          <h1 className="font-bold text-sm md:text-md px-2">{props.produto.nome}</h1>
          <h2 className="text-red-600 text-xs md:text-sm">{formatedData(props.validade)}</h2>
          <h3
            className="font-kaisei absolute w-35 h-8 md:w-52 md:h-12 bottom-[-3%] bg-dark-orange
           text-white font-bold text-md md:text-lg flex items-center justify-center rounded-3xl"
          >
            R$ {formatedPrice(props.preco)}
          </h3>
        </div>
        {isOpenOverlay && (
          <div className="absolute top-0 left-0 w-35 h-50 md:w-50 md:h-70 bg-dark-orange/50 rounded-2xl flex flex-col items-center justify-center gap-3">
            <button
              onClick={() => setIsOpenOverlay(!isOpenOverlay)}
              className="absolute top-[-1%] right-[-1%] w-10 h-10 md:w-15 md:h-15 flex items-center justify-center rounded-2xl
     bg-dark-orange cursor-pointer outline-none "
            >
              <RiCloseLargeFill className="text-2xl text-white" />
            </button>
            <button className="w-[80%] text-white font-bold font-inter bg-dark-yellow hover:bg-light-yellow hover:text-black h-8 md:h-10 rounded-2xl cursor-pointer">
              Editar
            </button>
            <button className="w-[80%] text-white font-bold font-inter bg-red-500 hover:bg-red-400 hover:text-black h-8 md:h-10 rounded-2xl cursor-pointer">
              Excluir
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default OfferCard;
