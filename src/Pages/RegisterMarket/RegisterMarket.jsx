import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

import * as yup from "yup";

import {
  RegisterContainer,
  Right,
  Left,
  ButtonRight,
  Titulo,
  Form,
  LargeInput,
  SmallInput,
  ButtonLeft,
  Row,
} from "./style";
import Logo from "../../components/Logo/Logo";
import { useNavigate } from "react-router-dom";

const registerSchema = yup.object().shape({
  nome: yup.string().required(),
  telefone: yup.string().required(),
  celular: yup.string().required(),
  endereco: yup.string().required(),
  numero: yup.string().required(),
  bairro: yup.string().required(),
  cep: yup.string().required(),
  email: yup.string().email().required(),
  senha: yup.string().min(8).max(16).required(),
  confirmeSenha: yup.string().min(8).max(16).required(),
})
// TODO: mensagens de erro e validar se as senhas são iguais
const handleRegister = async (event) => {
  event.preventDefault();
  let formData = {
    nome: event.target[0].value,
    telefone: event.target[1].value,
    celular: event.target[2].value,
    endereco: event.target[3].value,
    numero: event.target[4].value,
    bairro: event.target[5].value,
    cep: event.target[6].value,
    email: event.target[7].value,
    senha: event.target[8].value,
    confirmeSenha: event.target[9].value,
  }
  const isValid = await registerSchema.isValid(formData);
  console.log(isValid);
}

const RegisterMarket = () => {
  const navigate = useNavigate();

  const handleLogin = () =>{
    navigate("/login")
  }
  return (
    <>
      <Header />
      <RegisterContainer>
        <Left>
          <Titulo>Login</Titulo>
          <Form onSubmit={handleRegister}>
            <LargeInput name="nome" placeholder="Nome completo" type="text" />
            <Row>
              <SmallInput name="telefone" placeholder="Telefone fixo" type="text" />
              <SmallInput name="celular" placeholder="Telefone celular" type="text" />
            </Row>
            <Row>
              <SmallInput name="endereco" placeholder="Endereço" type="text" />
              <SmallInput name="numero" placeholder="N°" type="text" />
            </Row>
            <Row>
              <SmallInput name="bairro" placeholder="Bairro" type="text" />
              <SmallInput name="cep" placeholder="CEP" type="text" />
            </Row>
            <LargeInput name="email" placeholder="Email *" type="email" />
            <Row>
            <SmallInput name="senha" placeholder="Senha" type="password" />
            <SmallInput name="confirmeSenha" placeholder="Confirme senha" type="password" />
            </Row>
            <ButtonLeft type="submit">Cadastrar</ButtonLeft>
          </Form>
        </Left>
        <Right>
          <Logo />
          <ButtonRight onClick={handleLogin} >Entrar</ButtonRight>
        </Right>
      </RegisterContainer>
      <Footer />
    </>
  );
};

export default RegisterMarket;
