import React, { useState } from "react";

import Header from "../../components/Header/Header";
import Logo from "../../components/Logo/Logo";
import Footer from "../../components/Footer/Footer";

import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import {
  LoginContainer,
  ContainerLeft,
  ContainerRight,
  Titulo,
  ButtonLeft,
  ButtonRight,
  Form,
  Input,
  ErrorMessage,
} from "./style";

//Schema de validação
const loginValidation = yup.object().shape({
  email: yup.string().email("Email inválido").required("Campo obrigatório"),
  password: yup
    .string()
    .min(8, "A senha deve ter pelo menos 8 caracteres")
    .required("Campo obrigatório"),
});

const Login = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginValidation),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  
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
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Input
              id="email"
              name="email"
              placeholder="Email"
              type="email"
              className="form-control"
              {...register("email")}
            />
            <ErrorMessage>{errors.email?.message}</ErrorMessage>
            <Input
              id="password"
              name="password"
              placeholder="Senha"
              type="password"
              className="password"
              {...register("password")}
            />
            <ErrorMessage>{errors.password?.message}</ErrorMessage>
            <ButtonRight type="submit">Entrar</ButtonRight>
          </Form>
        </ContainerRight>
      </LoginContainer>
      <Footer />
    </>
  );
};

export default Login;
