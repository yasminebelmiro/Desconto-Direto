import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  CardContainer,
  Description,
  Heart,
  ImgProduct,
  Name,
  Validity,
  Icon,
  Row,
  Price,
} from "./style";
import { FaRegHeart, FaHeart } from "react-icons/fa";


const CostumerCardOffer = ({ img, name, price, description, validity, icon, onProfileMarket }) => {
  const [liked, setLiked] = useState(false);
  const toggleLiked = () => {
    setLiked(!liked);
  };
  return (
    <CardContainer>
      <Row>
        <Heart onClick={toggleLiked}>
          <motion.div
          initial={{ scale: 1}}
          animate={{ scale: liked ? [1, 1.3, 1]: 1 }}
          transition={{duration: 0.5}}
          >
          {liked ? <FaHeart size={30} /> : <FaRegHeart size={30} />}
          </motion.div>
        </Heart>
        <Icon onClick={onProfileMarket} src={icon} ></Icon>
      </Row>

      <ImgProduct src={img} alt="Imagem do produto"></ImgProduct>
      <Name>{name}</Name>
      <Description>{description}</Description>
      <Validity>{validity}</Validity>
      <Price>{price}</Price>
    </CardContainer>
  );
};

export default CostumerCardOffer;
