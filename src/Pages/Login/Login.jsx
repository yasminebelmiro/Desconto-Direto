import React from "react";
import Header from "../../components/Header/Header";
import InputLogin from "../../components/Input/Input";
import Logo from "../../components/Logo/Logo";
import * as yup from "yup";

import {
  LoginContainer,
  ContainerLeft,
  ContainerRight,
  Titulo,
  ButtonLeft,
  ButtonRight,
  Form,
} from "./style";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer/Footer";

const userSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(8).max(16).required(),
});

const handleSubmit = async (event) => {
  event.preventDefault();
  let formData = {
    email: event.target[0].value,
    password: event.target[1].value,
  };
  const isValid = await userSchema.isValid(formData);
  console.log(isValid);
};

const Login = () => {
  const navigate = useNavigate();

  const handleRegister = () => {
    navigate("/cadastro");
  };

  return (
    <>
      <Header />
      <LoginContainer>
        <ContainerLeft>
          <Logo />
          <ButtonLeft onClick={handleRegister}>Cadastrar</ButtonLeft>
        </ContainerLeft>
        <ContainerRight>
          <Titulo>Login</Titulo>
          <Form onSubmit={handleSubmit}>
            <InputLogin name="email" placeholder="Email" type="email" />
            <InputLogin name="password" placeholder="Senha" type="password" />
            <ButtonRight type="submit">Entrar</ButtonRight>
          </Form>
        </ContainerRight>
      </LoginContainer>
      <Footer />
    </>
  );
};

export default Login;
