import React, { useEffect, useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import api from "../../../service/api/axios.ts";
import type { OfferTypes } from "../../../types/OfferTypes.ts";
import { toast } from "react-toastify";
interface OfferCardProps {}
const OfferCard = ({ ...props }: OfferTypes) => {
  const [isLiked, setIsLiked] = useState(false);
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    const toggleHeart = async () => {
      try {
        if (isLiked) {
          await api.post(`/clientes/${userId}/favoritos/${props.id}`, props);
          toast.success("Oferta adicionada aos favoritos!");
        }
      } catch (error) {
        toast.error("Não foi possível adicionar essa oferta aos favoritos");
        console.error(error);
      }
    };

    toggleHeart();
  }, [isLiked, userId, props.id]);

    const formatedData = (date: string) => {
    const data = new Date(date);
    return data.toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  };

  const formatedPrice = (price: number) => {
    return price.toFixed(2).replace(".", ",");
  };

  return (
    <div className="font-inter flex justify-center items-center m-2">
      <div
        className=" relative outline-4 outline-dark-orange w-35 h-52 md:w-50 md:h-70 rounded-2xl
    "
      >
        <div className="flex gap-2 items-center justify-start pt-4 pl-4">
          {isLiked ? (
            <FaRegHeart
              onClick={() => setIsLiked(!isLiked)}
              className="text-red-500 text-lg md:text-2xl cursor-pointer"
            />
          ) : (
            <FaHeart
              onClick={() => setIsLiked(!isLiked)}
              className="text-red-500 text-lg md:text-2xl cursor-pointer"
            />
          )}
          {/*TODO: colocar os likes */}
          <p className="text-xs text-red-500">{10}</p>
        </div>
        <img
          className="absolute top-[-5%] right-[-10%] w-15 h-15  md:w-17 md:h-17 object-cover rounded-full  outline-4
           outline-dark-orange"
          src={""}
          alt={""}
        />
        <div className=" flex flex-col items-center justify-evenly   text-center w-full">
          <img
            className="w-20 h-20 object-cover md:w-30 md:h-30 "
            src={props.produto.fotoUrl}
            alt={`Imagem de ${props.produto.nome}`}
          />
          <div className="flex flex-col items-center justify-center gap-1 p-2">
            <h1 className="font-bold text-xs md:text-md lg:text-[14px] md:px-2">
              {props.produto.nome}
            </h1>
            <h2 className="text-red-600 text-xs md:text-sm">
              {formatedData(props.validade)}
            </h2>
          </div>
          <h3
            className="font-kaisei absolute w-full h-8 md:h-12 bottom-[-3%] bg-dark-orange
           text-white font-bold text-md md:text-lg flex items-center justify-center rounded-3xl"
          >
            R$ {formatedPrice(props.preco)}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default OfferCard;
