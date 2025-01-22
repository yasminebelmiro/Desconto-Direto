import React, { useEffect, useState } from "react";
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
import { useNavigate, useParams } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { api } from "../../service/api";
import Loading from "../Loading/Loading"
const CommerceEditProfile = () => {
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
            <Img src={commerce.fotoUrl} />
            <Button>Editar foto</Button>

            <Row>
              <Column2>
                <Text4>Nome do comércio</Text4>
                <LongerInput value={commerce.nome}/>
              </Column2>
            </Row>
            <Row>
              <Column2>
                <Text4>Endereço</Text4>
                <LongerInput value={commerce.endereco}/>
              </Column2>
              
              <Column2>
                <Text4>Cidade</Text4>
                <ShortInput />
              </Column2>
            </Row>
            <Row>
              <Column2>
                <Text4>Telefone fixo</Text4>
                <ShortInput value={commerce.telefone}/>
              </Column2>
              <Column2>
                <Text4>WhatsApp</Text4>
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
