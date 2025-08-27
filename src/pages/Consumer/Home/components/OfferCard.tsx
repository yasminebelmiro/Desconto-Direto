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
    <div className="font-inter p-10 w-60 h-90 flex justify-center items-center">
      <div
        className=" relative outline-4 outline-dark-orange w-40 h-70 rounded-2xl
    p-4"
      >
        <div className="flex gap-2 items-center justify-start">
            {isLiked ? <FaRegHeart
            onClick={toggleHeart}
            className="text-red-500 text-2xl cursor-pointer"
          /> : <FaHeart
            onClick={toggleHeart}
            className="text-red-500 text-2xl cursor-pointer"
          />}
          
          <p className="text-xs text-red-500">{likes}</p>
        </div>
        <img
          className="absolute top-[-8%] right-[-15%] w-17 h-17 object-cover rounded-full  outline-4
           outline-dark-orange"
          src={imgMerchant}
          alt={name}
        />
        <div className="flex flex-col items-center justify-center text-center">
          <img src={imgProduct} alt={imgProduct} />
          <h1 className="font-bold text-md">{name}</h1>
          <h2 className="text-red-600 text-sm">{expiration}</h2>

          <h3
            className="font-kaisei absolute w-42 h-12 bottom-[-5%] bg-dark-orange
           text-white font-bold text-lg flex items-center justify-center rounded-3xl"
          >
            R$ {price}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default OfferCard;
