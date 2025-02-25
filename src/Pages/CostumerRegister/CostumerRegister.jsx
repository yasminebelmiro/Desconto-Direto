import React, { useEffect, useState } from "react";

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
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import CostumerHeader from "../../components/CostumerHeader/CostumerHeader";
import { api } from "../../service/api";


// Esquema de validação do formulario
const registerSchema = yup.object().shape({
  name: yup.string().required("Campo obrigatório"),
  cellphone: yup.string().required(),
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

const CostumerRegister = () => {

  const navigate = useNavigate();
  const [newClientes, setNewClientes] = useState();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerSchema),
  });

  // Adiciona clientes na API
  const onSubmit = async (data) => {
    const newUser = {
      nome: data.name,
      telefone: data.cellphone,
      email: data.email,
      senha: data.password,
    }
    
    try {
      const response = await api.post("/clientes/add", newUser);
      setNewClientes(response.data);
    } catch (error) {
      console.error(error)
    }
  };

  useEffect(() => {
    try {
      if(newClientes){
        alert("Cliente cadastrado com sucesso");
        navigate("/login")
      }else{
        
        alert("Erro ao cadastrar cliente");
      }
    } catch (error) {
      
    }
  }, [newClientes, navigate]);

  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <>
      <CostumerHeader />
      <RegisterContainer>
        <Left>
          <Titulo>Cadastro</Titulo>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <LargeInput
              id="name"
              name="name"
              placeholder="Nome completo"
              type="text"
              className="name"
              {...register("name")}
              
            />
            <ErrorMessage> {errors.name?.message} </ErrorMessage>
            <Row>
              <LargeInput
                id="cellphone"
                name="cellphone"
                placeholder="Telefone celular"
                type="text"
                className="cellphone"
                {...register("cellphone")}
                
              />
            </Row>
            <ErrorMessage> {errors.cellphone?.message} </ErrorMessage>
            <LargeInput
              id="email"
              name="email"
              placeholder="Email"
              type="email"
              className="form-control"
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
                placeholder="Confirme a senha"
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

export default CostumerRegister;
