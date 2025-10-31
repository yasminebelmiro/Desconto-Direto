import React, { useEffect, useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import api from "../../../lib/axios.ts";
import type { OfferTypes } from "../../../types/OfferTypes.ts";
import { toast } from "react-toastify";
import type { MerchantTypes } from "../../../types/MerchantTypes.ts";
import { useNavigate } from "react-router-dom";
import { ConsumerService } from "../../../service/ConsumerService.ts";
import { formatedData } from "../../../utils/FormatedData.ts";
import { formatedPrice } from "../../../utils/FormatedPrice.ts";
import { MerchantService } from "../../../service/MerchantService.ts";

const OfferCard = ({ ...props }: OfferTypes) => {
  const [isLiked, setIsLiked] = useState(false);
  const [merchant, setMerchant] = useState<MerchantTypes | null>(null);
  const [likes, setLikes] = useState(props.likes);

  const userId = localStorage.getItem("userId");

  const navigate = useNavigate();

  const toggleHeart = async () => {
    try {
      setIsLiked(!isLiked);
      if (!isLiked) {
        await ConsumerService.likeOffer(userId, props.id);
        const newLikes = likes + 1;
        setLikes(newLikes);

        toast.success("Oferta adicionada aos favoritos!");
      } else {
        await ConsumerService.dislikeOffer(userId, props.id);
        const newLikes = likes - 1;
        setLikes(newLikes);
      }
    } catch (error) {
      toast.error("Não foi possível adicionar essa oferta aos favoritos");
      console.error(error);
    }
  };

  useEffect(() => {
    try {
      MerchantService.getById(props.comercioId).then(setMerchant);

      const CheckIfLiked = async () => {
        const response = await ConsumerService.getById(userId);
        const favorites = response.ofertasPreferidas;
        const liked = favorites.some((fav: any) => fav.id === props.id);
        setIsLiked(liked);
      };

      CheckIfLiked();
    } catch (error) {
      console.error("Erro ao buscar comércio", error);
    }
  }, []);

  return (
    <div className="font-inter flex justify-center items-center m-2">
      <div
        className="relative outline-4 outline-dark-orange w-35 h-55 md:w-50 md:h-75 rounded-2xl
    "
      >
        <div className="flex gap-2 items-center justify-start pt-4 pl-4">
          {isLiked ? (
            <FaHeart
              onClick={toggleHeart}
              className="text-red-500 text-lg md:text-2xl cursor-pointer"
            />
          ) : (
            <FaRegHeart
              onClick={toggleHeart}
              className="text-red-500 text-lg md:text-2xl cursor-pointer"
            />
          )}
          <p className="text-xs text-red-500">{likes}</p>
        </div>
        {merchant?.fotoUrl ? (
          <img
            className="absolute top-[-5%] right-[-10%] w-15 h-15  md:w-17 md:h-17 object-cover rounded-full  outline-4
           outline-dark-orange cursor-pointer"
            src={merchant.fotoUrl}
            alt={`Perfil de ${merchant.nome}`}
            onClick={() => navigate(`/consumidores/comercios/${merchant.id}`)}
          />
        ) : (
          <div
            className="absolute top-[-5%] right-[-10%] w-15 h-15  md:w-17 md:h-17 object-cover rounded-full  outline-4
           outline-dark-orange cursor-pointer"
            onClick={() => navigate(`/consumidores/comercios/${merchant?.id}`)}
          >
            <div className="w-full h-full bg-dark-yellow text-white text-lg rounded-full flex items-center justify-center">
              <p className="text-3xl">{merchant?.nome[0]}</p>
            </div>
          </div>
        )}

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
