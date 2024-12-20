import React from "react";
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
import { useNavigate } from "react-router-dom";
import CommerceCardList from "../../components/CommerceCardList/CommerceCardList";


const CommerceProfile = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate("/comercio/home");
  };

  const handleEdit = () => {
    navigate("/comercio/meu-perfil/editar");
  };
  return (
    <>
      <CommerceHeader authenticated={true} />
      <Back onClick={handleBack}>
        <FaArrowLeft size={25} />
      </Back>
      <ProfileContainer>
        <Profile>
          <Img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2bCJOs9OsJXgkUDe_pEiYLjY4v8YUKbkdxA&s" />
          <Nome>Nome comércio</Nome>
          <Categoria>Categoria</Categoria>
          <Row>
            <Column>
            <Button onClick={handleEdit} >Editar perfil</Button>
              <Contato>
                <MdHome size={25} color={"#023047"} />
                Endereço
              </Contato>
              <Contato>
                <IoIosPin size={25} color={"#023047"} />
                Cidade
              </Contato>
            </Column>
            <Column>
              <Contato>
                <FaPhoneAlt size={25} color={"#023047"} />
                Telefone
              </Contato>
              <Contato>
                <FaWhatsapp size={25} color={"#023047"} />
                WhatsApp
              </Contato>
            </Column>
            <Column>
              <Contato>
                <MdAlternateEmail size={25} color={"#023047"} />
                Email
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
