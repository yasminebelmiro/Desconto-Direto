import React from "react";

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
  ErrorMessage,
} from "./style";
import Logo from "../../components/Logo/Logo";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import CostumerHeader from "../../components/CostumerHeader/CostumerHeader";

const registerSchema = yup.object().shape({
  name: yup.string().required("Campo obrigatório"),
  phone: yup.string().required("Campo obrigatório"),
  cellphone: yup.string().required("Campo obrigatório"),
  adress: yup.string().required("Campo obrigatório"),
  adressNumber: yup.string().required("Campo obrigatório"),
  district: yup.string().required("Campo obrigatório"),
  cep: yup.string().min(6, "O cep deve ter 6 caracteres").required("Campo obrigatório"),
  email: yup.string().email().required("Campo obrigatório"),
  password: yup
    .string()
    .min(8, "A senha deve ter pelo menos 8 caracteres")
    .required("Campo obrigatório"),
  confirmPassword: yup
    .string()
    .required("Campo obrigatório")
    .oneOf(
      [yup.ref("password"), null],
      "As senhas não conferem, tente novamente"
    ),
});

const RegisterMarket = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  const handleLogin = () => {
    navigate("/login");
  };
  return (
    <>
      <CostumerHeader />
      <RegisterContainer>
        <Left>
          <Titulo>Login</Titulo>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <LargeInput
              id="name"
              name="name"
              placeholder="Nome"
              type="text"
              className="name"
              {...register("name")}
            />
            <ErrorMessage> {errors.name?.message} </ErrorMessage>
            <Row>
              <SmallInput
                id="phone"
                name="phone"
                placeholder="Telefone fixo"
                type="text"
                className="phone"
                {...register("phone")}
              />
              <SmallInput
                id="cellphone"
                name="cellphone"
                placeholder="Telefone celular"
                type="text"
                className="cellphone"
                {...register("cellphone")}
              />
            </Row>
            <Row>
              <ErrorMessage> {errors.phone?.message} </ErrorMessage>
              <ErrorMessage> {errors.cellphone?.message} </ErrorMessage>
            </Row>
            <Row>
              <SmallInput
                id="adress"
                name="adress"
                placeholder="Endereço"
                type="text"
                className="adress"
                {...register("adress")}
              />
              <SmallInput
                id="adressNumber"
                name="adressNumber"
                placeholder="N°"
                type="text"
                className="adressNumber"
                {...register("adressNumber")}
              />
            </Row>
            <Row>
              <ErrorMessage> {errors.adress?.message} </ErrorMessage>
              <ErrorMessage> {errors.adressNumber?.message} </ErrorMessage>
            </Row>
            <Row>
              <SmallInput
                id="district"
                name="district"
                placeholder="Bairro"
                type="text"
                className="district"
                {...register("district")}
              />
              <SmallInput
                id="cep"
                name="cep"
                placeholder="CEP"
                type="text"
                className="cep"
                {...register("cep")}
              />
            </Row>
            <Row>
              <ErrorMessage> {errors.district?.message} </ErrorMessage>
              <ErrorMessage> {errors.cep?.message} </ErrorMessage>
            </Row>
            <LargeInput
              id="email"
              name="email"
              placeholder="Email"
              type="email"
              className="email"
              {...register("email")}
            />
             <ErrorMessage> {errors.email?.message} </ErrorMessage>
            <Row>
              <SmallInput
                id="password"
                name="password"
                placeholder="Senha"
                type="password"
                className="password"
                {...register("password")}
              />
              <SmallInput
                id="confirmPassword"
                name="confirmPassword"
                placeholder="Confirme senha"
                type="password"
                className="confirmPassword"
                {...register("confirmPassword")}
              />
            </Row>
            <Row>
            <ErrorMessage> {errors.password?.message} </ErrorMessage>
            <ErrorMessage> {errors.confirmPassword?.message} </ErrorMessage>
            </Row>
            <ButtonLeft type="submit">Cadastrar</ButtonLeft>
          </Form>
        </Left>
        <Right>
          <Logo />
          <ButtonRight onClick={handleLogin}>Entrar</ButtonRight>
        </Right>
      </RegisterContainer>    
    </>
  );
};

export default RegisterMarket;
