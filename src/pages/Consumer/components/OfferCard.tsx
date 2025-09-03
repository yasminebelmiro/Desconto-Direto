import React from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
interface OfferCardProps {
  imgMerchant?: string;
  imgProduct?: string;
  name?: string;
  expiration?: string;
  price?: string;
  likes?: number;
}
const OfferCard = ({
  imgMerchant,
  imgProduct,
  name,
  expiration,
  price,
  likes,
}: OfferCardProps) => {
  const [isLiked, setIsLiked] = React.useState(false);
  const toggleHeart = () => {
    setIsLiked(!isLiked);
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
              onClick={toggleHeart}
              className="text-red-500 text-lg md:text-2xl cursor-pointer"
            />
          ) : (
            <FaHeart
              onClick={toggleHeart}
              className="text-red-500 text-lg md:text-2xl cursor-pointer"
            />
          )}

          <p className="text-xs text-red-500">{likes}</p>
        </div>
        <img
          className="absolute top-[-5%] right-[-10%] w-15 h-15  md:w-17 md:h-17 object-cover rounded-full  outline-4
           outline-dark-orange"
          src={imgMerchant}
          alt={name}
        />
        <div className=" flex flex-col items-center justify-evenly   text-center w-full">
          <img className="w-20 h-20 object-cover md:w-30 md:h-30 " src={imgProduct} alt={imgProduct} />
          <div className="flex flex-col items-center justify-center gap-1 p-2">
            <h1 className="font-bold text-xs md:text-md lg:text-[14px] md:px-2">{name}</h1>
            <h2 className="text-red-600 text-xs md:text-sm">{expiration}</h2>
          </div>
          <h3
            className="font-kaisei absolute w-full h-8 md:h-12 bottom-[-3%] bg-dark-orange
           text-white font-bold text-md md:text-lg flex items-center justify-center rounded-3xl"
          >
            R$ {price}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default OfferCard;
