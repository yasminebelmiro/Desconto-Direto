import React, { useEffect, useState } from "react";
import Logo from "../../components/Logo/Logo";
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
import CostumerHeader from "../../components/CostumerHeader/CostumerHeader";
import { api } from "../../service/api";
import { data } from "framer-motion/client";

// Esquema de validação
const loginValidation = yup.object().shape({
  email: yup.string().email("Email inválido").required("Campo obrigatório"),
  password: yup
    .string()
    .min(8, "A senha deve ter pelo menos 8 caracteres")
    .required("Campo obrigatório"),
});

const PublicLogin = () => {
  const [clientes, setClientes] = useState([]);
  const [comercios, setComercios] = useState([]);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginValidation),
  });


  useEffect(() => {
    const fetch = async () => {
      try {
        const [clientesResponse, comerciosResponse] = await Promise.all([
          api.get("/clientes/all"),
          api.get("/comercios/all"),
        ])
        
        setClientes(clientesResponse.data);
        setComercios(comerciosResponse.data);
        
      } catch (error) {
        console.error("Erro ao buscar clientes:", error);
      }
    };
    fetch();
  }, []);


  const onSubmit = (data) => {
    let usuarioEncontrado = null;

    for (let i = 0; i < clientes.length; i++) {
      if (
        clientes[i].email === data.email &&
        clientes[i].senha === data.password
      ) {
        usuarioEncontrado = { tipo: "cliente", dados: clientes[i] };
        break;
      }
    }

    if (!usuarioEncontrado) {
      for (let i = 0; i < comercios.length; i++) {
        if (
          comercios[i].email === data.email &&
          comercios[i].senha === data.password 
        ) {
          usuarioEncontrado = { tipo: "comercio", dados: comercios[i] };
          break;
        }
      }
    }
    if (usuarioEncontrado) {
      if (usuarioEncontrado.tipo === "cliente") {
        alert("Login de cliente realizado com sucesso!");
       navigate(`/consumidor/home/${usuarioEncontrado.dados.id}`);
      
        
      } else if (usuarioEncontrado.tipo === "comercio") {
        alert("Login de comércio realizado com sucesso!");
        navigate(`/comercio/home/${usuarioEncontrado.dados.id}`);
      }
    } else {
      alert("Email ou senha incorretos.");
    }
    
  };

  const handleRegister = () => {
    navigate("/tipo-cadastro");
  };

  return (
    <>
      <CostumerHeader />
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
    </>
  );
};

export default PublicLogin;
