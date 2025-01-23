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
import Loading from "../Loading/Loading";

const CommerceEditProfile = () => {
  const navigate = useNavigate();
  const { idCommerce } = useParams();
  const [commerce, setCommerce] = useState(null);
  const [loading, setLoading] = useState(true);
  const [nome, setNome] = useState("");
  const [endereco, setEndereco] = useState("");
  const [telefone, setTelefone] = useState("");

  useEffect(() => {
    const fetchCommerce = async () => {
      try {
        const response = await api.get(`/comercios/find/${idCommerce}`);
        if (response.data) {
          setCommerce(response.data);
          setNome(response.data.nome || "");
          setEndereco(response.data.endereco || "");
          setTelefone(response.data.telefone || "");
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

  const OnSubmit = async (event) => {
    event.preventDefault();
    try {
      //Não tem esse endpoint na API
      await api.put(`/comercios/edit/${idCommerce}`, {
        nome,
        endereco,
        telefone,
      });
      alert("Perfil atualizado com sucesso!");
      navigate(`/comercios/${idCommerce}/meu-perfil`);
    } catch (error) {
      console.error(error);
      alert("Erro ao atualizar o perfil. Tente novamente.");
    }
  };

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
          <Form as="form" onSubmit={OnSubmit}>
            <Img src={commerce.fotoUrl} alt="Foto do Comércio" />
            <Button type="button">Editar foto</Button>

            <Row>
              <Column2>
                <Text4>Nome do comércio</Text4>
                <LongerInput
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                />
              </Column2>
            </Row>
            <Row>
              <Column2>
                <Text4>Endereço</Text4>
                <LongerInput
                  value={endereco}
                  onChange={(e) => setEndereco(e.target.value)}
                />
              </Column2>
              <Column2>
                <Text4>Cidade</Text4>
                <ShortInput placeholder="Digite sua cidade" />
              </Column2>
            </Row>
            <Row>
              <Column2>
                <Text4>Telefone fixo</Text4>
                <ShortInput
                  value={telefone}
                  onChange={(e) => setTelefone(e.target.value)}
                />
              </Column2>
              <Column2>
                <Text4>WhatsApp</Text4>
                <ShortInput placeholder="Digite o WhatsApp" />
              </Column2>
            </Row>
            <Button type="submit">Salvar</Button>
          </Form>
        </Container>
      </Column>
    </>
  );
};

export default CommerceEditProfile;
