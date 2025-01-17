import React, { useEffect, useState } from "react";
import CommerceHeader from "../../components/CommerceHeader/CommerceHeader"
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
  Button,

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
import CommerceCardList from "../../components/CommerceCardList/CommerceCardList";
import { api } from "../../service/api";
import Loading from "../Loading/Loading";


const CommerceProfile = () => {
  const navigate = useNavigate();
  const { idCommerce } = useParams();
  const [commerce, setCommerce] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCommerce = async () => {
      try {
        const response = await api.get(`/comercios/find/${idCommerce}`);
        if (response.data) {
          setCommerce(response.data);
        } else {
          navigate("/404");
        }
      } catch (error) {
        console.error("Erro ao buscar comércio:", error);
        navigate("/404");
      } finally {
        setLoading(false);
      }
    };

    fetchCommerce();
  }, [idCommerce, navigate]);

  if (loading) {
    return <Loading />;
  }

  if (!commerce) {
    return null;
  }
  const handleBack = () => {
    navigate(`/comercio/home/${idCommerce}`);
  };

  const handleEdit = () => {
    navigate(`/comercio/${idCommerce}/meu-perfil/editar`);
  };
  return (
    <>
      <CommerceHeader authenticated={true} />
      <Back onClick={handleBack}>
        <FaArrowLeft size={25} />
      </Back>
      <ProfileContainer>
        <Profile>
          <Img src={commerce.fotoUrl}/>
          <Nome>{commerce.nome}</Nome>
          <Categoria>{commerce.categoria}</Categoria>
          <Row>
            <Column>
            <Button onClick={handleEdit}>Editar perfil</Button>
              <Contato>
                <MdHome size={25} color={"#023047"} />
                {commerce.endereco}
              </Contato>
              <Contato>
                <IoIosPin size={25} color={"#023047"} />
                Cidade
              </Contato>
            </Column>
            <Column>
              <Contato>
                <FaPhoneAlt size={25} color={"#023047"} />
                {commerce.telefone}
              </Contato>
              <Contato>
                <FaWhatsapp size={25} color={"#023047"} />
                WhatsApp
              </Contato>
            </Column>
            <Column>
              <Contato>
                <MdAlternateEmail size={25} color={"#023047"} />
                {commerce.email}
              </Contato>
              <Contato>
                <FaInstagram size={25} color={"#023047"} />
                Instagram
              </Contato>
            </Column>
          </Row>
        </Profile>
      </ProfileContainer>
      <Divisor>
        <Text>Meus panfletos</Text>
      </Divisor>
      <Carousel />

      <Divisor>
        <Text>Minhas ofertas</Text>
      </Divisor>
       <CommerceCardList market={true} />
  
    </>
  );
};

export default CommerceProfile;
