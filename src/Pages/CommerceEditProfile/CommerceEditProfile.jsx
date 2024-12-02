import React from "react";
import CommerceHeader from "../../components/CommerceHeader/CommerceHeader";
import {
  Back,
  Container,
  Column,
  Column2,
  Row,
  Title,
  Button,
  Img,
  LongerInput,
  ShortInput,
  Text4,
  Form,
} from "./style";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
const CommerceEditProfile = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate("/comercio/home");
  };
  return (
    <>
      <CommerceHeader authenticated={true} />
      <Back onClick={handleBack}>
        <FaArrowLeft size={25} />
      </Back>
      <Column>
        <Title>Adicione uma imagem do panfleto</Title>
        <Container>
          <Form>
            <Img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2bCJOs9OsJXgkUDe_pEiYLjY4v8YUKbkdxA&s" />
            <Button>Editar foto</Button>

            <Row>
              <Column2>
                <Text4>Nome do comércio</Text4>
                <LongerInput />
              </Column2>
            </Row>
            <Row>
              <Column2>
                <Text4>Endereço</Text4>
                <LongerInput />
              </Column2>
              <Column2>
                <Text4>Bairro</Text4>
                <ShortInput />
              </Column2>
              <Column2>
                <Text4>CEP</Text4>
                <ShortInput />
              </Column2>
            </Row>
            <Row>
              <Column2>
                <Text4>Telefone fixo</Text4>
                <ShortInput />
              </Column2>
              <Column2>
                <Text4>Telefone celular</Text4>
                <ShortInput />
              </Column2>
              <Column2>
                <Text4>Instagram</Text4>
                <ShortInput />
              </Column2>
              <Column2></Column2>
            </Row>
            <Button>Salvar</Button>
          </Form>
        </Container>
      </Column>
    </>
  );
};

export default CommerceEditProfile;
