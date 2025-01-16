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
import { useNavigate, useParams } from "react-router-dom";


const CommerceCardOffer = ({
  id,
  img,
  icon,
  name,
  description,
  validity,
  onDelete,
}) => {
  const navigate = useNavigate();
  const { idCommerce} = useParams();

  const EdidOffer = () => {
    navigate(`/comercio/${idCommerce}/editar-oferta/${id}`)
  }
  return (
    <CardContainer>
      <Icon src={icon}></Icon>
      <ImgProduct src={img} alt="Imagem do produto"></ImgProduct>
      <Name>{name}</Name>
      <Description>{description}</Description>
      <Validity>{validity}</Validity>
      <Options>
        <Edit onClick={EdidOffer}>Editar</Edit>
        <Delete onClick={onDelete}>Excluir</Delete>
      </Options>
    </CardContainer>
  );
};

export default CommerceCardOffer;
