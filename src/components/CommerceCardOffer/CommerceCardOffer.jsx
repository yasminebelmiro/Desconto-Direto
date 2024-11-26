import React from "react";
import {
  CardContainer,
  Description,
  ImgProduct,
  Name,
  Icon,
  Delete,
  Edit,
  Options,
  Validity,
} from "./style";

const CommerceCardOffer = ({ img, icon, name, description, validity, onDelete}) => {

  return (
    <CardContainer>
      <Icon src={icon} ></Icon>
      <ImgProduct src={img} alt="Imagem do produto"></ImgProduct>
      <Name>{name}</Name>
      <Description>{description}</Description>
      <Validity>{validity}</Validity>
      <Options>
        <Edit >Editar</Edit>
        <Delete onClick={onDelete}>Excluir</Delete>
      </Options>
    </CardContainer>
  );
};

export default CommerceCardOffer;
