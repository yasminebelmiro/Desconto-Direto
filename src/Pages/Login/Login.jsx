import React from "react";
import Header from "../../components/Header/Header";
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
  Input,
} from "./style";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer/Footer";

// TODO: Dar um jeito de retornar mensagens de erro
const userSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(8).max(16).required(),
});

// Validação do form
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

  //Navegação
  const handleRegister = () => {
    navigate("/tipo-cadastro");
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
            <Input name="email" placeholder="Email" type="email" />
            <Input name="password" placeholder="Senha" type="password" />
            <ButtonRight type="submit">Entrar</ButtonRight>
          </Form>
        </ContainerRight>
      </LoginContainer>
      <Footer />
    </>
  );
};

export default Login;
