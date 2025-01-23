import React, { useEffect, useState } from "react";
import {
  ProfileContainer,
  Row,
  Column,
  Profile,
  Back,
  Categoria,
  Nome,
  Contato,
  Img,
  Divisor,
  Text,
  RowCards,
} from "./style";
import {
  FaArrowLeft,
  FaInstagram,
  FaPhoneAlt,
  FaWhatsapp,
} from "react-icons/fa";
import Carousel from "../../components/Carousel/Carousel";

import { MdAlternateEmail, MdHome } from "react-icons/md";
import { IoIosPin } from "react-icons/io";
import { useNavigate, useParams } from "react-router-dom";
import CostumerHeader from "../../components/CostumerHeader/CostumerHeader";
import { api } from "../../service/api";
import Loading from "../Loading/Loading";
import { CardsContainer } from "../CostumerHome/style";
import CostumeProfileCommerceOfferList from "../../components/CostumeProfileCommerceOfferList/CostumeProfileCommerceOfferList";

const CostumerCommerceProfile = () => {
  const navigate = useNavigate();
  const [commerce, setCommerce] = useState();
  const { idConsumer, idCommerce } = useParams();

  useEffect(() => {
    const fetchCommerce = async () => {
      try {
        const response = await api.get(`/comercios/find/${idCommerce}`);
        setCommerce(response.data);
      } catch (error) {
        console.error("Erro ao encontrar comercio:", error);
      }
    };
    fetchCommerce();
  }, []);
  const handleBack = () => {
    navigate(`/consumidor/home/${idConsumer}`);
  };

  if (!commerce) {
    return <Loading />;
  }

  return (
    <>
      <CostumerHeader authenticated={true} />
      <Back onClick={handleBack}>
        <FaArrowLeft size={25} />
      </Back>
      <ProfileContainer>
        <Profile>
          <Img
            src={commerce.fotoUrl}
            alt={`Logo do comercio ${commerce.nome}`}
          />
          <Nome>{commerce.nome}</Nome>
          <Categoria>{commerce.Categoria}</Categoria>
          <Row>
            <Column>
              <Contato>
                <MdHome size={25} color={"#023047"} />
                {commerce.endereco || "Endereço não informado"}
              </Contato>
              <Contato>
                <IoIosPin size={25} color={"#023047"} />
                {commerce.cidade || "Ciade não informada"}
              </Contato>
            </Column>
            <Column>
              <Contato>
                <FaPhoneAlt size={25} color={"#023047"} />
                {commerce.telefone || "Endereço não informado"}
              </Contato>
              <Contato>
                <FaWhatsapp size={25} color={"#023047"} />
                {commerce.whatsapp || "WhatsApp não informado"}
              </Contato>
            </Column>
            <Column>
              <Contato>
                <MdAlternateEmail size={25} color={"#023047"} />
                {commerce.email}
              </Contato>
              <Contato>
                <FaInstagram size={25} color={"#023047"} />
                {commerce.instagram || "Instagram não informado"}
              </Contato>
            </Column>
          </Row>
        </Profile>
      </ProfileContainer>
      <Divisor>
        <Text>Panfletos</Text>
      </Divisor>
      <Carousel />
      <Divisor>
        <Text>Ofertas</Text>
      </Divisor>
      <CardsContainer>
        <CostumeProfileCommerceOfferList />
      </CardsContainer>
    </>
  );
};

export default CostumerCommerceProfile;
